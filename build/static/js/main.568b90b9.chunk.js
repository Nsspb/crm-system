(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,s,t){},101:function(e,s,t){},102:function(e,s,t){},103:function(e,s,t){},104:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),r=t(50),n=t.n(r),i=t(5),l=t.n(i),o=t(10),j=t(7),u=t.n(j),b=(t(85),t(4)),d=t(0);function h(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),r=Object(b.g)(),n=function(){var a=Object(o.a)(l.a.mark((function a(n){var i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),c.current.value===t.current.value){a.next=5;break}c.current.setCustomValidity("Passwords don't match!"),a.next=15;break;case 5:return i={username:e.current.value,email:s.current.value,password:t.current.value},a.prev=6,a.next=9,u.a.post("/auth/register",i);case 9:r.push("/login"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(6),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[6,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"login",children:Object(d.jsxs)("div",{className:"loginWrapper",children:[Object(d.jsxs)("div",{className:"loginLeft",children:[Object(d.jsx)("h3",{className:"loginLogo",children:"Lamasocial"}),Object(d.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Lamasocial."})]}),Object(d.jsx)("div",{className:"loginRight",children:Object(d.jsxs)("form",{className:"loginBox",onSubmit:n,children:[Object(d.jsx)("input",{placeholder:"Username",required:!0,ref:e,className:"loginInput"}),Object(d.jsx)("input",{placeholder:"Email",required:!0,ref:s,className:"loginInput",type:"email"}),Object(d.jsx)("input",{placeholder:"Password",required:!0,ref:t,className:"loginInput",type:"password",minLength:"6"}),Object(d.jsx)("input",{placeholder:"Password Again",required:!0,ref:c,className:"loginInput",type:"password"}),Object(d.jsx)("button",{className:"loginButton",type:"submit",children:"Sign Up"}),Object(d.jsx)("button",{className:"loginRegisterButton",children:"Log into Account"})]})})]})})}var m=t(8),p=(t(92),t(22)),O=(t(93),t(125)),x=t(126),f=t(127),g=t(128),N=t(20),v=t(23),I=function(e,s){switch(s.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:s.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"FOLLOW":return Object(v.a)(Object(v.a)({},e),{},{user:Object(v.a)(Object(v.a)({},e.user),{},{followings:[].concat(Object(N.a)(e.user.followings),[s.payload])})});case"UNFOLLOW":return Object(v.a)(Object(v.a)({},e),{},{user:Object(v.a)(Object(v.a)({},e.user),{},{followings:e.user.followings.filter((function(e){return e!==s.payload}))})});default:return e}},w={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},y=Object(a.createContext)(w),L=function(e){var s=e.children,t=Object(a.useReducer)(I,w),c=Object(m.a)(t,2),r=c[0],n=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r.user))}),[r.user]),Object(d.jsx)(y.Provider,{value:{user:r.user,isFetching:r.isFetching,error:r.error,dispatch:n},children:s})};function k(){var e=Object(a.useContext)(y).user,s="http://localhost:3000/images/";return Object(d.jsxs)("div",{className:"headerContainer",children:[Object(d.jsx)("div",{className:"headerLeft",children:Object(d.jsx)(p.b,{to:"/",style:{textDecoration:"none"},children:Object(d.jsx)("span",{className:"logo",children:"Lamasocial"})})}),Object(d.jsx)("div",{className:"headerCenter",children:Object(d.jsxs)("div",{className:"searchbar",children:[Object(d.jsx)(O.a,{className:"searchIcon"}),Object(d.jsx)("input",{placeholder:"Search for friend, post or video",className:"searchInput"})]})}),Object(d.jsxs)("div",{className:"headerRight",children:[Object(d.jsxs)("div",{className:"headerLinks",children:[Object(d.jsx)("span",{className:"headerLink",children:"Homepage"}),Object(d.jsx)("span",{className:"headerLink",children:"Timeline"})]}),Object(d.jsxs)("div",{className:"headerIcons",children:[Object(d.jsxs)("div",{className:"headerIconItem",children:[Object(d.jsx)(x.a,{}),Object(d.jsx)("span",{className:"headerIconBadge",children:"1"})]}),Object(d.jsxs)("div",{className:"headerIconItem",children:[Object(d.jsx)(f.a,{}),Object(d.jsx)("span",{className:"headerIconBadge",children:"2"})]}),Object(d.jsxs)("div",{className:"headerIconItem",children:[Object(d.jsx)(g.a,{}),Object(d.jsx)("span",{className:"headerIconBadge",children:"1"})]})]}),Object(d.jsx)(p.b,{to:"/profile/".concat(e.username),children:Object(d.jsx)("img",{src:e.profilePicture?s+e.profilePicture:s+"person/noAvatar.png",alt:"",className:"headerImg"})})]})]})}t(95);var C=t(129),F=t(130),P=t(131),S=t(132),T=t(133),R=[{id:1,profilePicture:"person/1.jpeg",username:"Safak Kocaoglu"},{id:2,profilePicture:"person/2.jpeg",username:"Janell Shrum"},{id:3,profilePicture:"person/3.jpeg",username:"Alex Durden"},{id:4,profilePicture:"person/4.jpeg",username:"Dora Hawks"},{id:5,profilePicture:"person/5.jpeg",username:"Thomas Holden"},{id:6,profilePicture:"person/6.jpeg",username:"Shirley Beauchamp"},{id:7,profilePicture:"person/7.jpeg",username:"Travis Bennett"},{id:8,profilePicture:"person/8.jpeg",username:"Kristen Thomas"},{id:9,profilePicture:"person/9.jpeg",username:"Gary Duty"},{id:10,profilePicture:"person/10.jpeg",username:"Safak Kocaoglu"}];t(96);function _(e){var s=e.user;return Object(d.jsxs)("li",{className:"leftbarFriend",children:[Object(d.jsx)("img",{className:"leftbarFriendsImg",src:"http://localhost:3000/images/"+s.profilePicture,alt:""}),Object(d.jsx)("span",{className:"leftbarFriendName",children:s.username})]})}function B(){return Object(d.jsx)("div",{className:"leftbar",children:Object(d.jsxs)("div",{className:"leftbarWrapper",children:[Object(d.jsxs)("ul",{className:"leftbarList",children:[Object(d.jsxs)("li",{className:"leftbarLIstItem",children:[Object(d.jsx)(C.a,{className:"leftbarIcon"}),Object(d.jsx)("span",{className:"leftbarListItemText",children:" \u041d\u043e\u0432\u043e\u0441\u0442\u0438"})]}),Object(d.jsxs)("li",{className:"leftbarLIstItem",children:[Object(d.jsx)(f.a,{className:"leftbarIcon"}),Object(d.jsx)("span",{className:"leftbarListItemText",children:" \u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})]}),Object(d.jsxs)("li",{className:"leftbarLIstItem",children:[Object(d.jsx)(F.a,{className:"leftbarIcon"}),Object(d.jsx)("span",{className:"leftbarListItemText",children:" \u0412\u0438\u0434\u0435\u043e"})]}),Object(d.jsxs)("li",{className:"leftbarLIstItem",children:[Object(d.jsx)(P.a,{className:"leftbarIcon"}),Object(d.jsx)("span",{className:"leftbarListItemText",children:" \u0413\u0440\u0443\u043f\u043f\u044b"})]}),Object(d.jsxs)("li",{className:"leftbarLIstItem",children:[Object(d.jsx)(S.a,{className:"leftbarIcon"}),Object(d.jsx)("span",{className:"leftbarListItemText",children:" \u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})]}),Object(d.jsxs)("li",{className:"leftbarLIstItem",children:[Object(d.jsx)(T.a,{className:"leftbarIcon"}),Object(d.jsx)("span",{className:"leftbarListItemText",children:" \u041f\u043e\u043c\u043e\u0449\u044c"})]})]}),Object(d.jsx)("button",{className:"leftbarButton",children:"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c "}),Object(d.jsx)("hr",{className:"leftbarHr"}),Object(d.jsx)("ul",{className:"leftbarFriendList",children:R.map((function(e){return Object(d.jsx)(_,{user:e},e.id)}))})]})})}t(97),t(98);var A=t(134),D=t(135),U=t(136),E=t(137),W=t(138);function G(){var e=Object(a.useContext)(y).user,s="http://localhost:3000/images/",t=Object(a.useRef)(),c=Object(a.useState)(null),r=Object(m.a)(c,2),n=r[0],i=r[1],j=function(){var s=Object(o.a)(l.a.mark((function s(a){var c,r,i;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),c={userId:e._id,desc:t.current.value},!n){s.next=16;break}return r=new FormData,i=Date.now()+n.name,r.append("name",i),r.append("file",n),c.img=i,console.log(c),s.prev=9,s.next=12,u.a.post("/upload",r);case 12:s.next=16;break;case 14:s.prev=14,s.t0=s.catch(9);case 16:return s.prev=16,s.next=19,u.a.post("/posts",c);case 19:window.location.reload(),s.next=24;break;case 22:s.prev=22,s.t1=s.catch(16);case 24:case"end":return s.stop()}}),s,null,[[9,14],[16,22]])})));return function(e){return s.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"share",children:Object(d.jsxs)("div",{className:"shareWrapper",children:[Object(d.jsxs)("div",{className:"shareTop",children:[Object(d.jsx)("img",{className:"shareProfileImg",src:e.profilePicture?s+e.profilePicture:s+"person/noAvatar.png",alt:""}),Object(d.jsx)("input",{placeholder:"What's in your mind "+e.username+"?",className:"shareInput",ref:t})]}),Object(d.jsx)("hr",{className:"shareHr"}),n&&Object(d.jsxs)("div",{className:"shareImgContainer",children:[Object(d.jsx)("img",{className:"shareImg",src:URL.createObjectURL(n),alt:""}),Object(d.jsx)(A.a,{className:"shareCancelImg",onClick:function(){return i(null)}})]}),Object(d.jsxs)("form",{className:"shareBottom",onSubmit:j,children:[Object(d.jsxs)("div",{className:"shareOptions",children:[Object(d.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(d.jsx)(D.a,{htmlColor:"tomato",className:"shareIcon"}),Object(d.jsx)("span",{className:"shareOptionText",children:"Photo or Video"}),Object(d.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png,.jpeg,.jpg",onChange:function(e){return i(e.target.files[0])}})]}),Object(d.jsxs)("div",{className:"shareOption",children:[Object(d.jsx)(U.a,{htmlColor:"blue",className:"shareIcon"}),Object(d.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(d.jsxs)("div",{className:"shareOption",children:[Object(d.jsx)(E.a,{htmlColor:"green",className:"shareIcon"}),Object(d.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(d.jsxs)("div",{className:"shareOption",children:[Object(d.jsx)(W.a,{htmlColor:"goldenrod",className:"shareIcon"}),Object(d.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(d.jsx)("button",{className:"shareButton",type:"submit",children:"Share"})]})]})})}t(99);var q=t(139),K=t(56);function H(e){var s=e.post,t=Object(a.useState)(s.likes.length),c=Object(m.a)(t,2),r=c[0],n=c[1],i=Object(a.useState)(!1),j=Object(m.a)(i,2),b=j[0],h=j[1],O=Object(a.useState)({}),x=Object(m.a)(O,2),f=x[0],g=x[1],N="http://localhost:3000/images/",v=Object(a.useContext)(y).user;Object(a.useEffect)((function(){h(s.likes.includes(v._id))}),[v._id,s.likes]),Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/users?userId=".concat(s.userId));case 2:t=e.sent,g(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s.userId]);var I=function(){try{u.a.put("/posts/"+s._id+"/like",{userId:v._id})}catch(e){}n(b?r-1:r+1),h(!b)};return Object(d.jsx)("div",{className:"post",children:Object(d.jsxs)("div",{className:"postWrapper",children:[Object(d.jsxs)("div",{className:"postTop",children:[Object(d.jsxs)("div",{className:"postTopLeft",children:[Object(d.jsx)(p.b,{to:"/profile/".concat(f.username),children:Object(d.jsx)("img",{className:"postProfileImg",src:f.profilePicture?N+f.profilePicture:N+"person/noAvatar.png",alt:""})}),Object(d.jsx)("span",{className:"postUsername",children:f.username}),Object(d.jsx)("span",{className:"postDate",children:Object(K.a)(s.createdAt)})]}),Object(d.jsx)("div",{className:"postTopRight",children:Object(d.jsx)(q.a,{})})]}),Object(d.jsxs)("div",{className:"postCenter",children:[Object(d.jsx)("span",{className:"postText",children:null===s||void 0===s?void 0:s.desc}),Object(d.jsx)("img",{className:"postImg",src:N+s.img,alt:""})]}),Object(d.jsxs)("div",{className:"postBottom",children:[Object(d.jsxs)("div",{className:"postBottomLeft",children:[Object(d.jsx)("img",{className:"likeIcon",src:"".concat(N,"like.png"),onClick:I,alt:""}),Object(d.jsx)("img",{className:"likeIcon",src:"".concat(N,"heart.png"),onClick:I,alt:""}),Object(d.jsxs)("span",{className:"postLikeCounter",children:[r," people like it"]})]}),Object(d.jsx)("div",{className:"postBottomRight",children:Object(d.jsxs)("span",{className:"postCommentText",children:[s.comment," comments"]})})]})]})})}function J(e){var s=e.username,t=Object(a.useState)([]),c=Object(m.a)(t,2),r=c[0],n=c[1],i=Object(a.useContext)(y).user;return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=6;break}return e.next=3,u.a.get("/posts/profile/"+s);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,u.a.get("posts/timeline/"+i._id);case 8:e.t0=e.sent;case 9:t=e.t0,n(t.data.sort((function(e,s){return new Date(s.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s,i._id]),Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("div",{className:"footerWrapper",children:[(!s||s===i.username)&&Object(d.jsx)(G,{}),r.map((function(e){return Object(d.jsx)(H,{post:e},e._id)}))]})})}t(100),t(101);function V(e){var s=e.user;return Object(d.jsxs)("li",{className:"rightbarFriend",children:[Object(d.jsxs)("div",{className:"rightbarProfileImgContainer",children:[Object(d.jsx)("img",{src:"http://localhost:3000/images/"+s.profilePicture,alt:"",className:"rightbarProfileImg"}),Object(d.jsx)("span",{className:"rightbarOnline"})]}),Object(d.jsxs)("span",{className:"rightbarUserName",children:[" ",s.username," "]})]})}var z=t(140),M=t(141);function Q(e){var s=e.user,t="http://localhost:3000/images/",c=Object(a.useState)([]),r=Object(m.a)(c,2),n=r[0],i=r[1],j=Object(a.useContext)(y),b=j.user,h=j.dispatch,O=Object(a.useState)(b.followings.includes(null===s||void 0===s?void 0:s.id)),x=Object(m.a)(O,2),f=x[0],g=x[1];Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/users/friends/"+s._id);case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]);var N=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!f){e.next=7;break}return e.next=4,u.a.put("/users/".concat(s._id,"/unfollow"),{userId:b._id});case 4:h({type:"UNFOLLOW",payload:s._id}),e.next=10;break;case 7:return e.next=9,u.a.put("/users/".concat(s._id,"/follow"),{userId:b._id});case 9:h({type:"FOLLOW",payload:s._id});case 10:g(!f),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),v=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"birthdayContainer",children:[Object(d.jsx)("img",{className:"birthdayImg",src:"assets/gift.png",alt:""}),Object(d.jsxs)("span",{className:"birthdayText",children:[Object(d.jsx)("b",{children:"Pola Foster"})," and ",Object(d.jsx)("b",{children:"3 other friends"})," have a birhday today."]})]}),Object(d.jsx)("img",{className:"rightbarAd",src:"assets/ad.png",alt:""}),Object(d.jsx)("h4",{className:"rightbarTitle",children:"Online Friends"}),Object(d.jsx)("ul",{className:"rightbarFriendList",children:R.map((function(e){return Object(d.jsx)(V,{user:e},e.id)}))})]})},I=function(){return Object(d.jsxs)(d.Fragment,{children:[s.username!==b.username&&Object(d.jsxs)("button",{className:"rightbarFollowButton",onClick:N,children:[f?"Unfollow":"Follow",f?Object(d.jsx)(z.a,{}):Object(d.jsx)(M.a,{})]}),Object(d.jsx)("h4",{className:"rightbarTitle",children:"User information"}),Object(d.jsxs)("div",{className:"rightbarInfo",children:[Object(d.jsxs)("div",{className:"rightbarInfoItem",children:[Object(d.jsx)("span",{className:"rightbarInfoKey",children:"City:"}),Object(d.jsx)("span",{className:"rightbarInfoValue",children:s.city})]}),Object(d.jsxs)("div",{className:"rightbarInfoItem",children:[Object(d.jsx)("span",{className:"rightbarInfoKey",children:"From:"}),Object(d.jsx)("span",{className:"rightbarInfoValue",children:s.from})]}),Object(d.jsxs)("div",{className:"rightbarInfoItem",children:[Object(d.jsx)("span",{className:"rightbarInfoKey",children:"Relationship:"}),Object(d.jsx)("span",{className:"rightbarInfoValue",children:1===s.relationship?"Single":1===s.relationship?"Married":"-"})]})]}),Object(d.jsx)("h4",{className:"rightbarTitle",children:"User friends"}),Object(d.jsx)("div",{className:"rightbarFollowings",children:n.map((function(e){return Object(d.jsx)(p.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},children:Object(d.jsxs)("div",{className:"rightbarFollowing",children:[Object(d.jsx)("img",{src:e.profilePicture?t+e.profilePicture:t+"person/noAvatar.png",alt:"",className:"rightbarFollowingImg"}),Object(d.jsx)("span",{className:"rightbarFollowingName",children:e.username})]})})}))})]})};return Object(d.jsx)("div",{className:"rightbar",children:Object(d.jsx)("div",{className:"rightbarWrapper",children:s?Object(d.jsx)(I,{}):Object(d.jsx)(v,{})})})}function X(){var e="http://localhost:3000/images/",s=Object(a.useState)({}),t=Object(m.a)(s,2),c=t[0],r=t[1],n=Object(b.h)().username;return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/users?username=".concat(n));case 2:s=e.sent,r(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{}),Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsx)(B,{}),Object(d.jsxs)("div",{className:"profileRight",children:[Object(d.jsxs)("div",{className:"profileRightTop",children:[Object(d.jsxs)("div",{className:"profileCover",children:[Object(d.jsx)("img",{className:"profileCoverImg",src:c.coverPicture?e+c.coverPicture:e+"person/noCover.png",alt:""}),Object(d.jsx)("img",{className:"profileUserImg",src:c.profilePicture?e+c.profilePicture:e+"person/noAvatar.png",alt:""})]}),Object(d.jsxs)("div",{className:"profileInfo",children:[Object(d.jsx)("h4",{className:"profileInfoName",children:c.username}),Object(d.jsx)("span",{className:"profileInfoDesc",children:c.desc})]})]}),Object(d.jsxs)("div",{className:"profileRightBottom",children:[Object(d.jsx)(J,{username:n}),Object(d.jsx)(Q,{user:c})]})]})]})]})}t(102);function Y(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{}),Object(d.jsxs)("div",{className:"homeContainer",children:[Object(d.jsx)(B,{}),Object(d.jsx)(J,{}),Object(d.jsx)(Q,{})]})]})}t(103);var Z=function(){var e=Object(o.a)(l.a.mark((function e(s,t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOGIN_START"}),e.prev=1,e.next=4,u.a.post("/auth/login",s);case 4:a=e.sent,t({type:"LOGIN_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"LOGIN_FAILURE",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(s,t){return e.apply(this,arguments)}}(),$=t(142);function ee(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useContext)(y),c=t.isFetching,r=t.dispatch;return Object(d.jsx)("div",{className:"login",children:Object(d.jsxs)("div",{className:"loginWrapper",children:[Object(d.jsxs)("div",{className:"loginLeft",children:[Object(d.jsx)("h3",{className:"loginLogo",children:"Lamasocial"}),Object(d.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Lamasocial."})]}),Object(d.jsx)("div",{className:"loginRight",children:Object(d.jsxs)("form",{className:"loginBox",onSubmit:function(t){t.preventDefault(),Z({email:e.current.value,password:s.current.value},r)},children:[Object(d.jsx)("input",{placeholder:"Email",type:"email",required:!0,className:"loginInput",ref:e}),Object(d.jsx)("input",{placeholder:"Password",type:"password",required:!0,minLength:"6",className:"loginInput",ref:s}),Object(d.jsx)("button",{className:"loginButton",type:"submit",disabled:c,children:c?Object(d.jsx)($.a,{color:"white",size:"20px"}):"Log In"}),Object(d.jsx)("span",{className:"loginForgot",children:"Forgot Password?"}),Object(d.jsx)("button",{className:"loginRegisterButton",children:c?Object(d.jsx)($.a,{color:"white",size:"20px"}):"Create a New Account"})]})})]})})}var se=function(){var e=Object(a.useContext)(y).user;return Object(d.jsx)(p.a,{children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{exact:!0,path:"/",children:e?Object(d.jsx)(Y,{}):Object(d.jsx)(h,{})}),Object(d.jsx)(b.b,{path:"/login",children:e?Object(d.jsx)(b.a,{to:"/"}):Object(d.jsx)(ee,{})}),Object(d.jsx)(b.b,{path:"/register",children:e?Object(d.jsx)(b.a,{to:"/"}):Object(d.jsx)(h,{})}),Object(d.jsx)(b.b,{path:"/profile/:username",children:Object(d.jsx)(X,{})})]})})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{children:Object(d.jsx)(se,{})})}),document.getElementById("root"))},85:function(e,s,t){},92:function(e,s,t){},93:function(e,s,t){},95:function(e,s,t){},96:function(e,s,t){},97:function(e,s,t){},98:function(e,s,t){},99:function(e,s,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.568b90b9.chunk.js.map