/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Example.js":
/*!********************************!*\
  !*** ./src/modules/Example.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


class Example {
  //? 1. describe and create/initiate our object
  constructor() {
    //Verables
    this.events();
  } //?events


  events() {
    let myObj = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
      myObj.ExampleFunction();
    });
  } //? 3. methods (functions)


  ExampleFunction() {
    console.log("Hello world");
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);

/***/ }),

/***/ "./src/modules/HomeHeader.js":
/*!***********************************!*\
  !*** ./src/modules/HomeHeader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


class HomeHeader {
  //? 1. describe and create/initiate our object
  constructor() {
    //Verables
    this.events();
  } //?events


  events() {
    let myObj = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
      myObj.HomeHeaderFunction();
      myObj.slickCarousel();
    });
  } //? 3. methods (functions)


  HomeHeaderFunction() {
    console.log('Hello world');
  } // slick carousel init


  slickCarousel() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.galleryImages').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear'
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#slickNext').click(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.galleryImages').slick('slickNext');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#slickPrev').click(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.galleryImages').slick('slickPrev');
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeHeader);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Example */ "./src/modules/Example.js");
/* harmony import */ var _modules_HomeHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/HomeHeader */ "./src/modules/HomeHeader.js");
// import "../sass/theme.scss";
// Our modules / classes


const MyExample = new _modules_Example__WEBPACK_IMPORTED_MODULE_0__["default"]();
const MyHomeHeader = new _modules_HomeHeader__WEBPACK_IMPORTED_MODULE_1__["default"](); // aos init

AOS.init();
addClassOnScroll(); //? NAv logic
/// add class on scroll

function addClassOnScroll() {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 15) {
      // do something
      $('#mainNav').addClass('isSticky');
    } else {
      $('#mainNav').removeClass('isSticky');
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map