(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[3080],{7245:(e,r,n)=>{"use strict";n.d(r,{Z:()=>a});const a={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},9486:(e,r,n)=>{"use strict";n.d(r,{bU:()=>c,P2:()=>u,IH:()=>d,D$:()=>p});var a=n(6156),t=n(641),o=n(8732);function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(){var e={},r=(0,t.iH)({}),n=function(n){if(!e[n])return console.warn("The ".concat(n," does not exist. You can mount a language package using the add method")),{};r.value=e[n]};return{packs:e,pack:r,add:function(r,n){n.lang=r,e[r]=n},use:n,merge:function(r,a){e[r]?(e[r]=s(s({},e[r]),a),n(r)):console.warn("The ".concat(r," does not exist. You can mount a language package using the add method"))}}}var l=c(),u=(l.packs,l.pack),d=l.add,p=l.use;l.merge,d("zh-CN",o.Z),p("zh-CN")},8732:(e,r,n)=>{"use strict";n.d(r,{Z:()=>a});const a={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},8442:(e,r,n)=>{"use strict";n.d(r,{He:()=>t,QM:()=>o,MW:()=>i,HD:()=>s,Bl:()=>c,hj:()=>l,PO:()=>u,kJ:()=>d,PX:()=>p,xb:()=>b,cl:()=>f,P2:()=>g,Df:()=>v,GE:()=>m,qb:()=>y,Ou:()=>k,dt:()=>w,_f:()=>_,jj:()=>x,GL:()=>S});var a=n(7329),t=function(e){return null==e?0:s(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e):c(e)?Number(e):e},o=function(e){return e.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg)$/.test(e)},i=function(e){return e.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(e)},s=function(e){return"string"==typeof e},c=function(e){return"boolean"==typeof e},l=function(e){return"number"==typeof e},u=function(e){return"[object Object]"===Object.prototype.toString.call(e)},d=function(e){return Array.isArray(e)},p=function(e){return/^(http)|(\.*\/)/.test(e)},b=function(e){return null==e||""===e||Array.isArray(e)&&!e.length},f=function(e,r){if(e.length){var n=e.indexOf(r);if(n>-1)return e.splice(n,1)}},g=function(e){var r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return function t(){for(var o=this,i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];var l=Date.now();n||(n=l),r&&window.clearTimeout(r),l-n>=a?(e.apply(this,s),n=l):r=window.setTimeout((function(){t.apply(o,s)}),50)}},v=function(e){var r=[];return{cache:r,has:function(e){return this.cache.includes(e)},add:function(n){this.has(n)||(this.cache.length===e&&r.shift(),this.cache.push(n))},remove:function(e){this.has(e)&&f(this.cache,e)},clear:function(){this.cache.length=0}}},m=function(e){return e},h=function(e){return Math.pow(e,3)},y=function(e){return e<.5?h(2*e)/2:1-h(2*(1-e))/2};function k(e,r){var n=Object.values(r),a=[24,60,60,1e3];if(["DD","HH","mm","ss"].forEach((function(r,t){e.includes(r)?e=e.replace(r,String(n[t]).padStart(2,"0")):n[t+1]+=n[t]*a[t]})),e.includes("S")){var t=String(n[n.length-1]).padStart(3,"0");e=e.includes("SSS")?e.replace("SSS",t):e.includes("SS")?e.replace("SS",t.slice(0,2)):e.replace("S",t.slice(0,1))}return e}var w=function(e,r){return null==e?r:e},_="undefined"!=typeof window,x=function(e){return(0,a.Z)(new Set(e))};function S(e){var r=/([^-])([A-Z])/g;return e.replace(r,"$1-$2").replace(r,"$1-$2").toLowerCase()}},6209:(e,r,n)=>{"use strict";n.d(r,{Z:()=>o});var a=n(2609),t=n.n(a)()((function(e){return e[1]}));t.push([e.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const o=t},9464:(e,r,n)=>{"use strict";n.d(r,{Z:()=>o});var a=n(2609),t=n.n(a)()((function(e){return e[1]}));t.push([e.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --progress-font-size: var(--font-size-sm);\n  --progress-ripple-color: #fff;\n  --progress-track-color: #d8d8d8;\n  --progress-background: var(--color-primary);\n}\n.var-progress {\n  position: relative;\n  font-size: var(--progress-font-size);\n}\n.var-progress-linear {\n  display: flex;\n  align-items: center;\n}\n.var-progress-linear__block {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n}\n.var-progress-linear__background,\n.var-progress-linear__certain {\n  width: 100%;\n  height: 100%;\n}\n.var-progress-linear__ripple::after {\n  position: absolute;\n  width: 0;\n  background-color: var(--progress-ripple-color);\n  height: 100%;\n  opacity: 0;\n  -webkit-animation: ripple 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n          animation: ripple 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  content: '';\n}\n.var-progress-linear__background {\n  background-color: var(--progress-track-color);\n}\n.var-progress-linear__certain {\n  position: absolute;\n  background-color: var(--progress-background);\n  top: 0;\n  left: 0;\n  transition: all 0.2s, background-color 0.8s;\n}\n.var-progress-linear__label {\n  margin-left: 8px;\n  flex: 0;\n}\n@-webkit-keyframes ripple {\n0% {\n    width: 0;\n    opacity: 0.1;\n}\n20% {\n    width: 0;\n    opacity: 0.5;\n}\n80% {\n    width: 100%;\n    opacity: 0;\n}\n}\n@keyframes ripple {\n0% {\n    width: 0;\n    opacity: 0.1;\n}\n20% {\n    width: 0;\n    opacity: 0.5;\n}\n80% {\n    width: 100%;\n    opacity: 0;\n}\n}\n.var-progress-circle {\n  position: relative;\n}\n.var-progress-circle__background {\n  stroke: var(--progress-track-color);\n}\n.var-progress-circle__certain {\n  transition: all 0.2s;\n  stroke: var(--progress-background);\n  position: absolute;\n}\n.var-progress-circle__label {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n",""]);const o=t},8196:(e,r,n)=>{"use strict";n.d(r,{Z:()=>o});var a=n(2609),t=n.n(a)()((function(e){return e[1]}));t.push([e.id,".progress-demo h4[data-v-2ea3e14d] {\n  margin: 0;\n}\n.progress-demo .space[data-v-2ea3e14d] {\n  height: 10px;\n}\n.progress-demo .progress-demo__basic .var-progress[data-v-2ea3e14d],\n.progress-demo .progress-demo__style .var-progress[data-v-2ea3e14d],\n.progress-demo .progress-demo__label .var-progress[data-v-2ea3e14d],\n.progress-demo .progress-demo__custom .var-progress[data-v-2ea3e14d] {\n  margin: 12px 0;\n}\n.progress-demo .progress-demo__basic .var-progress[data-v-2ea3e14d]:nth-child(2),\n.progress-demo .progress-demo__style .var-progress[data-v-2ea3e14d]:nth-child(2),\n.progress-demo .progress-demo__label .var-progress[data-v-2ea3e14d]:nth-child(2),\n.progress-demo .progress-demo__custom .var-progress[data-v-2ea3e14d]:nth-child(2) {\n  margin-top: 0;\n}\n.progress-demo .progress-demo__circle[data-v-2ea3e14d] {\n  display: flex;\n  align-items: center;\n}\n.progress-demo .progress-demo__circle .space[data-v-2ea3e14d] {\n  width: 20px;\n}\n",""]);const o=t},9800:(e,r,n)=>{"use strict";n.d(r,{Z:()=>l});var a=n(7875),t={class:"app-type"};const o=(0,a.aZ)({name:"AppType"});var i=n(6062),s=n.n(i),c=n(6209);s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,o.render=function(e,r,n,o,i,s){return(0,a.wg)(),(0,a.j4)("div",t,[(0,a.WI)(e.$slots,"default")])};const l=o},3080:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>E});var a=n(7875),t=n(349),o=(0,a.HX)("data-v-2ea3e14d");(0,a.dD)("data-v-2ea3e14d");var i={class:"progress-demo"},s=(0,a.Wm)("div",{class:"space"},null,-1),c={class:"progress-demo__basic"},l={class:"progress-demo__label"},u=(0,a.Uk)("success"),d={class:"progress-demo__style"},p={class:"progress-demo__circle"},b=(0,a.Wm)("div",{class:"space"},null,-1),f=(0,a.Wm)("div",{class:"space"},null,-1),g={class:"progress-demo__circle"};(0,a.Cn)();var v=o((function(e,r,n,v,m,h){var y=(0,a.up)("app-type"),k=(0,a.up)("var-progress");return(0,a.wg)(),(0,a.j4)("div",i,[s,(0,a.Wm)("div",c,[(0,a.Wm)(y,null,{default:o((function(){return[(0,a.Uk)((0,t.zw)(v.pack.basicUsage),1)]})),_:1}),(0,a.Wm)(k,{value:20,track:!1}),(0,a.Wm)(k,{value:v.value,track:!1},null,8,["value"]),(0,a.Wm)(k,{value:100,track:!1})]),(0,a.Wm)("div",l,[(0,a.Wm)(y,null,{default:o((function(){return[(0,a.Uk)((0,t.zw)(v.pack.showLabel),1)]})),_:1}),(0,a.Wm)(k,{value:30,label:""}),(0,a.Wm)(k,{value:v.value,label:""},null,8,["value"]),(0,a.Wm)(k,{value:100,label:""},{default:o((function(){return[u]})),_:1})]),(0,a.Wm)("div",d,[(0,a.Wm)(y,null,{default:o((function(){return[(0,a.Uk)((0,t.zw)(v.pack.style),1)]})),_:1}),(0,a.Wm)(k,{value:30,"line-width":"8",color:"#ff9f00"}),(0,a.Wm)(k,{value:60,"line-width":"8",color:"#ff9f00","track-color":"#f5cb90"}),(0,a.Wm)(k,{value:80,ripple:"","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),(0,a.Wm)(y,null,{default:o((function(){return[(0,a.Uk)((0,t.zw)(v.pack.circle),1)]})),_:1}),(0,a.Wm)("div",p,[(0,a.Wm)(k,{mode:"circle",value:30,"line-width":"5",size:56}),b,(0,a.Wm)(k,{mode:"circle",label:"",value:v.value,"line-width":"5",size:56},null,8,["value"]),f,(0,a.Wm)(k,{mode:"circle",label:"",value:100,"line-width":"5",size:56})]),(0,a.Wm)(y,null,{default:o((function(){return[(0,a.Uk)((0,t.zw)(v.pack.hideTrack),1)]})),_:1}),(0,a.Wm)("div",g,[(0,a.Wm)(k,{mode:"circle",value:50,size:56,track:!1})])])})),m=n(6156),h={class:"var-progress"},y={key:0,class:"var-progress-linear"},k={mode:{type:String,default:"linear",validator:function(e){return["linear","circle"].includes(e)}},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},size:{type:Number,default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}},w=n(8442);const _=(0,a.aZ)({name:"VarProgress",inheritAttrs:!1,props:k,setup:function(e){return{linearProps:(0,a.Fl)((function(){var r=(0,w.He)(e.value),n=r>100?100:r,a=r>100?100:Math.round(r);return{width:"".concat(n,"%"),roundValue:"".concat(a,"%")}})),circleProps:(0,a.Fl)((function(){var r=e.size,n=e.lineWidth,a=e.value,t="0 0 ".concat(r," ").concat(r),o=(0,w.He)(a)>100?100:Math.round((0,w.He)(a)),i=(r-(0,w.He)(n))/2,s=2*Math.PI*i;return{viewBox:t,radius:i,strokeDasharray:"".concat(o/100*s,", ").concat(s),perimeter:s,roundValue:"".concat(o,"%")}}))}}});var x=n(6062),S=n.n(x),z=n(9464);S()(z.Z,{insert:"head",singleton:!1}),z.Z.locals,_.render=function(e,r,n,o,i,s){return(0,a.wg)(),(0,a.j4)("div",h,["linear"===e.mode?((0,a.wg)(),(0,a.j4)("div",y,[(0,a.Wm)("div",(0,a.dG)({class:"var-progress-linear__block",style:{height:"".concat(e.lineWidth,"px")}},e.$attrs),[e.track?((0,a.wg)(),(0,a.j4)("div",{key:0,class:"var-progress-linear__background",style:{background:e.trackColor}},null,4)):(0,a.kq)("v-if",!0),(0,a.Wm)("div",{class:"var-progress-linear__certain".concat(e.ripple?" var-progress-linear__ripple":""),style:{background:e.color,width:e.linearProps.width}},null,6)],16),e.label?((0,a.wg)(),(0,a.j4)("div",(0,a.dG)({key:0,class:"var-progress-linear__label"},e.$attrs),[(0,a.WI)(e.$slots,"default",{},(function(){return[(0,a.Uk)((0,t.zw)(e.linearProps.roundValue),1)]}))],16)):(0,a.kq)("v-if",!0)])):(0,a.kq)("v-if",!0),"circle"===e.mode?((0,a.wg)(),(0,a.j4)("div",{key:1,class:"var-progress-circle",style:{width:"".concat(e.size,"px"),height:"".concat(e.size,"px")}},[((0,a.wg)(),(0,a.j4)("svg",{class:"var-progress-circle__svg",style:{transform:"rotate(".concat(e.rotate-90,"deg)")},viewBox:e.circleProps.viewBox},[e.track?((0,a.wg)(),(0,a.j4)("circle",{key:0,class:"var-progress-circle__background",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:{strokeDasharray:e.circleProps.perimeter,stroke:e.trackColor}},null,12,["cx","cy","r","stroke-width"])):(0,a.kq)("v-if",!0),(0,a.Wm)("circle",{class:"var-progress-circle__certain",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:{strokeDasharray:e.circleProps.strokeDasharray,stroke:e.color}},null,12,["cx","cy","r","stroke-width"])],12,["viewBox"])),e.label?((0,a.wg)(),(0,a.j4)("div",(0,a.dG)({key:0,class:"var-progress-circle__label"},e.$attrs),[(0,a.WI)(e.$slots,"default",{},(function(){return[(0,a.Uk)((0,t.zw)(e.circleProps.roundValue),1)]}))],16)):(0,a.kq)("v-if",!0)],4)):(0,a.kq)("v-if",!0)])};const W=_;W.install=function(e){e.component(W.name,W)};const j=W;var T=n(9800),O=n(641),Z=n(8732),P=n(7245),C=n(9486),A=(0,C.bU)(),D=A.add,U=A.use,B=A.pack,H=(A.packs,A.merge,function(e){(0,C.D$)(e),U(e)});(0,C.IH)("zh-CN",Z.Z),(0,C.IH)("en-US",P.Z),D("zh-CN",{circle:"环形进度条",style:"自定义样式",basicUsage:"基本使用",showLabel:"显示标签",hideTrack:"隐藏轨道"}),D("en-US",{circle:"Circle Progress",basicUsage:"Basic Usage",style:"Custom Style",showLabel:"Show Label",hideTrack:"Hide Track"});var N,$=n(6125);const I={name:"ProgressExample",components:(N={},(0,m.Z)(N,j.name,j),(0,m.Z)(N,"AppType",T.Z),N),setup:function(){var e=(0,O.iH)(0),r=(0,O.iH)(0);return(0,a.bv)((function(){r.value=window.setInterval((function(){e.value>=100?e.value=0:e.value+=20}),1e3)})),(0,$.jS)(H),(0,a.Ah)((function(){window.clearInterval(r.value)})),{value:e,pack:B}}};var M=n(8196);S()(M.Z,{insert:"head",singleton:!1}),M.Z.locals,I.render=v,I.__scopeId="data-v-2ea3e14d";const E=I},676:(e,r,n)=>{"use strict";function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,a=new Array(r);n<r;n++)a[n]=e[n];return a}n.d(r,{Z:()=>a})},6156:(e,r,n)=>{"use strict";function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.d(r,{Z:()=>a})},7329:(e,r,n)=>{"use strict";n.d(r,{Z:()=>o});var a=n(676),t=n(2961);function o(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,t.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2961:(e,r,n)=>{"use strict";n.d(r,{Z:()=>t});var a=n(676);function t(e,r){if(e){if("string"==typeof e)return(0,a.Z)(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,a.Z)(e,r):void 0}}}}]);