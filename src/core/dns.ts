import { safeFetch, isIPv4 } from '../utils.ts';

const TYPE_MAP = { A: 1, AAAA: 28, TXT: 16, HTTPS: 65, CNAME: 5 };

/** 构造 DNS 查询报文（wire format） */
function buildQuery(name, type) {
  const labels = name.split('.').filter(Boolean);
  const enc = new TextEncoder();
  const parts = [];
  for (const l of labels) {
    const b = enc.encode(l);
    parts.push(new Uint8Array([b.length]), b);
  }
  parts.push(new Uint8Array([0]));
  const qname = concat(parts);
  const out = new Uint8Array(12 + qname.length + 4);
  const dv = new DataView(out.buffer);
  dv.setUint16(0, Math.floor(Math.random() * 65535)); // id
  dv.setUint16(2, 0x0100); // flags: standard query
  dv.setUint16(4, 1);
  out.set(qname, 12);
  dv.setUint16(12 + qname.length, TYPE_MAP[type] || 1);
  dv.setUint16(12 + qname.length + 2, 1);
  return out;
}

function concat(list) {
  const total = list.reduce((a, c) => a + c.length, 0);
  const out = new Uint8Array(total);
  let off = 0;
  for (const c of list) {
    out.set(c, off);
    off += c.length;
  }
  return out;
}

function parseResponse(buf, type) {
  const dv = new DataView(buf);
  const qd = dv.getUint16(4);
  const an = dv.getUint16(6);
  let off = 12;
  for (let i = 0; i < qd; i++) {
    off = skipName(buf, off);
    off += 4;
  }
  const out = [];
  for (let i = 0; i < an; i++) {
    off = skipName(buf, off);
    const rtype = dv.getUint16(off);
    const rdlen = dv.getUint16(off + 8);
    off += 10;
    const data = new Uint8Array(buf, off, rdlen);
    if (rtype === 1 && rdlen === 4 && (type === 'A' || type === 'ANY')) {
      out.push(Array.from(data).join('.'));
    } else if (rtype === 28 && rdlen === 16 && (type === 'AAAA' || type === 'ANY')) {
      const p = [];
      for (let j = 0; j < 8; j++) p.push(dv.getUint16(off + j * 2).toString(16));
      out.push(p.join(':'));
    } else if (rtype === 16 && type === 'TXT') {
      let s = '';
      let k = 0;
      while (k < data.length) {
        const len = data[k];
        s += new TextDecoder().decode(data.slice(k + 1, k + 1 + len));
        k += 1 + len;
      }
      out.push(s);
    }
    off += rdlen;
  }
  return out;
}

function skipName(buf, off) {
  const dv = new DataView(buf);
  let p = off;
  while (true) {
    const len = dv.getUint8(p);
    if (len === 0) return p + 1;
    if ((len & 0xc0) === 0xc0) return p + 2;
    p += 1 + len;
  }
}

const cache = new Map();

/** DoH 解析，返回地址数组 */
export async function dohResolve(name, type = 'A', dohUrl = 'https://cloudflare-dns.com/dns-query', ttlMs = 300000) {
  const key = `${type}|${name}`;
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < ttlMs) return hit.val;
  const q = buildQuery(name, type);
  const b64 = btoa(String.fromCharCode(...q));
  const url = `${dohUrl}?dns=${b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')}`;
  const res = await safeFetch(url, { headers: { accept: 'application/dns-message' } }, 6000);
  if (!res || !res.ok) return hit?.val || [];
  const buf = await res.arrayBuffer();
  const val = parseResponse(buf, type);
  cache.set(key, { at: Date.now(), val });
  return val;
}

/** 把一个域名解析为可用 IP；失败返回原域名 */
export async function resolveToIp(host, dohUrl) {
  if (isIPv4(host) || host.includes(':')) return [host];
  const a = await dohResolve(host, 'A', dohUrl);
  if (a.length) return a;
  const aaaa = await dohResolve(host, 'AAAA', dohUrl);
  return aaaa.length ? aaaa : [host];
}
