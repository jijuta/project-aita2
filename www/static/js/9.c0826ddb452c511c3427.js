webpackJsonp([9],{"/mDC":function(n,t,o){"use strict";var i=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"login"},[o("v-header",{attrs:{title:n.title,fixed:!0}}),n._v(" "),o("section",[o("div",{staticClass:"logo"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.imgUrl,expression:"imgUrl"}]})]),n._v(" "),o("div",{staticClass:"content"},[o("mt-field",{attrs:{label:"+86",placeholder:"请输入手机号",type:"text"},model:{value:n.account,callback:function(t){n.account=t},expression:"account"}}),n._v(" "),o("mt-field",{attrs:{label:"验证码",placeholder:"请输入验证码",type:"text"},model:{value:n.code,callback:function(t){n.code=t},expression:"code"}},[o("v-ifycode",{attrs:{mobile:n.account}})],1),n._v(" "),o("mt-field",{attrs:{label:"密码",placeholder:"请输入密码",type:n.typePsd1},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}},[o("i",{staticClass:"marLf iconfont",class:n.eye1,on:{click:n.toggleType1}})]),n._v(" "),o("mt-field",{attrs:{label:"确认密码",placeholder:"请输入确认密码",type:n.typePsd2},model:{value:n.morePassword,callback:function(t){n.morePassword=t},expression:"morePassword"}},[o("i",{staticClass:"marLf iconfont",class:n.eye2,on:{click:n.toggleType2}})]),n._v(" "),o("p",{staticClass:"tip"},[o("mt-checklist",{attrs:{options:n.options},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}}),n._v(" "),o("span",[n._v("《用户协议》")])],1)],1)]),n._v(" "),o("mt-button",{staticClass:"loginBtn",attrs:{plain:"",size:"large"},on:{click:n.register}},[n._v("注册")])],1)},a=[],e={render:i,staticRenderFns:a};t.a=e},"12H5":function(n,t,o){"use strict";function i(n){o("g2EW")}Object.defineProperty(t,"__esModule",{value:!0});var a=o("Ii4g"),e=o("/mDC"),r=o("VU/8"),s=i,A=r(a.a,e.a,!1,s,"data-v-04a5ab92",null);t.default=A.exports},AUQ7:function(n,t,o){"use strict";var i=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("mt-button",{directives:[{name:"show",rawName:"v-show",value:n.mobile,expression:"mobile"}],attrs:{disabled:n.show,size:"small"},on:{click:n.ifycode}},[o("span",[n._v(n._s(n.first))]),o("span",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}]},[n._v("（"+n._s(n.count)+"s）")])])},a=[],e={render:i,staticRenderFns:a};t.a=e},"I/yJ":function(n,t,o){var i=o("kxFB");t=n.exports=o("FZ+f")(!0),t.i(o("qfEU"),""),t.push([n.i,'.mixin loading[data-v-1ffc2a58]{background:#fff;text-align:center;font-size:14px;height:26px;line-height:26px}.mixin loading .loading[data-v-1ffc2a58]:before{content:"";display:inline-block;position:relative;left:-11px;padding:0;border:0;background:0;width:2px;height:2px;border-radius:100%;-webkit-box-shadow:0 -7px 0 .9px #666,7px 0 #999,0 7px #999,-7px 0 #999,-5px -5px 0 .4px #999,5px -5px 0 1.1px #666,5px 5px #999,-5px 5px #999;box-shadow:0 -7px 0 .9px #666,7px 0 #999,0 7px #999,-7px 0 #999,-5px -5px 0 .4px #999,5px -5px 0 1.1px #666,5px 5px #999,-5px 5px #999;animation:spin 1.5s linear infinite;-webkit-animation:spin 1.5s linear infinite;top:-4px}.mixin loading .keyframes spin 0%[data-v-1ffc2a58]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.mixin loading .keyframes spin to[data-v-1ffc2a58]{-webkit-transform:rotate(1turn);transform:rotate(1turn)}.mixin ellipsis[data-v-1ffc2a58],.text1[data-v-1ffc2a58]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@font-face{font-family:iconfont;src:url('+i(o("Gbmw"))+");src:url("+i(o("Gbmw"))+'?#iefix) format("embedded-opentype"),url('+i(o("XB7B"))+') format("woff"),url('+i(o("38jt"))+') format("truetype"),url('+i(o("PayV"))+'#iconfont) format("svg")}.iconfont[data-v-1ffc2a58]{font-family:iconfont!important;font-size:24px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}',"",{version:3,sources:["d:/Prototype2018/project-aita2/src/common/_ifycode.vue"],names:[],mappings:"AAEA,gCAEE,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,YAAa,AACb,gBAAkB,CACnB,AACD,gDACE,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,UAAW,AACX,SAAU,AACV,aAAc,AACd,UAAW,AACX,WAAY,AACZ,mBAAoB,AACpB,+IAAyJ,AACjJ,uIAAiJ,AACzJ,oCAAqC,AACrC,4CAA6C,AAC7C,QAAU,CACX,AACD,mDACE,+BAAgC,AACxB,sBAAwB,CACjC,AACD,mDACE,gCAAkC,AAC1B,uBAA0B,CACnC,AAOD,yDALE,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CAOrB,AACD,WACE,qBAAwB,AACxB,kCAAyC,AACzC,uMAAqP,CACtP,AACD,2BACE,+BAAmC,AACnC,eAAgB,AAChB,kBAAmB,AACnB,mCAAoC,AACpC,+BAAiC,AACjC,iCAAmC,CACpC",file:"_ifycode.vue",sourcesContent:["\n@import \"../assets/fonts/iconfont.css\";\n.mixin loading[data-v-1ffc2a58] {\n  /*loading部分*/\n  background: #fff;\n  text-align: center;\n  font-size: 14px;\n  height: 26px;\n  line-height: 26px;\n}\n.mixin loading .loading[data-v-1ffc2a58]:before {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  left: -11px;\n  padding: 0;\n  border: 0;\n  background: 0;\n  width: 2px;\n  height: 2px;\n  border-radius: 100%;\n  -webkit-box-shadow: 0 -7px 0 0.9px #666, 7px 0 #999, 0 7px #999, -7px 0 #999, -5px -5px 0 0.4px #999, 5px -5px 0 1.1px #666, 5px 5px #999, -5px 5px #999;\n          box-shadow: 0 -7px 0 0.9px #666, 7px 0 #999, 0 7px #999, -7px 0 #999, -5px -5px 0 0.4px #999, 5px -5px 0 1.1px #666, 5px 5px #999, -5px 5px #999;\n  animation: spin 1.5s linear infinite;\n  -webkit-animation: spin 1.5s linear infinite;\n  top: -4px;\n}\n.mixin loading .keyframes spin from[data-v-1ffc2a58] {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.mixin loading .keyframes spin to[data-v-1ffc2a58] {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n.mixin ellipsis[data-v-1ffc2a58] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*颜色*/\n.text1[data-v-1ffc2a58] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@font-face {\n  font-family: 'iconfont';\n  src: url('../assets/fonts/iconfont.eot');\n  src: url('../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'), url('../assets/fonts/iconfont.woff') format('woff'), url('../assets/fonts/iconfont.ttf') format('truetype'), url('../assets/fonts/iconfont.svg#iconfont') format('svg');\n}\n.iconfont[data-v-1ffc2a58] {\n  font-family: \"iconfont\" !important;\n  font-size: 24px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n"],sourceRoot:""}])},Ii4g:function(n,t,o){"use strict";var i=o("Wjrc"),a=o("vMJZ");t.a={components:{"v-ifycode":i.a},data:function(){return{title:"手机注册",account:"",username:"",email:"",password:"",morePassword:"",imgUrl:"./static/user/logo.png",eye1:"icon-mima",eye2:"icon-mima",typePsd1:"password",typePsd2:"password",bool1:!0,bool2:!0,options:[{label:"我已看过并同意",value:!0}],value:[!0],code:""}},methods:{register:function(){var n=this,t={mobile:this.account.trim(),code:this.code.trim(),passwd:this.password.trim(),repasswd:this.morePassword.trim()};o.i(a.q)(t).then(function(t){"1"==t.data.code&&n.$router.replace({path:"/login"})})},toggleType1:function(){this.bool1=!this.bool1,this.bool1?(this.eye1="icon-mima",this.typePsd1="password"):(this.eye1="icon-liulan",this.typePsd1="text")},toggleType2:function(){this.bool2=!this.bool2,this.bool2?(this.eye2="icon-mima",this.typePsd2="password"):(this.eye2="icon-liulan",this.typePsd2="text")}}}},Scjt:function(n,t,o){var i=o("I/yJ");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);o("rjj0")("87b898aa",i,!0,{})},Sqw1:function(n,t,o){"use strict";var i=o("vMJZ");t.a={props:["mobile"],data:function(){return{timer:null,show:!1,count:"",first:"获取验证码"}},created:function(){},methods:{getCode:function(){var n=this;this.show=!0;this.timer||(this.count=60,this.timer=setInterval(function(){n.count>0&&n.count<=60?n.count--:(n.first="重新发送",n.show=!1,clearInterval(n.timer),n.timer=null)},1e3))},ifycode:function(){var n=this,t={mobile:this.mobile};o.i(i.b)(t).then(function(t){"1"==t.data.code&&n.getCode()})}}}},"VJS/":function(n,t,o){n.exports=o.p+"static/img/bg.e0cd842.jpg"},Wjrc:function(n,t,o){"use strict";function i(n){o("Scjt")}var a=o("Sqw1"),e=o("AUQ7"),r=o("VU/8"),s=i,A=r(a.a,e.a,!1,s,"data-v-1ffc2a58",null);t.a=A.exports},YDDO:function(n,t,o){var i=o("kxFB");t=n.exports=o("FZ+f")(!0),t.i(o("qfEU"),""),t.push([n.i,'.mixin loading[data-v-04a5ab92]{background:#fff;text-align:center;font-size:14px;height:26px;line-height:26px}.mixin loading .loading[data-v-04a5ab92]:before{content:"";display:inline-block;position:relative;left:-11px;padding:0;border:0;background:0;width:2px;height:2px;border-radius:100%;-webkit-box-shadow:0 -7px 0 .9px #666,7px 0 #999,0 7px #999,-7px 0 #999,-5px -5px 0 .4px #999,5px -5px 0 1.1px #666,5px 5px #999,-5px 5px #999;box-shadow:0 -7px 0 .9px #666,7px 0 #999,0 7px #999,-7px 0 #999,-5px -5px 0 .4px #999,5px -5px 0 1.1px #666,5px 5px #999,-5px 5px #999;animation:spin 1.5s linear infinite;-webkit-animation:spin 1.5s linear infinite;top:-4px}.mixin loading .keyframes spin 0%[data-v-04a5ab92]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.mixin loading .keyframes spin to[data-v-04a5ab92]{-webkit-transform:rotate(1turn);transform:rotate(1turn)}.mixin ellipsis[data-v-04a5ab92],.text1[data-v-04a5ab92]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@font-face{font-family:iconfont;src:url('+i(o("Gbmw"))+");src:url("+i(o("Gbmw"))+'?#iefix) format("embedded-opentype"),url('+i(o("XB7B"))+') format("woff"),url('+i(o("38jt"))+') format("truetype"),url('+i(o("PayV"))+'#iconfont) format("svg")}.iconfont[data-v-04a5ab92]{font-family:iconfont!important;font-size:24px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.login[data-v-04a5ab92]{background:url('+i(o("VJS/"))+") no-repeat;background-size:cover;padding-top:12vw;position:fixed;right:0;left:0;bottom:0;top:0}.login .mint-cell[data-v-04a5ab92]{background:transparent!important;border-bottom:1px solid #dedede}.login>section[data-v-04a5ab92]{padding:0 20px}.login>section .logo[data-v-04a5ab92]{text-align:center;width:100%;margin:13vw 0}.login>section .logo img[data-v-04a5ab92]{width:42%}.login>section .content[data-v-04a5ab92]{height:100%}.login>section .content .mint-tab-container[data-v-04a5ab92]{margin-top:9vw}.login>section .marLf[data-v-04a5ab92]{margin-left:20px;font-size:20px;color:#333}.login>section .btn[data-v-04a5ab92]{margin-top:13px;color:#333}.login>section .btn .rt[data-v-04a5ab92]{float:right}.login>section .tip[data-v-04a5ab92]{padding:4vw 0 0;font-size:16px}.login>section .tip .mint-checklist[data-v-04a5ab92],.login>section .tip span[data-v-04a5ab92]{display:inline-block}.login>section .tip span[data-v-04a5ab92]{color:#bc0404;position:relative;top:-19px;left:-4px}","",{version:3,sources:["d:/Prototype2018/project-aita2/src/views/login/register.vue"],names:[],mappings:"AAEA,gCAEE,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,YAAa,AACb,gBAAkB,CACnB,AACD,gDACE,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,UAAW,AACX,SAAU,AACV,aAAc,AACd,UAAW,AACX,WAAY,AACZ,mBAAoB,AACpB,+IAAyJ,AACjJ,uIAAiJ,AACzJ,oCAAqC,AACrC,4CAA6C,AAC7C,QAAU,CACX,AACD,mDACE,+BAAgC,AACxB,sBAAwB,CACjC,AACD,mDACE,gCAAkC,AAC1B,uBAA0B,CACnC,AAOD,yDALE,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CAOrB,AACD,WACE,qBAAwB,AACxB,kCAA4C,AAC5C,uMAAiQ,CAClQ,AACD,2BACE,+BAAmC,AACnC,eAAgB,AAChB,kBAAmB,AACnB,mCAAoC,AACpC,+BAAiC,AACjC,iCAAmC,CACpC,AACD,wBACE,mDAAyD,AACzD,sBAAuB,AACvB,iBAAkB,AAClB,eAAgB,AAChB,QAAS,AACT,OAAQ,AACR,SAAU,AACV,KAAO,CACR,AACD,mCACE,iCAAmC,AACnC,+BAAiC,CAClC,AACD,gCACE,cAAgB,CACjB,AACD,sCACE,kBAAmB,AACnB,WAAY,AACZ,aAAe,CAChB,AACD,0CACE,SAAW,CACZ,AACD,yCACE,WAAa,CACd,AACD,6DACE,cAAgB,CACjB,AACD,uCACE,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,qCACE,gBAAiB,AACjB,UAAY,CACb,AACD,yCACE,WAAa,CACd,AACD,qCACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,+FAEE,oBAAsB,CACvB,AACD,0CACE,cAAe,AACf,kBAAmB,AACnB,UAAW,AACX,SAAW,CACZ",file:"register.vue",sourcesContent:["\n@import \"../../assets/fonts/iconfont.css\";\n.mixin loading[data-v-04a5ab92] {\n  /*loading部分*/\n  background: #fff;\n  text-align: center;\n  font-size: 14px;\n  height: 26px;\n  line-height: 26px;\n}\n.mixin loading .loading[data-v-04a5ab92]:before {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  left: -11px;\n  padding: 0;\n  border: 0;\n  background: 0;\n  width: 2px;\n  height: 2px;\n  border-radius: 100%;\n  -webkit-box-shadow: 0 -7px 0 0.9px #666, 7px 0 #999, 0 7px #999, -7px 0 #999, -5px -5px 0 0.4px #999, 5px -5px 0 1.1px #666, 5px 5px #999, -5px 5px #999;\n          box-shadow: 0 -7px 0 0.9px #666, 7px 0 #999, 0 7px #999, -7px 0 #999, -5px -5px 0 0.4px #999, 5px -5px 0 1.1px #666, 5px 5px #999, -5px 5px #999;\n  animation: spin 1.5s linear infinite;\n  -webkit-animation: spin 1.5s linear infinite;\n  top: -4px;\n}\n.mixin loading .keyframes spin from[data-v-04a5ab92] {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.mixin loading .keyframes spin to[data-v-04a5ab92] {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n.mixin ellipsis[data-v-04a5ab92] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*颜色*/\n.text1[data-v-04a5ab92] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@font-face {\n  font-family: 'iconfont';\n  src: url('../../assets/fonts/iconfont.eot');\n  src: url('../../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'), url('../../assets/fonts/iconfont.woff') format('woff'), url('../../assets/fonts/iconfont.ttf') format('truetype'), url('../../assets/fonts/iconfont.svg#iconfont') format('svg');\n}\n.iconfont[data-v-04a5ab92] {\n  font-family: \"iconfont\" !important;\n  font-size: 24px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n.login[data-v-04a5ab92] {\n  background: url(\"../../../static/user/bg.jpg\") no-repeat;\n  background-size: cover;\n  padding-top: 12vw;\n  position: fixed;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  top: 0;\n}\n.login .mint-cell[data-v-04a5ab92] {\n  background: transparent !important;\n  border-bottom: 1px solid #dedede;\n}\n.login > section[data-v-04a5ab92] {\n  padding: 0 20px;\n}\n.login > section .logo[data-v-04a5ab92] {\n  text-align: center;\n  width: 100%;\n  margin: 13vw 0;\n}\n.login > section .logo img[data-v-04a5ab92] {\n  width: 42%;\n}\n.login > section .content[data-v-04a5ab92] {\n  height: 100%;\n}\n.login > section .content .mint-tab-container[data-v-04a5ab92] {\n  margin-top: 9vw;\n}\n.login > section .marLf[data-v-04a5ab92] {\n  margin-left: 20px;\n  font-size: 20px;\n  color: #333;\n}\n.login > section .btn[data-v-04a5ab92] {\n  margin-top: 13px;\n  color: #333;\n}\n.login > section .btn .rt[data-v-04a5ab92] {\n  float: right;\n}\n.login > section .tip[data-v-04a5ab92] {\n  padding: 4vw 0 0;\n  font-size: 16px;\n}\n.login > section .tip .mint-checklist[data-v-04a5ab92],\n.login > section .tip span[data-v-04a5ab92] {\n  display: inline-block;\n}\n.login > section .tip span[data-v-04a5ab92] {\n  color: #BC0404;\n  position: relative;\n  top: -19px;\n  left: -4px;\n}\n"],sourceRoot:""}])},g2EW:function(n,t,o){var i=o("YDDO");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);o("rjj0")("35509e72",i,!0,{})},vMJZ:function(n,t,o){"use strict";o.d(t,"l",function(){return a}),o.d(t,"s",function(){return e}),o.d(t,"m",function(){return r}),o.d(t,"t",function(){return s}),o.d(t,"n",function(){return A}),o.d(t,"r",function(){return p}),o.d(t,"q",function(){return l}),o.d(t,"p",function(){return d}),o.d(t,"b",function(){return c}),o.d(t,"f",function(){return f}),o.d(t,"h",function(){return u}),o.d(t,"i",function(){return x}),o.d(t,"o",function(){return C}),o.d(t,"e",function(){return m}),o.d(t,"d",function(){return g}),o.d(t,"c",function(){return b}),o.d(t,"a",function(){return v}),o.d(t,"g",function(){return B}),o.d(t,"j",function(){return h}),o.d(t,"k",function(){return w});var i=o("gyMJ"),a=function(n){var t={data:n,url:"goods/addresslist"};return o.i(i.a)(t)},e=function(n){var t={data:n,url:"goods/addrdetail"};return o.i(i.b)(t)},r=function(n){var t={data:n,url:"goods/addrdefault"};return o.i(i.b)(t)},s=function(n){var t={data:n,url:"goods/address"};return o.i(i.b)(t)},A=function(n){var t={data:n,url:"goods/deladdress"};return o.i(i.b)(t)},p=function(n){var t={data:n,url:"user/login"};return o.i(i.b)(t)},l=function(n){var t={data:n,url:"user/phone_register"};return o.i(i.b)(t)},d=function(n){var t={data:n,url:"user/forget_pass"};return o.i(i.b)(t)},c=function(n){var t={data:n,url:"user/getverifycode"};return o.i(i.b)(t)},f=function(n){var t={data:n,url:"user/userinfo"};return o.i(i.a)(t)},u=function(n){var t={data:n};return o.i(i._file)(t)},x=function(n){var t={data:n,url:"user/profile_headimg"};return o.i(i.b)(t)},C=function(n){var t={data:n,url:"user/logout"};return o.i(i.a)(t)},m=function(n){var t={data:n,url:"user/real_message"};return o.i(i.b)(t)},g=function(n){var t={data:n,url:"user/update_login_pwd"};return o.i(i.b)(t)},b=function(n){var t={data:n,url:"user/update_pay_pwd"};return o.i(i.b)(t)},v=function(n){var t={data:n,url:"user/is_wallet_account"};return o.i(i.b)(t)},B=function(n){var t={data:n,url:"user/profile_username"};return o.i(i.b)(t)},h=function(n){var t={data:n,url:"user/profile_birthday"};return o.i(i.b)(t)},w=function(n){var t={data:n,url:"user/profile_sex"};return o.i(i.b)(t)}}});
//# sourceMappingURL=9.c0826ddb452c511c3427.js.map