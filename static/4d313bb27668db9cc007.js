(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{169:function(t,r,e){var content=e(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(50).default)("1c93b39a",content,!0,{sourceMap:!1})},170:function(t,r,e){var content=e(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(50).default)("36873827",content,!0,{sourceMap:!1})},171:function(t,r,e){"use strict";var n=e(3),o=e(16),l=e(19),c=e(100),f=e(51),d=e(9),h=e(52).f,m=e(67).f,v=e(10).f,x=e(172).trim,k=n.Number,_=k,w=k.prototype,T="Number"==l(e(66)(w)),N="trim"in String.prototype,y=function(t){var r=f(t,!1);if("string"==typeof r&&r.length>2){var e,n,o,l=(r=N?r.trim():x(r,3)).charCodeAt(0);if(43===l||45===l){if(88===(e=r.charCodeAt(2))||120===e)return NaN}else if(48===l){switch(r.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+r}for(var code,c=r.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+r};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(t){var r=arguments.length<1?0:t,e=this;return e instanceof k&&(T?d(function(){w.valueOf.call(e)}):"Number"!=l(e))?c(new _(y(r)),e,k):y(r)};for(var C,I=e(8)?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)o(_,C=I[E])&&!o(k,C)&&v(k,C,m(_,C));k.prototype=w,w.constructor=k,e(11)(n,"Number",k)}},172:function(t,r,e){var n=e(7),o=e(18),l=e(9),c=e(173),f="["+c+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(t,r,e){var o={},f=l(function(){return!!c[t]()||"​"!="​"[t]()}),d=o[t]=f?r(v):c[t];e&&(o[e]=d),n(n.P+n.F*f,"String",o)},v=m.trim=function(t,r){return t=String(o(t)),1&r&&(t=t.replace(d,"")),2&r&&(t=t.replace(h,"")),t};t.exports=m},173:function(t,r){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},174:function(t,r,e){"use strict";var n=e(169);e.n(n).a},175:function(t,r,e){(t.exports=e(49)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}@-webkit-keyframes rotate{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}to{-webkit-transform:rotateY(1turn);transform:rotateY(1turn)}}@keyframes rotate{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}to{-webkit-transform:rotateY(1turn);transform:rotateY(1turn)}}",""])},176:function(t,r,e){"use strict";var n=e(170);e.n(n).a},177:function(t,r,e){(t.exports=e(49)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.actions,.links{padding-top:15px}.button--action{display:inline-block;border-radius:4px;border:1px solid #3b70d0;color:#3b70d0;text-decoration:none;padding:10px}.button--action:hover{color:#fff;background-color:#3b70d0}",""])},179:function(t,r,e){"use strict";e.r(r);var n=e(0),o=(e(171),n.a.extend({props:{counter:Number},data:function(){return{animation:{}}},computed:{rotation:function(){return this.animation}},watch:{counter:function(t){var r=this;this.animation={animation:"none"},setTimeout(function(){r.animation={animation:"rotate 1s linear 0s ".concat(t," forwards")}},10)}}})),l=(e(174),e(24)),c=Object(l.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{style:this.rotation},[this._m(0)])},[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"VueToNuxtLogo"},[r("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),r("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),r("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),r("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,f=n.a.extend({components:{Logo:c},data:function(){return{tada:0,sparkles:0,thumbsup:0,heart:0}},computed:{counter:function(){return this.tada+this.sparkles+this.thumbsup+this.heart}},methods:{addTada:function(){this.tada++},addSparkles:function(){this.sparkles++},addThumbsup:function(){this.thumbsup++},addHeart:function(){this.heart++},clear:function(){this.tada=0,this.sparkles=0,this.thumbsup=0,this.heart=0}}}),d=(e(176),Object(l.a)(f,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"container"},[e("div",[e("logo",{attrs:{counter:t.counter}}),t._v(" "),e("h1",{staticClass:"title"},[t._v("\n      pwa-base-app\n    ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n      My majestic Nuxt.js project\n    ")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"actions"},[e("a",{staticClass:"button--action",on:{click:t.addTada}},[t._v("🎉 "+t._s(t.tada))]),t._v(" "),e("a",{staticClass:"button--action",on:{click:t.addSparkles}},[t._v("✨ "+t._s(t.sparkles))]),t._v(" "),e("a",{staticClass:"button--action",on:{click:t.addThumbsup}},[t._v("👍 "+t._s(t.thumbsup))]),t._v(" "),e("a",{staticClass:"button--action",on:{click:t.addHeart}},[t._v("🧡 "+t._s(t.heart))]),t._v(" "),e("a",{staticClass:"button--grey",on:{click:t.clear}},[t._v("Clear")])])],1)])},[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"links"},[r("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[this._v("Documentation")]),this._v(" "),r("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[this._v("GitHub")])])}],!1,null,null,null));r.default=d.exports}}]);