"use strict";(()=>{Object.create;var e,t=Object.defineProperty,r=(Object.getOwnPropertyDescriptor,Object.getOwnPropertyNames,Object.getPrototypeOf,Object.prototype.hasOwnProperty,e=function(e){if("undefined"!=typeof require)return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')},"undefined"!=typeof require?require:"undefined"!=typeof Proxy&&new Proxy(e,{get:(e,t)=>("undefined"!=typeof require?require:e)[t]}),"fs-attributes"),i="cmscombine",n=class{static activateAlerts(){this.alertsActivated=!0}static alert(e,t){if(this.alertsActivated&&window.alert(e),"error"===t)throw new Error(e)}};((e,r,i)=>{((e,r,i)=>{r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i})(e,"symbol"!=typeof r?r+"":r,i)})(n,"alertsActivated",!1);var s=()=>{};var o=`${r}-support`,a=e=>t=>`${e}${t?`-${t}`:""}`,l=e=>{let t=(t,r,i)=>{let n,s=e[t],{key:o,values:a}=s;if(!r)return`[${o}]`;let l=null==a?void 0:a[r];n="string"==typeof l?l:l(i&&"instanceIndex"in i?i.instanceIndex:void 0);let u=i&&"caseInsensitive"in i&&i.caseInsensitive?"i":"";if(null==i||!i.operator)return`[${o}="${n}"${u}]`;switch(i.operator){case"prefixed":return`[${o}^="${n}"${u}]`;case"suffixed":return`[${o}$="${n}"${u}]`;case"contains":return`[${o}*="${n}"${u}]`}};return[t,function(e,r){let i=t("element",e,r),n=(null==r?void 0:r.scope)||document;return null!=r&&r.all?[...n.querySelectorAll(i)]:n.querySelector(i)}]},u={preventLoad:{key:`${r}-preventload`},debugMode:{key:`${r}-debug`},src:{key:"src",values:{finsweet:"@finsweet/attributes"}},dev:{key:`${r}-dev`}},[c,d]=l(u),f=()=>{let e=p();if(window.fsAttributes&&!Array.isArray(window.fsAttributes))return void w(window.fsAttributes,e);let t={cms:{},push(...e){var t,r;for(let[i,n]of e)null==(r=null==(t=this[i])?void 0:t.loading)||r.then(n)},destroy(){var t,r;for(let i of e)null==(r=null==(t=window.fsAttributes[i])?void 0:t.destroy)||r.call(t)}};w(t,e),m(t),window.fsAttributes=t,window.FsAttributes=window.fsAttributes,(async()=>{let{fsAttributes:e,location:t}=window,{host:r,searchParams:i}=new URL(t.href);e.support||(e.support={});let{support:n}=e;if(!r.includes("webflow.io")||!i.has(o))return!1;if(n.import)return n.import;try{n.import=new Promise(((e,t)=>{let r=document.createElement("script");r.src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",r.onload=()=>e(!0),r.onerror=t,document.head.append(r)}))}catch(e){return!1}n.import})()},p=()=>{let e=c("src","finsweet",{operator:"contains"}),t=c("dev");return[...document.querySelectorAll(`script${e}, script${t}`)].reduce(((e,t)=>{var r;let i=t.getAttribute(u.dev.key)||(null==(r=t.src.match(/[\w-. ]+(?=(\.js)$)/))?void 0:r[0]);return i&&!e.includes(i)&&e.push(i),e}),[])},w=(e,t)=>{for(let r of t){if(e[r])continue;e[r]={};let t=e[r];t.loading=new Promise((e=>{t.resolve=r=>{e(r),delete t.resolve}}))}},m=e=>{let t=Array.isArray(window.fsAttributes)?window.fsAttributes:[];e.push(...t)},v={element:{key:`${`fs-${i}`}-element`,values:{list:a("list"),itemsCount:a("items-count")}}},[y,b]=l(v),A=async(e,t)=>{let r=t.map((({element:e})=>e));await e.addItems(r)},h=async({lists:e,target:t,instanceIndex:r})=>{if(!t.itemsCount){let e=b("itemsCount",{instanceIndex:r});e&&t.addItemsCount(e)}for(let r of e)r.on("additems",(async e=>await A(t,e)));return await Promise.all(e.map((async({wrapper:e,items:r})=>{e.remove(),await A(t,r)}))),t};(({scriptAttributes:e,attributeKey:t,version:r,init:i})=>{var n;f(),(n=window.fsAttributes)[t]||(n[t]={});let{preventsLoad:s,attributes:o}=(e=>{let{currentScript:t}=document,r={};if(!t)return{attributes:r,preventsLoad:!1};let i={preventsLoad:"string"==typeof t.getAttribute(u.preventLoad.key),attributes:r};for(let r in e){let n=t.getAttribute(e[r]);i.attributes[r]=n}return i})(e),a=window.fsAttributes[t];a.version=r,a.init=i,s||(window.Webflow||(window.Webflow=[]),window.Webflow.push((()=>i(o))))})({init:async()=>{let e=await(async()=>{let{fsAttributes:e}=window;e.cmscore||(e.cmscore={});let{cmscore:t}=e;if(t.import)return t.import;try{return t.import=import("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmscore@1/cmscore.js"),t.import.then((e=>{e&&(t.version||(t.version=e.version))})),t.import}catch(e){return void n.alert(`${e}`,"error")}})();if(!e)return[];await(async(...e)=>{var t;let r=[];for(let i of e){let e=await(null==(t=window.fsAttributes[i])?void 0:t.loading);r.push(e)}return r})("cmsattribute");let t=e.createCMSListInstances([y("element","list",{operator:"prefixed"})]),r=(e=>{var t;let r=[];for(let i of e){let e=i.getInstanceIndex(v.element.key),n=r[t=e||0]||(r[t]={lists:[],target:i,instanceIndex:e});i!==n.target&&n.lists.push(i)}return r=r.filter((e=>e&&e.lists.length)),r})(t),o=await Promise.all(r.map(h));return function(e,t,r){var i;let n=window.fsAttributes[e];return n.destroy=r||s,null==(i=n.resolve)||i.call(n,t),t}(i,o,(()=>{var e;for(let r of t)null==(e=r.destroy)||e.call(r)}))},version:"1.8.0",attributeKey:i})})();