import { connect } from 'cloudflare:sockets';
import { safeFetch, withTimeout } from '../utils.ts';
import { hasKV } from '../config/store.ts';
import { resolveProxyIps, normalizeProxy, buildCandidates } from './transport.ts';
import { fetchOnlinePreferred, isCloudflareIpv4 } from './preferred.ts';
import { ONLINE_PREFERRED_API } from '../config/resources.ts';

/**
 * 服务端自检：逐环节验证 Worker 自身的能力，用于定位「节点连不上」断在哪一环。
 *
 * 重要背景：Cloudflare 禁止 Worker 的 connect() 连接
 *   Cloudflare 自己的 IP、localhost、内网 IP。
 * 因此「Worker 出站 TCP → Cloudflare IP」失败是预期行为，
 * 而反代地址也必须是 Cloudflare 之外的主机才能真正生效。
 */
export async function runSelfTest(env, cfg, colo = '', host = '') {
  const out = {
    time: new Date().toISOString(),
    worker: { host, colo },
    storage: { bound: hasKV(env) },
    config: {
      uuid: cfg.uuid || '',
      trojanPassword: cfg.trojanPassword ? '已设置（独立于 UUID）' : '未设置（等于 UUID）',
      mode: cfg.mode,
      ports: cfg.ports,
      path: cfg.path,
      hosts: cfg.hosts || '（用当前域名）',
      fp: cfg.fp,
      enableEarlyData: cfg.enableEarlyData,
      proxyIpMode: cfg.proxyIpMode,
      proxyIpRegion: cfg.proxyIpRegion || '',
      customProxyIp: cfg.customProxyIp || '',
      outboundProxy: cfg.outboundProxy ? '已配置' : '未配置',
      outboundMode: cfg.outboundMode,
      userCount: Array.isArray(cfg.users) ? cfg.users.length : 0,
      schemaVersion: cfg.schemaVersion,
    },
    checks: [],
    outboundProbes: [],
    proxyProbes: [],
  };

  await push(out, 'KV 绑定', async () => {
    if (!hasKV(env)) throw new Error('未绑定 KV 命名空间');
    return 'KV 已绑定';
  });

  // ---- Worker 出站 TCP 多目标探测 ----
  // 关键：Cloudflare 会拒绝连接它自己的 IP，所以必须用非 Cloudflare 目标来判断出站是否可用
  const targets = [
    { label: '非 CF · www.baidu.com:80', host: 'www.baidu.com', port: 80, expectBlocked: false },
    { label: '非 CF · www.qq.com:80', host: 'www.qq.com', port: 80, expectBlocked: false },
    { label: '非 CF · www.163.com:443', host: 'www.163.com', port: 443, expectBlocked: false },
    { label: 'CF · 1.1.1.1:443', host: '1.1.1.1', port: 443, expectBlocked: true },
    { label: 'CF · example.com:80', host: 'example.com', port: 80, expectBlocked: true },
  ];
  for (const t of targets) {
    out.outboundProbes.push(await probeTcp(t));
  }
  const usable = out.outboundProbes.filter((p) => p.ok && !p.expectBlocked);
  await push(out, 'Worker 出站 TCP（非 Cloudflare 目标）', async () => {
    if (!usable.length) {
      throw new Error('全部失败 —— Worker 无法对外发起 TCP 连接，代理功能无法工作');
    }
    return `可用 ${usable.length}/${out.outboundProbes.filter((p) => !p.expectBlocked).length} · 最快 ${Math.min(...usable.map((p) => p.ms))}ms`;
  });

  // ---- Worker 出站 HTTPS ----
  await push(out, 'Worker 出站 HTTPS → cloudflare', async () => {
    const t0 = Date.now();
    const res = await safeFetch('https://www.cloudflare.com/cdn-cgi/trace', {}, 8000);
    if (!res || !res.ok) throw new Error(`HTTP ${res ? res.status : 'failed'}`);
    await res.text();
    return `${Date.now() - t0}ms`;
  });

  // ---- 在线优选接口 ----
  await push(out, '在线优选接口', async () => {
    const list = await fetchOnlinePreferred({ ...cfg, enablePreferredIp: true });
    if (!list.length) throw new Error('未返回任何 IP（签名不支持或接口不可达）');
    return `返回 ${list.length} 个 IP，示例 ${list.slice(0, 3).map((x) => x.ip).join(', ')}`;
  });

  // ---- 反代地址逐个探测 ----
  // 只有非 Cloudflare 的主机才能被 Worker 连出去，这里把能用的挑出来
  const proxyList = resolveProxyIps(cfg, colo).slice(0, 6);
  for (const entry of proxyList) {
    const { host: ph, port: pp } = normalizeProxy(entry, 443);
    const isCf = isCloudflareIpv4(ph);
    let resolvedToCf = false;
    let resolvedIps = [];
    if (!isCf) {
      try {
        // 通过 DNS over HTTPS 判断域名最终是否落在 Cloudflare（是则 Worker 必然连不上）
        const r = await safeFetch(`https://1.1.1.1/dns-query?name=${encodeURIComponent(ph)}&type=A`, {
          headers: { accept: 'application/dns-json' },
        }, 5000);
        if (r && r.ok) {
          const j = await r.json();
          resolvedIps = (j.Answer || []).filter((a) => a.type === 1).map((a) => a.data);
          resolvedToCf = resolvedIps.length > 0 && resolvedIps.every((ip) => isCloudflareIpv4(ip));
        }
      } catch { /* 解析失败则按可用来试 */ }
    } else {
      resolvedIps = [ph];
    }
    const probe = await probeTcp({ label: `${ph}:${pp}`, host: ph, port: pp, expectBlocked: isCf || resolvedToCf });
    probe.isCloudflare = isCf || resolvedToCf;
    probe.resolved = resolvedIps.length ? resolvedIps.join(', ') : '（未解析到 A 记录）';
    out.proxyProbes.push(probe);
  }
  await push(out, '反代地址可用性', async () => {
    if (!out.proxyProbes.length) return '当前设置下不使用反代（仅直连）';
    const good = out.proxyProbes.filter((p) => p.ok && !p.isCloudflare);
    if (!good.length) {
      return `0/${out.proxyProbes.length} 可用 —— 这些反代地址都落在 Cloudflare 上，Worker 无法连接。` +
        '建议改用非 Cloudflare 的自建反代，或把反代模式设为「关闭」，只走直连。';
    }
    return `可用 ${good.length}/${out.proxyProbes.length}：${good.slice(0, 3).map((p) => p.label).join(' ')}`;
  });

  // ---- 当前分享节点示例 ----
  await push(out, '当前节点地址示例', async () => {
    const cands = buildCandidates('example.com', 443, cfg, colo).slice(0, 4).map((c) => c.label);
    return cands.join(' → ');
  });

  const fatal = out.checks.filter((c) => !c.ok);
  out.summary = fatal.length
    ? `服务端存在 ${fatal.length} 个失败项：${fatal.map((c) => c.name).join('、')}`
    : '服务端全部正常。若客户端仍连不上，问题在「你的网络 → Cloudflare 边缘」这一段。';

  // 服务端正常但节点全不可用时，最可能的两种情况：
  // 1) *.workers.dev 的 SNI 被网络阻断（换 IP 无效，必须绑自定义域名）
  // 2) 反代候选全落在 Cloudflare 上，Worker 无法连接
  const isWorkersDev = /\.workers\.dev$/i.test(host);
  const proxyAllBad = out.proxyProbes.length > 0 && !out.proxyProbes.some((p) => p.ok && !p.isCloudflare);

  out.diagnosis = {
    isWorkersDev,
    proxyAllBad,
    items: [],
  };

  if (!fatal.length && isWorkersDev) {
    out.diagnosis.items.push({
      level: 'warn',
      title: '最可能的原因：*.workers.dev 被网络阻断',
      detail:
        '所有节点的 SNI 都是这个 workers.dev 域名。只要该域名的 TLS 握手被阻断，' +
        '无论把节点地址换成哪个 Cloudflare IP 都一样连不上（30 个全 -1 就是这个特征）。' +
        '可以在你自己的客户端机器上直连验证：开一个命令行执行 ' +
        `curl -v --noproxy "*" https://${host}/ 如果报 TLS 错误或超时，就确诊了。`,
      fix:
        '解决办法：给这个 Worker 绑定一个自定义域名（你自己的域名，或免费的 eu.org 等），' +
        '然后在「⚙️ 基本设置 → 多域名」里填入该域名并保存，订阅会自动改用新域名作为 SNI/Host。',
    });
  }
  if (proxyAllBad) {
    out.diagnosis.items.push({
      level: 'info',
      title: '反代地址全部落在 Cloudflare 上',
      detail: 'Cloudflare 禁止 Worker 的 connect() 连接它自己的 IP，这些反代候选永远无法生效。',
      fix: '建议在「🧩 高级设置 → 反代」把模式改为「关闭（仅直连）」，让 Worker 直接连接目标站点；' +
        '或填入一个你自己的、非 Cloudflare 的 socks5/http 出站代理。',
    });
  }
  if (out.config.enableEarlyData) {
    out.diagnosis.items.push({
      level: 'warn',
      title: '0-RTT Early Data 处于开启状态',
      detail: 'Cloudflare Workers 返回 101 时不回显 Sec-WebSocket-Protocol，部分客户端会握手失败。',
      fix: '建议到「⚙️ 基本设置」关闭「启用 0-RTT Early Data」。',
    });
  }

  return out;
}

/** 探测一次 TCP 出站连接，区分「预期被拒」与「真正失败」 */
async function probeTcp({ label, host, port, expectBlocked }) {
  const t0 = Date.now();
  let socket = null;
  try {
    socket = connect({ hostname: host, port });
    await withTimeout(socket.opened, 6000, '建连超时');
    const w = socket.writable.getWriter();
    if (port === 80) {
      await w.write(new TextEncoder().encode(`HEAD / HTTP/1.0\r\nHost: ${host}\r\n\r\n`));
    }
    try { w.releaseLock(); } catch { /* ignore */ }
    return { label, ok: true, ms: Date.now() - t0, expectBlocked: !!expectBlocked, note: '出站连通' };
  } catch (e) {
    const msg = e && e.message ? e.message : String(e);
    return {
      label,
      ok: false,
      ms: Date.now() - t0,
      expectBlocked: !!expectBlocked,
      note: expectBlocked ? '被 Cloudflare 拒绝（符合预期）' : msg.slice(0, 160),
    };
  } finally {
    if (socket) { try { socket.close(); } catch { /* ignore */ } }
  }
}

async function push(out, name, fn) {
  const t0 = Date.now();
  try {
    const detail = await fn();
    out.checks.push({ name, ok: true, detail: detail || 'OK', ms: Date.now() - t0 });
  } catch (e) {
    out.checks.push({ name, ok: false, detail: e && e.message ? e.message : String(e), ms: Date.now() - t0 });
  }
}
