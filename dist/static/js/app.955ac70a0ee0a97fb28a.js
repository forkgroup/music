webpackJsonp([8],{"2Fki":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:{type:String,default:""},confirmBtnText:{type:String,default:"确定"},cancelBtnText:{type:String,default:"取消"}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1},cancel:function(){this.hide(),this.$emit("cancel")},confirm:function(){this.hide(),this.$emit("confirm")}}}},"34KM":function(t,e){},"3Q4o":function(t,e,n){"use strict";function i(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}function s(t,e){if(!i(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}function r(t,e,n){return n?t.setAttribute("data-"+e,n):t.getAttribute("data-"+e)}function a(t){return!1!==c&&("standard"===c?t:c+t.charAt(0).toUpperCase()+t.substr(1))}e.c=s,e.b=r,e.a=a;var o=document.createElement("div").style,c=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==o[t[e]])return e;return!1}()},"3unW":function(t,e,n){n("bQbu");var i=n("8+ys")(n("xwCQ"),n("IQAV"),"data-v-ab2a96ce",null);t.exports=i.exports},"4NE4":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"confirm-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"confirm",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"confirm-wrapper"},[n("div",{staticClass:"confirm-content"},[n("p",{staticClass:"text"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"operate"},[n("div",{staticClass:"operate-btn left",on:{click:t.cancel}},[t._v(t._s(t.cancelBtnText))]),t._v(" "),n("div",{staticClass:"operate-btn",on:{click:t.confirm}},[t._v(t._s(t.confirmBtnText))])])])])])])},staticRenderFns:[]}},"4Ywh":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},"5fUs":function(t,e,n){n("IcCr");var i=n("8+ys")(n("FxWo"),n("B01l"),"data-v-42385496",null);t.exports=i.exports},B01l:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-circle"},[n("svg",{attrs:{width:t.radius,height:t.radius,viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"progress-background",attrs:{r:"50",cx:"50",cy:"50",fill:"transparent"}}),t._v(" "),n("circle",{staticClass:"progress-bar",attrs:{r:"50",cx:"50",cy:"50",fill:"transparent","stroke-dasharray":t.dashArray,"stroke-dashoffset":t.dashOffset}})]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},BrIN:function(t,e,n){n("dB5Y");var i=n("8+ys")(n("4Ywh"),n("ZSjg"),"data-v-328e5736",null);t.exports=i.exports},DbrZ:function(t,e){t.exports="data:image/png;base64,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"},"Du/2":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return o}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return d}),n.d(e,"j",function(){return f});var i="SET_SINGER",s="SET_PLAYING_STATE",r="SET_FULL_SCREEN",a="SET_PLAYLIST",o="SET_SEQUENCE_LIST",c="SET_PLAY_MODE",l="SET_CURRENT_INDEX",u="SET_DISC",d="SET_TOP_LIST",f="SET_SEARCH_HISTORY"},EpDI:function(t,e){},"F4+m":function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var i=n("34v0"),s=n.n(i),r=n("NYxO"),a=n("W/7t"),o=n("hhm8"),c={computed:s()({},n.i(r.a)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}},l={computed:s()({iconMode:function(){return this.mode===a.a.sequence?"icon-sequence":this.mode===a.a.loop?"icon-loop":"icon-random"}},n.i(r.a)(["sequenceList","playlist","currentSong","mode"])),methods:s()({changMode:function(){var t=(this.mode+1)%3;this.setPlayMode(t);var e=null;e=t===a.a.random?n.i(o.a)(this.sequenceList):this.sequenceList,this.resetCurrentIndex(e),this.setPlaylist(e)},resetCurrentIndex:function(t){var e=this,n=t.findIndex(function(t){return t.id===e.currentSong.id});this.setCurrentIndex(n)}},n.i(r.b)({setPlayingState:"SET_PLAYING_STATE",setCurrentIndex:"SET_CURRENT_INDEX",setPlayMode:"SET_PLAY_MODE",setPlaylist:"SET_PLAYLIST"}))}},FFpA:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.progressClick}},[n("div",{staticClass:"bar-inner"},[n("div",{ref:"progress",staticClass:"progress"}),t._v(" "),n("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper",on:{touchstart:function(e){e.preventDefault(),t.progressTouchStart(e)},touchmove:function(e){e.preventDefault(),t.progressTouchMove(e)},touchend:t.progressTouchEnd}},[n("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]}},FxWo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{radius:{type:Number,default:100},percent:{type:Number,default:0}},data:function(){return{dashArray:100*Math.PI}},computed:{dashOffset:function(){return(1-this.percent)*this.dashArray}}}},Hl0q:function(t,e,n){n("M4DS");var i=n("8+ys")(n("fzb3"),n("Q8xH"),"data-v-7776118e",null);t.exports=i.exports},IQAV:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist.length>0,expression:"playlist.length>0"}],staticClass:"player"},[n("transition",{attrs:{name:"normal"},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[n("div",{staticClass:"background"},[n("img",{attrs:{src:"",alt:"",width:"100%",height:"100%",src:t.currentSong.image}})]),t._v(" "),n("div",{staticClass:"top"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),n("h2",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),n("div",{staticClass:"middle",on:{touchstart:function(e){e.preventDefault(),t.middleTouchStart(e)},touchmove:function(e){e.preventDefault(),t.middleTouchMove(e)},touchend:t.middleTouchEnd}},[n("div",{ref:"middleL",staticClass:"middle-l"},[n("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[n("div",{staticClass:"cd",class:t.cdCls},[n("img",{staticClass:"image",attrs:{src:t.currentSong.image,alt:""}})])]),t._v(" "),n("div",{staticClass:"playing-lyric-wrapper"},[n("div",{staticClass:"playing-lyric"},[t._v(t._s(t.playingLyric))])])]),t._v(" "),n("Scroll",{ref:"lyricList",staticClass:"middle-r",attrs:{data:t.currentLyric&&t.currentLyric.lines}},[n("div",{staticClass:"lyric-wrapper"},[t.currentLyric?n("div",t._l(t.currentLyric.lines,function(e,i){return n("p",{ref:"lyricLine",refInFor:!0,staticClass:"text",class:{current:t.currentLineNum===i}},[t._v(t._s(e.txt))])})):t._e()])])],1),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"dot-wrapper"},[n("span",{staticClass:"dot",class:{active:"cd"===t.currentShow}}),t._v(" "),n("span",{staticClass:"dot",class:{active:"lyric"===t.currentShow}})]),t._v(" "),n("div",{staticClass:"progress-wrapper"},[n("span",{staticClass:"time time-l"},[t._v(t._s(t.format(t.currentTime)))]),t._v(" "),n("div",{staticClass:"progress-bar-wrapper"},[n("progress-bar",{attrs:{percent:t.percent},on:{percentChange:t.onProgressBarChange}})],1),t._v(" "),n("span",{staticClass:"time time-r"},[t._v(t._s(t.format(t.currentSong.duration)))])]),t._v(" "),n("div",{staticClass:"operators"},[n("div",{staticClass:"icon i-left",on:{click:t.changMode}},[n("i",{class:t.iconMode})]),t._v(" "),n("div",{staticClass:"icon i-left",class:t.diableCls},[n("i",{staticClass:"icon-prev",on:{click:t.prev}})]),t._v(" "),n("div",{staticClass:"icon i-center"},[n("i",{class:t.playIcon,on:{click:t.togglePlaying}})]),t._v(" "),n("div",{staticClass:"icon i-right",class:t.diableCls},[n("i",{staticClass:"icon-next",on:{click:t.next}})]),t._v(" "),n("div",{staticClass:"icon i-right"},[n("i",{staticClass:"icon icon-not-favorite"})])])])])]),t._v(" "),n("transition",{attrs:{name:"mini"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:t.open}},[n("div",{staticClass:"icon"},[n("img",{class:t.cdCls,attrs:{src:t.currentSong.image,alt:"",width:"100%",height:"100%"}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),n("div",{staticClass:"control"},[n("progress-circle",{attrs:{radius:t.radius,percent:t.percent}},[n("i",{staticClass:"icon-mini",class:t.miniIcon,on:{click:function(e){e.stopPropagation(),t.togglePlaying(e)}}})])],1),t._v(" "),n("div",{staticClass:"control",on:{click:function(e){e.stopPropagation(),t.showPlaylist(e)}}},[n("i",{staticClass:"icon-playlist"})])])]),t._v(" "),n("playlist",{ref:"playlist"}),t._v(" "),n("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{canplay:t.ready,error:t.error,timeupdate:t.updateTime,ended:t.end}})],1)},staticRenderFns:[]}},IcCr:function(t,e){},IcnI:function(t,e,n){"use strict";var i=n("gt1m"),s=n("NYxO"),r=n("mUbh"),a=n("UjVw"),o=n("lwq5"),c=n("ukYY"),l=n("sax8");n.n(l);i.a.use(s.d);e.a=new s.d.Store({actions:r,getters:a,state:o.a,mutations:c.a,strict:!1,plugins:[]})},"Kf/3":function(t,e,n){"use strict";function i(t,e,n,i){var s=t.findIndex(n);0!==s&&(s>0&&t.splice(s,1),t.unshift(e),i&&t.length>i&&t.pop())}function s(t,e){var n=t.findIndex(e);n>-1&&t.splice(n,1)}function r(t){var e=u.a.get(d,[]);return i(e,t,function(e){return e===t},f),u.a.set(d,e),e}function a(t){var e=u.a.get(d,[]);return s(e,function(e){return e===t}),u.a.set(d,e),e}function o(){return u.a.get(d,[])}function c(){return u.a.remove(d),[]}e.b=r,e.c=a,e.a=o,e.d=c;var l=n("MfZv"),u=n.n(l),d="__search__",f=15},Kj4w:function(t,e){},M4DS:function(t,e){},M93x:function(t,e,n){n("Kj4w");var i=n("8+ys")(n("dY2U"),n("yPbi"),"data-v-821a0664",null);t.exports=i.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("j1ja"),s=(n.n(i),n("gt1m")),r=n("M93x"),a=n.n(r),o=n("YaEn"),c=n("IcnI"),l=n("v5o6"),u=n.n(l),d=n("cTzj"),f=n.n(d),h=n("34KM"),p=(n.n(h),n("Lw6n"));n.n(p);s.a.config.productionTip=!1,u.a.attach(document.body),s.a.use(f.a,{loading:n("DbrZ")}),new s.a({el:"#app",router:o.a,store:c.a,template:"<App/>",components:{App:a.a}})},Q8xH:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"list-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"playlist",on:{click:t.hide}},[n("div",{staticClass:"list-wrapper",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"list-header"},[n("h1",{staticClass:"title"},[n("i",{staticClass:"icon",class:t.iconMode,on:{click:t.changMode}}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(t.modeText))]),t._v(" "),n("span",{staticClass:"clear",on:{click:t.showConfirm}},[n("i",{staticClass:"icon-clear"})])])]),t._v(" "),n("scroll",{ref:"listContent",staticClass:"list-content",attrs:{data:t.sequenceList,refreshDelay:t.refreshDelay}},[n("transition-group",{ref:"list",attrs:{name:"list",tag:"ul"}},t._l(t.sequenceList,function(e,i){return n("li",{key:e.id,staticClass:"item",on:{click:function(n){t.selectItem(e,i)}}},[n("i",{staticClass:"current",class:t.getCurrentIcon(e)}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"like",on:{click:function(n){n.stopPropagation(),t.toggleFavorite(e)}}},[n("i",{class:t.getFavoriteIcon(e)})]),t._v(" "),n("span",{staticClass:"delete",on:{click:function(n){n.stopPropagation(),t.deleteOne(e)}}},[n("i",{staticClass:"icon-delete"})])])}))],1),t._v(" "),n("div",{staticClass:"list-operate"},[n("div",{staticClass:"add",on:{click:t.addSong}},[n("i",{staticClass:"icon-add"}),t._v(" "),n("span",{staticClass:"text"},[t._v("添加歌曲到队列")])])]),t._v(" "),n("div",{staticClass:"list-close",on:{click:t.hide}},[n("span",[t._v("关闭")])])],1),t._v(" "),n("confirm",{ref:"confirm",attrs:{text:"是否清空播放列表",confirmBtnText:"清空"},on:{confirm:t.confirmClear}})],1)])},staticRenderFns:[]}},UjVw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"singer",function(){return i}),n.d(e,"playing",function(){return s}),n.d(e,"fullScreen",function(){return r}),n.d(e,"playlist",function(){return a}),n.d(e,"sequenceList",function(){return o}),n.d(e,"mode",function(){return c}),n.d(e,"currentIndex",function(){return l}),n.d(e,"currentSong",function(){return u}),n.d(e,"disc",function(){return d}),n.d(e,"topList",function(){return f}),n.d(e,"searchHistory",function(){return h});var i=function(t){return t.singer},s=function(t){return t.playing},r=function(t){return t.fullScreen},a=function(t){return t.playlist},o=function(t){return t.sequenceList},c=function(t){return t.mode},l=function(t){return t.currentIndex},u=function(t){return t.playlist[t.currentIndex]||{}},d=function(t){return t.disc},f=function(t){return t.topList},h=function(t){return t.searchHistory}},"W/7t":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={sequence:0,loop:1,random:2}},XEAW:function(t,e,n){n("wASI");var i=n("8+ys")(n("2Fki"),n("4NE4"),"data-v-14da4794",null);t.exports=i.exports},Xtdt:function(t,e,n){n("EpDI");var i=n("8+ys")(n("jwFS"),n("icQF"),"data-v-1b287599",null);t.exports=i.exports},YaEn:function(t,e,n){"use strict";var i=n("gt1m"),s=n("nYn5"),r=function(t){n.e(4).then(n.bind(null,"W1+L")).then(function(e){t(e)})},a=function(t){n.e(5).then(n.bind(null,"0IpB")).then(function(e){t(e)})},o=function(t){n.e(3).then(n.bind(null,"lEJ1")).then(function(e){t(e)})},c=function(t){n.e(2).then(n.bind(null,"NSSj")).then(function(e){t(e)})},l=function(t){n.e(6).then(n.bind(null,"Kjo5")).then(function(e){t(e)})},u=function(t){n.e(1).then(n.bind(null,"s3x3")).then(function(e){t(e)})},d=function(t){n.e(0).then(n.bind(null,"YOyO")).then(function(e){t(e)})};i.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/recommend",name:"recommend",component:r},{path:"/recommend",component:r,children:[{path:":id",name:"disc",component:c}]},{path:"/singer",name:"singer",component:a,children:[{path:"/singer/:id",name:"singerDetail",component:o}]},{path:"/rank",name:"rank",component:l,children:[{path:":id",component:u}]},{path:"/search",name:"search",component:d,children:[{path:":id",component:o}]}]})},ZSjg:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[n("span",{staticClass:"tab-link"},[t._v("排行\n    ")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}},bQbu:function(t,e){},dB5Y:function(t,e){},dY2U:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xtdt"),s=n.n(i),r=n("3unW"),a=n.n(r),o=n("BrIN"),c=n.n(o);e.default={components:{MHeader:s.a,Tab:c.a,Player:a.a}}},fzb3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("34v0"),s=n.n(i),r=n("NYxO"),a=n("W/7t"),o=n("qwAB"),c=n.n(o),l=n("XEAW"),u=n.n(l),d=n("F4+m");e.default={mixins:[d.a],data:function(){return{showFlag:!1,refreshDelay:120}},computed:{modeText:function(){return this.mode===a.a.sequence?"顺序播放":this.mode===a.a.random?"随机播放":"单曲循环"}},methods:s()({hide:function(){this.showFlag=!1},show:function(){var t=this;this.showFlag=!0,setTimeout(function(){t.$refs.listContent.refresh()},20)},addSong:function(){},deleteOne:function(t){this.deleteSong(t),this.playlist.length||this.hide()},toggleFavorite:function(){},selectItem:function(t,e){this.mode===a.a.random&&(e=this.playlist.findIndex(function(e){return e.id===t.id})),this.setCurrentIndex(e),this.setPlayingState(!0)},getCurrentIcon:function(t){return this.currentSong.id===t.id?"icon-play":""},scrollToCurrent:function(t){var e=this.sequenceList.findIndex(function(e){return t.id===e.id});this.$refs.listContent.scrollToElement(this.$refs.list.$el.children[e],300)},showConfirm:function(){this.$refs.confirm.show()},confirmClear:function(){this.deleteSongList(),this.hide()},getFavoriteIcon:function(){}},n.i(r.c)(["deleteSong","deleteSongList"])),watch:{currentSong:function(t,e){var n=this;this.showFlag&&t.id!==e.id&&setTimeout(function(){n.scrollToCurrent(t)},20)}},components:{Scroll:c.a,Confirm:u.a}}},hhm8:function(t,e,n){"use strict";function i(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function s(t){for(var e=t.slice(),n=0;n<e.length;n++){var s=i(0,n),r=e[n];e[n]=e[s],e[s]=r}return e}function r(t,e){var n=void 0;return function(){for(var i=this,s=arguments.length,r=Array(s),a=0;a<s;a++)r[a]=arguments[a];n&&clearTimeout(n),n=setTimeout(function(){t.apply(i,r)},e)}}e.a=s,e.b=r},icQF:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("爱过方之情深,醉过方之酒浓")]),t._v(" "),n("router-link",{staticClass:"mine",attrs:{tag:"div",to:"/user"}},[n("i",{staticClass:"icon-mine"})])],1)},staticRenderFns:[]}},jwFS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},lwq5:function(t,e,n){"use strict";var i=n("W/7t"),s=n("Kf/3"),r={singer:{},playing:!1,fullScreen:!1,playlist:[],sequenceList:[],mode:i.a.sequence,currentIndex:-1,disc:{},topList:{},searchHistory:n.i(s.a)()};e.a=r},mUbh:function(t,e,n){"use strict";function i(t,e){return t.findIndex(function(t){return t.id===e.id})}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"selectPlay",function(){return c}),n.d(e,"randomPlay",function(){return l}),n.d(e,"insertSong",function(){return u}),n.d(e,"saveSearchHistory",function(){return d}),n.d(e,"deleteSearchHistory",function(){return f}),n.d(e,"clearSearchHistory",function(){return h}),n.d(e,"deleteSong",function(){return p}),n.d(e,"deleteSongList",function(){return v});var s=n("Du/2"),r=n("W/7t"),a=n("hhm8"),o=n("Kf/3"),c=function(t,e){var o=t.commit,c=t.state,l=e.list,u=e.index;if(o(s.e,l),c.mode===r.a.random){var d=n.i(a.a)(l);o(s.d,d),u=i(d,l[u])}else o(s.d,l);o(s.g,u),o(s.c,!0),o(s.b,!0)},l=function(t,e){var i=t.commit,o=e.list;i(s.f,r.a.random),i(s.e,o);var c=n.i(a.a)(o);i(s.d,c),i(s.g,0),i(s.c,!0),i(s.b,!0)},u=function(t,e){var n=t.commit,r=t.state,a=r.playlist.slice(),o=r.sequenceList.slice(),c=r.currentIndex,l=a[c],u=i(a,e);c++,a.splice(c,0,e),u>-1&&(c>u?(a.splice(u,1),c--):a.splice(u+1,1));var d=i(o,l)+1,f=i(o,e);o.splice(d,0,e),f>-1&&(d>f?o.splice(f,1):o.splice(f+1,1)),n(s.d,a),n(s.e,o),n(s.g,c),n(s.c,!0),n(s.b,!0)},d=function(t,e){(0,t.commit)(s.j,n.i(o.b)(e))},f=function(t,e){(0,t.commit)(s.j,n.i(o.c)(e))},h=function(t){(0,t.commit)(s.j,n.i(o.d)())},p=function(t,e){var n=t.commit,r=t.state,a=r.playlist.slice(),o=r.sequenceList.slice(),c=r.currentIndex,l=i(a,e);a.splice(l,1);var u=i(o,e);o.splice(u,1),(c>l||c===a.length)&&c--,n(s.d,a),n(s.e,o),n(s.g,c),a.length?n(s.b,!0):n(s.b,!1)},v=function(t){var e=t.commit;e(s.g,-1),e(s.d,[]),e(s.e,[]),e(s.b,!1)}},oKal:function(t,e){},oKzF:function(t,e){},qwAB:function(t,e,n){n("oKal");var i=n("8+ys")(n("zSd7"),n("st+O"),"data-v-1b678a54",null);t.exports=i.exports},"st+O":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},tlq6:function(t,e,n){n("oKzF");var i=n("8+ys")(n("vyUO"),n("FFpA"),"data-v-1baeb9d8",null);t.exports=i.exports},ukYY:function(t,e,n){"use strict";var i,s=n("WxFH"),r=n.n(s),a=n("Du/2"),o=(i={},r()(i,a.a,function(t,e){t.singer=e}),r()(i,a.b,function(t,e){t.playing=e}),r()(i,a.c,function(t,e){t.fullScreen=e}),r()(i,a.d,function(t,e){t.playlist=e}),r()(i,a.e,function(t,e){t.sequenceList=e}),r()(i,a.f,function(t,e){t.mode=e}),r()(i,a.g,function(t,e){t.currentIndex=e}),r()(i,a.h,function(t,e){t.disc=e}),r()(i,a.i,function(t,e){t.topList=e}),r()(i,a.j,function(t,e){t.searchHistory=e}),i);e.a=o},vyUO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3Q4o"),s=n.i(i.a)("transform");e.default={props:{percent:{type:Number,default:0}},created:function(){this.touch={}},methods:{progressTouchStart:function(t){this.touch.initiated=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},progressTouchMove:function(t){if(this.touch.initiated){var e=t.touches[0].pageX-this.touch.startX,n=Math.min(this.$refs.progressBar.clientWidth-16,Math.max(0,this.touch.left+e));this._offset(n)}},progressTouchEnd:function(){this.touch.initiated=!1,this._triggerPercent()},progressClick:function(t){var e=this.$refs.progressBar.getBoundingClientRect(),n=t.pageX-e.left;this._offset(n),this._triggerPercent()},_triggerPercent:function(){var t=this.$refs.progressBar.clientWidth-16,e=this.$refs.progress.clientWidth/t;this.$emit("percentChange",e)},_offset:function(t){this.$refs.progress.style.width=t+"px",this.$refs.progressBtn.style[s]="translate3d("+t+"px,0,0)"}},watch:{percent:function(t){if(t>=0&&!this.touch.initiated){var e=this.$refs.progressBar.clientWidth-16,n=t*e;this._offset(n)}}}}},wASI:function(t,e){},xwCQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("34v0"),s=n.n(i),r=n("NYxO"),a=n("EhXH"),o=n.n(a),c=n("3Q4o"),l=n("tlq6"),u=n.n(l),d=n("5fUs"),f=n.n(d),h=n("W/7t"),p=n("OKJt"),v=n.n(p),g=n("qwAB"),m=n.n(g),y=n("Hl0q"),A=n.n(y),C=n("F4+m"),S=n.i(c.a)("transform"),x=n.i(c.a)("transitionDuration");e.default={mixins:[C.a],data:function(){return{songReady:!1,currentTime:0,radius:32,currentLyric:null,currentLineNum:0,playingLyric:"",currentShow:"cd"}},computed:s()({playIcon:function(){return this.playing?"icon-pause":"icon-play"},miniIcon:function(){return this.playing?"icon-pause-mini":"icon-play-mini"},diableCls:function(){return this.songReady?"":"disable"},percent:function(){return this.currentTime/this.currentSong.duration},cdCls:function(){return this.playing?"play":"play pause"}},n.i(r.a)(["fullScreen","playing","currentIndex"])),created:function(){this.touch={}},methods:s()({showPlaylist:function(){this.$refs.playlist.show()},getLyric:function(){var t=this;this.currentSong.getLyric().then(function(e){t.currentSong.lyric===e&&(t.currentLyric=new v.a(e,t.handleLyric),t.playing&&t.currentLyric.play())}).catch(function(){t.currentLyric=null,t.playingLyric="",t.currentLineNum=0})},handleLyric:function(t){var e=t.lineNum,n=t.txt;if(this.currentLineNum=e,e>5){var i=this.$refs.lyricLine[e-5];this.$refs.lyricList.scrollToElement(i,1e3)}else this.$refs.lyricList.scrollTo(0,0,1e3);this.playingLyric=n},middleTouchStart:function(t){this.touch.initiated=!0,this.touch.moved=!1;var e=t.touches[0];this.touch.startX=e.pageX,this.touch.startY=e.pageY},middleTouchMove:function(t){if(this.touch.initiated){var e=t.touches[0],n=e.pageX-this.touch.startX,i=e.pageY-this.touch.startY;if(!(Math.abs(i)>Math.abs(n))){this.touch.moved||(this.touch.moved=!0);var s="cd"===this.currentShow?0:-window.innerWidth,r=Math.min(0,Math.max(-window.innerWidth,s+n));this.touch.percent=Math.abs(r/window.innerWidth),this.$refs.lyricList.$el.style[S]="translate3d("+r+"px,0,0)",this.$refs.lyricList.$el.style[x]=0,this.$refs.middleL.style.opacity=1-this.touch.percent,this.$refs.middleL.style[x]=0}}},middleTouchEnd:function(){if(this.touch.moved){var t=void 0,e=void 0;"cd"===this.currentShow?this.touch.percent>.1?(t=-window.innerWidth,e=0,this.currentShow="lyric"):(t=0,e=1):this.touch.percent<.9?(t=0,this.currentShow="cd",e=1):(t=-window.innerWidth,e=0);this.$refs.lyricList.$el.style[S]="translate3d("+t+"px,0,0)",this.$refs.lyricList.$el.style[x]="300ms",this.$refs.middleL.style.opacity=e,this.$refs.middleL.style[x]="300ms",this.touch.initiated=!1}},back:function(){this.setFullScreen(!1)},open:function(){this.setFullScreen(!0)},enter:function(t,e){var n=this._getPosAndScale(),i=n.x,s=n.y,r=n.scale,a={0:{transform:"translate3d("+i+"px,"+s+"px,0) scale("+r+")"},60:{transform:"translate3d(0,0,0) scale(1.1)"},100:{transform:"translate3d(0,0,0) scale(1)"}};o.a.registerAnimation({name:"move",animation:a,presets:{duration:400,easing:"linear"}}),o.a.runAnimation(this.$refs.cdWrapper,"move",e)},afterEnter:function(){o.a.unregisterAnimation("move"),this.$refs.cdWrapper.style.animation=""},leave:function(t,e){this.$refs.cdWrapper.style.transition="all 0.4s";var n=this._getPosAndScale(),i=n.x,s=n.y,r=n.scale;this.$refs.cdWrapper.style[S]="translate3d("+i+"px,"+s+"px,0) scale("+r+")",this.$refs.cdWrapper.addEventListener("transitionend",e)},afterLeave:function(){this.$refs.cdWrapper.style.transition="",this.$refs.cdWrapper.style[S]=""},next:function(){if(!this.songReady)return!1;if(1===this.playlist.length)return this.loop(),!1;var t=this.currentIndex+1;t==this.playlist.length&&(t=0),this.setCurrentIndex(t),this.playing||this.togglePlaying(),this.songReady=!1},prev:function(){if(!this.songReady)return!1;if(1===this.playlist.length)return this.loop(),!1;var t=this.currentIndex-1;-1==t&&(t=this.playlist.length-1),this.setCurrentIndex(t),this.playing||this.togglePlaying(),this.songReady=!1},ready:function(){this.songReady=!0},error:function(){this.songReady=!0},end:function(){this.mode==h.a.loop?this.loop():this.next()},loop:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.setPlayingState(!0),this.currentLyric&&this.currentLyric.seek(0)},updateTime:function(t){this.currentTime=t.target.currentTime},format:function(t){return((t|=0)/60|0)+":"+this._pad(t%60)},_pad:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t.toString().length;n<e;)t="0"+t,n++;return t},onProgressBarChange:function(t){var e=this.currentSong.duration*t;this.$refs.audio.currentTime=e,this.playing||this.togglePlaying(),this.currentLyric&&this.currentLyric.seek(1e3*e)},togglePlaying:function(){this.songReady&&(this.setPlayingState(!this.playing),this.currentLyric&&this.currentLyric.togglePlay())},_getPosAndScale:function(){var t=.8*window.innerWidth,e=40/t;return{x:-(window.innerWidth/2-40),y:window.innerHeight-80-t/2-30,scale:e}}},n.i(r.b)({setFullScreen:"SET_FULL_SCREEN"})),watch:{currentSong:function(t,e){var n=this;t.id&&t.id!==e.id&&(this.currentLyric&&(this.currentLyric.stop(),this.currentTime=0,this.playingLyric="",this.currentLineNum=0),clearTimeout(this.timer),n.timer=setTimeout(function(){n.$refs.audio.play(),n.getLyric()},1e3))},playing:function(t){var e=this.$refs.audio;this.$nextTick(function(){t?e.play():e.pause()})}},components:{ProgressBar:u.a,ProgressCircle:f.a,Scroll:m.a,Playlist:A.a}}},yPbi:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{touchmove:function(t){t.preventDefault()}}},[n("m-header"),t._v(" "),n("tab"),t._v(" "),n("keep-alive",[n("router-view")],1),t._v(" "),n("player")],1)},staticRenderFns:[]}},zSd7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("43Vb"),s=n.n(i);e.default={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},pulldown:{type:Boolean,default:!1},listenScroll:{type:Boolean,default:!1},pullup:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new s.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.pulldown&&this.scroll.on("touchend",function(e){e.y>50&&t.$emit("pulldown")}),this.listenScroll){var e=this;this.scroll.on("scroll",function(t){e.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}}}},["NHnr"]);
//# sourceMappingURL=app.955ac70a0ee0a97fb28a.js.map