"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[34],{34:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var c=i(439),r=i(791),a=i(689),s=i(87),n="MovieCredits_creditsContainer__LOmKH",o="MovieCredits_creditList__YFCQP",d="MovieCredits_creditItem__nZUnC",_="MovieCredits_creditImage__uZZPb",l="MovieCredits_creditInfo__sfT-6",m="MovieCredits_creditName__tb3hp",h="MovieCredits_creditCharacter__f6e6n",f="MovieCredits_noImagePlaceholder__av+XX",u="MovieCredits_goBackLink__UOWx0",v=i(184),p=function(){var e=(0,r.useState)([]),t=(0,c.Z)(e,2),i=t[0],p=t[1],C=(0,a.UO)().movieId,j="dc71c629f4ca67f402f49e08e52c86a0";return(0,r.useEffect)((function(){var e="https://api.themoviedb.org/3/movie/".concat(C,"/credits?api_key=").concat(j);fetch(e).then((function(e){return e.json()})).then((function(e){return p(e.cast)})).catch((function(e){return console.error("Error fetching movie credits:",e)}))}),[j,C]),(0,v.jsxs)("div",{className:n,children:[(0,v.jsx)("h2",{children:"Movie Credits Page"}),(0,v.jsx)(s.rU,{to:"/movies/".concat(C),className:u,children:"Go Back to Movie Details"}),(0,v.jsx)("ul",{className:o,children:i.map((function(e){return(0,v.jsxs)("li",{className:d,children:[e.profile_path?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:"".concat(e.name," profile"),className:_}):(0,v.jsx)("div",{className:f,children:"No Image"}),(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("p",{className:m,children:e.name}),(0,v.jsx)("p",{className:h,children:e.character})]})]},e.credit_id)}))})]})}}}]);
//# sourceMappingURL=34.ac7c79fa.chunk.js.map