!function(){const e="undefined"!=typeof self?self:global;let n;if("undefined"!=typeof location){const e=(n=location.href.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==e&&(n=n.slice(0,e+1))}const t=/\\/g,r="undefined"!=typeof Symbol,o=r&&Symbol.toStringTag,i=r?Symbol():"@";function c(){this[i]={}}const l=c.prototype;let u;l.import=function(e,n){const t=this;return Promise.resolve(t.resolve(e,n)).then(function(e){const n=function e(n,t,r){let c=n[i][t];if(c)return c;const l=[],u=Object.create(null);o&&Object.defineProperty(u,o,{value:"Module"});let s=Promise.resolve().then(function(){return n.instantiate(t,r)}).then(function(e){if(!e)throw new Error("Module "+t+" did not instantiate");const r=e[1](function(e,n){c.h=!0;let t=!1;if("object"!=typeof e)e in u&&u[e]===n||(u[e]=n,t=!0);else for(let n in e){let r=e[n];n in u&&u[n]===r||(u[n]=r,t=!0)}if(t)for(let e=0;e<l.length;e++)l[e](u);return n},2===e[1].length?{import:function(e){return n.import(e,t)},meta:n.createContext(t)}:void 0);return c.e=r.execute||function(){},[e[0],r.setters||[]]});const f=s.then(function(r){return Promise.all(r[0].map(function(o,i){const c=r[1][i];return Promise.resolve(n.resolve(o,t)).then(function(r){const o=e(n,r,t);return Promise.resolve(o.I).then(function(){return c&&(o.i.push(c),!o.h&&o.I||c(o.n)),o})})})).then(function(e){c.d=e})});return f.catch(function(e){c.e=null,c.er=e}),c=n[i][t]={id:t,i:l,n:u,I:s,L:f,h:!1,d:void 0,e:void 0,er:void 0,E:void 0,C:void 0}}(t,e);return n.C||function(e,n){return n.C=function e(n,t,r){if(!r[t.id])return r[t.id]=!0,Promise.resolve(t.L).then(function(){return Promise.all(t.d.map(function(t){return e(n,t,r)}))})}(e,n,{}).then(function(){return function e(n,t,r){if(r[t.id])return;if(r[t.id]=!0,!t.e){if(t.er)throw t.er;return t.E?t.E:void 0}let o;return t.d.forEach(function(t){{const i=e(n,t,r);i&&(o=o||[]).push(i)}}),o?t.E=Promise.all(o).then(i):i();function i(){try{let e=t.e.call(s);if(e)return e.then(function(){t.C=t.n,t.E=null}),e.catch(function(){}),t.E=t.E||e;t.C=t.n}catch(e){throw t.er=e,e}finally{t.L=t.I=void 0,t.e=null}}}(e,n,{})}).then(function(){return n.n})}(t,n)})},l.createContext=function(e){return{url:e}},l.register=function(e,n){u=[e,n]},l.getRegister=function(){const e=u;return u=void 0,e};const s=Object.freeze(Object.create(null));let f;e.System=new c,"undefined"!=typeof window&&window.addEventListener("error",function(e){f=e.error});const d=l.register;l.register=function(e,n){f=void 0,d.call(this,e,n)},l.instantiate=function(e,n){const t=this;return new Promise(function(r,o){const i=document.createElement("script");i.charset="utf-8",i.async=!0,i.crossOrigin="anonymous",i.addEventListener("error",function(){o(new Error("Error loading "+e+(n?" from "+n:"")))}),i.addEventListener("load",function(){if(document.head.removeChild(i),f)return o(f),f=void 0;r(t.getRegister())}),i.src=e,document.head.appendChild(i)})},l.resolve=function(e,r){const o=function(e,n){if(-1!==e.indexOf("\\")&&(e=e.replace(t,"/")),"/"===e[0]&&"/"===e[1])return n.slice(0,n.indexOf(":")+1)+e;if("."===e[0]&&("/"===e[1]||"."===e[1]&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===e[0]){const t=n.slice(0,n.indexOf(":")+1);let r;if(r="/"===n[t.length+1]?"file:"!==t?(r=n.slice(t.length+2)).slice(r.indexOf("/")+1):n.slice(8):n.slice(t.length+("/"===n[t.length])),"/"===e[0])return n.slice(0,n.length-r.length-1)+e;const o=r.slice(0,r.lastIndexOf("/")+1)+e,i=[];let c=-1;for(let e=0;e<o.length;e++)-1!==c?"/"===o[e]&&(i.push(o.slice(c,e+1)),c=-1):"."===o[e]?"."!==o[e+1]||"/"!==o[e+2]&&e+2!==o.length?"/"===o[e+1]||e+1===o.length?e+=1:c=e:(i.pop(),e+=2):c=e;return-1!==c&&i.push(o.slice(c)),n.slice(0,n.length-r.length)+i.join("")}}(e,r||n);if(!o){if(-1!==e.indexOf(":"))return Promise.resolve(e);throw new Error('Cannot resolve "'+e+(r?'" from '+r:'"'))}return Promise.resolve(o)}}();
