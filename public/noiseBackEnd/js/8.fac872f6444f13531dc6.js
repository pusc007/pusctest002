(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{500:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return o}));var r=function(t){return!t||/^\d\d\d\d\-\d\d\-\d\d\_\d\d\:\d\d\~\d\d\:\d\d$/.test(t)},i=function(t){return!t||/^\d\d\d\d\-\d\d\-\d\d\~\d\d\d\d\-\d\d\-\d\d$/.test(t)},a=function(t){return!t||/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(t)},s=function(t){return!t||/^\d\d\d\d\-\d\d$/.test(t)},o=function(t){return!!t}},501:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vuelidate=w,Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return i.withParams}}),e.default=e.validationMixin=void 0;var r=n(506),i=n(504);function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=function(){return null},l=function(t,e,n){return t.reduce((function(t,r){return t[n?n(r):r]=e(r),t}),{})};function d(t){return"function"==typeof t}function f(t){return null!==t&&("object"===u(t)||d(t))}var v=function(t,e,n,r){if("function"==typeof n)return n.call(t,e,r);n=Array.isArray(n)?n:n.split(".");for(var i=0;i<n.length;i++){if(!e||"object"!==u(e))return r;e=e[n[i]]}return void 0===e?r:e};var p={$invalid:function(){var t=this,e=this.proxy;return this.nestedKeys.some((function(e){return t.refProxy(e).$invalid}))||this.ruleKeys.some((function(t){return!e[t]}))},$dirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(e){return t.refProxy(e).$dirty}))},$anyDirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(e){return t.refProxy(e).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var t=this;return!!this.$error||this.nestedKeys.some((function(e){return t.refProxy(e).$anyError}))},$pending:function(){var t=this;return this.ruleKeys.some((function(e){return t.getRef(e).$pending}))||this.nestedKeys.some((function(e){return t.refProxy(e).$pending}))},$params:function(){var t=this,e=this.validations;return s({},l(this.nestedKeys,(function(t){return e[t]&&e[t].$params||null})),l(this.ruleKeys,(function(e){return t.getRef(e).$params})))}};function h(t){this.dirty=t;var e=this.proxy,n=t?"$touch":"$reset";this.nestedKeys.forEach((function(t){e[t][n]()}))}var m={$touch:function(){h.call(this,!0)},$reset:function(){h.call(this,!1)},$flattenParams:function(){var t=this.proxy,e=[];for(var n in this.$params)if(this.isNested(n)){for(var r=t[n].$flattenParams(),i=0;i<r.length;i++)r[i].path.unshift(n);e=e.concat(r)}else e.push({path:[],name:n,params:this.$params[n]});return e}},y=Object.keys(p),g=Object.keys(m),_=null,b=function(t){if(_)return _;var e=t.extend({computed:{refs:function(){var t=this._vval;this._vval=this.children,(0,r.patchChildren)(t,this._vval);var e={};return this._vval.forEach((function(t){e[t.key]=t.vm})),e}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,r.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(t){var e=this.getModel();if(e)return e[t]},hasIter:function(){return!1}}}),n=e.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(e){var n=this.getModel();(0,i.pushParams)();var r,a=this.rule.call(this.rootModel,n,e),s=f(r=a)&&d(r.then)?function(t,e){var n=new t({data:{p:!0,v:!1}});return e.then((function(t){n.p=!1,n.v=t}),(function(t){throw n.p=!1,n.v=!1,t})),n.__isVuelidateAsyncVm=!0,n}(t,a):a,o=(0,i.popParams)();return{output:s,params:o&&o.$sub?o.$sub.length>1?o:o.$sub[0]:null}}},computed:{run:function(){var t=this,e=this.lazyParentModel();if(Array.isArray(e)&&e.__ob__){var n=e.__ob__.dep;n.depend();var r=n.constructor.target;if(!this._indirectWatcher){var i=r.constructor;this._indirectWatcher=new i(this,(function(){return t.runRule(e)}),null,{lazy:!0})}var a=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===a)return this._indirectWatcher.depend(),r.value;this._lastModel=a,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(e)},$params:function(){return this.run.params},proxy:function(){var t=this.run.output;return t.__isVuelidateAsyncVm?!!t.v:!!t},$pending:function(){var t=this.run.output;return!!t.__isVuelidateAsyncVm&&t.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),o=e.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:s({},m,{refProxy:function(t){return this.getRef(t).proxy},getRef:function(t){return this.refs[t]},isNested:function(t){return"function"!=typeof this.validations[t]}}),computed:s({},p,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var t=this;return this.keys.filter((function(e){return!t.isNested(e)}))},keys:function(){return Object.keys(this.validations).filter((function(t){return"$params"!==t}))},proxy:function(){var t=this,e=l(this.keys,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t.refProxy(e)}}})),n=l(y,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t[e]}}})),r=l(g,(function(e){return{enumerable:!1,configurable:!0,get:function(){return t[e]}}})),i=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},s({},e))}}:{};return Object.defineProperties({},s({},e,i,{$model:{enumerable:!0,get:function(){var e=t.lazyParentModel();return null!=e?e[t.prop]:null},set:function(e){var n=t.lazyParentModel();null!=n&&(n[t.prop]=e,t.$touch())}}},n,r))},children:function(){var t=this;return a(this.nestedKeys.map((function(e){return b(t,e)}))).concat(a(this.ruleKeys.map((function(e){return $(t,e)})))).filter(Boolean)}})}),u=o.extend({methods:{isNested:function(t){return void 0!==this.validations[t]()},getRef:function(t){var e=this;return{get proxy(){return e.validations[t]()||!1}}}}}),h=o.extend({computed:{keys:function(){var t=this.getModel();return f(t)?Object.keys(t):[]},tracker:function(){var t=this,e=this.validations.$trackBy;return e?function(n){return"".concat(v(t.rootModel,t.getModelKey(n),e))}:function(t){return"".concat(t)}},getModelLazy:function(){var t=this;return function(){return t.getModel()}},children:function(){var t=this,e=this.validations,n=this.getModel(),i=s({},e);delete i.$trackBy;var a={};return this.keys.map((function(e){var s=t.tracker(e);return a.hasOwnProperty(s)?null:(a[s]=!0,(0,r.h)(o,s,{validations:i,prop:e,lazyParentModel:t.getModelLazy,model:n[e],rootModel:t.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(t){return this.refs[this.tracker(t)]},hasIter:function(){return!0}}}),b=function(t,e){if("$each"===e)return(0,r.h)(h,e,{validations:t.validations[e],lazyParentModel:t.lazyParentModel,prop:e,lazyModel:t.getModel,rootModel:t.rootModel});var n=t.validations[e];if(Array.isArray(n)){var i=t.rootModel,a=l(n,(function(t){return function(){return v(i,i.$v,t)}}),(function(t){return Array.isArray(t)?t.join("."):t}));return(0,r.h)(u,e,{validations:a,lazyParentModel:c,prop:e,lazyModel:c,rootModel:i})}return(0,r.h)(o,e,{validations:n,lazyParentModel:t.getModel,prop:e,lazyModel:t.getModelKey,rootModel:t.rootModel})},$=function(t,e){return(0,r.h)(n,e,{rule:t.validations[e],lazyParentModel:t.lazyParentModel,lazyModel:t.getModel,rootModel:t.rootModel})};return _={VBase:e,Validation:o}},$=null;var x=function(t,e){var n=function(t){if($)return $;for(var e=t.constructor;e.super;)e=e.super;return $=e,e}(t),i=b(n),a=i.Validation;return new(0,i.VBase)({computed:{children:function(){var n="function"==typeof e?e.call(t):e;return[(0,r.h)(a,"$v",{validations:n,lazyParentModel:c,prop:"$v",model:t,rootModel:t})]}}})},P={data:function(){var t=this.$options.validations;return t&&(this._vuelidate=x(this,t)),{}},beforeCreate:function(){var t=this.$options;t.validations&&(t.computed||(t.computed={}),t.computed.$v||(t.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function w(t){t.mixin(P)}e.validationMixin=P;var M=w;e.default=M},502:function(t,e,n){},503:function(t,e,n){},504:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.pushParams=o,e.popParams=u,e.withParams=function(t,e){if("object"===i(t)&&void 0!==e)return n=t,r=e,l((function(t){return function(){t(n);for(var e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return r.apply(this,i)}}));var n,r;return l(t)},e._setTarget=e.target=void 0;var a=[],s=null;e.target=s;function o(){null!==s&&a.push(s),e.target=s={}}function u(){var t=s,n=e.target=s=a.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(t)),t}function c(t){if("object"!==i(t)||Array.isArray(t))throw new Error("params must be an object");e.target=s=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){r(t,e,n[e])}))}return t}({},s,t)}function l(t){var e=t(c);return function(){o();try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(this,n)}finally{u()}}}e._setTarget=function(t){e.target=s=t}},505:function(t,e,n){"use strict";e.a=n.p+"img/logo.996f07b8ca77ffb8cfc3df411c585003.png"},506:function(t,e,n){"use strict";function r(t){return null==t}function i(t){return null!=t}function a(t,e){return e.tag===t.tag&&e.key===t.key}function s(t){var e=t.tag;t.vm=new e({data:t.args})}function o(t,e,n){var r,a,s={};for(r=e;r<=n;++r)i(a=t[r].key)&&(s[a]=r);return s}function u(t,e,n){for(;e<=n;++e)s(t[e])}function c(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(r.vm.$destroy(),r.vm=null)}}function l(t,e){t!==e&&(e.vm=t.vm,function(t){for(var e=Object.keys(t.args),n=0;n<e.length;n++)e.forEach((function(e){t.vm[e]=t.args[e]}))}(e))}Object.defineProperty(e,"__esModule",{value:!0}),e.patchChildren=function(t,e){i(t)&&i(e)?t!==e&&function(t,e){var n,d,f,v=0,p=0,h=t.length-1,m=t[0],y=t[h],g=e.length-1,_=e[0],b=e[g];for(;v<=h&&p<=g;)r(m)?m=t[++v]:r(y)?y=t[--h]:a(m,_)?(l(m,_),m=t[++v],_=e[++p]):a(y,b)?(l(y,b),y=t[--h],b=e[--g]):a(m,b)?(l(m,b),m=t[++v],b=e[--g]):a(y,_)?(l(y,_),y=t[--h],_=e[++p]):(r(n)&&(n=o(t,v,h)),r(d=i(_.key)?n[_.key]:null)?(s(_),_=e[++p]):a(f=t[d],_)?(l(f,_),t[d]=void 0,_=e[++p]):(s(_),_=e[++p]));v>h?u(e,p,g):p>g&&c(t,v,h)}(t,e):i(e)?u(e,0,e.length-1):i(t)&&c(t,0,t.length-1)},e.h=function(t,e,n){return{tag:t,key:e,args:n}}},508:function(t,e,n){"use strict";n(502)},509:function(t,e,n){"use strict";n(503)},511:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"bar",attrs:{app:"","elevate-on-scroll":""}},[n("v-container",{staticClass:"pa-0 fill-height"},[n("div",{staticClass:"mr-10 d-flex flex-md-column align-center"},[n("img",{staticClass:"logo",attrs:{src:t.logo}})]),t._v(" "),n("Menu",{staticClass:"d-none d-md-flex"}),t._v(" "),n("v-spacer"),t._v(" "),n("Logout",{staticClass:"d-none d-md-flex"}),t._v(" "),n("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(e){t.$refs.sidebar.isOpen=!t.$refs.sidebar.isOpen}}})],1)],1),t._v(" "),n("Sidebar",{ref:"sidebar",scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"d-flex pa-4"},[n("Logout"),t._v(" "),n("v-spacer"),t._v(" "),n("v-icon",{on:{click:function(e){t.$refs.sidebar.isOpen=!1}}},[t._v("\n          mdi-close\n        ")])],1),t._v(" "),n("Menu",{staticClass:"d-flex flex-column"})]},proxy:!0}])})],1)};r._withStripped=!0;var i=function(){var t=this.$createElement;return(this._self._c||t)("v-btn",{staticClass:"cyan white--text",attrs:{depressed:""},on:{click:this.logout_click}},[this._v("登出")])};i._withStripped=!0;var a={mixins:[n(166).a],components:{},data:function(){return{}},mounted:function(){},methods:{logout_click:function(){this.logout()}},computed:{}},s=n(53),o=Object(s.a)(a,i,[],!1,null,"6ea3a2e6",null);o.options.__file="src/vue/pages/components/Logout.vue";var u=o.exports,c=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"CaseInquiry"},"active-class":"active"}},[this._v("案件查詢")]),this._v(" "),e("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Report"},"active-class":"active"}},[this._v("報表")]),this._v(" "),e("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"DetectSite"},"active-class":"active"}},[this._v("檢測站點")]),this._v(" "),e("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"DetectDate"},"active-class":"active"}},[this._v("檢測日期")])],1)};c._withStripped=!0;var l={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},d=(n(508),Object(s.a)(l,c,[],!1,null,"3111d13b",null));d.options.__file="src/vue/pages/components/Menu.vue";var f=d.exports,v=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{attrs:{right:"",app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._t("content")],2)};v._withStripped=!0;var p={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var t=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){t.isOpen&&t.$vuetify.breakpoint.mdAndUp&&(t.isOpen=!1)}),300)}},computed:{}},h=Object(s.a)(p,v,[],!1,null,"2e4a0ea0",null);h.options.__file="src/vue/pages/components/Sidebar.vue";var m=h.exports,y=n(505),g={components:{Logout:u,Menu:f,Sidebar:m},data:function(){return{logo:y.a}},mounted:function(){},methods:{},computed:{}},_=(n(509),Object(s.a)(g,r,[],!1,null,"023c3669",null));_.options.__file="src/vue/pages/components/Header.vue";e.a=_.exports},514:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-2 d-flex align-center"},[n("v-spacer"),t._v(" "),n("div",{staticClass:"text-caption mx-1"},[t._v("每頁行數:")]),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"text-caption pa-0",attrs:{text:""}},"v-btn",i,!1),r),[t._v("\n        "+t._s(t.itemsPerPage)+"\n        "),n("v-icon",[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),n("v-list",t._l(t.itemsPerPageArray,(function(e,r){return n("v-list-item",{key:r,on:{click:function(n){return t.updateItemsPerPage(e)}}},[n("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1),t._v(" "),n("div",{staticClass:"text-caption mx-1"},[t._v("\n    "+t._s(Math.min((t.page-1)*t.itemsPerPage+1,t.length))+"-"+t._s(Math.min(t.page*t.itemsPerPage,t.length))+"\n    of\n    "+t._s(t.length)+"\n  ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",small:"",text:""},on:{click:t.prevPage}},[n("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),n("v-btn",{attrs:{depressed:"",small:"",text:""},on:{click:t.nextPage}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)};r._withStripped=!0;var i={components:{},props:{length:{type:Number,default:0},page:{type:Number,default:1},pageCount:{type:Number,default:0},itemsPerPage:{type:Number,default:15},itemsPerPageArray:{type:Array,default:function(){return[5,10,15,30,50]}}},data:function(){return{}},mounted:function(){},methods:{updateItemsPerPage:function(t){this.$emit("update:itemsPerPage",t)},prevPage:function(){this.page-1>=1&&this.$emit("update:page",this.page-1)},nextPage:function(){this.page+1<=this.pageCount&&this.$emit("update:page",this.page+1)}},computed:{}},a=n(53),s=Object(a.a)(i,r,[],!1,null,"4c8483fe",null);s.options.__file="src/vue/components/Pagination.vue";e.a=s.exports},537:function(t,e,n){},582:function(t,e,n){"use strict";n(537)},587:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"content"},[n("Header"),t._v(" "),n("v-main",{staticClass:"main"},[n("v-container",[n("div",{staticClass:"d-flex justify-center justify-md-start my-2"},[n("v-btn",{staticClass:"ma-2 cyan white--text",attrs:{depressed:""},on:{click:t.addItem}},[t._v("新增")])],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.siteList,loading:t.siteLoading,"loading-text":"載入中...",page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("div",{staticClass:"pa-2"},[t._v(t._s(t.siteLoading?"載入中...":"空資料"))])]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[n("div",{staticClass:"ma-2"},[n("v-icon",{attrs:{small:"",title:"修改"},on:{click:function(e){return t.editItem(r)}}},[t._v("mdi-pencil")]),t._v(" "),n("v-icon",{attrs:{small:"",title:"刪除"},on:{click:function(e){return t.deleteItem(r)}}},[t._v("mdi-delete")])],1)]}},{key:"footer",fn:function(e){var r=e.props;return[n("div",{staticClass:"d-flex align-center"},[n("v-spacer"),t._v(" "),!t.siteLoading&&t.siteList.length?n("Pagination",{attrs:{length:t.siteList.length,page:t.page,pageCount:r.pagination.pageCount,itemsPerPage:t.itemsPerPage},on:{"update:page":function(e){t.page=e},"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}}}):t._e(),t._v(" "),n("v-icon",{attrs:{small:"",title:"重新整理"},on:{click:t.refresh}},[t._v("mdi-refresh-circle")])],1)]}}])})],1)],1),t._v(" "),n("DetectSiteNewItem",{ref:"newItem",on:{save:t.detectSiteNewItem_save}}),t._v(" "),n("DetectSiteEditItem",{ref:"editItem",on:{save:t.detectSiteEditItem_save}})],1)};r._withStripped=!0;var i=n(511),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-card-title",{staticClass:"justify-center py-2"},[n("span",{staticClass:"headline text-h6"},[t._v("新增")])]),t._v(" "),n("v-card-text",[n("v-container",[n("TableItems",{attrs:{data:t.data,items:t.items,typesetting:t.typesetting}})],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItem(t.items)}}},[t._v("\n        取消\n      ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItem(t.items)}}},[t._v("\n        儲存\n      ")])],1)],1)],1)};a._withStripped=!0;var s=n(501),o=n(507),u=n(167),c=n(43),l=n(500),d={mixins:[s.validationMixin],components:{TableItems:o.a},validations:{data:{sitename:{required:l.e},address:{required:l.e}}},data:function(){var t=this;return{data:{},items:{sitename:{label:"檢測站點",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},address:{label:"地址",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}}},show:!1,typesetting:[{itemName:"sitename",class:"col-12"},{itemName:"address",class:"col-12"}]}},mounted:function(){},methods:{put:function(t){this.data=JSON.parse(JSON.stringify(t))},resetData:function(){this.data={}},reset:function(){this.$v.data.$reset(),this.resetData()},cancelItem:function(t){this.show=!1},saveItem:function(t){this.$v.data.$touch(),this.$v.data.$error||(this.$emit("save",Object(c.d)(this.items,this.data)),this.show=!1)}},computed:{}},f=n(53),v=Object(f.a)(d,a,[],!1,null,"b9f27686",null);v.options.__file="src/vue/pages/components/DetectSiteNewItem.vue";var p=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"900px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-card-title",{staticClass:"justify-center py-2"},[n("span",{staticClass:"headline text-h6"},[t._v("修改")])]),t._v(" "),n("v-card-text",[n("v-container",[n("TableItems",{attrs:{data:t.data,items:t.items,typesetting:t.typesetting}})],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{depressed:""},on:{click:function(e){return t.cancelItem(t.items)}}},[t._v("\n        取消\n      ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"cyan white--text"},on:{click:function(e){return t.saveItem(t.items)}}},[t._v("\n        儲存\n      ")])],1)],1)],1)};h._withStripped=!0;var m={mixins:[s.validationMixin],components:{TableItems:o.a},validations:{data:{sitename:{required:l.e},address:{required:l.e}}},data:function(){var t=this;return{originalData:{},data:{},items:{sitename:{label:"檢測站點",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},address:{label:"地址",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}}},show:!1,typesetting:[{itemName:"sitename",class:"col-12"},{itemName:"address",class:"col-12"}]}},mounted:function(){},methods:{put:function(t){this.originalData=JSON.parse(JSON.stringify(t)),this.data=JSON.parse(JSON.stringify(t))},resetData:function(){this.data={}},reset:function(){this.$v.data.$reset(),this.resetData()},cancelItem:function(t){this.show=!1},saveItem:function(t){if(this.$v.data.$touch(),!this.$v.data.$error){var e=Object(c.c)(this.originalData,this.data);e?(this.$emit("save",this.originalData.id,Object(c.d)(this.items,e),Object(c.d)(this.items,this.data)),this.show=!1):this.show=!1}}},computed:{}},y=Object(f.a)(m,h,[],!1,null,"0b8403c3",null);y.options.__file="src/vue/pages/components/DetectSiteEditItem.vue";var g=y.exports,_=n(514),b={mixins:[n(166).a],components:{Header:i.a,DetectSiteNewItem:p,DetectSiteEditItem:g,Pagination:_.a},data:function(){return{page:1,itemsPerPage:15,headers:[{text:"檢測站點",value:"sitename"},{text:"地址",value:"address"},{text:"動作",value:"actions",sortable:!1}],siteList:[],siteLoading:!1,siteValue:""}},mounted:function(){this.siteUpdate()},methods:{refresh:function(){this.siteUpdate()},siteUpdate:function(){var t=this;this.siteLoading||(this.siteList=[],this.siteLoading=!0,Object(u.s)(this.$store.state.token).then((function(e){t.siteLoading=!1,t.siteList=e})).catch((function(e){t.siteLoading=!1,t.errorAction(e)})))},addItem:function(){this.$refs.newItem.reset(),this.$refs.newItem.show=!0},saveItem:function(t){},editItem:function(t){this.$refs.editItem.reset(),this.$refs.editItem.put(t),this.$refs.editItem.show=!0},deleteItem:function(t){var e=this;this.$app_confirm.run("確定刪除?",(function(){e.$app_overlay.open("執行中..."),Object(u.g)(e.$store.state.token,t.id).then((function(){e.$app_overlay.close(),e.siteUpdate()})).catch((function(t){e.$app_overlay.close(),e.errorAction(t)}))}),(function(){}))},detectSiteNewItem_save:function(t){var e=this;this.$app_overlay.open("執行中..."),Object(u.c)(this.$store.state.token,t).then((function(){e.$app_overlay.close(),e.siteUpdate()})).catch((function(t){e.$app_overlay.close(),e.$refs.newItem.show=!0,e.errorAction(t)}))},detectSiteEditItem_save:function(t,e){var n=this;this.$app_overlay.open("執行中..."),Object(u.l)(this.$store.state.token,t,e).then((function(){n.$app_overlay.close(),n.siteUpdate()})).catch((function(t){n.$app_overlay.close(),n.$refs.editItem.show=!0,n.errorAction(t)}))}},computed:{}},$=(n(582),Object(f.a)(b,r,[],!1,null,"716d1cd2",null));$.options.__file="src/vue/pages/DetectSite.vue";e.default=$.exports}}]);