import { b64UrlDecode, parseHostPort } from '../utils.ts';

/* ------------------------- SHA-224（Trojan 口令） ------------------------- */
/* workerd 的 crypto.subtle 不提供 SHA-224，这里用 SHA-256 压缩函数 + SHA-224 初始向量实现 */

const SHA256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

const SHA224_IV = [
  0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4,
];

function shaCore(bytes, iv, outWords) {
  const msgLen = bytes.length;
  const withPad = new Uint8Array((((msgLen + 8) >> 6) + 1) << 6);
  withPad.set(bytes);
  withPad[msgLen] = 0x80;
  const bitLen = msgLen * 8;
  const dv = new DataView(withPad.buffer);
  dv.setUint32(withPad.length - 4, bitLen >>> 0);
  dv.setUint32(withPad.length - 8, Math.floor(bitLen / 0x100000000));

  const H = iv.slice();
  const w = new Uint32Array(64);
  for (let off = 0; off < withPad.length; off += 64) {
    for (let i = 0; i < 16; i++) w[i] = dv.getUint32(off + i * 4);
    for (let i = 16; i < 64; i++) {
      const s0 = ((w[i - 15] >>> 7) | (w[i - 15] << 25)) ^ ((w[i - 15] >>> 18) | (w[i - 15] << 14)) ^ (w[i - 15] >>> 3);
      const s1 = ((w[i - 2] >>> 17) | (w[i - 2] << 15)) ^ ((w[i - 2] >>> 19) | (w[i - 2] << 13)) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const S1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
      const ch = (e & f) ^ (~e & g);
      const t1 = (h + S1 + ch + SHA256_K[i] + w[i]) >>> 0;
      const S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (S0 + maj) >>> 0;
      h = g; g = f; f = e; e = (d + t1) >>> 0;
      d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }
    H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0; H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0; H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
  }
  let hex = '';
  for (let i = 0; i < outWords; i++) hex += H[i].toString(16).padStart(8, '0');
  return hex;
}

/** Trojan 口令：sha224(password) 的十六进制，共 56 字符 */
export function sha224Hex(str) {
  return shaCore(new TextEncoder().encode(String(str)), SHA224_IV, 7);
}

/* ------------------------------ Early Data ------------------------------ */

/** 从 sec-websocket-protocol 头取出 0-RTT 早期数据 */
export function readEarlyData(request) {
  const raw = request.headers.get('sec-websocket-protocol');
  if (!raw) return null;
  try {
    const bytes = b64UrlDecode(raw);
    return bytes.length ? bytes : null;
  } catch {
    return null;
  }
}

/* ------------------------------ VLESS 头解析 ------------------------------ */

export const VLESS_CMD_TCP = 1;
export const VLESS_CMD_UDP = 2;

/**
 * 解析 VLESS 请求头。
 * 返回 { version, uuid, command, port, addressType, address, rawIndex } 或抛错。
 */
export function parseVlessHeader(buf) {
  if (buf.byteLength < 24) throw new Error('invalid data');
  const view = new Uint8Array(buf);
  const dv = new DataView(buf);

  const version = view[0];
  const uuidBytes = view.slice(1, 17);
  const optLen = view[17];
  let idx = 18 + optLen;
  if (idx + 4 > view.length) throw new Error('invalid data');

  const command = view[idx];
  const port = dv.getUint16(idx + 1);
  const addressType = view[idx + 3];
  idx += 4;

  let address = '';
  if (addressType === 1) {
    if (idx + 4 > view.length) throw new Error('invalid addressType');
    address = Array.from(view.slice(idx, idx + 4)).join('.');
    idx += 4;
  } else if (addressType === 2) {
    const len = view[idx];
    idx += 1;
    if (idx + len > view.length) throw new Error('invalid addressType');
    address = new TextDecoder().decode(view.slice(idx, idx + len));
    idx += len;
  } else if (addressType === 3) {
    if (idx + 16 > view.length) throw new Error('invalid addressType');
    const parts = [];
    for (let i = 0; i < 8; i++) parts.push(dv.getUint16(idx + i * 2).toString(16));
    address = parts.join(':');
    idx += 16;
  } else {
    throw new Error('invalid addressType');
  }

  if (!address) throw new Error('addressValue is empty');

  return { version, uuidBytes, command, port, addressType, address, rawIndex: idx };
}

/* ------------------------------ Trojan 头解析 ------------------------------ */

/**
 * 解析 Trojan 请求头。
 * passwordHash：sha224(密码) 的 56 字符十六进制小写。
 */
export function parseTrojanHeader(buf, passwordHash) {
  const view = new Uint8Array(buf);
  if (view.length < 58) throw new Error('invalid data');

  // 口令：前 56 个字节是 sha224(密码) 的 ASCII 十六进制文本
  const hex = new TextDecoder().decode(view.slice(0, 56)).toLowerCase();
  if (!hex || hex !== String(passwordHash).toLowerCase()) throw new Error('invalid password');
  if (view[56] !== 0x0d || view[57] !== 0x0a) throw new Error('invalid data');

  let idx = 58;
  const cmd = view[idx];
  if (cmd !== 1) throw new Error('unsupported command, only TCP (CONNECT) is allowed');
  idx += 1;

  const atyp = view[idx];
  idx += 1;

  let address = '';
  if (atyp === 1) {
    address = Array.from(view.slice(idx, idx + 4)).join('.');
    idx += 4;
  } else if (atyp === 3) {
    const len = view[idx];
    idx += 1;
    address = new TextDecoder().decode(view.slice(idx, idx + len));
    idx += len;
  } else if (atyp === 4) {
    const dv = new DataView(buf);
    const parts = [];
    for (let i = 0; i < 8; i++) parts.push(dv.getUint16(idx + i * 2).toString(16));
    address = parts.join(':');
    idx += 16;
  } else {
    throw new Error('invalid addressType');
  }

  const dv = new DataView(buf);
  const port = dv.getUint16(idx);
  idx += 2;
  // 跳过结尾 CRLF
  if (view[idx] === 0x0d && view[idx + 1] === 0x0a) idx += 2;

  if (!address) throw new Error('addressValue is empty');
  return { command: cmd, port, address, rawIndex: idx };
}

/* ------------------------------ xhttp 头解析 ------------------------------ */
/**
 * xhttp 首包是 HTTP POST body，结构与 VLESS 一致（version + uuid + optLen + cmd + port + atyp + addr），
 * 但 cmd 只允许 TCP，且通过自定义 padding 头做校验。
 */
export function parseXhttpHeader(buf) {
  const r = parseVlessHeader(buf);
  if (r.command !== VLESS_CMD_TCP) throw new Error('command is not supported');
  return r;
}

/** 由 UUID 派生 xhttp 填充混淆的头名与查询键（与 cfnew / edgetunnel 保持一致） */
export function xhttpPaddingKeys(uuid) {
  return {
    header: String(uuid).slice(1, 7),
    key: '_' + String(uuid).slice(25, 31),
  };
}

/* ------------------------------ 链式代理解析 ------------------------------ */

/**
 * 解析出站代理配置字符串。
 * 支持：socks5://  socks://  http://  https://  以及无前缀（视为 socks5）
 * 格式：[user:pass@]host[:port]
 */
export function parseOutboundProxy(str) {
  const s = String(str || '').trim();
  if (!s) return null;
  let kind = 'socks5';
  let rest = s;
  const m = s.match(/^(socks5|socks|https|http):\/\/(.*)$/i);
  if (m) {
    const proto = m[1].toLowerCase();
    kind = proto === 'socks' ? 'socks5' : proto;
    rest = m[2];
  }
  // 去掉路径
  rest = rest.split('/')[0];

  let auth = null;
  const at = rest.lastIndexOf('@');
  if (at > 0) {
    auth = rest.slice(0, at);
    rest = rest.slice(at + 1);
  }
  const defaultPort = kind === 'http' ? 80 : kind === 'https' ? 443 : 1080;
  const { host, port } = parseHostPort(rest, defaultPort);
  if (!host || !port) return null;

  let username = '';
  let password = '';
  if (auth) {
    const i = auth.indexOf(':');
    username = i > 0 ? auth.slice(0, i) : auth;
    password = i > 0 ? auth.slice(i + 1) : '';
  }
  return { kind, host, port, username, password };
}
