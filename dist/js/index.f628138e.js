(function(){var e={9802:function(e,t,n){"use strict";n.r(t);var o=n(4657),i=n.n(o),a=n(9483),l=n.n(a),r=l()(i());r.push([e.id,".mode-choose[data-v-501391cc]{width:45%;display:flex;font-size:14px}.mode-choose .mode-choose-item[data-v-501391cc]{width:50%;text-align:center;cursor:pointer;height:100%;display:flex;align-items:center;justify-content:center}.mode-choose .mode-choose-item.choose[data-v-501391cc]{background:#141414;border-radius:4vw;color:#1890ff}",""]),t["default"]=r},8511:function(e,t,n){"use strict";n.r(t);var o=n(4657),i=n.n(o),a=n(9483),l=n.n(a),r=l()(i());r.push([e.id,"*{font-family:Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}#app{position:absolute;top:0;bottom:0;right:0;left:0}.chem-3d-header{position:fixed;top:10px;right:0;left:0;height:6vh;color:#e3e3e3;font-size:16px;z-index:1;display:flex;justify-content:space-between;align-items:center;padding:0 10px}.chem-3d-header>div{height:100%;background:#868686;opacity:.8;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:4vw}.ant-drawer-header{padding-top:13px;padding-bottom:13px}.ant-drawer-body{padding:0}.drawer-content{display:flex;flex-direction:column;height:100%}.drawer-content .drawer-content-menu{flex:1;overflow:hidden}.drawer-content .switch-item{display:flex;align-items:center;justify-content:space-between;height:40px}",""]),t["default"]=r},7997:function(e,t,n){"use strict";n(606);var o=n(6182),i=(n(4982),n(73)),a=(n(132),n(397)),l=(n(5371),n(8995)),r=n(5751),d=n(5136),u=n(4214),s=n(2688),c=n(2288),m=n(590);const p={class:"mode-choose"};var f={__name:"modeChoose",props:{mode:String},emits:["update:mode"],setup(e){const{mode:t}=e;return(t,n)=>((0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("div",{class:(0,d.C_)({"mode-choose-item":!0,choose:"AR"==e.mode}),onClick:n[0]||(n[0]=e=>t.$emit("update:mode","AR"))},"AR",2),(0,r._)("div",{class:(0,d.C_)({"mode-choose-item":!0,choose:"AR"!=e.mode}),onClick:n[1]||(n[1]=e=>t.$emit("update:mode","模型"))},"模型",2)]))}},h=(n(5575),n(2637));const w=(0,h.Z)(f,[["__scopeId","data-v-501391cc"]]);var v=w;const y={key:0};var k={__name:"BaseName",props:{name:String},setup(e){const{name:t}=e,n=(0,r.Fl)((()=>t?t.split("").map((e=>({text:e,isNumber:!isNaN(e)}))):[]));return(e,t)=>((0,r.wg)(),(0,r.iD)("span",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,u.SU)(n),((e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,{key:t},[e.isNumber?((0,r.wg)(),(0,r.iD)("sub",y,(0,d.zw)(e.text),1)):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Uk)((0,d.zw)(e.text),1)],64))],64)))),128))]))}};const g=k;var _=g;const b={class:"chem-3d-header"},x=(0,r._)("div",{style:{width:"14%",height:"0"}},null,-1),U={class:"drawer-content"},C={class:"drawer-content-menu"},H={style:{overflow:"auto",height:"100%"}},W=(0,r.Uk)("分子模型"),S=(0,r.Uk)("无机化合物"),j=(0,r.Uk)("有机化合物"),O=(0,r.Uk)("VSEPR模型"),A=(0,r.Uk)("杂化轨道模型"),M=(0,r.Uk)("s轨道"),D=(0,r.Uk)("p轨道"),Z=(0,r.Uk)("p"),K=(0,r._)("sub",null,"x",-1),P=(0,r.Uk)("轨道"),R=(0,r.Uk)("p"),N=(0,r._)("sub",null,"y",-1),z=(0,r.Uk)("轨道"),E=(0,r.Uk)("p"),Y=(0,r._)("sub",null,"z",-1),B=(0,r.Uk)("轨道"),F=(0,r.Uk)("sp轨道"),I=(0,r.Uk)("sp2轨道"),T=(0,r.Uk)("sp3轨道"),$={style:{padding:"10px 24px","border-top":"1px solid rgba(60, 60, 60, .12)"}},q={class:"switch-item"},V=(0,r._)("span",null,"显示背景",-1),G={class:"switch-item"},J=(0,r._)("span",null,"显示坐标轴",-1),L=["src"];var Q={__name:"App",setup(e){const t=(0,r.Fl)((()=>1659072804798)),n=(0,u.iH)("AR"),o=(0,u.iH)(!1),i=(0,u.iH)(!0),a=(0,u.iH)(!0),l=(0,u.iH)(["C60"]),p=(0,u.iH)(["分子模型"]),f=(0,u.iH)([{name:"4+0"},{name:"3+1"},{name:"2+2"},{name:"3+0"},{name:"2+1"},{name:"2+0"}]),h=(0,u.iH)([{name:"H2O"},{name:"NH3"},{name:"CO2"},{name:"P4"}]),w=(0,u.iH)([{name:"CH2O"},{name:"CH4"},{name:"C2H6"},{name:"C3H8"},{name:"C2H4"},{name:"C2H2"},{name:"C6H6"},{name:"C60"}]);window.currentModel=l,window.showBackground=i,window.showAxes=a;const y=(0,u.iH)();return(0,r.m0)((()=>{y&&y.value&&y.value.contentWindow.postMessage({currentModel:l.value[0],showBackground:i.value,showAxes:a.value})})),(e,k)=>{const g=(0,r.up)("a-menu-item"),Q=(0,r.up)("a-sub-menu"),X=(0,r.up)("a-menu"),ee=(0,r.up)("a-switch"),te=(0,r.up)("a-drawer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",b,[(0,r._)("div",{style:(0,d.j5)({width:"14%",visibility:"AR"==n.value?"hidden":"visible",cursor:"pointer"}),onClick:k[0]||(k[0]=e=>o.value=!0)},[(0,r.Wm)((0,u.SU)(s.Z))],4),(0,r.Wm)(v,{mode:n.value,"onUpdate:mode":k[1]||(k[1]=e=>n.value=e)},null,8,["mode"]),x]),(0,r.Wm)(te,{visible:o.value,"onUpdate:visible":k[7]||(k[7]=e=>o.value=e),title:"",placement:"left",width:"55%"},{default:(0,r.w5)((()=>[(0,r._)("div",U,[(0,r._)("div",C,[(0,r._)("div",H,[(0,r.Wm)(X,{selectedKeys:l.value,"onUpdate:selectedKeys":k[2]||(k[2]=e=>l.value=e),openKeys:p.value,"onUpdate:openKeys":k[3]||(k[3]=e=>p.value=e),mode:"inline",onClick:k[4]||(k[4]=e=>o.value=!1)},{default:(0,r.w5)((()=>[(0,r.Wm)(Q,{key:"分子模型"},{title:(0,r.w5)((()=>[W])),default:(0,r.w5)((()=>[(0,r.Wm)(Q,{key:"无机化合物"},{title:(0,r.w5)((()=>[S])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.value,(e=>((0,r.wg)(),(0,r.j4)(g,{key:e.name},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{name:e.name},null,8,["name"])])),_:2},1024)))),128))])),_:1}),(0,r.Wm)(Q,{key:"有机化合物"},{title:(0,r.w5)((()=>[j])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.value,(e=>((0,r.wg)(),(0,r.j4)(g,{key:e.name},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{name:e.name},null,8,["name"])])),_:2},1024)))),128))])),_:1})])),_:1}),(0,r.Wm)(Q,{key:"VSEPR模型"},{title:(0,r.w5)((()=>[O])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.value,(e=>((0,r.wg)(),(0,r.j4)(g,{key:e.name},{default:(0,r.w5)((()=>[(0,r.Uk)((0,d.zw)(e.name),1)])),_:2},1024)))),128))])),_:1}),(0,r.Wm)(Q,{key:"杂化轨道模型"},{title:(0,r.w5)((()=>[A])),default:(0,r.w5)((()=>[(0,r.Wm)(g,{key:"s"},{default:(0,r.w5)((()=>[M])),_:1}),(0,r.Wm)(Q,{key:"p轨道"},{title:(0,r.w5)((()=>[D])),default:(0,r.w5)((()=>[(0,r.Wm)(g,{key:"px"},{default:(0,r.w5)((()=>[Z,K,P])),_:1}),(0,r.Wm)(g,{key:"py"},{default:(0,r.w5)((()=>[R,N,z])),_:1}),(0,r.Wm)(g,{key:"pz"},{default:(0,r.w5)((()=>[E,Y,B])),_:1})])),_:1}),(0,r.Wm)(g,{key:"sp"},{default:(0,r.w5)((()=>[F])),_:1}),(0,r.Wm)(g,{key:"sp2"},{default:(0,r.w5)((()=>[I])),_:1}),(0,r.Wm)(g,{key:"sp3"},{default:(0,r.w5)((()=>[T])),_:1})])),_:1})])),_:1},8,["selectedKeys","openKeys"])])]),(0,r._)("div",$,[(0,r._)("div",q,[V,(0,r.Wm)(ee,{checked:i.value,"onUpdate:checked":k[5]||(k[5]=e=>i.value=e)},{checkedChildren:(0,r.w5)((()=>[(0,r.Wm)((0,u.SU)(c.Z))])),unCheckedChildren:(0,r.w5)((()=>[(0,r.Wm)((0,u.SU)(m.Z))])),_:1},8,["checked"])]),(0,r._)("div",G,[J,(0,r.Wm)(ee,{checked:a.value,"onUpdate:checked":k[6]||(k[6]=e=>a.value=e)},{checkedChildren:(0,r.w5)((()=>[(0,r.Wm)((0,u.SU)(c.Z))])),unCheckedChildren:(0,r.w5)((()=>[(0,r.Wm)((0,u.SU)(m.Z))])),_:1},8,["checked"])])])])])),_:1},8,["visible"]),"AR"===n.value?((0,r.wg)(),(0,r.iD)("iframe",{key:0,src:`./ar.html?v=${(0,u.SU)(t)}`,style:{border:"none",width:"100%",height:"100%",position:"absolute",top:"0"}},null,8,L)):(0,r.kq)("",!0),"模型"===n.value?((0,r.wg)(),(0,r.iD)("iframe",{key:1,ref_key:"modelEl",ref:y,src:"./model.html?v=1.0",style:{border:"none",width:"100%",height:"100%",position:"absolute",top:"0"}},null,512)):(0,r.kq)("",!0)],64)}}};n(7661);const X=Q;var ee=X;const te=(0,l.ri)(ee);te.use(o.ZP).use(i.ZP).use(a.ZP).mount("#app")},5575:function(e,t,n){var o=n(9802);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=n(740).Z;i("1abfc5ba",o,!0,{sourceMap:!1,shadowMode:!1})},7661:function(e,t,n){var o=n(8511);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=n(740).Z;i("03f68450",o,!0,{sourceMap:!1,shadowMode:!1})}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var l=1/0;for(s=0;s<e.length;s++){o=e[s][0],i=e[s][1],a=e[s][2];for(var r=!0,d=0;d<o.length;d++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[d])}))?o.splice(d--,1):(r=!1,a<l&&(l=a));if(r){e.splice(s--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.j=826}(),function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,l=o[0],r=o[1],d=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(d)var s=d(n)}for(t&&t(o);u<l.length;u++)a=l[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7997)}));o=n.O(o)})();