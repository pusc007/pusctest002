(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{498:function(t,e,n){},499:function(t,e,n){},500:function(t,e,n){"use strict";e.a=n.p+"img/logo.996f07b8ca77ffb8cfc3df411c585003.png"},501:function(t,e,n){"use strict";n(498)},502:function(t,e,n){"use strict";n(499)},503:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"bar",attrs:{app:"","elevate-on-scroll":""}},[n("v-container",{staticClass:"pa-0 fill-height"},[n("div",{staticClass:"mr-10 d-flex flex-md-column align-center"},[n("img",{staticClass:"logo",attrs:{src:t.logo}})]),t._v(" "),n("Menu",{staticClass:"d-none d-md-flex"}),t._v(" "),n("v-spacer"),t._v(" "),n("Logout",{staticClass:"d-none d-md-flex"}),t._v(" "),n("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(e){t.$refs.sidebar.isOpen=!t.$refs.sidebar.isOpen}}})],1)],1),t._v(" "),n("Sidebar",{ref:"sidebar",scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"d-flex pa-4"},[n("Logout"),t._v(" "),n("v-spacer"),t._v(" "),n("v-icon",{on:{click:function(e){t.$refs.sidebar.isOpen=!1}}},[t._v("\n          mdi-close\n        ")])],1),t._v(" "),n("Menu",{staticClass:"d-flex flex-column"})]},proxy:!0}])})],1)};s._withStripped=!0;var a=function(){var t=this.$createElement;return(this._self._c||t)("v-btn",{staticClass:"cyan white--text",attrs:{depressed:""},on:{click:this.logout_click}},[this._v("登出")])};a._withStripped=!0;var i={mixins:[n(165).a],components:{},data:function(){return{}},mounted:function(){},methods:{logout_click:function(){this.logout()}},computed:{}},o=n(52),r=Object(o.a)(i,a,[],!1,null,"6ea3a2e6",null);r.options.__file="src/vue/pages/components/Logout.vue";var c=r.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.info&&t.$store.state.info.contactName&&t.$store.state.info.contactPhone&&t.$store.state.info.contactEmail?n("div",[n("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Info"},"active-class":"active"}},[t._v("資訊")]),t._v(" "),t.$store.state.info.displayPages&&t.$store.state.info.displayPages.reservation?n("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Reservation"},"active-class":"active"}},[t._v("\n    預約\n  ")]):t._e(),t._v(" "),t.$store.state.info.displayPages&&t.$store.state.info.displayPages.extension?n("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Extension"},"active-class":"active"}},[t._v("\n    展延\n  ")]):t._e(),t._v(" "),t.$store.state.info.displayPages&&t.$store.state.info.displayPages.transfer?n("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Transfer"},"active-class":"active"}},[t._v("\n    移轉外縣市\n  ")]):t._e(),t._v(" "),t.$store.state.info.displayPages&&t.$store.state.info.displayPages.otherExtension?n("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"OtherExtension"},"active-class":"active"}},[t._v("\n    其他展延\n  ")]):t._e()],1):t._e()};l._withStripped=!0;var u={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},d=(n(501),Object(o.a)(u,l,[],!1,null,"3111d13b",null));d.options.__file="src/vue/pages/components/Menu.vue";var p=d.exports,h=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{attrs:{right:"",app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._t("content")],2)};h._withStripped=!0;var v={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var t=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){t.isOpen&&t.$vuetify.breakpoint.mdAndUp&&(t.isOpen=!1)}),300)}},computed:{}},f=Object(o.a)(v,h,[],!1,null,"2e4a0ea0",null);f.options.__file="src/vue/pages/components/Sidebar.vue";var m=f.exports,_=n(500),g={components:{Logout:c,Menu:p,Sidebar:m},data:function(){return{logo:_.a}},mounted:function(){},methods:{},computed:{}},b=(n(502),Object(o.a)(g,s,[],!1,null,"023c3669",null));b.options.__file="src/vue/pages/components/Header.vue";e.a=b.exports},508:function(t,e,n){},509:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-select",{attrs:{label:t.label,items:t.items,loading:t.loading,color:"cyan","error-messages":t.errorMessages},on:{change:t.change,click:t.click},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("div",{staticClass:"pa-2"},[t._v(t._s(t.loading?"載入中...":"空資料"))])]},proxy:!0},{key:"selection",fn:function(e){var s=e.item;return[n("div",{staticClass:"text-truncate"},[t._v(t._s(s.text))])]}},{key:"item",fn:function(e){var s=e.item,a=e.attrs,i=e.on;return[n("v-list-item",t._g(t._b({},"v-list-item",a,!1),i),[n("v-list-item-content",[n("v-list-item-title",{attrs:{id:a["aria-labelledby"]},domProps:{textContent:t._s(s.text)}})],1)],1)]}}]),model:{value:t.value_,callback:function(e){t.value_=e},expression:"value_"}})};s._withStripped=!0;var a={components:{},props:{value:{type:String},label:{type:String,default:""},errorMessages:{type:String},items:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{value_:""}},watch:{value:function(){this.updateValue()}},mounted:function(){this.updateValue()},methods:{updateValue:function(){this.value_=this.value},change:function(){var t=this;this.$emit("input",this.value_),this.$nextTick((function(){t.$emit("change",t.value)}))},click:function(){this.$emit("click")}},computed:{}},i=n(52),o=Object(i.a)(a,s,[],!1,null,"6ea0f9e3",null);o.options.__file="src/vue/components/Select.vue";e.a=o.exports},511:function(t,e,n){"use strict";n(508)},514:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"calendar"},[t._l(7,(function(e,s){return n("div",{key:"weekday"+s,staticClass:"weekday"},[t._v(t._s(t.weekdayText[s]))])})),t._v(" "),t._l(t.days,(function(e,s){return n("div",{key:"item"+s,staticClass:"date",class:{present:"present"===e.status,presentMonth:e.presentMonth}},[n("div",{staticClass:"label"},[t._v(t._s(e.date.M)+"/"+t._s(e.date.D))]),t._v(" "),n("div",{staticClass:"content"},[t._t("content",null,{item:Object.assign({},e,t.getItem(e.date.Y,e.date.M,e.date.D))})],2)])}))],2)])};function a(t){return{Y:t.getFullYear(),M:t.getMonth()+1,D:t.getDate()}}function i(t,e){for(var n=[],s=new Date(t,e-1,1),i=s.getDay(),o=0;o<i;o++)s.setFullYear(t,e-1,1-i+o),n.push(new Date(s));for(var r=function(t,e){return new Date(t,e,0).getDate()}(t,e),c=0;c<r;c++)s.setFullYear(t,e-1,c+1),n.push(new Date(s));for(var l=0;l<42-r-i;l++)s.setFullYear(t,e,l+1),n.push(new Date(s));function u(t){return 1e4*t.Y+100*t.M+t.D}var d=u(a(new Date));return n=n.map((function(t){var n=(t=a(t)).M===e,s=u(t),i="";return s<d?i="past":s==d?i="present":s>d&&(i="future"),{date:t,status:i,presentMonth:n}}))}s._withStripped=!0;var o=new Date,r={components:{},props:{year:{type:[String,Number],default:o.getFullYear()},month:{type:[String,Number],default:o.getMonth()+1},items:{type:[Array],default:function(){return[]}}},data:function(){return{weekdayText:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],days:i(this.year,this.month)}},watch:{year:function(t){this.days=i(this.year,this.month)},month:function(t){this.days=i(this.year,this.month)}},mounted:function(){},methods:{getItem:function(t,e,n){var s="".concat(t,"-").concat(e.toString().padStart(2,"0"),"-").concat(n.toString().padStart(2,"0")),a=this.items.filter((function(t){return t.dateTimeRange.substr(0,10)===s}));return a.length?{bool:!0,list:a,date:s}:{bool:!1,date:s}}},computed:{}},c=(n(511),n(52)),l=Object(c.a)(r,s,[],!1,null,"0ad61136",null);l.options.__file="src/vue/components/Calendar.vue";e.a=l.exports},518:function(t,e,n){},519:function(t,e,n){},527:function(t,e,n){"use strict";n(518)},528:function(t,e,n){"use strict";n(519)},536:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"content"},[t.infoLoading?t._e():[n("Header"),t._v(" "),n("v-main",{staticClass:"main"},[n("v-container",[n("div",{staticClass:"d-flex justify-center ma-4 text-h6"},[t._v("請依序選擇 檢測站點 > 預約日期 > 預約時段")]),t._v(" "),n("Select",{attrs:{label:"檢測站點",items:t.siteList,loading:t.siteLoading},on:{click:t.site_click,change:t.site_change},model:{value:t.siteValue,callback:function(e){t.siteValue=e},expression:"siteValue"}}),t._v(" "),t.siteValue?n("v-toolbar",{staticClass:"d-flex justify-center",attrs:{flat:""}},[t.prevBool?n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v("\n              mdi-chevron-left\n            ")])],1):t._e(),t._v(" "),n("v-toolbar-title",[t._v(" "+t._s(t.selectYear)+" 年 "+t._s(t.selectMonth)+" 月")]),t._v(" "),t.nextBool?n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v("\n              mdi-chevron-right\n            ")])],1):t._e()],1):t._e(),t._v(" "),t.siteValue?[t.siteDateLoading?n("div",{staticClass:"d-flex justify-center text-h6"},[t._v("載入中...")]):n("Calendar",{attrs:{year:t.selectYear,month:t.selectMonth,items:t.openDate},scopedSlots:t._u([{key:"content",fn:function(e){return[n("div",{staticClass:"dateBox pa-2"},[e.item.presentMonth&&e.item.bool?n("div",{staticClass:"dateInfo d-flex align-center justify-center"},[n("v-btn",{staticClass:"cyan white--text",attrs:{depressed:""},on:{click:function(n){return t.reservationBtn_click(e.item)}}},[t._v("\n                    預約\n                  ")])],1):t._e()])]}}],null,!1,4009778730)})]:t._e()],2)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"300px"},model:{value:t.selectTimeRange,callback:function(e){t.selectTimeRange=e},expression:"selectTimeRange"}},[n("v-card",{staticClass:"pa-4",attrs:{light:""}},[n("v-card-text",{staticClass:"text-center"},[n("v-list",[n("v-list-item-group",t._l(t.openDateTime,(function(e,s){return n("v-list-item",{key:s,on:{click:function(n){return t.reservationBtnGo_click(e)}}},[n("v-list-item-content",[n("div",[t._v(t._s(e.dateTimeRange))]),t._v(" "),n("div",[t._v("已預約："+t._s(e.count))]),t._v(" "),n("div",[t._v("尚可預約："+t._s(e.maxcount-e.count))])])],1)})),1)],1)],1),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{depressed:""},on:{click:t.cancelBtn_click}},[t._v("\n            取消\n          ")])],1)],1)],1)],t._v(" "),n("v-overlay",{attrs:{value:t.infoLoading}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[t._v("載入資訊中...")])],1)],2)};s._withStripped=!0;var a=n(503),i=n(514),o=n(509),r=n(166),c={mixins:[n(165).a],components:{Header:a.a,Calendar:i.a,Select:o.a},data:function(){return{infoLoading:!1,siteList:[],siteValue:"",siteLoading:!1,selectYear:null,selectMonth:null,siteDateLoading:!1,api_sites_promise:null,api_searchOpentimes_promise:null,openDate:[],selectTimeRange:!1,openDateTime:[],prevBool:!1,nextBool:!1,dateRangeS:"",dateRangeE:""}},mounted:function(){var t=this;this.$store.state.info?this.init(this.$store.state.info):(this.infoLoading=!0,Object(r.l)(this.$store.state.token).then((function(e){t.infoLoading=!1,t.$store.dispatch("setInfo",e),t.$store.state.isInfo=!0,t.init(e)})).catch((function(e){t.infoLoading=!1,t.errorAction(e)})))},methods:{init:function(t){if(t.contactName&&t.contactPhone&&t.contactEmail)if(t.displayPages.reservation){var e=t.reDateRange.split("~"),n=e[0].substr(0,7),s=e[1].substr(0,7);this.dateRangeS=this.dateStrToInt(n.replace("-","")),this.dateRangeE=this.dateStrToInt(s.replace("-","")),this.selectYear=parseInt(n.substr(0,4)),this.selectMonth=parseInt(n.substr(5,2));var a=this.dateStrToInt(this.dateChangeStr(this.selectYear,this.selectMonth));this.prevBool=a>this.dateRangeS,this.nextBool=a<this.dateRangeE}else this.$router.push({name:"Info"});else this.$router.push({name:"Contact"})},dateChangeStr:function(t,e){return"".concat(t,"-").concat(e.toString().padStart(2,"0"))},dateStrToInt:function(t){return parseInt(t.replace("-",""))},site_click:function(){var t=this;this.api_sites_promise&&(this.api_sites_promise.cancel(),this.api_sites_promise=null),this.siteValue="",this.siteList=[],this.siteLoading=!0,this.api_sites_promise=Object(r.j)(this.$store.state.token),this.api_sites_promise.then((function(e){t.siteLoading=!1,t.siteList=e.map((function(t){return{id:t.id,text:t.sitename}}))})).catch((function(e){t.errorAction(e)}))},updateStationDate:function(){var t=this,e=new Date(this.dateChangeStr(this.selectYear,this.selectMonth)+"-01"),n=new Date(this.dateChangeStr(this.selectYear+(12===this.selectMonth?1:0),(12===this.selectMonth?0:this.selectMonth)+1)+"-01");n.setDate(0),this.api_searchOpentimes_promise&&(this.api_searchOpentimes_promise.cancel(),this.api_searchOpentimes_promise=null),this.siteDateLoading=!0,this.api_searchOpentimes_promise=Object(r.i)(this.$store.state.token,"redate",this.siteValue,e,n),this.api_searchOpentimes_promise.then((function(e){t.siteDateLoading=!1,t.openDate=e})).catch((function(e){t.errorAction(e)}))},prev:function(){var t=new Date(this.dateChangeStr(this.selectYear,this.selectMonth)+"-01");t.setMonth(t.getMonth()-1),this.selectYear=t.getFullYear(),this.selectMonth=t.getMonth()+1;var e=this.dateStrToInt(this.dateChangeStr(this.selectYear,this.selectMonth));this.prevBool=e>this.dateRangeS,this.nextBool=e<this.dateRangeE,this.updateStationDate()},next:function(){var t=new Date(this.dateChangeStr(this.selectYear,this.selectMonth)+"-01");t.setMonth(t.getMonth()+1),this.selectYear=t.getFullYear(),this.selectMonth=t.getMonth()+1;var e=this.dateStrToInt(this.dateChangeStr(this.selectYear,this.selectMonth));this.prevBool=e>this.dateRangeS,this.nextBool=e<this.dateRangeE,this.updateStationDate()},reservationBtn_click:function(t){var e=this;this.$app_overlay.open("執行中..."),this.openDateTime=[],Object(r.h)(this.$store.state.token,"redate",this.siteValue,new Date(t.date)).then((function(t){e.$app_overlay.close(),e.openDateTime=t,e.selectTimeRange=!0})).catch((function(t){e.$app_overlay.close(),e.errorAction(t)}))},reservationBtnGo_click:function(t){var e=this;this.$app_confirm.run("確定預約 ".concat(t.dateTimeRange," ?"),(function(){e.$app_overlay.open("執行中..."),Object(r.g)(e.$store.state.token,e.siteValue,t.dateTimeRange).then((function(){e.$app_overlay.close(),e.$store.state.info=null,e.$router.push({name:"Info"})})).catch((function(t){e.$app_overlay.close(),e.errorAction(t)}))}),(function(){}))},site_change:function(){this.updateStationDate()},cancelBtn_click:function(){this.selectTimeRange=!1}},computed:{}},l=(n(527),n(528),n(52)),u=Object(l.a)(c,s,[],!1,null,"2056fb8f",null);u.options.__file="src/vue/pages/Reservation.vue";e.default=u.exports}}]);