(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{441:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pa-2 d-flex align-center"},[i("v-spacer"),t._v(" "),i("div",{staticClass:"text-caption mx-1"},[t._v("每頁行數:")]),t._v(" "),i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"text-caption pa-0",attrs:{text:""}},"v-btn",a,!1),n),[t._v("\n        "+t._s(t.itemsPerPage)+"\n        "),i("v-icon",[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),i("v-list",t._l(t.itemsPerPageArray,(function(e,n){return i("v-list-item",{key:n,on:{click:function(i){return t.updateItemsPerPage(e)}}},[i("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1),t._v(" "),i("div",{staticClass:"text-caption mx-1"},[t._v("\n    "+t._s(Math.min((t.page-1)*t.itemsPerPage+1,t.length))+"-"+t._s(Math.min(t.page*t.itemsPerPage,t.length))+"\n    of\n    "+t._s(t.length)+"\n  ")]),t._v(" "),i("v-btn",{attrs:{depressed:"",small:"",text:""},on:{click:t.prevPage}},[i("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),i("v-btn",{attrs:{depressed:"",small:"",text:""},on:{click:t.nextPage}},[i("v-icon",[t._v("mdi-chevron-right")])],1)],1)};n._withStripped=!0;var a={components:{},props:{length:{type:Number,default:0},page:{type:Number,default:1},pageCount:{type:Number,default:0},itemsPerPage:{type:Number,default:15},itemsPerPageArray:{type:Array,default:function(){return[5,10,15,30,50]}}},data:function(){return{}},mounted:function(){},methods:{updateItemsPerPage:function(t){this.$emit("update:itemsPerPage",t)},prevPage:function(){this.page-1>=1&&this.$emit("update:page",this.page-1)},nextPage:function(){this.page+1<=this.pageCount&&this.$emit("update:page",this.page+1)}},computed:{}},s=i(116),r=Object(s.a)(a,n,[],!1,null,"5abfbaf6",null);r.options.__file="src/vue/pages/components/Pagination.vue";e.a=r.exports},459:function(t,e,i){},460:function(t,e,i){},461:function(t,e,i){},512:function(t,e,i){"use strict";i(459)},513:function(t,e,i){"use strict";i(460)},514:function(t,e,i){"use strict";i(461)},517:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sheet",{staticClass:"content"},[i("Header"),t._v(" "),i("v-main",{staticClass:"main"},[i("v-container",[i("div",{staticClass:"d-flex justify-center justify-md-start my-2"},[i("v-btn",{staticClass:"mx-2 cyan white--text",attrs:{depressed:""},on:{click:t.addItem}},[t._v("新增")])],1),t._v(" "),i("v-select",{staticClass:"mt-4",attrs:{color:"cyan",items:t.cityList,label:"縣市",loading:t.cityLoading},on:{click:t.city_click,change:t.city_change},scopedSlots:t._u([{key:"no-data",fn:function(){return[i("div",{staticClass:"pa-2"},[t._v(t._s(t.cityLoading?"載入中...":"空資料"))])]},proxy:!0},{key:"selection",fn:function(e){var n=e.item;return[i("div",{staticClass:"text-truncate"},[t._v(t._s(n.text))])]}},{key:"item",fn:function(e){var n=e.item,a=e.attrs,s=e.on;return[i("v-list-item",t._g(t._b({},"v-list-item",a,!1),s),[i("v-list-item-content",[i("v-list-item-title",{attrs:{id:a["aria-labelledby"]},domProps:{textContent:t._s(n.text)}})],1)],1)]}}]),model:{value:t.cityValue,callback:function(e){t.cityValue=e},expression:"cityValue"}}),t._v(" "),t.cityValue?i("v-data-table",{attrs:{headers:t.headers,items:t.siteList,loading:t.siteLoading,"loading-text":"載入中...",page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[i("div",{staticClass:"pa-2"},[t._v(t._s(t.siteLoading?"載入中...":"空資料"))])]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[i("div",{staticClass:"ma-2"},[i("v-icon",{attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("mdi-pencil")]),t._v(" "),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v("mdi-delete")])],1)]}},{key:"footer",fn:function(e){var n=e.props;return[!t.siteLoading&&t.siteList.length?i("Pagination",{attrs:{length:t.siteList.length,page:t.page,pageCount:n.pagination.pageCount,itemsPerPage:t.itemsPerPage},on:{"update:page":function(e){t.page=e},"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}}}):t._e()]}}],null,!1,4123452272)}):t._e()],1)],1),t._v(" "),i("DetectSiteNewItem",{ref:"newItem",on:{save:t.detectSiteNewItem_save}}),t._v(" "),i("DetectSiteEditItem",{ref:"editItem",on:{save:t.detectSiteEditItem_save}}),t._v(" "),i("Confirm",{ref:"confirm"}),t._v(" "),i("v-overlay",{attrs:{value:t.running}},[i("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[t._v("執行中...")])],1)],1)};n._withStripped=!0;var a=i(436),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("v-card",[i("v-card-title",{staticClass:"justify-center"},[i("span",{staticClass:"headline"},[t._v("新增")])]),t._v(" "),i("v-card-text",[i("v-container",[i("div",{staticClass:"row"},t._l(t.items,(function(e,n){return i("TableItem",{key:"item"+n,staticClass:"pa-1",attrs:{data:t.data,items:t.items,name:n,item:e}})})),1)])],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItem(t.items)}}},[t._v("\n        取消\n      ")]),t._v(" "),i("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItem(t.items)}}},[t._v("\n        儲存\n      ")])],1)],1)],1)};s._withStripped=!0;var r=i(430),c=i(429),o=i(432),u=i(117),d=i(431),l={mixins:[c.validationMixin],components:{TableItem:o.a},validations:{data:{city:{required:r.required},sitename:{required:r.required}}},data:function(){var t=this;return{data:{},items:{city:{label:"縣市",class:"col-12",type:"select",list:[],loading:!1,promise:null,click:function(t,e,i){var n=e[i];n.promise&&(n.promise.cancel(),n.promise=null),n.list=[],n.loading=!0,n.promise=Object(u.a)(),n.promise.then((function(t){n.loading=!1,n.list=t}))},errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},sitename:{label:"檢測站點",class:"col-12",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}}},show:!1}},mounted:function(){},methods:{put:function(t){this.data=JSON.parse(JSON.stringify(t))},resetData:function(){this.data={}},reset:function(){this.$v.data.$reset(),this.resetData()},cancelItem:function(t){this.show=!1},saveItem:function(t){this.$v.data.$touch(),this.$v.data.$error||(this.$emit("save",Object(d.d)(this.items,this.data)),this.show=!1)}},computed:{}},m=(i(512),i(116)),v=Object(m.a)(l,s,[],!1,null,"b9f27686",null);v.options.__file="src/vue/pages/components/DetectSiteNewItem.vue";var p=v.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("v-card",[i("v-card-title",{staticClass:"justify-center"},[i("span",{staticClass:"headline"},[t._v("修改")])]),t._v(" "),i("v-card-text",[i("v-container",[i("div",{staticClass:"row"},t._l(t.items,(function(e,n){return i("TableItem",{key:"item"+n,staticClass:"pa-1",attrs:{data:t.data,items:t.items,name:n,item:e}})})),1)])],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItem(t.items)}}},[t._v("\n        取消\n      ")]),t._v(" "),i("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItem(t.items)}}},[t._v("\n        儲存\n      ")])],1)],1)],1)};h._withStripped=!0;var f={mixins:[c.validationMixin],components:{TableItem:o.a},validations:{data:{sitename:{required:r.required}}},data:function(){var t=this;return{originalData:{},data:{},items:{sitename:{label:"檢測站點",class:"col-12",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}}},show:!1}},mounted:function(){},methods:{put:function(t){this.originalData=JSON.parse(JSON.stringify(t)),this.data=JSON.parse(JSON.stringify(t))},resetData:function(){this.data={}},reset:function(){this.$v.data.$reset(),this.resetData()},cancelItem:function(t){this.show=!1},saveItem:function(t){if(this.$v.data.$touch(),!this.$v.data.$error){var e=Object(d.c)(this.originalData,this.data);e&&(this.$emit("save",this.originalData.id,Object(d.d)(this.items,e)),this.show=!1)}}},computed:{}},_=(i(513),Object(m.a)(f,h,[],!1,null,"0b8403c3",null));_.options.__file="src/vue/pages/components/DetectSiteEditItem.vue";var g=_.exports,y=i(441),b=i(442),w={mixins:[i(118).a],components:{Header:a.a,DetectSiteNewItem:p,DetectSiteEditItem:g,Pagination:y.a,Confirm:b.a},data:function(){return{page:1,itemsPerPage:15,cityList:[],cityValue:"",cityLoading:!1,headers:[{text:"站名",value:"sitename"},{text:"動作",value:"actions",sortable:!1}],siteList:[],siteLoading:!1,siteValue:"",running:!1,api_citys_promise:null,api_searchSites_promise:null}},mounted:function(){},methods:{city_click:function(){this.cityUpdate()},city_change:function(){this.siteUpdate()},cityUpdate:function(){var t=this;this.api_citys_promise&&(this.api_citys_promise.cancel(),this.api_citys_promise=null),this.cityList=[],this.cityLoading=!0,this.api_citys_promise=Object(u.b)(this.$store.state.token),this.api_citys_promise.then((function(e){t.cityLoading=!1,t.cityList=e})).catch((function(e){t.cityLoading=!1,t.errorAction(e)}))},siteUpdate:function(){var t=this;this.api_searchSites_promise&&(this.api_searchSites_promise.cancel(),this.api_searchSites_promise=null),this.siteList=[],this.siteLoading=!0,this.api_searchSites_promise=Object(u.p)(this.$store.state.token,this.cityValue),this.api_searchSites_promise.then((function(e){t.siteLoading=!1,t.siteList=e})).catch((function(e){t.siteLoading=!1,t.errorAction(e)}))},addItem:function(){this.$refs.newItem.reset(),this.$refs.newItem.show=!0},saveItem:function(t){},editItem:function(t){this.$refs.editItem.reset(),this.$refs.editItem.put(t),this.$refs.editItem.show=!0},deleteItem:function(t){var e=this;this.$refs.confirm.run("確定刪除?",(function(){e.running=!0,Object(u.g)(e.$store.state.token,t.id).then((function(){e.running=!1,e.siteUpdate()})).catch((function(t){e.running=!1,e.errorAction(t)}))}),(function(){}))},detectSiteNewItem_save:function(t){var e=this;this.running=!0,Object(u.d)(this.$store.state.token,t).then((function(){e.running=!1,e.siteUpdate()})).catch((function(t){e.running=!1,e.$refs.newItem.show=!0,e.errorAction(t)}))},detectSiteEditItem_save:function(t,e){var i=this;this.running=!0,Object(u.k)(this.$store.state.token,t,e).then((function(){i.running=!1,i.siteUpdate()})).catch((function(t){i.running=!1,i.$refs.editItem.show=!0,i.errorAction(t)}))}},computed:{}},x=(i(514),Object(m.a)(w,n,[],!1,null,"716d1cd2",null));x.options.__file="src/vue/pages/DetectSite.vue";e.default=x.exports}}]);