(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/goods_detail/goods_detail"],{"03a1":function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=i(e("a34a")),r=e("26cb");function i(t){return t&&t.__esModule?t:{default:t}}function a(t,o,e,n,r,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?o(u):Promise.resolve(u).then(n,r)}function c(t){return function(){var o=this,e=arguments;return new Promise((function(n,r){var i=t.apply(o,e);function c(t){a(i,n,r,c,u,"next",t)}function u(t){a(i,n,r,c,u,"throw",t)}c(void 0)}))}}function u(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?u(Object(e),!0).forEach((function(o){d(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function d(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var f={computed:s({},(0,r.mapGetters)("m_cart",["total"])),watch:{total:{handler:function(t){var o=this.options.find((function(t){return"购物车"===t.text}));o&&(o.info=t)},immediate:!0}},data:function(){return{goods_info:{},options:[{icon:"shop",text:"店铺",infoBackgroundColor:"#007aff",infoColor:"red"},{icon:"cart",text:"购物车",info:0}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},onLoad:function(t){var o=t.goods_id;this.getGoodsDetail(o)},methods:s(s({},(0,r.mapMutations)("m_cart",["addToCart"])),{},{getGoodsDetail:function(o){var e=this;return c(n.default.mark((function r(){var i,a;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/api/public/v1/goods/detail",{goods_id:o});case 2:if(i=n.sent,a=i.data,200===a.meta.status){n.next=6;break}return n.abrupt("return",t.$showMsg());case 6:a.message.goods_introduce=a.message.goods_introduce.replace(/<img/g,'<img style="display:block;"'),a.message.goods_introduce=a.message.goods_introduce.replace(/webp/g,"jpg"),e.goods_info=a.message;case 9:case"end":return n.stop()}}),r)})))()},preview:function(o){t.previewImage({current:o,urls:this.goods_info.pics.map((function(t){return t.pics_big}))})},onClick:function(o){"购物车"===o.content.text&&t.switchTab({url:"/pages/cart/cart"})},buttonClick:function(t){if("加入购物车"===t.content.text){var o={goods_id:this.goods_info.goods_id,goods_name:this.goods_info.goods_name,goods_price:this.goods_info.goods_price,goods_count:1,goods_small_logo:this.goods_info.goods_small_logo,goods_state:!0};this.addToCart(o)}}})};o.default=f}).call(this,e("543d")["default"])},"137f":function(t,o,e){"use strict";e.r(o);var n=e("798e"),r=e("4ab2");for(var i in r)"default"!==i&&function(t){e.d(o,t,(function(){return r[t]}))}(i);e("adc1");var a,c=e("f0c5"),u=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);o["default"]=u.exports},"4ab2":function(t,o,e){"use strict";e.r(o);var n=e("03a1"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(o,t,(function(){return n[t]}))}(i);o["default"]=r.a},7525:function(t,o,e){},"798e":function(t,o,e){"use strict";e.d(o,"b",(function(){return r})),e.d(o,"c",(function(){return i})),e.d(o,"a",(function(){return n}));var n={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"b1a2"))},uniGoodsNav:function(){return e.e("components/uni-goods-nav/uni-goods-nav").then(e.bind(null,"6854"))}},r=function(){var t=this,o=t.$createElement;t._self._c},i=[]},ad06:function(t,o,e){"use strict";(function(t){e("de76");n(e("66fd"));var o=n(e("137f"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(o.default)}).call(this,e("543d")["createPage"])},adc1:function(t,o,e){"use strict";var n=e("7525"),r=e.n(n);r.a}},[["ad06","common/runtime","common/vendor"]]]);