(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{420:function(e,t,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("c2f67662",content,!0,{sourceMap:!1})},447:function(e,t,n){"use strict";n(420)},448:function(e,t,n){var o=n(61)(!1);o.push([e.i,".promo-bar{background-color:#5625ce;color:#fff;text-align:center;display:flex;align-items:flex-start}.promo-bar__cta{text-decoration:underline;cursor:pointer}.promo-bar__cta--bold{font-weight:700}.promo-bar__text{padding:16px 0 16px 40px;width:100%}.promo-bar__info{display:flex;flex-direction:column;grid-row-gap:6px;row-gap:6px}.promo-bar__timer{font-size:19px}.promo-bar__close{box-sizing:border-box;padding:0 10px;margin:8px;min-width:40px;min-height:40px;font-size:14px;background-color:transparent;border:transparent;color:#fff;opacity:.75}.promo-bar__close i{font-weight:700}@media(max-width:728px){.promo-bar{text-align:left}.promo-bar__text{padding:16px 0 16px 24px}}@media(max-width:528px){.promo-bar__info{display:inline-block}.promo-bar__text{font-size:14px;line-height:1.4}.promo-bar__timer{font-size:14px}}",""]),e.exports=o},556:function(e,t,n){"use strict";n.r(t);n(76);var o=Date.parse(new Date)+216e5-3e3,r={props:["loggedIn"],data:function(){return{timeinterval:null,days:null,hours:null,minutes:null,seconds:null,deadline:null,canceledSubscription:null,recentSubscribedSession:null,hideBanner:!1,timeRemaining:null}},methods:{setTimes:function(){this.timeRemaining=Date.parse(this.deadline)-Date.parse(new Date),this.seconds=Math.floor(this.timeRemaining/1e3%60),this.minutes=Math.floor(this.timeRemaining/1e3/60%60),this.hours=Math.floor(this.timeRemaining/36e5%24),this.days=Math.floor(this.timeRemaining/864e5)},updateClock:function(){this.setTimes(),(this.timeRemaining<=0||this.hideBanner)&&clearInterval(this.timeinterval)},setDeadlineSixHoursFromNow:function(){this.deadline=new Date(o),window.localStorage.setItem("promoDeadline",this.deadline)}},mounted:function(){this.canceledSubscription=window.localStorage.getItem("canceledSubscription"),this.recentSubscribedSession=window.localStorage.getItem("recentSubscribedSession");var e=window.localStorage.getItem("promoDeadline");if(e){if(this.deadline=e,Date.parse(this.deadline)-Date.parse(new Date)<-2592e5){if(this.canceledSubscription||this.recentSubscribedSession)return this.hideBanner=!0;this.setDeadlineSixHoursFromNow()}}else{if(this.canceledSubscription||this.recentSubscribedSession)return this.hideBanner=!0;this.setDeadlineSixHoursFromNow()}this.timeinterval||this.recentSubscribedSession||(this.timeinterval=setInterval(this.updateClock,1e3))},watch:{hideBanner:function(){this.hideBanner&&this.timeinterval&&clearInterval(this.timeinterval)}}},l=(n(447),n(47)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return this.timeRemaining>0&&!e.hideBanner?n("div",{staticClass:"promo-bar"},[n("div",{staticClass:"promo-bar__text"},[n("span",{staticClass:"promo-bar__info"},[n("span",[n("b",[e._v("Save 25% for a limited time")]),e._v(" | A special offer for new\n        students"+e._s(e.loggedIn?": ":". ")),e.loggedIn?n("span",[e._v("use code "),n("b",[e._v("STUDENT25")]),e._v(" at\n          "),n("span",{staticClass:"promo-bar__cta",on:{click:function(t){return e.$emit("openProModal")}}},[e._v("checkout")]),e._v("!")]):n("span",{staticClass:"promo-bar__cta promo-bar__cta--bold",on:{click:function(t){return e.$emit("openRegisterModal")}}},[e._v("Learn More.")])]),e._v(" "),e.hours||e.minutes||e.seconds?n("span",{staticClass:"promo-bar__timer"},[n("b",[e._v("Ends in "),"0"!=e.hours?n("span",[e._v(e._s(e.hours)+"h")]):e._e(),e._v(" "),"0"!=e.minutes?n("span",[e._v(e._s(e.minutes)+"m")]):e._e(),e._v(" "),n("span",[e._v(" "+e._s(e.seconds)+"s. ")])])]):e._e()])]),e._v(" "),n("button",{staticClass:"promo-bar__close",on:{click:function(t){e.hideBanner=!0}}},[n("i",{staticClass:"el-icon-close"})])]):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);