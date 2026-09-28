var fn=Object.defineProperty;var T=(e,t)=>()=>(e&&(t=e(e=0)),t);var mn=(e,t)=>{for(var n in t)fn(e,n,{get:t[n],enumerable:!0})};var be,ne,Ne,re,at,it,_e,ct,lt,ut,pt,$e,dt,ft,V,hn,Ir,Me,mt,ht,gt,yt,j=T(()=>{be=["172.71.218.190","162.158.228.87","162.158.189.134","162.158.26.63","162.158.25.86","162.158.29.216","162.158.218.160","162.158.227.214","172.69.118.198","172.69.119.150"],ne=[{domain:"ProxyIP.HK.CMLiusss.net",region:"HK",name:"\u9999\u6E2F"},{domain:"ProxyIP.US.CMLiusss.net",region:"US",name:"\u7F8E\u56FD"},{domain:"ProxyIP.SG.CMLiusss.net",region:"SG",name:"\u65B0\u52A0\u5761"},{domain:"ProxyIP.JP.CMLiusss.net",region:"JP",name:"\u65E5\u672C"},{domain:"ProxyIP.KR.CMLiusss.net",region:"KR",name:"\u97E9\u56FD"},{domain:"ProxyIP.DE.CMLiusss.net",region:"DE",name:"\u5FB7\u56FD"},{domain:"ProxyIP.SE.CMLiusss.net",region:"SE",name:"\u745E\u5178"},{domain:"ProxyIP.NL.CMLiusss.net",region:"NL",name:"\u8377\u5170"},{domain:"ProxyIP.FI.CMLiusss.net",region:"FI",name:"\u82AC\u5170"},{domain:"ProxyIP.GB.CMLiusss.net",region:"GB",name:"\u82F1\u56FD"},{domain:"ProxyIP.Oracle.cmliusss.net",region:"Oracle",name:"\u7532\u9AA8\u6587"},{domain:"ProxyIP.DigitalOcean.CMLiusss.net",region:"DigitalOcean",name:"DigitalOcean"},{domain:"ProxyIP.Vultr.CMLiusss.net",region:"Vultr",name:"Vultr"},{domain:"ProxyIP.Multacom.CMLiusss.net",region:"Multacom",name:"Multacom"}],Ne={US:["SG","JP","KR"],SG:["JP","KR","US"],JP:["SG","KR","US"],KR:["JP","SG","US"],HK:["SG","JP","US"],DE:["NL","GB","SE","FI"],SE:["DE","NL","FI","GB"],NL:["DE","GB","SE","FI"],FI:["SE","DE","NL","GB"],GB:["DE","NL","SE","FI"]},re=["cloudflare.182682.xyz","speed.marisalnc.com","freeyx.cloudflare88.eu.org","bestcf.top","cdn.2020111.xyz","cfip.cfcdn.vip","cf.0sm.com","cf.090227.xyz","cf.zhetengsha.eu.org","cloudflare.9jy.cc","cf.zerone-cdn.pp.ua","cfip.1323123.xyz","cnamefuckxxs.yuchen.icu","cloudflare-ip.mofashi.ltd","115155.xyz","cname.xirancdn.us","f3058171cad.002404.xyz","8.889288.xyz","cdn.tzpro.xyz","cf.877771.xyz","xn--b6gac.eu.org"],at="proxyip.cmliussss.net",it="proxyip.tp1.090227.xyz",_e="https://api.uouin.com/index.php/index/Cloudflare",ct="DdlTxtN0sUOu",lt="70cloudflareapikey",ut={bgp:"\u591A\u7EBF",ctcc:"\u7535\u4FE1",cucc:"\u8054\u901A",cmcc:"\u79FB\u52A8",ipv6:"IPv6"},pt=["173.245.48.0/20","103.21.244.0/22","103.22.200.0/22","103.31.4.0/22","141.101.64.0/18","108.162.192.0/18","190.93.240.0/20","188.114.96.0/20","197.234.240.0/22","198.41.128.0/17","162.158.0.0/15","104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","131.0.72.0/22"],$e=[{name:"CF \u5B98\u65B9\u6BB5",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR.txt",isp:"cf"},{name:"CF \u7535\u4FE1\u4F18\u9009",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/ct.txt",isp:"ct"},{name:"CF \u8054\u901A\u4F18\u9009",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/cu.txt",isp:"cu"},{name:"CF \u79FB\u52A8\u4F18\u9009",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/cmcc.txt",isp:"cmcc"}],dt={cmcc:"\u79FB\u52A8",cu:"\u8054\u901A",ct:"\u7535\u4FE1",cf:"\u5B98\u65B9"},ft=["104.16.0.0/13"],V=[443,2053,2083,2087,2096,8443],hn=[80,8080,8880,2052,2082,2086,2095],Ir=[...V,...hn],Me="https://cloudflare-dns.com/dns-query",mt="cloudflare-ech.com",ht="1.1.1.1",gt="8.8.4.4",yt=["www.speedtest.net","grok.com","feedback.spotify.com","www.hcaptcha.com","chatgpt.com","sourceforge.net","www.wikipedia.org","cdn.jsdelivr.net"]});var k,Ge,Fe,wt,Ar,Se=T(()=>{j();k="1.0.0",Ge=3,Fe={name:"",apiRoute:"sub",masterKey:"admin",isPaused:!1,uuid:"",trojanPassword:"",mode:"vless",protocols:{vless:!0,trojan:!1,xhttp:!1},ports:V.join(","),path:"/",hosts:"",fp:"chrome",alpn:"",ech:!1,echDomain:mt,echDns:Me,allowInsecure:!1,enableTfo:!1,enableEarlyData:!1,enableOfficialIp:!0,enablePreferredDomain:!0,enablePreferredIp:!0,enableRemotePreferred:!0,customPreferred:"",preferredUrls:"",preferredCount:12,proxyIpMode:"auto",proxyIpRegion:"",customProxyIp:"",backupProxyIp:"proxyip.tp1.090227.xyz",nat64:"",outboundProxy:"",outboundMode:"auto",customDns:Me,resolveIp:ht,cleanIps:"",maintenanceHost:"https://www.ubuntu.com",enableDirectConfigs:!0,nameStrategy:"default",namePrefix:"CFSub",subUserAgent:"",subConverter:"https://url.v1.mk/sub",maxConfigs:30,users:[],limitTotalGb:0,limitDailyGb:0,expiryDays:0,githubRepo:"",autoUpdate:!1,autoUpdateFormat:"plain",deployTarget:"worker",cfAccountId:"",cfApiToken:"",cfWorkerName:"",cfPagesProject:"",tgToken:"",tgChatId:"",tgAdminId:"",silentAlerts:!1,panelApiKeys:[],logs:[],schemaVersion:1,createdAt:0,updatedAt:0},wt=()=>({id:"",uuid:"",name:"",notes:"",status:"active",limitTotalGb:null,limitDailyGb:null,expiryMs:null,maxConfigs:null,connLimit:null,proxyIp:"",cleanIp:"",ports:"",mode:"",disabledReason:"",disabledAt:0,createdAt:0}),Ar=1024*1024*1024});function xn(e){return/^(1|true|yes|on)$/i.test(String(e||"").trim())}function xt(e,t){let n=[];if(!t)return n;for(let[r,s]of Object.entries(gn)){let o=t[r];o==null||String(o).trim()===""||(e[s]=String(o).trim(),n.push(s))}for(let[r,s]of Object.entries(yn)){let o=t[r];o==null||String(o).trim()===""||(e[s]=xn(o),n.push(s))}for(let[r,s]of Object.entries(wn)){let o=t[r];if(o==null||String(o).trim()==="")continue;let a=Number(o);Number.isNaN(a)||(e[s]=a,n.push(s))}return[...new Set(n)]}function je(e){let t={};for(let[n,r]of Object.entries(e))n.startsWith("__")||(t[n]=r);return t}var gn,yn,wn,bt=T(()=>{gn={UUID:"uuid",TROJAN_PASSWORD:"trojanPassword",MASTER_KEY:"masterKey",ADMIN:"masterKey",PASSWORD:"masterKey",API_ROUTE:"apiRoute",NAME:"name",MODE:"mode",PROTOCOL:"mode",PORTS:"ports",SUB_PATH:"path",WSPATH:"path",HOSTS:"hosts",HOST:"hosts",FP:"fp",FINGERPRINT:"fp",ALPN:"alpn",NAME_PREFIX:"namePrefix",PROXYIP_MODE:"proxyIpMode",PROXYIP:"customProxyIp",P:"customProxyIp",PROXYIP_REGION:"proxyIpRegion",WK:"proxyIpRegion",BACKUP_PROXYIP:"backupProxyIp",NAT64:"nat64",PREFERRED:"customPreferred",YX:"customPreferred",PREFERRED_URLS:"preferredUrls",YXURL:"preferredUrls",CLEAN_IPS:"cleanIps",CLEANIP:"cleanIps",OUTBOUND:"outboundProxy",S:"outboundProxy",OUTBOUND_MODE:"outboundMode",QJ:"outboundMode",DOH:"customDns",CUSTOM_DNS:"customDns",RESOLVE_IP:"resolveIp",MAINTENANCE_HOST:"maintenanceHost",URL:"maintenanceHost",ECH_DOMAIN:"echDomain",ECH_DNS:"echDns",SUB_USER_AGENT:"subUserAgent",SUB_CONVERTER:"subConverter",MAX_CONFIGS:"maxConfigs",GITHUB_REPO:"githubRepo",DEPLOY_TARGET:"deployTarget",CF_ACCOUNT_ID:"cfAccountId",CF_API_TOKEN:"cfApiToken",CF_WORKER_NAME:"cfWorkerName",CF_PAGES_PROJECT:"cfPagesProject",TG_TOKEN:"tgToken",TG_CHAT_ID:"tgChatId",TG_ADMIN_ID:"tgAdminId"},yn={KILL_SWITCH:"isPaused",PAUSED:"isPaused",ECH:"ech",ENABLE_EARLY_DATA:"enableEarlyData",ALLOW_INSECURE:"allowInsecure",ENABLE_TFO:"enableTfo",ENABLE_OFFICIAL_IP:"enableOfficialIp",ENABLE_PREFERRED_DOMAIN:"enablePreferredDomain",ENABLE_PREFERRED_IP:"enablePreferredIp",ENABLE_REMOTE_PREFERRED:"enableRemotePreferred",ENABLE_DIRECT_CONFIGS:"enableDirectConfigs",AUTO_UPDATE:"autoUpdate",SILENT_ALERTS:"silentAlerts"},wn={LIMIT_TOTAL_GB:"limitTotalGb",LIMIT_DAILY_GB:"limitDailyGb",EXPIRY_DAYS:"expiryDays",PREFERRED_COUNT:"preferredCount",MAX_CONFIGS_N:"maxConfigs"}});function _t(e){let t=new TextEncoder().encode(e),n="";for(let r of t)n+=String.fromCharCode(r);return btoa(n)}function St(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),n=t.length%4?"=".repeat(4-t.length%4):"",r=atob(t+n),s=new Uint8Array(r.length);for(let o=0;o<r.length;o++)s[o]=r.charCodeAt(o);return s}function It(){return crypto.randomUUID()}function He(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(e||""))}function se(e){let t=String(e).replace(/-/g,"");if(t.length!==32)return null;let n=new Uint8Array(16);for(let r=0;r<16;r++)n[r]=parseInt(t.substr(r*2,2),16);return n}function $(e){return Array.isArray(e)?e.filter(Boolean).map(t=>String(t).trim()):String(e||"").split(/[\s,;|]+/).map(t=>t.trim()).filter(Boolean)}function Ke(e){return String(e||"").split(/[\r\n]+/).map(t=>t.trim()).filter(Boolean)}function J(e,t=null){let n=String(e||"").trim();if(!n)return{host:"",port:t};if(n.startsWith("[")){let s=n.match(/^\[([^\]]+)\](?::(\d+))?$/);return s?{host:s[1],port:s[2]?parseInt(s[2],10):t}:{host:n,port:t}}let r=n.lastIndexOf(":");return r>0&&/^\d+$/.test(n.slice(r+1))?{host:n.slice(0,r),port:parseInt(n.slice(r+1),10)}:{host:n,port:t}}function M(e){return/^(\d{1,3}\.){3}\d{1,3}$/.test(e)&&e.split(".").every(t=>+t>=0&&+t<=255)}function Pt(e,t){let n=String(t||"").replace(/^\[|\]$/g,"");if(!n||!M(e))return null;let r=e.split(".").map(c=>parseInt(c,10)),s=c=>c.toString(16).padStart(2,"0"),o=`${s(r[0])}${s(r[1])}:${s(r[2])}${s(r[3])}`;return(n.endsWith(":")?n:n+":")+o}function v(e){let t=[...e];for(let n=t.length-1;n>0;n--){let r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}function U(e){let t=Number(e)||0;return t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(2)} KB`:t<1024*1024*1024?`${(t/1024/1024).toFixed(2)} MB`:`${(t/1024/1024/1024).toFixed(2)} GB`}function O(e){let t=Number(e);return t>0?Math.floor(t*1024*1024*1024):0}function g(e,t=200,n={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8",...n}})}function Q(e,t=200,n={}){return new Response(e,{status:t,headers:{"content-type":"text/html; charset=utf-8",...n}})}function Ve(e,t=200,n={}){return new Response(e,{status:t,headers:{"content-type":"text/plain; charset=utf-8",...n}})}async function b(e,t={},n=8e3){let r=new AbortController,s=setTimeout(()=>r.abort(),n);try{return await fetch(e,{...t,signal:r.signal})}catch{return null}finally{clearTimeout(s)}}function Ie(){return new Date().toISOString().slice(0,10)}function oe(e,t,n="timeout"){let r=null,s=new Promise((o,a)=>{r=setTimeout(()=>a(new Error(n)),t)});return Promise.race([e,s]).finally(()=>{r&&clearTimeout(r)})}async function Pe(e){let t=new TextEncoder().encode(e);if(Be===!1)return null;try{let n=await crypto.subtle.digest("MD5",t);return Be=!0,[...new Uint8Array(n)].map(r=>r.toString(16).padStart(2,"0")).join("")}catch{return Be=!1,null}}async function bn(e){let t=await Pe(e);if(t)return t;let n=2166136261;for(let r of new TextEncoder().encode(e))n^=r,n=n*16777619>>>0;return n.toString(16).padStart(8,"0").repeat(4).slice(0,32)}async function Ee(e){let t=await bn(String(e)),n=(t+t).slice(0,32).split("");return n[12]="4",n[16]=["8","9","a","b"][parseInt(n[16],16)%4],`${n.slice(0,8).join("")}-${n.slice(8,12).join("")}-${n.slice(12,16).join("")}-${n.slice(16,20).join("")}-${n.slice(20,32).join("")}`}var Be,D=T(()=>{Be=null});function Y(e){return e.CF_SUB_KV||e.KV||e.C||e.cfsub||null}function W(e){return!!Y(e)}async function S(e){let t=Date.now();if(ae&&t-We<_n)return ae;let n=Y(e),r=null;if(n)try{r=await n.get(Ye,{type:"json"})}catch{r=null}let s={...Fe,...r||{}};if(s.protocols={...Fe.protocols,...r?.protocols||{}},Array.isArray(s.users)||(s.users=[]),Array.isArray(s.panelApiKeys)||(s.panelApiKeys=[]),Array.isArray(s.logs)||(s.logs=[]),s.__locked=xt(s,e),In(s)&&n)try{await n.put(Ye,JSON.stringify(je(s)))}catch{}return ae=s,We=t,s}function In(e){let t=e.__locked||[],n=Number(e.schemaVersion)||1;return n>=Ge?!1:(n<2&&!t.includes("enableEarlyData")&&(e.enableEarlyData=!1),n<3&&!t.includes("maxConfigs")&&Number(e.maxConfigs)===12&&(e.maxConfigs=30),e.schemaVersion=Ge,!0)}async function B(e,t){t.updatedAt=Date.now(),ae=t,We=Date.now();let n=Y(e);if(n)try{await n.put(Ye,JSON.stringify(je(t)))}catch(r){console.error("saveConfig failed",r)}return t}async function L(e){if(I)return I;let t=Y(e),n=null;if(t)try{n=await t.get(At,{type:"json"})}catch{n=null}return I=n&&n.users?n:{users:{}},I}function G(e,t=0,n=0){I||(I={users:{}});let r=String(e||"default"),s=Ie(),o=I.users[r];return o||(o=I.users[r]={up:0,down:0,dailyUp:0,dailyDown:0,lastDay:s,connects:0,last:0}),o.lastDay!==s&&(o.dailyUp=0,o.dailyDown=0,o.lastDay=s),o.up+=t,o.down+=n,o.dailyUp+=t,o.dailyDown+=n,Ae=!0,o}function Ut(e){let t=G(e,0,0);return t.connects+=1,t.last=Date.now(),t}function F(e){let t=String(e||"default");return I?.users?.[t]||{up:0,down:0,dailyUp:0,dailyDown:0,lastDay:Ie(),connects:0,last:0}}function Dt(e){I||(I={users:{}});let t=String(e||"default");I.users[t]&&(I.users[t]={up:0,down:0,dailyUp:0,dailyDown:0,lastDay:Ie(),connects:0,last:0}),Ae=!0}async function H(e,t=!1){if(!Ae)return;let n=Date.now();if(!t&&n-Et<Sn)return;let r=Y(e);if(r)try{await r.put(At,JSON.stringify(I))}catch(s){console.error("flushUsage failed",s);return}Ae=!1,Et=n}async function E(e,t,n){let r=await S(e);r.logs=Array.isArray(r.logs)?r.logs:[],r.logs.unshift({ts:new Date().toISOString(),type:t,detail:n}),r.logs.length>100&&(r.logs=r.logs.slice(0,100)),ae=r;let s=Y(e);if(s)try{await s.put(Tt,JSON.stringify(r.logs))}catch{}return r.logs}async function Ct(e){let t=Y(e);if(t)try{let r=await t.get(Tt,{type:"json"});if(Array.isArray(r))return r}catch{}return(await S(e)).logs||[]}var Ye,At,Tt,_n,Sn,ae,We,I,Ae,Et,Z=T(()=>{Se();bt();D();Ye="sys_config",At="sys_usage",Tt="sys_logs",_n=3e4,Sn=12e4,ae=null,We=0,I=null,Ae=!1,Et=0});function An(e,t,n){let r=e.length,s=new Uint8Array((r+8>>6)+1<<6);s.set(e),s[r]=128;let o=r*8,a=new DataView(s.buffer);a.setUint32(s.length-4,o>>>0),a.setUint32(s.length-8,Math.floor(o/4294967296));let c=t.slice(),i=new Uint32Array(64);for(let l=0;l<s.length;l+=64){for(let y=0;y<16;y++)i[y]=a.getUint32(l+y*4);for(let y=16;y<64;y++){let _=(i[y-15]>>>7|i[y-15]<<25)^(i[y-15]>>>18|i[y-15]<<14)^i[y-15]>>>3,R=(i[y-2]>>>17|i[y-2]<<15)^(i[y-2]>>>19|i[y-2]<<13)^i[y-2]>>>10;i[y]=i[y-16]+_+i[y-7]+R>>>0}let[p,d,f,h,m,x,w,P]=c;for(let y=0;y<64;y++){let _=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7),R=m&x^~m&w,A=P+_+R+Pn[y]+i[y]>>>0,C=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),K=p&d^p&f^d&f,z=C+K>>>0;P=w,w=x,x=m,m=h+A>>>0,h=f,f=d,d=p,p=A+z>>>0}c[0]=c[0]+p>>>0,c[1]=c[1]+d>>>0,c[2]=c[2]+f>>>0,c[3]=c[3]+h>>>0,c[4]=c[4]+m>>>0,c[5]=c[5]+x>>>0,c[6]=c[6]+w>>>0,c[7]=c[7]+P>>>0}let u="";for(let l=0;l<n;l++)u+=c[l].toString(16).padStart(8,"0");return u}function Xe(e){return An(new TextEncoder().encode(String(e)),En,7)}function Rt(e){let t=e.headers.get("sec-websocket-protocol");if(!t)return null;try{let n=St(t);return n.length?n:null}catch{return null}}function Te(e){if(e.byteLength<24)throw new Error("invalid data");let t=new Uint8Array(e),n=new DataView(e),r=t[0],s=t.slice(1,17),a=18+t[17];if(a+4>t.length)throw new Error("invalid data");let c=t[a],i=n.getUint16(a+1),u=t[a+3];a+=4;let l="";if(u===1){if(a+4>t.length)throw new Error("invalid addressType");l=Array.from(t.slice(a,a+4)).join("."),a+=4}else if(u===2){let p=t[a];if(a+=1,a+p>t.length)throw new Error("invalid addressType");l=new TextDecoder().decode(t.slice(a,a+p)),a+=p}else if(u===3){if(a+16>t.length)throw new Error("invalid addressType");let p=[];for(let d=0;d<8;d++)p.push(n.getUint16(a+d*2).toString(16));l=p.join(":"),a+=16}else throw new Error("invalid addressType");if(!l)throw new Error("addressValue is empty");return{version:r,uuidBytes:s,command:c,port:i,addressType:u,address:l,rawIndex:a}}function vt(e,t){let n=new Uint8Array(e);if(n.length<58)throw new Error("invalid data");let r=new TextDecoder().decode(n.slice(0,56)).toLowerCase();if(!r||r!==String(t).toLowerCase())throw new Error("invalid password");if(n[56]!==13||n[57]!==10)throw new Error("invalid data");let s=58,o=n[s];if(o!==1)throw new Error("unsupported command, only TCP (CONNECT) is allowed");s+=1;let a=n[s];s+=1;let c="";if(a===1)c=Array.from(n.slice(s,s+4)).join("."),s+=4;else if(a===3){let l=n[s];s+=1,c=new TextDecoder().decode(n.slice(s,s+l)),s+=l}else if(a===4){let l=new DataView(e),p=[];for(let d=0;d<8;d++)p.push(l.getUint16(s+d*2).toString(16));c=p.join(":"),s+=16}else throw new Error("invalid addressType");let u=new DataView(e).getUint16(s);if(s+=2,n[s]===13&&n[s+1]===10&&(s+=2),!c)throw new Error("addressValue is empty");return{command:o,port:u,address:c,rawIndex:s}}function ie(e){let t=String(e||"").trim();if(!t)return null;let n="socks5",r=t,s=t.match(/^(socks5|socks|https|http):\/\/(.*)$/i);if(s){let d=s[1].toLowerCase();n=d==="socks"?"socks5":d,r=s[2]}r=r.split("/")[0];let o=null,a=r.lastIndexOf("@");a>0&&(o=r.slice(0,a),r=r.slice(a+1));let c=n==="http"?80:n==="https"?443:1080,{host:i,port:u}=J(r,c);if(!i||!u)return null;let l="",p="";if(o){let d=o.indexOf(":");l=d>0?o.slice(0,d):o,p=d>0?o.slice(d+1):""}return{kind:n,host:i,port:u,username:l,password:p}}var Pn,En,kt,Ue=T(()=>{D();Pn=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],En=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428];kt=2});import{connect as Ot}from"cloudflare:sockets";function le(e,t=""){let n=[],r=$(e.customProxyIp);if(r.length)return r;if(e.proxyIpMode==="off")return n;if(e.proxyIpMode==="region"&&e.proxyIpRegion){let s=String(e.proxyIpRegion).toUpperCase(),o=ne.filter(i=>i.region.toUpperCase()===s);if(e.rm===!1){for(let i of o)n.push(`${i.domain}:443`);return n}let a=(Ne[s]||[]).flatMap(i=>ne.filter(u=>u.region.toUpperCase()===i)),c=ne.filter(i=>i.region.toUpperCase()!==s&&!(Ne[s]||[]).includes(i.region));for(let i of[...o,...a,...c])n.push(`${i.domain}:443`);return n}if(e.proxyIpMode==="custom")return n;if(e.enableOfficialIp!==!1)for(let s of v(be))n.push(`${s}:443`);if(t&&n.push(`${t}.${at}:443`),e.enablePreferredDomain!==!1)for(let s of v(re))n.push(`${s}:443`);for(let s of v(ne))n.push(`${s.domain}:443`);return e.backupProxyIp?n.push(e.backupProxyIp):n.push(it),n}function ue(e,t){let{host:n,port:r}=J(e,null),s=String(n).match(/\.tp(\d+)/),o=r;if(!o&&s){let a=parseInt(s[1],10);a>1&&a<65536&&(o=a)}return{host:n,port:o||t||443}}function De(e,t,n,r=""){let s=n.__outbound||null,o=[],a=le(n,r),c={host:e,port:t,via:null,label:"\u76F4\u8FDE"},i=s?{host:e,port:t,via:s.kind,label:`\u51FA\u7AD9\u4EE3\u7406(${s.kind})`}:null,u=n.nat64&&M(e)?{host:Pt(e,n.nat64),port:t,via:null,label:"NAT64"}:null,l=a.slice(0,6).map(p=>{let{host:d,port:f}=ue(p,t);return{host:d,port:f,via:null,label:`\u53CD\u4EE3 ${d}`}});switch(n.outboundMode){case"proxy-first":i&&o.push(i),o.push(c,...l),u&&o.push(u);break;case"proxy-only":i&&o.push(i);break;case"direct-first":o.push(c,...l),i&&o.push(i),u&&o.push(u);break;default:o.push(c,...l),i&&o.push(i),u&&o.push(u)}return o}async function Ce(e,t){let{host:n,port:r,via:s}=e;if(!s)return await Ot({hostname:n,port:r,allowHalfOpen:!0});let o=t.__outbound;if(!o)throw new Error("no outbound proxy configured");let a=await Ot({hostname:o.host,port:o.port,secureTransport:o.kind==="https"?"on":"off"});return o.kind==="socks5"?await Tn(a,n,r,o):await Un(a,n,r,o),a}async function Tn(e,t,n,r){let s=e.writable.getWriter(),o=!!(r.username||r.password);await s.write(new Uint8Array(o?[5,2,0,2]:[5,1,0]));let a=e.readable.getReader(),c=await ce(a,2);if(c[1]===2){let f=new TextEncoder().encode(r.username||""),h=new TextEncoder().encode(r.password||""),m=new Uint8Array(3+f.length+h.length);if(m[0]=1,m[1]=f.length,m.set(f,2),m[2+f.length]=h.length,m.set(h,3+f.length),await s.write(m),(await ce(a,2))[1]!==0)throw new Error("socks5 auth failed")}else if(c[1]!==0)throw new Error("socks5 method not supported");let i=new TextEncoder().encode(t),u=new Uint8Array(5+i.length);u[0]=5,u[1]=1,u[2]=0,u[3]=3,u[4]=i.length,u.set(i,5);let l=new Uint8Array(u.length+2);l.set(u),l[u.length]=n>>8,l[u.length+1]=n&255,await s.write(l);let p=await ce(a,4);if(p[1]!==0)throw new Error(`socks5 connect failed: ${p[1]}`);let d=0;p[3]===1?d=4:p[3]===4?d=16:p[3]===3&&(d=(await ce(a,1))[0]),await ce(a,d+2),s.releaseLock(),a.releaseLock()}async function Un(e,t,n,r){let s=e.writable.getWriter(),o=n===80?t:`${t}:${n}`,a=`CONNECT ${o} HTTP/1.1\r
Host: ${o}\r
`;if(r.username||r.password){let p=btoa(`${r.username||""}:${r.password||""}`);a+=`Proxy-Authorization: Basic ${p}\r
`}a+=`\r
`,await s.write(new TextEncoder().encode(a));let c=e.readable.getReader(),i="",u=new TextDecoder;for(;!i.includes(`\r
\r
`);){let{value:p,done:d}=await c.read();if(d)throw new Error("proxy closed");if(i+=u.decode(p,{stream:!0}),i.length>4096)break}let l=parseInt((i.match(/^HTTP\/1\.[01] (\d+)/)||[])[1]||"0",10);if(l<200||l>=300)throw new Error(`proxy CONNECT failed: ${l}`);s.releaseLock(),c.releaseLock()}async function ce(e,t){if(t<=0)return new Uint8Array(0);let n=[],r=0;for(;r<t;){let{value:a,done:c}=await e.read();if(c)throw new Error("unexpected EOF");n.push(a),r+=a.length}let s=new Uint8Array(r),o=0;for(let a of n)s.set(a,o),o+=a.length;return s.slice(0,t)}function q(e){try{e.close()}catch{}}var pe=T(()=>{D();j()});function Hn(e,t){let n=e.split(".").filter(Boolean),r=new TextEncoder,s=[];for(let i of n){let u=r.encode(i);s.push(new Uint8Array([u.length]),u)}s.push(new Uint8Array([0]));let o=Kn(s),a=new Uint8Array(12+o.length+4),c=new DataView(a.buffer);return c.setUint16(0,Math.floor(Math.random()*65535)),c.setUint16(2,256),c.setUint16(4,1),a.set(o,12),c.setUint16(12+o.length,Bn[t]||1),c.setUint16(12+o.length+2,1),a}function Kn(e){let t=e.reduce((s,o)=>s+o.length,0),n=new Uint8Array(t),r=0;for(let s of e)n.set(s,r),r+=s.length;return n}function Vn(e,t){let n=new DataView(e),r=n.getUint16(4),s=n.getUint16(6),o=12;for(let c=0;c<r;c++)o=Mt(e,o),o+=4;let a=[];for(let c=0;c<s;c++){o=Mt(e,o);let i=n.getUint16(o),u=n.getUint16(o+8);o+=10;let l=new Uint8Array(e,o,u);if(i===1&&u===4&&(t==="A"||t==="ANY"))a.push(Array.from(l).join("."));else if(i===28&&u===16&&(t==="AAAA"||t==="ANY")){let p=[];for(let d=0;d<8;d++)p.push(n.getUint16(o+d*2).toString(16));a.push(p.join(":"))}else if(i===16&&t==="TXT"){let p="",d=0;for(;d<l.length;){let f=l[d];p+=new TextDecoder().decode(l.slice(d+1,d+1+f)),d+=1+f}a.push(p)}o+=u}return a}function Mt(e,t){let n=new DataView(e),r=t;for(;;){let s=n.getUint8(r);if(s===0)return r+1;if((s&192)===192)return r+2;r+=1+s}}async function Ft(e,t="A",n="https://cloudflare-dns.com/dns-query",r=3e5){let s=`${t}|${e}`,o=Gt.get(s);if(o&&Date.now()-o.at<r)return o.val;let a=Hn(e,t),c=btoa(String.fromCharCode(...a)),i=`${n}?dns=${c.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}`,u=await b(i,{headers:{accept:"application/dns-message"}},6e3);if(!u||!u.ok)return o?.val||[];let l=await u.arrayBuffer(),p=Vn(l,t);return Gt.set(s,{at:Date.now(),val:p}),p}var Bn,Gt,jt=T(()=>{D();Bn={A:1,AAAA:28,TXT:16,HTTPS:65,CNAME:5};Gt=new Map});function Vt(e){let t=e.split(".").map(Number);return(t[0]<<24|t[1]<<16|t[2]<<8|t[3])>>>0}function Re(e){if(!M(e))return!1;let t=Vt(e);return Yn.some(n=>(t&n.mask)===n.net)}function Bt(e){let[t,n]=String(e).split("/"),r=parseInt(n,10);if(!M(t)||!(r>0&&r<32))return null;let s=32-r,o=t.split(".").reduce((u,l,p)=>u|parseInt(l,10)<<24-p*8,0)>>>0,a=4294967295<<s>>>0,c=Math.floor(Math.random()*Math.pow(2,s)),i=((o&a)>>>0)+c>>>0;return[i>>>24&255,i>>>16&255,i>>>8&255,i&255].join(".")}async function fe(e){if(N.val.length&&Date.now()-N.at<Wn)return N.val;try{let t=String(Date.now()),n=await Pe(ct);if(!n)return N.val;let r=await Pe(n+lt+t);if(!r)return N.val;let s=await b(`${_e}?key=${r}&time=${t}`,{headers:{"User-Agent":"Mozilla/5.0",accept:"application/json"}},8e3);if(!s||!s.ok)return N.val;let o=await s.json(),a=o&&o.data;if(!a)return N.val;let c=e?.enablePreferredIPv6===!0,i=[];for(let[u,l]of Object.entries(ut)){let p=u==="ipv6";if(p&&!c)continue;let d=a[u]&&Array.isArray(a[u].info)?a[u].info:[];for(let f of d){let h=String(f?.ip||"").trim();h&&(!p&&!Re(h)||i.push({ip:h,port:443,name:`${l}\u4F18\u9009`,isp:u}))}}return i.length&&(N.at=Date.now(),N.val=i),i}catch{return N.val}}async function zn(e){let t=Ht.get(e);if(t&&Date.now()-t.at<Xn)return t.val;let n=await b(e,{headers:{"user-agent":"CFSub/1.0"}},8e3);if(!n||!n.ok)return[];let r=await n.text(),s=Ke(r).filter(o=>!o.startsWith("#"));return Ht.set(e,{at:Date.now(),val:s}),s}function Kt(e,t=443){let n=String(e).trim();if(!n||n.startsWith("//"))return null;let r=n.indexOf("#"),s=r>=0?n.slice(0,r):n,o=r>=0?n.slice(r+1).trim():"",{host:a,port:c}=J(s,null);return a?{ip:a,port:c||t,name:o}:null}async function ke(e,t=12){let n=[],r=new Set,s=l=>{if(!l||!l.ip||M(l.ip)&&!Re(l.ip))return;let p=`${l.ip}:${l.port}`;r.has(p)||(r.add(p),n.push(l))};if(e.customPreferred)for(let l of Ke(e.customPreferred))s(Kt(l));if(e.cleanIps)for(let l of $(e.cleanIps))s({ip:l,port:443,name:"CleanIP"});let o=e.enableOfficialIp!==!1?v(Jn()):[],a=[];e.enablePreferredIp!==!1&&(a=v(await fe(e)));let c=[];if(e.enableRemotePreferred!==!1){let l=[...$(e.preferredUrls),...$e.map(d=>d.url)];(await Promise.allSettled(l.slice(0,4).map(zn))).forEach((d,f)=>{if(d.status!=="fulfilled")return;let h=$e.find(x=>x.url===l[f]),m=h?`${dt[h.isp]||""}\u4F18\u9009`:"\u4F18\u9009";for(let x of v(d.value).slice(0,Math.ceil(t/2)))if(x.includes("/")){let w=Bt(x);w&&c.push({ip:w,port:443,name:m})}else{let w=Kt(x);w&&c.push({...w,name:w.name||m})}})}if(!o.length&&!a.length&&!c.length)for(let l=0;l<Math.min(t,8);l++){let p=Bt(ft[0]);p&&c.push({ip:p,port:443,name:"\u5B98\u65B9\u4F18\u9009"})}let i=[o,a,c].filter(l=>l.length),u=[];for(let l=0;u.length<t*2;l++){let p=!1;for(let d of i)l<d.length&&(s(d[l]),p=!0);if(!p)break}return n.slice(0,Math.max(1,t))}function Jn(){return v(be).map(e=>({ip:e,port:443,name:"\u5B98\u65B9\u76F4\u8FDE"}))}async function Yt(e,t=6){return e.enablePreferredDomain===!1?[]:v(re).slice(0,t).map(n=>({ip:n,port:443,name:n.split(".")[0]}))}async function Wt(e,t){let n=e&&e.length?e:Qn,r=[...new Set([t,"https://dns.google/dns-query","https://223.5.5.5/dns-query","https://cloudflare-dns.com/dns-query"].filter(Boolean))],s=new Set;return await Promise.all(n.slice(0,12).map(async o=>{for(let a of r){let i=(await Ft(o,"A",a)).filter(u=>M(u));if(i.length){for(let u of i.slice(0,2))s.add(u);return}}})),[...s].slice(0,16).join(",")}function Xt(e,t=V){let n=$(e).map(r=>parseInt(r,10)).filter(r=>r>0&&r<65536);return n.length?n:[...t]}function ze(e){return V.includes(Number(e))}var Yn,N,Wn,Ht,Xn,Qn,ve=T(()=>{D();jt();j();Yn=pt.map(e=>{let[t,n]=e.split("/"),r=4294967295<<32-Number(n)>>>0;return{net:Vt(t)&r,mask:r}});N={at:0,val:[]},Wn=300*1e3;Ht=new Map,Xn=600*1e3;Qn=re.slice(0,8)});function Jt(e){return e&&(e.match(/\{[A-Z_]+\}/g)||[]).find(n=>!Zn.includes(n))||null}function qn(e,t){return String(e).replace(/\{[A-Z_]+\}/g,n=>{switch(n){case"{USER}":return t.user||"CFSub";case"{PORT}":return String(t.port||"");case"{PROTOCOL}":return(t.protocol||"").toUpperCase();case"{PREFIX}":return t.prefix||"CFSub";case"{IP}":return t.address||"";case"{IP_NAME}":return t.ipName||t.address||"";case"{HOST}":return t.host||"";case"{DATE}":return new Date().toISOString().slice(0,10);case"{INDEX}":return String(t.index||1).padStart(2,"0");default:return n}})}function Qt(e,t=""){let n=[],r={id:"default",uuid:e.uuid,password:e.trojanPassword||e.uuid,name:e.name||"\u9ED8\u8BA4",status:"active",maxConfigs:e.maxConfigs??null,proxyIp:"",cleanIp:"",ports:"",mode:"",limitTotalGb:e.limitTotalGb??null,limitDailyGb:e.limitDailyGb??null,expiryMs:null,isMain:!0};n.push(r);for(let s of e.users||[])s.uuid&&(s.status==="paused"||s.status==="disabled"||s.expiryMs&&Date.now()>s.expiryMs||n.push({...s,password:s.password||s.uuid}));if(t){let s=String(t).trim(),o=["\u9ED8\u8BA4","default","main","master"].includes(s.toLowerCase())||s==="\u9ED8\u8BA4",a=n.find(i=>i.name===s||i.id===s||i.uuid===s);return a?[a]:o?[r]:(e.users||[]).filter(i=>i.uuid).length?[]:[r]}return[r]}async function Zt(e,t,n,r={}){let s=e.maxConfigs||t.maxConfigs||30,o=Xt(e.ports||t.ports,[443]),a=$(t.hosts).length?$(t.hosts):[n],c=[];(t.enablePreferredIp!==!1||t.customPreferred||t.cleanIps)&&(c=await ke(t,Math.max(6,s)));let i=t.enablePreferredDomain!==!1?await Yt(t,4):[],l=[{ip:a[0],port:o[0],name:"\u4E3B\u57DF\u540D"},...c,...i],p=String(e.proxyIp||t.customProxyIp||"").trim(),d=t.proxyIpMode==="region"&&t.proxyIpRegion?String(t.proxyIpRegion).toUpperCase():"",f=[];e.mode?f.push(e.mode):t.mode==="all"?f.push("vless","trojan","xhttp"):t.mode==="both"?f.push("vless","trojan"):f.push(t.mode||"vless");let h=[...new Set(f)].filter(Boolean),m=[],x=0,w=zt[t.nameStrategy]||(t.nameStrategy&&t.nameStrategy.includes("{")?t.nameStrategy:zt.default),P=qt(t.path||"/"),y=new Set;for(let _ of h){let R=_==="xhttp"?o.filter(C=>ze(C)):o;if(!R.length)continue;let A=l.length?l:[{ip:a[0],port:R[0],name:"\u9ED8\u8BA4"}];for(let C=0;C<s;C++){let K=A[C%A.length],z=K.ip,xe=(K.port&&K.port!==443?K.port:null)||R[Math.floor(C/A.length)%R.length],ot=`${_}|${z}|${xe}`;if(y.has(ot))continue;y.add(ot);let Le=a[C%a.length];x++,m.push({type:_,address:z,port:xe,uuid:e.uuid,password:e.password,host:Le,path:P,sni:Le,fp:t.fp||"chrome",alpn:t.alpn||"",tls:ze(xe),ech:t.ech?t.echDomain:"",echDns:t.echDns,allowInsecure:!!t.allowInsecure,earlyData:t.enableEarlyData!==!1,proxyIp:p,region:d,name:qn(w,{user:e.name||"CFSub",port:xe,protocol:_,prefix:t.namePrefix||"CFSub",address:z,ipName:K.name||z,host:Le,index:x})})}}return m.slice(0,s*Math.max(1,h.length))}function qt(e){let t=String(e||"/").trim();return t.startsWith("/")||(t="/"+t),t}function er(e){return"/"+String(e).slice(0,8)}function Qe(e){let t=e.type==="xhttp"?er(e.uuid):qt(e.path||"/"),n=[];return e.earlyData&&n.push("ed=2560"),e.proxyIp?n.push(`proxyip=${e.proxyIp}`):e.region&&n.push(`wk=${e.region}`),n.length?t+(t.includes("?")?"&":"?")+n.join("&"):t}function tr(e){let t=[],n=encodeURIComponent(Qe(e)),r=e.sni||e.host;return e.type==="vless"?(t.push("encryption=none"),t.push(`security=${e.tls?"tls":"none"}`),e.alpn&&t.push(`alpn=${encodeURIComponent(e.alpn)}`),t.push(`fp=${e.fp}`),t.push("type=ws"),t.push(`host=${e.host}`),t.push(`sni=${r}`),t.push(`path=${n}`),e.ech&&t.push(`ech=${encodeURIComponent(e.ech)}`),e.allowInsecure&&t.push("allowInsecure=1")):e.type==="trojan"?(t.push(`security=${e.tls?"tls":"none"}`),e.alpn&&t.push(`alpn=${encodeURIComponent(e.alpn)}`),t.push(`fp=${e.fp}`),t.push("type=ws"),t.push(`host=${e.host}`),t.push(`sni=${r}`),t.push(`path=${n}`),e.ech&&t.push(`ech=${encodeURIComponent(e.ech)}`),e.allowInsecure&&t.push("allowInsecure=1")):e.type==="xhttp"&&(t.push("encryption=none"),t.push("security=tls"),t.push("type=xhttp"),t.push("mode=stream-one"),t.push(`host=${e.host}`),t.push(`sni=${r}`),t.push(`path=${n}`),e.alpn&&t.push(`alpn=${encodeURIComponent(e.alpn)}`),t.push(`fp=${e.fp}`)),t.join("&")}function nr(e){let t=tr(e),n=encodeURIComponent(e.name);return e.type==="trojan"?`trojan://${encodeURIComponent(e.password)}@${Je(e.address)}:${e.port}?${t}#${n}`:e.type==="xhttp"?`vless://${e.uuid}@${Je(e.address)}:${e.port}?${t}#${n}`:`vless://${e.uuid}@${Je(e.address)}:${e.port}?${t}#${n}`}function Je(e){return String(e).includes(":")&&!String(e).startsWith("[")?`[${e}]`:e}function en(e){return _t(e.map(nr).join(`
`))}var Zn,zt,Oe=T(()=>{ve();Ue();D();j();Zn=["{USER}","{PORT}","{PROTOCOL}","{PREFIX}","{IP}","{IP_NAME}","{HOST}","{DATE}","{INDEX}"];zt={default:"{PREFIX}-{INDEX}","prefix-user-port":"{PREFIX}-{USER}-{PORT}","type-user-port":"{PROTOCOL}-{USER}-{PORT}","user-port":"{USER}-{PORT}",ip:"{IP_NAME}-{PORT}","host-port-user":"{HOST}-{PORT}-{USER}"}});import{connect as ar}from"cloudflare:sockets";async function on(e,t,n="",r=""){let s={time:new Date().toISOString(),worker:{host:r,colo:n,runtime:typeof navigator<"u"&&navigator.userAgent?navigator.userAgent:"unknown"},storage:{bound:W(e)},config:{uuid:t.uuid||"",trojanPassword:t.trojanPassword?"\u5DF2\u8BBE\u7F6E\uFF08\u72EC\u7ACB\u4E8E UUID\uFF09":"\u672A\u8BBE\u7F6E\uFF08\u7B49\u4E8E UUID\uFF09",mode:t.mode,ports:t.ports,path:t.path,hosts:t.hosts||"\uFF08\u7528\u5F53\u524D\u57DF\u540D\uFF09",fp:t.fp,enableEarlyData:t.enableEarlyData,proxyIpMode:t.proxyIpMode,proxyIpRegion:t.proxyIpRegion||"",customProxyIp:t.customProxyIp||"",outboundProxy:t.outboundProxy?"\u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E",outboundMode:t.outboundMode,userCount:Array.isArray(t.users)?t.users.length:0,schemaVersion:t.schemaVersion},checks:[]};return await he(s,"KV \u7ED1\u5B9A",async()=>{if(!W(e))throw new Error("\u672A\u7ED1\u5B9A KV \u547D\u540D\u7A7A\u95F4");return s.storage.info}),await he(s,"Worker \u51FA\u7AD9 TCP \u2192 example.com:80",async()=>{let o=Date.now(),a=ar({hostname:"example.com",port:80});await oe(a.opened,6e3,"\u5EFA\u8FDE\u8D85\u65F6");let c=a.writable.getWriter();await c.write(new TextEncoder().encode(`GET / HTTP/1.0\r
Host: example.com\r
\r
`));let i=a.readable.getReader(),{value:u}=await oe(i.read(),8e3,"\u8BFB\u8D85\u65F6"),l=new TextDecoder().decode(u.slice(0,40));try{c.releaseLock(),i.releaseLock(),a.close()}catch{}return`${Date.now()-o}ms \xB7 \u54CD\u5E94\u5934\u300C${l.split(`\r
`)[0]}\u300D`}),await he(s,"Worker \u51FA\u7AD9 HTTPS \u2192 cloudflare",async()=>{let o=Date.now(),a=await b("https://www.cloudflare.com/cdn-cgi/trace",{},8e3);if(!a||!a.ok)throw new Error(`HTTP ${a?a.status:"failed"}`);return await a.text(),`${Date.now()-o}ms`}),await he(s,`\u5728\u7EBF\u4F18\u9009\u63A5\u53E3 \u2192 ${_e}`,async()=>{let o=await fe({...t,enablePreferredIp:!0});if(!o.length)throw new Error("\u672A\u8FD4\u56DE\u4EFB\u4F55 IP\uFF08\u53EF\u80FD\u7B7E\u540D\u4E0D\u88AB\u652F\u6301\u6216\u63A5\u53E3\u4E0D\u53EF\u8FBE\uFF09");return`\u8FD4\u56DE ${o.length} \u4E2A IP\uFF0C\u793A\u4F8B ${o.slice(0,3).map(a=>a.ip).join(", ")}`}),await he(s,"\u53CD\u4EE3\u5730\u5740\u89E3\u6790",async()=>{let o=le(t,n).slice(0,6).map(a=>{let c=ue(a,443);return`${c.host}:${c.port}`});return o.length?o.join(" "):"\u5F53\u524D\u8BBE\u7F6E\u4E0B\u4E0D\u4F7F\u7528\u53CD\u4EE3"}),s.summary=s.checks.every(o=>o.ok)?"\u670D\u52A1\u7AEF\u5168\u90E8\u6B63\u5E38\u3002\u82E5\u5BA2\u6237\u7AEF\u4ECD\u8FDE\u4E0D\u4E0A\uFF0C\u95EE\u9898\u5728\u300C\u4F60\u7684\u7F51\u7EDC \u2192 Cloudflare \u8FB9\u7F18\u300D\u8FD9\u4E00\u6BB5\u3002":"\u670D\u52A1\u7AEF\u5B58\u5728\u5931\u8D25\u9879\uFF0C\u8BF7\u628A\u672C\u9875\u5185\u5BB9\u53CD\u9988\u3002",s}async function he(e,t,n){let r=Date.now();try{let s=await n();e.checks.push({name:t,ok:!0,detail:s||"OK",ms:Date.now()-r})}catch(s){e.checks.push({name:t,ok:!1,detail:s&&s.message?s.message:String(s),ms:Date.now()-r})}}var an=T(()=>{D();Z();pe();ve();j()});var un={};mn(un,{cmpVersions:()=>ye,deployToCloudflare:()=>ln,handleAuth:()=>Ze,handleLogs:()=>nt,handleStats:()=>tt,handleSync:()=>qe,handleTools:()=>rt,handleUpdate:()=>ur,handleUsers:()=>et});function we(e,t,n){let r=e.headers.get("authorization")||e.headers.get("x-api-key")||"";return r.startsWith("Bearer ")?r.slice(7).trim():r?r.trim():t.searchParams.get("key")?t.searchParams.get("key"):n&&n.key?String(n.key):""}function ge(e,t){return!!t&&t===e.masterKey}function ir(e,t){return!!t&&Array.isArray(e.panelApiKeys)&&e.panelApiKeys.some(n=>n.key===t)}function te(e,t){return ge(e,t)||ir(e,t)}function cr(e,t){let n={...e};if(!t)for(let r of["masterKey","panelApiKeys","cfApiToken","cfAccountId","tgToken","tgChatId","tgAdminId"])n[r]&&(n[r]="[PROTECTED]");return n}async function Ze(e,t,n,r,s){let o=await S(r);await L(r);let a=n&&n.key||"";if(!te(o,a))return s.waitUntil(E(r,"Auth Failed",`\u6765\u81EA ${e.headers.get("cf-connecting-ip")||"unknown"}`)),g({success:!1,message:"\u5BC6\u94A5\u9519\u8BEF"},401);let c=[{id:"default",name:o.name||"\u9ED8\u8BA4",sync:`${t.origin}/${o.apiRoute}`},...(o.users||[]).map(u=>({id:u.id,name:u.name,sync:`${t.origin}/${o.apiRoute}?sub=${encodeURIComponent(u.name)}`}))],i={};for(let u of c){let l=F(u.id);i[u.id]=l}return s.waitUntil(E(r,"Auth Success",ge(o,a)?"\u4E3B\u5BC6\u94A5\u767B\u5F55":"API Key \u767B\u5F55")),g({success:!0,config:cr(o,ge(o,a)),locked:o.__locked||[],profiles:c,usage:i,version:k,network:{ip:e.headers.get("cf-connecting-ip")||"",colo:e.cf?.colo||"",loc:[e.cf?.city,e.cf?.country].filter(Boolean).join(", ")}})}async function qe(e,t,n,r,s){let o=await S(r),a=n&&n.key||"";if(!te(o,a))return g({success:!1,message:"\u672A\u6388\u6743"},401);let c=n?.config||{},i={...o,...c};i.masterKey=c.masterKey&&ge(o,a)?String(c.masterKey):o.masterKey,i.panelApiKeys=o.panelApiKeys;for(let l of["masterKey","panelApiKeys","cfApiToken","cfAccountId","tgToken","tgChatId","tgAdminId"])i[l]==="[PROTECTED]"&&(i[l]=o[l]);i.users=Array.isArray(c.users)?c.users:o.users,i.apiRoute=String(c.apiRoute||o.apiRoute||"sub").replace(/^\/|\/$/g,""),i.createdAt=o.createdAt||Date.now();let u=null;if(c.nameStrategy){let l=Jt(lr(c.nameStrategy));l&&(u=`\u672A\u77E5\u547D\u540D\u6807\u7B7E ${l}`)}return await B(r,i),s.waitUntil(E(r,"Panel Updated","\u914D\u7F6E\u5DF2\u4FDD\u5B58")),g({success:!0,newRoute:i.apiRoute,tagWarning:u})}function lr(e){return["default","prefix-user-port","type-user-port","user-port","ip","host-port-user"].includes(e)?"":e}async function et(e,t,n,r,s){let o=await S(r);await L(r);let a=we(e,t,n);if(!te(o,a))return g({success:!1,message:"\u672A\u6388\u6743"},401);let c=t.searchParams.get("sub"),i=t.searchParams.get("id"),u=t.searchParams.get("action");if(e.method==="GET"&&!i){let l=(t.searchParams.get("q")||"").toLowerCase(),p=(o.users||[]).map(f=>ee(f)),d=l?p.filter(f=>`${f.name} ${f.id} ${f.notes||""}`.toLowerCase().includes(l)):p;return g({success:!0,users:d,total:d.length})}if(e.method==="GET"&&i){let l=(o.users||[]).find(p=>p.id===i);return l?g({success:!0,user:ee(l),subscriptionUrl:`${t.origin}/${o.apiRoute}?sub=${encodeURIComponent(l.name||l.id)}`}):g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404)}if(e.method==="POST"&&!i&&!u){let l={...wt()};return l.id=It(),l.uuid=He(n?.uuid)?n.uuid:await Ee(l.id+Date.now()),l.name=String(n?.name||"").trim()||l.id.slice(0,8),l.notes=n?.notes||"",l.limitTotalGb=n?.limitTotalGb?Number(n.limitTotalGb):null,l.limitDailyGb=n?.limitDailyGb?Number(n.limitDailyGb):null,l.expiryMs=n?.expiryDays?Date.now()+Number(n.expiryDays)*864e5:null,l.maxConfigs=n?.maxConfigs?Number(n.maxConfigs):null,l.connLimit=n?.connLimit?Number(n.connLimit):null,l.proxyIp=n?.proxyIp||"",l.cleanIp=n?.cleanIp||"",l.ports=n?.ports||"",l.mode=n?.mode||"",l.status="active",l.createdAt=Date.now(),!l.limitTotalGb&&o.limitTotalGb&&(l.limitTotalGb=Number(o.limitTotalGb)),!l.limitDailyGb&&o.limitDailyGb&&(l.limitDailyGb=Number(o.limitDailyGb)),!l.expiryMs&&o.expiryDays&&(l.expiryMs=Date.now()+Number(o.expiryDays)*864e5),o.users=o.users||[],o.users.push(l),await B(r,o),s.waitUntil(E(r,"User Created",`${l.name}\uFF08${l.id.slice(0,8)}\uFF09`)),g({success:!0,user:ee(l),subscriptionUrl:`${t.origin}/${o.apiRoute}?sub=${encodeURIComponent(l.name)}`},201)}if(e.method==="PUT"&&i){let l=(o.users||[]).findIndex(f=>f.id===i);if(l<0)return g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404);let p={...o.users[l]},d=(f,h)=>{h!==void 0&&(p[f]=h)};return d("name",n?.name),d("notes",n?.notes),n?.limitTotalGb!==void 0&&(p.limitTotalGb=n.limitTotalGb?Number(n.limitTotalGb):null),n?.limitDailyGb!==void 0&&(p.limitDailyGb=n.limitDailyGb?Number(n.limitDailyGb):null),n?.expiryDays!==void 0&&(p.expiryMs=n.expiryDays?Date.now()+Number(n.expiryDays)*864e5:null),n?.maxConfigs!==void 0&&(p.maxConfigs=n.maxConfigs?Number(n.maxConfigs):null),n?.connLimit!==void 0&&(p.connLimit=n.connLimit?Number(n.connLimit):null),d("proxyIp",n?.proxyIp),d("cleanIp",n?.cleanIp),d("ports",n?.ports),d("mode",n?.mode),n?.status&&(p.status=n.status),n?.uuid&&He(n.uuid)&&(p.uuid=n.uuid),o.users[l]=p,await B(r,o),s.waitUntil(E(r,"User Updated",`${p.name}\uFF08${i.slice(0,8)}\uFF09`)),g({success:!0,user:ee(p)})}if(e.method==="DELETE"&&i){let l=(o.users||[]).length;return o.users=(o.users||[]).filter(p=>p.id!==i),o.users.length===l?g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404):(await B(r,o),s.waitUntil(E(r,"User Deleted",i.slice(0,8))),g({success:!0,deleted:i}))}if(e.method==="POST"&&i&&u==="toggle"){let l=(o.users||[]).find(p=>p.id===i);return l?(l.status=l.status==="active"?"paused":"active",l.status==="active"&&(l.disabledReason="",l.disabledAt=0),await B(r,o),s.waitUntil(E(r,"User Toggled",`${l.name} \u2192 ${l.status}`)),g({success:!0,user:ee(l)})):g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404)}return e.method==="POST"&&i&&u==="reset"?(Dt(i),await H(r,!0),s.waitUntil(E(r,"Traffic Reset",i.slice(0,8))),g({success:!0,message:"\u6D41\u91CF\u5DF2\u91CD\u7F6E"})):g({success:!1,message:"Invalid request"},400)}function ee(e){let t=F(e.id),n=t.up+t.down,r=O(e.limitTotalGb),s=t.dailyUp+t.dailyDown,o=O(e.limitDailyGb),a=e.status||"active";return a==="active"&&(e.expiryMs&&Date.now()>e.expiryMs?a="expired":(r>0&&n>=r||o>0&&s>=o)&&(a="disabled")),{...e,status:a,usage:{totalBytes:n,totalText:U(n),limitBytes:r,limitText:r>0?U(r):"\u4E0D\u9650",dailyBytes:s,dailyText:U(s),dailyLimitText:o>0?U(o):"\u4E0D\u9650",progress:r>0?Math.min(100,Math.round(n/r*100)):0,connects:t.connects||0,last:t.last||0}}}async function tt(e,t,n,r){let s=await S(r);await L(r);let o=we(e,t,n);if(!te(s,o))return g({success:!1,message:"\u672A\u6388\u6743"},401);let a=s.users||[],c=0,i=0,u={total:a.length,active:0,paused:0,expired:0,disabled:0};for(let p of a){let d=ee(p);c+=d.usage.totalBytes,i+=d.usage.dailyBytes,u[d.status==="active"?"active":d.status==="paused"?"paused":d.status==="expired"?"expired":"disabled"]++}let l=F("default");return c+=l.up+l.down,i+=l.dailyUp+l.dailyDown,g({success:!0,stats:{users:u,traffic:{totalBytes:c,totalText:U(c),dailyBytes:i,dailyText:U(i)},system:{version:k,isPaused:!!s.isPaused,hasKV:W(r),mode:s.mode,ports:s.ports}}})}async function nt(e,t,n,r){let s=await S(r),o=we(e,t,n);if(!te(s,o))return g({success:!1,message:"\u672A\u6388\u6743"},401);let a=await Ct(r);return g({success:!0,logs:a})}async function rt(e,t,n,r){let s=await S(r),o=we(e,t,n);if(!te(s,o))return g({success:!1,message:"\u672A\u6388\u6743"},401);let a=n?.op;if(a==="smart-clean-ip"){let c=await Wt(yt,s.customDns);return g({success:!0,ips:c})}if(a==="preview-preferred"){let c=await ke(s,20),i=await fe(s);return g({success:!0,list:c,stats:{total:c.length,onlineCount:i.length,onlineOk:i.length>0,allCloudflare:c.filter(u=>Re(u.ip)).length}})}if(a==="proxyip-preview"){let c=String(n?.colo||""),i={...s};n?.region&&(i.proxyIpMode="region",i.proxyIpRegion=String(n.region).toUpperCase());let l=le(i,c).slice(0,8).map(p=>{let d=ue(p,443);return`${d.host}:${d.port}`});return g({success:!0,mode:i.proxyIpMode,region:i.proxyIpRegion||"",colo:c,list:l})}if(a==="selftest"){let c=await on(r,s,String(n?.colo||""),new URL(e.url).hostname);return g({success:!0,result:c})}if(a==="ping"){let c=String(n?.target||"").trim();if(!c)return g({success:!1,message:"\u7F3A\u5C11\u76EE\u6807"},400);let i=Date.now(),u=await b(`https://${c}/cdn-cgi/trace`,{},6e3),l=Date.now()-i;return g({success:!!u,ms:l,colo:u?.headers?.get("cf-ray")?.split("-")?.[1]||""})}return g({success:!1,message:"\u672A\u77E5\u64CD\u4F5C"},400)}async function ur(e,t,n,r,s){let o=await S(r),a=we(e,t,n);if(!ge(o,a))return g({success:!1,message:"\u9700\u8981\u4E3B\u5BC6\u94A5"},401);let c=n?.action||"check",i=String(o.githubRepo||"").replace(/^https?:\/\/github\.com\//,"").replace(/\/$/,"");if(!i)return g({success:!1,message:"\u672A\u914D\u7F6E GitHub \u4ED3\u5E93"},400);let u=!!(o.cfAccountId&&o.cfApiToken&&(o.deployTarget==="pages"?o.cfPagesProject:o.cfWorkerName));if(c==="check"){let l=await cn(i);return g({success:!0,current:k,latest:l||k,updateAvailable:ye(k,l||"0")<0,canDeploy:u})}if(c==="deploy"){if(!u)return g({success:!1,message:"Cloudflare \u51ED\u636E\u672A\u914D\u7F6E\u5B8C\u6574"},400);let l=n?.code,p=n?.version||"";if(!l){let f=await cn(i);if(!n?.force&&ye(k,f||"0")>=0)return g({success:!1,message:"\u8FDC\u7A0B\u7248\u672C\u4E0D\u6BD4\u5F53\u524D\u65B0\uFF0C\u8BF7\u52FE\u9009\u5F3A\u5236\u8986\u76D6"},400);let h=await pr(i,o.autoUpdateFormat);if(!h)return g({success:!1,message:"\u62C9\u53D6\u8FDC\u7A0B\u4EE3\u7801\u5931\u8D25"},502);l=h,p=f}let d=await ln(o,l);return d.ok?(s.waitUntil(E(r,"Auto-Update Success",`\u5DF2\u66F4\u65B0\u5230 ${p||"remote"}`)),g({success:!0,message:`\u5DF2\u66F4\u65B0\u5230 ${p||"remote"}`,newVersion:p})):(s.waitUntil(E(r,"Auto-Update Failed",d.message)),g({success:!1,message:d.message},502))}return g({success:!1,message:"\u672A\u77E5\u64CD\u4F5C"},400)}function ye(e,t){let n=String(e||"0").split(".").map(Number),r=String(t||"0").split(".").map(Number);for(let s=0;s<Math.max(n.length,r.length);s++){let o=n[s]||0,a=r[s]||0;if(o!==a)return o<a?-1:1}return 0}async function cn(e){let t=await b(`https://raw.githubusercontent.com/${e}/main/version`,{},8e3);if(t&&t.ok){let r=(await t.text()).trim();if(r)return r}let n=await b(`https://raw.githubusercontent.com/${e}/main/dist/_worker.js`,{},1e4);if(n&&n.ok){let r=(await n.text()).match(/CURRENT_VERSION\s*=\s*["']([^"']+)["']/);if(r)return r[1]}return null}async function pr(e,t="plain"){let n=t==="encoded"?[`https://raw.githubusercontent.com/${e}/main/dist/_worker.encode.js`,`https://raw.githubusercontent.com/${e}/main/dist/_worker.js`]:[`https://raw.githubusercontent.com/${e}/main/dist/_worker.js`];for(let r of n){let s=await b(r,{},15e3);if(s&&s.ok){let o=await s.text();if(o&&o.length>1e3)return o}}return null}async function ln(e,t){return e.deployTarget==="pages"?fr(e,t):dr(e,t)}async function dr(e,t){let n=`https://api.cloudflare.com/client/v4/accounts/${e.cfAccountId}/workers/scripts/${e.cfWorkerName}`,r={Authorization:`Bearer ${e.cfApiToken}`},s=[];try{let u=await b(`${n}/settings`,{headers:r},1e4);u&&u.ok&&(s=(await u.json())?.result?.bindings||[])}catch{}let o={main_module:"_worker.js",compatibility_date:"2025-06-01",compatibility_flags:["nodejs_compat"],bindings:s},a=new FormData;a.append("metadata",new Blob([JSON.stringify(o)],{type:"application/json"})),a.append("_worker.js",new Blob([t],{type:"application/javascript+module"}));let c=await b(n,{method:"PUT",headers:r,body:a},3e4);if(!c)return{ok:!1,message:"\u8BF7\u6C42 Cloudflare \u5931\u8D25"};let i=await c.json().catch(()=>({}));return!c.ok||!i.success?{ok:!1,message:i?.errors?.[0]?.message||`HTTP ${c.status}`}:{ok:!0}}async function fr(e,t){let n=`https://api.cloudflare.com/client/v4/accounts/${e.cfAccountId}/pages/projects/${e.cfPagesProject}/deployments`,r={Authorization:`Bearer ${e.cfApiToken}`},s=await crypto.subtle.digest("SHA-1",new TextEncoder().encode(t)),o=[...new Uint8Array(s)].map(l=>l.toString(16).padStart(2,"0")).join(""),a={"_worker.js":`/${o}`},c=new FormData;c.append("manifest",new Blob([JSON.stringify(a)],{type:"application/json"})),c.append(`/${o}`,new Blob([t],{type:"application/javascript+module"}));let i=await b(n,{method:"POST",headers:r,body:c},3e4);if(!i)return{ok:!1,message:"\u8BF7\u6C42 Cloudflare \u5931\u8D25"};let u=await i.json().catch(()=>({}));return!i.ok||!u.success?{ok:!1,message:u?.errors?.[0]?.message||`HTTP ${i.status}`}:{ok:!0}}var st=T(()=>{Z();Se();ve();pe();an();Oe();D();j()});Z();Ue();pe();Z();D();j();var Dn=8192,Cn=5e3;function Rn(e){let t=new Map,n=new Map,r=(o,a,c)=>{if(a){let i=se(a);i&&t.set(i.join(","),o)}c&&n.set(Xe(c),o)};for(let o of e.users||[])o.uuid&&r(o,o.uuid,o.password||o.uuid);let s={id:"default",uuid:e.uuid,name:e.name||"\u9ED8\u8BA4",status:"active",isMain:!0,limitTotalGb:e.limitTotalGb??null,limitDailyGb:e.limitDailyGb??null,expiryMs:null,connLimit:null,maxConfigs:e.maxConfigs??null,proxyIp:"",cleanIp:"",ports:"",mode:"",createdAt:0};return r(s,e.uuid,e.trojanPassword||e.uuid),{byUuid:t,byHash:n,main:s}}function kn(e){if(!e)return{ok:!1,reason:"\u672A\u6388\u6743"};if(e.status==="paused")return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u6682\u505C"};if(e.status==="disabled")return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u7981\u7528"};if(e.status==="expired")return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u8FC7\u671F"};if(e.expiryMs&&Date.now()>e.expiryMs)return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u5230\u671F"};let t=F(e.id),n=O(e.limitTotalGb);if(n>0&&t.up+t.down>=n)return{ok:!1,reason:"\u603B\u6D41\u91CF\u5DF2\u7528\u5C3D"};let r=O(e.limitDailyGb);return r>0&&t.dailyUp+t.dailyDown>=r?{ok:!1,reason:"\u4ECA\u65E5\u6D41\u91CF\u5DF2\u7528\u5C3D"}:{ok:!0}}var de=new Map;function vn(e){let t=(de.get(e)||0)+1;return de.set(e,t),t}function On(e){let t=(de.get(e)||1)-1;t<=0?de.delete(e):de.set(e,t)}function Ln(e,t){let n=!1;return new ReadableStream({start(r){t&&t.byteLength&&r.enqueue(new Uint8Array(t).buffer),e.addEventListener("message",s=>{if(!n)try{r.enqueue(s.data)}catch{}}),e.addEventListener("close",()=>{if(!n){n=!0;try{r.close()}catch{}}}),e.addEventListener("error",s=>{if(!n){n=!0;try{r.error(s)}catch{}}})},cancel(){n=!0;try{e.close()}catch{}}})}function Nn(e,t){let n=t.searchParams.get("p")||t.searchParams.get("proxyip")||"",r=(t.searchParams.get("wk")||"").toUpperCase(),s=t.searchParams.get("s")||"",o=t.searchParams.get("rm")||"";if(!n&&!r&&!s&&!o)return e;let a={...e};return n?(a.customProxyIp=n,a.proxyIpMode="custom"):r&&(a.proxyIpRegion=r,a.proxyIpMode="region"),o&&(a.rm=String(o).toLowerCase()!=="no"),s&&(a.outboundProxy=s,a.__outbound=ie(s)),a}async function Lt(e,t,n){let r=await S(t);await L(t),r.__outbound||(r.__outbound=ie(r.outboundProxy));let s=null;try{s=new URL(e.url)}catch{s=null}let o=s?Nn(r,s):r;if(o.isPaused)return new Response("service paused",{status:503});let a=Rn(o),c=e?.cf?.colo||"",i=new WebSocketPair,u=i[0],l=i[1];try{l.accept({allowHalfOpen:!0})}catch{l.accept()}l.binaryType="arraybuffer";let p=Rt(e),f=Ln(l,p&&p.byteLength<=Dn?p:null).getReader(),h={user:null,header:null,remoteHost:"",remotePort:0,isUDP:!1};return n.waitUntil($n(f,l,o,h,a,t,c).catch(m=>{console.error("ws pump error",m);try{l.close()}catch{}})),new Response(null,{status:101,webSocket:u,headers:{"Sec-WebSocket-Extensions":""}})}async function $n(e,t,n,r,s,o,a){let c=null,i=null,u=!1,l=!1,p=()=>{l||(l=!0,On(h()))},d=m=>{try{t.readyState===1&&t.send(m)}catch{}},f=()=>{try{t.close()}catch{}},h=()=>r.user?.id||"default";try{for(;;){let{value:m,done:x}=await e.read();if(x)break;if(!(!m||!m.byteLength)){if(!r.header){let w=Mn(m,s,r);if(!w.ok){f();return}if(!kn(r.user).ok){w.reply&&d(w.reply),f();return}let y=vn(h());if(r.user?.connLimit&&y>r.user.connLimit){p(),f();return}if(Ut(h()),r.isUDP){await Gn(r,w.payload,d,n,a),p(),f();return}let _=await Nt(r.remoteHost,r.remotePort,n,w.payload,a);if(!_){p(),f();return}c=_.socket,i=_.writer,w.reply&&d(w.reply);let R=h();c.readable.pipeThrough(new TransformStream({transform(A,C){G(R,0,A.byteLength||A.length||0),C.enqueue(A)}})).pipeTo(new WritableStream({write(A){d(A)},close(){p(),f()},abort(){p(),f()}})).catch(()=>{p(),f()});continue}i&&(G(h(),m.byteLength||m.length||0,0),await i.write(m))}}u=!0}catch(m){console.error("pump error",m)}finally{if(i)try{await i.close()}catch{}c&&q(c),p(),u||f(),await H(o,!0)}}function Mn(e,t,n){let r=new Uint8Array(e);if(r.length>=58&&r[56]===13&&r[57]===10){let s=new TextDecoder().decode(r.slice(0,56)).toLowerCase(),o=t.byHash.get(s);if(o)try{let a=vt(e,s);return n.header=a,n.user=o,n.remoteHost=a.address,n.remotePort=a.port,n.isUDP=!1,{ok:!0,payload:r.slice(a.rawIndex),reply:null}}catch{return{ok:!1}}}try{let s=Te(e),o=t.byUuid.get(s.uuidBytes.join(","));return o?(n.header=s,n.user=o,n.remoteHost=s.address,n.remotePort=s.port,n.isUDP=s.command===kt,{ok:!0,payload:r.slice(s.rawIndex),reply:new Uint8Array([s.version,0])}):{ok:!1}}catch{return{ok:!1}}}async function Nt(e,t,n,r,s){let o=De(e,t,n,s);for(let a of o){let c=null;try{c=await Ce(a,n),c.opened&&await oe(c.opened,Cn,`\u8FDE\u63A5 ${a.label} \u8D85\u65F6`);let i=c.writable.getWriter();return r&&r.byteLength&&await i.write(r),{socket:c,writer:i,label:a.label}}catch{c&&q(c);continue}}return null}async function Gn(e,t,n,r,s){let o=t&&t.byteLength>2?t.slice(2):t,a=e.user?.id||"default";G(a,o?.byteLength||0,0);try{let c=await Nt(gt,53,r,o,s);if(!c)return;let i=c.socket.readable.getReader(),u=[],l=0;for(;;){let{value:h,done:m}=await i.read();if(m||(u.push(new Uint8Array(h)),l+=h.byteLength,G(a,0,h.byteLength),l>=2))break}try{i.releaseLock()}catch{}q(c.socket);let p=new Uint8Array(l),d=0;for(let h of u)p.set(h,d),d+=h.byteLength;let f=new Uint8Array(p.length+2);f[0]=p.length>>8,f[1]=p.length&255,f.set(p,2),n(f.buffer)}catch{}}Ue();pe();Z();D();async function $t(e,t,n){let r=await S(t);if(await L(t),r.__outbound||(r.__outbound=ie(r.outboundProxy)),r.isPaused)return new Response("paused",{status:503});let s=e?.cf?.colo||"",o=e.body;if(!o)return new Response("bad request",{status:400});let a=o.getReader(),c=null,i=null,u="default",l=!1,p=null,d=()=>{if(i){try{i.close()}catch{}i=null}c&&(q(c),c=null)},f=new ReadableStream({async start(h){try{for(;;){let{value:m,done:x}=await a.read();if(x)break;if(!m||!m.byteLength)continue;let w=new Uint8Array(m);if(!l){let P=Fn(w,r);if(!P){h.close();return}u=P.user.id;let y=await jn(P.host,P.port,r,w.slice(P.rawIndex),s);if(!y){h.close();return}c=y.socket,i=y.writer,l=!0,p=c.readable.pipeTo(new WritableStream({write(_){G(u,0,_.byteLength||0),h.enqueue(_)},close(){try{h.close()}catch{}}})).catch(()=>{try{h.close()}catch{}});continue}i&&(G(u,m.byteLength||0,0),await i.write(m))}}catch(m){console.error("xhttp error",m);try{h.close()}catch{}}},cancel(){d()}});return n.waitUntil((async()=>{try{p&&await p}catch{}finally{d(),await H(t,!0)}})()),new Response(f,{status:200,headers:{"content-type":"application/grpc","user-agent":"Go-http-client/2.0","x-accel-buffering":"no","cache-control":"no-store"}})}function Fn(e,t){if(e.length<24)return null;let n=e.slice(1,17),r=null;for(let o of t.users||[]){let a=se(o.uuid);if(a&&a.join(",")===n.join(",")){r=o;break}}let s=se(t.uuid);if(!r&&s&&s.join(",")===n.join(",")&&(r={id:"default",name:t.name||"\u9ED8\u8BA4",status:"active"}),!r)return null;try{let o=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength),a=Te(o);return a.command!==1?null:{user:r,host:a.address,port:a.port,rawIndex:a.rawIndex}}catch{return null}}async function jn(e,t,n,r,s){for(let o of De(e,t,n,s))try{let a=await Ce(o,n),c=a.writable.getWriter();return r&&r.byteLength&&await c.write(r),{socket:a,writer:c}}catch{continue}return null}Oe();Oe();var me=e=>Qe(e);function rr(e){let t={name:e.name,server:e.address,port:e.port,udp:!1};return e.type==="trojan"?{...t,type:"trojan",password:e.password,sni:e.sni,"client-fingerprint":e.fp,network:"ws",...e.alpn?{alpn:e.alpn.split(",")}:{},"ws-opts":tn(e)}:{...t,type:"vless",uuid:e.uuid,tls:e.tls,servername:e.sni,"client-fingerprint":e.fp,network:"ws",...e.alpn?{alpn:e.alpn.split(",")}:{},"ws-opts":tn(e)}}function tn(e){let t={path:me(e),headers:{Host:e.host}};return e.earlyData&&(t["max-early-data"]=2560,t["early-data-header-name"]="Sec-WebSocket-Protocol"),t}function X(e){return`"${String(e).replace(/"/g,'\\"')}"`}function nn(e,t={}){let n=e.map(o=>o.name),r=e.map(rr),s=[];s.push("mixed-port: 7890"),s.push("allow-lan: false"),s.push("mode: rule"),s.push("log-level: warning"),s.push("ipv6: true"),s.push("external-controller: 127.0.0.1:9090"),s.push("dns:"),s.push("  enable: true"),s.push("  ipv6: true"),s.push("  enhanced-mode: fake-ip"),s.push("  fake-ip-range: 198.18.0.1/16"),s.push("  nameserver:"),s.push("    - https://1.1.1.1/dns-query"),s.push("    - https://8.8.8.8/dns-query"),s.push("  fallback:"),s.push("    - https://dns.google/dns-query"),s.push("    - https://cloudflare-dns.com/dns-query"),s.push("proxies:");for(let o of r){let a=o.servername||o.sni||"",c=o["client-fingerprint"]||o.fp||"chrome";s.push(`  - { name: ${X(o.name)}, type: ${o.type}, server: ${o.server}, port: ${o.port}, udp: false${o.type==="trojan"?`, password: ${X(o.password)}, sni: ${a}`:`, uuid: ${o.uuid}, tls: ${o.tls}, servername: ${a}`}, network: ws, client-fingerprint: ${c}${o.alpn?`, alpn: [${o.alpn.map(X).join(", ")}]`:""}, ws-opts: { path: ${X(o["ws-opts"].path)}, headers: { Host: ${X(o["ws-opts"].headers.Host)} }${o["ws-opts"]["max-early-data"]?`, max-early-data: ${o["ws-opts"]["max-early-data"]}, early-data-header-name: ${o["ws-opts"]["early-data-header-name"]}`:""} } }`)}return s.push("proxy-groups:"),s.push(`  - { name: "\u{1F680} \u8282\u70B9\u9009\u62E9", type: select, proxies: [${n.map(X).join(", ")}, "DIRECT"] }`),s.push(`  - { name: "\u267B\uFE0F \u81EA\u52A8\u9009\u62E9", type: url-test, proxies: [${n.map(X).join(", ")}], url: "https://www.gstatic.com/generate_204", interval: 300 }`),s.push('  - { name: "\u{1F3AF} \u5168\u7403\u76F4\u8FDE", type: select, proxies: ["DIRECT"] }'),s.push("rules:"),s.push("  - GEOIP,lan,\u{1F3AF} \u5168\u7403\u76F4\u8FDE,no-resolve"),s.push("  - MATCH,\u{1F680} \u8282\u70B9\u9009\u62E9"),s.join(`
`)}function sr(e,t){let n=e.tls?{enabled:!0,server_name:e.sni,utls:{enabled:!0,fingerprint:e.fp},...e.alpn?{alpn:e.alpn.split(",")}:{}}:{enabled:!1,server_name:e.sni,utls:{enabled:!0,fingerprint:e.fp}};return e.type==="trojan"?{type:"trojan",tag:e.name,server:e.address,server_port:e.port,password:e.password,tls:n,transport:{type:"ws",path:me(e),headers:{Host:e.host},...e.earlyData?{max_early_data:2560,early_data_header_name:"Sec-WebSocket-Protocol"}:{}}}:e.type==="xhttp"?{type:"vless",tag:e.name,server:e.address,server_port:e.port,uuid:e.uuid,packet_encoding:"xudp",tls:n,transport:{type:"xhttp",mode:"stream-one",host:e.host,path:me(e),headers:{Host:e.host}}}:{type:"vless",tag:e.name,server:e.address,server_port:e.port,uuid:e.uuid,packet_encoding:"xudp",tls:n,transport:{type:"ws",path:me(e),headers:{Host:e.host},...e.earlyData?{max_early_data:2560,early_data_header_name:"Sec-WebSocket-Protocol"}:{}}}}function rn(e){let t=e.map((r,s)=>sr(r,s)),n=t.map(r=>r.tag);return JSON.stringify({log:{level:"info",timestamp:!0},dns:{servers:[{tag:"remote",address:"https://1.1.1.1/dns-query",detour:"select"},{tag:"local",address:"223.5.5.5",detour:"direct"}],rules:[{outbound:["any"],server:"local"}],final:"remote",strategy:"prefer_ipv4"},inbounds:[{type:"mixed",tag:"mixed-in",listen:"127.0.0.1",listen_port:2080}],outbounds:[...t,{type:"selector",tag:"select",outbounds:["auto",...n]},{type:"urltest",tag:"auto",outbounds:n,url:"https://www.gstatic.com/generate_204",interval:"5m"},{type:"direct",tag:"direct"},{type:"block",tag:"block"},{type:"dns",tag:"dns-out"}],route:{rules:[{ip_is_private:!0,outbound:"direct"},{protocol:"dns",action:"hijack-dns"}],final:"select",auto_detect_interface:!0},experimental:{cache_file:{enabled:!0,path:"cache.db",store_fakeip:!0},clash_api:{external_controller:"127.0.0.1:9090"}}},null,2)}function or(e){let t={path:me(e),headers:{Host:e.host},...e.earlyData?{maxEarlyData:2560,earlyDataHeaderName:"Sec-WebSocket-Protocol"}:{}};return e.type==="trojan"?{protocol:"trojan",tag:e.name,settings:{servers:[{address:e.address,port:e.port,password:e.password,level:0}]},streamSettings:{network:"ws",security:e.tls?"tls":"none",...e.tls?{tlsSettings:{serverName:e.sni,fingerprint:e.fp,...e.alpn?{alpn:e.alpn.split(",")}:{}}}:{},wsSettings:t}}:{protocol:"vless",tag:e.name,settings:{vnext:[{address:e.address,port:e.port,users:[{id:e.uuid,encryption:"none",level:0}]}]},streamSettings:{network:"ws",security:e.tls?"tls":"none",...e.tls?{tlsSettings:{serverName:e.sni,fingerprint:e.fp,...e.alpn?{alpn:e.alpn.split(",")}:{}}}:{},wsSettings:t}}}function sn(e){return JSON.stringify({log:{loglevel:"warning"},dns:{servers:["https+local://1.1.1.1/dns-query","223.5.5.5"]},inbounds:[{tag:"socks-in",port:10808,listen:"127.0.0.1",protocol:"socks",settings:{auth:"noauth",udp:!0}},{tag:"http-in",port:10809,listen:"127.0.0.1",protocol:"http",settings:{auth:"noauth"}}],outbounds:e.map(or),routing:{domainStrategy:"AsIs",rules:[{type:"field",outboundTag:"direct",ip:["geoip:private"]},{type:"field",outboundTag:"direct",domain:["geosite:cn"]}]}},null,2)}st();Se();var pn=`<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>CFSub \u7BA1\u7406\u9762\u677F</title>
<style>
:root{
  --bg:#0b1120; --bg2:#0f172a; --card:#111c33; --card2:#16223c; --bd:#1e2b47;
  --fg:#e2e8f0; --mut:#94a3b8; --acc:#38bdf8; --ok:#34d399; --warn:#fbbf24; --err:#f87171;
  --r:14px;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{background:var(--bg);color:var(--fg);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;font-size:14px;line-height:1.6}
a{color:var(--acc);text-decoration:none}
code,.mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px}
::-webkit-scrollbar{width:8px;height:8px}
::-webkit-scrollbar-thumb{background:#243354;border-radius:8px}

/* ---------- \u767B\u5F55 ---------- */
#login{position:fixed;inset:0;background:radial-gradient(1200px 600px at 50% -10%,#1e3a5f33,transparent),var(--bg);z-index:99;display:flex;align-items:center;justify-content:center}
#login .box{width:380px;max-width:92vw;background:var(--card);border:1px solid var(--bd);border-radius:18px;padding:32px}
#login h2{margin:0 0 6px;font-size:22px}
#login p{color:var(--mut);font-size:13px;margin:0 0 20px}

/* ---------- \u5E03\u5C40 ---------- */
#app{display:none;min-height:100vh}
.sidebar{position:fixed;left:0;top:0;bottom:0;width:210px;background:var(--bg2);border-right:1px solid var(--bd);padding:18px 12px;overflow-y:auto;z-index:10}
.brand{font-size:17px;font-weight:700;margin-bottom:4px;display:flex;align-items:center;gap:8px}
.brand span{font-size:11px;color:var(--mut);font-weight:400}
.nav{display:flex;flex-direction:column;gap:2px;margin-top:18px}
.nav button{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:none;border:0;color:var(--mut);padding:9px 12px;border-radius:10px;cursor:pointer;font-size:14px}
.nav button:hover{background:#1b2942;color:var(--fg)}
.nav button.on{background:linear-gradient(90deg,#0ea5e933,transparent);color:var(--fg);font-weight:600;border-left:2px solid var(--acc)}
.main{margin-left:210px;padding:22px 26px 90px;max-width:1180px}
h1.page{font-size:20px;margin:0 0 18px}
h3.sec{font-size:14px;margin:22px 0 10px;color:var(--acc);border-left:3px solid var(--acc);padding-left:8px}

/* ---------- \u7EC4\u4EF6 ---------- */
.card{background:var(--card);border:1px solid var(--bd);border-radius:var(--r);padding:16px;margin-bottom:14px}
.grid{display:grid;gap:12px}
.g4{grid-template-columns:repeat(4,1fr)}
.g3{grid-template-columns:repeat(3,1fr)}
.g2{grid-template-columns:repeat(2,1fr)}
@media(max-width:900px){.g4,.g3,.g2{grid-template-columns:repeat(2,1fr)}}
@media(max-width:620px){
  .sidebar{position:static;width:auto;display:flex;overflow-x:auto;padding:10px}
  .nav{flex-direction:row;margin-top:0}
  .main{margin-left:0;padding:16px 14px 90px}
  .g4,.g3,.g2{grid-template-columns:1fr}
}
.stat{background:var(--card2);border:1px solid var(--bd);border-radius:12px;padding:14px}
.stat .k{font-size:12px;color:var(--mut)}
.stat .v{font-size:22px;font-weight:700;margin-top:2px}
.stat .v small{font-size:12px;font-weight:400;color:var(--mut)}

label.f{display:block;font-size:12px;color:var(--mut);margin:12px 0 5px}
input,select,textarea{width:100%;background:#0b1120;border:1px solid var(--bd);color:var(--fg);border-radius:9px;padding:9px 11px;font-size:13px;font-family:inherit}
textarea{min-height:90px;font-family:ui-monospace,monospace;font-size:12px;resize:vertical}
input:focus,select:focus,textarea:focus{outline:none;border-color:var(--acc)}
input[readonly]{color:var(--mut)}
.chk{display:flex;align-items:center;gap:8px;margin:10px 0;font-size:13px}
.chk input{width:auto}
.hint{font-size:11px;color:var(--mut);margin-top:4px}
.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.row>*{flex:1;min-width:150px}

button.btn{background:var(--acc);color:#04202e;border:0;border-radius:9px;padding:9px 16px;font-size:13px;font-weight:600;cursor:pointer}
button.btn:hover{opacity:.88}
button.gh{background:transparent;color:var(--fg);border:1px solid var(--bd)}
button.gh:hover{background:#1b2942}
button.dg{background:transparent;color:var(--err);border:1px solid #7f1d1d}
button.sm{padding:5px 10px;font-size:12px;border-radius:7px}
button:disabled{opacity:.5;cursor:not-allowed}

table{width:100%;border-collapse:collapse;font-size:13px}
th,td{text-align:left;padding:9px 10px;border-bottom:1px solid var(--bd)}
th{color:var(--mut);font-weight:500;font-size:12px}
tr:hover td{background:#16223c55}

.tag{display:inline-block;padding:2px 8px;border-radius:999px;font-size:11px;border:1px solid}
.tag.ok{color:var(--ok);border-color:#10b98155;background:#10b9811a}
.tag.warn{color:var(--warn);border-color:#f59e0b55;background:#f59e0b1a}
.tag.err{color:var(--err);border-color:#ef444455;background:#ef44441a}
.tag.mut{color:var(--mut);border-color:#47556955}

.bar{height:6px;background:#0b1120;border-radius:5px;overflow:hidden;margin-top:4px}
.bar>i{display:block;height:100%;background:linear-gradient(90deg,#38bdf8,#6366f1)}

.toast{position:fixed;top:16px;right:16px;z-index:200;display:flex;flex-direction:column;gap:8px}
.toast>div{background:var(--card2);border:1px solid var(--bd);border-left:3px solid var(--acc);border-radius:10px;padding:10px 16px;font-size:13px;box-shadow:0 10px 30px #0006;animation:si .2s ease}
.toast>div.ok{border-left-color:var(--ok)}
.toast>div.err{border-left-color:var(--err)}
@keyframes si{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:none}}

.savebar{position:fixed;right:20px;bottom:20px;display:flex;gap:10px;z-index:50}
.savebar button{padding:11px 20px;border-radius:11px;font-size:14px}
.dirty{box-shadow:0 0 0 2px var(--warn)}

.modal{position:fixed;inset:0;background:#000a;display:none;align-items:center;justify-content:center;z-index:120;padding:20px}
.modal.on{display:flex}
.modal .box{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:22px;width:560px;max-width:96vw;max-height:88vh;overflow-y:auto}
.modal h3{margin:0 0 14px;font-size:16px}

.banner{background:linear-gradient(90deg,#0ea5e922,#6366f122);border:1px solid #0ea5e944;border-radius:12px;padding:12px 16px;margin-bottom:14px;display:flex;align-items:center;gap:12px;flex-wrap:wrap}

.linkbox{display:flex;gap:8px;align-items:center;margin-bottom:8px}
.linkbox input{flex:1}
.qr{width:150px;height:150px;background:#fff;border-radius:10px;padding:6px}
.logline{font-size:12px;padding:6px 0;border-bottom:1px solid #1e2b4788;display:flex;gap:10px}
.logline .t{color:var(--mut);font-family:ui-monospace,monospace;min-width:150px}
details{margin-bottom:8px}
summary{cursor:pointer;color:var(--mut);font-size:13px;padding:6px 0}
.hide{display:none!important}
</style>
</head>
<body>

<!-- ================= \u767B\u5F55 ================= -->
<div id="login">
  <div class="box">
    <h2>\u{1F510} CFSub \u7BA1\u7406\u9762\u677F</h2>
    <p>\u8BF7\u8F93\u5165\u7BA1\u7406\u5BC6\u94A5\u4EE5\u7EE7\u7EED</p>
    <label class="f">\u7BA1\u7406\u5BC6\u94A5</label>
    <input id="pwd" type="password" placeholder="\u9ED8\u8BA4 admin" autocomplete="current-password">
    <div style="margin-top:18px"><button class="btn" style="width:100%" onclick="doLogin()">\u767B \u5F55</button></div>
    <div class="hint" id="loginErr" style="color:var(--err)"></div>
  </div>
</div>

<!-- ================= \u4E3B\u4F53 ================= -->
<div id="app">
  <div class="sidebar">
    <div class="brand">\u{1F310} CFSub <span id="ver"></span></div>
    <div class="nav">
      <button class="on" data-tab="overview" onclick="tab('overview')">\u{1F4CA} \u6982\u89C8</button>
      <button data-tab="info" onclick="tab('info')">\u{1F517} \u8282\u70B9\u4FE1\u606F</button>
      <button data-tab="network" onclick="tab('network')">\u{1F30D} \u7F51\u7EDC\u8BCA\u65AD</button>
      <button data-tab="users" onclick="tab('users')">\u{1F465} \u7528\u6237\u7BA1\u7406</button>
      <button data-tab="settings" onclick="tab('settings')">\u2699\uFE0F \u57FA\u672C\u8BBE\u7F6E</button>
      <button data-tab="advanced" onclick="tab('advanced')">\u{1F9E9} \u9AD8\u7EA7\u8BBE\u7F6E</button>
      <button data-tab="logs" onclick="tab('logs')">\u{1F4DC} \u65E5\u5FD7</button>
      <button data-tab="help" onclick="tab('help')">\u2753 \u5E2E\u52A9</button>
    </div>
  </div>

  <div class="main">
    <!-- ---------- \u6982\u89C8 ---------- -->
    <div id="v-overview" class="view">
      <h1 class="page">\u{1F4CA} \u6982\u89C8</h1>
      <div id="lockedBanner"></div>
      <div id="updateBanner"></div>
      <div class="grid g4" id="statCards"></div>
      <h3 class="sec">\u7CFB\u7EDF\u4FE1\u606F</h3>
      <div class="card" id="sysInfo"></div>
      <h3 class="sec">\u6700\u8FD1\u65E5\u5FD7</h3>
      <div class="card" id="recentLogs"></div>
    </div>

    <!-- ---------- \u8282\u70B9\u4FE1\u606F ---------- -->
    <div id="v-info" class="view hide">
      <h1 class="page">\u{1F517} \u8282\u70B9\u4FE1\u606F</h1>
      <div id="profiles"></div>
    </div>

    <!-- ---------- \u7F51\u7EDC\u8BCA\u65AD ---------- -->
    <div id="v-network" class="view hide">
      <h1 class="page">\u{1F30D} \u7F51\u7EDC\u8BCA\u65AD</h1>
      <div class="grid g2">
        <div class="card">
          <h3 class="sec" style="margin-top:0">\u8FDE\u63A5\u4FE1\u606F</h3>
          <div id="netInfo"></div>
        </div>
        <div class="card">
          <h3 class="sec" style="margin-top:0">\u5EF6\u8FDF\u6D4B\u8BD5</h3>
          <label class="f">\u6D4B\u8BD5\u76EE\u6807\uFF08IP \u6216\u57DF\u540D\uFF09</label>
          <input id="pingTarget" placeholder="\u4F8B\u5982 1.1.1.1 \u6216 cf.090227.xyz">
          <div class="row" style="margin-top:10px">
            <button class="btn" onclick="runPing()">\u5F00\u59CB\u6D4B\u8BD5</button>
          </div>
          <div class="hint" id="pingResult"></div>
        </div>
      </div>
      <div class="card">
        <h3 class="sec" style="margin-top:0">\u{1F9EA} \u670D\u52A1\u7AEF\u81EA\u68C0</h3>
        <p class="hint">\u9010\u73AF\u8282\u68C0\u67E5 Worker \u81EA\u8EAB\u80FD\u529B\uFF1AKV\u3001\u51FA\u7AD9 TCP\u3001\u51FA\u7AD9 HTTPS\u3001\u5728\u7EBF\u4F18\u9009\u63A5\u53E3\u3001\u53CD\u4EE3\u89E3\u6790\u3002
          \u8282\u70B9\u8FDE\u4E0D\u4E0A\u65F6\u5148\u70B9\u8FD9\u91CC\uFF0C\u80FD\u76F4\u63A5\u5224\u65AD\u662F\u300C\u670D\u52A1\u7AEF\u95EE\u9898\u300D\u8FD8\u662F\u300C\u4F60\u7684\u7F51\u7EDC\u5230 Cloudflare \u7684\u95EE\u9898\u300D\u3002</p>
        <div class="row"><button class="btn" onclick="runSelfTest()">\u8FD0\u884C\u81EA\u68C0</button></div>
        <div id="selfTestOut" style="margin-top:12px"></div>
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u26A1 \u667A\u80FD\u89E3\u6790 Clean IP</h3>
        <p class="hint">\u628A\u4E00\u6279\u5E38\u7528\u57DF\u540D\u901A\u8FC7 DoH \u89E3\u6790\u6210\u53EF\u7528 IP\uFF0C\u81EA\u52A8\u586B\u5165\u4E0B\u65B9\u300CClean IP\u300D\u3002</p>
        <div class="row">
          <button class="btn" onclick="smartClean()">\u5F00\u59CB\u89E3\u6790</button>
          <button class="btn gh" onclick="previewPreferred()">\u9884\u89C8\u5F53\u524D\u4F18\u9009 IP</button>
        </div>
        <div class="hint" id="cleanResult" style="margin-top:10px"></div>
      </div>
    </div>

    <!-- ---------- \u7528\u6237\u7BA1\u7406 ---------- -->
    <div id="v-users" class="view hide">
      <h1 class="page">\u{1F465} \u7528\u6237\u7BA1\u7406</h1>
      <div class="grid g4" id="userStat"></div>
      <div class="card">
        <div class="row">
          <input id="userSearch" placeholder="\u641C\u7D22\u7528\u6237\u540D / ID / \u5907\u6CE8" oninput="renderUsers()" style="flex:2">
          <button class="btn" onclick="openUserForm()">\u2795 \u65B0\u589E\u7528\u6237</button>
          <button class="btn gh" onclick="loadUsers()">\u5237\u65B0</button>
        </div>
      </div>
      <div class="card" style="padding:0;overflow-x:auto">
        <table>
          <thead><tr><th>\u7528\u6237</th><th>\u72B6\u6001</th><th>\u603B\u6D41\u91CF</th><th>\u4ECA\u65E5</th><th>\u5230\u671F</th><th>\u5E76\u53D1</th><th style="width:290px">\u64CD\u4F5C</th></tr></thead>
          <tbody id="userTable"></tbody>
        </table>
      </div>
    </div>

    <!-- ---------- \u57FA\u672C\u8BBE\u7F6E ---------- -->
    <div id="v-settings" class="view hide">
      <h1 class="page">\u2699\uFE0F \u57FA\u672C\u8BBE\u7F6E</h1>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u9762\u677F</h3>
        <div class="row">
          <div><label class="f">\u9762\u677F\u540D\u79F0</label><input id="cfg-name" data-cfg="name"></div>
          <div><label class="f">\u9762\u677F\u8DEF\u5F84</label><input id="cfg-apiRoute" data-cfg="apiRoute"><div class="hint">\u8BBF\u95EE /{\u8DEF\u5F84}/dash \u6253\u5F00\u672C\u9762\u677F</div></div>
        </div>
        <label class="f">\u4E3B\u7BA1\u7406\u5BC6\u94A5</label>
        <div class="row">
          <input id="newMasterKey" type="password" placeholder="\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539">
          <button class="btn gh" onclick="changeMasterKey()">\u4FEE\u6539\u5BC6\u94A5</button>
        </div>
        <label class="f"><input type="checkbox" id="cfg-isPaused" data-cfg="isPaused" class="chk"> </label>
        <div class="chk"><input type="checkbox" id="chk-isPaused"><span>\u{1F6D1} Kill Switch\uFF08\u5F00\u542F\u540E\u505C\u6B62\u4E00\u5207\u4EE3\u7406\u8F6C\u53D1\uFF09</span></div>
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u8282\u70B9\u51ED\u8BC1</h3>
        <div class="row">
          <div><label class="f">\u4E3B UUID</label><input id="cfg-uuid" data-cfg="uuid" class="mono"></div>
          <div><label class="f">Trojan \u5BC6\u7801\uFF08\u7559\u7A7A\u5219\u7B49\u4E8E\u4E3B UUID\uFF09</label><input id="cfg-trojanPassword" data-cfg="trojanPassword"></div>
        </div>
        <div class="row" style="margin-top:10px">
          <button class="btn gh" onclick="regenUuid()">\u{1F3B2} \u91CD\u65B0\u751F\u6210 UUID</button>
        </div>
        <div class="hint">\u4FEE\u6539\u6216\u91CD\u65B0\u751F\u6210 UUID \u540E\uFF0C\u6240\u6709\u5DF2\u5BFC\u5165\u7684\u65E7\u8282\u70B9\u4F1A\u7ACB\u5373\u5931\u6548\uFF0C\u9700\u8981\u5728\u300C\u8282\u70B9\u4FE1\u606F\u300D\u91CD\u65B0\u590D\u5236\u8BA2\u9605\u94FE\u63A5\u3002</div>
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u534F\u8BAE\u4E0E\u7AEF\u53E3</h3>
        <label class="f">\u534F\u8BAE\u6A21\u5F0F</label>
        <select id="cfg-mode" data-cfg="mode">
          <option value="vless">\u4EC5 VLESS</option>
          <option value="trojan">\u4EC5 Trojan</option>
          <option value="xhttp">\u4EC5 XHTTP</option>
          <option value="both">VLESS + Trojan</option>
          <option value="all">\u5168\u90E8\uFF08VLESS + Trojan + XHTTP\uFF09</option>
        </select>
        <label class="f">\u7AEF\u53E3\uFF08\u53EF\u591A\u9009\uFF09</label>
        <div id="portPicker" class="row"></div>
        <div class="row">
          <div><label class="f">WS \u8DEF\u5F84</label><input id="cfg-path" data-cfg="path"></div>
          <div><label class="f">uTLS \u6307\u7EB9</label>
            <select id="cfg-fp" data-cfg="fp">
              <option>chrome</option><option>firefox</option><option>safari</option><option>ios</option>
              <option>android</option><option>edge</option><option>random</option><option>randomized</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div><label class="f">\u591A\u57DF\u540D\uFF08\u9017\u53F7\u5206\u9694\uFF0C\u7559\u7A7A\u7528\u5F53\u524D\u57DF\u540D\uFF09</label><input id="cfg-hosts" data-cfg="hosts" placeholder="a.example.com,b.example.com"></div>
          <div><label class="f">ALPN\uFF08\u7559\u7A7A\u81EA\u52A8\u534F\u5546\uFF09</label>
            <select id="cfg-alpn" data-cfg="alpn">
              <option value=""></option><option>h3</option><option>h2</option><option>http/1.1</option>
              <option>h3,h2</option><option>h2,http/1.1</option><option>h3,h2,http/1.1</option>
            </select>
          </div>
        </div>
        <div class="chk"><input type="checkbox" id="chk-ech"><span>\u542F\u7528 ECH\uFF08\u52A0\u5BC6 Client Hello\uFF09</span></div>
        <div class="row">
          <div><label class="f">ECH \u57DF\u540D</label><input id="cfg-echDomain" data-cfg="echDomain"></div>
          <div><label class="f">ECH DoH</label><input id="cfg-echDns" data-cfg="echDns"></div>
        </div>
        <div class="chk"><input type="checkbox" id="chk-enableEarlyData"><span>\u542F\u7528 0-RTT Early Data\uFF08ed=2560\uFF09</span></div>
        <div class="hint" style="color:var(--warn)">
          \u26A0\uFE0F \u9ED8\u8BA4\u5173\u95ED\u3002Cloudflare Workers \u8FD4\u56DE 101 \u65F6\u4E0D\u4F1A\u56DE\u663E Sec-WebSocket-Protocol\uFF0C
          \u5F00\u542F\u540E\u90E8\u5206\u5BA2\u6237\u7AEF\u4F1A\u5224\u5B9A\u63E1\u624B\u5931\u8D25\u3001\u8282\u70B9\u5168\u90E8\u8FDE\u4E0D\u4E0A\u3002\u9664\u975E\u4F60\u786E\u8BA4\u81EA\u5DF1\u7684\u5BA2\u6237\u7AEF\u652F\u6301\uFF0C\u5426\u5219\u4E0D\u8981\u5F00\u542F\u3002
        </div>
        <div class="chk"><input type="checkbox" id="chk-allowInsecure"><span>\u5141\u8BB8\u4E0D\u5B89\u5168\u8BC1\u4E66\uFF08allowInsecure\uFF09</span></div>
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u8BA2\u9605</h3>
        <div class="row">
          <div><label class="f">\u547D\u540D\u524D\u7F00</label><input id="cfg-namePrefix" data-cfg="namePrefix"></div>
          <div><label class="f">\u547D\u540D\u7B56\u7565</label>
            <select id="cfg-nameStrategy" data-cfg="nameStrategy">
              <option value="default">\u524D\u7F00-\u5E8F\u53F7</option>
              <option value="prefix-user-port">\u524D\u7F00-\u7528\u6237-\u7AEF\u53E3</option>
              <option value="type-user-port">\u534F\u8BAE-\u7528\u6237-\u7AEF\u53E3</option>
              <option value="user-port">\u7528\u6237-\u7AEF\u53E3</option>
              <option value="ip">IP\u540D-\u7AEF\u53E3</option>
              <option value="host-port-user">\u57DF\u540D-\u7AEF\u53E3-\u7528\u6237</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div><label class="f">\u6BCF\u7528\u6237\u6700\u5927\u8282\u70B9\u6570</label><input id="cfg-maxConfigs" data-cfg="maxConfigs" type="number"></div>
          <div><label class="f">\u8BA2\u9605 UA \u767D\u540D\u5355\uFF08\u542B\u6B64\u4E32\u7684 UA \u76F4\u63A5\u8FD4\u56DE\u8282\u70B9\uFF09</label><input id="cfg-subUserAgent" data-cfg="subUserAgent"></div>
        </div>
        <label class="f">\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\uFF08\u7528\u4E8E\u5916\u90E8\u8F6C\u6362\uFF09</label>
        <input id="cfg-subConverter" data-cfg="subConverter">
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u65B0\u7528\u6237\u9ED8\u8BA4\u503C</h3>
        <div class="row">
          <div><label class="f">\u9ED8\u8BA4\u603B\u6D41\u91CF\uFF08GB\uFF0C0=\u4E0D\u9650\uFF09</label><input id="cfg-limitTotalGb" data-cfg="limitTotalGb" type="number"></div>
          <div><label class="f">\u9ED8\u8BA4\u6BCF\u65E5\u6D41\u91CF\uFF08GB\uFF0C0=\u4E0D\u9650\uFF09</label><input id="cfg-limitDailyGb" data-cfg="limitDailyGb" type="number"></div>
          <div><label class="f">\u9ED8\u8BA4\u6709\u6548\u5929\u6570\uFF080=\u6C38\u4E45\uFF09</label><input id="cfg-expiryDays" data-cfg="expiryDays" type="number"></div>
        </div>
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">GitHub \u81EA\u52A8\u66F4\u65B0</h3>
        <div class="row">
          <div><label class="f">\u4ED3\u5E93\uFF08owner/repo\uFF09</label><input id="cfg-githubRepo" data-cfg="githubRepo" placeholder="yourname/cfsub"></div>
          <div><label class="f">\u90E8\u7F72\u76EE\u6807</label>
            <select id="cfg-deployTarget" data-cfg="deployTarget">
              <option value="worker">Cloudflare Worker</option>
              <option value="pages">Cloudflare Pages</option>
            </select>
          </div>
        </div>
        <div class="chk"><input type="checkbox" id="chk-autoUpdate"><span>\u5F00\u542F\u81EA\u52A8\u66F4\u65B0\uFF08Cron \u5B9A\u65F6\u68C0\u67E5\u5E76\u90E8\u7F72\uFF09</span></div>
        <div class="row">
          <div><label class="f">Cloudflare \u8D26\u6237 ID</label><input id="cfg-cfAccountId" data-cfg="cfAccountId"></div>
          <div><label class="f">Cloudflare API Token</label><input id="cfg-cfApiToken" data-cfg="cfApiToken" type="password"></div>
        </div>
        <div class="row">
          <div><label class="f">Worker \u540D\u79F0</label><input id="cfg-cfWorkerName" data-cfg="cfWorkerName"></div>
          <div><label class="f">Pages \u9879\u76EE\u540D</label><input id="cfg-cfPagesProject" data-cfg="cfPagesProject"></div>
        </div>
        <div class="row">
          <button class="btn gh" onclick="checkUpdate()">\u68C0\u67E5\u66F4\u65B0</button>
          <button class="btn" onclick="doUpdate(false)">\u90E8\u7F72\u6700\u65B0\u7248</button>
          <button class="btn gh" onclick="doUpdate(true)">\u5F3A\u5236\u8986\u76D6\u90E8\u7F72</button>
        </div>
        <div class="hint" id="updateResult"></div>
      </div>
    </div>

    <!-- ---------- \u9AD8\u7EA7\u8BBE\u7F6E ---------- -->
    <div id="v-advanced" class="view hide">
      <h1 class="page">\u{1F9E9} \u9AD8\u7EA7\u8BBE\u7F6E</h1>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u4F18\u9009 IP</h3>
        <div class="chk"><input type="checkbox" id="chk-enableOfficialIp"><span>\u542F\u7528\u5185\u7F6E\u5B98\u65B9\u76F4\u8FDE\u5730\u5740\u6C60\uFF0810 \u4E2A Cloudflare \u5B98\u65B9 IP\uFF09</span></div>
        <div class="chk"><input type="checkbox" id="chk-enablePreferredDomain"><span>\u542F\u7528\u5185\u7F6E\u4F18\u9009\u53CD\u4EE3\u57DF\u540D\uFF0821 \u4E2A\uFF09</span></div>
        <div class="chk"><input type="checkbox" id="chk-enablePreferredIp"><span>\u542F\u7528\u8FDC\u7A0B\u4F18\u9009 IP \u6E90\uFF08cmliu CF-CIDR \u8FD0\u8425\u5546\u5206\u6BB5\uFF09</span></div>
        <div class="chk"><input type="checkbox" id="chk-enableRemotePreferred"><span>\u5141\u8BB8\u62C9\u53D6\u8FDC\u7A0B\u4F18\u9009\u6E90</span></div>
        <label class="f">\u81EA\u5B9A\u4E49\u4F18\u9009 IP\uFF08\u6BCF\u884C\u4E00\u6761\uFF1AIP:\u7AEF\u53E3#\u5907\u6CE8 \u6216 IP#\u5907\u6CE8\uFF09</label>
        <textarea id="cfg-customPreferred" data-cfg="customPreferred" placeholder="1.1.1.1:443#\u9999\u6E2F\u8282\u70B9&#10;8.8.8.8:443#Google"></textarea>
        <label class="f">\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u4F18\u9009\u6E90 URL\uFF08\u9017\u53F7\u5206\u9694\uFF09</label>
        <input id="cfg-preferredUrls" data-cfg="preferredUrls" placeholder="https://example.com/ips.txt">
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u53CD\u4EE3\uFF08ProxyIP\uFF09</h3>
        <div class="row">
          <div><label class="f">\u53CD\u4EE3\u6A21\u5F0F</label>
            <select id="cfg-proxyIpMode" data-cfg="proxyIpMode">
              <option value="auto">\u81EA\u52A8\uFF08\u5B98\u65B9\u76F4\u8FDE + \u673A\u623F\u53CD\u4EE3 + \u4F18\u9009\u57DF\u540D\uFF09</option>
              <option value="region">\u6307\u5B9A\u5730\u533A</option>
              <option value="custom">\u81EA\u5B9A\u4E49</option>
              <option value="off">\u5173\u95ED\uFF08\u4EC5\u76F4\u8FDE\uFF09</option>
            </select>
          </div>
          <div><label class="f">\u6307\u5B9A\u5730\u533A</label>
            <select id="cfg-proxyIpRegion" data-cfg="proxyIpRegion">
              <option value="">\uFF08\u672A\u6307\u5B9A\uFF09</option>
              <option>HK</option><option>US</option><option>SG</option><option>JP</option><option>KR</option>
              <option>DE</option><option>SE</option><option>NL</option><option>FI</option><option>GB</option>
              <option>Oracle</option><option>DigitalOcean</option><option>Vultr</option><option>Multacom</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div><label class="f">\u81EA\u5B9A\u4E49 ProxyIP\uFF08\u652F\u6301 IP / \u57DF\u540D / \u5E26\u7AEF\u53E3\uFF09</label><input id="cfg-customProxyIp" data-cfg="customProxyIp" placeholder="1.2.3.4:443 \u6216 proxy.example.com:8443"></div>
          <div><label class="f">\u515C\u5E95\u53CD\u4EE3</label><input id="cfg-backupProxyIp" data-cfg="backupProxyIp"></div>
        </div>
        <div class="row" style="margin-top:10px">
          <button class="btn gh" onclick="previewProxyIp()">\u{1F50D} \u67E5\u770B\u5F53\u524D\u53CD\u4EE3\u4F1A\u7528\u5230\u54EA\u4E9B\u5730\u5740</button>
        </div>
        <div class="hint" id="proxyPreview">
          \u9009\u62E9\u300C\u6307\u5B9A\u5730\u533A\u300D\u540E\u70B9\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u770B\u5230\u5B9E\u9645\u4F1A\u6309\u987A\u5E8F\u5C1D\u8BD5\u7684\u53CD\u4EE3\u5730\u5740\u3002\u8BE5\u5730\u5740\u4F1A\u5199\u5165\u8BA2\u9605\u8282\u70B9\u7684 path\uFF08?wk= \u6216 ?proxyip=\uFF09\uFF0C\u670D\u52A1\u7AEF\u6309\u8282\u70B9\u89E3\u6790\u3002
        </div>
        <div class="row">
          <div><label class="f">NAT64 \u524D\u7F00\uFF08\u7559\u7A7A\u5173\u95ED\uFF09</label><input id="cfg-nat64" data-cfg="nat64" placeholder="[2602:fc59:b0:64::]"></div>
          <div><label class="f">Clean IP\uFF08\u9017\u53F7\u5206\u9694\uFF09</label><input id="cfg-cleanIps" data-cfg="cleanIps"></div>
        </div>
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u51FA\u7AD9\u4EE3\u7406</h3>
        <label class="f">\u4EE3\u7406\u5730\u5740\uFF08socks5:// http:// https:// \uFF0C\u652F\u6301 user:pass@host:port\uFF09</label>
        <input id="cfg-outboundProxy" data-cfg="outboundProxy" placeholder="socks5://user:pass@1.2.3.4:1080">
        <label class="f">\u51FA\u7AD9\u65B9\u5F0F</label>
        <select id="cfg-outboundMode" data-cfg="outboundMode">
          <option value="auto">\u81EA\u52A8\uFF08\u5148\u76F4\u8FDE\uFF0C\u5931\u8D25\u8D70\u53CD\u4EE3/\u4EE3\u7406\uFF09</option>
          <option value="direct-first">\u4F18\u5148\u76F4\u8FDE\uFF0C\u5931\u8D25\u518D\u8D70\u4EE3\u7406</option>
          <option value="proxy-first">\u4F18\u5148\u8D70\u4EE3\u7406\uFF0C\u5931\u8D25\u518D\u76F4\u8FDE</option>
          <option value="proxy-only">\u53EA\u8D70\u4EE3\u7406\uFF08\u4E0D\u56DE\u843D\uFF0C\u9632\u51FA\u53E3 IP \u6CC4\u6F0F\uFF09</option>
        </select>
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">\u7F51\u7EDC</h3>
        <div class="row">
          <div><label class="f">DoH \u89E3\u6790\u670D\u52A1</label><input id="cfg-customDns" data-cfg="customDns"></div>
          <div><label class="f">\u89E3\u6790 IP</label><input id="cfg-resolveIp" data-cfg="resolveIp"></div>
        </div>
        <label class="f">\u4F2A\u88C5\u4E3B\u9875\uFF08\u8BBF\u95EE\u6839\u8DEF\u5F84\u65F6\u53CD\u5411\u4EE3\u7406\uFF0C\u9017\u53F7\u5206\u9694\u968F\u673A\uFF09</label>
        <input id="cfg-maintenanceHost" data-cfg="maintenanceHost">
      </div>

      <div class="card">
        <h3 class="sec" style="margin-top:0">Telegram \u901A\u77E5</h3>
        <div class="row">
          <div><label class="f">Bot Token</label><input id="cfg-tgToken" data-cfg="tgToken"></div>
          <div><label class="f">Chat ID</label><input id="cfg-tgChatId" data-cfg="tgChatId"></div>
          <div><label class="f">\u7BA1\u7406\u5458 ID</label><input id="cfg-tgAdminId" data-cfg="tgAdminId"></div>
        </div>
      </div>
    </div>

    <!-- ---------- \u65E5\u5FD7 ---------- -->
    <div id="v-logs" class="view hide">
      <h1 class="page">\u{1F4DC} \u65E5\u5FD7</h1>
      <div class="card"><div class="row"><button class="btn gh" onclick="loadLogs()">\u5237\u65B0</button></div></div>
      <div class="card" id="logList"></div>
    </div>

    <!-- ---------- \u5E2E\u52A9 ---------- -->
    <div id="v-help" class="view hide">
      <h1 class="page">\u2753 \u5E2E\u52A9</h1>
      <div class="card">
        <details open><summary>\u8BA2\u9605\u5730\u5740\u600E\u4E48\u7528\uFF1F</summary>
          <p>\u5728\u300C\u8282\u70B9\u4FE1\u606F\u300D\u9875\u590D\u5236\u5BF9\u5E94\u683C\u5F0F\u7684\u94FE\u63A5\uFF0C\u7C98\u8D34\u5230 Clash / Sing-box / v2rayN \u7B49\u5BA2\u6237\u7AEF\u7684\u300C\u4ECE URL \u5BFC\u5165\u300D\u5373\u53EF\u3002\u901A\u7528\u94FE\u63A5\u4F1A\u6839\u636E\u5BA2\u6237\u7AEF UA \u81EA\u52A8\u8FD4\u56DE\u5BF9\u5E94\u683C\u5F0F\u3002</p></details>
        <details><summary>\u5982\u4F55\u9650\u5236\u7528\u6237\u6D41\u91CF\uFF1F</summary>
          <p>\u5728\u300C\u7528\u6237\u7BA1\u7406\u300D\u91CC\u7ED9\u6BCF\u4E2A\u7528\u6237\u8BBE\u7F6E\u603B\u6D41\u91CF\u4E0A\u9650\u4E0E\u6BCF\u65E5\u4E0A\u9650\uFF08\u5355\u4F4D GB\uFF09\u3002\u8D85\u9650\u540E\u8BE5\u7528\u6237\u4F1A\u88AB\u81EA\u52A8\u62D2\u7EDD\u8FDE\u63A5\uFF0C\u53EF\u5728\u7528\u6237\u5217\u8868\u70B9\u51FB\u300C\u91CD\u7F6E\u300D\u6E05\u96F6\u3002</p></details>
        <details><summary>\u5185\u7F6E\u4F18\u9009 IP \u4ECE\u54EA\u91CC\u6765\uFF1F</summary>
          <p>\u5185\u7F6E\u8D44\u6E90\u6765\u81EA byJoey/cfnew\uFF08\u5B98\u65B9\u76F4\u8FDE\u6C60\u3001\u5730\u533A\u53CD\u4EE3\u57DF\u540D\u3001\u4F18\u9009\u57DF\u540D\u8868\uFF09\u3001cmliu/edgetunnel\uFF08\u673A\u623F\u7EA7\u53CD\u4EE3\u3001CF-CIDR \u8FD0\u8425\u5546\u5206\u6BB5\uFF09\u3001BPB\uFF08NAT64 \u524D\u7F00\uFF09\u3002\u5168\u90E8\u53EF\u5728\u300C\u9AD8\u7EA7\u8BBE\u7F6E\u300D\u4E2D\u5173\u95ED\u6216\u66FF\u6362\u4E3A\u81EA\u5DF1\u7684\u5730\u5740\u3002</p></details>
        <details><summary>Kill Switch \u662F\u4EC0\u4E48\uFF1F</summary>
          <p>\u5F00\u542F\u540E Worker \u4F1A\u62D2\u7EDD\u6240\u6709\u4EE3\u7406\u8FDE\u63A5\uFF08\u8FD4\u56DE 503\uFF09\uFF0C\u4EC5\u4FDD\u7559\u9762\u677F\u8BBF\u95EE\uFF0C\u7528\u4E8E\u7D27\u6025\u6B62\u635F\u3002</p></details>
        <details><summary>\u81EA\u52A8\u66F4\u65B0\u600E\u4E48\u914D\u7F6E\uFF1F</summary>
          <p>\u586B\u5199 GitHub \u4ED3\u5E93\uFF08\u9700\u5305\u542B version \u6587\u4EF6\u4E0E dist/_worker.js\uFF09\u3001Cloudflare \u8D26\u6237 ID\u3001API Token \u4E0E Worker \u540D\u79F0\uFF0C\u7136\u540E\u5F00\u542F\u81EA\u52A8\u66F4\u65B0\u3002Cron \u4F1A\u5B9A\u65F6\u68C0\u67E5\u5E76\u8C03\u7528 Cloudflare API \u91CD\u65B0\u90E8\u7F72\u3002</p></details>
        <details><summary>Pages \u90E8\u7F72\u9700\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F</summary>
          <p>Pages \u9700\u8981\u5728\u9879\u76EE\u8BBE\u7F6E\u7684\u300CFunctions \u2192 KV \u547D\u540D\u7A7A\u95F4\u7ED1\u5B9A\u300D\u4E2D\u6DFB\u52A0\u53D8\u91CF\u540D <code>CF_SUB_KV</code>\u3002Pages \u4E0D\u652F\u6301 Cron\uFF0C\u81EA\u52A8\u66F4\u65B0\u9700\u624B\u52A8\u70B9\u51FB\u90E8\u7F72\u3002</p></details>
      </div>
    </div>
  </div>
</div>

<div class="savebar" id="savebar" style="display:none">
  <button class="btn gh" onclick="loadAll()">\u5237\u65B0</button>
  <button class="btn" id="saveBtn" onclick="save()">\u4FDD\u5B58\u5168\u90E8</button>
</div>
<div class="toast" id="toast"></div>

<!-- \u7528\u6237\u8868\u5355\u5F39\u7A97 -->
<div class="modal" id="userModal">
  <div class="box">
    <h3 id="userModalTitle">\u65B0\u589E\u7528\u6237</h3>
    <input type="hidden" id="uf-id">
    <label class="f">\u7528\u6237\u540D *</label><input id="uf-name" placeholder="\u4F8B\u5982 alice">
    <label class="f">\u5907\u6CE8</label><input id="uf-notes">
    <div class="row">
      <div><label class="f">\u603B\u6D41\u91CF\u4E0A\u9650\uFF08GB\uFF0C\u7559\u7A7A\u4E0D\u9650\uFF09</label><input id="uf-total" type="number" placeholder="0"></div>
      <div><label class="f">\u6BCF\u65E5\u4E0A\u9650\uFF08GB\uFF0C\u7559\u7A7A\u4E0D\u9650\uFF09</label><input id="uf-daily" type="number" placeholder="0"></div>
    </div>
    <div class="row">
      <div><label class="f">\u6709\u6548\u5929\u6570\uFF08\u7559\u7A7A\u6C38\u4E45\uFF09</label><input id="uf-days" type="number" placeholder="0"></div>
      <div><label class="f">\u5E76\u53D1\u8FDE\u63A5\u4E0A\u9650</label><input id="uf-conn" type="number" placeholder="\u7559\u7A7A\u4E0D\u9650"></div>
    </div>
    <div class="row">
      <div><label class="f">\u4E13\u5C5E ProxyIP</label><input id="uf-proxyIp"></div>
      <div><label class="f">\u4E13\u5C5E Clean IP</label><input id="uf-cleanIp"></div>
    </div>
    <div class="row">
      <div><label class="f">\u4E13\u5C5E\u7AEF\u53E3</label><input id="uf-ports" placeholder="443,2053"></div>
      <div><label class="f">\u4E13\u5C5E\u534F\u8BAE</label>
        <select id="uf-mode"><option value="">\uFF08\u8DDF\u968F\u5168\u5C40\uFF09</option><option value="vless">VLESS</option><option value="trojan">Trojan</option><option value="xhttp">XHTTP</option></select>
      </div>
    </div>
    <div class="row" style="margin-top:18px">
      <button class="btn" onclick="submitUserForm()">\u4FDD\u5B58</button>
      <button class="btn gh" onclick="closeUserForm()">\u53D6\u6D88</button>
    </div>
  </div>
</div>

<script>
/* ==================== \u5168\u5C40\u72B6\u6001 ==================== */
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
let CFG = null;         // \u670D\u52A1\u7AEF\u914D\u7F6E
let USERS = [];         // \u7528\u6237\u5217\u8868
let SESSION = null;     // { key, expiry }
let DIRTY = false;

const PORTS = [443,2053,2083,2087,2096,8443,80,8080,8880,2052,2082,2086,2095];

/* ==================== \u5DE5\u5177 ==================== */
function toast(msg, kind){
  const el = document.createElement('div');
  el.className = kind || '';
  el.textContent = msg;
  $('#toast').appendChild(el);
  setTimeout(()=>el.remove(), 3200);
}
function fmtBytes(n){
  n = Number(n)||0;
  if(n<1024) return n+' B';
  if(n<1048576) return (n/1024).toFixed(2)+' KB';
  if(n<1073741824) return (n/1048576).toFixed(2)+' MB';
  return (n/1073741824).toFixed(2)+' GB';
}
function base(){ return location.origin + '/' + (CFG?.apiRoute || 'sub'); }
function route(){ return CFG?.apiRoute || 'sub'; }

async function api(name, body, method){
  const url = base() + '/api/' + name;
  const opt = { method: method || (body ? 'POST' : 'GET') };
  if(body){ opt.headers = {'content-type':'application/json'}; opt.body = JSON.stringify(Object.assign({key: SESSION.key}, body)); }
  else { opt.headers = {'authorization':'Bearer ' + SESSION.key}; }
  const r = await fetch(url, opt);
  return await r.json();
}

/* ==================== \u767B\u5F55 ==================== */
async function doLogin(silent){
  const key = SESSION?.key || $('#pwd').value.trim();
  if(!key){ $('#loginErr').textContent = '\u8BF7\u8F93\u5165\u5BC6\u94A5'; return; }
  try{
    const r = await fetch(base()+'/api/auth', {
      method:'POST', headers:{'content-type':'application/json'},
      body: JSON.stringify({key})
    });
    const j = await r.json();
    if(!j.success){
      if(!silent) $('#loginErr').textContent = '\u5BC6\u94A5\u9519\u8BEF';
      SESSION = null; localStorage.removeItem('cfsub_session');
      return;
    }
    CFG = j.config;
    window.__locked = j.locked || [];
    window.__authNetwork = j.network || {};
    SESSION = { key, expiry: Date.now()+30*60*1000 };
    localStorage.setItem('cfsub_session', JSON.stringify(SESSION));
    $('#login').style.display='none';
    $('#app').style.display='block';
    $('#savebar').style.display='flex';
    $('#ver').textContent = 'v' + (j.version||'');
    fillForm();
    await loadAll();
  }catch(e){
    if(!silent) $('#loginErr').textContent = '\u8FDE\u63A5\u5931\u8D25\uFF1A'+e.message;
  }
}

function tryRestore(){
  const s = localStorage.getItem('cfsub_session');
  if(!s) return false;
  try{
    const j = JSON.parse(s);
    if(j.expiry && j.expiry < Date.now()){ localStorage.removeItem('cfsub_session'); return false; }
    SESSION = j; return true;
  }catch{ return false; }
}

/* ==================== \u6570\u636E\u52A0\u8F7D ==================== */
async function loadAll(){
  await Promise.all([loadStats(), loadUsers(), loadLogs(), loadNet()]);
  renderOverview(); renderProfiles(); renderUsers(); checkUpdate();
}

async function loadStats(){
  try{ const j = await api('stats'); if(j.success) window.__stats = j.stats; }catch(e){}
}
async function loadUsers(){
  try{ const j = await api('users'); if(j.success) USERS = j.users || []; }catch(e){}
}
async function loadLogs(){
  try{ const j = await api('logs',{}); if(j.success) window.__logs = j.logs || []; renderLogs(); }catch(e){}
}
async function loadNet(){
  // \u7F51\u7EDC\u4FE1\u606F\u6765\u81EA\u767B\u5F55\u63A5\u53E3\u8FD4\u56DE\u7684 request.cf\uFF0C\u907F\u514D\u6D4F\u89C8\u5668\u8DE8\u57DF\u8BF7\u6C42\u88AB\u62E6\u622A
  window.__net = window.__authNetwork || { ip:'-', colo:'-' };
  renderNet();
}

/* ==================== \u8868\u5355\u586B\u5145 / \u6536\u96C6 ==================== */
function fillForm(){
  $$('[data-cfg]').forEach(el=>{
    const k = el.dataset.cfg;
    let v = CFG[k];
    if(el.type==='checkbox'){ el.checked = !!v; }
    else el.value = (v===undefined||v===null) ? '' : v;
  });
  // \u5E03\u5C14\u590D\u9009\u6846\uFF08id \u524D\u7F00 chk-\uFF09
  [['isPaused','#chk-isPaused'],['ech','#chk-ech'],['enableEarlyData','#chk-enableEarlyData'],
   ['allowInsecure','#chk-allowInsecure'],['autoUpdate','#chk-autoUpdate'],
   ['enableOfficialIp','#chk-enableOfficialIp'],['enablePreferredDomain','#chk-enablePreferredDomain'],
   ['enablePreferredIp','#chk-enablePreferredIp'],['enableRemotePreferred','#chk-enableRemotePreferred']
  ].forEach(([k,sel])=>{ const el=$(sel); if(el) el.checked = !!CFG[k]; });
  renderPortPicker();
  markClean();
}

function collectForm(){
  const out = Object.assign({}, CFG);
  $$('[data-cfg]').forEach(el=>{
    const k = el.dataset.cfg;
    if(el.type==='checkbox') out[k] = el.checked;
    else if(el.type==='number') out[k] = el.value==='' ? 0 : Number(el.value);
    else out[k] = el.value;
  });
  [['isPaused','#chk-isPaused'],['ech','#chk-ech'],['enableEarlyData','#chk-enableEarlyData'],
   ['allowInsecure','#chk-allowInsecure'],['autoUpdate','#chk-autoUpdate'],
   ['enableOfficialIp','#chk-enableOfficialIp'],['enablePreferredDomain','#chk-enablePreferredDomain'],
   ['enablePreferredIp','#chk-enablePreferredIp'],['enableRemotePreferred','#chk-enableRemotePreferred']
  ].forEach(([k,sel])=>{ const el=$(sel); if(el) out[k] = el.checked; });
  if(out.ports === undefined || !String(out.ports).length) out.ports = '443';
  delete out.logs;
  return out;
}

function renderPortPicker(){
  const box = $('#portPicker'); if(!box) return;
  const cur = String(CFG.ports||'443').split(',').map(s=>s.trim()).filter(Boolean);
  box.innerHTML = PORTS.map(p=>
    '<label class="chk" style="flex:0 0 auto;min-width:0"><input type="checkbox" class="portcb" value="'+p+'"'+(cur.includes(String(p))?' checked':'')+' onchange="markDirty()"><span>'+p+'</span></label>'
  ).join('');
}
function readPorts(){
  return $$('.portcb').filter(e=>e.checked).map(e=>e.value).join(',');
}

function markDirty(){
  DIRTY = true;
  $('#saveBtn').classList.add('dirty');
  $('#saveBtn').textContent = '\u4FDD\u5B58\u5168\u90E8 \u25CF';
}
function markClean(){
  DIRTY = false;
  $('#saveBtn').classList.remove('dirty');
  $('#saveBtn').textContent = '\u4FDD\u5B58\u5168\u90E8';
}

async function save(){
  const cfg = collectForm();
  cfg.ports = readPorts();
  try{
    const j = await api('sync', {config: cfg});
    if(j.success){
      CFG = Object.assign(CFG, cfg);
      if(j.newRoute && j.newRoute !== route()){
        toast('\u9762\u677F\u8DEF\u5F84\u5DF2\u6539\u4E3A /'+j.newRoute+'\uFF0C\u5373\u5C06\u8DF3\u8F6C', 'ok');
        setTimeout(()=>{ location.href = location.origin + '/' + j.newRoute + '/dash'; }, 1500);
        return;
      }
      markClean();
      toast('\u914D\u7F6E\u5DF2\u4FDD\u5B58', 'ok');
      await loadAll();
    } else toast(j.message || '\u4FDD\u5B58\u5931\u8D25', 'err');
  }catch(e){ toast('\u4FDD\u5B58\u5931\u8D25\uFF1A'+e.message, 'err'); }
}

function regenUuid(){
  if(!confirm('\u91CD\u65B0\u751F\u6210 UUID \u540E\uFF0C\u6240\u6709\u5DF2\u5BFC\u5165\u7684\u65E7\u8282\u70B9\u90FD\u4F1A\u5931\u6548\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F')) return;
  const a = new Uint8Array(16);
  crypto.getRandomValues(a);
  a[6] = (a[6] & 0x0f) | 0x40;
  a[8] = (a[8] & 0x3f) | 0x80;
  const h = Array.from(a).map(b=>b.toString(16).padStart(2,'0')).join('');
  $('#cfg-uuid').value = h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20);
  markDirty();
  toast('\u5DF2\u751F\u6210\u65B0 UUID\uFF0C\u8BB0\u5F97\u70B9\u300C\u4FDD\u5B58\u5168\u90E8\u300D','ok');
}

async function changeMasterKey(){
  const v = $('#newMasterKey').value.trim();
  if(!v){ toast('\u8BF7\u8F93\u5165\u65B0\u5BC6\u94A5', 'err'); return; }
  const cfg = collectForm(); cfg.ports = readPorts(); cfg.masterKey = v;
  const j = await api('sync', {config: cfg});
  if(j.success){
    CFG.masterKey = v; SESSION.key = v;
    localStorage.setItem('cfsub_session', JSON.stringify(SESSION));
    $('#newMasterKey').value = '';
    toast('\u4E3B\u5BC6\u94A5\u5DF2\u66F4\u65B0', 'ok');
  } else toast(j.message||'\u5931\u8D25','err');
}

/* ==================== \u6E32\u67D3 ==================== */
function tab(name){
  $$('.nav button').forEach(b=>b.classList.toggle('on', b.dataset.tab===name));
  $$('.view').forEach(v=>v.classList.add('hide'));
  const el = $('#v-'+name); if(el) el.classList.remove('hide');
  if(name==='users') renderUsers();
  if(name==='logs') renderLogs();
}

function renderOverview(){
  const locked = window.__locked || [];
  $('#lockedBanner').innerHTML = locked.length
    ? '<div class="banner">\u{1F512} \u4EE5\u4E0B\u914D\u7F6E\u7531 <b>\u73AF\u5883\u53D8\u91CF</b> \u9501\u5B9A\uFF0C\u9762\u677F\u4E2D\u4FEE\u6539\u4E0D\u4F1A\u751F\u6548\uFF08\u4F18\u5148\u7EA7\uFF1A\u73AF\u5883\u53D8\u91CF &gt; \u9762\u677F\u914D\u7F6E\uFF09\uFF1A'
      + locked.map(k=>'<span class="tag mut">'+k+'</span>').join(' ') + '</div>'
    : '';
  const s = window.__stats || {users:{total:0,active:0,paused:0,expired:0,disabled:0},traffic:{totalText:'0 B',dailyText:'0 B'},system:{}};
  $('#statCards').innerHTML = [
    ['\u7528\u6237\u603B\u6570', s.users.total], ['\u6D3B\u8DC3', s.users.active], ['\u6682\u505C', s.users.paused],
    ['\u8D85\u9650/\u8FC7\u671F', (s.users.disabled||0)+(s.users.expired||0)],
    ['\u603B\u6D41\u91CF', s.traffic.totalText], ['\u4ECA\u65E5\u6D41\u91CF', s.traffic.dailyText],
    ['\u8FD0\u884C\u6A21\u5F0F', (CFG.mode||'vless').toUpperCase()], ['\u8282\u70B9\u7AEF\u53E3', CFG.ports||'443']
  ].map(([k,v])=>'<div class="stat"><div class="k">'+k+'</div><div class="v">'+v+'</div></div>').join('');

  const sys = s.system||{};
  $('#sysInfo').innerHTML =
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;font-size:13px">'+
    row('\u7248\u672C', sys.version||'-') + row('KV \u7ED1\u5B9A', sys.hasKV ? '\u2705 \u6B63\u5E38' : '\u274C \u7F3A\u5931') +
    row('\u7528\u6237\u603B\u6570', (CFG.users||[]).length + ' \u4E2A') +
    row('Kill Switch', CFG.isPaused ? '\u{1F6D1} \u5DF2\u5F00\u542F' : '\u5173\u95ED') +
    row('\u534F\u8BAE', (CFG.mode||'vless')) + row('UUID', (CFG.uuid||'-').slice(0,8)+'\u2026') +
    row('\u9762\u677F\u8DEF\u5F84', '/'+route()+'/dash') + row('\u53CD\u4EE3\u6A21\u5F0F', CFG.proxyIpMode||'auto') +
    row('\u51FA\u7AD9\u65B9\u5F0F', CFG.outboundMode||'auto') +
    '</div>';

  const logs = (window.__logs||[]).slice(0,8);
  $('#recentLogs').innerHTML = logs.length ? logs.map(l=>logLine(l)).join('') : '<div class="hint">\u6682\u65E0\u65E5\u5FD7</div>';
}
function row(k,v){ return '<div><span style="color:var(--mut)">'+k+'\uFF1A</span>'+v+'</div>'; }
function logLine(l){
  return '<div class="logline"><span class="t">'+l.ts.replace('T',' ').slice(0,19)+'</span><span>'+l.type+'</span><span style="color:var(--mut)">'+l.detail+'</span></div>';
}

function renderProfiles(){
  const list = [{id:'default', name: CFG.name||'\u9ED8\u8BA4'}].concat((CFG.users||[]).filter(u=>u.status!=='paused'));
  $('#profiles').innerHTML = list.map(p=>{
    const q = '?sub=' + encodeURIComponent(p.name);
    const links = [
      ['\u901A\u7528\uFF08\u81EA\u52A8\u8BC6\u522B\uFF09', base()+q],
      ['Clash / Mihomo', base()+q+'&flag=clash'],
      ['Sing-box', base()+q+'&flag=singbox'],
      ['v2rayN JSON', base()+q+'&flag=v2ray'],
      ['Base64 \u660E\u6587', base()+q+'&flag=base64']
    ];
    return '<div class="card"><h3 class="sec" style="margin-top:0">\u{1F464} '+p.name+'</h3>'+
      links.map(([t,u])=>'<div class="linkbox"><input readonly value="'+u+'"><button class="btn gh sm" onclick="copyUrl(this.previousElementSibling)">\u590D\u5236</button><button class="btn gh sm" onclick="showQr(\\''+u+'\\')">\u4E8C\u7EF4\u7801</button></div>').join('')+
      '<div class="row" style="margin-top:10px"><button class="btn gh sm" onclick="openClient(\\'clash\\',\\''+base()+q+'&flag=clash\\')">\u5BFC\u5165 Clash</button>'+
      '<button class="btn gh sm" onclick="openClient(\\'sing-box\\',\\''+base()+q+'&flag=singbox\\')">\u5BFC\u5165 Sing-box</button></div></div>';
  }).join('');
}

function showQr(u){
  const w = window.open('', '_blank', 'width=320,height=380');
  w.document.write('<body style="background:#0b1120;color:#fff;font-family:sans-serif;display:flex;flex-direction:column;align-items:center;padding:20px">'+
    '<h3 style="font-size:15px">\u626B\u63CF\u5BFC\u5165</h3><img style="width:240px;height:240px;background:#fff;padding:8px;border-radius:12px" src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data='+encodeURIComponent(u)+'">'+
    '<p style="font-size:11px;word-break:break-all;max-width:280px;color:#94a3b8">'+u+'</p></body>');
}
function copyUrl(el){ el.select(); if(navigator.clipboard) navigator.clipboard.writeText(el.value); toast('\u5DF2\u590D\u5236','ok'); }
function openClient(kind, url){ location.href = kind + '://install-config?url=' + encodeURIComponent(url); }

function renderUsers(){
  const q = ($('#userSearch')?.value||'').toLowerCase();
  const list = USERS.filter(u=>!q || (u.name+' '+u.id+' '+(u.notes||'')).toLowerCase().includes(q));
  const st = {total:USERS.length, active:0, paused:0, expired:0, disabled:0};
  USERS.forEach(u=>{ st[u.status] = (st[u.status]||0)+1; });
  $('#userStat').innerHTML = [
    ['\u7528\u6237\u603B\u6570', st.total], ['\u6D3B\u8DC3', st.active||0], ['\u6682\u505C', st.paused||0], ['\u8D85\u9650/\u8FC7\u671F', (st.disabled||0)+(st.expired||0)]
  ].map(([k,v])=>'<div class="stat"><div class="k">'+k+'</div><div class="v">'+v+'</div></div>').join('');

  $('#userTable').innerHTML = list.length ? list.map(u=>{
    const uu = u.usage||{};
    const tag = u.status==='active' ? '<span class="tag ok">\u6B63\u5E38</span>'
      : u.status==='paused' ? '<span class="tag mut">\u6682\u505C</span>'
      : u.status==='expired' ? '<span class="tag warn">\u8FC7\u671F</span>' : '<span class="tag err">\u8D85\u9650</span>';
    return '<tr>'+
      '<td><b>'+u.name+'</b><div class="hint mono">'+u.id.slice(0,8)+' \xB7 '+(u.uuid||'').slice(0,8)+'\u2026</div></td>'+
      '<td>'+tag+'</td>'+
      '<td>'+(uu.totalText||'0 B')+' / '+(uu.limitText||'\u4E0D\u9650')+'<div class="bar"><i style="width:'+(uu.progress||0)+'%"></i></div></td>'+
      '<td>'+(uu.dailyText||'0 B')+'</td>'+
      '<td>'+(u.expiryMs ? new Date(u.expiryMs).toLocaleDateString('zh-CN') : '\u6C38\u4E45')+'</td>'+
      '<td>'+(u.connLimit||'\u4E0D\u9650')+'</td>'+
      '<td><button class="btn gh sm" onclick="copySub(\\''+u.name+'\\')">\u94FE\u63A5</button> '+
      '<button class="btn gh sm" onclick="editUser(\\''+u.id+'\\')">\u7F16\u8F91</button> '+
      '<button class="btn gh sm" onclick="toggleUser(\\''+u.id+'\\')">'+(u.status==='active'?'\u6682\u505C':'\u542F\u7528')+'</button> '+
      '<button class="btn gh sm" onclick="resetUser(\\''+u.id+'\\')">\u91CD\u7F6E</button> '+
      '<button class="btn dg sm" onclick="delUser(\\''+u.id+'\\')">\u5220\u9664</button></td></tr>';
  }).join('') : '<tr><td colspan="7" style="text-align:center;color:var(--mut);padding:24px">\u6682\u65E0\u7528\u6237\uFF0C\u70B9\u51FB\u300C\u65B0\u589E\u7528\u6237\u300D\u521B\u5EFA</td></tr>';
}

function renderLogs(){
  const logs = window.__logs||[];
  $('#logList').innerHTML = logs.length ? logs.map(logLine).join('') : '<div class="hint">\u6682\u65E0\u65E5\u5FD7</div>';
}

function renderNet(){
  const n = window.__net||{};
  $('#netInfo').innerHTML = '<div style="display:grid;gap:6px;font-size:13px">'+
    row('\u51FA\u53E3 IP', n.ip||'-') + row('CF \u673A\u623F', n.colo||'-') +
    row('\u5730\u533A', n.loc||'-') +
    row('\u53CD\u4EE3\u6A21\u5F0F', CFG.proxyIpMode||'auto') + row('\u51FA\u7AD9\u65B9\u5F0F', CFG.outboundMode||'auto') +
    row('\u81EA\u5B9A\u4E49\u53CD\u4EE3', CFG.customProxyIp||'\uFF08\u672A\u8BBE\u7F6E\uFF09') +
    row('\u65F6\u95F4', new Date().toLocaleString('zh-CN')) + '</div>';
}

/* ==================== \u7528\u6237\u64CD\u4F5C ==================== */
function openUserForm(){ $('#uf-id').value=''; $('#userModalTitle').textContent='\u65B0\u589E\u7528\u6237';
  ['#uf-name','#uf-notes','#uf-total','#uf-daily','#uf-days','#uf-conn','#uf-proxyIp','#uf-cleanIp','#uf-ports'].forEach(s=>$(s).value='');
  $('#uf-mode').value=''; $('#userModal').classList.add('on'); }
function closeUserForm(){ $('#userModal').classList.remove('on'); }

function editUser(id){
  const u = USERS.find(x=>x.id===id); if(!u) return;
  $('#uf-id').value = u.id; $('#userModalTitle').textContent='\u7F16\u8F91\u7528\u6237 \xB7 '+u.name;
  $('#uf-name').value = u.name||''; $('#uf-notes').value = u.notes||'';
  $('#uf-total').value = u.limitTotalGb||''; $('#uf-daily').value = u.limitDailyGb||'';
  $('#uf-days').value = u.expiryMs ? Math.max(1, Math.round((u.expiryMs-Date.now())/86400000)) : '';
  $('#uf-conn').value = u.connLimit||''; $('#uf-proxyIp').value = u.proxyIp||'';
  $('#uf-cleanIp').value = u.cleanIp||''; $('#uf-ports').value = u.ports||''; $('#uf-mode').value = u.mode||'';
  $('#userModal').classList.add('on');
}

async function submitUserForm(){
  const id = $('#uf-id').value;
  const body = {
    name: $('#uf-name').value.trim(),
    notes: $('#uf-notes').value,
    limitTotalGb: $('#uf-total').value || 0,
    limitDailyGb: $('#uf-daily').value || 0,
    expiryDays: $('#uf-days').value || 0,
    connLimit: $('#uf-conn').value || 0,
    maxConfigs: 0,
    proxyIp: $('#uf-proxyIp').value,
    cleanIp: $('#uf-cleanIp').value,
    ports: $('#uf-ports').value,
    mode: $('#uf-mode').value
  };
  if(!body.name){ toast('\u8BF7\u586B\u5199\u7528\u6237\u540D','err'); return; }
  try{
    let j;
    if(id) j = await api('users?id='+id, body, 'PUT');
    else j = await api('users', body, 'POST');
    if(j.success){ toast(id?'\u5DF2\u66F4\u65B0':'\u5DF2\u521B\u5EFA','ok'); closeUserForm(); await loadUsers(); renderUsers(); }
    else toast(j.message||'\u64CD\u4F5C\u5931\u8D25','err');
  }catch(e){ toast('\u64CD\u4F5C\u5931\u8D25\uFF1A'+e.message,'err'); }
}

async function toggleUser(id){
  const j = await api('users?id='+id+'&action=toggle', {}, 'POST');
  if(j.success){ toast('\u5DF2\u5207\u6362\u72B6\u6001','ok'); await loadUsers(); renderUsers(); }
}
async function resetUser(id){
  if(!confirm('\u786E\u5B9A\u6E05\u96F6\u8BE5\u7528\u6237\u6D41\u91CF\u7EDF\u8BA1\uFF1F')) return;
  const j = await api('users?id='+id+'&action=reset', {}, 'POST');
  if(j.success){ toast('\u5DF2\u91CD\u7F6E','ok'); await loadUsers(); renderUsers(); }
}
async function delUser(id){
  if(!confirm('\u786E\u5B9A\u5220\u9664\u8BE5\u7528\u6237\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D')) return;
  const j = await api('users?id='+id, null, 'DELETE');
  if(j.success){ toast('\u5DF2\u5220\u9664','ok'); await loadUsers(); renderUsers(); }
}
function copySub(name){
  const u = location.origin + '/' + route() + '?sub=' + encodeURIComponent(name);
  if(navigator.clipboard) navigator.clipboard.writeText(u);
  toast('\u8BA2\u9605\u94FE\u63A5\u5DF2\u590D\u5236','ok');
}

/* ==================== \u7F51\u7EDC\u5DE5\u5177 ==================== */
async function runPing(){
  const t = $('#pingTarget').value.trim();
  if(!t){ toast('\u8BF7\u8F93\u5165\u76EE\u6807','err'); return; }
  $('#pingResult').textContent = '\u6D4B\u8BD5\u4E2D\u2026';
  const j = await api('tools', {op:'ping', target:t});
  $('#pingResult').textContent = j.success ? ('\u5EF6\u8FDF '+j.ms+' ms'+(j.colo?(' \xB7 \u673A\u623F '+j.colo):'')) : '\u6D4B\u8BD5\u5931\u8D25';
}
async function smartClean(){
  $('#cleanResult').textContent = '\u89E3\u6790\u4E2D\u2026';
  const j = await api('tools', {op:'smart-clean-ip'});
  if(j.success && j.ips){
    $('#cfg-cleanIps').value = j.ips;
    markDirty();
    $('#cleanResult').textContent = '\u5DF2\u89E3\u6790 '+j.ips.split(',').length+' \u4E2A IP\uFF0C\u8BB0\u5F97\u70B9\u300C\u4FDD\u5B58\u5168\u90E8\u300D';
  } else $('#cleanResult').textContent = '\u89E3\u6790\u5931\u8D25';
}
async function previewPreferred(){
  $('#cleanResult').textContent = '\u83B7\u53D6\u4E2D\u2026';
  const j = await api('tools', {op:'preview-preferred'});
  if(j.success){
    const s = j.stats||{};
    const src = s.onlineOk ? '\u5728\u7EBF\u5B9E\u6D4B\u63A5\u53E3 \u2705' : '\u5728\u7EBF\u63A5\u53E3\u4E0D\u53EF\u7528\uFF0C\u5DF2\u56DE\u9000\u5185\u7F6E\u5730\u5740\u6C60 \u26A0\uFE0F';
    $('#cleanResult').innerHTML = '\u6765\u6E90\uFF1A'+src+' \xB7 \u5171 '+s.total+' \u4E2A\uFF08Cloudflare \u6821\u9A8C\u901A\u8FC7 '+s.allCloudflare+' \u4E2A\uFF09<br>'
      + (j.list||[]).slice(0,20).map(x=>x.ip+':'+x.port+(x.name?(' ('+x.name+')'):'')).join('\u3000');
  } else $('#cleanResult').textContent = '\u83B7\u53D6\u5931\u8D25';
}

async function runSelfTest(){
  const el = $('#selfTestOut');
  el.innerHTML = '<div class="hint">\u81EA\u68C0\u4E2D\uFF0C\u7EA6\u9700 10~20 \u79D2\u2026</div>';
  const j = await api('tools', {op:'selftest'});
  if(!j.success){ el.innerHTML = '<div class="hint" style="color:var(--err)">\u81EA\u68C0\u8C03\u7528\u5931\u8D25</div>'; return; }
  const r = j.result;
  const rows = (r.checks||[]).map(c =>
    '<div class="logline"><span style="min-width:22px">'+(c.ok?'\u2705':'\u274C')+'</span>'
    + '<span style="flex:1">'+c.name+'</span>'
    + '<span style="color:'+(c.ok?'var(--mut)':'var(--err)')+';flex:2">'+String(c.detail||'').slice(0,120)+'</span>'
    + '<span style="color:var(--mut);min-width:60px;text-align:right">'+c.ms+'ms</span></div>').join('');
  el.innerHTML = '<div class="hint" style="margin-bottom:8px">'+r.summary+'</div>' + rows
    + '<details style="margin-top:10px"><summary>\u67E5\u770B\u5B8C\u6574\u914D\u7F6E\u5FEB\u7167</summary><pre class="mono" style="white-space:pre-wrap;font-size:11px;color:var(--mut)">'
    + JSON.stringify(r.config, null, 2).replace(/</g,'&lt;') + '</pre></details>';
}

async function previewProxyIp(){
  const el = $('#proxyPreview');
  el.textContent = '\u67E5\u8BE2\u4E2D\u2026';
  const region = ($('#cfg-proxyIpRegion')?.value || '').trim();
  const j = await api('tools', {op:'proxyip-preview', region});
  if(!j.success){ el.textContent = '\u67E5\u8BE2\u5931\u8D25'; return; }
  const list = j.list || [];
  el.innerHTML = '<b>\u6A21\u5F0F\uFF1A</b>'+j.mode+(j.region?(' \xB7 <b>\u5730\u533A\uFF1A</b>'+j.region):'')+(j.colo?(' \xB7 <b>\u673A\u623F\uFF1A</b>'+j.colo):'')
    + '<br><b>\u5B9E\u9645\u53CD\u4EE3\u5730\u5740\uFF08\u6309\u987A\u5E8F\u5C1D\u8BD5\uFF09\uFF1A</b><br>'
    + (list.length ? list.map(x=>'<span class="tag mut">'+x+'</span>').join(' ') : '<span class="tag err">\u65E0\uFF08\u5F53\u524D\u8BBE\u7F6E\u4E0B\u4E0D\u4F7F\u7528\u53CD\u4EE3\uFF09</span>')
    + '<br><span style="color:var(--mut)">\u4FDD\u5B58\u540E\uFF0C\u9009\u5B9A\u5730\u533A\u7684\u5730\u5740\u4F1A\u4EE5 ?wk= \u6216 ?proxyip= \u5F62\u5F0F\u5199\u5165\u8BA2\u9605\u8282\u70B9\uFF0C\u670D\u52A1\u7AEF\u6309\u8282\u70B9\u89E3\u6790\u751F\u6548\u3002</span>';
}

/* ==================== \u66F4\u65B0 ==================== */
async function checkUpdate(){
  if(!CFG.githubRepo){ $('#updateBanner').innerHTML=''; return; }
  try{
    const j = await api('update', {action:'check'});
    if(!j.success) return;
    window.__upd = j;
    if(j.updateAvailable){
      $('#updateBanner').innerHTML = '<div class="banner">\u{1F389} \u53D1\u73B0\u65B0\u7248\u672C <b>'+j.latest+'</b>\uFF08\u5F53\u524D '+j.current+'\uFF09'+
        (j.canDeploy ? '<button class="btn sm" onclick="doUpdate(false)">\u7ACB\u5373\u66F4\u65B0</button>' : '<span class="hint">\u8BF7\u5148\u5728\u4E0B\u65B9\u586B\u5199 Cloudflare \u51ED\u636E</span>')+'</div>';
    } else $('#updateBanner').innerHTML = '';
    $('#updateResult').textContent = '\u5F53\u524D '+j.current+' \xB7 \u6700\u65B0 '+j.latest+(j.canDeploy?' \xB7 \u51ED\u636E\u5DF2\u914D\u7F6E':' \xB7 \u51ED\u636E\u672A\u914D\u7F6E');
  }catch(e){}
}
async function doUpdate(force){
  if(force && !confirm('\u5F3A\u5236\u8986\u76D6\u90E8\u7F72\u4F1A\u7528 GitHub \u4E0A\u7684\u4EE3\u7801\u66FF\u6362\u5F53\u524D Worker\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F')) return;
  $('#updateResult').textContent = '\u90E8\u7F72\u4E2D\u2026';
  const j = await api('update', {action:'deploy', force: !!force});
  if(j.success){ toast('\u5DF2\u90E8\u7F72\uFF1A'+j.message,'ok'); $('#updateResult').textContent = j.message; }
  else { toast(j.message||'\u90E8\u7F72\u5931\u8D25','err'); $('#updateResult').textContent = j.message||'\u90E8\u7F72\u5931\u8D25'; }
}

/* ==================== \u4E8B\u4EF6\u7ED1\u5B9A ==================== */
document.addEventListener('DOMContentLoaded', ()=>{
  if(tryRestore()) doLogin(true);
  document.addEventListener('keydown', (e)=>{
    if((e.ctrlKey||e.metaKey) && e.key==='s'){ e.preventDefault(); if(CFG) save(); }
    if(e.key==='Enter' && $('#login').style.display!=='none') doLogin();
  });
  document.addEventListener('input', (e)=>{
    if(e.target.dataset && e.target.dataset.cfg) markDirty();
    if(e.target.id && e.target.id.startsWith('chk-')) markDirty();
  });
  document.addEventListener('change', (e)=>{
    if(e.target.dataset && e.target.dataset.cfg) markDirty();
    if(e.target.id && e.target.id.startsWith('chk-')) markDirty();
  });
});
<\/script>
</body>
</html>
`;var dn=`<!doctype html>
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
</html>`;D();var mr=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<title>\u7F3A\u5C11 KV \u7ED1\u5B9A</title><style>body{font-family:system-ui;background:#0f172a;color:#e2e8f0;display:flex;align-items:center;justify-content:center;height:100vh;margin:0}
.box{max-width:560px;padding:32px;background:#1e293b;border-radius:16px;line-height:1.8}
code{background:#0f172a;padding:2px 6px;border-radius:4px}</style></head><body><div class="box">
<h2>\u26A0\uFE0F \u672A\u68C0\u6D4B\u5230 KV \u547D\u540D\u7A7A\u95F4\u7ED1\u5B9A</h2>
<p>\u672C\u9762\u677F\u7684\u7528\u6237\u3001\u914D\u7F6E\u3001\u6D41\u91CF\u7EDF\u8BA1\u90FD\u5B58\u5728 Cloudflare KV \u91CC\uFF0C\u5FC5\u987B\u5148\u7ED1\u5B9A KV \u547D\u540D\u7A7A\u95F4\u3002</p>
<p><b>\u521B\u5EFA\u547D\u4EE4\uFF1A</b><br><code>npx wrangler kv namespace create CF_SUB_KV</code></p>
<p><b>\u7ED1\u5B9A\u53D8\u91CF\u540D\u5FC5\u987B\u586B\uFF1A</b><br><code>CF_SUB_KV</code></p>
<p>\u7ED1\u5B9A\u540E\u91CD\u65B0\u90E8\u7F72\u5373\u53EF\u6B63\u5E38\u4F7F\u7528\u3002\u8BE6\u7EC6\u6B65\u9AA4\u89C1 README\u300C\u90E8\u7F72\u65B9\u5F0F\u4E00\u300D\u3002</p></div></body></html>`,Fs={async fetch(e,t,n){try{if((e.headers.get("upgrade")||"").toLowerCase()==="websocket")return await Lt(e,t,n);let r=new URL(e.url);if(!W(t))return Q(mr,500);let s=await S(t);await L(t),s.uuid||(s.uuid=await Ee(`${s.masterKey}:${r.hostname}`),s.createdAt=Date.now(),await B(t,s));let o=String(s.apiRoute||"sub").replace(/^\/|\/$/g,""),a=r.pathname.split("/").filter(Boolean);if(e.method==="POST"&&hr(e,r))return await $t(e,t,n);if(e.method==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET,POST,PUT,DELETE,OPTIONS","access-control-allow-headers":"*"}});if(a[0]===o){let c=a[1]||"";return c==="dash"?Q(pn.replace(/__CURRENT_VERSION__/g,k).replace(/__API_ROUTE__/g,o)):c==="api"?await gr(e,r,t,n,s,a[2]||""):await yr(e,r,t,n,s)}return await _r(e,s)}catch(r){return console.error("fetch error",r),Ve("Internal Error",500)}},async scheduled(e,t,n){try{let r=await S(t);if(!r.autoUpdate||!r.githubRepo||!r.cfAccountId||!r.cfApiToken)return;let s=String(r.githubRepo).replace(/^https?:\/\/github\.com\//,"").replace(/\/$/,""),o=await b(`https://raw.githubusercontent.com/${s}/main/version`,{},8e3),a=o&&o.ok?(await o.text()).trim():"";if(!a||ye(k,a)>=0)return;let c=await b(`https://raw.githubusercontent.com/${s}/main/dist/_worker.js`,{},15e3);if(!c||!c.ok)return;let i=await c.text(),{deployToCloudflare:u}=await Promise.resolve().then(()=>(st(),un)),l=await u(r,i);await E(t,l.ok?"Auto-Update Success":"Auto-Update Failed",l.message||a)}catch(r){console.error("scheduled error",r)}}};function hr(e,t){if((e.headers.get("content-type")||"").toLowerCase().includes("application/grpc")||t.searchParams.has("xhttp"))return!0;let r=t.pathname.split("/").filter(Boolean).pop()||"";return/^[0-9a-f]{8}$/i.test(r)}async function gr(e,t,n,r,s,o){let a=null;if(e.method!=="GET"&&e.method!=="HEAD"){let c=(e.headers.get("content-type")||"").toLowerCase();try{if(c.includes("application/json"))a=await e.json();else{let i=await e.text();i&&(a=JSON.parse(i))}}catch{a=null}}switch(o){case"auth":return Ze(e,t,a,n,r);case"sync":return qe(e,t,a,n,r);case"users":return et(e,t,a,n,r);case"stats":return tt(e,t,a,n);case"logs":return nt(e,t,a,n);case"tools":return rt(e,t,a,n);case"update":return handleUpdate(e,t,a,n,r);default:return g({success:!1,message:"\u672A\u77E5\u63A5\u53E3"},404)}}async function yr(e,t,n,r,s){let o=t.searchParams.get("sub")||"",a=Qt(s,o);if(!a.length)return Ve("not found",404);let c=t.hostname,i=a[0],u=await Zt(i,s,c),l=(e.headers.get("user-agent")||"").toLowerCase(),p=l.includes("mozilla")&&!wr(l),d=t.searchParams.has("raw")||t.searchParams.has("b64")||t.searchParams.has("base64");if(p&&!d&&!s.subUserAgent)return Q(br(t,s,i));let f=(t.searchParams.get("flag")||t.searchParams.get("format")||t.searchParams.get("type")||t.searchParams.get("target")||"").toLowerCase(),h=xr(l,f),m,x;h==="clash"?(m=nn(u),x="text/yaml; charset=utf-8"):h==="singbox"?(m=rn(u),x="application/json; charset=utf-8"):h==="v2ray"?(m=sn(u),x="application/json; charset=utf-8"):(m=en(u),x="text/plain; charset=utf-8");let w=F(i.id),P=w.up+w.down,y=O(i.limitTotalGb),_={"content-type":x,"cache-control":"no-store","access-control-allow-origin":"*","profile-update-interval":"12","subscription-userinfo":`upload=${w.up}; download=${w.down}; total=${y||0}; expire=${i.expiryMs?Math.floor(i.expiryMs/1e3):4102329600}`};return l.includes("mozilla")||(_["content-disposition"]=`attachment; filename*=utf-8''${encodeURIComponent(i.name||"CFSub")}`),r.waitUntil(H(n)),new Response(m,{status:200,headers:_})}function wr(e){return/clash|meta|mihomo|stash|verge|sing-?box|hiddify|nekobox|karing|v2ray|shadowrocket|loon|surge|quantumult/i.test(e)}function xr(e,t){return t?["clash","yaml","meta","stash","clash-meta","y"].includes(t)?"clash":["sing","singbox","sing-box","sb"].includes(t)?"singbox":["v2ray","v"].includes(t)?"raw":["vjson","json"].includes(t)?"v2ray":"raw":/clash|meta|stash|verge|mihomo|cfw/i.test(e)?"clash":/sing-?box|hiddify|nekobox|sfa|karing/i.test(e)?"singbox":"raw"}function br(e,t,n){let r=F(n.id),s=r.up+r.down,o=O(n.limitTotalGb),a=r.dailyUp+r.dailyDown,c=O(n.limitDailyGb),i=`${e.origin}/${t.apiRoute}?sub=${encodeURIComponent(n.name||"")}`,u="\u6B63\u5E38";return n.status==="paused"?u="\u5DF2\u6682\u505C":n.expiryMs&&Date.now()>n.expiryMs?u="\u5DF2\u5230\u671F":o>0&&s>=o?u="\u6D41\u91CF\u5DF2\u7528\u5C3D":c>0&&a>=c&&(u="\u4ECA\u65E5\u6D41\u91CF\u5DF2\u7528\u5C3D"),dn.replace(/__USER_NAME__/g,n.name||"\u9ED8\u8BA4").replace(/__USER_ID__/g,n.id).replace(/__STATUS__/g,u).replace(/__TOTAL_USED__/g,U(s)).replace(/__TOTAL_LIMIT__/g,o>0?U(o):"\u4E0D\u9650").replace(/__TOTAL_PROGRESS__/g,String(o>0?Math.min(100,Math.round(s/o*100)):0)).replace(/__DAILY_USED__/g,U(a)).replace(/__DAILY_LIMIT__/g,c>0?U(c):"\u4E0D\u9650").replace(/__DAILY_PROGRESS__/g,String(c>0?Math.min(100,Math.round(a/c*100)):0)).replace(/__EXPIRY__/g,n.expiryMs?new Date(n.expiryMs).toLocaleString("zh-CN"):"\u6C38\u4E45").replace(/__SYNC_RAW__/g,i).replace(/__SYNC_CLASH__/g,`${i}&flag=clash`).replace(/__SYNC_SINGBOX__/g,`${i}&flag=singbox`).replace(/__SYNC_V2RAY__/g,`${i}&flag=v2ray`).replace(/__SYNC_BASE64__/g,`${i}&flag=base64`)}async function _r(e,t){let n=String(t.maintenanceHost||"").split(",").map(i=>i.trim()).filter(Boolean);if(!n.length)return Q("<h1>It works!</h1><p>CFSub is running.</p>");let r=e.headers.get("cf-connecting-ip")||"",s=0;for(let i of r)s+=i.charCodeAt(0);let o=n[s%n.length],a=new URL(e.url),c=await b(`${o}${a.pathname}${a.search}`,{method:e.method,headers:{"user-agent":e.headers.get("user-agent")||"Mozilla/5.0"}},8e3);return c?new Response(c.body,{status:c.status,headers:{"content-type":c.headers.get("content-type")||"text/html"}}):Q("<h1>Service Unavailable</h1>",502)}export{Fs as default};
