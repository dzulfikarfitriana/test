(function(){"use strict";var t={7985:function(t,e,a){var r=a(8935),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],o=a(1001),n={},l=(0,o.Z)(n,s,i,!1,null,null,null),d=l.exports,p=a(2809),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-header"},[a("router-link",{attrs:{to:"/"}},[t._v("Back to cart")])],1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-left"},[a("div",{staticClass:"form-title"},[a("h2",[t._v("Delivery details")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txtDropshipper,expression:"txtDropshipper"}],attrs:{type:"checkbox",id:"dropshipper"},domProps:{checked:Array.isArray(t.txtDropshipper)?t._i(t.txtDropshipper,null)>-1:t.txtDropshipper},on:{change:function(e){var a=t.txtDropshipper,r=e.target,s=!!r.checked;if(Array.isArray(a)){var i=null,o=t._i(a,i);r.checked?o<0&&(t.txtDropshipper=a.concat([i])):o>-1&&(t.txtDropshipper=a.slice(0,o).concat(a.slice(o+1)))}else t.txtDropshipper=s}}}),t._v(" "),a("label",{attrs:{for:"dropshipper"}},[t._v("Send as dropshipper")])])]),a("div",{staticClass:"form-body"},[a("div",{staticClass:"form-left"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txtEmail,expression:"txtEmail"}],attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:t.txtEmail},on:{keyup:t.emailValidator,input:function(e){e.target.composing||(t.txtEmail=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txtPhone,expression:"txtPhone"}],attrs:{type:"text",placeholder:"Phone Number",required:""},domProps:{value:t.txtPhone},on:{keyup:t.phoneValidator,input:function(e){e.target.composing||(t.txtPhone=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txtAddress,expression:"txtAddress"}],attrs:{rows:"3",maxlength:t.maxAddress,placeholder:"Address"},domProps:{value:t.txtAddress},on:{input:function(e){e.target.composing||(t.txtAddress=e.target.value)}}}),a("small",[t._v("Sisa karakter "+t._s(t.maxAddress-t.txtAddress.length))])])]),a("div",{staticClass:"form-right"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txtDropshipperName,expression:"txtDropshipperName"}],attrs:{type:"text",disabled:t.isDisabled,placeholder:"Dropshipper Name"},domProps:{value:t.txtDropshipperName},on:{input:function(e){e.target.composing||(t.txtDropshipperName=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txtDropshipperPhone,expression:"txtDropshipperPhone"}],attrs:{type:"text",disabled:t.isDisabled,placeholder:"Dropshipper Phone"},domProps:{value:t.txtDropshipperPhone},on:{input:function(e){e.target.composing||(t.txtDropshipperPhone=e.target.value)}}})])])])]),a("div",{staticClass:"card-right"},[a("h4",[t._v("Summary")]),t._m(1),a("table",{staticClass:"table-summary"},[a("tr",[a("td",[t._v("Cost of goods")]),a("td",{attrs:{align:"right"}},[t._v(t._s(t.costGoods))])]),a("tr",[a("td",[t._v("Dropshipping fee")]),a("td",{attrs:{align:"right"}},[t._v(t._s(t.feeDropshipping))])]),a("tr",[t._m(2),a("td",{attrs:{align:"right"}},[a("h3",[t._v(t._s(t.costGoods+t.feeDropshipping))])])])]),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.submit}},[t._v("Continue to Payment")])])])])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"stepper"},[a("li",[a("i",{staticClass:"active"},[t._v("1")]),t._v(" "),a("span",[t._v("Delivery")])]),a("li",[a("i",[t._v("2")]),t._v(" "),a("span",[t._v("Payment")])]),a("li",[a("i",[t._v("3")]),t._v(" "),a("span",[t._v("Finish")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"m-0"},[a("small",[t._v("10 items purchased")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("h3",[t._v("Total")])])}],m={name:"HomeView",data(){return{txtEmail:"",txtPhone:"",txtAddress:"",txtDropshipper:"",txtDropshipperName:"",txtDropshipperPhone:"",costGoods:5e5,feeDropshipping:0,total:0,isDisabled:!0,maxAddress:120}},watch:{txtDropshipper(){this.chooseDropshipper()}},methods:{chooseDropshipper(){0!=this.txtDropshipper?(this.feeDropshipping=5900,this.isDisabled=!1):(this.txtDropshipperName="",this.txtDropshipperPhone="",this.feeDropshipping=0,this.isDisabled=!0)},phoneValidator(t){const e=t.target.value;console.log(e);let a=/^[0-9()+-]+$/,r=a.test(e);r?e.length<6||e.length>20?(t.target.classList.remove("valid"),t.target.classList.add("invalid")):(t.target.classList.remove("invalid"),t.target.classList.add("valid")):(t.target.classList.remove("valid"),t.target.classList.add("invalid"))},emailValidator(t){const e=t.target.value;let a=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,r=a.test(e);r?(t.target.classList.remove("invalid"),t.target.classList.add("valid")):(t.target.classList.remove("valid"),t.target.classList.add("invalid"))},submit(){var t={orderId:"",email:this.txtEmail,phone:this.txtPhone,address:this.address,dropshipperName:this.txtDropshipperName,dropshipperPhone:this.txtDropshipperPhone,isDropshipper:this.isDropshipper,costGoods:this.costGoods,dropshippingFee:this.feeDropshipping,total:this.total,courierName:"",courierPrice:0,courierEstimate:"",paymentMethod:"",paymentFee:0};localStorage.setItem("dataOrder",JSON.stringify(t)),this.$router.push("/payment")}}},u=m,v=(0,o.Z)(u,c,h,!1,null,null,null),f=v.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-header"},[a("router-link",{attrs:{to:"/"}},[t._v("Back to delivery")])],1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-left"},[t._m(1),a("div",{staticClass:"form-body"},[a("div",{staticClass:"input-radio-group"},t._l(t.couriers,(function(e,r){return a("label",{key:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.shipment,expression:"shipment"}],staticClass:"radio-input",attrs:{type:"radio"},domProps:{value:e.id,checked:t._q(t.shipment,e.id)},on:{change:function(a){t.shipment=e.id}}}),a("div",{staticClass:"radio-element"},[a("div",{},[a("p",[t._v(t._s(e.name))]),a("small",[t._v(t._s(e.price))])])])])})),0)]),t._m(2),a("div",{staticClass:"form-body"},[a("div",{staticClass:"input-radio-group"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentMethod,expression:"paymentMethod"}],staticClass:"radio-input",attrs:{type:"radio",value:"e-Wallet"},domProps:{checked:t._q(t.paymentMethod,"e-Wallet")},on:{change:function(e){t.paymentMethod="e-Wallet"}}}),t._m(3)]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentMethod,expression:"paymentMethod"}],staticClass:"radio-input",attrs:{type:"radio",value:"Bank Transfer"},domProps:{checked:t._q(t.paymentMethod,"Bank Transfer")},on:{change:function(e){t.paymentMethod="Bank Transfer"}}}),t._m(4)]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentMethod,expression:"paymentMethod"}],staticClass:"radio-input",attrs:{type:"radio",value:"Virtual Account"},domProps:{checked:t._q(t.paymentMethod,"Virtual Account")},on:{change:function(e){t.paymentMethod="Virtual Account"}}}),t._m(5)])])])]),a("div",{staticClass:"card-right"},[a("h4",[t._v("Summary")]),t._m(6),a("h5",[t._v("Delivery Estimation")]),a("p",{staticClass:"m-0"},[a("small",[t._v(t._s(t.shipmentEstimate)+" by "+t._s(t.shipmentName))])]),a("table",{staticClass:"table-summary"},[a("tr",[a("td",[t._v("Cost of goods")]),a("td",{attrs:{align:"right"}},[t._v(t._s(t.costGoods))])]),a("tr",[a("td",[t._v("Dropshipping fee")]),a("td",{attrs:{align:"right"}},[t._v(t._s(t.feeDropshipping))])]),a("tr",[a("td",[t._v(t._s(t.shipmentName)+" shipment")]),a("td",{attrs:{align:"right"}},[t._v(t._s(t.shipmentPrice))])]),a("tr",[t._m(7),a("td",{attrs:{align:"right"}},[a("h3",[t._v(t._s(t.costGoods+t.feeDropshipping+t.shipmentPrice))])])])]),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.submit}},[t._v("Pay with "+t._s(t.paymentMethod))])])])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"stepper"},[a("li",[a("i",{staticClass:"active"},[t._v("1")]),t._v(" "),a("span",[t._v("Delivery")])]),a("li",[a("i",{staticClass:"active"},[t._v("2")]),t._v(" "),a("span",[t._v("Payment")])]),a("li",[a("i",[t._v("3")]),t._v(" "),a("span",[t._v("Finish")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-title"},[a("h2",[t._v("Shipment")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-title"},[a("h2",[t._v("Payment")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio-element"},[a("div",{},[a("p",[t._v("e-Wallet")]),a("small",[t._v("1.500.000 left")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio-element"},[a("p",[t._v("Bank Transfer")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio-element"},[a("p",[t._v("Virtual Account")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"m-0"},[a("small",[t._v("10 items purchased")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("h3",[t._v("Total")])])}],y={name:"PaymentView",data(){return{dataOrder:"",shipment:"",shipmentName:"",shipmentPrice:0,shipmentEstimate:"",payment:"",costGoods:0,feeDropshipping:0,total:0,couriers:[{id:1,name:"GO-SEND",price:15e3,estimate:"today"},{id:2,name:"JNE",price:9e3,estimate:"2 day"},{id:3,name:"Personal Courier",price:29e3,estimate:"1 day"}],paymentMethod:""}},watch:{txtDropshipper(){this.chooseDropshipper()},shipment(t){this.couriers.map((e=>{e.id==t&&(this.shipmentName=e.name,this.shipmentPrice=e.price)}))}},mounted(){this.getDataOrder()},methods:{getDataOrder(){this.dataOrder=JSON.parse(localStorage.getItem("dataOrder")),this.dataOrder?(console.log("ada "+this.dataOrder.costGoods),this.costGoods=this.dataOrder.costGoods,this.feeDropshipping=this.dataOrder.dropshippingFee):console.log("tidak")},chooseDropshipper(){0!=this.txtDropshipper?(this.feeDropshipping=5900,this.isDisabled=!1):(this.txtDropshipperName="",this.txtDropshipperPhone="",this.feeDropshipping=0,this.isDisabled=!0)},phoneValidator(t){const e=t.target.value;console.log(e);let a=/^[0-9()+-]+$/,r=a.test(e);r?e.length<6||e.length>20?(t.target.classList.remove("valid"),t.target.classList.add("invalid")):(t.target.classList.remove("invalid"),t.target.classList.add("valid")):(t.target.classList.remove("valid"),t.target.classList.add("invalid"))},emailValidator(t){const e=t.target.value;let a=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,r=a.test(e);r?(t.target.classList.remove("invalid"),t.target.classList.add("valid")):(t.target.classList.remove("valid"),t.target.classList.add("invalid"))},generateId(t){for(var e="",a="ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789",r=a.length,s=0;s<t;s++)e+=a.charAt(Math.floor(Math.random()*r));return e},submit(){this.dataOrder.orderId=this.generateId(5),this.dataOrder.total=this.shipmentPrice+this.costGoods+this.feeDropshipping,this.dataOrder.courierName=this.shipmentName,this.dataOrder.courierPrice=this.shipmentPrice,this.dataOrder.courierEstimate=this.shipmentEstimate,this.dataOrder.paymentMethod=this.paymentMethod,localStorage.setItem("dataOrder",JSON.stringify(this.dataOrder)),this.$router.push("/finish")}}},b=y,x=(0,o.Z)(b,_,g,!1,null,null,null),C=x.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-header"}),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-left"},[a("h3",[t._v("Thank you")]),a("p",[a("strong",[t._v(" Order ID : "+t._s(t.dataOrder.orderId))]),a("br"),a("small",[t._v("Your order will be delivered today with gosend")])]),a("router-link",{attrs:{to:"/"}},[t._v("Go to homepage")])],1),a("div",{staticClass:"card-right"},[a("h4",[t._v("Summary")]),t._m(1),a("h5",[t._v("Delivery Estimation")]),a("p",{staticClass:"m-0"},[a("small",[t._v(t._s(t.dataOrder.courierEstimate)+" by "+t._s(t.dataOrder.courierName))])]),a("h5",[t._v("Payment Method")]),a("p",{staticClass:"m-0"},[a("small",[t._v(t._s(t.dataOrder.paymentMethod))])]),a("table",{staticClass:"table-summary"},[a("tr",[a("td",[t._v("Cost of goods")]),a("td",{attrs:{align:"right"}},[t._v(t._s(t.dataOrder.costGoods))])]),a("tr",[a("td",[t._v("Dropshipping fee")]),a("td",{attrs:{align:"right"}},[t._v(t._s(t.dataOrder.dropshippingFee))])]),a("tr",[a("td",[t._v(t._s(t.dataOrder.courierName)+" shipment")]),a("td",{attrs:{align:"right"}},[t._v(t._s(t.dataOrder.courierPrice))])]),a("tr",[t._m(2),a("td",{attrs:{align:"right"}},[a("h3",[t._v(t._s(t.dataOrder.total))])])])])])])])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"stepper"},[a("li",[a("i",{staticClass:"active"},[t._v("1")]),t._v(" "),a("span",[t._v("Delivery")])]),a("li",[a("i",{staticClass:"active"},[t._v("2")]),t._v(" "),a("span",[t._v("Payment")])]),a("li",[a("i",{staticClass:"active"},[t._v("3")]),t._v(" "),a("span",[t._v("Finish")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"m-0"},[a("small",[t._v("10 items purchased")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("h3",[t._v("Total")])])}],O={name:"PaymentView",data(){return{dataOrder:""}},watch:{},mounted(){this.getDataOrder()},methods:{getDataOrder(){var t=JSON.parse(localStorage.getItem("dataOrder"));this.dataOrder=t||""}}},w=O,k=(0,o.Z)(w,D,P,!1,null,null,null),E=k.exports;r.Z.use(p.Z);const N=[{path:"/",name:"home",component:f},{path:"/payment",name:"payment",component:C},{path:"/finish",name:"finish",component:E},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,5830))}],M=new p.Z({mode:"history",base:"/",routes:N});var $=M;r.Z.config.productionTip=!1,new r.Z({router:$,render:t=>t(d)}).$mount("#app")}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,r,s,i){if(!r){var o=1/0;for(p=0;p<t.length;p++){r=t[p][0],s=t[p][1],i=t[p][2];for(var n=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(n=!1,i<o&&(o=i));if(n){t.splice(p--,1);var d=s();void 0!==d&&(e=d)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[r,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.41203ed1.js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="jakmall:";a.l=function(r,s,i,o){if(t[r])t[r].push(s);else{var n,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),p=0;p<d.length;p++){var c=d[p];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==e+i){n=c;break}}n||(l=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,a.nc&&n.setAttribute("nonce",a.nc),n.setAttribute("data-webpack",e+i),n.src=r),t[r]=[s];var h=function(e,a){n.onerror=n.onload=null,clearTimeout(m);var s=t[r];if(delete t[r],n.parentNode&&n.parentNode.removeChild(n),s&&s.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=h.bind(null,n.onerror),n.onload=h.bind(null,n.onload),l&&document.head.appendChild(n)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,r){var s=a.o(t,e)?t[e]:void 0;if(0!==s)if(s)r.push(s[2]);else{var i=new Promise((function(a,r){s=t[e]=[a,r]}));r.push(s[2]=i);var o=a.p+a.u(e),n=new Error,l=function(r){if(a.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;n.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",n.name="ChunkLoadError",n.type=i,n.request=o,s[1](n)}};a.l(o,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,i,o=r[0],n=r[1],l=r[2],d=0;if(o.some((function(e){return 0!==t[e]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(l)var p=l(a)}for(e&&e(r);d<o.length;d++)i=o[d],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(p)},r=self["webpackChunkjakmall"]=self["webpackChunkjakmall"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(7985)}));r=a.O(r)})();
//# sourceMappingURL=app.b3503f1d.js.map