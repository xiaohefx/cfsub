/**
 * 环境变量 → 配置项 映射表
 *
 * 优先级：**环境变量 > KV 持久化配置 > 内置默认值**
 * 通过环境变量设置的字段会被「锁定」，面板中修改后仍会被环境变量覆盖，
 * 面板顶部会显示被锁定的字段列表，避免误以为保存没生效。
 */

/** 字符串型映射：环境变量名 → 配置字段名 */
export const ENV_STR_MAP = {
  // 账号与面板
  UUID: 'uuid',
  TROJAN_PASSWORD: 'trojanPassword',
  MASTER_KEY: 'masterKey',
  ADMIN: 'masterKey',
  PASSWORD: 'masterKey',
  API_ROUTE: 'apiRoute',
  NAME: 'name',
  // 协议与节点
  MODE: 'mode',
  PROTOCOL: 'mode',
  PORTS: 'ports',
  SUB_PATH: 'path',
  WSPATH: 'path',
  HOSTS: 'hosts',
  HOST: 'hosts',
  FP: 'fp',
  FINGERPRINT: 'fp',
  ALPN: 'alpn',
  NAME_PREFIX: 'namePrefix',
  // 反代与优选
  PROXYIP_MODE: 'proxyIpMode',
  PROXYIP: 'customProxyIp',
  P: 'customProxyIp',
  PROXYIP_REGION: 'proxyIpRegion',
  WK: 'proxyIpRegion',
  BACKUP_PROXYIP: 'backupProxyIp',
  NAT64: 'nat64',
  PREFERRED: 'customPreferred',
  YX: 'customPreferred',
  PREFERRED_URLS: 'preferredUrls',
  YXURL: 'preferredUrls',
  CLEAN_IPS: 'cleanIps',
  CLEANIP: 'cleanIps',
  // 出站
  OUTBOUND: 'outboundProxy',
  S: 'outboundProxy',
  OUTBOUND_MODE: 'outboundMode',
  QJ: 'outboundMode',
  // 网络
  DOH: 'customDns',
  CUSTOM_DNS: 'customDns',
  RESOLVE_IP: 'resolveIp',
  MAINTENANCE_HOST: 'maintenanceHost',
  URL: 'maintenanceHost',
  ECH_DOMAIN: 'echDomain',
  ECH_DNS: 'echDns',
  // 订阅
  SUB_USER_AGENT: 'subUserAgent',
  SUB_CONVERTER: 'subConverter',
  MAX_CONFIGS: 'maxConfigs',
  // 自动更新 / Cloudflare
  GITHUB_REPO: 'githubRepo',
  DEPLOY_TARGET: 'deployTarget',
  CF_ACCOUNT_ID: 'cfAccountId',
  CF_API_TOKEN: 'cfApiToken',
  CF_WORKER_NAME: 'cfWorkerName',
  CF_PAGES_PROJECT: 'cfPagesProject',
  // 通知
  TG_TOKEN: 'tgToken',
  TG_CHAT_ID: 'tgChatId',
  TG_ADMIN_ID: 'tgAdminId',
};

/** 布尔型映射：值为 1/true/yes/on 视为开启 */
export const ENV_BOOL_MAP = {
  KILL_SWITCH: 'isPaused',
  PAUSED: 'isPaused',
  ECH: 'ech',
  ENABLE_EARLY_DATA: 'enableEarlyData',
  ALLOW_INSECURE: 'allowInsecure',
  ENABLE_TFO: 'enableTfo',
  ENABLE_OFFICIAL_IP: 'enableOfficialIp',
  ENABLE_PREFERRED_DOMAIN: 'enablePreferredDomain',
  ENABLE_PREFERRED_IP: 'enablePreferredIp',
  ENABLE_REMOTE_PREFERRED: 'enableRemotePreferred',
  ENABLE_DIRECT_CONFIGS: 'enableDirectConfigs',
  AUTO_UPDATE: 'autoUpdate',
  SILENT_ALERTS: 'silentAlerts',
};

/** 数值型映射 */
export const ENV_NUM_MAP = {
  LIMIT_TOTAL_GB: 'limitTotalGb',
  LIMIT_DAILY_GB: 'limitDailyGb',
  EXPIRY_DAYS: 'expiryDays',
  PREFERRED_COUNT: 'preferredCount',
  MAX_CONFIGS_N: 'maxConfigs',
};

function truthy(v) {
  return /^(1|true|yes|on)$/i.test(String(v || '').trim());
}

/**
 * 把环境变量应用到配置上，返回被锁定的配置字段名列表。
 */
export function applyEnvOverrides(cfg, env) {
  const locked = [];
  if (!env) return locked;

  for (const [envKey, cfgKey] of Object.entries(ENV_STR_MAP)) {
    const v = env[envKey];
    if (v === undefined || v === null || String(v).trim() === '') continue;
    cfg[cfgKey] = String(v).trim();
    locked.push(cfgKey);
  }
  for (const [envKey, cfgKey] of Object.entries(ENV_BOOL_MAP)) {
    const v = env[envKey];
    if (v === undefined || v === null || String(v).trim() === '') continue;
    cfg[cfgKey] = truthy(v);
    locked.push(cfgKey);
  }
  for (const [envKey, cfgKey] of Object.entries(ENV_NUM_MAP)) {
    const v = env[envKey];
    if (v === undefined || v === null || String(v).trim() === '') continue;
    const n = Number(v);
    if (!Number.isNaN(n)) {
      cfg[cfgKey] = n;
      locked.push(cfgKey);
    }
  }
  return [...new Set(locked)];
}

/** 保存前剔除运行时内部字段 */
export function stripInternal(cfg) {
  const out = {};
  for (const [k, v] of Object.entries(cfg)) {
    if (k.startsWith('__')) continue;
    out[k] = v;
  }
  return out;
}
