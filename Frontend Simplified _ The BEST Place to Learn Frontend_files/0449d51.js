(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{430:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("565e747d",content,!0,{sourceMap:!1})},470:function(t,e,n){"use strict";n(430)},471:function(t,e,n){var l=n(61)(!1);l.push([t.i,".title-line{width:20%;height:1.5px;margin-bottom:8px;background:linear-gradient(90deg,rgba(137,110,232,.145),rgba(38,19,94,.5) 48.96%,rgba(160,138,251,.12) 95.89%)}.modal__field--list.disabled{opacity:.2}.star{margin-top:15px;margin-bottom:25px}.plan__line{margin-top:5px;margin-bottom:5px;width:100%;height:2px;background:linear-gradient(90deg,rgba(115,83,214,.5),rgba(137,110,232,.145) 59.79%,rgba(160,138,251,.12) 95.89%)}.plan__line--flip{transform:scaleX(-1);-ms-filter:fliph;filter:fliph}.plan{height:100%;display:flex;position:relative;flex-direction:column;justify-content:center;align-items:center;border-radius:28px;opacity:.6}.is-active .plan{background:#f4f2fc;opacity:1;border:2px solid #7353d6}.plan__header{position:absolute;top:0;left:0;height:30px;width:100%;border-top-left-radius:25px;border-top-right-radius:25px;display:flex;justify-content:center;align-items:center;font-size:15px;font-weight:600;color:red}.plan__header span{-webkit-animation:tada 1s;animation:tada 1s}.is-active .plan__header{background:linear-gradient(.14deg,#a08afb .12%,#7353d6 99.88%);box-shadow:0 2.08416px 2.08416px rgba(0,0,0,.02);color:#fff}.plan__title{display:flex;justify-content:center;align-items:center;padding:0 16px;font-size:26px;height:30px;border-radius:4px}.is-active .plan__title{color:#fff;background:linear-gradient(.14deg,#a08afb .12%,#7353d6 99.88%)}.plan__price{margin-top:10px;margin-bottom:5px}.plan__price--number{font-weight:600;font-size:35px}.plan__plan--duration{font-weight:500;font-size:19px}.plan__save{position:absolute;bottom:5px;width:83px;height:20px;border-radius:12px;font-weight:700;font-size:13px;text-align:center;color:rgba(255,0,0,.9)}.modal__container,.plan__save{display:flex;justify-content:center;align-items:center}.modal__container{flex-direction:column}.btn__pro{width:70%!important;height:60px;background:linear-gradient(.14deg,#a08afb .12%,#7353d6 99.88%);box-shadow:0 2.31078px 4.62156px rgba(0,0,0,.15);border-radius:35px;font-weight:600;font-size:20px}.btn__pro:disabled{background-color:#7645d9;pointer-events:none}.btn__pro .el-loading-spinner .path{stroke:#fff!important}.btn .el-loading-mask{background-color:transparent}.el-carousel{width:400px;margin-bottom:15px}@-webkit-keyframes tada{0%{transform:scale(1)}10%,20%{transform:scale(.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale(1.1) rotate(3deg)}40%,60%,80%{transform:scale(1.1) rotate(-3deg)}to{transform:scale(1) rotate(0)}}@keyframes tada{0%{transform:scale(1)}10%,20%{transform:scale(.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale(1.1) rotate(3deg)}40%,60%,80%{transform:scale(1.1) rotate(-3deg)}to{transform:scale(1) rotate(0)}}",""]),t.exports=l},568:function(t,e,n){"use strict";n.r(e);n(11),n(21),n(27);var l=n(215),o=[l.a.VIP_ANNUALLY,l.a.VIP_MONTHLY,l.a.PRO],r={props:["checkoutLoading"],components:{Check:function(){return n.e(2).then(n.bind(null,579))},PinkCrown:function(){return n.e(129).then(n.bind(null,591))},Star:function(){return n.e(130).then(n.bind(null,592))}},data:function(){return{selectedPlan:o[0]}},methods:{onCheckoutClick:function(){this.$emit("openStripeCheckout",this.selectedPlan)},onPlanChange:function(t){this.selectedPlan=o[t]}}},c=(n(470),n(47)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal__container"},[n("h1",{staticClass:"modal__title"},[t._v("Subscriptions")]),t._v(" "),n("div",{staticClass:"title-line"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticStyle:{"margin-bottom":"24px"}},[n("el-carousel",{staticStyle:{"margin-bottom":"0"},attrs:{type:"card",autoplay:!1,height:"260px",arrow:"never","indicator-position":"none","initial-index":0},on:{change:t.onPlanChange}},[n("ProCarouselItem",{attrs:{name:"vip-annually"}},[n("div",{staticClass:"plan"},[n("div",{staticClass:"plan__header"},[n("span",[t._v(" 3 SPOTS LEFT ")])]),t._v(" "),n("PinkCrown"),t._v(" "),n("div",{staticClass:"plan__title"},[t._v("VIP+")]),t._v(" "),n("p",{staticClass:"plan__price"},[n("span",{staticClass:"plan__price--number"},[t._v("$69")]),t._v(" "),n("span",{staticClass:"plan__price--duration"},[t._v("/mo")])]),t._v(" "),n("p",[t._v("Billed annually")]),t._v(" "),"vip-annually"!==t.selectedPlan?n("div",{staticClass:"plan__line",class:{"plan__line--flip":"pro"===t.selectedPlan}}):t._e()],1)]),t._v(" "),n("ProCarouselItem",{attrs:{name:"vip-monthly"}},[n("div",{staticClass:"plan"},[n("PinkCrown"),t._v(" "),n("div",{staticClass:"plan__title"},[t._v("VIP")]),t._v(" "),n("p",{staticClass:"plan__price"},[n("span",{staticClass:"plan__price--number"},[t._v("$99")]),t._v(" "),n("span",{staticClass:"plan__price--duration"},[t._v("/mo")])]),t._v(" "),n("p",[t._v("Billed monthly")]),t._v(" "),"vip-monthly"!==t.selectedPlan?n("div",{staticClass:"plan__line",class:{"plan__line--flip":"vip-annually"===t.selectedPlan}}):t._e()],1)]),t._v(" "),n("ProCarouselItem",{attrs:{name:"pro"}},[n("div",{staticClass:"plan"},[n("Star",{staticClass:"star"}),t._v(" "),n("div",{staticClass:"plan__title"},[t._v("PRO")]),t._v(" "),n("p",{staticClass:"plan__price"},[n("span",{staticClass:"plan__price--number"},[t._v("$79")]),t._v(" "),n("span",{staticClass:"plan__price--duration"},[t._v("/mo")])]),t._v(" "),n("p",[t._v("Billed monthly")]),t._v(" "),"pro"!==t.selectedPlan?n("div",{staticClass:"plan__line",class:{"plan__line--flip":"vip-monthly"===t.selectedPlan}}):t._e()],1)])],1)],1),t._v(" "),n("div",{staticClass:"modal__field",staticStyle:{"margin-bottom":"24px"}},[n("ul",{staticClass:"modal__pro--text"},[n("li",{staticClass:"modal__field--list"},[n("Check",{staticClass:"fa-crown modal__field--icon"}),t._v(" "),t._m(1)],1),t._v(" "),n("li",{staticClass:"modal__field--list"},[n("Check",{staticClass:"fa-crown modal__field--icon"}),t._v(" "),t._m(2)],1),t._v(" "),n("li",{staticClass:"modal__field--list"},[n("Check",{staticClass:"fa-crown modal__field--icon"}),t._v(" "),t._m(3)],1),t._v(" "),n("li",{staticClass:"modal__field--list"},[n("Check",{staticClass:"fa-crown modal__field--icon"}),t._v(" "),t._m(4)],1),t._v(" "),n("li",{staticClass:"modal__field--list",class:{disabled:"pro"===t.selectedPlan}},[n("Check",{staticClass:"fa-crown modal__field--icon"}),t._v(" "),n("span",{staticClass:"modal__field--span"},[n("b",[t._v(t._s("vip-annually"===t.selectedPlan?12:10))]),t._v(" Private VIP\n          Discord Channels")])],1),t._v(" "),n("li",{staticClass:"modal__field--list",class:{disabled:"pro"===t.selectedPlan||"vip-monthly"===t.selectedPlan}},[n("Check",{staticClass:"fa-crown modal__field--icon"}),t._v(" "),t._m(5)],1)])]),t._v(" "),n("button",{directives:[{name:"loading",rawName:"v-loading",value:t.checkoutLoading,expression:"checkoutLoading"}],staticClass:"btn btn--primary btn__pro",staticStyle:{width:"100%"},attrs:{disabled:t.checkoutLoading},on:{click:function(e){return t.onCheckoutClick()}}},[t.checkoutLoading?t._e():n("span",[t._v(" CONTINUE ")])]),t._v(" "),n("p",{staticClass:"modal__subtitle",staticStyle:{"margin-top":"16px"}},[t._v("\n    Your subscription can be cancelled at any time.\n  ")])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("p",{staticClass:"modal__field modal__subtitle",staticStyle:{"margin-bottom":"24px","max-width":"420px"}},[t._v("\n      Frontend Simplified is recommended by engineers with experience at\n      "),n("b",[t._v("Google, Apple, Atlassian, Canva")]),t._v(" and more.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"modal__field--span"},[n("b",[t._v("Advanced")]),t._v(" Portfolio Tutorial")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"modal__field--span"},[n("b",[t._v("10")]),t._v(" Real-World Project Tutorials")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"modal__field--span"},[n("b",[t._v("Top Tech")]),t._v(" Industry Best Practises")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"modal__field--span"},[t._v("Land "),n("b",[t._v("High Paying")]),t._v(" Jobs Tutorial")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"modal__field--span"},[n("b",[t._v("Highly Exclusive")]),t._v(" Portfolio")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProCarouselItem:function(){return n.e(22).then(n.bind(null,566)).then((function(t){return t.default||t}))}})}}]);