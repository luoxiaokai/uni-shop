(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my-settle/my-settle"],{"2e75":function(t,e,r){"use strict";r.r(e);var n=r("a67b"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"4fd2":function(t,e,r){},"560d":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},a67b:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r("a34a")),o=r("26cb");function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return f(t)||d(t,e)||i(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done);n=!0)if(r.push(s.value),e&&r.length===e)break}catch(err){o=!0,a=err}finally{try{n||null==u["return"]||u["return"]()}finally{if(o)throw a}}return r}}function f(t){if(Array.isArray(t))return t}function l(t,e,r,n,o,a,s){try{var u=t[a](s),i=u.value}catch(c){return void r(c)}u.done?e(i):Promise.resolve(i).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){l(a,n,o,s,u,"next",t)}function u(t){l(a,n,o,s,u,"throw",t)}s(void 0)}))}}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={name:"my-settle",data:function(){return{seconds:3,timer:null}},computed:b(b(b(b(b({},(0,o.mapGetters)("m_cart",["checkedCount","total","checkedGoodsAmount"])),(0,o.mapGetters)("m_user",["addstr"])),(0,o.mapState)("m_user",["token"])),(0,o.mapState)("m_cart",["cart"])),{},{isFullCheck:function(){return this.total===this.checkedCount}}),methods:b(b(b({},(0,o.mapMutations)("m_cart",["updateAllGoodsState"])),(0,o.mapMutations)("m_user",["updateRedirctInfo"])),{},{changeAllState:function(){this.updateAllGoodsState(!this.isFullCheck)},settlement:function(){return this.checkedCount?this.addstr?this.token?void this.payOrder():this.delayNavigate():t.$showMsg("请选择收货地址!"):t.$showMsg("请选择结算商品!")},payOrder:function(){var e=this;return p(n.default.mark((function r(){var o,a,u,i,c,d,f,l,p,h,b;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o={order_price:.01,consignee_addr:e.addstr,goods:e.cart.filter((function(t){return t.goods_state})).map((function(t){return{goods_id:t.goods_id,goods_number:t.goods_count,goods_price:t.goods_price}}))},r.next=3,t.$http.post("/api/public/v1/my/orders/create",o);case 3:if(a=r.sent,u=a.data,200!==u.meta.status){r.next=35;break}return i=u.message.order_number,r.next=9,t.$http.post("/api/public/v1/my/orders/req_unifiedorder",{order_number:i});case 9:if(c=r.sent,d=c.data,200!==d.meta.status){r.next=32;break}return f=d.message.pay,r.next=15,t.requestPayment(f);case 15:if(l=r.sent,p=s(l,2),p[0],p[1],!err){r.next=21;break}return r.abrupt("return",t.$showMsg("订单未支付!"));case 21:return r.next=23,t.$http.post("/api/public/v1/my/orders/chkOrder",{order_number:i});case 23:if(h=r.sent,b=h.data,200!==b.meta.status){r.next=29;break}t.showToast({title:"订单支付完成",icon:"none"}),r.next=30;break;case 29:return r.abrupt("return",t.$showMsg("订单未支付!"));case 30:r.next=33;break;case 32:return r.abrupt("return",t.$showMsg("预付失败！"));case 33:r.next=36;break;case 35:return r.abrupt("return",t.showToast({icon:"none",title:"权限不足,创建订单失败!"}));case 36:case"end":return r.stop()}}),r)})))()},delayNavigate:function(){var e=this;this.seconds=3,this.showTips(this.seconds),this.timer=setInterval((function(){if(e.seconds--,e.seconds<=0)return clearInterval(e.timer),void t.switchTab({url:"/pages/my/my",success:function(){e.updateRedirctInfo({openType:"switchTab",from:"/pages/cart/cart"})}});e.showTips(e.seconds)}),1e3)},showTips:function(e){t.showToast({icon:"none",title:"请登录后再结算!"+e+"秒之后自动跳转到登录页",mask:!0,duration:1500})}})};e.default=y}).call(this,r("543d")["default"])},e17c:function(t,e,r){"use strict";var n=r("4fd2"),o=r.n(n);o.a},f387:function(t,e,r){"use strict";r.r(e);var n=r("560d"),o=r("2e75");for(var a in o)"default"!==a&&function(t){r.d(e,t,(function(){return o[t]}))}(a);r("e17c");var s,u=r("f0c5"),i=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my-settle/my-settle-create-component',
    {
        'components/my-settle/my-settle-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f387"))
        })
    },
    [['components/my-settle/my-settle-create-component']]
]);
