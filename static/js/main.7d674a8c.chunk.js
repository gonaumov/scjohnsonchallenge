(this.webpackJsonpscjohnsonchallenge=this.webpackJsonpscjohnsonchallenge||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);a(25);var r=a(0),n=a.n(r),c=a(12),l=a.n(c);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(6),s=a(14),i=a(9);var m=Object(o.b)((function(e){return{products:e.products}}))(Object(i.f)((function(e){var t=e.products,a=e.history,r=Object.keys(t).map((function(e,r){return n.a.createElement("button",{onClick:function(){return a.push("/products/"+e)},type:"button",key:"item-list"+r,className:"btn btn-primary ml-2 mb-2"},t[e].description)}));return n.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},n.a.createElement("header",null,n.a.createElement("img",{src:"./images/toilet-duck.png",alt:"Duck"}),n.a.createElement("p",{className:"lead"},"I am the toiled duck and I can offer you many great things. Would you like to:"),r,n.a.createElement("button",{onClick:function(){return a.push("/fortune/")},type:"button",className:"btn btn-primary ml-2"},"I can offer you fortune telling also")))})));var u=Object(o.b)((function(e){return{products:e.products}}))((function(e){var t=e.products,a=e.match.params.productName,r=t[a]?t[a].products.map((function(e,t){return n.a.createElement("div",{key:"products-list"+t,className:"card mb-4 box-shadow"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h4",{className:"my-0 font-weight-normal"},e.name)),n.a.createElement("div",{className:"card-body"},n.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},n.a.createElement("li",null,e.description),n.a.createElement("li",null,n.a.createElement("img",{src:"."+e.image,height:"88px",alt:""})))))})):[];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center clearfix"},n.a.createElement("header",null,n.a.createElement("img",{src:"./images/toilet-duck.png",alt:"Duck"}),n.a.createElement("p",{className:"lead"},"Great choice. I can offer you these perfect products:"))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center justify-content-center"},n.a.createElement("div",{className:"col-3 card-deck mb-3 text-center"},r))))}));var d=Object(o.b)((function(e){return{products:e.products}}))(Object(i.f)((function(e){e.products;var t=e.history;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},n.a.createElement("header",null,n.a.createElement("img",{src:"./images/toilet-duck.png",alt:"Duck"}),n.a.createElement("p",{className:"lead"},"Yay! I can predict your future also. Just type your question here. Don't worry. It remains secret."))),n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.push("/answer/")}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"question"},"Please type your question"),n.a.createElement("textarea",{id:"question",required:!0,className:"form-control"})),n.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Give me answer"}))))}))),p=function(e){return Object.keys(e.products).reduce((function(t,a){return t=t.concat(e.products[a].products)}),[]).map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})).slice(0,1).shift()};var h=Object(o.b)((function(e){return{answer:p(e)}}))((function(e){var t=e.answer;return console.log(t),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center clearfix"},n.a.createElement("header",null,n.a.createElement("img",{src:"./images/toilet-duck.png",alt:"Duck"}),n.a.createElement("p",{className:"lead"},"Great! You are lucky. This is your answer:"))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center justify-content-center"},n.a.createElement("div",{className:"col-3 card-deck mb-3 d-flex"},n.a.createElement("div",{key:"products-list-answer",className:"card mb-4 box-shadow"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h4",{className:"my-0 font-weight-normal"},t.name)),n.a.createElement("div",{className:"card-body"},n.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},n.a.createElement("li",null,t.answer),n.a.createElement("li",null,n.a.createElement("img",{src:"."+t.image,height:"88px",alt:""})))))))))})),E=function(e){var t=e.store;return n.a.createElement(o.a,{store:t},n.a.createElement(s.a,{basename:"/scjohnsonchallenge"},n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/products/:productName([a-zA-Z]+)",component:u}),n.a.createElement(i.a,{path:"/fortune/",component:d}),n.a.createElement(i.a,{path:"/answer/",component:h}),n.a.createElement(i.a,{path:"/",component:m}))))},f={products:{floorCare:{description:"Cleaning your floor",products:[{name:"Mr Muscle",image:"/images/Mr_Muscle_Man.jpg",description:"Hard-surface cleaner",answer:"You will have power to fix everything. Be brave"}]},freshYourHouse:{description:"Made your house to smell well",products:[{name:"Glade",image:"/images/glade-fresh.jpg",description:"Air fresheners",answer:"With Glade you will be irresistible for everyone"}]},killInsects:{description:"Kill insects",products:[{name:"Raid",image:"/images/Raid_Logo.png",description:"Insecticides",answer:"With Raid you will prevail all your enemies"}]}}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;arguments.length>1&&arguments[1];return e},b=a(10),y=a(23),v=Object(b.createStore)(g,f,Object(y.devToolsEnhancer)({}));l.a.render(n.a.createElement(E,{store:v}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.7d674a8c.chunk.js.map