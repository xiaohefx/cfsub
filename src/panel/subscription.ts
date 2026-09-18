export const SUBSCRIPTION_HTML = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>CFSub 订阅 - __USER_NAME__</title>
<style>
:root{--bg:#0b1120;--card:#111c33;--bd:#1e2b47;--fg:#e2e8f0;--mut:#94a3b8;--acc:#38bdf8}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--fg);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;min-height:100vh;padding:24px 16px}
.wrap{max-width:760px;margin:0 auto}
h1{font-size:22px;margin:0 0 4px}
.sub{color:var(--mut);font-size:13px;margin-bottom:20px}
.card{background:var(--card);border:1px solid var(--bd);border-radius:14px;padding:18px;margin-bottom:14px}
.row{display:flex;justify-content:space-between;font-size:13px;margin-bottom:10px}
.bar{height:8px;background:#0b1120;border-radius:6px;overflow:hidden}
.bar>i{display:block;height:100%;background:linear-gradient(90deg,#38bdf8,#6366f1)}
.badge{display:inline-block;padding:3px 10px;border-radius:999px;font-size:12px;background:#0ea5e91f;color:#34d399;border:1px solid #10b98144}
.badge.warn{background:#f59e0b1f;color:#fbbf24;border-color:#f59e0b44}
label{font-size:12px;color:var(--mut);display:block;margin-bottom:6px}
input{width:100%;background:#0b1120;border:1px solid var(--bd);color:var(--fg);border-radius:8px;padding:9px 11px;font-size:12px;font-family:ui-monospace,monospace}
.btns{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
button{background:var(--acc);color:#04202e;border:0;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;font-weight:600}
button.ghost{background:transparent;color:var(--fg);border:1px solid var(--bd)}
button:hover{opacity:.85}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:600px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrap">
  <h1>📡 __USER_NAME__ 的订阅</h1>
  <div class="sub">ID：<code>__USER_ID__</code> · 状态：<span class="badge">__STATUS__</span></div>

  <div class="grid">
    <div class="card">
      <div class="row"><span>总流量</span><span>__TOTAL_USED__ / __TOTAL_LIMIT__</span></div>
      <div class="bar"><i style="width:__TOTAL_PROGRESS__%"></i></div>
      <div class="row" style="margin-top:12px"><span>今日流量</span><span>__DAILY_USED__ / __DAILY_LIMIT__</span></div>
      <div class="bar"><i style="width:__DAILY_PROGRESS__%"></i></div>
    </div>
    <div class="card">
      <div class="row"><span>到期时间</span><span>__EXPIRY__</span></div>
      <div class="row"><span>订阅地址</span><span style="color:var(--mut)">请选择下方格式</span></div>
    </div>
  </div>

  <div class="card">
    <label>通用订阅链接（自动识别客户端）</label>
    <input id="l-raw" value="__SYNC_RAW__" readonly>
    <div class="btns"><button onclick="cp('l-raw')">复制</button></div>
  </div>

  <div class="card">
    <label>Clash / Mihomo / Stash</label>
    <input id="l-clash" value="__SYNC_CLASH__" readonly>
    <div class="btns"><button onclick="cp('l-clash')">复制</button><button class="ghost" onclick="imp('clash','l-clash')">导入 Clash</button></div>
  </div>

  <div class="card">
    <label>Sing-box</label>
    <input id="l-sb" value="__SYNC_SINGBOX__" readonly>
    <div class="btns"><button onclick="cp('l-sb')">复制</button><button class="ghost" onclick="imp('sing-box','l-sb')">导入 Sing-box</button></div>
  </div>

  <div class="card">
    <label>v2rayN / v2rayNG（JSON）</label>
    <input id="l-v2" value="__SYNC_V2RAY__" readonly>
    <div class="btns"><button onclick="cp('l-v2')">复制</button></div>
  </div>

  <div class="card">
    <label>Base64 明文节点</label>
    <input id="l-b64" value="__SYNC_BASE64__" readonly>
    <div class="btns"><button onclick="cp('l-b64')">复制</button></div>
  </div>
</div>
<script>
function cp(id){const el=document.getElementById(id);el.select();navigator.clipboard&&navigator.clipboard.writeText(el.value);}
function imp(kind,id){const v=document.getElementById(id).value;location.href=kind+'://install-config?url='+encodeURIComponent(v);}
</script>
</body>
</html>`;
