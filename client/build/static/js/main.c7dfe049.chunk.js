(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a.n(r),l=a(4),s=a(5),i=a(7),u=a(6),m=a(8),d=a(55),h=a(56),v=a(54);a(28);var f=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg text-light"},o.a.createElement("div",{className:"container"},o.a.createElement(v.a,{className:"navbar-brand",to:"/"},"Google Books Search",o.a.createElement("img",{className:"logo"})),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(v.a,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"}," Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(v.a,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))))};a(31);var k=function(){return o.a.createElement("div",{className:"jumbotron text-center"},o.a.createElement("div",{className:"container text-dark"}))};var b=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))},p=a(11);a(32);var E=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"search"},o.a.createElement("h2",null,"Search for and save Books of Interest")),o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search a Book",id:"search"}),o.a.createElement("button",Object(p.a)({onClick:e.handleFormSubmit,className:"btn btn-dark mt-3 mb-5"},"className","search-btn"),"Search"))))},g=a(10),N=a.n(g),B={getBook:function(e){return N.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&api_key=AIzaSyCTf4_8ru7xfkzXEy1GomsYHCDCYokPPAI&limit=10")},saveBook:function(e){return N.a.post("/api/books",e).then(function(e){return e.data})},deleteBook:function(e){return N.a.delete("/api/books/"+e).then(function(e){return e.data})},savedBooks:function(){return N.a.get("/api/books").then(function(e){return e.data})}},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a.loadSavedBooks=function(){B.savedBooks().then(function(e){return a.setState({savedBooks:e})}).catch(function(e){return console.error(e)})},a.handleSave=function(e){a.state.savedBooks.map(function(e){return e._id}).includes(e._id)?B.deleteBook(e._id).then(function(e){return a.setState({savedBooks:a.state.savedBooks.filter(function(t){return t._id!==e._id})})}).catch(function(e){return console.error(e)}):B.saveBook(e).then(function(e){return a.setState({savedBooks:a.state.savedBooks.concat([e])})}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadSavedBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.books.length?o.a.createElement("div",null,this.props.books.map(function(t){return o.a.createElement("div",{className:"card mb-3",key:t._id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"},o.a.createElement("img",{alt:t.title,className:"img-fluid",src:t.image})),o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.title," by ",t.authors),o.a.createElement("p",{className:"card-text"},t.description),o.a.createElement("div",null,o.a.createElement("a",{href:t.link,className:"btn badge-pill btn-outline-dark mt-3",target:"_blank"},"View"),o.a.createElement("button",{onClick:function(){return e.handleSave(t)},className:"btn badge-pill btn-outline-info mt-3 ml-3"},e.state.savedBooks.map(function(e){return e._id}).includes(t._id)?"Unsave":"Save"))))))})):o.a.createElement("h2",{className:"text-center"},"No Results to Display"))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",books:[]},a.makeBook=function(e){return{_id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink}},a.searchBook=function(e){B.getBook(e).then(function(e){return a.setState({books:e.data.items.map(function(e){return a.makeBook(e)})})}).catch(function(e){return console.error(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(p.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBook(a.state.search)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E,{search:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Results"),o.a.createElement(j,{books:this.state.books})))}}]),t}(o.a.Component),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;B.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Saved books"),o.a.createElement(j,{books:this.state.savedBooks}))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(k,null),o.a.createElement(b,null,o.a.createElement(h.a,{exact:!0,path:"/",component:O}),o.a.createElement(h.a,{exact:!0,path:"/search",component:O}),o.a.createElement(h.a,{exact:!0,path:"/saved",component:S}))))}}]),t}(n.Component);c.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c7dfe049.chunk.js.map