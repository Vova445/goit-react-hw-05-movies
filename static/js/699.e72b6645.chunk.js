"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[699],{699:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(439),c=r(791),a=r(87),s=r(689),o="Search_container__JDaLY",u="Search_movieList__Rr3Hv",i="Search_movieListItem__j6mDz",l="Search_form__KGT+E",f="Search_input__PXR0c",h="Search_searchButton__8Jp1t",m=r(184),_=function(){var e=(0,a.lr)(),t=(0,n.Z)(e,2),r=t[0],_=t[1],d=(0,c.useState)(r.get("query")||""),v=(0,n.Z)(d,2),p=v[0],S=v[1],y=(0,c.useState)([]),j=(0,n.Z)(y,2),x=j[0],g=j[1],k=(0,c.useState)(!1),b=(0,n.Z)(k,2),w=b[0],N=b[1],q=(0,s.TH)(),E=r.get("query")||"";(0,c.useEffect)((function(){E&&w&&Z(E).then((function(e){if(0===e.total_results)return alert("Sorry, we didn't find any results for ".concat(E,"."));g(e.results)})).catch((function(e){return console.error("Error fetching movies:",e)}))}),[E,w]);var Z=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("dc71c629f4ca67f402f49e08e52c86a0","&query=").concat(e)).then((function(e){return e.json()}))};return(0,m.jsxs)("div",{className:o,children:[(0,m.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),_({query:p}),N(!0),p?Z(p).then((function(e){if(0===e.total_results)return alert("Sorry, we didn't find any results for ".concat(p,"."));g(e.results)})).catch((function(e){console.error("Error fetching movies:",e),g([])})):g([])},children:[(0,m.jsx)("input",{className:f,type:"text",value:p,onChange:function(e){S(e.target.value)}}),(0,m.jsx)("button",{type:"submit",className:h,children:"Search"})]}),w&&(0,m.jsx)("ul",{className:u,children:x.map((function(e){var t=e.title,r=e.id;return(0,m.jsx)("li",{className:i,children:(0,m.jsx)(a.rU,{to:"/movies/".concat(r),state:{from:q},children:t})},r)}))})]})}}}]);
//# sourceMappingURL=699.e72b6645.chunk.js.map