(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/platziconf-logo.f246f5f1.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/badge-header.973f5842.svg"},,,,,,,,function(e,a,t){},,,,function(e,a,t){e.exports=t.p+"static/media/logo.0026b862.svg"},function(e,a,t){e.exports=t.p+"static/media/astronauts.71addf45.svg"},,function(e,a,t){e.exports=t(54)},,,,,function(e,a,t){},,function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),o=(t(37),t(2)),s=t.n(o),m=t(7),i=t(9),u=t(10),d=t(14),g=t(11),p=t(15),h=(t(39),t(17)),f=t.n(h),v=t(3),E="https://platzi-badges.herokuapp.com",b=function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(a-e+1))+e}(a,t),new Promise(function(a){return setTimeout(a,e)})};function N(e){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(s.a.mark(function e(a){var t,n,r,l,c=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,b();case 3:return t.headers={"Content-Type":"application/json",Accept:"application/json"},n=E+a,e.next=7,fetch(n,t);case 7:return r=e.sent,e.next=10,r.json();case 10:return l=e.sent,e.abrupt("return",l);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}var y={badges:{list:function(){return N("/api/v1")},create:function(e){return N("/api/v1",{method:"POST",body:JSON.stringify(e)})},read:function(e){return N("/api/v1/".concat(e))},update:function(e,a){return N("/api/v1/".concat(e),{method:"PUT",body:JSON.stringify(a)})},remove:function(e){return N("/api/v1/".concat(e),{method:"DELETE"})}}},j=t(31),_=function(e){var a=e.badge,t=a.name,n=a.lastName,l=a.twitter,c=a.job;return r.a.createElement("div",{className:"BadgesListItem"},r.a.createElement("img",{className:"BadgesListItem__avatar",src:"https://i.pravatar.cc/100?img=".concat(e.avatarId),alt:"".concat(t," ").concat(n)}),r.a.createElement("div",null,r.a.createElement("strong",null,t," ",n),r.a.createElement("br",null),"@",l,r.a.createElement("br",null),c))},x=function(e){var a=e.badges.payload,t=r.a.useState(" "),n=Object(j.a)(t,2),l=n[0],c=n[1],o=a.filter(function(e){return"".concat(e.name," ").concat(e.lastName).toLowerCase().includes(l)});return 0===o.length?r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Filter Badges "),r.a.createElement("input",{type:"text",className:"form-control",value:l,onChange:function(e){c(e.target.value)}})),r.a.createElement("h3",null,"No badges were found"),r.a.createElement(v.b,{className:"btn btn-primary",to:"/new-badge"},"Create new badge")):r.a.createElement("div",{className:"BadgesList"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter Badges "),r.a.createElement("input",{type:"text",className:"form-control",value:l,onChange:function(e){c(e.target.value)}})),r.a.createElement("ul",{className:"list-unstyled"},o.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(v.b,{className:"text-reset text-decoration-none",to:"/edit-badge/".concat(e._id)},r.a.createElement(_,{badge:e,avatarId:a})))})))},O=(t(48),function(){return r.a.createElement("div",{className:"PageLoading"},r.a.createElement("div",{className:"loader"},"Loading..."))}),S=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,data:void 0,error:null},t.fetchData=Object(m.a)(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,y.badges.list();case 4:a=e.sent,t.setState({loading:!1,data:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])})),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?r.a.createElement(O,null):this.state.error?"Error: ".concat(this.state.error.message):r.a.createElement("div",null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{src:f.a,alt:"",className:"Badges__conf-logo"})))),r.a.createElement("div",{className:"Badge__container"},r.a.createElement("div",{className:"Bages__buttons"},r.a.createElement(v.b,{to:"/new-badge",className:"btn btn-primary"},"New Badge")),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"list-unstyled"},r.a.createElement(x,{badges:this.state.data}))))))}}]),a}(r.a.Component),C=t(12),B=t(18),k=t(13),F=t.n(k),I=(t(25),t(49),function(e){var a=e.name,t=e.lastName,n=e.avatar,l=e.job,c=e.twitter;return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:f.a,alt:""})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement("img",{className:"Badge__avatar",src:n,alt:a}),r.a.createElement("h1",null,a," ",r.a.createElement("br",null)," ",t)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,l),r.a.createElement("div",null,"@",c)),r.a.createElement("div",{className:"Badge__footer"},"#platziconf"))}),L=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"FirstName"),r.a.createElement("input",{onChange:e.onChange,className:"form-control",type:"text",name:"name",placeholder:e.name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"lastName"),r.a.createElement("input",{onChange:e.onChange,className:"form-control",type:"text",name:"lastName",placeholder:e.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"email"),r.a.createElement("input",{onChange:e.onChange,className:"form-control",type:"email",name:"email",placeholder:e.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Job Title"),r.a.createElement("input",{onChange:e.onChange,className:"form-control",type:"text",name:"job",placeholder:e.job})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Twitter"),r.a.createElement("input",{onChange:e.onChange,className:"form-control",type:"text",name:"twitter",placeholder:e.twitter})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save "),e.error&&r.a.createElement("p",null,e.error.message)))},D=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{name:"",lastName:"",job:"",email:"",twitter:""}},t.handleInputChange=function(e){t.setState({form:Object(B.a)({},t.state.form,Object(C.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(){var e=Object(m.a)(s.a.mark(function e(a){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t.setState({loading:!0,error:null}),e.prev=2,e.next=5,y.badges.create(t.state.form);case 5:t.setState({loading:!1}),t.props.history.push("/badges"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t.setState({loading:!1,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(a){return e.apply(this,arguments)}}(),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){if(this.state.loading)return r.a.createElement(O,null);var e=Math.floor(60*Math.random()+1),a=this.state.form,t=a.name,n=a.lastName,l=a.job,c=a.email,o=a.twitter;return r.a.createElement("div",null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{src:F.a,alt:""})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(I,{name:t||"First Name",lastName:n||"Last Name",email:c,avatar:"https://i.pravatar.cc/100?img=".concat(e),job:l||"Position",twitter:o||"twitter"})),r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"New Attendant"),r.a.createElement(L,{onChange:this.handleInputChange,onSubmit:this.handleSubmit,error:this.state.error})))))}}]),a}(r.a.Component),M=t(8),P=t(29),T=t.n(P),A=(t(50),function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement(v.b,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo",src:T.a,alt:"Logo"}),r.a.createElement("span",null,"Platzi"),r.a.createElement("strong",null,"Conf")))}),J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),e.children)},z=function(){return r.a.createElement("h1",null,"404 Not found")},W=(t(51),t(30)),H=t.n(W),U=function(){return r.a.createElement("div",{className:"Home__Container"},r.a.createElement("div",{className:"col-1"}),r.a.createElement("div",{className:"col-3 intro"},r.a.createElement("img",{className:"img-fluid",src:F.a,alt:""}),r.a.createElement("h1",null,"Print your badges"),r.a.createElement("h3",null,"The easiest way to manage your conference"),r.a.createElement("div",{className:"Bages__buttons"},r.a.createElement(v.b,{to:"/new-badge",className:"btn btn-primary btn-lg"},"Start Now"))),r.a.createElement("div",{className:"col-8 logo"},r.a.createElement("img",{className:"img-fluid",src:H.a,alt:""})))},$=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,form:{name:"",lastName:"",job:"",email:"",twitter:""}},t.fetchData=function(){var e=Object(m.a)(s.a.mark(function e(a){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,y.badges.read(t.props.match.params.badgeId);case 4:n=e.sent,console.log({data:n}),t.setState({loading:!1,form:n.payload}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(a){return e.apply(this,arguments)}}(),t.handleInputChange=function(e){t.setState({form:Object(B.a)({},t.state.form,Object(C.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(){var e=Object(m.a)(s.a.mark(function e(a){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t.setState({loading:!0,error:null}),e.prev=2,e.next=5,y.badges.update(t.props.match.params.badgeId,t.state.form);case 5:t.setState({loading:!1}),t.props.history.push("/badges"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t.setState({loading:!1,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(a){return e.apply(this,arguments)}}(),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){if(this.state.loading)return r.a.createElement(O,null);var e=Math.floor(60*Math.random()+1),a=this.state.form,t=a.name,n=a.lastName,l=a.job,c=a.email,o=a.twitter;return r.a.createElement("div",null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{src:F.a,alt:""})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(I,{name:t||"First Name",lastName:n||"Last Name",email:c,avatar:"https://i.pravatar.cc/100?img=".concat(e),job:l||"Position",twitter:o||"twitter"})),r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"Edit Attendant"),r.a.createElement(L,{onChange:this.handleInputChange,onSubmit:this.handleSubmit,error:this.state.error,name:t,lastName:n,email:c,job:l,twitter:o})))))}}]),a}(r.a.Component),q=function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(J,null,r.a.createElement(M.c,null,r.a.createElement(M.a,{exact:!0,path:"/",component:U}),r.a.createElement(M.a,{exact:!0,path:"/badges",component:S}),r.a.createElement(M.a,{exact:!0,path:"/new-badge",component:D}),r.a.createElement(M.a,{exact:!0,path:"/edit-badge/:badgeId",component:$}),r.a.createElement(M.a,{component:z})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(52),t(53);c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[32,1,2]]]);
//# sourceMappingURL=main.24d15093.chunk.js.map