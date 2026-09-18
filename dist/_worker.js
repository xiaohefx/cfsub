var Ke=Object.defineProperty;var D=(t,e)=>()=>(t&&(e=t(t=0)),e);var Ve=(t,e)=>{for(var n in e)Ke(t,n,{get:e[n],enumerable:!0})};var jt,Q,It,Z,Ht,Kt,Pt,Vt,Yt,B,Ye,Xn,At,Wt,Xt,zt,Jt,F=D(()=>{jt=["172.71.218.190","162.158.228.87","162.158.189.134","162.158.26.63","162.158.25.86","162.158.29.216","162.158.218.160","162.158.227.214","172.69.118.198","172.69.119.150"],Q=[{domain:"ProxyIP.HK.CMLiusss.net",region:"HK",name:"\u9999\u6E2F"},{domain:"ProxyIP.US.CMLiusss.net",region:"US",name:"\u7F8E\u56FD"},{domain:"ProxyIP.SG.CMLiusss.net",region:"SG",name:"\u65B0\u52A0\u5761"},{domain:"ProxyIP.JP.CMLiusss.net",region:"JP",name:"\u65E5\u672C"},{domain:"ProxyIP.KR.CMLiusss.net",region:"KR",name:"\u97E9\u56FD"},{domain:"ProxyIP.DE.CMLiusss.net",region:"DE",name:"\u5FB7\u56FD"},{domain:"ProxyIP.SE.CMLiusss.net",region:"SE",name:"\u745E\u5178"},{domain:"ProxyIP.NL.CMLiusss.net",region:"NL",name:"\u8377\u5170"},{domain:"ProxyIP.FI.CMLiusss.net",region:"FI",name:"\u82AC\u5170"},{domain:"ProxyIP.GB.CMLiusss.net",region:"GB",name:"\u82F1\u56FD"},{domain:"ProxyIP.Oracle.cmliusss.net",region:"Oracle",name:"\u7532\u9AA8\u6587"},{domain:"ProxyIP.DigitalOcean.CMLiusss.net",region:"DigitalOcean",name:"DigitalOcean"},{domain:"ProxyIP.Vultr.CMLiusss.net",region:"Vultr",name:"Vultr"},{domain:"ProxyIP.Multacom.CMLiusss.net",region:"Multacom",name:"Multacom"}],It={US:["SG","JP","KR"],SG:["JP","KR","US"],JP:["SG","KR","US"],KR:["JP","SG","US"],HK:["SG","JP","US"],DE:["NL","GB","SE","FI"],SE:["DE","NL","FI","GB"],NL:["DE","GB","SE","FI"],FI:["SE","DE","NL","GB"],GB:["DE","NL","SE","FI"]},Z=["cloudflare.182682.xyz","speed.marisalnc.com","freeyx.cloudflare88.eu.org","bestcf.top","cdn.2020111.xyz","cfip.cfcdn.vip","cf.0sm.com","cf.090227.xyz","cf.zhetengsha.eu.org","cloudflare.9jy.cc","cf.zerone-cdn.pp.ua","cfip.1323123.xyz","cnamefuckxxs.yuchen.icu","cloudflare-ip.mofashi.ltd","115155.xyz","cname.xirancdn.us","f3058171cad.002404.xyz","8.889288.xyz","cdn.tzpro.xyz","cf.877771.xyz","xn--b6gac.eu.org"],Ht="proxyip.cmliussss.net",Kt="proxyip.tp1.090227.xyz",Pt=[{name:"CF \u5B98\u65B9\u6BB5",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR.txt",isp:"cf"},{name:"CF \u7535\u4FE1\u4F18\u9009",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/ct.txt",isp:"ct"},{name:"CF \u8054\u901A\u4F18\u9009",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/cu.txt",isp:"cu"},{name:"CF \u79FB\u52A8\u4F18\u9009",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/cmcc.txt",isp:"cmcc"}],Vt={cmcc:"\u79FB\u52A8",cu:"\u8054\u901A",ct:"\u7535\u4FE1",cf:"\u5B98\u65B9"},Yt=["104.16.0.0/13"],B=[443,2053,2083,2087,2096,8443],Ye=[80,8080,8880,2052,2082,2086,2095],Xn=[...B,...Ye],At="https://cloudflare-dns.com/dns-query",Wt="cloudflare-ech.com",Xt="1.1.1.1",zt="8.8.4.4",Jt=["www.speedtest.net","grok.com","feedback.spotify.com","www.hcaptcha.com","chatgpt.com","sourceforge.net","www.wikipedia.org","cdn.jsdelivr.net"]});var R,Tt,Qt,Qn,ut=D(()=>{F();R="1.0.0",Tt={name:"",apiRoute:"sub",masterKey:"admin",isPaused:!1,uuid:"",trojanPassword:"",mode:"vless",protocols:{vless:!0,trojan:!1,xhttp:!1},ports:B.join(","),path:"/",hosts:"",fp:"chrome",alpn:"",ech:!1,echDomain:Wt,echDns:At,allowInsecure:!1,enableTfo:!1,enableEarlyData:!0,enableOfficialIp:!0,enablePreferredDomain:!0,enablePreferredIp:!0,enableRemotePreferred:!0,customPreferred:"",preferredUrls:"",preferredCount:12,proxyIpMode:"auto",proxyIpRegion:"",customProxyIp:"",backupProxyIp:"proxyip.tp1.090227.xyz",nat64:"",outboundProxy:"",outboundMode:"auto",customDns:At,resolveIp:Xt,cleanIps:"",maintenanceHost:"https://www.ubuntu.com",enableDirectConfigs:!0,nameStrategy:"default",namePrefix:"CFSub",subUserAgent:"",subConverter:"https://url.v1.mk/sub",maxConfigs:12,users:[],limitTotalGb:0,limitDailyGb:0,expiryDays:0,githubRepo:"",autoUpdate:!1,autoUpdateFormat:"plain",deployTarget:"worker",cfAccountId:"",cfApiToken:"",cfWorkerName:"",cfPagesProject:"",tgToken:"",tgChatId:"",tgAdminId:"",silentAlerts:!1,panelApiKeys:[],logs:[],createdAt:0,updatedAt:0},Qt=()=>({id:"",uuid:"",name:"",notes:"",status:"active",limitTotalGb:null,limitDailyGb:null,expiryMs:null,maxConfigs:null,connLimit:null,proxyIp:"",cleanIp:"",ports:"",mode:"",disabledReason:"",disabledAt:0,createdAt:0}),Qn=1024*1024*1024});function Je(t){return/^(1|true|yes|on)$/i.test(String(t||"").trim())}function Zt(t,e){let n=[];if(!e)return n;for(let[s,r]of Object.entries(We)){let o=e[s];o==null||String(o).trim()===""||(t[r]=String(o).trim(),n.push(r))}for(let[s,r]of Object.entries(Xe)){let o=e[s];o==null||String(o).trim()===""||(t[r]=Je(o),n.push(r))}for(let[s,r]of Object.entries(ze)){let o=e[s];if(o==null||String(o).trim()==="")continue;let a=Number(o);Number.isNaN(a)||(t[r]=a,n.push(r))}return[...new Set(n)]}function qt(t){let e={};for(let[n,s]of Object.entries(t))n.startsWith("__")||(e[n]=s);return e}var We,Xe,ze,te=D(()=>{We={UUID:"uuid",TROJAN_PASSWORD:"trojanPassword",MASTER_KEY:"masterKey",ADMIN:"masterKey",PASSWORD:"masterKey",API_ROUTE:"apiRoute",NAME:"name",MODE:"mode",PROTOCOL:"mode",PORTS:"ports",SUB_PATH:"path",WSPATH:"path",HOSTS:"hosts",HOST:"hosts",FP:"fp",FINGERPRINT:"fp",ALPN:"alpn",NAME_PREFIX:"namePrefix",PROXYIP_MODE:"proxyIpMode",PROXYIP:"customProxyIp",P:"customProxyIp",PROXYIP_REGION:"proxyIpRegion",WK:"proxyIpRegion",BACKUP_PROXYIP:"backupProxyIp",NAT64:"nat64",PREFERRED:"customPreferred",YX:"customPreferred",PREFERRED_URLS:"preferredUrls",YXURL:"preferredUrls",CLEAN_IPS:"cleanIps",CLEANIP:"cleanIps",OUTBOUND:"outboundProxy",S:"outboundProxy",OUTBOUND_MODE:"outboundMode",QJ:"outboundMode",DOH:"customDns",CUSTOM_DNS:"customDns",RESOLVE_IP:"resolveIp",MAINTENANCE_HOST:"maintenanceHost",URL:"maintenanceHost",ECH_DOMAIN:"echDomain",ECH_DNS:"echDns",SUB_USER_AGENT:"subUserAgent",SUB_CONVERTER:"subConverter",MAX_CONFIGS:"maxConfigs",GITHUB_REPO:"githubRepo",DEPLOY_TARGET:"deployTarget",CF_ACCOUNT_ID:"cfAccountId",CF_API_TOKEN:"cfApiToken",CF_WORKER_NAME:"cfWorkerName",CF_PAGES_PROJECT:"cfPagesProject",TG_TOKEN:"tgToken",TG_CHAT_ID:"tgChatId",TG_ADMIN_ID:"tgAdminId"},Xe={KILL_SWITCH:"isPaused",PAUSED:"isPaused",ECH:"ech",ENABLE_EARLY_DATA:"enableEarlyData",ALLOW_INSECURE:"allowInsecure",ENABLE_TFO:"enableTfo",ENABLE_OFFICIAL_IP:"enableOfficialIp",ENABLE_PREFERRED_DOMAIN:"enablePreferredDomain",ENABLE_PREFERRED_IP:"enablePreferredIp",ENABLE_REMOTE_PREFERRED:"enableRemotePreferred",ENABLE_DIRECT_CONFIGS:"enableDirectConfigs",AUTO_UPDATE:"autoUpdate",SILENT_ALERTS:"silentAlerts"},ze={LIMIT_TOTAL_GB:"limitTotalGb",LIMIT_DAILY_GB:"limitDailyGb",EXPIRY_DAYS:"expiryDays",PREFERRED_COUNT:"preferredCount",MAX_CONFIGS_N:"maxConfigs"}});function ee(t){let e=new TextEncoder().encode(t),n="";for(let s of e)n+=String.fromCharCode(s);return btoa(n)}function ne(t){let e=t.replace(/-/g,"+").replace(/_/g,"/"),n=e.length%4?"=".repeat(4-e.length%4):"",s=atob(e+n),r=new Uint8Array(s.length);for(let o=0;o<s.length;o++)r[o]=s.charCodeAt(o);return r}function se(){return crypto.randomUUID()}function Et(t){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(t||""))}function q(t){let e=String(t).replace(/-/g,"");if(e.length!==32)return null;let n=new Uint8Array(16);for(let s=0;s<16;s++)n[s]=parseInt(e.substr(s*2,2),16);return n}function L(t){return Array.isArray(t)?t.filter(Boolean).map(e=>String(e).trim()):String(t||"").split(/[\s,;|]+/).map(e=>e.trim()).filter(Boolean)}function Ut(t){return String(t||"").split(/[\r\n]+/).map(e=>e.trim()).filter(Boolean)}function Y(t,e=null){let n=String(t||"").trim();if(!n)return{host:"",port:e};if(n.startsWith("[")){let r=n.match(/^\[([^\]]+)\](?::(\d+))?$/);return r?{host:r[1],port:r[2]?parseInt(r[2],10):e}:{host:n,port:e}}let s=n.lastIndexOf(":");return s>0&&/^\d+$/.test(n.slice(s+1))?{host:n.slice(0,s),port:parseInt(n.slice(s+1),10)}:{host:n,port:e}}function j(t){return/^(\d{1,3}\.){3}\d{1,3}$/.test(t)&&t.split(".").every(e=>+e>=0&&+e<=255)}function re(t,e){let n=String(e||"").replace(/^\[|\]$/g,"");if(!n||!j(t))return null;let s=t.split(".").map(c=>parseInt(c,10)),r=c=>c.toString(16).padStart(2,"0"),o=`${r(s[0])}${r(s[1])}:${r(s[2])}${r(s[3])}`;return(n.endsWith(":")?n:n+":")+o}function H(t){let e=[...t];for(let n=e.length-1;n>0;n--){let s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}function E(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(2)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(2)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function k(t){let e=Number(t);return e>0?Math.floor(e*1024*1024*1024):0}function g(t,e=200,n={}){return new Response(JSON.stringify(t),{status:e,headers:{"content-type":"application/json; charset=utf-8",...n}})}function W(t,e=200,n={}){return new Response(t,{status:e,headers:{"content-type":"text/html; charset=utf-8",...n}})}function Ct(t,e=200,n={}){return new Response(t,{status:e,headers:{"content-type":"text/plain; charset=utf-8",...n}})}async function I(t,e={},n=8e3){let s=new AbortController,r=setTimeout(()=>s.abort(),n);try{return await fetch(t,{...e,signal:s.signal})}catch{return null}finally{clearTimeout(r)}}function pt(){return new Date().toISOString().slice(0,10)}async function Qe(t){let e=new TextEncoder().encode(t),n=await crypto.subtle.digest("MD5",e).catch(()=>null);if(n)return[...new Uint8Array(n)].map(r=>r.toString(16).padStart(2,"0")).join("");let s=2166136261;for(let r of e)s^=r,s=s*16777619>>>0;return s.toString(16).padStart(8,"0").repeat(4).slice(0,32)}async function dt(t){let e=await Qe(String(t)),n=(e+e).slice(0,32).split("");return n[12]="4",n[16]=["8","9","a","b"][parseInt(n[16],16)%4],`${n.slice(0,8).join("")}-${n.slice(8,12).join("")}-${n.slice(12,16).join("")}-${n.slice(16,20).join("")}-${n.slice(20,32).join("")}`}var C=D(()=>{});function K(t){return t.CF_SUB_KV||t.KV||t.C||t.cfsub||null}function mt(t){return!!K(t)}async function _(t){let e=Date.now();if(tt&&e-Dt<le)return tt;let n=K(t),s=null;if(n)try{s=await n.get(ae,{type:"json"})}catch{s=null}let r={...Tt,...s||{}};return r.protocols={...Tt.protocols,...s?.protocols||{}},Array.isArray(r.users)||(r.users=[]),Array.isArray(r.panelApiKeys)||(r.panelApiKeys=[]),Array.isArray(r.logs)||(r.logs=[]),r.__locked=Zt(r,t),tt=r,Dt=e,r}async function M(t,e){e.updatedAt=Date.now(),tt=e,Dt=Date.now();let n=K(t);if(n)try{await n.put(ae,JSON.stringify(qt(e)))}catch(s){console.error("saveConfig failed",s)}return e}async function v(t){if(P)return P;let e=K(t),n=null;if(e)try{n=await e.get(ie,{type:"json"})}catch{n=null}return P=n&&n.users?n:{users:{}},P}function O(t,e=0,n=0){P||(P={users:{}});let s=String(t||"default"),r=pt(),o=P.users[s];return o||(o=P.users[s]={up:0,down:0,dailyUp:0,dailyDown:0,lastDay:r,connects:0,last:0}),o.lastDay!==r&&(o.dailyUp=0,o.dailyDown=0,o.lastDay=r),o.up+=e,o.down+=n,o.dailyUp+=e,o.dailyDown+=n,ft=!0,o}function ue(t){let e=O(t,0,0);return e.connects+=1,e.last=Date.now(),e}function N(t){let e=String(t||"default");return P?.users?.[e]||{up:0,down:0,dailyUp:0,dailyDown:0,lastDay:pt(),connects:0,last:0}}function pe(t){P||(P={users:{}});let e=String(t||"default");P.users[e]&&(P.users[e]={up:0,down:0,dailyUp:0,dailyDown:0,lastDay:pt(),connects:0,last:0}),ft=!0}async function G(t,e=!1){if(!ft)return;let n=Date.now();if(!e&&n-oe<le)return;let s=K(t);if(s)try{await s.put(ie,JSON.stringify(P))}catch(r){console.error("flushUsage failed",r)}ft=!1,oe=n}async function T(t,e,n){let s=await _(t);s.logs=Array.isArray(s.logs)?s.logs:[],s.logs.unshift({ts:new Date().toISOString(),type:e,detail:n}),s.logs.length>100&&(s.logs=s.logs.slice(0,100)),tt=s;let r=K(t);if(r)try{await r.put(ce,JSON.stringify(s.logs))}catch{}return s.logs}async function de(t){let e=K(t);if(e)try{let s=await e.get(ce,{type:"json"});if(Array.isArray(s))return s}catch{}return(await _(t)).logs||[]}var ae,ie,ce,le,tt,Dt,P,ft,oe,et=D(()=>{ut();te();C();ae="sys_config",ie="sys_usage",ce="sys_logs",le=3e4,tt=null,Dt=0,P=null,ft=!1,oe=0});function tn(t,e,n){let s=t.length,r=new Uint8Array((s+8>>6)+1<<6);r.set(t),r[s]=128;let o=s*8,a=new DataView(r.buffer);a.setUint32(r.length-4,o>>>0),a.setUint32(r.length-8,Math.floor(o/4294967296));let c=e.slice(),i=new Uint32Array(64);for(let l=0;l<r.length;l+=64){for(let y=0;y<16;y++)i[y]=a.getUint32(l+y*4);for(let y=16;y<64;y++){let w=(i[y-15]>>>7|i[y-15]<<25)^(i[y-15]>>>18|i[y-15]<<14)^i[y-15]>>>3,U=(i[y-2]>>>17|i[y-2]<<15)^(i[y-2]>>>19|i[y-2]<<13)^i[y-2]>>>10;i[y]=i[y-16]+w+i[y-7]+U>>>0}let[p,d,f,h,m,b,x,S]=c;for(let y=0;y<64;y++){let w=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7),U=m&b^~m&x,A=S+w+U+Ze[y]+i[y]>>>0,$=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),lt=p&d^p&f^d&f,J=$+lt>>>0;S=x,x=b,b=m,m=h+A>>>0,h=f,f=d,d=p,p=A+J>>>0}c[0]=c[0]+p>>>0,c[1]=c[1]+d>>>0,c[2]=c[2]+f>>>0,c[3]=c[3]+h>>>0,c[4]=c[4]+m>>>0,c[5]=c[5]+b>>>0,c[6]=c[6]+x>>>0,c[7]=c[7]+S>>>0}let u="";for(let l=0;l<n;l++)u+=c[l].toString(16).padStart(8,"0");return u}function Rt(t){return tn(new TextEncoder().encode(String(t)),qe,7)}function fe(t){let e=t.headers.get("sec-websocket-protocol");if(!e)return null;try{let n=ne(e);return n.length?n:null}catch{return null}}function ht(t){if(t.byteLength<24)throw new Error("invalid data");let e=new Uint8Array(t),n=new DataView(t),s=e[0],r=e.slice(1,17),a=18+e[17];if(a+4>e.length)throw new Error("invalid data");let c=e[a],i=n.getUint16(a+1),u=e[a+3];a+=4;let l="";if(u===1){if(a+4>e.length)throw new Error("invalid addressType");l=Array.from(e.slice(a,a+4)).join("."),a+=4}else if(u===2){let p=e[a];if(a+=1,a+p>e.length)throw new Error("invalid addressType");l=new TextDecoder().decode(e.slice(a,a+p)),a+=p}else if(u===3){if(a+16>e.length)throw new Error("invalid addressType");let p=[];for(let d=0;d<8;d++)p.push(n.getUint16(a+d*2).toString(16));l=p.join(":"),a+=16}else throw new Error("invalid addressType");if(!l)throw new Error("addressValue is empty");return{version:s,uuidBytes:r,command:c,port:i,addressType:u,address:l,rawIndex:a}}function he(t,e){let n=new Uint8Array(t);if(n.length<58)throw new Error("invalid data");let s=new TextDecoder().decode(n.slice(0,56)).toLowerCase();if(!s||s!==String(e).toLowerCase())throw new Error("invalid password");if(n[56]!==13||n[57]!==10)throw new Error("invalid data");let r=58,o=n[r];if(o!==1)throw new Error("unsupported command, only TCP (CONNECT) is allowed");r+=1;let a=n[r];r+=1;let c="";if(a===1)c=Array.from(n.slice(r,r+4)).join("."),r+=4;else if(a===3){let l=n[r];r+=1,c=new TextDecoder().decode(n.slice(r,r+l)),r+=l}else if(a===4){let l=new DataView(t),p=[];for(let d=0;d<8;d++)p.push(l.getUint16(r+d*2).toString(16));c=p.join(":"),r+=16}else throw new Error("invalid addressType");let u=new DataView(t).getUint16(r);if(r+=2,n[r]===13&&n[r+1]===10&&(r+=2),!c)throw new Error("addressValue is empty");return{command:o,port:u,address:c,rawIndex:r}}function gt(t){let e=String(t||"").trim();if(!e)return null;let n="socks5",s=e,r=e.match(/^(socks5|socks|https|http):\/\/(.*)$/i);if(r){let d=r[1].toLowerCase();n=d==="socks"?"socks5":d,s=r[2]}s=s.split("/")[0];let o=null,a=s.lastIndexOf("@");a>0&&(o=s.slice(0,a),s=s.slice(a+1));let c=n==="http"?80:n==="https"?443:1080,{host:i,port:u}=Y(s,c);if(!i||!u)return null;let l="",p="";if(o){let d=o.indexOf(":");l=d>0?o.slice(0,d):o,p=d>0?o.slice(d+1):""}return{kind:n,host:i,port:u,username:l,password:p}}var Ze,qe,me,yt=D(()=>{C();Ze=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],qe=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428];me=2});function xn(t,e){let n=t.split(".").filter(Boolean),s=new TextEncoder,r=[];for(let i of n){let u=s.encode(i);r.push(new Uint8Array([u.length]),u)}r.push(new Uint8Array([0]));let o=wn(r),a=new Uint8Array(12+o.length+4),c=new DataView(a.buffer);return c.setUint16(0,Math.floor(Math.random()*65535)),c.setUint16(2,256),c.setUint16(4,1),a.set(o,12),c.setUint16(12+o.length,yn[e]||1),c.setUint16(12+o.length+2,1),a}function wn(t){let e=t.reduce((r,o)=>r+o.length,0),n=new Uint8Array(e),s=0;for(let r of t)n.set(r,s),s+=r.length;return n}function bn(t,e){let n=new DataView(t),s=n.getUint16(4),r=n.getUint16(6),o=12;for(let c=0;c<s;c++)o=be(t,o),o+=4;let a=[];for(let c=0;c<r;c++){o=be(t,o);let i=n.getUint16(o),u=n.getUint16(o+8);o+=10;let l=new Uint8Array(t,o,u);if(i===1&&u===4&&(e==="A"||e==="ANY"))a.push(Array.from(l).join("."));else if(i===28&&u===16&&(e==="AAAA"||e==="ANY")){let p=[];for(let d=0;d<8;d++)p.push(n.getUint16(o+d*2).toString(16));a.push(p.join(":"))}else if(i===16&&e==="TXT"){let p="",d=0;for(;d<l.length;){let f=l[d];p+=new TextDecoder().decode(l.slice(d+1,d+1+f)),d+=1+f}a.push(p)}o+=u}return a}function be(t,e){let n=new DataView(t),s=e;for(;;){let r=n.getUint8(s);if(r===0)return s+1;if((r&192)===192)return s+2;s+=1+r}}async function Se(t,e="A",n="https://cloudflare-dns.com/dns-query",s=3e5){let r=`${e}|${t}`,o=_e.get(r);if(o&&Date.now()-o.at<s)return o.val;let a=xn(t,e),c=btoa(String.fromCharCode(...a)),i=`${n}?dns=${c.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}`,u=await I(i,{headers:{accept:"application/dns-message"}},6e3);if(!u||!u.ok)return o?.val||[];let l=await u.arrayBuffer(),p=bn(l,e);return _e.set(r,{at:Date.now(),val:p}),p}var yn,_e,Ie=D(()=>{C();yn={A:1,AAAA:28,TXT:16,HTTPS:65,CNAME:5};_e=new Map});function Pe(t){let[e,n]=String(t).split("/"),s=parseInt(n,10);if(!j(e)||!(s>0&&s<32))return null;let r=32-s,o=e.split(".").reduce((u,l,p)=>u|parseInt(l,10)<<24-p*8,0)>>>0,a=4294967295<<r>>>0,c=Math.floor(Math.random()*Math.pow(2,r)),i=((o&a)>>>0)+c>>>0;return[i>>>24&255,i>>>16&255,i>>>8&255,i&255].join(".")}async function Sn(t){let e=Ae.get(t);if(e&&Date.now()-e.at<_n)return e.val;let n=await I(t,{headers:{"user-agent":"CFSub/1.0"}},8e3);if(!n||!n.ok)return[];let s=await n.text(),r=Ut(s).filter(o=>!o.startsWith("#"));return Ae.set(t,{at:Date.now(),val:r}),r}function Te(t,e=443){let n=String(t).trim();if(!n||n.startsWith("//"))return null;let s=n.indexOf("#"),r=s>=0?n.slice(0,s):n,o=s>=0?n.slice(s+1).trim():"",{host:a,port:c}=Y(r,null);return a?{ip:a,port:c||e,name:o}:null}async function bt(t,e=12){let n=[],s=new Set,r=o=>{if(!o||!o.ip)return;let a=`${o.ip}:${o.port}`;s.has(a)||(s.add(a),n.push(o))};if(t.customPreferred)for(let o of Ut(t.customPreferred))r(Te(o));if(t.cleanIps)for(let o of L(t.cleanIps))r({ip:o,port:443,name:"CleanIP"});if(t.enableRemotePreferred!==!1){let o=[...L(t.preferredUrls),...t.enablePreferredIp!==!1?Pt.map(i=>i.url):[]],a=await Promise.allSettled(o.slice(0,6).map(Sn)),c=0;for(let i of a){if(i.status!=="fulfilled")continue;let u=Pt.find(d=>d.url===o[c]),l=u?`${Vt[u.isp]||""}\u4F18\u9009`:"\u4F18\u9009",p=H(i.value).slice(0,Math.max(2,Math.ceil(e/Math.max(1,o.length))));for(let d of p)if(d.includes("/")){let f=Pe(d);f&&r({ip:f,port:443,name:`${l}${n.length+1}`})}else{let f=Te(d);f&&r({...f,name:f.name||`${l}${n.length+1}`})}c++}}if(!n.length)for(let o=0;o<Math.min(e,8);o++){let a=Pe(Yt[0]);a&&r({ip:a,port:443,name:`\u5B98\u65B9\u4F18\u9009${o+1}`})}return n.slice(0,Math.max(1,e))}async function Ee(t,e=6){return t.enablePreferredDomain===!1?[]:H(Z).slice(0,e).map(n=>({ip:n,port:443,name:n.split(".")[0]}))}async function Ue(t,e){let n=t&&t.length?t:In,s=[...new Set([e,"https://dns.google/dns-query","https://223.5.5.5/dns-query","https://cloudflare-dns.com/dns-query"].filter(Boolean))],r=new Set;return await Promise.all(n.slice(0,12).map(async o=>{for(let a of s){let i=(await Se(o,"A",a)).filter(u=>j(u));if(i.length){for(let u of i.slice(0,2))r.add(u);return}}})),[...r].slice(0,16).join(",")}function Ce(t,e=B){let n=L(t).map(s=>parseInt(s,10)).filter(s=>s>0&&s<65536);return n.length?n:[...e]}function kt(t){return B.includes(Number(t))}var Ae,_n,In,vt=D(()=>{C();F();Ie();Ae=new Map,_n=600*1e3;In=Z.slice(0,8)});function Re(t){return t&&(t.match(/\{[A-Z_]+\}/g)||[]).find(n=>!Pn.includes(n))||null}function An(t,e){return String(t).replace(/\{[A-Z_]+\}/g,n=>{switch(n){case"{USER}":return e.user||"CFSub";case"{PORT}":return String(e.port||"");case"{PROTOCOL}":return(e.protocol||"").toUpperCase();case"{PREFIX}":return e.prefix||"CFSub";case"{IP}":return e.address||"";case"{IP_NAME}":return e.ipName||e.address||"";case"{HOST}":return e.host||"";case"{DATE}":return new Date().toISOString().slice(0,10);case"{INDEX}":return String(e.index||1).padStart(2,"0");default:return n}})}function ke(t,e=""){let n=[],s={id:"default",uuid:t.uuid,password:t.trojanPassword||t.uuid,name:t.name||"\u9ED8\u8BA4",status:"active",maxConfigs:t.maxConfigs??null,proxyIp:"",cleanIp:"",ports:"",mode:"",limitTotalGb:t.limitTotalGb??null,limitDailyGb:t.limitDailyGb??null,expiryMs:null,isMain:!0};n.push(s);for(let r of t.users||[])r.uuid&&(r.status==="paused"||r.status==="disabled"||r.expiryMs&&Date.now()>r.expiryMs||n.push({...r,password:r.password||r.uuid}));if(e){let r=n.find(o=>o.name===e||o.id===e||o.uuid===e);return r?[r]:[]}return[s]}async function ve(t,e,n,s={}){let r=t.maxConfigs||e.maxConfigs||12,o=Ce(t.ports||e.ports,[443]),a=L(e.hosts).length?L(e.hosts):[n],c=[];(e.enablePreferredIp!==!1||e.customPreferred||e.cleanIps)&&(c=await bt(e,Math.max(6,r)));let i=e.enablePreferredDomain!==!1?await Ee(e,4):[],u=[...c,...i],l=[];t.mode?l.push(t.mode):e.mode==="all"?l.push("vless","trojan","xhttp"):e.mode==="both"?l.push("vless","trojan"):l.push(e.mode||"vless");let p=[...new Set(l)].filter(Boolean),d=[],f=0,h=De[e.nameStrategy]||(e.nameStrategy&&e.nameStrategy.includes("{")?e.nameStrategy:De.default),m=Tn(e.path||"/"),b=new Set;for(let x of p){let S=x==="xhttp"?o.filter(w=>kt(w)):o;if(!S.length)continue;let y=u.length?u:[{ip:a[0],port:S[0],name:"\u9ED8\u8BA4"}];for(let w=0;w<r;w++){let U=y[w%y.length],A=U.ip,$=(U.port&&U.port!==443?U.port:null)||S[Math.floor(w/y.length)%S.length],lt=`${x}|${A}|${$}`;if(b.has(lt))continue;b.add(lt);let J=a[w%a.length];f++,d.push({type:x,address:A,port:$,uuid:t.uuid,password:t.password,host:J,path:m,sni:J,fp:e.fp||"chrome",alpn:e.alpn||"",tls:kt($),ech:e.ech?e.echDomain:"",echDns:e.echDns,allowInsecure:!!e.allowInsecure,earlyData:e.enableEarlyData!==!1,proxyIp:t.proxyIp||e.customProxyIp||"",name:An(h,{user:t.name||"CFSub",port:$,protocol:x,prefix:e.namePrefix||"CFSub",address:A,ipName:U.name||A,host:J,index:f})})}}return d.slice(0,r*Math.max(1,p.length))}function Tn(t){let e=String(t||"/").trim();return e.startsWith("/")||(e="/"+e),e}function En(t){let e=[];return t.type==="vless"?(e.push("encryption=none"),e.push(`security=${t.tls?"tls":"none"}`),t.alpn&&e.push(`alpn=${encodeURIComponent(t.alpn)}`),e.push(`fp=${t.fp}`),e.push("type=ws"),e.push(`host=${t.host}`),e.push(`path=${encodeURIComponent(t.path)}`),t.ech&&e.push(`ech=${encodeURIComponent(t.ech)}`),t.allowInsecure&&e.push("allowInsecure=1")):t.type==="trojan"?(e.push(`security=${t.tls?"tls":"none"}`),t.alpn&&e.push(`alpn=${encodeURIComponent(t.alpn)}`),e.push(`fp=${t.fp}`),e.push("type=ws"),e.push(`host=${t.host}`),e.push(`path=${encodeURIComponent(t.path)}`),t.ech&&e.push(`ech=${encodeURIComponent(t.ech)}`),t.allowInsecure&&e.push("allowInsecure=1")):t.type==="xhttp"&&(e.push("encryption=none"),e.push("security=tls"),e.push("type=xhttp"),e.push("mode=stream-one"),e.push(`host=${t.host}`),e.push(`path=${encodeURIComponent(ot(t.uuid))}`),t.alpn&&e.push(`alpn=${encodeURIComponent(t.alpn)}`),e.push(`fp=${t.fp}`)),e.join("&")}function ot(t){return"/"+String(t).slice(0,8)}function Un(t){let e=En(t),n=encodeURIComponent(t.name);return t.type==="trojan"?`trojan://${encodeURIComponent(t.password)}@${Lt(t.address)}:${t.port}?${e}#${n}`:t.type==="xhttp"?`vless://${t.uuid}@${Lt(t.address)}:${t.port}?${e}#${n}`:`vless://${t.uuid}@${Lt(t.address)}:${t.port}?${e}#${n}`}function Lt(t){return String(t).includes(":")&&!String(t).startsWith("[")?`[${t}]`:t}function Le(t){return ee(t.map(Un).join(`
`))}var Pn,De,_t=D(()=>{vt();yt();C();F();Pn=["{USER}","{PORT}","{PROTOCOL}","{PREFIX}","{IP}","{IP_NAME}","{HOST}","{DATE}","{INDEX}"];De={default:"{PREFIX}-{INDEX}","prefix-user-port":"{PREFIX}-{USER}-{PORT}","type-user-port":"{PROTOCOL}-{USER}-{PORT}","user-port":"{USER}-{PORT}",ip:"{IP_NAME}-{PORT}","host-port-user":"{HOST}-{PORT}-{USER}"}});var Fe={};Ve(Fe,{cmpVersions:()=>it,deployToCloudflare:()=>Be,handleAuth:()=>Ot,handleLogs:()=>Gt,handleStats:()=>Mt,handleSync:()=>Nt,handleTools:()=>Bt,handleUpdate:()=>On,handleUsers:()=>$t});function ct(t,e,n){let s=t.headers.get("authorization")||t.headers.get("x-api-key")||"";return s.startsWith("Bearer ")?s.slice(7).trim():s?s.trim():e.searchParams.get("key")?e.searchParams.get("key"):n&&n.key?String(n.key):""}function at(t,e){return!!e&&e===t.masterKey}function kn(t,e){return!!e&&Array.isArray(t.panelApiKeys)&&t.panelApiKeys.some(n=>n.key===e)}function z(t,e){return at(t,e)||kn(t,e)}function vn(t,e){let n={...t};if(!e)for(let s of["masterKey","panelApiKeys","cfApiToken","cfAccountId","tgToken","tgChatId","tgAdminId"])n[s]&&(n[s]="[PROTECTED]");return n}async function Ot(t,e,n,s,r){let o=await _(s);await v(s);let a=n&&n.key||"";if(!z(o,a))return r.waitUntil(T(s,"Auth Failed",`\u6765\u81EA ${t.headers.get("cf-connecting-ip")||"unknown"}`)),g({success:!1,message:"\u5BC6\u94A5\u9519\u8BEF"},401);let c=[{id:"default",name:o.name||"\u9ED8\u8BA4",sync:`${e.origin}/${o.apiRoute}`},...(o.users||[]).map(u=>({id:u.id,name:u.name,sync:`${e.origin}/${o.apiRoute}?sub=${encodeURIComponent(u.name)}`}))],i={};for(let u of c){let l=N(u.id);i[u.id]=l}return r.waitUntil(T(s,"Auth Success",at(o,a)?"\u4E3B\u5BC6\u94A5\u767B\u5F55":"API Key \u767B\u5F55")),g({success:!0,config:vn(o,at(o,a)),locked:o.__locked||[],profiles:c,usage:i,version:R,network:{ip:t.headers.get("cf-connecting-ip")||"",colo:t.cf?.colo||"",loc:[t.cf?.city,t.cf?.country].filter(Boolean).join(", ")}})}async function Nt(t,e,n,s,r){let o=await _(s),a=n&&n.key||"";if(!z(o,a))return g({success:!1,message:"\u672A\u6388\u6743"},401);let c=n?.config||{},i={...o,...c};i.masterKey=c.masterKey&&at(o,a)?String(c.masterKey):o.masterKey,i.panelApiKeys=o.panelApiKeys;for(let l of["masterKey","panelApiKeys","cfApiToken","cfAccountId","tgToken","tgChatId","tgAdminId"])i[l]==="[PROTECTED]"&&(i[l]=o[l]);i.users=Array.isArray(c.users)?c.users:o.users,i.apiRoute=String(c.apiRoute||o.apiRoute||"sub").replace(/^\/|\/$/g,""),i.createdAt=o.createdAt||Date.now();let u=null;if(c.nameStrategy){let l=Re(Ln(c.nameStrategy));l&&(u=`\u672A\u77E5\u547D\u540D\u6807\u7B7E ${l}`)}return await M(s,i),r.waitUntil(T(s,"Panel Updated","\u914D\u7F6E\u5DF2\u4FDD\u5B58")),g({success:!0,newRoute:i.apiRoute,tagWarning:u})}function Ln(t){return["default","prefix-user-port","type-user-port","user-port","ip","host-port-user"].includes(t)?"":t}async function $t(t,e,n,s,r){let o=await _(s);await v(s);let a=ct(t,e,n);if(!z(o,a))return g({success:!1,message:"\u672A\u6388\u6743"},401);let c=e.searchParams.get("sub"),i=e.searchParams.get("id"),u=e.searchParams.get("action");if(t.method==="GET"&&!i){let l=(e.searchParams.get("q")||"").toLowerCase(),p=(o.users||[]).map(f=>X(f)),d=l?p.filter(f=>`${f.name} ${f.id} ${f.notes||""}`.toLowerCase().includes(l)):p;return g({success:!0,users:d,total:d.length})}if(t.method==="GET"&&i){let l=(o.users||[]).find(p=>p.id===i);return l?g({success:!0,user:X(l),subscriptionUrl:`${e.origin}/${o.apiRoute}?sub=${encodeURIComponent(l.name||l.id)}`}):g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404)}if(t.method==="POST"&&!i&&!u){let l={...Qt()};return l.id=se(),l.uuid=Et(n?.uuid)?n.uuid:await dt(l.id+Date.now()),l.name=String(n?.name||"").trim()||l.id.slice(0,8),l.notes=n?.notes||"",l.limitTotalGb=n?.limitTotalGb?Number(n.limitTotalGb):null,l.limitDailyGb=n?.limitDailyGb?Number(n.limitDailyGb):null,l.expiryMs=n?.expiryDays?Date.now()+Number(n.expiryDays)*864e5:null,l.maxConfigs=n?.maxConfigs?Number(n.maxConfigs):null,l.connLimit=n?.connLimit?Number(n.connLimit):null,l.proxyIp=n?.proxyIp||"",l.cleanIp=n?.cleanIp||"",l.ports=n?.ports||"",l.mode=n?.mode||"",l.status="active",l.createdAt=Date.now(),!l.limitTotalGb&&o.limitTotalGb&&(l.limitTotalGb=Number(o.limitTotalGb)),!l.limitDailyGb&&o.limitDailyGb&&(l.limitDailyGb=Number(o.limitDailyGb)),!l.expiryMs&&o.expiryDays&&(l.expiryMs=Date.now()+Number(o.expiryDays)*864e5),o.users=o.users||[],o.users.push(l),await M(s,o),r.waitUntil(T(s,"User Created",`${l.name}\uFF08${l.id.slice(0,8)}\uFF09`)),g({success:!0,user:X(l),subscriptionUrl:`${e.origin}/${o.apiRoute}?sub=${encodeURIComponent(l.name)}`},201)}if(t.method==="PUT"&&i){let l=(o.users||[]).findIndex(f=>f.id===i);if(l<0)return g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404);let p={...o.users[l]},d=(f,h)=>{h!==void 0&&(p[f]=h)};return d("name",n?.name),d("notes",n?.notes),n?.limitTotalGb!==void 0&&(p.limitTotalGb=n.limitTotalGb?Number(n.limitTotalGb):null),n?.limitDailyGb!==void 0&&(p.limitDailyGb=n.limitDailyGb?Number(n.limitDailyGb):null),n?.expiryDays!==void 0&&(p.expiryMs=n.expiryDays?Date.now()+Number(n.expiryDays)*864e5:null),n?.maxConfigs!==void 0&&(p.maxConfigs=n.maxConfigs?Number(n.maxConfigs):null),n?.connLimit!==void 0&&(p.connLimit=n.connLimit?Number(n.connLimit):null),d("proxyIp",n?.proxyIp),d("cleanIp",n?.cleanIp),d("ports",n?.ports),d("mode",n?.mode),n?.status&&(p.status=n.status),n?.uuid&&Et(n.uuid)&&(p.uuid=n.uuid),o.users[l]=p,await M(s,o),r.waitUntil(T(s,"User Updated",`${p.name}\uFF08${i.slice(0,8)}\uFF09`)),g({success:!0,user:X(p)})}if(t.method==="DELETE"&&i){let l=(o.users||[]).length;return o.users=(o.users||[]).filter(p=>p.id!==i),o.users.length===l?g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404):(await M(s,o),r.waitUntil(T(s,"User Deleted",i.slice(0,8))),g({success:!0,deleted:i}))}if(t.method==="POST"&&i&&u==="toggle"){let l=(o.users||[]).find(p=>p.id===i);return l?(l.status=l.status==="active"?"paused":"active",l.status==="active"&&(l.disabledReason="",l.disabledAt=0),await M(s,o),r.waitUntil(T(s,"User Toggled",`${l.name} \u2192 ${l.status}`)),g({success:!0,user:X(l)})):g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404)}return t.method==="POST"&&i&&u==="reset"?(pe(i),await G(s,!0),r.waitUntil(T(s,"Traffic Reset",i.slice(0,8))),g({success:!0,message:"\u6D41\u91CF\u5DF2\u91CD\u7F6E"})):g({success:!1,message:"Invalid request"},400)}function X(t){let e=N(t.id),n=e.up+e.down,s=k(t.limitTotalGb),r=e.dailyUp+e.dailyDown,o=k(t.limitDailyGb),a=t.status||"active";return a==="active"&&(t.expiryMs&&Date.now()>t.expiryMs?a="expired":(s>0&&n>=s||o>0&&r>=o)&&(a="disabled")),{...t,status:a,usage:{totalBytes:n,totalText:E(n),limitBytes:s,limitText:s>0?E(s):"\u4E0D\u9650",dailyBytes:r,dailyText:E(r),dailyLimitText:o>0?E(o):"\u4E0D\u9650",progress:s>0?Math.min(100,Math.round(n/s*100)):0,connects:e.connects||0,last:e.last||0}}}async function Mt(t,e,n,s){let r=await _(s);await v(s);let o=ct(t,e,n);if(!z(r,o))return g({success:!1,message:"\u672A\u6388\u6743"},401);let a=r.users||[],c=0,i=0,u={total:a.length,active:0,paused:0,expired:0,disabled:0};for(let p of a){let d=X(p);c+=d.usage.totalBytes,i+=d.usage.dailyBytes,u[d.status==="active"?"active":d.status==="paused"?"paused":d.status==="expired"?"expired":"disabled"]++}let l=N("default");return c+=l.up+l.down,i+=l.dailyUp+l.dailyDown,g({success:!0,stats:{users:u,traffic:{totalBytes:c,totalText:E(c),dailyBytes:i,dailyText:E(i)},system:{version:R,isPaused:!!r.isPaused,hasKV:mt(s),mode:r.mode,ports:r.ports}}})}async function Gt(t,e,n,s){let r=await _(s),o=ct(t,e,n);if(!z(r,o))return g({success:!1,message:"\u672A\u6388\u6743"},401);let a=await de(s);return g({success:!0,logs:a})}async function Bt(t,e,n,s){let r=await _(s),o=ct(t,e,n);if(!z(r,o))return g({success:!1,message:"\u672A\u6388\u6743"},401);let a=n?.op;if(a==="smart-clean-ip"){let c=await Ue(Jt,r.customDns);return g({success:!0,ips:c})}if(a==="preview-preferred"){let c=await bt(r,20);return g({success:!0,list:c})}if(a==="ping"){let c=String(n?.target||"").trim();if(!c)return g({success:!1,message:"\u7F3A\u5C11\u76EE\u6807"},400);let i=Date.now(),u=await I(`https://${c}/cdn-cgi/trace`,{},6e3),l=Date.now()-i;return g({success:!!u,ms:l,colo:u?.headers?.get("cf-ray")?.split("-")?.[1]||""})}return g({success:!1,message:"\u672A\u77E5\u64CD\u4F5C"},400)}async function On(t,e,n,s,r){let o=await _(s),a=ct(t,e,n);if(!at(o,a))return g({success:!1,message:"\u9700\u8981\u4E3B\u5BC6\u94A5"},401);let c=n?.action||"check",i=String(o.githubRepo||"").replace(/^https?:\/\/github\.com\//,"").replace(/\/$/,"");if(!i)return g({success:!1,message:"\u672A\u914D\u7F6E GitHub \u4ED3\u5E93"},400);let u=!!(o.cfAccountId&&o.cfApiToken&&(o.deployTarget==="pages"?o.cfPagesProject:o.cfWorkerName));if(c==="check"){let l=await Ge(i);return g({success:!0,current:R,latest:l||R,updateAvailable:it(R,l||"0")<0,canDeploy:u})}if(c==="deploy"){if(!u)return g({success:!1,message:"Cloudflare \u51ED\u636E\u672A\u914D\u7F6E\u5B8C\u6574"},400);let l=n?.code,p=n?.version||"";if(!l){let f=await Ge(i);if(!n?.force&&it(R,f||"0")>=0)return g({success:!1,message:"\u8FDC\u7A0B\u7248\u672C\u4E0D\u6BD4\u5F53\u524D\u65B0\uFF0C\u8BF7\u52FE\u9009\u5F3A\u5236\u8986\u76D6"},400);let h=await Nn(i,o.autoUpdateFormat);if(!h)return g({success:!1,message:"\u62C9\u53D6\u8FDC\u7A0B\u4EE3\u7801\u5931\u8D25"},502);l=h,p=f}let d=await Be(o,l);return d.ok?(r.waitUntil(T(s,"Auto-Update Success",`\u5DF2\u66F4\u65B0\u5230 ${p||"remote"}`)),g({success:!0,message:`\u5DF2\u66F4\u65B0\u5230 ${p||"remote"}`,newVersion:p})):(r.waitUntil(T(s,"Auto-Update Failed",d.message)),g({success:!1,message:d.message},502))}return g({success:!1,message:"\u672A\u77E5\u64CD\u4F5C"},400)}function it(t,e){let n=String(t||"0").split(".").map(Number),s=String(e||"0").split(".").map(Number);for(let r=0;r<Math.max(n.length,s.length);r++){let o=n[r]||0,a=s[r]||0;if(o!==a)return o<a?-1:1}return 0}async function Ge(t){let e=await I(`https://raw.githubusercontent.com/${t}/main/version`,{},8e3);if(e&&e.ok){let s=(await e.text()).trim();if(s)return s}let n=await I(`https://raw.githubusercontent.com/${t}/main/dist/_worker.js`,{},1e4);if(n&&n.ok){let s=(await n.text()).match(/CURRENT_VERSION\s*=\s*["']([^"']+)["']/);if(s)return s[1]}return null}async function Nn(t,e="plain"){let n=e==="encoded"?[`https://raw.githubusercontent.com/${t}/main/dist/_worker.encode.js`,`https://raw.githubusercontent.com/${t}/main/dist/_worker.js`]:[`https://raw.githubusercontent.com/${t}/main/dist/_worker.js`];for(let s of n){let r=await I(s,{},15e3);if(r&&r.ok){let o=await r.text();if(o&&o.length>1e3)return o}}return null}async function Be(t,e){return t.deployTarget==="pages"?Mn(t,e):$n(t,e)}async function $n(t,e){let n=`https://api.cloudflare.com/client/v4/accounts/${t.cfAccountId}/workers/scripts/${t.cfWorkerName}`,s={Authorization:`Bearer ${t.cfApiToken}`},r=[];try{let u=await I(`${n}/settings`,{headers:s},1e4);u&&u.ok&&(r=(await u.json())?.result?.bindings||[])}catch{}let o={main_module:"_worker.js",compatibility_date:"2025-06-01",compatibility_flags:["nodejs_compat"],bindings:r},a=new FormData;a.append("metadata",new Blob([JSON.stringify(o)],{type:"application/json"})),a.append("_worker.js",new Blob([e],{type:"application/javascript+module"}));let c=await I(n,{method:"PUT",headers:s,body:a},3e4);if(!c)return{ok:!1,message:"\u8BF7\u6C42 Cloudflare \u5931\u8D25"};let i=await c.json().catch(()=>({}));return!c.ok||!i.success?{ok:!1,message:i?.errors?.[0]?.message||`HTTP ${c.status}`}:{ok:!0}}async function Mn(t,e){let n=`https://api.cloudflare.com/client/v4/accounts/${t.cfAccountId}/pages/projects/${t.cfPagesProject}/deployments`,s={Authorization:`Bearer ${t.cfApiToken}`},r=await crypto.subtle.digest("SHA-1",new TextEncoder().encode(e)),o=[...new Uint8Array(r)].map(l=>l.toString(16).padStart(2,"0")).join(""),a={"_worker.js":`/${o}`},c=new FormData;c.append("manifest",new Blob([JSON.stringify(a)],{type:"application/json"})),c.append(`/${o}`,new Blob([e],{type:"application/javascript+module"}));let i=await I(n,{method:"POST",headers:s,body:c},3e4);if(!i)return{ok:!1,message:"\u8BF7\u6C42 Cloudflare \u5931\u8D25"};let u=await i.json().catch(()=>({}));return!i.ok||!u.success?{ok:!1,message:u?.errors?.[0]?.message||`HTTP ${i.status}`}:{ok:!0}}var Ft=D(()=>{et();ut();vt();_t();C();F()});et();yt();C();F();import{connect as ge}from"cloudflare:sockets";function en(t,e=""){let n=[],s=L(t.customProxyIp);if(s.length)return s;if(t.proxyIpMode==="off")return n;if(t.proxyIpMode==="region"&&t.proxyIpRegion){let r=String(t.proxyIpRegion).toUpperCase(),o=Q.filter(i=>i.region.toUpperCase()===r),a=(It[r]||[]).flatMap(i=>Q.filter(u=>u.region.toUpperCase()===i)),c=Q.filter(i=>i.region.toUpperCase()!==r&&!(It[r]||[]).includes(i.region));for(let i of[...o,...a,...c])n.push(`${i.domain}:443`);return n}if(t.proxyIpMode==="custom")return n;if(t.enableOfficialIp!==!1)for(let r of H(jt))n.push(`${r}:443`);if(e&&n.push(`${e}.${Ht}:443`),t.enablePreferredDomain!==!1)for(let r of H(Z))n.push(`${r}:443`);for(let r of H(Q))n.push(`${r.domain}:443`);return t.backupProxyIp?n.push(t.backupProxyIp):n.push(Kt),n}function nn(t,e){let{host:n,port:s}=Y(t,null),r=String(n).match(/\.tp(\d+)/),o=s;if(!o&&r){let a=parseInt(r[1],10);a>1&&a<65536&&(o=a)}return{host:n,port:o||e||443}}function xt(t,e,n,s=""){let r=n.__outbound||null,o=[],a=en(n,s),c={host:t,port:e,via:null,label:"\u76F4\u8FDE"},i=r?{host:t,port:e,via:r.kind,label:`\u51FA\u7AD9\u4EE3\u7406(${r.kind})`}:null,u=n.nat64&&j(t)?{host:re(t,n.nat64),port:e,via:null,label:"NAT64"}:null,l=a.slice(0,6).map(p=>{let{host:d,port:f}=nn(p,e);return{host:d,port:f,via:null,label:`\u53CD\u4EE3 ${d}`}});switch(n.outboundMode){case"proxy-first":i&&o.push(i),o.push(c,...l),u&&o.push(u);break;case"proxy-only":i&&o.push(i);break;case"direct-first":o.push(c,...l),i&&o.push(i),u&&o.push(u);break;default:o.push(c,...l),i&&o.push(i),u&&o.push(u)}return o}async function wt(t,e){let{host:n,port:s,via:r}=t;if(!r)return await ge({hostname:n,port:s});let o=e.__outbound;if(!o)throw new Error("no outbound proxy configured");let a=await ge({hostname:o.host,port:o.port,secureTransport:o.kind==="https"?"on":"off"});return o.kind==="socks5"?await sn(a,n,s,o):await rn(a,n,s,o),a}async function sn(t,e,n,s){let r=t.writable.getWriter(),o=!!(s.username||s.password);await r.write(new Uint8Array(o?[5,2,0,2]:[5,1,0]));let a=t.readable.getReader(),c=await nt(a,2);if(c[1]===2){let f=new TextEncoder().encode(s.username||""),h=new TextEncoder().encode(s.password||""),m=new Uint8Array(3+f.length+h.length);if(m[0]=1,m[1]=f.length,m.set(f,2),m[2+f.length]=h.length,m.set(h,3+f.length),await r.write(m),(await nt(a,2))[1]!==0)throw new Error("socks5 auth failed")}else if(c[1]!==0)throw new Error("socks5 method not supported");let i=new TextEncoder().encode(e),u=new Uint8Array(5+i.length);u[0]=5,u[1]=1,u[2]=0,u[3]=3,u[4]=i.length,u.set(i,5);let l=new Uint8Array(u.length+2);l.set(u),l[u.length]=n>>8,l[u.length+1]=n&255,await r.write(l);let p=await nt(a,4);if(p[1]!==0)throw new Error(`socks5 connect failed: ${p[1]}`);let d=0;p[3]===1?d=4:p[3]===4?d=16:p[3]===3&&(d=(await nt(a,1))[0]),await nt(a,d+2),r.releaseLock(),a.releaseLock()}async function rn(t,e,n,s){let r=t.writable.getWriter(),o=n===80?e:`${e}:${n}`,a=`CONNECT ${o} HTTP/1.1\r
Host: ${o}\r
`;if(s.username||s.password){let p=btoa(`${s.username||""}:${s.password||""}`);a+=`Proxy-Authorization: Basic ${p}\r
`}a+=`\r
`,await r.write(new TextEncoder().encode(a));let c=t.readable.getReader(),i="",u=new TextDecoder;for(;!i.includes(`\r
\r
`);){let{value:p,done:d}=await c.read();if(d)throw new Error("proxy closed");if(i+=u.decode(p,{stream:!0}),i.length>4096)break}let l=parseInt((i.match(/^HTTP\/1\.[01] (\d+)/)||[])[1]||"0",10);if(l<200||l>=300)throw new Error(`proxy CONNECT failed: ${l}`);r.releaseLock(),c.releaseLock()}async function nt(t,e){if(e<=0)return new Uint8Array(0);let n=[],s=0;for(;s<e;){let{value:a,done:c}=await t.read();if(c)throw new Error("unexpected EOF");n.push(a),s+=a.length}let r=new Uint8Array(s),o=0;for(let a of n)r.set(a,o),o+=a.length;return r.slice(0,e)}function st(t){try{t.close()}catch{}}et();C();F();var on=8192;function an(t){let e=new Map,n=new Map,s=(o,a,c)=>{if(a){let i=q(a);i&&e.set(i.join(","),o)}c&&n.set(Rt(c),o)};for(let o of t.users||[])o.uuid&&s(o,o.uuid,o.password||o.uuid);let r={id:"default",uuid:t.uuid,name:t.name||"\u9ED8\u8BA4",status:"active",isMain:!0,limitTotalGb:t.limitTotalGb??null,limitDailyGb:t.limitDailyGb??null,expiryMs:null,connLimit:null,maxConfigs:t.maxConfigs??null,proxyIp:"",cleanIp:"",ports:"",mode:"",createdAt:0};return s(r,t.uuid,t.trojanPassword||t.uuid),{byUuid:e,byHash:n,main:r}}function cn(t){if(!t)return{ok:!1,reason:"\u672A\u6388\u6743"};if(t.status==="paused")return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u6682\u505C"};if(t.status==="disabled")return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u7981\u7528"};if(t.status==="expired")return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u8FC7\u671F"};if(t.expiryMs&&Date.now()>t.expiryMs)return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u5230\u671F"};let e=N(t.id),n=k(t.limitTotalGb);if(n>0&&e.up+e.down>=n)return{ok:!1,reason:"\u603B\u6D41\u91CF\u5DF2\u7528\u5C3D"};let s=k(t.limitDailyGb);return s>0&&e.dailyUp+e.dailyDown>=s?{ok:!1,reason:"\u4ECA\u65E5\u6D41\u91CF\u5DF2\u7528\u5C3D"}:{ok:!0}}var rt=new Map;function ln(t){let e=(rt.get(t)||0)+1;return rt.set(t,e),e}function un(t){let e=(rt.get(t)||1)-1;e<=0?rt.delete(t):rt.set(t,e)}function pn(t,e){let n=!1;return new ReadableStream({start(s){e&&e.byteLength&&s.enqueue(new Uint8Array(e).buffer),t.addEventListener("message",r=>{if(!n)try{s.enqueue(r.data)}catch{}}),t.addEventListener("close",()=>{if(!n){n=!0;try{s.close()}catch{}}}),t.addEventListener("error",r=>{if(!n){n=!0;try{s.error(r)}catch{}}})},cancel(){n=!0;try{t.close()}catch{}}})}async function ye(t,e,n){let s=await _(e);if(await v(e),s.__outbound||(s.__outbound=gt(s.outboundProxy)),s.isPaused)return new Response("service paused",{status:503});let r=an(s),o=t?.cf?.colo||"",a=new WebSocketPair,c=a[0],i=a[1];i.accept(),i.binaryType="arraybuffer";let u=fe(t),p=pn(i,u&&u.byteLength<=on?u:null).getReader(),d={user:null,header:null,remoteHost:"",remotePort:0,isUDP:!1};return n.waitUntil(dn(p,i,s,d,r,e,o).catch(f=>{console.error("ws pump error",f);try{i.close()}catch{}})),new Response(null,{status:101,webSocket:c})}async function dn(t,e,n,s,r,o,a){let c=null,i=null,u=!1,l=!1,p=()=>{l||(l=!0,un(h()))},d=m=>{try{e.readyState===1&&e.send(m)}catch{}},f=()=>{try{e.close()}catch{}},h=()=>s.user?.id||"default";try{for(;;){let{value:m,done:b}=await t.read();if(b)break;if(!(!m||!m.byteLength)){if(!s.header){let x=fn(m,r,s);if(!x.ok){f();return}if(!cn(s.user).ok){x.reply&&d(x.reply),f();return}let y=ln(h());if(s.user?.connLimit&&y>s.user.connLimit){p(),f();return}if(ue(h()),s.isUDP){await mn(s,x.payload,d,n,a),p(),f();return}let w=await xe(s.remoteHost,s.remotePort,n,x.payload,a);if(!w){p(),f();return}c=w.socket,i=w.writer,x.reply&&d(x.reply);let U=h();c.readable.pipeThrough(new TransformStream({transform(A,$){O(U,0,A.byteLength||A.length||0),$.enqueue(A)}})).pipeTo(new WritableStream({write(A){d(A)},close(){p(),f()},abort(){p(),f()}})).catch(()=>{p(),f()});continue}i&&(O(h(),m.byteLength||m.length||0,0),await i.write(m))}}u=!0}catch(m){console.error("pump error",m)}finally{if(i)try{await i.close()}catch{}c&&st(c),p(),u||f(),await G(o,!0)}}function fn(t,e,n){let s=new Uint8Array(t);if(s.length>=58&&s[56]===13&&s[57]===10){let r=new TextDecoder().decode(s.slice(0,56)).toLowerCase(),o=e.byHash.get(r);if(o)try{let a=he(t,r);return n.header=a,n.user=o,n.remoteHost=a.address,n.remotePort=a.port,n.isUDP=!1,{ok:!0,payload:s.slice(a.rawIndex),reply:null}}catch{return{ok:!1}}}try{let r=ht(t),o=e.byUuid.get(r.uuidBytes.join(","));return o?(n.header=r,n.user=o,n.remoteHost=r.address,n.remotePort=r.port,n.isUDP=r.command===me,{ok:!0,payload:s.slice(r.rawIndex),reply:new Uint8Array([r.version,0])}):{ok:!1}}catch{return{ok:!1}}}async function xe(t,e,n,s,r){let o=xt(t,e,n,r);for(let a of o)try{let c=await wt(a,n),i=c.writable.getWriter();return s&&s.byteLength&&await i.write(s),{socket:c,writer:i,label:a.label}}catch{continue}return null}async function mn(t,e,n,s,r){let o=e&&e.byteLength>2?e.slice(2):e,a=t.user?.id||"default";O(a,o?.byteLength||0,0);try{let c=await xe(zt,53,s,o,r);if(!c)return;let i=c.socket.readable.getReader(),u=[],l=0;for(;;){let{value:h,done:m}=await i.read();if(m||(u.push(new Uint8Array(h)),l+=h.byteLength,O(a,0,h.byteLength),l>=2))break}try{i.releaseLock()}catch{}st(c.socket);let p=new Uint8Array(l),d=0;for(let h of u)p.set(h,d),d+=h.byteLength;let f=new Uint8Array(p.length+2);f[0]=p.length>>8,f[1]=p.length&255,f.set(p,2),n(f.buffer)}catch{}}yt();et();C();async function we(t,e,n){let s=await _(e);if(await v(e),s.__outbound||(s.__outbound=gt(s.outboundProxy)),s.isPaused)return new Response("paused",{status:503});let r=t?.cf?.colo||"",o=t.body;if(!o)return new Response("bad request",{status:400});let a=o.getReader(),c=null,i=null,u="default",l=!1,p=null,d=()=>{if(i){try{i.close()}catch{}i=null}c&&(st(c),c=null)},f=new ReadableStream({async start(h){try{for(;;){let{value:m,done:b}=await a.read();if(b)break;if(!m||!m.byteLength)continue;let x=new Uint8Array(m);if(!l){let S=hn(x,s);if(!S){h.close();return}u=S.user.id;let y=await gn(S.host,S.port,s,x.slice(S.rawIndex),r);if(!y){h.close();return}c=y.socket,i=y.writer,l=!0,p=c.readable.pipeTo(new WritableStream({write(w){O(u,0,w.byteLength||0),h.enqueue(w)},close(){try{h.close()}catch{}}})).catch(()=>{try{h.close()}catch{}});continue}i&&(O(u,m.byteLength||0,0),await i.write(m))}}catch(m){console.error("xhttp error",m);try{h.close()}catch{}}},cancel(){d()}});return n.waitUntil((async()=>{try{p&&await p}catch{}finally{d(),await G(e,!0)}})()),new Response(f,{status:200,headers:{"content-type":"application/grpc","user-agent":"Go-http-client/2.0","x-accel-buffering":"no","cache-control":"no-store"}})}function hn(t,e){if(t.length<24)return null;let n=t.slice(1,17),s=null;for(let o of e.users||[]){let a=q(o.uuid);if(a&&a.join(",")===n.join(",")){s=o;break}}let r=q(e.uuid);if(!s&&r&&r.join(",")===n.join(",")&&(s={id:"default",name:e.name||"\u9ED8\u8BA4",status:"active"}),!s)return null;try{let o=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength),a=ht(o);return a.command!==1?null:{user:s,host:a.address,port:a.port,rawIndex:a.rawIndex}}catch{return null}}async function gn(t,e,n,s,r){for(let o of xt(t,e,n,r))try{let a=await wt(o,n),c=a.writable.getWriter();return s&&s.byteLength&&await c.write(s),{socket:a,writer:c}}catch{continue}return null}_t();_t();var St=t=>t.path||"/";function Cn(t){let e={name:t.name,server:t.address,port:t.port,udp:!1};return t.type==="trojan"?{...e,type:"trojan",password:t.password,sni:t.sni,"client-fingerprint":t.fp,network:"ws",...t.alpn?{alpn:t.alpn.split(",")}:{},"ws-opts":Oe(t)}:{...e,type:"vless",uuid:t.uuid,tls:t.tls,servername:t.sni,"client-fingerprint":t.fp,network:"ws",...t.alpn?{alpn:t.alpn.split(",")}:{},"ws-opts":Oe(t)}}function Oe(t){let e={path:t.type==="xhttp"?ot(t.uuid):St(t),headers:{Host:t.host}};return t.earlyData&&(e["max-early-data"]=2560,e["early-data-header-name"]="Sec-WebSocket-Protocol"),e}function V(t){return`"${String(t).replace(/"/g,'\\"')}"`}function Ne(t,e={}){let n=t.map(o=>o.name),s=t.map(Cn),r=[];r.push("mixed-port: 7890"),r.push("allow-lan: false"),r.push("mode: rule"),r.push("log-level: warning"),r.push("ipv6: true"),r.push("external-controller: 127.0.0.1:9090"),r.push("dns:"),r.push("  enable: true"),r.push("  ipv6: true"),r.push("  enhanced-mode: fake-ip"),r.push("  fake-ip-range: 198.18.0.1/16"),r.push("  nameserver:"),r.push("    - https://1.1.1.1/dns-query"),r.push("    - https://8.8.8.8/dns-query"),r.push("  fallback:"),r.push("    - https://dns.google/dns-query"),r.push("    - https://cloudflare-dns.com/dns-query"),r.push("proxies:");for(let o of s){let a=o.servername||o.sni||"",c=o["client-fingerprint"]||o.fp||"chrome";r.push(`  - { name: ${V(o.name)}, type: ${o.type}, server: ${o.server}, port: ${o.port}, udp: false${o.type==="trojan"?`, password: ${V(o.password)}, sni: ${a}`:`, uuid: ${o.uuid}, tls: ${o.tls}, servername: ${a}`}, network: ws, client-fingerprint: ${c}${o.alpn?`, alpn: [${o.alpn.map(V).join(", ")}]`:""}, ws-opts: { path: ${V(o["ws-opts"].path)}, headers: { Host: ${V(o["ws-opts"].headers.Host)} }${o["ws-opts"]["max-early-data"]?`, max-early-data: ${o["ws-opts"]["max-early-data"]}, early-data-header-name: ${o["ws-opts"]["early-data-header-name"]}`:""} } }`)}return r.push("proxy-groups:"),r.push(`  - { name: "\u{1F680} \u8282\u70B9\u9009\u62E9", type: select, proxies: [${n.map(V).join(", ")}, "DIRECT"] }`),r.push(`  - { name: "\u267B\uFE0F \u81EA\u52A8\u9009\u62E9", type: url-test, proxies: [${n.map(V).join(", ")}], url: "https://www.gstatic.com/generate_204", interval: 300 }`),r.push('  - { name: "\u{1F3AF} \u5168\u7403\u76F4\u8FDE", type: select, proxies: ["DIRECT"] }'),r.push("rules:"),r.push("  - GEOIP,lan,\u{1F3AF} \u5168\u7403\u76F4\u8FDE,no-resolve"),r.push("  - MATCH,\u{1F680} \u8282\u70B9\u9009\u62E9"),r.join(`
`)}function Dn(t,e){let n=t.tls?{enabled:!0,server_name:t.sni,utls:{enabled:!0,fingerprint:t.fp},...t.alpn?{alpn:t.alpn.split(",")}:{}}:{enabled:!1,server_name:t.sni,utls:{enabled:!0,fingerprint:t.fp}};return t.type==="trojan"?{type:"trojan",tag:t.name,server:t.address,server_port:t.port,password:t.password,tls:n,transport:{type:"ws",path:St(t),headers:{Host:t.host},...t.earlyData?{max_early_data:2560,early_data_header_name:"Sec-WebSocket-Protocol"}:{}}}:t.type==="xhttp"?{type:"vless",tag:t.name,server:t.address,server_port:t.port,uuid:t.uuid,packet_encoding:"xudp",tls:n,transport:{type:"xhttp",mode:"stream-one",host:t.host,path:ot(t.uuid),headers:{Host:t.host}}}:{type:"vless",tag:t.name,server:t.address,server_port:t.port,uuid:t.uuid,packet_encoding:"xudp",tls:n,transport:{type:"ws",path:St(t),headers:{Host:t.host},...t.earlyData?{max_early_data:2560,early_data_header_name:"Sec-WebSocket-Protocol"}:{}}}}function $e(t){let e=t.map((s,r)=>Dn(s,r)),n=e.map(s=>s.tag);return JSON.stringify({log:{level:"info",timestamp:!0},dns:{servers:[{tag:"remote",address:"https://1.1.1.1/dns-query",detour:"select"},{tag:"local",address:"223.5.5.5",detour:"direct"}],rules:[{outbound:["any"],server:"local"}],final:"remote",strategy:"prefer_ipv4"},inbounds:[{type:"mixed",tag:"mixed-in",listen:"127.0.0.1",listen_port:2080}],outbounds:[...e,{type:"selector",tag:"select",outbounds:["auto",...n]},{type:"urltest",tag:"auto",outbounds:n,url:"https://www.gstatic.com/generate_204",interval:"5m"},{type:"direct",tag:"direct"},{type:"block",tag:"block"},{type:"dns",tag:"dns-out"}],route:{rules:[{ip_is_private:!0,outbound:"direct"},{protocol:"dns",action:"hijack-dns"}],final:"select",auto_detect_interface:!0},experimental:{cache_file:{enabled:!0,path:"cache.db",store_fakeip:!0},clash_api:{external_controller:"127.0.0.1:9090"}}},null,2)}function Rn(t){let e={path:t.type==="xhttp"?ot(t.uuid):St(t),headers:{Host:t.host},...t.earlyData?{maxEarlyData:2560,earlyDataHeaderName:"Sec-WebSocket-Protocol"}:{}};return t.type==="trojan"?{protocol:"trojan",tag:t.name,settings:{servers:[{address:t.address,port:t.port,password:t.password,level:0}]},streamSettings:{network:"ws",security:t.tls?"tls":"none",...t.tls?{tlsSettings:{serverName:t.sni,fingerprint:t.fp,...t.alpn?{alpn:t.alpn.split(",")}:{}}}:{},wsSettings:e}}:{protocol:"vless",tag:t.name,settings:{vnext:[{address:t.address,port:t.port,users:[{id:t.uuid,encryption:"none",level:0}]}]},streamSettings:{network:"ws",security:t.tls?"tls":"none",...t.tls?{tlsSettings:{serverName:t.sni,fingerprint:t.fp,...t.alpn?{alpn:t.alpn.split(",")}:{}}}:{},wsSettings:e}}}function Me(t){return JSON.stringify({log:{loglevel:"warning"},dns:{servers:["https+local://1.1.1.1/dns-query","223.5.5.5"]},inbounds:[{tag:"socks-in",port:10808,listen:"127.0.0.1",protocol:"socks",settings:{auth:"noauth",udp:!0}},{tag:"http-in",port:10809,listen:"127.0.0.1",protocol:"http",settings:{auth:"noauth"}}],outbounds:t.map(Rn),routing:{domainStrategy:"AsIs",rules:[{type:"field",outboundTag:"direct",ip:["geoip:private"]},{type:"field",outboundTag:"direct",domain:["geosite:cn"]}]}},null,2)}Ft();ut();var je=`<!doctype html>\r
<html lang="zh-CN">\r
<head>\r
<meta charset="utf-8">\r
<meta name="viewport" content="width=device-width,initial-scale=1">\r
<title>CFSub \u7BA1\u7406\u9762\u677F</title>\r
<style>\r
:root{\r
  --bg:#0b1120; --bg2:#0f172a; --card:#111c33; --card2:#16223c; --bd:#1e2b47;\r
  --fg:#e2e8f0; --mut:#94a3b8; --acc:#38bdf8; --ok:#34d399; --warn:#fbbf24; --err:#f87171;\r
  --r:14px;\r
}\r
*{box-sizing:border-box}\r
html,body{margin:0;padding:0}\r
body{background:var(--bg);color:var(--fg);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;font-size:14px;line-height:1.6}\r
a{color:var(--acc);text-decoration:none}\r
code,.mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px}\r
::-webkit-scrollbar{width:8px;height:8px}\r
::-webkit-scrollbar-thumb{background:#243354;border-radius:8px}\r
\r
/* ---------- \u767B\u5F55 ---------- */\r
#login{position:fixed;inset:0;background:radial-gradient(1200px 600px at 50% -10%,#1e3a5f33,transparent),var(--bg);z-index:99;display:flex;align-items:center;justify-content:center}\r
#login .box{width:380px;max-width:92vw;background:var(--card);border:1px solid var(--bd);border-radius:18px;padding:32px}\r
#login h2{margin:0 0 6px;font-size:22px}\r
#login p{color:var(--mut);font-size:13px;margin:0 0 20px}\r
\r
/* ---------- \u5E03\u5C40 ---------- */\r
#app{display:none;min-height:100vh}\r
.sidebar{position:fixed;left:0;top:0;bottom:0;width:210px;background:var(--bg2);border-right:1px solid var(--bd);padding:18px 12px;overflow-y:auto;z-index:10}\r
.brand{font-size:17px;font-weight:700;margin-bottom:4px;display:flex;align-items:center;gap:8px}\r
.brand span{font-size:11px;color:var(--mut);font-weight:400}\r
.nav{display:flex;flex-direction:column;gap:2px;margin-top:18px}\r
.nav button{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:none;border:0;color:var(--mut);padding:9px 12px;border-radius:10px;cursor:pointer;font-size:14px}\r
.nav button:hover{background:#1b2942;color:var(--fg)}\r
.nav button.on{background:linear-gradient(90deg,#0ea5e933,transparent);color:var(--fg);font-weight:600;border-left:2px solid var(--acc)}\r
.main{margin-left:210px;padding:22px 26px 90px;max-width:1180px}\r
h1.page{font-size:20px;margin:0 0 18px}\r
h3.sec{font-size:14px;margin:22px 0 10px;color:var(--acc);border-left:3px solid var(--acc);padding-left:8px}\r
\r
/* ---------- \u7EC4\u4EF6 ---------- */\r
.card{background:var(--card);border:1px solid var(--bd);border-radius:var(--r);padding:16px;margin-bottom:14px}\r
.grid{display:grid;gap:12px}\r
.g4{grid-template-columns:repeat(4,1fr)}\r
.g3{grid-template-columns:repeat(3,1fr)}\r
.g2{grid-template-columns:repeat(2,1fr)}\r
@media(max-width:900px){.g4,.g3,.g2{grid-template-columns:repeat(2,1fr)}}\r
@media(max-width:620px){\r
  .sidebar{position:static;width:auto;display:flex;overflow-x:auto;padding:10px}\r
  .nav{flex-direction:row;margin-top:0}\r
  .main{margin-left:0;padding:16px 14px 90px}\r
  .g4,.g3,.g2{grid-template-columns:1fr}\r
}\r
.stat{background:var(--card2);border:1px solid var(--bd);border-radius:12px;padding:14px}\r
.stat .k{font-size:12px;color:var(--mut)}\r
.stat .v{font-size:22px;font-weight:700;margin-top:2px}\r
.stat .v small{font-size:12px;font-weight:400;color:var(--mut)}\r
\r
label.f{display:block;font-size:12px;color:var(--mut);margin:12px 0 5px}\r
input,select,textarea{width:100%;background:#0b1120;border:1px solid var(--bd);color:var(--fg);border-radius:9px;padding:9px 11px;font-size:13px;font-family:inherit}\r
textarea{min-height:90px;font-family:ui-monospace,monospace;font-size:12px;resize:vertical}\r
input:focus,select:focus,textarea:focus{outline:none;border-color:var(--acc)}\r
input[readonly]{color:var(--mut)}\r
.chk{display:flex;align-items:center;gap:8px;margin:10px 0;font-size:13px}\r
.chk input{width:auto}\r
.hint{font-size:11px;color:var(--mut);margin-top:4px}\r
.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\r
.row>*{flex:1;min-width:150px}\r
\r
button.btn{background:var(--acc);color:#04202e;border:0;border-radius:9px;padding:9px 16px;font-size:13px;font-weight:600;cursor:pointer}\r
button.btn:hover{opacity:.88}\r
button.gh{background:transparent;color:var(--fg);border:1px solid var(--bd)}\r
button.gh:hover{background:#1b2942}\r
button.dg{background:transparent;color:var(--err);border:1px solid #7f1d1d}\r
button.sm{padding:5px 10px;font-size:12px;border-radius:7px}\r
button:disabled{opacity:.5;cursor:not-allowed}\r
\r
table{width:100%;border-collapse:collapse;font-size:13px}\r
th,td{text-align:left;padding:9px 10px;border-bottom:1px solid var(--bd)}\r
th{color:var(--mut);font-weight:500;font-size:12px}\r
tr:hover td{background:#16223c55}\r
\r
.tag{display:inline-block;padding:2px 8px;border-radius:999px;font-size:11px;border:1px solid}\r
.tag.ok{color:var(--ok);border-color:#10b98155;background:#10b9811a}\r
.tag.warn{color:var(--warn);border-color:#f59e0b55;background:#f59e0b1a}\r
.tag.err{color:var(--err);border-color:#ef444455;background:#ef44441a}\r
.tag.mut{color:var(--mut);border-color:#47556955}\r
\r
.bar{height:6px;background:#0b1120;border-radius:5px;overflow:hidden;margin-top:4px}\r
.bar>i{display:block;height:100%;background:linear-gradient(90deg,#38bdf8,#6366f1)}\r
\r
.toast{position:fixed;top:16px;right:16px;z-index:200;display:flex;flex-direction:column;gap:8px}\r
.toast>div{background:var(--card2);border:1px solid var(--bd);border-left:3px solid var(--acc);border-radius:10px;padding:10px 16px;font-size:13px;box-shadow:0 10px 30px #0006;animation:si .2s ease}\r
.toast>div.ok{border-left-color:var(--ok)}\r
.toast>div.err{border-left-color:var(--err)}\r
@keyframes si{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:none}}\r
\r
.savebar{position:fixed;right:20px;bottom:20px;display:flex;gap:10px;z-index:50}\r
.savebar button{padding:11px 20px;border-radius:11px;font-size:14px}\r
.dirty{box-shadow:0 0 0 2px var(--warn)}\r
\r
.modal{position:fixed;inset:0;background:#000a;display:none;align-items:center;justify-content:center;z-index:120;padding:20px}\r
.modal.on{display:flex}\r
.modal .box{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:22px;width:560px;max-width:96vw;max-height:88vh;overflow-y:auto}\r
.modal h3{margin:0 0 14px;font-size:16px}\r
\r
.banner{background:linear-gradient(90deg,#0ea5e922,#6366f122);border:1px solid #0ea5e944;border-radius:12px;padding:12px 16px;margin-bottom:14px;display:flex;align-items:center;gap:12px;flex-wrap:wrap}\r
\r
.linkbox{display:flex;gap:8px;align-items:center;margin-bottom:8px}\r
.linkbox input{flex:1}\r
.qr{width:150px;height:150px;background:#fff;border-radius:10px;padding:6px}\r
.logline{font-size:12px;padding:6px 0;border-bottom:1px solid #1e2b4788;display:flex;gap:10px}\r
.logline .t{color:var(--mut);font-family:ui-monospace,monospace;min-width:150px}\r
details{margin-bottom:8px}\r
summary{cursor:pointer;color:var(--mut);font-size:13px;padding:6px 0}\r
.hide{display:none!important}\r
</style>\r
</head>\r
<body>\r
\r
<!-- ================= \u767B\u5F55 ================= -->\r
<div id="login">\r
  <div class="box">\r
    <h2>\u{1F510} CFSub \u7BA1\u7406\u9762\u677F</h2>\r
    <p>\u8BF7\u8F93\u5165\u7BA1\u7406\u5BC6\u94A5\u4EE5\u7EE7\u7EED</p>\r
    <label class="f">\u7BA1\u7406\u5BC6\u94A5</label>\r
    <input id="pwd" type="password" placeholder="\u9ED8\u8BA4 admin" autocomplete="current-password">\r
    <div style="margin-top:18px"><button class="btn" style="width:100%" onclick="doLogin()">\u767B \u5F55</button></div>\r
    <div class="hint" id="loginErr" style="color:var(--err)"></div>\r
  </div>\r
</div>\r
\r
<!-- ================= \u4E3B\u4F53 ================= -->\r
<div id="app">\r
  <div class="sidebar">\r
    <div class="brand">\u{1F310} CFSub <span id="ver"></span></div>\r
    <div class="nav">\r
      <button class="on" data-tab="overview" onclick="tab('overview')">\u{1F4CA} \u6982\u89C8</button>\r
      <button data-tab="info" onclick="tab('info')">\u{1F517} \u8282\u70B9\u4FE1\u606F</button>\r
      <button data-tab="network" onclick="tab('network')">\u{1F30D} \u7F51\u7EDC\u8BCA\u65AD</button>\r
      <button data-tab="users" onclick="tab('users')">\u{1F465} \u7528\u6237\u7BA1\u7406</button>\r
      <button data-tab="settings" onclick="tab('settings')">\u2699\uFE0F \u57FA\u672C\u8BBE\u7F6E</button>\r
      <button data-tab="advanced" onclick="tab('advanced')">\u{1F9E9} \u9AD8\u7EA7\u8BBE\u7F6E</button>\r
      <button data-tab="logs" onclick="tab('logs')">\u{1F4DC} \u65E5\u5FD7</button>\r
      <button data-tab="help" onclick="tab('help')">\u2753 \u5E2E\u52A9</button>\r
    </div>\r
  </div>\r
\r
  <div class="main">\r
    <!-- ---------- \u6982\u89C8 ---------- -->\r
    <div id="v-overview" class="view">\r
      <h1 class="page">\u{1F4CA} \u6982\u89C8</h1>\r
      <div id="lockedBanner"></div>\r
      <div id="updateBanner"></div>\r
      <div class="grid g4" id="statCards"></div>\r
      <h3 class="sec">\u7CFB\u7EDF\u4FE1\u606F</h3>\r
      <div class="card" id="sysInfo"></div>\r
      <h3 class="sec">\u6700\u8FD1\u65E5\u5FD7</h3>\r
      <div class="card" id="recentLogs"></div>\r
    </div>\r
\r
    <!-- ---------- \u8282\u70B9\u4FE1\u606F ---------- -->\r
    <div id="v-info" class="view hide">\r
      <h1 class="page">\u{1F517} \u8282\u70B9\u4FE1\u606F</h1>\r
      <div id="profiles"></div>\r
    </div>\r
\r
    <!-- ---------- \u7F51\u7EDC\u8BCA\u65AD ---------- -->\r
    <div id="v-network" class="view hide">\r
      <h1 class="page">\u{1F30D} \u7F51\u7EDC\u8BCA\u65AD</h1>\r
      <div class="grid g2">\r
        <div class="card">\r
          <h3 class="sec" style="margin-top:0">\u8FDE\u63A5\u4FE1\u606F</h3>\r
          <div id="netInfo"></div>\r
        </div>\r
        <div class="card">\r
          <h3 class="sec" style="margin-top:0">\u5EF6\u8FDF\u6D4B\u8BD5</h3>\r
          <label class="f">\u6D4B\u8BD5\u76EE\u6807\uFF08IP \u6216\u57DF\u540D\uFF09</label>\r
          <input id="pingTarget" placeholder="\u4F8B\u5982 1.1.1.1 \u6216 cf.090227.xyz">\r
          <div class="row" style="margin-top:10px">\r
            <button class="btn" onclick="runPing()">\u5F00\u59CB\u6D4B\u8BD5</button>\r
          </div>\r
          <div class="hint" id="pingResult"></div>\r
        </div>\r
      </div>\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u26A1 \u667A\u80FD\u89E3\u6790 Clean IP</h3>\r
        <p class="hint">\u628A\u4E00\u6279\u5E38\u7528\u57DF\u540D\u901A\u8FC7 DoH \u89E3\u6790\u6210\u53EF\u7528 IP\uFF0C\u81EA\u52A8\u586B\u5165\u4E0B\u65B9\u300CClean IP\u300D\u3002</p>\r
        <div class="row">\r
          <button class="btn" onclick="smartClean()">\u5F00\u59CB\u89E3\u6790</button>\r
          <button class="btn gh" onclick="previewPreferred()">\u9884\u89C8\u5F53\u524D\u4F18\u9009 IP</button>\r
        </div>\r
        <div class="hint" id="cleanResult" style="margin-top:10px"></div>\r
      </div>\r
    </div>\r
\r
    <!-- ---------- \u7528\u6237\u7BA1\u7406 ---------- -->\r
    <div id="v-users" class="view hide">\r
      <h1 class="page">\u{1F465} \u7528\u6237\u7BA1\u7406</h1>\r
      <div class="grid g4" id="userStat"></div>\r
      <div class="card">\r
        <div class="row">\r
          <input id="userSearch" placeholder="\u641C\u7D22\u7528\u6237\u540D / ID / \u5907\u6CE8" oninput="renderUsers()" style="flex:2">\r
          <button class="btn" onclick="openUserForm()">\u2795 \u65B0\u589E\u7528\u6237</button>\r
          <button class="btn gh" onclick="loadUsers()">\u5237\u65B0</button>\r
        </div>\r
      </div>\r
      <div class="card" style="padding:0;overflow-x:auto">\r
        <table>\r
          <thead><tr><th>\u7528\u6237</th><th>\u72B6\u6001</th><th>\u603B\u6D41\u91CF</th><th>\u4ECA\u65E5</th><th>\u5230\u671F</th><th>\u5E76\u53D1</th><th style="width:290px">\u64CD\u4F5C</th></tr></thead>\r
          <tbody id="userTable"></tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
    <!-- ---------- \u57FA\u672C\u8BBE\u7F6E ---------- -->\r
    <div id="v-settings" class="view hide">\r
      <h1 class="page">\u2699\uFE0F \u57FA\u672C\u8BBE\u7F6E</h1>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u9762\u677F</h3>\r
        <div class="row">\r
          <div><label class="f">\u9762\u677F\u540D\u79F0</label><input id="cfg-name" data-cfg="name"></div>\r
          <div><label class="f">\u9762\u677F\u8DEF\u5F84</label><input id="cfg-apiRoute" data-cfg="apiRoute"><div class="hint">\u8BBF\u95EE /{\u8DEF\u5F84}/dash \u6253\u5F00\u672C\u9762\u677F</div></div>\r
        </div>\r
        <label class="f">\u4E3B\u7BA1\u7406\u5BC6\u94A5</label>\r
        <div class="row">\r
          <input id="newMasterKey" type="password" placeholder="\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539">\r
          <button class="btn gh" onclick="changeMasterKey()">\u4FEE\u6539\u5BC6\u94A5</button>\r
        </div>\r
        <label class="f"><input type="checkbox" id="cfg-isPaused" data-cfg="isPaused" class="chk"> </label>\r
        <div class="chk"><input type="checkbox" id="chk-isPaused"><span>\u{1F6D1} Kill Switch\uFF08\u5F00\u542F\u540E\u505C\u6B62\u4E00\u5207\u4EE3\u7406\u8F6C\u53D1\uFF09</span></div>\r
      </div>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u8282\u70B9\u51ED\u8BC1</h3>\r
        <div class="row">\r
          <div><label class="f">\u4E3B UUID</label><input id="cfg-uuid" data-cfg="uuid" class="mono"></div>\r
          <div><label class="f">Trojan \u5BC6\u7801\uFF08\u7559\u7A7A\u5219\u7B49\u4E8E\u4E3B UUID\uFF09</label><input id="cfg-trojanPassword" data-cfg="trojanPassword"></div>\r
        </div>\r
        <div class="row" style="margin-top:10px">\r
          <button class="btn gh" onclick="regenUuid()">\u{1F3B2} \u91CD\u65B0\u751F\u6210 UUID</button>\r
        </div>\r
        <div class="hint">\u4FEE\u6539\u6216\u91CD\u65B0\u751F\u6210 UUID \u540E\uFF0C\u6240\u6709\u5DF2\u5BFC\u5165\u7684\u65E7\u8282\u70B9\u4F1A\u7ACB\u5373\u5931\u6548\uFF0C\u9700\u8981\u5728\u300C\u8282\u70B9\u4FE1\u606F\u300D\u91CD\u65B0\u590D\u5236\u8BA2\u9605\u94FE\u63A5\u3002</div>\r
      </div>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u534F\u8BAE\u4E0E\u7AEF\u53E3</h3>\r
        <label class="f">\u534F\u8BAE\u6A21\u5F0F</label>\r
        <select id="cfg-mode" data-cfg="mode">\r
          <option value="vless">\u4EC5 VLESS</option>\r
          <option value="trojan">\u4EC5 Trojan</option>\r
          <option value="xhttp">\u4EC5 XHTTP</option>\r
          <option value="both">VLESS + Trojan</option>\r
          <option value="all">\u5168\u90E8\uFF08VLESS + Trojan + XHTTP\uFF09</option>\r
        </select>\r
        <label class="f">\u7AEF\u53E3\uFF08\u53EF\u591A\u9009\uFF09</label>\r
        <div id="portPicker" class="row"></div>\r
        <div class="row">\r
          <div><label class="f">WS \u8DEF\u5F84</label><input id="cfg-path" data-cfg="path"></div>\r
          <div><label class="f">uTLS \u6307\u7EB9</label>\r
            <select id="cfg-fp" data-cfg="fp">\r
              <option>chrome</option><option>firefox</option><option>safari</option><option>ios</option>\r
              <option>android</option><option>edge</option><option>random</option><option>randomized</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="row">\r
          <div><label class="f">\u591A\u57DF\u540D\uFF08\u9017\u53F7\u5206\u9694\uFF0C\u7559\u7A7A\u7528\u5F53\u524D\u57DF\u540D\uFF09</label><input id="cfg-hosts" data-cfg="hosts" placeholder="a.example.com,b.example.com"></div>\r
          <div><label class="f">ALPN\uFF08\u7559\u7A7A\u81EA\u52A8\u534F\u5546\uFF09</label>\r
            <select id="cfg-alpn" data-cfg="alpn">\r
              <option value=""></option><option>h3</option><option>h2</option><option>http/1.1</option>\r
              <option>h3,h2</option><option>h2,http/1.1</option><option>h3,h2,http/1.1</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="chk"><input type="checkbox" id="chk-ech"><span>\u542F\u7528 ECH\uFF08\u52A0\u5BC6 Client Hello\uFF09</span></div>\r
        <div class="row">\r
          <div><label class="f">ECH \u57DF\u540D</label><input id="cfg-echDomain" data-cfg="echDomain"></div>\r
          <div><label class="f">ECH DoH</label><input id="cfg-echDns" data-cfg="echDns"></div>\r
        </div>\r
        <div class="chk"><input type="checkbox" id="chk-enableEarlyData"><span>\u542F\u7528 0-RTT Early Data\uFF08ed=2560\uFF09</span></div>\r
        <div class="chk"><input type="checkbox" id="chk-allowInsecure"><span>\u5141\u8BB8\u4E0D\u5B89\u5168\u8BC1\u4E66\uFF08allowInsecure\uFF09</span></div>\r
      </div>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u8BA2\u9605</h3>\r
        <div class="row">\r
          <div><label class="f">\u547D\u540D\u524D\u7F00</label><input id="cfg-namePrefix" data-cfg="namePrefix"></div>\r
          <div><label class="f">\u547D\u540D\u7B56\u7565</label>\r
            <select id="cfg-nameStrategy" data-cfg="nameStrategy">\r
              <option value="default">\u524D\u7F00-\u5E8F\u53F7</option>\r
              <option value="prefix-user-port">\u524D\u7F00-\u7528\u6237-\u7AEF\u53E3</option>\r
              <option value="type-user-port">\u534F\u8BAE-\u7528\u6237-\u7AEF\u53E3</option>\r
              <option value="user-port">\u7528\u6237-\u7AEF\u53E3</option>\r
              <option value="ip">IP\u540D-\u7AEF\u53E3</option>\r
              <option value="host-port-user">\u57DF\u540D-\u7AEF\u53E3-\u7528\u6237</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="row">\r
          <div><label class="f">\u6BCF\u7528\u6237\u6700\u5927\u8282\u70B9\u6570</label><input id="cfg-maxConfigs" data-cfg="maxConfigs" type="number"></div>\r
          <div><label class="f">\u8BA2\u9605 UA \u767D\u540D\u5355\uFF08\u542B\u6B64\u4E32\u7684 UA \u76F4\u63A5\u8FD4\u56DE\u8282\u70B9\uFF09</label><input id="cfg-subUserAgent" data-cfg="subUserAgent"></div>\r
        </div>\r
        <label class="f">\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\uFF08\u7528\u4E8E\u5916\u90E8\u8F6C\u6362\uFF09</label>\r
        <input id="cfg-subConverter" data-cfg="subConverter">\r
      </div>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u65B0\u7528\u6237\u9ED8\u8BA4\u503C</h3>\r
        <div class="row">\r
          <div><label class="f">\u9ED8\u8BA4\u603B\u6D41\u91CF\uFF08GB\uFF0C0=\u4E0D\u9650\uFF09</label><input id="cfg-limitTotalGb" data-cfg="limitTotalGb" type="number"></div>\r
          <div><label class="f">\u9ED8\u8BA4\u6BCF\u65E5\u6D41\u91CF\uFF08GB\uFF0C0=\u4E0D\u9650\uFF09</label><input id="cfg-limitDailyGb" data-cfg="limitDailyGb" type="number"></div>\r
          <div><label class="f">\u9ED8\u8BA4\u6709\u6548\u5929\u6570\uFF080=\u6C38\u4E45\uFF09</label><input id="cfg-expiryDays" data-cfg="expiryDays" type="number"></div>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">GitHub \u81EA\u52A8\u66F4\u65B0</h3>\r
        <div class="row">\r
          <div><label class="f">\u4ED3\u5E93\uFF08owner/repo\uFF09</label><input id="cfg-githubRepo" data-cfg="githubRepo" placeholder="yourname/cfsub"></div>\r
          <div><label class="f">\u90E8\u7F72\u76EE\u6807</label>\r
            <select id="cfg-deployTarget" data-cfg="deployTarget">\r
              <option value="worker">Cloudflare Worker</option>\r
              <option value="pages">Cloudflare Pages</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="chk"><input type="checkbox" id="chk-autoUpdate"><span>\u5F00\u542F\u81EA\u52A8\u66F4\u65B0\uFF08Cron \u5B9A\u65F6\u68C0\u67E5\u5E76\u90E8\u7F72\uFF09</span></div>\r
        <div class="row">\r
          <div><label class="f">Cloudflare \u8D26\u6237 ID</label><input id="cfg-cfAccountId" data-cfg="cfAccountId"></div>\r
          <div><label class="f">Cloudflare API Token</label><input id="cfg-cfApiToken" data-cfg="cfApiToken" type="password"></div>\r
        </div>\r
        <div class="row">\r
          <div><label class="f">Worker \u540D\u79F0</label><input id="cfg-cfWorkerName" data-cfg="cfWorkerName"></div>\r
          <div><label class="f">Pages \u9879\u76EE\u540D</label><input id="cfg-cfPagesProject" data-cfg="cfPagesProject"></div>\r
        </div>\r
        <div class="row">\r
          <button class="btn gh" onclick="checkUpdate()">\u68C0\u67E5\u66F4\u65B0</button>\r
          <button class="btn" onclick="doUpdate(false)">\u90E8\u7F72\u6700\u65B0\u7248</button>\r
          <button class="btn gh" onclick="doUpdate(true)">\u5F3A\u5236\u8986\u76D6\u90E8\u7F72</button>\r
        </div>\r
        <div class="hint" id="updateResult"></div>\r
      </div>\r
    </div>\r
\r
    <!-- ---------- \u9AD8\u7EA7\u8BBE\u7F6E ---------- -->\r
    <div id="v-advanced" class="view hide">\r
      <h1 class="page">\u{1F9E9} \u9AD8\u7EA7\u8BBE\u7F6E</h1>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u4F18\u9009 IP</h3>\r
        <div class="chk"><input type="checkbox" id="chk-enableOfficialIp"><span>\u542F\u7528\u5185\u7F6E\u5B98\u65B9\u76F4\u8FDE\u5730\u5740\u6C60\uFF0810 \u4E2A Cloudflare \u5B98\u65B9 IP\uFF09</span></div>\r
        <div class="chk"><input type="checkbox" id="chk-enablePreferredDomain"><span>\u542F\u7528\u5185\u7F6E\u4F18\u9009\u53CD\u4EE3\u57DF\u540D\uFF0821 \u4E2A\uFF09</span></div>\r
        <div class="chk"><input type="checkbox" id="chk-enablePreferredIp"><span>\u542F\u7528\u8FDC\u7A0B\u4F18\u9009 IP \u6E90\uFF08cmliu CF-CIDR \u8FD0\u8425\u5546\u5206\u6BB5\uFF09</span></div>\r
        <div class="chk"><input type="checkbox" id="chk-enableRemotePreferred"><span>\u5141\u8BB8\u62C9\u53D6\u8FDC\u7A0B\u4F18\u9009\u6E90</span></div>\r
        <label class="f">\u81EA\u5B9A\u4E49\u4F18\u9009 IP\uFF08\u6BCF\u884C\u4E00\u6761\uFF1AIP:\u7AEF\u53E3#\u5907\u6CE8 \u6216 IP#\u5907\u6CE8\uFF09</label>\r
        <textarea id="cfg-customPreferred" data-cfg="customPreferred" placeholder="1.1.1.1:443#\u9999\u6E2F\u8282\u70B9&#10;8.8.8.8:443#Google"></textarea>\r
        <label class="f">\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u4F18\u9009\u6E90 URL\uFF08\u9017\u53F7\u5206\u9694\uFF09</label>\r
        <input id="cfg-preferredUrls" data-cfg="preferredUrls" placeholder="https://example.com/ips.txt">\r
      </div>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u53CD\u4EE3\uFF08ProxyIP\uFF09</h3>\r
        <div class="row">\r
          <div><label class="f">\u53CD\u4EE3\u6A21\u5F0F</label>\r
            <select id="cfg-proxyIpMode" data-cfg="proxyIpMode">\r
              <option value="auto">\u81EA\u52A8\uFF08\u5B98\u65B9\u76F4\u8FDE + \u673A\u623F\u53CD\u4EE3 + \u4F18\u9009\u57DF\u540D\uFF09</option>\r
              <option value="region">\u6307\u5B9A\u5730\u533A</option>\r
              <option value="custom">\u81EA\u5B9A\u4E49</option>\r
              <option value="off">\u5173\u95ED\uFF08\u4EC5\u76F4\u8FDE\uFF09</option>\r
            </select>\r
          </div>\r
          <div><label class="f">\u6307\u5B9A\u5730\u533A</label>\r
            <select id="cfg-proxyIpRegion" data-cfg="proxyIpRegion">\r
              <option value="">\uFF08\u672A\u6307\u5B9A\uFF09</option>\r
              <option>HK</option><option>US</option><option>SG</option><option>JP</option><option>KR</option>\r
              <option>DE</option><option>SE</option><option>NL</option><option>FI</option><option>GB</option>\r
              <option>Oracle</option><option>DigitalOcean</option><option>Vultr</option><option>Multacom</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="row">\r
          <div><label class="f">\u81EA\u5B9A\u4E49 ProxyIP\uFF08\u652F\u6301 IP / \u57DF\u540D / \u5E26\u7AEF\u53E3\uFF09</label><input id="cfg-customProxyIp" data-cfg="customProxyIp" placeholder="1.2.3.4:443 \u6216 proxy.example.com:8443"></div>\r
          <div><label class="f">\u515C\u5E95\u53CD\u4EE3</label><input id="cfg-backupProxyIp" data-cfg="backupProxyIp"></div>\r
        </div>\r
        <div class="row">\r
          <div><label class="f">NAT64 \u524D\u7F00\uFF08\u7559\u7A7A\u5173\u95ED\uFF09</label><input id="cfg-nat64" data-cfg="nat64" placeholder="[2602:fc59:b0:64::]"></div>\r
          <div><label class="f">Clean IP\uFF08\u9017\u53F7\u5206\u9694\uFF09</label><input id="cfg-cleanIps" data-cfg="cleanIps"></div>\r
        </div>\r
      </div>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u51FA\u7AD9\u4EE3\u7406</h3>\r
        <label class="f">\u4EE3\u7406\u5730\u5740\uFF08socks5:// http:// https:// \uFF0C\u652F\u6301 user:pass@host:port\uFF09</label>\r
        <input id="cfg-outboundProxy" data-cfg="outboundProxy" placeholder="socks5://user:pass@1.2.3.4:1080">\r
        <label class="f">\u51FA\u7AD9\u65B9\u5F0F</label>\r
        <select id="cfg-outboundMode" data-cfg="outboundMode">\r
          <option value="auto">\u81EA\u52A8\uFF08\u5148\u76F4\u8FDE\uFF0C\u5931\u8D25\u8D70\u53CD\u4EE3/\u4EE3\u7406\uFF09</option>\r
          <option value="direct-first">\u4F18\u5148\u76F4\u8FDE\uFF0C\u5931\u8D25\u518D\u8D70\u4EE3\u7406</option>\r
          <option value="proxy-first">\u4F18\u5148\u8D70\u4EE3\u7406\uFF0C\u5931\u8D25\u518D\u76F4\u8FDE</option>\r
          <option value="proxy-only">\u53EA\u8D70\u4EE3\u7406\uFF08\u4E0D\u56DE\u843D\uFF0C\u9632\u51FA\u53E3 IP \u6CC4\u6F0F\uFF09</option>\r
        </select>\r
      </div>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">\u7F51\u7EDC</h3>\r
        <div class="row">\r
          <div><label class="f">DoH \u89E3\u6790\u670D\u52A1</label><input id="cfg-customDns" data-cfg="customDns"></div>\r
          <div><label class="f">\u89E3\u6790 IP</label><input id="cfg-resolveIp" data-cfg="resolveIp"></div>\r
        </div>\r
        <label class="f">\u4F2A\u88C5\u4E3B\u9875\uFF08\u8BBF\u95EE\u6839\u8DEF\u5F84\u65F6\u53CD\u5411\u4EE3\u7406\uFF0C\u9017\u53F7\u5206\u9694\u968F\u673A\uFF09</label>\r
        <input id="cfg-maintenanceHost" data-cfg="maintenanceHost">\r
      </div>\r
\r
      <div class="card">\r
        <h3 class="sec" style="margin-top:0">Telegram \u901A\u77E5</h3>\r
        <div class="row">\r
          <div><label class="f">Bot Token</label><input id="cfg-tgToken" data-cfg="tgToken"></div>\r
          <div><label class="f">Chat ID</label><input id="cfg-tgChatId" data-cfg="tgChatId"></div>\r
          <div><label class="f">\u7BA1\u7406\u5458 ID</label><input id="cfg-tgAdminId" data-cfg="tgAdminId"></div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- ---------- \u65E5\u5FD7 ---------- -->\r
    <div id="v-logs" class="view hide">\r
      <h1 class="page">\u{1F4DC} \u65E5\u5FD7</h1>\r
      <div class="card"><div class="row"><button class="btn gh" onclick="loadLogs()">\u5237\u65B0</button></div></div>\r
      <div class="card" id="logList"></div>\r
    </div>\r
\r
    <!-- ---------- \u5E2E\u52A9 ---------- -->\r
    <div id="v-help" class="view hide">\r
      <h1 class="page">\u2753 \u5E2E\u52A9</h1>\r
      <div class="card">\r
        <details open><summary>\u8BA2\u9605\u5730\u5740\u600E\u4E48\u7528\uFF1F</summary>\r
          <p>\u5728\u300C\u8282\u70B9\u4FE1\u606F\u300D\u9875\u590D\u5236\u5BF9\u5E94\u683C\u5F0F\u7684\u94FE\u63A5\uFF0C\u7C98\u8D34\u5230 Clash / Sing-box / v2rayN \u7B49\u5BA2\u6237\u7AEF\u7684\u300C\u4ECE URL \u5BFC\u5165\u300D\u5373\u53EF\u3002\u901A\u7528\u94FE\u63A5\u4F1A\u6839\u636E\u5BA2\u6237\u7AEF UA \u81EA\u52A8\u8FD4\u56DE\u5BF9\u5E94\u683C\u5F0F\u3002</p></details>\r
        <details><summary>\u5982\u4F55\u9650\u5236\u7528\u6237\u6D41\u91CF\uFF1F</summary>\r
          <p>\u5728\u300C\u7528\u6237\u7BA1\u7406\u300D\u91CC\u7ED9\u6BCF\u4E2A\u7528\u6237\u8BBE\u7F6E\u603B\u6D41\u91CF\u4E0A\u9650\u4E0E\u6BCF\u65E5\u4E0A\u9650\uFF08\u5355\u4F4D GB\uFF09\u3002\u8D85\u9650\u540E\u8BE5\u7528\u6237\u4F1A\u88AB\u81EA\u52A8\u62D2\u7EDD\u8FDE\u63A5\uFF0C\u53EF\u5728\u7528\u6237\u5217\u8868\u70B9\u51FB\u300C\u91CD\u7F6E\u300D\u6E05\u96F6\u3002</p></details>\r
        <details><summary>\u5185\u7F6E\u4F18\u9009 IP \u4ECE\u54EA\u91CC\u6765\uFF1F</summary>\r
          <p>\u5185\u7F6E\u8D44\u6E90\u6765\u81EA byJoey/cfnew\uFF08\u5B98\u65B9\u76F4\u8FDE\u6C60\u3001\u5730\u533A\u53CD\u4EE3\u57DF\u540D\u3001\u4F18\u9009\u57DF\u540D\u8868\uFF09\u3001cmliu/edgetunnel\uFF08\u673A\u623F\u7EA7\u53CD\u4EE3\u3001CF-CIDR \u8FD0\u8425\u5546\u5206\u6BB5\uFF09\u3001BPB\uFF08NAT64 \u524D\u7F00\uFF09\u3002\u5168\u90E8\u53EF\u5728\u300C\u9AD8\u7EA7\u8BBE\u7F6E\u300D\u4E2D\u5173\u95ED\u6216\u66FF\u6362\u4E3A\u81EA\u5DF1\u7684\u5730\u5740\u3002</p></details>\r
        <details><summary>Kill Switch \u662F\u4EC0\u4E48\uFF1F</summary>\r
          <p>\u5F00\u542F\u540E Worker \u4F1A\u62D2\u7EDD\u6240\u6709\u4EE3\u7406\u8FDE\u63A5\uFF08\u8FD4\u56DE 503\uFF09\uFF0C\u4EC5\u4FDD\u7559\u9762\u677F\u8BBF\u95EE\uFF0C\u7528\u4E8E\u7D27\u6025\u6B62\u635F\u3002</p></details>\r
        <details><summary>\u81EA\u52A8\u66F4\u65B0\u600E\u4E48\u914D\u7F6E\uFF1F</summary>\r
          <p>\u586B\u5199 GitHub \u4ED3\u5E93\uFF08\u9700\u5305\u542B version \u6587\u4EF6\u4E0E dist/_worker.js\uFF09\u3001Cloudflare \u8D26\u6237 ID\u3001API Token \u4E0E Worker \u540D\u79F0\uFF0C\u7136\u540E\u5F00\u542F\u81EA\u52A8\u66F4\u65B0\u3002Cron \u4F1A\u5B9A\u65F6\u68C0\u67E5\u5E76\u8C03\u7528 Cloudflare API \u91CD\u65B0\u90E8\u7F72\u3002</p></details>\r
        <details><summary>Pages \u90E8\u7F72\u9700\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F</summary>\r
          <p>Pages \u9700\u8981\u5728\u9879\u76EE\u8BBE\u7F6E\u7684\u300CFunctions \u2192 KV \u547D\u540D\u7A7A\u95F4\u7ED1\u5B9A\u300D\u4E2D\u6DFB\u52A0\u53D8\u91CF\u540D <code>CF_SUB_KV</code>\u3002Pages \u4E0D\u652F\u6301 Cron\uFF0C\u81EA\u52A8\u66F4\u65B0\u9700\u624B\u52A8\u70B9\u51FB\u90E8\u7F72\u3002</p></details>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="savebar" id="savebar" style="display:none">\r
  <button class="btn gh" onclick="loadAll()">\u5237\u65B0</button>\r
  <button class="btn" id="saveBtn" onclick="save()">\u4FDD\u5B58\u5168\u90E8</button>\r
</div>\r
<div class="toast" id="toast"></div>\r
\r
<!-- \u7528\u6237\u8868\u5355\u5F39\u7A97 -->\r
<div class="modal" id="userModal">\r
  <div class="box">\r
    <h3 id="userModalTitle">\u65B0\u589E\u7528\u6237</h3>\r
    <input type="hidden" id="uf-id">\r
    <label class="f">\u7528\u6237\u540D *</label><input id="uf-name" placeholder="\u4F8B\u5982 alice">\r
    <label class="f">\u5907\u6CE8</label><input id="uf-notes">\r
    <div class="row">\r
      <div><label class="f">\u603B\u6D41\u91CF\u4E0A\u9650\uFF08GB\uFF0C\u7559\u7A7A\u4E0D\u9650\uFF09</label><input id="uf-total" type="number" placeholder="0"></div>\r
      <div><label class="f">\u6BCF\u65E5\u4E0A\u9650\uFF08GB\uFF0C\u7559\u7A7A\u4E0D\u9650\uFF09</label><input id="uf-daily" type="number" placeholder="0"></div>\r
    </div>\r
    <div class="row">\r
      <div><label class="f">\u6709\u6548\u5929\u6570\uFF08\u7559\u7A7A\u6C38\u4E45\uFF09</label><input id="uf-days" type="number" placeholder="0"></div>\r
      <div><label class="f">\u5E76\u53D1\u8FDE\u63A5\u4E0A\u9650</label><input id="uf-conn" type="number" placeholder="\u7559\u7A7A\u4E0D\u9650"></div>\r
    </div>\r
    <div class="row">\r
      <div><label class="f">\u4E13\u5C5E ProxyIP</label><input id="uf-proxyIp"></div>\r
      <div><label class="f">\u4E13\u5C5E Clean IP</label><input id="uf-cleanIp"></div>\r
    </div>\r
    <div class="row">\r
      <div><label class="f">\u4E13\u5C5E\u7AEF\u53E3</label><input id="uf-ports" placeholder="443,2053"></div>\r
      <div><label class="f">\u4E13\u5C5E\u534F\u8BAE</label>\r
        <select id="uf-mode"><option value="">\uFF08\u8DDF\u968F\u5168\u5C40\uFF09</option><option value="vless">VLESS</option><option value="trojan">Trojan</option><option value="xhttp">XHTTP</option></select>\r
      </div>\r
    </div>\r
    <div class="row" style="margin-top:18px">\r
      <button class="btn" onclick="submitUserForm()">\u4FDD\u5B58</button>\r
      <button class="btn gh" onclick="closeUserForm()">\u53D6\u6D88</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script>\r
/* ==================== \u5168\u5C40\u72B6\u6001 ==================== */\r
const $ = (s) => document.querySelector(s);\r
const $$ = (s) => Array.from(document.querySelectorAll(s));\r
let CFG = null;         // \u670D\u52A1\u7AEF\u914D\u7F6E\r
let USERS = [];         // \u7528\u6237\u5217\u8868\r
let SESSION = null;     // { key, expiry }\r
let DIRTY = false;\r
\r
const PORTS = [443,2053,2083,2087,2096,8443,80,8080,8880,2052,2082,2086,2095];\r
\r
/* ==================== \u5DE5\u5177 ==================== */\r
function toast(msg, kind){\r
  const el = document.createElement('div');\r
  el.className = kind || '';\r
  el.textContent = msg;\r
  $('#toast').appendChild(el);\r
  setTimeout(()=>el.remove(), 3200);\r
}\r
function fmtBytes(n){\r
  n = Number(n)||0;\r
  if(n<1024) return n+' B';\r
  if(n<1048576) return (n/1024).toFixed(2)+' KB';\r
  if(n<1073741824) return (n/1048576).toFixed(2)+' MB';\r
  return (n/1073741824).toFixed(2)+' GB';\r
}\r
function base(){ return location.origin + '/' + (CFG?.apiRoute || 'sub'); }\r
function route(){ return CFG?.apiRoute || 'sub'; }\r
\r
async function api(name, body, method){\r
  const url = base() + '/api/' + name;\r
  const opt = { method: method || (body ? 'POST' : 'GET') };\r
  if(body){ opt.headers = {'content-type':'application/json'}; opt.body = JSON.stringify(Object.assign({key: SESSION.key}, body)); }\r
  else { opt.headers = {'authorization':'Bearer ' + SESSION.key}; }\r
  const r = await fetch(url, opt);\r
  return await r.json();\r
}\r
\r
/* ==================== \u767B\u5F55 ==================== */\r
async function doLogin(silent){\r
  const key = SESSION?.key || $('#pwd').value.trim();\r
  if(!key){ $('#loginErr').textContent = '\u8BF7\u8F93\u5165\u5BC6\u94A5'; return; }\r
  try{\r
    const r = await fetch(base()+'/api/auth', {\r
      method:'POST', headers:{'content-type':'application/json'},\r
      body: JSON.stringify({key})\r
    });\r
    const j = await r.json();\r
    if(!j.success){\r
      if(!silent) $('#loginErr').textContent = '\u5BC6\u94A5\u9519\u8BEF';\r
      SESSION = null; localStorage.removeItem('cfsub_session');\r
      return;\r
    }\r
    CFG = j.config;\r
    window.__locked = j.locked || [];\r
    window.__authNetwork = j.network || {};\r
    SESSION = { key, expiry: Date.now()+30*60*1000 };\r
    localStorage.setItem('cfsub_session', JSON.stringify(SESSION));\r
    $('#login').style.display='none';\r
    $('#app').style.display='block';\r
    $('#savebar').style.display='flex';\r
    $('#ver').textContent = 'v' + (j.version||'');\r
    fillForm();\r
    await loadAll();\r
  }catch(e){\r
    if(!silent) $('#loginErr').textContent = '\u8FDE\u63A5\u5931\u8D25\uFF1A'+e.message;\r
  }\r
}\r
\r
function tryRestore(){\r
  const s = localStorage.getItem('cfsub_session');\r
  if(!s) return false;\r
  try{\r
    const j = JSON.parse(s);\r
    if(j.expiry && j.expiry < Date.now()){ localStorage.removeItem('cfsub_session'); return false; }\r
    SESSION = j; return true;\r
  }catch{ return false; }\r
}\r
\r
/* ==================== \u6570\u636E\u52A0\u8F7D ==================== */\r
async function loadAll(){\r
  await Promise.all([loadStats(), loadUsers(), loadLogs(), loadNet()]);\r
  renderOverview(); renderProfiles(); renderUsers(); checkUpdate();\r
}\r
\r
async function loadStats(){\r
  try{ const j = await api('stats'); if(j.success) window.__stats = j.stats; }catch(e){}\r
}\r
async function loadUsers(){\r
  try{ const j = await api('users'); if(j.success) USERS = j.users || []; }catch(e){}\r
}\r
async function loadLogs(){\r
  try{ const j = await api('logs',{}); if(j.success) window.__logs = j.logs || []; renderLogs(); }catch(e){}\r
}\r
async function loadNet(){\r
  // \u7F51\u7EDC\u4FE1\u606F\u6765\u81EA\u767B\u5F55\u63A5\u53E3\u8FD4\u56DE\u7684 request.cf\uFF0C\u907F\u514D\u6D4F\u89C8\u5668\u8DE8\u57DF\u8BF7\u6C42\u88AB\u62E6\u622A\r
  window.__net = window.__authNetwork || { ip:'-', colo:'-' };\r
  renderNet();\r
}\r
\r
/* ==================== \u8868\u5355\u586B\u5145 / \u6536\u96C6 ==================== */\r
function fillForm(){\r
  $$('[data-cfg]').forEach(el=>{\r
    const k = el.dataset.cfg;\r
    let v = CFG[k];\r
    if(el.type==='checkbox'){ el.checked = !!v; }\r
    else el.value = (v===undefined||v===null) ? '' : v;\r
  });\r
  // \u5E03\u5C14\u590D\u9009\u6846\uFF08id \u524D\u7F00 chk-\uFF09\r
  [['isPaused','#chk-isPaused'],['ech','#chk-ech'],['enableEarlyData','#chk-enableEarlyData'],\r
   ['allowInsecure','#chk-allowInsecure'],['autoUpdate','#chk-autoUpdate'],\r
   ['enableOfficialIp','#chk-enableOfficialIp'],['enablePreferredDomain','#chk-enablePreferredDomain'],\r
   ['enablePreferredIp','#chk-enablePreferredIp'],['enableRemotePreferred','#chk-enableRemotePreferred']\r
  ].forEach(([k,sel])=>{ const el=$(sel); if(el) el.checked = !!CFG[k]; });\r
  renderPortPicker();\r
  markClean();\r
}\r
\r
function collectForm(){\r
  const out = Object.assign({}, CFG);\r
  $$('[data-cfg]').forEach(el=>{\r
    const k = el.dataset.cfg;\r
    if(el.type==='checkbox') out[k] = el.checked;\r
    else if(el.type==='number') out[k] = el.value==='' ? 0 : Number(el.value);\r
    else out[k] = el.value;\r
  });\r
  [['isPaused','#chk-isPaused'],['ech','#chk-ech'],['enableEarlyData','#chk-enableEarlyData'],\r
   ['allowInsecure','#chk-allowInsecure'],['autoUpdate','#chk-autoUpdate'],\r
   ['enableOfficialIp','#chk-enableOfficialIp'],['enablePreferredDomain','#chk-enablePreferredDomain'],\r
   ['enablePreferredIp','#chk-enablePreferredIp'],['enableRemotePreferred','#chk-enableRemotePreferred']\r
  ].forEach(([k,sel])=>{ const el=$(sel); if(el) out[k] = el.checked; });\r
  if(out.ports === undefined || !String(out.ports).length) out.ports = '443';\r
  delete out.logs;\r
  return out;\r
}\r
\r
function renderPortPicker(){\r
  const box = $('#portPicker'); if(!box) return;\r
  const cur = String(CFG.ports||'443').split(',').map(s=>s.trim()).filter(Boolean);\r
  box.innerHTML = PORTS.map(p=>\r
    '<label class="chk" style="flex:0 0 auto;min-width:0"><input type="checkbox" class="portcb" value="'+p+'"'+(cur.includes(String(p))?' checked':'')+' onchange="markDirty()"><span>'+p+'</span></label>'\r
  ).join('');\r
}\r
function readPorts(){\r
  return $$('.portcb').filter(e=>e.checked).map(e=>e.value).join(',');\r
}\r
\r
function markDirty(){\r
  DIRTY = true;\r
  $('#saveBtn').classList.add('dirty');\r
  $('#saveBtn').textContent = '\u4FDD\u5B58\u5168\u90E8 \u25CF';\r
}\r
function markClean(){\r
  DIRTY = false;\r
  $('#saveBtn').classList.remove('dirty');\r
  $('#saveBtn').textContent = '\u4FDD\u5B58\u5168\u90E8';\r
}\r
\r
async function save(){\r
  const cfg = collectForm();\r
  cfg.ports = readPorts();\r
  try{\r
    const j = await api('sync', {config: cfg});\r
    if(j.success){\r
      CFG = Object.assign(CFG, cfg);\r
      if(j.newRoute && j.newRoute !== route()){\r
        toast('\u9762\u677F\u8DEF\u5F84\u5DF2\u6539\u4E3A /'+j.newRoute+'\uFF0C\u5373\u5C06\u8DF3\u8F6C', 'ok');\r
        setTimeout(()=>{ location.href = location.origin + '/' + j.newRoute + '/dash'; }, 1500);\r
        return;\r
      }\r
      markClean();\r
      toast('\u914D\u7F6E\u5DF2\u4FDD\u5B58', 'ok');\r
      await loadAll();\r
    } else toast(j.message || '\u4FDD\u5B58\u5931\u8D25', 'err');\r
  }catch(e){ toast('\u4FDD\u5B58\u5931\u8D25\uFF1A'+e.message, 'err'); }\r
}\r
\r
function regenUuid(){\r
  if(!confirm('\u91CD\u65B0\u751F\u6210 UUID \u540E\uFF0C\u6240\u6709\u5DF2\u5BFC\u5165\u7684\u65E7\u8282\u70B9\u90FD\u4F1A\u5931\u6548\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F')) return;\r
  const a = new Uint8Array(16);\r
  crypto.getRandomValues(a);\r
  a[6] = (a[6] & 0x0f) | 0x40;\r
  a[8] = (a[8] & 0x3f) | 0x80;\r
  const h = Array.from(a).map(b=>b.toString(16).padStart(2,'0')).join('');\r
  $('#cfg-uuid').value = h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20);\r
  markDirty();\r
  toast('\u5DF2\u751F\u6210\u65B0 UUID\uFF0C\u8BB0\u5F97\u70B9\u300C\u4FDD\u5B58\u5168\u90E8\u300D','ok');\r
}\r
\r
async function changeMasterKey(){\r
  const v = $('#newMasterKey').value.trim();\r
  if(!v){ toast('\u8BF7\u8F93\u5165\u65B0\u5BC6\u94A5', 'err'); return; }\r
  const cfg = collectForm(); cfg.ports = readPorts(); cfg.masterKey = v;\r
  const j = await api('sync', {config: cfg});\r
  if(j.success){\r
    CFG.masterKey = v; SESSION.key = v;\r
    localStorage.setItem('cfsub_session', JSON.stringify(SESSION));\r
    $('#newMasterKey').value = '';\r
    toast('\u4E3B\u5BC6\u94A5\u5DF2\u66F4\u65B0', 'ok');\r
  } else toast(j.message||'\u5931\u8D25','err');\r
}\r
\r
/* ==================== \u6E32\u67D3 ==================== */\r
function tab(name){\r
  $$('.nav button').forEach(b=>b.classList.toggle('on', b.dataset.tab===name));\r
  $$('.view').forEach(v=>v.classList.add('hide'));\r
  const el = $('#v-'+name); if(el) el.classList.remove('hide');\r
  if(name==='users') renderUsers();\r
  if(name==='logs') renderLogs();\r
}\r
\r
function renderOverview(){\r
  const locked = window.__locked || [];\r
  $('#lockedBanner').innerHTML = locked.length\r
    ? '<div class="banner">\u{1F512} \u4EE5\u4E0B\u914D\u7F6E\u7531 <b>\u73AF\u5883\u53D8\u91CF</b> \u9501\u5B9A\uFF0C\u9762\u677F\u4E2D\u4FEE\u6539\u4E0D\u4F1A\u751F\u6548\uFF08\u4F18\u5148\u7EA7\uFF1A\u73AF\u5883\u53D8\u91CF &gt; \u9762\u677F\u914D\u7F6E\uFF09\uFF1A'\r
      + locked.map(k=>'<span class="tag mut">'+k+'</span>').join(' ') + '</div>'\r
    : '';\r
  const s = window.__stats || {users:{total:0,active:0,paused:0,expired:0,disabled:0},traffic:{totalText:'0 B',dailyText:'0 B'},system:{}};\r
  $('#statCards').innerHTML = [\r
    ['\u7528\u6237\u603B\u6570', s.users.total], ['\u6D3B\u8DC3', s.users.active], ['\u6682\u505C', s.users.paused],\r
    ['\u8D85\u9650/\u8FC7\u671F', (s.users.disabled||0)+(s.users.expired||0)],\r
    ['\u603B\u6D41\u91CF', s.traffic.totalText], ['\u4ECA\u65E5\u6D41\u91CF', s.traffic.dailyText],\r
    ['\u8FD0\u884C\u6A21\u5F0F', (CFG.mode||'vless').toUpperCase()], ['\u8282\u70B9\u7AEF\u53E3', CFG.ports||'443']\r
  ].map(([k,v])=>'<div class="stat"><div class="k">'+k+'</div><div class="v">'+v+'</div></div>').join('');\r
\r
  const sys = s.system||{};\r
  $('#sysInfo').innerHTML =\r
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;font-size:13px">'+\r
    row('\u7248\u672C', sys.version||'-') + row('KV \u7ED1\u5B9A', sys.hasKV ? '\u2705 \u6B63\u5E38' : '\u274C \u7F3A\u5931') +\r
    row('Kill Switch', CFG.isPaused ? '\u{1F6D1} \u5DF2\u5F00\u542F' : '\u5173\u95ED') +\r
    row('\u534F\u8BAE', (CFG.mode||'vless')) + row('UUID', (CFG.uuid||'-').slice(0,8)+'\u2026') +\r
    row('\u9762\u677F\u8DEF\u5F84', '/'+route()+'/dash') + row('\u53CD\u4EE3\u6A21\u5F0F', CFG.proxyIpMode||'auto') +\r
    row('\u51FA\u7AD9\u65B9\u5F0F', CFG.outboundMode||'auto') +\r
    '</div>';\r
\r
  const logs = (window.__logs||[]).slice(0,8);\r
  $('#recentLogs').innerHTML = logs.length ? logs.map(l=>logLine(l)).join('') : '<div class="hint">\u6682\u65E0\u65E5\u5FD7</div>';\r
}\r
function row(k,v){ return '<div><span style="color:var(--mut)">'+k+'\uFF1A</span>'+v+'</div>'; }\r
function logLine(l){\r
  return '<div class="logline"><span class="t">'+l.ts.replace('T',' ').slice(0,19)+'</span><span>'+l.type+'</span><span style="color:var(--mut)">'+l.detail+'</span></div>';\r
}\r
\r
function renderProfiles(){\r
  const list = [{id:'default', name: CFG.name||'\u9ED8\u8BA4'}].concat((CFG.users||[]).filter(u=>u.status!=='paused'));\r
  $('#profiles').innerHTML = list.map(p=>{\r
    const q = '?sub=' + encodeURIComponent(p.name);\r
    const links = [\r
      ['\u901A\u7528\uFF08\u81EA\u52A8\u8BC6\u522B\uFF09', base()+q],\r
      ['Clash / Mihomo', base()+q+'&flag=clash'],\r
      ['Sing-box', base()+q+'&flag=singbox'],\r
      ['v2rayN JSON', base()+q+'&flag=v2ray'],\r
      ['Base64 \u660E\u6587', base()+q+'&flag=base64']\r
    ];\r
    return '<div class="card"><h3 class="sec" style="margin-top:0">\u{1F464} '+p.name+'</h3>'+\r
      links.map(([t,u])=>'<div class="linkbox"><input readonly value="'+u+'"><button class="btn gh sm" onclick="copyUrl(this.previousElementSibling)">\u590D\u5236</button><button class="btn gh sm" onclick="showQr(\\''+u+'\\')">\u4E8C\u7EF4\u7801</button></div>').join('')+\r
      '<div class="row" style="margin-top:10px"><button class="btn gh sm" onclick="openClient(\\'clash\\',\\''+base()+q+'&flag=clash\\')">\u5BFC\u5165 Clash</button>'+\r
      '<button class="btn gh sm" onclick="openClient(\\'sing-box\\',\\''+base()+q+'&flag=singbox\\')">\u5BFC\u5165 Sing-box</button></div></div>';\r
  }).join('');\r
}\r
\r
function showQr(u){\r
  const w = window.open('', '_blank', 'width=320,height=380');\r
  w.document.write('<body style="background:#0b1120;color:#fff;font-family:sans-serif;display:flex;flex-direction:column;align-items:center;padding:20px">'+\r
    '<h3 style="font-size:15px">\u626B\u63CF\u5BFC\u5165</h3><img style="width:240px;height:240px;background:#fff;padding:8px;border-radius:12px" src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data='+encodeURIComponent(u)+'">'+\r
    '<p style="font-size:11px;word-break:break-all;max-width:280px;color:#94a3b8">'+u+'</p></body>');\r
}\r
function copyUrl(el){ el.select(); if(navigator.clipboard) navigator.clipboard.writeText(el.value); toast('\u5DF2\u590D\u5236','ok'); }\r
function openClient(kind, url){ location.href = kind + '://install-config?url=' + encodeURIComponent(url); }\r
\r
function renderUsers(){\r
  const q = ($('#userSearch')?.value||'').toLowerCase();\r
  const list = USERS.filter(u=>!q || (u.name+' '+u.id+' '+(u.notes||'')).toLowerCase().includes(q));\r
  const st = {total:USERS.length, active:0, paused:0, expired:0, disabled:0};\r
  USERS.forEach(u=>{ st[u.status] = (st[u.status]||0)+1; });\r
  $('#userStat').innerHTML = [\r
    ['\u7528\u6237\u603B\u6570', st.total], ['\u6D3B\u8DC3', st.active||0], ['\u6682\u505C', st.paused||0], ['\u8D85\u9650/\u8FC7\u671F', (st.disabled||0)+(st.expired||0)]\r
  ].map(([k,v])=>'<div class="stat"><div class="k">'+k+'</div><div class="v">'+v+'</div></div>').join('');\r
\r
  $('#userTable').innerHTML = list.length ? list.map(u=>{\r
    const uu = u.usage||{};\r
    const tag = u.status==='active' ? '<span class="tag ok">\u6B63\u5E38</span>'\r
      : u.status==='paused' ? '<span class="tag mut">\u6682\u505C</span>'\r
      : u.status==='expired' ? '<span class="tag warn">\u8FC7\u671F</span>' : '<span class="tag err">\u8D85\u9650</span>';\r
    return '<tr>'+\r
      '<td><b>'+u.name+'</b><div class="hint mono">'+u.id.slice(0,8)+' \xB7 '+(u.uuid||'').slice(0,8)+'\u2026</div></td>'+\r
      '<td>'+tag+'</td>'+\r
      '<td>'+(uu.totalText||'0 B')+' / '+(uu.limitText||'\u4E0D\u9650')+'<div class="bar"><i style="width:'+(uu.progress||0)+'%"></i></div></td>'+\r
      '<td>'+(uu.dailyText||'0 B')+'</td>'+\r
      '<td>'+(u.expiryMs ? new Date(u.expiryMs).toLocaleDateString('zh-CN') : '\u6C38\u4E45')+'</td>'+\r
      '<td>'+(u.connLimit||'\u4E0D\u9650')+'</td>'+\r
      '<td><button class="btn gh sm" onclick="copySub(\\''+u.name+'\\')">\u94FE\u63A5</button> '+\r
      '<button class="btn gh sm" onclick="editUser(\\''+u.id+'\\')">\u7F16\u8F91</button> '+\r
      '<button class="btn gh sm" onclick="toggleUser(\\''+u.id+'\\')">'+(u.status==='active'?'\u6682\u505C':'\u542F\u7528')+'</button> '+\r
      '<button class="btn gh sm" onclick="resetUser(\\''+u.id+'\\')">\u91CD\u7F6E</button> '+\r
      '<button class="btn dg sm" onclick="delUser(\\''+u.id+'\\')">\u5220\u9664</button></td></tr>';\r
  }).join('') : '<tr><td colspan="7" style="text-align:center;color:var(--mut);padding:24px">\u6682\u65E0\u7528\u6237\uFF0C\u70B9\u51FB\u300C\u65B0\u589E\u7528\u6237\u300D\u521B\u5EFA</td></tr>';\r
}\r
\r
function renderLogs(){\r
  const logs = window.__logs||[];\r
  $('#logList').innerHTML = logs.length ? logs.map(logLine).join('') : '<div class="hint">\u6682\u65E0\u65E5\u5FD7</div>';\r
}\r
\r
function renderNet(){\r
  const n = window.__net||{};\r
  $('#netInfo').innerHTML = '<div style="display:grid;gap:6px;font-size:13px">'+\r
    row('\u51FA\u53E3 IP', n.ip||'-') + row('CF \u673A\u623F', n.colo||'-') +\r
    row('\u5730\u533A', n.loc||'-') +\r
    row('\u53CD\u4EE3\u6A21\u5F0F', CFG.proxyIpMode||'auto') + row('\u51FA\u7AD9\u65B9\u5F0F', CFG.outboundMode||'auto') +\r
    row('\u81EA\u5B9A\u4E49\u53CD\u4EE3', CFG.customProxyIp||'\uFF08\u672A\u8BBE\u7F6E\uFF09') +\r
    row('\u65F6\u95F4', new Date().toLocaleString('zh-CN')) + '</div>';\r
}\r
\r
/* ==================== \u7528\u6237\u64CD\u4F5C ==================== */\r
function openUserForm(){ $('#uf-id').value=''; $('#userModalTitle').textContent='\u65B0\u589E\u7528\u6237';\r
  ['#uf-name','#uf-notes','#uf-total','#uf-daily','#uf-days','#uf-conn','#uf-proxyIp','#uf-cleanIp','#uf-ports'].forEach(s=>$(s).value='');\r
  $('#uf-mode').value=''; $('#userModal').classList.add('on'); }\r
function closeUserForm(){ $('#userModal').classList.remove('on'); }\r
\r
function editUser(id){\r
  const u = USERS.find(x=>x.id===id); if(!u) return;\r
  $('#uf-id').value = u.id; $('#userModalTitle').textContent='\u7F16\u8F91\u7528\u6237 \xB7 '+u.name;\r
  $('#uf-name').value = u.name||''; $('#uf-notes').value = u.notes||'';\r
  $('#uf-total').value = u.limitTotalGb||''; $('#uf-daily').value = u.limitDailyGb||'';\r
  $('#uf-days').value = u.expiryMs ? Math.max(1, Math.round((u.expiryMs-Date.now())/86400000)) : '';\r
  $('#uf-conn').value = u.connLimit||''; $('#uf-proxyIp').value = u.proxyIp||'';\r
  $('#uf-cleanIp').value = u.cleanIp||''; $('#uf-ports').value = u.ports||''; $('#uf-mode').value = u.mode||'';\r
  $('#userModal').classList.add('on');\r
}\r
\r
async function submitUserForm(){\r
  const id = $('#uf-id').value;\r
  const body = {\r
    name: $('#uf-name').value.trim(),\r
    notes: $('#uf-notes').value,\r
    limitTotalGb: $('#uf-total').value || 0,\r
    limitDailyGb: $('#uf-daily').value || 0,\r
    expiryDays: $('#uf-days').value || 0,\r
    connLimit: $('#uf-conn').value || 0,\r
    maxConfigs: 0,\r
    proxyIp: $('#uf-proxyIp').value,\r
    cleanIp: $('#uf-cleanIp').value,\r
    ports: $('#uf-ports').value,\r
    mode: $('#uf-mode').value\r
  };\r
  if(!body.name){ toast('\u8BF7\u586B\u5199\u7528\u6237\u540D','err'); return; }\r
  try{\r
    let j;\r
    if(id) j = await api('users?id='+id, body, 'PUT');\r
    else j = await api('users', body, 'POST');\r
    if(j.success){ toast(id?'\u5DF2\u66F4\u65B0':'\u5DF2\u521B\u5EFA','ok'); closeUserForm(); await loadUsers(); renderUsers(); }\r
    else toast(j.message||'\u64CD\u4F5C\u5931\u8D25','err');\r
  }catch(e){ toast('\u64CD\u4F5C\u5931\u8D25\uFF1A'+e.message,'err'); }\r
}\r
\r
async function toggleUser(id){\r
  const j = await api('users?id='+id+'&action=toggle', {}, 'POST');\r
  if(j.success){ toast('\u5DF2\u5207\u6362\u72B6\u6001','ok'); await loadUsers(); renderUsers(); }\r
}\r
async function resetUser(id){\r
  if(!confirm('\u786E\u5B9A\u6E05\u96F6\u8BE5\u7528\u6237\u6D41\u91CF\u7EDF\u8BA1\uFF1F')) return;\r
  const j = await api('users?id='+id+'&action=reset', {}, 'POST');\r
  if(j.success){ toast('\u5DF2\u91CD\u7F6E','ok'); await loadUsers(); renderUsers(); }\r
}\r
async function delUser(id){\r
  if(!confirm('\u786E\u5B9A\u5220\u9664\u8BE5\u7528\u6237\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D')) return;\r
  const j = await api('users?id='+id, null, 'DELETE');\r
  if(j.success){ toast('\u5DF2\u5220\u9664','ok'); await loadUsers(); renderUsers(); }\r
}\r
function copySub(name){\r
  const u = location.origin + '/' + route() + '?sub=' + encodeURIComponent(name);\r
  if(navigator.clipboard) navigator.clipboard.writeText(u);\r
  toast('\u8BA2\u9605\u94FE\u63A5\u5DF2\u590D\u5236','ok');\r
}\r
\r
/* ==================== \u7F51\u7EDC\u5DE5\u5177 ==================== */\r
async function runPing(){\r
  const t = $('#pingTarget').value.trim();\r
  if(!t){ toast('\u8BF7\u8F93\u5165\u76EE\u6807','err'); return; }\r
  $('#pingResult').textContent = '\u6D4B\u8BD5\u4E2D\u2026';\r
  const j = await api('tools', {op:'ping', target:t});\r
  $('#pingResult').textContent = j.success ? ('\u5EF6\u8FDF '+j.ms+' ms'+(j.colo?(' \xB7 \u673A\u623F '+j.colo):'')) : '\u6D4B\u8BD5\u5931\u8D25';\r
}\r
async function smartClean(){\r
  $('#cleanResult').textContent = '\u89E3\u6790\u4E2D\u2026';\r
  const j = await api('tools', {op:'smart-clean-ip'});\r
  if(j.success && j.ips){\r
    $('#cfg-cleanIps').value = j.ips;\r
    markDirty();\r
    $('#cleanResult').textContent = '\u5DF2\u89E3\u6790 '+j.ips.split(',').length+' \u4E2A IP\uFF0C\u8BB0\u5F97\u70B9\u300C\u4FDD\u5B58\u5168\u90E8\u300D';\r
  } else $('#cleanResult').textContent = '\u89E3\u6790\u5931\u8D25';\r
}\r
async function previewPreferred(){\r
  $('#cleanResult').textContent = '\u83B7\u53D6\u4E2D\u2026';\r
  const j = await api('tools', {op:'preview-preferred'});\r
  if(j.success){\r
    $('#cleanResult').textContent = (j.list||[]).slice(0,20).map(x=>x.ip+':'+x.port+(x.name?(' ('+x.name+')'):'')).join('  ');\r
  } else $('#cleanResult').textContent = '\u83B7\u53D6\u5931\u8D25';\r
}\r
\r
/* ==================== \u66F4\u65B0 ==================== */\r
async function checkUpdate(){\r
  if(!CFG.githubRepo){ $('#updateBanner').innerHTML=''; return; }\r
  try{\r
    const j = await api('update', {action:'check'});\r
    if(!j.success) return;\r
    window.__upd = j;\r
    if(j.updateAvailable){\r
      $('#updateBanner').innerHTML = '<div class="banner">\u{1F389} \u53D1\u73B0\u65B0\u7248\u672C <b>'+j.latest+'</b>\uFF08\u5F53\u524D '+j.current+'\uFF09'+\r
        (j.canDeploy ? '<button class="btn sm" onclick="doUpdate(false)">\u7ACB\u5373\u66F4\u65B0</button>' : '<span class="hint">\u8BF7\u5148\u5728\u4E0B\u65B9\u586B\u5199 Cloudflare \u51ED\u636E</span>')+'</div>';\r
    } else $('#updateBanner').innerHTML = '';\r
    $('#updateResult').textContent = '\u5F53\u524D '+j.current+' \xB7 \u6700\u65B0 '+j.latest+(j.canDeploy?' \xB7 \u51ED\u636E\u5DF2\u914D\u7F6E':' \xB7 \u51ED\u636E\u672A\u914D\u7F6E');\r
  }catch(e){}\r
}\r
async function doUpdate(force){\r
  if(force && !confirm('\u5F3A\u5236\u8986\u76D6\u90E8\u7F72\u4F1A\u7528 GitHub \u4E0A\u7684\u4EE3\u7801\u66FF\u6362\u5F53\u524D Worker\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F')) return;\r
  $('#updateResult').textContent = '\u90E8\u7F72\u4E2D\u2026';\r
  const j = await api('update', {action:'deploy', force: !!force});\r
  if(j.success){ toast('\u5DF2\u90E8\u7F72\uFF1A'+j.message,'ok'); $('#updateResult').textContent = j.message; }\r
  else { toast(j.message||'\u90E8\u7F72\u5931\u8D25','err'); $('#updateResult').textContent = j.message||'\u90E8\u7F72\u5931\u8D25'; }\r
}\r
\r
/* ==================== \u4E8B\u4EF6\u7ED1\u5B9A ==================== */\r
document.addEventListener('DOMContentLoaded', ()=>{\r
  if(tryRestore()) doLogin(true);\r
  document.addEventListener('keydown', (e)=>{\r
    if((e.ctrlKey||e.metaKey) && e.key==='s'){ e.preventDefault(); if(CFG) save(); }\r
    if(e.key==='Enter' && $('#login').style.display!=='none') doLogin();\r
  });\r
  document.addEventListener('input', (e)=>{\r
    if(e.target.dataset && e.target.dataset.cfg) markDirty();\r
    if(e.target.id && e.target.id.startsWith('chk-')) markDirty();\r
  });\r
  document.addEventListener('change', (e)=>{\r
    if(e.target.dataset && e.target.dataset.cfg) markDirty();\r
    if(e.target.id && e.target.id.startsWith('chk-')) markDirty();\r
  });\r
});\r
<\/script>\r
</body>\r
</html>\r
`;var He=`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>CFSub \u8BA2\u9605 - __USER_NAME__</title>
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
  <h1>\u{1F4E1} __USER_NAME__ \u7684\u8BA2\u9605</h1>
  <div class="sub">ID\uFF1A<code>__USER_ID__</code> \xB7 \u72B6\u6001\uFF1A<span class="badge">__STATUS__</span></div>

  <div class="grid">
    <div class="card">
      <div class="row"><span>\u603B\u6D41\u91CF</span><span>__TOTAL_USED__ / __TOTAL_LIMIT__</span></div>
      <div class="bar"><i style="width:__TOTAL_PROGRESS__%"></i></div>
      <div class="row" style="margin-top:12px"><span>\u4ECA\u65E5\u6D41\u91CF</span><span>__DAILY_USED__ / __DAILY_LIMIT__</span></div>
      <div class="bar"><i style="width:__DAILY_PROGRESS__%"></i></div>
    </div>
    <div class="card">
      <div class="row"><span>\u5230\u671F\u65F6\u95F4</span><span>__EXPIRY__</span></div>
      <div class="row"><span>\u8BA2\u9605\u5730\u5740</span><span style="color:var(--mut)">\u8BF7\u9009\u62E9\u4E0B\u65B9\u683C\u5F0F</span></div>
    </div>
  </div>

  <div class="card">
    <label>\u901A\u7528\u8BA2\u9605\u94FE\u63A5\uFF08\u81EA\u52A8\u8BC6\u522B\u5BA2\u6237\u7AEF\uFF09</label>
    <input id="l-raw" value="__SYNC_RAW__" readonly>
    <div class="btns"><button onclick="cp('l-raw')">\u590D\u5236</button></div>
  </div>

  <div class="card">
    <label>Clash / Mihomo / Stash</label>
    <input id="l-clash" value="__SYNC_CLASH__" readonly>
    <div class="btns"><button onclick="cp('l-clash')">\u590D\u5236</button><button class="ghost" onclick="imp('clash','l-clash')">\u5BFC\u5165 Clash</button></div>
  </div>

  <div class="card">
    <label>Sing-box</label>
    <input id="l-sb" value="__SYNC_SINGBOX__" readonly>
    <div class="btns"><button onclick="cp('l-sb')">\u590D\u5236</button><button class="ghost" onclick="imp('sing-box','l-sb')">\u5BFC\u5165 Sing-box</button></div>
  </div>

  <div class="card">
    <label>v2rayN / v2rayNG\uFF08JSON\uFF09</label>
    <input id="l-v2" value="__SYNC_V2RAY__" readonly>
    <div class="btns"><button onclick="cp('l-v2')">\u590D\u5236</button></div>
  </div>

  <div class="card">
    <label>Base64 \u660E\u6587\u8282\u70B9</label>
    <input id="l-b64" value="__SYNC_BASE64__" readonly>
    <div class="btns"><button onclick="cp('l-b64')">\u590D\u5236</button></div>
  </div>
</div>
<script>
function cp(id){const el=document.getElementById(id);el.select();navigator.clipboard&&navigator.clipboard.writeText(el.value);}
function imp(kind,id){const v=document.getElementById(id).value;location.href=kind+'://install-config?url='+encodeURIComponent(v);}
<\/script>
</body>
</html>`;C();var Gn=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<title>\u7F3A\u5C11 KV \u7ED1\u5B9A</title><style>body{font-family:system-ui;background:#0f172a;color:#e2e8f0;display:flex;align-items:center;justify-content:center;height:100vh;margin:0}
.box{max-width:520px;padding:32px;background:#1e293b;border-radius:16px;line-height:1.8}
code{background:#0f172a;padding:2px 6px;border-radius:4px}</style></head><body><div class="box">
<h2>\u26A0\uFE0F \u672A\u68C0\u6D4B\u5230 KV \u547D\u540D\u7A7A\u95F4\u7ED1\u5B9A</h2>
<p>\u8BF7\u5728 Cloudflare \u63A7\u5236\u53F0\u521B\u5EFA\u4E00\u4E2A KV \u547D\u540D\u7A7A\u95F4\uFF0C\u5E76\u5728 Worker / Pages \u7684\u8BBE\u7F6E\u91CC\u7ED1\u5B9A\u53D8\u91CF\u540D\uFF1A</p>
<p><code>CF_SUB_KV</code></p>
<p>\u7ED1\u5B9A\u540E\u91CD\u65B0\u90E8\u7F72\u5373\u53EF\u6B63\u5E38\u4F7F\u7528\u3002</p></div></body></html>`,er={async fetch(t,e,n){try{if((t.headers.get("upgrade")||"").toLowerCase()==="websocket")return await ye(t,e,n);let s=new URL(t.url);if(!mt(e))return W(Gn,500);let r=await _(e);await v(e),r.uuid||(r.uuid=await dt(`${r.masterKey}:${s.hostname}`),r.createdAt=Date.now(),await M(e,r));let o=String(r.apiRoute||"sub").replace(/^\/|\/$/g,""),a=s.pathname.split("/").filter(Boolean);if(t.method==="POST"&&Bn(t,s))return await we(t,e,n);if(t.method==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET,POST,PUT,DELETE,OPTIONS","access-control-allow-headers":"*"}});if(a[0]===o){let c=a[1]||"";return c==="dash"?W(je.replace(/__CURRENT_VERSION__/g,R).replace(/__API_ROUTE__/g,o)):c==="api"?await Fn(t,s,e,n,r,a[2]||""):await jn(t,s,e,n,r)}return await Yn(t,r)}catch(s){return console.error("fetch error",s),Ct("Internal Error",500)}},async scheduled(t,e,n){try{let s=await _(e);if(!s.autoUpdate||!s.githubRepo||!s.cfAccountId||!s.cfApiToken)return;let r=String(s.githubRepo).replace(/^https?:\/\/github\.com\//,"").replace(/\/$/,""),o=await I(`https://raw.githubusercontent.com/${r}/main/version`,{},8e3),a=o&&o.ok?(await o.text()).trim():"";if(!a||it(R,a)>=0)return;let c=await I(`https://raw.githubusercontent.com/${r}/main/dist/_worker.js`,{},15e3);if(!c||!c.ok)return;let i=await c.text(),{deployToCloudflare:u}=await Promise.resolve().then(()=>(Ft(),Fe)),l=await u(s,i);await T(e,l.ok?"Auto-Update Success":"Auto-Update Failed",l.message||a)}catch(s){console.error("scheduled error",s)}}};function Bn(t,e){if((t.headers.get("content-type")||"").toLowerCase().includes("application/grpc")||e.searchParams.has("xhttp"))return!0;let s=e.pathname.split("/").filter(Boolean).pop()||"";return/^[0-9a-f]{8}$/i.test(s)}async function Fn(t,e,n,s,r,o){let a=null;if(t.method!=="GET"&&t.method!=="HEAD"){let c=(t.headers.get("content-type")||"").toLowerCase();try{if(c.includes("application/json"))a=await t.json();else{let i=await t.text();i&&(a=JSON.parse(i))}}catch{a=null}}switch(o){case"auth":return Ot(t,e,a,n,s);case"sync":return Nt(t,e,a,n,s);case"users":return $t(t,e,a,n,s);case"stats":return Mt(t,e,a,n);case"logs":return Gt(t,e,a,n);case"tools":return Bt(t,e,a,n);case"update":return handleUpdate(t,e,a,n,s);default:return g({success:!1,message:"\u672A\u77E5\u63A5\u53E3"},404)}}async function jn(t,e,n,s,r){let o=e.searchParams.get("sub")||"",a=ke(r,o);if(!a.length)return Ct("not found",404);let c=e.hostname,i=a[0],u=await ve(i,r,c),l=(t.headers.get("user-agent")||"").toLowerCase(),p=l.includes("mozilla")&&!Hn(l),d=e.searchParams.has("raw")||e.searchParams.has("b64")||e.searchParams.has("base64");if(p&&!d&&!r.subUserAgent)return W(Vn(e,r,i));let f=(e.searchParams.get("flag")||e.searchParams.get("format")||e.searchParams.get("type")||e.searchParams.get("target")||"").toLowerCase(),h=Kn(l,f),m,b;h==="clash"?(m=Ne(u),b="text/yaml; charset=utf-8"):h==="singbox"?(m=$e(u),b="application/json; charset=utf-8"):h==="v2ray"?(m=Me(u),b="application/json; charset=utf-8"):(m=Le(u),b="text/plain; charset=utf-8");let x=N(i.id),S=x.up+x.down,y=k(i.limitTotalGb),w={"content-type":b,"cache-control":"no-store","access-control-allow-origin":"*","profile-update-interval":"12","subscription-userinfo":`upload=${x.up}; download=${x.down}; total=${y||0}; expire=${i.expiryMs?Math.floor(i.expiryMs/1e3):4102329600}`};return l.includes("mozilla")||(w["content-disposition"]=`attachment; filename*=utf-8''${encodeURIComponent(i.name||"CFSub")}`),s.waitUntil(G(n)),new Response(m,{status:200,headers:w})}function Hn(t){return/clash|meta|mihomo|stash|verge|sing-?box|hiddify|nekobox|karing|v2ray|shadowrocket|loon|surge|quantumult/i.test(t)}function Kn(t,e){return e?["clash","yaml","meta","stash","clash-meta","y"].includes(e)?"clash":["sing","singbox","sing-box","sb","s"].includes(e)?"singbox":["v2ray","vjson","v"].includes(e)?"v2ray":"raw":/clash|meta|stash|verge|mihomo|cfw/i.test(t)?"clash":/sing-?box|hiddify|nekobox|sfa|karing/i.test(t)?"singbox":"raw"}function Vn(t,e,n){let s=N(n.id),r=s.up+s.down,o=k(n.limitTotalGb),a=s.dailyUp+s.dailyDown,c=k(n.limitDailyGb),i=`${t.origin}/${e.apiRoute}?sub=${encodeURIComponent(n.name||"")}`,u="\u6B63\u5E38";return n.status==="paused"?u="\u5DF2\u6682\u505C":n.expiryMs&&Date.now()>n.expiryMs?u="\u5DF2\u5230\u671F":o>0&&r>=o?u="\u6D41\u91CF\u5DF2\u7528\u5C3D":c>0&&a>=c&&(u="\u4ECA\u65E5\u6D41\u91CF\u5DF2\u7528\u5C3D"),He.replace(/__USER_NAME__/g,n.name||"\u9ED8\u8BA4").replace(/__USER_ID__/g,n.id).replace(/__STATUS__/g,u).replace(/__TOTAL_USED__/g,E(r)).replace(/__TOTAL_LIMIT__/g,o>0?E(o):"\u4E0D\u9650").replace(/__TOTAL_PROGRESS__/g,String(o>0?Math.min(100,Math.round(r/o*100)):0)).replace(/__DAILY_USED__/g,E(a)).replace(/__DAILY_LIMIT__/g,c>0?E(c):"\u4E0D\u9650").replace(/__DAILY_PROGRESS__/g,String(c>0?Math.min(100,Math.round(a/c*100)):0)).replace(/__EXPIRY__/g,n.expiryMs?new Date(n.expiryMs).toLocaleString("zh-CN"):"\u6C38\u4E45").replace(/__SYNC_RAW__/g,i).replace(/__SYNC_CLASH__/g,`${i}&flag=clash`).replace(/__SYNC_SINGBOX__/g,`${i}&flag=singbox`).replace(/__SYNC_V2RAY__/g,`${i}&flag=v2ray`).replace(/__SYNC_BASE64__/g,`${i}&flag=base64`)}async function Yn(t,e){let n=String(e.maintenanceHost||"").split(",").map(i=>i.trim()).filter(Boolean);if(!n.length)return W("<h1>It works!</h1><p>CFSub is running.</p>");let s=t.headers.get("cf-connecting-ip")||"",r=0;for(let i of s)r+=i.charCodeAt(0);let o=n[r%n.length],a=new URL(t.url),c=await I(`${o}${a.pathname}${a.search}`,{method:t.method,headers:{"user-agent":t.headers.get("user-agent")||"Mozilla/5.0"}},8e3);return c?new Response(c.body,{status:c.status,headers:{"content-type":c.headers.get("content-type")||"text/html"}}):W("<h1>Service Unavailable</h1>",502)}export{er as default};
