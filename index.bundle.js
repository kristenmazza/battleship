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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ban-solid.png */ "./src/images/ban-solid.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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
  color:rgb(40, 40, 40);
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

.computer-board-inactive {
  pointer-events: none;
  background-color: rgb(186, 186, 186);
}

.square {
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
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 1.1rem;
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
  background-color: rgb(253, 253, 115);
}

.coordinate-zone {
  background-color: rgb(207, 231, 237);
  flex: 1 0 auto;
  width: 15%;
  min-width: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  font-size: 1.3rem;
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
}

.hover-error {
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'wargatenormal';\n  src: url('fonts/wargate-normal-webfont.woff2') format('woff2'),\n    url('fonts/wargate-normal-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n*,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, 'Arial Narrow Bold', sans-serif;\n  color:rgb(40, 40, 40);\n}\n\n.container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color:rgb(252, 252, 252);\n}\n\nheader {\n  padding: 30px;\n}\n\nheader > h1 {\n    font-family: 'wargatenormal';\n    font-size: 80px;\n}\n\n\n.main {\n  flex: 4 0 auto;\n  display: flex;\n  padding: 30px;\n  gap: 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.board-container {\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.board-container > h2 {\n      font-family: 'wargatenormal';\n      font-size: 30px;\n}\n\n#player-board,\n#computer-board {\n  display: grid;\n  grid-template-rows: repeat(10, 30px);\n  grid-template-columns: repeat(10, 30px);\n  border: 1px solid rgb(9, 9, 9);\n}\n\n.computer-board-inactive {\n  pointer-events: none;\n  background-color: rgb(186, 186, 186);\n}\n\n.square {\n  border: 1px solid rgb(9, 9, 9);\n}\n\n#computer-board > .square:hover:not(.hit):not(.miss) {\n  cursor: pointer;\n  background-color: rgb(230, 230, 230);\n}\n\n.board-name {\n  text-align: center;\n}\n\nfooter {\n  flex-shrink: 0;\n  text-align: center;\n  padding-bottom: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  font-size: 1.1rem;\n}\n\n.p-boat-marker {\n  background-color: rgb(64, 64, 64);\n}\n\n.hit {\n  background-color: rgb(255, 64, 64);\n}\n\n.miss {\n  background-color: rgb(157, 200, 211);\n}\n\n.modal-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  background-color: black;\n  display: flex;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 250ms ease;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n\n.modal {\n  margin: auto;\n  min-width: 20rem;\n  padding: 20px;\n  background-color: white;\n  border-radius: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.modal-container.target {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.winner-announcement {\n  font-size: 1.8rem;\n  font-family: inherit;\n  font-weight: 500;\n  color:rgb(40, 40, 40);\n  margin-top: 20px;\n}\n\n.play-again-button {\n  background-color: rgb(40, 40, 40);\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  color: rgb(254, 254, 254);\n  font-size: 1.8rem;\n  font-family: inherit;\n  font-weight: 500;\n  margin-bottom: 30px;\n  margin-top: 20px;\n}\n\n.play-again-button:hover {\n  cursor: pointer;\n  background-color: rgb(60, 60, 60);}\n\n.square {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.x:after {\n  content: \"\\00d7\";\n  font-size: 2rem;\n  color: rgb(9, 9, 9);\n}\n\n\n.boat-length-squares {\n  font-size: 2rem;\n  letter-spacing: -5px;\n}\n\n.form {\n  display: flex;\n  padding: 20px;\n  gap: 30px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n}\n\n.row {\n  display: flex;\n  gap: 3px;\n}\n\n.hover {\n  background-color: rgb(253, 253, 115);\n}\n\n.coordinate-zone {\n  background-color: rgb(207, 231, 237);\n  flex: 1 0 auto;\n  width: 15%;\n  min-width: 210px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 20px;\n  border-radius: 8px;\n  font-size: 1.3rem;\n}\n\n.coordinate-zone > button {\n  background-color: rgb(40, 40, 40);\n  padding: 5px 10px;\n  border-radius: 8px;\n  border: none;\n  color: rgb(254, 254, 254);\n  font-size: 1.1rem;\n  font-family: inherit;\n}\n.coordinate-zone>button:hover {\n  cursor: pointer;\n  background-color: rgb(60, 60, 60);\n}\n\n.place-ships-notice-section {\n  padding-bottom: 10px;\n}\n\n.ship-name {\n  text-decoration: underline rgb(40, 40, 40);\n}\n\n.hover-error {\n  background-size: 90%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(\"./images/ban-solid.png\");\n}\n\n"],"sourceRoot":""}]);
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
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   makeComputerBoardClickable: () => (/* binding */ makeComputerBoardClickable),
/* harmony export */   makeComputerBoardInactive: () => (/* binding */ makeComputerBoardInactive)
/* harmony export */ });
/* harmony import */ var _images_github_mark_15px_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github-mark-15px.png */ "./src/images/github-mark-15px.png");


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
  const createdBy = document.createElement("span");
  const a = document.createElement("a");

  footer.appendChild(createdBy);
  createdBy.textContent = "created by: kristenmazza";

  const githubImg = new Image();
  githubImg.src = _images_github_mark_15px_png__WEBPACK_IMPORTED_MODULE_0__;
  a.href = "https://github.com/kristenmazza";
  a.appendChild(githubImg);
  footer.appendChild(a);
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

function makeComputerBoardClickable() {
  const computerBoard = document.querySelector("#computer-board");
  computerBoard.classList.remove("computer-board-inactive");
}

function makeComputerBoardInactive() {
  const computerBoard = document.querySelector("#computer-board");
  computerBoard.classList.add("computer-board-inactive");
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
  playerBoardContainer.appendChild(componentBoardName("Your Sea"));
  computerBoardContainer.appendChild(componentBoardName("Enemy Sea"));
  playerBoardContainer.appendChild(playerBoard);
  computerBoardContainer.appendChild(computerBoard);
  main.appendChild(componentModal(playerGameboard, computerGameboard));
  const boardContainer = document.getElementById("computer-board");
  boardContainer.addEventListener("click", handleClickableSquare);

  const coordinateZone = document.querySelector(".coordinate-zone");
  coordinateZone.style.display = "";

  const shipName = document.querySelector(".ship-name");
  shipName.textContent = "carrier";

  const rotateButton = document.querySelector(".rotate");
  rotateButton.addEventListener("click", playerGameboard.rotateShip);

  makeComputerBoardInactive();
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
    coordinateZone.style.display = "none";
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
/* harmony export */   "default": () => (/* binding */ Game),
/* harmony export */   resetGame: () => (/* binding */ resetGame)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard-dom.js */ "./src/gameboard-dom.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* eslint-disable import/extensions */






function Game() {
  const playerGameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])("p");
  const computerGameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])("c");
  const player = new _player_js__WEBPACK_IMPORTED_MODULE_3__["default"]("Friendly Seas", computerGameboard);
  const computer = new _player_js__WEBPACK_IMPORTED_MODULE_3__["default"]("Enemy Seas", playerGameboard);

  return { playerGameboard, computerGameboard, player, computer };
}

function resetGame() {
  (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeHitIndicator)();
  (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeMissIndicator)();
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.clearGameComponents)();
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

  // const rotateButton = document.querySelector(".rotate");
  // rotateButton.addEventListener("click", rotateShip);

  // Place player ships on click
  let k = 0;
  let boatLength = 5;
  function placeShipsManually(e) {
    const playerBoard = document.querySelector("#player-board");
    const playerBoats = createPlayerBoats();
    const boatName = `${Object.keys(playerBoats)[k]}`;
    const boatNameDOM = `${Object.keys(playerBoats)[k + 1]}`;
    const squareId = e.target.dataset.idP;
    const x = Math.floor(squareId / 10);
    const y = squareId % 10;
    const length = playerBoats[boatName].getLength();

    if (!e.target.classList.contains("square")) {
      return;
    }

    if (isPlacementPossible(x, y, direction, length)) {
      if (direction === "horizontal" || direction === "vertical") {
        if (direction === "horizontal") {
          for (let i = 0; i < length; i += 1) {
            board[x][y + i] = boatName;
          }
        } else if (direction === "vertical") {
          for (let j = 0; j < length; j += 1) {
            board[x + j][y] = boatName;
          }
        }
        k += 1;
        boatLength = boatName === "destroyer" ? length : length - 1;
        if (boatLength < 2) boatLength = 0;
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayInstructions)(boatNameDOM);
      }

      // Add ship to shipLookup
      shipLookup[boatName] = playerBoats[boatName];
      (0,_gameboard_dom_js__WEBPACK_IMPORTED_MODULE_1__.placeShipDom)([x, y], direction, length, gameboardIdentifier, boatName);
    }

    if (k === 5) {
      playerBoard.removeEventListener("click", placeShipsManually);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.makeComputerBoardClickable)();
    }
  }

  // Remove boat preview (hover and hover-error classes)
  function removeBoatPreview() {
    Array.from(document.querySelectorAll(".hover")).forEach((el) =>
      el.classList.remove("hover")
    );

    Array.from(document.querySelectorAll(".hover-error")).forEach((el) =>
      el.classList.remove("hover-error")
    );
  }

  // Show boat preview on hover
  function showBoatPreview(e) {
    const playerBoard = document.querySelector("#player-board");
    const squareId = e.target.dataset.idP;
    const x = Math.floor(squareId / 10);
    const y = squareId % 10;

    // Remove event listener when there are no more boats to place (boat of length 2 being last)
    if (boatLength < 2) {
      playerBoard.removeEventListener("mouseover", showBoatPreview);
    }

    if (isPlacementPossible(x, y, direction, boatLength)) {
      if (direction === "horizontal") {
        for (let i = 0; i < boatLength; i += 1) {
          const neighborHorizontal = document.querySelector(
            `[data-id-p="${Number(squareId) + i}"]`
          );
          if (neighborHorizontal) neighborHorizontal.classList.add("hover");
        }
      } else if (direction === "vertical") {
        for (let j = 0; j < boatLength; j += 1) {
          const neighborVertical = document.querySelector(
            `[data-id-p="${Number(squareId) + j * 10}"]`
          );
          if (neighborVertical) neighborVertical.classList.add("hover");
        }
      }
    } else {
      e.target.classList.add("hover-error");
    }

    // Remove boat preview when mouse leaves square
    playerBoard.addEventListener("mouseout", removeBoatPreview);
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
    showBoatPreview,
    rotateShip,
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
/* eslint-disable import/extensions */





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
  playerBoard.addEventListener("mouseover", playerGameboard.showBoatPreview);
  computerGameboard.placeShipsRandomly(computerGameboard);

  const button = document.querySelector(".play-again-button");
  button.addEventListener("click", () => {
    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.resetGame)();
    startGame();
  });
}

(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.init)();
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

/***/ }),

/***/ "./src/images/ban-solid.png":
/*!**********************************!*\
  !*** ./src/images/ban-solid.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7af6bc0027732749c70.png";

/***/ }),

/***/ "./src/images/github-mark-15px.png":
/*!*****************************************!*\
  !*** ./src/images/github-mark-15px.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63b5e946984fd45dfd6c.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSkFBcUQ7QUFDakcsNENBQTRDLGlKQUFvRDtBQUNoRyw0Q0FBNEMseUhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxL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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5REFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87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c0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFNBOztBQUVxQjtBQUN1QjtBQUNPOztBQUVwQztBQUNmLFVBQVUsdURBQXVELEVBQUUsb0RBQUk7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsMERBQWlCOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBUztBQUNiO0FBQ0EsR0FBRztBQUNIOztBQUVBLDZDQUFJO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBOztBQUUrQztBQUNvQjs7QUFFcEQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsdUVBQU87QUFDckIsY0FBYyx1RUFBTzs7QUFFckI7QUFDQSx1QkFBdUIsd0RBQVM7QUFDaEM7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQtZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yYW5kb20tcGxhY2VtZW50LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL3dhcmdhdGUtbm9ybWFsLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250cy93YXJnYXRlLW5vcm1hbC13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYW4tc29saWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3dhcmdhdGVub3JtYWwnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbiosXG5odG1sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjpyZ2IoNDAsIDQwLCA0MCk7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MiwgMjUyLCAyNTIpO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5oZWFkZXIgPiBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICd3YXJnYXRlbm9ybWFsJztcbiAgICBmb250LXNpemU6IDgwcHg7XG59XG5cblxuLm1haW4ge1xuICBmbGV4OiA0IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMzBweDtcbiAgZ2FwOiAzMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciA+IGgyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbiNwbGF5ZXItYm9hcmQsXG4jY29tcHV0ZXItYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDksIDksIDkpO1xufVxuXG4uY29tcHV0ZXItYm9hcmQtaW5hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg2LCAxODYpO1xufVxuXG4uc3F1YXJlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDksIDksIDkpO1xufVxuXG4jY29tcHV0ZXItYm9hcmQgPiAuc3F1YXJlOmhvdmVyOm5vdCguaGl0KTpub3QoLm1pc3MpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XG59XG5cbi5ib2FyZC1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb290ZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5wLWJvYXQtbWFya2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCA2NCwgNjQpO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjQsIDY0KTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU3LCAyMDAsIDIxMSk7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5tb2RhbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5tb2RhbC1jb250YWluZXIudGFyZ2V0IHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLndpbm5lci1hbm5vdW5jZW1lbnQge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOnJnYig0MCwgNDAsIDQwKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBsYXktYWdhaW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wbGF5LWFnYWluLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO31cblxuLnNxdWFyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ueDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxcXDAwZDdcIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogcmdiKDksIDksIDkpO1xufVxuXG5cbi5ib2F0LWxlbmd0aC1zcXVhcmVzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTVweDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBnYXA6IDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzcHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNweDtcbn1cblxuLmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAxMTUpO1xufVxuXG4uY29vcmRpbmF0ZS16b25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjMxLCAyMzcpO1xuICBmbGV4OiAxIDAgYXV0bztcbiAgd2lkdGg6IDE1JTtcbiAgbWluLXdpZHRoOiAyMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmNvb3JkaW5hdGUtem9uZSA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG4uY29vcmRpbmF0ZS16b25lPmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO1xufVxuXG4ucGxhY2Utc2hpcHMtbm90aWNlLXNlY3Rpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNoaXAtbmFtZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJnYig0MCwgNDAsIDQwKTtcbn1cblxuLmhvdmVyLWVycm9yIHtcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUI7MERBQ3lEO0VBQ3pELG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7RUFDVixvREFBb0Q7RUFDcEQscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO01BQ00sNEJBQTRCO01BQzVCLGVBQWU7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlDQUFpQyxDQUFDOztBQUVwQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHlEQUErQztBQUNqRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XFxuICBzcmM6IHVybCgnZm9udHMvd2FyZ2F0ZS1ub3JtYWwtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCdmb250cy93YXJnYXRlLW5vcm1hbC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiosXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOnJnYig0MCwgNDAsIDQwKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUyLCAyNTIsIDI1Mik7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG59XFxuXFxuXFxuLm1haW4ge1xcbiAgZmxleDogNCAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdhcDogMzBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciA+IGgyIHtcXG4gICAgICBmb250LWZhbWlseTogJ3dhcmdhdGVub3JtYWwnO1xcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI3BsYXllci1ib2FyZCxcXG4jY29tcHV0ZXItYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5LCA5LCA5KTtcXG59XFxuXFxuLmNvbXB1dGVyLWJvYXJkLWluYWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMTg2LCAxODYpO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5LCA5LCA5KTtcXG59XFxuXFxuI2NvbXB1dGVyLWJvYXJkID4gLnNxdWFyZTpob3Zlcjpub3QoLmhpdCk6bm90KC5taXNzKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxufVxcblxcbi5ib2FyZC1uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5wLWJvYXQtbWFya2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NCwgNjQsIDY0KTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NCwgNjQpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU3LCAyMDAsIDIxMSk7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIudGFyZ2V0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ud2lubmVyLWFubm91bmNlbWVudCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOnJnYig0MCwgNDAsIDQwKTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wbGF5LWFnYWluLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnBsYXktYWdhaW4tYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwKTt9XFxuXFxuLnNxdWFyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ueDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXDAwZDdcXFwiO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHJnYig5LCA5LCA5KTtcXG59XFxuXFxuXFxuLmJvYXQtbGVuZ3RoLXNxdWFyZXMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC01cHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNTMsIDExNSk7XFxufVxcblxcbi5jb29yZGluYXRlLXpvbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjMxLCAyMzcpO1xcbiAgZmxleDogMSAwIGF1dG87XFxuICB3aWR0aDogMTUlO1xcbiAgbWluLXdpZHRoOiAyMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uY29vcmRpbmF0ZS16b25lID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi5jb29yZGluYXRlLXpvbmU+YnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLW5vdGljZS1zZWN0aW9uIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2hpcC1uYW1lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJnYig0MCwgNDAsIDQwKTtcXG59XFxuXFxuLmhvdmVyLWVycm9yIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvYmFuLXNvbGlkLnBuZ1xcXCIpO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHaXRodWJJbWcgZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yi1tYXJrLTE1cHgucG5nXCI7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29vcmRpbmF0ZVNlbGVjdGlvblpvbmUoKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVTZWxlY3Rpb25ab25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxhY2VTaGlwc05vdGljZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjZVNoaXBzTm90aWNlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicGxhY2Utc2hpcHMtbm90aWNlLXNlY3Rpb25cIik7XG4gIGNvbnN0IHBsYWNlU2hpcHNOb3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHBsYWNlU2hpcHNOb3RpY2UudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgXCI7XG4gIHNoaXBOYW1lLnRleHRDb250ZW50ID0gXCJjYXJyaWVyXCI7XG4gIHNoaXBOYW1lLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW5hbWVcIik7XG4gIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuICBheGlzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVcIik7XG4gIGNvb3JkaW5hdGVTZWxlY3Rpb25ab25lLmFwcGVuZENoaWxkKHBsYWNlU2hpcHNOb3RpY2VTZWN0aW9uKTtcbiAgcGxhY2VTaGlwc05vdGljZVNlY3Rpb24uYXBwZW5kQ2hpbGQocGxhY2VTaGlwc05vdGljZSk7XG4gIHBsYWNlU2hpcHNOb3RpY2VTZWN0aW9uLmFwcGVuZENoaWxkKHNoaXBOYW1lKTtcbiAgY29vcmRpbmF0ZVNlbGVjdGlvblpvbmUuYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG4gIGNvb3JkaW5hdGVTZWxlY3Rpb25ab25lLmNsYXNzTGlzdC5hZGQoXCJjb29yZGluYXRlLXpvbmVcIik7XG4gIHJldHVybiBjb29yZGluYXRlU2VsZWN0aW9uWm9uZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50TWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQbGF5ZXJCb2FyZENvbnRhaW5lcigpIHtcbiAgY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtY29udGFpbmVyXCIpO1xuICByZXR1cm4gcGxheWVyQm9hcmRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbXB1dGVyQm9hcmRDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wdXRlckJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gIHJldHVybiBjb21wdXRlckJvYXJkQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRCb2FyZE5hbWUobmFtZSkge1xuICBjb25zdCBib2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGJvYXJkTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGJvYXJkTmFtZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtbmFtZVwiKTtcbiAgcmV0dXJuIGJvYXJkTmFtZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UGxheWVyQm9hcmQoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItYm9hcmRcIik7XG4gIHJldHVybiBwbGF5ZXJCb2FyZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UGxheWVyR3JpZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBjb21wb25lbnRQbGF5ZXJCb2FyZCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZC1wXCIsIGAke2l9YCk7XG4gICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcInAtb2NjdXBpZWRcIiwgXCJmYWxzZVwiKTtcbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICB9XG4gIHJldHVybiBwbGF5ZXJCb2FyZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29tcHV0ZXJCb2FyZCgpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVyQm9hcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21wdXRlci1ib2FyZFwiKTtcbiAgcmV0dXJuIGNvbXB1dGVyQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbXB1dGVyR3JpZCgpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGNvbXBvbmVudENvbXB1dGVyQm9hcmQoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtaWQtY1wiLCBgJHtpfWApO1xuICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJjLW9jY3VwaWVkXCIsIFwiZmFsc2VcIik7XG4gICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICB9XG4gIHJldHVybiBjb21wdXRlckJvYXJkO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGNyZWF0ZWRCeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWF0ZWRCeSk7XG4gIGNyZWF0ZWRCeS50ZXh0Q29udGVudCA9IFwiY3JlYXRlZCBieToga3Jpc3Rlbm1henphXCI7XG5cbiAgY29uc3QgZ2l0aHViSW1nID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1YkltZy5zcmMgPSBHaXRodWJJbWc7XG4gIGEuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2tyaXN0ZW5tYXp6YVwiO1xuICBhLmFwcGVuZENoaWxkKGdpdGh1YkltZyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UGxheUFnYWluQnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInBsYXktYWdhaW4tYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5cIjtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50TW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwid2lubmVyLWFubm91bmNlbWVudFwiKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIGNvbnN0IGJ1dHRvbiA9IGNvbXBvbmVudFBsYXlBZ2FpbkJ1dHRvbigpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChidXR0b24pO1xuICByZXR1cm4gbW9kYWxDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBjb250YWluZXIgPSBjb21wb25lbnRDb250YWluZXIoKTtcbiAgY29uc3QgaGVhZGVyID0gY29tcG9uZW50SGVhZGVyKCk7XG4gIGNvbnN0IHRpdGxlID0gY29tcG9uZW50VGl0bGUoKTtcbiAgY29uc3QgY29vcmRpbmF0ZVNlbGVjdGlvblpvbmUgPSBjb21wb25lbnRDb29yZGluYXRlU2VsZWN0aW9uWm9uZSgpO1xuICBjb25zdCBtYWluID0gY29tcG9uZW50TWFpbigpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGNvbXBvbmVudEZvb3RlcigpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb29yZGluYXRlU2VsZWN0aW9uWm9uZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcHV0ZXJCb2FyZENsaWNrYWJsZSgpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcHV0ZXItYm9hcmRcIik7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXB1dGVyLWJvYXJkLWluYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbXB1dGVyQm9hcmRJbmFjdGl2ZSgpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcHV0ZXItYm9hcmRcIik7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLWJvYXJkLWluYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkR2FtZUNvbXBvbmVudHMoXG4gIGhhbmRsZUNsaWNrYWJsZVNxdWFyZSxcbiAgcGxheWVyR2FtZWJvYXJkLFxuICBjb21wdXRlckdhbWVib2FyZFxuKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gY29tcG9uZW50UGxheWVyQm9hcmRDb250YWluZXIoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZENvbnRhaW5lciA9IGNvbXBvbmVudENvbXB1dGVyQm9hcmRDb250YWluZXIoKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBjb21wb25lbnRQbGF5ZXJHcmlkKCk7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBjb21wb25lbnRDb21wdXRlckdyaWQoKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHBsYXllckJvYXJkQ29udGFpbmVyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkQ29udGFpbmVyKTtcbiAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50Qm9hcmROYW1lKFwiWW91ciBTZWFcIikpO1xuICBjb21wdXRlckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBvbmVudEJvYXJkTmFtZShcIkVuZW15IFNlYVwiKSk7XG4gIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcbiAgY29tcHV0ZXJCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb21wb25lbnRNb2RhbChwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkKSk7XG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlci1ib2FyZFwiKTtcbiAgYm9hcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrYWJsZVNxdWFyZSk7XG5cbiAgY29uc3QgY29vcmRpbmF0ZVpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb3JkaW5hdGUtem9uZVwiKTtcbiAgY29vcmRpbmF0ZVpvbmUuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cbiAgY29uc3Qgc2hpcE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtbmFtZVwiKTtcbiAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBcImNhcnJpZXJcIjtcblxuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbiAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJHYW1lYm9hcmQucm90YXRlU2hpcCk7XG5cbiAgbWFrZUNvbXB1dGVyQm9hcmRJbmFjdGl2ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJHYW1lQ29tcG9uZW50cygpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcblxuICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SW5zdHJ1Y3Rpb25zKGJvYXROYW1lRE9NKSB7XG4gIGNvbnN0IGJvYXROYW1lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1uYW1lXCIpO1xuXG4gIGxldCBuYW1lID0gYm9hdE5hbWVET007XG4gIGlmIChuYW1lID09PSBcInBhdHJvbEJvYXRcIikge1xuICAgIG5hbWUgPSBcInBhdHJvbCBib2F0XCI7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVab25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29yZGluYXRlLXpvbmVcIik7XG4gICAgY29vcmRpbmF0ZVpvbmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIGJvYXROYW1lVGV4dC50ZXh0Q29udGVudCA9IG5hbWU7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQgeyBjbGVhckdhbWVDb21wb25lbnRzIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyByZW1vdmVIaXRJbmRpY2F0b3IsIHJlbW92ZU1pc3NJbmRpY2F0b3IgfSBmcm9tIFwiLi9nYW1lYm9hcmQtZG9tLmpzXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKFwicFwiKTtcbiAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoXCJjXCIpO1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKFwiRnJpZW5kbHkgU2Vhc1wiLCBjb21wdXRlckdhbWVib2FyZCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gbmV3IFBsYXllcihcIkVuZW15IFNlYXNcIiwgcGxheWVyR2FtZWJvYXJkKTtcblxuICByZXR1cm4geyBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLCBwbGF5ZXIsIGNvbXB1dGVyIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gIHJlbW92ZUhpdEluZGljYXRvcigpO1xuICByZW1vdmVNaXNzSW5kaWNhdG9yKCk7XG4gIGNsZWFyR2FtZUNvbXBvbmVudHMoKTtcbn0iLCIvLyBDZWxsIGxvb2t1cFxuZXhwb3J0IGNvbnN0IHNxdWFyZUlkcyA9IFtcbiAgW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiXSxcbiAgW1wiMTBcIiwgXCIxMVwiLCBcIjEyXCIsIFwiMTNcIiwgXCIxNFwiLCBcIjE1XCIsIFwiMTZcIiwgXCIxN1wiLCBcIjE4XCIsIFwiMTlcIl0sXG4gIFtcIjIwXCIsIFwiMjFcIiwgXCIyMlwiLCBcIjIzXCIsIFwiMjRcIiwgXCIyNVwiLCBcIjI2XCIsIFwiMjdcIiwgXCIyOFwiLCBcIjI5XCJdLFxuICBbXCIzMFwiLCBcIjMxXCIsIFwiMzJcIiwgXCIzM1wiLCBcIjM0XCIsIFwiMzVcIiwgXCIzNlwiLCBcIjM3XCIsIFwiMzhcIiwgXCIzOVwiXSxcbiAgW1wiNDBcIiwgXCI0MVwiLCBcIjQyXCIsIFwiNDNcIiwgXCI0NFwiLCBcIjQ1XCIsIFwiNDZcIiwgXCI0N1wiLCBcIjQ4XCIsIFwiNDlcIl0sXG4gIFtcIjUwXCIsIFwiNTFcIiwgXCI1MlwiLCBcIjUzXCIsIFwiNTRcIiwgXCI1NVwiLCBcIjU2XCIsIFwiNTdcIiwgXCI1OFwiLCBcIjU5XCJdLFxuICBbXCI2MFwiLCBcIjYxXCIsIFwiNjJcIiwgXCI2M1wiLCBcIjY0XCIsIFwiNjVcIiwgXCI2NlwiLCBcIjY3XCIsIFwiNjhcIiwgXCI2OVwiXSxcbiAgW1wiNzBcIiwgXCI3MVwiLCBcIjcyXCIsIFwiNzNcIiwgXCI3NFwiLCBcIjc1XCIsIFwiNzZcIiwgXCI3N1wiLCBcIjc4XCIsIFwiNzlcIl0sXG4gIFtcIjgwXCIsIFwiODFcIiwgXCI4MlwiLCBcIjgzXCIsIFwiODRcIiwgXCI4NVwiLCBcIjg2XCIsIFwiODdcIiwgXCI4OFwiLCBcIjg5XCJdLFxuICBbXCI5MFwiLCBcIjkxXCIsIFwiOTJcIiwgXCI5M1wiLCBcIjk0XCIsIFwiOTVcIiwgXCI5NlwiLCBcIjk3XCIsIFwiOThcIiwgXCI5OVwiXSxcbl07XG5cbi8vIFBsYWNlIHNoaXBzIG9uIERPTVxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcERvbShcbiAgY29vcmQsXG4gIGRpcmVjdGlvbixcbiAgbGVuZ3RoLFxuICBnYW1lYm9hcmRJZGVudGlmaWVyLFxuICBzaGlwTmFtZVxuKSB7XG4gIGxldCBzcXVhcmVJZDtcbiAgbGV0IGVsZW1lbnQ7XG4gIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3F1YXJlSWQgPSBzcXVhcmVJZHNbY29vcmRbMF1dW2Nvb3JkWzFdICsgaV07XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWlkLSR7Z2FtZWJvYXJkSWRlbnRpZmllcn09JyR7c3F1YXJlSWR9J11gXG4gICAgICApO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2dhbWVib2FyZElkZW50aWZpZXJ9LWJvYXQtbWFya2VyYCk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Z2FtZWJvYXJkSWRlbnRpZmllcn0tJHtzaGlwTmFtZX1gKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke2dhbWVib2FyZElkZW50aWZpZXJ9LW9jY3VwaWVkYCwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIHNxdWFyZUlkID0gc3F1YXJlSWRzW2Nvb3JkWzBdICsgal1bY29vcmRbMV1dO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1pZC0ke2dhbWVib2FyZElkZW50aWZpZXJ9PScke3NxdWFyZUlkfSddYFxuICAgICAgKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtnYW1lYm9hcmRJZGVudGlmaWVyfS1ib2F0LW1hcmtlcmApO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2dhbWVib2FyZElkZW50aWZpZXJ9LSR7c2hpcE5hbWV9YCk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgJHtnYW1lYm9hcmRJZGVudGlmaWVyfS1vY2N1cGllZGAsIFwidHJ1ZVwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGljYXRlSGl0KHNxdWFyZUlkLCBnYW1lYm9hcmRJZGVudGlmaWVyKSB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLWlkLSR7Z2FtZWJvYXJkSWRlbnRpZmllcn09JyR7c3F1YXJlSWR9J11gXG4gICk7XG4gIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kaWNhdGVNaXNzKHNxdWFyZUlkLCBnYW1lYm9hcmRJZGVudGlmaWVyKSB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLWlkLSR7Z2FtZWJvYXJkSWRlbnRpZmllcn09JyR7c3F1YXJlSWR9J11gXG4gICk7XG4gIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbn1cblxuZnVuY3Rpb24gaW5kaWNhdGVXaW5uZXIoZ2FtZWJvYXJkSWRlbnRpZmllcikge1xuICBjb25zdCB3aW5uZXIgPSBnYW1lYm9hcmRJZGVudGlmaWVyID09PSBcInBcIiA/IFwiRW5lbXlcIiA6IFwiWW91XCI7XG4gIGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci1hbm5vdW5jZW1lbnRcIik7XG4gIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IHdvbiFgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1vZGFsKGdhbWVib2FyZElkZW50aWZpZXIpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInRhcmdldFwiKTtcbiAgaW5kaWNhdGVXaW5uZXIoZ2FtZWJvYXJkSWRlbnRpZmllcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIaXRJbmRpY2F0b3IoKSB7XG4gIGNvbnN0IGhpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpdFwiKTtcbiAgQXJyYXkuZnJvbShoaXRzKS5mb3JFYWNoKChoaXQpID0+IGhpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU1pc3NJbmRpY2F0b3IoKSB7XG4gIGNvbnN0IG1pc3NlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWlzc1wiKTtcbiAgQXJyYXkuZnJvbShtaXNzZXMpLmZvckVhY2goKG1pc3MpID0+IG1pc3MuY2xhc3NMaXN0LnJlbW92ZShcIm1pc3NcIikpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IHsgZGlzcGxheUluc3RydWN0aW9ucywgbWFrZUNvbXB1dGVyQm9hcmRDbGlja2FibGUgfSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7XG4gIHBsYWNlU2hpcERvbSxcbiAgaW5kaWNhdGVIaXQsXG4gIGluZGljYXRlTWlzcyxcbiAgZGlzcGxheU1vZGFsLFxufSBmcm9tIFwiLi9nYW1lYm9hcmQtZG9tLmpzXCI7XG5pbXBvcnQge1xuICBzZWxlY3RYLFxuICBzZWxlY3RZLFxuICBzZWxlY3REaXJlY3Rpb24sXG59IGZyb20gXCIuL3JhbmRvbS1wbGFjZW1lbnQtZ2VuZXJhdG9yLmpzXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZChnYW1lYm9hcmRJZGVudGlmaWVyKSB7XG4gIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKG51bGwpO1xuXG4gIC8vIENyZWF0ZSBnYW1lYm9hcmQgMkQgYXJyYXlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgYm9hcmRbaV0gPSBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCk7XG4gIH1cblxuICAvLyBTaGlwIGxvb2t1cCB0byByZXRyaWV2ZSB2YXJpYWJsZSBmcm9tIHN0cmluZyBuYW1lXG4gIGNvbnN0IHNoaXBMb29rdXAgPSB7fTtcblxuICBmdW5jdGlvbiBpc1BsYWNlbWVudFBvc3NpYmxlKHgsIHksIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgLy8gSWYgdGhlIGJvYXQgZG9lcyBub3QgZml0IG9uIHRoZSBib2FyZCwgcmV0dXJuIGZhbHNlXG4gICAgaWYgKFxuICAgICAgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiYgeSArIGxlbmd0aCAtIDEgPj0gMTApIHx8XG4gICAgICAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIgJiYgeCArIGxlbmd0aCAtIDEgPj0gMTApXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgaG9yaXpvbnRhbCBib2F0IGZpdHMgb24gdGhlIGJvYXJkLCByZXR1cm4gZmFsc2UgaWYgb25lIG9mIHRoZSBzcXVhcmVzIGlzIGFscmVhZHkgdGFrZW5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIiAmJiB5ICsgbGVuZ3RoIC0gMSA8IDEwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5ICsgaV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB2ZXJ0aWNhbCBib2F0IGZpdHMgb24gdGhlIGJvYXJkLCByZXR1cm4gZmFsc2UgaWYgb25lIG9mIHRoZSBzcXVhcmVzIGlzIGFscmVhZHkgdGFrZW5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIgJiYgeCArIGxlbmd0aCAtIDEgPCAxMCkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAoYm9hcmRbeCArIGpdW3ldKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gUmFuZG9tbHkgcGxhY2UgZ2l2ZW4gc2hpcCBpbiB0aGUgMkQgZ2FtZWJvYXJkIGFycmF5XG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgeCA9IHNlbGVjdFgoKTtcbiAgICBjb25zdCB5ID0gc2VsZWN0WSgpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNlbGVjdERpcmVjdGlvbigpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoaXNQbGFjZW1lbnRQb3NzaWJsZSh4LCB5LCBkaXJlY3Rpb24sIGxlbmd0aCkpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBib2FyZFt4XVt5ICsgaV0gPSBzaGlwLnNoaXBOYW1lO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBib2FyZFt4ICsgal1beV0gPSBzaGlwLnNoaXBOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBBZGQgc2hpcCB0byBzaGlwTG9va3VwXG4gICAgICBzaGlwTG9va3VwW3NoaXAuc2hpcE5hbWVdID0gc2hpcDtcbiAgICAgIHBsYWNlU2hpcERvbShcbiAgICAgICAgW3gsIHldLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgZ2FtZWJvYXJkSWRlbnRpZmllcixcbiAgICAgICAgc2hpcC5zaGlwTmFtZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxhY2VTaGlwKHNoaXApO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBsYWNlIHNoaXBzIHJhbmRvbWx5IG9uIGEgZ2l2ZW4gZ2FtZWJvYXJkXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seShzZWxlY3RlZEdhbWVib2FyZCkge1xuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwKDUsIFwiY2FycmllclwiKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCBcImJhdHRsZXNoaXBcIik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzLCBcImRlc3Ryb3llclwiKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMsIFwic3VibWFyaW5lXCIpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBTaGlwKDIsIFwicGF0cm9sQm9hdFwiKTtcblxuICAgIHNlbGVjdGVkR2FtZWJvYXJkLnBsYWNlU2hpcChjYXJyaWVyKTtcbiAgICBzZWxlY3RlZEdhbWVib2FyZC5wbGFjZVNoaXAoYmF0dGxlc2hpcCk7XG4gICAgc2VsZWN0ZWRHYW1lYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llcik7XG4gICAgc2VsZWN0ZWRHYW1lYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSk7XG4gICAgc2VsZWN0ZWRHYW1lYm9hcmQucGxhY2VTaGlwKHBhdHJvbEJvYXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGxheWVyQm9hdHMoKSB7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoNSwgXCJjYXJyaWVyXCIpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQsIFwiYmF0dGxlc2hpcFwiKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMsIFwiZGVzdHJveWVyXCIpO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgXCJzdWJtYXJpbmVcIik7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IFNoaXAoMiwgXCJwYXRyb2xCb2F0XCIpO1xuXG4gICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQgfTtcbiAgfVxuXG4gIC8vIFJvdGF0ZSBtYW51YWxseSBwbGFjZWQgc2hpcHMgb24gY2xpY2sgb2Ygcm90YXRlIGJ1dHRvblxuICBsZXQgZGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gIGZ1bmN0aW9uIHJvdGF0ZVNoaXAoKSB7XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICB9XG5cbiAgLy8gY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGVcIik7XG4gIC8vIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlU2hpcCk7XG5cbiAgLy8gUGxhY2UgcGxheWVyIHNoaXBzIG9uIGNsaWNrXG4gIGxldCBrID0gMDtcbiAgbGV0IGJvYXRMZW5ndGggPSA1O1xuICBmdW5jdGlvbiBwbGFjZVNoaXBzTWFudWFsbHkoZSkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItYm9hcmRcIik7XG4gICAgY29uc3QgcGxheWVyQm9hdHMgPSBjcmVhdGVQbGF5ZXJCb2F0cygpO1xuICAgIGNvbnN0IGJvYXROYW1lID0gYCR7T2JqZWN0LmtleXMocGxheWVyQm9hdHMpW2tdfWA7XG4gICAgY29uc3QgYm9hdE5hbWVET00gPSBgJHtPYmplY3Qua2V5cyhwbGF5ZXJCb2F0cylbayArIDFdfWA7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkUDtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihzcXVhcmVJZCAvIDEwKTtcbiAgICBjb25zdCB5ID0gc3F1YXJlSWQgJSAxMDtcbiAgICBjb25zdCBsZW5ndGggPSBwbGF5ZXJCb2F0c1tib2F0TmFtZV0uZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNxdWFyZVwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc1BsYWNlbWVudFBvc3NpYmxlKHgsIHksIGRpcmVjdGlvbiwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgfHwgZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBib2FyZFt4XVt5ICsgaV0gPSBib2F0TmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBib2FyZFt4ICsgal1beV0gPSBib2F0TmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgayArPSAxO1xuICAgICAgICBib2F0TGVuZ3RoID0gYm9hdE5hbWUgPT09IFwiZGVzdHJveWVyXCIgPyBsZW5ndGggOiBsZW5ndGggLSAxO1xuICAgICAgICBpZiAoYm9hdExlbmd0aCA8IDIpIGJvYXRMZW5ndGggPSAwO1xuICAgICAgICBkaXNwbGF5SW5zdHJ1Y3Rpb25zKGJvYXROYW1lRE9NKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHNoaXAgdG8gc2hpcExvb2t1cFxuICAgICAgc2hpcExvb2t1cFtib2F0TmFtZV0gPSBwbGF5ZXJCb2F0c1tib2F0TmFtZV07XG4gICAgICBwbGFjZVNoaXBEb20oW3gsIHldLCBkaXJlY3Rpb24sIGxlbmd0aCwgZ2FtZWJvYXJkSWRlbnRpZmllciwgYm9hdE5hbWUpO1xuICAgIH1cblxuICAgIGlmIChrID09PSA1KSB7XG4gICAgICBwbGF5ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxhY2VTaGlwc01hbnVhbGx5KTtcbiAgICAgIG1ha2VDb21wdXRlckJvYXJkQ2xpY2thYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIGJvYXQgcHJldmlldyAoaG92ZXIgYW5kIGhvdmVyLWVycm9yIGNsYXNzZXMpXG4gIGZ1bmN0aW9uIHJlbW92ZUJvYXRQcmV2aWV3KCkge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3ZlclwiKSkuZm9yRWFjaCgoZWwpID0+XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIilcbiAgICApO1xuXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdmVyLWVycm9yXCIpKS5mb3JFYWNoKChlbCkgPT5cbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3Zlci1lcnJvclwiKVxuICAgICk7XG4gIH1cblxuICAvLyBTaG93IGJvYXQgcHJldmlldyBvbiBob3ZlclxuICBmdW5jdGlvbiBzaG93Qm9hdFByZXZpZXcoZSkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItYm9hcmRcIik7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkUDtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihzcXVhcmVJZCAvIDEwKTtcbiAgICBjb25zdCB5ID0gc3F1YXJlSWQgJSAxMDtcblxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoZXJlIGFyZSBubyBtb3JlIGJvYXRzIHRvIHBsYWNlIChib2F0IG9mIGxlbmd0aCAyIGJlaW5nIGxhc3QpXG4gICAgaWYgKGJvYXRMZW5ndGggPCAyKSB7XG4gICAgICBwbGF5ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHNob3dCb2F0UHJldmlldyk7XG4gICAgfVxuXG4gICAgaWYgKGlzUGxhY2VtZW50UG9zc2libGUoeCwgeSwgZGlyZWN0aW9uLCBib2F0TGVuZ3RoKSkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2F0TGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBuZWlnaGJvckhvcml6b250YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLWlkLXA9XCIke051bWJlcihzcXVhcmVJZCkgKyBpfVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChuZWlnaGJvckhvcml6b250YWwpIG5laWdoYm9ySG9yaXpvbnRhbC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2F0TGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBuZWlnaGJvclZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS1pZC1wPVwiJHtOdW1iZXIoc3F1YXJlSWQpICsgaiAqIDEwfVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChuZWlnaGJvclZlcnRpY2FsKSBuZWlnaGJvclZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaG92ZXItZXJyb3JcIik7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGJvYXQgcHJldmlldyB3aGVuIG1vdXNlIGxlYXZlcyBzcXVhcmVcbiAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgcmVtb3ZlQm9hdFByZXZpZXcpO1xuICB9XG5cbiAgLy8gUmV0dXJuIGJvb2xlYW4gYmFzZWQgb24gd2hldGhlciBib2F0cyBoYXZlIGJlZW4gc3Vua1xuICBmdW5jdGlvbiBhcmVBbGxCb2F0c1N1bmsoKSB7XG4gICAgLy8gRmlsdGVyIG91dCBhbnkgYm9hdHMgdGhhdCBoYXZlIG5vdCBiZWVuIHN1bmtcbiAgICBjb25zdCBzaGlwc05vdFN1bmsgPSBPYmplY3Qua2V5cyhzaGlwTG9va3VwKS5maWx0ZXIoXG4gICAgICAoa2V5KSA9PiAhc2hpcExvb2t1cFtrZXldLmlzU3VuaygpXG4gICAgKTtcblxuICAgIGlmIChzaGlwc05vdFN1bmsubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHJlY2VpdmVBdHRhY2sgdGFrZXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzXG4gIC8vIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0cyBhIHNoaXAsIGFuZCB0aGVuIHNlbmRzXG4gIC8vIHRoZSAnaGl0JyBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwXG4gIC8vIG9yIHJlY29yZHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdFxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICBjb25zdCBzaG90cyA9IFtdO1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHksIHNxdWFyZUlkKSA9PiB7XG4gICAgaWYgKGJvYXJkW3hdW3ldKSB7XG4gICAgICBjb25zdCBzaGlwQXR0YWNrZWQgPSBib2FyZFt4XVt5XTtcbiAgICAgIGNvbnN0IGhpdFNoaXAgPSBzaGlwTG9va3VwW3NoaXBBdHRhY2tlZF07XG4gICAgICBoaXRTaGlwLmhpdCgpO1xuICAgICAgaW5kaWNhdGVIaXQoc3F1YXJlSWQsIGdhbWVib2FyZElkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoaGl0U2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBjb25zdCBzaGlwU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgYC4ke2dhbWVib2FyZElkZW50aWZpZXJ9LSR7aGl0U2hpcC5zaGlwTmFtZX1gXG4gICAgICAgICk7XG4gICAgICAgIHNoaXBTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwieFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmVBbGxCb2F0c1N1bmsoKSkge1xuICAgICAgICBkaXNwbGF5TW9kYWwoZ2FtZWJvYXJkSWRlbnRpZmllcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goW3gsIHldKTtcbiAgICAgIGluZGljYXRlTWlzcyhzcXVhcmVJZCwgZ2FtZWJvYXJkSWRlbnRpZmllcik7XG4gICAgfVxuICAgIHNob3RzLnB1c2goW3gsIHldKTtcbiAgfTtcblxuICAvLyBDaGVjayBpZiBzaG90IGlzIGF2YWlsYWJsZSB0byB0YWtlIG9yIGlmIHNob3QgaGFzIGFscmVhZHkgYmVlbiBtYWRlXG4gIGZ1bmN0aW9uIGlzU2hvdEF2YWlsYWJsZSh4LCB5KSB7XG4gICAgY29uc3QgY3VycmVudFNob3QgPSBbeCwgeV07XG4gICAgY29uc3QgcHJldmlvdXNTaG90cyA9IHNob3RzO1xuXG4gICAgbGV0IHNob3RGb3VuZDtcbiAgICBpZiAocHJldmlvdXNTaG90cykge1xuICAgICAgc2hvdEZvdW5kID0gcHJldmlvdXNTaG90cy5maW5kKFxuICAgICAgICAoW3ByZXZYLCBwcmV2WV0pID0+IHByZXZYID09PSBjdXJyZW50U2hvdFswXSAmJiBwcmV2WSA9PT0gY3VycmVudFNob3RbMV1cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAhc2hvdEZvdW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJHYW1lYm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIGFyZUFsbEJvYXRzU3VuayxcbiAgICBpc1Nob3RBdmFpbGFibGUsXG4gICAgY2xlYXJHYW1lYm9hcmQsXG4gICAgcGxhY2VTaGlwc01hbnVhbGx5LFxuICAgIHNob3dCb2F0UHJldmlldyxcbiAgICByb3RhdGVTaGlwLFxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBHYW1lLCB7IHJlc2V0R2FtZSB9IGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCB7IGluaXQsIGFkZEdhbWVDb21wb25lbnRzIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgY29uc3QgeyBwbGF5ZXIsIGNvbXB1dGVyLCBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkIH0gPSBHYW1lKCk7XG4gIC8vIGVxOlxuICAvLyBjb25zdCBnYW1lID0gR2FtZSgpO1xuICAvLyBjb25zdCBwbGF5ZXIgPSBnYW1lLnBsYXllcjtcbiAgLy8gY29uc3QgY29tcHV0ZXIgPSBnYW1lLmNvbXB1dGVyO1xuICAvLyBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBnYW1lLnBsYXllckdhbWVib2FyZDtcbiAgLy8gY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBnYW1lLmNvbXB1dGVyR2FtZWJvYXJkO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrYWJsZVNxdWFyZSA9IChlKSA9PiB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzcXVhcmVcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzcXVhcmVJZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRDO1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKHNxdWFyZUlkIC8gMTApO1xuICAgIGNvbnN0IHkgPSBzcXVhcmVJZCAlIDEwO1xuXG4gICAgaWYgKGNvbXB1dGVyR2FtZWJvYXJkLmlzU2hvdEF2YWlsYWJsZSh4LCB5KSkge1xuICAgICAgcGxheWVyLm1ha2VBdHRhY2soeCwgeSwgc3F1YXJlSWQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyLm1ha2VSYW5kb21BdHRhY2soKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9O1xuXG4gIGFkZEdhbWVDb21wb25lbnRzKGhhbmRsZUNsaWNrYWJsZVNxdWFyZSwgcGxheWVyR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCk7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1ib2FyZFwiKTtcbiAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXBzTWFudWFsbHkpO1xuICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHBsYXllckdhbWVib2FyZC5zaG93Qm9hdFByZXZpZXcpO1xuICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoY29tcHV0ZXJHYW1lYm9hcmQpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2Fpbi1idXR0b25cIik7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0R2FtZSgpO1xuICAgIHN0YXJ0R2FtZSgpO1xuICB9KTtcbn1cblxuaW5pdCgpO1xuc3RhcnRHYW1lKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQgeyBzcXVhcmVJZHMgfSBmcm9tIFwiLi9nYW1lYm9hcmQtZG9tLmpzXCI7XG5pbXBvcnQgeyBzZWxlY3RYLCBzZWxlY3RZIH0gZnJvbSBcIi4vcmFuZG9tLXBsYWNlbWVudC1nZW5lcmF0b3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW5lbXlHYW1lYm9hcmQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW5lbXlHYW1lYm9hcmQgPSBlbmVteUdhbWVib2FyZDtcbiAgfVxuXG4gIG1ha2VSYW5kb21BdHRhY2soKSB7XG4gICAgY29uc3QgeCA9IHNlbGVjdFgoKTtcbiAgICBjb25zdCB5ID0gc2VsZWN0WSgpO1xuXG4gICAgaWYgKHRoaXMuZW5lbXlHYW1lYm9hcmQuaXNTaG90QXZhaWxhYmxlKHgsIHkpKSB7XG4gICAgICBjb25zdCBzcXVhcmVJZCA9IHNxdWFyZUlkc1t4XVt5XTtcbiAgICAgIHRoaXMubWFrZUF0dGFjayh4LCB5LCBzcXVhcmVJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFrZVJhbmRvbUF0dGFjaygpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VBdHRhY2soeCwgeSwgc3F1YXJlSWQpIHtcbiAgICB0aGlzLmVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSwgc3F1YXJlSWQpO1xuICB9XG59XG4iLCIvLyBSYW5kb21seSBzZWxlY3QgWCBjb29yZGluYXRlXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0WCgpIHtcbiAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgcmV0dXJuIHg7XG59XG5cbi8vIFJhbmRvbWx5IHNlbGVjdCBZIGNvb3JkaW5hdGVcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RZKCkge1xuICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4geTtcbn1cblxuLy8gUmFuZG9tbHkgc2VsZWN0IHdoZXRoZXIgYm9hdCB3aWxsIGJlIHBsYWNlZCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERpcmVjdGlvbigpIHtcbiAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IHJhbmRvbU51bSA9PT0gMCA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuICByZXR1cm4gZGlyZWN0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgsIG5hbWUpIHtcbiAgY29uc3Qgc2hpcE5hbWUgPSBuYW1lO1xuICBsZXQgaGl0cyA9IDA7XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMgKz0gMTtcbiAgICByZXR1cm4gaGl0cztcbiAgfTtcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdHMgPT09IGxlbmd0aDtcblxuICByZXR1cm4geyBzaGlwTmFtZSwgZ2V0TGVuZ3RoLCBoaXQsIGlzU3VuaywgZ2V0SGl0cyB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9