parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fi17":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={header:document.querySelector(".mainHeader"),main:document.querySelector(".mainContent"),mainModal:document.querySelector(".mainModal"),mainModalContent:document.querySelector(".mainModalContent")};exports.refs=e;
},{}],"iyZG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useThemeSwitcher=void 0;var e=require("../refs/refs");const t=()=>({theme:JSON.parse(localStorage.getItem("theme"))||"light",persistTheme(){JSON.parse(localStorage.getItem("theme"))||localStorage.setItem("theme",JSON.stringify(this.theme)),"dark"===this.theme?e.refs.main.style.backgroundColor="black":"light"===this.theme&&(e.refs.main.style.backgroundColor="lightgray")},setTheme(){"dark"===this.theme?(e.refs.main.style.backgroundColor="lightgray",localStorage.setItem("theme",JSON.stringify("light")),this.theme="light"):(e.refs.main.style.backgroundColor="black",localStorage.setItem("theme",JSON.stringify("dark")),this.theme="dark")},isDarkTheme(){return"dark"===this.theme}});exports.useThemeSwitcher=t;
},{"../refs/refs":"fi17"}],"RSqK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createModal=void 0;var e=require("./refs/refs");const s=(s,r)=>{e.refs.mainModal.classList.toggle("closed"),e.refs.mainModalContent.innerHTML=s;const t=s=>{s.target===s.currentTarget&&(e.refs.mainModal.classList.toggle("closed"),e.refs.mainModal.removeEventListener("click",t),a())},a=r(()=>{e.refs.mainModal.classList.toggle("closed"),e.refs.mainModal.removeEventListener("click",t),a()});e.refs.mainModal.addEventListener("click",t)};exports.createModal=s;
},{"./refs/refs":"fi17"}],"cGsR":[function(require,module,exports) {
"use strict";var e=require("./helpers/themeSwitcher"),t=require("./modal"),n=require("./refs/refs");const r=(0,e.useThemeSwitcher)(),c={menuButton:n.refs.header.querySelector(".mainHeaderButton")},s='\n<h2>Settings</h2>\n<label>Dark <input type="checkbox" class="themeCheckBox"/></label>\n<button type="button" class="closeButton">Close</button>\n',o=e=>{const t=document.querySelector(".closeButton"),n=document.querySelector(".themeCheckBox");n.checked=r.isDarkTheme.call(r),n.addEventListener("change",r.setTheme.bind(r)),t.addEventListener("click",e);return()=>{t.removeEventListener("click",e),n.removeEventListener("change",r.setTheme.bind(r))}},l=e=>{(0,t.createModal)(s,o)};r.persistTheme.call(r),c.menuButton.addEventListener("click",l);
},{"./helpers/themeSwitcher":"iyZG","./modal":"RSqK","./refs/refs":"fi17"}],"d6sW":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./js/header"),require("./js/main"),require("./sass/main.scss");
},{"./js/header":"cGsR","./js/main":"d6sW","./sass/main.scss":"d6sW"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.ee46a1b9.js.map