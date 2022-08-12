(function(){var e={3563:function(e,t,n){"use strict";n.r(t);var r=n(8081),a=n.n(r),o=n(3645),i=n.n(o),s=i()(a());s.push([e.id,"*{font-family:Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{overflow:hidden}#app,.qr-scanner{position:absolute;top:0;bottom:0;right:0;left:0}.qr-scanner{background-size:3rem 3rem;background-position:-1rem -1rem}.qr-scanner .box{width:75vw;height:75vw;max-height:75vh;max-width:75vh;position:relative;left:50%;top:50%;transform:translate(-50%,-50%);overflow:hidden}.qr-scanner .line{height:100%;width:100%;background:linear-gradient(180deg,rgba(0,255,51,0) 70%,#0f3 280%);transform:translateY(-100%);-webkit-animation:radar-beam 3s infinite;animation:radar-beam 3s infinite;-webkit-animation-timing-function:cubic-bezier(.53,0,.43,.99);animation-timing-function:cubic-bezier(.53,0,.43,.99)}@-webkit-keyframes radar-beam{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes radar-beam{0%{transform:translateY(-100%)}to{transform:translateY(0)}}",""]),t["default"]=s},5294:function(e,t,n){"use strict";n(2641),n(7956);var r=n(9963),a=n(6252),o=n(2262),i=n(9604),s={__name:"BaseMarker",props:{id:String,type:String,showData:Object},setup(e){const{id:t,type:n,showData:r}=e,s=(0,o.iH)(),l=(0,o.iH)(!1);return(0,a.bv)((()=>{const e=s.value;e.addEventListener("markerFound",(e=>{r[n]=!0,l.value=!0})),e.addEventListener("markerLost",(()=>{l.value=!1,delete r[n]}))})),(t,n)=>{const r=(0,a.up)("a-marker");return(0,a.wg)(),(0,a.j4)(r,{ref_key:"el",ref:s,type:"barcode",value:e.id,smooth:"true"},{default:(0,a.w5)((()=>[l.value?((0,a.wg)(),(0,a.j4)(i.Z,{key:0,type:e.type,showAxes:!1},null,8,["type"])):(0,a.kq)("",!0)])),_:1},8,["value"])}}};const l=s;var u=l;const d={class:"qr-scanner"},c=(0,a._)("div",{class:"box"},[(0,a._)("div",{class:"line"})],-1),f=[c];var m={__name:"ar",setup(e){const t=(0,o.iH)(!1),n=(0,o.qj)({});window.addEventListener("arjs-video-loaded",(e=>{parent.postMessage("loaded"),t.value=!0;const n=parent.window.document.getElementsByClassName("main")[0];n&&n.parentNode.removeChild(n)}));const i=(0,a.Fl)((()=>!(Object.keys(n).length>0&&t)));return(e,s)=>{const l=(0,a.up)("a-entity"),c=(0,a.up)("a-scene");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,{embedded:"","device-orientation-permission-ui":"enabled: false",renderer:"antialias: true;\n    colorManagement: true;\n    sortObjects: true;\n    physicallyCorrectLights: true;\n    logarithmicDepthBuffer: true;\n    maxCanvasWidth: -1;\n    maxCanvasHeight: -1 ;",arjs:"sourceType: webcam;sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960;debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_5_5;cameraParametersUrl:./data/camera_para.dat","vr-mode-ui":"enabled: false"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{id:"0",type:"4+0",showData:n},null,8,["showData"]),(0,a.Wm)(u,{id:"1",type:"3+1",showData:n},null,8,["showData"]),(0,a.Wm)(u,{id:"2",type:"H2O",showData:n},null,8,["showData"]),(0,a.Wm)(u,{id:"3",type:"NH3",showData:n},null,8,["showData"]),(0,a.Wm)(l,{camera:"","look-controls":"enabled: false","object-controls":"target: 0 0 0; initialPosition: 0 0 0"}),(0,a.Wm)(l,{light:"type: ambient; intensity: 1.8;"}),(0,a.Wm)(l,{light:"type: directional;\n                   castShadow: true;\n                   intensity: 1.6;",position:"-5 3 1.5"})])),_:1},8,["arjs"]),(0,a.wy)((0,a._)("div",d,f,512),[[r.F8,(0,o.SU)(i)&&t.value]])],64)}}};n(2047);const p=m;var h=p;(0,r.ri)(h).mount("body")},2047:function(e,t,n){var r=n(3563);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);var a=n(4402).Z;a("079d8b9a",r,!0,{sourceMap:!1,shadowMode:!1})}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r](o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.j=850}(),function(){var e={850:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998,64],(function(){return n(5294)}));r=n.O(r)})();