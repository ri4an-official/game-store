(this["webpackJsonpgame-store"]=this["webpackJsonpgame-store"]||[]).push([[0],{112:function(e,t,c){},218:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(22),a=c.n(s),i=(c(112),c(80)),j=c(220),o=c(14),b=c(33),d=c(1),l=function(e){var t=e.children;return Object(d.jsxs)("span",{className:"game-description",children:[Object(d.jsx)("h1",{className:"noblock",children:t.title})," ",Object(d.jsxs)("b",{className:"noblock right",children:[t.price," \u0440\u0443\u0431."]})]})},O=function(){var e=Object(o.d)((function(e){return e.gamesStore.games})),t=Object(n.useState)({}),c=Object(i.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(0),j=Object(i.a)(a,2),O=j[0],m=j[1];return Object(n.useEffect)((function(){return s(e.filter((function(e){return e.id===O}))[0])}),[O]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ol",{children:Array(100).fill(0).map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("b",{children:(t%3===0?"Fizz":"")+(t%5===0?"Buzz":"")||t})})}))}),Object(d.jsxs)("div",{children:[Object(d.jsx)(b.b,{className:"btn btn-primary noblock right",to:"/create-game",children:"Add Game"}),Object(d.jsx)("h1",{className:"noblock",children:"Games"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"games",children:[Object(d.jsx)("div",{className:"block-left",children:e.map((function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{setId:function(){return m(e.id)},children:e},Date.now()),Object(d.jsx)("p",{},Date.now()+1)]})}))}),Object(d.jsx)("div",{className:"block-right",children:Object(d.jsx)(l,{children:r})})]})]})},u=function(e){var t=e.children,c=e.setId;return Object(d.jsxs)("div",{onClick:c,className:"game shadow",children:[Object(d.jsx)("h2",{className:"noblock",children:t.title})," ",Object(d.jsxs)("b",{className:"noblock right",children:[t.price," \u0440\u0443\u0431."]}),Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{variant:"secondary",children:"Add to basket"})})]})},m=function(){return Object(d.jsxs)("footer",{children:["\u0421\u0430\u0439\u0442 \u0441\u043e\u0437\u0434\u0430\u043d"," ",Object(d.jsx)("a",{className:"card-link",href:"https://vk.com/ri4an",children:"Guber Vadim"})]})},h=c(221),x=c(225),p=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(h.a,{expand:"lg",children:[Object(d.jsx)(h.a.Brand,{href:"/",children:"Game Store"}),Object(d.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(x.a,{className:"mr-auto",children:[Object(d.jsx)(x.a.Link,{href:"/basket",children:"Basket"}),Object(d.jsx)(x.a.Link,{href:"/login",children:"Sign In"}),Object(d.jsx)(x.a.Link,{href:"/register",children:"Register"})]})})]})})},g=c(9),f=function(e){return Object(d.jsx)(d.Fragment,{})},v=function(e){return Object(d.jsx)(d.Fragment,{})},k=function(e){return Object(d.jsx)(d.Fragment,{})},N=function(){return Object(d.jsxs)("div",{style:{textAlign:"center",color:"red"},children:[Object(d.jsx)("h2",{children:"Not found!"}),Object(d.jsx)(b.b,{className:"nav-link",to:"/",children:"Back to games"})]})},S=c(30),y=c(223),w=c(222),F=c(224),G=Object(w.a)({form:"add-game"})((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(y.a,{className:"col-md-5 mt-5",onSubmit:e.handleSubmit,children:[Object(d.jsxs)(y.a.Group,{children:[Object(d.jsx)(y.a.Label,{children:Object(d.jsx)("h3",{children:"Title"})}),Object(d.jsx)(F.a,{name:"title",component:function(e){var t=e.input;return Object(d.jsx)(y.a.Control,Object(S.a)(Object(S.a)({},t),{},{required:!0,type:"input"}))}})]}),Object(d.jsxs)(y.a.Group,{children:[Object(d.jsx)(y.a.Label,{children:Object(d.jsx)("h3",{children:"Price"})}),Object(d.jsx)(F.a,{name:"price",component:function(e){var t=e.input;return Object(d.jsx)(y.a.Control,Object(S.a)(Object(S.a)({},t),{},{required:!0,type:"input"}))}})]}),Object(d.jsx)(y.a.Group,{children:Object(d.jsx)(j.a,{variant:"success",type:"submit",children:"Create"})})]})})})),A=c(41),C=Object(A.b)({name:"games",initialState:{games:[{id:0,title:"CS:GO",price:1e3},{id:1,title:"Overwatch",price:2e3}],isAuth:!0},reducers:{add:function(e,t){e.games.push(t.payload)},remove:function(e,t){e.games.pop(t.payload)}}}),B=C.reducer,L=C.actions,z=L.add,I=(L.remove,function(){var e=Object(o.d)((function(e){return e.gamesStore.games.map((function(e){return e.id})).filter((function(e){return e})).reverse()[0]})),t=Object(o.c)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Add game"}),Object(d.jsx)(G,{onSubmit:function(c){var n=c.title,r=c.price;return t(z({id:e+1,title:n,price:r}))}})]})}),T=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(p,{}),Object(d.jsx)("div",{className:"app-content",children:Object(d.jsxs)(g.d,{children:[Object(d.jsx)(g.b,{exact:!0,path:"/",component:O}),Object(d.jsx)(g.b,{path:"/basket",component:(e=k,function(t){return Object(o.d)((function(e){return e.gamesStore.isAuth}))?Object(d.jsx)(e,Object(S.a)({},t)):Object(d.jsx)(g.a,{to:"/login"})})}),Object(d.jsx)(g.b,{path:"/login",component:f}),Object(d.jsx)(g.b,{path:"/register",component:v}),Object(d.jsx)(g.b,{path:"/create-game",component:I}),Object(d.jsx)(g.b,{component:N})]})}),Object(d.jsx)(m,{})]});var e},q=(c(217),c(226)),D=Object(A.a)({reducer:{gamesStore:B,form:q.a},middleware:Object(A.c)(),devTools:!1});window.store=D;var E=D;a.a.render(Object(d.jsx)(b.a,{basename:"/game-store",children:Object(d.jsxs)(r.a.StrictMode,{children:[Object(d.jsx)(o.a,{store:E,children:Object(d.jsx)(T,{})}),Object(d.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js"}),Object(d.jsx)("script",{src:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"}),Object(d.jsx)("script",{src:"https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"})]})}),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.9e24a850.chunk.js.map