(function(){var e={8190:function(e,o,t){"use strict";t.r(o);var n=t(4657),r=t.n(n),i=t(9483),c=t.n(i),d=c()(r());d.push([e.id,".mode-choose[data-v-5844ce3c]{width:100%;display:flex;font-size:14px}.mode-choose .mode-choose-item[data-v-5844ce3c]{width:50%;text-align:center;cursor:pointer;height:100%;display:flex;align-items:center;justify-content:center}.mode-choose .mode-choose-item.choose[data-v-5844ce3c]{background:#141414;border-radius:4vw;color:#1890ff}",""]),o["default"]=d},877:function(e,o,t){"use strict";t.r(o);var n=t(4657),r=t.n(n),i=t(9483),c=t.n(i),d=c()(r());d.push([e.id,"*{font-family:Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}#app{overflow:hidden;position:absolute;top:0;bottom:0;right:0;left:0}.chem-3d-header{position:fixed;top:10px;width:45%;left:27.5%;height:6vh;color:#e3e3e3;font-size:16px;z-index:1;padding:0 10px}.chem-3d-header,.chem-3d-header>div{display:flex;justify-content:center;align-items:center}.chem-3d-header>div{height:100%;background:#868686;opacity:.8;color:#fff;border-radius:4vw}",""]),o["default"]=d},7187:function(e,o,t){"use strict";t(5371);var n=t(8995),r=t(5751),i=t(5136);const c={class:"mode-choose"};var d={__name:"modeChoose",props:{mode:String},emits:["update:mode"],setup(e){const{mode:o}=e;return(o,t)=>((0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",{class:(0,i.C_)({"mode-choose-item":!0,choose:"AR"==e.mode}),onClick:t[0]||(t[0]=e=>o.$emit("update:mode","AR"))},"AR",2),(0,r._)("div",{class:(0,i.C_)({"mode-choose-item":!0,choose:"AR"!=e.mode}),onClick:t[1]||(t[1]=e=>o.$emit("update:mode","模型"))},"模型",2)]))}},a=(t(6279),t(2637));const u=(0,a.Z)(d,[["__scopeId","data-v-5844ce3c"]]);var s=u,l=t(4214);const f={class:"chem-3d-header"},h={src:"./ar.html",style:{border:"none",width:"100%",height:"100%"}},p={src:"./model.html",style:{border:"none",width:"100%",height:"100%"}};var m={__name:"App",setup(e){const o=(0,l.iH)("AR");return(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",f,[(0,r.Wm)(s,{mode:o.value,"onUpdate:mode":t[0]||(t[0]=e=>o.value=e)},null,8,["mode"])]),(0,r.wy)((0,r._)("iframe",h,null,512),[[n.F8,"AR"===o.value]]),(0,r.wy)((0,r._)("iframe",p,null,512),[[n.F8,"模型"===o.value]])],64))}};t(2927);const v=m;var g=v;(0,n.ri)(g).mount("#app")},6279:function(e,o,t){var n=t(8190);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var r=t(740).Z;r("3e8994fa",n,!0,{sourceMap:!1,shadowMode:!1})},2927:function(e,o,t){var n=t(877);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var r=t(740).Z;r("b6d1520a",n,!0,{sourceMap:!1,shadowMode:!1})}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={id:n,loaded:!1,exports:{}};return e[n](i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,i){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],i=e[s][2];for(var d=!0,a=0;a<n.length;a++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[a])}))?n.splice(a--,1):(d=!1,i<c&&(c=i));if(d){e.splice(s--,1);var u=r();void 0!==u&&(o=u)}}return o}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,r,i]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.j=826}(),function(){var e={826:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,i,c=n[0],d=n[1],a=n[2],u=0;if(c.some((function(o){return 0!==e[o]}))){for(r in d)t.o(d,r)&&(t.m[r]=d[r]);if(a)var s=a(t)}for(o&&o(n);u<c.length;u++)i=c[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},n=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(7187)}));n=t.O(n)})();