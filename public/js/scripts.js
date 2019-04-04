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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ({

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// Loaders
// -------------------------------------------
$(".loader-on-change").on('change', function () {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$(".loader-on-submit").on('submit', function () {
    $('#full-loader').removeClass('Hidden');
    return true;
});

$('.dont-submit-on-enter, .dson').keypress(function (e) {
    console.log("ENTER");
    if (e.which == 13) return false;
    if (e.which == 13) e.preventDefault();
});

// Modify cart item quantity 
// -------------------------------------------
$('.InputBtnQ').on('change keyup', function () {
    //  Original Article Price
    var value = $(this).siblings('.ArticlePrice').val();
    // Quantity
    var quantity = $(this).val();
    // Ner Value
    var newValue = value * quantity;
    // New Price Target
    var newPriceTarget = $(this).parent().parent().parent().siblings('.TotalItemPrice');

    console.log(value, quantity, newValue);
    modifyCartItemQ($(this), newPriceTarget, newValue);
});

function modifyCartItemQ(e, newPriceTarget, newValue) {
    e.siblings('.InputBtnQ').removeClass('Hidden');
    newPriceTarget.html('$ ' + newValue);
}

// Checkout sidebar
// -------------------------------------------		
window.checkoutSidebar = function (state) {

    var sidebar = $('.CheckoutCart');
    var wrapper = $('.main-wrapper');

    // Check if layout need to be fixed in order to not have squished cols.
    var fixListLayout = false;
    if ($(window).width() < 1645 && $(window).width() > 1200) fixListLayout = true;

    var show = function show() {
        // New cart sidebar
        sidebar.addClass('active');
        wrapper.addClass('allow-sidebar');
        if (fixListLayout) $('.articles-container .article').removeClass('col-xl-2').addClass('col-xl-3');
    };

    var hide = function hide() {
        // New cart sidebar
        sidebar.removeClass('active');
        wrapper.removeClass('allow-sidebar');
        if (fixListLayout) $('.articles-container .article').addClass('col-xl-2').removeClass('col-xl-3');
    };

    if (state == undefined) {
        if (sidebar.hasClass('active')) {
            hide();
        } else {
            show();
        }
    } else if (state == 'show') {
        show();
        return false;
    } else if (state == 'hide') {
        hide();
        return false;
    }
};

window.openCheckoutDesktop = function () {
    if ($(window).width() > 768) {
        checkoutSidebar('show');
    }
    return false;
};

// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();

//     if (scroll > 125) {
//         $('.checkout-cart').addClass('scrolled');
//     }
//     else {
//         $('.checkout-cart').removeClass('scrolled');
//     }
// });


// Sidebar checkout absolute
// window.checkoutSidebar = function (action) {
//     if (action == 'open') {
//         $('#SideContainer').toggle(100);
//         $('#MainOverlay').fadeIn(100);
//     }
//     if (action == 'close') {
//         $('#SideContainer').toggle(100);
//         $('#MainOverlay').fadeOut(100);
//     }
// }

// $('#MainOverlay').click(function () {
//     checkoutSidebar("close");
// });

// window.openFilters = function () {
//     const filters = $('#SearchFilters');
//     if (filters.css('display') == 'none') {
//         filters.css('display', 'inherit');
//     }
//     else {
//         filters.css('display', 'none');
//     }
// }


window.openFilters = function () {
    var filters = $('#SearchFilters');
    var trigger = $('#SearchFiltersTrigger');
    if (filters.hasClass('active')) {
        filters.removeClass('active');
        trigger.show();
    } else {
        filters.addClass('active');
        trigger.hide();
    }
};

// Hide alerts
// -------------------------------------------
// setTimeout(function(){
//     $('.alert').hide(100);
// }, 4000);


// Cart Resumen
// -------------------------------------------

// window.showCartResumeMobile = function()
// {
//     $('.cart-resume-details-mobile').toggleClass('Hidden', 100);
// }

/*
|--------------------------------------------------------------------------
| CART
|--------------------------------------------------------------------------
*/

// Check Stock 
window.checkSizeStock = function (route, articleId, size) {
    // console.log(route + " | " + articleId + " | " + size);
    var submitButton = $('#AddToCartFormBtn');
    $.ajax({
        url: route,
        method: 'GET',
        dataType: 'JSON',
        data: { articleId: articleId, size: size },
        success: function success(data) {
            console.log(data);
            if (data.stock > 0) {
                $('.AvailableStock').html("Stock disponible: " + data.stock);
                submitButton.prop('disabled', false);
            } else if (data.stock <= 0) {
                $('.AvailableStock').html("No hay stock al momento");
                submitButton.prop('disabled', true);
            }
        },
        error: function error(data) {
            $('.AvailableStock').html("Producto no disponible");
            submitButton.prop('disabled', true);
            // $('#Error').html(data.responseText);
            console.log("Error en checkSizeStock()");
            console.log(data);
            // location.reload();
        }
    });
};

window.sumAllItems = function () {
    sum = 0;
    $('.TotalItemPrice').each(function (index) {
        sum += parseInt($(this).html());
    });
    $('.SubTotal').html(sum);
};

// Sum divs text
window.sumDivs = function (origins, target) {
    var sum = 0;
    origins.each(function () {
        sum += parseFloat($(this).text());
    });
    target.text(sum);
};

// Set cart items JSON
// -------------------------------------------
window.setItemsData = function () {
    itemData = [];

    $('.Item-Data').each(function () {
        var id = $(this).data('id');
        var price = $(this).data('price');
        var quantity = $(this).val();

        item = {};
        item['id'] = id;
        item['price'] = price;
        item['quantity'] = quantity;
        // Update display total item price
        total = price * quantity;
        $('.' + id + '-TotalItemPrice').html(total);

        itemData.push(item);

        console.log(item);
    });
    // Update Total
    console.info(itemData);
    sumAllItems();
    $('#Items-Data').val(itemData);
};

// Add product to cart
// -------------------------------------------
window.addToCart = function (route, data) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        async: false,
        data: data,
        success: function success(data) {
            if (data.response == 'first-item') {
                console.log("Reloading");
                location.reload();
            } else if (data.response == 'success') {
                toast_success('Ok!', data.message, 'bottomCenter', '', 2500);
                updateTotals();
                setItemsData();
                sumAllItems();
                openCheckoutDesktop();
                // setTimeout(function () {
                //     setItemsData();
                //     sumAllItems();
                //     openCheckoutDesktop();
                // }, 100);
            } else if (data.response == 'warning') {
                toast_success('Ups!', data.message, 'bottomCenter');
            }
        },
        error: function error(data) {
            // $('#Error').html(data.responseText);
            // location.reload();
            console.log("Error en addtoCart()");
            console.log(data);
            toast_success('Ups!', 'Ha ocurrido un error: <b>' + data.responseJSON['message'] + '</b>', 'bottomCenter');
        }
    });
};

// Remove product from cart
// -------------------------------------------
window.removeFromCart = function (route, id, quantity, div, action) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { itemid: id, quantity: quantity, action: action, method: 'ajax' },
        success: function success(data) {
            if (data.response == 'cart-removed') {
                updateTotals();
                window.location = window.location.href.split("?")[0];
                setItemsData();
            } else if (data.response == 'success') {
                $(div).hide(100);
                $(div).remove();
                updateTotals();
                setItemsData();
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log("Error en removeFromCart()");
            console.log(data);
            // If an error pops when destroying an item, reload and prevent bad magic
            location.reload();
        }
    });
};

function updateTotals() {
    // Live Reloading stuff
    $("#SideContainerItemsFixed").load(window.location.href + " #SideContainerItemsFixed");
    $("#SideContainerItemsFloating").load(window.location.href + " #SideContainerItemsFloating");
    $(".TotalCartItems").load(window.location.href + " .TotalCartItems");
    $(".TotalCartItemsSidebar").load(window.location.href + " .TotalCartItemsSidebar");
    $(".CartSubTotal").load(window.location.href + " .CartSubTotal");
    $(".AvailableStock").load(window.location.href + " .AvailableStock");
}

// Submit Form
// -------------------------------------------
window.submitForm = function (route, target, data, action) {
    console.log("Ruta: " + route + " Target: " + target + " Data: " + data + "Action: " + action);
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { data: data, action: action },
        success: function success(data) {
            console.log(data);
            if (data.response == 'success') {
                console.log(target);
                if (target == 'reload') {
                    // Refresh page, delete parametters and open checkout sidebar
                    window.location = window.location.href.split("?")[0] + "?checkout-on";
                } else {
                    window.location.href = target;
                }
            } else {
                console.log('Error en submitForm');
                console.log(data);
                toast_error('', data.message, 'bottomCenter', '');
                $('.SideContainerError').html(data.message);
                // $('#Error').html(data.responseText);
            }
            $('#Error').html(data.responseText);
        },
        error: function error(data) {
            // $('#Error').html(data.responseText);
            console.log("Error en submitForm()");
            console.log(data);
            location.reload();
        }
    });
};

// Validate and set coupon
// -------------------------------------------
window.validateAndSetCoupon = function (route, code, cartid) {
    var couponDiv = $('#CouponDiv');
    var couponSet = $('#SettedCoupon');
    console.log(code, cartid);
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { code: code, cartid: cartid },
        beforeSend: function beforeSend() {
            console.log("Comprobando cupón...");
            $('.CouponLoader').removeClass('Hidden');
        },
        success: function success(data) {
            if (data.response == true) {
                $('#CouponValidationMessage').html("Cupón aceptado !");
                couponDiv.hide(200, function () {
                    couponSet.removeClass('Hidden');
                });
                location.reload();
            } else if (data.response == null) {
                $('#CouponValidationMessage').html(data.message);
            }
        },
        error: function error(data) {
            $('#CouponValidationMessage').html(data.responseText);
            console.log(data);
        },
        complete: function complete() {
            $('.CouponLoader').addClass('Hidden');
        }
    });
};

// Favs
// -------------------------------------------
window.addArticleToFavs = function (route, favid, articleid, action, displayButton) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { fav_id: favid, article_id: articleid },
        success: function success(data) {
            if (data.response == true && data.result == 'added') {
                switch (action) {
                    case 'reload':
                        location.reload();
                        break;
                    case 'show':
                        displayButton.removeClass('fav-icon-nofav');
                        displayButton.addClass('fav-icon-isfav');
                        toast_success('Ok!', 'Producto agregado a favoritos', 'bottomCenter', '', 1000);
                        break;
                    case 'none':
                        console.log('Actualizado - Sin Acción');
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else if (data.response == true && data.result == 'removed') {
                displayButton.addClass('fav-icon-nofav');
                displayButton.removeClass('fav-icon-isfav');
                toast_success('Ok!', 'Producto eliminado de favoritos', 'bottomCenter', '', 1000);
            }
            setFavsTotalIcon(data.favsCount);
        },
        error: function error(data) {
            $('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

function setFavsTotalIcon(favs) {
    if (favs > 0) {
        $('.FavMainIcon').removeClass('far');
        $('.FavMainIcon').addClass('fa');
    } else if (favs == 0) {
        $('.FavMainIcon').removeClass('fa');
        $('.FavMainIcon').addClass('far');
    } else {
        $('.FavMainIcon').removeClass('fa');
        $('.FavMainIcon').removeClass('far');
        $('.FavMainIcon').addClass('fa');
        console.log("Error en setFavsTotalIcon()");
    }
}

window.removeArticleFromFavs = function (route, favid, action) {
    var doaction = action;
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { fav_id: favid },
        success: function success(data) {
            $('#Error').html(data.responseText);
            console.log(data);
            if (data.response == true) {
                console.log(doaction);
                switch (doaction) {
                    case 'reload':
                        var action = 'reload';
                        toast_success('Ok!', 'Producto eliminado de favoritos', 'bottomCenter', action, 1000);
                        break;
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else {
                //$('#Error').html(data.message['errorInfo']);
                console.log(data);
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

window.removeAllArticlesFromFavs = function (route, customerid, action) {
    $.ajax({
        url: route,
        method: 'POST',
        dataType: 'JSON',
        data: { customer_id: customerid },
        success: function success(data) {
            console.log(data);
            //$('#Error').html(data.responseText);
            if (data.response == true) {
                switch (action) {
                    case 'reload':
                        location.reload();
                        break;
                    default:
                        console.log('No hay acción');
                        break;
                }
            } else {
                $('#Error').html(data.message['errorInfo']);
                console.log(data);
            }
        },
        error: function error(data) {
            //$('#Error').html(data.responseText);
            console.log(data);
        }
    });
};

/*
|--------------------------------------------------------------------------
| LOGIN AND REGISTER
|--------------------------------------------------------------------------
*/

$('#ResellerBox').hide();

window.openResellerRegistration = function () {
    $('#IsResellerCheckbox').prop('checked', true);
    $('.IfResellerEnable').prop('disabled', false);
    $('#ResellerBox').show(100);
    $('#ResellerCTA').hide(0);
    $('.NormaClientTitle').hide(0);
    $('.ResellerTitle').show(0);
};

window.closeResellerRegistration = function () {
    $('#IsResellerCheckbox').prop('checked', false);
    $('.IfResellerEnable').prop('disabled', true);
    $('#ResellerBox').hide(0);
    $('#ResellerCTA').show(100);
    $('.NormaClientTitle').show(0);
    $('.ResellerTitle').hide(0);
};

$(document).ready(function () {
    $('.GeoProvSelect').on('change', function () {
        var prov_id = $(this).val();
        getGeoLocs(prov_id);
    });
});

/*
|--------------------------------------------------------------------------
| MIX FUNCTIONS
|--------------------------------------------------------------------------
*/

window.closeElement = function (selector) {
    $(selector).hide(100);
};

window.getParam = function (parameterName) {
    var result = null,
        tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
};

window.getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzAzYTk2YmQ3ZWM3MzcxODI0YzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInJlbW92ZUNsYXNzIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInNpYmxpbmdzIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiaHRtbCIsIndpbmRvdyIsImNoZWNrb3V0U2lkZWJhciIsInN0YXRlIiwic2lkZWJhciIsIndyYXBwZXIiLCJmaXhMaXN0TGF5b3V0Iiwid2lkdGgiLCJzaG93IiwiYWRkQ2xhc3MiLCJoaWRlIiwidW5kZWZpbmVkIiwiaGFzQ2xhc3MiLCJvcGVuQ2hlY2tvdXREZXNrdG9wIiwib3BlbkZpbHRlcnMiLCJmaWx0ZXJzIiwidHJpZ2dlciIsImNoZWNrU2l6ZVN0b2NrIiwicm91dGUiLCJhcnRpY2xlSWQiLCJzaXplIiwic3VibWl0QnV0dG9uIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJzdG9jayIsInByb3AiLCJlcnJvciIsInN1bUFsbEl0ZW1zIiwic3VtIiwiZWFjaCIsImluZGV4IiwicGFyc2VJbnQiLCJzdW1EaXZzIiwib3JpZ2lucyIsInRhcmdldCIsInBhcnNlRmxvYXQiLCJ0ZXh0Iiwic2V0SXRlbXNEYXRhIiwiaXRlbURhdGEiLCJpZCIsInByaWNlIiwiaXRlbSIsInRvdGFsIiwicHVzaCIsImluZm8iLCJhZGRUb0NhcnQiLCJhc3luYyIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ0b2FzdF9zdWNjZXNzIiwibWVzc2FnZSIsInVwZGF0ZVRvdGFscyIsInJlc3BvbnNlSlNPTiIsInJlbW92ZUZyb21DYXJ0IiwiZGl2IiwiYWN0aW9uIiwiaXRlbWlkIiwiaHJlZiIsInNwbGl0IiwicmVtb3ZlIiwibG9hZCIsInN1Ym1pdEZvcm0iLCJ0b2FzdF9lcnJvciIsInJlc3BvbnNlVGV4dCIsInZhbGlkYXRlQW5kU2V0Q291cG9uIiwiY29kZSIsImNhcnRpZCIsImNvdXBvbkRpdiIsImNvdXBvblNldCIsImJlZm9yZVNlbmQiLCJjb21wbGV0ZSIsImFkZEFydGljbGVUb0ZhdnMiLCJmYXZpZCIsImFydGljbGVpZCIsImRpc3BsYXlCdXR0b24iLCJmYXZfaWQiLCJhcnRpY2xlX2lkIiwicmVzdWx0Iiwic2V0RmF2c1RvdGFsSWNvbiIsImZhdnNDb3VudCIsImZhdnMiLCJyZW1vdmVBcnRpY2xlRnJvbUZhdnMiLCJkb2FjdGlvbiIsInJlbW92ZUFsbEFydGljbGVzRnJvbUZhdnMiLCJjdXN0b21lcmlkIiwiY3VzdG9tZXJfaWQiLCJvcGVuUmVzZWxsZXJSZWdpc3RyYXRpb24iLCJjbG9zZVJlc2VsbGVyUmVnaXN0cmF0aW9uIiwiZG9jdW1lbnQiLCJyZWFkeSIsInByb3ZfaWQiLCJnZXRHZW9Mb2NzIiwiY2xvc2VFbGVtZW50Iiwic2VsZWN0b3IiLCJnZXRQYXJhbSIsInBhcmFtZXRlck5hbWUiLCJ0bXAiLCJzZWFyY2giLCJzdWJzdHIiLCJmb3JFYWNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2V0UGFyYW1zIiwicGFyYW1zIiwicGFyc2VyIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5Iiwic3Vic3RyaW5nIiwidmFycyIsImkiLCJsZW5ndGgiLCJwYWlyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBQSxFQUFFLG1CQUFGLEVBQXVCQyxFQUF2QixDQUEwQixRQUExQixFQUFvQyxZQUFZO0FBQzVDRCxNQUFFLGNBQUYsRUFBa0JFLFdBQWxCLENBQThCLFFBQTlCO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsQ0FIRDs7QUFLQUYsRUFBRSxtQkFBRixFQUF1QkMsRUFBdkIsQ0FBMEIsUUFBMUIsRUFBb0MsWUFBWTtBQUM1Q0QsTUFBRSxjQUFGLEVBQWtCRSxXQUFsQixDQUE4QixRQUE5QjtBQUNBLFdBQU8sSUFBUDtBQUNILENBSEQ7O0FBS0FGLEVBQUUsOEJBQUYsRUFBa0NHLFFBQWxDLENBQTJDLFVBQVVDLENBQVYsRUFBYTtBQUNwREMsWUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSxRQUFJRixFQUFFRyxLQUFGLElBQVcsRUFBZixFQUFtQixPQUFPLEtBQVA7QUFDbkIsUUFBSUgsRUFBRUcsS0FBRixJQUFXLEVBQWYsRUFBbUJILEVBQUVJLGNBQUY7QUFDdEIsQ0FKRDs7QUFNQTtBQUNBO0FBQ0FSLEVBQUUsWUFBRixFQUFnQkMsRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUMsWUFBWTtBQUMzQztBQUNBLFFBQUlRLFFBQVFULEVBQUUsSUFBRixFQUFRVSxRQUFSLENBQWlCLGVBQWpCLEVBQWtDQyxHQUFsQyxFQUFaO0FBQ0E7QUFDQSxRQUFJQyxXQUFXWixFQUFFLElBQUYsRUFBUVcsR0FBUixFQUFmO0FBQ0E7QUFDQSxRQUFJRSxXQUFZSixRQUFRRyxRQUF4QjtBQUNBO0FBQ0EsUUFBSUUsaUJBQWlCZCxFQUFFLElBQUYsRUFBUWUsTUFBUixHQUFpQkEsTUFBakIsR0FBMEJBLE1BQTFCLEdBQW1DTCxRQUFuQyxDQUE0QyxpQkFBNUMsQ0FBckI7O0FBRUFMLFlBQVFDLEdBQVIsQ0FBWUcsS0FBWixFQUFtQkcsUUFBbkIsRUFBNkJDLFFBQTdCO0FBQ0FHLG9CQUFnQmhCLEVBQUUsSUFBRixDQUFoQixFQUF5QmMsY0FBekIsRUFBeUNELFFBQXpDO0FBQ0gsQ0FaRDs7QUFjQSxTQUFTRyxlQUFULENBQXlCWixDQUF6QixFQUE0QlUsY0FBNUIsRUFBNENELFFBQTVDLEVBQXNEO0FBQ2xEVCxNQUFFTSxRQUFGLENBQVcsWUFBWCxFQUF5QlIsV0FBekIsQ0FBcUMsUUFBckM7QUFDQVksbUJBQWVHLElBQWYsQ0FBb0IsT0FBT0osUUFBM0I7QUFDSDs7QUFHRDtBQUNBO0FBQ0FLLE9BQU9DLGVBQVAsR0FBeUIsVUFBVUMsS0FBVixFQUFpQjs7QUFFdEMsUUFBTUMsVUFBVXJCLEVBQUUsZUFBRixDQUFoQjtBQUNBLFFBQU1zQixVQUFVdEIsRUFBRSxlQUFGLENBQWhCOztBQUVBO0FBQ0EsUUFBSXVCLGdCQUFnQixLQUFwQjtBQUNBLFFBQUl2QixFQUFFa0IsTUFBRixFQUFVTSxLQUFWLEtBQW9CLElBQXBCLElBQTRCeEIsRUFBRWtCLE1BQUYsRUFBVU0sS0FBVixLQUFvQixJQUFwRCxFQUNJRCxnQkFBZ0IsSUFBaEI7O0FBRUosUUFBTUUsT0FBTyxTQUFQQSxJQUFPLEdBQVk7QUFDckI7QUFDQUosZ0JBQVFLLFFBQVIsQ0FBaUIsUUFBakI7QUFDQUosZ0JBQVFJLFFBQVIsQ0FBaUIsZUFBakI7QUFDQSxZQUFHSCxhQUFILEVBQ0l2QixFQUFFLDhCQUFGLEVBQWtDRSxXQUFsQyxDQUE4QyxVQUE5QyxFQUEwRHdCLFFBQTFELENBQW1FLFVBQW5FO0FBQ1AsS0FORDs7QUFRQSxRQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBWTtBQUNyQjtBQUNBTixnQkFBUW5CLFdBQVIsQ0FBb0IsUUFBcEI7QUFDQW9CLGdCQUFRcEIsV0FBUixDQUFvQixlQUFwQjtBQUNBLFlBQUdxQixhQUFILEVBQ0l2QixFQUFFLDhCQUFGLEVBQWtDMEIsUUFBbEMsQ0FBMkMsVUFBM0MsRUFBdUR4QixXQUF2RCxDQUFtRSxVQUFuRTtBQUNQLEtBTkQ7O0FBU0EsUUFBSWtCLFNBQVNRLFNBQWIsRUFBd0I7QUFDcEIsWUFBSVAsUUFBUVEsUUFBUixDQUFpQixRQUFqQixDQUFKLEVBQWdDO0FBQzVCRjtBQUNILFNBRkQsTUFFTztBQUNIRjtBQUNIO0FBQ0osS0FORCxNQU1PLElBQUlMLFNBQVMsTUFBYixFQUFxQjtBQUN4Qks7QUFDQSxlQUFPLEtBQVA7QUFDSCxLQUhNLE1BR0EsSUFBSUwsU0FBUyxNQUFiLEVBQXFCO0FBQ3hCTztBQUNBLGVBQU8sS0FBUDtBQUNIO0FBRUosQ0F6Q0Q7O0FBNkNBVCxPQUFPWSxtQkFBUCxHQUE2QixZQUM3QjtBQUNJLFFBQUk5QixFQUFFa0IsTUFBRixFQUFVTSxLQUFWLEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCTCx3QkFBZ0IsTUFBaEI7QUFDSDtBQUNELFdBQU8sS0FBUDtBQUNILENBTkQ7O0FBU0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQUQsT0FBT2EsV0FBUCxHQUFxQixZQUFZO0FBQzdCLFFBQU1DLFVBQVVoQyxFQUFFLGdCQUFGLENBQWhCO0FBQ0EsUUFBTWlDLFVBQVVqQyxFQUFFLHVCQUFGLENBQWhCO0FBQ0EsUUFBR2dDLFFBQVFILFFBQVIsQ0FBaUIsUUFBakIsQ0FBSCxFQUNBO0FBQ0lHLGdCQUFROUIsV0FBUixDQUFvQixRQUFwQjtBQUNBK0IsZ0JBQVFSLElBQVI7QUFDSCxLQUpELE1BTUE7QUFDSU8sZ0JBQVFOLFFBQVIsQ0FBaUIsUUFBakI7QUFDQU8sZ0JBQVFOLElBQVI7QUFDSDtBQUVKLENBZEQ7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0FULE9BQU9nQixjQUFQLEdBQXdCLFVBQVVDLEtBQVYsRUFBaUJDLFNBQWpCLEVBQTRCQyxJQUE1QixFQUFrQztBQUN0RDtBQUNBLFFBQU1DLGVBQWV0QyxFQUFFLG1CQUFGLENBQXJCO0FBQ0FBLE1BQUV1QyxJQUFGLENBQU87QUFDSEMsYUFBS0wsS0FERjtBQUVITSxnQkFBUSxLQUZMO0FBR0hDLGtCQUFVLE1BSFA7QUFJSEMsY0FBTSxFQUFDUCxXQUFXQSxTQUFaLEVBQXVCQyxNQUFNQSxJQUE3QixFQUpIO0FBS0hPLGlCQUFTLGlCQUFVRCxJQUFWLEVBQWdCO0FBQ3JCdEMsb0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDQSxnQkFBSUEsS0FBS0UsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2hCN0Msa0JBQUUsaUJBQUYsRUFBcUJpQixJQUFyQixDQUEwQix1QkFBdUIwQixLQUFLRSxLQUF0RDtBQUNBUCw2QkFBYVEsSUFBYixDQUFrQixVQUFsQixFQUE4QixLQUE5QjtBQUNILGFBSEQsTUFHTyxJQUFJSCxLQUFLRSxLQUFMLElBQWMsQ0FBbEIsRUFBcUI7QUFDeEI3QyxrQkFBRSxpQkFBRixFQUFxQmlCLElBQXJCLENBQTBCLHlCQUExQjtBQUNBcUIsNkJBQWFRLElBQWIsQ0FBa0IsVUFBbEIsRUFBOEIsSUFBOUI7QUFDSDtBQUNKLFNBZEU7QUFlSEMsZUFBTyxlQUFVSixJQUFWLEVBQWdCO0FBQ25CM0MsY0FBRSxpQkFBRixFQUFxQmlCLElBQXJCLENBQTBCLHdCQUExQjtBQUNBcUIseUJBQWFRLElBQWIsQ0FBa0IsVUFBbEIsRUFBOEIsSUFBOUI7QUFDQTtBQUNBekMsb0JBQVFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNBO0FBQ0g7QUF0QkUsS0FBUDtBQXdCSCxDQTNCRDs7QUE4QkF6QixPQUFPOEIsV0FBUCxHQUFxQixZQUFZO0FBQzdCQyxVQUFNLENBQU47QUFDQWpELE1BQUUsaUJBQUYsRUFBcUJrRCxJQUFyQixDQUEwQixVQUFVQyxLQUFWLEVBQWlCO0FBQ3ZDRixlQUFPRyxTQUFTcEQsRUFBRSxJQUFGLEVBQVFpQixJQUFSLEVBQVQsQ0FBUDtBQUNILEtBRkQ7QUFHQWpCLE1BQUUsV0FBRixFQUFlaUIsSUFBZixDQUFvQmdDLEdBQXBCO0FBQ0gsQ0FORDs7QUFTQTtBQUNBL0IsT0FBT21DLE9BQVAsR0FBaUIsVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDeEMsUUFBSU4sTUFBTSxDQUFWO0FBQ0FLLFlBQVFKLElBQVIsQ0FBYSxZQUFZO0FBQ3JCRCxlQUFPTyxXQUFXeEQsRUFBRSxJQUFGLEVBQVF5RCxJQUFSLEVBQVgsQ0FBUDtBQUNILEtBRkQ7QUFHQUYsV0FBT0UsSUFBUCxDQUFZUixHQUFaO0FBQ0gsQ0FORDs7QUFTQTtBQUNBO0FBQ0EvQixPQUFPd0MsWUFBUCxHQUFzQixZQUFZO0FBQzlCQyxlQUFXLEVBQVg7O0FBRUEzRCxNQUFFLFlBQUYsRUFBZ0JrRCxJQUFoQixDQUFxQixZQUFZO0FBQzdCLFlBQUlVLEtBQUs1RCxFQUFFLElBQUYsRUFBUTJDLElBQVIsQ0FBYSxJQUFiLENBQVQ7QUFDQSxZQUFJa0IsUUFBUTdELEVBQUUsSUFBRixFQUFRMkMsSUFBUixDQUFhLE9BQWIsQ0FBWjtBQUNBLFlBQUkvQixXQUFXWixFQUFFLElBQUYsRUFBUVcsR0FBUixFQUFmOztBQUVBbUQsZUFBTyxFQUFQO0FBQ0FBLGFBQUssSUFBTCxJQUFhRixFQUFiO0FBQ0FFLGFBQUssT0FBTCxJQUFnQkQsS0FBaEI7QUFDQUMsYUFBSyxVQUFMLElBQW1CbEQsUUFBbkI7QUFDQTtBQUNBbUQsZ0JBQVFGLFFBQVFqRCxRQUFoQjtBQUNBWixVQUFFLE1BQU00RCxFQUFOLEdBQVcsaUJBQWIsRUFBZ0MzQyxJQUFoQyxDQUFxQzhDLEtBQXJDOztBQUVBSixpQkFBU0ssSUFBVCxDQUFjRixJQUFkOztBQUVBekQsZ0JBQVFDLEdBQVIsQ0FBWXdELElBQVo7QUFDSCxLQWhCRDtBQWlCQTtBQUNBekQsWUFBUTRELElBQVIsQ0FBYU4sUUFBYjtBQUNBWDtBQUNBaEQsTUFBRSxhQUFGLEVBQWlCVyxHQUFqQixDQUFxQmdELFFBQXJCO0FBQ0gsQ0F4QkQ7O0FBMEJBO0FBQ0E7QUFDQXpDLE9BQU9nRCxTQUFQLEdBQW1CLFVBQVUvQixLQUFWLEVBQWlCUSxJQUFqQixFQUF1QjtBQUN0QzNDLE1BQUV1QyxJQUFGLENBQU87QUFDSEMsYUFBS0wsS0FERjtBQUVITSxnQkFBUSxNQUZMO0FBR0hDLGtCQUFVLE1BSFA7QUFJSHlCLGVBQU8sS0FKSjtBQUtIeEIsY0FBTUEsSUFMSDtBQU1IQyxpQkFBUyxpQkFBVUQsSUFBVixFQUFnQjtBQUNyQixnQkFBSUEsS0FBS3lCLFFBQUwsSUFBaUIsWUFBckIsRUFDQTtBQUNJL0Qsd0JBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0ErRCx5QkFBU0MsTUFBVDtBQUNILGFBSkQsTUFLSyxJQUFJM0IsS0FBS3lCLFFBQUwsSUFBaUIsU0FBckIsRUFDTDtBQUNJRyw4QkFBYyxLQUFkLEVBQXFCNUIsS0FBSzZCLE9BQTFCLEVBQW1DLGNBQW5DLEVBQW1ELEVBQW5ELEVBQXVELElBQXZEO0FBQ0FDO0FBQ0FmO0FBQ0FWO0FBQ0FsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxhQVpJLE1BYUEsSUFBSWEsS0FBS3lCLFFBQUwsSUFBaUIsU0FBckIsRUFDTDtBQUNJRyw4QkFBYyxNQUFkLEVBQXNCNUIsS0FBSzZCLE9BQTNCLEVBQW9DLGNBQXBDO0FBQ0g7QUFDSixTQTdCRTtBQThCSHpCLGVBQU8sZUFBVUosSUFBVixFQUFnQjtBQUNuQjtBQUNBO0FBQ0F0QyxvQkFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0E0QiwwQkFBYyxNQUFkLEVBQXNCLDhCQUE4QjVCLEtBQUsrQixZQUFMLENBQWtCLFNBQWxCLENBQTlCLEdBQTZELE1BQW5GLEVBQTJGLGNBQTNGO0FBQ0g7QUFwQ0UsS0FBUDtBQXNDSCxDQXZDRDs7QUEyQ0E7QUFDQTtBQUNBeEQsT0FBT3lELGNBQVAsR0FBd0IsVUFBVXhDLEtBQVYsRUFBaUJ5QixFQUFqQixFQUFxQmhELFFBQXJCLEVBQStCZ0UsR0FBL0IsRUFBb0NDLE1BQXBDLEVBQTRDO0FBQ2hFN0UsTUFBRXVDLElBQUYsQ0FBTztBQUNIQyxhQUFLTCxLQURGO0FBRUhNLGdCQUFRLE1BRkw7QUFHSEMsa0JBQVUsTUFIUDtBQUlIQyxjQUFNLEVBQUVtQyxRQUFRbEIsRUFBVixFQUFjaEQsVUFBVUEsUUFBeEIsRUFBa0NpRSxRQUFRQSxNQUExQyxFQUFrRHBDLFFBQVEsTUFBMUQsRUFKSDtBQUtIRyxpQkFBUyxpQkFBVUQsSUFBVixFQUFnQjtBQUNyQixnQkFBSUEsS0FBS3lCLFFBQUwsSUFBaUIsY0FBckIsRUFBcUM7QUFDakNLO0FBQ0F2RCx1QkFBT21ELFFBQVAsR0FBa0JuRCxPQUFPbUQsUUFBUCxDQUFnQlUsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQWxCO0FBQ0F0QjtBQUNILGFBSkQsTUFJTyxJQUFJZixLQUFLeUIsUUFBTCxJQUFpQixTQUFyQixFQUFnQztBQUNuQ3BFLGtCQUFFNEUsR0FBRixFQUFPakQsSUFBUCxDQUFZLEdBQVo7QUFDQTNCLGtCQUFFNEUsR0FBRixFQUFPSyxNQUFQO0FBQ0FSO0FBQ0FmO0FBQ0g7QUFDSixTQWhCRTtBQWlCSFgsZUFBTyxlQUFVSixJQUFWLEVBQWdCO0FBQ25CO0FBQ0F0QyxvQkFBUUMsR0FBUixDQUFZLDJCQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0E7QUFDQTBCLHFCQUFTQyxNQUFUO0FBQ0g7QUF2QkUsS0FBUDtBQXlCSCxDQTFCRDs7QUE0QkEsU0FBU0csWUFBVCxHQUF3QjtBQUNwQjtBQUNBekUsTUFBRSwwQkFBRixFQUE4QmtGLElBQTlCLENBQW1DaEUsT0FBT21ELFFBQVAsQ0FBZ0JVLElBQWhCLEdBQXVCLDJCQUExRDtBQUNBL0UsTUFBRSw2QkFBRixFQUFpQ2tGLElBQWpDLENBQXNDaEUsT0FBT21ELFFBQVAsQ0FBZ0JVLElBQWhCLEdBQXVCLDhCQUE3RDtBQUNBL0UsTUFBRSxpQkFBRixFQUFxQmtGLElBQXJCLENBQTBCaEUsT0FBT21ELFFBQVAsQ0FBZ0JVLElBQWhCLEdBQXVCLGtCQUFqRDtBQUNBL0UsTUFBRSx3QkFBRixFQUE0QmtGLElBQTVCLENBQWlDaEUsT0FBT21ELFFBQVAsQ0FBZ0JVLElBQWhCLEdBQXVCLHlCQUF4RDtBQUNBL0UsTUFBRSxlQUFGLEVBQW1Ca0YsSUFBbkIsQ0FBd0JoRSxPQUFPbUQsUUFBUCxDQUFnQlUsSUFBaEIsR0FBdUIsZ0JBQS9DO0FBQ0EvRSxNQUFFLGlCQUFGLEVBQXFCa0YsSUFBckIsQ0FBMEJoRSxPQUFPbUQsUUFBUCxDQUFnQlUsSUFBaEIsR0FBdUIsa0JBQWpEO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBN0QsT0FBT2lFLFVBQVAsR0FBb0IsVUFBVWhELEtBQVYsRUFBaUJvQixNQUFqQixFQUF5QlosSUFBekIsRUFBK0JrQyxNQUEvQixFQUF1QztBQUN2RHhFLFlBQVFDLEdBQVIsQ0FBWSxXQUFXNkIsS0FBWCxHQUFtQixXQUFuQixHQUFpQ29CLE1BQWpDLEdBQTBDLFNBQTFDLEdBQXNEWixJQUF0RCxHQUE2RCxVQUE3RCxHQUF5RWtDLE1BQXJGO0FBQ0E3RSxNQUFFdUMsSUFBRixDQUFPO0FBQ0hDLGFBQUtMLEtBREY7QUFFSE0sZ0JBQVEsTUFGTDtBQUdIQyxrQkFBVSxNQUhQO0FBSUhDLGNBQU0sRUFBRUEsVUFBRixFQUFRa0MsUUFBUUEsTUFBaEIsRUFKSDtBQUtIakMsaUJBQVMsaUJBQVVELElBQVYsRUFBZ0I7QUFDckJ0QyxvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNBLGdCQUFJQSxLQUFLeUIsUUFBTCxJQUFpQixTQUFyQixFQUFnQztBQUM1Qi9ELHdCQUFRQyxHQUFSLENBQVlpRCxNQUFaO0FBQ0Esb0JBQUlBLFVBQVUsUUFBZCxFQUF3QjtBQUNwQjtBQUNBckMsMkJBQU9tRCxRQUFQLEdBQWtCbkQsT0FBT21ELFFBQVAsQ0FBZ0JVLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxJQUFxQyxjQUF2RDtBQUNILGlCQUhELE1BR087QUFDSDlELDJCQUFPbUQsUUFBUCxDQUFnQlUsSUFBaEIsR0FBdUJ4QixNQUF2QjtBQUNIO0FBQ0osYUFSRCxNQVFPO0FBQ0hsRCx3QkFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0FELHdCQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0F5Qyw0QkFBWSxFQUFaLEVBQWdCekMsS0FBSzZCLE9BQXJCLEVBQThCLGNBQTlCLEVBQThDLEVBQTlDO0FBQ0F4RSxrQkFBRSxxQkFBRixFQUF5QmlCLElBQXpCLENBQThCMEIsS0FBSzZCLE9BQW5DO0FBQ0E7QUFDSDtBQUNEeEUsY0FBRSxRQUFGLEVBQVlpQixJQUFaLENBQWlCMEIsS0FBSzBDLFlBQXRCO0FBQ0gsU0F2QkU7QUF3Qkh0QyxlQUFPLGVBQVVKLElBQVYsRUFBZ0I7QUFDbkI7QUFDQXRDLG9CQUFRQyxHQUFSLENBQVksdUJBQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDQTBCLHFCQUFTQyxNQUFUO0FBQ0g7QUE3QkUsS0FBUDtBQStCSCxDQWpDRDs7QUFtQ0E7QUFDQTtBQUNBcEQsT0FBT29FLG9CQUFQLEdBQThCLFVBQVVuRCxLQUFWLEVBQWlCb0QsSUFBakIsRUFBdUJDLE1BQXZCLEVBQStCO0FBQ3pELFFBQUlDLFlBQVl6RixFQUFFLFlBQUYsQ0FBaEI7QUFDQSxRQUFJMEYsWUFBWTFGLEVBQUUsZUFBRixDQUFoQjtBQUNBSyxZQUFRQyxHQUFSLENBQVlpRixJQUFaLEVBQWtCQyxNQUFsQjtBQUNBeEYsTUFBRXVDLElBQUYsQ0FBTztBQUNIQyxhQUFLTCxLQURGO0FBRUhNLGdCQUFRLE1BRkw7QUFHSEMsa0JBQVUsTUFIUDtBQUlIQyxjQUFNLEVBQUU0QyxNQUFNQSxJQUFSLEVBQWNDLFFBQVFBLE1BQXRCLEVBSkg7QUFLSEcsb0JBQVksc0JBQVk7QUFDcEJ0RixvQkFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0FOLGNBQUUsZUFBRixFQUFtQkUsV0FBbkIsQ0FBK0IsUUFBL0I7QUFDSCxTQVJFO0FBU0gwQyxpQkFBUyxpQkFBVUQsSUFBVixFQUFnQjtBQUNyQixnQkFBSUEsS0FBS3lCLFFBQUwsSUFBaUIsSUFBckIsRUFBMkI7QUFDdkJwRSxrQkFBRSwwQkFBRixFQUE4QmlCLElBQTlCLENBQW1DLGtCQUFuQztBQUNBd0UsMEJBQVU5RCxJQUFWLENBQWUsR0FBZixFQUFvQixZQUFZO0FBQzVCK0QsOEJBQVV4RixXQUFWLENBQXNCLFFBQXRCO0FBQ0gsaUJBRkQ7QUFHQW1FLHlCQUFTQyxNQUFUO0FBQ0gsYUFORCxNQU1PLElBQUkzQixLQUFLeUIsUUFBTCxJQUFpQixJQUFyQixFQUEyQjtBQUM5QnBFLGtCQUFFLDBCQUFGLEVBQThCaUIsSUFBOUIsQ0FBbUMwQixLQUFLNkIsT0FBeEM7QUFDSDtBQUNKLFNBbkJFO0FBb0JIekIsZUFBTyxlQUFVSixJQUFWLEVBQWdCO0FBQ25CM0MsY0FBRSwwQkFBRixFQUE4QmlCLElBQTlCLENBQW1DMEIsS0FBSzBDLFlBQXhDO0FBQ0FoRixvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNILFNBdkJFO0FBd0JIaUQsa0JBQVUsb0JBQVk7QUFDbEI1RixjQUFFLGVBQUYsRUFBbUIwQixRQUFuQixDQUE0QixRQUE1QjtBQUNIO0FBMUJFLEtBQVA7QUE0QkgsQ0FoQ0Q7O0FBa0NBO0FBQ0E7QUFDQVIsT0FBTzJFLGdCQUFQLEdBQTBCLFVBQVUxRCxLQUFWLEVBQWlCMkQsS0FBakIsRUFBd0JDLFNBQXhCLEVBQW1DbEIsTUFBbkMsRUFBMkNtQixhQUEzQyxFQUEwRDtBQUNoRmhHLE1BQUV1QyxJQUFGLENBQU87QUFDSEMsYUFBS0wsS0FERjtBQUVITSxnQkFBUSxNQUZMO0FBR0hDLGtCQUFVLE1BSFA7QUFJSEMsY0FBTSxFQUFFc0QsUUFBUUgsS0FBVixFQUFpQkksWUFBWUgsU0FBN0IsRUFKSDtBQUtIbkQsaUJBQVMsaUJBQVVELElBQVYsRUFBZ0I7QUFDckIsZ0JBQUlBLEtBQUt5QixRQUFMLElBQWlCLElBQWpCLElBQXlCekIsS0FBS3dELE1BQUwsSUFBZSxPQUE1QyxFQUFxRDtBQUNqRCx3QkFBUXRCLE1BQVI7QUFDSSx5QkFBSyxRQUFMO0FBQ0lSLGlDQUFTQyxNQUFUO0FBQ0E7QUFDSix5QkFBSyxNQUFMO0FBQ0kwQixzQ0FBYzlGLFdBQWQsQ0FBMEIsZ0JBQTFCO0FBQ0E4RixzQ0FBY3RFLFFBQWQsQ0FBdUIsZ0JBQXZCO0FBQ0E2QyxzQ0FBYyxLQUFkLEVBQXFCLCtCQUFyQixFQUFzRCxjQUF0RCxFQUFzRSxFQUF0RSxFQUEwRSxJQUExRTtBQUNBO0FBQ0oseUJBQUssTUFBTDtBQUNJbEUsZ0NBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNKO0FBQ0lELGdDQUFRQyxHQUFSLENBQVksZUFBWjtBQUNBO0FBYlI7QUFlSCxhQWhCRCxNQWdCTyxJQUFJcUMsS0FBS3lCLFFBQUwsSUFBaUIsSUFBakIsSUFBeUJ6QixLQUFLd0QsTUFBTCxJQUFlLFNBQTVDLEVBQXVEO0FBQzFESCw4QkFBY3RFLFFBQWQsQ0FBdUIsZ0JBQXZCO0FBQ0FzRSw4QkFBYzlGLFdBQWQsQ0FBMEIsZ0JBQTFCO0FBQ0FxRSw4QkFBYyxLQUFkLEVBQXFCLGlDQUFyQixFQUF3RCxjQUF4RCxFQUF3RSxFQUF4RSxFQUE0RSxJQUE1RTtBQUNIO0FBQ0Q2Qiw2QkFBaUJ6RCxLQUFLMEQsU0FBdEI7QUFDSCxTQTVCRTtBQTZCSHRELGVBQU8sZUFBVUosSUFBVixFQUFnQjtBQUNuQjNDLGNBQUUsUUFBRixFQUFZaUIsSUFBWixDQUFpQjBCLEtBQUswQyxZQUF0QjtBQUNBaEYsb0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDSDtBQWhDRSxLQUFQO0FBa0NILENBbkNEOztBQXFDQSxTQUFTeUQsZ0JBQVQsQ0FBMEJFLElBQTFCLEVBQWdDO0FBQzVCLFFBQUlBLE9BQU8sQ0FBWCxFQUFjO0FBQ1Z0RyxVQUFFLGNBQUYsRUFBa0JFLFdBQWxCLENBQThCLEtBQTlCO0FBQ0FGLFVBQUUsY0FBRixFQUFrQjBCLFFBQWxCLENBQTJCLElBQTNCO0FBQ0gsS0FIRCxNQUdPLElBQUk0RSxRQUFRLENBQVosRUFBZTtBQUNsQnRHLFVBQUUsY0FBRixFQUFrQkUsV0FBbEIsQ0FBOEIsSUFBOUI7QUFDQUYsVUFBRSxjQUFGLEVBQWtCMEIsUUFBbEIsQ0FBMkIsS0FBM0I7QUFDSCxLQUhNLE1BR0E7QUFDSDFCLFVBQUUsY0FBRixFQUFrQkUsV0FBbEIsQ0FBOEIsSUFBOUI7QUFDQUYsVUFBRSxjQUFGLEVBQWtCRSxXQUFsQixDQUE4QixLQUE5QjtBQUNBRixVQUFFLGNBQUYsRUFBa0IwQixRQUFsQixDQUEyQixJQUEzQjtBQUNBckIsZ0JBQVFDLEdBQVIsQ0FBWSw2QkFBWjtBQUNIO0FBQ0o7O0FBRURZLE9BQU9xRixxQkFBUCxHQUErQixVQUFVcEUsS0FBVixFQUFpQjJELEtBQWpCLEVBQXdCakIsTUFBeEIsRUFBZ0M7QUFDM0QsUUFBSTJCLFdBQVczQixNQUFmO0FBQ0E3RSxNQUFFdUMsSUFBRixDQUFPO0FBQ0hDLGFBQUtMLEtBREY7QUFFSE0sZ0JBQVEsTUFGTDtBQUdIQyxrQkFBVSxNQUhQO0FBSUhDLGNBQU0sRUFBRXNELFFBQVFILEtBQVYsRUFKSDtBQUtIbEQsaUJBQVMsaUJBQVVELElBQVYsRUFBZ0I7QUFDckIzQyxjQUFFLFFBQUYsRUFBWWlCLElBQVosQ0FBaUIwQixLQUFLMEMsWUFBdEI7QUFDQWhGLG9CQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0EsZ0JBQUlBLEtBQUt5QixRQUFMLElBQWlCLElBQXJCLEVBQTJCO0FBQ3ZCL0Qsd0JBQVFDLEdBQVIsQ0FBWWtHLFFBQVo7QUFDQSx3QkFBUUEsUUFBUjtBQUNJLHlCQUFLLFFBQUw7QUFDSSw0QkFBSTNCLFNBQVMsUUFBYjtBQUNBTixzQ0FBYyxLQUFkLEVBQXFCLGlDQUFyQixFQUF3RCxjQUF4RCxFQUF3RU0sTUFBeEUsRUFBZ0YsSUFBaEY7QUFDQTtBQUNKO0FBQ0l4RSxnQ0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQVBSO0FBU0gsYUFYRCxNQVdPO0FBQ0g7QUFDQUQsd0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDSDtBQUNKLFNBdkJFO0FBd0JISSxlQUFPLGVBQVVKLElBQVYsRUFBZ0I7QUFDbkI7QUFDQXRDLG9CQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0g7QUEzQkUsS0FBUDtBQTZCSCxDQS9CRDs7QUFrQ0F6QixPQUFPdUYseUJBQVAsR0FBbUMsVUFBVXRFLEtBQVYsRUFBaUJ1RSxVQUFqQixFQUE2QjdCLE1BQTdCLEVBQXFDO0FBQ3BFN0UsTUFBRXVDLElBQUYsQ0FBTztBQUNIQyxhQUFLTCxLQURGO0FBRUhNLGdCQUFRLE1BRkw7QUFHSEMsa0JBQVUsTUFIUDtBQUlIQyxjQUFNLEVBQUVnRSxhQUFhRCxVQUFmLEVBSkg7QUFLSDlELGlCQUFTLGlCQUFVRCxJQUFWLEVBQWdCO0FBQ3JCdEMsb0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDQTtBQUNBLGdCQUFJQSxLQUFLeUIsUUFBTCxJQUFpQixJQUFyQixFQUEyQjtBQUN2Qix3QkFBUVMsTUFBUjtBQUNJLHlCQUFLLFFBQUw7QUFDSVIsaUNBQVNDLE1BQVQ7QUFDQTtBQUNKO0FBQ0lqRSxnQ0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQU5SO0FBUUgsYUFURCxNQVNPO0FBQ0hOLGtCQUFFLFFBQUYsRUFBWWlCLElBQVosQ0FBaUIwQixLQUFLNkIsT0FBTCxDQUFhLFdBQWIsQ0FBakI7QUFDQW5FLHdCQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0g7QUFDSixTQXJCRTtBQXNCSEksZUFBTyxlQUFVSixJQUFWLEVBQWdCO0FBQ25CO0FBQ0F0QyxvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNIO0FBekJFLEtBQVA7QUEyQkgsQ0E1QkQ7O0FBOEJBOzs7Ozs7QUFNQTNDLEVBQUUsY0FBRixFQUFrQjJCLElBQWxCOztBQUVBVCxPQUFPMEYsd0JBQVAsR0FBa0MsWUFDbEM7QUFDSTVHLE1BQUUscUJBQUYsRUFBeUI4QyxJQUF6QixDQUE4QixTQUE5QixFQUF5QyxJQUF6QztBQUNBOUMsTUFBRSxtQkFBRixFQUF1QjhDLElBQXZCLENBQTRCLFVBQTVCLEVBQXdDLEtBQXhDO0FBQ0E5QyxNQUFFLGNBQUYsRUFBa0J5QixJQUFsQixDQUF1QixHQUF2QjtBQUNBekIsTUFBRSxjQUFGLEVBQWtCMkIsSUFBbEIsQ0FBdUIsQ0FBdkI7QUFDQTNCLE1BQUUsbUJBQUYsRUFBdUIyQixJQUF2QixDQUE0QixDQUE1QjtBQUNBM0IsTUFBRSxnQkFBRixFQUFvQnlCLElBQXBCLENBQXlCLENBQXpCO0FBQ0gsQ0FSRDs7QUFXQVAsT0FBTzJGLHlCQUFQLEdBQW1DLFlBQ25DO0FBQ0k3RyxNQUFFLHFCQUFGLEVBQXlCOEMsSUFBekIsQ0FBOEIsU0FBOUIsRUFBeUMsS0FBekM7QUFDQTlDLE1BQUUsbUJBQUYsRUFBdUI4QyxJQUF2QixDQUE0QixVQUE1QixFQUF3QyxJQUF4QztBQUNBOUMsTUFBRSxjQUFGLEVBQWtCMkIsSUFBbEIsQ0FBdUIsQ0FBdkI7QUFDQTNCLE1BQUUsY0FBRixFQUFrQnlCLElBQWxCLENBQXVCLEdBQXZCO0FBQ0F6QixNQUFFLG1CQUFGLEVBQXVCeUIsSUFBdkIsQ0FBNEIsQ0FBNUI7QUFDQXpCLE1BQUUsZ0JBQUYsRUFBb0IyQixJQUFwQixDQUF5QixDQUF6QjtBQUNILENBUkQ7O0FBVUEzQixFQUFFOEcsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFDeEIvRyxNQUFFLGdCQUFGLEVBQW9CQyxFQUFwQixDQUF1QixRQUF2QixFQUFpQyxZQUFVO0FBQ3ZDLFlBQUkrRyxVQUFVaEgsRUFBRSxJQUFGLEVBQVFXLEdBQVIsRUFBZDtBQUNBc0csbUJBQVdELE9BQVg7QUFDSCxLQUhEO0FBSUgsQ0FMRDs7QUFRQTs7Ozs7O0FBTUE5RixPQUFPZ0csWUFBUCxHQUFzQixVQUFTQyxRQUFULEVBQ3RCO0FBQ0luSCxNQUFFbUgsUUFBRixFQUFZeEYsSUFBWixDQUFpQixHQUFqQjtBQUNILENBSEQ7O0FBS0FULE9BQU9rRyxRQUFQLEdBQWtCLFVBQVNDLGFBQVQsRUFBd0I7QUFDdEMsUUFBSWxCLFNBQVMsSUFBYjtBQUFBLFFBQ0ltQixNQUFNLEVBRFY7QUFFQWpELGFBQVNrRCxNQUFULENBQ0tDLE1BREwsQ0FDWSxDQURaLEVBRUt4QyxLQUZMLENBRVcsR0FGWCxFQUdLeUMsT0FITCxDQUdhLFVBQVUzRCxJQUFWLEVBQWdCO0FBQ3pCd0QsY0FBTXhELEtBQUtrQixLQUFMLENBQVcsR0FBWCxDQUFOO0FBQ0EsWUFBSXNDLElBQUksQ0FBSixNQUFXRCxhQUFmLEVBQThCbEIsU0FBU3VCLG1CQUFtQkosSUFBSSxDQUFKLENBQW5CLENBQVQ7QUFDN0IsS0FOTDtBQU9BLFdBQU9uQixNQUFQO0FBQ0gsQ0FYRDs7QUFjQWpGLE9BQU95RyxTQUFQLEdBQW1CLFVBQVNuRixHQUFULEVBQWM7QUFDN0IsUUFBSW9GLFNBQVMsRUFBYjtBQUNILFFBQUlDLFNBQVNmLFNBQVNnQixhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQUQsV0FBTzlDLElBQVAsR0FBY3ZDLEdBQWQ7QUFDQSxRQUFJdUYsUUFBUUYsT0FBT04sTUFBUCxDQUFjUyxTQUFkLENBQXdCLENBQXhCLENBQVo7QUFDQSxRQUFJQyxPQUFPRixNQUFNL0MsS0FBTixDQUFZLEdBQVosQ0FBWDtBQUNBLFNBQUssSUFBSWtELElBQUksQ0FBYixFQUFnQkEsSUFBSUQsS0FBS0UsTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3JDLFlBQUlFLE9BQU9ILEtBQUtDLENBQUwsRUFBUWxELEtBQVIsQ0FBYyxHQUFkLENBQVg7QUFDQTRDLGVBQU9RLEtBQUssQ0FBTCxDQUFQLElBQWtCVixtQkFBbUJVLEtBQUssQ0FBTCxDQUFuQixDQUFsQjtBQUNBO0FBQ0QsV0FBT1IsTUFBUDtBQUNBLENBWEQsQyIsImZpbGUiOiIvanMvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzAzYTk2YmQ3ZWM3MzcxODI0YzciLCIvLyBMb2FkZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kKFwiLmxvYWRlci1vbi1jaGFuZ2VcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjZnVsbC1sb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuJChcIi5sb2FkZXItb24tc3VibWl0XCIpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI2Z1bGwtbG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbiQoJy5kb250LXN1Ym1pdC1vbi1lbnRlciwgLmRzb24nKS5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiRU5URVJcIik7XG4gICAgaWYgKGUud2hpY2ggPT0gMTMpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZS53aGljaCA9PSAxMykgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbi8vIE1vZGlmeSBjYXJ0IGl0ZW0gcXVhbnRpdHkgXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kKCcuSW5wdXRCdG5RJykub24oJ2NoYW5nZSBrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgT3JpZ2luYWwgQXJ0aWNsZSBQcmljZVxuICAgIGxldCB2YWx1ZSA9ICQodGhpcykuc2libGluZ3MoJy5BcnRpY2xlUHJpY2UnKS52YWwoKTtcbiAgICAvLyBRdWFudGl0eVxuICAgIGxldCBxdWFudGl0eSA9ICQodGhpcykudmFsKCk7XG4gICAgLy8gTmVyIFZhbHVlXG4gICAgbGV0IG5ld1ZhbHVlID0gKHZhbHVlICogcXVhbnRpdHkpO1xuICAgIC8vIE5ldyBQcmljZSBUYXJnZXRcbiAgICBsZXQgbmV3UHJpY2VUYXJnZXQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnNpYmxpbmdzKCcuVG90YWxJdGVtUHJpY2UnKTtcblxuICAgIGNvbnNvbGUubG9nKHZhbHVlLCBxdWFudGl0eSwgbmV3VmFsdWUpO1xuICAgIG1vZGlmeUNhcnRJdGVtUSgkKHRoaXMpLCBuZXdQcmljZVRhcmdldCwgbmV3VmFsdWUpO1xufSlcblxuZnVuY3Rpb24gbW9kaWZ5Q2FydEl0ZW1RKGUsIG5ld1ByaWNlVGFyZ2V0LCBuZXdWYWx1ZSkge1xuICAgIGUuc2libGluZ3MoJy5JbnB1dEJ0blEnKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgbmV3UHJpY2VUYXJnZXQuaHRtbCgnJCAnICsgbmV3VmFsdWUpO1xufVxuXG5cbi8vIENoZWNrb3V0IHNpZGViYXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cdFx0XG53aW5kb3cuY2hlY2tvdXRTaWRlYmFyID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gJCgnLkNoZWNrb3V0Q2FydCcpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSAkKCcubWFpbi13cmFwcGVyJyk7XG5cbiAgICAvLyBDaGVjayBpZiBsYXlvdXQgbmVlZCB0byBiZSBmaXhlZCBpbiBvcmRlciB0byBub3QgaGF2ZSBzcXVpc2hlZCBjb2xzLlxuICAgIGxldCBmaXhMaXN0TGF5b3V0ID0gZmFsc2U7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTY0NSAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDEyMDApIFxuICAgICAgICBmaXhMaXN0TGF5b3V0ID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE5ldyBjYXJ0IHNpZGViYXJcbiAgICAgICAgc2lkZWJhci5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ2FsbG93LXNpZGViYXInKTtcbiAgICAgICAgaWYoZml4TGlzdExheW91dClcbiAgICAgICAgICAgICQoJy5hcnRpY2xlcy1jb250YWluZXIgLmFydGljbGUnKS5yZW1vdmVDbGFzcygnY29sLXhsLTInKS5hZGRDbGFzcygnY29sLXhsLTMnKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTmV3IGNhcnQgc2lkZWJhclxuICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnYWxsb3ctc2lkZWJhcicpO1xuICAgICAgICBpZihmaXhMaXN0TGF5b3V0KVxuICAgICAgICAgICAgJCgnLmFydGljbGVzLWNvbnRhaW5lciAuYXJ0aWNsZScpLmFkZENsYXNzKCdjb2wteGwtMicpLnJlbW92ZUNsYXNzKCdjb2wteGwtMycpO1xuICAgIH1cblxuXG4gICAgaWYgKHN0YXRlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc2lkZWJhci5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ3Nob3cnKSB7XG4gICAgICAgIHNob3coKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ2hpZGUnKSB7XG4gICAgICAgIGhpZGUoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufVxuXG5cblxud2luZG93Lm9wZW5DaGVja291dERlc2t0b3AgPSBmdW5jdGlvbigpXG57XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAgIGNoZWNrb3V0U2lkZWJhcignc2hvdycpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4vLyAgICAgaWYgKHNjcm9sbCA+IDEyNSkge1xuLy8gICAgICAgICAkKCcuY2hlY2tvdXQtY2FydCcpLmFkZENsYXNzKCdzY3JvbGxlZCcpO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgICAgJCgnLmNoZWNrb3V0LWNhcnQnKS5yZW1vdmVDbGFzcygnc2Nyb2xsZWQnKTtcbi8vICAgICB9XG4vLyB9KTtcblxuXG4vLyBTaWRlYmFyIGNoZWNrb3V0IGFic29sdXRlXG4vLyB3aW5kb3cuY2hlY2tvdXRTaWRlYmFyID0gZnVuY3Rpb24gKGFjdGlvbikge1xuLy8gICAgIGlmIChhY3Rpb24gPT0gJ29wZW4nKSB7XG4vLyAgICAgICAgICQoJyNTaWRlQ29udGFpbmVyJykudG9nZ2xlKDEwMCk7XG4vLyAgICAgICAgICQoJyNNYWluT3ZlcmxheScpLmZhZGVJbigxMDApO1xuLy8gICAgIH1cbi8vICAgICBpZiAoYWN0aW9uID09ICdjbG9zZScpIHtcbi8vICAgICAgICAgJCgnI1NpZGVDb250YWluZXInKS50b2dnbGUoMTAwKTtcbi8vICAgICAgICAgJCgnI01haW5PdmVybGF5JykuZmFkZU91dCgxMDApO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gJCgnI01haW5PdmVybGF5JykuY2xpY2soZnVuY3Rpb24gKCkge1xuLy8gICAgIGNoZWNrb3V0U2lkZWJhcihcImNsb3NlXCIpO1xuLy8gfSk7XG5cbi8vIHdpbmRvdy5vcGVuRmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICBjb25zdCBmaWx0ZXJzID0gJCgnI1NlYXJjaEZpbHRlcnMnKTtcbi8vICAgICBpZiAoZmlsdGVycy5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZScpIHtcbi8vICAgICAgICAgZmlsdGVycy5jc3MoJ2Rpc3BsYXknLCAnaW5oZXJpdCcpO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgICAgZmlsdGVycy5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuLy8gICAgIH1cbi8vIH1cblxuXG53aW5kb3cub3BlbkZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9ICQoJyNTZWFyY2hGaWx0ZXJzJyk7XG4gICAgY29uc3QgdHJpZ2dlciA9ICQoJyNTZWFyY2hGaWx0ZXJzVHJpZ2dlcicpO1xuICAgIGlmKGZpbHRlcnMuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgIHtcbiAgICAgICAgZmlsdGVycy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHRyaWdnZXIuc2hvdygpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmaWx0ZXJzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdHJpZ2dlci5oaWRlKCk7XG4gICAgfVxuXG59XG5cbi8vIEhpZGUgYWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4vLyAgICAgJCgnLmFsZXJ0JykuaGlkZSgxMDApO1xuLy8gfSwgNDAwMCk7XG5cblxuLy8gQ2FydCBSZXN1bWVuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHdpbmRvdy5zaG93Q2FydFJlc3VtZU1vYmlsZSA9IGZ1bmN0aW9uKClcbi8vIHtcbi8vICAgICAkKCcuY2FydC1yZXN1bWUtZGV0YWlscy1tb2JpbGUnKS50b2dnbGVDbGFzcygnSGlkZGVuJywgMTAwKTtcbi8vIH1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBDQVJUXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbi8vIENoZWNrIFN0b2NrIFxud2luZG93LmNoZWNrU2l6ZVN0b2NrID0gZnVuY3Rpb24gKHJvdXRlLCBhcnRpY2xlSWQsIHNpemUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhyb3V0ZSArIFwiIHwgXCIgKyBhcnRpY2xlSWQgKyBcIiB8IFwiICsgc2l6ZSk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gJCgnI0FkZFRvQ2FydEZvcm1CdG4nKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7YXJ0aWNsZUlkOiBhcnRpY2xlSWQsIHNpemU6IHNpemV9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdG9jayA+IDApIHtcbiAgICAgICAgICAgICAgICAkKCcuQXZhaWxhYmxlU3RvY2snKS5odG1sKFwiU3RvY2sgZGlzcG9uaWJsZTogXCIgKyBkYXRhLnN0b2NrKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuc3RvY2sgPD0gMCkge1xuICAgICAgICAgICAgICAgICQoJy5BdmFpbGFibGVTdG9jaycpLmh0bWwoXCJObyBoYXkgc3RvY2sgYWwgbW9tZW50b1wiKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcuQXZhaWxhYmxlU3RvY2snKS5odG1sKFwiUHJvZHVjdG8gbm8gZGlzcG9uaWJsZVwiKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIGNoZWNrU2l6ZVN0b2NrKClcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxud2luZG93LnN1bUFsbEl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgIHN1bSA9IDA7XG4gICAgJCgnLlRvdGFsSXRlbVByaWNlJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KCQodGhpcykuaHRtbCgpKTtcbiAgICB9KTtcbiAgICAkKCcuU3ViVG90YWwnKS5odG1sKHN1bSk7XG59XG5cblxuLy8gU3VtIGRpdnMgdGV4dFxud2luZG93LnN1bURpdnMgPSBmdW5jdGlvbiAob3JpZ2lucywgdGFyZ2V0KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgb3JpZ2lucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlRmxvYXQoJCh0aGlzKS50ZXh0KCkpO1xuICAgIH0pO1xuICAgIHRhcmdldC50ZXh0KHN1bSk7XG59XG5cblxuLy8gU2V0IGNhcnQgaXRlbXMgSlNPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnNldEl0ZW1zRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpdGVtRGF0YSA9IFtdO1xuXG4gICAgJCgnLkl0ZW0tRGF0YScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgIHZhciBwcmljZSA9ICQodGhpcykuZGF0YSgncHJpY2UnKTtcbiAgICAgICAgdmFyIHF1YW50aXR5ID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpdGVtID0ge31cbiAgICAgICAgaXRlbVsnaWQnXSA9IGlkO1xuICAgICAgICBpdGVtWydwcmljZSddID0gcHJpY2U7XG4gICAgICAgIGl0ZW1bJ3F1YW50aXR5J10gPSBxdWFudGl0eTtcbiAgICAgICAgLy8gVXBkYXRlIGRpc3BsYXkgdG90YWwgaXRlbSBwcmljZVxuICAgICAgICB0b3RhbCA9IHByaWNlICogcXVhbnRpdHk7XG4gICAgICAgICQoJy4nICsgaWQgKyAnLVRvdGFsSXRlbVByaWNlJykuaHRtbCh0b3RhbCk7XG4gICAgICAgIFxuICAgICAgICBpdGVtRGF0YS5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH0pO1xuICAgIC8vIFVwZGF0ZSBUb3RhbFxuICAgIGNvbnNvbGUuaW5mbyhpdGVtRGF0YSk7XG4gICAgc3VtQWxsSXRlbXMoKTtcbiAgICAkKCcjSXRlbXMtRGF0YScpLnZhbChpdGVtRGF0YSk7XG59XG5cbi8vIEFkZCBwcm9kdWN0IHRvIGNhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5hZGRUb0NhcnQgPSBmdW5jdGlvbiAocm91dGUsIGRhdGEpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ2ZpcnN0LWl0ZW0nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVsb2FkaW5nXCIpO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSAnc3VjY2VzcycpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicsICcnLCAyNTAwKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgICAgICBzdW1BbGxJdGVtcygpO1xuICAgICAgICAgICAgICAgIG9wZW5DaGVja291dERlc2t0b3AoKTtcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIHN1bUFsbEl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIG9wZW5DaGVja291dERlc2t0b3AoKTtcbiAgICAgICAgICAgICAgICAvLyB9LCAxMDApO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3dhcm5pbmcnKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdVcHMhJywgZGF0YS5tZXNzYWdlLCAnYm90dG9tQ2VudGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gYWRkdG9DYXJ0KClcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ1VwcyEnLCAnSGEgb2N1cnJpZG8gdW4gZXJyb3I6IDxiPicgKyBkYXRhLnJlc3BvbnNlSlNPTlsnbWVzc2FnZSddICsgJzwvYj4nLCAnYm90dG9tQ2VudGVyJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuIFxuXG4vLyBSZW1vdmUgcHJvZHVjdCBmcm9tIGNhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5yZW1vdmVGcm9tQ2FydCA9IGZ1bmN0aW9uIChyb3V0ZSwgaWQsIHF1YW50aXR5LCBkaXYsIGFjdGlvbikge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGl0ZW1pZDogaWQsIHF1YW50aXR5OiBxdWFudGl0eSwgYWN0aW9uOiBhY3Rpb24sIG1ldGhvZDogJ2FqYXgnIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSAnY2FydC1yZW1vdmVkJykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRvdGFscygpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAkKGRpdikuaGlkZSgxMDApO1xuICAgICAgICAgICAgICAgICQoZGl2KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiByZW1vdmVGcm9tQ2FydCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyBJZiBhbiBlcnJvciBwb3BzIHdoZW4gZGVzdHJveWluZyBhbiBpdGVtLCByZWxvYWQgYW5kIHByZXZlbnQgYmFkIG1hZ2ljXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb3RhbHMoKSB7XG4gICAgLy8gTGl2ZSBSZWxvYWRpbmcgc3R1ZmZcbiAgICAkKFwiI1NpZGVDb250YWluZXJJdGVtc0ZpeGVkXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAjU2lkZUNvbnRhaW5lckl0ZW1zRml4ZWRcIik7XG4gICAgJChcIiNTaWRlQ29udGFpbmVySXRlbXNGbG9hdGluZ1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgI1NpZGVDb250YWluZXJJdGVtc0Zsb2F0aW5nXCIpO1xuICAgICQoXCIuVG90YWxDYXJ0SXRlbXNcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5Ub3RhbENhcnRJdGVtc1wiKTtcbiAgICAkKFwiLlRvdGFsQ2FydEl0ZW1zU2lkZWJhclwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLlRvdGFsQ2FydEl0ZW1zU2lkZWJhclwiKTtcbiAgICAkKFwiLkNhcnRTdWJUb3RhbFwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLkNhcnRTdWJUb3RhbFwiKTtcbiAgICAkKFwiLkF2YWlsYWJsZVN0b2NrXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuQXZhaWxhYmxlU3RvY2tcIik7XG59XG5cbi8vIFN1Ym1pdCBGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uIChyb3V0ZSwgdGFyZ2V0LCBkYXRhLCBhY3Rpb24pIHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1dGE6IFwiICsgcm91dGUgKyBcIiBUYXJnZXQ6IFwiICsgdGFyZ2V0ICsgXCIgRGF0YTogXCIgKyBkYXRhICsgXCJBY3Rpb246IFwiKyBhY3Rpb24pO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGRhdGEsIGFjdGlvbjogYWN0aW9uIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PSAncmVsb2FkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIHBhZ2UsIGRlbGV0ZSBwYXJhbWV0dGVycyBhbmQgb3BlbiBjaGVja291dCBzaWRlYmFyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXSArIFwiP2NoZWNrb3V0LW9uXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW4gc3VibWl0Rm9ybScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRvYXN0X2Vycm9yKCcnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInLCAnJyk7XG4gICAgICAgICAgICAgICAgJCgnLlNpZGVDb250YWluZXJFcnJvcicpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAvLyAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiBzdWJtaXRGb3JtKClcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIFZhbGlkYXRlIGFuZCBzZXQgY291cG9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cudmFsaWRhdGVBbmRTZXRDb3Vwb24gPSBmdW5jdGlvbiAocm91dGUsIGNvZGUsIGNhcnRpZCkge1xuICAgIGxldCBjb3Vwb25EaXYgPSAkKCcjQ291cG9uRGl2Jyk7XG4gICAgbGV0IGNvdXBvblNldCA9ICQoJyNTZXR0ZWRDb3Vwb24nKTtcbiAgICBjb25zb2xlLmxvZyhjb2RlLCBjYXJ0aWQpO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGNvZGU6IGNvZGUsIGNhcnRpZDogY2FydGlkIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcHJvYmFuZG8gY3Vww7NuLi4uXCIpO1xuICAgICAgICAgICAgJCgnLkNvdXBvbkxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKCcjQ291cG9uVmFsaWRhdGlvbk1lc3NhZ2UnKS5odG1sKFwiQ3Vww7NuIGFjZXB0YWRvICFcIik7XG4gICAgICAgICAgICAgICAgY291cG9uRGl2LmhpZGUoMjAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdXBvblNldC5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjQ291cG9uVmFsaWRhdGlvbk1lc3NhZ2UnKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLkNvdXBvbkxvYWRlcicpLmFkZENsYXNzKCdIaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBGYXZzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuYWRkQXJ0aWNsZVRvRmF2cyA9IGZ1bmN0aW9uIChyb3V0ZSwgZmF2aWQsIGFydGljbGVpZCwgYWN0aW9uLCBkaXNwbGF5QnV0dG9uKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZmF2X2lkOiBmYXZpZCwgYXJ0aWNsZV9pZDogYXJ0aWNsZWlkIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlICYmIGRhdGEucmVzdWx0ID09ICdhZGRlZCcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLnJlbW92ZUNsYXNzKCdmYXYtaWNvbi1ub2ZhdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5hZGRDbGFzcygnZmF2LWljb24taXNmYXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsICdQcm9kdWN0byBhZ3JlZ2FkbyBhIGZhdm9yaXRvcycsICdib3R0b21DZW50ZXInLCAnJywgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWN0dWFsaXphZG8gLSBTaW4gQWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhheSBhY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSAmJiBkYXRhLnJlc3VsdCA9PSAncmVtb3ZlZCcpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLmFkZENsYXNzKCdmYXYtaWNvbi1ub2ZhdicpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Zhdi1pY29uLWlzZmF2Jyk7XG4gICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgJ1Byb2R1Y3RvIGVsaW1pbmFkbyBkZSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJywgJycsIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0RmF2c1RvdGFsSWNvbihkYXRhLmZhdnNDb3VudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRGYXZzVG90YWxJY29uKGZhdnMpIHtcbiAgICBpZiAoZmF2cyA+IDApIHtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhcicpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5hZGRDbGFzcygnZmEnKTtcbiAgICB9IGVsc2UgaWYgKGZhdnMgPT0gMCkge1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmEnKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYScpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmFyJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLmFkZENsYXNzKCdmYScpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIHNldEZhdnNUb3RhbEljb24oKVwiKTtcbiAgICB9XG59XG5cbndpbmRvdy5yZW1vdmVBcnRpY2xlRnJvbUZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGZhdmlkLCBhY3Rpb24pIHtcbiAgICB2YXIgZG9hY3Rpb24gPSBhY3Rpb247XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZmF2X2lkOiBmYXZpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2FjdGlvbik7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChkb2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICdyZWxvYWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgJ1Byb2R1Y3RvIGVsaW1pbmFkbyBkZSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJywgYWN0aW9uLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhheSBhY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLm1lc3NhZ2VbJ2Vycm9ySW5mbyddKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG53aW5kb3cucmVtb3ZlQWxsQXJ0aWNsZXNGcm9tRmF2cyA9IGZ1bmN0aW9uIChyb3V0ZSwgY3VzdG9tZXJpZCwgYWN0aW9uKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgY3VzdG9tZXJfaWQ6IGN1c3RvbWVyaWQgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZVsnZXJyb3JJbmZvJ10pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IExPR0lOIEFORCBSRUdJU1RFUlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4kKCcjUmVzZWxsZXJCb3gnKS5oaWRlKCk7XG5cbndpbmRvdy5vcGVuUmVzZWxsZXJSZWdpc3RyYXRpb24gPSBmdW5jdGlvbigpXG57XG4gICAgJCgnI0lzUmVzZWxsZXJDaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAkKCcuSWZSZXNlbGxlckVuYWJsZScpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICQoJyNSZXNlbGxlckJveCcpLnNob3coMTAwKTtcbiAgICAkKCcjUmVzZWxsZXJDVEEnKS5oaWRlKDApO1xuICAgICQoJy5Ob3JtYUNsaWVudFRpdGxlJykuaGlkZSgwKTtcbiAgICAkKCcuUmVzZWxsZXJUaXRsZScpLnNob3coMCk7XG59XG5cblxud2luZG93LmNsb3NlUmVzZWxsZXJSZWdpc3RyYXRpb24gPSBmdW5jdGlvbigpXG57XG4gICAgJCgnI0lzUmVzZWxsZXJDaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgJCgnLklmUmVzZWxsZXJFbmFibGUnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICQoJyNSZXNlbGxlckJveCcpLmhpZGUoMCk7XG4gICAgJCgnI1Jlc2VsbGVyQ1RBJykuc2hvdygxMDApO1xuICAgICQoJy5Ob3JtYUNsaWVudFRpdGxlJykuc2hvdygwKTtcbiAgICAkKCcuUmVzZWxsZXJUaXRsZScpLmhpZGUoMCk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLkdlb1Byb3ZTZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHByb3ZfaWQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBnZXRHZW9Mb2NzKHByb3ZfaWQpO1xuICAgIH0pO1xufSk7XG5cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBNSVggRlVOQ1RJT05TXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbndpbmRvdy5jbG9zZUVsZW1lbnQgPSBmdW5jdGlvbihzZWxlY3RvcilcbntcbiAgICAkKHNlbGVjdG9yKS5oaWRlKDEwMCk7XG59XG5cbndpbmRvdy5nZXRQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtZXRlck5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbCxcbiAgICAgICAgdG1wID0gW107XG4gICAgbG9jYXRpb24uc2VhcmNoXG4gICAgICAgIC5zdWJzdHIoMSlcbiAgICAgICAgLnNwbGl0KFwiJlwiKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB0bXAgPSBpdGVtLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgaWYgKHRtcFswXSA9PT0gcGFyYW1ldGVyTmFtZSkgcmVzdWx0ID0gZGVjb2RlVVJJQ29tcG9uZW50KHRtcFsxXSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxud2luZG93LmdldFBhcmFtcyA9IGZ1bmN0aW9uKHVybCkge1xuICAgIHZhciBwYXJhbXMgPSB7fTtcblx0dmFyIHBhcnNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0cGFyc2VyLmhyZWYgPSB1cmw7XG5cdHZhciBxdWVyeSA9IHBhcnNlci5zZWFyY2guc3Vic3RyaW5nKDEpO1xuXHR2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJyk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdCgnPScpO1xuXHRcdHBhcmFtc1twYWlyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcblx0fVxuXHRyZXR1cm4gcGFyYW1zO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NjcmlwdHMuanMiXSwic291cmNlUm9vdCI6IiJ9