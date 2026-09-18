# CFSub · Cloudflare 订阅管理面板

一个开箱即用的 **Cloudflare 多用户订阅管理面板**：添加用户、按用户设置流量 / 每日流量 / 到期 / 并发限制、多协议订阅（VLESS / Trojan / XHTTP）、内置 ProxyIP 与优选 IP、端口设置、订阅链接、GitHub 自动更新部署，后台为**中文界面**。

设计来源：吸收 [cfnew](https://github.com/byJoey/cfnew)、[BPB-Worker-Panel](https://github.com/bia-pain-bache/BPB-Worker-Panel)、[cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) 三家的长处；后台功能模块的组织方式对齐 [nahan](https://github.com/itsyebekhe/nahan)。

---

## 目录

- [一、部署准备（存储后端：D1 还是 KV）](#一部署准备存储后端d1-还是-kv)
- [二、三种部署方式](#二三种部署方式)
  - [方式一：一键安装器（推荐）](#方式一一键安装器推荐)
  - [方式二：Wrangler CLI 部署到 Worker](#方式二wrangler-cli-部署到-worker)
  - [方式三：部署到 Cloudflare Pages](#方式三部署到-cloudflare-pages)
- [三、访问地址](#三访问地址)
- [四、可配置变量（环境变量 + 面板）](#四可配置变量环境变量--面板)
- [五、UUID 能否修改](#五uuid-能否修改)
- [六、后台功能模块](#六后台功能模块)
- [七、内置资源](#七内置资源)
- [八、GitHub 自动更新](#八github-自动更新)
- [九、项目结构](#九项目结构)
- [十、常见问题](#十常见问题)

---

## 一、部署准备（存储后端：D1 还是 KV）

> 关于「nahan 用 D1，你用 KV，能做用户管理吗」——
> **能。** nahan 的 D1 只建了一张表来模拟 KV：
> ```sql
> CREATE TABLE IF NOT EXISTS kv_store (key TEXT PRIMARY KEY, value TEXT)
> ```
> 它全部键只有 6 个（`sys_config`、`sys_usage`、`sys_logs`…），本质是 key/value 存储。
> 所以两种后端在**功能上完全等价**，用户增删改查、流量限制、到期判断没有任何区别。
> 差别只在**配额与一致性**，本项目两种都支持，运行时自动选择，无需改代码。

| | D1 数据库（推荐） | KV 命名空间 |
| --- | --- | --- |
| 免费额度 | 500 万行读 / **10 万写** 每天 | 10 万读 / **1000 写** 每天 |
| 一致性 | 强一致 | 最终一致（全球传播最长 60s） |
| 事务 | 支持 | 无 |
| 流量落盘间隔 | 15 秒 | **60 秒**（为省写配额） |
| 适用场景 | 用户多、流量大、要求统计准确 | 自用 / 小规模，配置最省事 |
| 绑定变量名 | `IOT_DB`（也认 `DB`、`D1`） | `CF_SUB_KV`（也认 `KV`、`C`） |

**两者都绑定时优先使用 D1。**

> ⚠️ 需要注意的点：流量计数是高频写操作。用 KV 时落在免费版 1000 写/天的额度上，
> 本项目已把 KV 的落盘间隔放宽到 60 秒来省配额，但持续大流量仍可能触顶。
> 用户超过十几个或流量较大时，请改用 D1。

其余准备条件：

| 条件 | 说明 |
| --- | --- |
| Cloudflare 账号 | 免费版即可，[注册](https://dash.cloudflare.com/sign-up) |
| Node.js 18+ | 构建用，[下载](https://nodejs.org/) |

> 两个都没绑定时，面板会显示「未检测到存储绑定」的提示页，并给出创建命令。

### 创建命令

```bash
# D1（推荐）
npx wrangler d1 create cfsub-db      # 记下 database_id

# 或 KV
npx wrangler kv namespace create CF_SUB_KV   # 记下 id
```

---

## 二、三种部署方式

### 方式一：一键安装器（推荐）

适合：第一次部署、想少敲命令。

```bash
git clone https://github.com/xiaohefx/cfsub.git
cd cfsub
bash setup.sh
```

菜单：

```
1) 🚀 部署到 Cloudflare Worker （推荐，支持 Cron 自动更新）
2) 📄 部署到 Cloudflare Pages
3) 🔨 仅构建 dist/_worker.js
4) 💀 卸载 / 清理 Cloudflare 资源
0) 🚪 退出
```

选 `1` 后向导会自动完成：

1. 检查 Node.js / npm
2. `npm install`（安装 esbuild、wrangler）
3. `node scripts/build.js` 构建出 `dist/_worker.js`
4. `wrangler login` —— 打开浏览器完成 Cloudflare 授权
5. 让你输入 Worker 名称（默认 `cfsub`）
6. `wrangler kv namespace create CF_SUB_KV`，自动解析出 KV ID
7. 生成 `wrangler.toml`
8. `wrangler deploy`
9. 输出面板地址、订阅地址、初始密钥

> Windows 用户：可用 Git Bash / WSL 执行 `bash setup.sh`。

---

### 方式二：Wrangler CLI 部署到 Worker

适合：想要手动掌控每一步，或需要写 CI。

**第 1 步：构建**

```bash
git clone https://github.com/xiaohefx/cfsub.git
cd cfsub
npm install
node scripts/build.js          # 产出 dist/_worker.js
```

**第 2 步：登录**

```bash
npx wrangler login
```

**第 3 步：创建存储并填 ID**

推荐用 D1：

```bash
npx wrangler d1 create cfsub-db
```

把输出里的 `database_id` 填进 `wrangler.toml`（把这一段的注释 `#` 去掉）：

```toml
[[d1_databases]]
binding = "IOT_DB"
database_name = "cfsub-db"
database_id = "这里粘贴 database_id"
```

也可以继续用 KV（把占位符 `YOUR_KV_NAMESPACE_ID_HERE` 换成真实 id）：

```toml
[[kv_namespaces]]
binding = "CF_SUB_KV"
id = "这里粘贴 id"
```

**第 4 步：部署**

```bash
npx wrangler deploy
```

终端会输出类似：

```
 Published cfsub (2.31 sec)
   https://cfsub.你的子域.workers.dev
```

**第 5 步（可选）控制台方式**

如果你不想用 CLI，也可以在 Cloudflare 控制台操作：

1. Workers 和 Pages → 创建 → 创建 Worker → 部署
2. 进入 Worker → 设置 → 变量 → KV 命名空间绑定 → 添加 `CF_SUB_KV`
3. 快速编辑 / 上传资产，把 `dist/_worker.js` 的内容粘贴进去并部署
4. 设置 → 运行时 → 兼容性日期选择 `2025-06-01`，兼容性标志添加 `nodejs_compat`

---

### 方式三：部署到 Cloudflare Pages

适合：想用 Pages 域名（`*.pages.dev`）或已有 Pages 项目。

**A. 用 Wrangler 上传（最简单）**

```bash
npm install
node scripts/build.js
npx wrangler pages deploy dist --project-name cfsub
```

> `dist` 里只有 `_worker.js`，Pages 会以「高级模式」把它当作 Functions 入口。

**B. 用 GitHub 连接（自动构建）**

1. 控制台 → Workers 和 Pages → 创建 → Pages → 连接到 Git
2. 选择本仓库，构建配置填：

   | 项 | 值 |
   | --- | --- |
   | 框架预设 | 无 |
   | 构建命令 | `npm install && node scripts/build.js` |
   | 构建输出目录 | `dist` |

3. 保存并部署

**⚠️ Pages 必须手动绑定存储**（这一步不能省，否则面板无法保存配置）：

> 控制台 → Workers 和 Pages → 你的项目 → **设置** → **Functions**
> → **D1 数据库绑定**（或 KV 命名空间绑定）→ 添加
> 变量名：`IOT_DB`（用 KV 则填 `CF_SUB_KV`）　值：刚才创建的资源
> 绑定后**重新部署一次**才能生效。

**Pages 与 Worker 的差异**

| 能力 | Worker | Pages |
| --- | --- | --- |
| KV 绑定 | `wrangler.toml` 自动带 | 需在控制台手动绑定 |
| Cron 定时自动更新 | ✅ 支持 | ❌ 不支持（需手动点「部署最新版」） |
| 自定义域名 | ✅ | ✅ |
| 面板 / 订阅 / 代理 | ✅ 完全一致 | ✅ 完全一致 |

---

## 三、访问地址

假设你的域名是 `https://cfsub.xxx.workers.dev`，面板路径默认是 `sub`：

| 路径 | 说明 |
| --- | --- |
| `/sub/dash` | **中文管理面板**（默认密钥 `admin`，务必第一时间修改） |
| `/sub` | 默认订阅，按客户端 UA 自动返回格式 |
| `/sub?sub=<用户名>` | 指定用户的订阅 |
| `/sub?sub=<用户名>&flag=clash` | Clash / Mihomo / Stash YAML |
| `/sub?sub=<用户名>&flag=singbox` | Sing-box JSON |
| `/sub?sub=<用户名>&flag=v2ray` | v2rayN JSON |
| `/sub?sub=<用户名>&flag=base64` | Base64 明文节点 |
| `/` 及其他路径 | 伪装主页（反向代理到 `maintenanceHost`） |

面板路径 `sub` 可以在「⚙️ 基本设置 → 面板路径」里改，改完会自动跳转到新地址。

支持的客户端：Clash / Clash.Meta / Mihomo / Stash、Sing-box / Hiddify / NekoBox / Karing、v2rayN / v2rayNG、Shadowrocket、Loon、Surge、Quantumult X。

---

## 四、可配置变量（环境变量 + 面板）

### 优先级

```
环境变量（wrangler.toml [vars] 或控制台变量）
        ↓ 覆盖
面板保存的配置（存在 KV 里）
        ↓ 覆盖
内置默认值
```

**注意**：凡是用环境变量设过的字段会被**锁定**，面板里改了也不会生效——面板顶部会显示被锁定的字段列表，避免你以为保存失败。想恢复面板控制，删掉对应的环境变量即可。

### 环境变量写法

`wrangler.toml`：

```toml
[vars]
UUID = "11111111-2222-4333-8444-555555555555"
MASTER_KEY = "我的密钥"
PORTS = "443,2053,8443"
NAME_PREFIX = "CFSub"
```

或在控制台：Worker → 设置 → 变量和机密 → 添加（纯文本用「变量」，敏感值用「机密」）。

### 完整变量表

#### 账号与面板

| 环境变量 | 面板位置 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `UUID` | 基本设置 → 节点凭证 → 主 UUID | 字符串 | 首次自动派生 | 主 UUID，必填性最高的一项 |
| `TROJAN_PASSWORD` | 基本设置 → 节点凭证 → Trojan 密码 | 字符串 | 空（等于 UUID） | Trojan 口令，建议单独设置 |
| `MASTER_KEY` / `ADMIN` / `PASSWORD` | 基本设置 → 主管理密钥 | 字符串 | `admin` | **后台登录密钥，务必修改** |
| `API_ROUTE` | 基本设置 → 面板路径 | 字符串 | `sub` | 面板与订阅的根路径 |
| `NAME` | 基本设置 → 面板名称 | 字符串 | 空 | 默认 profile 显示名 |

#### 协议与节点

| 环境变量 | 面板位置 | 可选值 | 默认值 |
| --- | --- | --- | --- |
| `MODE` / `PROTOCOL` | 基本设置 → 协议模式 | `vless` / `trojan` / `xhttp` / `both`(VLESS+Trojan) / `all`(三种全开) | `vless` |
| `PORTS` | 基本设置 → 端口多选 | 逗号分隔，可选 `443,2053,2083,2087,2096,8443,80,8080,8880,2052,2082,2086,2095` | `443,2053,2083,2087,2096,8443` |
| `SUB_PATH` / `WSPATH` | 基本设置 → WS 路径 | 以 `/` 开头 | `/` |
| `HOSTS` / `HOST` | 基本设置 → 多域名 | 逗号分隔 | 空（用当前访问域名） |
| `FP` / `FINGERPRINT` | 基本设置 → uTLS 指纹 | `chrome`/`firefox`/`safari`/`ios`/`android`/`edge`/`random`/`randomized` | `chrome` |
| `ALPN` | 基本设置 → ALPN | `h3` / `h2` / `http/1.1` / `h3,h2` / `h2,http/1.1` / `h3,h2,http/1.1` | 空（自动协商） |
| `ECH` | 基本设置 → 启用 ECH | `1`/`true`/`yes`/`on` | 关闭 |
| `ECH_DOMAIN` | 基本设置 → ECH 域名 | 域名 | `cloudflare-ech.com` |
| `ECH_DNS` | 基本设置 → ECH DoH | URL | `https://cloudflare-dns.com/dns-query` |
| `ALLOW_INSECURE` | 基本设置 → 允许不安全证书 | 布尔 | 关闭 |
| `ENABLE_EARLY_DATA` | 基本设置 → 0-RTT Early Data | 布尔 | 开启 |
| `ENABLE_TFO` | — | 布尔 | 关闭 |
| `NAME_PREFIX` | 基本设置 → 命名前缀 | 字符串 | `CFSub` |
| `MAX_CONFIGS` / `MAX_CONFIGS_N` | 基本设置 → 每用户最大节点数 | 数字 | `12` |
| `SUB_USER_AGENT` | 基本设置 → 订阅 UA 白名单 | 字符串 | 空 |
| `SUB_CONVERTER` | 基本设置 → 订阅转换后端 | URL | `https://url.v1.mk/sub` |

#### 反代与优选

| 环境变量 | 面板位置 | 说明 |
| --- | --- | --- |
| `PROXYIP_MODE` | 高级设置 → 反代模式 | `auto`（自动）/ `region`（指定地区）/ `custom`（自定义）/ `off`（关闭） |
| `PROXYIP` / `P` | 高级设置 → 自定义 ProxyIP | 支持 `1.2.3.4`、`1.2.3.4:8443`、`proxy.example.com:443` |
| `PROXYIP_REGION` / `WK` | 高级设置 → 指定地区 | `HK` `US` `SG` `JP` `KR` `DE` `SE` `NL` `FI` `GB` `Oracle` `DigitalOcean` `Vultr` `Multacom` |
| `BACKUP_PROXYIP` | 高级设置 → 兜底反代 | 默认 `proxyip.tp1.090227.xyz` |
| `NAT64` | 高级设置 → NAT64 前缀 | 如 `[2602:fc59:b0:64::]`，留空关闭 |
| `PREFERRED` / `YX` | 高级设置 → 自定义优选 IP | 每行一条：`IP:端口#备注` 或 `IP#备注` |
| `PREFERRED_URLS` / `YXURL` | 高级设置 → 自定义远程优选源 | 逗号分隔的 URL |
| `CLEAN_IPS` / `CLEANIP` | 高级设置 → Clean IP | 逗号分隔 |
| `ENABLE_OFFICIAL_IP` | 高级设置 | 内置官方直连地址池开关，默认开 |
| `ENABLE_PREFERRED_DOMAIN` | 高级设置 | 内置 21 个优选域名开关，默认开 |
| `ENABLE_PREFERRED_IP` | 高级设置 | 远程优选 IP 源开关，默认开 |
| `ENABLE_REMOTE_PREFERRED` | 高级设置 | 允许拉取远程优选源，默认开 |
| `ENABLE_DIRECT_CONFIGS` | — | 额外生成直连节点，默认开 |

#### 出站代理

| 环境变量 | 说明 |
| --- | --- |
| `OUTBOUND` / `S` | 出站代理地址，如 `socks5://user:pass@1.2.3.4:1080`、`http://host:8080`、`https://host:8443`；不带前缀视为 socks5 |
| `OUTBOUND_MODE` / `QJ` | `auto` 先直连后代理 / `direct-first` 优先直连 / `proxy-first` 优先代理 / `proxy-only` 只走代理（不回落，防出口 IP 泄漏） |

#### 网络与其他

| 环境变量 | 说明 | 默认值 |
| --- | --- | --- |
| `DOH` / `CUSTOM_DNS` | DoH 解析服务 | `https://cloudflare-dns.com/dns-query` |
| `RESOLVE_IP` | 解析 IP | `1.1.1.1` |
| `MAINTENANCE_HOST` / `URL` | 伪装主页，逗号分隔随机选一个 | `https://www.ubuntu.com` |
| `KILL_SWITCH` / `PAUSED` | 紧急开关，开启后停止一切代理转发 | 关闭 |
| `LIMIT_TOTAL_GB` | 新用户默认总流量（GB），0 = 不限 | `0` |
| `LIMIT_DAILY_GB` | 新用户默认每日流量（GB） | `0` |
| `EXPIRY_DAYS` | 新用户默认有效天数，0 = 永久 | `0` |
| `GITHUB_REPO` | 自动更新仓库，如 `xiaohefx/cfsub` | 空 |
| `DEPLOY_TARGET` | `worker` / `pages` | `worker` |
| `CF_ACCOUNT_ID` | Cloudflare 账户 ID（自动更新用） | 空 |
| `CF_API_TOKEN` | Cloudflare API Token（自动更新用） | 空 |
| `CF_WORKER_NAME` | Worker 名称（自动更新用） | 空 |
| `CF_PAGES_PROJECT` | Pages 项目名（Pages 自动更新用） | 空 |
| `AUTO_UPDATE` | 开启 Cron 自动更新 | 关闭 |
| `TG_TOKEN` / `TG_CHAT_ID` / `TG_ADMIN_ID` | Telegram 通知配置 | 空 |
| `SILENT_ALERTS` | 关闭告警推送 | 关闭 |

> 布尔型变量的值写 `1`、`true`、`yes`、`on` 任一即表示开启。

---

## 五、UUID 能否修改

**能，而且有两种改法：**

1. **面板改**：「⚙️ 基本设置 → 节点凭证 → 主 UUID」，直接编辑输入框，或点「🎲 重新生成 UUID」按钮自动生成一个新的 UUID v4，然后点右下角「保存全部」（或 `Ctrl/Cmd + S`）。
2. **环境变量改**：设置 `UUID = "你的UUID"`，优先级最高，会锁定该字段。

**改 UUID 的影响**：

- 所有之前生成、已导入客户端的旧节点**立即失效**
- 订阅链接本身不变（链接里不含 UUID，UUID 在订阅内容里）
- 需要到「🔗 节点信息」重新复制订阅链接或重新导入

**每个用户也有独立 UUID**：在「👥 用户管理」里新增用户时系统会自动分配一个独立 UUID（面板里能看到前 8 位），该用户的节点用他自己的 UUID，互不影响。删除/暂停某个用户不会影响其他人。

**Trojan 密码**：默认等于主 UUID；建议在「节点凭证 → Trojan 密码」里单独设一个，或在创建用户时让系统用该用户的独立 UUID。

---

## 六、后台功能模块

| 模块 | 内容 |
| --- | --- |
| **📊 概览** | 环境变量锁定提示、更新横幅、用户统计卡、总/今日流量、系统信息、最近日志 |
| **🔗 节点信息** | 每个用户（含默认）的 5 种订阅链接、复制、二维码、一键导入 Clash / Sing-box |
| **🌍 网络诊断** | 出口 IP / CF 机房 / 地区、延迟测试、⚡ 智能解析 Clean IP、预览当前优选 IP |
| **👥 用户管理** | 增删改查、总流量上限 / 每日上限 / 到期天数 / 并发上限 / 节点数上限 / 专属 ProxyIP / 专属端口 / 专属协议、启用暂停、流量重置、复制链接 |
| **⚙️ 基本设置** | 节点凭证（UUID / Trojan 密码）、面板名称与路径、管理密钥、协议模式、端口多选、WS 路径、多域名、指纹、ALPN、ECH、订阅命名、新用户默认值、GitHub 自动更新与 Cloudflare 凭据 |
| **🧩 高级设置** | 优选 IP 开关与自定义、反代模式/地区/自定义地址/NAT64、出站代理与出站方式、DoH、伪装主页、Telegram |
| **📜 日志** | 登录、用户变更、更新等最近 100 条 |
| **❓ 帮助** | 常见问题 |

快捷键：`Ctrl/Cmd + S` 保存全部配置；右下角悬浮「保存全部」按钮在有未保存改动时会变黄。

---

## 七、内置资源（均可关闭或替换）

| 类别 | 内容 | 来源 |
| --- | --- | --- |
| 官方直连地址池 | 10 个 Cloudflare 官方 IP，分布在 10 个不同 /24 段 | cfnew |
| 地区反代域名 | HK / US / SG / JP / KR / DE / SE / NL / FI / GB + Oracle / DigitalOcean / Vultr / Multacom，含邻近地区回退链 | cmliu（cfnew 整理） |
| 机房级反代 | `{colo}.proxyip.cmliussss.net`（按 Worker 机房自动匹配） | cmliu |
| 兜底反代 | `proxyip.tp1.090227.xyz` | cmliu |
| 优选反代域名 | `bestcf.top`、`cf.090227.xyz`、`cfip.cfcdn.vip` 等 21 个 | cfnew |
| 远程优选 IP 源 | `cmliu/cmliu` 的 `CF-CIDR.txt` 及 `ct`(电信) / `cu`(联通) / `cmcc`(移动) 分段 | cmliu |
| NAT64 前缀 | `[2a02:898:146:64::]`、`[2602:fc59:b0:64::]`、`[2602:fc59:11:64::]` | BPB |
| 端口表 | TLS：`443,2053,2083,2087,2096,8443`；明文：`80,8080,8880,2052,2082,2086,2095` | 通用 |

连接尝试顺序：**直连 → 官方直连池 → 机房反代 → 优选域名 → 地区反代 → 兜底反代 → 出站代理 → NAT64**。

---

## 八、GitHub 自动更新

1. 仓库根目录需要包含 `version`（如 `1.0.0`）和 `dist/_worker.js`。本仓库自带的 `.github/workflows/build.yml` 会在你 push `src/` 后自动构建并提交 `dist/_worker.js`，所以一般不用管。
2. 面板「⚙️ 基本设置 → GitHub 自动更新」填写：
   - 仓库：`xiaohefx/cfsub`
   - Cloudflare 账户 ID、API Token（需要 `Workers Scripts:Edit` 权限）、Worker 名称
   - 部署目标：`worker` 或 `pages`
3. 勾选「开启自动更新」并保存。Cron 每 6 小时检查一次版本，有新版本就调用 Cloudflare API 重新部署。
4. 也可以随时手动点「部署最新版」或「强制覆盖部署」。

> API Token 创建：Cloudflare 控制台 → 我的个人资料 → API 令牌 → 创建令牌 → 使用「编辑 Cloudflare Workers」模板。

---

## 九、项目结构

```
src/
├── index.ts                 # 入口：路由分发 / 订阅下发 / Cron 自动更新
├── utils.ts                 # base64、UUID、字节工具、格式化
├── config/
│   ├── defaults.ts          # 全局默认配置与用户默认字段
│   ├── db.ts                # 存储抽象层：D1 优先、KV 兜底（同一套 key/value 接口）
│   ├── env.ts               # 环境变量 → 配置映射（优先级最高）
│   ├── resources.ts         # 内置 ProxyIP / 优选 IP / 端口 / NAT64 / 规则集
│   └── store.ts             # KV 持久化（sys_config / sys_usage / sys_logs）
├── core/
│   ├── protocol.ts          # SHA-224、VLESS / Trojan / xhttp 头解析、出站代理解析
│   ├── transport.ts         # 候选连接序列、SOCKS5 / HTTP CONNECT 隧道、NAT64
│   ├── stream.ts            # VLESS / Trojan over WebSocket 转发与真实字节流量统计
│   ├── xhttp.ts             # XHTTP（stream-one）
│   ├── dns.ts               # DoH 查询（A / AAAA / TXT）
│   └── preferred.ts         # 优选 IP 汇总、CIDR 随机、智能解析 Clean IP
├── sub/
│   ├── build.ts             # 节点生成、命名模板、URI
│   └── configs.ts           # Clash YAML / Sing-box JSON / v2ray JSON
└── panel/
    ├── api.ts               # auth / sync / users / stats / logs / tools / update
    ├── dashboard.ts         # 面板 HTML（构建期注入）
    ├── subscription.ts      # 订阅信息页
    └── assets/dashboard.html
scripts/build.js             # esbuild 打包 → dist/_worker.js
setup.sh                     # 中文安装向导
wrangler.toml                # 部署配置
```

---

## 十、常见问题

**Q：不用 D1，只绑 KV，用户管理和流量限制真的都能用吗？**
A：能。用户列表、增删改查、总流量/每日上限、到期时间、并发上限、流量重置、超限自动禁用，全部走同一套接口，与后端无关。nahan 的 D1 本身也只是用一张 `kv_store(key, value)` 表模拟 KV。唯一差别是 KV 免费版写配额只有 1000/天，流量大时建议换 D1。面板「📊 概览 → 存储后端」会显示当前用的是哪一个。

**Q：怎么知道我现在用的是 D1 还是 KV？**
A：「📊 概览 → 系统信息 → 存储后端」会显示 `✅ D1 数据库` 或 `✅ KV 命名空间`。两个都绑了就显示 D1。

**Q：绑定变量名必须一致吗？**
A：D1 认 `IOT_DB` / `DB` / `D1`；KV 认 `CF_SUB_KV` / `KV` / `C` / `cfsub`。建议按默认名字来。

**Q：面板打不开 / 一直显示「未检测到存储绑定」？**
A：说明 D1 和 KV 都没绑上。Worker 检查 `wrangler.toml` 的 `[[d1_databases]]` / `[[kv_namespaces]]`；Pages 必须去控制台 → 设置 → Functions → D1 数据库绑定（或 KV 命名空间绑定）里加，并且**重新部署一次**。

**Q：改了配置没生效？**
A：先看面板顶部有没有「🔒 由环境变量锁定」的提示，被锁定的字段改了不会生效。另外 KV 配置有 30 秒缓存，最多等 30 秒。

**Q：流量统计准吗？**
A：按上行 + 下行的**真实字节数**统计（nahan 只统计连接次数再乘估算值）。计数在 isolate 内存里累计后落盘：D1 每 15 秒、KV 每 60 秒（省写配额），连接结束时会强制落盘一次。极端情况下（进程被回收）可能丢最后一个周期的计数。

**Q：超限后是怎么处理的？**
A：每次新连接建立时会检查：到期、状态、总量上限、每日上限，任一不满足就断开（用户列表里状态自动变成「超限」）。已经在传的数据不会被掐断，是「下次连接生效」。想恢复就点用户行的「重置」清零，或调高上限。

**Q：为什么订阅里有些节点连不上？**
A：内置优选 IP / 域名是公开维护的资源，会随时间失效。可以在「高级设置」里关闭内置源、填入自己的优选 IP，或点「⚡ 智能解析」重新解一批。

**Q：UDP / QUIC 能用吗？**
A：仅支持 VLESS 的 DNS 查询（53 端口），走 TCP 转发到 `8.8.4.4:53`。通用 UDP 与 QUIC 不支持。

**Q：会不会违反 Cloudflare 条款？**
A：本项目把 Workers 用作 TCP 转发，请自行评估并遵守 Cloudflare 服务条款与当地法规，勿用于违法用途。

---

## 致谢

- [byJoey/cfnew](https://github.com/byJoey/cfnew) —— 官方直连池、地区反代域名表、优选域名、出站代理设计
- [bia-pain-bache/BPB-Worker-Panel](https://github.com/bia-pain-bache/BPB-Worker-Panel) —— 工程结构、NAT64、配置校验思想
- [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) —— 机房级反代、CF-CIDR 运营商分段、协议栈实现
- [itsyebekhe/nahan](https://github.com/itsyebekhe/nahan) —— 多用户订阅模型与面板模块划分
