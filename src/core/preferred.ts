import { safeFetch, toLines, toArray, parseHostPort, isIPv4, shuffle } from '../utils.ts';
import {
  BUILTIN_PREFERRED_SOURCES,
  PREFERRED_DOMAINS,
  FALLBACK_CIDR,
  ISP_LABELS,
  TLS_PORTS,
  NAT64_PREFIXES,
} from '../config/resources.ts';
import { dohResolve } from './dns.ts';

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

/* --------------------------- 远程优选源 --------------------------- */

const sourceCache = new Map();
const SOURCE_TTL = 10 * 60 * 1000; // 10 分钟

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
 */
export async function collectPreferredIps(cfg, limit = 12) {
  const out = [];
  const seen = new Set();
  const push = (e) => {
    if (!e || !e.ip) return;
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

  // 3. 远程优选源
  if (cfg.enableRemotePreferred !== false) {
    const urls = [
      ...toArray(cfg.preferredUrls),
      ...(cfg.enablePreferredIp !== false ? BUILTIN_PREFERRED_SOURCES.map((s) => s.url) : []),
    ];
    const results = await Promise.allSettled(urls.slice(0, 6).map(fetchSource));
    let idx = 0;
    for (const r of results) {
      if (r.status !== 'fulfilled') continue;
      const src = BUILTIN_PREFERRED_SOURCES.find((s) => s.url === urls[idx]);
      const label = src ? `${ISP_LABELS[src.isp] || ''}优选` : '优选';
      const lines = shuffle(r.value).slice(0, Math.max(2, Math.ceil(limit / Math.max(1, urls.length))));
      for (const line of lines) {
        // CIDR 段 → 随机 IP
        if (line.includes('/')) {
          const ip = randomIpFromCidr(line);
          if (ip) push({ ip, port: 443, name: `${label}${out.length + 1}` });
        } else {
          const e = parseEntry(line);
          if (e) push({ ...e, name: e.name || `${label}${out.length + 1}` });
        }
      }
      idx++;
    }
  }

  // 4. 内置兜底：从默认 CIDR 生成
  if (!out.length) {
    for (let i = 0; i < Math.min(limit, 8); i++) {
      const ip = randomIpFromCidr(FALLBACK_CIDR[0]);
      if (ip) push({ ip, port: 443, name: `官方优选${i + 1}` });
    }
  }

  return out.slice(0, Math.max(1, limit));
}

/**
 * 汇总优选反代域名（用于生成「地址 = 域名」的节点）
 */
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

/** 智能解析：把一批域名解析成可用 Clean IP（面板「⚡ 智能解析」按钮用） */
export async function smartCleanIps(domains, dohUrl) {
  const list = domains && domains.length ? domains : SMART_DOMAINS_FALLBACK;
  // 主 DoH 失败时依次回退，避免因单个解析服务不可达而整体失败
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

const SMART_DOMAINS_FALLBACK = PREFERRED_DOMAINS.slice(0, 8);

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
