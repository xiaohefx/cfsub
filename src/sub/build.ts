import { collectPreferredIps, collectPreferredDomains, parsePorts, isTlsPort } from '../core/preferred.ts';
import { sha224Hex } from '../core/protocol.ts';
import { toArray, b64Encode } from '../utils.ts';
import { TLS_PORTS } from '../config/resources.ts';

/* --------------------------- 节点命名 --------------------------- */

const NAME_TAGS = ['{USER}', '{PORT}', '{PROTOCOL}', '{PREFIX}', '{IP}', '{IP_NAME}', '{HOST}', '{DATE}', '{INDEX}'];

export function validateNameStrategy(tpl) {
  if (!tpl) return null;
  const found = tpl.match(/\{[A-Z_]+\}/g) || [];
  return found.find((t) => !NAME_TAGS.includes(t)) || null;
}

const STRATEGIES = {
  default: '{PREFIX}-{INDEX}',
  'prefix-user-port': '{PREFIX}-{USER}-{PORT}',
  'type-user-port': '{PROTOCOL}-{USER}-{PORT}',
  'user-port': '{USER}-{PORT}',
  'ip': '{IP_NAME}-{PORT}',
  'host-port-user': '{HOST}-{PORT}-{USER}',
};

function renderName(tpl, ctx) {
  return String(tpl).replace(/\{[A-Z_]+\}/g, (tag) => {
    switch (tag) {
      case '{USER}': return ctx.user || 'CFSub';
      case '{PORT}': return String(ctx.port || '');
      case '{PROTOCOL}': return (ctx.protocol || '').toUpperCase();
      case '{PREFIX}': return ctx.prefix || 'CFSub';
      case '{IP}': return ctx.address || '';
      case '{IP_NAME}': return ctx.ipName || ctx.address || '';
      case '{HOST}': return ctx.host || '';
      case '{DATE}': return new Date().toISOString().slice(0, 10);
      case '{INDEX}': return String(ctx.index || 1).padStart(2, '0');
      default: return tag;
    }
  });
}

/* --------------------------- Profile --------------------------- */

/** 返回可生成订阅的 profile 列表 */
export function getProfiles(cfg, subName = '') {
  const list = [];
  const main = {
    id: 'default',
    uuid: cfg.uuid,
    password: cfg.trojanPassword || cfg.uuid,
    name: cfg.name || '默认',
    status: 'active',
    maxConfigs: cfg.maxConfigs ?? null,
    proxyIp: '',
    cleanIp: '',
    ports: '',
    mode: '',
    limitTotalGb: cfg.limitTotalGb ?? null,
    limitDailyGb: cfg.limitDailyGb ?? null,
    expiryMs: null,
    isMain: true,
  };
  list.push(main);

  for (const u of cfg.users || []) {
    if (!u.uuid) continue;
    if (u.status === 'paused' || u.status === 'disabled') continue;
    if (u.expiryMs && Date.now() > u.expiryMs) continue;
    list.push({ ...u, password: u.password || u.uuid });
  }

  if (subName) {
    const want = String(subName).trim();
    // 主 profile 的别名：面板名称改过之后，「默认」这类旧链接仍然要能命中
    const isMainAlias = ['默认', 'default', 'main', 'master'].includes(want.toLowerCase())
      || want === '默认';
    const hit = list.find((p) => p.name === want || p.id === want || p.uuid === want);
    if (hit) return [hit];
    if (isMainAlias) return [main];
    // 没有任何具名用户时，任何 sub 都回落到主 profile，避免链接突然失效
    const named = (cfg.users || []).filter((u) => u.uuid);
    if (!named.length) return [main];
    return [];
  }
  // 无 sub 参数时：若有多个用户则只返回默认（避免泄露他人节点）
  return [main];
}

/* --------------------------- 节点构建 --------------------------- */

/**
 * 为一个 profile 生成节点对象数组。
 * 每个节点：{ type, address, port, uuid, password, host, path, sni, fp, alpn, tls, name, proxyIp }
 */
export async function buildNodes(profile, cfg, host, opts = {}) {
  const max = profile.maxConfigs || cfg.maxConfigs || 30;
  const ports = parsePorts(profile.ports || cfg.ports, [443]);
  const hosts = toArray(cfg.hosts).length ? toArray(cfg.hosts) : [host];

  // 地址池：优选 IP + 优选域名（collectPreferredIps 内部已剔除非 Cloudflare 地址）
  let addrs = [];
  if (cfg.enablePreferredIp !== false || cfg.customPreferred || cfg.cleanIps) {
    addrs = await collectPreferredIps(cfg, Math.max(6, max));
  }
  const domains = cfg.enablePreferredDomain !== false ? await collectPreferredDomains(cfg, 4) : [];
  // 第一个地址固定用 Worker 自己的域名：这是最稳的一条（等价于普通订阅），
  // 保证即使所有优选源都不可用，也至少有一个能直连成功的节点。
  const selfHost = { ip: hosts[0], port: ports[0], name: '主域名' };
  const pool = [selfHost, ...addrs, ...domains];

  // 反代覆盖：写进节点 path，让服务端按节点使用指定反代（cfnew 的 p / wk 思路）
  const nodeProxyIp = String(profile.proxyIp || cfg.customProxyIp || '').trim();
  const nodeRegion =
    cfg.proxyIpMode === 'region' && cfg.proxyIpRegion ? String(cfg.proxyIpRegion).toUpperCase() : '';

  const modes = [];
  if (profile.mode) modes.push(profile.mode);
  else if (cfg.mode === 'all') modes.push('vless', 'trojan', 'xhttp');
  else if (cfg.mode === 'both') modes.push('vless', 'trojan');
  else modes.push(cfg.mode || 'vless');
  const protocols = [...new Set(modes)].filter(Boolean);

  const nodes = [];
  let index = 0;
  const tpl = STRATEGIES[cfg.nameStrategy] || (cfg.nameStrategy && cfg.nameStrategy.includes('{') ? cfg.nameStrategy : STRATEGIES.default);
  const path = normalizePath(cfg.path || '/');
  const seen = new Set();

  for (const protocol of protocols) {
    const usablePorts = protocol === 'xhttp' ? ports.filter((p) => isTlsPort(p)) : ports;
    if (!usablePorts.length) continue;
    const usePool = pool.length ? pool : [{ ip: hosts[0], port: usablePorts[0], name: '默认' }];
    // 地址 × 端口 交叉分配，保证生成的节点尽量不重复
    for (let i = 0; i < max; i++) {
      const entry = usePool[i % usePool.length];
      const address = entry.ip;
      const nodePort = (entry.port && entry.port !== 443 ? entry.port : null) || usablePorts[Math.floor(i / usePool.length) % usablePorts.length];
      const key = `${protocol}|${address}|${nodePort}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const sniHost = hosts[i % hosts.length];
      index++;
      nodes.push({
          type: protocol,
          address,
          port: nodePort,
          uuid: profile.uuid,
          password: profile.password,
          host: sniHost,
          path,
          sni: sniHost,
          fp: cfg.fp || 'chrome',
          alpn: cfg.alpn || '',
          tls: isTlsPort(nodePort),
          ech: cfg.ech ? cfg.echDomain : '',
          echDns: cfg.echDns,
          allowInsecure: !!cfg.allowInsecure,
          earlyData: cfg.enableEarlyData !== false,
          proxyIp: nodeProxyIp,
          region: nodeRegion,
          name: renderName(tpl, {
            user: profile.name || 'CFSub',
            port: nodePort,
            protocol,
            prefix: cfg.namePrefix || 'CFSub',
            address,
            ipName: entry.name || address,
            host: sniHost,
            index,
          }),
        });
    }
  }
  return nodes.slice(0, max * Math.max(1, protocols.length));
}

export function normalizePath(p) {
  let s = String(p || '/').trim();
  if (!s.startsWith('/')) s = '/' + s;
  return s;
}

/* --------------------------- URI 生成 --------------------------- */

export function xhttpPath(uuid) {
  return '/' + String(uuid).slice(0, 8);
}

/**
 * 构造节点路径。
 * - ?ed=2560        ：0-RTT 早期数据，服务端通过 sec-websocket-protocol 读取
 * - ?proxyip=xxx    ：指定该节点使用的反代地址（服务端会解析）
 * - ?wk=XX          ：指定该节点使用的反代地区（服务端按地区表解析）
 * 与 cfnew / edgetunnel 保持一致。
 */
export function buildNodePath(node) {
  const base = node.type === 'xhttp' ? xhttpPath(node.uuid) : normalizePath(node.path || '/');
  const params = [];
  if (node.earlyData) params.push('ed=2560');
  // 不额外编码：queryOf 会对整个 path 做一次 encodeURIComponent，
  // 这里再编码会导致 : 变成 %253A，依赖客户端解码次数，不可靠
  if (node.proxyIp) params.push(`proxyip=${node.proxyIp}`);
  else if (node.region) params.push(`wk=${node.region}`);
  if (!params.length) return base;
  return base + (base.includes('?') ? '&' : '?') + params.join('&');
}

function queryOf(node) {
  const q = [];
  const pathValue = encodeURIComponent(buildNodePath(node));
  const sni = node.sni || node.host;
  if (node.type === 'vless') {
    q.push('encryption=none');
    q.push(`security=${node.tls ? 'tls' : 'none'}`);
    if (node.alpn) q.push(`alpn=${encodeURIComponent(node.alpn)}`);
    q.push(`fp=${node.fp}`);
    q.push(`type=ws`);
    q.push(`host=${node.host}`);
    q.push(`sni=${sni}`);
    q.push(`path=${pathValue}`);
    if (node.ech) q.push(`ech=${encodeURIComponent(node.ech)}`);
    if (node.allowInsecure) q.push('allowInsecure=1');
  } else if (node.type === 'trojan') {
    q.push(`security=${node.tls ? 'tls' : 'none'}`);
    if (node.alpn) q.push(`alpn=${encodeURIComponent(node.alpn)}`);
    q.push(`fp=${node.fp}`);
    q.push(`type=ws`);
    q.push(`host=${node.host}`);
    q.push(`sni=${sni}`);
    q.push(`path=${pathValue}`);
    if (node.ech) q.push(`ech=${encodeURIComponent(node.ech)}`);
    if (node.allowInsecure) q.push('allowInsecure=1');
  } else if (node.type === 'xhttp') {
    q.push('encryption=none');
    q.push('security=tls');
    q.push(`type=xhttp`);
    q.push(`mode=stream-one`);
    q.push(`host=${node.host}`);
    q.push(`sni=${sni}`);
    q.push(`path=${pathValue}`);
    if (node.alpn) q.push(`alpn=${encodeURIComponent(node.alpn)}`);
    q.push(`fp=${node.fp}`);
  }
  return q.join('&');
}

export function nodeToUri(node) {
  const q = queryOf(node);
  const name = encodeURIComponent(node.name);
  if (node.type === 'trojan') {
    return `trojan://${encodeURIComponent(node.password)}@${fmtAddr(node.address)}:${node.port}?${q}#${name}`;
  }
  if (node.type === 'xhttp') {
    return `vless://${node.uuid}@${fmtAddr(node.address)}:${node.port}?${q}#${name}`;
  }
  return `vless://${node.uuid}@${fmtAddr(node.address)}:${node.port}?${q}#${name}`;
}

function fmtAddr(a) {
  return String(a).includes(':') && !String(a).startsWith('[') ? `[${a}]` : a;
}

/** base64 明文订阅 */
export function buildUriProfile(nodes) {
  return b64Encode(nodes.map(nodeToUri).join('\n'));
}

export function trojanHashHex(password) {
  return sha224Hex(password);
}

export { TLS_PORTS };
