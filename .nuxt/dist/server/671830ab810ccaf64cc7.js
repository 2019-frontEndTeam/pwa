exports.ids=[2,1],exports.modules={28:function(t,e,n){var content=n(30);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("6817736f",content,!0,t)}},29:function(t,e,n){"use strict";n.r(e);var r=n(28),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},30:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".about{min-height:100vh}",""])},31:function(t,e,n){var content=n(34);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("10d00c62",content,!0,t)}},32:function(t,e,n){"use strict";n.r(e);var r={data:()=>({}),mounted(){}},o=n(1);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"about",on:{click:function(e){return t.$router.push("/")}}},[t._ssrNode("\n  about\n")])}),[],!1,(function(t){var e=n(29);e.__inject__&&e.__inject__(t)}),null,"195995f6");e.default=component.exports},33:function(t,e,n){"use strict";n.r(e);var r=n(31),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},34:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".index .van-icon{font-size:.53333rem}.index .van-hairline--bottom:after{border:none}.index .van-grid-item{height:5.86667rem;padding:.26667rem}.index .van-grid-item__content{box-shadow:0 .02667rem .13333rem #ebedf0;border-radius:.16rem}.index .van-hairline--top:after,[class*=van-hairline]:after{border:none}.index .van-grid-item__icon{font-size:1.33333rem;top:-.53333rem}.index .van-grid-item__text{position:relative;top:-.4rem;color:#000;font-weight:600}.van-tabs{padding-top:1.25333rem}.van-tabs__line{z-index:0}",""])},35:function(t,e,n){"use strict";n.r(e);n(32);var r={data:()=>({active:1,checked:!1}),created(){0}},o=n(1);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("van-nav-bar",{attrs:{fixed:""}},[n("van-icon",{attrs:{slot:"left",name:"search"},slot:"left"}),t._v(" "),n("h3",{attrs:{slot:"title"},slot:"title"},[t._v("Mango")]),t._v(" "),n("van-dropdown-menu",{attrs:{slot:"right",overlay:!0},slot:"right"},[n("van-dropdown-item",{ref:"item",attrs:{title:"筛选"}},[n("van-switch-cell",{attrs:{title:"包邮"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)],1)],1),t._ssrNode(" "),n("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(8,(function(t){return n("van-tab",{key:t,attrs:{name:t,title:"标签 "+t}})})),1),t._ssrNode(" "),n("van-grid",{staticClass:"pd",attrs:{clickable:"","column-num":2}},t._l(10,(function(t){return n("van-grid-item",{key:t,attrs:{to:"/about",icon:"photo-o",text:"中部吊灯"}})})),1)],2)}),[],!1,(function(t){var e=n(33);e.__inject__&&e.__inject__(t)}),null,"130b0fca");e.default=component.exports}};