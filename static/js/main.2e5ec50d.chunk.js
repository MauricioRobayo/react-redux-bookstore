(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(2),c=n(5),u=n(6),s=n(7),m=n(8),h=function(e){var t=e.book,n=e.handleRemoveBook;return r.a.createElement("div",{className:"Book"},r.a.createElement("img",{src:t.thumbnail,alt:""}),r.a.createElement("div",{className:"Book-category"},t.category),r.a.createElement("h2",{className:"Book-title"},t.title),r.a.createElement("div",{className:"Book-id"},t.id),r.a.createElement("button",{className:"Book-remove",type:"button",onClick:function(){return n(t)}},"Remove"))},f=n(12),d=n.n(f),v=n(16),b="CREATE_BOOK",p="REMOVE_BOOK",g="CHANGE_FILTER",k="LOAD_BOOKS",y=n(3),E=["Action","Biography","History","Horror","Kids","Learning","Science Fiction"],O=function(e){var t=e.handleFilterChange;return r.a.createElement("label",{htmlFor:"filter"},"Category",r.a.createElement("select",{id:"filter",onChange:function(e){return t(e.target.value)}},["All"].concat(Object(y.a)(E)).map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))},C=function(e){var t=e.children;return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("h1",null,"Bookstore CMS"),t))},B=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleRemoveBook=function(t){(0,e.props.removeBook)(t)},e.handleFilterChange=function(t){(0,e.props.changeFilter)(t)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getRandomBooks)(E)}},{key:"render",value:function(){var e=this,t=this.props,n=t.books,a=t.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,r.a.createElement(O,{filter:a,handleFilterChange:this.handleFilterChange})),r.a.createElement("div",{className:"BookList"},0===n.length?r.a.createElement("div",null,"Loading..."):n.filter((function(e){return a===e.category||"All"===a})).map((function(t){return r.a.createElement(h,{key:t.id,book:t,handleRemoveBook:e.handleRemoveBook})}))))}}]),n}(a.Component),j={removeBook:function(e){return{type:p,book:e}},changeFilter:function(e){return{type:g,filter:e}},getRandomBooks:function(e){var t=function(){var e=Object(v.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({q:"subject:".concat(t),maxResults:40,fields:"items(id,volumeInfo(title,imageLinks/smallThumbnail))"}),e.next=3,fetch("https://www.googleapis.com/books/v1/volumes?".concat(n));case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return function(n){Promise.all(e.map(t)).then((function(t){var a=t.map((function(t,n){return t.items.filter((function(e){var t=e.volumeInfo.imageLinks,n=(t=void 0===t?{}:t).smallThumbnail;return""!==(void 0===n?"":n)})).sort((function(){return.5-Math.random()})).slice(0,Math.floor(3*Math.random()+1)).map((function(t){var a=t.id,r=t.volumeInfo;return{id:a,title:r.title,thumbnail:r.imageLinks.smallThumbnail.replace(/^http:/,"https:"),category:e[n]}}))})).flat();n({type:k,books:a})}))}}},w=Object(i.b)((function(e){return{books:e.books,filter:e.filter}}),j)(B),A=n(17),R=n(18),F=n.n(R),L=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.category;(0,a.props.createBook)({id:F()(),title:n,category:r}),a.setState({title:"",category:"Categories"}),e.target.reset()},a.renderCategories=function(){return["Category"].concat(Object(y.a)(E)).map((function(e){return r.a.createElement("option",{disabled:"Category"===e,hidden:"Category"===e,key:e,value:e},e)}))},a.state={title:"",category:"Category"},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.category;return r.a.createElement("footer",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h4",null,"Add new book"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"title",id:"title",placeholder:"Book title",value:t,onChange:this.handleChange}),r.a.createElement("select",{name:"category",id:"category",value:n,onChange:this.handleChange,className:"Category"===n?"inactive":""},this.renderCategories()),r.a.createElement("button",{type:"submit",value:""},"Add book"))))}}]),n}(a.Component),N={createBook:function(e){return{type:b,book:e}}},S=Object(i.b)(null,N)(L),M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(S,null))},x=n(19),I=n.n(x),T=n(20),K=n(1),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return[].concat(Object(y.a)(e),[t.book]);case p:return e.filter((function(e){return e.id!==t.book.id}));case k:return t.books;default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.filter;switch(n){case g:return a;default:return e}},H=Object(K.c)({books:_,filter:D}),J=Object(K.a)(T.a,I.a),P=Object(K.d)(H,{books:[],filter:"All"},J);n(33);l.a.render(r.a.createElement(i.a,{store:P},r.a.createElement(M,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2e5ec50d.chunk.js.map