(this["webpackJsonpreact-gallery"]=this["webpackJsonpreact-gallery"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(0),n=c.n(r),i=c(16),l=c.n(i),s=(c(23),c(24),c.p+"static/media/logo.103b5fa1.svg"),o=c(7),j=c(2),d=function(){return Object(a.jsx)("h1",{children:"news"})},b=c(9),h=c.n(b),x=[{galleryId:"1",title:"Rzym",dateCreated:h()(new Date).subtract("1","month").toDate(),coverUrl:"/img/galleries/box1/main.jpeg",description:"Kilka dni zwariowanego wypadu do Rzymu.",tags:[],photos:[]},{galleryId:"2",title:"Maroko",dateCreated:h()(new Date).subtract("1","year").subtract("2","month").subtract("15","days").toDate(),coverUrl:"/img/galleries/box2/main.jpeg",description:"Tydzie\u0144 zwiedzania po\u0142udniowego Maroka z ojcem.",tags:[],photos:[]},{galleryId:"3",title:"Tajlandia",dateCreated:h()(new Date).subtract("3","years").toDate(),coverUrl:"/img/galleries/box3/main.jpeg",description:"Dwa tygodnie wycieczki po Tajlandii.",tags:[],photos:[]}],g=(c(26),function(e){var t=e.id,c=e.title,r=e.date,n=e.description,i=e.coverUrl;return Object(a.jsx)("div",{className:"gallery-box",children:Object(a.jsxs)(o.b,{to:"/gallery/".concat(t),children:[Object(a.jsx)("h1",{children:c}),Object(a.jsx)("div",{className:"picture-box",children:Object(a.jsx)("img",{src:"/react-gallery"+i,alt:"cover"})}),Object(a.jsx)("p",{children:h()(r).format("DD.MM.YYYY HH:MM")}),Object(a.jsx)("p",{children:n})]})})}),O=(c(32),function(){var e=x.concat(x);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"My travels"}),Object(a.jsx)("div",{className:"flex-row-container flex-wrap flex-justify-space-around",children:e.map((function(e){return Object(a.jsx)(g,{id:e.galleryId,title:e.title,date:e.dateCreated,description:e.description,coverUrl:e.coverUrl})}))})]})}),p=function(){return Object(a.jsx)("h1",{children:"contact"})},u=function(){var e=Object(j.f)();return Object(a.jsx)("h1",{children:"gallery page with id ".concat(e.galleryId)})},m="/contact",y="/news",v=function(){return console.log(y),console.log("/react-gallery"),Object(a.jsxs)("div",{className:"app-container",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("img",{className:"logo",src:s,alt:"app logo",height:70}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"nav__links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/",children:"Galleries"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"".concat(y),children:"News"})})]})}),Object(a.jsx)(o.b,{to:"".concat(m),children:Object(a.jsx)("button",{type:"button",className:"contact-button",children:"Contact us"})})]})}),Object(a.jsx)("div",{className:"app-content",children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",children:Object(a.jsx)(O,{})}),Object(a.jsx)(j.a,{path:"".concat(y),children:Object(a.jsx)(d,{})}),Object(a.jsx)(j.a,{path:"".concat(m),children:Object(a.jsx)(p,{})}),Object(a.jsx)(j.a,{path:"".concat("/gallery/:galleryId"),children:Object(a.jsx)(u,{})})]})})]})};l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(o.a,{basename:"/react-gallery",children:Object(a.jsx)(v,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.017c4613.chunk.js.map