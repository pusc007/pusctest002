(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{500:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return u}));var r=function(t){return!t||/^\d\d\d\d\-\d\d\-\d\d\_\d\d\:\d\d\~\d\d\:\d\d$/.test(t)},i=function(t){return!t||/^\d\d\d\d\-\d\d\-\d\d\~\d\d\d\d\-\d\d\-\d\d$/.test(t)},o=function(t){return!t||/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(t)},a=function(t){return!t||/^\d\d\d\d\-\d\d$/.test(t)},u=function(t){return!!t}},501:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vuelidate=w,Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return i.withParams}}),e.default=e.validationMixin=void 0;var r=n(506),i=n(504);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){u(t,e,n[e])}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(){return null},c=function(t,e,n){return t.reduce((function(t,r){return t[n?n(r):r]=e(r),t}),{})};function d(t){return"function"==typeof t}function f(t){return null!==t&&("object"===s(t)||d(t))}var h=function(t,e,n,r){if("function"==typeof n)return n.call(t,e,r);n=Array.isArray(n)?n:n.split(".");for(var i=0;i<n.length;i++){if(!e||"object"!==s(e))return r;e=e[n[i]]}return void 0===e?r:e};var y={$invalid:function(){var t=this,e=this.proxy;return this.nestedKeys.some((function(e){return t.refProxy(e).$invalid}))||this.ruleKeys.some((function(t){return!e[t]}))},$dirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(e){return t.refProxy(e).$dirty}))},$anyDirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(e){return t.refProxy(e).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var t=this;return!!this.$error||this.nestedKeys.some((function(e){return t.refProxy(e).$anyError}))},$pending:function(){var t=this;return this.ruleKeys.some((function(e){return t.getRef(e).$pending}))||this.nestedKeys.some((function(e){return t.refProxy(e).$pending}))},$params:function(){var t=this,e=this.validations;return a({},c(this.nestedKeys,(function(t){return e[t]&&e[t].$params||null})),c(this.ruleKeys,(function(e){return t.getRef(e).$params})))}};function v(t){this.dirty=t;var e=this.proxy,n=t?"$touch":"$reset";this.nestedKeys.forEach((function(t){e[t][n]()}))}var p={$touch:function(){v.call(this,!0)},$reset:function(){v.call(this,!1)},$flattenParams:function(){var t=this.proxy,e=[];for(var n in this.$params)if(this.isNested(n)){for(var r=t[n].$flattenParams(),i=0;i<r.length;i++)r[i].path.unshift(n);e=e.concat(r)}else e.push({path:[],name:n,params:this.$params[n]});return e}},m=Object.keys(y),g=Object.keys(p),b=null,$=function(t){if(b)return b;var e=t.extend({computed:{refs:function(){var t=this._vval;this._vval=this.children,(0,r.patchChildren)(t,this._vval);var e={};return this._vval.forEach((function(t){e[t.key]=t.vm})),e}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,r.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(t){var e=this.getModel();if(e)return e[t]},hasIter:function(){return!1}}}),n=e.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(e){var n=this.getModel();(0,i.pushParams)();var r,o=this.rule.call(this.rootModel,n,e),a=f(r=o)&&d(r.then)?function(t,e){var n=new t({data:{p:!0,v:!1}});return e.then((function(t){n.p=!1,n.v=t}),(function(t){throw n.p=!1,n.v=!1,t})),n.__isVuelidateAsyncVm=!0,n}(t,o):o,u=(0,i.popParams)();return{output:a,params:u&&u.$sub?u.$sub.length>1?u:u.$sub[0]:null}}},computed:{run:function(){var t=this,e=this.lazyParentModel();if(Array.isArray(e)&&e.__ob__){var n=e.__ob__.dep;n.depend();var r=n.constructor.target;if(!this._indirectWatcher){var i=r.constructor;this._indirectWatcher=new i(this,(function(){return t.runRule(e)}),null,{lazy:!0})}var o=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===o)return this._indirectWatcher.depend(),r.value;this._lastModel=o,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(e)},$params:function(){return this.run.params},proxy:function(){var t=this.run.output;return t.__isVuelidateAsyncVm?!!t.v:!!t},$pending:function(){var t=this.run.output;return!!t.__isVuelidateAsyncVm&&t.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),u=e.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:a({},p,{refProxy:function(t){return this.getRef(t).proxy},getRef:function(t){return this.refs[t]},isNested:function(t){return"function"!=typeof this.validations[t]}}),computed:a({},y,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var t=this;return this.keys.filter((function(e){return!t.isNested(e)}))},keys:function(){return Object.keys(this.validations).filter((function(t){return"$params"!==t}))},proxy:function(){var t=this,e=c(this.keys,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t.refProxy(e)}}})),n=c(m,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t[e]}}})),r=c(g,(function(e){return{enumerable:!1,configurable:!0,get:function(){return t[e]}}})),i=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},a({},e))}}:{};return Object.defineProperties({},a({},e,i,{$model:{enumerable:!0,get:function(){var e=t.lazyParentModel();return null!=e?e[t.prop]:null},set:function(e){var n=t.lazyParentModel();null!=n&&(n[t.prop]=e,t.$touch())}}},n,r))},children:function(){var t=this;return o(this.nestedKeys.map((function(e){return $(t,e)}))).concat(o(this.ruleKeys.map((function(e){return _(t,e)})))).filter(Boolean)}})}),s=u.extend({methods:{isNested:function(t){return void 0!==this.validations[t]()},getRef:function(t){var e=this;return{get proxy(){return e.validations[t]()||!1}}}}}),v=u.extend({computed:{keys:function(){var t=this.getModel();return f(t)?Object.keys(t):[]},tracker:function(){var t=this,e=this.validations.$trackBy;return e?function(n){return"".concat(h(t.rootModel,t.getModelKey(n),e))}:function(t){return"".concat(t)}},getModelLazy:function(){var t=this;return function(){return t.getModel()}},children:function(){var t=this,e=this.validations,n=this.getModel(),i=a({},e);delete i.$trackBy;var o={};return this.keys.map((function(e){var a=t.tracker(e);return o.hasOwnProperty(a)?null:(o[a]=!0,(0,r.h)(u,a,{validations:i,prop:e,lazyParentModel:t.getModelLazy,model:n[e],rootModel:t.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(t){return this.refs[this.tracker(t)]},hasIter:function(){return!0}}}),$=function(t,e){if("$each"===e)return(0,r.h)(v,e,{validations:t.validations[e],lazyParentModel:t.lazyParentModel,prop:e,lazyModel:t.getModel,rootModel:t.rootModel});var n=t.validations[e];if(Array.isArray(n)){var i=t.rootModel,o=c(n,(function(t){return function(){return h(i,i.$v,t)}}),(function(t){return Array.isArray(t)?t.join("."):t}));return(0,r.h)(s,e,{validations:o,lazyParentModel:l,prop:e,lazyModel:l,rootModel:i})}return(0,r.h)(u,e,{validations:n,lazyParentModel:t.getModel,prop:e,lazyModel:t.getModelKey,rootModel:t.rootModel})},_=function(t,e){return(0,r.h)(n,e,{rule:t.validations[e],lazyParentModel:t.lazyParentModel,lazyModel:t.getModel,rootModel:t.rootModel})};return b={VBase:e,Validation:u}},_=null;var M=function(t,e){var n=function(t){if(_)return _;for(var e=t.constructor;e.super;)e=e.super;return _=e,e}(t),i=$(n),o=i.Validation;return new(0,i.VBase)({computed:{children:function(){var n="function"==typeof e?e.call(t):e;return[(0,r.h)(o,"$v",{validations:n,lazyParentModel:l,prop:"$v",model:t,rootModel:t})]}}})},P={data:function(){var t=this.$options.validations;return t&&(this._vuelidate=M(this,t)),{}},beforeCreate:function(){var t=this.$options;t.validations&&(t.computed||(t.computed={}),t.computed.$v||(t.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function w(t){t.mixin(P)}e.validationMixin=P;var j=w;e.default=j},504:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.pushParams=u,e.popParams=s,e.withParams=function(t,e){if("object"===i(t)&&void 0!==e)return n=t,r=e,c((function(t){return function(){t(n);for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return r.apply(this,i)}}));var n,r;return c(t)},e._setTarget=e.target=void 0;var o=[],a=null;e.target=a;function u(){null!==a&&o.push(a),e.target=a={}}function s(){var t=a,n=e.target=a=o.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(t)),t}function l(t){if("object"!==i(t)||Array.isArray(t))throw new Error("params must be an object");e.target=a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){r(t,e,n[e])}))}return t}({},a,t)}function c(t){var e=t(l);return function(){u();try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(this,n)}finally{s()}}}e._setTarget=function(t){e.target=a=t}},505:function(t,e,n){"use strict";e.a=n.p+"img/logo.996f07b8ca77ffb8cfc3df411c585003.png"},506:function(t,e,n){"use strict";function r(t){return null==t}function i(t){return null!=t}function o(t,e){return e.tag===t.tag&&e.key===t.key}function a(t){var e=t.tag;t.vm=new e({data:t.args})}function u(t,e,n){var r,o,a={};for(r=e;r<=n;++r)i(o=t[r].key)&&(a[o]=r);return a}function s(t,e,n){for(;e<=n;++e)a(t[e])}function l(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(r.vm.$destroy(),r.vm=null)}}function c(t,e){t!==e&&(e.vm=t.vm,function(t){for(var e=Object.keys(t.args),n=0;n<e.length;n++)e.forEach((function(e){t.vm[e]=t.args[e]}))}(e))}Object.defineProperty(e,"__esModule",{value:!0}),e.patchChildren=function(t,e){i(t)&&i(e)?t!==e&&function(t,e){var n,d,f,h=0,y=0,v=t.length-1,p=t[0],m=t[v],g=e.length-1,b=e[0],$=e[g];for(;h<=v&&y<=g;)r(p)?p=t[++h]:r(m)?m=t[--v]:o(p,b)?(c(p,b),p=t[++h],b=e[++y]):o(m,$)?(c(m,$),m=t[--v],$=e[--g]):o(p,$)?(c(p,$),p=t[++h],$=e[--g]):o(m,b)?(c(m,b),m=t[--v],b=e[++y]):(r(n)&&(n=u(t,h,v)),r(d=i(b.key)?n[b.key]:null)?(a(b),b=e[++y]):o(f=t[d],b)?(c(f,b),t[d]=void 0,b=e[++y]):(a(b),b=e[++y]));h>v?s(e,y,g):y>g&&l(t,h,v)}(t,e):i(e)?s(e,0,e.length-1):i(t)&&l(t,0,t.length-1)},e.h=function(t,e,n){return{tag:t,key:e,args:n}}},527:function(t,e,n){},540:function(t,e,n){"use strict";n(527)},588:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"content"},[n("v-main",{staticClass:"main vh-100"},[n("v-container",{staticClass:"d-flex justify-center align-center",attrs:{"fill-height":"",fluid:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-title",{staticClass:"pa-0 pa-md-2 flex-column justify-center"},[n("img",{staticClass:"logo",attrs:{src:t.logo}}),t._v(" "),n("div",{staticClass:"text-h6 mt-4"},[t._v("使用中機動車輛噪音通知到檢")]),t._v(" "),n("div",{staticClass:"text-h6 my-2"},[t._v("線上預約系統後台")])]),t._v(" "),n("v-card-text",[n("TableItems",{attrs:{data:t.data,items:t.items,typesetting:t.typesetting}})],1),t._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{staticClass:"cyan white--text",attrs:{depressed:""},on:{click:t.loginBtn_click}},[t._v("登入")])],1)],1)],1)],1)],1)};r._withStripped=!0;var i=n(507),o=n(500),a=n(501),u=n(167),s=n(505),l=n(166),c={mixins:[a.validationMixin,l.a],components:{TableItems:i.a},validations:{data:{account:{required:o.e},password:{required:o.e}}},data:function(){var t=this;return{logo:s.a,data:{},items:{account:{label:"帳號",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}},password:{dataType:"password",label:"密碼",type:"text-field",errors:function(e){if(t.$v.data[e].$dirty)return t.$v.data[e].required?void 0:"請填寫這個欄位。"}}},typesetting:[{itemName:"account",class:"col-12"},{itemName:"password",class:"col-12"}]}},mounted:function(){},methods:{loginBtn_click:function(){var t=this;this.$v.$touch(),this.$v.$error||(this.$app_overlay.open("登入中..."),Object(u.o)(this.data.account,this.data.password).then((function(e){t.$app_overlay.close(),t.$store.dispatch("setLogin",e),t.$router.push({name:"CaseInquiry"})})).catch((function(e){t.$app_overlay.close(),t.errorAction(e)})))}},computed:{}},d=(n(540),n(53)),f=Object(d.a)(c,r,[],!1,null,"8155e628",null);f.options.__file="src/vue/pages/Login.vue";e.default=f.exports}}]);