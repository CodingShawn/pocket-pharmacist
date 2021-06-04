(this["webpackJsonppocket-pharmacist"]=this["webpackJsonppocket-pharmacist"]||[]).push([[0],{397:function(e,t,r){},658:function(e,t,r){},661:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(12),s=r.n(c),o=(r(397),r(73)),i=r(234),u=r(377),l=r.n(u);var f=function(e){return function(e){return e.replace(/&&/g,", ")}(function(e){return e.substring(1,e.length-1)}(e)).toUpperCase()},b=r(13);var d=function(e){var t=e.results,r=e.searchTerm,n=t.map((function(e,t){return Object(i.a)(Object(i.a)({},e),{},{id:t})})).map((function(e){return Object.keys(e).forEach((function(t){"string"===typeof e[t]&&"forensic_classification"!==t&&(e[t]=f(e[t]))})),e}));return Object(b.jsx)(l.a,{title:'Search Results for "'.concat(r,'"'),data:n,columns:[{name:"product_name",label:"Product Name"},{name:"active_ingredients",label:"Active Ingredients"},{name:"strength",label:"Strength"},{name:"dosage_form",label:"Dosage Form"},{name:"forensic_classification",label:"Forensic Classification",options:{display:!1}},{name:"manufacturer",label:"Manufacturer",options:{display:!1}},{name:"country_of_manufacturer",label:"Country of Manufacturer",options:{display:!1}}],options:{resizableColumns:!0,filter:!1,rowsPerPage:20,rowsPerPageOptions:[20,50],responsive:"standard",selectableRows:"none",textLabels:{body:{noMatch:"No records found. Please check if you have spelt the name correctly."}}}})},p=r(74),h=r.n(p),j=r(132),m=r(163),O=r(381),g=r.n(O),v="https://data.gov.sg/api/action/datastore_search?resource_id=3ee20559-372d-42f0-bde9-245e21f7f39b",x={};function y(e,t){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(h.a.mark((function e(t,r){var n,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{q:Object(m.a)({},t,r)}},e.next=3,g.a.get(v,n);case 3:return a=e.sent,c=a.data.result.records,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x.getDrug=function(){var e=Object(j.a)(h.a.mark((function e(t){var r,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("product_name",t);case 2:return r=e.sent,e.next=5,y("active_ingredients",t);case 5:return n=e.sent,a=n.concat(r),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var w=x,D=r(350),P=r(231),_=r.n(P),k=r(226),M=r(382),R=r.n(M);var T=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),r=t[0],a=t[1];function c(){a(r<315?r+45:0)}function s(){setTimeout(c,250)}function i(){clearTimeout(s)}return Object(n.useEffect)((function(){return s(),i})),Object(n.useEffect)((function(){!function(){var e=document.getElementById("rotating");e&&(e.style.transform="rotate(".concat(r,"deg)"))}()}),[r]),Object(b.jsx)(R.a,{id:"rotating",style:{color:"rgba(0,0,0,0.54)",padding:"12px"}})};var C=function(e){var t=e.setResults,r=e.setSearchTerm,a=Object(n.useState)(!1),c=Object(o.a)(a,2),s=c[0],i=c[1],u=Object(n.useState)(""),l=Object(o.a)(u,2),f=l[0],d=l[1];function p(){return(p=Object(j.a)(h.a.mark((function e(){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getDrug(f);case 2:r=e.sent,t(r),i(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)("section",{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(!0),function(){p.apply(this,arguments)}(),r(f)},id:"search-form",children:[!s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D.a,{label:"Drug / Product Name",type:"search",onChange:function(e){var t=e.target;return d(t.value)},value:f,required:!0}),Object(b.jsx)(k.a,{type:"submit",children:Object(b.jsx)(_.a,{})})]}),s&&Object(b.jsx)(T,{})]})})};var F=function(){return Object(b.jsx)("header",{children:Object(b.jsx)("h1",{id:"header",children:"Pocket Pharmacist"})})};var A=function(){var e=new Date,t="".concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]," ").concat(e.getFullYear()),r="* Contains information from Listing of Registered Therapeutic Products accessed on ".concat(t," from Health Sciences Authority which is made available under the terms of the");return Object(b.jsxs)("footer",{id:"footer",children:[Object(b.jsxs)("div",{children:[r," ",Object(b.jsx)("a",{href:"https://data.gov.sg/open-data-licence",children:"Singapore Open Data Licence version 1.0"})]}),Object(b.jsxs)("div",{children:["** Data retrieved may be outdated. Refer to"," ",Object(b.jsx)("a",{href:"http://eservice.hsa.gov.sg/prism/common/enquirepublic/SearchDRBProduct.do?action=load",children:"HSA website"})," ","for latest list of health products"]})]})};r(658);var E=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),i=s[0],u=s[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(F,{}),Object(b.jsx)(C,{setResults:a,setSearchTerm:u}),r&&Object(b.jsx)(d,{results:r,searchTerm:i}),Object(b.jsx)(A,{})]})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))}},[[661,1,2]]]);
//# sourceMappingURL=main.ae0b31b2.chunk.js.map