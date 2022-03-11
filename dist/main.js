/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./playGround.js":
/*!***********************!*\
  !*** ./playGround.js ***!
  \***********************/
/***/ (() => {

eval("let quantidadeTags = [\"CEPEL\",\"Xlibs\",\"UFRJ\",\"fevereiro\",\"março\",\"Catastrofe\"]\n\n$(document).ready(function(){\n    \n    let contador = 0;\n    for(let quantidade=0;quantidade<quantidadeTags.length;quantidade++){\n        if(quantidade<2){\n            $('.card-body').append(criaTag(quantidadeTags[quantidade]));\n        }\n        else{\n            contador++;\n        }\n    }\n    $('.card-body').append(criaTag(contador));\n    \n})\n\n\nfunction criaTag(value){\n    let $tag = $(\"<span>\");\n    $tag.addClass(\"badge bg-secondary\");\n    $tag.addClass(\"tagStyle\");\n    if(isNumber(value)){\n        $tag.text(\"+\" + value);\n    }\n    else{\n        $tag.text(value);\n    }\n\n    return $tag;\n\n}\n\n//Cookbook javaScrpit\nfunction isNumber(value){\n    return typeof value === 'number' && isFinite(value);\n}\n\n\n\n\n//# sourceURL=webpack://playground/./playGround.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./playGround.js"]();
/******/ 	
/******/ })()
;