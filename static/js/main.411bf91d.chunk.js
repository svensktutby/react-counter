(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,function(e,t,n){e.exports={counter:"Counter_counter__2d6O8 App_jumbotron__13Xfc",btnGroup:"Counter_btnGroup__2f_78",halfSize:"Counter_halfSize__2Xqmj"}},,,function(e,t,n){e.exports={scoreboard:"Scoreboard_scoreboard__3aX6V",alarm:"Scoreboard_alarm__2nBN8"}},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),o=n(7),s=n.n(o),u=(n(14),n(8)),i=n(3),l=n.n(i),b=n(1),d=n(4),j=n(6),m=n.n(j),h=function(e){var t=e.className,n=e.alarm,a=e.children,r=Object(d.a)(e,["className","alarm","children"]),o="".concat(m.a.scoreboard," ").concat(n?m.a.alarm:""," ").concat(t||"");return Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body text-center",children:Object(c.jsx)("h2",Object(b.a)(Object(b.a)({className:o},r),{},{children:a}))})})},O=function(e){var t=e.type,n=void 0===t?"button":t,a=e.className,r=e.clickHandler,o=Object(d.a)(e,["type","className","clickHandler"]),s="btn ".concat(a||"btn-primary");return Object(c.jsx)("button",Object(b.a)({onClick:r,className:s,type:n},o))},p=function(e){var t=e.className,n=e.state,a=e.increaseCounter,r=e.resetCounter,o=n.counter,s=n.minCounter,u=n.maxCounter,i="".concat(l.a.counter," jumbotron ").concat(t||"");return Object(c.jsxs)("div",{className:i,children:[Object(c.jsx)(h,{alarm:o>=u,children:o}),Object(c.jsx)("hr",{className:"my-4"}),Object(c.jsxs)("div",{className:"btn-group btn-group-lg ".concat(l.a.btnGroup),children:[Object(c.jsx)(O,{className:"btn-info ".concat(l.a.halfSize),disabled:o>=u,clickHandler:a,children:"Increment"}),Object(c.jsx)(O,{className:"btn-info ".concat(l.a.halfSize),disabled:o===s,clickHandler:r,children:"Reset"})]})]})},f="INCREMENT",x="RESET",C={counter:0,minCounter:0,maxCounter:5},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n=e.counter;return e.counter<e.maxCounter&&(n=e.counter+t.payload)>e.maxCounter&&(n=e.maxCounter),Object(b.a)(Object(b.a)({},e),{},{counter:n});case x:return Object(b.a)(Object(b.a)({},e),{},{counter:0});default:return e}};n(15);var N=function(){var e=Object(a.useReducer)(_,C),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p,{state:n,increaseCounter:function(){r({type:f,payload:1})},resetCounter:function(){r({type:x})}})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.411bf91d.chunk.js.map