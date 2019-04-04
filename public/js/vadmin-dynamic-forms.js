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
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ({

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 81:
/***/ (function(module, exports) {

/*
|--------------------------------------------------------------------------
| SERIALIZABLE LIST UPDATER
|--------------------------------------------------------------------------
*/

// Changes values from columns of a list.
// -------------------------------------------
window.dataSetter = function (fields) {
    var row = $('.SerializableItem');
    items = [];

    $(row).each(function () {
        // This is the row id
        var id = $(this).data('id');

        item = {};
        // Store row id in array
        item['id'] = id;

        item['fields'] = {};
        // Store columns data in array
        for (var i = 0; i < fields.length; i++) {
            var field = $(this).children(fields[i]).children('input').data('field');
            item['fields'][field] = $(this).children(fields[i]).children('input').val();
        }

        // Push row with cols data to array
        items.push(item);
    });
    // First row

    // Debug Table Log
    // All rows
    //for(let i = 0; i < items.length; i++ ){
    //    console.table(items[i]['fields']);
    //}
};

$(document).ready(function () {
    $(document).on("click", "#UpdateList", function () {
        if (items == undefined || items == '' || items == null) {
            alert_error("", "Aún no se realizaron cambios");
        } else {
            var route = $(this).data("route");
            updateList(items, route);
        }
    });
});

function updateList(items, route) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { data: items },
        success: function success(data) {
            console.log(data);
            alert_ok('OK!', 'Items actualizados');
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            // alert_error("", "Ha ingresado un dato incorrecto. Solo puede ingresar números enteros positivos.");
            console.log("Error en updateList()");
            console.log(data);
        }
    });
}

/***/ })

/******/ });