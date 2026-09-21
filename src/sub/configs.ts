import { xhttpPath, buildNodePath } from './build.ts';

/** 节点路径统一由 buildNodePath 生成（含 ?ed= / ?proxyip= / ?wk=） */
const WS_PATH = (n) => buildNodePath(n);

/* ------------------------------ Clash YAML ------------------------------ */

function clashProxy(n) {
  const base = {
    name: n.name,
    server: n.address,
    port: n.port,
    udp: false,
  };
  if (n.type === 'trojan') {
    return {
      ...base,
      type: 'trojan',
      password: n.password,
      sni: n.sni,
      'client-fingerprint': n.fp,
      network: 'ws',
      ...(n.alpn ? { alpn: n.alpn.split(',') } : {}),
      'ws-opts': wsOpts(n),
    };
  }
  // vless / xhttp 在 Clash 里都按 vless 出，xhttp 降级为 ws 保证兼容
  return {
    ...base,
    type: 'vless',
    uuid: n.uuid,
    tls: n.tls,
    servername: n.sni,
    'client-fingerprint': n.fp,
    network: 'ws',
    ...(n.alpn ? { alpn: n.alpn.split(',') } : {}),
    'ws-opts': wsOpts(n),
  };
}

function wsOpts(n) {
  const o = {
    path: WS_PATH(n),
    headers: { Host: n.host },
  };
  if (n.earlyData) {
    o['max-early-data'] = 2560;
    o['early-data-header-name'] = 'Sec-WebSocket-Protocol';
  }
  return o;
}

function yamlStr(v) {
  return `"${String(v).replace(/"/g, '\\"')}"`;
}

export function buildClashProfile(nodes, opts = {}) {
  const names = nodes.map((n) => n.name);
  const proxies = nodes.map(clashProxy);

  const lines = [];
  lines.push('mixed-port: 7890');
  lines.push('allow-lan: false');
  lines.push('mode: rule');
  lines.push('log-level: warning');
  lines.push('ipv6: true');
  lines.push('external-controller: 127.0.0.1:9090');
  lines.push('dns:');
  lines.push('  enable: true');
  lines.push('  ipv6: true');
  lines.push('  enhanced-mode: fake-ip');
  lines.push('  fake-ip-range: 198.18.0.1/16');
  lines.push('  nameserver:');
  lines.push('    - https://1.1.1.1/dns-query');
  lines.push('    - https://8.8.8.8/dns-query');
  lines.push('  fallback:');
  lines.push('    - https://dns.google/dns-query');
  lines.push('    - https://cloudflare-dns.com/dns-query');
  lines.push('proxies:');
  for (const p of proxies) {
    const sni = p.servername || p.sni || '';
    const fp = p['client-fingerprint'] || p.fp || 'chrome';
    lines.push(`  - { name: ${yamlStr(p.name)}, type: ${p.type}, server: ${p.server}, port: ${p.port}, udp: false${
      p.type === 'trojan'
        ? `, password: ${yamlStr(p.password)}, sni: ${sni}`
        : `, uuid: ${p.uuid}, tls: ${p.tls}, servername: ${sni}`
    }, network: ws, client-fingerprint: ${fp}${p.alpn ? `, alpn: [${p.alpn.map(yamlStr).join(', ')}]` : ''}, ws-opts: { path: ${yamlStr(
      p['ws-opts'].path,
    )}, headers: { Host: ${yamlStr(p['ws-opts'].headers.Host)} }${
      p['ws-opts']['max-early-data']
        ? `, max-early-data: ${p['ws-opts']['max-early-data']}, early-data-header-name: ${p['ws-opts']['early-data-header-name']}`
        : ''
    } } }`);
  }
  lines.push('proxy-groups:');
  lines.push(`  - { name: "🚀 节点选择", type: select, proxies: [${names.map(yamlStr).join(', ')}, "DIRECT"] }`);
  lines.push(`  - { name: "♻️ 自动选择", type: url-test, proxies: [${names.map(yamlStr).join(', ')}], url: "https://www.gstatic.com/generate_204", interval: 300 }`);
  lines.push('  - { name: "🎯 全球直连", type: select, proxies: ["DIRECT"] }');
  lines.push('rules:');
  lines.push('  - GEOIP,lan,🎯 全球直连,no-resolve');
  lines.push('  - MATCH,🚀 节点选择');

  return lines.join('\n');
}

/* ------------------------------ Sing-box ------------------------------ */

function singboxOutbound(n, i) {
  const tls = n.tls
    ? {
        enabled: true,
        server_name: n.sni,
        utls: { enabled: true, fingerprint: n.fp },
        ...(n.alpn ? { alpn: n.alpn.split(',') } : {}),
      }
    : { enabled: false, server_name: n.sni, utls: { enabled: true, fingerprint: n.fp } };

  if (n.type === 'trojan') {
    return {
      type: 'trojan',
      tag: n.name,
      server: n.address,
      server_port: n.port,
      password: n.password,
      tls,
      transport: {
        type: 'ws',
        path: WS_PATH(n),
        headers: { Host: n.host },
        ...(n.earlyData ? { max_early_data: 2560, early_data_header_name: 'Sec-WebSocket-Protocol' } : {}),
      },
    };
  }

  // XHTTP：sing-box 原生支持；其他核心仍降级为 WS 保证可用
  if (n.type === 'xhttp') {
    return {
      type: 'vless',
      tag: n.name,
      server: n.address,
      server_port: n.port,
      uuid: n.uuid,
      packet_encoding: 'xudp',
      tls,
      transport: {
        type: 'xhttp',
        mode: 'stream-one',
        host: n.host,
        path: WS_PATH(n),
        headers: { Host: n.host },
      },
    };
  }

  return {
    type: 'vless',
    tag: n.name,
    server: n.address,
    server_port: n.port,
    uuid: n.uuid,
    packet_encoding: 'xudp',
    tls,
    transport: {
      type: 'ws',
      path: WS_PATH(n),
      headers: { Host: n.host },
      ...(n.earlyData ? { max_early_data: 2560, early_data_header_name: 'Sec-WebSocket-Protocol' } : {}),
    },
  };
}

export function buildSingboxProfile(nodes) {
  const outbounds = nodes.map((n, i) => singboxOutbound(n, i));
  const tags = outbounds.map((o) => o.tag);
  return JSON.stringify(
    {
      log: { level: 'info', timestamp: true },
      dns: {
        servers: [
          { tag: 'remote', address: 'https://1.1.1.1/dns-query', detour: 'select' },
          { tag: 'local', address: '223.5.5.5', detour: 'direct' },
        ],
        rules: [{ outbound: ['any'], server: 'local' }],
        final: 'remote',
        strategy: 'prefer_ipv4',
      },
      inbounds: [{ type: 'mixed', tag: 'mixed-in', listen: '127.0.0.1', listen_port: 2080 }],
      outbounds: [
        ...outbounds,
        { type: 'selector', tag: 'select', outbounds: ['auto', ...tags] },
        { type: 'urltest', tag: 'auto', outbounds: tags, url: 'https://www.gstatic.com/generate_204', interval: '5m' },
        { type: 'direct', tag: 'direct' },
        { type: 'block', tag: 'block' },
        { type: 'dns', tag: 'dns-out' },
      ],
      route: {
        rules: [
          { ip_is_private: true, outbound: 'direct' },
          { protocol: 'dns', action: 'hijack-dns' },
        ],
        final: 'select',
        auto_detect_interface: true,
      },
      experimental: {
        cache_file: { enabled: true, path: 'cache.db', store_fakeip: true },
        clash_api: { external_controller: '127.0.0.1:9090' },
      },
    },
    null,
    2,
  );
}

/* ------------------------------ v2ray / v2rayN JSON ------------------------------ */

function v2rayOutbound(n) {
  const ws = {
    path: WS_PATH(n),
    headers: { Host: n.host },
    ...(n.earlyData ? { maxEarlyData: 2560, earlyDataHeaderName: 'Sec-WebSocket-Protocol' } : {}),
  };
  if (n.type === 'trojan') {
    return {
      protocol: 'trojan',
      tag: n.name,
      settings: { servers: [{ address: n.address, port: n.port, password: n.password, level: 0 }] },
      streamSettings: {
        network: 'ws',
        security: n.tls ? 'tls' : 'none',
        ...(n.tls ? { tlsSettings: { serverName: n.sni, fingerprint: n.fp, ...(n.alpn ? { alpn: n.alpn.split(',') } : {}) } } : {}),
        wsSettings: ws,
      },
    };
  }
  return {
    protocol: 'vless',
    tag: n.name,
    settings: { vnext: [{ address: n.address, port: n.port, users: [{ id: n.uuid, encryption: 'none', level: 0 }] }] },
    streamSettings: {
      network: 'ws',
      security: n.tls ? 'tls' : 'none',
      ...(n.tls ? { tlsSettings: { serverName: n.sni, fingerprint: n.fp, ...(n.alpn ? { alpn: n.alpn.split(',') } : {}) } } : {}),
      wsSettings: ws,
    },
  };
}

export function buildV2rayProfile(nodes) {
  return JSON.stringify(
    {
      log: { loglevel: 'warning' },
      dns: { servers: ['https+local://1.1.1.1/dns-query', '223.5.5.5'] },
      inbounds: [
        { tag: 'socks-in', port: 10808, listen: '127.0.0.1', protocol: 'socks', settings: { auth: 'noauth', udp: true } },
        { tag: 'http-in', port: 10809, listen: '127.0.0.1', protocol: 'http', settings: { auth: 'noauth' } },
      ],
      outbounds: nodes.map(v2rayOutbound),
      routing: {
        domainStrategy: 'AsIs',
        rules: [
          { type: 'field', outboundTag: 'direct', ip: ['geoip:private'] },
          { type: 'field', outboundTag: 'direct', domain: ['geosite:cn'] },
        ],
      },
    },
    null,
    2,
  );
}
