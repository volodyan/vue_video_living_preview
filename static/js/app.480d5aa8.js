(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,l){e.exports=l("56d7")},"0654":function(e,t,l){"use strict";l("b0c0")},1:function(e,t){},"2a05":function(e,t,l){"use strict";l("2cf1")},"2cf1":function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);var n=l("d4ec"),a=l("262e"),r=l("2caf"),s=(l("e260"),l("e6cf"),l("cca6"),l("a79d"),l("2b0e")),i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("router-view")],1)},o=[],u=(l("5c0b"),l("2877")),c={},p=Object(u["a"])(c,i,o,!1,null,null,null),f=p.exports,d=(l("d3b7"),l("3ca3"),l("ddb0"),l("8c4f"));l("bb51");s["default"].use(d["a"]);var h=[{path:"/",name:"Home",component:function(){return Promise.resolve().then(l.bind(null,"bb51"))}}],y=new d["a"]({routes:h}),m=y,v=l("2f62");s["default"].use(v["a"]);var b=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}}),g=l("bc3a"),w=l.n(g),$=l("5c96"),S=l.n($),P=(l("0fae"),l("d6d3")),x=l.n(P),F=(l("fda2"),l("3d33")),j=l.n(F);s["default"].use(S.a),s["default"].prototype.$axios=w.a,s["default"].use(x.a);var k=j.a.getPlugin("plugin"),_=function(e){Object(a["a"])(l,e);var t=Object(r["a"])(l);function l(){return Object(n["a"])(this,l),t.apply(this,arguments)}return l}(k);j.a.registerPlugin("examplePlugin",_),j.a.addLanguage("es",{Pause:"暂停"}),s["default"].config.productionTip=!1,new s["default"]({router:m,store:b,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,l){"use strict";l("9c0c")},"9c0c":function(e,t,l){},b0c0:function(e,t,l){},bb51:function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"home"},[l("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"hello"},[l("teslflvjs",{tag:"component"})],1)},s=[],i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"item"},[l("div",{staticClass:"player"},[l("video-player",{staticClass:"vjs-custom-skin",attrs:{options:e.playerOptions}})],1)])])},o=[],u=(l("b5c1"),{data:function(){return{playerOptions:{height:"360",sources:[{type:"rtmp/mp4",src:"rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov"}],techOrder:["flash"],autoplay:!1,controls:!0}}}}),c=u,p=l("2877"),f=Object(p["a"])(c,i,o,!1,null,null,null),d=f.exports,h=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("video",{ref:"player",attrs:{id:"videoElement",controls:"",autoplay:"",muted:"",width:"300px",height:"200px"},domProps:{muted:!0},on:{dblclick:e.fullScreen}}),l("button",{on:{click:e.play}},[e._v("播放")])])},y=[],m=l("fc78"),v=l.n(m),b={data:function(){return{flvPlayer:null}},mounted:function(){this.InitPalyFun("http://1011.hlsplay.aodianyun.com/demo/game.flv")},methods:{Axiosfun:function(){var e=this;this.$axios.get("data/video.json").then((function(t){console.log("Axiosfun",t,window.location.host);window.location.host;e.InitPalyFun("http://1011.hlsplay.aodianyun.com/demo/game.flv")}))},InitPalyFun:function(e){if(v.a.isSupported()){var t=document.getElementById("videoElement");this.flvPlayer=v.a.createPlayer({type:"flv",isLive:!0,hasAudio:!1,url:e}),this.flvPlayer.attachMediaElement(t),this.flvPlayer.load(),this.flvPlayer.play()}},play:function(){this.flvPlayer.play()},fullScreen:function(){this.$refs.player.requestFullScreen?this.$refs.player.requestFullScreen():this.$refs.player.mozRequestFullScreen?this.$refs.player.mozRequestFullScreen():this.$refs.player.webkitRequestFullScreen&&this.$refs.player.webkitRequestFullScreen()}}},g=b,w=(l("0654"),Object(p["a"])(g,h,y,!1,null,null,null)),$=w.exports,S=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("video",{ref:"player",staticClass:"demo-video",attrs:{muted:""},domProps:{muted:!0},on:{dblclick:e.fullScreen}})])},P=[],x=(l("a9e3"),{props:{rtsp:{type:String,default:"rtsp://admin:sysc123456@10.1.19.100:17213/Streaming/Channels/1501"},id:{type:[String,Number],default:"1"}},data:function(){return{player:null,loading:!0}},watch:{rtsp:{handler:function(e){var t=this;e&&(this.player&&(this.player.unload(),this.player.destroy(),this.player=null,this.loading=!0),this.$nextTick((function(){t.playVideo()})))},immediate:!0}},methods:{fullScreen:function(){this.$refs.player.requestFullScreen?this.$refs.player.requestFullScreen():this.$refs.player.mozRequestFullScreen?this.$refs.player.mozRequestFullScreen():this.$refs.player.webkitRequestFullScreen&&this.$refs.player.webkitRequestFullScreen()},playVideo:function(){var e=this,t=(new Date).getTime();if(v.a.isSupported()){var l=this.$refs.player;if(l){this.player=v.a.createPlayer({type:"flv",isLive:!0,url:"ws://localhost:8888/rtsp/?url=".concat(this.rtsp)}),this.player.attachMediaElement(l);try{this.player.load(),this.player.play().then((function(){console.log((new Date).getTime()-t),e.loading=!1}))}catch(n){console.log(n)}}}}},beforeDestroy:function(){this.player&&(this.player.unload(),this.player.destroy(),this.player=null)}}),F=x,j=(l("2a05"),Object(p["a"])(F,S,P,!1,null,null,null)),k=j.exports,_={name:"HelloWorld",components:{testvideo:d,teslflvjs:$,nodeflv:k}},q=_,O=Object(p["a"])(q,r,s,!1,null,"75588f49",null),E=O.exports,R={name:"Home",components:{HelloWorld:E}},C=R,H=Object(p["a"])(C,n,a,!1,null,null,null);t["default"]=H.exports}},[[0,"runtime","chunk-vendors"]]]);