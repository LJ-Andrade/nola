/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ({

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

$('.btnClose').click(function () {
    // $(this).parent().addClass('Hidden');
    $(this).parent().hide();
});

var searchFilters = $('#SearchFilters');
searchFilters.hide();

$('#SearchFiltersBtn').on('click', function () {
    searchFilters.toggle(100);
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
        $('.fixed-if-scroll').addClass('true');
        $('.fixed-if-scroll').removeClass('false');
    } else {
        $('.fixed-if-scroll').removeClass('true');
        $('.fixed-if-scroll').addClass('false');
    }
});

// Prevent ENTER key on forms
$(document).ready(function () {
    if (!allowEnterOnForms) {
        $(document).ready(function () {
            $(window).keydown(function (e) {
                if (event.keyCode == 13) {
                    if (document.activeElement.className == 'trumbowyg-editor') {
                        return;
                    } else {
                        event.preventDefault();
                        return false;
                    }
                }
            });
        });
    } else {
        console.log("EnterKey on forms allowed");
    }
});

/***/ })

/******/ });