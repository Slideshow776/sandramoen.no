webpackJsonp([0],{"4+hh":function(t,e){},EG1r:function(t,e){},Kv38:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};s.d(a,"requestedReservationStatus",function(){return _}),s.d(a,"requestedWaitingStatus",function(){return g}),s.d(a,"deletedReservationStatus",function(){return w}),s.d(a,"setReservations",function(){return b}),s.d(a,"setWaitingReservations",function(){return S});var i={};s.d(i,"setRequestedReservationStatus",function(){return y});var n=s("7+uW"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("h3",[this._v("Velkommen til WashIt sin hjemmeside!")]),this._v(" "),e("p",[this._v("Her kan du reservere vask, avlyse reservasjoner og sette deg på venteliste.")]),this._v(" "),e("img",{attrs:{src:"https://www.comunicatostampa.org/wp-content/uploads/2017/02/lavanderia-automatica.jpg",alt:"vaskemaskiner"}})])}]};var o=s("VU/8")({name:"Home",data:function(){return{}}},r,!1,function(t){s("tcha")},"data-v-5f1140be",null).exports,c=s("yj/j"),d=s.n(c),u={name:"Games",data:function(){return{games:d.a,showDescription:!1}},mounted:function(){},computed:{},methods:{}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"component"}},t._l(t.games,function(e){return s("md-card",{key:e.id,attrs:{"md-with-hover":""}},[s("md-card-media",[s("img",{staticStyle:{width:"15rem"},attrs:{src:e.image,alt:"cover-image"}})]),t._v(" "),s("md-card-header",[s("div",{staticClass:"md-title"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"md-subhead"},[t._v(t._s(e.subtitle))])]),t._v(" "),s("md-card-content",[t._v("\n      "+t._s(e.description)+"\n      "),s("a",{attrs:{href:e.link}},[t._v("Link")])])],1)}),1)},staticRenderFns:[]};var m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{attrs:{id:"company-info"}},[s("p",[t._v("Org nr: 133 7133 7133")]),t._v(" "),s("p",[t._v("Adresse: Anonsgate 25c, 0101, Oslo")])]),t._v(" "),s("div",{attrs:{id:"contact"}},[s("a",{attrs:{id:"mail",href:"mailto:sandramoen01@gmail.com",target:"_top"}},[t._v("Send e-post")]),t._v(" "),s("p",[t._v("Telefon +47 47053281")])]),t._v(" "),s("div",{attrs:{id:"social-media"}},[s("a",{staticStyle:{color:"white"},attrs:{href:""}},[s("i",{staticClass:"fa fa-facebook-square"})]),t._v(" "),s("a",{staticStyle:{color:"white"},attrs:{href:""}},[s("i",{staticClass:"fa fa-youtube-square"})])])])}]};var v={name:"App",data:function(){return{}},components:{Home:o,Games:s("VU/8")(u,l,!1,function(t){s("Kv38")},"data-v-3f37d65f",null).exports,Footer:s("VU/8")({},m,!1,function(t){s("wx2Z")},"data-v-245f4390",null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",{attrs:{id:"brand"}},[this._v("Sandras Hjemmeside")]),this._v(" "),e("md-tabs",{staticClass:"md-primary",attrs:{"md-sync-route":"","md-alignment":"centered"}},[e("md-tab",{attrs:{id:"tab-home","md-label":"Om meg"}},[e("Home")],1),this._v(" "),e("md-tab",{attrs:{id:"tab-games","md-label":"Spill"}},[e("Games")],1)],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var h=s("VU/8")(v,f,!1,function(t){s("EG1r")},null,null).exports,p=s("NYxO"),_=function(t,e){t.requestedReservationStatus=e},g=function(t,e){t.requestedWaitingStatus=e},w=function(t,e){t.deniedReservation=e},b=function(t,e){t.reservations=e},S=function(t,e){t.waitingList=e},y=function(t,e){(0,t.commit)("requestedReservationStatus",e)},R=s("UjVw");n.default.use(p.a);var k=new p.a.Store({state:{requestedReservationStatus:!1,requestedWaitingStatus:!1,deletedReservationStatus:!1,reservations:[],waitingList:[]},actions:i,mutations:a,getters:R}),q=s("Lgyv"),j=s.n(q);s("4+hh");n.default.use(j.a),new n.default({el:"#app",store:k,components:{App:h},template:"<App/>"})},UjVw:function(t,e){},tcha:function(t,e){},wx2Z:function(t,e){},"yj/j":function(t,e){t.exports={test:{id:0,title:"This is a title",subtitle:"This is a subtitle",description:"This is a description",image:"https://laughingsquid.com/wp-content/uploads/2016/09/tabby-cat-magic-casper.png?w=640",link:"www.google.com"},test2:{id:1,title:"This is a title",subtitle:"This is a subtitle",description:"This is a description",image:"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/TfnFcik/cute-cartoon-dog-animation_eyrf-qofx__F0000.png",link:"www.google.com"}}}},["NHnr"]);
//# sourceMappingURL=app.81228d78d2aa829c1c97.js.map