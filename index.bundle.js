"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/wargate-normal-webfont.woff2 */ "./src/fonts/wargate-normal-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/wargate-normal-webfont.woff */ "./src/fonts/wargate-normal-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'wargatenormal';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
  font-weight: normal;
  font-style: normal;
}

*,
html {
  margin: 0;
  padding: 0;
  font-family: Roboto, 'Arial Narrow Bold', sans-serif;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:rgb(252, 252, 252);
}

header {
  padding: 30px;
}

header > h1 {
    font-family: 'wargatenormal';
    font-size: 80px;
}


.main {
  flex: 4 0 auto;
  display: flex;
  padding: 30px;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.board-container {
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.board-container > h2 {
      font-family: 'wargatenormal';
      font-size: 30px;
}

#player-board,
#computer-board {
  display: grid;
  grid-template-rows: repeat(10, 30px);
  grid-template-columns: repeat(10, 30px);
  border: 1px solid rgb(9, 9, 9);
}

.square {
  background-color: rgb(252, 252, 252);
  border: 1px solid rgb(9, 9, 9);
}

#computer-board > .square:hover:not(.hit):not(.miss) {
  cursor: pointer;
  background-color: rgb(230, 230, 230);
}

.board-name {
  text-align: center;
}

footer {
  flex-shrink: 0;
  text-align: center;
  width: 100%;
  background-color: rgb(219, 234, 234);
}

.p-boat-marker {
  background-color: rgb(64, 64, 64);
}

.hit {
  background-color: rgb(255, 64, 64);
}

.miss {
  background-color: rgb(157, 200, 211);
}

.modal-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: black;
  display: flex;
  opacity: 0;
  pointer-events: none;
  transition: opacity 250ms ease;
  background-color: rgba(0, 0, 0, 0.75);
}

.modal {
  margin: auto;
  min-width: 20rem;
  padding: 20px;
  background-color: white;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.modal-container.target {
  opacity: 1;
  pointer-events: all;
}

.winner-announcement {
  font-size: 1.8rem;
  font-family: inherit;
  font-weight: 500;
  color:rgb(40, 40, 40);
  margin-top: 20px;
}

.play-again-button {
  background-color: rgb(40, 40, 40);
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  color: rgb(254, 254, 254);
  font-size: 1.8rem;
  font-family: inherit;
  font-weight: 500;
  margin-bottom: 30px;
  margin-top: 20px;
}

.play-again-button:hover {
  cursor: pointer;
  background-color: rgb(60, 60, 60);}

.square {
  display: flex;
  align-items: center;
  justify-content: center;
}

.x:after {
  content: "\\00d7";
  font-size: 2rem;
  color: rgb(9, 9, 9);
}


.boat-length-squares {
  font-size: 2rem;
  letter-spacing: -5px;
}

.form {
  display: flex;
  padding: 20px;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
}

.row {
  display: flex;
  gap: 3px;
}

.hover {
  background-color: yellow;

}

.coordinate-zone {
  background-color: rgb(207, 231, 237);
  flex: 1 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.coordinate-zone > button {
  background-color: rgb(40, 40, 40);
  padding: 5px 10px;
  border-radius: 8px;
  border: none;
  color: rgb(254, 254, 254);
  font-size: 1.1rem;
  font-family: inherit;
}
.coordinate-zone>button:hover {
  cursor: pointer;
  background-color: rgb(60, 60, 60);
}

.place-ships-notice-section {
  padding-bottom: 10px;
}

.ship-name {
text-decoration: underline rgb(40, 40, 40);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B;0DACyD;EACzD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,oDAAoD;AACtD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,aAAa;AACf;;AAEA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;;AAGA;EACE,cAAc;EACd,aAAa;EACb,aAAa;EACb,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;MACM,4BAA4B;MAC5B,eAAe;AACrB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,uCAAuC;EACvC,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;EACpC,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,UAAU;EACV,oBAAoB;EACpB,8BAA8B;EAC9B,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iCAAiC,CAAC;;AAEpC;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;;AAGA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,wBAAwB;;AAE1B;;AAEA;EACE,oCAAoC;EACpC,cAAc;EACd,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;AACA,0CAA0C;AAC1C","sourcesContent":["@font-face {\n  font-family: 'wargatenormal';\n  src: url('fonts/wargate-normal-webfont.woff2') format('woff2'),\n    url('fonts/wargate-normal-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n*,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, 'Arial Narrow Bold', sans-serif;\n}\n\n.container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color:rgb(252, 252, 252);\n}\n\nheader {\n  padding: 30px;\n}\n\nheader > h1 {\n    font-family: 'wargatenormal';\n    font-size: 80px;\n}\n\n\n.main {\n  flex: 4 0 auto;\n  display: flex;\n  padding: 30px;\n  gap: 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.board-container {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.board-container > h2 {\n      font-family: 'wargatenormal';\n      font-size: 30px;\n}\n\n#player-board,\n#computer-board {\n  display: grid;\n  grid-template-rows: repeat(10, 30px);\n  grid-template-columns: repeat(10, 30px);\n  border: 1px solid rgb(9, 9, 9);\n}\n\n.square {\n  background-color: rgb(252, 252, 252);\n  border: 1px solid rgb(9, 9, 9);\n}\n\n#computer-board > .square:hover:not(.hit):not(.miss) {\n  cursor: pointer;\n  background-color: rgb(230, 230, 230);\n}\n\n.board-name {\n  text-align: center;\n}\n\nfooter {\n  flex-shrink: 0;\n  text-align: center;\n  width: 100%;\n  background-color: rgb(219, 234, 234);\n}\n\n.p-boat-marker {\n  background-color: rgb(64, 64, 64);\n}\n\n.hit {\n  background-color: rgb(255, 64, 64);\n}\n\n.miss {\n  background-color: rgb(157, 200, 211);\n}\n\n.modal-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  background-color: black;\n  display: flex;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 250ms ease;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n\n.modal {\n  margin: auto;\n  min-width: 20rem;\n  padding: 20px;\n  background-color: white;\n  border-radius: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-container.target {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.winner-announcement {\n  font-size: 1.8rem;\n  font-family: inherit;\n  font-weight: 500;\n  color:rgb(40, 40, 40);\n  margin-top: 20px;\n}\n\n.play-again-button {\n  background-color: rgb(40, 40, 40);\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  color: rgb(254, 254, 254);\n  font-size: 1.8rem;\n  font-family: inherit;\n  font-weight: 500;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\n.play-again-button:hover {\n  cursor: pointer;\n  background-color: rgb(60, 60, 60);}\n\n.square {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.x:after {\n  content: \"\\00d7\";\n  font-size: 2rem;\n  color: rgb(9, 9, 9);\n}\n\n\n.boat-length-squares {\n  font-size: 2rem;\n  letter-spacing: -5px;\n}\n\n.form {\n  display: flex;\n  padding: 20px;\n  gap: 30px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n}\n\n.row {\n  display: flex;\n  gap: 3px;\n}\n\n.hover {\n  background-color: yellow;\n\n}\n\n.coordinate-zone {\n  background-color: rgb(207, 231, 237);\n  flex: 1 0 auto;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n\n.coordinate-zone > button {\n  background-color: rgb(40, 40, 40);\n  padding: 5px 10px;\n  border-radius: 8px;\n  border: none;\n  color: rgb(254, 254, 254);\n  font-size: 1.1rem;\n  font-family: inherit;\n}\n.coordinate-zone>button:hover {\n  cursor: pointer;\n  background-color: rgb(60, 60, 60);\n}\n\n.place-ships-notice-section {\n  padding-bottom: 10px;\n}\n\n.ship-name {\ntext-decoration: underline rgb(40, 40, 40);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addGameComponents: () => (/* binding */ addGameComponents),
/* harmony export */   clearGameComponents: () => (/* binding */ clearGameComponents),
/* harmony export */   displayInstructions: () => (/* binding */ displayInstructions),
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
// import { resetGame } from ".";

function componentContainer() {
  const container = document.createElement("div");
  container.classList.add("container");
  return container;
}

function componentHeader() {
  const header = document.createElement("header");
  return header;
}

function componentTitle() {
  const title = document.createElement("h1");
  title.textContent = "BATTLESHIP";
  title.classList.add("title");
  return title;
}

function componentCoordinateSelectionZone() {
  const coordinateSelectionZone = document.createElement("div");
  const placeShipsNoticeSection = document.createElement("div");
  placeShipsNoticeSection.classList.add("place-ships-notice-section");
  const placeShipsNotice = document.createElement("span");
  const axisButton = document.createElement("button");
  const shipName = document.createElement("span");
  placeShipsNotice.textContent = "Place your ";
  shipName.textContent = "carrier";
  shipName.classList.add("ship-name");
  axisButton.textContent = "Rotate";
  axisButton.classList.add("rotate");
  coordinateSelectionZone.appendChild(placeShipsNoticeSection);
  placeShipsNoticeSection.appendChild(placeShipsNotice);
  placeShipsNoticeSection.appendChild(shipName);
  coordinateSelectionZone.appendChild(axisButton);
  coordinateSelectionZone.classList.add("coordinate-zone");
  return coordinateSelectionZone;
}

function componentMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  return main;
}

function componentPlayerBoardContainer() {
  const playerBoardContainer = document.createElement("div");
  playerBoardContainer.classList.add("board-container");
  return playerBoardContainer;
}

function componentComputerBoardContainer() {
  const computerBoardContainer = document.createElement("div");
  computerBoardContainer.classList.add("board-container");
  return computerBoardContainer;
}

function componentBoardName(name) {
  const boardName = document.createElement("h2");
  boardName.textContent = name;
  boardName.classList.add("board-name");
  return boardName;
}

function componentPlayerBoard() {
  const playerBoard = document.createElement("div");
  playerBoard.setAttribute("id", "player-board");
  return playerBoard;
}

function componentPlayerGrid() {
  const playerBoard = componentPlayerBoard();
  for (let i = 0; i < 100; i += 1) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("data-id-p", `${i}`);
    square.setAttribute("p-occupied", "false");
    playerBoard.appendChild(square);
  }
  return playerBoard;
}

function componentComputerBoard() {
  const computerBoard = document.createElement("div");
  computerBoard.setAttribute("id", "computer-board");
  return computerBoard;
}

function componentComputerGrid() {
  const computerBoard = componentComputerBoard();
  for (let i = 0; i < 100; i += 1) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("data-id-c", `${i}`);
    square.setAttribute("c-occupied", "false");
    computerBoard.appendChild(square);
  }
  return computerBoard;
}

function componentFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "footer";
  return footer;
}

function componentPlayAgainButton() {
  const button = document.createElement("button");
  button.classList.add("play-again-button");
  button.textContent = "Play Again";
  return button;
}

function componentModal() {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  const modal = document.createElement("section");
  modal.classList.add("modal");
  modalContainer.appendChild(modal);
  const text = document.createElement("p");
  text.classList.add("winner-announcement");
  modal.appendChild(text);
  const button = componentPlayAgainButton();
  modal.appendChild(button);
  return modalContainer;
}

function init() {
  const container = componentContainer();
  const header = componentHeader();
  const title = componentTitle();
  const coordinateSelectionZone = componentCoordinateSelectionZone();
  const main = componentMain();

  const footer = componentFooter();

  document.body.appendChild(container);
  container.appendChild(header);
  header.appendChild(title);
  container.appendChild(coordinateSelectionZone);
  container.appendChild(main);
  container.appendChild(footer);
}

function addGameComponents(
  handleClickableSquare,
  playerGameboard,
  computerGameboard
) {
  const playerBoardContainer = componentPlayerBoardContainer();
  const computerBoardContainer = componentComputerBoardContainer();
  const playerBoard = componentPlayerGrid();
  const computerBoard = componentComputerGrid();

  const main = document.querySelector(".main");
  main.appendChild(playerBoardContainer);
  main.appendChild(computerBoardContainer);
  playerBoardContainer.appendChild(componentBoardName("Your Seas"));
  computerBoardContainer.appendChild(componentBoardName("Enemy Seas"));
  playerBoardContainer.appendChild(playerBoard);
  computerBoardContainer.appendChild(computerBoard);
  main.appendChild(componentModal(playerGameboard, computerGameboard));
  const boardContainer = document.getElementById("computer-board");
  boardContainer.addEventListener("click", handleClickableSquare);
}

function clearGameComponents() {
  const main = document.querySelector(".main");

  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function displayInstructions(boatNameDOM) {
  const boatNameText = document.querySelector(".ship-name");

  let name = boatNameDOM;
  if (name === "patrolBoat") {
    name = "patrol boat";
  }

  if (name === "undefined") {
    const coordinateZone = document.querySelector(".coordinate-zone");
    coordinateZone.remove();
  }
  boatNameText.textContent = name;
}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* eslint-disable import/extensions */




function Game() {
  const playerGameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
  const computerGameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])("c");
  const player = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Friendly Seas", computerGameboard);
  const computer = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Enemy Seas", playerGameboard);

  return { playerGameboard, computerGameboard, player, computer };
}


/***/ }),

/***/ "./src/gameboard-dom.js":
/*!******************************!*\
  !*** ./src/gameboard-dom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayModal: () => (/* binding */ displayModal),
/* harmony export */   indicateHit: () => (/* binding */ indicateHit),
/* harmony export */   indicateMiss: () => (/* binding */ indicateMiss),
/* harmony export */   placeShipDom: () => (/* binding */ placeShipDom),
/* harmony export */   removeHitIndicator: () => (/* binding */ removeHitIndicator),
/* harmony export */   removeMissIndicator: () => (/* binding */ removeMissIndicator),
/* harmony export */   squareIds: () => (/* binding */ squareIds)
/* harmony export */ });
// Cell lookup
const squareIds = [
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
  ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
  ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
  ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"],
  ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"],
  ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79"],
  ["80", "81", "82", "83", "84", "85", "86", "87", "88", "89"],
  ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
];

// Place ships on DOM
function placeShipDom(
  coord,
  direction,
  length,
  gameboardIdentifier,
  shipName
) {
  let squareId;
  let element;
  if (direction === "horizontal") {
    for (let i = 0; i < length; i += 1) {
      squareId = squareIds[coord[0]][coord[1] + i];
      element = document.querySelector(
        `[data-id-${gameboardIdentifier}='${squareId}']`
      );
      element.classList.add(`${gameboardIdentifier}-boat-marker`);
      element.classList.add(`${gameboardIdentifier}-${shipName}`);
      element.setAttribute(`${gameboardIdentifier}-occupied`, "true");
    }
  } else if (direction === "vertical") {
    for (let j = 0; j < length; j += 1) {
      squareId = squareIds[coord[0] + j][coord[1]];
      element = document.querySelector(
        `[data-id-${gameboardIdentifier}='${squareId}']`
      );
      element.classList.add(`${gameboardIdentifier}-boat-marker`);
      element.classList.add(`${gameboardIdentifier}-${shipName}`);
      element.setAttribute(`${gameboardIdentifier}-occupied`, "true");
    }
  }
}

function indicateHit(squareId, gameboardIdentifier) {
  const square = document.querySelector(
    `[data-id-${gameboardIdentifier}='${squareId}']`
  );
  square.classList.add("hit");
}

function indicateMiss(squareId, gameboardIdentifier) {
  const square = document.querySelector(
    `[data-id-${gameboardIdentifier}='${squareId}']`
  );
  square.classList.add("miss");
}

function indicateWinner(gameboardIdentifier) {
  const winner = gameboardIdentifier === "p" ? "Enemy" : "You";
  const winnerText = document.querySelector(".winner-announcement");
  winnerText.textContent = `${winner} won!`;
}

function displayModal(gameboardIdentifier) {
  const modal = document.querySelector(".modal-container");
  modal.classList.add("target");
  indicateWinner(gameboardIdentifier);
}

function removeHitIndicator() {
  const hits = document.querySelectorAll(".hit");
  Array.from(hits).forEach((hit) => hit.classList.remove("hit"));
}

function removeMissIndicator() {
  const misses = document.querySelectorAll(".miss");
  Array.from(misses).forEach((miss) => miss.classList.remove("miss"));
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard-dom.js */ "./src/gameboard-dom.js");
/* harmony import */ var _random_placement_generator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random-placement-generator.js */ "./src/random-placement-generator.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* eslint-disable import/extensions */






function Gameboard(gameboardIdentifier) {
  const board = new Array(10).fill(null);

  // Create gameboard 2D array
  for (let i = 0; i < 10; i += 1) {
    board[i] = new Array(10).fill(null);
  }

  // Ship lookup to retrieve variable from string name
  const shipLookup = {};

  function isPlacementPossible(x, y, direction, length) {
    // If the boat does not fit on the board, return false
    if (
      (direction === "horizontal" && y + length - 1 >= 10) ||
      (direction === "vertical" && x + length - 1 >= 10)
    ) {
      return false;
    }

    // If horizontal boat fits on the board, return false if one of the squares is already taken
    if (direction === "horizontal" && y + length - 1 < 10) {
      for (let i = 0; i < length; i += 1) {
        if (board[x][y + i]) {
          return false;
        }
      }
    }

    // If vertical boat fits on the board, return false if one of the squares is already taken
    if (direction === "vertical" && x + length - 1 < 10) {
      for (let j = 0; j < length; j += 1) {
        if (board[x + j][y]) {
          return false;
        }
      }
    }
    return true;
  }

  // Randomly place given ship in the 2D gameboard array
  function placeShip(ship) {
    const x = (0,_random_placement_generator_js__WEBPACK_IMPORTED_MODULE_2__.selectX)();
    const y = (0,_random_placement_generator_js__WEBPACK_IMPORTED_MODULE_2__.selectY)();
    const direction = (0,_random_placement_generator_js__WEBPACK_IMPORTED_MODULE_2__.selectDirection)();
    const length = ship.getLength();

    if (isPlacementPossible(x, y, direction, length)) {
      if (direction === "horizontal") {
        for (let i = 0; i < length; i += 1) {
          board[x][y + i] = ship.shipName;
        }
      } else if (direction === "vertical") {
        for (let j = 0; j < length; j += 1) {
          board[x + j][y] = ship.shipName;
        }
      }
      // Add ship to shipLookup
      shipLookup[ship.shipName] = ship;
      (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__.placeShipDom)(
        [x, y],
        direction,
        length,
        gameboardIdentifier,
        ship.shipName
      );
    } else {
      placeShip(ship);
    }
  }

  // Place ships randomly on a given gameboard
  function placeShipsRandomly(selectedGameboard) {
    const carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(5, "carrier");
    const battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(4, "battleship");
    const destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(3, "destroyer");
    const submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(3, "submarine");
    const patrolBoat = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, "patrolBoat");

    selectedGameboard.placeShip(carrier);
    selectedGameboard.placeShip(battleship);
    selectedGameboard.placeShip(destroyer);
    selectedGameboard.placeShip(submarine);
    selectedGameboard.placeShip(patrolBoat);
  }

  function createPlayerBoats() {
    const carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(5, "carrier");
    const battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(4, "battleship");
    const destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(3, "destroyer");
    const submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(3, "submarine");
    const patrolBoat = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, "patrolBoat");

    return { carrier, battleship, destroyer, submarine, patrolBoat };
  }

  // Rotate manually placed ships on click of rotate button
  let direction = "horizontal";
  function rotateShip() {
    direction = direction === "horizontal" ? "vertical" : "horizontal";
  }

  const rotateButton = document.querySelector(".rotate");
  rotateButton.addEventListener("click", rotateShip);

  // Place player ships on click
  let k = 0;
  function placeShipsManually(e) {
    const playerBoard = document.querySelector("#player-board");
    const playerBoats = createPlayerBoats();
    const boatName = `${Object.keys(playerBoats)[k]}`;
    const boatNameDOM = `${Object.keys(playerBoats)[k + 1]}`;
    const squareId = e.target.dataset.idP;
    const x = Math.floor(squareId / 10);
    const y = squareId % 10;
    const length = playerBoats[boatName].getLength();

    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayInstructions)(boatNameDOM);

    if (isPlacementPossible(x, y, direction, length)) {
      if (direction === "horizontal") {
        for (let i = 0; i < length; i += 1) {
          board[x][y + i] = boatName;
        }
        k += 1;
      } else if (direction === "vertical") {
        for (let j = 0; j < length; j += 1) {
          board[x + j][y] = boatName;
        }
        k += 1;
      }
      // Add ship to shipLookup
      shipLookup[boatName] = playerBoats[boatName];
      (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__.placeShipDom)([x, y], direction, length, gameboardIdentifier, boatName);
    } else {
      e.target.classList.add("hover");
    }
    if (k === 5) {
      playerBoard.removeEventListener("click", placeShipsManually);
    }
  }

  // Return boolean based on whether boats have been sunk
  function areAllBoatsSunk() {
    // Filter out any boats that have not been sunk
    const shipsNotSunk = Object.keys(shipLookup).filter(
      (key) => !shipLookup[key].isSunk()
    );

    if (shipsNotSunk.length > 0) {
      return false;
    }
    return true;
  }

  // receiveAttack takes a pair of coordinates, determines
  // whether or not the attack hits a ship, and then sends
  // the 'hit' function to the correct ship
  // or records the coordinates of the missed shot
  const missedShots = [];
  const shots = [];
  const receiveAttack = (x, y, squareId) => {
    if (board[x][y]) {
      const shipAttacked = board[x][y];
      // board[x][y] = "hit";
      const hitShip = shipLookup[shipAttacked];
      hitShip.hit();
      (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__.indicateHit)(squareId, gameboardIdentifier);

      if (hitShip.isSunk()) {
        const shipSquares = document.querySelectorAll(
          `.${gameboardIdentifier}-${hitShip.shipName}`
        );
        shipSquares.forEach((square) => {
          square.classList.add("x");
        });
      }

      if (areAllBoatsSunk()) {
        (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayModal)(gameboardIdentifier);
      }
    } else {
      // board[x][y] = "miss";
      missedShots.push([x, y]);
      (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__.indicateMiss)(squareId, gameboardIdentifier);
    }
    shots.push([x, y]);
  };

  // Check if shot is available to take or if shot has already been made
  function isShotAvailable(x, y) {
    const currentShot = [x, y];
    const previousShots = shots;

    let shotFound;
    if (previousShots) {
      shotFound = previousShots.find(
        ([prevX, prevY]) => prevX === currentShot[0] && prevY === currentShot[1]
      );
    }
    return !shotFound;
  }

  function clearGameboard() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        board[i][j] = null;
      }
    }
  }

  return {
    board,
    placeShip,
    receiveAttack,
    placeShipsRandomly,
    areAllBoatsSunk,
    isShotAvailable,
    clearGameboard,
    placeShipsManually,
  };
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _gameboard_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard-dom */ "./src/gameboard-dom.js");
/* eslint-disable import/extensions */






(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.init)();

function resetGame() {
  (0,_gameboard_dom__WEBPACK_IMPORTED_MODULE_3__.removeHitIndicator)();
  (0,_gameboard_dom__WEBPACK_IMPORTED_MODULE_3__.removeMissIndicator)();
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.clearGameComponents)();
}

function startGame() {
  const { player, computer, playerGameboard, computerGameboard } = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  // eq:
  // const game = Game();
  // const player = game.player;
  // const computer = game.computer;
  // const playerGameboard = game.playerGameboard;
  // const computerGameboard = game.computerGameboard;

  const handleClickableSquare = (e) => {
    if (!e.target.classList.contains("square")) {
      return;
    }

    const squareId = e.target.dataset.idC;
    const x = Math.floor(squareId / 10);
    const y = squareId % 10;

    if (computerGameboard.isShotAvailable(x, y)) {
      player.makeAttack(x, y, squareId);
      setTimeout(() => {
        computer.makeRandomAttack();
      }, 100);
    }
  };

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addGameComponents)(handleClickableSquare, playerGameboard, computerGameboard);

  const playerBoard = document.getElementById("player-board");
  playerBoard.addEventListener("click", playerGameboard.placeShipsManually);
  computerGameboard.placeShipsRandomly(computerGameboard);

  const button = document.querySelector(".play-again-button");
  button.addEventListener("click", () => {
    resetGame();
    startGame();
  });
}

startGame();


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard-dom.js */ "./src/gameboard-dom.js");
/* harmony import */ var _random_placement_generator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random-placement-generator.js */ "./src/random-placement-generator.js");
/* eslint-disable import/extensions */




class Player {
  constructor(name, enemyGameboard) {
    this.name = name;
    this.enemyGameboard = enemyGameboard;
  }

  makeRandomAttack() {
    const x = (0,_random_placement_generator_js__WEBPACK_IMPORTED_MODULE_1__.selectX)();
    const y = (0,_random_placement_generator_js__WEBPACK_IMPORTED_MODULE_1__.selectY)();

    if (this.enemyGameboard.isShotAvailable(x, y)) {
      const squareId = _gameboard_dom_js__WEBPACK_IMPORTED_MODULE_0__.squareIds[x][y];
      this.makeAttack(x, y, squareId);
    } else {
      this.makeRandomAttack();
    }
  }

  makeAttack(x, y, squareId) {
    this.enemyGameboard.receiveAttack(x, y, squareId);
  }
}


/***/ }),

/***/ "./src/random-placement-generator.js":
/*!*******************************************!*\
  !*** ./src/random-placement-generator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectDirection: () => (/* binding */ selectDirection),
/* harmony export */   selectX: () => (/* binding */ selectX),
/* harmony export */   selectY: () => (/* binding */ selectY)
/* harmony export */ });
// Randomly select X coordinate
function selectX() {
  const x = Math.floor(Math.random() * 10);
  return x;
}

// Randomly select Y coordinate
function selectY() {
  const y = Math.floor(Math.random() * 10);
  return y;
}

// Randomly select whether boat will be placed horizontally or vertically
function selectDirection() {
  const randomNum = Math.floor(Math.random() * 2);
  const direction = randomNum === 0 ? "horizontal" : "vertical";
  return direction;
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, name) {
  const shipName = name;
  let hits = 0;
  const getLength = () => length;
  const hit = () => {
    hits += 1;
    return hits;
  };
  const getHits = () => hits;
  const isSunk = () => hits === length;

  return { shipName, getLength, hit, isSunk, getHits };
}


/***/ }),

/***/ "./src/fonts/wargate-normal-webfont.woff":
/*!***********************************************!*\
  !*** ./src/fonts/wargate-normal-webfont.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7987f76806560ea34aa.woff";

/***/ }),

/***/ "./src/fonts/wargate-normal-webfont.woff2":
/*!************************************************!*\
  !*** ./src/fonts/wargate-normal-webfont.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9150f30aa31300d4d2e.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSkFBcUQ7QUFDakcsNENBQTRDLGlKQUFvRDtBQUNoRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksc0NBQXNDLGlDQUFpQyxpSUFBaUksd0JBQXdCLHVCQUF1QixHQUFHLGNBQWMsY0FBYyxlQUFlLHlEQUF5RCxHQUFHLGdCQUFnQixrQkFBa0IsaUJBQWlCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxHQUFHLFlBQVksa0JBQWtCLEdBQUcsaUJBQWlCLG1DQUFtQyxzQkFBc0IsR0FBRyxhQUFhLG1CQUFtQixrQkFBa0Isa0JBQWtCLGNBQWMsb0JBQW9CLDRCQUE0QixHQUFHLHNCQUFzQixpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixHQUFHLDJCQUEyQixxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLGtCQUFrQix5Q0FBeUMsNENBQTRDLG1DQUFtQyxHQUFHLGFBQWEseUNBQXlDLG1DQUFtQyxHQUFHLDBEQUEwRCxvQkFBb0IseUNBQXlDLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLFlBQVksbUJBQW1CLHVCQUF1QixnQkFBZ0IseUNBQXlDLEdBQUcsb0JBQW9CLHNDQUFzQyxHQUFHLFVBQVUsdUNBQXVDLEdBQUcsV0FBVyx5Q0FBeUMsR0FBRyxzQkFBc0Isb0JBQW9CLFdBQVcsYUFBYSxjQUFjLFlBQVksa0JBQWtCLDRCQUE0QixrQkFBa0IsZUFBZSx5QkFBeUIsbUNBQW1DLDBDQUEwQyxHQUFHLFlBQVksaUJBQWlCLHFCQUFxQixrQkFBa0IsNEJBQTRCLDBCQUEwQixrQkFBa0IsMkJBQTJCLHdCQUF3QixrQ0FBa0MsR0FBRyw2QkFBNkIsZUFBZSx3QkFBd0IsR0FBRywwQkFBMEIsc0JBQXNCLHlCQUF5QixxQkFBcUIsMEJBQTBCLHFCQUFxQixHQUFHLHdCQUF3QixzQ0FBc0MsdUJBQXVCLHVCQUF1QixpQkFBaUIsOEJBQThCLHNCQUFzQix5QkFBeUIscUJBQXFCLHdCQUF3QixxQkFBcUIsR0FBRyw4QkFBOEIsb0JBQW9CLHVDQUF1QyxhQUFhLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsY0FBYyx3QkFBd0Isb0JBQW9CLHdCQUF3QixHQUFHLDRCQUE0QixvQkFBb0IseUJBQXlCLEdBQUcsV0FBVyxrQkFBa0Isa0JBQWtCLGNBQWMsNEJBQTRCLG9CQUFvQixHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGFBQWEsR0FBRyxVQUFVLGtCQUFrQixhQUFhLEdBQUcsWUFBWSw2QkFBNkIsS0FBSyxzQkFBc0IseUNBQXlDLG1CQUFtQixlQUFlLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix1QkFBdUIsR0FBRywrQkFBK0Isc0NBQXNDLHNCQUFzQix1QkFBdUIsaUJBQWlCLDhCQUE4QixzQkFBc0IseUJBQXlCLEdBQUcsaUNBQWlDLG9CQUFvQixzQ0FBc0MsR0FBRyxpQ0FBaUMseUJBQXlCLEdBQUcsZ0JBQWdCLDZDQUE2QyxHQUFHLG1CQUFtQjtBQUN4Mkw7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsWUFBWSxZQUFZOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxBOztBQUV1QztBQUNOOztBQUVsQjtBQUNmLDBCQUEwQix5REFBUztBQUNuQyw0QkFBNEIseURBQVM7QUFDckMscUJBQXFCLGtEQUFNO0FBQzNCLHVCQUF1QixrREFBTTs7QUFFN0IsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0IsSUFBSSxTQUFTO0FBQ3JEO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRCwrQkFBK0Isb0JBQW9CLEdBQUcsU0FBUztBQUMvRCw4QkFBOEIsb0JBQW9CO0FBQ2xEO0FBQ0EsSUFBSTtBQUNKLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CLElBQUksU0FBUztBQUNyRDtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQsK0JBQStCLG9CQUFvQixHQUFHLFNBQVM7QUFDL0QsOEJBQThCLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGdCQUFnQixvQkFBb0IsSUFBSSxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0JBQWdCLG9CQUFvQixJQUFJLFNBQVM7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7O0FBRStDO0FBTW5CO0FBS2E7QUFDWjs7QUFFZDtBQUNmOztBQUVBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLHVFQUFPO0FBQ3JCLGNBQWMsdUVBQU87QUFDckIsc0JBQXNCLCtFQUFlO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixvREFBSTtBQUN4Qix1QkFBdUIsb0RBQUk7QUFDM0Isc0JBQXNCLG9EQUFJO0FBQzFCLHNCQUFzQixvREFBSTtBQUMxQix1QkFBdUIsb0RBQUk7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvREFBSTtBQUN4Qix1QkFBdUIsb0RBQUk7QUFDM0Isc0JBQXNCLG9EQUFJO0FBQzFCLHNCQUFzQixvREFBSTtBQUMxQix1QkFBdUIsb0RBQUk7O0FBRTNCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDREQUFtQjs7QUFFdkI7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUix3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFZO0FBQ2xCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4REFBVzs7QUFFakI7QUFDQTtBQUNBLGNBQWMsb0JBQW9CLEdBQUcsaUJBQWlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFFBQVEsK0RBQVk7QUFDcEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sK0RBQVk7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN09BOztBQUVxQjtBQUNRO0FBQzJDO0FBQ0U7O0FBRTFFLDZDQUFJOztBQUVKO0FBQ0EsRUFBRSxrRUFBa0I7QUFDcEIsRUFBRSxtRUFBbUI7QUFDckIsRUFBRSw0REFBbUI7QUFDckI7O0FBRWU7QUFDZixVQUFVLHVEQUF1RCxFQUFFLG9EQUFJO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLDBEQUFpQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTs7QUFFK0M7QUFDb0I7O0FBRXBEO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHVFQUFPO0FBQ3JCLGNBQWMsdUVBQU87O0FBRXJCO0FBQ0EsdUJBQXVCLHdEQUFTO0FBQ2hDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLWRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmFuZG9tLXBsYWNlbWVudC1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy93YXJnYXRlLW5vcm1hbC13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvd2FyZ2F0ZS1ub3JtYWwtd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuKixcbmh0bWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MiwgMjUyLCAyNTIpO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5oZWFkZXIgPiBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICd3YXJnYXRlbm9ybWFsJztcbiAgICBmb250LXNpemU6IDgwcHg7XG59XG5cblxuLm1haW4ge1xuICBmbGV4OiA0IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMzBweDtcbiAgZ2FwOiAzMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciA+IGgyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbiNwbGF5ZXItYm9hcmQsXG4jY29tcHV0ZXItYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDksIDksIDkpO1xufVxuXG4uc3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOSwgOSwgOSk7XG59XG5cbiNjb21wdXRlci1ib2FyZCA+IC5zcXVhcmU6aG92ZXI6bm90KC5oaXQpOm5vdCgubWlzcykge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcbn1cblxuLmJvYXJkLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvb3RlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMzQsIDIzNCk7XG59XG5cbi5wLWJvYXQtbWFya2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCA2NCwgNjQpO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjQsIDY0KTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU3LCAyMDAsIDIxMSk7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5tb2RhbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5tb2RhbC1jb250YWluZXIudGFyZ2V0IHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLndpbm5lci1hbm5vdW5jZW1lbnQge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOnJnYig0MCwgNDAsIDQwKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBsYXktYWdhaW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wbGF5LWFnYWluLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO31cblxuLnNxdWFyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ueDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxcXDAwZDdcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogcmdiKDksIDksIDkpO1xufVxuXG5cbi5ib2F0LWxlbmd0aC1zcXVhcmVzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTVweDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBnYXA6IDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzcHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNweDtcbn1cblxuLmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuXG59XG5cbi5jb29yZGluYXRlLXpvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMzEsIDIzNyk7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uY29vcmRpbmF0ZS16b25lID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cbi5jb29yZGluYXRlLXpvbmU+YnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XG59XG5cbi5wbGFjZS1zaGlwcy1ub3RpY2Utc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uc2hpcC1uYW1lIHtcbnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJnYig0MCwgNDAsIDQwKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUI7MERBQ3lEO0VBQ3pELG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7RUFDVixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7TUFDTSw0QkFBNEI7TUFDNUIsZUFBZTtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQ0FBaUMsQ0FBQzs7QUFFcEM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0Usd0JBQXdCOztBQUUxQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3dhcmdhdGVub3JtYWwnO1xcbiAgc3JjOiB1cmwoJ2ZvbnRzL3dhcmdhdGUtbm9ybWFsLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnZm9udHMvd2FyZ2F0ZS1ub3JtYWwtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qLFxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MiwgMjUyLCAyNTIpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgICBmb250LWZhbWlseTogJ3dhcmdhdGVub3JtYWwnO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxufVxcblxcblxcbi5tYWluIHtcXG4gIGZsZXg6IDQgMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIgPiBoMiB7XFxuICAgICAgZm9udC1mYW1pbHk6ICd3YXJnYXRlbm9ybWFsJztcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsXFxuI2NvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOSwgOSwgOSk7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDksIDksIDkpO1xcbn1cXG5cXG4jY29tcHV0ZXItYm9hcmQgPiAuc3F1YXJlOmhvdmVyOm5vdCguaGl0KTpub3QoLm1pc3MpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG59XFxuXFxuLmJvYXJkLW5hbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIzNCwgMjM0KTtcXG59XFxuXFxuLnAtYm9hdC1tYXJrZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCA2NCwgNjQpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDY0LCA2NCk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTcsIDIwMCwgMjExKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lci50YXJnZXQge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi53aW5uZXItYW5ub3VuY2VtZW50IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6cmdiKDQwLCA0MCwgNDApO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnBsYXktYWdhaW4tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ucGxheS1hZ2Fpbi1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO31cXG5cXG4uc3F1YXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi54OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBkN1xcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmdiKDksIDksIDkpO1xcbn1cXG5cXG5cXG4uYm9hdC1sZW5ndGgtc3F1YXJlcyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTVweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG5cXG59XFxuXFxuLmNvb3JkaW5hdGUtem9uZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMzEsIDIzNyk7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmNvb3JkaW5hdGUtem9uZSA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG4uY29vcmRpbmF0ZS16b25lPmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxufVxcblxcbi5wbGFjZS1zaGlwcy1ub3RpY2Utc2VjdGlvbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnNoaXAtbmFtZSB7XFxudGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmdiKDQwLCA0MCwgNDApO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCB7IHJlc2V0R2FtZSB9IGZyb20gXCIuXCI7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29vcmRpbmF0ZVNlbGVjdGlvblpvbmUoKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVTZWxlY3Rpb25ab25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxhY2VTaGlwc05vdGljZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjZVNoaXBzTm90aWNlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicGxhY2Utc2hpcHMtbm90aWNlLXNlY3Rpb25cIik7XG4gIGNvbnN0IHBsYWNlU2hpcHNOb3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHBsYWNlU2hpcHNOb3RpY2UudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgXCI7XG4gIHNoaXBOYW1lLnRleHRDb250ZW50ID0gXCJjYXJyaWVyXCI7XG4gIHNoaXBOYW1lLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW5hbWVcIik7XG4gIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuICBheGlzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVcIik7XG4gIGNvb3JkaW5hdGVTZWxlY3Rpb25ab25lLmFwcGVuZENoaWxkKHBsYWNlU2hpcHNOb3RpY2VTZWN0aW9uKTtcbiAgcGxhY2VTaGlwc05vdGljZVNlY3Rpb24uYXBwZW5kQ2hpbGQocGxhY2VTaGlwc05vdGljZSk7XG4gIHBsYWNlU2hpcHNOb3RpY2VTZWN0aW9uLmFwcGVuZENoaWxkKHNoaXBOYW1lKTtcbiAgY29vcmRpbmF0ZVNlbGVjdGlvblpvbmUuYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG4gIGNvb3JkaW5hdGVTZWxlY3Rpb25ab25lLmNsYXNzTGlzdC5hZGQoXCJjb29yZGluYXRlLXpvbmVcIik7XG4gIHJldHVybiBjb29yZGluYXRlU2VsZWN0aW9uWm9uZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50TWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQbGF5ZXJCb2FyZENvbnRhaW5lcigpIHtcbiAgY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtY29udGFpbmVyXCIpO1xuICByZXR1cm4gcGxheWVyQm9hcmRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbXB1dGVyQm9hcmRDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wdXRlckJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gIHJldHVybiBjb21wdXRlckJvYXJkQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRCb2FyZE5hbWUobmFtZSkge1xuICBjb25zdCBib2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGJvYXJkTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGJvYXJkTmFtZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtbmFtZVwiKTtcbiAgcmV0dXJuIGJvYXJkTmFtZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UGxheWVyQm9hcmQoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItYm9hcmRcIik7XG4gIHJldHVybiBwbGF5ZXJCb2FyZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UGxheWVyR3JpZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBjb21wb25lbnRQbGF5ZXJCb2FyZCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZC1wXCIsIGAke2l9YCk7XG4gICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcInAtb2NjdXBpZWRcIiwgXCJmYWxzZVwiKTtcbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICB9XG4gIHJldHVybiBwbGF5ZXJCb2FyZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29tcHV0ZXJCb2FyZCgpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVyQm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21wdXRlci1ib2FyZFwiKTtcbiAgcmV0dXJuIGNvbXB1dGVyQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbXB1dGVyR3JpZCgpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGNvbXBvbmVudENvbXB1dGVyQm9hcmQoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtaWQtY1wiLCBgJHtpfWApO1xuICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJjLW9jY3VwaWVkXCIsIFwiZmFsc2VcIik7XG4gICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICB9XG4gIHJldHVybiBjb21wdXRlckJvYXJkO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiZm9vdGVyXCI7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFBsYXlBZ2FpbkJ1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwbGF5LWFnYWluLWJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XG4gIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudE1vZGFsKCkge1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250YWluZXJcIik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcIndpbm5lci1hbm5vdW5jZW1lbnRcIik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHRleHQpO1xuICBjb25zdCBidXR0b24gPSBjb21wb25lbnRQbGF5QWdhaW5CdXR0b24oKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgcmV0dXJuIG1vZGFsQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY29tcG9uZW50Q29udGFpbmVyKCk7XG4gIGNvbnN0IGhlYWRlciA9IGNvbXBvbmVudEhlYWRlcigpO1xuICBjb25zdCB0aXRsZSA9IGNvbXBvbmVudFRpdGxlKCk7XG4gIGNvbnN0IGNvb3JkaW5hdGVTZWxlY3Rpb25ab25lID0gY29tcG9uZW50Q29vcmRpbmF0ZVNlbGVjdGlvblpvbmUoKTtcbiAgY29uc3QgbWFpbiA9IGNvbXBvbmVudE1haW4oKTtcblxuICBjb25zdCBmb290ZXIgPSBjb21wb25lbnRGb290ZXIoKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29vcmRpbmF0ZVNlbGVjdGlvblpvbmUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkR2FtZUNvbXBvbmVudHMoXG4gIGhhbmRsZUNsaWNrYWJsZVNxdWFyZSxcbiAgcGxheWVyR2FtZWJvYXJkLFxuICBjb21wdXRlckdhbWVib2FyZFxuKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gY29tcG9uZW50UGxheWVyQm9hcmRDb250YWluZXIoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZENvbnRhaW5lciA9IGNvbXBvbmVudENvbXB1dGVyQm9hcmRDb250YWluZXIoKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBjb21wb25lbnRQbGF5ZXJHcmlkKCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBjb21wb25lbnRDb21wdXRlckdyaWQoKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHBsYXllckJvYXJkQ29udGFpbmVyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkQ29udGFpbmVyKTtcbiAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50Qm9hcmROYW1lKFwiWW91ciBTZWFzXCIpKTtcbiAgY29tcHV0ZXJCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wb25lbnRCb2FyZE5hbWUoXCJFbmVteSBTZWFzXCIpKTtcbiAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuICBjb21wdXRlckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbXBvbmVudE1vZGFsKHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQpKTtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyLWJvYXJkXCIpO1xuICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2thYmxlU3F1YXJlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyR2FtZUNvbXBvbmVudHMoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cbiAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUluc3RydWN0aW9ucyhib2F0TmFtZURPTSkge1xuICBjb25zdCBib2F0TmFtZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtbmFtZVwiKTtcblxuICBsZXQgbmFtZSA9IGJvYXROYW1lRE9NO1xuICBpZiAobmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIpIHtcbiAgICBuYW1lID0gXCJwYXRyb2wgYm9hdFwiO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBjb29yZGluYXRlWm9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29vcmRpbmF0ZS16b25lXCIpO1xuICAgIGNvb3JkaW5hdGVab25lLnJlbW92ZSgpO1xuICB9XG4gIGJvYXROYW1lVGV4dC50ZXh0Q29udGVudCA9IG5hbWU7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKFwicFwiKTtcbiAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoXCJjXCIpO1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKFwiRnJpZW5kbHkgU2Vhc1wiLCBjb21wdXRlckdhbWVib2FyZCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gbmV3IFBsYXllcihcIkVuZW15IFNlYXNcIiwgcGxheWVyR2FtZWJvYXJkKTtcblxuICByZXR1cm4geyBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLCBwbGF5ZXIsIGNvbXB1dGVyIH07XG59XG4iLCIvLyBDZWxsIGxvb2t1cFxuZXhwb3J0IGNvbnN0IHNxdWFyZUlkcyA9IFtcbiAgW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiXSxcbiAgW1wiMTBcIiwgXCIxMVwiLCBcIjEyXCIsIFwiMTNcIiwgXCIxNFwiLCBcIjE1XCIsIFwiMTZcIiwgXCIxN1wiLCBcIjE4XCIsIFwiMTlcIl0sXG4gIFtcIjIwXCIsIFwiMjFcIiwgXCIyMlwiLCBcIjIzXCIsIFwiMjRcIiwgXCIyNVwiLCBcIjI2XCIsIFwiMjdcIiwgXCIyOFwiLCBcIjI5XCJdLFxuICBbXCIzMFwiLCBcIjMxXCIsIFwiMzJcIiwgXCIzM1wiLCBcIjM0XCIsIFwiMzVcIiwgXCIzNlwiLCBcIjM3XCIsIFwiMzhcIiwgXCIzOVwiXSxcbiAgW1wiNDBcIiwgXCI0MVwiLCBcIjQyXCIsIFwiNDNcIiwgXCI0NFwiLCBcIjQ1XCIsIFwiNDZcIiwgXCI0N1wiLCBcIjQ4XCIsIFwiNDlcIl0sXG4gIFtcIjUwXCIsIFwiNTFcIiwgXCI1MlwiLCBcIjUzXCIsIFwiNTRcIiwgXCI1NVwiLCBcIjU2XCIsIFwiNTdcIiwgXCI1OFwiLCBcIjU5XCJdLFxuICBbXCI2MFwiLCBcIjYxXCIsIFwiNjJcIiwgXCI2M1wiLCBcIjY0XCIsIFwiNjVcIiwgXCI2NlwiLCBcIjY3XCIsIFwiNjhcIiwgXCI2OVwiXSxcbiAgW1wiNzBcIiwgXCI3MVwiLCBcIjcyXCIsIFwiNzNcIiwgXCI3NFwiLCBcIjc1XCIsIFwiNzZcIiwgXCI3N1wiLCBcIjc4XCIsIFwiNzlcIl0sXG4gIFtcIjgwXCIsIFwiODFcIiwgXCI4MlwiLCBcIjgzXCIsIFwiODRcIiwgXCI4NVwiLCBcIjg2XCIsIFwiODdcIiwgXCI4OFwiLCBcIjg5XCJdLFxuICBbXCI5MFwiLCBcIjkxXCIsIFwiOTJcIiwgXCI5M1wiLCBcIjk0XCIsIFwiOTVcIiwgXCI5NlwiLCBcIjk3XCIsIFwiOThcIiwgXCI5OVwiXSxcbl07XG5cbi8vIFBsYWNlIHNoaXBzIG9uIERPTVxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcERvbShcbiAgY29vcmQsXG4gIGRpcmVjdGlvbixcbiAgbGVuZ3RoLFxuICBnYW1lYm9hcmRJZGVudGlmaWVyLFxuICBzaGlwTmFtZVxuKSB7XG4gIGxldCBzcXVhcmVJZDtcbiAgbGV0IGVsZW1lbnQ7XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3F1YXJlSWQgPSBzcXVhcmVJZHNbY29vcmRbMF1dW2Nvb3JkWzFdICsgaV07XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWlkLSR7Z2FtZWJvYXJkSWRlbnRpZmllcn09JyR7c3F1YXJlSWR9J11gXG4gICAgICApO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2dhbWVib2FyZElkZW50aWZpZXJ9LWJvYXQtbWFya2VyYCk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Z2FtZWJvYXJkSWRlbnRpZmllcn0tJHtzaGlwTmFtZX1gKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke2dhbWVib2FyZElkZW50aWZpZXJ9LW9jY3VwaWVkYCwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIHNxdWFyZUlkID0gc3F1YXJlSWRzW2Nvb3JkWzBdICsgal1bY29vcmRbMV1dO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1pZC0ke2dhbWVib2FyZElkZW50aWZpZXJ9PScke3NxdWFyZUlkfSddYFxuICAgICAgKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtnYW1lYm9hcmRJZGVudGlmaWVyfS1ib2F0LW1hcmtlcmApO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2dhbWVib2FyZElkZW50aWZpZXJ9LSR7c2hpcE5hbWV9YCk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgJHtnYW1lYm9hcmRJZGVudGlmaWVyfS1vY2N1cGllZGAsIFwidHJ1ZVwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGljYXRlSGl0KHNxdWFyZUlkLCBnYW1lYm9hcmRJZGVudGlmaWVyKSB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLWlkLSR7Z2FtZWJvYXJkSWRlbnRpZmllcn09JyR7c3F1YXJlSWR9J11gXG4gICk7XG4gIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kaWNhdGVNaXNzKHNxdWFyZUlkLCBnYW1lYm9hcmRJZGVudGlmaWVyKSB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLWlkLSR7Z2FtZWJvYXJkSWRlbnRpZmllcn09JyR7c3F1YXJlSWR9J11gXG4gICk7XG4gIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbn1cblxuZnVuY3Rpb24gaW5kaWNhdGVXaW5uZXIoZ2FtZWJvYXJkSWRlbnRpZmllcikge1xuICBjb25zdCB3aW5uZXIgPSBnYW1lYm9hcmRJZGVudGlmaWVyID09PSBcInBcIiA/IFwiRW5lbXlcIiA6IFwiWW91XCI7XG4gIGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1hbm5vdW5jZW1lbnRcIik7XG4gIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IHdvbiFgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1vZGFsKGdhbWVib2FyZElkZW50aWZpZXIpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInRhcmdldFwiKTtcbiAgaW5kaWNhdGVXaW5uZXIoZ2FtZWJvYXJkSWRlbnRpZmllcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIaXRJbmRpY2F0b3IoKSB7XG4gIGNvbnN0IGhpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpdFwiKTtcbiAgQXJyYXkuZnJvbShoaXRzKS5mb3JFYWNoKChoaXQpID0+IGhpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU1pc3NJbmRpY2F0b3IoKSB7XG4gIGNvbnN0IG1pc3NlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWlzc1wiKTtcbiAgQXJyYXkuZnJvbShtaXNzZXMpLmZvckVhY2goKG1pc3MpID0+IG1pc3MuY2xhc3NMaXN0LnJlbW92ZShcIm1pc3NcIikpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IHsgZGlzcGxheUluc3RydWN0aW9ucyB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHtcbiAgcGxhY2VTaGlwRG9tLFxuICBpbmRpY2F0ZUhpdCxcbiAgaW5kaWNhdGVNaXNzLFxuICBkaXNwbGF5TW9kYWwsXG59IGZyb20gXCIuL2dhbWVib2FyZC1kb20uanNcIjtcbmltcG9ydCB7XG4gIHNlbGVjdFgsXG4gIHNlbGVjdFksXG4gIHNlbGVjdERpcmVjdGlvbixcbn0gZnJvbSBcIi4vcmFuZG9tLXBsYWNlbWVudC1nZW5lcmF0b3IuanNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKGdhbWVib2FyZElkZW50aWZpZXIpIHtcbiAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCk7XG5cbiAgLy8gQ3JlYXRlIGdhbWVib2FyZCAyRCBhcnJheVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCkuZmlsbChudWxsKTtcbiAgfVxuXG4gIC8vIFNoaXAgbG9va3VwIHRvIHJldHJpZXZlIHZhcmlhYmxlIGZyb20gc3RyaW5nIG5hbWVcbiAgY29uc3Qgc2hpcExvb2t1cCA9IHt9O1xuXG4gIGZ1bmN0aW9uIGlzUGxhY2VtZW50UG9zc2libGUoeCwgeSwgZGlyZWN0aW9uLCBsZW5ndGgpIHtcbiAgICAvLyBJZiB0aGUgYm9hdCBkb2VzIG5vdCBmaXQgb24gdGhlIGJvYXJkLCByZXR1cm4gZmFsc2VcbiAgICBpZiAoXG4gICAgICAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIiAmJiB5ICsgbGVuZ3RoIC0gMSA+PSAxMCkgfHxcbiAgICAgIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIiAmJiB4ICsgbGVuZ3RoIC0gMSA+PSAxMClcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiBob3Jpem9udGFsIGJvYXQgZml0cyBvbiB0aGUgYm9hcmQsIHJldHVybiBmYWxzZSBpZiBvbmUgb2YgdGhlIHNxdWFyZXMgaXMgYWxyZWFkeSB0YWtlblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmIHkgKyBsZW5ndGggLSAxIDwgMTApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkW3hdW3kgKyBpXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHZlcnRpY2FsIGJvYXQgZml0cyBvbiB0aGUgYm9hcmQsIHJldHVybiBmYWxzZSBpZiBvbmUgb2YgdGhlIHNxdWFyZXMgaXMgYWxyZWFkeSB0YWtlblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIiAmJiB4ICsgbGVuZ3RoIC0gMSA8IDEwKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChib2FyZFt4ICsgal1beV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBSYW5kb21seSBwbGFjZSBnaXZlbiBzaGlwIGluIHRoZSAyRCBnYW1lYm9hcmQgYXJyYXlcbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXApIHtcbiAgICBjb25zdCB4ID0gc2VsZWN0WCgpO1xuICAgIGNvbnN0IHkgPSBzZWxlY3RZKCk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gc2VsZWN0RGlyZWN0aW9uKCk7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChpc1BsYWNlbWVudFBvc3NpYmxlKHgsIHksIGRpcmVjdGlvbiwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW3hdW3kgKyBpXSA9IHNoaXAuc2hpcE5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGJvYXJkW3ggKyBqXVt5XSA9IHNoaXAuc2hpcE5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEFkZCBzaGlwIHRvIHNoaXBMb29rdXBcbiAgICAgIHNoaXBMb29rdXBbc2hpcC5zaGlwTmFtZV0gPSBzaGlwO1xuICAgICAgcGxhY2VTaGlwRG9tKFxuICAgICAgICBbeCwgeV0sXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBnYW1lYm9hcmRJZGVudGlmaWVyLFxuICAgICAgICBzaGlwLnNoaXBOYW1lXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGFjZVNoaXAoc2hpcCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUGxhY2Ugc2hpcHMgcmFuZG9tbHkgb24gYSBnaXZlbiBnYW1lYm9hcmRcbiAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KHNlbGVjdGVkR2FtZWJvYXJkKSB7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgXCJjYXJyaWVyXCIpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQsIFwiYmF0dGxlc2hpcFwiKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMsIFwiZGVzdHJveWVyXCIpO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgXCJzdWJtYXJpbmVcIik7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IFNoaXAoMiwgXCJwYXRyb2xCb2F0XCIpO1xuXG4gICAgc2VsZWN0ZWRHYW1lYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIpO1xuICAgIHNlbGVjdGVkR2FtZWJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwKTtcbiAgICBzZWxlY3RlZEdhbWVib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyKTtcbiAgICBzZWxlY3RlZEdhbWVib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lKTtcbiAgICBzZWxlY3RlZEdhbWVib2FyZC5wbGFjZVNoaXAocGF0cm9sQm9hdCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2F0cygpIHtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCBcImNhcnJpZXJcIik7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgXCJiYXR0bGVzaGlwXCIpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMywgXCJkZXN0cm95ZXJcIik7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCBcInN1Ym1hcmluZVwiKTtcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyLCBcInBhdHJvbEJvYXRcIik7XG5cbiAgICByZXR1cm4geyBjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdCB9O1xuICB9XG5cbiAgLy8gUm90YXRlIG1hbnVhbGx5IHBsYWNlZCBzaGlwcyBvbiBjbGljayBvZiByb3RhdGUgYnV0dG9uXG4gIGxldCBkaXJlY3Rpb24gPSBcImhvcml6b250YWxcIjtcbiAgZnVuY3Rpb24gcm90YXRlU2hpcCgpIHtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gIH1cblxuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbiAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKTtcblxuICAvLyBQbGFjZSBwbGF5ZXIgc2hpcHMgb24gY2xpY2tcbiAgbGV0IGsgPSAwO1xuICBmdW5jdGlvbiBwbGFjZVNoaXBzTWFudWFsbHkoZSkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItYm9hcmRcIik7XG4gICAgY29uc3QgcGxheWVyQm9hdHMgPSBjcmVhdGVQbGF5ZXJCb2F0cygpO1xuICAgIGNvbnN0IGJvYXROYW1lID0gYCR7T2JqZWN0LmtleXMocGxheWVyQm9hdHMpW2tdfWA7XG4gICAgY29uc3QgYm9hdE5hbWVET00gPSBgJHtPYmplY3Qua2V5cyhwbGF5ZXJCb2F0cylbayArIDFdfWA7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkUDtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihzcXVhcmVJZCAvIDEwKTtcbiAgICBjb25zdCB5ID0gc3F1YXJlSWQgJSAxMDtcbiAgICBjb25zdCBsZW5ndGggPSBwbGF5ZXJCb2F0c1tib2F0TmFtZV0uZ2V0TGVuZ3RoKCk7XG5cbiAgICBkaXNwbGF5SW5zdHJ1Y3Rpb25zKGJvYXROYW1lRE9NKTtcblxuICAgIGlmIChpc1BsYWNlbWVudFBvc3NpYmxlKHgsIHksIGRpcmVjdGlvbiwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW3hdW3kgKyBpXSA9IGJvYXROYW1lO1xuICAgICAgICB9XG4gICAgICAgIGsgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGJvYXJkW3ggKyBqXVt5XSA9IGJvYXROYW1lO1xuICAgICAgICB9XG4gICAgICAgIGsgKz0gMTtcbiAgICAgIH1cbiAgICAgIC8vIEFkZCBzaGlwIHRvIHNoaXBMb29rdXBcbiAgICAgIHNoaXBMb29rdXBbYm9hdE5hbWVdID0gcGxheWVyQm9hdHNbYm9hdE5hbWVdO1xuICAgICAgcGxhY2VTaGlwRG9tKFt4LCB5XSwgZGlyZWN0aW9uLCBsZW5ndGgsIGdhbWVib2FyZElkZW50aWZpZXIsIGJvYXROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xuICAgIH1cbiAgICBpZiAoayA9PT0gNSkge1xuICAgICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlU2hpcHNNYW51YWxseSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIGJvb2xlYW4gYmFzZWQgb24gd2hldGhlciBib2F0cyBoYXZlIGJlZW4gc3Vua1xuICBmdW5jdGlvbiBhcmVBbGxCb2F0c1N1bmsoKSB7XG4gICAgLy8gRmlsdGVyIG91dCBhbnkgYm9hdHMgdGhhdCBoYXZlIG5vdCBiZWVuIHN1bmtcbiAgICBjb25zdCBzaGlwc05vdFN1bmsgPSBPYmplY3Qua2V5cyhzaGlwTG9va3VwKS5maWx0ZXIoXG4gICAgICAoa2V5KSA9PiAhc2hpcExvb2t1cFtrZXldLmlzU3VuaygpXG4gICAgKTtcblxuICAgIGlmIChzaGlwc05vdFN1bmsubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHJlY2VpdmVBdHRhY2sgdGFrZXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzXG4gIC8vIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0cyBhIHNoaXAsIGFuZCB0aGVuIHNlbmRzXG4gIC8vIHRoZSAnaGl0JyBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwXG4gIC8vIG9yIHJlY29yZHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdFxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICBjb25zdCBzaG90cyA9IFtdO1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHksIHNxdWFyZUlkKSA9PiB7XG4gICAgaWYgKGJvYXJkW3hdW3ldKSB7XG4gICAgICBjb25zdCBzaGlwQXR0YWNrZWQgPSBib2FyZFt4XVt5XTtcbiAgICAgIC8vIGJvYXJkW3hdW3ldID0gXCJoaXRcIjtcbiAgICAgIGNvbnN0IGhpdFNoaXAgPSBzaGlwTG9va3VwW3NoaXBBdHRhY2tlZF07XG4gICAgICBoaXRTaGlwLmhpdCgpO1xuICAgICAgaW5kaWNhdGVIaXQoc3F1YXJlSWQsIGdhbWVib2FyZElkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoaGl0U2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBjb25zdCBzaGlwU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgYC4ke2dhbWVib2FyZElkZW50aWZpZXJ9LSR7aGl0U2hpcC5zaGlwTmFtZX1gXG4gICAgICAgICk7XG4gICAgICAgIHNoaXBTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwieFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmVBbGxCb2F0c1N1bmsoKSkge1xuICAgICAgICBkaXNwbGF5TW9kYWwoZ2FtZWJvYXJkSWRlbnRpZmllcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICBtaXNzZWRTaG90cy5wdXNoKFt4LCB5XSk7XG4gICAgICBpbmRpY2F0ZU1pc3Moc3F1YXJlSWQsIGdhbWVib2FyZElkZW50aWZpZXIpO1xuICAgIH1cbiAgICBzaG90cy5wdXNoKFt4LCB5XSk7XG4gIH07XG5cbiAgLy8gQ2hlY2sgaWYgc2hvdCBpcyBhdmFpbGFibGUgdG8gdGFrZSBvciBpZiBzaG90IGhhcyBhbHJlYWR5IGJlZW4gbWFkZVxuICBmdW5jdGlvbiBpc1Nob3RBdmFpbGFibGUoeCwgeSkge1xuICAgIGNvbnN0IGN1cnJlbnRTaG90ID0gW3gsIHldO1xuICAgIGNvbnN0IHByZXZpb3VzU2hvdHMgPSBzaG90cztcblxuICAgIGxldCBzaG90Rm91bmQ7XG4gICAgaWYgKHByZXZpb3VzU2hvdHMpIHtcbiAgICAgIHNob3RGb3VuZCA9IHByZXZpb3VzU2hvdHMuZmluZChcbiAgICAgICAgKFtwcmV2WCwgcHJldlldKSA9PiBwcmV2WCA9PT0gY3VycmVudFNob3RbMF0gJiYgcHJldlkgPT09IGN1cnJlbnRTaG90WzFdXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gIXNob3RGb3VuZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyR2FtZWJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICBhcmVBbGxCb2F0c1N1bmssXG4gICAgaXNTaG90QXZhaWxhYmxlLFxuICAgIGNsZWFyR2FtZWJvYXJkLFxuICAgIHBsYWNlU2hpcHNNYW51YWxseSxcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgeyBpbml0LCBjbGVhckdhbWVDb21wb25lbnRzLCBhZGRHYW1lQ29tcG9uZW50cyB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSGl0SW5kaWNhdG9yLCByZW1vdmVNaXNzSW5kaWNhdG9yIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLWRvbVwiO1xuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgcmVtb3ZlSGl0SW5kaWNhdG9yKCk7XG4gIHJlbW92ZU1pc3NJbmRpY2F0b3IoKTtcbiAgY2xlYXJHYW1lQ29tcG9uZW50cygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IHsgcGxheWVyLCBjb21wdXRlciwgcGxheWVyR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCB9ID0gR2FtZSgpO1xuICAvLyBlcTpcbiAgLy8gY29uc3QgZ2FtZSA9IEdhbWUoKTtcbiAgLy8gY29uc3QgcGxheWVyID0gZ2FtZS5wbGF5ZXI7XG4gIC8vIGNvbnN0IGNvbXB1dGVyID0gZ2FtZS5jb21wdXRlcjtcbiAgLy8gY29uc3QgcGxheWVyR2FtZWJvYXJkID0gZ2FtZS5wbGF5ZXJHYW1lYm9hcmQ7XG4gIC8vIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gZ2FtZS5jb21wdXRlckdhbWVib2FyZDtcblxuICBjb25zdCBoYW5kbGVDbGlja2FibGVTcXVhcmUgPSAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3F1YXJlXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3F1YXJlSWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkQztcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihzcXVhcmVJZCAvIDEwKTtcbiAgICBjb25zdCB5ID0gc3F1YXJlSWQgJSAxMDtcblxuICAgIGlmIChjb21wdXRlckdhbWVib2FyZC5pc1Nob3RBdmFpbGFibGUoeCwgeSkpIHtcbiAgICAgIHBsYXllci5tYWtlQXR0YWNrKHgsIHksIHNxdWFyZUlkKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb21wdXRlci5tYWtlUmFuZG9tQXR0YWNrKCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfTtcblxuICBhZGRHYW1lQ29tcG9uZW50cyhoYW5kbGVDbGlja2FibGVTcXVhcmUsIHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQpO1xuXG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItYm9hcmRcIik7XG4gIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwc01hbnVhbGx5KTtcbiAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KGNvbXB1dGVyR2FtZWJvYXJkKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYWdhaW4tYnV0dG9uXCIpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldEdhbWUoKTtcbiAgICBzdGFydEdhbWUoKTtcbiAgfSk7XG59XG5cbnN0YXJ0R2FtZSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IHsgc3F1YXJlSWRzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLWRvbS5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0WCwgc2VsZWN0WSB9IGZyb20gXCIuL3JhbmRvbS1wbGFjZW1lbnQtZ2VuZXJhdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVuZW15R2FtZWJvYXJkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVuZW15R2FtZWJvYXJkID0gZW5lbXlHYW1lYm9hcmQ7XG4gIH1cblxuICBtYWtlUmFuZG9tQXR0YWNrKCkge1xuICAgIGNvbnN0IHggPSBzZWxlY3RYKCk7XG4gICAgY29uc3QgeSA9IHNlbGVjdFkoKTtcblxuICAgIGlmICh0aGlzLmVuZW15R2FtZWJvYXJkLmlzU2hvdEF2YWlsYWJsZSh4LCB5KSkge1xuICAgICAgY29uc3Qgc3F1YXJlSWQgPSBzcXVhcmVJZHNbeF1beV07XG4gICAgICB0aGlzLm1ha2VBdHRhY2soeCwgeSwgc3F1YXJlSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ha2VSYW5kb21BdHRhY2soKTtcbiAgICB9XG4gIH1cblxuICBtYWtlQXR0YWNrKHgsIHksIHNxdWFyZUlkKSB7XG4gICAgdGhpcy5lbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHksIHNxdWFyZUlkKTtcbiAgfVxufVxuIiwiLy8gUmFuZG9tbHkgc2VsZWN0IFggY29vcmRpbmF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFgoKSB7XG4gIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIHJldHVybiB4O1xufVxuXG4vLyBSYW5kb21seSBzZWxlY3QgWSBjb29yZGluYXRlXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0WSgpIHtcbiAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgcmV0dXJuIHk7XG59XG5cbi8vIFJhbmRvbWx5IHNlbGVjdCB3aGV0aGVyIGJvYXQgd2lsbCBiZSBwbGFjZWQgaG9yaXpvbnRhbGx5IG9yIHZlcnRpY2FsbHlcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXJlY3Rpb24oKSB7XG4gIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICBjb25zdCBkaXJlY3Rpb24gPSByYW5kb21OdW0gPT09IDAgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoLCBuYW1lKSB7XG4gIGNvbnN0IHNoaXBOYW1lID0gbmFtZTtcbiAgbGV0IGhpdHMgPSAwO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzICs9IDE7XG4gICAgcmV0dXJuIGhpdHM7XG4gIH07XG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRzID09PSBsZW5ndGg7XG5cbiAgcmV0dXJuIHsgc2hpcE5hbWUsIGdldExlbmd0aCwgaGl0LCBpc1N1bmssIGdldEhpdHMgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==