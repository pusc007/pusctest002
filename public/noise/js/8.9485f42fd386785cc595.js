(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{429:function(t,a,i){},460:function(t,a,i){"use strict";i(429)},466:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-sheet",{staticClass:"content"},[t.infoLoading?t._e():[i("Header"),t._v(" "),i("v-main",{staticClass:"main vh-100"},[i("v-container",{staticClass:"d-flex justify-center align-center",attrs:{"fill-height":"",fluid:""}},[i("div",{staticClass:"d-flex flex-column w-100 max-w-400"},[i("div",{staticClass:"d-flex justify-center ma-4"},[t._v("填寫聯絡資訊")]),t._v(" "),i("div",t._l(t.items,(function(a,e){return i("TableItem",{key:"item"+e,staticClass:"pa-1",attrs:{data:t.data,items:t.items,name:e,item:a}})})),1),t._v(" "),i("v-btn",{staticClass:"cyan white--text",attrs:{depressed:""},on:{click:t.confirmBtn_click}},[t._v("確定")])],1)]),t._v(" "),i("v-overlay",{attrs:{value:t.loading}},[i("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[t._v("登入中...")])],1)],1)],t._v(" "),i("v-overlay",{attrs:{value:t.infoLoading}},[i("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[t._v("載入資訊中...")])],1)],2)};e._withStripped=!0;var n=i(402),o=i(430),r=i(410),s=i(420),c=i(399),d=i(405),l=i(400),u={mixins:[s.validationMixin,l.a],components:{Header:n.a,TableItem:o.a},validations:{data:{contactName:{required:r.b},contactPhone:{required:r.b},contactEmail:{required:r.b,emailFormat:r.a}}},data:function(){var t=this;return{infoLoading:!1,logo:d.a,data:{},items:{contactName:{label:"聯絡姓名",errors:function(a){if(t.$v.data[a].$dirty)return t.$v.data[a].required?void 0:"請填寫這個欄位。"}},contactPhone:{label:"聯絡電話",errors:function(a){if(t.$v.data[a].$dirty)return t.$v.data[a].required?void 0:"請填寫這個欄位。"}},contactEmail:{label:"聯絡電子信箱",errors:function(a){if(t.$v.data[a].$dirty)return t.$v.data[a].required?t.$v.data[a].emailFormat?void 0:"格式錯誤 XXX@XXX.XXX":"請填寫這個欄位。"}}},loading:!1}},mounted:function(){var t=this;this.$store.state.info?this.init(this.$store.state.info):(this.infoLoading=!0,Object(c.j)(this.$store.state.token).then((function(a){t.infoLoading=!1,t.$store.dispatch("setInfo",a),t.$store.state.isInfo=!0,t.init(a)})).catch((function(a){t.infoLoading=!1,t.errorAction(a)})))},methods:{init:function(t){console.log(t)},confirmBtn_click:function(){var t=this;this.$v.$touch(),this.$v.$error||(this.loading=!0,Object(c.b)(this.$store.state.token,this.data.contactName,this.data.contactPhone,this.data.contactEmail).then((function(a){t.loading=!1,t.$store.dispatch("setContact",{contactName:t.data.contactName,contactPhone:t.data.contactPhone,contactEmail:t.data.contactEmail}),t.$router.push({name:"Info"})})).catch((function(a){t.loading=!1,t.errorAction(a)})))}},computed:{}},v=(i(460),i(115)),f=Object(v.a)(u,e,[],!1,null,"314adf63",null);f.options.__file="src/vue/pages/Contact.vue";a.default=f.exports}}]);