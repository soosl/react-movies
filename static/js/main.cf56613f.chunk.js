(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(8),r=a.n(s),i=(a(13),a(0));function l(){return Object(i.jsx)("nav",{className:"deep-purple darken-3",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"/",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/soosl",children:"Repo"})})})]})})}function o(){return Object(i.jsx)("footer",{className:"page-footer deep-purple darken-3",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var j=a(2),h=a(3),d=a(5),p=a(4),b=a(7),u=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.Poster,a=e.Title,c=e.Type,n=e.Year;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===t?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x420.png?text=".concat(a),alt:"#"}):Object(i.jsx)("img",{className:"activator",src:t,alt:"#"})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:a}),Object(i.jsx)("p",{children:c}),Object(i.jsx)("p",{children:n})]})]})}}]),a}(n.a.Component),m=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.movies,t=void 0===e?[]:e;return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("div",{className:"row",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr)",gap:"1rem"},children:t.length?t.map((function(e){return Object(c.createElement)(u,Object(b.a)(Object(b.a)({},e),{},{key:e.imdbID}))})):Object(i.jsx)("h4",{children:"Nothing found"})})})}}]),a}(n.a.Component);function O(){return Object(i.jsx)("div",{className:"preloader-wrapper big active",style:{margin:"30px auto",display:"block"},children:Object(i.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})})}var x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).handleKey=function(t){"Enter"===t.code&&e.props.onSearch(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){return e.props.onSearch(e.state.search,e.state.type)}))},e.state={search:"",type:"all"},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"input-field col s12",children:[Object(i.jsx)("input",{name:"search",type:"search",className:"validate",placeholder:"Search",onChange:function(t){return e.setState({search:t.target.value})},value:this.state.search,onKeyDown:this.handleKey}),Object(i.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.onSearch(e.state.search,e.state.type)},children:"Search"})]})}),Object(i.jsxs)("form",{action:"#",className:"filter-form",children:[Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"filter",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(i.jsx)("span",{children:"All"})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"filter",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(i.jsx)("span",{children:"Movies"})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"filter",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(i.jsx)("span",{children:"Series"})]})})]})]})}}]),a}(n.a.Component),v="5103fa1a",f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(j.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],loading:!0},e.onSearch=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(v,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.log(t),e.setState({loading:!1})}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=".concat(v,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.log(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(i.jsxs)("main",{className:"content container",children:[Object(i.jsx)(x,{onSearch:this.onSearch}),a?Object(i.jsx)(O,{}):Object(i.jsx)(m,{movies:t})]})}}]),a}(n.a.Component);var g=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(f,{}),Object(i.jsx)(o,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cf56613f.chunk.js.map