(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{540:function(t,e,a){},585:function(t,e,a){"use strict";a(540)},589:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"content"},[a("Header"),t._v(" "),a("v-main",{staticClass:"main"},[a("v-container",[a("div",{staticClass:"d-flex justify-center justify-md-start my-2"},[a("v-btn",{staticClass:"ma-2 cyan white--text",attrs:{depressed:""},on:{click:t.itemExport_click}},[t._v("匯出")]),t._v(" "),a("v-btn",{staticClass:"ma-2 cyan white--text",attrs:{depressed:""},on:{click:t.itemImport_click}},[t._v("匯入")]),t._v(" "),a("v-btn",{staticClass:"ma-2 cyan white--text",attrs:{depressed:""},on:{click:t.addItem}},[t._v("新增")])],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.items,loading:t.dataLoading,"loading-text":"載入中...",page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":"","show-select":""},on:{"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("div",{staticClass:"pa-2"},[t._v(t._s(t.dataLoading?"載入中...":"空資料"))])]},proxy:!0},{key:"item.actions",fn:function(e){var i=e.item;return[a("div",{staticClass:"ma-2"},[a("v-icon",{attrs:{small:"",title:"修改"},on:{click:function(e){return t.editItem(i)}}},[t._v("mdi-pencil")]),t._v(" "),a("v-icon",{attrs:{small:"",title:"刪除"},on:{click:function(e){return t.deleteItem(i)}}},[t._v("mdi-delete")])],1)]}},{key:"footer",fn:function(e){var i=e.props;return[a("div",{staticClass:"d-flex my-2 align-center"},[t.selectItems.length?a("v-btn",{attrs:{small:"",depressed:"",color:"grey darken-1 white--text"},on:{click:t.deleteItems}},[t._v("刪除選取項目")]):t._e(),t._v(" "),a("v-spacer"),t._v(" "),!t.dataLoading&&t.items.length?[a("Pagination",{attrs:{length:t.items.length,page:t.page,pageCount:i.pagination.pageCount,itemsPerPage:t.itemsPerPage},on:{"update:page":function(e){t.page=e},"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}}}),t._v(" "),a("v-icon",{attrs:{small:"",title:"重新整理"},on:{click:t.refresh}},[t._v("mdi-refresh-circle")])]:t._e()],2)]}}]),model:{value:t.selectItems,callback:function(e){t.selectItems=e},expression:"selectItems"}})],1)],1),t._v(" "),a("DetectSiteNewItem",{ref:"newItem",on:{save:t.detectSiteNewItem_save}}),t._v(" "),a("DetectSiteEditItem",{ref:"editItem",on:{save:t.detectSiteEditItem_save}}),t._v(" "),a("v-dialog",{model:{value:t.importBool,callback:function(e){t.importBool=e},expression:"importBool"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center"},[a("span",{staticClass:"headline"},[t._v("匯入資料")])]),t._v(" "),a("v-card-text",[a("v-data-table",{attrs:{headers:t.mainHeaders,items:t.importItems,"item-class":t.importItemClass,page:t.importPage,"items-per-page":t.importItemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.importPage=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("div",{staticClass:"pa-2"},[t._v("空資料")])]},proxy:!0},{key:"footer",fn:function(e){var i=e.props;return[t.importItems.length?a("Pagination",{attrs:{length:t.importItems.length,page:t.importPage,pageCount:i.pagination.pageCount,itemsPerPage:t.importItemsPerPage},on:{"update:page":function(e){t.importPage=e},"update:itemsPerPage":function(e){t.importItemsPerPage=e},"update:items-per-page":function(e){t.importItemsPerPage=e}}}):t._e()]}}])})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItems(t.importItems)}}},[t._v("取消")]),t._v(" "),t.importItems.length&&t.saveBool?a("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItems(t.importItems)}}},[t._v("儲存")]):t._e()],1)],1)],1)],1)};i._withStripped=!0;var s=a(509),n=a.n(s),r=a(532),o=a.n(r),c=a(533),d=a.n(c),l=a(510),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center py-2"},[a("span",{staticClass:"headline text-h6"},[t._v("新增")])]),t._v(" "),a("v-card-text",[a("v-container",[a("TableItems",{attrs:{data:t.data,items:t.items,typesetting:t.typesetting}})],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItem(t.items)}}},[t._v("\n        取消\n      ")]),t._v(" "),a("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItem(t.items)}}},[t._v("\n        儲存\n      ")])],1)],1)],1):t._e()};u._withStripped=!0;var m=a(501),p=a(502),v=a(167),f=a(43),h=a(500),g={mixins:[m.validationMixin],components:{TableItems:p.a},validations:{data:{sitename:{required:h.f},address:{required:h.f}}},data:function(){var t=this;return{data:{},items:{sitename:{label:"檢測站點",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},address:{label:"地址",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}}},show:!1,typesetting:[{itemName:"sitename",class:"col-12"},{itemName:"address",class:"col-12"}]}},mounted:function(){},methods:{put:function(t){this.data=JSON.parse(JSON.stringify(t))},resetData:function(){this.data={}},reset:function(){this.$v.data.$reset(),this.resetData()},cancelItem:function(t){this.show=!1},saveItem:function(t){this.$v.data.$touch(),this.$v.data.$error||(this.$emit("save",Object(f.d)(this.items,this.data)),this.show=!1)}},computed:{}},_=a(53),I=Object(_.a)(g,u,[],!1,null,"b9f27686",null);I.options.__file="src/vue/pages/components/DetectSiteNewItem.vue";var y=I.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"justify-center py-2"},[a("span",{staticClass:"headline text-h6"},[t._v("修改")])]),t._v(" "),a("v-card-text",[a("v-container",[a("TableItems",{attrs:{data:t.data,items:t.items,typesetting:t.typesetting}})],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItem(t.items)}}},[t._v("\n        取消\n      ")]),t._v(" "),a("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItem(t.items)}}},[t._v("\n        儲存\n      ")])],1)],1)],1):t._e()};$._withStripped=!0;var b={mixins:[m.validationMixin],components:{TableItems:p.a},validations:{data:{sitename:{required:h.f},address:{required:h.f}}},data:function(){var t=this;return{originalData:{},data:{},items:{sitename:{label:"檢測站點",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},address:{label:"地址",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}}},show:!1,typesetting:[{itemName:"sitename",class:"col-12"},{itemName:"address",class:"col-12"}]}},mounted:function(){},methods:{put:function(t){this.originalData=JSON.parse(JSON.stringify(t)),this.data=JSON.parse(JSON.stringify(t))},resetData:function(){this.data={}},reset:function(){this.$v.data.$reset(),this.resetData()},cancelItem:function(t){this.show=!1},saveItem:function(t){if(this.$v.data.$touch(),!this.$v.data.$error){var e=Object(f.c)(this.originalData,this.data);e?(this.$emit("save",this.originalData.id,Object(f.d)(this.items,e),Object(f.d)(this.items,this.data)),this.show=!1):this.show=!1}}},computed:{}},w=Object(_.a)(b,$,[],!1,null,"0b8403c3",null);w.options.__file="src/vue/pages/components/DetectSiteEditItem.vue";var x=w.exports,k=a(515),P=a(542),S={mixins:[a(166).a],components:{Header:l.a,DetectSiteNewItem:y,DetectSiteEditItem:x,Pagination:k.a},data:function(){return{page:1,itemsPerPage:15,items:[],dataLoading:!1,templateHeaders:{base:[{text:"檢測站點",value:"sitename",type:String,validation:{required:h.f},errorMessages:function(t){if(!t.required)return"".concat(this.text,"不能空白")}},{text:"地址",value:"address",type:String,validation:{required:h.f},errorMessages:function(t){if(!t.required)return"".concat(this.text,"不能空白")}}],table:[{text:"動作",value:"actions",sortable:!1}],import:[{text:"回饋訊息",value:"resMessage"}]},importItems:[],importPage:1,saveBool:!1,importBool:!1,importItemsPerPage:15,selectItems:[]}},mounted:function(){this.updateInquire()},methods:{refresh:function(){this.updateInquire()},updateInquire:function(){var t=this;this.dataLoading||(this.items=[],this.dataLoading=!0,Object(v.v)(this.$store.state.token).then((function(e){t.dataLoading=!1,t.items=e})).catch((function(e){t.dataLoading=!1,t.errorAction(e)})))},addItem:function(){this.$refs.newItem.reset(),this.$refs.newItem.show=!0},saveItem:function(t){},editItem:function(t){this.$refs.editItem.reset(),this.$refs.editItem.put(t),this.$refs.editItem.show=!0},deleteItem:function(t){var e=this;this.$app_confirm.run("確定刪除?",(function(){e.$app_overlay.open("執行中..."),Object(v.h)(e.$store.state.token,t.id).then((function(){e.$app_overlay.close(),e.updateInquire()})).catch((function(t){e.$app_overlay.close(),e.errorAction(t)}))}),(function(){}))},detectSiteNewItem_save:function(t){var e=this;this.$app_overlay.open("執行中..."),Object(v.d)(this.$store.state.token,t).then((function(){e.$app_overlay.close(),e.updateInquire()})).catch((function(t){e.$app_overlay.close(),e.$refs.newItem.show=!0,e.errorAction(t)}))},detectSiteEditItem_save:function(t,e){var a=this;this.$app_overlay.open("執行中..."),Object(v.n)(this.$store.state.token,t,e).then((function(){a.$app_overlay.close(),a.updateInquire()})).catch((function(t){a.$app_overlay.close(),a.$refs.editItem.show=!0,a.errorAction(t)}))},itemImport_click:function(){var t=this;return d()(o.a.mark((function e(){var a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.b)();case 2:a=e.sent,i=t.templateHeaders.base;try{s=Object(P.d)(i,a),t.saveBool=s.every((function(t){return!t.resMessage})),t.importItems=s,t.importBool=!0}catch(t){alert(t.message)}case 5:case"end":return e.stop()}}),e)})))()},saveItems:function(){var t=this;this.importBool=!1,this.$app_overlay.open("執行中..."),Object(v.p)(this.$store.state.token,this.importItems).then((function(){t.$app_overlay.close(),t.importItems=[],t.updateInquire()})).catch((function(e){t.$app_overlay.close(),t.importBool=!0,t.errorAction(e)}))},cancelItems:function(){this.importBool=!1,this.importItems=[]},importItemClass:function(t){return t.resMessage?"error":""},itemExport_click:function(){Object(P.c)(Object(P.a)(this.templateHeaders.base,this.items),"資料.xlsx")},deleteItems:function(){var t=this,e=this.selectItems.map((function(t){return t.id}));this.$app_confirm.run("確定刪除?",(function(){t.$app_overlay.open("執行中..."),Object(v.i)(t.$store.state.token,e).then((function(){t.$app_overlay.close(),t.selectItems=[],t.updateInquire()})).catch((function(e){t.$app_overlay.close(),t.errorAction(e)}))}),(function(){}))}},computed:{headers:function(){return[].concat(n()(this.templateHeaders.base.filter((function(t){var e;return null===(e=t.display)||void 0===e||e}))),n()(this.templateHeaders.table.filter((function(t){var e;return null===(e=t.display)||void 0===e||e}))))},mainHeaders:function(){return this.saveBool?n()(this.templateHeaders.base.filter((function(t){var e;return null===(e=t.display)||void 0===e||e}))):[].concat(n()(this.templateHeaders.import.filter((function(t){var e;return null===(e=t.display)||void 0===e||e}))),n()(this.templateHeaders.base.filter((function(t){var e;return null===(e=t.display)||void 0===e||e}))))}}},O=(a(585),Object(_.a)(S,i,[],!1,null,"716d1cd2",null));O.options.__file="src/vue/pages/DetectSite.vue";e.default=O.exports}}]);