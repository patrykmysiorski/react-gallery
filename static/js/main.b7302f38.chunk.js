(this["webpackJsonpreact-gallery"]=this["webpackJsonpreact-gallery"]||[]).push([[0],{24:function(e,t,r){},25:function(e,t,r){},27:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var c=r(0),i=r(1),n=r.n(i),a=r(17),s=r.n(a),l=(r(24),r(25),r(2)),o=function(){return Object(c.jsx)("h1",{children:"news"})},h=r(10),x=r.n(h),d=[{galleryId:"1",title:"Roma",dateCreated:x()(new Date).subtract("1","month").toDate(),coverUrl:"/img/galleries/box1/main.jpeg",description:"Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio.",tags:[],photos:[]},{galleryId:"2",title:"Morocco",dateCreated:x()(new Date).subtract("1","year").subtract("2","month").subtract("15","days").toDate(),coverUrl:"/img/galleries/box2/main.jpeg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.",tags:[],photos:[]},{galleryId:"3",title:"Thailand",dateCreated:x()(new Date).subtract("3","years").toDate(),coverUrl:"/img/galleries/box3/main.jpeg",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem.",tags:[],photos:[]}],j=(r(27),r(7)),b=r(8),u=r.n(b),p=function(e){var t,r,i=e.id,n=e.title,a=e.date,s=e.description,l=e.coverUrl,o=e.backgroundColor;return Object(c.jsx)("div",{className:u()("gallery-box","".concat(o&&"background-color")),children:Object(c.jsxs)(j.b,{to:"/gallery/".concat(i),children:[Object(c.jsx)("div",{className:"picture-box",children:Object(c.jsx)("img",{src:"/react-gallery"+l,alt:"cover"})}),Object(c.jsxs)("div",{className:u()("gallery-box__info","p-1","flex-col-container","flex-justify-end"),children:[Object(c.jsx)("h3",{className:"m-b-1",children:n}),Object(c.jsx)("span",{children:(t=s,r=200,t.length>r?"".concat(t.substring(0,r)).concat("..."):t)}),Object(c.jsx)("div",{className:"date",children:Object(c.jsx)("i",{children:Object(c.jsx)("p",{children:x()(a).format("DD.MM.YYYY")})})})]})]})})},m=(r(33),function(){var e=d.concat(d);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"m-t-2",children:"My galleries"}),Object(c.jsx)("div",{className:u()("galleries-container","galleries-container","flex-row-container","flex-wrap","m-t-2"),children:e.map((function(e,t){return Object(c.jsx)(p,{id:e.galleryId,title:e.title,date:e.dateCreated,description:e.description,coverUrl:e.coverUrl,backgroundColor:t%2===0})}))})]})}),g=(r(34),function(){return Object(c.jsx)(c.Fragment,{children:["text here text here text here text here text here text here text\n              here text here text here text here text here text here text here\n              text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here ","text here text here text here"].map((function(e){return Object(c.jsxs)("div",{className:"single-item",children:[Object(c.jsx)("div",{id:"photo",children:Object(c.jsx)("p",{children:"photo here"})}),Object(c.jsx)("div",{id:"text",children:Object(c.jsx)("p",{children:e})}),Object(c.jsx)("div",{id:"footer",children:Object(c.jsx)("p",{children:"foot here"})})]})}))})}),O=function(){var e=Object(l.f)();return Object(c.jsx)("h1",{children:"gallery page with id ".concat(e.galleryId)})},f="/news",v=r.p+"static/media/logo.103b5fa1.svg",y=(r(35),function(){return Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:u()("logo-part","flex-row-container","flex-align-items-center"),children:[Object(c.jsx)("img",{className:"logo",src:v,alt:"app logo",height:70}),Object(c.jsx)("h2",{children:"React Gallery"})]}),Object(c.jsxs)("div",{className:"buttons flex-row-container flex-justify-end",children:[Object(c.jsx)(j.b,{to:"/",children:"Galleries"}),Object(c.jsx)(j.b,{to:"".concat(f),children:"News"})]})]})})}),N=function(){return Object(c.jsxs)("div",{className:"app-container",children:[Object(c.jsx)(y,{}),Object(c.jsx)("div",{className:"app-content",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(m,{})}),Object(c.jsx)(l.a,{path:"".concat(f),children:Object(c.jsx)(o,{})}),Object(c.jsx)(l.a,{path:"".concat("/contact"),children:Object(c.jsx)(g,{})}),Object(c.jsx)(l.a,{path:"".concat("/gallery/:galleryId"),children:Object(c.jsx)(O,{})})]})})]})};s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(j.a,{basename:"/react-gallery",children:Object(c.jsx)(N,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b7302f38.chunk.js.map