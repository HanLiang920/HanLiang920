(function(){var e={4520:function(e,n,t){"use strict";t.r(n);var o=t(4657),r=t.n(o),i=t(9483),a=t.n(i),u=a()(r());u.push([e.id,"*{font-family:Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}#app,body{overflow:hidden}#app{position:absolute;top:0;bottom:0;right:0;left:0}",""]),n["default"]=u},3237:function(e,n,t){"use strict";t(5371),t(8321);var o=t(8995),r=t(5751),i=t(4214),a=t(7181),u={__name:"BaseMarker",props:{id:String,type:String},setup(e){const{id:n,type:t}=e,o=(0,i.iH)(),u=(0,i.iH)(!1);return(0,r.bv)((()=>{const e=o.value;e.addEventListener("markerFound",(e=>{u.value=!0})),e.addEventListener("markerLost",(()=>{u.value=!1}))})),(n,t)=>{const i=(0,r.up)("a-marker");return(0,r.wg)(),(0,r.j4)(i,{ref_key:"el",ref:o,type:"barcode",value:e.id,smooth:"true"},{default:(0,r.w5)((()=>[u.value?((0,r.wg)(),(0,r.j4)(a.Z,{key:0,type:e.type,showAxes:!1},null,8,["type"])):(0,r.kq)("",!0)])),_:1},8,["value"])}}};const l=u;var s=l,c={__name:"ar",setup(e){const n=(0,i.iH)(window.innerWidth),t=(0,i.iH)(window.innerHeight);return(e,o)=>{const i=(0,r.up)("a-entity"),a=(0,r.up)("a-scene");return(0,r.wg)(),(0,r.j4)(a,{embedded:"","device-orientation-permission-ui":"enabled: false",renderer:`antialias: true;\n                   colorManagement: true;\n                   sortObjects: true;\n                   physicallyCorrectLights: true;\n                   logarithmicDepthBuffer: true;\n                   maxCanvasWidth: ${n.value};\n                   maxCanvasHeight: ${t.value};`,arjs:`sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_9_3;canvasWidth: ${n.value};canvasHeight: ${t.value};`,"vr-mode-ui":"enabled: false"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{id:"0",type:"甲烷"}),(0,r.Wm)(s,{id:"1",type:"乙烷"}),(0,r.Wm)(i,{camera:"","look-controls":"enabled: false","object-controls":"target: 0 0 0; initialPosition: 0 0 0"}),(0,r.Wm)(i,{light:"type: ambient; intensity: 1.8;"}),(0,r.Wm)(i,{light:"type: directional;\r\n                   castShadow: true;\r\n                   intensity: 1.6;",position:"-5 3 1.5"})])),_:1},8,["renderer","arjs"])}}};t(6486);const d=c;var f=d;(0,o.ri)(f).mount("#app"),window.addEventListener("camera-init",(function(){const e=parent.window.document.getElementsByClassName("main")[0];e&&e.parentNode.removeChild(e)}))},6486:function(e,n,t){var o=t(4520);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=t(740).Z;r("66602392",o,!0,{sourceMap:!1,shadowMode:!1})}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o](i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.j=850}(),function(){var e={850:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],l=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(l)var c=l(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998,64],(function(){return t(3237)}));o=t.O(o)})();