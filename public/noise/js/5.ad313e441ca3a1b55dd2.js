(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{498:function(t,e,s){},499:function(t,e,s){},500:function(t,e,s){"use strict";e.a=s.p+"img/logo.996f07b8ca77ffb8cfc3df411c585003.png"},501:function(t,e,s){"use strict";s(498)},502:function(t,e,s){"use strict";s(499)},503:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app-bar",{staticClass:"bar",attrs:{app:"","elevate-on-scroll":""}},[s("v-container",{staticClass:"pa-0 fill-height"},[s("div",{staticClass:"mr-10 d-flex flex-md-column align-center"},[s("img",{staticClass:"logo",attrs:{src:t.logo}})]),t._v(" "),s("Menu",{staticClass:"d-none d-md-flex"}),t._v(" "),s("v-spacer"),t._v(" "),s("Logout",{staticClass:"d-none d-md-flex"}),t._v(" "),s("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(e){t.$refs.sidebar.isOpen=!t.$refs.sidebar.isOpen}}})],1)],1),t._v(" "),s("Sidebar",{ref:"sidebar",scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"d-flex pa-4"},[s("Logout"),t._v(" "),s("v-spacer"),t._v(" "),s("v-icon",{on:{click:function(e){t.$refs.sidebar.isOpen=!1}}},[t._v("\n          mdi-close\n        ")])],1),t._v(" "),s("Menu",{staticClass:"d-flex flex-column"})]},proxy:!0}])})],1)};n._withStripped=!0;var i=function(){var t=this.$createElement;return(this._self._c||t)("v-btn",{staticClass:"cyan white--text",attrs:{depressed:""},on:{click:this.logout_click}},[this._v("登出")])};i._withStripped=!0;var a={mixins:[s(165).a],components:{},data:function(){return{}},mounted:function(){},methods:{logout_click:function(){this.logout()}},computed:{}},o=s(52),c=Object(o.a)(a,i,[],!1,null,"6ea3a2e6",null);c.options.__file="src/vue/pages/components/Logout.vue";var r=c.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$store.state.info&&t.$store.state.info.contactName&&t.$store.state.info.contactPhone&&t.$store.state.info.contactEmail?s("div",[s("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Info"},"active-class":"active"}},[t._v("資訊")]),t._v(" "),t.$store.state.info.displayPages&&t.$store.state.info.displayPages.reservation?s("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Reservation"},"active-class":"active"}},[t._v("\n    預約\n  ")]):t._e(),t._v(" "),t.$store.state.info.displayPages&&t.$store.state.info.displayPages.extension?s("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Extension"},"active-class":"active"}},[t._v("\n    展延\n  ")]):t._e(),t._v(" "),t.$store.state.info.displayPages&&t.$store.state.info.displayPages.transfer?s("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Transfer"},"active-class":"active"}},[t._v("\n    移轉外縣市\n  ")]):t._e()],1):t._e()};v._withStripped=!0;var l={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},d=(s(501),Object(o.a)(l,v,[],!1,null,"3111d13b",null));d.options.__file="src/vue/pages/components/Menu.vue";var f=d.exports,u=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{attrs:{right:"",app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._t("content")],2)};u._withStripped=!0;var p={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var t=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){t.isOpen&&t.$vuetify.breakpoint.mdAndUp&&(t.isOpen=!1)}),300)}},computed:{}},_=Object(o.a)(p,u,[],!1,null,"2e4a0ea0",null);_.options.__file="src/vue/pages/components/Sidebar.vue";var m=_.exports,h=s(500),g={components:{Logout:r,Menu:f,Sidebar:m},data:function(){return{logo:h.a}},mounted:function(){},methods:{},computed:{}},x=(s(502),Object(o.a)(g,n,[],!1,null,"023c3669",null));x.options.__file="src/vue/pages/components/Header.vue";e.a=x.exports},517:function(t,e,s){},529:function(t,e,s){"use strict";s(517)},535:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-sheet",{staticClass:"content"},[t.infoLoading?t._e():[s("Header"),t._v(" "),s("v-main",{staticClass:"main"},[s("v-container",[s("div",{staticClass:"d-flex justify-center ma-4"},[t._v("檢測資訊")]),t._v(" "),s("div",{staticClass:"d-flex justify-center"},[t.infoLoading?s("div",{staticClass:"d-flex justify-center text-h6"},[t._v("載入中...")]):s("v-card",{staticClass:"pa-4",attrs:{flat:""}},[s("v-card-text",[s("div",{staticClass:"text-h6 ma-2"},[t._v("公文號："+t._s(t.info.casenum))]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("車牌號："+t._s(t.info.carnum))]),t._v(" "),s("v-divider",{staticClass:"my-4"}),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("可預約日期範圍："+t._s(t.info.reDateRange))]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("預約檢測站點："+t._s(t.info.resite))]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("預約日期_預約時段："+t._s(t.info.reDateTimeRange))]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("可展延日期範圍："+t._s(t.info.exDateRange))]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("展延檢測站點："+t._s(t.info.exsite))]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("展延日期_展延時段："+t._s(t.info.exDateTimeRange))]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("延期原因："+t._s(t.info.postponedContent))]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("延期年月："+t._s(t.info.postponedYM))]),t._v(" "),s("v-divider",{staticClass:"my-4"}),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("檢測結果："+t._s(t.info.result))])],1)],1)],1)])],1)],t._v(" "),s("v-overlay",{attrs:{value:t.infoLoading}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[t._v("載入資訊中...")])],1)],2)};n._withStripped=!0;var i=s(503),a=s(166),o={components:{Header:i.a},data:function(){return{info:{},infoLoading:!1}},mounted:function(){var t=this;this.$store.state.info?this.init(this.$store.state.info):(this.infoLoading=!0,Object(a.j)(this.$store.state.token).then((function(e){t.infoLoading=!1,t.$store.dispatch("setInfo",e),t.$store.state.isInfo=!0,t.init(e)})).catch((function(e){t.infoLoading=!1,t.errorAction(e)})))},methods:{init:function(t){t.contactName&&t.contactPhone&&t.contactEmail||this.$router.push({name:"Contact"}),this.info=t}},computed:{}},c=(s(529),s(52)),r=Object(c.a)(o,n,[],!1,null,"771daf7b",null);r.options.__file="src/vue/pages/Info.vue";e.default=r.exports}}]);