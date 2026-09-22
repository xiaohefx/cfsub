import { DEFAULT_DOH, DEFAULT_ECH_DOMAIN, DEFAULT_DNS_IP, TLS_PORTS } from './resources.ts';

export const CURRENT_VERSION = '1.0.0';

/**
 * 配置结构版本。
 * 升级到 2 时做一次性迁移：关闭 0-RTT（Cloudflare Workers 不回显
 * Sec-WebSocket-Protocol，会导致带早期数据的握手失败）。
 * 已有部署的 KV 里存的是旧值，仅改默认值不会生效，必须迁移。
 */
export const SCHEMA_VERSION = 2;

/**
 * 全局默认配置。
 * 优先级：KV 持久化配置  >  环境变量  >  这里的默认值
 */
export const SYSTEM_DEFAULTS = {
  /* ---------- 基本 ---------- */
  name: '',
  apiRoute: 'sub', // 面板 / 订阅的根路径
  masterKey: 'admin', // 后台管理密钥（务必修改）
  isPaused: false, // Kill Switch：开启后停止代理

  /* ---------- 节点 ---------- */
  uuid: '', // 主 UUID，留空自动派生
  trojanPassword: '', // Trojan 密码，留空用 sha224(uuid)
  mode: 'vless', // vless | trojan | xhttp | both | all
  protocols: { vless: true, trojan: false, xhttp: false },
  ports: TLS_PORTS.join(','), // 节点端口，逗号分隔
  path: '/', // WS 路径
  hosts: '', // 多域名（逗号分隔），留空用当前访问域名
  fp: 'chrome', // uTLS 指纹
  alpn: '',
  ech: false,
  echDomain: DEFAULT_ECH_DOMAIN,
  echDns: DEFAULT_DOH,
  allowInsecure: false,
  enableTfo: false,
  // 0-RTT（ed=2560）默认关闭。
  // 原因：Cloudflare Workers 返回 101 时不会回显 Sec-WebSocket-Protocol，
  // 部分客户端会因此判定握手失败。实测带早期数据握手失败、不带则正常，
  // 与 cmliu 的默认值（启用0RTT: false）保持一致。需要时可在高级设置开启。
  enableEarlyData: false,

  /* ---------- 优选 / 反代 ---------- */
  enableOfficialIp: true, // 内置官方直连地址池
  enablePreferredDomain: true, // 内置优选反代域名
  enablePreferredIp: true, // 远程优选 IP
  enableRemotePreferred: true, // 允许拉取远程优选源
  customPreferred: '', // 自定义优选 IP，格式 IP:端口#备注，逗号/换行分隔
  preferredUrls: '', // 自定义远程优选源 URL，逗号分隔
  preferredCount: 12, // 每个源最多取多少个 IP

  proxyIpMode: 'auto', // auto | region | custom | off
  proxyIpRegion: '', // 指定地区：HK/US/SG/JP/...
  customProxyIp: '', // 自定义 ProxyIP（IP / 域名 / IP:端口 / 域名:端口）
  backupProxyIp: 'proxyip.tp1.090227.xyz', // 兜底反代
  nat64: '', // NAT64 前缀，如 [2602:fc59:b0:64::]

  /* ---------- 出站 ---------- */
  outboundProxy: '', // socks5://user:pass@host:port 或 http(s)://...
  outboundMode: 'auto', // auto(先直连后代理) | proxy-first | direct-first | proxy-only

  /* ---------- 网络 ---------- */
  customDns: DEFAULT_DOH,
  resolveIp: DEFAULT_DNS_IP,
  cleanIps: '', // Clean IP（优选 IP 直连地址），逗号分隔
  maintenanceHost: 'https://www.ubuntu.com', // 伪装主页
  enableDirectConfigs: true, // 额外生成一份「直连」节点

  /* ---------- 订阅 ---------- */
  nameStrategy: 'default',
  namePrefix: 'CFSub',
  subUserAgent: '',
  subConverter: 'https://url.v1.mk/sub',
  maxConfigs: 12, // 每个用户最多生成多少节点

  /* ---------- 用户 ---------- */
  users: [],
  limitTotalGb: 0, // 全局单用户流量上限（GB），0 = 不限
  limitDailyGb: 0, // 全局单用户每日上限（GB），0 = 不限
  expiryDays: 0, // 新用户默认天数，0 = 永久

  /* ---------- 自动更新 ---------- */
  githubRepo: '', // 如 yourname/cfsub
  autoUpdate: false,
  autoUpdateFormat: 'plain', // plain | encoded
  deployTarget: 'worker', // worker | pages
  cfAccountId: '',
  cfApiToken: '',
  cfWorkerName: '',
  cfPagesProject: '',

  /* ---------- 通知 ---------- */
  tgToken: '',
  tgChatId: '',
  tgAdminId: '',
  silentAlerts: false,

  /* ---------- 其他 ---------- */
  panelApiKeys: [],
  logs: [],
  // 注意：默认必须是 1，否则旧配置通过对象展开会直接继承新版本号，
  // 导致迁移判断（ver >= SCHEMA_VERSION）永远成立、迁移不执行
  schemaVersion: 1,
  createdAt: 0,
  updatedAt: 0,
};

/** 新建用户的默认字段 */
export const newUserDefaults = () => ({
  id: '',
  uuid: '',
  name: '',
  notes: '',
  status: 'active', // active | paused | expired | disabled
  limitTotalGb: null, // 总流量上限（GB），null = 不限
  limitDailyGb: null, // 每日上限（GB），null = 不限
  expiryMs: null, // 到期时间戳，null = 永久
  maxConfigs: null, // 节点数量上限
  connLimit: null, // 并发连接上限
  proxyIp: '', // 该用户专属 ProxyIP
  cleanIp: '', // 该用户专属 Clean IP
  ports: '', // 该用户专属端口
  mode: '', // 该用户专属协议
  disabledReason: '',
  disabledAt: 0,
  createdAt: 0,
});

export const GB = 1024 * 1024 * 1024;
