(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(e,n,t){e.exports={root:"Main_root__18Ijz"}},56:function(e,n,t){e.exports=t(66)},66:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(7),i=t(40),c=t(21),l=t(49),s=t(95),u=t(89),d=t(90),f=t(96),v=t(91),h=t(92),p=t(93),m=t(94),w=t(97),g=t(47),E=t.n(g),b=t(48),y=t.n(b),j=t(98),k=t(87),C=t(41),O=t.n(C)()({notifications:{state:[],reducer:function(e,n){var t=n.action,a=n.value;switch(t){case"push":e.push(a);break;case"shift":e.shift();break;default:return}}}});var A=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],o=n[1],r=O("notifications"),i=Object(c.a)(r,2),l=i[0],s=i[1];return Object(a.useEffect)((function(){o(l.length>0)}),[l]),{notification:l[0],handleClose:function(){o(!1)},handleExited:function(){s({action:"shift"})},open:t}};var W=function(){var e=A(),n=e.notification,t=e.handleClose,a=e.handleExited,r=e.open;return o.a.createElement(j.a,{open:r,onClose:t,onExited:a,autoHideDuration:2e3},o.a.createElement(k.a,{message:n}))},N=t(46),S=t.n(N);var x=o.a.memo((function(e){var n=e.style;return o.a.createElement("div",{className:S.a.root,style:n},o.a.createElement(W,null))}));var I=function(){var e=Object(a.useState)(),n=Object(c.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){function e(e){var n=e.detail;o((function(){return function(){n.postMessage({type:"SKIP_WAITING"}),window.location.reload()}}))}return window.addEventListener("update",e),function(){return window.removeEventListener("update",e)}}),[]),{update:t,handleClose:function(e){e.currentTarget.dataset.confirm?t():o()}}},P=/palettePrimary/,T=Object(l.a)({palette:{type:"dark",primary:E.a,secondary:y.a}}),U=function e(n,t){if(n&&"object"===typeof n)return Object.entries(n).reduce((function(n,a){var o=Object(c.a)(a,2),r=o[0],i=o[1],l=e(i,t?"".concat(t).concat(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e&&e[0].toUpperCase()+e.slice(1)}(r)):r);return Object.assign(n,l),n}),{});if(P.test(t))return Object(i.a)({},"--".concat(t),n)}(T);var L=function(){var e=I(),n=e.update,t=e.handleClose;return o.a.createElement(s.b,{injectFirst:!0},o.a.createElement(u.a,{theme:T},o.a.createElement(d.a,null),o.a.createElement(f.a,{onClose:t,open:!!n},o.a.createElement(v.a,null,"Nueva versi\xf3n disponible"),o.a.createElement(h.a,null,o.a.createElement(p.a,null,'Pulsa "Actualizar" para aplicar los cambios')),o.a.createElement(m.a,null,o.a.createElement(w.a,{onClick:t,color:"secondary"},"Cancelar"),o.a.createElement(w.a,{onClick:t,"data-confirm":!0,color:"primary"},"Actualizar"))),o.a.createElement(x,{style:U})))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=document.getElementById("root");B.hasChildNodes()?(Array.from(document.getElementsByTagName("style")).forEach((function(e){return e.remove()})),Object(r.hydrate)(o.a.createElement(L,null),B),function(e){if("serviceWorker"in navigator){if(new URL("/cluedo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/cluedo","/service-worker.js");_?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(n,e)}))}}({onUpdate:function(e){window.dispatchEvent(new CustomEvent("update",{detail:e.waiting}))}})):Object(r.render)(o.a.createElement(L,null),B)}},[[56,1,2]]]);