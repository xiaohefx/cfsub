# CFSub · Cloudflare 订阅管理面板

部署在 Cloudflare 上的多用户订阅管理面板，后台为中文界面。

- **用户管理**：添加 / 编辑 / 删除用户，每个用户独立 UUID
- **流量限制**：按用户设置总流量上限、每日上限、到期时间、并发上限，超限自动禁用
- **多协议订阅**：VLESS / Trojan / XHTTP，按客户端自动返回 Clash、Sing-box、v2rayN、Base64 格式
- **内置资源**：内置 ProxyIP、优选反代域名、优选 IP 源、NAT64 前缀，开箱即用，也可全部自定义
- **端口设置**：13 个端口可勾选，支持多域名
- **自动更新**：填好 GitHub 仓库与 Cloudflare 凭据，可定时或一键重新部署
- **双部署**：支持 Cloudflare Worker 与 Cloudflare Pages

---

## 目录

1. [部署前准备](#一部署前准备)
2. [部署方式一：Cloudflare 控制台网页部署](#二部署方式一cloudflare-控制台网页部署)
3. [部署方式二：Wrangler CLI 部署](#三部署方式二wrangler-cli-部署)
4. [部署方式三：Cloudflare Pages 部署](#四部署方式三cloudflare-pages-部署)
5. [访问地址](#五访问地址)
6. [可配置变量](#六可配置变量)
7. [修改 UUID 与凭证](#七修改-uuid-与凭证)
8. [后台功能模块](#八后台功能模块)
9. [内置资源](#九内置资源)
10. [GitHub 自动更新](#十github-自动更新)
11. [项目结构](#十一项目结构)
12. [常见问题](#十二常见问题)

---

## 一、部署前准备

### 1.1 需要的账号与工具

| 项目 | 要求 |
| --- | --- |
| Cloudflare 账号 | 免费版即可，[注册地址](https://dash.cloudflare.com/sign-up) |
| Node.js | 18 及以上，仅本地构建时需要。网页部署可跳过 |
| 浏览器 | Chrome / Edge / Firefox 均可 |

### 1.2 获取部署文件

网页部署需要一个文件：`dist/_worker.js`（约 117 KB）。三种获取方式任选：

**方式 A · 直接复制（推荐，无需安装任何东西）**

打开下面的链接，全选复制全部内容：

```
https://raw.githubusercontent.com/xiaohefx/cfsub/main/dist/_worker.js
```

**方式 B · 本地构建**

```bash
git clone https://github.com/xiaohefx/cfsub.git
cd cfsub
npm install
node scripts/build.js
```

产物在 `dist/_worker.js`。

**方式 C · GitHub 下载**

仓库页面进入 `dist` 目录 → 点击 `_worker.js` → 右上角「Download raw file」。

### 1.3 创建 KV 命名空间

用户、配置、流量统计、日志全部存在 Cloudflare KV 里，**这一步不能省**。

在电脑终端执行（需要先 `npx wrangler login`，也可以直接在 Cloudflare 控制台创建）：

```bash
npx wrangler kv namespace create CF_SUB_KV
```

**控制台创建路径**：Workers 和 Pages → KV → 创建命名空间 → 名称填 `CF_SUB_KV` → 添加。

### 1.4 绑定变量速查

| 绑定类型 | 变量名 | 是否必填 | 用途 |
| --- | --- | --- | --- |
| KV 命名空间 | `CF_SUB_KV` | 必填 | 存用户、配置、流量、日志 |

> 变量名必须一字不差写成 `CF_SUB_KV`。代码里会依次尝试 `CF_SUB_KV`、`KV`、`C`、`cfsub`，但建议只用默认名。
> 兼容性日期固定 `2025-06-01`，兼容性标志需要 `nodejs_compat`。

---

## 二、部署方式一：Cloudflare 控制台网页部署

全程在浏览器里操作，不需要安装 Node.js 或使用命令行。

### 步骤 1 · 创建 Worker

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 左侧菜单点击 **Workers 和 Pages**
3. 右上角点击 **创建** → 选择 **创建 Worker**
4. 名称填 `cfsub`（只能用小写字母、数字和连字符）
5. 点击 **部署**，等待几秒完成

### 步骤 2 · 替换代码

1. 部署完成后点击 **编辑代码**
2. 在编辑器里按 `Ctrl + A` 全选，按 `Delete` 清空默认的 Hello World 代码
3. 打开下面地址，全选复制全部内容：

   ```
   https://raw.githubusercontent.com/xiaohefx/cfsub/main/dist/_worker.js
   ```

4. 粘贴进编辑器（粘贴后会有几十秒的卡顿，属正常现象）
5. 点击右上角 **部署**

> 如果编辑器卡顿严重或粘贴失败，请改用[部署方式二](#三部署方式二wrangler-cli-部署)。

### 步骤 3 · 绑定 KV

1. 返回 Worker 页面，点击 **设置** 标签页
2. 点击 **变量和机密**
3. 页面下滑找到 **KV 命名空间绑定**，点击 **添加绑定**
4. 按下表填写：

   | 字段 | 填写内容 |
   | --- | --- |
   | 变量名称 | `CF_SUB_KV` |
   | KV 命名空间 | 选择刚才创建的命名空间 |

5. 点击 **部署**

### 步骤 4 · 兼容性设置

1. 仍在 **设置** 标签页，点击 **运行时**
2. 按下表修改：

   | 字段 | 填写内容 |
   | --- | --- |
   | 兼容性日期 | 选择 `2025-06-01` |
   | 兼容性标志 | 添加 `nodejs_compat` |

3. 点击 **保存**

### 步骤 5 · 打开面板

浏览器访问：

```
https://cfsub.你的子域.workers.dev/sub/dash
```

初始管理密钥为 `admin`，登录后请立刻修改。

### 步骤 6 · 以后怎么更新代码

项目更新后，重复 **步骤 2** 即可：编辑代码 → 全选清空 → 粘贴新内容 → 部署。
已保存的用户与配置不受影响，它们存在 KV 里。

### 步骤 7 · 可选：设置环境变量

如果要用环境变量预配置（详见[可配置变量](#六可配置变量)）：

1. **设置** → **变量和机密** → **添加**
2. 类型选 **文本**（敏感信息选 **机密**）
3. 名称填变量名，例如 `UUID`；值填对应内容
4. 点击 **部署**

---

## 三、部署方式二：Wrangler CLI 部署

适合需要自动化或喜歡命令行操作的情况。

### 步骤 1 · 构建

```bash
git clone https://github.com/xiaohefx/cfsub.git
cd cfsub
npm install
node scripts/build.js
```

### 步骤 2 · 登录

```bash
npx wrangler login
```

浏览器会打开授权页面，点击 **允许**。

### 步骤 3 · 创建 KV 并填写 ID

```bash
npx wrangler kv namespace create CF_SUB_KV
```

输出中有一行类似：

```
id = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
```

把这串 ID 填进项目根目录的 `wrangler.toml`：

```toml
[[kv_namespaces]]
binding = "CF_SUB_KV"
id = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
```

### 步骤 4 · 部署

```bash
npx wrangler deploy
```

终端会输出访问地址，例如：

```
https://cfsub.你的子域.workers.dev
```

### 以后怎么更新

```bash
git pull
npm install
node scripts/build.js
npx wrangler deploy
```

---

## 四、部署方式三：Cloudflare Pages 部署

### 4.1 控制台上传（推荐）

**步骤 1 · 准备文件**

本地构建出 `dist/_worker.js`：

```bash
git clone https://github.com/xiaohefx/cfsub.git
cd cfsub
npm install
node scripts/build.js
```

**步骤 2 · 创建 Pages 项目**

1. 控制台左侧 **Workers 和 Pages**
2. **创建** → **Pages** → **上传资产**
3. 项目名称填 `cfsub`
4. 把 `dist` 文件夹整个拖进上传区（只需这一个文件）
5. 点击 **部署**

**步骤 3 · 绑定 KV（必做）**

Pages 不支持配置文件绑定，必须在控制台操作：

1. 进入项目 → **设置** → **Functions**
2. 找到 **KV 命名空间绑定** → 点击 **添加绑定**

   | 字段 | 填写内容 |
   | --- | --- |
   | 变量名称 | `CF_SUB_KV` |
   | KV 命名空间 | 选择刚才创建的命名空间 |

3. 回到 **部署** 标签页，**重新部署一次**才能生效

**步骤 4 · 访问**

```
https://cfsub.pages.dev/sub/dash
```

### 4.2 连接 Git 自动构建

1. 控制台 → **Workers 和 Pages** → **创建** → **Pages** → **连接到 Git**
2. 选择本仓库
3. 构建配置按下表填写：

   | 字段 | 填写内容 |
   | --- | --- |
   | 框架预设 | 无 |
   | 构建命令 | `npm install && node scripts/build.js` |
   | 构建输出目录 | `dist` |

4. 保存并部署
5. 部署完成后同样需要按 **4.1 步骤 3** 绑定 KV，并重新部署一次

### 4.3 Worker 与 Pages 的差异

| 能力 | Worker | Pages |
| --- | --- | --- |
| KV 绑定方式 | 控制台或 `wrangler.toml` | 只能控制台 |
| 定时自动更新 | 支持 | 不支持，需手动点部署 |
| 面板与代理功能 | 完全一致 | 完全一致 |

---

## 五、访问地址

假设域名为 `https://cfsub.xxx.workers.dev`，面板路径默认为 `sub`：

| 路径 | 说明 |
| --- | --- |
| `/sub/dash` | 中文管理面板 |
| `/sub` | 默认订阅，按客户端自动识别格式 |
| `/sub?sub=用户名` | 指定用户的订阅 |
| `/sub?sub=用户名&flag=clash` | Clash / Mihomo / Stash |
| `/sub?sub=用户名&flag=singbox` | Sing-box |
| `/sub?sub=用户名&flag=v2ray` | v2rayN JSON |
| `/sub?sub=用户名&flag=base64` | Base64 明文 |
| 其他路径 | 伪装主页 |

面板路径 `sub` 可在「⚙️ 基本设置 → 面板路径」修改。

---

## 六、可配置变量

### 6.1 优先级

```
环境变量  >  面板保存的配置（存 KV）  >  内置默认值
```

通过环境变量设置过的字段会被**锁定**，面板里改了也不会生效，面板顶部会显示被锁定的字段列表。
想恢复面板控制，删掉对应环境变量重新部署即可。

### 6.2 环境变量设置位置

| 部署方式 | 设置位置 |
| --- | --- |
| 控制台 Worker | 设置 → 变量和机密 → 添加 |
| Wrangler CLI | `wrangler.toml` 的 `[vars]` 段 |
| Pages | 设置 → 环境变量和机密 |

`wrangler.toml` 写法：

```toml
[vars]
UUID = "11111111-2222-4333-8444-555555555555"
MASTER_KEY = "你的密钥"
PORTS = "443,2053,8443"
```

### 6.3 账号与面板

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `UUID` | 主 UUID | 首次自动派生 |
| `TROJAN_PASSWORD` | Trojan 密码 | 空（等于 UUID） |
| `MASTER_KEY` | 后台登录密钥 | `admin` |
| `API_ROUTE` | 面板路径 | `sub` |
| `NAME` | 面板名称 | 空 |

`MASTER_KEY` 也接受别名 `ADMIN`、`PASSWORD`。

### 6.4 协议与节点

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `MODE` | 协议模式 | `vless` |
| `PORTS` | 端口，逗号分隔 | `443,2053,2083,2087,2096,8443` |
| `SUB_PATH` | WebSocket 路径 | `/` |
| `HOSTS` | 节点域名，逗号分隔 | 空（用当前域名） |
| `FP` | uTLS 指纹 | `chrome` |
| `ALPN` | ALPN | 空（自动协商） |
| `NAME_PREFIX` | 节点命名前缀 | `CFSub` |
| `MAX_CONFIGS` | 每用户节点数 | `12` |
| `SUB_CONVERTER` | 订阅转换后端 | `https://url.v1.mk/sub` |

`MODE` 可选值：

| 值 | 含义 |
| --- | --- |
| `vless` | 仅 VLESS |
| `trojan` | 仅 Trojan |
| `xhttp` | 仅 XHTTP |
| `both` | VLESS + Trojan |
| `all` | 三种全开 |

`PORTS` 可选值：

| 类型 | 端口 |
| --- | --- |
| TLS | `443` `2053` `2083` `2087` `2096` `8443` |
| 明文 | `80` `8080` `8880` `2052` `2082` `2086` `2095` |

`FP` 可选值：`chrome` `firefox` `safari` `ios` `android` `edge` `random` `randomized`

`ALPN` 可选值：`h3` `h2` `http/1.1` `h3,h2` `h2,http/1.1` `h3,h2,http/1.1`

### 6.5 反代与优选

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `PROXYIP_MODE` | 反代模式 | `auto` |
| `PROXYIP` | 自定义反代地址 | 空 |
| `PROXYIP_REGION` | 指定反代地区 | 空 |
| `BACKUP_PROXYIP` | 兜底反代 | `proxyip.tp1.090227.xyz` |
| `NAT64` | NAT64 前缀 | 空 |
| `PREFERRED` | 自定义优选 IP | 空 |
| `PREFERRED_URLS` | 自定义优选源 URL | 空 |
| `CLEAN_IPS` | Clean IP | 空 |

`PROXYIP_MODE` 可选值：

| 值 | 含义 |
| --- | --- |
| `auto` | 自动：官方直连池 + 机房反代 + 优选域名 |
| `region` | 按 `PROXYIP_REGION` 指定地区 |
| `custom` | 只用 `PROXYIP` 指定的地址 |
| `off` | 关闭，仅直连 |

`PROXYIP_REGION` 可选值：`HK` `US` `SG` `JP` `KR` `DE` `SE` `NL` `FI` `GB` `Oracle` `DigitalOcean` `Vultr` `Multacom`

`PROXYIP` 支持写法：`1.2.3.4`、`1.2.3.4:8443`、`proxy.example.com:443`

`PREFERRED` 每行一条，支持 `IP:端口#备注` 或 `IP#备注`

### 6.6 出站代理

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `OUTBOUND` | 出站代理地址 | 空 |
| `OUTBOUND_MODE` | 出站方式 | `auto` |

`OUTBOUND` 写法：`socks5://user:pass@1.2.3.4:1080`、`http://host:8080`、`https://host:8443`，不带前缀视为 socks5。

`OUTBOUND_MODE` 可选值：

| 值 | 含义 |
| --- | --- |
| `auto` | 先直连，失败后走反代或代理 |
| `direct-first` | 优先直连，失败再走代理 |
| `proxy-first` | 优先走代理，失败再直连 |
| `proxy-only` | 只走代理，不回落，防止出口 IP 泄漏 |

### 6.7 网络与其他

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `DOH` | DoH 解析服务 | `https://cloudflare-dns.com/dns-query` |
| `RESOLVE_IP` | 解析 IP | `1.1.1.1` |
| `MAINTENANCE_HOST` | 伪装主页 | `https://www.ubuntu.com` |
| `KILL_SWITCH` | 紧急停止代理 | 关闭 |
| `LIMIT_TOTAL_GB` | 新用户默认总流量 | `0`（不限） |
| `LIMIT_DAILY_GB` | 新用户默认每日流量 | `0`（不限） |
| `EXPIRY_DAYS` | 新用户默认天数 | `0`（永久） |
| `GITHUB_REPO` | 自动更新仓库 | 空 |
| `CF_ACCOUNT_ID` | Cloudflare 账户 ID | 空 |
| `CF_API_TOKEN` | Cloudflare API Token | 空 |
| `CF_WORKER_NAME` | Worker 名称 | 空 |
| `AUTO_UPDATE` | 开启定时自动更新 | 关闭 |
| `TG_TOKEN` | Telegram Bot Token | 空 |
| `TG_CHAT_ID` | Telegram Chat ID | 空 |

### 6.8 开关型变量

以下变量值为 `1`、`true`、`yes`、`on` 任一即表示开启：

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `ECH` | 加密 Client Hello | 关闭 |
| `ENABLE_EARLY_DATA` | 0-RTT Early Data | 开启 |
| `ALLOW_INSECURE` | 允许不安全证书 | 关闭 |
| `ENABLE_OFFICIAL_IP` | 内置官方直连池 | 开启 |
| `ENABLE_PREFERRED_DOMAIN` | 内置优选域名 | 开启 |
| `ENABLE_PREFERRED_IP` | 远程优选 IP 源 | 开启 |
| `ENABLE_REMOTE_PREFERRED` | 允许拉取远程源 | 开启 |
| `ENABLE_DIRECT_CONFIGS` | 额外生成直连节点 | 开启 |
| `SILENT_ALERTS` | 关闭告警推送 | 关闭 |

### 6.9 面板里可以改哪些

除被环境变量锁定的字段外，以下内容都可以在「⚙️ 基本设置」和「🧩 高级设置」中修改并即时生效：

| 模块 | 可改项 |
| --- | --- |
| 节点凭证 | 主 UUID、Trojan 密码 |
| 面板 | 名称、路径、管理密钥 |
| 协议与端口 | 模式、端口、WS 路径、多域名、指纹、ALPN、ECH |
| 订阅 | 命名前缀、命名策略、节点数、UA 白名单、转换后端 |
| 新用户默认值 | 总流量、每日流量、有效天数 |
| 优选 | 各类开关、自定义优选 IP、远程优选源、Clean IP |
| 反代 | 模式、地区、自定义地址、兜底地址、NAT64 |
| 出站 | 代理地址、出站方式 |
| 网络 | DoH、解析 IP、伪装主页 |
| 通知 | Telegram Token、Chat ID、管理员 ID |
| 自动更新 | 仓库、账户 ID、API Token、Worker 名 |
| 紧急 | Kill Switch 开关 |

---

## 七、修改 UUID 与凭证

### 面板修改（推荐）

「⚙️ 基本设置 → 节点凭证」

| 字段 | 操作 |
| --- | --- |
| 主 UUID | 直接在输入框编辑，或点「🎲 重新生成 UUID」自动生成 |
| Trojan 密码 | 直接编辑，留空则等于主 UUID |

改完点右下角「保存全部」或按 `Ctrl + S`。

### 环境变量修改

设置 `UUID = "你的UUID"`，优先级高于面板，会锁定该字段。

### 修改后有什么影响

| 项目 | 是否受影响 |
| --- | --- |
| 订阅链接地址 | 不受影响，链接里不含 UUID |
| 已导入客户端的旧节点 | 立即失效，需要重新导入 |
| 已保存的用户与配置 | 不受影响 |

### 每个用户的 UUID

「👥 用户管理」新增用户时，系统自动分配独立 UUID（列表里显示前 8 位）。
每个用户用自己的 UUID，互不干扰。删除或暂停某个用户不影响其他人。

---

## 八、后台功能模块

| 模块 | 内容 |
| --- | --- |
| 概览 | 锁定提示、更新横幅、用户统计、流量统计、系统信息、最近日志 |
| 节点信息 | 每个用户的订阅链接、复制、二维码、一键导入 |
| 网络诊断 | 出口 IP、CF 机房、延迟测试、智能解析 Clean IP、预览优选 IP |
| 用户管理 | 增删改查、流量与到期设置、启用暂停、流量重置 |
| 基本设置 | 节点凭证、面板、协议与端口、订阅、新用户默认值、自动更新 |
| 高级设置 | 优选、反代、出站代理、网络、Telegram |
| 日志 | 最近 100 条操作记录 |
| 帮助 | 常见问题 |

快捷键 `Ctrl + S` 保存。有未保存改动时右下角按钮会变黄。

---

## 九、内置资源

以下资源开箱即用，全部可在「🧩 高级设置」中关闭或替换：

| 类别 | 内容 |
| --- | --- |
| 官方直连池 | 10 个 Cloudflare 官方 IP，分布在 10 个 /24 段 |
| 地区反代域名 | HK、US、SG、JP、KR、DE、SE、NL、FI、GB 及 Oracle、DigitalOcean、Vultr、Multacom |
| 机房级反代 | 按 Worker 所在机房自动匹配 |
| 兜底反代 | `proxyip.tp1.090227.xyz` |
| 优选反代域名 | 21 个第三方反代域名 |
| 远程优选源 | Cloudflare 官方段及电信、联通、移动分段 |
| NAT64 前缀 | 3 组 |

连接尝试顺序：直连 → 官方直连池 → 机房反代 → 优选域名 → 地区反代 → 兜底反代 → 出站代理 → NAT64。

---

## 十、GitHub 自动更新

### 需要准备

| 项目 | 获取方式 |
| --- | --- |
| 仓库名 | 如 `xiaohefx/cfsub` |
| 账户 ID | 控制台首页右侧「账户 ID」 |
| API Token | 我的个人资料 → API 令牌 → 使用「编辑 Cloudflare Workers」模板创建 |
| Worker 名称 | 你的 Worker 名，如 `cfsub` |

### 配置步骤

1. 进入「⚙️ 基本设置 → GitHub 自动更新」
2. 填写上表四项
3. 勾选「开启自动更新」
4. 点「保存全部」

开启后每 6 小时检查一次版本，有新版本自动调用 Cloudflare API 重新部署。
也可随时点「部署最新版」或「强制覆盖部署」手动触发。

> 仓库根目录需要包含 `version` 和 `dist/_worker.js`。本仓库自带的 `build.yml` 会在 push 后自动构建提交，一般无需手动处理。
> Pages 不支持定时任务，需要在面板里手动点击部署。

---

## 十一、项目结构

```
src/
├── index.ts                 入口：路由分发、订阅下发、定时自动更新
├── utils.ts                 base64、UUID、字节工具、格式化
├── config/
│   ├── defaults.ts          全局默认配置与用户默认字段
│   ├── env.ts               环境变量到配置的映射
│   ├── resources.ts         内置反代域名、优选 IP、端口、NAT64
│   └── store.ts             KV 读写：配置、流量、日志
├── core/
│   ├── protocol.ts          SHA-224、VLESS / Trojan / XHTTP 头解析
│   ├── transport.ts         候选连接、SOCKS5 / HTTP 隧道、NAT64
│   ├── stream.ts            WebSocket 转发与流量统计
│   ├── xhttp.ts             XHTTP stream-one
│   ├── dns.ts               DoH 查询
│   └── preferred.ts         优选 IP 汇总、CIDR 随机、智能解析
├── sub/
│   ├── build.ts             节点生成、命名模板、URI
│   └── configs.ts           Clash、Sing-box、v2ray 配置生成
└── panel/
    ├── api.ts               后台接口
    ├── dashboard.ts         面板 HTML
    ├── subscription.ts      订阅信息页
    └── assets/dashboard.html
scripts/build.js             esbuild 打包 → dist/_worker.js
setup.sh                     命令行安装向导
wrangler.toml                Wrangler 部署配置
```

---

## 十二、常见问题

**面板显示「未检测到 KV 命名空间绑定」**

说明 KV 没绑上。Worker 检查「设置 → 变量和机密 → KV 命名空间绑定」；Pages 要去「设置 → Functions → KV 命名空间绑定」添加，并且**重新部署一次**。变量名必须是 `CF_SUB_KV`。

**改了配置点保存却没生效**

先看面板顶部有没有「🔒 由环境变量锁定」的提示。被环境变量覆盖的字段，面板改了不会生效，删掉环境变量重新部署即可。另外配置有 30 秒缓存。

**控制台编辑器粘贴代码后卡顿或失败**

文件约 117 KB，浏览器编辑器处理大文件较慢。建议改用 [Wrangler CLI 部署](#三部署方式二wrangler-cli-部署)。

**流量统计准不准**

按上行加下行的真实字节统计。计数在内存中累计后落盘，最少间隔 120 秒，进程被回收时可能丢失最后一个周期（最多 2 分钟）的计数。

**超限后多久生效**

每次新建连接时检查到期、状态、总量、每日上限，任一不满足即断开，用户状态自动变为「超限」。已经在传输的数据不会被掐断。想恢复就点用户行的「重置」或调高上限。

**有些节点连不上**

内置优选 IP 与域名是公开维护的资源，会随时间失效。可在「🧩 高级设置」关闭内置源、填入自己的地址，或点「⚡ 智能解析」重新解析一批。

**支持 UDP 吗**

仅支持 VLESS 的 DNS 查询（53 端口）。通用 UDP 与 QUIC 不支持。

**Windows 怎么执行 setup.sh**

用 Git Bash 或 WSL 执行 `bash setup.sh`。也可以直接用[网页部署](#二部署方式一cloudflare-控制台网页部署)，不需要命令行。

---

## 致谢

- [byJoey/cfnew](https://github.com/byJoey/cfnew)
- [bia-pain-bache/BPB-Worker-Panel](https://github.com/bia-pain-bache/BPB-Worker-Panel)
- [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel)
- [itsyebekhe/nahan](https://github.com/itsyebekhe/nahan)
