(this.webpackJsonpscjohnsonchallenge=this.webpackJsonpscjohnsonchallenge||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),r=a.n(n),c=a(12),l=a.n(c);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(6),s=a(14),m=a(9);var i=Object(o.b)((function(e){return{products:e.products}}))(Object(m.f)((function(e){var t=e.products,a=e.history,n=Object.keys(t).map((function(e,n){return r.a.createElement("button",{onClick:function(){return a.push("/products/"+e)},type:"button",key:"item-list"+n,className:"btn btn-primary"},t[e].description)}));return r.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},r.a.createElement("header",null,r.a.createElement("img",{src:"/images/toilet-duck.png",alt:"Duck"}),r.a.createElement("p",{className:"lead"},"I am the toiled duck and I can offer you many great things. Would you like to:"),n,r.a.createElement("button",{onClick:function(){return a.push("/fortune/")},type:"button",className:"btn btn-primary ml-2"},"I can offer you fortune telling also")))})));var u=Object(o.b)((function(e){return{products:e.products}}))((function(e){var t=e.products,a=e.match.params.productName,n=t[a]?t[a].products.map((function(e,t){return r.a.createElement("div",{key:"products-list"+t,className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},e.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},r.a.createElement("li",null,e.description),r.a.createElement("li",null,r.a.createElement("img",{src:"."+e.image,height:"88px",alt:""})))))})):[];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center clearfix"},r.a.createElement("header",null,r.a.createElement("img",{src:"./images/toilet-duck.png",alt:"Duck"}),r.a.createElement("p",{className:"lead"},"Great choice. I can offer you these perfect products:"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-3 card-deck mb-3 text-center"},n)))}));var d=Object(o.b)((function(e){return{products:e.products}}))(Object(m.f)((function(e){e.products;var t=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},r.a.createElement("header",null,r.a.createElement("img",{src:"./images/toilet-duck.png",alt:"Duck"}),r.a.createElement("p",{className:"lead"},"Yay! I can predict your future also. Just type your question here. Don't worry. It remains secret."))),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.push("/answer/")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"question"},"Please type your question"),r.a.createElement("textarea",{id:"question",required:!0,className:"form-control"})),r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Give me answer"}))))}))),p=function(e){return Object.keys(e.products).reduce((function(t,a){return t=t.concat(e.products[a].products)}),[]).map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})).slice(0,1).shift()};var h=Object(o.b)((function(e){return{answer:p(e)}}))((function(e){var t=e.answer;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center clearfix"},r.a.createElement("header",null,r.a.createElement("img",{src:"./images/toilet-duck.png",alt:"Duck"}),r.a.createElement("p",{className:"lead"},"Great! You are lucky. This is your answer:"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-3 card-deck mb-3 text-center"},r.a.createElement("div",{key:"products-list-answer",className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},t.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},r.a.createElement("li",null,t.answer),r.a.createElement("li",null,r.a.createElement("img",{src:t.image,height:"88px",alt:""}))))))))})),E=function(e){var t=e.store;return r.a.createElement(o.a,{store:t},r.a.createElement(s.a,{basename:"/scjohnsonchallenge"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/products/:productName([a-zA-Z]+)",component:u}),r.a.createElement(m.a,{path:"/fortune/",component:d}),r.a.createElement(m.a,{path:"/answer/",component:h}),r.a.createElement(m.a,{path:"/",component:i}))))},f={products:{floorCare:{description:"Cleaning your floor",products:[{name:"Mr Muscle",image:"/images/Mr_Muscle_Man.jpg",description:"some description",answer:"You will have power to fix everything"}]}}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;arguments.length>1&&arguments[1];return e},b=a(10),v=a(23),y=Object(b.createStore)(g,f,Object(v.devToolsEnhancer)({}));l.a.render(r.a.createElement(E,{store:y}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.dc7582fa.chunk.js.map