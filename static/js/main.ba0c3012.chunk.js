(this.webpackJsonppelikula=this.webpackJsonppelikula||[]).push([[0],{18:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(8),n=c.n(s),r=c(11),i=c(10),l=c(5),j=c(2),o=c(6),d=c.n(o),b=c(9),u=c(3),m=c(0),h=function(e){return Object(m.jsxs)("form",{className:"form",children:[Object(m.jsx)("label",{className:"label",htmlFor:"query",children:"Movie Name"}),Object(m.jsx)("input",{className:"input",type:"text",value:e.value,onChange:function(t){return e.setSearchVal(t.target.value)},placeholder:"Search a movie..."})]})},O=(c(7),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),o=Object(u.a)(n,2),O=o[0],x=o[1],v=Object(a.useState)({}),f=Object(u.a)(v,2),N=f[0],p=f[1],g=function(){var e=Object(b.a)(d.a.mark((function e(){var t,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.omdbapi.com/?s=".concat(O,"&apikey=8fc35db7"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:(a=e.sent).Search&&s(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){g(O)}),[O]);var k=function(e){var t=e.movie.imdbID in N;return Object(m.jsx)("div",{className:"nominate-button",children:Object(m.jsx)("button",{onClick:function(){return t=e.movie,void p((function(e){var c=Object(j.a)({},t.imdbID,t);return Object(l.a)(Object(l.a)({},e),c)}));var t},disabled:t,children:"Nominate"})})},w=function(e){return Object(m.jsx)("div",{className:"denominate-button",children:Object(m.jsx)("button",{onClick:function(){return t=e.movie,void p((function(e){var c=t.imdbID;return e[c],Object(r.a)(e,[c].map(i.a))}));var t},children:"Denominate"})})},S=function(){return Object(m.jsx)("ul",{className:"card-list",children:c.map((function(e){return Object(m.jsxs)("li",{className:"card",children:[Object(m.jsx)("img",{className:"card--image",src:e.Poster,alt:e.title+"Poster"}),Object(m.jsxs)("div",{className:"card--content card--content-list",children:[Object(m.jsxs)("span",{className:"card--title",children:[e.Title," (",e.Year,")"]}),Object(m.jsx)(k,{movie:e})]})]},e.imdbID)}))})},D=function(){return Object(m.jsx)("ul",{className:"card-list",children:Object.values(N).map((function(e){return Object(m.jsxs)("li",{className:"card",children:[Object(m.jsx)("img",{className:"card--image",src:e.Poster,alt:e.title+"Poster"}),Object(m.jsxs)("div",{className:"card--content card--content-list",children:[Object(m.jsxs)("span",{className:"card--title",children:[e.Title," (",e.Year,")"]}),Object(m.jsx)(w,{movie:e})]})]},e.imdbID)}))})},y=Object.keys(N).length>4&&Object(m.jsxs)("div",{className:"nomination-banner",children:["You have selected ",5," movies!"]});return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"title",children:"Pelikula"}),Object(m.jsx)("div",{className:"cute-banner",children:Object(m.jsx)("img",{src:"https://66.media.tumblr.com/6d88cc218b4404fd04974f4d1188e6d9/tumblr_mqzutnr0BD1rfjowdo1_500.gif",alt:"totoro",width:"250",height:"200"})}),Object(m.jsx)(h,{searchVal:O,setSearchVal:x}),Object(m.jsxs)("div",{className:"container",children:[y,Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-6 search_results",children:[Object(m.jsx)("h3",{children:"Results"}),Object(m.jsx)(S,{})]}),Object(m.jsxs)("div",{className:"col-6 nominated",children:[Object(m.jsx)("h3",{children:"Nominations"}),Object(m.jsx)(D,{})]})]})]})]})});n.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))},7:function(e,t,c){}},[[18,1,2]]]);
//# sourceMappingURL=main.ba0c3012.chunk.js.map