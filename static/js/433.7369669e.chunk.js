"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{11:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),c=n(791),i=n(689),o=n(87),a="Home_container__MGYYT",s="Home_movieList__dew6t",u="Home_movieListItem__ootu6",l="Home_movieLink__Vy9G5",m=n(184),f=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],f=t[1],h=(0,i.TH)();(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("dc71c629f4ca67f402f49e08e52c86a0")).then((function(e){return e.json()})).then((function(e){return f(e.results)})).catch((function(e){return console.error("Error fetching movies:",e)}))}),[]);var _=n.filter((function(e){return e.title}));return(0,m.jsxs)("div",{className:a,children:[(0,m.jsx)("h2",{children:"Movies Search Page"}),(0,m.jsx)("ul",{className:s,children:_.map((function(e){return(0,m.jsx)("li",{className:u,children:(0,m.jsx)(o.rU,{to:{pathname:"/movies/".concat(e.id),state:{from:h}},className:l,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=433.7369669e.chunk.js.map