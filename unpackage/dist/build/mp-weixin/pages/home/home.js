(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"05d9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),a=u(n("d3ab"));function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,a,u,s){try{var i=t[u](s),c=i.value}catch(o){return void n(o)}i.done?e(c):Promise.resolve(c).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function i(t){s(u,r,a,i,c,"next",t)}function c(t){s(u,r,a,i,c,"throw",t)}i(void 0)}))}}var c={mixins:[a.default],data:function(){return{swiperList:[],navList:[],floorList:[]}},onLoad:function(){this.getswiperList(),this.getNavList(),this.getFloorList()},methods:{getswiperList:function(){var e=this;return i(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/api/public/v1/home/swiperdata");case 2:if(a=n.sent,u=a.data,200===u.meta.status){n.next=6;break}return n.abrupt("return",t.$showMsg());case 6:e.swiperList=u.message;case 7:case"end":return n.stop()}}),n)})))()},getNavList:function(){var e=this;return i(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/api/public/v1/home/catitems");case 2:if(a=n.sent,u=a.data,200===u.meta.status){n.next=6;break}return n.abrupt("return",t.$showMsg());case 6:e.navList=u.message;case 7:case"end":return n.stop()}}),n)})))()},navClickHandler:function(e){"分类"===e.name&&t.switchTab({url:"/pages/cate/cate"})},getFloorList:function(){var e=this;return i(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/api/public/v1/home/floordata");case 2:if(a=n.sent,u=a.data,200===u.meta.status){n.next=6;break}return n.abrupt("return",t.$showMsg());case 6:u.message.forEach((function(t){t.product_list.forEach((function(t){t.url="/subpkg/goods_list/goods_list?"+t.navigator_url.split("?")[1]}))})),e.floorList=u.message;case 8:case"end":return n.stop()}}),n)})))()},gotoSearch:function(){t.navigateTo({url:"/subpkg/search/search"})}}};e.default=c}).call(this,n("543d")["default"])},"459e":function(t,e,n){"use strict";var r=n("fc33"),a=n.n(r);a.a},6753:function(t,e,n){"use strict";n.r(e);var r=n("cc8e"),a=n("ec3f");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("459e");var s,i=n("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);e["default"]=c.exports},cc8e:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var r={mySearch:function(){return n.e("components/my-search/my-search").then(n.bind(null,"8ada"))}},a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},d0c0:function(t,e,n){"use strict";(function(t){n("de76");r(n("66fd"));var e=r(n("6753"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},ec3f:function(t,e,n){"use strict";n.r(e);var r=n("05d9"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},fc33:function(t,e,n){}},[["d0c0","common/runtime","common/vendor"]]]);