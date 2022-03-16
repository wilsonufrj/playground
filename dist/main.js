/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./playGround.js":
/*!***********************!*\
  !*** ./playGround.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


eval("$(document).ready(function(){\n    \n    let tags = new Tag()\n     $('.card-body').append(tags.builder())\n    \n})\n\nclass Tag{\n    constructor(){\n        this._quantidadeTags = [\"CEPEL\",\"Xlibs\",\"UFRJ\",\"fevereiro\",\"março\"];\n    }\n\n    builder(){\n        let $divTag = $('<div>')\n        let contador = 0;\n        for(let quantidade=0;quantidade<this._quantidadeTags.length;quantidade++){\n            if(quantidade<2){\n                $divTag.append(this._criaTag(this._quantidadeTags[quantidade]));\n            }\n            else{\n                contador++;\n\n            }\n        }\n        $divTag.append(this._criaTag(contador))\n\n        return $divTag;\n    }\n\n     _criaTag(value){\n        let $tag = $(\"<span>\");\n        $tag.addClass(\"badge bg-secondary\");\n        $tag.addClass(\"tagStyle\");\n        if(this._isNumber(value)){\n            $tag.text(\"+\" + value);\n        }\n        else{\n            $tag.text(value);\n        }\n\n        return $tag;\n    }\n\n    _isNumber(value){\n        return typeof value === 'number' && isFinite(value);\n\n    }\n}\n\n\n\n\n\n\n//# sourceURL=webpack://playground/./playGround.js?");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./playGround.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;