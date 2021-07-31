(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[747],{6378:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var r=e(2609),o=e.n(r)()((function(n){return n[1]}));o.push([n.id,"\n.btn-container[data-v-46a712db] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.block[data-v-46a712db] {\n  background: #ff9f00;\n  color: white;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.colon[data-v-46a712db] {\n  margin: 0 5px;\n  font-size: 18px;\n  font-weight: 500;\n}\n",""]);const a=o},389:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var r=e(2609),o=e.n(r)()((function(n){return n[1]}));o.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n",""]);const a=o},1086:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>N});var r=e(7875),o=e(349),a=(0,r.HX)("data-v-46a712db");(0,r.dD)("data-v-46a712db");var i={class:"block"},u=(0,r.Wm)("span",{class:"colon"},":",-1),l={class:"block"},s=(0,r.Wm)("span",{class:"colon"},":",-1),c={class:"block"},f={class:"btn-container"};(0,r.Cn)();var d=a((function(n,t,e,d,m,p){var v=(0,r.up)("app-type"),b=(0,r.up)("var-countdown"),y=(0,r.up)("var-button");return(0,r.wg)(),(0,r.j4)(r.HY,null,[(0,r.Wm)("div",null,[(0,r.Wm)(v,null,{default:a((function(){return[(0,r.Uk)((0,o.zw)(d.pack.basicUsage),1)]})),_:1}),(0,r.Wm)(b,{time:"108000000"})]),(0,r.Wm)("div",null,[(0,r.Wm)(v,null,{default:a((function(){return[(0,r.Uk)((0,o.zw)(d.pack.customFormat),1)]})),_:1}),(0,r.Wm)(b,{time:"108000000",format:d.pack.format},null,8,["format"])]),(0,r.Wm)("div",null,[(0,r.Wm)(v,null,{default:a((function(){return[(0,r.Uk)((0,o.zw)(d.pack.showMillisecond),1)]})),_:1}),(0,r.Wm)(b,{time:"108000000",format:"HH : mm : ss : SS"})]),(0,r.Wm)("div",null,[(0,r.Wm)(v,null,{default:a((function(){return[(0,r.Uk)((0,o.zw)(d.pack.customStyle),1)]})),_:1}),(0,r.Wm)(b,{time:"108000000"},{default:a((function(n){return[(0,r.Wm)("span",i,(0,o.zw)(n.hours),1),u,(0,r.Wm)("span",l,(0,o.zw)(n.minutes),1),s,(0,r.Wm)("span",c,(0,o.zw)(n.seconds),1)]})),_:1})]),(0,r.Wm)("div",null,[(0,r.Wm)(v,null,{default:a((function(){return[(0,r.Uk)((0,o.zw)(d.pack.manualControl),1)]})),_:1}),(0,r.Wm)(b,{time:d.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:d.end,onChange:d.change},null,8,["time","onEnd","onChange"]),(0,r.Wm)("div",f,[(0,r.Wm)(y,{type:"primary",onClick:t[1]||(t[1]=function(t){return n.$refs.countdown.start()})},{default:a((function(){return[(0,r.Uk)((0,o.zw)(d.pack.startText),1)]})),_:1}),(0,r.Wm)(y,{onClick:t[2]||(t[2]=function(t){return n.$refs.countdown.pause()})},{default:a((function(){return[(0,r.Uk)((0,o.zw)(d.pack.pauseText),1)]})),_:1}),(0,r.Wm)(y,{onClick:t[3]||(t[3]=function(t){return n.$refs.countdown.reset()})},{default:a((function(){return[(0,r.Uk)((0,o.zw)(d.pack.resetText),1)]})),_:1})])])],64)})),m=e(6156),p=e(9800),v={class:"var-countdown"},b=e(641),y={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}},h=e(4268),w=e(8442),g=36e5,k=24*g;const x=(0,r.aZ)({name:"VarCountdown",props:y,setup:function(n){var t=(0,b.iH)(0),e=(0,b.iH)(!1),o=(0,b.iH)(""),a=(0,b.iH)(0),i=(0,b.iH)(0),u=(0,b.iH)({}),l=function r(){var l=n.time,s=n.onEnd,c=n.autoStart,f=Date.now();t.value||(t.value=f+(0,w.He)(l));var d=t.value-f;d<0&&(d=0),i.value=d,function(t){var e,r={days:Math.floor(t/k),hours:Math.floor(t%k/g),minutes:Math.floor(t%g/6e4),seconds:Math.floor(t%6e4/1e3),milliseconds:Math.floor(t%1e3)};u.value=r,null===(e=n.onChange)||void 0===e||e.call(n,u.value),o.value=(0,w.Ou)(n.format,r)}(d),0!==d?(c||e.value)&&(a.value=(0,h.U7)(r)):null==s||s()},s=function(){t.value=0,e.value=!1,(0,h.Wx)(a.value),l()};return(0,r.YP)((function(){return n.time}),(function(){return s()}),{immediate:!0}),{showTime:o,timeData:u,start:function(){e.value||(e.value=!0,t.value=Date.now()+(i.value||(0,w.He)(n.time)),l())},pause:function(){e.value=!1},reset:s}}});var S=e(6062),z=e.n(S),Z=e(389);z()(Z.Z,{insert:"head",singleton:!1}),Z.Z.locals,x.render=function(n,t,e,a,i,u){return(0,r.wg)(),(0,r.j4)("div",v,[(0,r.WI)(n.$slots,"default",n.timeData,(function(){return[(0,r.Uk)((0,o.zw)(n.showTime),1)]}))])};const W=x;W.install=function(n){n.component(W.name,W)};const H=W;var C=e(9878),U=e(9521),j=e(8732),_=e(7245),O=e(9486),T=(0,O.bU)(),D=T.add,M=T.use,A=T.pack,I=(T.packs,T.merge,function(n){(0,O.D$)(n),M(n)});(0,O.IH)("zh-CN",j.Z),(0,O.IH)("en-US",_.Z),D("zh-CN",{basicUsage:"基本使用",customFormat:"自定义格式",showMillisecond:"显示毫秒",customStyle:"自定义样式",manualControl:"手动控制",format:"DD 天 HH 时 mm 分 ss 秒",startText:"开始",pauseText:"暂停",resetText:"重置"}),D("en-US",{basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"});var E,F=e(6125);const P={name:"CountdownExample",components:(E={},(0,m.Z)(E,H.name,H),(0,m.Z)(E,U.Z.name,U.Z),(0,m.Z)(E,"AppType",p.Z),E),setup:function(){var n=(0,b.iH)(null),t=(0,b.iH)(3e3);return(0,F.jS)(I),{time:t,pack:A,end:function(){C.ZP.info("end!")},countdown:n,change:function(){}}}};var $=e(6378);z()($.Z,{insert:"head",singleton:!1}),$.Z.locals,P.render=d,P.__scopeId="data-v-46a712db";const N=P},676:(n,t,e)=>{"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,{Z:()=>r})},6156:(n,t,e)=>{"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,{Z:()=>r})},7375:(n,t,e)=>{"use strict";function r(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}e.d(t,{Z:()=>r})},4699:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});var r=e(2961);function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(n){o=!0,a=n}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}}(n,t)||(0,r.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7329:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var r=e(676),o=e(2961);function a(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||(0,o.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2961:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});var r=e(676);function o(n,t){if(n){if("string"==typeof n)return(0,r.Z)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(n,t):void 0}}}}]);