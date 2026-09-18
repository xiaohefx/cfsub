/* 通用工具函数 */

export function b64Encode(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

export function b64Decode(b64) {
  const bin = atob(b64.replace(/-/g, '+').replace(/_/g, '/'));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/** URL-safe base64 编码（用于 early data） */
export function b64UrlEncode(buf) {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function b64UrlDecode(str) {
  const s = str.replace(/-/g, '+').replace(/_/g, '/');
  const pad = s.length % 4 ? '='.repeat(4 - (s.length % 4)) : '';
  const bin = atob(s + pad);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/** 标准 UUID v4 */
export function randomUUID() {
  return crypto.randomUUID();
}

/** 校验是否为 UUID 格式 */
export function isUUID(s) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(s || ''));
}

/** UUID 字符串 → 16 字节 */
export function uuidToBytes(uuid) {
  const hex = String(uuid).replace(/-/g, '');
  if (hex.length !== 32) return null;
  const out = new Uint8Array(16);
  for (let i = 0; i < 16; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
  return out;
}

/** 常量时间比较，避免时序侧信道 */
export function timingSafeEqual(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

/** 把任意分隔符文本整理成数组 */
export function toArray(text) {
  if (Array.isArray(text)) return text.filter(Boolean).map((s) => String(s).trim());
  return String(text || '')
    .split(/[\s,;|]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** 把多行文本整理成数组 */
export function toLines(text) {
  return String(text || '')
    .split(/[\r\n]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** 解析 host[:port]，返回 { host, port | null } */
export function parseHostPort(addr, defaultPort = null) {
  const s = String(addr || '').trim();
  if (!s) return { host: '', port: defaultPort };
  if (s.startsWith('[')) {
    const m = s.match(/^\[([^\]]+)\](?::(\d+))?$/);
    if (m) return { host: m[1], port: m[2] ? parseInt(m[2], 10) : defaultPort };
    return { host: s, port: defaultPort };
  }
  const idx = s.lastIndexOf(':');
  if (idx > 0 && /^\d+$/.test(s.slice(idx + 1))) {
    return { host: s.slice(0, idx), port: parseInt(s.slice(idx + 1), 10) };
  }
  return { host: s, port: defaultPort };
}

export function isIPv4(s) {
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(s) && s.split('.').every((n) => +n >= 0 && +n <= 255);
}

export function isIPv6(s) {
  return String(s || '').includes(':');
}

export function isIP(s) {
  return isIPv4(s) || isIPv6(s);
}

/** IPv4 → NAT64 IPv6 */
export function ipv4ToNat64(ipv4, prefix) {
  const p = String(prefix || '').replace(/^\[|\]$/g, '');
  if (!p || !isIPv4(ipv4)) return null;
  const parts = ipv4.split('.').map((n) => parseInt(n, 10));
  const h = (v) => v.toString(16).padStart(2, '0');
  const tail = `${h(parts[0])}${h(parts[1])}:${h(parts[2])}${h(parts[3])}`;
  const base = p.endsWith(':') ? p : p + ':';
  return base + tail;
}

/** 数组随机取一项 */
export function pick(arr) {
  if (!Array.isArray(arr) || !arr.length) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

/** 洗牌（Fisher-Yates） */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 确定性洗牌：同一 seed 永远得到同一顺序（会话粘性） */
export function stableShuffle(arr, seed) {
  const sorted = [...arr].sort((a, b) => String(a).localeCompare(String(b)));
  let s = 0;
  for (const c of String(seed)) s += c.charCodeAt(0);
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  const out = [...sorted];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function formatBytes(bytes) {
  const n = Number(bytes) || 0;
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(2)} KB`;
  if (n < 1024 * 1024 * 1024) return `${(n / 1024 / 1024).toFixed(2)} MB`;
  return `${(n / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

export function gbToBytes(gb) {
  const n = Number(gb);
  return n > 0 ? Math.floor(n * 1024 * 1024 * 1024) : 0;
}

/** 简单的 JSON 响应 */
export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...headers },
  });
}

export function html(body, status = 200, headers = {}) {
  return new Response(body, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8', ...headers },
  });
}

export function text(body, status = 200, headers = {}) {
  return new Response(body, {
    status,
    headers: { 'content-type': 'text/plain; charset=utf-8', ...headers },
  });
}

/** 安全的 fetch：超时 + 异常兜底 */
export async function safeFetch(url, options = {}, timeoutMs = 8000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: ctrl.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}

/** 简易哈希（用于派生默认 UUID / 密码，不用于安全存储） */
export async function md5Hex(str) {
  const bytes = new TextEncoder().encode(str);
  const buf = await crypto.subtle.digest('MD5', bytes).catch(() => null);
  if (buf) {
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  // workerd 不支持 MD5 时退化为 FNV-1a
  let h = 0x811c9dc5;
  for (const b of bytes) {
    h ^= b;
    h = (h * 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0').repeat(4).slice(0, 32);
}

/** 派生一个确定性 UUID v4（基于种子字符串） */
export async function deriveUUID(seed) {
  const hex = await md5Hex(String(seed));
  const s = (hex + hex).slice(0, 32).split('');
  s[12] = '4';
  s[16] = ['8', '9', 'a', 'b'][parseInt(s[16], 16) % 4];
  return `${s.slice(0, 8).join('')}-${s.slice(8, 12).join('')}-${s.slice(12, 16).join('')}-${s.slice(16, 20).join('')}-${s.slice(20, 32).join('')}`;
}
