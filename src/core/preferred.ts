import { safeFetch, toLines, toArray, parseHostPort, isIPv4, shuffle, md5HexOrNull } from '../utils.ts';
import { dohResolve } from './dns.ts';
import {
  BUILTIN_PREFERRED_SOURCES,
  PREFERRED_DOMAINS,
  FALLBACK_CIDR,
  ISP_LABELS,
  TLS_PORTS,
  NAT64_PREFIXES,
  OFFICIAL_DIRECT_IPS,
  CF_IPV4_RANGES,
  ONLINE_PREFERRED_API,
  ONLINE_API_SEED,
  ONLINE_API_SALT,
  ONLINE_ISP_GROUPS,
} from '../config/resources.ts';

/* ---------------------- Cloudflare 官方网段校验 ---------------------- */

function ipv4ToInt(ip) {
  const p = ip.split('.').map(Number);
  return (((p[0] << 24) | (p[1] << 16) | (p[2] << 8) | p[3]) >>> 0);
}

const CF_RANGE_TABLE = CF_IPV4_RANGES.map((cidr) => {
  const [base, len] = cidr.split('/');
  const mask = (0xffffffff << (32 - Number(len))) >>> 0;
  return { net: ipv4ToInt(base) & mask, mask };
});

/** 判断 IPv4 是否属于 Cloudflare 官方网段 */
export function isCloudflareIpv4(ip) {
  if (!isIPv4(ip)) return false;
  const n = ipv4ToInt(ip);
  return CF_RANGE_TABLE.some((r) => (n & r.mask) === r.net);
}

/* --------------------------- CIDR → 随机 IP --------------------------- */

function randomIpFromCidr(cidr) {
  const [base, plen] = String(cidr).split('/');
  const prefix = parseInt(plen, 10);
  if (!isIPv4(base) || !(prefix > 0 && prefix < 32)) return null;
  const hostBits = 32 - prefix;
  const ipInt = base.split('.').reduce((a, p, i) => a | (parseInt(p, 10) << (24 - i * 8)), 0) >>> 0;
  const mask = (0xffffffff << hostBits) >>> 0;
  const offset = Math.floor(Math.random() * Math.pow(2, hostBits));
  const ip = (((ipInt & mask) >>> 0) + offset) >>> 0;
  return [(ip >>> 24) & 0xff, (ip >>> 16) & 0xff, (ip >>> 8) & 0xff, ip & 0xff].join('.');
}

/* --------------------- 在线优选接口（cfnew 方案） --------------------- */

const onlineCache = { at: 0, val: [] };
const ONLINE_TTL = 5 * 60 * 1000;

/**
 * 从 cfnew 使用的在线接口拉取实测可用的 Cloudflare 优选 IP。
 * 返回 [{ ip, port, name, isp }]
 */
export async function fetchOnlinePreferred(cfg) {
  if (onlineCache.val.length && Date.now() - onlineCache.at < ONLINE_TTL) return onlineCache.val;
  try {
    const ts = String(Date.now());
    const inner = await md5HexOrNull(ONLINE_API_SEED);
    if (!inner) return onlineCache.val; // 运行时不支持 MD5，跳过在线接口
    const key = await md5HexOrNull(inner + ONLINE_API_SALT + ts);
    if (!key) return onlineCache.val;
    const res = await safeFetch(`${ONLINE_PREFERRED_API}?key=${key}&time=${ts}`, {
      headers: { 'User-Agent': 'Mozilla/5.0', accept: 'application/json' },
    }, 8000);
    if (!res || !res.ok) return onlineCache.val;

    const j = await res.json();
    const data = j && j.data;
    if (!data) return onlineCache.val;

    const wantV6 = cfg?.enablePreferredIPv6 === true;
    const out = [];
    for (const [group, label] of Object.entries(ONLINE_ISP_GROUPS)) {
      const isV6 = group === 'ipv6';
      if (isV6 && !wantV6) continue;
      const info = data[group] && Array.isArray(data[group].info) ? data[group].info : [];
      for (const item of info) {
        const ip = String(item?.ip || '').trim();
        if (!ip) continue;
        if (!isV6 && !isCloudflareIpv4(ip)) continue; // 兜底：确保是 Cloudflare 地址
        out.push({ ip, port: 443, name: `${label}优选`, isp: group });
      }
    }
    if (out.length) {
      onlineCache.at = Date.now();
      onlineCache.val = out;
    }
    return out;
  } catch {
    return onlineCache.val;
  }
}

/* --------------------------- 远程优选源 --------------------------- */

const sourceCache = new Map();
const SOURCE_TTL = 10 * 60 * 1000;

async function fetchSource(url) {
  const hit = sourceCache.get(url);
  if (hit && Date.now() - hit.at < SOURCE_TTL) return hit.val;
  const res = await safeFetch(url, { headers: { 'user-agent': 'CFSub/1.0' } }, 8000);
  if (!res || !res.ok) return [];
  const text = await res.text();
  const lines = toLines(text).filter((l) => !l.startsWith('#'));
  sourceCache.set(url, { at: Date.now(), val: lines });
  return lines;
}

/** 解析 「IP:端口#备注」 / 「IP#备注」 / 「IP」 */
function parseEntry(line, defaultPort = 443) {
  const s = String(line).trim();
  if (!s || s.startsWith('//')) return null;
  const hash = s.indexOf('#');
  const addrPart = hash >= 0 ? s.slice(0, hash) : s;
  const name = hash >= 0 ? s.slice(hash + 1).trim() : '';
  const { host, port } = parseHostPort(addrPart, null);
  if (!host) return null;
  return { ip: host, port: port || defaultPort, name };
}

/* --------------------------- 主入口 --------------------------- */

/**
 * 汇总所有优选 IP。
 * 返回 [{ ip, port, name }]
 *
 * 优先级：自定义 > Clean IP > 在线实测接口 > CIDR 随机（过白名单）> 内置官方直连池
 */
export async function collectPreferredIps(cfg, limit = 12) {
  const out = [];
  const seen = new Set();
  const push = (e) => {
    if (!e || !e.ip) return;
    if (isIPv4(e.ip) && !isCloudflareIpv4(e.ip)) return; // 丢弃非 Cloudflare 的 IPv4
    const k = `${e.ip}:${e.port}`;
    if (seen.has(k)) return;
    seen.add(k);
    out.push(e);
  };

  // 1. 自定义优选列表（最高优先级）
  if (cfg.customPreferred) {
    for (const line of toLines(cfg.customPreferred)) push(parseEntry(line));
  }

  // 2. Clean IP
  if (cfg.cleanIps) {
    for (const ip of toArray(cfg.cleanIps)) push({ ip, port: 443, name: 'CleanIP' });
  }

  // 3. 内置官方直连池：零外部依赖，必定是真实 Cloudflare 边缘 IP（cfnew v3.0 的默认策略）
  const official = cfg.enableOfficialIp !== false ? shuffle(officialDirectIps()) : [];

  // 4. 在线实测优选接口（cfnew 方案，返回按运营商分组的真实 Cloudflare IP）
  let online = [];
  if (cfg.enablePreferredIp !== false) {
    online = shuffle(await fetchOnlinePreferred(cfg));
  }

  // 5. 远程 CIDR 源（结果需过 Cloudflare 白名单，非 Cloudflare 段直接丢弃）
  let cidrIps = [];
  if (cfg.enableRemotePreferred !== false) {
    const urls = [...toArray(cfg.preferredUrls), ...BUILTIN_PREFERRED_SOURCES.map((s) => s.url)];
    const results = await Promise.allSettled(urls.slice(0, 4).map(fetchSource));
    results.forEach((r, i) => {
      if (r.status !== 'fulfilled') return;
      const src = BUILTIN_PREFERRED_SOURCES.find((s) => s.url === urls[i]);
      const label = src ? `${ISP_LABELS[src.isp] || ''}优选` : '优选';
      for (const line of shuffle(r.value).slice(0, Math.ceil(limit / 2))) {
        if (line.includes('/')) {
          const ip = randomIpFromCidr(line);
          if (ip) cidrIps.push({ ip, port: 443, name: label });
        } else {
          const e = parseEntry(line);
          if (e) cidrIps.push({ ...e, name: e.name || label });
        }
      }
    });
  }

  // 6. 最后兜底：从默认 CIDR 生成（仍要过白名单）
  if (!official.length && !online.length && !cidrIps.length) {
    for (let i = 0; i < Math.min(limit, 8); i++) {
      const ip = randomIpFromCidr(FALLBACK_CIDR[0]);
      if (ip) cidrIps.push({ ip, port: 443, name: '官方优选' });
    }
  }

  // 7. 交叉合并：官方直连 / 在线实测 / CIDR 轮流取，保证多个来源都有覆盖
  const groups = [official, online, cidrIps].filter((g) => g.length);
  const merged = [];
  for (let i = 0; merged.length < limit * 2; i++) {
    let added = false;
    for (const g of groups) {
      if (i < g.length) {
        push(g[i]);
        added = true;
      }
    }
    if (!added) break;
  }

  return out.slice(0, Math.max(1, limit));
}

/** 官方直连地址池（供订阅与数据面共同使用） */
export function officialDirectIps() {
  return shuffle(OFFICIAL_DIRECT_IPS).map((ip) => ({ ip, port: 443, name: '官方直连' }));
}

/** 汇总优选反代域名（用于生成「地址 = 域名」的节点） */
export async function collectPreferredDomains(cfg, limit = 6) {
  if (cfg.enablePreferredDomain === false) return [];
  return shuffle(PREFERRED_DOMAINS)
    .slice(0, limit)
    .map((d) => ({ ip: d, port: 443, name: d.split('.')[0] }));
}

/** 把优选域名解析成 IP（用于「优选 IP 节点」） */
export async function resolveDomainIps(domains, dohUrl, limit = 6) {
  const out = [];
  for (const d of domains.slice(0, limit)) {
    const ips = await dohResolve(d, 'A', dohUrl);
    if (ips.length) out.push({ ip: ips[0], port: 443, name: d.split('.')[0] });
  }
  return out;
}

const SMART_DOMAINS_FALLBACK = PREFERRED_DOMAINS.slice(0, 8);

/** 智能解析：把一批域名解析成可用 Clean IP（面板「⚡ 智能解析」按钮用） */
export async function smartCleanIps(domains, dohUrl) {
  const list = domains && domains.length ? domains : SMART_DOMAINS_FALLBACK;
  const servers = [...new Set([dohUrl, 'https://dns.google/dns-query', 'https://223.5.5.5/dns-query', 'https://cloudflare-dns.com/dns-query'].filter(Boolean))];
  const out = new Set();
  await Promise.all(
    list.slice(0, 12).map(async (d) => {
      for (const srv of servers) {
        const ips = await dohResolve(d, 'A', srv);
        const ok = ips.filter((x) => isIPv4(x));
        if (ok.length) {
          for (const ip of ok.slice(0, 2)) out.add(ip);
          return;
        }
      }
    }),
  );
  return [...out].slice(0, 16).join(',');
}

/** 端口解析：把逗号分隔的端口文本变成数组，并判定是否 TLS */
export function parsePorts(portsText, defaultPorts = TLS_PORTS) {
  const arr = toArray(portsText).map((p) => parseInt(p, 10)).filter((p) => p > 0 && p < 65536);
  return arr.length ? arr : [...defaultPorts];
}

export function isTlsPort(port) {
  return TLS_PORTS.includes(Number(port));
}

/** NAT64 前缀列表 */
export function nat64List(cfg) {
  return cfg.nat64 ? toArray(cfg.nat64).length ? toArray(cfg.nat64) : NAT64_PREFIXES : [];
}
