(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,a,t){e.exports={root:"Main_root__18Ijz",tableContainer:"Main_tableContainer__3nSxX",table:"Main_table__1kZoj",cell:"Main_cell__fZU1U",rowTitle:"Main_rowTitle__3FSrX Main_cell__fZU1U",button:"Main_button__3cBNm",playersTable:"Main_playersTable__3eUeb Main_table__1kZoj",player:"Main_player__1emEa"}},20:function(e,a,t){e.exports={root:"Drawer_root__3Y3lN",cards:"Drawer_cards__2mB4M",card:"Drawer_card__2TB6a",addCard:"Drawer_addCard__Z9MTD Drawer_card__2TB6a",add:"Drawer_add__3ZrKP",columns:"Drawer_columns__3XXDq",column:"Drawer_column__3jbth",item:"Drawer_item__1mcHZ"}},73:function(e,a,t){e.exports=t(86)},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t(15),l=t(64),i=t(125),s=t(120),u=t(121),d=t(113),m=t(122),f=t(114),p=t(123),b=t(124),v=t(107),h=t(29),E=t.n(h),_=t(47),w=t.n(_),O=t(51),C=t(115),g=t(88),j=t(116),k=t(117),y=t(118),N=t(119),T=t(126),D=t(35),S=t(49),P=t(111),A=t(128),R=t(112),I=t(127),M=t(63),U=t.n(M),W=(Object({NODE_ENV:"production",PUBLIC_URL:"/cluedo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_HOST,["Prado","Rubio","Orquidea","Celeste","Mora","Amapola"]),B=["Sala de baile","Sala de billar","Invernadero","Comedor","Cuarto de ba\xf1o","Cocina","Biblioteca","Sal\xf3n","Estudio"],L=["Candelabro","Pu\xf1al","Tuberia de plomo","Pistola","Cuerda","Herramienta"],Z=t(19),x=t(58),F=t.n(x),H=t(31),K=t.n(H),X=K.a.createInstance({storeName:"cards"}),z=K.a.createInstance({storeName:"marks"}),Q=K.a.createInstance({storeName:"players"}),q=F()({cards:{state:{},reducer:function(e,a){var t=a.action,n=a.value;switch(t){case"add":X.setItem(n.id,n),e[n.id]=n;break;case"delete":X.removeItem(n.id),delete e[n.id]}}}});var J=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],c=q("cards"),l=Object(o.a)(c,2),i=l[0],s=l[1];return{openDialog:t,toggleDialog:function(){r(!t)},handleClick:function(e){var a=e.currentTarget;s({action:"add",value:Object(Z.a)({},a.dataset)}),r(!1)},handleDelete:function(e){s({action:"delete",value:e})},cards:i,handleReset:function(){K.a.dropInstance({name:"localforage"}),window.location.reload()}}},G=t(20),V=t.n(G);function Y(e){var a=e.onPress,t=e.id,c=Object(S.a)(e,["onPress","id"]),o=Object(n.useRef)();return r.a.createElement(v.a,Object.assign({onPointerDown:function(){o.current=setTimeout((function(){return a({id:t})}),750)},onPointerUp:function(){clearTimeout(o.current)}},c))}function $(e){var a=e.items,t=e.children,n=e.handleClick,c=a===W?"who":a===B?"where":"weapon";return r.a.createElement(P.a,{className:V.a.column},r.a.createElement(A.a,null,t),a.map((function(e){return r.a.createElement(A.a,{key:e,button:!0,onClick:n,"data-type":c,"data-id":e},r.a.createElement(R.a,{primary:e,className:V.a.item}))})))}var ee=function(e){var a=e.open,t=e.handleClose,n=e.handleOpen,c=J(),o=c.openDialog,l=c.toggleDialog,i=c.handleClick,s=c.handleDelete,u=c.cards,m=c.handleReset;return r.a.createElement(I.a,{swipeAreaWidth:75,open:a,onClose:t,onOpen:n},r.a.createElement(d.a,{open:o,onClose:l,className:V.a.root},r.a.createElement(f.a,null,r.a.createElement(D.a,{variant:"h5"},"Selecciona una carta"),r.a.createElement("div",{className:V.a.columns},r.a.createElement($,{items:W,handleClick:i},r.a.createElement(D.a,{variant:"button"},"Qui\xe9n")),r.a.createElement($,{items:L,handleClick:i},r.a.createElement(D.a,{variant:"button"},"Arma")),r.a.createElement($,{items:B,handleClick:i},r.a.createElement(D.a,{variant:"button"},"D\xf3nde"))))),r.a.createElement("div",{className:V.a.cards},Object.values(u).map((function(e){var a=e.id;return r.a.createElement(Y,{key:a,className:V.a.card,id:a,onPress:s},a)})),r.a.createElement(Y,{className:V.a.addCard,onClick:l,onPress:m},r.a.createElement(U.a,{className:V.a.add}))))},ae=t(25);var te=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useRef)({}),l=Object(n.useState)({}),i=Object(o.a)(l,2),s=i[0],u=i[1],d=Object(n.useState)({}),m=Object(o.a)(d,2),f=m[0],p=m[1],b=q("cards"),v=Object(o.a)(b,1)[0];return Object(n.useEffect)((function(){Q.iterate((function(e,a){u((function(t){return Object(Z.a)({},t,Object(ae.a)({},a,e))}))})),z.iterate((function(e,a){e[0];var t=Object(S.a)(e,["0"]);p((function(e){return Object(Z.a)({},e,Object(ae.a)({},a,Object(Z.a)({},e[a]||{},{},t)))}))}))}),[]),{openDrawer:t,handleOpen:function(){r(!0)},handleClose:function(){r(!1)},handleFocus:function(e){var a=e.currentTarget;c.current[a.dataset.id].focus()},players:s,handleChange:function(e){var a=e.currentTarget;u(Object(Z.a)({},s,Object(ae.a)({},a.dataset.id,a.value))),Q.setItem(a.dataset.id,a.value)},addRef:function(e){e&&(c.current[e.dataset.id]=e)},handleClick:function(e){var a=e.currentTarget.dataset,t=f[a.id]||{},n=((t[a.player]||0)+1)%4,r=Object(Z.a)({},t,Object(ae.a)({},a.player,n));p(Object(Z.a)({},f,Object(ae.a)({},a.id,r))),z.setItem(a.id,r)},marks:f,cards:v}},ne=t(18),re=t.n(ne);function ce(e,a,t,n){if(!t)return n[a]?E.a[500]:"white";switch(e[a]&&e[a][t]){case 1:return"var(--paletteBackgroundPaper)";case 2:return w.a[500];case 3:return E.a[500];default:return"white"}}function oe(e,a,t){var n=e[a]||{};return t[a]||Object.values(n).find((function(e){return 3===e}))?E.a[500]:null}function le(e){var a=e.items,t=e.handleClick,n=e.marks,c=e.cards;return r.a.createElement(C.a,{className:re.a.tableContainer,component:g.a},r.a.createElement(j.a,{className:re.a.table,padding:"none"},r.a.createElement(k.a,null,a.map((function(e){return r.a.createElement(y.a,{key:e,style:{"--color":oe(n,e,c)}},r.a.createElement(N.a,{className:re.a.rowTitle},e),Object(O.a)(Array(6).keys()).map((function(a){return r.a.createElement(N.a,{key:a,className:re.a.cell},r.a.createElement(v.a,{style:{"--color":ce(n,e,a,c)},"data-player":a,"data-id":e,onClick:a>0?t:void 0,centerRipple:!0,className:re.a.button,variant:"contained"}," "))})))})))))}var ie=r.a.memo((function(){var e=te(),a=e.openDrawer,t=e.handleOpen,n=e.handleClose,c=e.handleChange,o=e.players,l=e.addRef,i=e.handleClick,s=e.handleFocus,u=e.marks,d=e.cards;return r.a.createElement("div",{className:re.a.root},r.a.createElement(ee,{open:a,handleClose:n,handleOpen:t}),r.a.createElement(j.a,{className:re.a.playersTable,padding:"none"},r.a.createElement(k.a,null,r.a.createElement(y.a,null,Object(O.a)(Array(6).keys()).map((function(e){return e>0?r.a.createElement(N.a,{key:e,className:re.a.player},r.a.createElement(v.a,{disableFocusRipple:!0,onClick:s,"data-id":e,variant:"contained",className:re.a.button},r.a.createElement(T.a,{inputRef:l,inputProps:{"data-id":e},value:o[e]||"",onChange:c}),o[e])):null}))))),r.a.createElement(D.a,{variant:"button"},"\xbfQui\xe9n?"),r.a.createElement(le,{items:W,handleClick:i,marks:u,cards:d}),r.a.createElement(D.a,{variant:"button"},"\xbfQu\xe9 arma?"),r.a.createElement(le,{items:L,handleClick:i,marks:u,cards:d}),r.a.createElement(D.a,{variant:"button"},"\xbfD\xf3nde?"),r.a.createElement(le,{items:B,handleClick:i,marks:u,cards:d}))}));var se=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],r=a[1],c=q("cards",!1);return Object(n.useEffect)((function(){X.iterate((function(e){c({action:"add",value:e})}))}),[c]),Object(n.useEffect)((function(){function e(e){var a=e.detail;r((function(){return function(){a.postMessage({type:"SKIP_WAITING"}),window.location.reload()}}))}return window.addEventListener("update",e),function(){return window.removeEventListener("update",e)}}),[]),{update:t,handleClose:function(e){e.currentTarget.dataset.confirm?t():r()}}},ue=/palette(?:Primary|Secondary)(?:Light|Main|Dark)|paletteBackground/,de=Object(l.a)({palette:{type:"dark",primary:E.a,secondary:w.a}});!function e(a,t){if(a&&"object"===typeof a)Object.entries(a).forEach((function(a){var n=Object(o.a)(a,2),r=n[0],c=n[1];return e(c,t?"".concat(t).concat(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e&&e[0].toUpperCase()+e.slice(1)}(r)):r)}));else if(ue.test(t))return document.documentElement.style.setProperty("--".concat(t),a)}(de);var me=function(){var e=se(),a=e.update,t=e.handleClose;return r.a.createElement(i.b,{injectFirst:!0},r.a.createElement(s.a,{theme:de},r.a.createElement(u.a,null),r.a.createElement(d.a,{onClose:t,open:!!a},r.a.createElement(m.a,null,"Nueva versi\xf3n disponible"),r.a.createElement(f.a,null,r.a.createElement(p.a,null,'Pulsa "Actualizar" para aplicar los cambios')),r.a.createElement(b.a,null,r.a.createElement(v.a,{onClick:t,color:"secondary"},"Cancelar"),r.a.createElement(v.a,{onClick:t,"data-confirm":!0,color:"primary"},"Actualizar"))),r.a.createElement(ie,null)))},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var be=document.getElementById("root");be.hasChildNodes()?(Array.from(document.getElementsByTagName("style")).forEach((function(e){return e.remove()})),Object(c.hydrate)(r.a.createElement(me,null),be),function(e){if("serviceWorker"in navigator){if(new URL("/cluedo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/cluedo","/service-worker.js");fe?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pe(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):pe(a,e)}))}}({onUpdate:function(e){window.dispatchEvent(new CustomEvent("update",{detail:e.waiting}))}})):Object(c.render)(r.a.createElement(me,null),be)}},[[73,1,2]]]);