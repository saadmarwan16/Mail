(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{281:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(285),o=n.n(r),a=n(286),i=n(282),s=n.n(i),c=n(283),l=n(11),h=function(e,t){return function(){var n=Object(a.a)(o.a.mark((function n(r){var a,i,h;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={headers:{"Content-Type":"application/json"}},i=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,s.a.post("".concat("https://mail914.herokuapp.com","/api/token/"),i,a);case 5:h=n.sent,r({type:l.b,payload:h.data,email:e}),r(Object(c.a)("Login successful","success")),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),r({type:l.a}),r(Object(c.a)("Oops! Login failed","danger"));case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()},u=function(e){var t=e.name,n=e.email,r=e.password,i=e.confirmation;return function(){var e=Object(a.a)(o.a.mark((function e(a){var u,p,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={headers:{"Content-Type":"application/json"}},p=JSON.stringify({name:t,email:n,password:r,confirmation:i}),e.prev=2,e.next=5,s.a.post("".concat("https://mail914.herokuapp.com","/api/accounts/signup"),p,u);case 5:d=e.sent,a({type:l.j,payload:d.data}),a(h(n,r)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),a({type:l.i}),a(Object(c.a)("Oops! Registration failed","danger"));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},p=function(){return function(e){e(Object(c.a)("Logout successful","success")),e({type:l.c,email:null})}}},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(335),o=n(11),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(a){var i=Object(r.a)();a({type:o.h,payload:{msg:e,alertType:t,id:i}}),setTimeout((function(){return a({type:o.g,payload:i})}),n)}}},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(9),o=n(77),a=n(76),i=n(282),s=n.n(i);function c(e,t,n,i,c){var l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}},h=JSON.stringify(Object(a.a)({},n,!0));try{s.a.put("".concat("https://mail914.herokuapp.com","/api/emails/email/").concat(t),h,l).then((function(a){if("read"===n)for(var s=0;s<i.length;s++)if(i[s].id===t){var l=Object(o.a)(i);return l[s]=Object(r.a)(Object(r.a)({},l[s]),{},{read:!0}),void c(l)}e.style.animationPlayState="running",e.addEventListener("animationend",(function(){c(i.filter((function(e){return e.id!==t})))}))}))}catch(u){}}function l(e,t,n,i,c){var l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}},h=JSON.stringify(Object(a.a)({},n,!1));try{s.a.put("".concat("https://mail914.herokuapp.com","/api/emails/email/").concat(t),h,l).then((function(a){if("read"===n)for(var s=0;s<i.length;s++)if(i[s].id===t){var l=Object(o.a)(i);return l[s]=Object(r.a)(Object(r.a)({},l[s]),{},{read:!1}),void c(l)}e.style.animationPlayState="running",e.addEventListener("animationend",(function(){c(i.filter((function(e){return e.id!==t})))}))}))}catch(u){}}},288:function(e,t,n){"use strict";n(0);var r=n(75),o=n(37),a=n(281),i=n(4),s=Object(o.b)((function(e){return{email:e.auth.email}}),{logout:a.b})((function(e){var t=e.logout,n=e.email;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"main__owner-address",children:n}),Object(i.jsx)(r.c,{className:"btn btn-sm btn-outline-primary main__nav-btn",exact:!0,to:"/inbox",children:"Inbox"}),Object(i.jsx)(r.c,{className:"btn btn-sm btn-outline-primary main__compose-btn",to:"/compose",children:"Compose"}),Object(i.jsx)(r.c,{className:"btn btn-sm btn-outline-primary main__nav-btn",to:"/sent",children:"Sent"}),Object(i.jsx)(r.c,{className:"btn btn-sm btn-outline-primary main__nav-btn",to:"/archive",children:"Archive"}),Object(i.jsx)(r.c,{className:"btn btn-sm btn-outline-primary main__nav-btn",to:"/trash",children:"Trash"}),Object(i.jsx)(r.b,{className:"btn btn-sm btn-outline-primary main__logout-btn",to:"/logout",onClick:t,children:"Log Out"}),Object(i.jsx)("hr",{className:"main__seperator"})]})}));t.a=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"main",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(s,{}),Object(i.jsx)("div",{className:"container",children:e.children})]})})})}},292:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var s="Pixel",c="Percent",l={unit:c,value:.8};function h(e){return"number"===typeof e?{unit:c,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:s,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:c,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),l):(console.warn("scrollThreshold should be string or number"),l)}var u=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1},n.throttledOnScrollListener=function(e,t,n,r){var o,a=!1,i=0;function s(){o&&clearTimeout(o)}function c(){var c=this,l=Date.now()-i,h=arguments;function u(){i=Date.now(),n.apply(c,h)}function p(){o=void 0}a||(r&&!o&&u(),s(),void 0===r&&l>e?u():!0!==t&&(o=setTimeout(r?p:u,void 0===r?e-l:e)))}return"boolean"!==typeof t&&(r=n,n=t,t=void 0),c.cancel=function(){s(),a=!0},c}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=h(t);return r.unit===s?e.scrollTop<=r.value+n-e.scrollHeight+1:e.scrollTop<=r.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=h(t);return r.unit===s?e.scrollTop+n>=e.scrollHeight-r.value:e.scrollTop+n>=r.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=i({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return o.a.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},o.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&o.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},o.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(r.Component);t.a=u},293:function(e,t,n){"use strict";n(0);var r=n(75),o=n(287),a=n(4);t.a=function(e){var t=e.mailbox,n=e.mails,i=e.setMails;return Object(a.jsx)("div",{className:"list-group",children:n.map((function(e){return Object(a.jsxs)(r.b,{className:"main__mail ".concat(e.read?"main__read":""),to:"/".concat(t,"/").concat(e.id),onClick:function(t){return function(e,t){if(e.target.classList.contains("main__mail__content__icons__icon")){e.preventDefault();var r=e.target.parentNode.parentNode.parentNode.parentNode;"delete"===e.target.innerText?Object(o.a)(r,t,"trashed",n,i):"restore_from_trash"===e.target.innerText?Object(o.b)(r,t,"trashed",n,i):"archive"===e.target.innerText?Object(o.a)(r,t,"archived",n,i):"unarchive"===e.target.innerText?Object(o.b)(r,t,"archived",n,i):"mark_email_read"===e.target.innerText?Object(o.a)(r,t,"read",n,i):"mark_email_unread"===e.target.innerText&&Object(o.b)(r,t,"read",n,i)}}(t,e.id)},children:[Object(a.jsxs)("div",{className:"main__mail__sender-timestamp",children:[Object(a.jsx)("div",{className:"main__mail__sender-timestamp__sender",children:e.sender}),Object(a.jsx)("div",{className:"main__mail__sender-timestamp__timestamp",children:Object(a.jsx)("small",{children:e.timestamp})})]}),Object(a.jsxs)("div",{className:"main__mail__content",children:[Object(a.jsxs)("div",{className:"main__mail__content__subject-body",children:[Object(a.jsx)("span",{className:"main__mail__content__subject-body__subject",children:e.subject}),Object(a.jsx)("span",{className:"main__mail__content__subject-body__dash",children:" - "}),Object(a.jsx)("span",{className:"main__mail__content__subject-body__body",children:e.body})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"main__mail__content__icons",children:["archive"===t||"trash"===t?null:Object(a.jsx)("i",{title:"Delete",className:"material-icons main__mail__content__icons__icon",children:"delete"}),"trash"===t?Object(a.jsx)("i",{title:"Restore from trash",className:"material-icons main__mail__content__icons__icon",children:"restore_from_trash"}):null,"trash"===t||"sent"===t||"archive"===t?null:Object(a.jsx)("i",{title:"Archive",className:"material-icons main__mail__content__icons__icon",children:"archive"}),"archive"===t?Object(a.jsx)("i",{title:"Unarchive",className:"material-icons main__mail__content__icons__icon",children:"unarchive"}):null,Object(a.jsx)("i",{title:"Mark as read",className:"material-icons main__mail__content__icons__icon \n                                        ".concat(e.read?"hide":""),children:"mark_email_read"}),Object(a.jsx)("i",{title:"Mark as unread",className:"material-icons main__mail__content__icons__icon \n                                        ".concat(e.read?"":"hide"),children:"mark_email_unread"})]})})]})]},e.id)}))})}},294:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(285),o=n.n(r),a=n(77),i=n(286),s=n(282),c=n.n(s),l=n(11),h=function(e,t,n,r,s,h){return function(){var u=Object(i.a)(o.a.mark((function i(u){var p,d;return o.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return u({type:l.d,mailsLength:e.length}),p={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},o.prev=2,o.next=5,c.a.get("".concat("https://mail914.herokuapp.com","/api/emails/mailbox/").concat(h,"/").concat(r),p);case 5:d=o.sent,t([].concat(Object(a.a)(e),Object(a.a)(d.data.body))),n(d.data.has_more),s(d.data.next_number),u({type:l.f,mailsLength:e.length}),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(2),u({type:l.e,mailsLength:e.length});case 15:case"end":return o.stop()}}),i,null,[[2,12]])})));return function(e){return u.apply(this,arguments)}}()}},332:function(e,t,n){"use strict";n.r(t);var r=n(290),o=n(0),a=n(289),i=n(6),s=n(37),c=n(78),l=n.n(c),h=n(292),u=n(281),p=n(293),d=n(288),m=n(294),f=n(287),b=n(4);t.default=Object(s.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,mailboxLoading:e.mailbox.mailboxLoading,isMailboxSwitched:e.mailbox.isMailboxSwitched}}),{logout:u.b,loadMailbox:m.a})((function(e){var t=e.isAuthenticated,n=e.logout,s=e.loadMailbox,c=e.mailboxLoading,u=e.isMailboxSwitched,m=Object(o.useState)([]),_=Object(r.a)(m,2),v=_[0],j=_[1],g=Object(o.useState)(!0),O=Object(r.a)(g,2),y=O[0],x=O[1],T=Object(o.useState)(1),w=Object(r.a)(T,2),S=w[0],E=w[1];return Object(o.useEffect)((function(){s(v,j,x,S,E,"trash")}),[]),t?Object(b.jsxs)(d.a,{children:[Object(b.jsxs)(a.a,{children:[Object(b.jsx)("title",{children:"Trash - Mail"}),Object(b.jsx)("meta",{name:"Access all your trashed mails here",content:"Trash page"})]}),Object(b.jsx)("h3",{className:"main__name",children:"Trash"}),!c&&u&&0===v.length?Object(b.jsx)("div",{className:"main__empty",children:"Your trash mailbox is empty"}):Object(b.jsx)(h.a,{dataLength:v.length,next:function(){return s(v,j,x,S,E,"trash")},hasMore:y,loader:Object(b.jsx)("div",{className:"main__loading",children:Object(b.jsx)(l.a,{type:"Oval",color:"#fff",height:40,width:40})}),endMessage:Object(b.jsx)("p",{className:"main__mails-finished",children:Object(b.jsx)("b",{children:"No more mails in your trash mailbox"})}),children:Object(b.jsx)(p.a,{mailbox:"trash",mails:v,setMails:j,onMarkClick:f.a,onUnmarkClick:f.b})})]}):(n(),Object(b.jsx)(i.a,{to:"/logout"}))}))}}]);
//# sourceMappingURL=8.08a4a713.chunk.js.map