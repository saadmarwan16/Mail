(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{281:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return p}));var o=n(285),r=n.n(o),i=n(286),a=n(282),s=n.n(a),c=n(283),l=n(11),h=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(o){var i,a,h;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={headers:{"Content-Type":"application/json"}},a=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,s.a.post("".concat("https://mail914.herokuapp.com","/api/token/"),a,i);case 5:h=n.sent,o({type:l.b,payload:h.data,email:e}),o(Object(c.a)("Login successful","success")),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),o({type:l.a}),o(Object(c.a)("Oops! Login failed","danger"));case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()},u=function(e){var t=e.name,n=e.email,o=e.password,a=e.confirmation;return function(){var e=Object(i.a)(r.a.mark((function e(i){var u,p,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={headers:{"Content-Type":"application/json"}},p=JSON.stringify({name:t,email:n,password:o,confirmation:a}),e.prev=2,e.next=5,s.a.post("".concat("https://mail914.herokuapp.com","/api/accounts/signup"),p,u);case 5:d=e.sent,i({type:l.j,payload:d.data}),i(h(n,o)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),i({type:l.i}),i(Object(c.a)("Oops! Registration failed","danger"));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},p=function(){return function(e){e(Object(c.a)("Logout successful","success")),e({type:l.c,email:null})}}},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(335),r=n(11),i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(i){var a=Object(o.a)();i({type:r.h,payload:{msg:e,alertType:t,id:a}}),setTimeout((function(){return i({type:r.g,payload:a})}),n)}}},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var o=n(9),r=n(77),i=n(76),a=n(282),s=n.n(a);function c(e,t,n,a,c){var l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}},h=JSON.stringify(Object(i.a)({},n,!0));try{s.a.put("".concat("https://mail914.herokuapp.com","/api/emails/email/").concat(t),h,l).then((function(i){if("read"===n)for(var s=0;s<a.length;s++)if(a[s].id===t){var l=Object(r.a)(a);return l[s]=Object(o.a)(Object(o.a)({},l[s]),{},{read:!0}),void c(l)}e.style.animationPlayState="running",e.addEventListener("animationend",(function(){c(a.filter((function(e){return e.id!==t})))}))}))}catch(u){}}function l(e,t,n,a,c){var l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}},h=JSON.stringify(Object(i.a)({},n,!1));try{s.a.put("".concat("https://mail914.herokuapp.com","/api/emails/email/").concat(t),h,l).then((function(i){if("read"===n)for(var s=0;s<a.length;s++)if(a[s].id===t){var l=Object(r.a)(a);return l[s]=Object(o.a)(Object(o.a)({},l[s]),{},{read:!1}),void c(l)}e.style.animationPlayState="running",e.addEventListener("animationend",(function(){c(a.filter((function(e){return e.id!==t})))}))}))}catch(u){}}},288:function(e,t,n){"use strict";n(0);var o=n(75),r=n(37),i=n(281),a=n(4),s=Object(r.b)((function(e){return{email:e.auth.email}}),{logout:i.b})((function(e){var t=e.logout,n=e.email;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"main__owner-address",children:n}),Object(a.jsx)(o.c,{className:"btn btn-sm btn-outline-primary main__nav-btn",exact:!0,to:"/inbox",children:"Inbox"}),Object(a.jsx)(o.c,{className:"btn btn-sm btn-outline-primary main__compose-btn",to:"/compose",children:"Compose"}),Object(a.jsx)(o.c,{className:"btn btn-sm btn-outline-primary main__nav-btn",to:"/sent",children:"Sent"}),Object(a.jsx)(o.c,{className:"btn btn-sm btn-outline-primary main__nav-btn",to:"/archive",children:"Archive"}),Object(a.jsx)(o.c,{className:"btn btn-sm btn-outline-primary main__nav-btn",to:"/trash",children:"Trash"}),Object(a.jsx)(o.b,{className:"btn btn-sm btn-outline-primary main__logout-btn",to:"/logout",onClick:t,children:"Log Out"}),Object(a.jsx)("hr",{className:"main__seperator"})]})}));t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"main",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(s,{}),Object(a.jsx)("div",{className:"container",children:e.children})]})})})}},292:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var a=function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var s="Pixel",c="Percent",l={unit:c,value:.8};function h(e){return"number"===typeof e?{unit:c,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:s,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:c,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),l):(console.warn("scrollThreshold should be string or number"),l)}var u=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1},n.throttledOnScrollListener=function(e,t,n,o){var r,i=!1,a=0;function s(){r&&clearTimeout(r)}function c(){var c=this,l=Date.now()-a,h=arguments;function u(){a=Date.now(),n.apply(c,h)}function p(){r=void 0}i||(o&&!r&&u(),s(),void 0===o&&l>e?u():!0!==t&&(r=setTimeout(o?p:u,void 0===o?e-l:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),c.cancel=function(){s(),i=!0},c}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=h(t);return o.unit===s?e.scrollTop<=o.value+n-e.scrollHeight+1:e.scrollTop<=o.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=h(t);return o.unit===s?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=a({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.a.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(o.Component);t.a=u},293:function(e,t,n){"use strict";n(0);var o=n(75),r=n(287),i=n(4);t.a=function(e){var t=e.mailbox,n=e.mails,a=e.setMails;return Object(i.jsx)("div",{className:"list-group",children:n.map((function(e){return Object(i.jsxs)(o.b,{className:"main__mail ".concat(e.read?"main__read":""),to:"/".concat(t,"/").concat(e.id),onClick:function(t){return function(e,t){if(e.target.classList.contains("main__mail__content__icons__icon")){e.preventDefault();var o=e.target.parentNode.parentNode.parentNode.parentNode;"delete"===e.target.innerText?Object(r.a)(o,t,"trashed",n,a):"restore_from_trash"===e.target.innerText?Object(r.b)(o,t,"trashed",n,a):"archive"===e.target.innerText?Object(r.a)(o,t,"archived",n,a):"unarchive"===e.target.innerText?Object(r.b)(o,t,"archived",n,a):"mark_email_read"===e.target.innerText?Object(r.a)(o,t,"read",n,a):"mark_email_unread"===e.target.innerText&&Object(r.b)(o,t,"read",n,a)}}(t,e.id)},children:[Object(i.jsxs)("div",{className:"main__mail__sender-timestamp",children:[Object(i.jsx)("div",{className:"main__mail__sender-timestamp__sender",children:e.sender}),Object(i.jsx)("div",{className:"main__mail__sender-timestamp__timestamp",children:Object(i.jsx)("small",{children:e.timestamp})})]}),Object(i.jsxs)("div",{className:"main__mail__content",children:[Object(i.jsxs)("div",{className:"main__mail__content__subject-body",children:[Object(i.jsx)("span",{className:"main__mail__content__subject-body__subject",children:e.subject}),Object(i.jsx)("span",{className:"main__mail__content__subject-body__dash",children:" - "}),Object(i.jsx)("span",{className:"main__mail__content__subject-body__body",children:e.body})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"main__mail__content__icons",children:["archive"===t||"trash"===t?null:Object(i.jsx)("i",{title:"Delete",className:"material-icons main__mail__content__icons__icon",children:"delete"}),"trash"===t?Object(i.jsx)("i",{title:"Restore from trash",className:"material-icons main__mail__content__icons__icon",children:"restore_from_trash"}):null,"trash"===t||"sent"===t||"archive"===t?null:Object(i.jsx)("i",{title:"Archive",className:"material-icons main__mail__content__icons__icon",children:"archive"}),"archive"===t?Object(i.jsx)("i",{title:"Unarchive",className:"material-icons main__mail__content__icons__icon",children:"unarchive"}):null,Object(i.jsx)("i",{title:"Mark as read",className:"material-icons main__mail__content__icons__icon \n                                        ".concat(e.read?"hide":""),children:"mark_email_read"}),Object(i.jsx)("i",{title:"Mark as unread",className:"material-icons main__mail__content__icons__icon \n                                        ".concat(e.read?"":"hide"),children:"mark_email_unread"})]})})]})]},e.id)}))})}},294:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n(285),r=n.n(o),i=n(77),a=n(286),s=n(282),c=n.n(s),l=n(11),h=function(e,t,n,o,s,h){return function(){var u=Object(a.a)(r.a.mark((function a(u){var p,d;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u({type:l.d,mailsLength:e.length}),p={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},r.prev=2,r.next=5,c.a.get("".concat("https://mail914.herokuapp.com","/api/emails/mailbox/").concat(h,"/").concat(o),p);case 5:d=r.sent,t([].concat(Object(i.a)(e),Object(i.a)(d.data.body))),n(d.data.has_more),s(d.data.next_number),u({type:l.f,mailsLength:e.length}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(2),u({type:l.e,mailsLength:e.length});case 15:case"end":return r.stop()}}),a,null,[[2,12]])})));return function(e){return u.apply(this,arguments)}}()}},327:function(e,t,n){"use strict";n.r(t);var o=n(290),r=n(0),i=n(289),a=n(6),s=n(37),c=n(78),l=n.n(c),h=n(292),u=n(281),p=n(293),d=n(288),m=n(294),f=n(287),b=n(4);t.default=Object(s.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,mailboxLoading:e.mailbox.mailboxLoading,isMailboxSwitched:e.mailbox.isMailboxSwitched}}),{logout:u.b,loadMailbox:m.a})((function(e){var t=e.isAuthenticated,n=e.logout,s=e.loadMailbox,c=e.mailboxLoading,u=e.isMailboxSwitched,m=Object(r.useState)([]),_=Object(o.a)(m,2),v=_[0],j=_[1],g=Object(r.useState)(!0),x=Object(o.a)(g,2),O=x[0],y=x[1],T=Object(r.useState)(1),w=Object(o.a)(T,2),S=w[0],E=w[1];return Object(r.useEffect)((function(){s(v,j,y,S,E,"inbox")}),[]),t?Object(b.jsxs)(d.a,{children:[Object(b.jsxs)(i.a,{children:[Object(b.jsx)("title",{children:"Inbox - Mail"}),Object(b.jsx)("meta",{name:"Access all your inbox mails here",content:"Inbox page"})]}),Object(b.jsx)("h3",{className:"main__name",children:"Inbox"}),!c&&u&&0===v.length?Object(b.jsx)("div",{className:"main__empty",children:"You inbox is empty"}):Object(b.jsx)(h.a,{dataLength:v.length,next:function(){return s(v,j,y,S,E,"inbox")},hasMore:O,loader:Object(b.jsx)("div",{className:"main__loading",children:Object(b.jsx)(l.a,{type:"Oval",color:"#fff",height:40,width:40})}),endMessage:Object(b.jsx)("p",{className:"main__mails-finished",children:Object(b.jsx)("b",{children:"No more mails in your inbox"})}),children:Object(b.jsx)(p.a,{mailbox:"inbox",mails:v,setMails:j,onMarkClick:f.a,onUnmarkClick:f.b})})]}):(n(),Object(b.jsx)(a.a,{to:"/logout"}))}))}}]);
//# sourceMappingURL=6.8a575da0.chunk.js.map