import { connect } from 'cloudflare:sockets';
import { parseHostPort, pick, shuffle, isIPv4, ipv4ToNat64, toArray } from '../utils.ts';
import {
  OFFICIAL_DIRECT_IPS,
  REGION_PROXYIPS,
  REGION_NEIGHBORS,
  PREFERRED_DOMAINS,
  CMLIU_COLO_PROXY,
  CMLIU_FALLBACK_PROXY,
} from '../config/resources.ts';

/* --------------------------- 反代（ProxyIP）解析 --------------------------- */

/**
 * 根据配置得到本次连接要使用的反代地址列表（已按优先级排序）。
 * 返回 ['host:port', ...]
 */
export function resolveProxyIps(cfg, colo = '') {
  const out = [];

  // 1. 用户/全局自定义反代优先
  const custom = toArray(cfg.customProxyIp);
  if (custom.length) return custom;

  if (cfg.proxyIpMode === 'off') return out;

  if (cfg.proxyIpMode === 'region' && cfg.proxyIpRegion) {
    // 指定地区：同地区 → 邻近地区 → 其他
    // rm=no 时关闭智能匹配，只用该地区本身，不做邻近回退
    const want = String(cfg.proxyIpRegion).toUpperCase();
    const same = REGION_PROXYIPS.filter((p) => p.region.toUpperCase() === want);
    if (cfg.rm === false) {
      for (const p of same) out.push(`${p.domain}:443`);
      return out;
    }
    const near = (REGION_NEIGHBORS[want] || []).flatMap((r) =>
      REGION_PROXYIPS.filter((p) => p.region.toUpperCase() === r),
    );
    const rest = REGION_PROXYIPS.filter(
      (p) => p.region.toUpperCase() !== want && !(REGION_NEIGHBORS[want] || []).includes(p.region),
    );
    for (const p of [...same, ...near, ...rest]) out.push(`${p.domain}:443`);
    return out;
  }

  if (cfg.proxyIpMode === 'custom') return out; // 已由 customProxyIp 覆盖

  // auto：官方直连池 + colo 级反代 + 地区反代 + 优选域名 + 兜底
  if (cfg.enableOfficialIp !== false) {
    for (const ip of shuffle(OFFICIAL_DIRECT_IPS)) out.push(`${ip}:443`);
  }
  if (colo) out.push(`${colo}.${CMLIU_COLO_PROXY}:443`);

  if (cfg.enablePreferredDomain !== false) {
    for (const d of shuffle(PREFERRED_DOMAINS)) out.push(`${d}:443`);
  }
  for (const p of shuffle(REGION_PROXYIPS)) out.push(`${p.domain}:443`);

  if (cfg.backupProxyIp) out.push(cfg.backupProxyIp);
  else out.push(CMLIU_FALLBACK_PROXY);

  return out;
}

/** 解析单个反代条目为 { host, port }，端口缺省时沿用目标端口 */
export function normalizeProxy(entry, fallbackPort) {
  const { host, port } = parseHostPort(entry, null);
  // 兜底域名形如 proxyip.tp1.090227.xyz —— 端口由 .tpN 决定
  // 兜底域名形如 proxyip.tp8443.xxx —— 端口由域名中的 .tpN 决定
  const tp = String(host).match(/\.tp(\d+)/);
  let p = port;
  if (!p && tp) {
    const n = parseInt(tp[1], 10);
    if (n > 1 && n < 65536) p = n;
  }
  return { host, port: p || fallbackPort || 443 };
}

/* ------------------------------ 候选连接列表 ------------------------------ */

/**
 * 构造候选连接序列。
 * 每个候选：{ host, port, via: null | 'socks5' | 'http' | 'https', label }
 */
export function buildCandidates(address, port, cfg, colo = '') {
  const proxyCfg = cfg.__outbound || null;
  const list = [];
  const proxies = resolveProxyIps(cfg, colo);

  const direct = { host: address, port, via: null, label: '直连' };
  const viaProxy = proxyCfg ? { host: address, port, via: proxyCfg.kind, label: `出站代理(${proxyCfg.kind})` } : null;
  const nat64 =
    cfg.nat64 && isIPv4(address)
      ? { host: ipv4ToNat64(address, cfg.nat64), port, via: null, label: 'NAT64' }
      : null;

  const viaList = proxies.slice(0, 6).map((p) => {
    const { host, port: pp } = normalizeProxy(p, port);
    return { host, port: pp, via: null, label: `反代 ${host}` };
  });

  switch (cfg.outboundMode) {
    case 'proxy-first':
      if (viaProxy) list.push(viaProxy);
      list.push(direct, ...viaList);
      if (nat64) list.push(nat64);
      break;
    case 'proxy-only':
      if (viaProxy) list.push(viaProxy);
      break;
    case 'direct-first':
      list.push(direct, ...viaList);
      if (viaProxy) list.push(viaProxy);
      if (nat64) list.push(nat64);
      break;
    default: // auto
      list.push(direct, ...viaList);
      if (viaProxy) list.push(viaProxy);
      if (nat64) list.push(nat64);
  }
  return list;
}

/* ------------------------------ 建立连接 ------------------------------ */

/** 建立一条到远端的 TCP socket（可能经过 SOCKS5 / HTTP CONNECT 隧道） */
export async function openSocket(candidate, cfg) {
  const { host, port, via } = candidate;
  if (!via) return await connect({ hostname: host, port });

  const p = cfg.__outbound;
  if (!p) throw new Error('no outbound proxy configured');
  const sock = await connect({ hostname: p.host, port: p.port, secureTransport: p.kind === 'https' ? 'on' : 'off' });
  if (p.kind === 'socks5') await socks5Handshake(sock, host, port, p);
  else await httpConnectHandshake(sock, host, port, p);
  return sock;
}

async function socks5Handshake(socket, host, port, auth) {
  const w = socket.writable.getWriter();
  const hasAuth = !!(auth.username || auth.password);
  await w.write(new Uint8Array(hasAuth ? [5, 2, 0, 2] : [5, 1, 0]));

  const reader = socket.readable.getReader();
  const resp = await readExactly(reader, 2);
  if (resp[1] === 0x02) {
    // 用户名/口令认证
    const u = new TextEncoder().encode(auth.username || '');
    const pw = new TextEncoder().encode(auth.password || '');
    const buf = new Uint8Array(3 + u.length + pw.length);
    buf[0] = 1;
    buf[1] = u.length;
    buf.set(u, 2);
    buf[2 + u.length] = pw.length;
    buf.set(pw, 3 + u.length);
    await w.write(buf);
    const r2 = await readExactly(reader, 2);
    if (r2[1] !== 0x00) throw new Error('socks5 auth failed');
  } else if (resp[1] !== 0x00) {
    throw new Error('socks5 method not supported');
  }

  // CONNECT 请求：统一用域名型寻址（ATYP=3），规避 VLESS/Trojan 编号差异
  const hb = new TextEncoder().encode(host);
  const req = new Uint8Array(5 + hb.length);
  req[0] = 5;
  req[1] = 1;
  req[2] = 0;
  req[3] = 3;
  req[4] = hb.length;
  req.set(hb, 5);
  const withPort = new Uint8Array(req.length + 2);
  withPort.set(req);
  withPort[req.length] = port >> 8;
  withPort[req.length + 1] = port & 0xff;
  await w.write(withPort);

  const head = await readExactly(reader, 4);
  if (head[1] !== 0x00) throw new Error(`socks5 connect failed: ${head[1]}`);
  let skip = 0;
  if (head[3] === 0x01) skip = 4;
  else if (head[3] === 0x04) skip = 16;
  else if (head[3] === 0x03) {
    const len = await readExactly(reader, 1);
    skip = len[0];
  }
  await readExactly(reader, skip + 2);
  w.releaseLock();
  reader.releaseLock();
}

async function httpConnectHandshake(socket, host, port, auth) {
  const w = socket.writable.getWriter();
  const target = port === 80 ? host : `${host}:${port}`;
  let req = `CONNECT ${target} HTTP/1.1\r\nHost: ${target}\r\n`;
  if (auth.username || auth.password) {
    const cred = btoa(`${auth.username || ''}:${auth.password || ''}`);
    req += `Proxy-Authorization: Basic ${cred}\r\n`;
  }
  req += '\r\n';
  await w.write(new TextEncoder().encode(req));

  const reader = socket.readable.getReader();
  let buf = '';
  const dec = new TextDecoder();
  while (!buf.includes('\r\n\r\n')) {
    const { value, done } = await reader.read();
    if (done) throw new Error('proxy closed');
    buf += dec.decode(value, { stream: true });
    if (buf.length > 4096) break;
  }
  const status = parseInt((buf.match(/^HTTP\/1\.[01] (\d+)/) || [])[1] || '0', 10);
  if (status < 200 || status >= 300) throw new Error(`proxy CONNECT failed: ${status}`);
  w.releaseLock();
  reader.releaseLock();
}

async function readExactly(reader, n) {
  if (n <= 0) return new Uint8Array(0);
  const chunks = [];
  let got = 0;
  while (got < n) {
    const { value, done } = await reader.read();
    if (done) throw new Error('unexpected EOF');
    chunks.push(value);
    got += value.length;
  }
  const out = new Uint8Array(got);
  let off = 0;
  for (const c of chunks) {
    out.set(c, off);
    off += c.length;
  }
  return out.slice(0, n);
}

export function closeSocket(socket) {
  try {
    socket.close();
  } catch { /* ignore */ }
}

/** 随机取一个反代地址（供订阅生成写进节点） */
export function pickProxyIp(cfg, colo = '') {
  const list = resolveProxyIps(cfg, colo);
  return list.length ? normalizeProxy(pick(list) || list[0], 443) : null;
}
