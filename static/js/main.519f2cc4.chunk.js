(this.webpackJsonpfrp=this.webpackJsonpfrp||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r,s=n(0),c=n.n(s),a=n(17),i=n.n(a),o=n(11),j=n(2),l=n(8),b=n(20),d=n(13),u=new(n(37).a);!function(e){e[e.Send=0]="Send",e[e.Clear=1]="Clear",e[e.Favorite=2]="Favorite"}(r||(r={}));var x={data:[],newDataCount:0},f=x,p=function(e,t,n){switch(console.log(f),e){case r.Clear:f=x,u.next(f);break;case r.Send:f=Object(d.a)(Object(d.a)({},f),{},{data:[].concat(Object(b.a)(f.data),[t]),newDataCount:f.newDataCount+1}),u.next(f);break;case r.Favorite:void 0!==n&&(f.data[n].favorited=!f.data[n].favorited,f=Object(d.a)({},f)),u.next(f);break;default:throw new Error("Need to be exhaustive")}},h={init:function(){return u.next(f)},subscribe:function(e){return u.subscribe(e)},initialState:x},O=n(1),v=function(){var e=Object(s.useState)(h.initialState),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){h.subscribe(c),h.init()}),[]);return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{children:"Alfath 1"}),Object(O.jsx)("div",{className:"chat-box",children:n.data.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:e.person,style:{backgroundColor:e.favorited?"red":void 0},children:[" ","second-person"===e.person?Object(O.jsx)("button",{style:{marginRight:"100px"},onClick:function(){return p(r.Favorite,{person:"",text:"",favorited:!1},t)},children:e.favorited?"unfavorite":"Favorite"}):null,e.text]}),Object(O.jsx)("div",{className:"clear"})]})}))}),Object(O.jsxs)("form",{id:"messageForm",onSubmit:function(e){e.preventDefault();var t={person:"first-person",text:e.currentTarget.messageInput.value.trim(),favorited:!1};p(r.Send,t)},style:{width:800},children:[Object(O.jsx)("input",{type:"text",id:"messageInput",name:"messageInput",placeholder:"type here...",required:!0}),Object(O.jsx)("button",{type:"submit",children:"Send"})," ",Object(O.jsx)("br",{})]}),Object(O.jsx)("button",{className:"clear-button",onClick:function(){return p(r.Clear,{person:"",text:"",favorited:!1})},children:"Clear Chat"})]})},m=function(){var e=Object(s.useState)(h.initialState),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){h.subscribe(c),h.init()}),[]);return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{style:{float:"right"},children:"Alfath 2"}),Object(O.jsx)("div",{className:"chat-box",children:n.data.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:e.person,style:{backgroundColor:e.favorited?"red":void 0},children:[e.text,"first-person"===e.person?Object(O.jsxs)("button",{style:{marginLeft:"100px"},onClick:function(){return p(r.Favorite,{person:"",text:"",favorited:!1},t)},children:[" ",console.log(t),"Favorite"]}):null]}),Object(O.jsx)("div",{className:"clear"})]})}))}),Object(O.jsxs)("form",{id:"messageForm",onSubmit:function(e){e.preventDefault();var t={person:"second-person",text:e.currentTarget.messageInput.value.trim(),favorited:!1};p(r.Send,t)},children:[Object(O.jsx)("input",{type:"text",id:"messageInput",name:"messageInput",required:!0}),Object(O.jsx)("button",{type:"submit",children:"Send"})," ",Object(O.jsx)("br",{})]}),Object(O.jsx)("button",{className:"clear-button",onClick:function(){return p(r.Clear,{person:"",text:"",favorited:!1})},children:"Clear Chat"})]})},g=function(){var e=Object(s.useState)(h.initialState),t=Object(l.a)(e,2),n=t[0],r=t[1],c=window.location.href.split("/")[3];Object(s.useEffect)((function(){h.subscribe(r),h.init()}),[]);var a=n.newDataCount>0&&Object(O.jsx)("span",{className:"notify",children:n.newDataCount});return Object(O.jsxs)("div",{className:"switcher-div",children:[Object(O.jsx)(o.b,{to:"/first-person",children:Object(O.jsxs)("button",{className:"switcher",children:["Person1","first-person"!==c&&c.length>1&&a]})}),Object(O.jsx)(o.b,{to:"/second-person",children:Object(O.jsxs)("button",{className:"switcher",children:["Person2","second-person"!==c&&a]})})]})},C=(n(34),function(){return Object(O.jsx)(o.a,{children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/",component:v,exact:!0}),Object(O.jsx)(j.a,{path:"/first-person",component:v,exact:!0}),Object(O.jsx)(j.a,{path:"/second-person",component:m,exact:!0})]})]})})});i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.519f2cc4.chunk.js.map