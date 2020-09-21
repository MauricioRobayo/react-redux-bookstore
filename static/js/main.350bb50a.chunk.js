(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=n(1),c=n(3),u=n(4),s=n(5),m=n(6),f=function(e){var t=e.book,n=e.handleRemoveBook;return r.a.createElement("div",{className:"Book"},r.a.createElement("img",{src:t.thumbnail,alt:""}),r.a.createElement("div",{className:"Book-category"},t.category),r.a.createElement("h2",{className:"Book-title"},t.title),r.a.createElement("div",{className:"Book-id"},t.id),r.a.createElement("button",{className:"Book-remove",type:"button",onClick:function(){return n(t)}},"Remove"))},h=n(7),d=n.n(h),v=n(9),p=function(){var e=Object(v.a)(d.a.mark((function e(t){var n,a,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.searchParams,a=t.endpoint,r=void 0===a?"":a,e.next=3,fetch("https://www.googleapis.com/books/v1/volumes/".concat(r,"?").concat(n));case 3:if((o=e.sent).ok){e.next=6;break}throw new Error("Something went wrong ".concat(o.statusText));case 6:return e.abrupt("return",o.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=new URLSearchParams({q:"subject:".concat(e),maxResults:40,fields:"items(id,volumeInfo(title,imageLinks/smallThumbnail))"});return p({searchParams:t})},b=function(e){var t=new URLSearchParams({fields:"id,volumeInfo(title,imageLinks/smallThumbnail)"});return p({endpoint:"".concat(e),searchParams:t})},k="CREATE_BOOK",y="REMOVE_BOOK",E="CHANGE_FILTER",O="LOAD_BOOKS",j=["Action","Biography","History","Horror","Kids","Learning","Science Fiction"],B=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleRemoveBook=function(t){(0,e.props.removeBook)(t)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getRandomBooks)(j)}},{key:"render",value:function(){var e=this,t=this.props,n=t.books,a=t.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BookList"},0===n.length?r.a.createElement("div",null,"Loading..."):n.filter((function(e){return a===e.category||"All"===a})).reverse().map((function(t){return r.a.createElement(f,{key:t.id,book:t,handleRemoveBook:e.handleRemoveBook})}))))}}]),n}(a.Component),C={removeBook:function(e){return{type:y,book:e}},getRandomBooks:function(e){function t(e){var t;return Boolean(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.smallThumbnail)}return function(n){Promise.all(e.map(g)).then((function(a){n({type:O,books:a.map((function(n,a){var r=n.items,o=Math.floor(3*Math.random()+1);return function(e,t){for(var n=e.length-1;n>e.length-1-t;n-=1){var a=Math.floor(Math.random()*(n+1)),r=[e[a],e[n]];e[n]=r[0],e[a]=r[1]}return e.slice(-t)}(r.filter(t).map((function(t){return function(e,t){var n=e.id,a=e.volumeInfo;return{id:n,title:a.title,thumbnail:a.imageLinks.smallThumbnail.replace(/^http:/,"https:"),category:t}}(t,e[a])})),o)})).flat()})}))}}},w=Object(l.b)((function(e){return{books:e.books,filter:e.filter}}),C)(B),A=n(11),S=n(18),R=n.n(S),L=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).debounce=function(e,t){var n=null;return function(){for(var a=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){e.apply(a,o)}),t)}},a.autocomplete=function(e){(function(e){var t=new URLSearchParams({q:"intitle:".concat(e),fields:"totalItems,items(id,volumeInfo/title)"});return p({searchParams:t})})(e).then((function(t){var n=t.totalItems>0?t.items.map((function(e){return{id:e.id,title:e.volumeInfo.title}})):[];a.setState((function(t){var a=t.suggestionsCache;return{suggestions:n,suggestionsCache:a.set(e.trim(),n)}}))}))},a.handleOnKeyUp=function(e){var t=a.state.suggestionsCache,n=e.target.value;t.has(n.trim())?a.setState({suggestions:t.get(n.trim())}):a.debouncedAutocomplete(n)},a.handleOnChange=function(e){var t,n=e.target,r=n.name,o=n.value,i=document.querySelector('option[value="'.concat(o,'"]'));a.setState((t={},Object(A.a)(t,r,o),Object(A.a)(t,"suggestions",[]),Object(A.a)(t,"id",(null===i||void 0===i?void 0:i.dataset.id)||""),t))},a.handleSubmit=function(){var e=Object(v.a)(d.a.mark((function e(t){var n,r,o,i,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.persist(),n=a.state,r=n.title,o=n.category,i=n.id,l=a.props.createBook,""===i){e.next=11;break}return e.next=7,b(i);case 7:c=e.sent,l({id:c.id,title:c.volumeInfo.title,thumbnail:c.volumeInfo.imageLinks.smallThumbnail,category:o}),e.next=12;break;case 11:l({id:R()(),title:r,category:o});case 12:a.setState({title:"",category:o}),t.target.reset();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderCategories=function(){return j.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))},a.state={title:"",category:j[0],id:"",suggestions:[],suggestionsCache:new Map},a.debouncedAutocomplete=a.debounce(a.autocomplete,250),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.category,a=e.suggestions;return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h4",null,"Add new book"),r.a.createElement("div",null,r.a.createElement("input",{list:"titles",type:"text",id:"title",placeholder:"Book title",value:t,onChange:this.handleOnChange,onKeyUp:this.handleOnKeyUp,"aria-label":"title",name:"title"}),r.a.createElement("datalist",{id:"titles"},a.map((function(e){var t=e.id,n=e.title;return r.a.createElement("option",{"aria-label":"title suggestions",key:t,"data-id":t,value:n})}))),r.a.createElement("select",{name:"category","aria-label":"category",id:"category",value:n,onChange:this.handleOnChange},this.renderCategories()),r.a.createElement("button",{type:"submit",value:""},"Add book"))))}}]),n}(a.Component),I={createBook:function(e){return{type:k,book:e}}},x=Object(l.b)(null,I)(L),F=n(10),T=function(e){var t=e.handleFilterChange;return r.a.createElement("label",{htmlFor:"filter"},"Category",r.a.createElement("select",{id:"filter",onChange:function(e){return t(e.target.value)}},["All"].concat(Object(F.a)(j)).map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))},N=function(e){var t=e.children;return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("h1",null,"Bookstore CMS"),t))},M=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleFilterChange=function(t){(0,e.props.changeFilter)(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.filter;return r.a.createElement("div",{className:"App"},r.a.createElement(N,null,r.a.createElement(T,{filter:e,handleFilterChange:this.handleFilterChange})),r.a.createElement(x,null),r.a.createElement(w,null))}}]),n}(r.a.Component),P={changeFilter:function(e){return{type:E,filter:e}}},K=Object(l.b)((function(e){return{books:e.books,filter:e.filter}}),P)(M),U=n(19),_=n.n(U),q=n(20),D=n(2),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return[].concat(Object(F.a)(e),[t.book]);case y:return e.filter((function(e){return e.id!==t.book.id}));case O:return t.books;default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.filter;switch(n){case E:return a;default:return e}},G=Object(D.c)({books:H,filter:J}),V=Object(D.a)(q.a,_.a),z=Object(D.d)(G,{books:[],filter:"All"},V);n(33);i.a.render(r.a.createElement(l.a,{store:z},r.a.createElement(K,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.350bb50a.chunk.js.map