(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(61)},45:function(e,t,a){},47:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(16),l=a.n(s),o=(a(45),a(7)),i=a(8),c=a(11),u=a(9),p=a(10),m=(a(47),a(65)),h=a(64),b=a(63),d=a(32),f=a.n(d)()(),O=a(15),E=a(33),j=a(17),g=a(29),v=a(4),w={inputs:{title:"",email:"",text:""},canShow:!1},y={posts:{allPosts:[],filtredPosts:[],preview:Object(v.a)({},w),filters:{search:""}}},I={loggedIn:!1,username:""},k=Object(O.combineReducers)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return Object(v.a)({},e,{posts:Object(v.a)({},e.posts,{allPosts:Object(g.a)(e.posts.allPosts).concat([Object(v.a)({},t.payload)]),preview:Object(v.a)({},w)})});case"TOGGLE_PREVIEW_VISIBILITY":return Object(v.a)({},e,{posts:Object(v.a)({},e.posts,{preview:Object(v.a)({},e.posts.preview,{canShow:!e.posts.preview.canShow})})});case"PREVIEW_INPUT_CHANGE":return Object(v.a)({},e,{posts:Object(v.a)({},e.posts,{preview:Object(v.a)({},e.posts.preview,{inputs:Object(v.a)({},e.posts.preview.inputs,Object(j.a)({},t.payload.name,t.payload.value))})})});default:return e;case"FILTER_POSTS":var a=function(t){switch(t){case"search":var a,n=Object(g.a)(e.posts.allPosts);return a=""===e.posts.filters[t]?n:n.filter(function(a){return a.title.indexOf(e.posts.filters[t])>=0}),{v:Object(v.a)({},e,{posts:Object(v.a)({},e.posts,{filtredPosts:a})})};default:return{v:Object(v.a)({},e)}}};for(var n in e.posts.filters){var r=a(n);if("object"===typeof r)return r.v}break;case"FILTER_CHANGE":return Object(v.a)({},e,{posts:Object(v.a)({},e.posts,{filters:Object(v.a)({},e.posts.filters,Object(j.a)({},t.payload.filter_name,t.payload.value))})})}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(v.a)({},e,{loggedIn:!0,username:t.payload.username});case"LOGOUT":return Object(v.a)({},e,{loggedIn:!1,username:""});default:return e}}}),x=a(35),C=[E.a],S=Object(O.createStore)(k,{},Object(x.composeWithDevTools)(O.applyMiddleware.apply(void 0,C))),P=a(12),T=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello, ",this.props.auth.username?this.props.auth.username:"Guest","!"))}}]),t}(n.Component),_=Object(P.b)(function(e){return{auth:Object(v.a)({},e.auth)}},{})(T),L=a(13),N=a(3),G=a(62),R={auth:{username:"admin",password:"123"}},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1},a.toggle=a.toggle.bind(Object(L.a)(Object(L.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{history:f},r.a.createElement(N.q,{color:"light",light:!0,expand:"md",style:{marginBottom:"50px"}},r.a.createElement(N.i,null,r.a.createElement(G.a,{style:{fontWeight:"bold",fontSize:"22px"},to:"/"},"React Test Task"),r.a.createElement(N.r,{onClick:this.toggle}),r.a.createElement(N.h,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(N.o,{className:"ml-auto",navbar:!0},r.a.createElement(N.p,{style:{fontSize:"18px",padding:"0 10px"}},r.a.createElement(G.a,{to:"/news/"},"News")),r.a.createElement(N.p,{style:{fontSize:"18px",padding:"0 10px"}},r.a.createElement(G.a,{to:"/addPost/"},"Add Post")),this.props.auth.loggedIn?r.a.createElement("div",null,r.a.createElement(N.p,{style:{fontSize:"18px",padding:"0 10px"}},this.props.auth.username),r.a.createElement(N.p,{style:{fontSize:"18px",padding:"0 10px",cursor:"pointer"},onClick:this.props.logout},"Log out")):r.a.createElement(N.p,{style:{fontSize:"18px",padding:"0 10px"}},r.a.createElement(G.a,{to:"/login/"},"Log In"))))))))}}]),t}(n.Component),F=Object(P.b)(function(e){return{auth:Object(v.a)({},e.auth)}},{logout:function(){return function(e){e({type:"LOGOUT"}),f.push("/")}}})(A),V=a(18),W=a.n(V),D=a(19),z=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.el,t=r.a.createElement(N.c,null,r.a.createElement(N.e,null,"Title: ",e.title),r.a.createElement("br",null),r.a.createElement(N.e,null,"Author Email: ",e.email),r.a.createElement("br",null),r.a.createElement(N.f,null,"Text: ",e.text.slice));return r.a.createElement(N.b,{style:{margin:"40px auto"}},r.a.createElement(N.s,null,r.a.createElement(N.g,{xs:"12",sm:"4"},r.a.createElement(N.d,{top:!0,width:"100%",src:e.file,alt:"Card image cap"})),r.a.createElement(N.g,{xs:"12",sm:"8"},t)))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={preview:{canShow:!1}},a.submitForm=a.submitForm.bind(Object(L.a)(Object(L.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"submitForm",value:function(){var e=Object(D.a)(W.a.mark(function e(t){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.props.addPost(Object.assign({},this.props.posts.preview.inputs));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.i,null,r.a.createElement(N.j,{onSubmit:this.submitForm},r.a.createElement(N.k,null,r.a.createElement(N.n,{for:"title"},"Title"),r.a.createElement(N.l,{type:"text",name:"title",id:"title",value:this.props.posts.preview.inputs.title,placeholder:"Title",required:!0,onChange:this.props.onPreviewInputChange})),r.a.createElement(N.k,null,r.a.createElement(N.n,{for:"email"},"Email"),r.a.createElement(N.l,{type:"email",name:"email",id:"email",value:this.props.posts.preview.inputs.email,placeholder:"Your Email",required:!0,onChange:this.props.onPreviewInputChange})),r.a.createElement(N.k,null,r.a.createElement(N.n,{for:"image"},"Image"),r.a.createElement(N.l,{type:"file",name:"file",id:"image",accept:".png, .jpg, .jpeg .gif",onChange:this.props.onPreviewInputChange,required:!0})),r.a.createElement(N.k,null,r.a.createElement(N.n,{for:"text"},"Text"),r.a.createElement(N.l,{type:"textarea",name:"text",id:"text",required:!0,value:this.props.posts.preview.inputs.text,onChange:this.props.onPreviewInputChange})),r.a.createElement(N.k,null,r.a.createElement(N.a,{style:{width:"100%"}},"Submit"))),r.a.createElement(N.k,null,r.a.createElement(N.a,{style:{width:"100%"},onClick:this.props.togglePreviewVisibility},"Preview")),this.props.posts.preview.canShow&&r.a.createElement("div",{className:"preview"},r.a.createElement(z,{el:this.props.posts.preview.inputs}))))}}]),t}(n.Component),U=Object(P.b)(function(e){return{posts:Object(v.a)({},e.posts.posts)}},{addPost:function(e){return function(t){t({type:"ADD_TASK",payload:e}),t({type:"FILTER_POSTS"}),f.push("/news")}},togglePreviewVisibility:function(){return function(e){e({type:"TOGGLE_PREVIEW_VISIBILITY"})}},onPreviewInputChange:function(e){return function(){var t=Object(D.a)(W.a.mark(function t(a){var n,r,s;return W.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.name,r=e.target.value,"file"!==n){t.next=7;break}return(s=new FileReader).onload=function(e){a({type:"PREVIEW_INPUT_CHANGE",payload:{name:n,value:e.target.result}})},r=s.readAsDataURL(e.target.files[0]),t.abrupt("return");case 7:a({type:"PREVIEW_INPUT_CHANGE",payload:{name:n,value:r}});case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(H),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},a.loginSubmit=a.loginSubmit.bind(Object(L.a)(Object(L.a)(a))),a.onInputChange=a.onInputChange.bind(Object(L.a)(Object(L.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"loginSubmit",value:function(e){e.preventDefault(),this.props.login({username:this.state.username,password:this.state.password}),this.setState({username:"",password:""})}},{key:"onInputChange",value:function(e){var t=e.target.name;this.setState(Object(j.a)({},t,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.i,null,r.a.createElement(N.j,{onSubmit:this.loginSubmit},r.a.createElement(N.k,null,r.a.createElement(N.n,{for:"username"},"Name"),r.a.createElement(N.l,{onChange:this.onInputChange,type:"text",name:"username",id:"username",placeholder:"Name"})),r.a.createElement(N.k,null,r.a.createElement(N.n,{for:"password"},"Password"),r.a.createElement(N.l,{onChange:this.onInputChange,type:"password",name:"password",id:"password",placeholder:"password"})),r.a.createElement(N.k,null,r.a.createElement(N.a,null,"Login")))))}}]),t}(n.Component),B=Object(P.b)(null,{login:function(e){return function(t){e.username===R.auth.username&&e.password===R.auth.password?(t({type:"LOGIN",payload:{username:e.username}}),f.push("/")):alert("Login or password is incorrect! Try again.")}}})(q),Y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.m,null,r.a.createElement(N.l,{placeholder:"Search line","data-filter-name":"search",onChange:this.props.onFilterChange})))}}]),t}(n.Component),J=Object(P.b)(function(e){return{posts:Object(v.a)({},e.posts.posts)}},{onFilterChange:function(e){return function(t){t({type:"FILTER_CHANGE",payload:{value:e.target.value,filter_name:e.target.dataset.filterName}}),t({type:"FILTER_POSTS"})}}})(Y),K=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.posts.filtredPosts.map(function(t,a){return r.a.createElement(z,{editTask:e.props.editTask,auth:e.props.auth,key:a,el:t})});return 0===t.length&&t.push(r.a.createElement("h1",{key:"1"},"There is no post yet!")),r.a.createElement("div",null,r.a.createElement(N.i,null,r.a.createElement(J,null),t))}}]),t}(n.Component),M=Object(P.b)(function(e){return{posts:Object(v.a)({},e.posts.posts),auth:Object(v.a)({},e.auth)}},{})(K),$=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(P.a,{store:S},r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement(m.a,{history:f},r.a.createElement(h.a,null,r.a.createElement(b.a,{path:"/",exact:!0,component:_}),r.a.createElement(b.a,{path:"/news",exact:!0,component:M}),r.a.createElement(b.a,{path:"/addPost",exact:!0,component:U}),r.a.createElement(b.a,{path:"/login",exact:!0,component:B})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(59);l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,2,1]]]);
//# sourceMappingURL=main.f971c34f.chunk.js.map