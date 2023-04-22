/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/key-names.js":
/*!*************************************!*\
  !*** ./src/components/key-names.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keys = [
    {upperEng: '~', lowerEng: '`', upperRus: 'Ё', lowerRus: 'ё'},
    {upperEng: '!', lowerEng: '1', upperRus: '!', lowerRus: '1'},
    {upperEng: '@', lowerEng: '2', upperRus: '"', lowerRus: '2'},
    {upperEng: '#', lowerEng: '3', upperRus: '№', lowerRus: '3'},
    {upperEng: '$', lowerEng: '4', upperRus: ';', lowerRus: '4'},
    {upperEng: '%', lowerEng: '5', upperRus: '%', lowerRus: '5'},
    {upperEng: '^', lowerEng: '6', upperRus: ':', lowerRus: '6'},
    {upperEng: '&', lowerEng: '7', upperRus: '?', lowerRus: '7'},
    {upperEng: '*', lowerEng: '8', upperRus: '*', lowerRus: '8'},
    {upperEng: '(', lowerEng: '9', upperRus: '(', lowerRus: '9'},
    {upperEng: ')', lowerEng: '0', upperRus: ')', lowerRus: '0'},
    {upperEng: '_', lowerEng: '-', upperRus: '_', lowerRus: '-'},
    {upperEng: '+', lowerEng: '=', upperRus: '+', lowerRus: '='},
    {upperEng: 'Backspace', lowerEng: 'Backspace', upperRus: 'Backspace', lowerRus: 'Backspace'},
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ "./src/components/key.js":
/*!*******************************!*\
  !*** ./src/components/key.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _key_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key-names */ "./src/components/key-names.js");




function innerSpan(spanKey, language) {
    const charsList = ['upperEng', 'lowerEng', 'upperRus', 'lowerRus'],
          classes = ['caseDown', 'caseUp', 'caps', 'shiftCaps'];

    for (let i = 0; i < classes.length; i++) {
        const span = document.createElement('span');

        if (language === 'rus') {

            span.classList.add(classes[i]);
            span.classList.add('hidden');
            span.textContent = _key_names__WEBPACK_IMPORTED_MODULE_0__["default"][0][charsList[i % 2 === 0 ? 2 : 3]];
            spanKey.append(span);
        } else if (language === 'eng') {
            span.classList.add(classes[i]);
            span.classList.add('hidden');
            span.textContent = _key_names__WEBPACK_IMPORTED_MODULE_0__["default"][0][charsList[i % 2 === 0 ? 0 : 1]];
            spanKey.append(span);
        }

    }
}

function createKey(chars) {
    const key = document.createElement('div'),
          langRus = document.createElement('span'),
          langEng = document.createElement('span');

    key.classList.add('key');
    key.append(langRus)
    langRus.classList.add('rus');
    langRus.classList.add('hidden');
    key.append(langEng);
    langEng.classList.add('eng');
    langEng.classList.add('hidden');

    innerSpan(langRus, 'rus');
    innerSpan(langEng, 'eng');

    return key;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createKey);

/***/ }),

/***/ "./src/components/keyboard.js":
/*!************************************!*\
  !*** ./src/components/keyboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/components/key.js");




function createKeyboard() {
    const keyboard = document.createElement('div'),
          key = (0,_key__WEBPACK_IMPORTED_MODULE_0__["default"])('o');
    keyboard.classList.add('keyboard');

    keyboard.append(key);


    return keyboard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createKeyboard);
document.createElement('span')

/***/ }),

/***/ "./src/components/textarea.js":
/*!************************************!*\
  !*** ./src/components/textarea.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function createTextarea() {
    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'textarea');
    textarea.setAttribute('rows', '5');
    textarea.setAttribute('cols', '50');
    textarea.classList.add("textarea");

    return textarea;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTextarea);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/textarea */ "./src/components/textarea.js");
/* harmony import */ var _components_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/keyboard */ "./src/components/keyboard.js");



window.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div'),
          textarea = (0,_components_textarea__WEBPACK_IMPORTED_MODULE_0__["default"])(),
          keyboard = (0,_components_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

    container.classList.add('container');
    document.body.append(container);
    container.append(textarea);
    textarea.focus();

    container.append(keyboard);


});




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map