(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67a15189"],{4055:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"listViewTop"},[a("div",{staticClass:"listViewNav"},[a("img",{staticClass:"bgImg",attrs:{src:t.playList.coverImgUrl}}),a("div",{staticClass:"left"},[a("svg",{staticClass:"icon back",attrs:{"aria-hidden":"true"},on:{click:t.goBack}},[a("use",{attrs:{"xlink:href":"#icon-gonggong-zuojiantou"}})]),a("span",[t._v("歌单")])]),a("div",{staticClass:"right"},[a("svg",{staticClass:"icon search",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-sousuo"}})]),a("svg",{staticClass:"icon more",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-androidgengduo"}})])])]),a("div",{staticClass:"detail"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:t.playList.coverImgUrl}}),a("div",{staticClass:"number"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-play"}})]),a("span",[t._v(t._s(t.formatNumber(t.playList.playCount)))])])]),a("div",{staticClass:"right"},[a("h3",[t._v(t._s(t.playList.name))]),a("div",{staticClass:"author"},[a("img",{staticClass:"authorPic",attrs:{src:t.playList.creator.avatarUrl}}),a("span",[t._v(t._s(t.playList.creator.nickname)+">")])]),a("div",{staticClass:"description"},[t._v(" "+t._s(t.playList.description)+" ")])])]),a("div",{staticClass:"iconList"},[a("div",{staticClass:"iconItem"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-pinglun-"}})]),a("span",[t._v(t._s(t.playList.commentCount))])]),a("div",{staticClass:"iconItem"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-fenxiang"}})]),a("span",[t._v(t._s(t.playList.shareCount))])]),a("div",{staticClass:"iconItem"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-xiazai"}})]),a("span",[t._v("下载")])]),a("div",{staticClass:"iconItem"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-duoxuan"}})]),a("span",[t._v("多选")])])])]),a("div",{staticClass:"playList"},[a("div",{staticClass:"playListTop"},[a("div",{staticClass:"left"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-bofang"}})]),a("span",{staticClass:"playAll"},[t._v("播放全部")]),a("span",{staticClass:"allCount"},[t._v("(共"+t._s(t.playList.tracks.length)+"首)")])]),a("div",{staticClass:"right"},[a("button",[t._v("+ 收藏（"+t._s(t.formatNumber(t.playList.subscribedCount))+"）")])])]),a("div",{staticClass:"songList"},t._l(t.playList.tracks,(function(s,i){return a("div",{key:s.id,staticClass:"songItem"},[a("div",{staticClass:"left"},[a("div",{staticClass:"number"},[t._v(t._s(i+1))]),a("div",{staticClass:"song",on:{click:function(s){return t.setPlayIndex(i)}}},[a("div",{staticClass:"songName"},[t._v(t._s(s.name))]),a("div",{staticClass:"songDetail"},[t._l(s.ar,(function(i,e){return a("span",{key:e},[t._v(" "+t._s(i.name)+" "),e<s.ar.length-1?a("span",[t._v("/")]):t._e()])})),t._v(" - "+t._s(s.al.name)+" ")],2)])]),a("div",{staticClass:"right"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-caozuo-bofang"}})]),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-androidgengduo"}})])])])})),0)]),a("playController")],1)},e=[],n=a("1da1"),r=a("5530"),c=(a("b680"),a("96cf"),a("cf92")),l=a("2f62"),o={components:{playController:c["a"]},computed:Object(r["a"])({},Object(l["d"])(["playCurrentIndex","playlist"])),data:function(){return{playList:{creator:"",tracks:[]},listPlay:!1}},methods:Object(r["a"])({getMusicListDetail:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t.$route.query.id,s.next=3,t.$http.get("playlist/detail",{params:{id:a}});case 3:i=s.sent,console.log(i),t.playList=i.data.playlist,t.$store.commit("setPlayList",t.playList.tracks);case 7:case"end":return s.stop()}}),s)})))()},formatNumber:function(t){return t>=1e8?(t/1e8).toFixed(2)+"亿":t>=1e4?(t/1e4).toFixed(2)+"万":t},goBack:function(){this.$router.go(-1)}},Object(l["c"])(["setPlayIndex","GETLYRIC"])),created:function(){this.getMusicListDetail()}},u=o,d=(a("fab4"),a("2877")),v=Object(d["a"])(u,i,e,!1,null,"62a10e66",null);s["default"]=v.exports},fab0:function(t,s,a){},fab4:function(t,s,a){"use strict";a("fab0")}}]);
//# sourceMappingURL=chunk-67a15189.c33d3d12.js.map