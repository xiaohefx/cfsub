import { loadConfig, saveConfig, loadUsage, getUsage, resetUsage, flushUsage, addLog, loadLogs, hasKV } from '../config/store.ts';
import { newUserDefaults, CURRENT_VERSION } from '../config/defaults.ts';
import { smartCleanIps, collectPreferredIps } from '../core/preferred.ts';
import { validateNameStrategy } from '../sub/build.ts';
import { json, randomUUID, isUUID, deriveUUID, gbToBytes, safeFetch, formatBytes } from '../utils.ts';
import { SMART_CLEAN_DOMAINS } from '../config/resources.ts';

/* ------------------------------ 鉴权 ------------------------------ */

function extractKey(req, url, body) {
  const h = req.headers.get('authorization') || req.headers.get('x-api-key') || '';
  if (h.startsWith('Bearer ')) return h.slice(7).trim();
  if (h) return h.trim();
  if (url.searchParams.get('key')) return url.searchParams.get('key');
  if (body && body.key) return String(body.key);
  return '';
}

function isMaster(cfg, key) {
  return !!key && key === cfg.masterKey;
}

function isApiKey(cfg, key) {
  return !!key && Array.isArray(cfg.panelApiKeys) && cfg.panelApiKeys.some((k) => k.key === key);
}

function authorized(cfg, key) {
  return isMaster(cfg, key) || isApiKey(cfg, key);
}

/** 去掉敏感字段（API Key 登录时） */
function sanitize(cfg, full) {
  const out = { ...cfg };
  if (!full) {
    for (const f of ['masterKey', 'panelApiKeys', 'cfApiToken', 'cfAccountId', 'tgToken', 'tgChatId', 'tgAdminId']) {
      if (out[f]) out[f] = '[PROTECTED]';
    }
  }
  return out;
}

/* ------------------------------ Auth ------------------------------ */

export async function handleAuth(req, url, body, env, ctx) {
  const cfg = await loadConfig(env);
  await loadUsage(env);
  const key = (body && body.key) || '';
  if (!authorized(cfg, key)) {
    ctx.waitUntil(addLog(env, 'Auth Failed', `来自 ${req.headers.get('cf-connecting-ip') || 'unknown'}`));
    return json({ success: false, message: '密钥错误' }, 401);
  }

  const profiles = [
    { id: 'default', name: cfg.name || '默认', sync: `${url.origin}/${cfg.apiRoute}` },
    ...(cfg.users || []).map((u) => ({
      id: u.id,
      name: u.name,
      sync: `${url.origin}/${cfg.apiRoute}?sub=${encodeURIComponent(u.name)}`,
    })),
  ];

  const usage = {};
  for (const p of profiles) {
    const u = getUsage(p.id);
    usage[p.id] = u;
  }

  ctx.waitUntil(addLog(env, 'Auth Success', isMaster(cfg, key) ? '主密钥登录' : 'API Key 登录'));

  return json({
    success: true,
    config: sanitize(cfg, isMaster(cfg, key)),
    locked: cfg.__locked || [],
    profiles,
    usage,
    version: CURRENT_VERSION,
    network: {
      ip: req.headers.get('cf-connecting-ip') || '',
      colo: req.cf?.colo || '',
      loc: [req.cf?.city, req.cf?.country].filter(Boolean).join(', '),
    },
  });
}

/* ------------------------------ Sync（保存配置） ------------------------------ */

export async function handleSync(req, url, body, env, ctx) {
  const cfg = await loadConfig(env);
  const key = (body && body.key) || '';
  if (!authorized(cfg, key)) return json({ success: false, message: '未授权' }, 401);

  const incoming = body?.config || {};
  const merged = { ...cfg, ...incoming };
  // 主密钥仅允许「主密钥持有者」修改，API Key 不可改
  merged.masterKey = incoming.masterKey && isMaster(cfg, key) ? String(incoming.masterKey) : cfg.masterKey;
  merged.panelApiKeys = cfg.panelApiKeys;
  // 被脱敏的敏感字段：面板回传 "[PROTECTED]" 时保留原值，避免把占位符写回 KV
  for (const f of ['masterKey', 'panelApiKeys', 'cfApiToken', 'cfAccountId', 'tgToken', 'tgChatId', 'tgAdminId']) {
    if (merged[f] === '[PROTECTED]') merged[f] = cfg[f];
  }
  merged.users = Array.isArray(incoming.users) ? incoming.users : cfg.users;
  merged.apiRoute = String(incoming.apiRoute || cfg.apiRoute || 'sub').replace(/^\/|\/$/g, '');
  merged.createdAt = cfg.createdAt || Date.now();

  let tagWarning = null;
  if (incoming.nameStrategy) {
    const bad = validateNameStrategy(STRATEGY_TPL(incoming.nameStrategy));
    if (bad) tagWarning = `未知命名标签 ${bad}`;
  }

  await saveConfig(env, merged);
  ctx.waitUntil(addLog(env, 'Panel Updated', '配置已保存'));
  return json({ success: true, newRoute: merged.apiRoute, tagWarning });
}

function STRATEGY_TPL(s) {
  // 预设策略名不含 {}，无需校验
  return ['default', 'prefix-user-port', 'type-user-port', 'user-port', 'ip', 'host-port-user'].includes(s) ? '' : s;
}

/* ------------------------------ 用户管理 ------------------------------ */

export async function handleUsers(req, url, body, env, ctx) {
  const cfg = await loadConfig(env);
  await loadUsage(env);
  const key = extractKey(req, url, body);
  if (!authorized(cfg, key)) return json({ success: false, message: '未授权' }, 401);

  const sub = url.searchParams.get('sub');
  const id = url.searchParams.get('id');
  const action = url.searchParams.get('action');

  if (req.method === 'GET' && !id) {
    const q = (url.searchParams.get('q') || '').toLowerCase();
    const users = (cfg.users || []).map((u) => decorate(u));
    const filtered = q ? users.filter((u) => `${u.name} ${u.id} ${u.notes || ''}`.toLowerCase().includes(q)) : users;
    return json({ success: true, users: filtered, total: filtered.length });
  }

  if (req.method === 'GET' && id) {
    const u = (cfg.users || []).find((x) => x.id === id);
    if (!u) return json({ success: false, message: '用户不存在' }, 404);
    return json({
      success: true,
      user: decorate(u),
      subscriptionUrl: `${url.origin}/${cfg.apiRoute}?sub=${encodeURIComponent(u.name || u.id)}`,
    });
  }

  if (req.method === 'POST' && !id && !action) {
    const u = { ...newUserDefaults() };
    u.id = randomUUID();
    u.uuid = isUUID(body?.uuid) ? body.uuid : await deriveUUID(u.id + Date.now());
    u.name = String(body?.name || '').trim() || u.id.slice(0, 8);
    u.notes = body?.notes || '';
    u.limitTotalGb = body?.limitTotalGb ? Number(body.limitTotalGb) : null;
    u.limitDailyGb = body?.limitDailyGb ? Number(body.limitDailyGb) : null;
    u.expiryMs = body?.expiryDays ? Date.now() + Number(body.expiryDays) * 86400000 : null;
    u.maxConfigs = body?.maxConfigs ? Number(body.maxConfigs) : null;
    u.connLimit = body?.connLimit ? Number(body.connLimit) : null;
    u.proxyIp = body?.proxyIp || '';
    u.cleanIp = body?.cleanIp || '';
    u.ports = body?.ports || '';
    u.mode = body?.mode || '';
    u.status = 'active';
    u.createdAt = Date.now();

    // 全局默认限制
    if (!u.limitTotalGb && cfg.limitTotalGb) u.limitTotalGb = Number(cfg.limitTotalGb);
    if (!u.limitDailyGb && cfg.limitDailyGb) u.limitDailyGb = Number(cfg.limitDailyGb);
    if (!u.expiryMs && cfg.expiryDays) u.expiryMs = Date.now() + Number(cfg.expiryDays) * 86400000;

    cfg.users = cfg.users || [];
    cfg.users.push(u);
    await saveConfig(env, cfg);
    ctx.waitUntil(addLog(env, 'User Created', `${u.name}（${u.id.slice(0, 8)}）`));
    return json(
      {
        success: true,
        user: decorate(u),
        subscriptionUrl: `${url.origin}/${cfg.apiRoute}?sub=${encodeURIComponent(u.name)}`,
      },
      201,
    );
  }

  if (req.method === 'PUT' && id) {
    const i = (cfg.users || []).findIndex((x) => x.id === id);
    if (i < 0) return json({ success: false, message: '用户不存在' }, 404);
    const u = { ...cfg.users[i] };
    const set = (k, v) => {
      if (v !== undefined) u[k] = v;
    };
    set('name', body?.name);
    set('notes', body?.notes);
    if (body?.limitTotalGb !== undefined) u.limitTotalGb = body.limitTotalGb ? Number(body.limitTotalGb) : null;
    if (body?.limitDailyGb !== undefined) u.limitDailyGb = body.limitDailyGb ? Number(body.limitDailyGb) : null;
    if (body?.expiryDays !== undefined) u.expiryMs = body.expiryDays ? Date.now() + Number(body.expiryDays) * 86400000 : null;
    if (body?.maxConfigs !== undefined) u.maxConfigs = body.maxConfigs ? Number(body.maxConfigs) : null;
    if (body?.connLimit !== undefined) u.connLimit = body.connLimit ? Number(body.connLimit) : null;
    set('proxyIp', body?.proxyIp);
    set('cleanIp', body?.cleanIp);
    set('ports', body?.ports);
    set('mode', body?.mode);
    if (body?.status) u.status = body.status;
    if (body?.uuid && isUUID(body.uuid)) u.uuid = body.uuid;
    cfg.users[i] = u;
    await saveConfig(env, cfg);
    ctx.waitUntil(addLog(env, 'User Updated', `${u.name}（${id.slice(0, 8)}）`));
    return json({ success: true, user: decorate(u) });
  }

  if (req.method === 'DELETE' && id) {
    const before = (cfg.users || []).length;
    cfg.users = (cfg.users || []).filter((x) => x.id !== id);
    if (cfg.users.length === before) return json({ success: false, message: '用户不存在' }, 404);
    await saveConfig(env, cfg);
    ctx.waitUntil(addLog(env, 'User Deleted', id.slice(0, 8)));
    return json({ success: true, deleted: id });
  }

  if (req.method === 'POST' && id && action === 'toggle') {
    const u = (cfg.users || []).find((x) => x.id === id);
    if (!u) return json({ success: false, message: '用户不存在' }, 404);
    u.status = u.status === 'active' ? 'paused' : 'active';
    if (u.status === 'active') {
      u.disabledReason = '';
      u.disabledAt = 0;
    }
    await saveConfig(env, cfg);
    ctx.waitUntil(addLog(env, 'User Toggled', `${u.name} → ${u.status}`));
    return json({ success: true, user: decorate(u) });
  }

  if (req.method === 'POST' && id && action === 'reset') {
    resetUsage(id);
    await flushUsage(env, true);
    ctx.waitUntil(addLog(env, 'Traffic Reset', id.slice(0, 8)));
    return json({ success: true, message: '流量已重置' });
  }

  return json({ success: false, message: 'Invalid request' }, 400);
}

function decorate(u) {
  const usage = getUsage(u.id);
  const used = usage.up + usage.down;
  const limit = gbToBytes(u.limitTotalGb);
  const dailyUsed = usage.dailyUp + usage.dailyDown;
  const dailyLimit = gbToBytes(u.limitDailyGb);
  let status = u.status || 'active';
  if (status === 'active') {
    if (u.expiryMs && Date.now() > u.expiryMs) status = 'expired';
    else if (limit > 0 && used >= limit) status = 'disabled';
    else if (dailyLimit > 0 && dailyUsed >= dailyLimit) status = 'disabled';
  }
  return {
    ...u,
    status,
    usage: {
      totalBytes: used,
      totalText: formatBytes(used),
      limitBytes: limit,
      limitText: limit > 0 ? formatBytes(limit) : '不限',
      dailyBytes: dailyUsed,
      dailyText: formatBytes(dailyUsed),
      dailyLimitText: dailyLimit > 0 ? formatBytes(dailyLimit) : '不限',
      progress: limit > 0 ? Math.min(100, Math.round((used / limit) * 100)) : 0,
      connects: usage.connects || 0,
      last: usage.last || 0,
    },
  };
}

/* ------------------------------ 统计 ------------------------------ */

export async function handleStats(req, url, body, env) {
  const cfg = await loadConfig(env);
  await loadUsage(env);
  const key = extractKey(req, url, body);
  if (!authorized(cfg, key)) return json({ success: false, message: '未授权' }, 401);

  const users = cfg.users || [];
  let totalBytes = 0;
  let dailyBytes = 0;
  const counts = { total: users.length, active: 0, paused: 0, expired: 0, disabled: 0 };
  for (const u of users) {
    const d = decorate(u);
    totalBytes += d.usage.totalBytes;
    dailyBytes += d.usage.dailyBytes;
    counts[d.status === 'active' ? 'active' : d.status === 'paused' ? 'paused' : d.status === 'expired' ? 'expired' : 'disabled']++;
  }
  const main = getUsage('default');
  totalBytes += main.up + main.down;
  dailyBytes += main.dailyUp + main.dailyDown;

  return json({
    success: true,
    stats: {
      users: counts,
      traffic: {
        totalBytes,
        totalText: formatBytes(totalBytes),
        dailyBytes,
        dailyText: formatBytes(dailyBytes),
      },
      system: {
        version: CURRENT_VERSION,
        isPaused: !!cfg.isPaused,
        hasKV: hasKV(env),
        mode: cfg.mode,
        ports: cfg.ports,
      },
    },
  });
}

/* ------------------------------ 日志 ------------------------------ */

export async function handleLogs(req, url, body, env) {
  const cfg = await loadConfig(env);
  const key = extractKey(req, url, body);
  if (!authorized(cfg, key)) return json({ success: false, message: '未授权' }, 401);
  const logs = await loadLogs(env);
  return json({ success: true, logs });
}

/* ------------------------------ 工具 ------------------------------ */

export async function handleTools(req, url, body, env) {
  const cfg = await loadConfig(env);
  const key = extractKey(req, url, body);
  if (!authorized(cfg, key)) return json({ success: false, message: '未授权' }, 401);
  const op = body?.op;

  if (op === 'smart-clean-ip') {
    const ips = await smartCleanIps(SMART_CLEAN_DOMAINS, cfg.customDns);
    return json({ success: true, ips });
  }

  if (op === 'preview-preferred') {
    const list = await collectPreferredIps(cfg, 20);
    return json({ success: true, list });
  }

  if (op === 'ping') {
    const target = String(body?.target || '').trim();
    if (!target) return json({ success: false, message: '缺少目标' }, 400);
    const t0 = Date.now();
    const res = await safeFetch(`https://${target}/cdn-cgi/trace`, {}, 6000);
    const ms = Date.now() - t0;
    return json({ success: !!res, ms, colo: res?.headers?.get('cf-ray')?.split('-')?.[1] || '' });
  }

  return json({ success: false, message: '未知操作' }, 400);
}

/* ------------------------------ GitHub 更新 ------------------------------ */

export async function handleUpdate(req, url, body, env, ctx) {
  const cfg = await loadConfig(env);
  const key = extractKey(req, url, body);
  if (!isMaster(cfg, key)) return json({ success: false, message: '需要主密钥' }, 401);

  const action = body?.action || 'check';
  const repo = String(cfg.githubRepo || '').replace(/^https?:\/\/github\.com\//, '').replace(/\/$/, '');
  if (!repo) return json({ success: false, message: '未配置 GitHub 仓库' }, 400);

  const canDeploy = !!(cfg.cfAccountId && cfg.cfApiToken && (cfg.deployTarget === 'pages' ? cfg.cfPagesProject : cfg.cfWorkerName));

  if (action === 'check') {
    const latest = await fetchRemoteVersion(repo);
    return json({
      success: true,
      current: CURRENT_VERSION,
      latest: latest || CURRENT_VERSION,
      updateAvailable: cmpVersions(CURRENT_VERSION, latest || '0') < 0,
      canDeploy,
    });
  }

  if (action === 'deploy') {
    if (!canDeploy) return json({ success: false, message: 'Cloudflare 凭据未配置完整' }, 400);
    let code = body?.code;
    let version = body?.version || '';
    if (!code) {
      const latest = await fetchRemoteVersion(repo);
      if (!body?.force && cmpVersions(CURRENT_VERSION, latest || '0') >= 0) {
        return json({ success: false, message: '远程版本不比当前新，请勾选强制覆盖' }, 400);
      }
      const fetched = await fetchWorkerCode(repo, cfg.autoUpdateFormat);
      if (!fetched) return json({ success: false, message: '拉取远程代码失败' }, 502);
      code = fetched;
      version = latest;
    }
    const r = await deployToCloudflare(cfg, code);
    if (!r.ok) {
      ctx.waitUntil(addLog(env, 'Auto-Update Failed', r.message));
      return json({ success: false, message: r.message }, 502);
    }
    ctx.waitUntil(addLog(env, 'Auto-Update Success', `已更新到 ${version || 'remote'}`));
    return json({ success: true, message: `已更新到 ${version || 'remote'}`, newVersion: version });
  }

  return json({ success: false, message: '未知操作' }, 400);
}

export function cmpVersions(a, b) {
  const pa = String(a || '0').split('.').map(Number);
  const pb = String(b || '0').split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const x = pa[i] || 0;
    const y = pb[i] || 0;
    if (x !== y) return x < y ? -1 : 1;
  }
  return 0;
}

async function fetchRemoteVersion(repo) {
  const res = await safeFetch(`https://raw.githubusercontent.com/${repo}/main/version`, {}, 8000);
  if (res && res.ok) {
    const t = (await res.text()).trim();
    if (t) return t;
  }
  // 兜底：从 _worker.js 里正则提取 CURRENT_VERSION
  const r2 = await safeFetch(`https://raw.githubusercontent.com/${repo}/main/dist/_worker.js`, {}, 10000);
  if (r2 && r2.ok) {
    const m = (await r2.text()).match(/CURRENT_VERSION\s*=\s*["']([^"']+)["']/);
    if (m) return m[1];
  }
  return null;
}

async function fetchWorkerCode(repo, format = 'plain') {
  const candidates =
    format === 'encoded'
      ? [`https://raw.githubusercontent.com/${repo}/main/dist/_worker.encode.js`, `https://raw.githubusercontent.com/${repo}/main/dist/_worker.js`]
      : [`https://raw.githubusercontent.com/${repo}/main/dist/_worker.js`];
  for (const u of candidates) {
    const res = await safeFetch(u, {}, 15000);
    if (res && res.ok) {
      const t = await res.text();
      if (t && t.length > 1000) return t;
    }
  }
  return null;
}

/* ------------------------------ Cloudflare 部署 ------------------------------ */

export async function deployToCloudflare(cfg, code) {
  if (cfg.deployTarget === 'pages') return deployPages(cfg, code);
  return deployWorker(cfg, code);
}

async function deployWorker(cfg, code) {
  const base = `https://api.cloudflare.com/client/v4/accounts/${cfg.cfAccountId}/workers/scripts/${cfg.cfWorkerName}`;
  const headers = { Authorization: `Bearer ${cfg.cfApiToken}` };

  // 先取回现有 bindings，避免覆盖后丢绑定
  let bindings = [];
  try {
    const s = await safeFetch(`${base}/settings`, { headers }, 10000);
    if (s && s.ok) {
      const j = await s.json();
      bindings = j?.result?.bindings || [];
    }
  } catch { /* ignore */ }

  const metadata = {
    main_module: '_worker.js',
    compatibility_date: '2025-06-01',
    compatibility_flags: ['nodejs_compat'],
    bindings,
  };

  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('_worker.js', new Blob([code], { type: 'application/javascript+module' }));

  const res = await safeFetch(base, { method: 'PUT', headers, body: form }, 30000);
  if (!res) return { ok: false, message: '请求 Cloudflare 失败' };
  const j = await res.json().catch(() => ({}));
  if (!res.ok || !j.success) {
    return { ok: false, message: j?.errors?.[0]?.message || `HTTP ${res.status}` };
  }
  return { ok: true };
}

async function deployPages(cfg, code) {
  const base = `https://api.cloudflare.com/client/v4/accounts/${cfg.cfAccountId}/pages/projects/${cfg.cfPagesProject}/deployments`;
  const headers = { Authorization: `Bearer ${cfg.cfApiToken}` };

  const digest = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(code));
  const hash = [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');

  const manifest = { '_worker.js': `/${hash}` };
  const form = new FormData();
  form.append('manifest', new Blob([JSON.stringify(manifest)], { type: 'application/json' }));
  form.append(`/${hash}`, new Blob([code], { type: 'application/javascript+module' }));

  const res = await safeFetch(base, { method: 'POST', headers, body: form }, 30000);
  if (!res) return { ok: false, message: '请求 Cloudflare 失败' };
  const j = await res.json().catch(() => ({}));
  if (!res.ok || !j.success) {
    return { ok: false, message: j?.errors?.[0]?.message || `HTTP ${res.status}` };
  }
  return { ok: true };
}
