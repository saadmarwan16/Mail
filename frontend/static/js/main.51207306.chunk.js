(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[2],{11:function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"g",(function(){return a})),n.d(t,"j",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return d}));var c="SET_ALERT",a="REMOVE_ALERT",o="SIGNUP_SUCCESS",i="SIGNUP_FAIL",l="LOGIN_SUCCESS",r="LOGIN_FAIL",u="MAILBOX_LOADING",b="MAILBOX_LOAD_SUCCESS",s="MAILBOX_LOAD_FAIL",d="LOGOUT"},170:function(e,t){},172:function(e,t){},186:function(e,t){},188:function(e,t){},216:function(e,t){},218:function(e,t){},219:function(e,t){},224:function(e,t){},226:function(e,t){},245:function(e,t){},257:function(e,t){},260:function(e,t){},278:function(e,t,n){},280:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(46),i=n.n(o),l=n(75),r=n(6),u=n(78),b=n.n(u),s=n(37),d=n(21),j=n(138),h=n(139),f=n(77),O=n(11),m=[],p=n(9),x=n(166),g={token:localStorage.getItem("token"),isAuthenticated:function(){var e=localStorage.getItem("token"),t=x.decode(e,{complete:!0}),n=new Date;try{return t.payload.exp<n.getTime()}catch(c){return null}}(),loading:!1,email:localStorage.getItem("email")},S={mailboxLoading:!0,isMailboxSwitched:!1},y=Object(d.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case O.h:return[].concat(Object(f.a)(e),[c]);case O.g:return e.filter((function(e){return e.id!==c}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload,a=t.email;switch(n){case O.b:return localStorage.setItem("token",c.access),localStorage.setItem("email",a),Object(p.a)(Object(p.a)({},e),{},{isAuthenticated:!0,loading:!1,token:c.access,email:a});case O.j:return Object(p.a)(Object(p.a)({},e),{},{isAuthenticated:!1,loading:!0});case O.i:case O.a:case O.c:return localStorage.removeItem("token"),localStorage.removeItem("email"),Object(p.a)(Object(p.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,email:null});default:return e}},mailbox:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.mailsLength;switch(n){case O.d:return Object(p.a)(Object(p.a)({},e),{},{mailboxLoading:!0,isMailboxSwitched:!1});case O.f:return Object(p.a)(Object(p.a)({},e),{},{mailboxLoading:!1,isMailboxSwitched:0===c});case O.e:return Object(p.a)(Object(p.a)({},e),{},{mailboxLoading:!1,isMailboxSwitched:!1});default:return e}}}),v=[h.a],L=Object(d.createStore)(y,{},Object(j.composeWithDevTools)(d.applyMiddleware.apply(void 0,v))),I=n(4),A=Object(s.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(I.jsx)("div",{className:"alert alert-".concat(e.alertType),role:"alert",children:e.msg},e.id)}))})),P=(n(278),Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,324))}))),_=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,325))})),w=Object(c.lazy)((function(){return n.e(13).then(n.bind(null,326))})),k=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,327))})),z=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,328))})),M=Object(c.lazy)((function(){return n.e(14).then(n.bind(null,329))})),C=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,330))})),E=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,331))})),T=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,336))})),F=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,332))})),N=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,333))})),D=function(){return Object(I.jsxs)(s.a,{store:L,children:[Object(I.jsx)(A,{}),Object(I.jsx)(l.a,{children:Object(I.jsx)(c.Suspense,{fallback:Object(I.jsx)("div",{className:"main__fallback",children:Object(I.jsx)(b.a,{type:"Oval",color:"#fff",height:40,width:40})}),children:Object(I.jsxs)(r.d,{children:[Object(I.jsx)(r.b,{exact:!0,path:"/login",component:z}),Object(I.jsx)(r.b,{exact:!0,path:"/logout",component:M}),Object(I.jsx)(r.b,{exact:!0,path:"/register",component:C}),Object(I.jsx)(r.b,{exact:!0,path:"/archive",component:P}),Object(I.jsx)(r.b,{exact:!0,path:"/compose",component:_}),Object(I.jsx)(r.b,{exact:!0,path:"/",component:w}),Object(I.jsx)(r.b,{exact:!0,path:"/inbox",component:k}),Object(I.jsx)(r.b,{exact:!0,path:"/sent",component:E}),Object(I.jsx)(r.b,{exact:!0,path:"/:mailbox/:id",component:T}),Object(I.jsx)(r.b,{exact:!0,path:"/trash",component:F}),Object(I.jsx)(r.b,{component:N})]})})})]})},G=function(e){e&&e instanceof Function&&n.e(16).then(n.bind(null,334)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(D,{})}),document.getElementById("root")),G()}},[[280,3,4]]]);
//# sourceMappingURL=main.51207306.chunk.js.map