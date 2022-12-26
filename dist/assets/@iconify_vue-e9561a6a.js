import{a as t,h as e}from"./chunk-BGPNDDXN-dcda8805.js";var n=/^[a-z0-9]+(-[a-z0-9]+)*$/,o=(t,e,n,o="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),n=i.pop(),c={provider:i.length>0?i[0]:o,prefix:n,name:t};return e&&!r(c)?null:c}const c=i[0],s=c.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!r(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:c};return e&&!r(t,n)?null:t}return null},r=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(n)||!(e&&""===t.prefix||t.prefix.match(n))||!t.name.match(n)),i=Object.freeze({left:0,top:0,width:16,height:16}),c=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),s=Object.freeze({...i,...c}),a=Object.freeze({...s,body:"",hidden:!1});function l(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const o in a)o in c?o in t&&!(o in n)&&(n[o]=c[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function f(t,e,n){const o=t.icons,r=t.aliases||Object.create(null);let i={};function c(t){i=l(o[t]||r[t],i)}return c(e),n.forEach(c),l(t,i)}function u(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t,e){const n=t.icons,o=t.aliases||Object.create(null),r=Object.create(null);return(e||Object.keys(n).concat(Object.keys(o))).forEach((function t(e){if(n[e])return r[e]=[];if(!(e in r)){r[e]=null;const n=o[e]&&o[e].parent,i=n&&t(n);i&&(r[e]=[n].concat(i))}return r[e]})),r}(t);for(const r in o){const i=o[r];i&&(e(r,f(t,r,i)),n.push(r))}return n}var d={provider:"",aliases:{},not_found:{},...i};function p(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function h(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!p(t,d))return null;const o=e.icons;for(const i in o){const t=o[i];if(!i.match(n)||"string"!=typeof t.body||!p(t,a))return null}const r=e.aliases||Object.create(null);for(const i in r){const t=r[i],e=t.parent;if(!i.match(n)||"string"!=typeof e||!o[e]&&!r[e]||!p(t,a))return null}return e}var g=Object.create(null);function m(t,e){const n=g[t]||(g[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function b(t,e){return h(e)?u(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}function y(t,e){let n=[];return("string"==typeof t?[t]:Object.keys(g)).forEach((t=>{("string"==typeof t&&"string"==typeof e?[e]:Object.keys(g[t]||{})).forEach((e=>{const o=m(t,e);n=n.concat(Object.keys(o.icons).map((n=>(""!==t?"@"+t+":":"")+e+":"+n)))}))})),n}var v=!1;function x(t){return"boolean"==typeof t&&(v=t),v}function w(t){const e="string"==typeof t?o(t,!0,v):t;if(e){const t=m(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function j(t,e){const n=o(t,!0,v);if(!n)return!1;return function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(o){}return!1}(m(n.provider,n.prefix),n.name,e)}function k(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),v&&!e&&!t.prefix){let e=!1;return h(t)&&(t.prefix="",u(t,((t,n)=>{n&&j(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!r({provider:e,prefix:n,name:"a"}))return!1;return!!b(m(e,n),t)}function I(t){return!!w(t)}function S(t){const e=w(t);return e?{...s,...e}:null}var O=Object.freeze({width:null,height:null}),E=Object.freeze({...O,...c}),F=/(-?[0-9.]*[0-9]+[0-9.]*)/g,M=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function C(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(F);if(null===o||!o.length)return t;const r=[];let i=o.shift(),c=M.test(i);for(;;){if(c){const t=parseFloat(i);isNaN(t)?r.push(i):r.push(Math.ceil(t*e*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");c=!c}}function L(t,e){const n={...s,...t},o={...E,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let c,s=t.rotate;switch(n?o?s+=2:(e.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),e.push("scale(-1 1)"),r.top=r.left=0):o&&(e.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),e.push("scale(1 -1)"),r.top=r.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=r.height/2+r.top,e.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:e.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:c=r.width/2+r.left,e.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2==1&&(r.left!==r.top&&(c=r.left,r.left=r.top,r.top=c),r.width!==r.height&&(c=r.width,r.width=r.height,r.height=c)),e.length&&(i='<g transform="'+e.join(" ")+'">'+i+"</g>")}));const c=o.width,a=o.height,l=r.width,f=r.height;let u,d;null===c?(d=null===a?"1em":"auto"===a?f:a,u=C(d,l/f)):(u="auto"===c?l:c,d=null===a?C(u,f/l):"auto"===a?f:a);return{attributes:{width:u.toString(),height:d.toString(),viewBox:r.left.toString()+" "+r.top.toString()+" "+l.toString()+" "+f.toString()},body:i}}var T=/\sid="(\S+)"/g,_="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),A=0;function P(t,e=_){const n=[];let o;for(;o=T.exec(t);)n.push(o[1]);return n.length?(n.forEach((n=>{const o="function"==typeof e?e(n):e+(A++).toString(),r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+r+')([")]|\\.[a-z])',"g"),"$1"+o+"$3")})),t):t}var z=Object.create(null);function N(t,e){z[t]=e}function $(t){return z[t]||z[""]}function D(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}for(var R=Object.create(null),U=["https://api.simplesvg.com","https://api.unisvg.com"],q=[];U.length>0;)1===U.length||Math.random()>.5?q.push(U.shift()):q.push(U.pop());function Q(t,e){const n=D(e);return null!==n&&(R[t]=n,!0)}function B(t){return R[t]}R[""]=D({resources:["https://api.iconify.design"].concat(q)});var H=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();var J={prepare:(t,e,n)=>{const o=[],r=function(t,e){const n=B(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const r=e+".json?icons=";o=n.maxURL-t-n.path.length-r.length}else o=0;return o}(t,e),i="icons";let c={type:i,provider:t,prefix:e,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=r&&a>0&&(o.push(c),c={type:i,provider:t,prefix:e,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(t,e,n)=>{if(!H)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=B(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let r=503;H(t+o).then((t=>{const e=t.status;if(200===e)return r=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",r)}))})).catch((()=>{n("next",r)}))}};function G(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}var V=0;var X={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function K(t,e,n,o){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let c;if(t.random){let e=t.resources.slice(0);for(c=[];e.length>1;){const t=Math.floor(Math.random()*e.length);c.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}c=c.concat(e)}else c=t.resources.slice(i).concat(t.resources.slice(0,i));const s=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function b(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==l)return;h();const o=c.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),b())}),t.timeout)):void b();const r={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const r="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(r||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(r)return a=o,void(d.length||(c.length?v():b()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(r,e,n)}};d.push(r),f++,u=setTimeout(v,t.rotate),n(o,e,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(v),function(){return{startTime:s,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function W(t){const e={...X,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,r,i){const c=K(e,t,r,((t,e)=>{o(),i&&i(t,e)}));return n.push(c),c},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function Y(){}var Z=Object.create(null);function tt(t,e,n){let o,r;if("string"==typeof t){const e=$(t);if(!e)return n(void 0,424),Y;r=e.send;const i=function(t){if(!Z[t]){const e=B(t);if(!e)return;const n={config:e,redundancy:W(e)};Z[t]=n}return Z[t]}(t);i&&(o=i.redundancy)}else{const e=D(t);if(e){o=W(e);const n=$(t.resources?t.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(e,r,n)().abort:(n(void 0,424),Y)}var et="iconify2",nt="iconify",ot=nt+"-count",rt=nt+"-version",it=36e5;function ct(t,e){try{return t.getItem(e)}catch(n){}}function st(t,e,n){try{return t.setItem(e,n),!0}catch(o){}}function at(t,e){try{t.removeItem(e)}catch(n){}}function lt(t,e){return st(t,ot,e.toString())}function ft(t){return parseInt(ct(t,ot))||0}var ut={local:!0,session:!0},dt={local:new Set,session:new Set},pt=!1;var ht="undefined"==typeof window?{}:window;function gt(t){const e=t+"Storage";try{if(ht&&ht[e]&&"number"==typeof ht[e].length)return ht[e]}catch(n){}ut[t]=!1}function mt(t,e){const n=gt(t);if(!n)return;const o=ct(n,rt);if(o!==et){if(o){const t=ft(n);for(let e=0;e<t;e++)at(n,nt+e.toString())}return st(n,rt,et),void lt(n,0)}const r=Math.floor(Date.now()/it)-168,i=t=>{const o=nt+t.toString(),i=ct(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(c){}at(n,o)}};let c=ft(n);for(let s=c-1;s>=0;s--)i(s)||(s===c-1?(c--,lt(n,c)):dt[t].add(s))}function bt(){if(!pt){pt=!0;for(const t in ut)mt(t,(t=>{const e=t.data,n=m(t.provider,e.prefix);if(!b(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function yt(t,e){function n(n){let o;if(!ut[n]||!(o=gt(n)))return;const r=dt[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=ft(o),!lt(o,i+1))return;const c={cached:Math.floor(Date.now()/it),provider:t.provider,data:e};return st(o,nt+i.toString(),JSON.stringify(c))}pt||bt(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in ut)mt(o,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function vt(){}function xt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,r=t.prefix;e.forEach((e=>{const i=e.icons,c=i.pending.length;i.pending=i.pending.filter((e=>{if(e.prefix!==r)return!0;const c=e.name;if(t.icons[c])i.loaded.push({provider:o,prefix:r,name:c});else{if(!t.missing.has(c))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:c})}return!1})),i.pending.length!==c&&(n||G([t],e.id),e.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),e.abort))}))})))}(t)})))}var wt=(t,e)=>{const n=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const r=t.provider,i=t.prefix,c=t.name,s=n[r]||(n[r]=Object.create(null)),a=s[i]||(s[i]=m(r,i));let l;l=c in a.icons?e.loaded:""===i||a.missing.has(c)?e.missing:e.pending;const f={provider:r,prefix:i,name:c};l.push(f)})),e}(function(t,e=!0,n=!1){const r=[];return t.forEach((t=>{const i="string"==typeof t?o(t,e,n):t;i&&r.push(i)})),r}(t,!0,x()));if(!n.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(n.loaded,n.missing,n.pending,vt)})),()=>{t=!1}}const r=Object.create(null),i=[];let c,s;return n.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===s&&e===c)return;c=e,s=n,i.push(m(e,n));const o=r[e]||(r[e]=Object.create(null));o[n]||(o[n]=[])})),n.pending.forEach((t=>{const{provider:e,prefix:n,name:o}=t,i=m(e,n),c=i.pendingIcons||(i.pendingIcons=new Set);c.has(o)||(c.add(o),r[e][n].push(o))})),i.forEach((t=>{const{provider:e,prefix:n}=t;r[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let r;delete t.iconsToLoad,o&&(r=$(e))&&r.prepare(e,n,o).forEach((n=>{tt(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=b(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),yt(t,e)}catch(o){console.error(o)}xt(t)}))}))})))}(t,r[e][n])})),e?function(t,e,n){const o=V++,r=G.bind(null,n,o);if(!e.pending.length)return r;const i={id:o,icons:e,callback:t,abort:r};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(i)})),r}(e,n,i):vt},jt=t=>new Promise(((e,n)=>{const r="string"==typeof t?o(t,!0):t;r?wt([r||t],(o=>{if(o.length&&r){const t=w(r);if(t)return void e({...s,...t})}n(t)})):n(t)}));function kt(t,e){switch(t){case"local":case"session":ut[t]=e;break;case"all":for(const t in ut)ut[t]=e}}var It=/[\s,]+/;function St(t,e){e.split(It).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function Ot(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r/=e,r%1==0?o(r):0)}}return e}var Et={...E,inline:!1},Ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Mt={display:"inline-block"},Ct={backgroundColor:"currentColor"},Lt={backgroundColor:"transparent"},Tt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},_t={webkitMask:Ct,mask:Ct,background:Lt};for(const Qt in _t){const t=_t[Qt];for(const e in Tt)t[Qt+e]=Tt[e]}var At={};function Pt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}["horizontal","vertical"].forEach((t=>{const e=t.slice(0,1)+"Flip";At[t+"-flip"]=e,At[t.slice(0,1)+"-flip"]=e,At[t+"Flip"]=e}));var zt=(t,n)=>{const o=function(t,e){const n={...t};for(const o in e){const t=e[o],r=typeof t;o in O?(null===t||t&&("string"===r||"number"===r))&&(n[o]=t):r===typeof n[o]&&(n[o]="rotate"===o?t%4:t)}return n}(Et,n),r={...Ft},i=n.mode||"svg",c={},s=n.style,a="object"!=typeof s||s instanceof Array?{}:s;for(let e in n){const t=n[e];if(void 0!==t)switch(e){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":o[e]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&St(o,t);break;case"color":c.color=t;break;case"rotate":"string"==typeof t?o[e]=Ot(t):"number"==typeof t&&(o[e]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete r["aria-hidden"];break;default:{const n=At[e];n?!0!==t&&"true"!==t&&1!==t||(o[n]=!0):void 0===Et[e]&&(r[e]=t)}}}const l=L(t,o),f=l.attributes;if(o.inline&&(c.verticalAlign="-0.125em"),"svg"===i){r.style={...c,...a},Object.assign(r,f);let t=0,o=n.id;return"string"==typeof o&&(o=o.replace(/-/g,"_")),r.innerHTML=P(l.body,o?()=>o+"ID"+t++:"iconifyVue"),e("svg",r)}const{body:u,width:d,height:p}=t,h="mask"===i||"bg"!==i&&-1!==u.indexOf("currentColor"),g=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(u,{...f,width:d+"",height:p+""});var m;return r.style={...c,"--svg":(m=g,'url("data:image/svg+xml,'+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(m)+'")'),width:Pt(f.width),height:Pt(f.height),...Mt,...h?Ct:Lt,...a},e("span",r)};function Nt(t){kt(t,!0)}function $t(t){kt(t,!1)}if(x(!0),N("",J),"undefined"!=typeof document&&"undefined"!=typeof window){bt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!k(t))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;Q(t,o)||console.error(n)}catch(qt){console.error(n)}}}}var Dt={...s,body:""},Rt=t({inheritAttrs:!1,data:()=>({iconMounted:!1,counter:0}),mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if("object"==typeof t&&null!==t&&"string"==typeof t.body)return this._name="",this.abortLoading(),{data:t};let n;if("string"!=typeof t||null===(n=o(t,!1,!0)))return this.abortLoading(),null;const r=w(n);if(!r)return this._loadingIcon&&this._loadingIcon.name===t||(this.abortLoading(),this._name="",null!==r&&(this._loadingIcon={name:t,abort:wt([n],(()=>{this.counter++}))})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const i=["iconify"];return""!==n.prefix&&i.push("iconify--"+n.prefix),""!==n.provider&&i.push("iconify--"+n.provider),{data:r,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return zt(Dt,t);let n=t;return e.classes&&(n={...t,class:("string"==typeof t.class?t.class+" ":"")+e.classes.join(" ")}),zt({...s,...e.data},n)}}),Ut={getAPIConfig:B,setAPIModule:N,sendAPIQuery:tt,setFetch:function(t){H=t},getFetch:function(){return H},listAPIProviders:function(){return Object.keys(R)}};export{Rt as Icon,Ut as _api,Q as addAPIProvider,k as addCollection,j as addIcon,L as buildIcon,C as calculateSize,$t as disableCache,Nt as enableCache,S as getIcon,I as iconExists,y as listIcons,jt as loadIcon,wt as loadIcons,P as replaceIDs};