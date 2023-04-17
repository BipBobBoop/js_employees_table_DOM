parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,a){return r(e)||n(e,a)||i(e,a)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}function r(e){if(Array.isArray(e))return e}function a(e){return c(e)||l(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function l(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=document.querySelector("table"),d=u.querySelector("tbody"),f=a(d.querySelectorAll("tr")),m=document.createElement("form"),b=!1,p="";function y(e,t,n){var r=e.cells[t].textContent.replace(/[$,]/g,"");return n?+r:r}function v(e,t){t.target.setAttribute("data-direction",t.target.getAttribute("data-direction")&&"asc"===t.target.getAttribute("data-direction")?"desc":"asc");var n=t.target.getAttribute("data-direction"),r=!isNaN(y(f[0],e,!0));f.sort(function(t,a){var o=y(t,e,r),i=y(a,e,r);return r?"asc"===n?o-i:i-o:"asc"===n?o.localeCompare(i):i.localeCompare(o)}),f.forEach(function(e){u.querySelector("tbody").append(e)})}function g(e,t){var n=document.createElement("div"),r=document.createElement("h3");n.classList.add("notification","".concat(e.toLowerCase())),n.dataset.qa="notification",r.textContent=e,n.textContent=t,n.prepend(r),m.parentNode.insertBefore(n,m.nextSibling),setTimeout(function(){return n.remove()},5e3)}function h(e,t,n){var r=t.value.trim();""===r&&(r=p,g("Error","No blank value is allowed"));({Name:/^[a-zA-Z]+\s[a-zA-Z]+$/,Position:/^[a-zA-Z\s]+$/,Office:/^[a-zA-Z\s]+$/,Age:/^\d+$/,Salary:/^\$\d+(,\d{3})*(\.\d{2})?$/})[n].test(r)||(r=p,g("Error","Input editable values must match the data in the table")),"Age"===n&&(r<18||r>90)&&(r=p,g("Error","Age must be between 18 and 90")),e.textContent=r,b=!1}m.classList.add("new-employee-form"),m.insertAdjacentHTML("afterbegin",'\n  <label>Name: <input name="name" type="text" data-qa="name" required></label>\n  <label>Position: \n    <input\n      name="position"\n      type="text"\n      data-qa="position"\n      required\n    >\n  </label>\n  <label>Office: \n    <select name="office" data-qa="office" required>\n      <option>Tokyo</option>\n      <option>Singapore</option>\n      <option>London</option>\n      <option>New York</option>\n      <option>Edinburgh</option>\n      <option>San Francisco</option>\n    </select>\n  </label>\n  <label>Age: \n    <input name="age" type="number" data-qa="age" required>\n  </label>\n  <label>Salary: \n    <input name="salary" type="number" data-qa="salary" required>\n  </label>\n  <button>Save to table</button>\n'),u.parentNode.insertBefore(m,u.nextSibling),u.querySelectorAll("thead th").forEach(function(e,t){e.addEventListener("click",function(e){v(t,e)})}),f.forEach(function(e){e.addEventListener("click",function(){u.querySelector(".active")&&u.querySelector(".active").classList.remove("active"),e.classList.add("active")})}),m.addEventListener("submit",function(t){t.preventDefault(),document.querySelector(".notification")&&document.querySelector(".notification").remove();var n=new FormData(m),r=Object.fromEntries(n.entries());if(r.name.trim().length<4)g("Error","Name must be at least 4 letters");else if(r.position.trim().length<4)g("Error","Position must be at least 4 letters");else if(r.age<18||r.age>90)g("Error","Age must be between 18 and 90");else if(/^[a-zA-Z\s]+$/.test(r.name))if(/^[a-zA-Z\s]+$/.test(r.position)){var a=d.insertRow();Object.entries(r).forEach(function(t){var n=e(t,2),r=n[0],o=n[1];a.insertCell().textContent="salary"===r?Number(o).toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}):o}),f.push(a),g("Success","Row is added to the table"),m.reset()}else g("Error","Position must contain only Latin letters and spaces");else g("Error","Name must contain only Latin letters and spaces")}),u.addEventListener("dblclick",function(e){if(!b){var t=e.target.closest("td"),n=u.querySelector("thead tr").children[t.cellIndex].textContent.trim();if(t){var r=t.textContent.trim();p=r;var a=document.createElement("input");a.type="text",a.classList.add("cell-input"),a.value=r,t.textContent="",t.appendChild(a),a.focus(),a.addEventListener("blur",function(){h(t,a,n)}),a.addEventListener("keydown",function(e){"Enter"===e.key&&(e.preventDefault(),h(t,a,n))}),b=!0}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.479eaf32.js.map