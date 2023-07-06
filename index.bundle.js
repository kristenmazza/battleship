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

  const rotateButton = document.querySelector(".rotate");
  rotateButton.addEventListener("click", rotateShip);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSkFBcUQ7QUFDakcsNENBQTRDLGlKQUFvRDtBQUNoRyw0Q0FBNEMseUhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxL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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5REFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7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OUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuU0E7O0FBRXFCO0FBQ3VCO0FBQ087O0FBRXBDO0FBQ2YsVUFBVSx1REFBdUQsRUFBRSxvREFBSTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSwwREFBaUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1EQUFTO0FBQ2I7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNkNBQUk7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7O0FBRStDO0FBQ29COztBQUVwRDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx1RUFBTztBQUNyQixjQUFjLHVFQUFPOztBQUVyQjtBQUNBLHVCQUF1Qix3REFBUztBQUNoQztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC1kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JhbmRvbS1wbGFjZW1lbnQtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvd2FyZ2F0ZS1ub3JtYWwtd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL3dhcmdhdGUtbm9ybWFsLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Jhbi1zb2xpZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuKixcbmh0bWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOnJnYig0MCwgNDAsIDQwKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUyLCAyNTIsIDI1Mik7XG59XG5cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbmhlYWRlciA+IGgxIHtcbiAgICBmb250LWZhbWlseTogJ3dhcmdhdGVub3JtYWwnO1xuICAgIGZvbnQtc2l6ZTogODBweDtcbn1cblxuXG4ubWFpbiB7XG4gIGZsZXg6IDQgMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBnYXA6IDMwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9hcmQtY29udGFpbmVyID4gaDIge1xuICAgICAgZm9udC1mYW1pbHk6ICd3YXJnYXRlbm9ybWFsJztcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI3BsYXllci1ib2FyZCxcbiNjb21wdXRlci1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOSwgOSwgOSk7XG59XG5cbi5jb21wdXRlci1ib2FyZC1pbmFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAxODYsIDE4Nik7XG59XG5cbi5zcXVhcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOSwgOSwgOSk7XG59XG5cbiNjb21wdXRlci1ib2FyZCA+IC5zcXVhcmU6aG92ZXI6bm90KC5oaXQpOm5vdCgubWlzcykge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcbn1cblxuLmJvYXJkLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvb3RlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnAtYm9hdC1tYXJrZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjQsIDY0LCA2NCk7XG59XG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NCwgNjQpO1xufVxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTcsIDIwMCwgMjExKTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLm1vZGFsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lci50YXJnZXQge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4ud2lubmVyLWFubm91bmNlbWVudCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6cmdiKDQwLCA0MCwgNDApO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGxheS1hZ2Fpbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBsYXktYWdhaW4tYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7fVxuXG4uc3F1YXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi54OmFmdGVyIHtcbiAgY29udGVudDogXCJcXFxcMDBkN1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiByZ2IoOSwgOSwgOSk7XG59XG5cblxuLmJvYXQtbGVuZ3RoLXNxdWFyZXMge1xuICBmb250LXNpemU6IDJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAtNXB4O1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGdhcDogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDNweDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3B4O1xufVxuXG4uaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNTMsIDExNSk7XG59XG5cbi5jb29yZGluYXRlLXpvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMzEsIDIzNyk7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICB3aWR0aDogMTUlO1xuICBtaW4td2lkdGg6IDIxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uY29vcmRpbmF0ZS16b25lID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cbi5jb29yZGluYXRlLXpvbmU+YnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XG59XG5cbi5wbGFjZS1zaGlwcy1ub3RpY2Utc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uc2hpcC1uYW1lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmdiKDQwLCA0MCwgNDApO1xufVxuXG4uaG92ZXItZXJyb3Ige1xuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QjswREFDeUQ7RUFDekQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG9EQUFvRDtFQUNwRCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7TUFDTSw0QkFBNEI7TUFDNUIsZUFBZTtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDLENBQUM7O0FBRXBDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IseURBQStDO0FBQ2pEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICd3YXJnYXRlbm9ybWFsJztcXG4gIHNyYzogdXJsKCdmb250cy93YXJnYXRlLW5vcm1hbC13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoJ2ZvbnRzL3dhcmdhdGUtbm9ybWFsLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKixcXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6cmdiKDQwLCA0MCwgNDApO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTIsIDI1MiwgMjUyKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICd3YXJnYXRlbm9ybWFsJztcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbn1cXG5cXG5cXG4ubWFpbiB7XFxuICBmbGV4OiA0IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyID4gaDIge1xcbiAgICAgIGZvbnQtZmFtaWx5OiAnd2FyZ2F0ZW5vcm1hbCc7XFxuICAgICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLFxcbiNjb21wdXRlci1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDksIDksIDkpO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQtaW5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAxODYsIDE4Nik7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDksIDksIDkpO1xcbn1cXG5cXG4jY29tcHV0ZXItYm9hcmQgPiAuc3F1YXJlOmhvdmVyOm5vdCguaGl0KTpub3QoLm1pc3MpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG59XFxuXFxuLmJvYXJkLW5hbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnAtYm9hdC1tYXJrZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCA2NCwgNjQpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDY0LCA2NCk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTcsIDIwMCwgMjExKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lci50YXJnZXQge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi53aW5uZXItYW5ub3VuY2VtZW50IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6cmdiKDQwLCA0MCwgNDApO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnBsYXktYWdhaW4tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ucGxheS1hZ2Fpbi1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO31cXG5cXG4uc3F1YXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi54OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBkN1xcXCI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmdiKDksIDksIDkpO1xcbn1cXG5cXG5cXG4uYm9hdC1sZW5ndGgtc3F1YXJlcyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTVweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI1MywgMTE1KTtcXG59XFxuXFxuLmNvb3JkaW5hdGUtem9uZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMzEsIDIzNyk7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHdpZHRoOiAxNSU7XFxuICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5jb29yZGluYXRlLXpvbmUgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLmNvb3JkaW5hdGUtem9uZT5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbn1cXG5cXG4ucGxhY2Utc2hpcHMtbm90aWNlLXNlY3Rpb24ge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zaGlwLW5hbWUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmdiKDQwLCA0MCwgNDApO1xcbn1cXG5cXG4uaG92ZXItZXJyb3Ige1xcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9iYW4tc29saWQucG5nXFxcIik7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdpdGh1YkltZyBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLW1hcmstMTVweC5wbmdcIjtcblxuZnVuY3Rpb24gY29tcG9uZW50Q29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50SGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUaXRsZSgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDb29yZGluYXRlU2VsZWN0aW9uWm9uZSgpIHtcbiAgY29uc3QgY29vcmRpbmF0ZVNlbGVjdGlvblpvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwbGFjZVNoaXBzTm90aWNlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYWNlU2hpcHNOb3RpY2VTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJwbGFjZS1zaGlwcy1ub3RpY2Utc2VjdGlvblwiKTtcbiAgY29uc3QgcGxhY2VTaGlwc05vdGljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3Qgc2hpcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcGxhY2VTaGlwc05vdGljZS50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBcIjtcbiAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBcImNhcnJpZXJcIjtcbiAgc2hpcE5hbWUuY2xhc3NMaXN0LmFkZChcInNoaXAtbmFtZVwiKTtcbiAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiUm90YXRlXCI7XG4gIGF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZChcInJvdGF0ZVwiKTtcbiAgY29vcmRpbmF0ZVNlbGVjdGlvblpvbmUuYXBwZW5kQ2hpbGQocGxhY2VTaGlwc05vdGljZVNlY3Rpb24pO1xuICBwbGFjZVNoaXBzTm90aWNlU2VjdGlvbi5hcHBlbmRDaGlsZChwbGFjZVNoaXBzTm90aWNlKTtcbiAgcGxhY2VTaGlwc05vdGljZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2hpcE5hbWUpO1xuICBjb29yZGluYXRlU2VsZWN0aW9uWm9uZS5hcHBlbmRDaGlsZChheGlzQnV0dG9uKTtcbiAgY29vcmRpbmF0ZVNlbGVjdGlvblpvbmUuY2xhc3NMaXN0LmFkZChcImNvb3JkaW5hdGUtem9uZVwiKTtcbiAgcmV0dXJuIGNvb3JkaW5hdGVTZWxlY3Rpb25ab25lO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFBsYXllckJvYXJkQ29udGFpbmVyKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gIHJldHVybiBwbGF5ZXJCb2FyZENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29tcHV0ZXJCb2FyZENvbnRhaW5lcigpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVyQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkLWNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGNvbXB1dGVyQm9hcmRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEJvYXJkTmFtZShuYW1lKSB7XG4gIGNvbnN0IGJvYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYm9hcmROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgYm9hcmROYW1lLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1uYW1lXCIpO1xuICByZXR1cm4gYm9hcmROYW1lO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQbGF5ZXJCb2FyZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci1ib2FyZFwiKTtcbiAgcmV0dXJuIHBsYXllckJvYXJkO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQbGF5ZXJHcmlkKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNvbXBvbmVudFBsYXllckJvYXJkKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkLXBcIiwgYCR7aX1gKTtcbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwicC1vY2N1cGllZFwiLCBcImZhbHNlXCIpO1xuICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gIH1cbiAgcmV0dXJuIHBsYXllckJvYXJkO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDb21wdXRlckJvYXJkKCkge1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcHV0ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbXB1dGVyLWJvYXJkXCIpO1xuICByZXR1cm4gY29tcHV0ZXJCb2FyZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29tcHV0ZXJHcmlkKCkge1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gY29tcG9uZW50Q29tcHV0ZXJCb2FyZCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZC1jXCIsIGAke2l9YCk7XG4gICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImMtb2NjdXBpZWRcIiwgXCJmYWxzZVwiKTtcbiAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gIH1cbiAgcmV0dXJuIGNvbXB1dGVyQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgY3JlYXRlZEJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlZEJ5KTtcbiAgY3JlYXRlZEJ5LnRleHRDb250ZW50ID0gXCJjcmVhdGVkIGJ5OiBrcmlzdGVubWF6emFcIjtcblxuICBjb25zdCBnaXRodWJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgZ2l0aHViSW1nLnNyYyA9IEdpdGh1YkltZztcbiAgYS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20va3Jpc3Rlbm1henphXCI7XG4gIGEuYXBwZW5kQ2hpbGQoZ2l0aHViSW1nKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQbGF5QWdhaW5CdXR0b24oKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGxheS1hZ2Fpbi1idXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGFpbmVyXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXItYW5ub3VuY2VtZW50XCIpO1xuICBtb2RhbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgY29uc3QgYnV0dG9uID0gY29tcG9uZW50UGxheUFnYWluQnV0dG9uKCk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIHJldHVybiBtb2RhbENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNvbXBvbmVudENvbnRhaW5lcigpO1xuICBjb25zdCBoZWFkZXIgPSBjb21wb25lbnRIZWFkZXIoKTtcbiAgY29uc3QgdGl0bGUgPSBjb21wb25lbnRUaXRsZSgpO1xuICBjb25zdCBjb29yZGluYXRlU2VsZWN0aW9uWm9uZSA9IGNvbXBvbmVudENvb3JkaW5hdGVTZWxlY3Rpb25ab25lKCk7XG4gIGNvbnN0IG1haW4gPSBjb21wb25lbnRNYWluKCk7XG5cbiAgY29uc3QgZm9vdGVyID0gY29tcG9uZW50Rm9vdGVyKCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvb3JkaW5hdGVTZWxlY3Rpb25ab25lKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb21wdXRlckJvYXJkQ2xpY2thYmxlKCkge1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlci1ib2FyZFwiKTtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcHV0ZXItYm9hcmQtaW5hY3RpdmVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcHV0ZXJCb2FyZEluYWN0aXZlKCkge1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlci1ib2FyZFwiKTtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItYm9hcmQtaW5hY3RpdmVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRHYW1lQ29tcG9uZW50cyhcbiAgaGFuZGxlQ2xpY2thYmxlU3F1YXJlLFxuICBwbGF5ZXJHYW1lYm9hcmQsXG4gIGNvbXB1dGVyR2FtZWJvYXJkXG4pIHtcbiAgY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBjb21wb25lbnRQbGF5ZXJCb2FyZENvbnRhaW5lcigpO1xuICBjb25zdCBjb21wdXRlckJvYXJkQ29udGFpbmVyID0gY29tcG9uZW50Q29tcHV0ZXJCb2FyZENvbnRhaW5lcigpO1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNvbXBvbmVudFBsYXllckdyaWQoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGNvbXBvbmVudENvbXB1dGVyR3JpZCgpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQocGxheWVyQm9hcmRDb250YWluZXIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmRDb250YWluZXIpO1xuICBwbGF5ZXJCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wb25lbnRCb2FyZE5hbWUoXCJZb3VyIFNlYVwiKSk7XG4gIGNvbXB1dGVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50Qm9hcmROYW1lKFwiRW5lbXkgU2VhXCIpKTtcbiAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuICBjb21wdXRlckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbXBvbmVudE1vZGFsKHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQpKTtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyLWJvYXJkXCIpO1xuICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2thYmxlU3F1YXJlKTtcblxuICBjb25zdCBjb29yZGluYXRlWm9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29vcmRpbmF0ZS16b25lXCIpO1xuICBjb29yZGluYXRlWm9uZS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblxuICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1uYW1lXCIpO1xuICBzaGlwTmFtZS50ZXh0Q29udGVudCA9IFwiY2FycmllclwiO1xuXG4gIG1ha2VDb21wdXRlckJvYXJkSW5hY3RpdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyR2FtZUNvbXBvbmVudHMoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cbiAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUluc3RydWN0aW9ucyhib2F0TmFtZURPTSkge1xuICBjb25zdCBib2F0TmFtZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtbmFtZVwiKTtcblxuICBsZXQgbmFtZSA9IGJvYXROYW1lRE9NO1xuICBpZiAobmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIpIHtcbiAgICBuYW1lID0gXCJwYXRyb2wgYm9hdFwiO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBjb29yZGluYXRlWm9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29vcmRpbmF0ZS16b25lXCIpO1xuICAgIGNvb3JkaW5hdGVab25lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBib2F0TmFtZVRleHQudGV4dENvbnRlbnQgPSBuYW1lO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IHsgY2xlYXJHYW1lQ29tcG9uZW50cyB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSGl0SW5kaWNhdG9yLCByZW1vdmVNaXNzSW5kaWNhdG9yIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLWRvbS5qc1wiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZChcInBcIik7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKFwiY1wiKTtcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihcIkZyaWVuZGx5IFNlYXNcIiwgY29tcHV0ZXJHYW1lYm9hcmQpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoXCJFbmVteSBTZWFzXCIsIHBsYXllckdhbWVib2FyZCk7XG5cbiAgcmV0dXJuIHsgcGxheWVyR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCwgcGxheWVyLCBjb21wdXRlciB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICByZW1vdmVIaXRJbmRpY2F0b3IoKTtcbiAgcmVtb3ZlTWlzc0luZGljYXRvcigpO1xuICBjbGVhckdhbWVDb21wb25lbnRzKCk7XG59IiwiLy8gQ2VsbCBsb29rdXBcbmV4cG9ydCBjb25zdCBzcXVhcmVJZHMgPSBbXG4gIFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl0sXG4gIFtcIjEwXCIsIFwiMTFcIiwgXCIxMlwiLCBcIjEzXCIsIFwiMTRcIiwgXCIxNVwiLCBcIjE2XCIsIFwiMTdcIiwgXCIxOFwiLCBcIjE5XCJdLFxuICBbXCIyMFwiLCBcIjIxXCIsIFwiMjJcIiwgXCIyM1wiLCBcIjI0XCIsIFwiMjVcIiwgXCIyNlwiLCBcIjI3XCIsIFwiMjhcIiwgXCIyOVwiXSxcbiAgW1wiMzBcIiwgXCIzMVwiLCBcIjMyXCIsIFwiMzNcIiwgXCIzNFwiLCBcIjM1XCIsIFwiMzZcIiwgXCIzN1wiLCBcIjM4XCIsIFwiMzlcIl0sXG4gIFtcIjQwXCIsIFwiNDFcIiwgXCI0MlwiLCBcIjQzXCIsIFwiNDRcIiwgXCI0NVwiLCBcIjQ2XCIsIFwiNDdcIiwgXCI0OFwiLCBcIjQ5XCJdLFxuICBbXCI1MFwiLCBcIjUxXCIsIFwiNTJcIiwgXCI1M1wiLCBcIjU0XCIsIFwiNTVcIiwgXCI1NlwiLCBcIjU3XCIsIFwiNThcIiwgXCI1OVwiXSxcbiAgW1wiNjBcIiwgXCI2MVwiLCBcIjYyXCIsIFwiNjNcIiwgXCI2NFwiLCBcIjY1XCIsIFwiNjZcIiwgXCI2N1wiLCBcIjY4XCIsIFwiNjlcIl0sXG4gIFtcIjcwXCIsIFwiNzFcIiwgXCI3MlwiLCBcIjczXCIsIFwiNzRcIiwgXCI3NVwiLCBcIjc2XCIsIFwiNzdcIiwgXCI3OFwiLCBcIjc5XCJdLFxuICBbXCI4MFwiLCBcIjgxXCIsIFwiODJcIiwgXCI4M1wiLCBcIjg0XCIsIFwiODVcIiwgXCI4NlwiLCBcIjg3XCIsIFwiODhcIiwgXCI4OVwiXSxcbiAgW1wiOTBcIiwgXCI5MVwiLCBcIjkyXCIsIFwiOTNcIiwgXCI5NFwiLCBcIjk1XCIsIFwiOTZcIiwgXCI5N1wiLCBcIjk4XCIsIFwiOTlcIl0sXG5dO1xuXG4vLyBQbGFjZSBzaGlwcyBvbiBET01cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXBEb20oXG4gIGNvb3JkLFxuICBkaXJlY3Rpb24sXG4gIGxlbmd0aCxcbiAgZ2FtZWJvYXJkSWRlbnRpZmllcixcbiAgc2hpcE5hbWVcbikge1xuICBsZXQgc3F1YXJlSWQ7XG4gIGxldCBlbGVtZW50O1xuICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNxdWFyZUlkID0gc3F1YXJlSWRzW2Nvb3JkWzBdXVtjb29yZFsxXSArIGldO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1pZC0ke2dhbWVib2FyZElkZW50aWZpZXJ9PScke3NxdWFyZUlkfSddYFxuICAgICAgKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtnYW1lYm9hcmRJZGVudGlmaWVyfS1ib2F0LW1hcmtlcmApO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2dhbWVib2FyZElkZW50aWZpZXJ9LSR7c2hpcE5hbWV9YCk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgJHtnYW1lYm9hcmRJZGVudGlmaWVyfS1vY2N1cGllZGAsIFwidHJ1ZVwiKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBzcXVhcmVJZCA9IHNxdWFyZUlkc1tjb29yZFswXSArIGpdW2Nvb3JkWzFdXTtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtaWQtJHtnYW1lYm9hcmRJZGVudGlmaWVyfT0nJHtzcXVhcmVJZH0nXWBcbiAgICAgICk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Z2FtZWJvYXJkSWRlbnRpZmllcn0tYm9hdC1tYXJrZXJgKTtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtnYW1lYm9hcmRJZGVudGlmaWVyfS0ke3NoaXBOYW1lfWApO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYCR7Z2FtZWJvYXJkSWRlbnRpZmllcn0tb2NjdXBpZWRgLCBcInRydWVcIik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRpY2F0ZUhpdChzcXVhcmVJZCwgZ2FtZWJvYXJkSWRlbnRpZmllcikge1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS1pZC0ke2dhbWVib2FyZElkZW50aWZpZXJ9PScke3NxdWFyZUlkfSddYFxuICApO1xuICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGljYXRlTWlzcyhzcXVhcmVJZCwgZ2FtZWJvYXJkSWRlbnRpZmllcikge1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS1pZC0ke2dhbWVib2FyZElkZW50aWZpZXJ9PScke3NxdWFyZUlkfSddYFxuICApO1xuICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG59XG5cbmZ1bmN0aW9uIGluZGljYXRlV2lubmVyKGdhbWVib2FyZElkZW50aWZpZXIpIHtcbiAgY29uc3Qgd2lubmVyID0gZ2FtZWJvYXJkSWRlbnRpZmllciA9PT0gXCJwXCIgPyBcIkVuZW15XCIgOiBcIllvdVwiO1xuICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItYW5ub3VuY2VtZW50XCIpO1xuICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gYCR7d2lubmVyfSB3b24hYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNb2RhbChnYW1lYm9hcmRJZGVudGlmaWVyKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250YWluZXJcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0YXJnZXRcIik7XG4gIGluZGljYXRlV2lubmVyKGdhbWVib2FyZElkZW50aWZpZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSGl0SW5kaWNhdG9yKCkge1xuICBjb25zdCBoaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaXRcIik7XG4gIEFycmF5LmZyb20oaGl0cykuZm9yRWFjaCgoaGl0KSA9PiBoaXQuY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNaXNzSW5kaWNhdG9yKCkge1xuICBjb25zdCBtaXNzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1pc3NcIik7XG4gIEFycmF5LmZyb20obWlzc2VzKS5mb3JFYWNoKChtaXNzKSA9PiBtaXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXNzXCIpKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5cbmltcG9ydCB7IGRpc3BsYXlJbnN0cnVjdGlvbnMsIG1ha2VDb21wdXRlckJvYXJkQ2xpY2thYmxlIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQge1xuICBwbGFjZVNoaXBEb20sXG4gIGluZGljYXRlSGl0LFxuICBpbmRpY2F0ZU1pc3MsXG4gIGRpc3BsYXlNb2RhbCxcbn0gZnJvbSBcIi4vZ2FtZWJvYXJkLWRvbS5qc1wiO1xuaW1wb3J0IHtcbiAgc2VsZWN0WCxcbiAgc2VsZWN0WSxcbiAgc2VsZWN0RGlyZWN0aW9uLFxufSBmcm9tIFwiLi9yYW5kb20tcGxhY2VtZW50LWdlbmVyYXRvci5qc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoZ2FtZWJvYXJkSWRlbnRpZmllcikge1xuICBjb25zdCBib2FyZCA9IG5ldyBBcnJheSgxMCkuZmlsbChudWxsKTtcblxuICAvLyBDcmVhdGUgZ2FtZWJvYXJkIDJEIGFycmF5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICB9XG5cbiAgLy8gU2hpcCBsb29rdXAgdG8gcmV0cmlldmUgdmFyaWFibGUgZnJvbSBzdHJpbmcgbmFtZVxuICBjb25zdCBzaGlwTG9va3VwID0ge307XG5cbiAgZnVuY3Rpb24gaXNQbGFjZW1lbnRQb3NzaWJsZSh4LCB5LCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgIC8vIElmIHRoZSBib2F0IGRvZXMgbm90IGZpdCBvbiB0aGUgYm9hcmQsIHJldHVybiBmYWxzZVxuICAgIGlmIChcbiAgICAgIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmIHkgKyBsZW5ndGggLSAxID49IDEwKSB8fFxuICAgICAgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHggKyBsZW5ndGggLSAxID49IDEwKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIGhvcml6b250YWwgYm9hdCBmaXRzIG9uIHRoZSBib2FyZCwgcmV0dXJuIGZhbHNlIGlmIG9uZSBvZiB0aGUgc3F1YXJlcyBpcyBhbHJlYWR5IHRha2VuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiYgeSArIGxlbmd0aCAtIDEgPCAxMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYm9hcmRbeF1beSArIGldKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdmVydGljYWwgYm9hdCBmaXRzIG9uIHRoZSBib2FyZCwgcmV0dXJuIGZhbHNlIGlmIG9uZSBvZiB0aGUgc3F1YXJlcyBpcyBhbHJlYWR5IHRha2VuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHggKyBsZW5ndGggLSAxIDwgMTApIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkW3ggKyBqXVt5XSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFJhbmRvbWx5IHBsYWNlIGdpdmVuIHNoaXAgaW4gdGhlIDJEIGdhbWVib2FyZCBhcnJheVxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCkge1xuICAgIGNvbnN0IHggPSBzZWxlY3RYKCk7XG4gICAgY29uc3QgeSA9IHNlbGVjdFkoKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBzZWxlY3REaXJlY3Rpb24oKTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGlzUGxhY2VtZW50UG9zc2libGUoeCwgeSwgZGlyZWN0aW9uLCBsZW5ndGgpKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbeF1beSArIGldID0gc2hpcC5zaGlwTmFtZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbeCArIGpdW3ldID0gc2hpcC5zaGlwTmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gQWRkIHNoaXAgdG8gc2hpcExvb2t1cFxuICAgICAgc2hpcExvb2t1cFtzaGlwLnNoaXBOYW1lXSA9IHNoaXA7XG4gICAgICBwbGFjZVNoaXBEb20oXG4gICAgICAgIFt4LCB5XSxcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGdhbWVib2FyZElkZW50aWZpZXIsXG4gICAgICAgIHNoaXAuc2hpcE5hbWVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWNlU2hpcChzaGlwKTtcbiAgICB9XG4gIH1cblxuICAvLyBQbGFjZSBzaGlwcyByYW5kb21seSBvbiBhIGdpdmVuIGdhbWVib2FyZFxuICBmdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkoc2VsZWN0ZWRHYW1lYm9hcmQpIHtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCBcImNhcnJpZXJcIik7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgXCJiYXR0bGVzaGlwXCIpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMywgXCJkZXN0cm95ZXJcIik7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCBcInN1Ym1hcmluZVwiKTtcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyLCBcInBhdHJvbEJvYXRcIik7XG5cbiAgICBzZWxlY3RlZEdhbWVib2FyZC5wbGFjZVNoaXAoY2Fycmllcik7XG4gICAgc2VsZWN0ZWRHYW1lYm9hcmQucGxhY2VTaGlwKGJhdHRsZXNoaXApO1xuICAgIHNlbGVjdGVkR2FtZWJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIpO1xuICAgIHNlbGVjdGVkR2FtZWJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUpO1xuICAgIHNlbGVjdGVkR2FtZWJvYXJkLnBsYWNlU2hpcChwYXRyb2xCb2F0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBsYXllckJvYXRzKCkge1xuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwKDUsIFwiY2FycmllclwiKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCBcImJhdHRsZXNoaXBcIik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzLCBcImRlc3Ryb3llclwiKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMsIFwic3VibWFyaW5lXCIpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBTaGlwKDIsIFwicGF0cm9sQm9hdFwiKTtcblxuICAgIHJldHVybiB7IGNhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0IH07XG4gIH1cblxuICAvLyBSb3RhdGUgbWFudWFsbHkgcGxhY2VkIHNoaXBzIG9uIGNsaWNrIG9mIHJvdGF0ZSBidXR0b25cbiAgbGV0IGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICBmdW5jdGlvbiByb3RhdGVTaGlwKCkge1xuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgfVxuXG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlXCIpO1xuICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZVNoaXApO1xuXG4gIC8vIFBsYWNlIHBsYXllciBzaGlwcyBvbiBjbGlja1xuICBsZXQgayA9IDA7XG4gIGxldCBib2F0TGVuZ3RoID0gNTtcbiAgZnVuY3Rpb24gcGxhY2VTaGlwc01hbnVhbGx5KGUpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLWJvYXJkXCIpO1xuICAgIGNvbnN0IHBsYXllckJvYXRzID0gY3JlYXRlUGxheWVyQm9hdHMoKTtcbiAgICBjb25zdCBib2F0TmFtZSA9IGAke09iamVjdC5rZXlzKHBsYXllckJvYXRzKVtrXX1gO1xuICAgIGNvbnN0IGJvYXROYW1lRE9NID0gYCR7T2JqZWN0LmtleXMocGxheWVyQm9hdHMpW2sgKyAxXX1gO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gZS50YXJnZXQuZGF0YXNldC5pZFA7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3Ioc3F1YXJlSWQgLyAxMCk7XG4gICAgY29uc3QgeSA9IHNxdWFyZUlkICUgMTA7XG4gICAgY29uc3QgbGVuZ3RoID0gcGxheWVyQm9hdHNbYm9hdE5hbWVdLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzcXVhcmVcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNQbGFjZW1lbnRQb3NzaWJsZSh4LCB5LCBkaXJlY3Rpb24sIGxlbmd0aCkpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYm9hcmRbeF1beSArIGldID0gYm9hdE5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgYm9hcmRbeCArIGpdW3ldID0gYm9hdE5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGsgKz0gMTtcbiAgICAgICAgYm9hdExlbmd0aCA9IGJvYXROYW1lID09PSBcImRlc3Ryb3llclwiID8gbGVuZ3RoIDogbGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKGJvYXRMZW5ndGggPCAyKSBib2F0TGVuZ3RoID0gMDtcbiAgICAgICAgZGlzcGxheUluc3RydWN0aW9ucyhib2F0TmFtZURPTSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBzaGlwIHRvIHNoaXBMb29rdXBcbiAgICAgIHNoaXBMb29rdXBbYm9hdE5hbWVdID0gcGxheWVyQm9hdHNbYm9hdE5hbWVdO1xuICAgICAgcGxhY2VTaGlwRG9tKFt4LCB5XSwgZGlyZWN0aW9uLCBsZW5ndGgsIGdhbWVib2FyZElkZW50aWZpZXIsIGJvYXROYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoayA9PT0gNSkge1xuICAgICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlU2hpcHNNYW51YWxseSk7XG4gICAgICBtYWtlQ29tcHV0ZXJCb2FyZENsaWNrYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlbW92ZSBib2F0IHByZXZpZXcgKGhvdmVyIGFuZCBob3Zlci1lcnJvciBjbGFzc2VzKVxuICBmdW5jdGlvbiByZW1vdmVCb2F0UHJldmlldygpIHtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG92ZXJcIikpLmZvckVhY2goKGVsKSA9PlxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpXG4gICAgKTtcblxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3Zlci1lcnJvclwiKSkuZm9yRWFjaCgoZWwpID0+XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXItZXJyb3JcIilcbiAgICApO1xuICB9XG5cbiAgLy8gU2hvdyBib2F0IHByZXZpZXcgb24gaG92ZXJcbiAgZnVuY3Rpb24gc2hvd0JvYXRQcmV2aWV3KGUpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLWJvYXJkXCIpO1xuICAgIGNvbnN0IHNxdWFyZUlkID0gZS50YXJnZXQuZGF0YXNldC5pZFA7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3Ioc3F1YXJlSWQgLyAxMCk7XG4gICAgY29uc3QgeSA9IHNxdWFyZUlkICUgMTA7XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGVyZSBhcmUgbm8gbW9yZSBib2F0cyB0byBwbGFjZSAoYm9hdCBvZiBsZW5ndGggMiBiZWluZyBsYXN0KVxuICAgIGlmIChib2F0TGVuZ3RoIDwgMikge1xuICAgICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBzaG93Qm9hdFByZXZpZXcpO1xuICAgIH1cblxuICAgIGlmIChpc1BsYWNlbWVudFBvc3NpYmxlKHgsIHksIGRpcmVjdGlvbiwgYm9hdExlbmd0aCkpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hdExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgbmVpZ2hib3JIb3Jpem9udGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS1pZC1wPVwiJHtOdW1iZXIoc3F1YXJlSWQpICsgaX1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAobmVpZ2hib3JIb3Jpem9udGFsKSBuZWlnaGJvckhvcml6b250YWwuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hdExlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgY29uc3QgbmVpZ2hib3JWZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEtaWQtcD1cIiR7TnVtYmVyKHNxdWFyZUlkKSArIGogKiAxMH1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAobmVpZ2hib3JWZXJ0aWNhbCkgbmVpZ2hib3JWZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyLWVycm9yXCIpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBib2F0IHByZXZpZXcgd2hlbiBtb3VzZSBsZWF2ZXMgc3F1YXJlXG4gICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHJlbW92ZUJvYXRQcmV2aWV3KTtcbiAgfVxuXG4gIC8vIFJldHVybiBib29sZWFuIGJhc2VkIG9uIHdoZXRoZXIgYm9hdHMgaGF2ZSBiZWVuIHN1bmtcbiAgZnVuY3Rpb24gYXJlQWxsQm9hdHNTdW5rKCkge1xuICAgIC8vIEZpbHRlciBvdXQgYW55IGJvYXRzIHRoYXQgaGF2ZSBub3QgYmVlbiBzdW5rXG4gICAgY29uc3Qgc2hpcHNOb3RTdW5rID0gT2JqZWN0LmtleXMoc2hpcExvb2t1cCkuZmlsdGVyKFxuICAgICAgKGtleSkgPT4gIXNoaXBMb29rdXBba2V5XS5pc1N1bmsoKVxuICAgICk7XG5cbiAgICBpZiAoc2hpcHNOb3RTdW5rLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyByZWNlaXZlQXR0YWNrIHRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lc1xuICAvLyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdHMgYSBzaGlwLCBhbmQgdGhlbiBzZW5kc1xuICAvLyB0aGUgJ2hpdCcgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcFxuICAvLyBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3RcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXTtcbiAgY29uc3Qgc2hvdHMgPSBbXTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5LCBzcXVhcmVJZCkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XSkge1xuICAgICAgY29uc3Qgc2hpcEF0dGFja2VkID0gYm9hcmRbeF1beV07XG4gICAgICBjb25zdCBoaXRTaGlwID0gc2hpcExvb2t1cFtzaGlwQXR0YWNrZWRdO1xuICAgICAgaGl0U2hpcC5oaXQoKTtcbiAgICAgIGluZGljYXRlSGl0KHNxdWFyZUlkLCBnYW1lYm9hcmRJZGVudGlmaWVyKTtcblxuICAgICAgaWYgKGhpdFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgY29uc3Qgc2hpcFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIGAuJHtnYW1lYm9hcmRJZGVudGlmaWVyfS0ke2hpdFNoaXAuc2hpcE5hbWV9YFxuICAgICAgICApO1xuICAgICAgICBzaGlwU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInhcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJlQWxsQm9hdHNTdW5rKCkpIHtcbiAgICAgICAgZGlzcGxheU1vZGFsKGdhbWVib2FyZElkZW50aWZpZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtaXNzZWRTaG90cy5wdXNoKFt4LCB5XSk7XG4gICAgICBpbmRpY2F0ZU1pc3Moc3F1YXJlSWQsIGdhbWVib2FyZElkZW50aWZpZXIpO1xuICAgIH1cbiAgICBzaG90cy5wdXNoKFt4LCB5XSk7XG4gIH07XG5cbiAgLy8gQ2hlY2sgaWYgc2hvdCBpcyBhdmFpbGFibGUgdG8gdGFrZSBvciBpZiBzaG90IGhhcyBhbHJlYWR5IGJlZW4gbWFkZVxuICBmdW5jdGlvbiBpc1Nob3RBdmFpbGFibGUoeCwgeSkge1xuICAgIGNvbnN0IGN1cnJlbnRTaG90ID0gW3gsIHldO1xuICAgIGNvbnN0IHByZXZpb3VzU2hvdHMgPSBzaG90cztcblxuICAgIGxldCBzaG90Rm91bmQ7XG4gICAgaWYgKHByZXZpb3VzU2hvdHMpIHtcbiAgICAgIHNob3RGb3VuZCA9IHByZXZpb3VzU2hvdHMuZmluZChcbiAgICAgICAgKFtwcmV2WCwgcHJldlldKSA9PiBwcmV2WCA9PT0gY3VycmVudFNob3RbMF0gJiYgcHJldlkgPT09IGN1cnJlbnRTaG90WzFdXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gIXNob3RGb3VuZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyR2FtZWJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICBhcmVBbGxCb2F0c1N1bmssXG4gICAgaXNTaG90QXZhaWxhYmxlLFxuICAgIGNsZWFyR2FtZWJvYXJkLFxuICAgIHBsYWNlU2hpcHNNYW51YWxseSxcbiAgICBzaG93Qm9hdFByZXZpZXcsXG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEdhbWUsIHsgcmVzZXRHYW1lIH0gZnJvbSBcIi4vZ2FtZS5qc1wiO1xuaW1wb3J0IHsgaW5pdCwgYWRkR2FtZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBjb25zdCB7IHBsYXllciwgY29tcHV0ZXIsIHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQgfSA9IEdhbWUoKTtcbiAgLy8gZXE6XG4gIC8vIGNvbnN0IGdhbWUgPSBHYW1lKCk7XG4gIC8vIGNvbnN0IHBsYXllciA9IGdhbWUucGxheWVyO1xuICAvLyBjb25zdCBjb21wdXRlciA9IGdhbWUuY29tcHV0ZXI7XG4gIC8vIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWUucGxheWVyR2FtZWJvYXJkO1xuICAvLyBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGdhbWUuY29tcHV0ZXJHYW1lYm9hcmQ7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2thYmxlU3F1YXJlID0gKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNxdWFyZVwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNxdWFyZUlkID0gZS50YXJnZXQuZGF0YXNldC5pZEM7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3Ioc3F1YXJlSWQgLyAxMCk7XG4gICAgY29uc3QgeSA9IHNxdWFyZUlkICUgMTA7XG5cbiAgICBpZiAoY29tcHV0ZXJHYW1lYm9hcmQuaXNTaG90QXZhaWxhYmxlKHgsIHkpKSB7XG4gICAgICBwbGF5ZXIubWFrZUF0dGFjayh4LCB5LCBzcXVhcmVJZCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29tcHV0ZXIubWFrZVJhbmRvbUF0dGFjaygpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgYWRkR2FtZUNvbXBvbmVudHMoaGFuZGxlQ2xpY2thYmxlU3F1YXJlLCBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkKTtcblxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWJvYXJkXCIpO1xuICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcHNNYW51YWxseSk7XG4gIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgcGxheWVyR2FtZWJvYXJkLnNob3dCb2F0UHJldmlldyk7XG4gIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShjb21wdXRlckdhbWVib2FyZCk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWFnYWluLWJ1dHRvblwiKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVzZXRHYW1lKCk7XG4gICAgc3RhcnRHYW1lKCk7XG4gIH0pO1xufVxuXG5pbml0KCk7XG5zdGFydEdhbWUoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5cbmltcG9ydCB7IHNxdWFyZUlkcyB9IGZyb20gXCIuL2dhbWVib2FyZC1kb20uanNcIjtcbmltcG9ydCB7IHNlbGVjdFgsIHNlbGVjdFkgfSBmcm9tIFwiLi9yYW5kb20tcGxhY2VtZW50LWdlbmVyYXRvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbmVteUdhbWVib2FyZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbmVteUdhbWVib2FyZCA9IGVuZW15R2FtZWJvYXJkO1xuICB9XG5cbiAgbWFrZVJhbmRvbUF0dGFjaygpIHtcbiAgICBjb25zdCB4ID0gc2VsZWN0WCgpO1xuICAgIGNvbnN0IHkgPSBzZWxlY3RZKCk7XG5cbiAgICBpZiAodGhpcy5lbmVteUdhbWVib2FyZC5pc1Nob3RBdmFpbGFibGUoeCwgeSkpIHtcbiAgICAgIGNvbnN0IHNxdWFyZUlkID0gc3F1YXJlSWRzW3hdW3ldO1xuICAgICAgdGhpcy5tYWtlQXR0YWNrKHgsIHksIHNxdWFyZUlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYWtlUmFuZG9tQXR0YWNrKCk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUF0dGFjayh4LCB5LCBzcXVhcmVJZCkge1xuICAgIHRoaXMuZW5lbXlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5LCBzcXVhcmVJZCk7XG4gIH1cbn1cbiIsIi8vIFJhbmRvbWx5IHNlbGVjdCBYIGNvb3JkaW5hdGVcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RYKCkge1xuICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4geDtcbn1cblxuLy8gUmFuZG9tbHkgc2VsZWN0IFkgY29vcmRpbmF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFkoKSB7XG4gIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIHJldHVybiB5O1xufVxuXG4vLyBSYW5kb21seSBzZWxlY3Qgd2hldGhlciBib2F0IHdpbGwgYmUgcGxhY2VkIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RGlyZWN0aW9uKCkge1xuICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgY29uc3QgZGlyZWN0aW9uID0gcmFuZG9tTnVtID09PSAwID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG4gIHJldHVybiBkaXJlY3Rpb247XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCwgbmFtZSkge1xuICBjb25zdCBzaGlwTmFtZSA9IG5hbWU7XG4gIGxldCBoaXRzID0gMDtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICAgIHJldHVybiBoaXRzO1xuICB9O1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0cyA9PT0gbGVuZ3RoO1xuXG4gIHJldHVybiB7IHNoaXBOYW1lLCBnZXRMZW5ndGgsIGhpdCwgaXNTdW5rLCBnZXRIaXRzIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=