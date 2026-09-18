import { loadConfig, saveConfig, hasKV, loadUsage, flushUsage, getUsage, addLog } from './config/store.ts';
import { handleWebSocket } from './core/stream.ts';
import { handleXhttp } from './core/xhttp.ts';
import { getProfiles, buildNodes, buildUriProfile } from './sub/build.ts';
import { buildClashProfile, buildSingboxProfile, buildV2rayProfile } from './sub/configs.ts';
import { handleAuth, handleSync, handleUsers, handleStats, handleLogs, handleTools, cmpVersions } from './panel/api.ts';
import { CURRENT_VERSION } from './config/defaults.ts';
import { DASHBOARD_HTML } from './panel/dashboard.ts';
import { SUBSCRIPTION_HTML } from './panel/subscription.ts';
import { html, text, json, deriveUUID, safeFetch, formatBytes, gbToBytes } from './utils.ts';

const KV_MISSING_HTML = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<title>缺少 KV 绑定</title><style>body{font-family:system-ui;background:#0f172a;color:#e2e8f0;display:flex;align-items:center;justify-content:center;height:100vh;margin:0}
.box{max-width:520px;padding:32px;background:#1e293b;border-radius:16px;line-height:1.8}
code{background:#0f172a;padding:2px 6px;border-radius:4px}</style></head><body><div class="box">
<h2>⚠️ 未检测到 KV 命名空间绑定</h2>
<p>请在 Cloudflare 控制台创建一个 KV 命名空间，并在 Worker / Pages 的设置里绑定变量名：</p>
<p><code>CF_SUB_KV</code></p>
<p>绑定后重新部署即可正常使用。</p></div></body></html>`;

export default {
  async fetch(request, env, ctx) {
    try {
      // WebSocket：代理数据面
      if ((request.headers.get('upgrade') || '').toLowerCase() === 'websocket') {
        return await handleWebSocket(request, env, ctx);
      }

      const url = new URL(request.url);

      if (!hasKV(env)) return html(KV_MISSING_HTML, 500);

      let cfg = await loadConfig(env);
      await loadUsage(env);

      // 首次初始化
      if (!cfg.uuid) {
        cfg.uuid = await deriveUUID(`${cfg.masterKey}:${url.hostname}`);
        cfg.createdAt = Date.now();
        await saveConfig(env, cfg);
      }

      const route = String(cfg.apiRoute || 'sub').replace(/^\/|\/$/g, '');
      const segs = url.pathname.split('/').filter(Boolean);

      // XHTTP
      if (request.method === 'POST' && isXhttp(request, url)) {
        return await handleXhttp(request, env, ctx);
      }

      // CORS 预检
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'GET,POST,PUT,DELETE,OPTIONS',
            'access-control-allow-headers': '*',
          },
        });
      }

      if (segs[0] === route) {
        const second = segs[1] || '';

        if (second === 'dash') {
          return html(DASHBOARD_HTML.replace(/__CURRENT_VERSION__/g, CURRENT_VERSION).replace(/__API_ROUTE__/g, route));
        }

        if (second === 'api') {
          return await dispatchApi(request, url, env, ctx, cfg, segs[2] || '');
        }

        // 订阅
        return await handleSubscription(request, url, env, ctx, cfg);
      }

      return await maintenance(request, cfg);
    } catch (e) {
      console.error('fetch error', e);
      return text('Internal Error', 500);
    }
  },

  async scheduled(controller, env, ctx) {
    try {
      const cfg = await loadConfig(env);
      if (!cfg.autoUpdate || !cfg.githubRepo || !cfg.cfAccountId || !cfg.cfApiToken) return;
      // 拉取远程版本并强制部署
      const repo = String(cfg.githubRepo).replace(/^https?:\/\/github\.com\//, '').replace(/\/$/, '');
      const res = await safeFetch(`https://raw.githubusercontent.com/${repo}/main/version`, {}, 8000);
      const latest = res && res.ok ? (await res.text()).trim() : '';
      if (!latest || cmpVersions(CURRENT_VERSION, latest) >= 0) return;
      const codeRes = await safeFetch(`https://raw.githubusercontent.com/${repo}/main/dist/_worker.js`, {}, 15000);
      if (!codeRes || !codeRes.ok) return;
      const code = await codeRes.text();
      const { deployToCloudflare } = await import('./panel/api.ts');
      const r = await deployToCloudflare(cfg, code);
      await addLog(env, r.ok ? 'Auto-Update Success' : 'Auto-Update Failed', r.message || latest);
    } catch (e) {
      console.error('scheduled error', e);
    }
  },
};

function isXhttp(request, url) {
  const ct = (request.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('application/grpc')) return true;
  if (url.searchParams.has('xhttp')) return true;
  const last = url.pathname.split('/').filter(Boolean).pop() || '';
  return /^[0-9a-f]{8}$/i.test(last);
}

/* ------------------------------ API 分发 ------------------------------ */

async function dispatchApi(request, url, env, ctx, cfg, name) {
  let body = null;
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    const ct = (request.headers.get('content-type') || '').toLowerCase();
    try {
      if (ct.includes('application/json')) body = await request.json();
      else {
        const t = await request.text();
        if (t) body = JSON.parse(t);
      }
    } catch {
      body = null;
    }
  }

  switch (name) {
    case 'auth': return handleAuth(request, url, body, env, ctx);
    case 'sync': return handleSync(request, url, body, env, ctx);
    case 'users': return handleUsers(request, url, body, env, ctx);
    case 'stats': return handleStats(request, url, body, env);
    case 'logs': return handleLogs(request, url, body, env);
    case 'tools': return handleTools(request, url, body, env);
    case 'update': return handleUpdate(request, url, body, env, ctx);
    default: return json({ success: false, message: '未知接口' }, 404);
  }
}

/* ------------------------------ 订阅 ------------------------------ */

async function handleSubscription(request, url, env, ctx, cfg) {
  const subName = url.searchParams.get('sub') || '';
  const profiles = getProfiles(cfg, subName);
  if (!profiles.length) return text('not found', 404);

  const host = url.hostname;
  const profile = profiles[0];
  const nodes = await buildNodes(profile, cfg, host);

  // 浏览器访问 → 订阅信息页
  const ua = (request.headers.get('user-agent') || '').toLowerCase();
  const looksBrowser = ua.includes('mozilla') && !isClientUA(ua);
  const forceRaw = url.searchParams.has('raw') || url.searchParams.has('b64') || url.searchParams.has('base64');
  if (looksBrowser && !forceRaw && !cfg.subUserAgent) {
    return html(renderSubscriptionPage(url, cfg, profile));
  }

  const flag = (
    url.searchParams.get('flag') ||
    url.searchParams.get('format') ||
    url.searchParams.get('type') ||
    url.searchParams.get('target') ||
    ''
  ).toLowerCase();

  let profileTarget = detectTarget(ua, flag);

  let content;
  let mime;
  if (profileTarget === 'clash') {
    content = buildClashProfile(nodes);
    mime = 'text/yaml; charset=utf-8';
  } else if (profileTarget === 'singbox') {
    content = buildSingboxProfile(nodes);
    mime = 'application/json; charset=utf-8';
  } else if (profileTarget === 'v2ray') {
    content = buildV2rayProfile(nodes);
    mime = 'application/json; charset=utf-8';
  } else {
    content = buildUriProfile(nodes);
    mime = 'text/plain; charset=utf-8';
  }

  const usage = getUsage(profile.id);
  const used = usage.up + usage.down;
  const totalLimit = gbToBytes(profile.limitTotalGb);
  const headers = {
    'content-type': mime,
    'cache-control': 'no-store',
    'access-control-allow-origin': '*',
    'profile-update-interval': '12',
    'subscription-userinfo': `upload=${usage.up}; download=${usage.down}; total=${totalLimit || 0}; expire=${
      profile.expiryMs ? Math.floor(profile.expiryMs / 1000) : 4102329600
    }`,
  };
  if (!ua.includes('mozilla')) {
    headers['content-disposition'] = `attachment; filename*=utf-8''${encodeURIComponent(profile.name || 'CFSub')}`;
  }

  ctx.waitUntil(flushUsage(env));
  return new Response(content, { status: 200, headers });
}

function isClientUA(ua) {
  return /clash|meta|mihomo|stash|verge|sing-?box|hiddify|nekobox|karing|v2ray|shadowrocket|loon|surge|quantumult/i.test(ua);
}

function detectTarget(ua, flag) {
  if (flag) {
    if (['clash', 'yaml', 'meta', 'stash', 'clash-meta', 'y'].includes(flag)) return 'clash';
    if (['sing', 'singbox', 'sing-box', 'sb', 's'].includes(flag)) return 'singbox';
    if (['v2ray', 'vjson', 'v'].includes(flag)) return 'v2ray';
    return 'raw';
  }
  if (/clash|meta|stash|verge|mihomo|cfw/i.test(ua)) return 'clash';
  if (/sing-?box|hiddify|nekobox|sfa|karing/i.test(ua)) return 'singbox';
  return 'raw';
}

function renderSubscriptionPage(url, cfg, profile) {
  const usage = getUsage(profile.id);
  const used = usage.up + usage.down;
  const limit = gbToBytes(profile.limitTotalGb);
  const daily = usage.dailyUp + usage.dailyDown;
  const dailyLimit = gbToBytes(profile.limitDailyGb);
  const base = `${url.origin}/${cfg.apiRoute}?sub=${encodeURIComponent(profile.name || '')}`;
  let status = '正常';
  if (profile.status === 'paused') status = '已暂停';
  else if (profile.expiryMs && Date.now() > profile.expiryMs) status = '已到期';
  else if (limit > 0 && used >= limit) status = '流量已用尽';
  else if (dailyLimit > 0 && daily >= dailyLimit) status = '今日流量已用尽';

  return SUBSCRIPTION_HTML.replace(/__USER_NAME__/g, profile.name || '默认')
    .replace(/__USER_ID__/g, profile.id)
    .replace(/__STATUS__/g, status)
    .replace(/__TOTAL_USED__/g, formatBytes(used))
    .replace(/__TOTAL_LIMIT__/g, limit > 0 ? formatBytes(limit) : '不限')
    .replace(/__TOTAL_PROGRESS__/g, String(limit > 0 ? Math.min(100, Math.round((used / limit) * 100)) : 0))
    .replace(/__DAILY_USED__/g, formatBytes(daily))
    .replace(/__DAILY_LIMIT__/g, dailyLimit > 0 ? formatBytes(dailyLimit) : '不限')
    .replace(/__DAILY_PROGRESS__/g, String(dailyLimit > 0 ? Math.min(100, Math.round((daily / dailyLimit) * 100)) : 0))
    .replace(/__EXPIRY__/g, profile.expiryMs ? new Date(profile.expiryMs).toLocaleString('zh-CN') : '永久')
    .replace(/__SYNC_RAW__/g, base)
    .replace(/__SYNC_CLASH__/g, `${base}&flag=clash`)
    .replace(/__SYNC_SINGBOX__/g, `${base}&flag=singbox`)
    .replace(/__SYNC_V2RAY__/g, `${base}&flag=v2ray`)
    .replace(/__SYNC_BASE64__/g, `${base}&flag=base64`);
}

/* ------------------------------ 伪装主页 ------------------------------ */

async function maintenance(request, cfg) {
  const hosts = String(cfg.maintenanceHost || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (!hosts.length) {
    return html('<h1>It works!</h1><p>CFSub is running.</p>');
  }
  const ip = request.headers.get('cf-connecting-ip') || '';
  let sum = 0;
  for (const c of ip) sum += c.charCodeAt(0);
  const target = hosts[sum % hosts.length];
  const url = new URL(request.url);
  const res = await safeFetch(`${target}${url.pathname}${url.search}`, {
    method: request.method,
    headers: { 'user-agent': request.headers.get('user-agent') || 'Mozilla/5.0' },
  }, 8000);
  if (!res) return html('<h1>Service Unavailable</h1>', 502);
  return new Response(res.body, { status: res.status, headers: { 'content-type': res.headers.get('content-type') || 'text/html' } });
}
