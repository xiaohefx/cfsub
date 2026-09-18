import { SYSTEM_DEFAULTS } from './defaults.ts';
import { applyEnvOverrides, stripInternal } from './env.ts';
import { today } from '../utils.ts';

const CFG_KEY = 'sys_config';
const USAGE_KEY = 'sys_usage';
const LOG_KEY = 'sys_logs';
const CACHE_TTL = 30_000;

let cfgCache = null;
let cfgCacheAt = 0;
let usageCache = null;
let usageDirty = false;
let lastUsageSync = 0;

/** 兼容多种 KV 绑定名：CF_SUB_KV / KV / C / cfsub */
function kvOf(env) {
  return env.CF_SUB_KV || env.KV || env.C || env.cfsub || null;
}

export function hasKV(env) {
  return !!kvOf(env);
}

/* ------------------------------- 配置 ------------------------------- */

export async function loadConfig(env) {
  const now = Date.now();
  if (cfgCache && now - cfgCacheAt < CACHE_TTL) return cfgCache;
  const kv = kvOf(env);
  let stored = null;
  if (kv) {
    try {
      stored = await kv.get(CFG_KEY, { type: 'json' });
    } catch {
      stored = null;
    }
  }
  const cfg = { ...SYSTEM_DEFAULTS, ...(stored || {}) };
  // 嵌套对象合并，避免旧版本缺失新字段
  cfg.protocols = { ...SYSTEM_DEFAULTS.protocols, ...(stored?.protocols || {}) };
  if (!Array.isArray(cfg.users)) cfg.users = [];
  if (!Array.isArray(cfg.panelApiKeys)) cfg.panelApiKeys = [];
  if (!Array.isArray(cfg.logs)) cfg.logs = [];
  // 环境变量优先级最高
  cfg.__locked = applyEnvOverrides(cfg, env);
  cfgCache = cfg;
  cfgCacheAt = now;
  return cfg;
}

export async function saveConfig(env, cfg) {
  cfg.updatedAt = Date.now();
  cfgCache = cfg;
  cfgCacheAt = Date.now();
  const kv = kvOf(env);
  if (kv) {
    try {
      await kv.put(CFG_KEY, JSON.stringify(stripInternal(cfg)));
    } catch (e) {
      console.error('saveConfig failed', e);
    }
  }
  return cfg;
}

export function invalidateConfigCache() {
  cfgCache = null;
  cfgCacheAt = 0;
}

/* ------------------------------- 流量 ------------------------------- */

export async function loadUsage(env) {
  if (usageCache) return usageCache;
  const kv = kvOf(env);
  let stored = null;
  if (kv) {
    try {
      stored = await kv.get(USAGE_KEY, { type: 'json' });
    } catch {
      stored = null;
    }
  }
  usageCache = stored && stored.users ? stored : { users: {} };
  return usageCache;
}

/**
 * 累加流量（真实字节数）。
 * up = 上行（客户端→远端），down = 下行（远端→客户端）
 */
export function addUsage(userId, up = 0, down = 0) {
  if (!usageCache) usageCache = { users: {} };
  const key = String(userId || 'default');
  const day = today();
  let u = usageCache.users[key];
  if (!u) {
    u = usageCache.users[key] = { up: 0, down: 0, dailyUp: 0, dailyDown: 0, lastDay: day, connects: 0, last: 0 };
  }
  if (u.lastDay !== day) {
    u.dailyUp = 0;
    u.dailyDown = 0;
    u.lastDay = day;
  }
  u.up += up;
  u.down += down;
  u.dailyUp += up;
  u.dailyDown += down;
  usageDirty = true;
  return u;
}

export function addConnect(userId) {
  const u = addUsage(userId, 0, 0);
  u.connects += 1;
  u.last = Date.now();
  return u;
}

export function getUsage(userId) {
  const key = String(userId || 'default');
  return (usageCache?.users?.[key]) || { up: 0, down: 0, dailyUp: 0, dailyDown: 0, lastDay: today(), connects: 0, last: 0 };
}

export function resetUsage(userId) {
  if (!usageCache) usageCache = { users: {} };
  const key = String(userId || 'default');
  if (usageCache.users[key]) {
    usageCache.users[key] = { up: 0, down: 0, dailyUp: 0, dailyDown: 0, lastDay: today(), connects: 0, last: 0 };
  }
  usageDirty = true;
}

/** 定期落盘（在请求尾或 waitUntil 中调用） */
export async function flushUsage(env, force = false) {
  if (!usageDirty) return;
  const now = Date.now();
  if (!force && now - lastUsageSync < CACHE_TTL) return;
  const kv = kvOf(env);
  if (kv) {
    try {
      await kv.put(USAGE_KEY, JSON.stringify(usageCache));
    } catch (e) {
      console.error('flushUsage failed', e);
    }
  }
  usageDirty = false;
  lastUsageSync = now;
}

/* ------------------------------- 日志 ------------------------------- */

export async function addLog(env, type, detail) {
  const cfg = await loadConfig(env);
  cfg.logs = Array.isArray(cfg.logs) ? cfg.logs : [];
  cfg.logs.unshift({ ts: new Date().toISOString(), type, detail });
  if (cfg.logs.length > 100) cfg.logs = cfg.logs.slice(0, 100);
  cfgCache = cfg; // 直接更新缓存，避免再读一次
  const kv = kvOf(env);
  if (kv) {
    try {
      await kv.put(LOG_KEY, JSON.stringify(cfg.logs));
      // 日志不进 sys_config，避免配置对象过大
    } catch { /* ignore */ }
  }
  return cfg.logs;
}

export async function loadLogs(env) {
  const kv = kvOf(env);
  if (kv) {
    try {
      const l = await kv.get(LOG_KEY, { type: 'json' });
      if (Array.isArray(l)) return l;
    } catch { /* ignore */ }
  }
  const cfg = await loadConfig(env);
  return cfg.logs || [];
}
