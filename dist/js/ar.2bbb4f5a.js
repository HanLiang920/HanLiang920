(function(){var e={7609:function(e,t,n){"use strict";n.r(t);var r=n(4657),o=n.n(r),i=n(9483),a=n.n(i),u=a()(o());u.push([e.id,"*{font-family:Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}#app,body{overflow:hidden}#app{position:absolute;top:0;bottom:0;right:0;left:0}",""]),t["default"]=u},6025:function(e,t,n){"use strict";n(5371),n(8321);var r=n(8995),o=n(5751),i=n(7181),a=n(4214),u={__name:"BaseMarker",props:{id:String,type:String},setup(e){const{id:t,type:n}=e,r=(0,a.iH)(),u=(0,a.iH)(!1);return(0,o.bv)((()=>{const e=r.value;e.addEventListener("markerFound",(e=>{u.value=!0})),e.addEventListener("markerLost",(()=>{u.value=!1}))})),(t,n)=>{const a=(0,o.up)("a-marker");return(0,o.wg)(),(0,o.j4)(a,{ref_key:"el",ref:r,type:"barcode",value:e.id,smooth:"true"},{default:(0,o.w5)((()=>[u.value?((0,o.wg)(),(0,o.j4)(i.Z,{key:0,type:e.type,showAxes:!1},null,8,["type"])):(0,o.kq)("",!0)])),_:1},8,["value"])}}};const l=u;var s=l,c={__name:"ar",setup(e){return(e,t)=>{const n=(0,o.up)("a-entity"),r=(0,o.up)("a-scene");return(0,o.wg)(),(0,o.j4)(r,{embedded:"","device-orientation-permission-ui":"enabled: false",renderer:"antialias: true;\r\n                   colorManagement: true;\r\n                   sortObjects: true;\r\n                   physicallyCorrectLights: true;\r\n                   logarithmicDepthBuffer: true;\r\n                   maxCanvasWidth: -1;\r\n                   maxCanvasHeight: -1;",arjs:"sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_9_3;","vr-mode-ui":"enabled: false"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{id:"0",type:"甲烷"}),(0,o.Wm)(s,{id:"1",type:"乙烷"}),(0,o.Wm)(n,{camera:"","look-controls":"enabled: false","object-controls":"target: 0 0 0; initialPosition: 0 0 0"}),(0,o.Wm)(n,{light:"type: ambient; intensity: 1.8;"}),(0,o.Wm)(n,{light:"type: directional;\r\n                   castShadow: true;\r\n                   intensity: 1.6;",position:"-5 3 1.5"})])),_:1})}}};n(4052);const d=c;var f=d;(0,r.ri)(f).mount("#app"),window.addEventListener("camera-init",(function(){const e=parent.window.document.getElementsByClassName("main")[0];e&&e.parentNode.removeChild(e)}))},4052:function(e,t,n){var r=n(7609);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);var o=n(740).Z;o("4ad2e808",r,!0,{sourceMap:!1,shadowMode:!1})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.j=850}(),function(){var e={850:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],l=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var c=l(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998,64],(function(){return n(6025)}));r=n.O(r)})();