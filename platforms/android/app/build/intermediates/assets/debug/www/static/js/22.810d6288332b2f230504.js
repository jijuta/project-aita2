webpackJsonp([22],{"6Gjp":function(n,t,e){"use strict";function i(n){e("6kLp")}Object.defineProperty(t,"__esModule",{value:!0});var a=e("FSL0"),o=e("KvRm"),r=e("VU/8"),s=i,d=r(a.a,o.a,!1,s,"data-v-7fd9e2b0",null);t.default=d.exports},"6kLp":function(n,t,e){var i=e("FNcE");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("25a71810",i,!0,{})},FNcE:function(n,t,e){var i=e("kxFB");t=n.exports=e("FZ+f")(!0),t.i(e("qfEU"),""),t.push([n.i,'.mixin loading[data-v-7fd9e2b0]{background:#fff;text-align:center;font-size:14px;height:26px;line-height:26px}.mixin loading .loading[data-v-7fd9e2b0]:before{content:"";display:inline-block;position:relative;left:-11px;padding:0;border:0;background:0;width:2px;height:2px;border-radius:100%;-webkit-box-shadow:0 -7px 0 .9px #666,7px 0 #999,0 7px #999,-7px 0 #999,-5px -5px 0 .4px #999,5px -5px 0 1.1px #666,5px 5px #999,-5px 5px #999;box-shadow:0 -7px 0 .9px #666,7px 0 #999,0 7px #999,-7px 0 #999,-5px -5px 0 .4px #999,5px -5px 0 1.1px #666,5px 5px #999,-5px 5px #999;animation:spin 1.5s linear infinite;-webkit-animation:spin 1.5s linear infinite;top:-4px}.mixin loading .keyframes spin 0%[data-v-7fd9e2b0]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.mixin loading .keyframes spin to[data-v-7fd9e2b0]{-webkit-transform:rotate(1turn);transform:rotate(1turn)}.mixin ellipsis[data-v-7fd9e2b0],.text1[data-v-7fd9e2b0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@font-face{font-family:iconfont;src:url('+i(e("Gbmw"))+");src:url("+i(e("Gbmw"))+'?#iefix) format("embedded-opentype"),url('+i(e("XB7B"))+') format("woff"),url('+i(e("38jt"))+') format("truetype"),url('+i(e("PayV"))+'#iconfont) format("svg")}.iconfont[data-v-7fd9e2b0]{font-family:iconfont!important;font-size:24px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.login[data-v-7fd9e2b0]{height:100%;background-color:#f4f4f4;padding-top:12vw}.login>section .content[data-v-7fd9e2b0]{height:100%}.login>section .mint-cell-value[data-v-7fd9e2b0]{margin-right:36px!important}.login>section .mint-cell[data-v-7fd9e2b0]{padding:0 20px;background-color:#fff;position:relative;margin-bottom:10px}.login>section .mint-cell[data-v-7fd9e2b0]:last-child{border-bottom:none}',"",{version:3,sources:["d:/Prototype2018/project-aita2/src/views/home/realName.vue"],names:[],mappings:"AAEA,gCAEE,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,YAAa,AACb,gBAAkB,CACnB,AACD,gDACE,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,UAAW,AACX,SAAU,AACV,aAAc,AACd,UAAW,AACX,WAAY,AACZ,mBAAoB,AACpB,+IAAyJ,AACjJ,uIAAiJ,AACzJ,oCAAqC,AACrC,4CAA6C,AAC7C,QAAU,CACX,AACD,mDACE,+BAAgC,AACxB,sBAAwB,CACjC,AACD,mDACE,gCAAkC,AAC1B,uBAA0B,CACnC,AAOD,yDALE,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CAOrB,AACD,WACE,qBAAwB,AACxB,kCAA4C,AAC5C,uMAAiQ,CAClQ,AACD,2BACE,+BAAmC,AACnC,eAAgB,AAChB,kBAAmB,AACnB,mCAAoC,AACpC,+BAAiC,AACjC,iCAAmC,CACpC,AACD,wBACE,YAAa,AACb,yBAA0B,AAC1B,gBAAkB,CACnB,AACD,yCACE,WAAa,CACd,AACD,iDACE,2BAA8B,CAC/B,AACD,2CACE,eAAgB,AAChB,sBAAuB,AACvB,kBAAmB,AACnB,kBAAoB,CACrB,AACD,sDACE,kBAAoB,CACrB",file:"realName.vue",sourcesContent:["\n@import \"../../assets/fonts/iconfont.css\";\n.mixin loading[data-v-7fd9e2b0] {\n  /*loading部分*/\n  background: #fff;\n  text-align: center;\n  font-size: 14px;\n  height: 26px;\n  line-height: 26px;\n}\n.mixin loading .loading[data-v-7fd9e2b0]:before {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  left: -11px;\n  padding: 0;\n  border: 0;\n  background: 0;\n  width: 2px;\n  height: 2px;\n  border-radius: 100%;\n  -webkit-box-shadow: 0 -7px 0 0.9px #666, 7px 0 #999, 0 7px #999, -7px 0 #999, -5px -5px 0 0.4px #999, 5px -5px 0 1.1px #666, 5px 5px #999, -5px 5px #999;\n          box-shadow: 0 -7px 0 0.9px #666, 7px 0 #999, 0 7px #999, -7px 0 #999, -5px -5px 0 0.4px #999, 5px -5px 0 1.1px #666, 5px 5px #999, -5px 5px #999;\n  animation: spin 1.5s linear infinite;\n  -webkit-animation: spin 1.5s linear infinite;\n  top: -4px;\n}\n.mixin loading .keyframes spin from[data-v-7fd9e2b0] {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.mixin loading .keyframes spin to[data-v-7fd9e2b0] {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n.mixin ellipsis[data-v-7fd9e2b0] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*颜色*/\n.text1[data-v-7fd9e2b0] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@font-face {\n  font-family: 'iconfont';\n  src: url('../../assets/fonts/iconfont.eot');\n  src: url('../../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'), url('../../assets/fonts/iconfont.woff') format('woff'), url('../../assets/fonts/iconfont.ttf') format('truetype'), url('../../assets/fonts/iconfont.svg#iconfont') format('svg');\n}\n.iconfont[data-v-7fd9e2b0] {\n  font-family: \"iconfont\" !important;\n  font-size: 24px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n.login[data-v-7fd9e2b0] {\n  height: 100%;\n  background-color: #F4F4F4;\n  padding-top: 12vw;\n}\n.login > section .content[data-v-7fd9e2b0] {\n  height: 100%;\n}\n.login > section .mint-cell-value[data-v-7fd9e2b0] {\n  margin-right: 36px !important;\n}\n.login > section .mint-cell[data-v-7fd9e2b0] {\n  padding: 0 20px;\n  background-color: #fff;\n  position: relative;\n  margin-bottom: 10px;\n}\n.login > section .mint-cell[data-v-7fd9e2b0]:last-child {\n  border-bottom: none;\n}\n"],sourceRoot:""}])},FSL0:function(n,t,e){"use strict";var i=e("TIfe"),a=e("vMJZ");t.a={components:{},data:function(){return{title:"实名认证",is_real:!1,is_card:"1",idTypeID:"",card:"",real_name:"",idType:"",name:"",slots:[{flex:1,values:[{id:"1",name:"身份证"},{id:"2",name:"护照"}],className:"slot1",textAlign:"center"}],popupVisible:!1,popupValue:""}},created:function(){this.userData=this.$store.state.login.userData,this.userData.is_card&&(this.card=this.userData.card,this.real_name=this.userData.real_name,this.is_real=!0,1==this.userData.is_card?this.idType="身份证":this.idType="护照")},methods:{onValuesChange:function(n,t){t[0]>t[1]&&n.getSlotValue(1,t[0]),this.idType=t[0].name,this.idTypeID=t[0].id},showSex:function(){this.userData.is_card||(this.popupVisible=!0)},ok:function(){var n=this;this.key=e.i(i.b)();var t={key:this.key,is_card:this.idTypeID,card:this.card,real_name:this.real_name};e.i(a.e)(t).then(function(t){"1"==t.data.code&&(e.i(a.f)({key:e.i(i.b)()}).then(function(t){"1"==t.data.code&&n.$store.commit("SET_USERDATA",t.data.data)}),n.$router.go(-1))})}}}},KvRm:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login"},[e("v-header",{attrs:{title:n.title,fixed:!0}}),n._v(" "),e("section",[e("div",{staticClass:"content"},[e("div",{staticClass:"s-one"},[e("mt-cell",{attrs:{title:"证件类型","is-link":"",value:n.idType},nativeOn:{click:function(t){return n.showSex(t)}}}),n._v(" "),e("mt-field",{attrs:{label:"姓名",disabled:n.is_real,placeholder:"请输入真是姓名",type:"text"},model:{value:n.real_name,callback:function(t){n.real_name=t},expression:"real_name"}}),n._v(" "),e("mt-field",{attrs:{label:"身份证号",disabled:n.is_real,placeholder:"请输入正确的身份证号",type:"text"},model:{value:n.card,callback:function(t){n.card=t},expression:"card"}})],1)])]),n._v(" "),e("mt-button",{staticClass:"loginBtn",attrs:{plain:"",size:"large",disabled:n.is_real},on:{click:n.ok}},[n._v("实名认证")]),n._v(" "),e("mt-popup",{staticClass:"mint-popup",attrs:{position:"bottom"},model:{value:n.popupVisible,callback:function(t){n.popupVisible=t},expression:"popupVisible"}},[e("mt-picker",{ref:"picker",attrs:{slots:n.slots,"value-key":"name","visible-item-count":5},on:{change:n.onValuesChange},model:{value:n.popupValue,callback:function(t){n.popupValue=t},expression:"popupValue"}})],1)],1)},a=[],o={render:i,staticRenderFns:a};t.a=o},vMJZ:function(n,t,e){"use strict";e.d(t,"l",function(){return a}),e.d(t,"s",function(){return o}),e.d(t,"m",function(){return r}),e.d(t,"t",function(){return s}),e.d(t,"n",function(){return d}),e.d(t,"r",function(){return l}),e.d(t,"q",function(){return u}),e.d(t,"p",function(){return p}),e.d(t,"b",function(){return A}),e.d(t,"f",function(){return f}),e.d(t,"h",function(){return c}),e.d(t,"i",function(){return x}),e.d(t,"o",function(){return m}),e.d(t,"e",function(){return C}),e.d(t,"d",function(){return b}),e.d(t,"c",function(){return g}),e.d(t,"a",function(){return v}),e.d(t,"g",function(){return h}),e.d(t,"j",function(){return B}),e.d(t,"k",function(){return k});var i=e("gyMJ"),a=function(n){var t={data:n,url:"goods/addresslist"};return e.i(i.a)(t)},o=function(n){var t={data:n,url:"goods/addrdetail"};return e.i(i.b)(t)},r=function(n){var t={data:n,url:"goods/addrdefault"};return e.i(i.b)(t)},s=function(n){var t={data:n,url:"goods/address"};return e.i(i.b)(t)},d=function(n){var t={data:n,url:"goods/deladdress"};return e.i(i.b)(t)},l=function(n){var t={data:n,url:"user/login"};return e.i(i.b)(t)},u=function(n){var t={data:n,url:"user/phone_register"};return e.i(i.b)(t)},p=function(n){var t={data:n,url:"user/forget_pass"};return e.i(i.b)(t)},A=function(n){var t={data:n,url:"user/getverifycode"};return e.i(i.b)(t)},f=function(n){var t={data:n,url:"user/userinfo"};return e.i(i.a)(t)},c=function(n){var t={data:n};return e.i(i._file)(t)},x=function(n){var t={data:n,url:"user/profile_headimg"};return e.i(i.b)(t)},m=function(n){var t={data:n,url:"user/logout"};return e.i(i.a)(t)},C=function(n){var t={data:n,url:"user/real_message"};return e.i(i.b)(t)},b=function(n){var t={data:n,url:"user/update_login_pwd"};return e.i(i.b)(t)},g=function(n){var t={data:n,url:"user/update_pay_pwd"};return e.i(i.b)(t)},v=function(n){var t={data:n,url:"user/is_wallet_account"};return e.i(i.b)(t)},h=function(n){var t={data:n,url:"user/profile_username"};return e.i(i.b)(t)},B=function(n){var t={data:n,url:"user/profile_birthday"};return e.i(i.b)(t)},k=function(n){var t={data:n,url:"user/profile_sex"};return e.i(i.b)(t)}}});
//# sourceMappingURL=22.810d6288332b2f230504.js.map