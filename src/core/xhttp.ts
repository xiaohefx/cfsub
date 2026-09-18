import { parseVlessHeader, parseOutboundProxy } from './protocol.ts';
import { buildCandidates, openSocket, closeSocket } from './transport.ts';
import { loadConfig, loadUsage, addUsage, flushUsage } from '../config/store.ts';
import { uuidToBytes } from '../utils.ts';

/**
 * XHTTP（stream-one）处理：
 * 客户端用 HTTP POST 上传，服务端在同一个响应里回传下行数据。
 * 混淆方式：请求头里带由 UUID 派生的自定义 padding 头 + 查询键。
 */
export async function handleXhttp(request, env, ctx) {
  const cfg = await loadConfig(env);
  await loadUsage(env);
  if (!cfg.__outbound) cfg.__outbound = parseOutboundProxy(cfg.outboundProxy);
  if (cfg.isPaused) return new Response('paused', { status: 503 });

  const colo = request?.cf?.colo || '';
  const body = request.body;
  if (!body) return new Response('bad request', { status: 400 });

  const reader = body.getReader();
  let remote = null;
  let writer = null;
  let userId = 'default';
  let headerParsed = false;
  let pipePromise = null;

  const cleanup = () => {
    if (writer) {
      try { writer.close(); } catch { /* ignore */ }
      writer = null;
    }
    if (remote) {
      closeSocket(remote);
      remote = null;
    }
  };

  const stream = new ReadableStream({
    async start(controller) {
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          if (!value || !value.byteLength) continue;
          const arr = new Uint8Array(value);

          if (!headerParsed) {
            const parsed = parseXhttpFirst(arr, cfg);
            if (!parsed) {
              controller.close();
              return;
            }
            userId = parsed.user.id;
            const conn = await openRemote(parsed.host, parsed.port, cfg, arr.slice(parsed.rawIndex), colo);
            if (!conn) {
              controller.close();
              return;
            }
            remote = conn.socket;
            writer = conn.writer;
            headerParsed = true;

            // 远端 → 响应体
            pipePromise = remote.readable
              .pipeTo(
                new WritableStream({
                  write(chunk) {
                    addUsage(userId, 0, chunk.byteLength || 0);
                    controller.enqueue(chunk);
                  },
                  close() {
                    try { controller.close(); } catch { /* ignore */ }
                  },
                }),
              )
              .catch(() => {
                try { controller.close(); } catch { /* ignore */ }
              });
            continue;
          }

          if (writer) {
            addUsage(userId, value.byteLength || 0, 0);
            await writer.write(value);
          }
        }
      } catch (e) {
        console.error('xhttp error', e);
        try { controller.close(); } catch { /* ignore */ }
      }
    },
    cancel() {
      cleanup();
    },
  });

  ctx.waitUntil(
    (async () => {
      try {
        if (pipePromise) await pipePromise;
      } catch { /* ignore */ } finally {
        cleanup();
        await flushUsage(env, true);
      }
    })(),
  );

  return new Response(stream, {
    status: 200,
    headers: {
      'content-type': 'application/grpc',
      'user-agent': 'Go-http-client/2.0',
      'x-accel-buffering': 'no',
      'cache-control': 'no-store',
    },
  });
}

function parseXhttpFirst(arr, cfg) {
  if (arr.length < 24) return null;
  const uuidBytes = arr.slice(1, 17);
  let user = null;
  for (const u of cfg.users || []) {
    const b = uuidToBytes(u.uuid);
    if (b && b.join(',') === uuidBytes.join(',')) {
      user = u;
      break;
    }
  }
  const mainBytes = uuidToBytes(cfg.uuid);
  if (!user && mainBytes && mainBytes.join(',') === uuidBytes.join(',')) {
    user = { id: 'default', name: cfg.name || '默认', status: 'active' };
  }
  if (!user) return null;
  try {
    // 复用 VLESS 头解析
    const buf = arr.buffer.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
    const h = parseVlessHeader(buf);
    if (h.command !== 1) return null;
    return { user, host: h.address, port: h.port, rawIndex: h.rawIndex };
  } catch {
    return null;
  }
}

async function openRemote(host, port, cfg, firstPayload, colo) {
  for (const c of buildCandidates(host, port, cfg, colo)) {
    try {
      const socket = await openSocket(c, cfg);
      const writer = socket.writable.getWriter();
      if (firstPayload && firstPayload.byteLength) await writer.write(firstPayload);
      return { socket, writer };
    } catch {
      continue;
    }
  }
  return null;
}

/** 生成随机 padding 串（响应侧伪装） */
function randomPadding(len) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let s = '';
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

export { randomPadding };
