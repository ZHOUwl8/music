(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e53edefc"],{"3b93":function(e,t,n){"use strict";n("5107")},5107:function(e,t,n){},a55b:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"logo"}),e._v(" 账号："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),n("br"),e._v(" 密码："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"",id:"",placeholder:"请输入密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{attrs:{type:"submit"},on:{click:e.login}},[e._v("登录")])])},r=[],s=n("1da1"),a=(n("96cf"),{data:function(){return{phone:"17628237618",password:"Zw2573681101"}},methods:{login:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("userLogin",{phone:e.phone,password:e.password});case 2:n=t.sent,200==n.data.code&&e.$router.push("/user");case 4:case"end":return t.stop()}}),t)})))()}}}),i=a,p=(n("3b93"),n("2877")),u=Object(p["a"])(i,o,r,!1,null,"9c1e4f72",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-e53edefc.0b133713.js.map