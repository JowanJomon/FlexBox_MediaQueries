(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{407:function(e,r){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},408:function(e,r,t){var n=t(29),o=t(13),c="["+t(407)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),f=function(e){return function(r){var t=o(n(r));return 1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t}};e.exports={start:f(1),end:f(2),trim:f(3)}},409:function(e,r,t){"use strict";t.d(r,"d",(function(){return n})),t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return c})),t.d(r,"e",(function(){return l})),t.d(r,"c",(function(){return d}));t(410);var n={name:"",email:"",password:""},o={email:"",password:""},c=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l={name:[{required:!0,message:"Please enter your name.",trigger:"change",validator:function(e,r,t){!(r=n.name)&&(r=""),""===r.trim()?t(new Error("Please enter the first name")):t()}},{min:0,max:24,message:"Please enter less than 24 characters.",trigger:"change"}],email:[{required:!0,message:"Please enter your email.",trigger:"change"},{message:"Please enter a valid email.",validator:function(e,r,t){""===(r=n.email)?t(new Error("Your email is required")):c.test(r)?t():t(new Error("Please enter a valid email"))},trigger:"blur"}],password:[{required:!0,message:"Please enter your password.",trigger:"change",validator:function(e,r,t){(n.password?n.password:"").length<6?t(new Error):t()}}]},d={email:[{required:!0,message:"Please enter your email.",trigger:"change"},{message:"Please enter a valid email.",validator:function(e,r,t){""===(r=o.email)?t(new Error("Your email is required")):c.test(r)?t():t(new Error("Please enter a valid email"))},trigger:"blur"}],password:[{required:!0,message:"Please enter your password.",trigger:"change",validator:function(e,r,t){""===(o.password?o.password:"")?t(new Error("Your password is required")):t()}}]}},410:function(e,r,t){"use strict";var n=t(3),o=t(408).trim;n({target:"String",proto:!0,forced:t(411)("trim")},{trim:function(){return o(this)}})},411:function(e,r,t){var n=t(5),o=t(407);e.exports=function(e){return n((function(){return!!o[e]()||"​᠎"!="​᠎"[e]()||o[e].name!==e}))}},557:function(e,r,t){"use strict";t.r(r);t(33),t(28),t(42),t(50),t(22),t(51);var n=t(2),o=t(9),data=(t(34),t(11),t(21),t(27),t(76),t(409)),c=t(30);function l(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(r){Object(o.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var f={components:{AngleLeft:function(){return t.e(108).then(t.bind(null,583))}},data:function(){return{forgotEmail:"",forgotFeedbackSuccess:"",forgotFeedbackError:"",intervalId:null,resendTimer:60,forgotPasswordLoading:!1}},methods:d(d({},Object(c.b)("auth",["verifyForgotPassword"])),{},{onSubmit:function(){this.$emit("submit",this.forgotEmail)},startResendTimer:function(){var e=this;this.intervalId=setInterval((function(){e.resendTimer--,e.resendTimer<1&&(clearInterval(e.intervalId),e.intervalId=null,e.resendTimer=60)}),1e3)},verifyForgotPw:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.forgotFeedbackSuccess="",data.a.test(e.forgotEmail)){r.next=3;break}return r.abrupt("return",e.forgotFeedbackError="Please enter a valid email address.");case 3:return e.forgotFeedbackError="",e.forgotPasswordLoading=!0,r.prev=5,r.next=8,e.verifyForgotPassword(e.forgotEmail);case 8:e.startResendTimer(),e.forgotFeedbackSuccess="Awesome! We have sent you a message to help you reset your password.",e.forgotPasswordLoading=!1,r.next=17;break;case 13:r.prev=13,r.t0=r.catch(5),e.forgotFeedbackError=r.t0.message,e.forgotPasswordLoading=!1;case 17:case"end":return r.stop()}}),r,null,[[5,13]])})))()}})},m=t(47),component=Object(m.a)(f,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",{staticClass:"modal__title"},[t("button",{staticClass:"btn btn__back btn--secondary",on:{click:function(r){return e.$emit("switchModal","LOGIN")}}},[t("AngleLeft",{staticStyle:{width:"12px"}})],1),e._v("\n    Forgot your password?\n  ")]),e._v(" "),t("p",{staticClass:"form__item"},[e._v("\n    Don't worry, we'll send you a message to help you reset your password.\n  ")]),e._v(" "),e.forgotFeedbackSuccess?t("div",{staticClass:"modal__feedback modal__feedback--success"},[e._v("\n    "+e._s(e.forgotFeedbackSuccess)+"\n  ")]):e._e(),e._v(" "),e.forgotFeedbackError?t("div",{staticClass:"modal__feedback modal__feedback--error"},[e._v("\n    "+e._s(e.forgotFeedbackError)+"\n  ")]):e._e(),e._v(" "),t("form",{staticClass:"admin__form"},[t("div",{staticClass:"form__item"},[e._m(0),e._v(" "),t("el-input",{attrs:{type:"email",placeholder:"jane@example.com"},model:{value:e.forgotEmail,callback:function(r){e.forgotEmail=r},expression:"forgotEmail"}})],1),e._v(" "),t("button",{directives:[{name:"loading",rawName:"v-loading",value:e.forgotPasswordLoading,expression:"forgotPasswordLoading"}],staticClass:"btn btn--primary form__btn",attrs:{disabled:e.forgotPasswordLoading||e.intervalId},on:{click:function(r){return r.preventDefault(),e.verifyForgotPw.apply(null,arguments)}}},[e.forgotPasswordLoading?e._e():t("span",[e._v(" Continue ")])])]),e._v(" "),e.intervalId?t("p",{staticClass:"form__item",staticStyle:{"font-size":"12px"}},[e._v("\n    Resend in "+e._s(e.resendTimer)+" seconds.\n  ")]):e._e()])}),[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"form__label"},[t("p",[e._v("Email")])])}],!1,null,null,null);r.default=component.exports}}]);