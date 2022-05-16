(function(){var t={356:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"scroll-digit"},t._l(t.digitArray,(function(e,i){return r("div",{key:t.digits+"_"+i},[r("Digit",t._b({attrs:{digit:e,index:i}},"Digit",t.$props,!1))],1)})),0)},n=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"digit-item",style:t.digitItemStyle},[r("div",{staticClass:"scroll-area"},[r("div",{staticClass:"scroll-list",style:t.scrollListStyle},[r("div",{staticClass:"item"},[t._v("0")]),r("div",{staticClass:"item"},[t._v("1")]),r("div",{staticClass:"item"},[t._v("2")]),r("div",{staticClass:"item"},[t._v("3")]),r("div",{staticClass:"item"},[t._v("4")]),r("div",{staticClass:"item"},[t._v("5")]),r("div",{staticClass:"item"},[t._v("6")]),r("div",{staticClass:"item"},[t._v("7")]),r("div",{staticClass:"item"},[t._v("8")]),r("div",{staticClass:"item"},[t._v("9")])])]),r("div",{staticClass:"real-digit",style:t.realDigitStyle},[t._v(" "+t._s(t.digit)+" ")])])},s=[],a={props:{digit:{type:[Number,String],required:!0},index:{type:Number,required:!0},digits:[Number,String],fontSize:[Number,String],color:String,bgColor:String,duration:Number,reverse:Boolean},computed:{animationIterationCount(){return this.reverse?this.duration/.1*(this.index+1):(`${this.digits}`.length-this.index)*this.duration/.1},digitItemStyle(){return{backgroundColor:this.bgColor,color:this.color,fontSize:`${this.fontSize}px`}},scrollListStyle(){return{animationIterationCount:this.animationIterationCount}},realDigitStyle(){return{...this.digitStyle,animationIterationCount:this.animationIterationCount}}}},l=a,u=r(1001),c=(0,u.Z)(l,o,s,!1,null,"61077244",null),d=c.exports,f={components:{Digit:d},props:{digits:{type:[Number,String],required:!0},fontSize:{type:Number,default:26},duration:{type:Number,default:.2},color:String,bgColor:String,reverse:Boolean},computed:{digitArray(){return`${this.digits}`.split("")}}},v=f,m=(0,u.Z)(v,i,n,!1,null,"0d3613db",null),h=m.exports},899:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return c}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("div",{staticClass:"head"},[t._v("scroll-digit")]),r("div",{staticClass:"demo-area"},[r("scroll-digit",{attrs:{digits:t.digits,fontSize:t.fontSize,reverse:"true"===t.reverse,duration:t.duration,color:t.color,bgColor:t.bgColor}})],1),r("div",{staticClass:"args-area"},[r("div",[t._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:t.digits,expression:"digits"}],attrs:{type:"text"},domProps:{value:t.digits},on:{input:function(e){e.target.composing||(t.digits=e.target.value)}}})]),r("div",[t._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],domProps:{value:t.fontSize},on:{blur:t.refresh,input:function(e){e.target.composing||(t.fontSize=e.target.value)}}})]),r("div",[t._m(2),r("div",{staticClass:"radio-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.reverse,expression:"reverse"}],attrs:{name:"reverse",type:"radio",value:"true"},domProps:{checked:t._q(t.reverse,"true")},on:{change:[function(e){t.reverse="true"},t.refresh]}}),t._v("从左往右 "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.reverse,expression:"reverse"}],attrs:{name:"reverse",type:"radio",value:"false"},domProps:{checked:t._q(t.reverse,"false")},on:{change:[function(e){t.reverse="false"},t.refresh]}}),t._v("从右往左 ")])]),r("div",[t._m(3),r("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],domProps:{value:t.duration},on:{blur:t.refresh,input:function(e){e.target.composing||(t.duration=e.target.value)}}})]),r("div",[t._m(4),r("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],domProps:{value:t.color},on:{blur:t.refresh,input:function(e){e.target.composing||(t.color=e.target.value)}}})]),r("div",[t._m(5),r("input",{directives:[{name:"model",rawName:"v-model",value:t.bgColor,expression:"bgColor"}],domProps:{value:t.bgColor},on:{blur:t.refresh,input:function(e){e.target.composing||(t.bgColor=e.target.value)}}})])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[t._v("digits: String "),r("span",[t._v("【必填】动态展示字符，数字或字符串，支持中文")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[t._v("fontSize: Number "),r("span",[t._v("字符大小，单位px。默认26")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[t._v("reverse: Boolean "),r("span",[t._v("reverse为true则从左往右。默认false")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[t._v("duration: Number "),r("span",[t._v("最开始滚动的字符滚动时长，用于调节滚动效果。默认0.2")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[t._v("color: String "),r("span",[t._v("字符颜色，取值参考：#fff")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[t._v("bgColor: String "),r("span",[t._v("字符背景色，取值参考：#0092ff")])])}],o=r(356),s={components:{ScrollDigit:o["default"]},data(){return{digits:"1234ABCDefgh",fontSize:26,reverse:"false",duration:.2,color:"#fff",bgColor:"#0092ff"}},methods:{refresh(){const t=this.digits;this.digits="",setTimeout((()=>{this.digits=t}))}}},a=s,l=r(1001),u=(0,l.Z)(a,i,n,!1,null,null,null),c=u.exports},5662:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"virtual-list"},[r("h2",[t._v("Virtual List")]),r("div",{staticClass:"scroll-container",style:t.containerStyle,on:{scroll:t.listScroll}},[r("div",{style:t.listStyle,attrs:{id:"list"}},[r("div",{staticClass:"render-area",style:t.renderStyle},t._l(t.scrollItems,(function(e,i){return r("div",{key:e.id,staticClass:"scroll-list-item",style:t.itemStyle,attrs:{id:i}},[t._v(" "+t._s(e.text)+" ")])})),0)])])])},n=[],o=r(3025),s=r.n(o),a={props:{height:{type:Number,default:400},itemHeight:{type:Number,default:40},hold:{type:Number,default:0}},computed:{containerStyle(){return{maxHeight:`${this.height}px`}},listStyle(){return{height:this.itemHeight*this.list.length+"px"}},renderStyle(){return{transform:`translateY(${this.startIndex*this.itemHeight}px)`}},itemStyle(){return{height:`${this.itemHeight}px`,lineHeight:`${this.itemHeight}px`}},scrollItems(){return this.list.slice(this.startIndex,this.endIndex)}},data(){return{list:[],startIndex:0,endIndex:0}},created(){this.init()},methods:{init(){const{Random:t,mock:e}=s();this.list=Array.from({length:1e4}).map((()=>e({id:t.natural(),text:t.email()}))),this.render()},listScroll(t){this.render(t.target.scrollTop)},render(t=0){this.startIndex=Math.max(Math.floor(t/this.itemHeight)-this.hold,0),this.endIndex=Math.min(Math.ceil(this.height/this.itemHeight)+this.hold+this.startIndex,this.list.length),console.log("render",t,this.startIndex,this.endIndex)}}},l=a,u=r(1001),c=(0,u.Z)(l,i,n,!1,null,"7a7f9572",null),d=c.exports},5923:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" Worker ")])},n=[],o=r(8935),s=r(2616);function a(t,e){return console.log(111,t,e),t+e}o.Z.use(s.Z);var l={created(){this.init()},methods:{init(){this.runWorker(),this.createWorker()},runWorker(){let t=this.$worker.run(a,[1,2]);t.then((t=>{console.log("this.$worker",t)})),t=null},createWorker(){const t=[{message:"f1",func:t=>t++},{message:"f2",func:(t,e)=>t+e}];let e=this.$worker.create(t);e.postMessage("f1",[99]).then((t=>console.log("f1",t))),e.postMessage("f2",[99,101]).then((t=>console.log("f2",t))),e=null}}},u=l,c=r(1001),d=(0,c.Z)(u,i,n,!1,null,null,null),f=d.exports},5034:function(t,e,r){"use strict";r.r(e),e["default"]={name:"数字滚动",description:"支持数字滚动的特效，类似于大乐透的抽奖效果。"}},8294:function(t,e,r){"use strict";r.r(e),e["default"]={name:"虚拟列表",description:"虚拟滚动，常用于前端和小程序等场景，处理大数据量的滚动展示。核心原理在于仅渲染可视区域的展示数据，以提升列表滚动性能。"}},7078:function(t,e,r){"use strict";r.r(e),e["default"]={name:"js多线程",description:"基于vue-worker的js多线程实例"}},7132:function(t,e,r){"use strict";var i=r(8935),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("a",{staticClass:"fork-me",attrs:{href:"https://github.com/brandom1225/100-classical-fe"}}),r("router-view")],1)},o=[],s={name:"App"},a=s,l=r(1001),u=(0,l.Z)(a,n,o,!1,null,"6012e635",null),c=u.exports,d=r(2809),f=r(17);i.Z.use(d.Z),console.info("Route Config",f.Z);const v=new d.Z({routes:f.Z});var m=v;i.Z.config.productionTip=!1,new i.Z({router:m,render:t=>t(c)}).$mount("#app")},17:function(t,e,r){"use strict";r.d(e,{N:function(){return n}});const i=r(5722),n=i.keys().reduce(((t,e)=>{const n=e.split("/");if(3===n.length){const o=i(e).default,s=n[1],a=r(9499)(`./${s}/config.js`)?.default||{},l={path:`/case/${s}`,component:o,meta:{id:s,readme:()=>r(205)(`./${s}/readme.md`),...a}};t.push(l)}return t}),[]),o=[{path:"*",redirect:"/index"},{path:"/index",component:()=>r.e(455).then(r.bind(r,3455))},{path:"/test",component:()=>r.e(606).then(r.bind(r,5606))},{path:"/case",component:()=>r.e(449).then(r.bind(r,8449)),children:[...n]}];e["Z"]=o},205:function(t,e,r){var i={"./scroll-digit/readme.md":[7337,337],"./virtual-list/readme.md":[5606,606],"./worker/readme.md":[7246,246]};function n(t){if(!r.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],n=e[0];return r.e(e[1]).then((function(){return r(n)}))}n.keys=function(){return Object.keys(i)},n.id=205,t.exports=n},9499:function(t,e,r){var i={"./scroll-digit/config.js":5034,"./virtual-list/config.js":8294,"./worker/config.js":7078};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=o,t.exports=n,n.id=9499},5722:function(t,e,r){var i={"./scroll-digit/component/index.vue":356,"./scroll-digit/index.vue":899,"./virtual-list/index.vue":5662,"./worker/index.vue":5923};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=o,t.exports=n,n.id=5722}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,i,n,o){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],n=t[c][1],o=t[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((function(t){return r.O[t](i[l])}))?i.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,i){return r.f[i](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{246:"17c2cde2",337:"30ee51c3",449:"9814c64f",455:"de090311",606:"4b38b696"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{449:"69cd1c49",455:"2d5f0392"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="fe100:";r.l=function(i,n,o,s){if(t[i])t[i].push(n);else{var a,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+o){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",e+o),a.src=i),t[i]=[n];var f=function(e,r){a.onerror=a.onload=null,clearTimeout(v);var n=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(t){return t(r)})),e)return e(r)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t=function(t,e,r,i){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)r();else{var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,n.parentNode.removeChild(n),i(l)}};return n.onerror=n.onload=o,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var n=r[i],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===t||o===e))return n}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){n=s[i],o=n.getAttribute("data-href");if(o===t||o===e)return n}},i=function(i){return new Promise((function(n,o){var s=r.miniCssF(i),a=r.p+s;if(e(s,a))return n();t(i,a,n,o)}))},n={143:0};r.f.miniCss=function(t,e){var r={449:1,455:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=i(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,i){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise((function(r,i){n=t[e]=[r,i]}));i.push(n[2]=o);var s=r.p+r.u(e),a=new Error,l=function(i){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,n[1](a)}};r.l(s,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,o,s=i[0],a=i[1],l=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var c=l(r)}for(e&&e(i);u<s.length;u++)o=s[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(c)},i=self["webpackChunkfe100"]=self["webpackChunkfe100"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(7132)}));i=r.O(i)})();
//# sourceMappingURL=app.e47bc509.js.map