(()=>{"use strict";var n,e,r,o,t,a,i,d,c,s,p,l,u,f,v={620:(n,e,r)=>{r.d(e,{Z:()=>d});var o=r(81),t=r.n(o),a=r(645),i=r.n(a)()(t());i.push([n.id,"/* Dropdown Button */\r\n.dropbtn {\r\n    background-color: #04AA6D;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n  }\r\n  \r\n  /* The container <div> - needed to position the dropdown content */\r\n  .dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  /* Dropdown Content (Hidden by Default) */\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: #ddd;}\r\n  \r\n  /* Show the dropdown menu on hover */\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n  \r\n  /* Change the background color of the dropdown button when the dropdown content is shown */\r\n  .dropdown:hover .dropbtn {background-color: #3e8e41;}",""]);const d=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),t&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=t):p[4]="".concat(t)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===n){r=o;break}return r}function o(n,o){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=t(f,o);o.byIndex=d,e.splice(d,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function t(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=r(a[i]);e[d].references--}for(var c=o(n,t),s=0;s<a.length;s++){var p=r(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var o=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var t=void 0!==r.layer;t&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,t&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function b(n){var e=h[n];if(void 0!==e)return e.exports;var r=h[n]={id:n,exports:{}};return v[n](r,r.exports,b),r.exports}b.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return b.d(e,{a:e}),e},b.d=(n,e)=>{for(var r in e)b.o(e,r)&&!b.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},b.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),b.nc=void 0,n=b(379),e=b.n(n),r=b(795),o=b.n(r),t=b(569),a=b.n(t),i=b(565),d=b.n(i),c=b(216),s=b.n(c),p=b(589),l=b.n(p),u=b(620),(f={}).styleTagTransform=l(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.querySelector("body").innerHTML=`<div class="dropdown" id="dropdown">\n    <button class="dropbtn" id="dropbtn">Mymenu</button>\n    <div class="dropdown-content" id="dropdown-content">\n    ${[{label:"Home",link:"#"},{label:"Content",link:"#"},{label:"Contact",link:"#"}].reduce(((n,e)=>n+`<a href="${e.link}">${e.label}</a>`),"")}\n    </div>\n  </div>`})();