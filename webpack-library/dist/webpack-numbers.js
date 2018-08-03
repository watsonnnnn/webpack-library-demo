(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory(require("lodash"));
	else
		root["webpackNumbers"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: numToWord, wordToNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numToWord\", function() { return numToWord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wordToNum\", function() { return wordToNum; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ref_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ref.json */ \"./src/ref.json\");\nvar _ref_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/Object.assign({}, _ref_json__WEBPACK_IMPORTED_MODULE_1__, {\"default\": _ref_json__WEBPACK_IMPORTED_MODULE_1__});\n\r\n\r\n\r\nfunction numToWord(num) {\r\n  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(_ref_json__WEBPACK_IMPORTED_MODULE_1__, (accum, ref) => {\r\n    return ref.num === num ? ref.word : accum;\r\n  }, '');\r\n}\r\n\r\nfunction wordToNum(word) {\r\n  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(_ref_json__WEBPACK_IMPORTED_MODULE_1__, (accum, ref) => {\r\n    return ref.word === word && word.toLowerCase() ? ref.num : accum;\r\n  }, -1);\r\n}\n\n//# sourceURL=webpack://webpackNumbers/./src/index.js?");

/***/ }),

/***/ "./src/ref.json":
/*!**********************!*\
  !*** ./src/ref.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

eval("module.exports = [{\"num\":1,\"word\":\"One\"},{\"num\":2,\"word\":\"Two\"},{\"num\":3,\"word\":\"Three\"},{\"num\":4,\"word\":\"Four\"},{\"num\":5,\"word\":\"Five\"},{\"num\":0,\"word\":\"Zero\"}];\n\n//# sourceURL=webpack://webpackNumbers/./src/ref.json?");

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","amd":"lodash","root":"_","commonjs2":"lodash"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://webpackNumbers/external_%7B%22commonjs%22:%22lodash%22,%22amd%22:%22lodash%22,%22root%22:%22_%22,%22commonjs2%22:%22lodash%22%7D?");

/***/ })

/******/ });
});