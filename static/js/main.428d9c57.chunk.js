(this["webpackJsonplearn-react"]=this["webpackJsonplearn-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(7),s=n.n(i),l=(n(13),n(2)),j=n(3),o=n(5),b=n(4),d=window.location.search,u=new URLSearchParams(d),h=u.get("weight"),m=u.get("height"),O=u.get("inches"),x=u.get("age"),g=u.get("gender"),p=(12*m+O)/2.54,f=.453592*h,v=0;!function(){var e,t,n;""===d?console.log("null is passed"):(e=f,t=p,n=x,v=v="male"===g?10*e+6.25*t-5*n+5:10*e+6.25*t-5*n-161,v=Math.round(v),console.log(v))}(),function(e){null===e&&console.log("null on gender")}(g);var y=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={value:""},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("form",{className:"main-form",action:"index.html",method:"GET",children:[Object(c.jsx)("label",{id:"feetlabel",for:"infeet",children:"Height"}),Object(c.jsx)("input",{type:"number",name:"height",id:"infeet",placeholder:"feet"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"number",name:"inches",id:"ininch",placeholder:"inches"}),Object(c.jsx)("label",{id:"incheslabel",for:"ininch"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"age",children:"Age"}),Object(c.jsx)("input",{type:"number",name:"age",id:"age",placeholder:"years"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"weight",children:"Weight"}),Object(c.jsx)("input",{type:"number",name:"weight",id:"weight",placeholder:"pounds"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Gender"}),Object(c.jsxs)("div",{className:"genderanswer",children:[Object(c.jsxs)("div",{className:"gender-container",children:[Object(c.jsx)("input",{type:"radio",id:"male",name:"gender",value:"male"}),Object(c.jsx)("label",{for:"male",children:"M"})]}),Object(c.jsxs)("div",{className:"gender-container",children:[Object(c.jsx)("input",{type:"radio",id:"female",name:"gender",value:"female"}),Object(c.jsx)("label",{for:"female",children:"F"})]})]}),Object(c.jsx)("input",{type:"reset",id:"reset-box"}),Object(c.jsx)("input",{type:"submit",value:"Submit",id:"submit-box"})]})}}]),n}(r.a.Component);function w(){return v}console.log("This is from form js ".concat(v));var N=n.p+"static/media/title_background.2f7e0c9f.svg";var k=function(){return Object(c.jsxs)("div",{className:"title-container",children:[Object(c.jsx)("h1",{children:"BMR Calculator"}),Object(c.jsx)("img",{className:"title-background",src:N,alt:"some circle"})]})},M="",B=w(),C=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return M=0===B?{display:"none"}:{display:"block"},Object(c.jsxs)("div",{className:"cal-total-container",style:M,children:[Object(c.jsx)("h2",{children:"Your Basic Metabolic Rate is..."}),Object(c.jsxs)("div",{className:"bmr-calorie",children:[w()," calories"]})]})}}]),n}(r.a.Component);var R=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)(y,{}),Object(c.jsx)(C,{})]})};s.a.render(Object(c.jsx)(R,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.428d9c57.chunk.js.map