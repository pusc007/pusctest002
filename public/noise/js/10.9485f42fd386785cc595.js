(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{403:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-dialog",{attrs:{persistent:"","max-width":"300px"},model:{value:t.alert,callback:function(n){t.alert=n},expression:"alert"}},[e("v-card",{staticClass:"pa-4",attrs:{light:""}},[e("v-card-text",{staticClass:"text-center"},[t._v(" "+t._s(t.message))]),t._v(" "),e("v-card-actions",{staticClass:"justify-center"},[e("v-btn",{attrs:{depressed:""},on:{click:t.cancelBtn_click}},[t._v("\n        取消\n      ")]),t._v(" "),e("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:t.certainBtn_click}},[t._v("\n        確定\n      ")])],1)],1)],1)};i._withStripped=!0;var c={components:{},data:function(){return{alert:!1,message:"",certainFun:null,cancelFun:null}},mounted:function(){},methods:{run:function(t,n,e){this.alert=!0,this.message=t,this.certainFun=n,this.cancelFun=e},cancelBtn_click:function(){this.alert=!1,this.cancelFun()},certainBtn_click:function(){this.alert=!1,this.certainFun()}},computed:{}},s=e(115),a=Object(s.a)(c,i,[],!1,null,"6fce52e9",null);a.options.__file="src/vue/components/Confirm.vue";n.a=a.exports},464:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-sheet",{staticClass:"content"},[t.infoLoading?t._e():[e("Header"),t._v(" "),e("v-main",{staticClass:"main"},[e("v-container",[e("div",{staticClass:"d-flex justify-center ma-4"},[t._v("請選擇 移轉的外縣市")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.citys,(function(n,i){return e("div",{key:i,staticClass:"col-4 d-flex align-center justify-center"},[e("v-btn",{staticClass:"w-100 text-h6",attrs:{depressed:"","x-large":""},on:{click:function(e){return t.city_click(n)}}},[t._v(t._s(n.text))])],1)})),0)])],1),t._v(" "),e("Confirm",{ref:"confirm"}),t._v(" "),e("v-overlay",{attrs:{value:t.running}},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[t._v("執行中...")])],1)],t._v(" "),e("v-overlay",{attrs:{value:t.infoLoading}},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[t._v("載入資訊中...")])],1)],2)};i._withStripped=!0;var c=e(402),s=e(403),a=e(399),r={components:{Header:c.a,Confirm:s.a},data:function(){return{infoLoading:!1,running:!1,citys:[]}},mounted:function(){var t=this;this.$store.state.info?this.init(this.$store.state.info):(this.infoLoading=!0,Object(a.j)(this.$store.state.token).then((function(n){t.infoLoading=!1,t.$store.dispatch("setInfo",n),t.$store.state.isInfo=!0,t.init(n)})).catch((function(n){t.infoLoading=!1,t.errorAction(n)})))},methods:{init:function(t){var n=this;t.contactName&&t.contactPhone&&t.contactEmail?t.city?this.$router.push({name:"Info"}):(this.running=!0,Object(a.a)(this.$store.state.token).then((function(t){n.running=!1,n.citys=t})).catch((function(t){n.running=!1,n.errorAction(t)}))):this.$router.push({name:"Contact"})},city_click:function(t){var n=this;this.$refs.confirm.run("確定移轉到 ".concat(t.text," ?"),(function(){n.running=!0,Object(a.i)(n.$store.state.token,t.text).then((function(){n.running=!1,n.$store.dispatch("setCity",t.text),n.$router.push({name:"Info"})})).catch((function(t){n.running=!1,n.errorAction(t)}))}),(function(){}))}},computed:{}},o=e(115),u=Object(o.a)(r,i,[],!1,null,"2ec279b8",null);u.options.__file="src/vue/pages/Transfer.vue";n.default=u.exports}}]);