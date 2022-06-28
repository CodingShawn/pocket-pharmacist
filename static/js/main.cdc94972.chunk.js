(this["webpackJsonppocket-pharmacist"]=this["webpackJsonppocket-pharmacist"]||[]).push([[0],{398:function(e,t,r){},641:function(e,t,r){},663:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(12),s=r.n(c),o=(r(398),r(64)),i=r.n(o),u=r(103),f=r(63),l=r(235),p=r(379),d=r.n(p);var b={seperateComponents:function(e){return e.replace(/,/g,"\n")},parseString:function(e){return function(e){return e.replace(/&&/g,", ")}(e).toUpperCase()}},j=r(13);var h=function(e){var t=e.results,r=e.searchTerm,n=t.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{id:t})})).map((function(e){return Object.keys(e).forEach((function(t){"string"===typeof e[t]&&"forensic_classification"!==t&&(e[t]=b.parseString(e[t]),"active_ingredients"!==t&&"strength"!==t||(e[t]=b.seperateComponents(e[t])))})),e}));return Object(j.jsx)(d.a,{title:'Search Results for "'.concat(r,'"'),data:n,columns:[{name:"product_name",label:"Product Name"},{name:"active_ingredients",label:"Active Ingredients"},{name:"strength",label:"Strength"},{name:"dosage_form",label:"Dosage Form"},{name:"forensic_classification",label:"Forensic Classification",options:{display:!1}},{name:"manufacturer",label:"Manufacturer",options:{display:!1}},{name:"country_of_manufacturer",label:"Country of Manufacturer",options:{display:!1}}],options:{resizableColumns:!0,filter:!1,rowsPerPage:20,rowsPerPageOptions:[20,50],responsive:"standard",selectableRows:"none",textLabels:{body:{noMatch:"No records found. Please check if you have spelt the name correctly."}}}})},m=r(352),g=r(232),O=r.n(g),v=r(227),x=r(383),y=r.n(x);var S=function(){var e=Object(n.useState)(0),t=Object(f.a)(e,2),r=t[0],a=t[1];function c(){a(r<315?r+45:0)}function s(){setTimeout(c,250)}function o(){clearTimeout(s)}return Object(n.useEffect)((function(){return s(),o})),Object(n.useEffect)((function(){!function(){var e=document.getElementById("rotating");e&&(e.style.transform="rotate(".concat(r,"deg)"))}()}),[r]),Object(j.jsx)(y.a,{id:"rotating",style:{color:"rgba(0,0,0,0.54)",padding:"12px"}})};var w=function(e){var t=e.setResults,r=e.setSearchTerm,a=e.data,c=e.isLoading,s=Object(n.useState)(""),o=Object(f.a)(s,2),i=o[0],u=o[1],l=Object(n.useState)(!1),p=Object(f.a)(l,2),d=p[0],b=p[1];function h(){var e=a.filter((function(e){return e.active_ingredients.includes(i.toUpperCase())||e.product_name.includes(i.toUpperCase())}));t(e)}return Object(n.useEffect)((function(){d&&h()}),[c]),Object(j.jsx)("section",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c||h(),b(!0),r(i)},id:"search-form",children:[!(c&&d)&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.a,{label:"Drug / Product Name",type:"search",onChange:function(e){var t=e.target;return u(t.value)},value:i,autoFocus:!0,required:!0}),Object(j.jsx)(v.a,{type:"submit",children:Object(j.jsx)(O.a,{})})]}),c&&d&&Object(j.jsx)(S,{})]})})};var _=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{id:"header",children:"Pocket Pharmacist"})})};var D=function(){var e=new Date,t="".concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]," ").concat(e.getFullYear()),r="* Contains information from Listing of Registered Therapeutic Products accessed on ".concat(t," from Health Sciences Authority which is made available under the terms of the");return Object(j.jsxs)("footer",{id:"footer",children:[Object(j.jsxs)("div",{children:[r," ",Object(j.jsx)("a",{href:"https://data.gov.sg/open-data-licence",children:"Singapore Open Data Licence version 1.0"})]}),Object(j.jsxs)("div",{children:["** Data retrieved may be outdated. Refer to"," ",Object(j.jsx)("a",{href:"http://eservice.hsa.gov.sg/prism/common/enquirepublic/SearchDRBProduct.do?action=load",children:"HSA website"})," ","for latest list of health products"]})]})},k=(r(641),r(163)),C=r(237),P=r.n(C),A="https://data.gov.sg/api/action/datastore_search?resource_id=3ee20559-372d-42f0-bde9-245e21f7f39b",E={};function F(e,t){return M.apply(this,arguments)}function M(){return(M=Object(u.a)(i.a.mark((function e(t,r){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{q:Object(k.a)({},t,r)}},e.next=3,P.a.get(A,n);case 3:return a=e.sent,c=a.data.result.records,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}E.getDrug=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("product_name",t);case 2:return r=e.sent,e.next=5,F("active_ingredients",t);case 5:return n=e.sent,a=n.concat(r),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E.getAllDrugs=function(){var e=Object(u.a)(i.a.mark((function e(){var t,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{limit:1e5}},e.next=3,P.a.get(A,t);case 3:return r=e.sent,n=r.data.result.records,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var R=E;var T=function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(f.a)(c,2),o=s[0],l=s[1],p=Object(n.useState)(null),d=Object(f.a)(p,2),b=d[0],m=d[1],g=Object(n.useState)(!0),O=Object(f.a)(g,2),v=O[0],x=O[1];function y(){return(y=Object(u.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getAllDrugs();case 2:t=e.sent,r=S(t),m(r),x(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return e.map((function(e){for(var t in e)"string"===typeof e[t]&&(e[t]=e[t].toUpperCase());return e}))}return Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_,{}),Object(j.jsx)(w,{setResults:a,setSearchTerm:l,data:b,isLoading:v}),r&&Object(j.jsx)(h,{results:r,searchTerm:o}),Object(j.jsx)(D,{})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[663,1,2]]]);
//# sourceMappingURL=main.cdc94972.chunk.js.map