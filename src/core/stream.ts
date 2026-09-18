import { parseVlessHeader, parseTrojanHeader, sha224Hex, readEarlyData, VLESS_CMD_UDP, parseOutboundProxy } from './protocol.ts';
import { buildCandidates, openSocket, closeSocket } from './transport.ts';
import { loadConfig, loadUsage, addUsage, addConnect, getUsage, flushUsage } from '../config/store.ts';
import { uuidToBytes, gbToBytes } from '../utils.ts';
import { UDP_DNS_UPSTREAM } from '../config/resources.ts';

const MAX_EARLY_DATA = 8192;

/** 构建 UUID / Trojan 口令 → 用户 的索引 */
function buildUserIndex(cfg) {
  const byUuid = new Map();
  const byHash = new Map();

  const push = (user, uuid, password) => {
    if (uuid) {
      const bytes = uuidToBytes(uuid);
      if (bytes) byUuid.set(bytes.join(','), user);
    }
    if (password) byHash.set(sha224Hex(password), user);
  };

  for (const u of cfg.users || []) {
    if (!u.uuid) continue;
    push(u, u.uuid, u.password || u.uuid);
  }

  const main = {
    id: 'default',
    uuid: cfg.uuid,
    name: cfg.name || '默认',
    status: 'active',
    isMain: true,
    limitTotalGb: cfg.limitTotalGb ?? null,
    limitDailyGb: cfg.limitDailyGb ?? null,
    expiryMs: null,
    connLimit: null,
    maxConfigs: cfg.maxConfigs ?? null,
    proxyIp: '',
    cleanIp: '',
    ports: '',
    mode: '',
    createdAt: 0,
  };
  push(main, cfg.uuid, cfg.trojanPassword || cfg.uuid);
  return { byUuid, byHash, main };
}

function checkUserAllowed(user) {
  if (!user) return { ok: false, reason: '未授权' };
  if (user.status === 'paused') return { ok: false, reason: '账号已暂停' };
  if (user.status === 'disabled') return { ok: false, reason: '账号已禁用' };
  if (user.status === 'expired') return { ok: false, reason: '账号已过期' };
  if (user.expiryMs && Date.now() > user.expiryMs) return { ok: false, reason: '账号已到期' };
  const u = getUsage(user.id);
  const totalLimit = gbToBytes(user.limitTotalGb);
  if (totalLimit > 0 && u.up + u.down >= totalLimit) return { ok: false, reason: '总流量已用尽' };
  const dailyLimit = gbToBytes(user.limitDailyGb);
  if (dailyLimit > 0 && u.dailyUp + u.dailyDown >= dailyLimit) return { ok: false, reason: '今日流量已用尽' };
  return { ok: true };
}

/** 并发连接数（isolate 内计数） */
const liveConns = new Map();
function connIncr(id) {
  const n = (liveConns.get(id) || 0) + 1;
  liveConns.set(id, n);
  return n;
}
function connDecr(id) {
  const n = (liveConns.get(id) || 1) - 1;
  if (n <= 0) liveConns.delete(id);
  else liveConns.set(id, n);
}
export function connCount(id) {
  return liveConns.get(id) || 0;
}
export function connTotal() {
  let t = 0;
  for (const v of liveConns.values()) t += v;
  return t;
}

/* ------------------------------ WebSocket 流 ------------------------------ */

function makeWSStream(ws, earlyData) {
  let closed = false;
  return new ReadableStream({
    start(controller) {
      if (earlyData && earlyData.byteLength) controller.enqueue(new Uint8Array(earlyData).buffer);
      ws.addEventListener('message', (e) => {
        if (closed) return;
        try { controller.enqueue(e.data); } catch { /* ignore */ }
      });
      ws.addEventListener('close', () => {
        if (closed) return;
        closed = true;
        try { controller.close(); } catch { /* ignore */ }
      });
      ws.addEventListener('error', (err) => {
        if (closed) return;
        closed = true;
        try { controller.error(err); } catch { /* ignore */ }
      });
    },
    cancel() {
      closed = true;
      try { ws.close(); } catch { /* ignore */ }
    },
  });
}

/* ------------------------------ 主入口 ------------------------------ */

export async function handleWebSocket(request, env, ctx) {
  const cfg = await loadConfig(env);
  await loadUsage(env);
  if (!cfg.__outbound) cfg.__outbound = parseOutboundProxy(cfg.outboundProxy);

  if (cfg.isPaused) return new Response('service paused', { status: 503 });

  const index = buildUserIndex(cfg);
  const colo = request?.cf?.colo || '';

  const pair = new WebSocketPair();
  const client = pair[0];
  const server = pair[1];
  server.accept();
  server.binaryType = 'arraybuffer';

  const early = readEarlyData(request);
  const stream = makeWSStream(server, early && early.byteLength <= MAX_EARLY_DATA ? early : null);
  const reader = stream.getReader();

  const state = { user: null, header: null, remoteHost: '', remotePort: 0, isUDP: false };

  ctx.waitUntil(
    pump(reader, server, cfg, state, index, env, colo).catch((e) => {
      console.error('ws pump error', e);
      try { server.close(); } catch { /* ignore */ }
    }),
  );

  return new Response(null, { status: 101, webSocket: client });
}

async function pump(reader, ws, cfg, state, index, env, colo) {
  let remote = null;
  let remoteWriter = null;
  let finished = false;
  let connReleased = false;
  const releaseConn = () => {
    if (connReleased) return;
    connReleased = true;
    connDecr(uid());
  };

  const send = (data) => {
    try {
      if (ws.readyState === 1) ws.send(data);
    } catch { /* ignore */ }
  };
  const close = () => {
    try { ws.close(); } catch { /* ignore */ }
  };

  const uid = () => (state.user?.id || 'default');

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      if (!value || !value.byteLength) continue;

      if (!state.header) {
        const parsed = parseFirstPacket(value, index, state);
        if (!parsed.ok) {
          close();
          return;
        }

        const allowed = checkUserAllowed(state.user);
        if (!allowed.ok) {
          if (parsed.reply) send(parsed.reply);
          close();
          return;
        }

        const n = connIncr(uid());
        if (state.user?.connLimit && n > state.user.connLimit) {
          releaseConn();
          close();
          return;
        }
        addConnect(uid());

        if (state.isUDP) {
          await handleUdpOverTcp(state, parsed.payload, send, cfg, colo);
          releaseConn();
          close();
          return;
        }

        const conn = await connectRemote(state.remoteHost, state.remotePort, cfg, parsed.payload, colo);
        if (!conn) {
          releaseConn();
          close();
          return;
        }
        remote = conn.socket;
        remoteWriter = conn.writer;
        if (parsed.reply) send(parsed.reply);

        const id = uid();
        remote.readable
          .pipeThrough(
            new TransformStream({
              transform(chunk, c) {
                addUsage(id, 0, chunk.byteLength || chunk.length || 0);
                c.enqueue(chunk);
              },
            }),
          )
          .pipeTo(
            new WritableStream({
              write(chunk) { send(chunk); },
              close() { releaseConn(); close(); },
              abort() { releaseConn(); close(); },
            }),
          )
          .catch(() => {
            releaseConn();
            close();
          });
        continue;
      }

      if (remoteWriter) {
        addUsage(uid(), value.byteLength || value.length || 0, 0);
        await remoteWriter.write(value);
      }
    }
    finished = true;
  } catch (e) {
    console.error('pump error', e);
  } finally {
    if (remoteWriter) {
      try { await remoteWriter.close(); } catch { /* ignore */ }
    }
    if (remote) closeSocket(remote);
    releaseConn();
    if (!finished) close();
    await flushUsage(env, true);
  }
}

function parseFirstPacket(buf, index, state) {
  const arr = new Uint8Array(buf);
  // Trojan 嗅探：56 个 ASCII 十六进制字符的口令 + CRLF
  if (arr.length >= 58 && arr[56] === 0x0d && arr[57] === 0x0a) {
    const hex = new TextDecoder().decode(arr.slice(0, 56)).toLowerCase();
    const user = index.byHash.get(hex);
    if (user) {
      try {
        const h = parseTrojanHeader(buf, hex);
        state.header = h;
        state.user = user;
        state.remoteHost = h.address;
        state.remotePort = h.port;
        state.isUDP = false;
        return { ok: true, payload: arr.slice(h.rawIndex), reply: null };
      } catch {
        return { ok: false };
      }
    }
  }
  // VLESS
  try {
    const h = parseVlessHeader(buf);
    const user = index.byUuid.get(h.uuidBytes.join(','));
    if (!user) return { ok: false };
    state.header = h;
    state.user = user;
    state.remoteHost = h.address;
    state.remotePort = h.port;
    state.isUDP = h.command === VLESS_CMD_UDP;
    return { ok: true, payload: arr.slice(h.rawIndex), reply: new Uint8Array([h.version, 0]) };
  } catch {
    return { ok: false };
  }
}

/** 依次尝试候选连接，成功后写入首包数据 */
async function connectRemote(host, port, cfg, firstPayload, colo) {
  const candidates = buildCandidates(host, port, cfg, colo);
  for (const c of candidates) {
    try {
      const socket = await openSocket(c, cfg);
      const writer = socket.writable.getWriter();
      if (firstPayload && firstPayload.byteLength) await writer.write(firstPayload);
      return { socket, writer, label: c.label };
    } catch {
      continue;
    }
  }
  return null;
}

/* ------------------------------ UDP over TCP（仅 DNS/53） ------------------------------ */

async function handleUdpOverTcp(state, payload, send, cfg, colo) {
  const body = payload && payload.byteLength > 2 ? payload.slice(2) : payload;
  const uid = state.user?.id || 'default';
  addUsage(uid, body?.byteLength || 0, 0);
  try {
    const conn = await connectRemote(UDP_DNS_UPSTREAM, 53, cfg, body, colo);
    if (!conn) return;
    const reader = conn.socket.readable.getReader();
    const chunks = [];
    let total = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      chunks.push(new Uint8Array(value));
      total += value.byteLength;
      addUsage(uid, 0, value.byteLength);
      if (total >= 2) break;
    }
    try { reader.releaseLock(); } catch { /* ignore */ }
    closeSocket(conn.socket);

    const out = new Uint8Array(total);
    let off = 0;
    for (const c of chunks) {
      out.set(c, off);
      off += c.byteLength;
    }
    const framed = new Uint8Array(out.length + 2);
    framed[0] = out.length >> 8;
    framed[1] = out.length & 0xff;
    framed.set(out, 2);
    send(framed.buffer);
  } catch { /* ignore */ }
}
