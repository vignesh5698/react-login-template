(this["webpackJsonpreact-login-template"]=this["webpackJsonpreact-login-template"]||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(25),c=n.n(r),s=(n(111),n(112),n(113),n(27)),i=n(28),l=n(31),o=n(30),j=n(189),u=n(193),m=n(199),d=n(6),b=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"Home"})}}]),n}(a.Component),h=n(190),O=n(191),p=n(194),x=n(101),f=n(195),g=n(196),v=n(197),y=n(198),w=n(78),C=n(192),P=w.a.TabPane,k=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.onFinish=function(){},e.validatePassword=function(e,t,n){t.length<6?n("Password must have atleast 6 characters in length"):n()},e.validateMobileNumber=function(e,t,n){10===t.length&&n(),n("Invalid mobile number")},e.renderLoginForm=function(){return Object(d.jsxs)(h.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:e.onFinish,children:[Object(d.jsx)(h.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(d.jsx)(O.a,{prefix:Object(d.jsx)(f.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(d.jsx)(h.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(d.jsx)(O.a,{prefix:Object(d.jsx)(g.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(d.jsx)(h.a.Item,{children:Object(d.jsx)(h.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(d.jsx)(p.a,{children:"Remember me"})})}),Object(d.jsx)(h.a.Item,{children:Object(d.jsx)(x.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})})]})},e.renderSignupForm=function(){return Object(d.jsxs)(h.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:e.onFinish,children:[Object(d.jsx)(h.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(d.jsx)(O.a,{prefix:Object(d.jsx)(f.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(d.jsx)(h.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Email address!"},{type:"email"}],children:Object(d.jsx)(O.a,{prefix:Object(d.jsx)(v.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(d.jsx)(h.a.Item,{name:"phone",rules:[{required:!0,message:"Please input your mobile number!"},{validator:e.validateMobileNumber}],children:Object(d.jsx)(O.a,{prefix:Object(d.jsx)(y.a,{className:"site-form-item-icon"}),placeholder:"Mobile Number"})}),Object(d.jsx)(h.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"},{validator:e.validatePassword}],children:Object(d.jsx)(O.a,{prefix:Object(d.jsx)(g.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(d.jsx)(h.a.Item,{name:"repeatPassword",rules:[{required:!0,message:"Please input your Password!"}],children:Object(d.jsx)(O.a,{prefix:Object(d.jsx)(g.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Repeat Password"})}),Object(d.jsx)(h.a.Item,{children:Object(d.jsx)(x.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Signup"})})]})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(w.a,{defaultActiveKey:"1",centered:!0,size:"large",style:{alignItems:"center"},children:[Object(d.jsx)(P,{tab:"Login",children:Object(d.jsx)(C.a,{style:{width:500,textAlign:"center",paddingTop:"30px"},children:this.renderLoginForm()})},"1"),Object(d.jsx)(P,{tab:"Signup",children:Object(d.jsx)(C.a,{style:{width:500,textAlign:"center",paddingTop:"30px"},children:this.renderSignupForm()})},"2")]})})}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"Services"})}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"Products"})}}]),n}(a.Component),F=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"Contact"})}}]),n}(a.Component),A=j.a.Header,M=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onChangeMenu=function(e){console.log(e.key);var t=null;switch(e.key){case"default":t=Object(d.jsx)(b,{});break;case"services":t=Object(d.jsx)(I,{});break;case"products":t=Object(d.jsx)(N,{});break;case"contact":t=Object(d.jsx)(F,{});break;case"login":t=Object(d.jsx)(k,{});break;default:t=null}a.setState({selectedComponent:t})},a.state={currentMenu:"default",selectedComponent:Object(d.jsx)(b,{})},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.selectedComponent;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.a,{children:Object(d.jsxs)(A,{className:"header",children:[Object(d.jsx)("div",{className:"logo"}),Object(d.jsxs)(u.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["0"],children:[Object(d.jsx)(u.a.Item,{onClick:this.onChangeMenu,children:"APP NAME"},"default"),Object(d.jsx)(u.a.Item,{onClick:this.onChangeMenu,children:"Services"},"services"),Object(d.jsx)(u.a.Item,{onClick:this.onChangeMenu,children:"Products"},"products"),Object(d.jsx)(u.a.Item,{onClick:this.onChangeMenu,children:"Contact"},"contact"),Object(d.jsx)(u.a.Item,{onClick:this.onChangeMenu,className:"float-right",icon:Object(d.jsx)(m.a,{}),children:"Login"},"login")]})]})}),e]})}}]),n}(a.Component);var S=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(M,{})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,200)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(184).config(),c.a.render(Object(d.jsx)(S,{}),document.getElementById("root")),q()}},[[187,1,2]]]);
//# sourceMappingURL=main.57524fc2.chunk.js.map