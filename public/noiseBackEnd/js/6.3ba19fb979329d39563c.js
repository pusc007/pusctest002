(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{501:function(e,t,a){},502:function(e,t,a){},506:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[e._l(e.typesetting,(function(t,n){return[t.type?["divider"===t.type?[a("v-divider",{key:"item"+n+"_divider",staticClass:"pa-0 my-4 col-12"})]:"tabs"===t.type?[a("div",{key:"item"+n+"_tabs",staticClass:"pa-1 col-12"},[a("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:"","show-arrows":""},model:{value:t.tab,callback:function(a){e.$set(t,"tab",a)},expression:"item.tab"}},e._l(t.tabs,(function(t,n){return a("v-tab",{key:n},[e._v("\n              "+e._s(t)+"\n            ")])})),1),e._v(" "),a("v-tabs-items",{staticClass:"pa-6",model:{value:t.tab,callback:function(a){e.$set(t,"tab",a)},expression:"item.tab"}},e._l(t.tabs,(function(n,r){return a("v-tab-item",{key:r},[a("div",{staticClass:"row"},[e._l(t.tabsContent[r],(function(t,n){return[e.items[t.itemName]?[a("TableItem",{key:n,staticClass:"pa-1",class:t.class,attrs:{data:e.data,items:e.items,name:t.itemName,item:e.items[t.itemName]}})]:e._e()]}))],2)])})),1)],1)]:e._e()]:e.items[t.itemName]?[a("TableItem",{key:"item"+n,staticClass:"pa-1",class:t.class,attrs:{data:e.data,items:e.items,name:t.itemName,item:e.items[t.itemName]}})]:e._e()]}))],2)};n._withStripped=!0;var r={components:{TableItem:a(515).a},props:{data:{type:Object,default:function(){return{}}},items:{type:Object,default:function(){return{}}},typesetting:{type:Array,default:function(){return[]}}},data:function(){return{}},mounted:function(){},methods:{},computed:{}},i=a(53),s=Object(i.a)(r,n,[],!1,null,"b4a1920e",null);s.options.__file="src/vue/components/TableItems.vue";t.a=s.exports},507:function(e,t,a){"use strict";a(501)},508:function(e,t,a){"use strict";a(502)},510:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{staticClass:"bar",attrs:{app:"","elevate-on-scroll":""}},[a("v-container",{staticClass:"pa-0 fill-height"},[a("div",{staticClass:"mr-10 d-flex flex-md-column align-center"},[a("img",{staticClass:"logo",attrs:{src:e.logo}})]),e._v(" "),a("Menu",{staticClass:"d-none d-md-flex"}),e._v(" "),a("v-spacer"),e._v(" "),a("Logout",{staticClass:"d-none d-md-flex"}),e._v(" "),a("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(t){e.$refs.sidebar.isOpen=!e.$refs.sidebar.isOpen}}})],1)],1),e._v(" "),a("Sidebar",{ref:"sidebar",scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"d-flex pa-4"},[a("Logout"),e._v(" "),a("v-spacer"),e._v(" "),a("v-icon",{on:{click:function(t){e.$refs.sidebar.isOpen=!1}}},[e._v("\n          mdi-close\n        ")])],1),e._v(" "),a("Menu",{staticClass:"d-flex flex-column"})]},proxy:!0}])})],1)};n._withStripped=!0;var r=function(){var e=this.$createElement;return(this._self._c||e)("v-btn",{staticClass:"cyan white--text",attrs:{depressed:""},on:{click:this.logout_click}},[this._v("登出")])};r._withStripped=!0;var i={mixins:[a(166).a],components:{},data:function(){return{}},mounted:function(){},methods:{logout_click:function(){this.logout()}},computed:{}},s=a(53),o=Object(s.a)(i,r,[],!1,null,"6ea3a2e6",null);o.options.__file="src/vue/pages/components/Logout.vue";var c=o.exports,l=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"CaseInquiry"},"active-class":"active"}},[this._v("案件查詢")]),this._v(" "),t("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Report"},"active-class":"active"}},[this._v("報表")]),this._v(" "),t("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"DetectSite"},"active-class":"active"}},[this._v("檢測站點")]),this._v(" "),t("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"DetectDate"},"active-class":"active"}},[this._v("檢測日期")])],1)};l._withStripped=!0;var u={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},m=(a(507),Object(s.a)(u,l,[],!1,null,"3111d13b",null));m.options.__file="src/vue/pages/components/Menu.vue";var d=m.exports,p=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-navigation-drawer",{attrs:{right:"",app:"",temporary:""},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[e._t("content")],2)};p._withStripped=!0;var v={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var e=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){e.isOpen&&e.$vuetify.breakpoint.mdAndUp&&(e.isOpen=!1)}),300)}},computed:{}},f=Object(s.a)(v,p,[],!1,null,"2e4a0ea0",null);f.options.__file="src/vue/pages/components/Sidebar.vue";var h=f.exports,g=a(511),b={components:{Logout:c,Menu:d,Sidebar:h},data:function(){return{logo:g.a}},mounted:function(){},methods:{},computed:{}},y=(a(508),Object(s.a)(b,n,[],!1,null,"023c3669",null));y.options.__file="src/vue/pages/components/Header.vue";t.a=y.exports},514:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pa-2 d-flex align-center"},[a("v-spacer"),e._v(" "),a("div",{staticClass:"text-caption mx-1"},[e._v("每頁行數:")]),e._v(" "),a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"text-caption pa-0",attrs:{text:""}},"v-btn",r,!1),n),[e._v("\n        "+e._s(e.itemsPerPage)+"\n        "),a("v-icon",[e._v("mdi-chevron-down")])],1)]}}])},[e._v(" "),a("v-list",e._l(e.itemsPerPageArray,(function(t,n){return a("v-list-item",{key:n,on:{click:function(a){return e.updateItemsPerPage(t)}}},[a("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1),e._v(" "),a("div",{staticClass:"text-caption mx-1"},[e._v("\n    "+e._s(Math.min((e.page-1)*e.itemsPerPage+1,e.length))+"-"+e._s(Math.min(e.page*e.itemsPerPage,e.length))+"\n    of\n    "+e._s(e.length)+"\n  ")]),e._v(" "),a("v-btn",{attrs:{depressed:"",small:"",text:""},on:{click:e.prevPage}},[a("v-icon",[e._v("mdi-chevron-left")])],1),e._v(" "),a("v-btn",{attrs:{depressed:"",small:"",text:""},on:{click:e.nextPage}},[a("v-icon",[e._v("mdi-chevron-right")])],1)],1)};n._withStripped=!0;var r={components:{},props:{length:{type:Number,default:0},page:{type:Number,default:1},pageCount:{type:Number,default:0},itemsPerPage:{type:Number,default:15},itemsPerPageArray:{type:Array,default:function(){return[5,10,15,30,50]}}},data:function(){return{}},mounted:function(){},methods:{updateItemsPerPage:function(e){this.$emit("update:itemsPerPage",e)},prevPage:function(){this.page-1>=1&&this.$emit("update:page",this.page-1)},nextPage:function(){this.page+1<=this.pageCount&&this.$emit("update:page",this.page+1)}},computed:{}},i=a(53),s=Object(i.a)(r,n,[],!1,null,"4c8483fe",null);s.options.__file="src/vue/components/Pagination.vue";t.a=s.exports},517:function(e,t,a){"use strict";(function(e){var n=a(512),r=a.n(n),i=a(572),s=a.n(i),o=a(573),c=a.n(o),l=a(71),u=a.n(l),m=a(510),d=a(514),p=a(584),v=a(585),f=a(524),h=a(525),g=a(586),b=a(167),y=a(166),_=a(504);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a={mixins:[y.a],components:{Header:m.a,Pagination:d.a,ReportNewItem:p.a,ReportEditItem:v.a,DatePicker:f.a,Select:h.a},data:function(){return{page:1,itemsPerPage:15,importPage:1,importItemsPerPage:15,dateStart:(new Date).toISOString().substr(0,10),dateEnd:(new Date).toISOString().substr(0,10),stateValue:"全部",stateList:[{text:"全部",key:"all"},{text:"預約",key:"reserv"},{text:"展延",key:"extend"}],importBool:!1,templateHeaders:{base:[{text:"公文號",value:"casenum",type:String,validation:{required:_.e},errorMessages:function(e){if(!e.required)return"".concat(this.text,"不能空白")}},{text:"車牌號",value:"carnum",type:String,validation:{required:_.e},errorMessages:function(e){if(!e.required)return"".concat(this.text,"不能空白")}},{text:"姓名",value:"username",type:String,validation:{required:_.e},errorMessages:function(e){if(!e.required)return"".concat(this.text,"不能空白")}},{text:"身分證/公司行號",value:"idcard",type:String,validation:{required:_.e},errorMessages:function(e){if(!e.required)return"".concat(this.text,"不能空白")}},{text:"地址",value:"address",type:String,validation:{required:_.e},errorMessages:function(e){if(!e.required)return"".concat(this.text,"不能空白")}},{text:"移轉縣市",value:"city",type:String},{text:"可預約日期範圍",value:"reDateRange",class:"min-w-190",type:String,validation:{required:_.e,dateRangeFormat:_.a},errorMessages:function(e){return e.required?e.dateRangeFormat?void 0:"".concat(this.text,"格式錯誤 YYYY-MM-DD~YYYY-MM-DD"):"".concat(this.text,"不能空白")}},{text:"預約檢測站點",value:"resite",type:String},{text:"預約日期_預約時段",value:"reDateTimeRange",class:"min-w-190",type:String,validation:{dateTimeRangeFormat:_.b},errorMessages:function(e){if(!e.dateTimeRangeFormat)return"".concat(this.text,"格式錯誤 YYYY-MM-DD_hh:mm~hh:mm")}},{text:"可展延日期範圍",value:"exDateRange",class:"min-w-190",type:String,validation:{required:_.e,dateRangeFormat:_.a},errorMessages:function(e){return e.required?e.dateRangeFormat?void 0:"".concat(this.text,"格式錯誤 YYYY-MM-DD~YYYY-MM-DD"):"".concat(this.text,"不能空白")}},{text:"展延檢測站點",value:"exsite",type:String},{text:"展延日期_展延時段",value:"exDateTimeRange",class:"min-w-190",type:String,validation:{dateTimeRangeFormat:_.b},errorMessages:function(e){if(!e.dateTimeRangeFormat)return"".concat(this.text,"格式錯誤 YYYY-MM-DD_hh:mm~hh:mm")}},{text:"延期原因",value:"postponedContent",type:String},{text:"延期年月",value:"postponedYM",type:String,validation:{monthFormat:_.d},errorMessages:function(e){if(!e.monthFormat)return"".concat(this.text,"格式錯誤 YYYY-MM")}},{text:"延期證明",value:"postponedProve",type:String},{text:"檢測結果",value:"result",type:String},{text:"聯絡姓名",value:"contactName",type:String},{text:"聯絡電話",value:"contactPhone",type:String},{text:"聯絡電子信箱",value:"contactEmail",type:String,validation:{emailFormat:_.c},errorMessages:function(e){if(!e.emailFormat)return"".concat(this.text,'"格式錯誤 XXX@XXX.XXX')}},{text:"顯示頁面",value:"displayPages",type:String}],table:[{text:"動作",value:"actions",sortable:!1}],import:[{text:"回饋訊息",value:"resMessage"}]},items:[],importItems:[],dataLoading:!1,saveBool:!1,selectItems:[],displayPagesItems:[{value:"transfer",text:"移轉外縣市"},{value:"reservation",text:"預約"},{value:"extension",text:"展延"},{value:"otherExtension",text:"其他展延"}]}},mounted:function(){this.updateInquire()},methods:{comboboxTranslation:function(e,t){if(t){var a=t.split(",");return e.filter((function(e){return a.includes(e.value)})).map((function(e){return e.text})).toString()}},refresh:function(){this.updateInquire()},postponedProve_click:function(t){var a=this;this.$app_overlay.open("載入中..."),Object(b.j)(this.$store.state.token,t).then((function(t){a.$app_overlay.close();var n=e.from(t,"base64"),r=new Blob([n]),i=URL.createObjectURL(r);a.$app_imageViewer.open(i)})).catch((function(e){a.$app_overlay.close(),a.errorAction(e)}))},importItemClass:function(e){return e.resMessage?"error":""},updateInquire:function(){var e=this;if(!this.dataLoading){this.dataLoading=!0;var t=this.stateList.find((function(t){return t.text===e.stateValue}));Object(b.r)(this.$store.state.token,new Date(this.dateStart),new Date(this.dateEnd),t.key).then((function(t){e.dataLoading=!1,e.items=t})).catch((function(t){e.dataLoading=!1,e.errorAction(t)}))}},addItem:function(){this.$refs.newItem.reset(),this.$refs.newItem.show=!0},editItem:function(e){this.$refs.editItem.reset(),this.$refs.editItem.put(e),this.$refs.editItem.show=!0},deleteItems:function(){var e=this,t=this.selectItems.map((function(e){return e.id}));this.$app_confirm.run("確定刪除?",(function(){e.$app_overlay.open("執行中..."),Object(b.i)(e.$store.state.token,t).then((function(){e.$app_overlay.close(),e.selectItems=[],e.updateInquire()})).catch((function(t){e.$app_overlay.close(),e.errorAction(t)}))}),(function(){}))},deleteItem:function(e){var t=this;this.$app_confirm.run("確定刪除?",(function(){t.$app_overlay.open("執行中..."),Object(b.h)(t.$store.state.token,e.id).then((function(){t.$app_overlay.close(),t.updateInquire()})).catch((function(e){t.$app_overlay.close(),t.errorAction(e)}))}),(function(){}))},reportNewItem_save:function(e){var t=this;this.$app_overlay.open("執行中..."),Object(b.d)(this.$store.state.token,e).then((function(){t.$app_overlay.close(),t.updateInquire()})).catch((function(e){t.$app_overlay.close(),t.$refs.newItem.show=!0,t.errorAction(e)}))},reportEditItem_save:function(e,t,a){var n=this;this.$app_overlay.open("執行中..."),!!t.redate^!!t.retimeRange&&(t=$($({},t),{},{redate:a.redate,retimeRange:a.retimeRange})),!!t.exdate^!!t.extimeRange&&(t=$($({},t),{},{exdate:a.exdate,extimeRange:a.extimeRange})),Object(b.m)(this.$store.state.token,e,t).then((function(){n.$app_overlay.close(),n.updateInquire()})).catch((function(e){n.$app_overlay.close(),n.$refs.editItem.show=!0,n.errorAction(e)}))},dateStart_change:function(){this.updateInquire()},dateEnd_change:function(){this.updateInquire()},state_change:function(){this.updateInquire()},itemImport_click:function(){var e=this;return c()(s.a.mark((function t(){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.b)();case 2:a=t.sent,n=e.templateHeaders.base;try{r=Object(g.d)(n,a),e.saveBool=r.every((function(e){return!e.resMessage})),e.importItems=r,e.importBool=!0}catch(e){alert(e.message)}case 5:case"end":return t.stop()}}),t)})))()},itemExport_click:function(){Object(g.c)(Object(g.a)(this.templateHeaders.base,this.items),"資料.xlsx")},cancelItems:function(){this.importBool=!1,this.importItems=[]},saveItems:function(){var e=this;this.importBool=!1,this.$app_overlay.open("執行中..."),Object(b.n)(this.$store.state.token,this.importItems).then((function(){e.$app_overlay.close(),e.importItems=[],e.updateInquire()})).catch((function(t){e.$app_overlay.close(),e.importBool=!0,e.errorAction(t)}))},inquire_click:function(){this.updateInquire()}},computed:{headers:function(){return[].concat(r()(this.templateHeaders.base.filter((function(e){var t;return null===(t=e.display)||void 0===t||t}))),r()(this.templateHeaders.table.filter((function(e){var t;return null===(t=e.display)||void 0===t||t}))))},mainHeaders:function(){return this.saveBool?r()(this.templateHeaders.base.filter((function(e){var t;return null===(t=e.display)||void 0===t||t}))):[].concat(r()(this.templateHeaders.import.filter((function(e){var t;return null===(t=e.display)||void 0===t||t}))),r()(this.templateHeaders.base.filter((function(e){var t;return null===(t=e.display)||void 0===t||t}))))}}}}).call(this,a(509).Buffer)},522:function(e,t,a){"use strict";(function(e){var n=a(71),r=a.n(n),i=a(500),s=a(506),o=a(167),c=a(43),l=a(504),u=a(166);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a={mixins:[u.a,i.validationMixin],components:{TableItems:s.a},validations:{data:{casenum:{required:l.e},username:{required:l.e},idcard:{required:l.e},carnum:{required:l.e},address:{required:l.e},city:{},resite:{},exsite:{},reDateRange:{required:l.e,dateRangeFormat:l.a},reDateTimeRange:{dateTimeRangeFormat:l.b},exDateRange:{required:l.e,dateRangeFormat:l.a},exDateTimeRange:{dateTimeRangeFormat:l.b},postponedContent:{},postponedYM:{monthFormat:l.d},postponedProve:{},result:{},contactName:{},contactPhone:{},contactEmail:{emailFormat:l.c},displayPages:{}}},data:function(){var t=this;return{data:{},items:{casenum:{label:"公文號",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},carnum:{label:"車牌號",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},username:{label:"姓名",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},idcard:{label:"身分證/公司行號",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},address:{label:"地址",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},city:{label:"移轉縣市",type:"select",list:[],loading:!1,promise:null,click:function(e,a,n){var r=a[n];r.promise&&(r.promise.cancel(),r.promise=null),r.list=[],r.loading=!0,r.promise=Object(o.a)(t.$store.state.token),r.promise.then((function(e){r.loading=!1,r.list=e})).catch((function(e){r.loading=!1,t.errorAction(e)}))},change:function(e,a,n){t.data=d(d({},e),{},{site:""})}},reDateRange:{label:"可預約日期範圍",type:"dateRange-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?t.$v.data[e].dateRangeFormat?void 0:"格式錯誤 YYYY-MM-DD~YYYY-MM-DD":"請填寫這個欄位。"}},exDateRange:{label:"可展延日期範圍",type:"dateRange-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?t.$v.data[e].dateRangeFormat?void 0:"格式錯誤 YYYY-MM-DD~YYYY-MM-DD":"請填寫這個欄位。"}},resite:{label:"預約檢測站點",type:"select",list:[],loading:!1,promise:null,click:function(e,a,n){var r=a[n];r.promise&&(r.promise.cancel(),r.promise=null),r.list=[],r.loading=!0,r.promise=Object(o.s)(t.$store.state.token),r.promise.then((function(e){r.loading=!1,r.list=e.map((function(e){return{id:e.id,text:e.sitename}}))})).catch((function(e){r.loading=!1,t.errorAction(e)}))}},reDateTimeRange:{label:"預約日期_預約時段",type:"dateTimeRange-select",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].dateTimeRangeFormat?void 0:"格式錯誤 YYYY-MM-DD_hh:mm~hh:mm"}},exsite:{label:"展延檢測站點",type:"select",list:[],loading:!1,promise:null,click:function(e,a,n){var r=a[n];r.promise&&(r.promise.cancel(),r.promise=null),r.list=[],r.loading=!0,r.promise=Object(o.s)(t.$store.state.token),r.promise.then((function(e){r.loading=!1,r.list=e.map((function(e){return{id:e.id,text:e.sitename}}))})).catch((function(e){r.loading=!1,t.errorAction(e)}))}},exDateTimeRange:{label:"展延日期_展延時段",type:"dateTimeRange-select",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].dateTimeRangeFormat?void 0:"格式錯誤 YYYY-MM-DD_hh:mm~hh:mm"}},postponedContent:{label:"延期原因"},postponedYM:{label:"延期年月",type:"month-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].monthFormat?void 0:"格式錯誤 YYYY-MM"}},postponedProve:{label:"延期證明",type:"file-input",accept:".jpg",fileshow:function(a,n,r){t.$app_overlay.open("載入中...");var i=a[r];api_download(t.$store.state.token,i).then((function(a){t.$app_overlay.close();var n=e.from(a,"base64"),r=new Blob([n]),i=URL.createObjectURL(r);t.$app_imageViewer.open(i)})).catch((function(e){t.$app_overlay.close(),t.errorAction(e)}))}},result:{label:"檢測結果",type:"autocomplete",items:["通過","未通過"]},contactName:{label:"聯絡姓名"},contactPhone:{label:"聯絡電話"},contactEmail:{label:"聯絡電子信箱",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].emailFormat?void 0:"格式錯誤 XXX@XXX.XXX"}},displayPages:{label:"顯示頁面",type:"combobox",items:[{value:"transfer",text:"移轉外縣市"},{value:"reservation",text:"預約"},{value:"extension",text:"展延"},{value:"otherExtension",text:"其他展延"}]}},show:!1,typesetting:[{itemName:"casenum",class:"col-12 col-sm-6"},{itemName:"carnum",class:"col-12 col-sm-6"},{itemName:"username",class:"col-12 col-sm-6 col-md-3"},{itemName:"idcard",class:"col-12 col-sm-6 col-md-3"},{itemName:"address",class:"col-12 col-md-6"},{itemName:"reDateRange",class:"col-12 col-md-6"},{itemName:"exDateRange",class:"col-12 col-md-6"},{itemName:"displayPages",class:"col-12"},{type:"tabs",tabs:{transfer:"移轉外縣市",reservation:"預約",extension:"展延",otherExtension:"其他展延"},tabsContent:{transfer:[{itemName:"city",class:"col-12"}],reservation:[{itemName:"resite",class:"col-12"},{itemName:"reDateTimeRange",class:"col-12"}],extension:[{itemName:"exsite",class:"col-12"},{itemName:"exDateTimeRange",class:"col-12"}],otherExtension:[{itemName:"postponedContent",class:"col-12"},{itemName:"postponedYM",class:"col-12"},{itemName:"postponedProve",class:"col-12"}]}},{itemName:"result",class:"col-12"},{itemName:"contactName",class:"col-12 col-sm-6 col-md-3"},{itemName:"contactPhone",class:"col-12 col-sm-6 col-md-3"},{itemName:"contactEmail",class:"col-12 col-md-6"}]}},mounted:function(){},methods:{put:function(e){this.data=JSON.parse(JSON.stringify(e))},resetData:function(){this.data={}},reset:function(){this.$v.data.$reset(),this.resetData()},cancelItem:function(e){this.show=!1},saveItem:function(e){this.$v.data.$touch(),this.$v.data.$error||(this.$emit("save",Object(c.d)(this.items,this.data)),this.show=!1)}},computed:{}}}).call(this,a(509).Buffer)},523:function(e,t,a){"use strict";(function(e){var n=a(71),r=a.n(n),i=a(500),s=a(506),o=a(167),c=a(43),l=a(504),u=a(166);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a={mixins:[u.a,i.validationMixin],components:{TableItems:s.a},validations:{data:{casenum:{required:l.e},username:{required:l.e},idcard:{required:l.e},carnum:{required:l.e},address:{required:l.e},city:{},resite:{},exsite:{},reDateRange:{required:l.e,dateRangeFormat:l.a},reDateTimeRange:{dateTimeRangeFormat:l.b},exDateRange:{required:l.e,dateRangeFormat:l.a},exDateTimeRange:{dateTimeRangeFormat:l.b},postponedContent:{},postponedYM:{monthFormat:l.d},postponedProve:{},result:{},contactName:{},contactPhone:{},contactEmail:{emailFormat:l.c},displayPages:{}}},data:function(){var t=this;return{originalData:{},data:{},items:{casenum:{label:"公文號",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},carnum:{label:"車牌號",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},username:{label:"姓名"},idcard:{label:"身分證/公司行號",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},address:{label:"地址"},city:{label:"移轉縣市",type:"select",list:[],loading:!1,promise:null,click:function(e,a,n){var r=a[n];r.promise&&(r.promise.cancel(),r.promise=null),r.list=[],r.loading=!0,r.promise=Object(o.a)(t.$store.state.token),r.promise.then((function(e){r.loading=!1,r.list=e})).catch((function(e){r.loading=!1,t.errorAction(e)}))},change:function(e,a,n){t.data=d(d({},e),{},{site:""})}},reDateRange:{label:"可預約日期範圍",type:"dateRange-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?t.$v.data[e].dateRangeFormat?void 0:"格式錯誤 YYYY-MM-DD~YYYY-MM-DD":"請填寫這個欄位。"}},exDateRange:{label:"可展延日期範圍",type:"dateRange-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?t.$v.data[e].dateRangeFormat?void 0:"格式錯誤 YYYY-MM-DD~YYYY-MM-DD":"請填寫這個欄位。"}},resite:{label:"預約檢測站點",type:"select",list:[],loading:!1,promise:null,click:function(e,a,n){var r=a[n];r.promise&&(r.promise.cancel(),r.promise=null),r.list=[],r.loading=!0,r.promise=Object(o.s)(t.$store.state.token),r.promise.then((function(e){r.loading=!1,r.list=e.map((function(e){return{id:e.id,text:e.sitename}}))})).catch((function(e){r.loading=!1,t.errorAction(e)}))}},reDateTimeRange:{label:"預約日期_預約時段",type:"dateTimeRange-select",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].dateTimeRangeFormat?void 0:"格式錯誤 YYYY-MM-DD_hh:mm~hh:mm"}},exsite:{label:"展延檢測站點",type:"select",list:[],loading:!1,promise:null,click:function(e,a,n){var r=a[n];r.promise&&(r.promise.cancel(),r.promise=null),r.list=[],r.loading=!0,r.promise=Object(o.s)(t.$store.state.token),r.promise.then((function(e){r.loading=!1,r.list=e.map((function(e){return{id:e.id,text:e.sitename}}))})).catch((function(e){r.loading=!1,t.errorAction(e)}))}},exDateTimeRange:{label:"展延日期_展延時段",type:"dateTimeRange-select",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].dateTimeRangeFormat?void 0:"格式錯誤 YYYY-MM-DD_hh:mm~hh:mm"}},postponedContent:{label:"延期原因"},postponedYM:{label:"延期年月",type:"month-picker",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].monthFormat?void 0:"格式錯誤 YYYY-MM"}},postponedProve:{label:"延期證明",type:"file-input",accept:".jpg",fileshow:function(a,n,r){t.$app_overlay.open("載入中...");var i=a[r];Object(o.j)(t.$store.state.token,i).then((function(a){t.$app_overlay.close();var n=e.from(a,"base64"),r=new Blob([n]),i=URL.createObjectURL(r);t.$app_imageViewer.open(i)})).catch((function(e){t.$app_overlay.close(),t.errorAction(e)}))}},result:{label:"檢測結果",type:"autocomplete",items:["通過","未通過"]},contactName:{label:"聯絡姓名"},contactPhone:{label:"聯絡電話"},contactEmail:{label:"聯絡電子信箱",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].emailFormat?void 0:"格式錯誤 XXX@XXX.XXX"}},displayPages:{label:"顯示頁面",type:"combobox",items:[{value:"transfer",text:"移轉外縣市"},{value:"reservation",text:"預約"},{value:"extension",text:"展延"},{value:"otherExtension",text:"其他展延"}]}},show:!1,typesetting:[{itemName:"casenum",class:"col-12 col-sm-6"},{itemName:"carnum",class:"col-12 col-sm-6"},{itemName:"username",class:"col-12 col-sm-6 col-md-3"},{itemName:"idcard",class:"col-12 col-sm-6 col-md-3"},{itemName:"address",class:"col-12 col-md-6"},{itemName:"reDateRange",class:"col-12 col-md-6"},{itemName:"exDateRange",class:"col-12 col-md-6"},{itemName:"displayPages",class:"col-12"},{type:"tabs",tabs:{transfer:"移轉外縣市",reservation:"預約",extension:"展延",otherExtension:"其他展延"},tabsContent:{transfer:[{itemName:"city",class:"col-12"}],reservation:[{itemName:"resite",class:"col-12"},{itemName:"reDateTimeRange",class:"col-12"}],extension:[{itemName:"exsite",class:"col-12"},{itemName:"exDateTimeRange",class:"col-12"}],otherExtension:[{itemName:"postponedContent",class:"col-12"},{itemName:"postponedYM",class:"col-12"},{itemName:"postponedProve",class:"col-12"}]}},{itemName:"result",class:"col-12"},{itemName:"contactName",class:"col-12 col-sm-6 col-md-3"},{itemName:"contactPhone",class:"col-12 col-sm-6 col-md-3"},{itemName:"contactEmail",class:"col-12 col-md-6"}]}},mounted:function(){},methods:{put:function(e){this.originalData=JSON.parse(JSON.stringify(e)),this.data=JSON.parse(JSON.stringify(e))},reset:function(){this.$v.data.$reset(),this.data={}},cancelItem:function(e){this.show=!1},saveItem:function(e){if(this.$v.data.$touch(),!this.$v.data.$error){var t=Object(c.c)(this.originalData,this.data);t?(this.$emit("save",this.originalData.id,Object(c.d)(this.items,t),Object(c.d)(this.items,this.data)),this.show=!1):this.show=!1}}},computed:{}}}).call(this,a(509).Buffer)},534:function(e,t){},535:function(e,t,a){},576:function(e,t){},577:function(e,t){},580:function(e,t,a){"use strict";a(535)},584:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"900px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center py-2"},[a("span",{staticClass:"headline text-h6"},[e._v("新增")])]),e._v(" "),a("v-card-text",[a("v-container",[a("TableItems",{attrs:{data:e.data,items:e.items,typesetting:e.typesetting}})],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.cancelItem(e.items)}}},[e._v("\n        取消\n      ")]),e._v(" "),a("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(t){return e.saveItem(e.items)}}},[e._v("\n        儲存\n      ")])],1)],1)],1)};n._withStripped=!0;var r=a(522).a,i=a(53),s=Object(i.a)(r,n,[],!1,null,"faf1205a",null);s.options.__file="src/vue/pages/components/ReportNewItem.vue";t.a=s.exports},585:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"900px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center py-2"},[a("span",{staticClass:"headline text-h6"},[e._v("修改")])]),e._v(" "),a("v-card-text",[a("v-container",[a("TableItems",{attrs:{data:e.data,items:e.items,typesetting:e.typesetting}})],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.cancelItem(e.items)}}},[e._v("\n        取消\n      ")]),e._v(" "),a("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(t){return e.saveItem(e.items)}}},[e._v("\n        儲存\n      ")])],1)],1)],1)};n._withStripped=!0;var r=a(523).a,i=a(53),s=Object(i.a)(r,n,[],!1,null,"1c18bb6d",null);s.options.__file="src/vue/pages/components/ReportEditItem.vue";t.a=s.exports},586:function(e,t,a){"use strict";a.d(t,"b",(function(){return y})),a.d(t,"d",(function(){return _})),a.d(t,"c",(function(){return x})),a.d(t,"a",(function(){return $}));var n=a(512),r=a.n(n),i=a(71),s=a.n(i),o=a(574),c=a.n(o),l=a(532),u=a.n(l),m=a(578),d=a.n(m),p=a(579),v=a.n(p),f=function(){function e(){if(d()(this,e),!(this instanceof e))return new e;this.SheetNames=[],this.Sheets={},this.wopts={bookType:"xlsx",bookSST:!1,type:"binary"}}return v()(e,[{key:"appendSheet",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sheet".concat(this.SheetNames.length+1);this.SheetNames=[].concat(r()(this.SheetNames),[t]),this.Sheets[t]=e}},{key:"toBlob",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.wopts;function t(e){for(var t=new ArrayBuffer(e.length),a=new Uint8Array(t),n=0;n!==e.length;++n)a[n]=255&e.charCodeAt(n);return t}var a=u.a.write(this,e),n=new Blob([t(a)],{type:"application/octet-stream"});return n}},{key:"isEmpty",value:function(){return!this.SheetNames.length&&JSON.stringify("{}"===this.Sheets)}}]),e}(),h=a(43);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=function(){return new Promise((function(e,t){var a=document.createElement("input");a.type="file",a.accept=".xls,.xlsx";a.addEventListener("change",(function(){var t=new FileReader;t.onload=function(){var a=u.a.read(t.result,{type:"array",cellDates:!0}),n=a.Sheets[a.SheetNames[0]];e(n)},t.readAsArrayBuffer(a.files[0])})),a.click()}))},_=function(e,t){for(var a=t["!ref"].split(":"),n=Object(h.a)(a[0].replace(/\d/g,"")),r=Object(h.a)(a[1].replace(/\d/g,"")),i=parseInt(a[1].replace(/^[A-Z]/g,"")),s=[],o=n;o<=r;o++)s.push(Object(h.b)(o));var c=s.map((function(a){return{w:a,header:e.find((function(e){var n;return e.text===(null===(n=t[a+"1"])||void 0===n?void 0:n.v)}))}})),l={};c.forEach((function(e){var a=e.header;if(a){l[e.w+"1"]=a.value;for(var n=2;n<=i;n++){var r=t[e.w+n],s="";if(r){if(a.type===String)s=String(r.v);else if(a.type===Number)s=Number(r.v);else if(a.type===Boolean)s=JSON.parse(String(r.v).toLowerCase());else if(a.type===Date){var o=r.v.constructor.name;s="Date"===o?Object(h.h)(r.v):"String"===o?r.v:String(r.v)}l[e.w+n]=s}else a.type===String?s="":a.type===Number?s=0:a.type===Boolean?s=!1:a.type===Date&&(s=null),l[e.w+n]=s}}}));for(var u=[],m=function(e){var t={};c.forEach((function(a){a.header&&(t[l[a.w+1]]=l[a.w+e])})),u.push(t)},d=2;d<=i;d++)m(d);return u.map((function(t){var a="";return e.some((function(e){var n=e.value,r=t[n];if(e.validation){var i={};for(var s in e.validation)i[s]=e.validation[s](r,t);if(e.errorMessages&&(a=e.errorMessages(i,t)))return!0}})),b(b({},t),{},{resMessage:a})}))},x=function(e,t){var a=u.a.utils.aoa_to_sheet(e),n=new f;n.appendSheet(a,"mySheet"),c.a.saveAs(n.toBlob(),t)},$=function(e,t){var a=e.map((function(e){return e.text})),n=t.map((function(t){return e.map((function(e){return t[e.value]}))}));return[a].concat(r()(n))}},593:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"content"},[a("Header"),e._v(" "),a("v-main",{staticClass:"main"},[a("v-container",[a("div",{staticClass:"d-flex justify-center justify-md-start my-2"},[a("v-btn",{staticClass:"ma-2 cyan white--text",attrs:{depressed:""},on:{click:e.itemExport_click}},[e._v("匯出")]),e._v(" "),a("v-btn",{staticClass:"ma-2 cyan white--text",attrs:{depressed:""},on:{click:e.itemImport_click}},[e._v("匯入")]),e._v(" "),a("v-btn",{staticClass:"ma-2 cyan white--text",attrs:{depressed:""},on:{click:e.addItem}},[e._v("新增")])],1),e._v(" "),a("div",{staticClass:"d-flex flex-column flex-md-row align-md-center my-2"},[a("DatePicker",{attrs:{label:"起始日期"},on:{change:e.dateStart_change},model:{value:e.dateStart,callback:function(t){e.dateStart=t},expression:"dateStart"}}),e._v(" "),a("DatePicker",{attrs:{label:"結束日期"},on:{change:e.dateEnd_change},model:{value:e.dateEnd,callback:function(t){e.dateEnd=t},expression:"dateEnd"}}),e._v(" "),a("Select",{attrs:{label:"狀態",items:e.stateList},on:{change:e.state_change},model:{value:e.stateValue,callback:function(t){e.stateValue=t},expression:"stateValue"}})],1),e._v(" "),a("v-data-table",{attrs:{headers:e.headers,items:e.items,loading:e.dataLoading,"loading-text":"載入中...",page:e.page,"items-per-page":e.itemsPerPage,"hide-default-footer":"","show-select":""},on:{"update:page":function(t){e.page=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[a("div",{staticClass:"pa-2"},[e._v(e._s(e.dataLoading?"載入中...":"空資料"))])]},proxy:!0},{key:"item.displayPages",fn:function(t){var a=t.value;return[e._v("\n          "+e._s(e.comboboxTranslation(e.displayPagesItems,a))+"\n        ")]}},{key:"item.postponedProve",fn:function(t){var n=t.value;return[n?a("div",{staticClass:"d-flex align-center"},[a("div",{staticClass:"mr-2"},[e._v(e._s(n))]),e._v(" "),a("v-icon",{attrs:{title:"檢視"},on:{click:function(t){return e.postponedProve_click(n)}}},[e._v("mdi-image-area")])],1):e._e()]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("div",{staticClass:"ma-2"},[a("v-icon",{attrs:{small:"",title:"修改"},on:{click:function(t){return e.editItem(n)}}},[e._v("mdi-pencil")]),e._v(" "),a("v-icon",{attrs:{small:"",title:"刪除"},on:{click:function(t){return e.deleteItem(n)}}},[e._v("mdi-delete")])],1)]}},{key:"footer",fn:function(t){var n=t.props;return[a("div",{staticClass:"d-flex my-2 align-center"},[e.selectItems.length?a("v-btn",{attrs:{small:"",depressed:"",color:"grey darken-1 white--text"},on:{click:e.deleteItems}},[e._v("刪除選取項目")]):e._e(),e._v(" "),a("v-spacer"),e._v(" "),!e.dataLoading&&e.items.length?a("Pagination",{attrs:{length:e.items.length,page:e.page,pageCount:n.pagination.pageCount,itemsPerPage:e.itemsPerPage},on:{"update:page":function(t){e.page=t},"update:itemsPerPage":function(t){e.itemsPerPage=t},"update:items-per-page":function(t){e.itemsPerPage=t}}}):e._e(),e._v(" "),a("v-icon",{attrs:{small:"",title:"重新整理"},on:{click:e.refresh}},[e._v("mdi-refresh-circle")])],1)]}}]),model:{value:e.selectItems,callback:function(t){e.selectItems=t},expression:"selectItems"}})],1)],1),e._v(" "),a("ReportNewItem",{ref:"newItem",on:{save:e.reportNewItem_save}}),e._v(" "),a("ReportEditItem",{ref:"editItem",on:{save:e.reportEditItem_save}}),e._v(" "),a("v-dialog",{model:{value:e.importBool,callback:function(t){e.importBool=t},expression:"importBool"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"headline"},[e._v("匯入資料")])]),e._v(" "),a("v-card-text",[a("v-data-table",{attrs:{headers:e.mainHeaders,items:e.importItems,"item-class":e.importItemClass,page:e.importPage,"items-per-page":e.importItemsPerPage,"hide-default-footer":""},on:{"update:page":function(t){e.importPage=t}},scopedSlots:e._u([{key:"no-data",fn:function(){return[a("div",{staticClass:"pa-2"},[e._v("空資料")])]},proxy:!0},{key:"footer",fn:function(t){var n=t.props;return[e.importItems.length?a("Pagination",{attrs:{length:e.importItems.length,page:e.importPage,pageCount:n.pagination.pageCount,itemsPerPage:e.importItemsPerPage},on:{"update:page":function(t){e.importPage=t},"update:itemsPerPage":function(t){e.importItemsPerPage=t},"update:items-per-page":function(t){e.importItemsPerPage=t}}}):e._e()]}}])})],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.cancelItems(e.importItems)}}},[e._v("\n          取消\n        ")]),e._v(" "),e.importItems.length&&e.saveBool?a("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(t){return e.saveItems(e.importItems)}}},[e._v("\n          儲存\n        ")]):e._e()],1)],1)],1)],1)};n._withStripped=!0;var r=a(517).a,i=(a(580),a(53)),s=Object(i.a)(r,n,[],!1,null,"0935f3c1",null);s.options.__file="src/vue/pages/Report.vue";t.default=s.exports}}]);