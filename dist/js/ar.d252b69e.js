(function(){var e={7611:function(e,t,n){"use strict";n.r(t);var a=n(8081),r=n.n(a),o=n(3645),i=n.n(o),s=i()(r());s.push([e.id,"*{font-family:Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{overflow:hidden}#app{bottom:0;right:0;left:0}#app,.qr-scanner{position:absolute;top:0}.qr-scanner{background-size:3rem 3rem;background-position:-1rem -1rem;width:100%;height:100%}.qr-scanner .box{width:75vw;height:75vw;max-height:75vh;max-width:75vh;position:relative;left:50%;top:50%;transform:translate(-50%,-50%);overflow:hidden}.qr-scanner .line{height:100%;width:100%;background:linear-gradient(180deg,rgba(0,255,51,0) 70%,#0f3 280%);transform:translateY(-100%);-webkit-animation:radar-beam 3s infinite;animation:radar-beam 3s infinite;-webkit-animation-timing-function:cubic-bezier(.53,0,.43,.99);animation-timing-function:cubic-bezier(.53,0,.43,.99)}@-webkit-keyframes radar-beam{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes radar-beam{0%{transform:translateY(-100%)}to{transform:translateY(0)}}",""]),t["default"]=s},9822:function(e,t,n){"use strict";n(2641),n(7956);var a=n(9963),r=n(6252),o=n(2262),i=n(9604),s={__name:"BaseMarker",props:{id:String,type:String,showData:Object},setup(e){const{id:t,type:n,showData:a}=e,s=(0,o.iH)(),u=(0,o.iH)(!1);return(0,r.bv)((()=>{const e=s.value;e.addEventListener("markerFound",(e=>{a[n]=!0,u.value=!0})),e.addEventListener("markerLost",(()=>{u.value=!1,delete a[n]}))})),(t,n)=>{const a=(0,r.up)("a-marker");return(0,r.wg)(),(0,r.j4)(a,{ref_key:"el",ref:s,type:"barcode",value:e.id,smooth:"true"},{default:(0,r.w5)((()=>[u.value?((0,r.wg)(),(0,r.j4)(i.Z,{key:0,type:e.type,showAxes:!1},null,8,["type"])):(0,r.kq)("",!0)])),_:1},8,["value"])}}};const u=s;var l=u;const d={class:"qr-scanner"},c=(0,r._)("div",{class:"box"},[(0,r._)("div",{class:"line"})],-1),f=[c];var m={__name:"ar",setup(e){const t=(0,o.iH)(!1),n=(0,o.qj)({});window.addEventListener("arjs-video-style",(e=>{alert("init");const{width:t,height:n}=e.detail,a=window.document.getElementsByClassName("a-canvas")[0];a.style.cssText=`position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);width: ${t}px;height:  ${n}px;`})),window.addEventListener("arjs-video-loaded",(e=>{t.value=!0;const n=parent.window.document.getElementsByClassName("main")[0];n&&n.parentNode.removeChild(n)}));const i=(0,r.Fl)((()=>!(Object.keys(n).length>0&&t)));return(e,t)=>{const s=(0,r.up)("a-entity"),u=(0,r.up)("a-scene");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u,{embedded:"","device-orientation-permission-ui":"enabled: false",renderer:"antialias: true;\n    colorManagement: true;\n    sortObjects: true;\n    physicallyCorrectLights: true;\n    logarithmicDepthBuffer: true;\n    maxCanvasWidth: -1;\n    maxCanvasHeight: -1 ;",arjs:"sourceType: webcam;sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960;debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_5_5;cameraParametersUrl:./data/camera_para.dat","vr-mode-ui":"enabled: false"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{id:"0",type:"4+0",showData:n},null,8,["showData"]),(0,r.Wm)(l,{id:"1",type:"3+1",showData:n},null,8,["showData"]),(0,r.Wm)(l,{id:"2",type:"H2O",showData:n},null,8,["showData"]),(0,r.Wm)(l,{id:"3",type:"NH3",showData:n},null,8,["showData"]),(0,r.Wm)(s,{camera:"","look-controls":"enabled: false","object-controls":"target: 0 0 0; initialPosition: 0 0 0"}),(0,r.Wm)(s,{light:"type: ambient; intensity: 1.8;"}),(0,r.Wm)(s,{light:"type: directional;\r\n                   castShadow: true;\r\n                   intensity: 1.6;",position:"-5 3 1.5"})])),_:1},8,["arjs"]),(0,r.wy)((0,r._)("div",d,f,512),[[a.F8,(0,o.SU)(i)]])],64)}}};n(4687);const h=m;var p=h;(0,a.ri)(p).mount("#app"),window.onload=function(){document.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}));var e=0;document.addEventListener("touchend",(function(t){var n=(new Date).getTime();n-e<=300&&t.preventDefault(),e=n}),!1),document.addEventListener("gesturestart",(function(e){e.preventDefault()}))}},4687:function(e,t,n){var a=n(7611);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var r=n(4402).Z;r("af010a24",a,!0,{sourceMap:!1,shadowMode:!1})}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a](o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],o=e[d][2];for(var s=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.j=850}(),function(){var e={850:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],u=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var d=u(n)}for(t&&t(a);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998,64],(function(){return n(9822)}));a=n.O(a)})();