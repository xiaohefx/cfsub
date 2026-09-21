/**
 * 内置资源库
 *
 * 内容来源：
 *  - byJoey/cfnew  —— 官方直连地址池、地区 ProxyIP 域名表、优选反代域名表、端口表、订阅转换地址
 *  - cmliu/edgetunnel —— colo 级反代域名、兜底反代域名（.tpN 决定端口）、CF-CIDR 优选 IP 源
 *  - bia-pain-bache/BPB-Worker-Panel —— NAT64 前缀、规则集、DNS / 出站设计
 *
 * 所有地址均为「默认可用但可覆盖」，面板与环境变量都能整体替换。
 */

/* ------------------------------------------------------------------ *
 * 1. 官方直连地址池（cfnew v3.0 内置，实测可用的 Cloudflare 官方地址）
 *    CF 是任播，同一地址在不同位置落到的机房不同，因此不按地区区分。
 *    分布在 10 个不同 /24 段，避免整段不可用时全灭。
 * ------------------------------------------------------------------ */
export const OFFICIAL_DIRECT_IPS = [
  '172.71.218.190',
  '162.158.228.87',
  '162.158.189.134',
  '162.158.26.63',
  '162.158.25.86',
  '162.158.29.216',
  '162.158.218.160',
  '162.158.227.214',
  '172.69.118.198',
  '172.69.119.150',
];

/* ------------------------------------------------------------------ *
 * 2. 地区反代（ProxyIP）域名表 —— 来自 cmliu，cfnew 整理
 * ------------------------------------------------------------------ */
export const REGION_PROXYIPS = [
  { domain: 'ProxyIP.HK.CMLiusss.net', region: 'HK', name: '香港' },
  { domain: 'ProxyIP.US.CMLiusss.net', region: 'US', name: '美国' },
  { domain: 'ProxyIP.SG.CMLiusss.net', region: 'SG', name: '新加坡' },
  { domain: 'ProxyIP.JP.CMLiusss.net', region: 'JP', name: '日本' },
  { domain: 'ProxyIP.KR.CMLiusss.net', region: 'KR', name: '韩国' },
  { domain: 'ProxyIP.DE.CMLiusss.net', region: 'DE', name: '德国' },
  { domain: 'ProxyIP.SE.CMLiusss.net', region: 'SE', name: '瑞典' },
  { domain: 'ProxyIP.NL.CMLiusss.net', region: 'NL', name: '荷兰' },
  { domain: 'ProxyIP.FI.CMLiusss.net', region: 'FI', name: '芬兰' },
  { domain: 'ProxyIP.GB.CMLiusss.net', region: 'GB', name: '英国' },
  { domain: 'ProxyIP.Oracle.cmliusss.net', region: 'Oracle', name: '甲骨文' },
  { domain: 'ProxyIP.DigitalOcean.CMLiusss.net', region: 'DigitalOcean', name: 'DigitalOcean' },
  { domain: 'ProxyIP.Vultr.CMLiusss.net', region: 'Vultr', name: 'Vultr' },
  { domain: 'ProxyIP.Multacom.CMLiusss.net', region: 'Multacom', name: 'Multacom' },
];

/** 地区展示名与 emoji（面板下拉用） */
export const REGION_LABELS = {
  CF: ['🇨🇫 官方直连', 'CF', 'Cloudflare 官方'],
  AUTO: ['🌐 自动', 'AUTO', '按 Worker 机房自动匹配'],
  HK: ['🇭🇰 香港', 'HK', 'Hong Kong'],
  US: ['🇺🇸 美国', 'US', 'United States'],
  SG: ['🇸🇬 新加坡', 'SG', 'Singapore'],
  JP: ['🇯🇵 日本', 'JP', 'Japan'],
  KR: ['🇰🇷 韩国', 'KR', 'South Korea'],
  DE: ['🇩🇪 德国', 'DE', 'Germany'],
  SE: ['🇸🇪 瑞典', 'SE', 'Sweden'],
  NL: ['🇳🇱 荷兰', 'NL', 'Netherlands'],
  FI: ['🇫🇮 芬兰', 'FI', 'Finland'],
  GB: ['🇬🇧 英国', 'GB', 'United Kingdom'],
  Oracle: ['☁️ 甲骨文', 'Oracle', 'Oracle Cloud'],
  DigitalOcean: ['🌊 DigitalOcean', 'DigitalOcean', 'DigitalOcean'],
  Vultr: ['⚡ Vultr', 'Vultr', 'Vultr'],
  Multacom: ['📡 Multacom', 'Multacom', 'Multacom'],
};

/** 邻近地区回退链：同地区 → 邻近地区 → 其他 */
export const REGION_NEIGHBORS = {
  US: ['SG', 'JP', 'KR'],
  SG: ['JP', 'KR', 'US'],
  JP: ['SG', 'KR', 'US'],
  KR: ['JP', 'SG', 'US'],
  HK: ['SG', 'JP', 'US'],
  DE: ['NL', 'GB', 'SE', 'FI'],
  SE: ['DE', 'NL', 'FI', 'GB'],
  NL: ['DE', 'GB', 'SE', 'FI'],
  FI: ['SE', 'DE', 'NL', 'GB'],
  GB: ['DE', 'NL', 'SE', 'FI'],
};

/* ------------------------------------------------------------------ *
 * 3. 优选反代域名（cfnew 内置的「反代 IP 域名」，解析后即可用）
 * ------------------------------------------------------------------ */
export const PREFERRED_DOMAINS = [
  'cloudflare.182682.xyz',
  'speed.marisalnc.com',
  'freeyx.cloudflare88.eu.org',
  'bestcf.top',
  'cdn.2020111.xyz',
  'cfip.cfcdn.vip',
  'cf.0sm.com',
  'cf.090227.xyz',
  'cf.zhetengsha.eu.org',
  'cloudflare.9jy.cc',
  'cf.zerone-cdn.pp.ua',
  'cfip.1323123.xyz',
  'cnamefuckxxs.yuchen.icu',
  'cloudflare-ip.mofashi.ltd',
  '115155.xyz',
  'cname.xirancdn.us',
  'f3058171cad.002404.xyz',
  '8.889288.xyz',
  'cdn.tzpro.xyz',
  'cf.877771.xyz',
  'xn--b6gac.eu.org',
];

/* ------------------------------------------------------------------ *
 * 4. cmliu 系列反代
 *    - COLO 级：{colo}.proxyip.cmliussss.net（colo 为 CF 机房三字码，小写）
 *    - 兜底：proxyip.tp1.090227.xyz —— 域名中的 `.tpN` 决定端口（tp1 → 1，tp8443 → 8443）
 * ------------------------------------------------------------------ */
export const CMLIU_COLO_PROXY = 'proxyip.cmliussss.net';
export const CMLIU_FALLBACK_PROXY = 'proxyip.tp1.090227.xyz';

/* ------------------------------------------------------------------ *
 * 5a. 在线优选接口（来自 cfnew）
 *     返回的是实测可用的真实 Cloudflare IP，按运营商分组，是首选数据源。
 *     签名：key = MD5( MD5(API_SEED) + API_SALT + 毫秒时间戳 )
 * ------------------------------------------------------------------ */
export const ONLINE_PREFERRED_API = 'https://api.uouin.com/index.php/index/Cloudflare';
export const ONLINE_API_SEED = 'DdlTxtN0sUOu';
export const ONLINE_API_SALT = '70cloudflareapikey';
/** 接口返回的分组 → 展示名。与 cfnew 保持一致。 */
export const ONLINE_ISP_GROUPS = {
  bgp: '多线',
  ctcc: '电信',
  cucc: '联通',
  cmcc: '移动',
  ipv6: 'IPv6',
};

/* ------------------------------------------------------------------ *
 * 5b. Cloudflare 官方 IPv4 网段（https://www.cloudflare.com/ips-v4）
 *     用于过滤 CIDR 随机生成的地址，避免把非 Cloudflare 的
 *     互联段（如 188.164.248.0/24、8.35.211.0/24）当成节点地址。
 * ------------------------------------------------------------------ */
export const CF_IPV4_RANGES = [
  '173.245.48.0/20',
  '103.21.244.0/22',
  '103.22.200.0/22',
  '103.31.4.0/22',
  '141.101.64.0/18',
  '108.162.192.0/18',
  '190.93.240.0/20',
  '188.114.96.0/20',
  '197.234.240.0/22',
  '198.41.128.0/17',
  '162.158.0.0/15',
  '104.16.0.0/13',
  '104.24.0.0/14',
  '172.64.0.0/13',
  '131.0.72.0/22',
];

/* ------------------------------------------------------------------ *
 * 5c. 备用：cmliu CF-CIDR 运营商分段
 *     注意：该文件混有非 Cloudflare 的互联段，生成的 IP 必须经过
 *     CF_IPV4_RANGES 白名单校验后才可用。
 * ------------------------------------------------------------------ */
export const BUILTIN_PREFERRED_SOURCES = [
  { name: 'CF 官方段', url: 'https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR.txt', isp: 'cf' },
  { name: 'CF 电信优选', url: 'https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/ct.txt', isp: 'ct' },
  { name: 'CF 联通优选', url: 'https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/cu.txt', isp: 'cu' },
  { name: 'CF 移动优选', url: 'https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/cmcc.txt', isp: 'cmcc' },
];

/** 运营商标识 → 展示名 */
export const ISP_LABELS = { cmcc: '移动', cu: '联通', ct: '电信', cf: '官方' };

/** 生成随机 IP 时的兜底 CIDR（GitHub 拉不到时用） */
export const FALLBACK_CIDR = ['104.16.0.0/13'];

/* ------------------------------------------------------------------ *
 * 6. NAT64 前缀（BPB 内置）—— 把 IPv4 目标转成 IPv6 走 NAT64 出口
 * ------------------------------------------------------------------ */
export const NAT64_PREFIXES = [
  '[2a02:898:146:64::]',
  '[2602:fc59:b0:64::]',
  '[2602:fc59:11:64::]',
];

/* ------------------------------------------------------------------ *
 * 7. 端口表（Cloudflare 支持的入站端口）
 * ------------------------------------------------------------------ */
export const TLS_PORTS = [443, 2053, 2083, 2087, 2096, 8443];
export const PLAIN_PORTS = [80, 8080, 8880, 2052, 2082, 2086, 2095];
export const ALL_PORTS = [...TLS_PORTS, ...PLAIN_PORTS];

/* ------------------------------------------------------------------ *
 * 8. 订阅转换后端（把 base64 订阅转成 Clash / Sing-box 等）
 * ------------------------------------------------------------------ */
export const SUB_CONVERTERS = [
  { name: 'url.v1.mk', url: 'https://url.v1.mk/sub' },
  { name: 'SUBAPI.cmliussss.net', url: 'https://SUBAPI.cmliussss.net/sub' },
  { name: 'sub.xeton.dev', url: 'https://sub.xeton.dev/sub' },
  { name: 'api.dler.io', url: 'https://api.dler.io/sub' },
];

/* ------------------------------------------------------------------ *
 * 9. Clash / Sing-box 规则集（BPB + SagerNet）
 * ------------------------------------------------------------------ */
export const CLASH_RULE_SETS = {
  cn: 'https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml',
  cnIp: 'https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml',
  ads: 'https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/category-ads-all.txt',
  nsfw: 'https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/nsfw.txt',
  malware: 'https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/malware.txt',
  phishing: 'https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/phishing.txt',
  openai: 'https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/openai.yaml',
};

export const SINGBOX_RULE_SETS = (tag) =>
  `https://raw.githubusercontent.com/SagerNet/sing-${tag.split('-')[0]}/rule-set/${tag}.srs`;

/* ------------------------------------------------------------------ *
 * 10. DoH / ECH 默认值
 * ------------------------------------------------------------------ */
export const DEFAULT_DOH = 'https://cloudflare-dns.com/dns-query';
export const DEFAULT_ECH_DOMAIN = 'cloudflare-ech.com';
export const DEFAULT_DNS_IP = '1.1.1.1';
export const UDP_DNS_UPSTREAM = '8.8.4.4';

/* ------------------------------------------------------------------ *
 * 11. 智能解析用的域名（BPB Clean IP 思路：解析这些域名拿到可用 CF IP）
 * ------------------------------------------------------------------ */
export const SMART_CLEAN_DOMAINS = [
  'www.speedtest.net',
  'grok.com',
  'feedback.spotify.com',
  'www.hcaptcha.com',
  'chatgpt.com',
  'sourceforge.net',
  'www.wikipedia.org',
  'cdn.jsdelivr.net',
];

/* ------------------------------------------------------------------ *
 * 12. 客户端指纹（uTLS fingerprint）
 * ------------------------------------------------------------------ */
export const FINGERPRINTS = ['chrome', 'firefox', 'safari', 'ios', 'android', 'edge', 'random', 'randomized'];

/** ALPN 可选值 */
export const ALPN_OPTIONS = ['', 'h3', 'h2', 'http/1.1', 'h3,h2', 'h2,http/1.1', 'h3,h2,http/1.1'];
