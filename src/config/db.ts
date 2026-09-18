/**
 * 存储抽象层：D1 优先，KV 兜底
 *
 * 说明：nahan 用 D1 只建了一张 `kv_store(key, value)` 表来模拟 KV，
 * 所以两个后端在功能上等价。差别在配额与一致性：
 *
 *   KV（免费版）：10 万读/天，1000 写/天，最终一致（最长 60s 传播）
 *   D1（免费版）：500 万行读/天，10 万写/天，强一致，支持原子 UPDATE
 *
 * 流量计数属于高频写场景，用户量大 / 流量大时建议用 D1。
 * 这里做成同一套接口，运行时按绑定自动选择，无需改代码。
 */

const CREATE_SQL = `CREATE TABLE IF NOT EXISTS kv_store (key TEXT PRIMARY KEY, value TEXT)`;

let d1Ready = false;

function pick(env) {
  const d1 = env?.IOT_DB || env?.DB || env?.D1 || null;
  const kv = env?.CF_SUB_KV || env?.KV || env?.C || env?.cfsub || null;
  if (d1) return { type: 'd1', db: d1, kv };
  if (kv) return { type: 'kv', db: null, kv };
  return null;
}

/** 返回当前使用的存储后端类型：'d1' | 'kv' | null */
export function storageType(env) {
  return pick(env)?.type || null;
}

export function hasStore(env) {
  return !!pick(env);
}

/** D1 首次使用时建表（结果缓存在 isolate 内） */
async function ensureTable(db) {
  if (d1Ready) return;
  try {
    await db.prepare(CREATE_SQL).run();
    d1Ready = true;
  } catch (e) {
    console.error('D1 建表失败', e);
  }
}

/** 读取一个键（自动 JSON 解析） */
export async function storeGet(env, key) {
  const s = pick(env);
  if (!s) return null;
  try {
    if (s.type === 'd1') {
      await ensureTable(s.db);
      const row = await s.db.prepare('SELECT value FROM kv_store WHERE key = ?').bind(key).first();
      if (!row || row.value == null) return null;
      return JSON.parse(row.value);
    }
    return await s.kv.get(key, { type: 'json' });
  } catch (e) {
    console.error('storeGet 失败', key, e);
    return null;
  }
}

/** 写入一个键（值为任意可 JSON 化的对象） */
export async function storePut(env, key, value) {
  const s = pick(env);
  if (!s) return false;
  const text = typeof value === 'string' ? value : JSON.stringify(value);
  try {
    if (s.type === 'd1') {
      await ensureTable(s.db);
      await s.db
        .prepare('INSERT INTO kv_store (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value')
        .bind(key, text)
        .run();
    } else {
      await s.kv.put(key, text);
    }
    return true;
  } catch (e) {
    console.error('storePut 失败', key, e);
    return false;
  }
}

/** 删除一个键 */
export async function storeDelete(env, key) {
  const s = pick(env);
  if (!s) return false;
  try {
    if (s.type === 'd1') {
      await ensureTable(s.db);
      await s.db.prepare('DELETE FROM kv_store WHERE key = ?').bind(key).run();
    } else {
      await s.kv.delete(key);
    }
    return true;
  } catch {
    return false;
  }
}

/** 落盘最小间隔：KV 写配额紧张，间隔放大；D1 可以更频繁 */
export function flushInterval(env) {
  return pick(env)?.type === 'kv' ? 60_000 : 15_000;
}
