var an=Object.defineProperty;var U=(t,e)=>()=>(t&&(e=t(t=0)),e);var cn=(t,e)=>{for(var n in e)an(t,n,{get:e[n],enumerable:!0})};var dt,q,Ut,tt,qt,te,ee,ne,re,se,oe,Rt,ae,ie,H,ln,fr,Ct,ce,le,ue,pe,K=U(()=>{dt=["172.71.218.190","162.158.228.87","162.158.189.134","162.158.26.63","162.158.25.86","162.158.29.216","162.158.218.160","162.158.227.214","172.69.118.198","172.69.119.150"],q=[{domain:"ProxyIP.HK.CMLiusss.net",region:"HK",name:"\u9999\u6E2F"},{domain:"ProxyIP.US.CMLiusss.net",region:"US",name:"\u7F8E\u56FD"},{domain:"ProxyIP.SG.CMLiusss.net",region:"SG",name:"\u65B0\u52A0\u5761"},{domain:"ProxyIP.JP.CMLiusss.net",region:"JP",name:"\u65E5\u672C"},{domain:"ProxyIP.KR.CMLiusss.net",region:"KR",name:"\u97E9\u56FD"},{domain:"ProxyIP.DE.CMLiusss.net",region:"DE",name:"\u5FB7\u56FD"},{domain:"ProxyIP.SE.CMLiusss.net",region:"SE",name:"\u745E\u5178"},{domain:"ProxyIP.NL.CMLiusss.net",region:"NL",name:"\u8377\u5170"},{domain:"ProxyIP.FI.CMLiusss.net",region:"FI",name:"\u82AC\u5170"},{domain:"ProxyIP.GB.CMLiusss.net",region:"GB",name:"\u82F1\u56FD"},{domain:"ProxyIP.Oracle.cmliusss.net",region:"Oracle",name:"\u7532\u9AA8\u6587"},{domain:"ProxyIP.DigitalOcean.CMLiusss.net",region:"DigitalOcean",name:"DigitalOcean"},{domain:"ProxyIP.Vultr.CMLiusss.net",region:"Vultr",name:"Vultr"},{domain:"ProxyIP.Multacom.CMLiusss.net",region:"Multacom",name:"Multacom"}],Ut={US:["SG","JP","KR"],SG:["JP","KR","US"],JP:["SG","KR","US"],KR:["JP","SG","US"],HK:["SG","JP","US"],DE:["NL","GB","SE","FI"],SE:["DE","NL","FI","GB"],NL:["DE","GB","SE","FI"],FI:["SE","DE","NL","GB"],GB:["DE","NL","SE","FI"]},tt=["cloudflare.182682.xyz","speed.marisalnc.com","freeyx.cloudflare88.eu.org","bestcf.top","cdn.2020111.xyz","cfip.cfcdn.vip","cf.0sm.com","cf.090227.xyz","cf.zhetengsha.eu.org","cloudflare.9jy.cc","cf.zerone-cdn.pp.ua","cfip.1323123.xyz","cnamefuckxxs.yuchen.icu","cloudflare-ip.mofashi.ltd","115155.xyz","cname.xirancdn.us","f3058171cad.002404.xyz","8.889288.xyz","cdn.tzpro.xyz","cf.877771.xyz","xn--b6gac.eu.org"],qt="proxyip.cmliussss.net",te="proxyip.tp1.090227.xyz",ee="https://api.uouin.com/index.php/index/Cloudflare",ne="DdlTxtN0sUOu",re="70cloudflareapikey",se={bgp:"\u591A\u7EBF",ctcc:"\u7535\u4FE1",cucc:"\u8054\u901A",cmcc:"\u79FB\u52A8",ipv6:"IPv6"},oe=["173.245.48.0/20","103.21.244.0/22","103.22.200.0/22","103.31.4.0/22","141.101.64.0/18","108.162.192.0/18","190.93.240.0/20","188.114.96.0/20","197.234.240.0/22","198.41.128.0/17","162.158.0.0/15","104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","131.0.72.0/22"],Rt=[{name:"CF \u5B98\u65B9\u6BB5",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR.txt",isp:"cf"},{name:"CF \u7535\u4FE1\u4F18\u9009",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/ct.txt",isp:"ct"},{name:"CF \u8054\u901A\u4F18\u9009",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/cu.txt",isp:"cu"},{name:"CF \u79FB\u52A8\u4F18\u9009",url:"https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/cmcc.txt",isp:"cmcc"}],ae={cmcc:"\u79FB\u52A8",cu:"\u8054\u901A",ct:"\u7535\u4FE1",cf:"\u5B98\u65B9"},ie=["104.16.0.0/13"],H=[443,2053,2083,2087,2096,8443],ln=[80,8080,8880,2052,2082,2086,2095],fr=[...H,...ln],Ct="https://cloudflare-dns.com/dns-query",ce="cloudflare-ech.com",le="1.1.1.1",ue="8.8.4.4",pe=["www.speedtest.net","grok.com","feedback.spotify.com","www.hcaptcha.com","chatgpt.com","sourceforge.net","www.wikipedia.org","cdn.jsdelivr.net"]});var C,Dt,de,gr,ft=U(()=>{K();C="1.0.0",Dt={name:"",apiRoute:"sub",masterKey:"admin",isPaused:!1,uuid:"",trojanPassword:"",mode:"vless",protocols:{vless:!0,trojan:!1,xhttp:!1},ports:H.join(","),path:"/",hosts:"",fp:"chrome",alpn:"",ech:!1,echDomain:ce,echDns:Ct,allowInsecure:!1,enableTfo:!1,enableEarlyData:!0,enableOfficialIp:!0,enablePreferredDomain:!0,enablePreferredIp:!0,enableRemotePreferred:!0,customPreferred:"",preferredUrls:"",preferredCount:12,proxyIpMode:"auto",proxyIpRegion:"",customProxyIp:"",backupProxyIp:"proxyip.tp1.090227.xyz",nat64:"",outboundProxy:"",outboundMode:"auto",customDns:Ct,resolveIp:le,cleanIps:"",maintenanceHost:"https://www.ubuntu.com",enableDirectConfigs:!0,nameStrategy:"default",namePrefix:"CFSub",subUserAgent:"",subConverter:"https://url.v1.mk/sub",maxConfigs:12,users:[],limitTotalGb:0,limitDailyGb:0,expiryDays:0,githubRepo:"",autoUpdate:!1,autoUpdateFormat:"plain",deployTarget:"worker",cfAccountId:"",cfApiToken:"",cfWorkerName:"",cfPagesProject:"",tgToken:"",tgChatId:"",tgAdminId:"",silentAlerts:!1,panelApiKeys:[],logs:[],createdAt:0,updatedAt:0},de=()=>({id:"",uuid:"",name:"",notes:"",status:"active",limitTotalGb:null,limitDailyGb:null,expiryMs:null,maxConfigs:null,connLimit:null,proxyIp:"",cleanIp:"",ports:"",mode:"",disabledReason:"",disabledAt:0,createdAt:0}),gr=1024*1024*1024});function fn(t){return/^(1|true|yes|on)$/i.test(String(t||"").trim())}function fe(t,e){let n=[];if(!e)return n;for(let[r,s]of Object.entries(un)){let o=e[r];o==null||String(o).trim()===""||(t[s]=String(o).trim(),n.push(s))}for(let[r,s]of Object.entries(pn)){let o=e[r];o==null||String(o).trim()===""||(t[s]=fn(o),n.push(s))}for(let[r,s]of Object.entries(dn)){let o=e[r];if(o==null||String(o).trim()==="")continue;let a=Number(o);Number.isNaN(a)||(t[s]=a,n.push(s))}return[...new Set(n)]}function me(t){let e={};for(let[n,r]of Object.entries(t))n.startsWith("__")||(e[n]=r);return e}var un,pn,dn,he=U(()=>{un={UUID:"uuid",TROJAN_PASSWORD:"trojanPassword",MASTER_KEY:"masterKey",ADMIN:"masterKey",PASSWORD:"masterKey",API_ROUTE:"apiRoute",NAME:"name",MODE:"mode",PROTOCOL:"mode",PORTS:"ports",SUB_PATH:"path",WSPATH:"path",HOSTS:"hosts",HOST:"hosts",FP:"fp",FINGERPRINT:"fp",ALPN:"alpn",NAME_PREFIX:"namePrefix",PROXYIP_MODE:"proxyIpMode",PROXYIP:"customProxyIp",P:"customProxyIp",PROXYIP_REGION:"proxyIpRegion",WK:"proxyIpRegion",BACKUP_PROXYIP:"backupProxyIp",NAT64:"nat64",PREFERRED:"customPreferred",YX:"customPreferred",PREFERRED_URLS:"preferredUrls",YXURL:"preferredUrls",CLEAN_IPS:"cleanIps",CLEANIP:"cleanIps",OUTBOUND:"outboundProxy",S:"outboundProxy",OUTBOUND_MODE:"outboundMode",QJ:"outboundMode",DOH:"customDns",CUSTOM_DNS:"customDns",RESOLVE_IP:"resolveIp",MAINTENANCE_HOST:"maintenanceHost",URL:"maintenanceHost",ECH_DOMAIN:"echDomain",ECH_DNS:"echDns",SUB_USER_AGENT:"subUserAgent",SUB_CONVERTER:"subConverter",MAX_CONFIGS:"maxConfigs",GITHUB_REPO:"githubRepo",DEPLOY_TARGET:"deployTarget",CF_ACCOUNT_ID:"cfAccountId",CF_API_TOKEN:"cfApiToken",CF_WORKER_NAME:"cfWorkerName",CF_PAGES_PROJECT:"cfPagesProject",TG_TOKEN:"tgToken",TG_CHAT_ID:"tgChatId",TG_ADMIN_ID:"tgAdminId"},pn={KILL_SWITCH:"isPaused",PAUSED:"isPaused",ECH:"ech",ENABLE_EARLY_DATA:"enableEarlyData",ALLOW_INSECURE:"allowInsecure",ENABLE_TFO:"enableTfo",ENABLE_OFFICIAL_IP:"enableOfficialIp",ENABLE_PREFERRED_DOMAIN:"enablePreferredDomain",ENABLE_PREFERRED_IP:"enablePreferredIp",ENABLE_REMOTE_PREFERRED:"enableRemotePreferred",ENABLE_DIRECT_CONFIGS:"enableDirectConfigs",AUTO_UPDATE:"autoUpdate",SILENT_ALERTS:"silentAlerts"},dn={LIMIT_TOTAL_GB:"limitTotalGb",LIMIT_DAILY_GB:"limitDailyGb",EXPIRY_DAYS:"expiryDays",PREFERRED_COUNT:"preferredCount",MAX_CONFIGS_N:"maxConfigs"}});function ge(t){let e=new TextEncoder().encode(t),n="";for(let r of e)n+=String.fromCharCode(r);return btoa(n)}function ye(t){let e=t.replace(/-/g,"+").replace(/_/g,"/"),n=e.length%4?"=".repeat(4-e.length%4):"",r=atob(e+n),s=new Uint8Array(r.length);for(let o=0;o<r.length;o++)s[o]=r.charCodeAt(o);return s}function xe(){return crypto.randomUUID()}function kt(t){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(t||""))}function et(t){let e=String(t).replace(/-/g,"");if(e.length!==32)return null;let n=new Uint8Array(16);for(let r=0;r<16;r++)n[r]=parseInt(e.substr(r*2,2),16);return n}function N(t){return Array.isArray(t)?t.filter(Boolean).map(e=>String(e).trim()):String(t||"").split(/[\s,;|]+/).map(e=>e.trim()).filter(Boolean)}function Lt(t){return String(t||"").split(/[\r\n]+/).map(e=>e.trim()).filter(Boolean)}function z(t,e=null){let n=String(t||"").trim();if(!n)return{host:"",port:e};if(n.startsWith("[")){let s=n.match(/^\[([^\]]+)\](?::(\d+))?$/);return s?{host:s[1],port:s[2]?parseInt(s[2],10):e}:{host:n,port:e}}let r=n.lastIndexOf(":");return r>0&&/^\d+$/.test(n.slice(r+1))?{host:n.slice(0,r),port:parseInt(n.slice(r+1),10)}:{host:n,port:e}}function $(t){return/^(\d{1,3}\.){3}\d{1,3}$/.test(t)&&t.split(".").every(e=>+e>=0&&+e<=255)}function we(t,e){let n=String(e||"").replace(/^\[|\]$/g,"");if(!n||!$(t))return null;let r=t.split(".").map(c=>parseInt(c,10)),s=c=>c.toString(16).padStart(2,"0"),o=`${s(r[0])}${s(r[1])}:${s(r[2])}${s(r[3])}`;return(n.endsWith(":")?n:n+":")+o}function M(t){let e=[...t];for(let n=e.length-1;n>0;n--){let r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e}function T(t){let e=Number(t)||0;return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(2)} KB`:e<1024*1024*1024?`${(e/1024/1024).toFixed(2)} MB`:`${(e/1024/1024/1024).toFixed(2)} GB`}function D(t){let e=Number(t);return e>0?Math.floor(e*1024*1024*1024):0}function g(t,e=200,n={}){return new Response(JSON.stringify(t),{status:e,headers:{"content-type":"application/json; charset=utf-8",...n}})}function J(t,e=200,n={}){return new Response(t,{status:e,headers:{"content-type":"text/html; charset=utf-8",...n}})}function Ot(t,e=200,n={}){return new Response(t,{status:e,headers:{"content-type":"text/plain; charset=utf-8",...n}})}async function _(t,e={},n=8e3){let r=new AbortController,s=setTimeout(()=>r.abort(),n);try{return await fetch(t,{...e,signal:r.signal})}catch{return null}finally{clearTimeout(s)}}function mt(){return new Date().toISOString().slice(0,10)}async function ht(t){let e=new TextEncoder().encode(t);if(vt===!1)return null;try{let n=await crypto.subtle.digest("MD5",e);return vt=!0,[...new Uint8Array(n)].map(r=>r.toString(16).padStart(2,"0")).join("")}catch{return vt=!1,null}}async function mn(t){let e=await ht(t);if(e)return e;let n=2166136261;for(let r of new TextEncoder().encode(t))n^=r,n=n*16777619>>>0;return n.toString(16).padStart(8,"0").repeat(4).slice(0,32)}async function gt(t){let e=await mn(String(t)),n=(e+e).slice(0,32).split("");return n[12]="4",n[16]=["8","9","a","b"][parseInt(n[16],16)%4],`${n.slice(0,8).join("")}-${n.slice(8,12).join("")}-${n.slice(12,16).join("")}-${n.slice(16,20).join("")}-${n.slice(20,32).join("")}`}var vt,R=U(()=>{vt=null});function V(t){return t.CF_SUB_KV||t.KV||t.C||t.cfsub||null}function xt(t){return!!V(t)}async function S(t){let e=Date.now();if(nt&&e-Nt<hn)return nt;let n=V(t),r=null;if(n)try{r=await n.get(_e,{type:"json"})}catch{r=null}let s={...Dt,...r||{}};return s.protocols={...Dt.protocols,...r?.protocols||{}},Array.isArray(s.users)||(s.users=[]),Array.isArray(s.panelApiKeys)||(s.panelApiKeys=[]),Array.isArray(s.logs)||(s.logs=[]),s.__locked=fe(s,t),nt=s,Nt=e,s}async function B(t,e){e.updatedAt=Date.now(),nt=e,Nt=Date.now();let n=V(t);if(n)try{await n.put(_e,JSON.stringify(me(e)))}catch(r){console.error("saveConfig failed",r)}return e}async function v(t){if(A)return A;let e=V(t),n=null;if(e)try{n=await e.get(Se,{type:"json"})}catch{n=null}return A=n&&n.users?n:{users:{}},A}function G(t,e=0,n=0){A||(A={users:{}});let r=String(t||"default"),s=mt(),o=A.users[r];return o||(o=A.users[r]={up:0,down:0,dailyUp:0,dailyDown:0,lastDay:s,connects:0,last:0}),o.lastDay!==s&&(o.dailyUp=0,o.dailyDown=0,o.lastDay=s),o.up+=e,o.down+=n,o.dailyUp+=e,o.dailyDown+=n,yt=!0,o}function Pe(t){let e=G(t,0,0);return e.connects+=1,e.last=Date.now(),e}function F(t){let e=String(t||"default");return A?.users?.[e]||{up:0,down:0,dailyUp:0,dailyDown:0,lastDay:mt(),connects:0,last:0}}function Ae(t){A||(A={users:{}});let e=String(t||"default");A.users[e]&&(A.users[e]={up:0,down:0,dailyUp:0,dailyDown:0,lastDay:mt(),connects:0,last:0}),yt=!0}async function j(t,e=!1){if(!yt)return;let n=Date.now();if(!e&&n-be<gn)return;let r=V(t);if(r)try{await r.put(Se,JSON.stringify(A))}catch(s){console.error("flushUsage failed",s);return}yt=!1,be=n}async function E(t,e,n){let r=await S(t);r.logs=Array.isArray(r.logs)?r.logs:[],r.logs.unshift({ts:new Date().toISOString(),type:e,detail:n}),r.logs.length>100&&(r.logs=r.logs.slice(0,100)),nt=r;let s=V(t);if(s)try{await s.put(Ie,JSON.stringify(r.logs))}catch{}return r.logs}async function Ee(t){let e=V(t);if(e)try{let r=await e.get(Ie,{type:"json"});if(Array.isArray(r))return r}catch{}return(await S(t)).logs||[]}var _e,Se,Ie,hn,gn,nt,Nt,A,yt,be,rt=U(()=>{ft();he();R();_e="sys_config",Se="sys_usage",Ie="sys_logs",hn=3e4,gn=12e4,nt=null,Nt=0,A=null,yt=!1,be=0});function wn(t,e,n){let r=t.length,s=new Uint8Array((r+8>>6)+1<<6);s.set(t),s[r]=128;let o=r*8,a=new DataView(s.buffer);a.setUint32(s.length-4,o>>>0),a.setUint32(s.length-8,Math.floor(o/4294967296));let c=e.slice(),i=new Uint32Array(64);for(let l=0;l<s.length;l+=64){for(let y=0;y<16;y++)i[y]=a.getUint32(l+y*4);for(let y=16;y<64;y++){let w=(i[y-15]>>>7|i[y-15]<<25)^(i[y-15]>>>18|i[y-15]<<14)^i[y-15]>>>3,L=(i[y-2]>>>17|i[y-2]<<15)^(i[y-2]>>>19|i[y-2]<<13)^i[y-2]>>>10;i[y]=i[y-16]+w+i[y-7]+L>>>0}let[p,d,f,h,m,b,x,P]=c;for(let y=0;y<64;y++){let w=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7),L=m&b^~m&x,I=P+w+L+yn[y]+i[y]>>>0,O=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),W=p&d^p&f^d&f,X=O+W>>>0;P=x,x=b,b=m,m=h+I>>>0,h=f,f=d,d=p,p=I+X>>>0}c[0]=c[0]+p>>>0,c[1]=c[1]+d>>>0,c[2]=c[2]+f>>>0,c[3]=c[3]+h>>>0,c[4]=c[4]+m>>>0,c[5]=c[5]+b>>>0,c[6]=c[6]+x>>>0,c[7]=c[7]+P>>>0}let u="";for(let l=0;l<n;l++)u+=c[l].toString(16).padStart(8,"0");return u}function $t(t){return wn(new TextEncoder().encode(String(t)),xn,7)}function Te(t){let e=t.headers.get("sec-websocket-protocol");if(!e)return null;try{let n=ye(e);return n.length?n:null}catch{return null}}function wt(t){if(t.byteLength<24)throw new Error("invalid data");let e=new Uint8Array(t),n=new DataView(t),r=e[0],s=e.slice(1,17),a=18+e[17];if(a+4>e.length)throw new Error("invalid data");let c=e[a],i=n.getUint16(a+1),u=e[a+3];a+=4;let l="";if(u===1){if(a+4>e.length)throw new Error("invalid addressType");l=Array.from(e.slice(a,a+4)).join("."),a+=4}else if(u===2){let p=e[a];if(a+=1,a+p>e.length)throw new Error("invalid addressType");l=new TextDecoder().decode(e.slice(a,a+p)),a+=p}else if(u===3){if(a+16>e.length)throw new Error("invalid addressType");let p=[];for(let d=0;d<8;d++)p.push(n.getUint16(a+d*2).toString(16));l=p.join(":"),a+=16}else throw new Error("invalid addressType");if(!l)throw new Error("addressValue is empty");return{version:r,uuidBytes:s,command:c,port:i,addressType:u,address:l,rawIndex:a}}function Re(t,e){let n=new Uint8Array(t);if(n.length<58)throw new Error("invalid data");let r=new TextDecoder().decode(n.slice(0,56)).toLowerCase();if(!r||r!==String(e).toLowerCase())throw new Error("invalid password");if(n[56]!==13||n[57]!==10)throw new Error("invalid data");let s=58,o=n[s];if(o!==1)throw new Error("unsupported command, only TCP (CONNECT) is allowed");s+=1;let a=n[s];s+=1;let c="";if(a===1)c=Array.from(n.slice(s,s+4)).join("."),s+=4;else if(a===3){let l=n[s];s+=1,c=new TextDecoder().decode(n.slice(s,s+l)),s+=l}else if(a===4){let l=new DataView(t),p=[];for(let d=0;d<8;d++)p.push(l.getUint16(s+d*2).toString(16));c=p.join(":"),s+=16}else throw new Error("invalid addressType");let u=new DataView(t).getUint16(s);if(s+=2,n[s]===13&&n[s+1]===10&&(s+=2),!c)throw new Error("addressValue is empty");return{command:o,port:u,address:c,rawIndex:s}}function st(t){let e=String(t||"").trim();if(!e)return null;let n="socks5",r=e,s=e.match(/^(socks5|socks|https|http):\/\/(.*)$/i);if(s){let d=s[1].toLowerCase();n=d==="socks"?"socks5":d,r=s[2]}r=r.split("/")[0];let o=null,a=r.lastIndexOf("@");a>0&&(o=r.slice(0,a),r=r.slice(a+1));let c=n==="http"?80:n==="https"?443:1080,{host:i,port:u}=z(r,c);if(!i||!u)return null;let l="",p="";if(o){let d=o.indexOf(":");l=d>0?o.slice(0,d):o,p=d>0?o.slice(d+1):""}return{kind:n,host:i,port:u,username:l,password:p}}var yn,xn,Ue,bt=U(()=>{R();yn=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],xn=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428];Ue=2});import{connect as Ce}from"cloudflare:sockets";function Mt(t,e=""){let n=[],r=N(t.customProxyIp);if(r.length)return r;if(t.proxyIpMode==="off")return n;if(t.proxyIpMode==="region"&&t.proxyIpRegion){let s=String(t.proxyIpRegion).toUpperCase(),o=q.filter(i=>i.region.toUpperCase()===s);if(t.rm===!1){for(let i of o)n.push(`${i.domain}:443`);return n}let a=(Ut[s]||[]).flatMap(i=>q.filter(u=>u.region.toUpperCase()===i)),c=q.filter(i=>i.region.toUpperCase()!==s&&!(Ut[s]||[]).includes(i.region));for(let i of[...o,...a,...c])n.push(`${i.domain}:443`);return n}if(t.proxyIpMode==="custom")return n;if(t.enableOfficialIp!==!1)for(let s of M(dt))n.push(`${s}:443`);if(e&&n.push(`${e}.${qt}:443`),t.enablePreferredDomain!==!1)for(let s of M(tt))n.push(`${s}:443`);for(let s of M(q))n.push(`${s.domain}:443`);return t.backupProxyIp?n.push(t.backupProxyIp):n.push(te),n}function Gt(t,e){let{host:n,port:r}=z(t,null),s=String(n).match(/\.tp(\d+)/),o=r;if(!o&&s){let a=parseInt(s[1],10);a>1&&a<65536&&(o=a)}return{host:n,port:o||e||443}}function _t(t,e,n,r=""){let s=n.__outbound||null,o=[],a=Mt(n,r),c={host:t,port:e,via:null,label:"\u76F4\u8FDE"},i=s?{host:t,port:e,via:s.kind,label:`\u51FA\u7AD9\u4EE3\u7406(${s.kind})`}:null,u=n.nat64&&$(t)?{host:we(t,n.nat64),port:e,via:null,label:"NAT64"}:null,l=a.slice(0,6).map(p=>{let{host:d,port:f}=Gt(p,e);return{host:d,port:f,via:null,label:`\u53CD\u4EE3 ${d}`}});switch(n.outboundMode){case"proxy-first":i&&o.push(i),o.push(c,...l),u&&o.push(u);break;case"proxy-only":i&&o.push(i);break;case"direct-first":o.push(c,...l),i&&o.push(i),u&&o.push(u);break;default:o.push(c,...l),i&&o.push(i),u&&o.push(u)}return o}async function St(t,e){let{host:n,port:r,via:s}=t;if(!s)return await Ce({hostname:n,port:r});let o=e.__outbound;if(!o)throw new Error("no outbound proxy configured");let a=await Ce({hostname:o.host,port:o.port,secureTransport:o.kind==="https"?"on":"off"});return o.kind==="socks5"?await bn(a,n,r,o):await _n(a,n,r,o),a}async function bn(t,e,n,r){let s=t.writable.getWriter(),o=!!(r.username||r.password);await s.write(new Uint8Array(o?[5,2,0,2]:[5,1,0]));let a=t.readable.getReader(),c=await ot(a,2);if(c[1]===2){let f=new TextEncoder().encode(r.username||""),h=new TextEncoder().encode(r.password||""),m=new Uint8Array(3+f.length+h.length);if(m[0]=1,m[1]=f.length,m.set(f,2),m[2+f.length]=h.length,m.set(h,3+f.length),await s.write(m),(await ot(a,2))[1]!==0)throw new Error("socks5 auth failed")}else if(c[1]!==0)throw new Error("socks5 method not supported");let i=new TextEncoder().encode(e),u=new Uint8Array(5+i.length);u[0]=5,u[1]=1,u[2]=0,u[3]=3,u[4]=i.length,u.set(i,5);let l=new Uint8Array(u.length+2);l.set(u),l[u.length]=n>>8,l[u.length+1]=n&255,await s.write(l);let p=await ot(a,4);if(p[1]!==0)throw new Error(`socks5 connect failed: ${p[1]}`);let d=0;p[3]===1?d=4:p[3]===4?d=16:p[3]===3&&(d=(await ot(a,1))[0]),await ot(a,d+2),s.releaseLock(),a.releaseLock()}async function _n(t,e,n,r){let s=t.writable.getWriter(),o=n===80?e:`${e}:${n}`,a=`CONNECT ${o} HTTP/1.1\r
Host: ${o}\r
`;if(r.username||r.password){let p=btoa(`${r.username||""}:${r.password||""}`);a+=`Proxy-Authorization: Basic ${p}\r
`}a+=`\r
`,await s.write(new TextEncoder().encode(a));let c=t.readable.getReader(),i="",u=new TextDecoder;for(;!i.includes(`\r
\r
`);){let{value:p,done:d}=await c.read();if(d)throw new Error("proxy closed");if(i+=u.decode(p,{stream:!0}),i.length>4096)break}let l=parseInt((i.match(/^HTTP\/1\.[01] (\d+)/)||[])[1]||"0",10);if(l<200||l>=300)throw new Error(`proxy CONNECT failed: ${l}`);s.releaseLock(),c.releaseLock()}async function ot(t,e){if(e<=0)return new Uint8Array(0);let n=[],r=0;for(;r<e;){let{value:a,done:c}=await t.read();if(c)throw new Error("unexpected EOF");n.push(a),r+=a.length}let s=new Uint8Array(r),o=0;for(let a of n)s.set(a,o),o+=a.length;return s.slice(0,e)}function at(t){try{t.close()}catch{}}var It=U(()=>{R();K()});function On(t,e){let n=t.split(".").filter(Boolean),r=new TextEncoder,s=[];for(let i of n){let u=r.encode(i);s.push(new Uint8Array([u.length]),u)}s.push(new Uint8Array([0]));let o=Nn(s),a=new Uint8Array(12+o.length+4),c=new DataView(a.buffer);return c.setUint16(0,Math.floor(Math.random()*65535)),c.setUint16(2,256),c.setUint16(4,1),a.set(o,12),c.setUint16(12+o.length,Ln[e]||1),c.setUint16(12+o.length+2,1),a}function Nn(t){let e=t.reduce((s,o)=>s+o.length,0),n=new Uint8Array(e),r=0;for(let s of t)n.set(s,r),r+=s.length;return n}function $n(t,e){let n=new DataView(t),r=n.getUint16(4),s=n.getUint16(6),o=12;for(let c=0;c<r;c++)o=Le(t,o),o+=4;let a=[];for(let c=0;c<s;c++){o=Le(t,o);let i=n.getUint16(o),u=n.getUint16(o+8);o+=10;let l=new Uint8Array(t,o,u);if(i===1&&u===4&&(e==="A"||e==="ANY"))a.push(Array.from(l).join("."));else if(i===28&&u===16&&(e==="AAAA"||e==="ANY")){let p=[];for(let d=0;d<8;d++)p.push(n.getUint16(o+d*2).toString(16));a.push(p.join(":"))}else if(i===16&&e==="TXT"){let p="",d=0;for(;d<l.length;){let f=l[d];p+=new TextDecoder().decode(l.slice(d+1,d+1+f)),d+=1+f}a.push(p)}o+=u}return a}function Le(t,e){let n=new DataView(t),r=e;for(;;){let s=n.getUint8(r);if(s===0)return r+1;if((s&192)===192)return r+2;r+=1+s}}async function Ne(t,e="A",n="https://cloudflare-dns.com/dns-query",r=3e5){let s=`${e}|${t}`,o=Oe.get(s);if(o&&Date.now()-o.at<r)return o.val;let a=On(t,e),c=btoa(String.fromCharCode(...a)),i=`${n}?dns=${c.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}`,u=await _(i,{headers:{accept:"application/dns-message"}},6e3);if(!u||!u.ok)return o?.val||[];let l=await u.arrayBuffer(),p=$n(l,e);return Oe.set(s,{at:Date.now(),val:p}),p}var Ln,Oe,$e=U(()=>{R();Ln={A:1,AAAA:28,TXT:16,HTTPS:65,CNAME:5};Oe=new Map});function Be(t){let e=t.split(".").map(Number);return(e[0]<<24|e[1]<<16|e[2]<<8|e[3])>>>0}function Pt(t){if(!$(t))return!1;let e=Be(t);return Mn.some(n=>(e&n.mask)===n.net)}function Me(t){let[e,n]=String(t).split("/"),r=parseInt(n,10);if(!$(e)||!(r>0&&r<32))return null;let s=32-r,o=e.split(".").reduce((u,l,p)=>u|parseInt(l,10)<<24-p*8,0)>>>0,a=4294967295<<s>>>0,c=Math.floor(Math.random()*Math.pow(2,s)),i=((o&a)>>>0)+c>>>0;return[i>>>24&255,i>>>16&255,i>>>8&255,i&255].join(".")}async function Ft(t){if(k.val.length&&Date.now()-k.at<Gn)return k.val;try{let e=String(Date.now()),n=await ht(ne);if(!n)return k.val;let r=await ht(n+re+e);if(!r)return k.val;let s=await _(`${ee}?key=${r}&time=${e}`,{headers:{"User-Agent":"Mozilla/5.0",accept:"application/json"}},8e3);if(!s||!s.ok)return k.val;let o=await s.json(),a=o&&o.data;if(!a)return k.val;let c=t?.enablePreferredIPv6===!0,i=[];for(let[u,l]of Object.entries(se)){let p=u==="ipv6";if(p&&!c)continue;let d=a[u]&&Array.isArray(a[u].info)?a[u].info:[];for(let f of d){let h=String(f?.ip||"").trim();h&&(!p&&!Pt(h)||i.push({ip:h,port:443,name:`${l}\u4F18\u9009`,isp:u}))}}return i.length&&(k.at=Date.now(),k.val=i),i}catch{return k.val}}async function Bn(t){let e=Ge.get(t);if(e&&Date.now()-e.at<Fn)return e.val;let n=await _(t,{headers:{"user-agent":"CFSub/1.0"}},8e3);if(!n||!n.ok)return[];let r=await n.text(),s=Lt(r).filter(o=>!o.startsWith("#"));return Ge.set(t,{at:Date.now(),val:s}),s}function Fe(t,e=443){let n=String(t).trim();if(!n||n.startsWith("//"))return null;let r=n.indexOf("#"),s=r>=0?n.slice(0,r):n,o=r>=0?n.slice(r+1).trim():"",{host:a,port:c}=z(s,null);return a?{ip:a,port:c||e,name:o}:null}async function At(t,e=12){let n=[],r=new Set,s=o=>{if(!o||!o.ip||$(o.ip)&&!Pt(o.ip))return;let a=`${o.ip}:${o.port}`;r.has(a)||(r.add(a),n.push(o))};if(t.customPreferred)for(let o of Lt(t.customPreferred))s(Fe(o));if(t.cleanIps)for(let o of N(t.cleanIps))s({ip:o,port:443,name:"CleanIP"});if(t.enablePreferredIp!==!1){let o=await Ft(t);for(let a of M(o).slice(0,Math.max(4,e)))s(a)}if(n.length<e&&t.enableRemotePreferred!==!1){let o=[...N(t.preferredUrls),...Rt.map(c=>c.url)];(await Promise.allSettled(o.slice(0,4).map(Bn))).forEach((c,i)=>{if(c.status!=="fulfilled"||n.length>=e)return;let u=Rt.find(p=>p.url===o[i]),l=u?`${ae[u.isp]||""}\u4F18\u9009`:"\u4F18\u9009";for(let p of M(c.value).slice(0,Math.ceil(e/2))){if(n.length>=e)break;if(p.includes("/")){let d=Me(p);d&&s({ip:d,port:443,name:l})}else{let d=Fe(p);d&&s({...d,name:d.name||l})}}})}if(!n.length)for(let o of M(dt))s({ip:o,port:443,name:"\u5B98\u65B9\u76F4\u8FDE"});if(!n.length)for(let o=0;o<Math.min(e,8);o++){let a=Me(ie[0]);a&&s({ip:a,port:443,name:"\u5B98\u65B9\u4F18\u9009"})}return n.slice(0,Math.max(1,e))}async function je(t,e=6){return t.enablePreferredDomain===!1?[]:M(tt).slice(0,e).map(n=>({ip:n,port:443,name:n.split(".")[0]}))}async function He(t,e){let n=t&&t.length?t:jn,r=[...new Set([e,"https://dns.google/dns-query","https://223.5.5.5/dns-query","https://cloudflare-dns.com/dns-query"].filter(Boolean))],s=new Set;return await Promise.all(n.slice(0,12).map(async o=>{for(let a of r){let i=(await Ne(o,"A",a)).filter(u=>$(u));if(i.length){for(let u of i.slice(0,2))s.add(u);return}}})),[...s].slice(0,16).join(",")}function Ke(t,e=H){let n=N(t).map(r=>parseInt(r,10)).filter(r=>r>0&&r<65536);return n.length?n:[...e]}function Bt(t){return H.includes(Number(t))}var Mn,k,Gn,Ge,Fn,jn,jt=U(()=>{R();$e();K();Mn=oe.map(t=>{let[e,n]=t.split("/"),r=4294967295<<32-Number(n)>>>0;return{net:Be(e)&r,mask:r}});k={at:0,val:[]},Gn=300*1e3;Ge=new Map,Fn=600*1e3;jn=tt.slice(0,8)});function Ye(t){return t&&(t.match(/\{[A-Z_]+\}/g)||[]).find(n=>!Hn.includes(n))||null}function Kn(t,e){return String(t).replace(/\{[A-Z_]+\}/g,n=>{switch(n){case"{USER}":return e.user||"CFSub";case"{PORT}":return String(e.port||"");case"{PROTOCOL}":return(e.protocol||"").toUpperCase();case"{PREFIX}":return e.prefix||"CFSub";case"{IP}":return e.address||"";case"{IP_NAME}":return e.ipName||e.address||"";case"{HOST}":return e.host||"";case"{DATE}":return new Date().toISOString().slice(0,10);case"{INDEX}":return String(e.index||1).padStart(2,"0");default:return n}})}function We(t,e=""){let n=[],r={id:"default",uuid:t.uuid,password:t.trojanPassword||t.uuid,name:t.name||"\u9ED8\u8BA4",status:"active",maxConfigs:t.maxConfigs??null,proxyIp:"",cleanIp:"",ports:"",mode:"",limitTotalGb:t.limitTotalGb??null,limitDailyGb:t.limitDailyGb??null,expiryMs:null,isMain:!0};n.push(r);for(let s of t.users||[])s.uuid&&(s.status==="paused"||s.status==="disabled"||s.expiryMs&&Date.now()>s.expiryMs||n.push({...s,password:s.password||s.uuid}));if(e){let s=n.find(o=>o.name===e||o.id===e||o.uuid===e);return s?[s]:[]}return[r]}async function Xe(t,e,n,r={}){let s=t.maxConfigs||e.maxConfigs||12,o=Ke(t.ports||e.ports,[443]),a=N(e.hosts).length?N(e.hosts):[n],c=[];(e.enablePreferredIp!==!1||e.customPreferred||e.cleanIps)&&(c=await At(e,Math.max(6,s)));let i=e.enablePreferredDomain!==!1?await je(e,4):[],u=[...c,...i],l=String(t.proxyIp||e.customProxyIp||"").trim(),p=e.proxyIpMode==="region"&&e.proxyIpRegion?String(e.proxyIpRegion).toUpperCase():"",d=[];t.mode?d.push(t.mode):e.mode==="all"?d.push("vless","trojan","xhttp"):e.mode==="both"?d.push("vless","trojan"):d.push(e.mode||"vless");let f=[...new Set(d)].filter(Boolean),h=[],m=0,b=Ve[e.nameStrategy]||(e.nameStrategy&&e.nameStrategy.includes("{")?e.nameStrategy:Ve.default),x=ze(e.path||"/"),P=new Set;for(let y of f){let w=y==="xhttp"?o.filter(I=>Bt(I)):o;if(!w.length)continue;let L=u.length?u:[{ip:a[0],port:w[0],name:"\u9ED8\u8BA4"}];for(let I=0;I<s;I++){let O=L[I%L.length],W=O.ip,X=(O.port&&O.port!==443?O.port:null)||w[Math.floor(I/L.length)%w.length],Zt=`${y}|${W}|${X}`;if(P.has(Zt))continue;P.add(Zt);let Tt=a[I%a.length];m++,h.push({type:y,address:W,port:X,uuid:t.uuid,password:t.password,host:Tt,path:x,sni:Tt,fp:e.fp||"chrome",alpn:e.alpn||"",tls:Bt(X),ech:e.ech?e.echDomain:"",echDns:e.echDns,allowInsecure:!!e.allowInsecure,earlyData:e.enableEarlyData!==!1,proxyIp:l,region:p,name:Kn(b,{user:t.name||"CFSub",port:X,protocol:y,prefix:e.namePrefix||"CFSub",address:W,ipName:O.name||W,host:Tt,index:m})})}}return h.slice(0,s*Math.max(1,f.length))}function ze(t){let e=String(t||"/").trim();return e.startsWith("/")||(e="/"+e),e}function Vn(t){return"/"+String(t).slice(0,8)}function Kt(t){let e=t.type==="xhttp"?Vn(t.uuid):ze(t.path||"/"),n=[];return t.earlyData&&n.push("ed=2560"),t.proxyIp?n.push(`proxyip=${t.proxyIp}`):t.region&&n.push(`wk=${t.region}`),n.length?e+(e.includes("?")?"&":"?")+n.join("&"):e}function Yn(t){let e=[],n=encodeURIComponent(Kt(t)),r=t.sni||t.host;return t.type==="vless"?(e.push("encryption=none"),e.push(`security=${t.tls?"tls":"none"}`),t.alpn&&e.push(`alpn=${encodeURIComponent(t.alpn)}`),e.push(`fp=${t.fp}`),e.push("type=ws"),e.push(`host=${t.host}`),e.push(`sni=${r}`),e.push(`path=${n}`),t.ech&&e.push(`ech=${encodeURIComponent(t.ech)}`),t.allowInsecure&&e.push("allowInsecure=1")):t.type==="trojan"?(e.push(`security=${t.tls?"tls":"none"}`),t.alpn&&e.push(`alpn=${encodeURIComponent(t.alpn)}`),e.push(`fp=${t.fp}`),e.push("type=ws"),e.push(`host=${t.host}`),e.push(`sni=${r}`),e.push(`path=${n}`),t.ech&&e.push(`ech=${encodeURIComponent(t.ech)}`),t.allowInsecure&&e.push("allowInsecure=1")):t.type==="xhttp"&&(e.push("encryption=none"),e.push("security=tls"),e.push("type=xhttp"),e.push("mode=stream-one"),e.push(`host=${t.host}`),e.push(`sni=${r}`),e.push(`path=${n}`),t.alpn&&e.push(`alpn=${encodeURIComponent(t.alpn)}`),e.push(`fp=${t.fp}`)),e.join("&")}function Wn(t){let e=Yn(t),n=encodeURIComponent(t.name);return t.type==="trojan"?`trojan://${encodeURIComponent(t.password)}@${Ht(t.address)}:${t.port}?${e}#${n}`:t.type==="xhttp"?`vless://${t.uuid}@${Ht(t.address)}:${t.port}?${e}#${n}`:`vless://${t.uuid}@${Ht(t.address)}:${t.port}?${e}#${n}`}function Ht(t){return String(t).includes(":")&&!String(t).startsWith("[")?`[${t}]`:t}function Je(t){return ge(t.map(Wn).join(`
`))}var Hn,Ve,Et=U(()=>{jt();bt();R();K();Hn=["{USER}","{PORT}","{PROTOCOL}","{PREFIX}","{IP}","{IP_NAME}","{HOST}","{DATE}","{INDEX}"];Ve={default:"{PREFIX}-{INDEX}","prefix-user-port":"{PREFIX}-{USER}-{PORT}","type-user-port":"{PROTOCOL}-{USER}-{PORT}","user-port":"{USER}-{PORT}",ip:"{IP_NAME}-{PORT}","host-port-user":"{HOST}-{PORT}-{USER}"}});var rn={};cn(rn,{cmpVersions:()=>ut,deployToCloudflare:()=>nn,handleAuth:()=>Vt,handleLogs:()=>zt,handleStats:()=>Xt,handleSync:()=>Yt,handleTools:()=>Jt,handleUpdate:()=>tr,handleUsers:()=>Wt});function pt(t,e,n){let r=t.headers.get("authorization")||t.headers.get("x-api-key")||"";return r.startsWith("Bearer ")?r.slice(7).trim():r?r.trim():e.searchParams.get("key")?e.searchParams.get("key"):n&&n.key?String(n.key):""}function lt(t,e){return!!e&&e===t.masterKey}function Qn(t,e){return!!e&&Array.isArray(t.panelApiKeys)&&t.panelApiKeys.some(n=>n.key===e)}function Z(t,e){return lt(t,e)||Qn(t,e)}function Zn(t,e){let n={...t};if(!e)for(let r of["masterKey","panelApiKeys","cfApiToken","cfAccountId","tgToken","tgChatId","tgAdminId"])n[r]&&(n[r]="[PROTECTED]");return n}async function Vt(t,e,n,r,s){let o=await S(r);await v(r);let a=n&&n.key||"";if(!Z(o,a))return s.waitUntil(E(r,"Auth Failed",`\u6765\u81EA ${t.headers.get("cf-connecting-ip")||"unknown"}`)),g({success:!1,message:"\u5BC6\u94A5\u9519\u8BEF"},401);let c=[{id:"default",name:o.name||"\u9ED8\u8BA4",sync:`${e.origin}/${o.apiRoute}`},...(o.users||[]).map(u=>({id:u.id,name:u.name,sync:`${e.origin}/${o.apiRoute}?sub=${encodeURIComponent(u.name)}`}))],i={};for(let u of c){let l=F(u.id);i[u.id]=l}return s.waitUntil(E(r,"Auth Success",lt(o,a)?"\u4E3B\u5BC6\u94A5\u767B\u5F55":"API Key \u767B\u5F55")),g({success:!0,config:Zn(o,lt(o,a)),locked:o.__locked||[],profiles:c,usage:i,version:C,network:{ip:t.headers.get("cf-connecting-ip")||"",colo:t.cf?.colo||"",loc:[t.cf?.city,t.cf?.country].filter(Boolean).join(", ")}})}async function Yt(t,e,n,r,s){let o=await S(r),a=n&&n.key||"";if(!Z(o,a))return g({success:!1,message:"\u672A\u6388\u6743"},401);let c=n?.config||{},i={...o,...c};i.masterKey=c.masterKey&&lt(o,a)?String(c.masterKey):o.masterKey,i.panelApiKeys=o.panelApiKeys;for(let l of["masterKey","panelApiKeys","cfApiToken","cfAccountId","tgToken","tgChatId","tgAdminId"])i[l]==="[PROTECTED]"&&(i[l]=o[l]);i.users=Array.isArray(c.users)?c.users:o.users,i.apiRoute=String(c.apiRoute||o.apiRoute||"sub").replace(/^\/|\/$/g,""),i.createdAt=o.createdAt||Date.now();let u=null;if(c.nameStrategy){let l=Ye(qn(c.nameStrategy));l&&(u=`\u672A\u77E5\u547D\u540D\u6807\u7B7E ${l}`)}return await B(r,i),s.waitUntil(E(r,"Panel Updated","\u914D\u7F6E\u5DF2\u4FDD\u5B58")),g({success:!0,newRoute:i.apiRoute,tagWarning:u})}function qn(t){return["default","prefix-user-port","type-user-port","user-port","ip","host-port-user"].includes(t)?"":t}async function Wt(t,e,n,r,s){let o=await S(r);await v(r);let a=pt(t,e,n);if(!Z(o,a))return g({success:!1,message:"\u672A\u6388\u6743"},401);let c=e.searchParams.get("sub"),i=e.searchParams.get("id"),u=e.searchParams.get("action");if(t.method==="GET"&&!i){let l=(e.searchParams.get("q")||"").toLowerCase(),p=(o.users||[]).map(f=>Q(f)),d=l?p.filter(f=>`${f.name} ${f.id} ${f.notes||""}`.toLowerCase().includes(l)):p;return g({success:!0,users:d,total:d.length})}if(t.method==="GET"&&i){let l=(o.users||[]).find(p=>p.id===i);return l?g({success:!0,user:Q(l),subscriptionUrl:`${e.origin}/${o.apiRoute}?sub=${encodeURIComponent(l.name||l.id)}`}):g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404)}if(t.method==="POST"&&!i&&!u){let l={...de()};return l.id=xe(),l.uuid=kt(n?.uuid)?n.uuid:await gt(l.id+Date.now()),l.name=String(n?.name||"").trim()||l.id.slice(0,8),l.notes=n?.notes||"",l.limitTotalGb=n?.limitTotalGb?Number(n.limitTotalGb):null,l.limitDailyGb=n?.limitDailyGb?Number(n.limitDailyGb):null,l.expiryMs=n?.expiryDays?Date.now()+Number(n.expiryDays)*864e5:null,l.maxConfigs=n?.maxConfigs?Number(n.maxConfigs):null,l.connLimit=n?.connLimit?Number(n.connLimit):null,l.proxyIp=n?.proxyIp||"",l.cleanIp=n?.cleanIp||"",l.ports=n?.ports||"",l.mode=n?.mode||"",l.status="active",l.createdAt=Date.now(),!l.limitTotalGb&&o.limitTotalGb&&(l.limitTotalGb=Number(o.limitTotalGb)),!l.limitDailyGb&&o.limitDailyGb&&(l.limitDailyGb=Number(o.limitDailyGb)),!l.expiryMs&&o.expiryDays&&(l.expiryMs=Date.now()+Number(o.expiryDays)*864e5),o.users=o.users||[],o.users.push(l),await B(r,o),s.waitUntil(E(r,"User Created",`${l.name}\uFF08${l.id.slice(0,8)}\uFF09`)),g({success:!0,user:Q(l),subscriptionUrl:`${e.origin}/${o.apiRoute}?sub=${encodeURIComponent(l.name)}`},201)}if(t.method==="PUT"&&i){let l=(o.users||[]).findIndex(f=>f.id===i);if(l<0)return g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404);let p={...o.users[l]},d=(f,h)=>{h!==void 0&&(p[f]=h)};return d("name",n?.name),d("notes",n?.notes),n?.limitTotalGb!==void 0&&(p.limitTotalGb=n.limitTotalGb?Number(n.limitTotalGb):null),n?.limitDailyGb!==void 0&&(p.limitDailyGb=n.limitDailyGb?Number(n.limitDailyGb):null),n?.expiryDays!==void 0&&(p.expiryMs=n.expiryDays?Date.now()+Number(n.expiryDays)*864e5:null),n?.maxConfigs!==void 0&&(p.maxConfigs=n.maxConfigs?Number(n.maxConfigs):null),n?.connLimit!==void 0&&(p.connLimit=n.connLimit?Number(n.connLimit):null),d("proxyIp",n?.proxyIp),d("cleanIp",n?.cleanIp),d("ports",n?.ports),d("mode",n?.mode),n?.status&&(p.status=n.status),n?.uuid&&kt(n.uuid)&&(p.uuid=n.uuid),o.users[l]=p,await B(r,o),s.waitUntil(E(r,"User Updated",`${p.name}\uFF08${i.slice(0,8)}\uFF09`)),g({success:!0,user:Q(p)})}if(t.method==="DELETE"&&i){let l=(o.users||[]).length;return o.users=(o.users||[]).filter(p=>p.id!==i),o.users.length===l?g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404):(await B(r,o),s.waitUntil(E(r,"User Deleted",i.slice(0,8))),g({success:!0,deleted:i}))}if(t.method==="POST"&&i&&u==="toggle"){let l=(o.users||[]).find(p=>p.id===i);return l?(l.status=l.status==="active"?"paused":"active",l.status==="active"&&(l.disabledReason="",l.disabledAt=0),await B(r,o),s.waitUntil(E(r,"User Toggled",`${l.name} \u2192 ${l.status}`)),g({success:!0,user:Q(l)})):g({success:!1,message:"\u7528\u6237\u4E0D\u5B58\u5728"},404)}return t.method==="POST"&&i&&u==="reset"?(Ae(i),await j(r,!0),s.waitUntil(E(r,"Traffic Reset",i.slice(0,8))),g({success:!0,message:"\u6D41\u91CF\u5DF2\u91CD\u7F6E"})):g({success:!1,message:"Invalid request"},400)}function Q(t){let e=F(t.id),n=e.up+e.down,r=D(t.limitTotalGb),s=e.dailyUp+e.dailyDown,o=D(t.limitDailyGb),a=t.status||"active";return a==="active"&&(t.expiryMs&&Date.now()>t.expiryMs?a="expired":(r>0&&n>=r||o>0&&s>=o)&&(a="disabled")),{...t,status:a,usage:{totalBytes:n,totalText:T(n),limitBytes:r,limitText:r>0?T(r):"\u4E0D\u9650",dailyBytes:s,dailyText:T(s),dailyLimitText:o>0?T(o):"\u4E0D\u9650",progress:r>0?Math.min(100,Math.round(n/r*100)):0,connects:e.connects||0,last:e.last||0}}}async function Xt(t,e,n,r){let s=await S(r);await v(r);let o=pt(t,e,n);if(!Z(s,o))return g({success:!1,message:"\u672A\u6388\u6743"},401);let a=s.users||[],c=0,i=0,u={total:a.length,active:0,paused:0,expired:0,disabled:0};for(let p of a){let d=Q(p);c+=d.usage.totalBytes,i+=d.usage.dailyBytes,u[d.status==="active"?"active":d.status==="paused"?"paused":d.status==="expired"?"expired":"disabled"]++}let l=F("default");return c+=l.up+l.down,i+=l.dailyUp+l.dailyDown,g({success:!0,stats:{users:u,traffic:{totalBytes:c,totalText:T(c),dailyBytes:i,dailyText:T(i)},system:{version:C,isPaused:!!s.isPaused,hasKV:xt(r),mode:s.mode,ports:s.ports}}})}async function zt(t,e,n,r){let s=await S(r),o=pt(t,e,n);if(!Z(s,o))return g({success:!1,message:"\u672A\u6388\u6743"},401);let a=await Ee(r);return g({success:!0,logs:a})}async function Jt(t,e,n,r){let s=await S(r),o=pt(t,e,n);if(!Z(s,o))return g({success:!1,message:"\u672A\u6388\u6743"},401);let a=n?.op;if(a==="smart-clean-ip"){let c=await He(pe,s.customDns);return g({success:!0,ips:c})}if(a==="preview-preferred"){let c=await At(s,20),i=await Ft(s);return g({success:!0,list:c,stats:{total:c.length,onlineCount:i.length,onlineOk:i.length>0,allCloudflare:c.filter(u=>Pt(u.ip)).length}})}if(a==="proxyip-preview"){let c=String(n?.colo||""),i={...s};n?.region&&(i.proxyIpMode="region",i.proxyIpRegion=String(n.region).toUpperCase());let l=Mt(i,c).slice(0,8).map(p=>{let d=Gt(p,443);return`${d.host}:${d.port}`});return g({success:!0,mode:i.proxyIpMode,region:i.proxyIpRegion||"",colo:c,list:l})}if(a==="ping"){let c=String(n?.target||"").trim();if(!c)return g({success:!1,message:"\u7F3A\u5C11\u76EE\u6807"},400);let i=Date.now(),u=await _(`https://${c}/cdn-cgi/trace`,{},6e3),l=Date.now()-i;return g({success:!!u,ms:l,colo:u?.headers?.get("cf-ray")?.split("-")?.[1]||""})}return g({success:!1,message:"\u672A\u77E5\u64CD\u4F5C"},400)}async function tr(t,e,n,r,s){let o=await S(r),a=pt(t,e,n);if(!lt(o,a))return g({success:!1,message:"\u9700\u8981\u4E3B\u5BC6\u94A5"},401);let c=n?.action||"check",i=String(o.githubRepo||"").replace(/^https?:\/\/github\.com\//,"").replace(/\/$/,"");if(!i)return g({success:!1,message:"\u672A\u914D\u7F6E GitHub \u4ED3\u5E93"},400);let u=!!(o.cfAccountId&&o.cfApiToken&&(o.deployTarget==="pages"?o.cfPagesProject:o.cfWorkerName));if(c==="check"){let l=await en(i);return g({success:!0,current:C,latest:l||C,updateAvailable:ut(C,l||"0")<0,canDeploy:u})}if(c==="deploy"){if(!u)return g({success:!1,message:"Cloudflare \u51ED\u636E\u672A\u914D\u7F6E\u5B8C\u6574"},400);let l=n?.code,p=n?.version||"";if(!l){let f=await en(i);if(!n?.force&&ut(C,f||"0")>=0)return g({success:!1,message:"\u8FDC\u7A0B\u7248\u672C\u4E0D\u6BD4\u5F53\u524D\u65B0\uFF0C\u8BF7\u52FE\u9009\u5F3A\u5236\u8986\u76D6"},400);let h=await er(i,o.autoUpdateFormat);if(!h)return g({success:!1,message:"\u62C9\u53D6\u8FDC\u7A0B\u4EE3\u7801\u5931\u8D25"},502);l=h,p=f}let d=await nn(o,l);return d.ok?(s.waitUntil(E(r,"Auto-Update Success",`\u5DF2\u66F4\u65B0\u5230 ${p||"remote"}`)),g({success:!0,message:`\u5DF2\u66F4\u65B0\u5230 ${p||"remote"}`,newVersion:p})):(s.waitUntil(E(r,"Auto-Update Failed",d.message)),g({success:!1,message:d.message},502))}return g({success:!1,message:"\u672A\u77E5\u64CD\u4F5C"},400)}function ut(t,e){let n=String(t||"0").split(".").map(Number),r=String(e||"0").split(".").map(Number);for(let s=0;s<Math.max(n.length,r.length);s++){let o=n[s]||0,a=r[s]||0;if(o!==a)return o<a?-1:1}return 0}async function en(t){let e=await _(`https://raw.githubusercontent.com/${t}/main/version`,{},8e3);if(e&&e.ok){let r=(await e.text()).trim();if(r)return r}let n=await _(`https://raw.githubusercontent.com/${t}/main/dist/_worker.js`,{},1e4);if(n&&n.ok){let r=(await n.text()).match(/CURRENT_VERSION\s*=\s*["']([^"']+)["']/);if(r)return r[1]}return null}async function er(t,e="plain"){let n=e==="encoded"?[`https://raw.githubusercontent.com/${t}/main/dist/_worker.encode.js`,`https://raw.githubusercontent.com/${t}/main/dist/_worker.js`]:[`https://raw.githubusercontent.com/${t}/main/dist/_worker.js`];for(let r of n){let s=await _(r,{},15e3);if(s&&s.ok){let o=await s.text();if(o&&o.length>1e3)return o}}return null}async function nn(t,e){return t.deployTarget==="pages"?rr(t,e):nr(t,e)}async function nr(t,e){let n=`https://api.cloudflare.com/client/v4/accounts/${t.cfAccountId}/workers/scripts/${t.cfWorkerName}`,r={Authorization:`Bearer ${t.cfApiToken}`},s=[];try{let u=await _(`${n}/settings`,{headers:r},1e4);u&&u.ok&&(s=(await u.json())?.result?.bindings||[])}catch{}let o={main_module:"_worker.js",compatibility_date:"2025-06-01",compatibility_flags:["nodejs_compat"],bindings:s},a=new FormData;a.append("metadata",new Blob([JSON.stringify(o)],{type:"application/json"})),a.append("_worker.js",new Blob([e],{type:"application/javascript+module"}));let c=await _(n,{method:"PUT",headers:r,body:a},3e4);if(!c)return{ok:!1,message:"\u8BF7\u6C42 Cloudflare \u5931\u8D25"};let i=await c.json().catch(()=>({}));return!c.ok||!i.success?{ok:!1,message:i?.errors?.[0]?.message||`HTTP ${c.status}`}:{ok:!0}}async function rr(t,e){let n=`https://api.cloudflare.com/client/v4/accounts/${t.cfAccountId}/pages/projects/${t.cfPagesProject}/deployments`,r={Authorization:`Bearer ${t.cfApiToken}`},s=await crypto.subtle.digest("SHA-1",new TextEncoder().encode(e)),o=[...new Uint8Array(s)].map(l=>l.toString(16).padStart(2,"0")).join(""),a={"_worker.js":`/${o}`},c=new FormData;c.append("manifest",new Blob([JSON.stringify(a)],{type:"application/json"})),c.append(`/${o}`,new Blob([e],{type:"application/javascript+module"}));let i=await _(n,{method:"POST",headers:r,body:c},3e4);if(!i)return{ok:!1,message:"\u8BF7\u6C42 Cloudflare \u5931\u8D25"};let u=await i.json().catch(()=>({}));return!i.ok||!u.success?{ok:!1,message:u?.errors?.[0]?.message||`HTTP ${i.status}`}:{ok:!0}}var Qt=U(()=>{rt();ft();jt();It();Et();R();K()});rt();bt();It();rt();R();K();var Sn=8192;function In(t){let e=new Map,n=new Map,r=(o,a,c)=>{if(a){let i=et(a);i&&e.set(i.join(","),o)}c&&n.set($t(c),o)};for(let o of t.users||[])o.uuid&&r(o,o.uuid,o.password||o.uuid);let s={id:"default",uuid:t.uuid,name:t.name||"\u9ED8\u8BA4",status:"active",isMain:!0,limitTotalGb:t.limitTotalGb??null,limitDailyGb:t.limitDailyGb??null,expiryMs:null,connLimit:null,maxConfigs:t.maxConfigs??null,proxyIp:"",cleanIp:"",ports:"",mode:"",createdAt:0};return r(s,t.uuid,t.trojanPassword||t.uuid),{byUuid:e,byHash:n,main:s}}function Pn(t){if(!t)return{ok:!1,reason:"\u672A\u6388\u6743"};if(t.status==="paused")return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u6682\u505C"};if(t.status==="disabled")return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u7981\u7528"};if(t.status==="expired")return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u8FC7\u671F"};if(t.expiryMs&&Date.now()>t.expiryMs)return{ok:!1,reason:"\u8D26\u53F7\u5DF2\u5230\u671F"};let e=F(t.id),n=D(t.limitTotalGb);if(n>0&&e.up+e.down>=n)return{ok:!1,reason:"\u603B\u6D41\u91CF\u5DF2\u7528\u5C3D"};let r=D(t.limitDailyGb);return r>0&&e.dailyUp+e.dailyDown>=r?{ok:!1,reason:"\u4ECA\u65E5\u6D41\u91CF\u5DF2\u7528\u5C3D"}:{ok:!0}}var it=new Map;function An(t){let e=(it.get(t)||0)+1;return it.set(t,e),e}function En(t){let e=(it.get(t)||1)-1;e<=0?it.delete(t):it.set(t,e)}function Tn(t,e){let n=!1;return new ReadableStream({start(r){e&&e.byteLength&&r.enqueue(new Uint8Array(e).buffer),t.addEventListener("message",s=>{if(!n)try{r.enqueue(s.data)}catch{}}),t.addEventListener("close",()=>{if(!n){n=!0;try{r.close()}catch{}}}),t.addEventListener("error",s=>{if(!n){n=!0;try{r.error(s)}catch{}}})},cancel(){n=!0;try{t.close()}catch{}}})}function Un(t,e){let n=e.searchParams.get("p")||e.searchParams.get("proxyip")||"",r=(e.searchParams.get("wk")||"").toUpperCase(),s=e.searchParams.get("s")||"",o=e.searchParams.get("rm")||"";if(!n&&!r&&!s&&!o)return t;let a={...t};return n?(a.customProxyIp=n,a.proxyIpMode="custom"):r&&(a.proxyIpRegion=r,a.proxyIpMode="region"),o&&(a.rm=String(o).toLowerCase()!=="no"),s&&(a.outboundProxy=s,a.__outbound=st(s)),a}async function De(t,e,n){let r=await S(e);await v(e),r.__outbound||(r.__outbound=st(r.outboundProxy));let s=null;try{s=new URL(t.url)}catch{s=null}let o=s?Un(r,s):r;if(o.isPaused)return new Response("service paused",{status:503});let a=In(o),c=t?.cf?.colo||"",i=new WebSocketPair,u=i[0],l=i[1];l.accept(),l.binaryType="arraybuffer";let p=Te(t),f=Tn(l,p&&p.byteLength<=Sn?p:null).getReader(),h={user:null,header:null,remoteHost:"",remotePort:0,isUDP:!1};return n.waitUntil(Rn(f,l,o,h,a,e,c).catch(m=>{console.error("ws pump error",m);try{l.close()}catch{}})),new Response(null,{status:101,webSocket:u})}async function Rn(t,e,n,r,s,o,a){let c=null,i=null,u=!1,l=!1,p=()=>{l||(l=!0,En(h()))},d=m=>{try{e.readyState===1&&e.send(m)}catch{}},f=()=>{try{e.close()}catch{}},h=()=>r.user?.id||"default";try{for(;;){let{value:m,done:b}=await t.read();if(b)break;if(!(!m||!m.byteLength)){if(!r.header){let x=Cn(m,s,r);if(!x.ok){f();return}if(!Pn(r.user).ok){x.reply&&d(x.reply),f();return}let y=An(h());if(r.user?.connLimit&&y>r.user.connLimit){p(),f();return}if(Pe(h()),r.isUDP){await Dn(r,x.payload,d,n,a),p(),f();return}let w=await ve(r.remoteHost,r.remotePort,n,x.payload,a);if(!w){p(),f();return}c=w.socket,i=w.writer,x.reply&&d(x.reply);let L=h();c.readable.pipeThrough(new TransformStream({transform(I,O){G(L,0,I.byteLength||I.length||0),O.enqueue(I)}})).pipeTo(new WritableStream({write(I){d(I)},close(){p(),f()},abort(){p(),f()}})).catch(()=>{p(),f()});continue}i&&(G(h(),m.byteLength||m.length||0,0),await i.write(m))}}u=!0}catch(m){console.error("pump error",m)}finally{if(i)try{await i.close()}catch{}c&&at(c),p(),u||f(),await j(o,!0)}}function Cn(t,e,n){let r=new Uint8Array(t);if(r.length>=58&&r[56]===13&&r[57]===10){let s=new TextDecoder().decode(r.slice(0,56)).toLowerCase(),o=e.byHash.get(s);if(o)try{let a=Re(t,s);return n.header=a,n.user=o,n.remoteHost=a.address,n.remotePort=a.port,n.isUDP=!1,{ok:!0,payload:r.slice(a.rawIndex),reply:null}}catch{return{ok:!1}}}try{let s=wt(t),o=e.byUuid.get(s.uuidBytes.join(","));return o?(n.header=s,n.user=o,n.remoteHost=s.address,n.remotePort=s.port,n.isUDP=s.command===Ue,{ok:!0,payload:r.slice(s.rawIndex),reply:new Uint8Array([s.version,0])}):{ok:!1}}catch{return{ok:!1}}}async function ve(t,e,n,r,s){let o=_t(t,e,n,s);for(let a of o)try{let c=await St(a,n),i=c.writable.getWriter();return r&&r.byteLength&&await i.write(r),{socket:c,writer:i,label:a.label}}catch{continue}return null}async function Dn(t,e,n,r,s){let o=e&&e.byteLength>2?e.slice(2):e,a=t.user?.id||"default";G(a,o?.byteLength||0,0);try{let c=await ve(ue,53,r,o,s);if(!c)return;let i=c.socket.readable.getReader(),u=[],l=0;for(;;){let{value:h,done:m}=await i.read();if(m||(u.push(new Uint8Array(h)),l+=h.byteLength,G(a,0,h.byteLength),l>=2))break}try{i.releaseLock()}catch{}at(c.socket);let p=new Uint8Array(l),d=0;for(let h of u)p.set(h,d),d+=h.byteLength;let f=new Uint8Array(p.length+2);f[0]=p.length>>8,f[1]=p.length&255,f.set(p,2),n(f.buffer)}catch{}}bt();It();rt();R();async function ke(t,e,n){let r=await S(e);if(await v(e),r.__outbound||(r.__outbound=st(r.outboundProxy)),r.isPaused)return new Response("paused",{status:503});let s=t?.cf?.colo||"",o=t.body;if(!o)return new Response("bad request",{status:400});let a=o.getReader(),c=null,i=null,u="default",l=!1,p=null,d=()=>{if(i){try{i.close()}catch{}i=null}c&&(at(c),c=null)},f=new ReadableStream({async start(h){try{for(;;){let{value:m,done:b}=await a.read();if(b)break;if(!m||!m.byteLength)continue;let x=new Uint8Array(m);if(!l){let P=vn(x,r);if(!P){h.close();return}u=P.user.id;let y=await kn(P.host,P.port,r,x.slice(P.rawIndex),s);if(!y){h.close();return}c=y.socket,i=y.writer,l=!0,p=c.readable.pipeTo(new WritableStream({write(w){G(u,0,w.byteLength||0),h.enqueue(w)},close(){try{h.close()}catch{}}})).catch(()=>{try{h.close()}catch{}});continue}i&&(G(u,m.byteLength||0,0),await i.write(m))}}catch(m){console.error("xhttp error",m);try{h.close()}catch{}}},cancel(){d()}});return n.waitUntil((async()=>{try{p&&await p}catch{}finally{d(),await j(e,!0)}})()),new Response(f,{status:200,headers:{"content-type":"application/grpc","user-agent":"Go-http-client/2.0","x-accel-buffering":"no","cache-control":"no-store"}})}function vn(t,e){if(t.length<24)return null;let n=t.slice(1,17),r=null;for(let o of e.users||[]){let a=et(o.uuid);if(a&&a.join(",")===n.join(",")){r=o;break}}let s=et(e.uuid);if(!r&&s&&s.join(",")===n.join(",")&&(r={id:"default",name:e.name||"\u9ED8\u8BA4",status:"active"}),!r)return null;try{let o=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength),a=wt(o);return a.command!==1?null:{user:r,host:a.address,port:a.port,rawIndex:a.rawIndex}}catch{return null}}async function kn(t,e,n,r,s){for(let o of _t(t,e,n,s))try{let a=await St(o,n),c=a.writable.getWriter();return r&&r.byteLength&&await c.write(r),{socket:a,writer:c}}catch{continue}return null}Et();Et();var ct=t=>Kt(t);function Xn(t){let e={name:t.name,server:t.address,port:t.port,udp:!1};return t.type==="trojan"?{...e,type:"trojan",password:t.password,sni:t.sni,"client-fingerprint":t.fp,network:"ws",...t.alpn?{alpn:t.alpn.split(",")}:{},"ws-opts":Qe(t)}:{...e,type:"vless",uuid:t.uuid,tls:t.tls,servername:t.sni,"client-fingerprint":t.fp,network:"ws",...t.alpn?{alpn:t.alpn.split(",")}:{},"ws-opts":Qe(t)}}function Qe(t){let e={path:ct(t),headers:{Host:t.host}};return t.earlyData&&(e["max-early-data"]=2560,e["early-data-header-name"]="Sec-WebSocket-Protocol"),e}function Y(t){return`"${String(t).replace(/"/g,'\\"')}"`}function Ze(t,e={}){let n=t.map(o=>o.name),r=t.map(Xn),s=[];s.push("mixed-port: 7890"),s.push("allow-lan: false"),s.push("mode: rule"),s.push("log-level: warning"),s.push("ipv6: true"),s.push("external-controller: 127.0.0.1:9090"),s.push("dns:"),s.push("  enable: true"),s.push("  ipv6: true"),s.push("  enhanced-mode: fake-ip"),s.push("  fake-ip-range: 198.18.0.1/16"),s.push("  nameserver:"),s.push("    - https://1.1.1.1/dns-query"),s.push("    - https://8.8.8.8/dns-query"),s.push("  fallback:"),s.push("    - https://dns.google/dns-query"),s.push("    - https://cloudflare-dns.com/dns-query"),s.push("proxies:");for(let o of r){let a=o.servername||o.sni||"",c=o["client-fingerprint"]||o.fp||"chrome";s.push(`  - { name: ${Y(o.name)}, type: ${o.type}, server: ${o.server}, port: ${o.port}, udp: false${o.type==="trojan"?`, password: ${Y(o.password)}, sni: ${a}`:`, uuid: ${o.uuid}, tls: ${o.tls}, servername: ${a}`}, network: ws, client-fingerprint: ${c}${o.alpn?`, alpn: [${o.alpn.map(Y).join(", ")}]`:""}, ws-opts: { path: ${Y(o["ws-opts"].path)}, headers: { Host: ${Y(o["ws-opts"].headers.Host)} }${o["ws-opts"]["max-early-data"]?`, max-early-data: ${o["ws-opts"]["max-early-data"]}, early-data-header-name: ${o["ws-opts"]["early-data-header-name"]}`:""} } }`)}return s.push("proxy-groups:"),s.push(`  - { name: "\u{1F680} \u8282\u70B9\u9009\u62E9", type: select, proxies: [${n.map(Y).join(", ")}, "DIRECT"] }`),s.push(`  - { name: "\u267B\uFE0F \u81EA\u52A8\u9009\u62E9", type: url-test, proxies: [${n.map(Y).join(", ")}], url: "https://www.gstatic.com/generate_204", interval: 300 }`),s.push('  - { name: "\u{1F3AF} \u5168\u7403\u76F4\u8FDE", type: select, proxies: ["DIRECT"] }'),s.push("rules:"),s.push("  - GEOIP,lan,\u{1F3AF} \u5168\u7403\u76F4\u8FDE,no-resolve"),s.push("  - MATCH,\u{1F680} \u8282\u70B9\u9009\u62E9"),s.join(`
`)}function zn(t,e){let n=t.tls?{enabled:!0,server_name:t.sni,utls:{enabled:!0,fingerprint:t.fp},...t.alpn?{alpn:t.alpn.split(",")}:{}}:{enabled:!1,server_name:t.sni,utls:{enabled:!0,fingerprint:t.fp}};return t.type==="trojan"?{type:"trojan",tag:t.name,server:t.address,server_port:t.port,password:t.password,tls:n,transport:{type:"ws",path:ct(t),headers:{Host:t.host},...t.earlyData?{max_early_data:2560,early_data_header_name:"Sec-WebSocket-Protocol"}:{}}}:t.type==="xhttp"?{type:"vless",tag:t.name,server:t.address,server_port:t.port,uuid:t.uuid,packet_encoding:"xudp",tls:n,transport:{type:"xhttp",mode:"stream-one",host:t.host,path:ct(t),headers:{Host:t.host}}}:{type:"vless",tag:t.name,server:t.address,server_port:t.port,uuid:t.uuid,packet_encoding:"xudp",tls:n,transport:{type:"ws",path:ct(t),headers:{Host:t.host},...t.earlyData?{max_early_data:2560,early_data_header_name:"Sec-WebSocket-Protocol"}:{}}}}function qe(t){let e=t.map((r,s)=>zn(r,s)),n=e.map(r=>r.tag);return JSON.stringify({log:{level:"info",timestamp:!0},dns:{servers:[{tag:"remote",address:"https://1.1.1.1/dns-query",detour:"select"},{tag:"local",address:"223.5.5.5",detour:"direct"}],rules:[{outbound:["any"],server:"local"}],final:"remote",strategy:"prefer_ipv4"},inbounds:[{type:"mixed",tag:"mixed-in",listen:"127.0.0.1",listen_port:2080}],outbounds:[...e,{type:"selector",tag:"select",outbounds:["auto",...n]},{type:"urltest",tag:"auto",outbounds:n,url:"https://www.gstatic.com/generate_204",interval:"5m"},{type:"direct",tag:"direct"},{type:"block",tag:"block"},{type:"dns",tag:"dns-out"}],route:{rules:[{ip_is_private:!0,outbound:"direct"},{protocol:"dns",action:"hijack-dns"}],final:"select",auto_detect_interface:!0},experimental:{cache_file:{enabled:!0,path:"cache.db",store_fakeip:!0},clash_api:{external_controller:"127.0.0.1:9090"}}},null,2)}function Jn(t){let e={path:ct(t),headers:{Host:t.host},...t.earlyData?{maxEarlyData:2560,earlyDataHeaderName:"Sec-WebSocket-Protocol"}:{}};return t.type==="trojan"?{protocol:"trojan",tag:t.name,settings:{servers:[{address:t.address,port:t.port,password:t.password,level:0}]},streamSettings:{network:"ws",security:t.tls?"tls":"none",...t.tls?{tlsSettings:{serverName:t.sni,fingerprint:t.fp,...t.alpn?{alpn:t.alpn.split(",")}:{}}}:{},wsSettings:e}}:{protocol:"vless",tag:t.name,settings:{vnext:[{address:t.address,port:t.port,users:[{id:t.uuid,encryption:"none",level:0}]}]},streamSettings:{network:"ws",security:t.tls?"tls":"none",...t.tls?{tlsSettings:{serverName:t.sni,fingerprint:t.fp,...t.alpn?{alpn:t.alpn.split(",")}:{}}}:{},wsSettings:e}}}function tn(t){return JSON.stringify({log:{loglevel:"warning"},dns:{servers:["https+local://1.1.1.1/dns-query","223.5.5.5"]},inbounds:[{tag:"socks-in",port:10808,listen:"127.0.0.1",protocol:"socks",settings:{auth:"noauth",udp:!0}},{tag:"http-in",port:10809,listen:"127.0.0.1",protocol:"http",settings:{auth:"noauth"}}],outbounds:t.map(Jn),routing:{domainStrategy:"AsIs",rules:[{type:"field",outboundTag:"direct",ip:["geoip:private"]},{type:"field",outboundTag:"direct",domain:["geosite:cn"]}]}},null,2)}Qt();ft();var sn=`<!doctype html>
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
`;var on=`<!doctype html>
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
</html>`;R();var sr=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<title>\u7F3A\u5C11 KV \u7ED1\u5B9A</title><style>body{font-family:system-ui;background:#0f172a;color:#e2e8f0;display:flex;align-items:center;justify-content:center;height:100vh;margin:0}
.box{max-width:560px;padding:32px;background:#1e293b;border-radius:16px;line-height:1.8}
code{background:#0f172a;padding:2px 6px;border-radius:4px}</style></head><body><div class="box">
<h2>\u26A0\uFE0F \u672A\u68C0\u6D4B\u5230 KV \u547D\u540D\u7A7A\u95F4\u7ED1\u5B9A</h2>
<p>\u672C\u9762\u677F\u7684\u7528\u6237\u3001\u914D\u7F6E\u3001\u6D41\u91CF\u7EDF\u8BA1\u90FD\u5B58\u5728 Cloudflare KV \u91CC\uFF0C\u5FC5\u987B\u5148\u7ED1\u5B9A KV \u547D\u540D\u7A7A\u95F4\u3002</p>
<p><b>\u521B\u5EFA\u547D\u4EE4\uFF1A</b><br><code>npx wrangler kv namespace create CF_SUB_KV</code></p>
<p><b>\u7ED1\u5B9A\u53D8\u91CF\u540D\u5FC5\u987B\u586B\uFF1A</b><br><code>CF_SUB_KV</code></p>
<p>\u7ED1\u5B9A\u540E\u91CD\u65B0\u90E8\u7F72\u5373\u53EF\u6B63\u5E38\u4F7F\u7528\u3002\u8BE6\u7EC6\u6B65\u9AA4\u89C1 README\u300C\u90E8\u7F72\u65B9\u5F0F\u4E00\u300D\u3002</p></div></body></html>`,Ss={async fetch(t,e,n){try{if((t.headers.get("upgrade")||"").toLowerCase()==="websocket")return await De(t,e,n);let r=new URL(t.url);if(!xt(e))return J(sr,500);let s=await S(e);await v(e),s.uuid||(s.uuid=await gt(`${s.masterKey}:${r.hostname}`),s.createdAt=Date.now(),await B(e,s));let o=String(s.apiRoute||"sub").replace(/^\/|\/$/g,""),a=r.pathname.split("/").filter(Boolean);if(t.method==="POST"&&or(t,r))return await ke(t,e,n);if(t.method==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET,POST,PUT,DELETE,OPTIONS","access-control-allow-headers":"*"}});if(a[0]===o){let c=a[1]||"";return c==="dash"?J(sn.replace(/__CURRENT_VERSION__/g,C).replace(/__API_ROUTE__/g,o)):c==="api"?await ar(t,r,e,n,s,a[2]||""):await ir(t,r,e,n,s)}return await pr(t,s)}catch(r){return console.error("fetch error",r),Ot("Internal Error",500)}},async scheduled(t,e,n){try{let r=await S(e);if(!r.autoUpdate||!r.githubRepo||!r.cfAccountId||!r.cfApiToken)return;let s=String(r.githubRepo).replace(/^https?:\/\/github\.com\//,"").replace(/\/$/,""),o=await _(`https://raw.githubusercontent.com/${s}/main/version`,{},8e3),a=o&&o.ok?(await o.text()).trim():"";if(!a||ut(C,a)>=0)return;let c=await _(`https://raw.githubusercontent.com/${s}/main/dist/_worker.js`,{},15e3);if(!c||!c.ok)return;let i=await c.text(),{deployToCloudflare:u}=await Promise.resolve().then(()=>(Qt(),rn)),l=await u(r,i);await E(e,l.ok?"Auto-Update Success":"Auto-Update Failed",l.message||a)}catch(r){console.error("scheduled error",r)}}};function or(t,e){if((t.headers.get("content-type")||"").toLowerCase().includes("application/grpc")||e.searchParams.has("xhttp"))return!0;let r=e.pathname.split("/").filter(Boolean).pop()||"";return/^[0-9a-f]{8}$/i.test(r)}async function ar(t,e,n,r,s,o){let a=null;if(t.method!=="GET"&&t.method!=="HEAD"){let c=(t.headers.get("content-type")||"").toLowerCase();try{if(c.includes("application/json"))a=await t.json();else{let i=await t.text();i&&(a=JSON.parse(i))}}catch{a=null}}switch(o){case"auth":return Vt(t,e,a,n,r);case"sync":return Yt(t,e,a,n,r);case"users":return Wt(t,e,a,n,r);case"stats":return Xt(t,e,a,n);case"logs":return zt(t,e,a,n);case"tools":return Jt(t,e,a,n);case"update":return handleUpdate(t,e,a,n,r);default:return g({success:!1,message:"\u672A\u77E5\u63A5\u53E3"},404)}}async function ir(t,e,n,r,s){let o=e.searchParams.get("sub")||"",a=We(s,o);if(!a.length)return Ot("not found",404);let c=e.hostname,i=a[0],u=await Xe(i,s,c),l=(t.headers.get("user-agent")||"").toLowerCase(),p=l.includes("mozilla")&&!cr(l),d=e.searchParams.has("raw")||e.searchParams.has("b64")||e.searchParams.has("base64");if(p&&!d&&!s.subUserAgent)return J(ur(e,s,i));let f=(e.searchParams.get("flag")||e.searchParams.get("format")||e.searchParams.get("type")||e.searchParams.get("target")||"").toLowerCase(),h=lr(l,f),m,b;h==="clash"?(m=Ze(u),b="text/yaml; charset=utf-8"):h==="singbox"?(m=qe(u),b="application/json; charset=utf-8"):h==="v2ray"?(m=tn(u),b="application/json; charset=utf-8"):(m=Je(u),b="text/plain; charset=utf-8");let x=F(i.id),P=x.up+x.down,y=D(i.limitTotalGb),w={"content-type":b,"cache-control":"no-store","access-control-allow-origin":"*","profile-update-interval":"12","subscription-userinfo":`upload=${x.up}; download=${x.down}; total=${y||0}; expire=${i.expiryMs?Math.floor(i.expiryMs/1e3):4102329600}`};return l.includes("mozilla")||(w["content-disposition"]=`attachment; filename*=utf-8''${encodeURIComponent(i.name||"CFSub")}`),r.waitUntil(j(n)),new Response(m,{status:200,headers:w})}function cr(t){return/clash|meta|mihomo|stash|verge|sing-?box|hiddify|nekobox|karing|v2ray|shadowrocket|loon|surge|quantumult/i.test(t)}function lr(t,e){return e?["clash","yaml","meta","stash","clash-meta","y"].includes(e)?"clash":["sing","singbox","sing-box","sb","s"].includes(e)?"singbox":["v2ray","vjson","v"].includes(e)?"v2ray":"raw":/clash|meta|stash|verge|mihomo|cfw/i.test(t)?"clash":/sing-?box|hiddify|nekobox|sfa|karing/i.test(t)?"singbox":"raw"}function ur(t,e,n){let r=F(n.id),s=r.up+r.down,o=D(n.limitTotalGb),a=r.dailyUp+r.dailyDown,c=D(n.limitDailyGb),i=`${t.origin}/${e.apiRoute}?sub=${encodeURIComponent(n.name||"")}`,u="\u6B63\u5E38";return n.status==="paused"?u="\u5DF2\u6682\u505C":n.expiryMs&&Date.now()>n.expiryMs?u="\u5DF2\u5230\u671F":o>0&&s>=o?u="\u6D41\u91CF\u5DF2\u7528\u5C3D":c>0&&a>=c&&(u="\u4ECA\u65E5\u6D41\u91CF\u5DF2\u7528\u5C3D"),on.replace(/__USER_NAME__/g,n.name||"\u9ED8\u8BA4").replace(/__USER_ID__/g,n.id).replace(/__STATUS__/g,u).replace(/__TOTAL_USED__/g,T(s)).replace(/__TOTAL_LIMIT__/g,o>0?T(o):"\u4E0D\u9650").replace(/__TOTAL_PROGRESS__/g,String(o>0?Math.min(100,Math.round(s/o*100)):0)).replace(/__DAILY_USED__/g,T(a)).replace(/__DAILY_LIMIT__/g,c>0?T(c):"\u4E0D\u9650").replace(/__DAILY_PROGRESS__/g,String(c>0?Math.min(100,Math.round(a/c*100)):0)).replace(/__EXPIRY__/g,n.expiryMs?new Date(n.expiryMs).toLocaleString("zh-CN"):"\u6C38\u4E45").replace(/__SYNC_RAW__/g,i).replace(/__SYNC_CLASH__/g,`${i}&flag=clash`).replace(/__SYNC_SINGBOX__/g,`${i}&flag=singbox`).replace(/__SYNC_V2RAY__/g,`${i}&flag=v2ray`).replace(/__SYNC_BASE64__/g,`${i}&flag=base64`)}async function pr(t,e){let n=String(e.maintenanceHost||"").split(",").map(i=>i.trim()).filter(Boolean);if(!n.length)return J("<h1>It works!</h1><p>CFSub is running.</p>");let r=t.headers.get("cf-connecting-ip")||"",s=0;for(let i of r)s+=i.charCodeAt(0);let o=n[s%n.length],a=new URL(t.url),c=await _(`${o}${a.pathname}${a.search}`,{method:t.method,headers:{"user-agent":t.headers.get("user-agent")||"Mozilla/5.0"}},8e3);return c?new Response(c.body,{status:c.status,headers:{"content-type":c.headers.get("content-type")||"text/html"}}):J("<h1>Service Unavailable</h1>",502)}export{Ss as default};
