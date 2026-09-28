import { connect } from 'cloudflare:sockets';
import { safeFetch, withTimeout } from '../utils.ts';
import { hasKV } from '../config/store.ts';
import { resolveProxyIps, normalizeProxy } from './transport.ts';
import { fetchOnlinePreferred } from './preferred.ts';
import { ONLINE_PREFERRED_API } from '../config/resources.ts';

/**
 * 服务端自检：逐环节验证 Worker 自身的能力。
 * 客户端连不上时，用它可以判断是「Worker 出站有问题」还是「你的网络到 Cloudflare 有问题」。
 */
export async function runSelfTest(env, cfg, colo = '', host = '') {
  const out = {
    time: new Date().toISOString(),
    worker: { host, colo, runtime: typeof navigator !== 'undefined' && navigator.userAgent ? navigator.userAgent : 'unknown' },
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
  };

  // 1. KV 读写
  await push(out, 'KV 绑定', async () => {
    if (!hasKV(env)) throw new Error('未绑定 KV 命名空间');
    return out.storage.info;
  });

  // 2. Worker 出站 TCP（cloudflare:sockets）
  await push(out, 'Worker 出站 TCP → example.com:80', async () => {
    const t0 = Date.now();
    const socket = connect({ hostname: 'example.com', port: 80 });
    await withTimeout(socket.opened, 6000, '建连超时');
    const writer = socket.writable.getWriter();
    await writer.write(new TextEncoder().encode('GET / HTTP/1.0\r\nHost: example.com\r\n\r\n'));
    const reader = socket.readable.getReader();
    const { value } = await withTimeout(reader.read(), 8000, '读超时');
    const head = new TextDecoder().decode(value.slice(0, 40));
    try { writer.releaseLock(); reader.releaseLock(); socket.close(); } catch { /* ignore */ }
    return `${Date.now() - t0}ms · 响应头「${head.split('\r\n')[0]}」`;
  });

  // 3. Worker 出站 HTTPS
  await push(out, 'Worker 出站 HTTPS → cloudflare', async () => {
    const t0 = Date.now();
    const res = await safeFetch('https://www.cloudflare.com/cdn-cgi/trace', {}, 8000);
    if (!res || !res.ok) throw new Error(`HTTP ${res ? res.status : 'failed'}`);
    await res.text();
    return `${Date.now() - t0}ms`;
  });

  // 4. 在线优选接口
  await push(out, `在线优选接口 → ${ONLINE_PREFERRED_API}`, async () => {
    const list = await fetchOnlinePreferred({ ...cfg, enablePreferredIp: true });
    if (!list.length) throw new Error('未返回任何 IP（可能签名不被支持或接口不可达）');
    return `返回 ${list.length} 个 IP，示例 ${list.slice(0, 3).map((x) => x.ip).join(', ')}`;
  });

  // 5. 反代地址解析
  await push(out, '反代地址解析', async () => {
    const list = resolveProxyIps(cfg, colo).slice(0, 6).map((e) => {
      const n = normalizeProxy(e, 443);
      return `${n.host}:${n.port}`;
    });
    if (!list.length) return '当前设置下不使用反代';
    return list.join(' ');
  });

  out.summary = out.checks.every((c) => c.ok)
    ? '服务端全部正常。若客户端仍连不上，问题在「你的网络 → Cloudflare 边缘」这一段。'
    : '服务端存在失败项，请把本页内容反馈。';
  return out;
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
