(this["webpackJsonpreact-gallery"]=this["webpackJsonpreact-gallery"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(1),a=c.n(r),s=c(19),i=c.n(s),l=(c(41),c(42),c(6)),o=function(){return Object(n.jsx)("h1",{children:"news"})},j=(c(43),c(8)),b=c(22),d=c.n(b),u=c(15),x=c.n(u),O=function(e){var t,c,r=e.id,a=e.title,s=e.date,i=e.description,l=e.coverUrl,o=e.backgroundColor;return Object(n.jsx)("div",{className:x()("gallery-box","".concat(o&&"background-color")),children:Object(n.jsxs)(j.b,{to:"/gallery/".concat(r),children:[Object(n.jsx)("div",{className:"picture-box",style:{backgroundImage:"url(".concat("/react-gallery"+l,")")}}),Object(n.jsxs)("div",{className:x()("gallery-box__info","p-2","flex-col-container","flex-justify-end"),children:[Object(n.jsx)("h3",{className:"m-b-1",children:a}),Object(n.jsx)("span",{children:(t=i,c=200,t.length>c?"".concat(t.substring(0,c)).concat("..."):t)}),Object(n.jsx)("div",{className:"date",children:Object(n.jsx)("i",{children:Object(n.jsx)("p",{children:d()(s).format("DD.MM.YYYY")})})})]})]})})},h=(c(49),c(16)),f="FETCH_GALLERIES_START",m="FETCH_GALLERIES_SUCCESS",p=c(29),g=Object(p.a)([function(e){return e.galleryReducer}],(function(e){return e.galleries})),v=function(){var e=Object(h.b)();Object(r.useEffect)((function(){e({type:f})}),[e]);var t=Object(h.c)(g);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"m-t-2",children:"My galleries"}),Object(n.jsx)("div",{className:x()("galleries-container","flex-row-container","flex-wrap","m-t-2"),children:t&&t.map((function(e,t){return Object(n.jsx)(O,{id:e.galleryId,title:e.title,date:e.dateCreated,description:e.description,coverUrl:e.coverUrl,backgroundColor:t%2===0},e.galleryId)}))})]})},y=(c(51),function(){return Object(n.jsx)("div",{children:"about/contact"})}),N=c(23),w=(c(52),function(e){var t=e.content,c=e.isEdited;return Object(n.jsxs)("div",{className:"flex-row-container flex-align-items-center tag p-1 m-r-1 m-b-1 m-t-1",children:[Object(n.jsx)("span",{children:t.toUpperCase()}),c&&Object(n.jsx)("span",{className:"material-icons md-20 pointer",onClick:function(){return console.log("fired")},children:"delete_forever"})]})}),k=(c(53),function(e){var t=e.tags,c=Object(r.useState)(!1),a=Object(N.a)(c,2),s=a[0],i=a[1];return Object(n.jsxs)("div",{className:"tags-container flex-row-container m-t-2 flex-wrap",children:[t&&t.map((function(e,t){return Object(n.jsx)(w,{content:e,isEdited:s},t)})),Object(n.jsx)("button",{className:"button button-edit",onClick:function(){return i(!s)},children:Object(n.jsx)("div",{className:"flex-row-container flex-align-items-center",children:Object(n.jsx)("i",{className:"material-icons md-20",children:s?"done":"create"})})})]})}),S=function(){var e,t=Object(l.f)().galleryId,c=Object(h.c)((e=t,Object(p.a)(g,(function(t){return t.find((function(t){return t.galleryId===e}))}))));return Object(n.jsx)(n.Fragment,{children:c&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"flex-row-container flex-align-items-center m-t-2 m-b-1",children:[Object(n.jsx)(j.b,{to:"/",children:Object(n.jsx)("button",{className:"button button-primary",children:Object(n.jsxs)("div",{className:"flex-row-container flex-align-items-center",children:[Object(n.jsx)("i",{className:"material-icons md-16",children:"arrow_back_ios"}),"back to galleries"]})})}),Object(n.jsx)("h2",{className:"m-l-3",children:"".concat(c.title,", ").concat(d()(c.dateCreated).format("DD MMMM YYYY"))})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(k,{tags:c.tags})]})})},C="/news",E=c.p+"static/media/logo.103b5fa1.svg",I=(c(54),c(55),function(){return Object(n.jsxs)("div",{className:"user-panel p-1 flex-col-container",children:[Object(n.jsx)("p",{className:"m-b-1",children:"Signed in as"}),Object(n.jsx)("p",{className:"username m-b-1",children:"yourUsername"}),Object(n.jsx)("hr",{}),Object(n.jsx)(j.b,{to:"profile",children:"Your profile"}),Object(n.jsx)("hr",{}),Object(n.jsx)(j.b,{to:"settings",children:"Settings"}),Object(n.jsx)(j.b,{to:"/",children:"Sign out"})]})}),M=function(){var e=Object(r.useState)(!0),t=Object(N.a)(e,2),c=t[0],a=t[1];return Object(n.jsxs)("header",{children:[Object(n.jsxs)("div",{className:"header p-l-6 p-r-6",children:[Object(n.jsx)(j.b,{to:"/",children:Object(n.jsxs)("div",{className:x()("logo-part","flex-row-container","flex-align-items-center"),children:[Object(n.jsx)("img",{className:"logo",src:E,alt:"app logo",height:70}),Object(n.jsx)("h2",{children:"React Gallery"})]})}),Object(n.jsxs)("div",{className:"links-part flex-row-container",children:[Object(n.jsxs)("div",{className:"buttons flex-row-container flex-justify-end",children:[Object(n.jsx)(j.b,{to:"/",children:"Galleries"}),Object(n.jsx)(j.b,{to:"".concat(C),children:"News"})]}),Object(n.jsx)("div",{className:"user-panel-header m-r-1 m-l-1",onClick:function(){return a(!c)},style:{backgroundImage:"url(".concat("/react-gallery/img/user/user.jpeg",")")}})]})]}),!c&&Object(n.jsx)(I,{})]})},Y=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M,{}),Object(n.jsx)("div",{className:"app-container",children:Object(n.jsx)("div",{className:"app-content",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(v,{})}),Object(n.jsx)(l.a,{path:"".concat(C),children:Object(n.jsx)(o,{})}),Object(n.jsx)(l.a,{path:"".concat("/contact"),children:Object(n.jsx)(y,{})}),Object(n.jsx)(l.a,{path:"".concat("/gallery/:galleryId"),children:Object(n.jsx)(S,{})})]})})})]})},_=c(13),R=c(30),U={galleries:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(R.a)(Object(R.a)({},e),{},{galleries:t.payload});default:return e}},F=Object(_.combineReducers)({galleryReducer:D}),T=c(33),G=c(11),L=c.n(G),A=c(14),H=c(34),J=L.a.mark(z),B=L.a.mark(K),W=L.a.mark(P),q=function(){var e=Object(H.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://my-json-server.typicode.com/patrykmysiorski/fake-api-react-gallery/gallery");case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log("error ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();function z(){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(A.b)(q);case 3:return e=t.sent,t.next=6,Object(A.c)({type:m,payload:e});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error in saga",t.t0);case 11:case"end":return t.stop()}}),J,null,[[0,8]])}function K(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(f,z);case 2:case"end":return e.stop()}}),B)}function P(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([Object(A.b)(K)]);case 2:case"end":return e.stop()}}),W)}var Q=L.a.mark(V);function V(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([Object(A.b)(P)]);case 2:case"end":return e.stop()}}),Q)}var X=c(35),Z=Object(X.a)(),$=Object(_.createStore)(F,Object(T.composeWithDevTools)(Object(_.applyMiddleware)(Z)));Z.run(V);var ee=$;i.a.render(Object(n.jsx)(h.a,{store:ee,children:Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(j.a,{basename:"/react-gallery",children:Object(n.jsx)(Y,{})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.7e15e205.chunk.js.map