(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{501:function(e,t,a){},502:function(e,t,a){},503:function(e,t,a){"use strict";a(501)},504:function(e,t,a){"use strict";a(502)},505:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{staticClass:"bar",attrs:{app:"","elevate-on-scroll":""}},[a("v-container",{staticClass:"pa-0 fill-height"},[a("div",{staticClass:"mr-10 d-flex flex-md-column align-center"},[a("img",{staticClass:"logo",attrs:{src:e.logo}})]),e._v(" "),a("Menu",{staticClass:"d-none d-md-flex"}),e._v(" "),a("v-spacer"),e._v(" "),a("Logout",{staticClass:"d-none d-md-flex"}),e._v(" "),a("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(t){e.$refs.sidebar.isOpen=!e.$refs.sidebar.isOpen}}})],1)],1),e._v(" "),a("Sidebar",{ref:"sidebar",scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"d-flex pa-4"},[a("Logout"),e._v(" "),a("v-spacer"),e._v(" "),a("v-icon",{on:{click:function(t){e.$refs.sidebar.isOpen=!1}}},[e._v("\n          mdi-close\n        ")])],1),e._v(" "),a("Menu",{staticClass:"d-flex flex-column"})]},proxy:!0}])})],1)};s._withStripped=!0;var n=function(){var e=this.$createElement;return(this._self._c||e)("v-btn",{staticClass:"cyan white--text",attrs:{depressed:""},on:{click:this.logout_click}},[this._v("登出")])};n._withStripped=!0;var o={mixins:[a(166).a],components:{},data:function(){return{}},mounted:function(){},methods:{logout_click:function(){this.logout()}},computed:{}},i=a(44),c=Object(i.a)(o,n,[],!1,null,"6ea3a2e6",null);c.options.__file="src/vue/pages/components/Logout.vue";var l=c.exports,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.$store.state.info&&e.$store.state.info.contactName&&e.$store.state.info.contactPhone&&e.$store.state.info.contactEmail?a("div",[a("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Info"},"active-class":"active"}},[e._v("資訊")]),e._v(" "),e.$store.state.info.displayPages&&e.$store.state.info.displayPages.reservation?a("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Reservation"},"active-class":"active"}},[e._v("\n    預約\n  ")]):e._e(),e._v(" "),e.$store.state.info.displayPages&&e.$store.state.info.displayPages.transfer?a("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Transfer"},"active-class":"active"}},[e._v("\n    移轉外縣市\n  ")]):e._e(),e._v(" "),e.$store.state.info.displayPages&&e.$store.state.info.displayPages.extension?a("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Extension"},"active-class":"active"}},[e._v("\n    展延\n  ")]):e._e(),e._v(" "),e.$store.state.info.displayPages&&e.$store.state.info.displayPages.otherExtension?a("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"OtherExtension"},"active-class":"active"}},[e._v("\n    其他展延\n  ")]):e._e()],1):e._e()};r._withStripped=!0;var m={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},u=(a(503),Object(i.a)(m,r,[],!1,null,"3111d13b",null));u.options.__file="src/vue/pages/components/Menu.vue";var d=u.exports,p=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-navigation-drawer",{attrs:{right:"",app:"",temporary:""},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[e._t("content")],2)};p._withStripped=!0;var v={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var e=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){e.isOpen&&e.$vuetify.breakpoint.mdAndUp&&(e.isOpen=!1)}),300)}},computed:{}},f=Object(i.a)(v,p,[],!1,null,"2e4a0ea0",null);f.options.__file="src/vue/pages/components/Sidebar.vue";var _=f.exports,b=a(506),h={components:{Logout:l,Menu:d,Sidebar:_},data:function(){return{logo:b.a}},mounted:function(){},methods:{},computed:{}},g=(a(504),Object(i.a)(h,s,[],!1,null,"023c3669",null));g.options.__file="src/vue/pages/components/Header.vue";t.a=g.exports},516:function(e,t,a){"use strict";(function(e){var s=a(511),n=a(166),o=a(505),i=a(167);t.a={mixins:[n.a],components:{Header:o.a,TableItems:s.a},data:function(){var t=this;return{infoLoading:!1,data:{},items:{casenum:{label:"公文號"},carnum:{label:"車牌號"},username:{label:"姓名"},idcard:{label:"身分證/公司行號"},address:{label:"地址"},city:{label:"移轉縣市"},reDateRange:{label:"可預約日期範圍"},exDateRange:{label:"可展延日期範圍"},reSite:{label:"預約檢測站點"},reDateTimeRange:{label:"預約日期_預約時段"},exSite:{label:"展延檢測站點"},exDateTimeRange:{label:"展延日期_展延時段"},postponedReason:{label:"延期原因",type:"textarea-readonly"},postponedYM:{label:"延期年月"},postponedProve:{label:"延期證明",type:"button",buttonText:"檢視",click:function(a,s,n){t.$app_overlay.open("載入中..."),Object(i.f)(t.$store.state.token).then((function(a){t.$app_overlay.close();var s=e.from(a,"base64"),n=new Blob([s]),o=URL.createObjectURL(n);t.$app_imageViewer.open(o)})).catch((function(e){t.$app_overlay.close(),t.errorAction(e)}))}},result:{label:"檢測結果"},contactName:{label:"聯絡姓名"},contactPhone:{label:"聯絡電話"},contactEmail:{label:"聯絡電子信箱"},exReason:{label:"展延原因",type:"textarea-readonly"},exRequestStatus:{label:"展延申請狀態"},cityReason:{label:"移轉縣市原因",type:"textarea-readonly"},cityRequestStatus:{label:"移轉縣市申請狀態"},postponedRequestStatus:{label:"延期申請狀態"}},show:!1,typesetting:[{itemName:"casenum",class:"col-12 col-sm-6"},{itemName:"carnum",class:"col-12 col-sm-6"},{itemName:"username",class:"col-12 col-sm-6 col-md-3"},{itemName:"idcard",class:"col-12 col-sm-6 col-md-3"},{itemName:"address",class:"col-12 col-md-6"},{itemName:"reDateRange",class:"col-12 col-md-6"},{itemName:"exDateRange",class:"col-12 col-md-6"},{type:"tabs",tabs:{reservation:"預約",transfer:"移轉外縣市",extension:"展延",otherExtension:"其他展延"},tabsContent:{reservation:[{itemName:"reSite",class:"col-12"},{itemName:"reDateTimeRange",class:"col-12"}],transfer:[{itemName:"city",class:"col-12"},{itemName:"cityReason",class:"col-12"},{itemName:"cityRequestStatus",class:"col-12"}],extension:[{itemName:"exSite",class:"col-12"},{itemName:"exDateTimeRange",class:"col-12"},{itemName:"exReason",class:"col-12"},{itemName:"exRequestStatus",class:"col-12"}],otherExtension:[{itemName:"postponedYM",class:"col-12"},{itemName:"postponedProve",class:"col-12"},{itemName:"postponedReason",class:"col-12"},{itemName:"postponedRequestStatus",class:"col-12"}]}},{itemName:"result",class:"col-12"},{itemName:"contactName",class:"col-12 col-sm-6 col-md-3"},{itemName:"contactPhone",class:"col-12 col-sm-6 col-md-3"},{itemName:"contactEmail",class:"col-12 col-md-6"}]}},mounted:function(){var e=this;this.$store.state.info?this.init(this.$store.state.info):(this.infoLoading=!0,Object(i.l)(this.$store.state.token).then((function(t){e.infoLoading=!1,e.$store.dispatch("setInfo",t),e.$store.state.isInfo=!0,e.init(t)})).catch((function(t){e.infoLoading=!1,e.errorAction(t)})))},methods:{init:function(e){e.contactName&&e.contactPhone&&e.contactEmail?this.data=e:this.$router.push({name:"Contact"})}},computed:{}}}).call(this,a(525).Buffer)},526:function(e,t,a){},537:function(e,t,a){"use strict";a(526)},544:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"content"},[e.infoLoading?e._e():[a("Header"),e._v(" "),a("v-main",{staticClass:"main"},[a("v-container",{staticClass:"d-flex justify-center"},[a("v-card",{staticClass:"max-w-900 w-100",attrs:{flat:""}},[a("v-card-title",{staticClass:"pa-0 pa-md-2 flex-column justify-center"},[a("div",{staticClass:"text-h6 my-4"},[e._v("檢測資訊")])]),e._v(" "),a("v-card-text",[a("TableItems",{attrs:{data:e.data,items:e.items,typesetting:e.typesetting}})],1)],1)],1)],1)],e._v(" "),a("v-overlay",{attrs:{value:e.infoLoading}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[e._v("載入資訊中...")])],1)],2)};s._withStripped=!0;var n=a(516).a,o=(a(537),a(44)),i=Object(o.a)(n,s,[],!1,null,"771daf7b",null);i.options.__file="src/vue/pages/Info.vue";t.default=i.exports}}]);