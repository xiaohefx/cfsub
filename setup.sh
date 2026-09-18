#!/usr/bin/env bash
# =====================================================================
#  CFSub —— Cloudflare 订阅管理面板 · 安装向导
#  支持：Cloudflare Worker 部署 / Cloudflare Pages 部署 / 卸载
#  用法：bash setup.sh
# =====================================================================

set -euo pipefail
IFS=$'\n\t'

C_RESET='\033[0m'; C_CYAN='\033[36m'; C_GREEN='\033[32m'; C_YELLOW='\033[33m'
C_RED='\033[31m'; C_BOLD='\033[1m'; C_DIM='\033[2m'; C_PURPLE='\033[35m'

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

WORKER_NAME="${WORKER_NAME:-cfsub}"
KV_BINDING="CF_SUB_KV"

say()  { printf "%b\n" "$*"; }
info() { printf "${C_CYAN}▶${C_RESET} %b\n" "$*"; }
ok()   { printf "${C_GREEN}✔${C_RESET} %b\n" "$*"; }
warn() { printf "${C_YELLOW}⚠${C_RESET} %b\n" "$*"; }
err()  { printf "${C_RED}✖${C_RESET} %b\n" "$*"; }
ask()  { printf "${C_PURPLE}?${C_RESET} %b" "$*"; }

line() { printf "${C_DIM}%s${C_RESET}\n" "────────────────────────────────────────────────────────"; }

banner() {
  clear || true
  printf "${C_CYAN}${C_BOLD}"
  cat << 'EOF'
   ╔══════════════════════════════════════════════════╗
   ║   CFSub · Cloudflare 订阅管理面板 安装向导        ║
   ║   多用户 / 流量限制 / 多协议 / 内置优选 IP        ║
   ╚══════════════════════════════════════════════════╝
EOF
  printf "${C_RESET}\n"
}

# ---------------------------- 依赖检查 ----------------------------
check_deps() {
  local missing=0
  if ! command -v node >/dev/null 2>&1; then err "未检测到 Node.js"; missing=1; fi
  if ! command -v npm  >/dev/null 2>&1; then err "未检测到 npm";      missing=1; fi
  if [ "$missing" -eq 1 ]; then
    say ""
    info "请先安装 Node.js 18+ 后重试：https://nodejs.org/"
    exit 1
  fi
  ok "Node.js $(node -v) / npm $(npm -v)"
}

ensure_wrangler() {
  if [ -x "./node_modules/.bin/wrangler" ] || [ -x "./node_modules/.bin/wrangler.cmd" ]; then
    ok "已使用项目内 wrangler"
    return
  fi
  if command -v wrangler >/dev/null 2>&1; then
    ok "已检测到全局 wrangler"
    return
  fi
  info "安装依赖与 wrangler（首次可能较慢）…"
  npm install --no-audit --no-fund
  ok "依赖安装完成"
}

wr() {  # 统一调用 wrangler（优先项目内）
  if [ -f "./node_modules/.bin/wrangler.cmd" ]; then ./node_modules/.bin/wrangler.cmd "$@"
  elif [ -x "./node_modules/.bin/wrangler" ]; then ./node_modules/.bin/wrangler "$@"
  else wrangler "$@"; fi
}

# ---------------------------- 构建 ----------------------------
do_build() {
  info "构建 _worker.js …"
  if [ ! -d node_modules ]; then npm install --no-audit --no-fund; fi
  node scripts/build.js
  if [ ! -f dist/_worker.js ]; then err "构建失败"; exit 1; fi
  ok "构建完成：dist/_worker.js"
}

# ---------------------------- 登录 ----------------------------
do_login() {
  info "正在打开 Cloudflare 授权页面，请在浏览器中完成登录…"
  wr login
  ok "Cloudflare 授权完成"
}

# ---------------------------- Worker 部署 ----------------------------
install_worker() {
  banner; line
  say "${C_BOLD}部署到 Cloudflare Worker${C_RESET}"
  line; say ""
  check_deps; ensure_wrangler; do_build; say ""

  if ! wr whoami >/dev/null 2>&1; then do_login; else ok "已登录 Cloudflare"; fi

  say ""
  ask "请输入 Worker 名称 ${C_DIM}(默认 ${WORKER_NAME})${C_RESET}: "
  read -r input_name
  WORKER_NAME="${input_name:-$WORKER_NAME}"
  WORKER_NAME="$(echo "$WORKER_NAME" | tr ' ' '-')"

  say ""
  info "创建 KV 命名空间 ${KV_BINDING} …"
  kv_out="$(wr kv namespace create "$KV_BINDING" 2>&1 || true)"
  say "$kv_out"
  KV_ID="$(printf '%s' "$kv_out" | grep -oE '[0-9a-f]{32}' | head -n1 || true)"

  if [ -z "${KV_ID:-}" ]; then
    warn "未能自动解析 KV ID，尝试从已有列表获取…"
    kv_list="$(wr kv namespace list 2>/dev/null || true)"
    KV_ID="$(printf '%s' "$kv_list" | grep -B2 -A2 "\"title\".*${KV_BINDING}" | grep -oE '[0-9a-f]{32}' | head -n1 || true)"
  fi
  if [ -z "${KV_ID:-}" ]; then
    ask "请手动粘贴 KV 命名空间 ID: "
    read -r KV_ID
  fi
  if [ -z "${KV_ID:-}" ]; then err "KV ID 不能为空，已中止"; exit 1; fi
  ok "KV ID: $KV_ID"

  cat > wrangler.toml << EOF
# 由 setup.sh 自动生成 —— $(date '+%Y-%m-%d %H:%M:%S')
name = "${WORKER_NAME}"
main = "dist/_worker.js"
compatibility_date = "2025-06-01"
compatibility_flags = ["nodejs_compat"]

[[kv_namespaces]]
binding = "${KV_BINDING}"
id = "${KV_ID}"

# 自动更新定时任务（每 6 小时检查一次 GitHub 版本）
[triggers]
crons = ["0 */6 * * *"]
EOF
  ok "已生成 wrangler.toml"

  say ""
  info "部署到 Cloudflare …"
  deploy_out="$(wr deploy 2>&1 || true)"
  say "$deploy_out"

  WORKER_URL="$(printf '%s' "$deploy_out" | grep -oE 'https://[a-zA-Z0-9._-]+\.workers\.dev' | head -n1 || true)"
  say ""
  line
  if [ -n "$WORKER_URL" ]; then
    ok "部署成功！"
    say ""
    say "  ${C_BOLD}管理面板${C_RESET}：${C_GREEN}${WORKER_URL}/sub/dash${C_RESET}"
    say "  ${C_BOLD}订阅地址${C_RESET}：${C_GREEN}${WORKER_URL}/sub${C_RESET}"
    say "  ${C_BOLD}初始密钥${C_RESET}：${C_YELLOW}admin${C_RESET}"
  else
    warn "未能从输出中解析地址，请在 Cloudflare 控制台查看"
  fi
  say ""
  warn "首次登录后请立刻到「⚙️ 基本设置」修改管理密钥！"
  line
  read -r -p "按回车返回主菜单…" _
}

# ---------------------------- Pages 部署 ----------------------------
install_pages() {
  banner; line
  say "${C_BOLD}部署到 Cloudflare Pages${C_RESET}"
  line; say ""
  check_deps; ensure_wrangler; do_build; say ""

  if ! wr whoami >/dev/null 2>&1; then do_login; else ok "已登录 Cloudflare"; fi

  say ""
  ask "请输入 Pages 项目名称 ${C_DIM}(默认 ${WORKER_NAME})${C_RESET}: "
  read -r input_name
  local proj="${input_name:-$WORKER_NAME}"
  proj="$(echo "$proj" | tr ' ' '-')"

  say ""
  info "创建 KV 命名空间 ${KV_BINDING} …"
  kv_out="$(wr kv namespace create "$KV_BINDING" 2>&1 || true)"
  say "$kv_out"
  KV_ID="$(printf '%s' "$kv_out" | grep -oE '[0-9a-f]{32}' | head -n1 || true)"
  if [ -z "${KV_ID:-}" ]; then
    ask "请手动粘贴 KV 命名空间 ID: "
    read -r KV_ID
  fi

  say ""
  info "上传 dist 目录到 Pages（项目：${proj}）…"
  pages_out="$(wr pages deploy dist --project-name "$proj" 2>&1 || true)"
  say "$pages_out"

  PAGES_URL="$(printf '%s' "$pages_out" | grep -oE 'https://[a-zA-Z0-9._-]+\.pages\.dev' | head -n1 || true)"
  say ""
  line
  if [ -n "$PAGES_URL" ]; then ok "部署成功：${PAGES_URL}"; else warn "请在 Cloudflare 控制台查看 Pages 地址"; fi
  say ""
  say "  ${C_BOLD}重要${C_RESET}：Pages 需要在控制台手动绑定 KV，否则面板无法保存配置："
  say "   控制台 → Workers 和 Pages → ${proj} → 设置 → Functions → KV 命名空间绑定"
  say "   变量名：${C_GREEN}${KV_BINDING}${C_RESET}   值：${C_GREEN}${KV_ID:-<上面创建的命名空间>}${C_RESET}"
  say "   绑定后重新部署一次即可。"
  say ""
  say "  ${C_BOLD}管理面板${C_RESET}：${PAGES_URL:-<项目域名>}/sub/dash"
  say "  ${C_BOLD}初始密钥${C_RESET}：${C_YELLOW}admin${C_RESET}"
  say ""
  warn "Pages 不支持 Cron，自动更新需在面板中手动点击「部署最新版」。"
  line
  read -r -p "按回车返回主菜单…" _
}

# ---------------------------- 卸载 ----------------------------
uninstall() {
  banner; line
  say "${C_RED}${C_BOLD}卸载 CFSub${C_RESET}"
  line; say ""
  warn "此操作会删除 Cloudflare 上的 Worker / Pages 项目与 KV 数据，且不可恢复！"
  ask "确认请输入 ${C_RED}DELETE${C_RESET}: "
  read -r confirm
  if [ "$confirm" != "DELETE" ]; then info "已取消"; sleep 1; return; fi

  ensure_wrangler
  if ! wr whoami >/dev/null 2>&1; then do_login; fi

  local name="$WORKER_NAME"
  if [ -f wrangler.toml ]; then
    name="$(grep -m1 -E '^\s*name\s*=' wrangler.toml | sed -E 's/.*=\s*"([^"]+)".*/\1/' || echo "$WORKER_NAME")"
  fi
  ask "要删除的 Worker 名称 ${C_DIM}(默认 ${name})${C_RESET}: "
  read -r input_name
  name="${input_name:-$name}"

  say ""
  info "删除 Worker ${name} …"
  wr delete --name "$name" --force 2>&1 || warn "删除 Worker 失败（可能不存在）"

  ask "要删除的 KV 命名空间名称 ${C_DIM}(默认 ${KV_BINDING})${C_RESET}: "
  read -r kvname
  kvname="${kvname:-$KV_BINDING}"
  info "删除 KV ${kvname} …"
  wr kv namespace delete --namespace-id "$kvname" 2>&1 || warn "删除 KV 失败（需要 KV ID 而非名称，可在控制台手动删除）"

  rm -f wrangler.toml
  ok "卸载完成"
  read -r -p "按回车返回主菜单…" _
}

# ---------------------------- 主菜单 ----------------------------
main_menu() {
  while true; do
    banner
    say "  ${C_BOLD}1)${C_RESET} 🚀  部署到 Cloudflare Worker ${C_DIM}(推荐，支持定时自动更新)${C_RESET}"
    say "  ${C_BOLD}2)${C_RESET} 📄  部署到 Cloudflare Pages"
    say "  ${C_BOLD}3)${C_RESET} 🔨  仅构建 dist/_worker.js"
    say "  ${C_BOLD}4)${C_RESET} 💀  卸载 / 清理 Cloudflare 资源"
    say "  ${C_BOLD}0)${C_RESET} 🚪  退出"
    say ""
    ask "请选择 ${C_DIM}[0-4]${C_RESET}: "
    read -r choice
    case "$choice" in
      1) install_worker ;;
      2) install_pages ;;
      3) banner; do_build; read -r -p "按回车返回主菜单…" _ ;;
      4) uninstall ;;
      0) say "再见！"; exit 0 ;;
      *) warn "无效选项" ; sleep 1 ;;
    esac
  done
}

main_menu
