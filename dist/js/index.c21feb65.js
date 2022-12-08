(function(){var e={8088:function(e,t,a){"use strict";a.r(t);var n=a(8081),o=a.n(n),i=a(3645),l=a.n(i),d=l()(o());d.push([e.id,".base-name[data-v-38aa6309]{font-style:italic}",""]),t["default"]=d},9823:function(e,t,a){"use strict";a.r(t);var n=a(8081),o=a.n(n),i=a(3645),l=a.n(i),d=l()(o());d.push([e.id,'.mode-choose[data-v-83d87548]{width:45%;display:flex;font-size:14px;position:relative}.mode-choose[data-v-83d87548]:before{content:"";position:absolute;left:0;width:50%;height:100%;border-radius:15px;transition:transform .6s cubic-bezier(.82,.12,.18,.88);background:#141414;opacity:.8;z-index:1;transform:translate(var(--groove-left))}.mode-choose .mode-choose-item[data-v-83d87548]{width:50%;text-align:center;cursor:pointer;height:100%;display:flex;align-items:center;justify-content:center;z-index:2;transition:color .3s linear}.mode-choose .mode-choose-item.choose[data-v-83d87548]{color:#1890ff}',""]),t["default"]=d},1207:function(e,t,a){"use strict";a.r(t);var n=a(8081),o=a.n(n),i=a(3645),l=a.n(i),d=l()(o());d.push([e.id,"#app{opacity:0}#app,.app-content{position:absolute;top:0;bottom:0;right:0;left:0}.chem-3d-header{position:fixed;top:10px;right:0;left:0;height:45px;color:#e3e3e3;font-size:16px;font-weight:500;z-index:1;display:flex;justify-content:space-between;align-items:center;padding:0 10px}.chem-3d-header>div{height:100%;background:#868686;opacity:.8;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:15px}.ant-drawer-header{padding-top:13px;padding-bottom:13px}.ant-drawer-body{padding:0}.drawer-content{display:flex;flex-direction:column;height:100%}.drawer-content .drawer-content-menu{flex:1;overflow:hidden}.drawer-content .switch-item{display:flex;align-items:center;justify-content:space-between;height:40px}.info{position:fixed;bottom:10%;right:5%;z-index:10;width:50px;height:50px;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);transition:color .3s;border-radius:50%;font-size:24px;display:flex;justify-content:center;align-items:center;cursor:pointer}.ant-modal-content{-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);background-color:hsla(0,0%,100%,.6)}.ant-modal-header{background-color:unset;border-bottom:1px solid hsla(0,0%,94%,.6)}",""]),t["default"]=d},1316:function(e,t,a){"use strict";a(2604);var n=a(3162),o=(a(1930),a(3302)),i=(a(3309),a(2734)),l=(a(7481),a(7762)),d=(a(6449),a(287)),r=(a(2641),a(9963)),s=a(6252),u=a(3577),c=a(2262),p=a(4341),m=a(5255),f=a(4367),v=a(3822),w={__name:"modeChoose",props:{mode:String},emits:["update:mode"],setup(e,{emit:t}){const{mode:a}=e,n=(0,c.iH)("0"),o=e=>{e!==a.value&&(n.value="AR"!==e?"0":"100%",setTimeout((()=>{t("update:mode",e)}),0))};return(t,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"mode-choose",style:(0,u.j5)({"--groove-left":n.value})},[(0,s._)("div",{class:(0,u.C_)({"mode-choose-item":!0,choose:"AR"!=e.mode}),onClick:a[0]||(a[0]=e=>o("模型"))},"模型",2),(0,s._)("div",{class:(0,u.C_)({"mode-choose-item":!0,choose:"AR"==e.mode}),onClick:a[1]||(a[1]=e=>o("AR"))},"AR",2)],4))}},h=(a(2337),a(3744));const y=(0,h.Z)(w,[["__scopeId","data-v-83d87548"]]);var k=y;const _={class:"base-name"},b={key:0};var g={__name:"BaseName",props:{name:String},setup(e){const{name:t}=e,a=(0,s.Fl)((()=>t?t.split("").map((e=>({text:e,isNumber:!isNaN(e)}))):[]));return(e,t)=>((0,s.wg)(),(0,s.iD)("span",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,c.SU)(a),((e,t)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:t},[e.isNumber?((0,s.wg)(),(0,s.iD)("sub",b,(0,u.zw)(e.text),1)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s.Uk)((0,u.zw)(e.text),1)],64))],64)))),128))]))}};a(7174);const x=(0,h.Z)(g,[["__scopeId","data-v-38aa6309"]]);var U=x;const W={class:"app-content"},H={class:"chem-3d-header"},C=(0,s._)("div",{style:{width:"14%",height:"0"}},null,-1),S={class:"drawer-content"},O={class:"drawer-content-menu"},j={style:{overflow:"auto",height:"100%"}},Z=(0,s.Uk)("共价键"),z=(0,s.Uk)("σ键"),M=(0,s.Uk)("s-s"),P=(0,s.Uk)("s-p"),A=(0,s.Uk)("p-p σ键"),D=(0,s.Uk)("π键"),K=(0,s.Uk)("p-p π键"),R=(0,s.Uk)("分子模型"),q=(0,s.Uk)("无机化合物"),T=(0,s.Uk)("有机化合物"),Y=(0,s.Uk)("VSEPR模型"),N=(0,s.Uk)("直线形"),E=(0,s.Uk)("2+0"),F=(0,s.Uk)("平面三角形"),I=(0,s.Uk)("2+1"),V=(0,s.Uk)("3+0"),B=(0,s.Uk)("四面体"),L=(0,s.Uk)("2+2"),$=(0,s.Uk)("3+1"),J=(0,s.Uk)("4+0"),G=(0,s.Uk)("杂化轨道模型"),Q=(0,s.Uk)("s轨道"),X=(0,s.Uk)("p轨道"),ee=(0,s.Uk)("p"),te=(0,s._)("sub",null,"x",-1),ae=(0,s.Uk)("轨道"),ne=(0,s.Uk)("p"),oe=(0,s._)("sub",null,"y",-1),ie=(0,s.Uk)("轨道"),le=(0,s.Uk)("p"),de=(0,s._)("sub",null,"z",-1),re=(0,s.Uk)("轨道"),se=(0,s.Uk)("sp轨道"),ue=(0,s.Uk)("sp2轨道"),ce=(0,s.Uk)("sp3轨道"),pe={style:{padding:"10px 24px","border-top":"1px solid rgba(60, 60, 60, .12)"}},me={class:"switch-item"},fe=(0,s._)("span",null,"显示背景",-1),ve={class:"switch-item"},we=(0,s._)("span",null,"显示坐标轴",-1),he={style:{"margin-top":"15px",position:"relative"}},ye=["src"],ke=["src"],_e=["src"];var be={__name:"App",setup(e){const t=(0,s.Fl)((()=>1670509989135)),a=(0,c.iH)("模型"),n=(0,c.iH)(!1),o=(0,c.iH)(!1),i=(0,c.iH)(!1),l=((0,c.iH)(!1),(0,c.iH)(!0)),d=(0,c.iH)(!0),r=(0,c.iH)(["CH4"]),w=(0,c.iH)(["分子模型","无机化合物"]),h=(0,c.iH)([{name:"H2O"},{name:"NH3"},{name:"CO2"},{name:"P4"},{name:"P4O6"},{name:"P4O10"},{name:"S8"}]),y=(0,c.iH)([{name:"CH2O"},{name:"CH4"},{name:"C2H6"},{name:"C3H8"},{name:"C2H4"},{name:"C2H2"},{name:"C6H6"},{name:"C60"}]);window.currentModel=r,window.showAxes=d;const _={CH4:{name:"甲烷",text:"甲烷，化学式CH4，是最简单的烃，由一个碳和四个氢原子通过sp3杂化的方式组成，因此甲烷分子的结构为正四面体结构，四个键的键长相同键角相等。",video:"//player.bilibili.com/player.html?aid=77751294&bvid=BV1HJ411z7ii&cid=133016052&page=1"},sp3:{name:"sp3杂化轨道",text:"π键指两个p轨道垂直于键轴以“肩并肩”方式重叠所形成的化学键。形成π键时，原子轨道的重叠部分对等地分布在包括键轴在内的平面上、下两侧，形状相同，符号相反，呈镜面反对称。",video:"//player.bilibili.com/player.html?aid=540695830&bvid=BV1Hi4y147rk&cid=192227143&page=1"}},b=(0,c.iH)(),g=(0,c.iH)(),x=()=>{i.value=!0,setTimeout((()=>{g.value.onload=()=>{}}),0)};(0,s.m0)((()=>{b&&b.value&&b.value.contentWindow.postMessage({currentModel:r.value[0],showAxes:d.value})})),(0,s.YP)(a,(()=>{n.value=!1})),(0,s.YP)(l,(()=>{l.value?document.querySelector("body").setAttribute("style","background: linear-gradient(200deg, #f4efef, #e3eeff)"):document.querySelector("body").removeAttribute("style")}));const be=(0,s.Fl)((()=>_[r.value[0]]||{}));return window.addEventListener("message",(e=>{if("loaded"===e.data){n.value=!0;const e=document.querySelector("#body-loading");e.classList.add("animate__animated05","animate__fadeOut"),setTimeout((()=>{e.style.display="none",document.querySelector("#app").classList.add("animate__animated","animate__fadeIn")}),490)}})),(e,_)=>{const ge=(0,s.up)("a-menu-item"),xe=(0,s.up)("a-sub-menu"),Ue=(0,s.up)("a-menu"),We=(0,s.up)("a-switch"),He=(0,s.up)("a-drawer"),Ce=(0,s.up)("a-modal"),Se=(0,s.up)("a-spin");return(0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("div",H,[(0,s._)("div",{style:(0,u.j5)({width:"14%",visibility:"AR"==a.value?"hidden":"visible",cursor:"pointer"}),onClick:_[0]||(_[0]=e=>o.value=!0)},[(0,s.Wm)((0,c.SU)(p.Z))],4),(0,s.Wm)(k,{mode:a.value,"onUpdate:mode":_[1]||(_[1]=e=>a.value=e)},null,8,["mode"]),C]),(0,s.Wm)(He,{visible:o.value,"onUpdate:visible":_[7]||(_[7]=e=>o.value=e),closable:!1,title:"",placement:"left",width:"55%"},{default:(0,s.w5)((()=>[(0,s._)("div",S,[(0,s._)("div",O,[(0,s._)("div",j,[(0,s.Wm)(Ue,{selectedKeys:r.value,"onUpdate:selectedKeys":_[2]||(_[2]=e=>r.value=e),openKeys:w.value,"onUpdate:openKeys":_[3]||(_[3]=e=>w.value=e),mode:"inline",onClick:_[4]||(_[4]=e=>o.value=!1)},{default:(0,s.w5)((()=>[(0,s.Wm)(xe,{key:"共价键"},{title:(0,s.w5)((()=>[Z])),default:(0,s.w5)((()=>[(0,s.Wm)(xe,{key:"σ键"},{title:(0,s.w5)((()=>[z])),default:(0,s.w5)((()=>[(0,s.Wm)(ge,{key:"s-s"},{default:(0,s.w5)((()=>[M])),_:1}),(0,s.Wm)(ge,{key:"s-p"},{default:(0,s.w5)((()=>[P])),_:1}),(0,s.Wm)(ge,{key:"p-pσ"},{default:(0,s.w5)((()=>[A])),_:1})])),_:1}),(0,s.Wm)(xe,{key:"π键"},{title:(0,s.w5)((()=>[D])),default:(0,s.w5)((()=>[(0,s.Wm)(ge,{key:"p-pπ"},{default:(0,s.w5)((()=>[K])),_:1})])),_:1})])),_:1}),(0,s.Wm)(xe,{key:"分子模型"},{title:(0,s.w5)((()=>[R])),default:(0,s.w5)((()=>[(0,s.Wm)(xe,{key:"无机化合物"},{title:(0,s.w5)((()=>[q])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.value,(e=>((0,s.wg)(),(0,s.j4)(ge,{key:e.name},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{name:e.name},null,8,["name"])])),_:2},1024)))),128))])),_:1}),(0,s.Wm)(xe,{key:"有机化合物"},{title:(0,s.w5)((()=>[T])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(y.value,(e=>((0,s.wg)(),(0,s.j4)(ge,{key:e.name},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{name:e.name},null,8,["name"])])),_:2},1024)))),128))])),_:1})])),_:1}),(0,s.Wm)(xe,{key:"VSEPR模型"},{title:(0,s.w5)((()=>[Y])),default:(0,s.w5)((()=>[(0,s.Wm)(xe,{key:"直线形"},{title:(0,s.w5)((()=>[N])),default:(0,s.w5)((()=>[(0,s.Wm)(ge,{key:"2+0"},{default:(0,s.w5)((()=>[E])),_:1})])),_:1}),(0,s.Wm)(xe,{key:"平面三角形"},{title:(0,s.w5)((()=>[F])),default:(0,s.w5)((()=>[(0,s.Wm)(ge,{key:"2+1"},{default:(0,s.w5)((()=>[I])),_:1}),(0,s.Wm)(ge,{key:"3+0"},{default:(0,s.w5)((()=>[V])),_:1})])),_:1}),(0,s.Wm)(xe,{key:"四面体"},{title:(0,s.w5)((()=>[B])),default:(0,s.w5)((()=>[(0,s.Wm)(ge,{key:"2+2"},{default:(0,s.w5)((()=>[L])),_:1}),(0,s.Wm)(ge,{key:"3+1"},{default:(0,s.w5)((()=>[$])),_:1}),(0,s.Wm)(ge,{key:"4+0"},{default:(0,s.w5)((()=>[J])),_:1})])),_:1})])),_:1}),(0,s.Wm)(xe,{key:"杂化轨道模型"},{title:(0,s.w5)((()=>[G])),default:(0,s.w5)((()=>[(0,s.Wm)(ge,{key:"s"},{default:(0,s.w5)((()=>[Q])),_:1}),(0,s.Wm)(xe,{key:"p轨道"},{title:(0,s.w5)((()=>[X])),default:(0,s.w5)((()=>[(0,s.Wm)(ge,{key:"px"},{default:(0,s.w5)((()=>[ee,te,ae])),_:1}),(0,s.Wm)(ge,{key:"py"},{default:(0,s.w5)((()=>[ne,oe,ie])),_:1}),(0,s.Wm)(ge,{key:"pz"},{default:(0,s.w5)((()=>[le,de,re])),_:1})])),_:1}),(0,s.Wm)(ge,{key:"sp"},{default:(0,s.w5)((()=>[se])),_:1}),(0,s.Wm)(ge,{key:"sp2"},{default:(0,s.w5)((()=>[ue])),_:1}),(0,s.Wm)(ge,{key:"sp3"},{default:(0,s.w5)((()=>[ce])),_:1})])),_:1})])),_:1},8,["selectedKeys","openKeys"])])]),(0,s._)("div",pe,[(0,s._)("div",me,[fe,(0,s.Wm)(We,{checked:l.value,"onUpdate:checked":_[5]||(_[5]=e=>l.value=e)},{checkedChildren:(0,s.w5)((()=>[(0,s.Wm)((0,c.SU)(m.Z))])),unCheckedChildren:(0,s.w5)((()=>[(0,s.Wm)((0,c.SU)(f.Z))])),_:1},8,["checked"])]),(0,s._)("div",ve,[we,(0,s.Wm)(We,{checked:d.value,"onUpdate:checked":_[6]||(_[6]=e=>d.value=e)},{checkedChildren:(0,s.w5)((()=>[(0,s.Wm)((0,c.SU)(m.Z))])),unCheckedChildren:(0,s.w5)((()=>[(0,s.Wm)((0,c.SU)(f.Z))])),_:1},8,["checked"])])])])])),_:1},8,["visible"]),(0,c.SU)(be).name?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"info",onClick:x},[(0,s.Wm)((0,c.SU)(v.Z))])):(0,s.kq)("",!0),(0,s.Wm)(Ce,{visible:i.value,"onUpdate:visible":_[8]||(_[8]=e=>i.value=e),title:(0,c.SU)(be).name,centered:!0,width:"660px",mask:!1,destroyOnClose:!0,footer:null},{default:(0,s.w5)((()=>[(0,s._)("div",null,(0,u.zw)((0,c.SU)(be).text),1),(0,s._)("div",he,[(0,s._)("iframe",{ref_key:"videoIframe",ref:g,style:{},src:(0,c.SU)(be).video,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ",8,ye)])])),_:1},8,["visible","title"]),"AR"===a.value?((0,s.wg)(),(0,s.iD)("iframe",{key:1,src:`./ar.html?v=${(0,c.SU)(t)}`,style:{border:"none",width:"100%",height:"100%",position:"absolute",top:"0"}},null,8,ke)):(0,s.kq)("",!0),"模型"===a.value?((0,s.wg)(),(0,s.iD)("iframe",{key:2,ref_key:"modelEl",ref:b,src:`./model.html?v=${(0,c.SU)(t)}`,style:{border:"none",width:"100%",height:"100%",position:"absolute",top:"0"}},null,8,_e)):(0,s.kq)("",!0),n.value?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(Se,{key:3,size:"large",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}))])}}};a(4959);const ge=be;var xe=ge;const Ue=(0,r.ri)(xe);Ue.use(n.ZP).use(o.ZP).use(i.ZP).use(l.ZP).use(d.Z).mount("#app")},7174:function(e,t,a){var n=a(8088);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var o=a(4402).Z;o("0d4a42a6",n,!0,{sourceMap:!1,shadowMode:!1})},2337:function(e,t,a){var n=a(9823);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var o=a(4402).Z;o("5c6073c8",n,!0,{sourceMap:!1,shadowMode:!1})},4959:function(e,t,a){var n=a(1207);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var o=a(4402).Z;o("1b509d1a",n,!0,{sourceMap:!1,shadowMode:!1})}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n](i,i.exports,a),i.loaded=!0,i.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,i){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],i=e[u][2];for(var d=!0,r=0;r<n.length;r++)(!1&i||l>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(d=!1,i<l&&(l=i));if(d){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.j=826}(),function(){var e={826:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,l=n[0],d=n[1],r=n[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in d)a.o(d,o)&&(a.m[o]=d[o]);if(r)var u=r(a)}for(t&&t(n);s<l.length;s++)i=l[s],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkchem_3d"]=self["webpackChunkchem_3d"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1316)}));n=a.O(n)})();