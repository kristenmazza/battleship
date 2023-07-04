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

.draggable-zone {
  background-color:rgb(219, 234, 234);
  flex: 1 0 auto;
  width: 100%;
  height: 100px;
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
  border: 1px solid black;
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
  padding: 20px;
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
/* .c-boat-marker {

} */

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
  background-color: rgb(48, 48, 48);}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B;0DACyD;EACzD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,oDAAoD;AACtD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,aAAa;AACf;;AAEA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;EACE,mCAAmC;EACnC,cAAc;EACd,WAAW;EACX,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;EACb,aAAa;EACb,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;MACM,4BAA4B;MAC5B,eAAe;AACrB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,uCAAuC;EACvC,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;EACpC,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;AACA;;GAEG;;AAEH;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,UAAU;EACV,oBAAoB;EACpB,8BAA8B;EAC9B,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iCAAiC,CAAC","sourcesContent":["@font-face {\n  font-family: 'wargatenormal';\n  src: url('fonts/wargate-normal-webfont.woff2') format('woff2'),\n    url('fonts/wargate-normal-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n*,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, 'Arial Narrow Bold', sans-serif;\n}\n\n.container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color:rgb(252, 252, 252);\n}\n\nheader {\n  padding: 30px;\n}\n\nheader > h1 {\n    font-family: 'wargatenormal';\n    font-size: 80px;\n}\n\n.draggable-zone {\n  background-color:rgb(219, 234, 234);\n  flex: 1 0 auto;\n  width: 100%;\n  height: 100px;\n}\n\n.main {\n  flex: 4 0 auto;\n  display: flex;\n  padding: 30px;\n  gap: 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.board-container {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.board-container > h2 {\n      font-family: 'wargatenormal';\n      font-size: 30px;\n}\n\n#player-board,\n#computer-board {\n  display: grid;\n  grid-template-rows: repeat(10, 30px);\n  grid-template-columns: repeat(10, 30px);\n  border: 1px solid rgb(9, 9, 9);\n}\n\n.square {\n  background-color: rgb(252, 252, 252);\n  border: 1px solid black;\n}\n\n#computer-board > .square:hover:not(.hit):not(.miss) {\n  cursor: pointer;\n  background-color: rgb(230, 230, 230);\n}\n\n.board-name {\n  text-align: center;\n}\n\nfooter {\n  flex-shrink: 0;\n  text-align: center;\n  width: 100%;\n  padding: 20px;\n  background-color: rgb(219, 234, 234);\n}\n\n.p-boat-marker {\n  background-color: rgb(64, 64, 64);\n}\n\n.hit {\n  background-color: rgb(255, 64, 64);\n}\n\n.miss {\n  background-color: rgb(157, 200, 211);\n}\n/* .c-boat-marker {\n\n} */\n\n.modal-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  background-color: black;\n  display: flex;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 250ms ease;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n\n.modal {\n  margin: auto;\n  min-width: 20rem;\n  padding: 20px;\n  background-color: white;\n  border-radius: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-container.target {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.winner-announcement {\n  font-size: 1.8rem;\n  font-family: inherit;\n  font-weight: 500;\n  color:rgb(40, 40, 40);\n  margin-top: 20px;\n}\n\n.play-again-button {\n  background-color: rgb(40, 40, 40);\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  color: rgb(254, 254, 254);\n  font-size: 1.8rem;\n  font-family: inherit;\n  font-weight: 500;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\n.play-again-button:hover {\n  cursor: pointer;\n  background-color: rgb(48, 48, 48);}\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


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

function componentDraggableZone() {
  const draggableZone = document.createElement("div");
  draggableZone.classList.add("draggable-zone");
  return draggableZone;
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
  button.addEventListener("click", () => {
    (0,___WEBPACK_IMPORTED_MODULE_0__.resetGame)();
  });
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
  const draggableZone = componentDraggableZone();
  const main = componentMain();

  const footer = componentFooter();

  document.body.appendChild(container);
  container.appendChild(header);
  header.appendChild(title);
  container.appendChild(draggableZone);
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
function placeShipDom(coord, direction, length, gameboardIdentifier) {
  let squareId;
  let element;
  if (direction === "horizontal") {
    for (let i = 0; i < length; i += 1) {
      squareId = squareIds[coord[0]][coord[1] + i];
      element = document.querySelector(
        `[data-id-${gameboardIdentifier}='${squareId}']`
      );
      element.classList.add(`${gameboardIdentifier}-boat-marker`);
      element.setAttribute(`${gameboardIdentifier}-occupied`, "true");
    }
  } else if (direction === "vertical") {
    for (let j = 0; j < length; j += 1) {
      squareId = squareIds[coord[0] + j][coord[1]];
      element = document.querySelector(
        `[data-id-${gameboardIdentifier}='${squareId}']`
      );
      element.classList.add(`${gameboardIdentifier}-boat-marker`);
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
/* harmony import */ var _gameboard_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard-dom.js */ "./src/gameboard-dom.js");
/* harmony import */ var _random_placement_generator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random-placement-generator.js */ "./src/random-placement-generator.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
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

  // Place given ship in the 2D gameboard array
  function placeShip(ship) {
    const x = (0,_random_placement_generator_js__WEBPACK_IMPORTED_MODULE_1__.selectX)();
    const y = (0,_random_placement_generator_js__WEBPACK_IMPORTED_MODULE_1__.selectY)();
    const direction = (0,_random_placement_generator_js__WEBPACK_IMPORTED_MODULE_1__.selectDirection)();
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
      (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_0__.placeShipDom)([x, y], direction, length, gameboardIdentifier);
    } else {
      placeShip(ship);
    }
  }

  // Place ships randomly on a given gameboard
  function placeShipsRandomly(selectedGameboard) {
    const carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(5, "carrier");
    const battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(4, "battleship");
    const destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(3, "destroyer");
    const submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(3, "submarine");
    const patrolBoat = (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, "patrolBoat");

    selectedGameboard.placeShip(carrier);
    selectedGameboard.placeShip(battleship);
    selectedGameboard.placeShip(destroyer);
    selectedGameboard.placeShip(submarine);
    selectedGameboard.placeShip(patrolBoat);
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
      board[x][y] = "hit";
      const hitShip = shipLookup[shipAttacked];
      hitShip.hit();
      (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_0__.indicateHit)(squareId, gameboardIdentifier);
      console.log("sunk?");
      console.log(hitShip.isSunk());
      console.log(" all sunk?");
      console.log(areAllBoatsSunk());

      if (areAllBoatsSunk()) {
        (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayModal)(gameboardIdentifier);
      }
    } else {
      board[x][y] = "miss";
      missedShots.push([x, y]);
      (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_0__.indicateMiss)(squareId, gameboardIdentifier);
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
    shipLookup,
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
/* harmony export */   "default": () => (/* binding */ startGame),
/* harmony export */   resetGame: () => (/* binding */ resetGame)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _gameboard_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard-dom */ "./src/gameboard-dom.js");
/* eslint-disable import/extensions */






(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

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

    player.makeAttack(x, y, squareId);
    setTimeout(() => {
      computer.makeRandomAttack();
    }, 100);
    console.table(computerGameboard.board);
  };

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addGameComponents)(handleClickableSquare, playerGameboard, computerGameboard);

  playerGameboard.placeShipsRandomly(playerGameboard);
  computerGameboard.placeShipsRandomly(computerGameboard);
}

function resetGame() {
  (0,_gameboard_dom__WEBPACK_IMPORTED_MODULE_3__.removeHitIndicator)();
  (0,_gameboard_dom__WEBPACK_IMPORTED_MODULE_3__.removeMissIndicator)();
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.clearGameComponents)();
  startGame();
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
    const squareId = _gameboard_dom_js__WEBPACK_IMPORTED_MODULE_0__.squareIds[x][y];
    this.makeAttack(x, y, squareId);
  }

  makeAttack(x, y, squareId) {
    if (this.enemyGameboard.isShotAvailable(x, y)) {
      this.enemyGameboard.receiveAttack(x, y, squareId);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLWRvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmFuZG9tLXBsYWNlbWVudC1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy93YXJnYXRlLW5vcm1hbC13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvd2FyZ2F0ZS1ub3JtYWwtd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuKixcbmh0bWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MiwgMjUyLCAyNTIpO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5oZWFkZXIgPiBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICd3YXJnYXRlbm9ybWFsJztcbiAgICBmb250LXNpemU6IDgwcHg7XG59XG5cbi5kcmFnZ2FibGUtem9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxOSwgMjM0LCAyMzQpO1xuICBmbGV4OiAxIDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5tYWluIHtcbiAgZmxleDogNCAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGdhcDogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib2FyZC1jb250YWluZXIgPiBoMiB7XG4gICAgICBmb250LWZhbWlseTogJ3dhcmdhdGVub3JtYWwnO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jcGxheWVyLWJvYXJkLFxuI2NvbXB1dGVyLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5LCA5LCA5KTtcbn1cblxuLnNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNjb21wdXRlci1ib2FyZCA+IC5zcXVhcmU6aG92ZXI6bm90KC5oaXQpOm5vdCgubWlzcykge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcbn1cblxuLmJvYXJkLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvb3RlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMzQsIDIzNCk7XG59XG5cbi5wLWJvYXQtbWFya2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCA2NCwgNjQpO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjQsIDY0KTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU3LCAyMDAsIDIxMSk7XG59XG4vKiAuYy1ib2F0LW1hcmtlciB7XG5cbn0gKi9cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLm1vZGFsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lci50YXJnZXQge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4ud2lubmVyLWFubm91bmNlbWVudCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6cmdiKDQwLCA0MCwgNDApO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGxheS1hZ2Fpbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBsYXktYWdhaW4tYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7fVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCOzBEQUN5RDtFQUN6RCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7TUFDTSw0QkFBNEI7TUFDNUIsZUFBZTtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTs7R0FFRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQ0FBaUMsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XFxuICBzcmM6IHVybCgnZm9udHMvd2FyZ2F0ZS1ub3JtYWwtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCdmb250cy93YXJnYXRlLW5vcm1hbC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiosXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUyLCAyNTIsIDI1Mik7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG59XFxuXFxuLmRyYWdnYWJsZS16b25lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxOSwgMjM0LCAyMzQpO1xcbiAgZmxleDogMSAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGZsZXg6IDQgMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIgPiBoMiB7XFxuICAgICAgZm9udC1mYW1pbHk6ICd3YXJnYXRlbm9ybWFsJztcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsXFxuI2NvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOSwgOSwgOSk7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNjb21wdXRlci1ib2FyZCA+IC5zcXVhcmU6aG92ZXI6bm90KC5oaXQpOm5vdCgubWlzcykge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbn1cXG5cXG4uYm9hcmQtbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIzNCwgMjM0KTtcXG59XFxuXFxuLnAtYm9hdC1tYXJrZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCA2NCwgNjQpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDY0LCA2NCk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTcsIDIwMCwgMjExKTtcXG59XFxuLyogLmMtYm9hdC1tYXJrZXIge1xcblxcbn0gKi9cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyLnRhcmdldCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLndpbm5lci1hbm5vdW5jZW1lbnQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjpyZ2IoNDAsIDQwLCA0MCk7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ucGxheS1hZ2Fpbi1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wbGF5LWFnYWluLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVzZXRHYW1lIH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gY29tcG9uZW50Q29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50SGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUaXRsZSgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnREcmFnZ2FibGVab25lKCkge1xuICBjb25zdCBkcmFnZ2FibGVab25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJhZ2dhYmxlWm9uZS5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dhYmxlLXpvbmVcIik7XG4gIHJldHVybiBkcmFnZ2FibGVab25lO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFBsYXllckJvYXJkQ29udGFpbmVyKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gIHJldHVybiBwbGF5ZXJCb2FyZENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29tcHV0ZXJCb2FyZENvbnRhaW5lcigpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVyQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkLWNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGNvbXB1dGVyQm9hcmRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEJvYXJkTmFtZShuYW1lKSB7XG4gIGNvbnN0IGJvYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYm9hcmROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgYm9hcmROYW1lLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1uYW1lXCIpO1xuICByZXR1cm4gYm9hcmROYW1lO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQbGF5ZXJCb2FyZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci1ib2FyZFwiKTtcbiAgcmV0dXJuIHBsYXllckJvYXJkO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQbGF5ZXJHcmlkKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNvbXBvbmVudFBsYXllckJvYXJkKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkLXBcIiwgYCR7aX1gKTtcbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwicC1vY2N1cGllZFwiLCBcImZhbHNlXCIpO1xuICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gIH1cbiAgcmV0dXJuIHBsYXllckJvYXJkO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDb21wdXRlckJvYXJkKCkge1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcHV0ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbXB1dGVyLWJvYXJkXCIpO1xuICByZXR1cm4gY29tcHV0ZXJCb2FyZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29tcHV0ZXJHcmlkKCkge1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gY29tcG9uZW50Q29tcHV0ZXJCb2FyZCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZC1jXCIsIGAke2l9YCk7XG4gICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImMtb2NjdXBpZWRcIiwgXCJmYWxzZVwiKTtcbiAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gIH1cbiAgcmV0dXJuIGNvbXB1dGVyQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJmb290ZXJcIjtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UGxheUFnYWluQnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInBsYXktYWdhaW4tYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5cIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVzZXRHYW1lKCk7XG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXItYW5ub3VuY2VtZW50XCIpO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgY29uc3QgYnV0dG9uID0gY29tcG9uZW50UGxheUFnYWluQnV0dG9uKCk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIHJldHVybiBtb2RhbENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY29tcG9uZW50Q29udGFpbmVyKCk7XG4gIGNvbnN0IGhlYWRlciA9IGNvbXBvbmVudEhlYWRlcigpO1xuICBjb25zdCB0aXRsZSA9IGNvbXBvbmVudFRpdGxlKCk7XG4gIGNvbnN0IGRyYWdnYWJsZVpvbmUgPSBjb21wb25lbnREcmFnZ2FibGVab25lKCk7XG4gIGNvbnN0IG1haW4gPSBjb21wb25lbnRNYWluKCk7XG5cbiAgY29uc3QgZm9vdGVyID0gY29tcG9uZW50Rm9vdGVyKCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYWdnYWJsZVpvbmUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkR2FtZUNvbXBvbmVudHMoXG4gIGhhbmRsZUNsaWNrYWJsZVNxdWFyZSxcbiAgcGxheWVyR2FtZWJvYXJkLFxuICBjb21wdXRlckdhbWVib2FyZFxuKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gY29tcG9uZW50UGxheWVyQm9hcmRDb250YWluZXIoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZENvbnRhaW5lciA9IGNvbXBvbmVudENvbXB1dGVyQm9hcmRDb250YWluZXIoKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBjb21wb25lbnRQbGF5ZXJHcmlkKCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBjb21wb25lbnRDb21wdXRlckdyaWQoKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHBsYXllckJvYXJkQ29udGFpbmVyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkQ29udGFpbmVyKTtcbiAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50Qm9hcmROYW1lKFwiWW91ciBTZWFzXCIpKTtcbiAgY29tcHV0ZXJCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wb25lbnRCb2FyZE5hbWUoXCJFbmVteSBTZWFzXCIpKTtcbiAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuICBjb21wdXRlckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbXBvbmVudE1vZGFsKHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQpKTtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyLWJvYXJkXCIpO1xuICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2thYmxlU3F1YXJlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyR2FtZUNvbXBvbmVudHMoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cbiAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZChcInBcIik7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKFwiY1wiKTtcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihcIkZyaWVuZGx5IFNlYXNcIiwgY29tcHV0ZXJHYW1lYm9hcmQpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoXCJFbmVteSBTZWFzXCIsIHBsYXllckdhbWVib2FyZCk7XG5cbiAgcmV0dXJuIHsgcGxheWVyR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCwgcGxheWVyLCBjb21wdXRlciB9O1xufVxuIiwiLy8gQ2VsbCBsb29rdXBcbmV4cG9ydCBjb25zdCBzcXVhcmVJZHMgPSBbXG4gIFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl0sXG4gIFtcIjEwXCIsIFwiMTFcIiwgXCIxMlwiLCBcIjEzXCIsIFwiMTRcIiwgXCIxNVwiLCBcIjE2XCIsIFwiMTdcIiwgXCIxOFwiLCBcIjE5XCJdLFxuICBbXCIyMFwiLCBcIjIxXCIsIFwiMjJcIiwgXCIyM1wiLCBcIjI0XCIsIFwiMjVcIiwgXCIyNlwiLCBcIjI3XCIsIFwiMjhcIiwgXCIyOVwiXSxcbiAgW1wiMzBcIiwgXCIzMVwiLCBcIjMyXCIsIFwiMzNcIiwgXCIzNFwiLCBcIjM1XCIsIFwiMzZcIiwgXCIzN1wiLCBcIjM4XCIsIFwiMzlcIl0sXG4gIFtcIjQwXCIsIFwiNDFcIiwgXCI0MlwiLCBcIjQzXCIsIFwiNDRcIiwgXCI0NVwiLCBcIjQ2XCIsIFwiNDdcIiwgXCI0OFwiLCBcIjQ5XCJdLFxuICBbXCI1MFwiLCBcIjUxXCIsIFwiNTJcIiwgXCI1M1wiLCBcIjU0XCIsIFwiNTVcIiwgXCI1NlwiLCBcIjU3XCIsIFwiNThcIiwgXCI1OVwiXSxcbiAgW1wiNjBcIiwgXCI2MVwiLCBcIjYyXCIsIFwiNjNcIiwgXCI2NFwiLCBcIjY1XCIsIFwiNjZcIiwgXCI2N1wiLCBcIjY4XCIsIFwiNjlcIl0sXG4gIFtcIjcwXCIsIFwiNzFcIiwgXCI3MlwiLCBcIjczXCIsIFwiNzRcIiwgXCI3NVwiLCBcIjc2XCIsIFwiNzdcIiwgXCI3OFwiLCBcIjc5XCJdLFxuICBbXCI4MFwiLCBcIjgxXCIsIFwiODJcIiwgXCI4M1wiLCBcIjg0XCIsIFwiODVcIiwgXCI4NlwiLCBcIjg3XCIsIFwiODhcIiwgXCI4OVwiXSxcbiAgW1wiOTBcIiwgXCI5MVwiLCBcIjkyXCIsIFwiOTNcIiwgXCI5NFwiLCBcIjk1XCIsIFwiOTZcIiwgXCI5N1wiLCBcIjk4XCIsIFwiOTlcIl0sXG5dO1xuXG4vLyBQbGFjZSBzaGlwcyBvbiBET01cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXBEb20oY29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoLCBnYW1lYm9hcmRJZGVudGlmaWVyKSB7XG4gIGxldCBzcXVhcmVJZDtcbiAgbGV0IGVsZW1lbnQ7XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3F1YXJlSWQgPSBzcXVhcmVJZHNbY29vcmRbMF1dW2Nvb3JkWzFdICsgaV07XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWlkLSR7Z2FtZWJvYXJkSWRlbnRpZmllcn09JyR7c3F1YXJlSWR9J11gXG4gICAgICApO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2dhbWVib2FyZElkZW50aWZpZXJ9LWJvYXQtbWFya2VyYCk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgJHtnYW1lYm9hcmRJZGVudGlmaWVyfS1vY2N1cGllZGAsIFwidHJ1ZVwiKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBzcXVhcmVJZCA9IHNxdWFyZUlkc1tjb29yZFswXSArIGpdW2Nvb3JkWzFdXTtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtaWQtJHtnYW1lYm9hcmRJZGVudGlmaWVyfT0nJHtzcXVhcmVJZH0nXWBcbiAgICAgICk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Z2FtZWJvYXJkSWRlbnRpZmllcn0tYm9hdC1tYXJrZXJgKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke2dhbWVib2FyZElkZW50aWZpZXJ9LW9jY3VwaWVkYCwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kaWNhdGVIaXQoc3F1YXJlSWQsIGdhbWVib2FyZElkZW50aWZpZXIpIHtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgW2RhdGEtaWQtJHtnYW1lYm9hcmRJZGVudGlmaWVyfT0nJHtzcXVhcmVJZH0nXWBcbiAgKTtcbiAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRpY2F0ZU1pc3Moc3F1YXJlSWQsIGdhbWVib2FyZElkZW50aWZpZXIpIHtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgW2RhdGEtaWQtJHtnYW1lYm9hcmRJZGVudGlmaWVyfT0nJHtzcXVhcmVJZH0nXWBcbiAgKTtcbiAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xufVxuXG5mdW5jdGlvbiBpbmRpY2F0ZVdpbm5lcihnYW1lYm9hcmRJZGVudGlmaWVyKSB7XG4gIGNvbnN0IHdpbm5lciA9IGdhbWVib2FyZElkZW50aWZpZXIgPT09IFwicFwiID8gXCJFbmVteVwiIDogXCJZb3VcIjtcbiAgY29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLWFubm91bmNlbWVudFwiKTtcbiAgd2lubmVyVGV4dC50ZXh0Q29udGVudCA9IGAke3dpbm5lcn0gd29uIWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TW9kYWwoZ2FtZWJvYXJkSWRlbnRpZmllcikge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGFpbmVyXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwidGFyZ2V0XCIpO1xuICBpbmRpY2F0ZVdpbm5lcihnYW1lYm9hcmRJZGVudGlmaWVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhpdEluZGljYXRvcigpIHtcbiAgY29uc3QgaGl0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGl0XCIpO1xuICBBcnJheS5mcm9tKGhpdHMpLmZvckVhY2goKGhpdCkgPT4gaGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTWlzc0luZGljYXRvcigpIHtcbiAgY29uc3QgbWlzc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5taXNzXCIpO1xuICBBcnJheS5mcm9tKG1pc3NlcykuZm9yRWFjaCgobWlzcykgPT4gbWlzcy5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQge1xuICBwbGFjZVNoaXBEb20sXG4gIGluZGljYXRlSGl0LFxuICBpbmRpY2F0ZU1pc3MsXG4gIGRpc3BsYXlNb2RhbCxcbn0gZnJvbSBcIi4vZ2FtZWJvYXJkLWRvbS5qc1wiO1xuaW1wb3J0IHtcbiAgc2VsZWN0WCxcbiAgc2VsZWN0WSxcbiAgc2VsZWN0RGlyZWN0aW9uLFxufSBmcm9tIFwiLi9yYW5kb20tcGxhY2VtZW50LWdlbmVyYXRvci5qc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoZ2FtZWJvYXJkSWRlbnRpZmllcikge1xuICBjb25zdCBib2FyZCA9IG5ldyBBcnJheSgxMCkuZmlsbChudWxsKTtcblxuICAvLyBDcmVhdGUgZ2FtZWJvYXJkIDJEIGFycmF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICB9XG5cbiAgLy8gU2hpcCBsb29rdXAgdG8gcmV0cmlldmUgdmFyaWFibGUgZnJvbSBzdHJpbmcgbmFtZVxuICBjb25zdCBzaGlwTG9va3VwID0ge307XG5cbiAgZnVuY3Rpb24gaXNQbGFjZW1lbnRQb3NzaWJsZSh4LCB5LCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgIC8vIElmIHRoZSBib2F0IGRvZXMgbm90IGZpdCBvbiB0aGUgYm9hcmQsIHJldHVybiBmYWxzZVxuICAgIGlmIChcbiAgICAgIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmIHkgKyBsZW5ndGggLSAxID49IDEwKSB8fFxuICAgICAgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHggKyBsZW5ndGggLSAxID49IDEwKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIGhvcml6b250YWwgYm9hdCBmaXRzIG9uIHRoZSBib2FyZCwgcmV0dXJuIGZhbHNlIGlmIG9uZSBvZiB0aGUgc3F1YXJlcyBpcyBhbHJlYWR5IHRha2VuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiYgeSArIGxlbmd0aCAtIDEgPCAxMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYm9hcmRbeF1beSArIGldKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdmVydGljYWwgYm9hdCBmaXRzIG9uIHRoZSBib2FyZCwgcmV0dXJuIGZhbHNlIGlmIG9uZSBvZiB0aGUgc3F1YXJlcyBpcyBhbHJlYWR5IHRha2VuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHggKyBsZW5ndGggLSAxIDwgMTApIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkW3ggKyBqXVt5XSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFBsYWNlIGdpdmVuIHNoaXAgaW4gdGhlIDJEIGdhbWVib2FyZCBhcnJheVxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCkge1xuICAgIGNvbnN0IHggPSBzZWxlY3RYKCk7XG4gICAgY29uc3QgeSA9IHNlbGVjdFkoKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBzZWxlY3REaXJlY3Rpb24oKTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGlzUGxhY2VtZW50UG9zc2libGUoeCwgeSwgZGlyZWN0aW9uLCBsZW5ndGgpKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbeF1beSArIGldID0gc2hpcC5zaGlwTmFtZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbeCArIGpdW3ldID0gc2hpcC5zaGlwTmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gQWRkIHNoaXAgdG8gc2hpcExvb2t1cFxuICAgICAgc2hpcExvb2t1cFtzaGlwLnNoaXBOYW1lXSA9IHNoaXA7XG4gICAgICBwbGFjZVNoaXBEb20oW3gsIHldLCBkaXJlY3Rpb24sIGxlbmd0aCwgZ2FtZWJvYXJkSWRlbnRpZmllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWNlU2hpcChzaGlwKTtcbiAgICB9XG4gIH1cblxuICAvLyBQbGFjZSBzaGlwcyByYW5kb21seSBvbiBhIGdpdmVuIGdhbWVib2FyZFxuICBmdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkoc2VsZWN0ZWRHYW1lYm9hcmQpIHtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCBcImNhcnJpZXJcIik7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgXCJiYXR0bGVzaGlwXCIpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMywgXCJkZXN0cm95ZXJcIik7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCBcInN1Ym1hcmluZVwiKTtcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyLCBcInBhdHJvbEJvYXRcIik7XG5cbiAgICBzZWxlY3RlZEdhbWVib2FyZC5wbGFjZVNoaXAoY2Fycmllcik7XG4gICAgc2VsZWN0ZWRHYW1lYm9hcmQucGxhY2VTaGlwKGJhdHRsZXNoaXApO1xuICAgIHNlbGVjdGVkR2FtZWJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIpO1xuICAgIHNlbGVjdGVkR2FtZWJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUpO1xuICAgIHNlbGVjdGVkR2FtZWJvYXJkLnBsYWNlU2hpcChwYXRyb2xCb2F0KTtcbiAgfVxuXG4gIC8vIFJldHVybiBib29sZWFuIGJhc2VkIG9uIHdoZXRoZXIgYm9hdHMgaGF2ZSBiZWVuIHN1bmtcbiAgZnVuY3Rpb24gYXJlQWxsQm9hdHNTdW5rKCkge1xuICAgIC8vIEZpbHRlciBvdXQgYW55IGJvYXRzIHRoYXQgaGF2ZSBub3QgYmVlbiBzdW5rXG4gICAgY29uc3Qgc2hpcHNOb3RTdW5rID0gT2JqZWN0LmtleXMoc2hpcExvb2t1cCkuZmlsdGVyKFxuICAgICAgKGtleSkgPT4gIXNoaXBMb29rdXBba2V5XS5pc1N1bmsoKVxuICAgICk7XG5cbiAgICBpZiAoc2hpcHNOb3RTdW5rLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyByZWNlaXZlQXR0YWNrIHRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lc1xuICAvLyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdHMgYSBzaGlwLCBhbmQgdGhlbiBzZW5kc1xuICAvLyB0aGUgJ2hpdCcgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcFxuICAvLyBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3RcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXTtcbiAgY29uc3Qgc2hvdHMgPSBbXTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5LCBzcXVhcmVJZCkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XSkge1xuICAgICAgY29uc3Qgc2hpcEF0dGFja2VkID0gYm9hcmRbeF1beV07XG4gICAgICBib2FyZFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICBjb25zdCBoaXRTaGlwID0gc2hpcExvb2t1cFtzaGlwQXR0YWNrZWRdO1xuICAgICAgaGl0U2hpcC5oaXQoKTtcbiAgICAgIGluZGljYXRlSGl0KHNxdWFyZUlkLCBnYW1lYm9hcmRJZGVudGlmaWVyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwic3Vuaz9cIik7XG4gICAgICBjb25zb2xlLmxvZyhoaXRTaGlwLmlzU3VuaygpKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiIGFsbCBzdW5rP1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKGFyZUFsbEJvYXRzU3VuaygpKTtcblxuICAgICAgaWYgKGFyZUFsbEJvYXRzU3VuaygpKSB7XG4gICAgICAgIGRpc3BsYXlNb2RhbChnYW1lYm9hcmRJZGVudGlmaWVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmRbeF1beV0gPSBcIm1pc3NcIjtcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goW3gsIHldKTtcbiAgICAgIGluZGljYXRlTWlzcyhzcXVhcmVJZCwgZ2FtZWJvYXJkSWRlbnRpZmllcik7XG4gICAgfVxuICAgIHNob3RzLnB1c2goW3gsIHldKTtcbiAgfTtcblxuICAvLyBDaGVjayBpZiBzaG90IGlzIGF2YWlsYWJsZSB0byB0YWtlIG9yIGlmIHNob3QgaGFzIGFscmVhZHkgYmVlbiBtYWRlXG4gIGZ1bmN0aW9uIGlzU2hvdEF2YWlsYWJsZSh4LCB5KSB7XG4gICAgY29uc3QgY3VycmVudFNob3QgPSBbeCwgeV07XG4gICAgY29uc3QgcHJldmlvdXNTaG90cyA9IHNob3RzO1xuXG4gICAgbGV0IHNob3RGb3VuZDtcbiAgICBpZiAocHJldmlvdXNTaG90cykge1xuICAgICAgc2hvdEZvdW5kID0gcHJldmlvdXNTaG90cy5maW5kKFxuICAgICAgICAoW3ByZXZYLCBwcmV2WV0pID0+IHByZXZYID09PSBjdXJyZW50U2hvdFswXSAmJiBwcmV2WSA9PT0gY3VycmVudFNob3RbMV1cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAhc2hvdEZvdW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJHYW1lYm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIGFyZUFsbEJvYXRzU3VuayxcbiAgICBpc1Nob3RBdmFpbGFibGUsXG4gICAgY2xlYXJHYW1lYm9hcmQsXG4gICAgc2hpcExvb2t1cCxcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgaW5pdCwgeyBjbGVhckdhbWVDb21wb25lbnRzLCBhZGRHYW1lQ29tcG9uZW50cyB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSGl0SW5kaWNhdG9yLCByZW1vdmVNaXNzSW5kaWNhdG9yIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLWRvbVwiO1xuXG5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgY29uc3QgeyBwbGF5ZXIsIGNvbXB1dGVyLCBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkIH0gPSBHYW1lKCk7XG4gIC8vIGVxOlxuICAvLyBjb25zdCBnYW1lID0gR2FtZSgpO1xuICAvLyBjb25zdCBwbGF5ZXIgPSBnYW1lLnBsYXllcjtcbiAgLy8gY29uc3QgY29tcHV0ZXIgPSBnYW1lLmNvbXB1dGVyO1xuICAvLyBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBnYW1lLnBsYXllckdhbWVib2FyZDtcbiAgLy8gY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBnYW1lLmNvbXB1dGVyR2FtZWJvYXJkO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrYWJsZVNxdWFyZSA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzcXVhcmVcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzcXVhcmVJZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRDO1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKHNxdWFyZUlkIC8gMTApO1xuICAgIGNvbnN0IHkgPSBzcXVhcmVJZCAlIDEwO1xuXG4gICAgcGxheWVyLm1ha2VBdHRhY2soeCwgeSwgc3F1YXJlSWQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29tcHV0ZXIubWFrZVJhbmRvbUF0dGFjaygpO1xuICAgIH0sIDEwMCk7XG4gICAgY29uc29sZS50YWJsZShjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gIH07XG5cbiAgYWRkR2FtZUNvbXBvbmVudHMoaGFuZGxlQ2xpY2thYmxlU3F1YXJlLCBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkKTtcblxuICBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHBsYXllckdhbWVib2FyZCk7XG4gIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShjb21wdXRlckdhbWVib2FyZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gIHJlbW92ZUhpdEluZGljYXRvcigpO1xuICByZW1vdmVNaXNzSW5kaWNhdG9yKCk7XG4gIGNsZWFyR2FtZUNvbXBvbmVudHMoKTtcbiAgc3RhcnRHYW1lKCk7XG59XG5cbnN0YXJ0R2FtZSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IHsgc3F1YXJlSWRzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLWRvbS5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0WCwgc2VsZWN0WSB9IGZyb20gXCIuL3JhbmRvbS1wbGFjZW1lbnQtZ2VuZXJhdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVuZW15R2FtZWJvYXJkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVuZW15R2FtZWJvYXJkID0gZW5lbXlHYW1lYm9hcmQ7XG4gIH1cblxuICBtYWtlUmFuZG9tQXR0YWNrKCkge1xuICAgIGNvbnN0IHggPSBzZWxlY3RYKCk7XG4gICAgY29uc3QgeSA9IHNlbGVjdFkoKTtcbiAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZUlkc1t4XVt5XTtcbiAgICB0aGlzLm1ha2VBdHRhY2soeCwgeSwgc3F1YXJlSWQpO1xuICB9XG5cbiAgbWFrZUF0dGFjayh4LCB5LCBzcXVhcmVJZCkge1xuICAgIGlmICh0aGlzLmVuZW15R2FtZWJvYXJkLmlzU2hvdEF2YWlsYWJsZSh4LCB5KSkge1xuICAgICAgdGhpcy5lbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHksIHNxdWFyZUlkKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFJhbmRvbWx5IHNlbGVjdCBYIGNvb3JkaW5hdGVcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RYKCkge1xuICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4geDtcbn1cblxuLy8gUmFuZG9tbHkgc2VsZWN0IFkgY29vcmRpbmF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFkoKSB7XG4gIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIHJldHVybiB5O1xufVxuXG4vLyBSYW5kb21seSBzZWxlY3Qgd2hldGhlciBib2F0IHdpbGwgYmUgcGxhY2VkIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RGlyZWN0aW9uKCkge1xuICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgY29uc3QgZGlyZWN0aW9uID0gcmFuZG9tTnVtID09PSAwID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG4gIHJldHVybiBkaXJlY3Rpb247XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCwgbmFtZSkge1xuICBjb25zdCBzaGlwTmFtZSA9IG5hbWU7XG4gIGxldCBoaXRzID0gMDtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICAgIHJldHVybiBoaXRzO1xuICB9O1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0cyA9PT0gbGVuZ3RoO1xuXG4gIHJldHVybiB7IHNoaXBOYW1lLCBnZXRMZW5ndGgsIGhpdCwgaXNTdW5rLCBnZXRIaXRzIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=