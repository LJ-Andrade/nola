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
        data: data,
        success: function success(data) {
            console.log(data);
            if (data.response == 'success') {
                toast_success('Ok!', data.message, 'bottomCenter', '', 2500);
                updateTotals();
                setItemsData();
                setTimeout(function () {
                    setItemsData();
                    sumAllItems();
                    openCheckoutDesktop();
                }, 100);
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
                console.log(data);
                updateTotals();
                window.location = window.location.href.split("?")[0];
                setItemsData();
            } else if (data.response == 'success') {
                $(div).hide(100);
                $(div).remove();
                updateTotals();
                console.log(div);
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
    debugger;
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
            $('#Error').html(data.responseText);
            console.log("Error en submitForm()");
            console.log(data);
            // location.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIwYzUxYmYwMGMwY2Q1NmUxNmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInJlbW92ZUNsYXNzIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInNpYmxpbmdzIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiaHRtbCIsIndpbmRvdyIsImNoZWNrb3V0U2lkZWJhciIsInN0YXRlIiwic2lkZWJhciIsIndyYXBwZXIiLCJmaXhMaXN0TGF5b3V0Iiwid2lkdGgiLCJzaG93IiwiYWRkQ2xhc3MiLCJoaWRlIiwidW5kZWZpbmVkIiwiaGFzQ2xhc3MiLCJvcGVuQ2hlY2tvdXREZXNrdG9wIiwib3BlbkZpbHRlcnMiLCJmaWx0ZXJzIiwidHJpZ2dlciIsImNoZWNrU2l6ZVN0b2NrIiwicm91dGUiLCJhcnRpY2xlSWQiLCJzaXplIiwic3VibWl0QnV0dG9uIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJzdG9jayIsInByb3AiLCJlcnJvciIsInN1bUFsbEl0ZW1zIiwic3VtIiwiZWFjaCIsImluZGV4IiwicGFyc2VJbnQiLCJzdW1EaXZzIiwib3JpZ2lucyIsInRhcmdldCIsInBhcnNlRmxvYXQiLCJ0ZXh0Iiwic2V0SXRlbXNEYXRhIiwiaXRlbURhdGEiLCJpZCIsInByaWNlIiwiaXRlbSIsInRvdGFsIiwicHVzaCIsImluZm8iLCJhZGRUb0NhcnQiLCJyZXNwb25zZSIsInRvYXN0X3N1Y2Nlc3MiLCJtZXNzYWdlIiwidXBkYXRlVG90YWxzIiwic2V0VGltZW91dCIsInJlc3BvbnNlSlNPTiIsInJlbW92ZUZyb21DYXJ0IiwiZGl2IiwiYWN0aW9uIiwiaXRlbWlkIiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJyZW1vdmUiLCJyZWxvYWQiLCJsb2FkIiwic3VibWl0Rm9ybSIsInRvYXN0X2Vycm9yIiwicmVzcG9uc2VUZXh0IiwidmFsaWRhdGVBbmRTZXRDb3Vwb24iLCJjb2RlIiwiY2FydGlkIiwiY291cG9uRGl2IiwiY291cG9uU2V0IiwiYmVmb3JlU2VuZCIsImNvbXBsZXRlIiwiYWRkQXJ0aWNsZVRvRmF2cyIsImZhdmlkIiwiYXJ0aWNsZWlkIiwiZGlzcGxheUJ1dHRvbiIsImZhdl9pZCIsImFydGljbGVfaWQiLCJyZXN1bHQiLCJzZXRGYXZzVG90YWxJY29uIiwiZmF2c0NvdW50IiwiZmF2cyIsInJlbW92ZUFydGljbGVGcm9tRmF2cyIsImRvYWN0aW9uIiwicmVtb3ZlQWxsQXJ0aWNsZXNGcm9tRmF2cyIsImN1c3RvbWVyaWQiLCJjdXN0b21lcl9pZCIsIm9wZW5SZXNlbGxlclJlZ2lzdHJhdGlvbiIsImNsb3NlUmVzZWxsZXJSZWdpc3RyYXRpb24iLCJkb2N1bWVudCIsInJlYWR5IiwicHJvdl9pZCIsImdldEdlb0xvY3MiLCJjbG9zZUVsZW1lbnQiLCJzZWxlY3RvciIsImdldFBhcmFtIiwicGFyYW1ldGVyTmFtZSIsInRtcCIsInNlYXJjaCIsInN1YnN0ciIsImZvckVhY2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJnZXRQYXJhbXMiLCJwYXJhbXMiLCJwYXJzZXIiLCJjcmVhdGVFbGVtZW50IiwicXVlcnkiLCJzdWJzdHJpbmciLCJ2YXJzIiwiaSIsImxlbmd0aCIsInBhaXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0FBLEVBQUUsbUJBQUYsRUFBdUJDLEVBQXZCLENBQTBCLFFBQTFCLEVBQW9DLFlBQVk7QUFDNUNELE1BQUUsY0FBRixFQUFrQkUsV0FBbEIsQ0FBOEIsUUFBOUI7QUFDQSxXQUFPLElBQVA7QUFDSCxDQUhEOztBQUtBRixFQUFFLG1CQUFGLEVBQXVCQyxFQUF2QixDQUEwQixRQUExQixFQUFvQyxZQUFZO0FBQzVDRCxNQUFFLGNBQUYsRUFBa0JFLFdBQWxCLENBQThCLFFBQTlCO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsQ0FIRDs7QUFLQUYsRUFBRSw4QkFBRixFQUFrQ0csUUFBbEMsQ0FBMkMsVUFBVUMsQ0FBVixFQUFhO0FBQ3BEQyxZQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLFFBQUlGLEVBQUVHLEtBQUYsSUFBVyxFQUFmLEVBQW1CLE9BQU8sS0FBUDtBQUNuQixRQUFJSCxFQUFFRyxLQUFGLElBQVcsRUFBZixFQUFtQkgsRUFBRUksY0FBRjtBQUN0QixDQUpEOztBQU1BO0FBQ0E7QUFDQVIsRUFBRSxZQUFGLEVBQWdCQyxFQUFoQixDQUFtQixjQUFuQixFQUFtQyxZQUFZO0FBQzNDO0FBQ0EsUUFBSVEsUUFBUVQsRUFBRSxJQUFGLEVBQVFVLFFBQVIsQ0FBaUIsZUFBakIsRUFBa0NDLEdBQWxDLEVBQVo7QUFDQTtBQUNBLFFBQUlDLFdBQVdaLEVBQUUsSUFBRixFQUFRVyxHQUFSLEVBQWY7QUFDQTtBQUNBLFFBQUlFLFdBQVlKLFFBQVFHLFFBQXhCO0FBQ0E7QUFDQSxRQUFJRSxpQkFBaUJkLEVBQUUsSUFBRixFQUFRZSxNQUFSLEdBQWlCQSxNQUFqQixHQUEwQkEsTUFBMUIsR0FBbUNMLFFBQW5DLENBQTRDLGlCQUE1QyxDQUFyQjs7QUFFQUwsWUFBUUMsR0FBUixDQUFZRyxLQUFaLEVBQW1CRyxRQUFuQixFQUE2QkMsUUFBN0I7QUFDQUcsb0JBQWdCaEIsRUFBRSxJQUFGLENBQWhCLEVBQXlCYyxjQUF6QixFQUF5Q0QsUUFBekM7QUFDSCxDQVpEOztBQWNBLFNBQVNHLGVBQVQsQ0FBeUJaLENBQXpCLEVBQTRCVSxjQUE1QixFQUE0Q0QsUUFBNUMsRUFBc0Q7QUFDbERULE1BQUVNLFFBQUYsQ0FBVyxZQUFYLEVBQXlCUixXQUF6QixDQUFxQyxRQUFyQztBQUNBWSxtQkFBZUcsSUFBZixDQUFvQixPQUFPSixRQUEzQjtBQUNIOztBQUdEO0FBQ0E7QUFDQUssT0FBT0MsZUFBUCxHQUF5QixVQUFVQyxLQUFWLEVBQWlCOztBQUV0QyxRQUFNQyxVQUFVckIsRUFBRSxlQUFGLENBQWhCO0FBQ0EsUUFBTXNCLFVBQVV0QixFQUFFLGVBQUYsQ0FBaEI7O0FBRUE7QUFDQSxRQUFJdUIsZ0JBQWdCLEtBQXBCO0FBQ0EsUUFBSXZCLEVBQUVrQixNQUFGLEVBQVVNLEtBQVYsS0FBb0IsSUFBcEIsSUFBNEJ4QixFQUFFa0IsTUFBRixFQUFVTSxLQUFWLEtBQW9CLElBQXBELEVBQ0lELGdCQUFnQixJQUFoQjs7QUFFSixRQUFNRSxPQUFPLFNBQVBBLElBQU8sR0FBWTtBQUNyQjtBQUNBSixnQkFBUUssUUFBUixDQUFpQixRQUFqQjtBQUNBSixnQkFBUUksUUFBUixDQUFpQixlQUFqQjtBQUNBLFlBQUdILGFBQUgsRUFDSXZCLEVBQUUsOEJBQUYsRUFBa0NFLFdBQWxDLENBQThDLFVBQTlDLEVBQTBEd0IsUUFBMUQsQ0FBbUUsVUFBbkU7QUFDUCxLQU5EOztBQVFBLFFBQU1DLE9BQU8sU0FBUEEsSUFBTyxHQUFZO0FBQ3JCO0FBQ0FOLGdCQUFRbkIsV0FBUixDQUFvQixRQUFwQjtBQUNBb0IsZ0JBQVFwQixXQUFSLENBQW9CLGVBQXBCO0FBQ0EsWUFBR3FCLGFBQUgsRUFDSXZCLEVBQUUsOEJBQUYsRUFBa0MwQixRQUFsQyxDQUEyQyxVQUEzQyxFQUF1RHhCLFdBQXZELENBQW1FLFVBQW5FO0FBQ1AsS0FORDs7QUFTQSxRQUFJa0IsU0FBU1EsU0FBYixFQUF3QjtBQUNwQixZQUFJUCxRQUFRUSxRQUFSLENBQWlCLFFBQWpCLENBQUosRUFBZ0M7QUFDNUJGO0FBQ0gsU0FGRCxNQUVPO0FBQ0hGO0FBQ0g7QUFDSixLQU5ELE1BTU8sSUFBSUwsU0FBUyxNQUFiLEVBQXFCO0FBQ3hCSztBQUNBLGVBQU8sS0FBUDtBQUNILEtBSE0sTUFHQSxJQUFJTCxTQUFTLE1BQWIsRUFBcUI7QUFDeEJPO0FBQ0EsZUFBTyxLQUFQO0FBQ0g7QUFFSixDQXpDRDs7QUE2Q0FULE9BQU9ZLG1CQUFQLEdBQTZCLFlBQzdCO0FBQ0ksUUFBSTlCLEVBQUVrQixNQUFGLEVBQVVNLEtBQVYsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekJMLHdCQUFnQixNQUFoQjtBQUNIO0FBQ0QsV0FBTyxLQUFQO0FBQ0gsQ0FORDs7QUFTQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBRCxPQUFPYSxXQUFQLEdBQXFCLFlBQVk7QUFDN0IsUUFBTUMsVUFBVWhDLEVBQUUsZ0JBQUYsQ0FBaEI7QUFDQSxRQUFNaUMsVUFBVWpDLEVBQUUsdUJBQUYsQ0FBaEI7QUFDQSxRQUFHZ0MsUUFBUUgsUUFBUixDQUFpQixRQUFqQixDQUFILEVBQ0E7QUFDSUcsZ0JBQVE5QixXQUFSLENBQW9CLFFBQXBCO0FBQ0ErQixnQkFBUVIsSUFBUjtBQUNILEtBSkQsTUFNQTtBQUNJTyxnQkFBUU4sUUFBUixDQUFpQixRQUFqQjtBQUNBTyxnQkFBUU4sSUFBUjtBQUNIO0FBRUosQ0FkRDs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQVQsT0FBT2dCLGNBQVAsR0FBd0IsVUFBVUMsS0FBVixFQUFpQkMsU0FBakIsRUFBNEJDLElBQTVCLEVBQWtDO0FBQ3REO0FBQ0EsUUFBTUMsZUFBZXRDLEVBQUUsbUJBQUYsQ0FBckI7QUFDQUEsTUFBRXVDLElBQUYsQ0FBTztBQUNIQyxhQUFLTCxLQURGO0FBRUhNLGdCQUFRLEtBRkw7QUFHSEMsa0JBQVUsTUFIUDtBQUlIQyxjQUFNLEVBQUNQLFdBQVdBLFNBQVosRUFBdUJDLE1BQU1BLElBQTdCLEVBSkg7QUFLSE8saUJBQVMsaUJBQVVELElBQVYsRUFBZ0I7QUFDckJ0QyxvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNBLGdCQUFJQSxLQUFLRSxLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEI3QyxrQkFBRSxpQkFBRixFQUFxQmlCLElBQXJCLENBQTBCLHVCQUF1QjBCLEtBQUtFLEtBQXREO0FBQ0FQLDZCQUFhUSxJQUFiLENBQWtCLFVBQWxCLEVBQThCLEtBQTlCO0FBQ0gsYUFIRCxNQUdPLElBQUlILEtBQUtFLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUN4QjdDLGtCQUFFLGlCQUFGLEVBQXFCaUIsSUFBckIsQ0FBMEIseUJBQTFCO0FBQ0FxQiw2QkFBYVEsSUFBYixDQUFrQixVQUFsQixFQUE4QixJQUE5QjtBQUNIO0FBQ0osU0FkRTtBQWVIQyxlQUFPLGVBQVVKLElBQVYsRUFBZ0I7QUFDbkIzQyxjQUFFLGlCQUFGLEVBQXFCaUIsSUFBckIsQ0FBMEIsd0JBQTFCO0FBQ0FxQix5QkFBYVEsSUFBYixDQUFrQixVQUFsQixFQUE4QixJQUE5QjtBQUNBO0FBQ0F6QyxvQkFBUUMsR0FBUixDQUFZLDJCQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0E7QUFDSDtBQXRCRSxLQUFQO0FBd0JILENBM0JEOztBQThCQXpCLE9BQU84QixXQUFQLEdBQXFCLFlBQVk7QUFDN0JDLFVBQU0sQ0FBTjtBQUNBakQsTUFBRSxpQkFBRixFQUFxQmtELElBQXJCLENBQTBCLFVBQVVDLEtBQVYsRUFBaUI7QUFDdkNGLGVBQU9HLFNBQVNwRCxFQUFFLElBQUYsRUFBUWlCLElBQVIsRUFBVCxDQUFQO0FBQ0gsS0FGRDtBQUdBakIsTUFBRSxXQUFGLEVBQWVpQixJQUFmLENBQW9CZ0MsR0FBcEI7QUFDSCxDQU5EOztBQVNBO0FBQ0EvQixPQUFPbUMsT0FBUCxHQUFpQixVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUN4QyxRQUFJTixNQUFNLENBQVY7QUFDQUssWUFBUUosSUFBUixDQUFhLFlBQVk7QUFDckJELGVBQU9PLFdBQVd4RCxFQUFFLElBQUYsRUFBUXlELElBQVIsRUFBWCxDQUFQO0FBQ0gsS0FGRDtBQUdBRixXQUFPRSxJQUFQLENBQVlSLEdBQVo7QUFDSCxDQU5EOztBQVNBO0FBQ0E7QUFDQS9CLE9BQU93QyxZQUFQLEdBQXNCLFlBQVk7QUFDOUJDLGVBQVcsRUFBWDs7QUFFQTNELE1BQUUsWUFBRixFQUFnQmtELElBQWhCLENBQXFCLFlBQVk7QUFDN0IsWUFBSVUsS0FBSzVELEVBQUUsSUFBRixFQUFRMkMsSUFBUixDQUFhLElBQWIsQ0FBVDtBQUNBLFlBQUlrQixRQUFRN0QsRUFBRSxJQUFGLEVBQVEyQyxJQUFSLENBQWEsT0FBYixDQUFaO0FBQ0EsWUFBSS9CLFdBQVdaLEVBQUUsSUFBRixFQUFRVyxHQUFSLEVBQWY7O0FBRUFtRCxlQUFPLEVBQVA7QUFDQUEsYUFBSyxJQUFMLElBQWFGLEVBQWI7QUFDQUUsYUFBSyxPQUFMLElBQWdCRCxLQUFoQjtBQUNBQyxhQUFLLFVBQUwsSUFBbUJsRCxRQUFuQjtBQUNBO0FBQ0FtRCxnQkFBUUYsUUFBUWpELFFBQWhCO0FBQ0FaLFVBQUUsTUFBTTRELEVBQU4sR0FBVyxpQkFBYixFQUFnQzNDLElBQWhDLENBQXFDOEMsS0FBckM7O0FBRUFKLGlCQUFTSyxJQUFULENBQWNGLElBQWQ7QUFDSCxLQWREO0FBZUE7QUFDQXpELFlBQVE0RCxJQUFSLENBQWFOLFFBQWI7QUFDQVg7QUFDQWhELE1BQUUsYUFBRixFQUFpQlcsR0FBakIsQ0FBcUJnRCxRQUFyQjtBQUNILENBdEJEOztBQXdCQTtBQUNBO0FBQ0F6QyxPQUFPZ0QsU0FBUCxHQUFtQixVQUFVL0IsS0FBVixFQUFpQlEsSUFBakIsRUFBdUI7QUFDdEMzQyxNQUFFdUMsSUFBRixDQUFPO0FBQ0hDLGFBQUtMLEtBREY7QUFFSE0sZ0JBQVEsTUFGTDtBQUdIQyxrQkFBVSxNQUhQO0FBSUhDLGNBQU1BLElBSkg7QUFLSEMsaUJBQVMsaUJBQVVELElBQVYsRUFBZ0I7QUFDckJ0QyxvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNBLGdCQUFJQSxLQUFLd0IsUUFBTCxJQUFpQixTQUFyQixFQUFnQztBQUM1QkMsOEJBQWMsS0FBZCxFQUFxQnpCLEtBQUswQixPQUExQixFQUFtQyxjQUFuQyxFQUFtRCxFQUFuRCxFQUF1RCxJQUF2RDtBQUNBQztBQUNBWjtBQUNBYSwyQkFBVyxZQUFZO0FBQ25CYjtBQUNBVjtBQUNBbEI7QUFDSCxpQkFKRCxFQUlHLEdBSkg7QUFLSCxhQVRELE1BU08sSUFBSWEsS0FBS3dCLFFBQUwsSUFBaUIsU0FBckIsRUFBZ0M7QUFDbkNDLDhCQUFjLE1BQWQsRUFBc0J6QixLQUFLMEIsT0FBM0IsRUFBb0MsY0FBcEM7QUFDSDtBQUNKLFNBbkJFO0FBb0JIdEIsZUFBTyxlQUFVSixJQUFWLEVBQWdCO0FBQ25CO0FBQ0E7QUFDQXRDLG9CQUFRQyxHQUFSLENBQVksc0JBQVo7QUFDQUQsb0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDQXlCLDBCQUFjLE1BQWQsRUFBc0IsOEJBQThCekIsS0FBSzZCLFlBQUwsQ0FBa0IsU0FBbEIsQ0FBOUIsR0FBNkQsTUFBbkYsRUFBMkYsY0FBM0Y7QUFDSDtBQTFCRSxLQUFQO0FBNEJILENBN0JEOztBQWlDQTtBQUNBO0FBQ0F0RCxPQUFPdUQsY0FBUCxHQUF3QixVQUFVdEMsS0FBVixFQUFpQnlCLEVBQWpCLEVBQXFCaEQsUUFBckIsRUFBK0I4RCxHQUEvQixFQUFvQ0MsTUFBcEMsRUFBNEM7QUFDaEUzRSxNQUFFdUMsSUFBRixDQUFPO0FBQ0hDLGFBQUtMLEtBREY7QUFFSE0sZ0JBQVEsTUFGTDtBQUdIQyxrQkFBVSxNQUhQO0FBSUhDLGNBQU0sRUFBRWlDLFFBQVFoQixFQUFWLEVBQWNoRCxVQUFVQSxRQUF4QixFQUFrQytELFFBQVFBLE1BQTFDLEVBQWtEbEMsUUFBUSxNQUExRCxFQUpIO0FBS0hHLGlCQUFTLGlCQUFVRCxJQUFWLEVBQWdCO0FBQ3JCLGdCQUFJQSxLQUFLd0IsUUFBTCxJQUFpQixjQUFyQixFQUFxQztBQUNqQzlELHdCQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0EyQjtBQUNBcEQsdUJBQU8yRCxRQUFQLEdBQWtCM0QsT0FBTzJELFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFsQjtBQUNBckI7QUFDSCxhQUxELE1BS08sSUFBSWYsS0FBS3dCLFFBQUwsSUFBaUIsU0FBckIsRUFBZ0M7QUFDbkNuRSxrQkFBRTBFLEdBQUYsRUFBTy9DLElBQVAsQ0FBWSxHQUFaO0FBQ0EzQixrQkFBRTBFLEdBQUYsRUFBT00sTUFBUDtBQUNBVjtBQUNBakUsd0JBQVFDLEdBQVIsQ0FBWW9FLEdBQVo7QUFDQWhCO0FBQ0g7QUFDSixTQWxCRTtBQW1CSFgsZUFBTyxlQUFVSixJQUFWLEVBQWdCO0FBQ25CO0FBQ0F0QyxvQkFBUUMsR0FBUixDQUFZLDJCQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0E7QUFDQWtDLHFCQUFTSSxNQUFUO0FBQ0g7QUF6QkUsS0FBUDtBQTJCSCxDQTVCRDs7QUE4QkEsU0FBU1gsWUFBVCxHQUF3QjtBQUNwQjtBQUNBdEUsTUFBRSwwQkFBRixFQUE4QmtGLElBQTlCLENBQW1DaEUsT0FBTzJELFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLDJCQUExRDtBQUNBOUUsTUFBRSw2QkFBRixFQUFpQ2tGLElBQWpDLENBQXNDaEUsT0FBTzJELFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLDhCQUE3RDtBQUNBOUUsTUFBRSxpQkFBRixFQUFxQmtGLElBQXJCLENBQTBCaEUsT0FBTzJELFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLGtCQUFqRDtBQUNBOUUsTUFBRSx3QkFBRixFQUE0QmtGLElBQTVCLENBQWlDaEUsT0FBTzJELFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLHlCQUF4RDtBQUNBOUUsTUFBRSxlQUFGLEVBQW1Ca0YsSUFBbkIsQ0FBd0JoRSxPQUFPMkQsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsZ0JBQS9DO0FBQ0E5RSxNQUFFLGlCQUFGLEVBQXFCa0YsSUFBckIsQ0FBMEJoRSxPQUFPMkQsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsa0JBQWpEO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBNUQsT0FBT2lFLFVBQVAsR0FBb0IsVUFBVWhELEtBQVYsRUFBaUJvQixNQUFqQixFQUF5QlosSUFBekIsRUFBK0JnQyxNQUEvQixFQUF1QztBQUN2RHRFLFlBQVFDLEdBQVIsQ0FBWSxXQUFXNkIsS0FBWCxHQUFtQixXQUFuQixHQUFpQ29CLE1BQWpDLEdBQTBDLFNBQTFDLEdBQXNEWixJQUF0RCxHQUE2RCxVQUE3RCxHQUF5RWdDLE1BQXJGO0FBQ0E7QUFDQTNFLE1BQUV1QyxJQUFGLENBQU87QUFDSEMsYUFBS0wsS0FERjtBQUVITSxnQkFBUSxNQUZMO0FBR0hDLGtCQUFVLE1BSFA7QUFJSEMsY0FBTSxFQUFFQSxVQUFGLEVBQVFnQyxRQUFRQSxNQUFoQixFQUpIO0FBS0gvQixpQkFBUyxpQkFBVUQsSUFBVixFQUFnQjtBQUNyQnRDLG9CQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0EsZ0JBQUlBLEtBQUt3QixRQUFMLElBQWlCLFNBQXJCLEVBQWdDO0FBQzVCOUQsd0JBQVFDLEdBQVIsQ0FBWWlELE1BQVo7QUFDQSxvQkFBSUEsVUFBVSxRQUFkLEVBQXdCO0FBQ3BCO0FBQ0FyQywyQkFBTzJELFFBQVAsR0FBa0IzRCxPQUFPMkQsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLElBQXFDLGNBQXZEO0FBQ0gsaUJBSEQsTUFHTztBQUNIN0QsMkJBQU8yRCxRQUFQLENBQWdCQyxJQUFoQixHQUF1QnZCLE1BQXZCO0FBQ0g7QUFDSixhQVJELE1BUU87QUFDSGxELHdCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQUQsd0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDQXlDLDRCQUFZLEVBQVosRUFBZ0J6QyxLQUFLMEIsT0FBckIsRUFBOEIsY0FBOUIsRUFBOEMsRUFBOUM7QUFDQXJFLGtCQUFFLHFCQUFGLEVBQXlCaUIsSUFBekIsQ0FBOEIwQixLQUFLMEIsT0FBbkM7QUFDQTtBQUNIO0FBQ0RyRSxjQUFFLFFBQUYsRUFBWWlCLElBQVosQ0FBaUIwQixLQUFLMEMsWUFBdEI7QUFDSCxTQXZCRTtBQXdCSHRDLGVBQU8sZUFBVUosSUFBVixFQUFnQjtBQUNuQjNDLGNBQUUsUUFBRixFQUFZaUIsSUFBWixDQUFpQjBCLEtBQUswQyxZQUF0QjtBQUNBaEYsb0JBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNBO0FBQ0g7QUE3QkUsS0FBUDtBQStCSCxDQWxDRDs7QUFvQ0E7QUFDQTtBQUNBekIsT0FBT29FLG9CQUFQLEdBQThCLFVBQVVuRCxLQUFWLEVBQWlCb0QsSUFBakIsRUFBdUJDLE1BQXZCLEVBQStCO0FBQ3pELFFBQUlDLFlBQVl6RixFQUFFLFlBQUYsQ0FBaEI7QUFDQSxRQUFJMEYsWUFBWTFGLEVBQUUsZUFBRixDQUFoQjtBQUNBSyxZQUFRQyxHQUFSLENBQVlpRixJQUFaLEVBQWtCQyxNQUFsQjtBQUNBeEYsTUFBRXVDLElBQUYsQ0FBTztBQUNIQyxhQUFLTCxLQURGO0FBRUhNLGdCQUFRLE1BRkw7QUFHSEMsa0JBQVUsTUFIUDtBQUlIQyxjQUFNLEVBQUU0QyxNQUFNQSxJQUFSLEVBQWNDLFFBQVFBLE1BQXRCLEVBSkg7QUFLSEcsb0JBQVksc0JBQVk7QUFDcEJ0RixvQkFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0FOLGNBQUUsZUFBRixFQUFtQkUsV0FBbkIsQ0FBK0IsUUFBL0I7QUFDSCxTQVJFO0FBU0gwQyxpQkFBUyxpQkFBVUQsSUFBVixFQUFnQjtBQUNyQixnQkFBSUEsS0FBS3dCLFFBQUwsSUFBaUIsSUFBckIsRUFBMkI7QUFDdkJuRSxrQkFBRSwwQkFBRixFQUE4QmlCLElBQTlCLENBQW1DLGtCQUFuQztBQUNBd0UsMEJBQVU5RCxJQUFWLENBQWUsR0FBZixFQUFvQixZQUFZO0FBQzVCK0QsOEJBQVV4RixXQUFWLENBQXNCLFFBQXRCO0FBQ0gsaUJBRkQ7QUFHQTJFLHlCQUFTSSxNQUFUO0FBQ0gsYUFORCxNQU1PLElBQUl0QyxLQUFLd0IsUUFBTCxJQUFpQixJQUFyQixFQUEyQjtBQUM5Qm5FLGtCQUFFLDBCQUFGLEVBQThCaUIsSUFBOUIsQ0FBbUMwQixLQUFLMEIsT0FBeEM7QUFDSDtBQUNKLFNBbkJFO0FBb0JIdEIsZUFBTyxlQUFVSixJQUFWLEVBQWdCO0FBQ25CM0MsY0FBRSwwQkFBRixFQUE4QmlCLElBQTlCLENBQW1DMEIsS0FBSzBDLFlBQXhDO0FBQ0FoRixvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNILFNBdkJFO0FBd0JIaUQsa0JBQVUsb0JBQVk7QUFDbEI1RixjQUFFLGVBQUYsRUFBbUIwQixRQUFuQixDQUE0QixRQUE1QjtBQUNIO0FBMUJFLEtBQVA7QUE0QkgsQ0FoQ0Q7O0FBa0NBO0FBQ0E7QUFDQVIsT0FBTzJFLGdCQUFQLEdBQTBCLFVBQVUxRCxLQUFWLEVBQWlCMkQsS0FBakIsRUFBd0JDLFNBQXhCLEVBQW1DcEIsTUFBbkMsRUFBMkNxQixhQUEzQyxFQUEwRDtBQUNoRmhHLE1BQUV1QyxJQUFGLENBQU87QUFDSEMsYUFBS0wsS0FERjtBQUVITSxnQkFBUSxNQUZMO0FBR0hDLGtCQUFVLE1BSFA7QUFJSEMsY0FBTSxFQUFFc0QsUUFBUUgsS0FBVixFQUFpQkksWUFBWUgsU0FBN0IsRUFKSDtBQUtIbkQsaUJBQVMsaUJBQVVELElBQVYsRUFBZ0I7QUFDckIsZ0JBQUlBLEtBQUt3QixRQUFMLElBQWlCLElBQWpCLElBQXlCeEIsS0FBS3dELE1BQUwsSUFBZSxPQUE1QyxFQUFxRDtBQUNqRCx3QkFBUXhCLE1BQVI7QUFDSSx5QkFBSyxRQUFMO0FBQ0lFLGlDQUFTSSxNQUFUO0FBQ0E7QUFDSix5QkFBSyxNQUFMO0FBQ0llLHNDQUFjOUYsV0FBZCxDQUEwQixnQkFBMUI7QUFDQThGLHNDQUFjdEUsUUFBZCxDQUF1QixnQkFBdkI7QUFDQTBDLHNDQUFjLEtBQWQsRUFBcUIsK0JBQXJCLEVBQXNELGNBQXRELEVBQXNFLEVBQXRFLEVBQTBFLElBQTFFO0FBQ0E7QUFDSix5QkFBSyxNQUFMO0FBQ0kvRCxnQ0FBUUMsR0FBUixDQUFZLDBCQUFaO0FBQ0o7QUFDSUQsZ0NBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0E7QUFiUjtBQWVILGFBaEJELE1BZ0JPLElBQUlxQyxLQUFLd0IsUUFBTCxJQUFpQixJQUFqQixJQUF5QnhCLEtBQUt3RCxNQUFMLElBQWUsU0FBNUMsRUFBdUQ7QUFDMURILDhCQUFjdEUsUUFBZCxDQUF1QixnQkFBdkI7QUFDQXNFLDhCQUFjOUYsV0FBZCxDQUEwQixnQkFBMUI7QUFDQWtFLDhCQUFjLEtBQWQsRUFBcUIsaUNBQXJCLEVBQXdELGNBQXhELEVBQXdFLEVBQXhFLEVBQTRFLElBQTVFO0FBQ0g7QUFDRGdDLDZCQUFpQnpELEtBQUswRCxTQUF0QjtBQUNILFNBNUJFO0FBNkJIdEQsZUFBTyxlQUFVSixJQUFWLEVBQWdCO0FBQ25CM0MsY0FBRSxRQUFGLEVBQVlpQixJQUFaLENBQWlCMEIsS0FBSzBDLFlBQXRCO0FBQ0FoRixvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNIO0FBaENFLEtBQVA7QUFrQ0gsQ0FuQ0Q7O0FBcUNBLFNBQVN5RCxnQkFBVCxDQUEwQkUsSUFBMUIsRUFBZ0M7QUFDNUIsUUFBSUEsT0FBTyxDQUFYLEVBQWM7QUFDVnRHLFVBQUUsY0FBRixFQUFrQkUsV0FBbEIsQ0FBOEIsS0FBOUI7QUFDQUYsVUFBRSxjQUFGLEVBQWtCMEIsUUFBbEIsQ0FBMkIsSUFBM0I7QUFDSCxLQUhELE1BR08sSUFBSTRFLFFBQVEsQ0FBWixFQUFlO0FBQ2xCdEcsVUFBRSxjQUFGLEVBQWtCRSxXQUFsQixDQUE4QixJQUE5QjtBQUNBRixVQUFFLGNBQUYsRUFBa0IwQixRQUFsQixDQUEyQixLQUEzQjtBQUNILEtBSE0sTUFHQTtBQUNIMUIsVUFBRSxjQUFGLEVBQWtCRSxXQUFsQixDQUE4QixJQUE5QjtBQUNBRixVQUFFLGNBQUYsRUFBa0JFLFdBQWxCLENBQThCLEtBQTlCO0FBQ0FGLFVBQUUsY0FBRixFQUFrQjBCLFFBQWxCLENBQTJCLElBQTNCO0FBQ0FyQixnQkFBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0g7QUFDSjs7QUFFRFksT0FBT3FGLHFCQUFQLEdBQStCLFVBQVVwRSxLQUFWLEVBQWlCMkQsS0FBakIsRUFBd0JuQixNQUF4QixFQUFnQztBQUMzRCxRQUFJNkIsV0FBVzdCLE1BQWY7QUFDQTNFLE1BQUV1QyxJQUFGLENBQU87QUFDSEMsYUFBS0wsS0FERjtBQUVITSxnQkFBUSxNQUZMO0FBR0hDLGtCQUFVLE1BSFA7QUFJSEMsY0FBTSxFQUFFc0QsUUFBUUgsS0FBVixFQUpIO0FBS0hsRCxpQkFBUyxpQkFBVUQsSUFBVixFQUFnQjtBQUNyQjNDLGNBQUUsUUFBRixFQUFZaUIsSUFBWixDQUFpQjBCLEtBQUswQyxZQUF0QjtBQUNBaEYsb0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDQSxnQkFBSUEsS0FBS3dCLFFBQUwsSUFBaUIsSUFBckIsRUFBMkI7QUFDdkI5RCx3QkFBUUMsR0FBUixDQUFZa0csUUFBWjtBQUNBLHdCQUFRQSxRQUFSO0FBQ0kseUJBQUssUUFBTDtBQUNJLDRCQUFJN0IsU0FBUyxRQUFiO0FBQ0FQLHNDQUFjLEtBQWQsRUFBcUIsaUNBQXJCLEVBQXdELGNBQXhELEVBQXdFTyxNQUF4RSxFQUFnRixJQUFoRjtBQUNBO0FBQ0o7QUFDSXRFLGdDQUFRQyxHQUFSLENBQVksZUFBWjtBQUNBO0FBUFI7QUFTSCxhQVhELE1BV087QUFDSDtBQUNBRCx3QkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNIO0FBQ0osU0F2QkU7QUF3QkhJLGVBQU8sZUFBVUosSUFBVixFQUFnQjtBQUNuQjtBQUNBdEMsb0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDSDtBQTNCRSxLQUFQO0FBNkJILENBL0JEOztBQWtDQXpCLE9BQU91Rix5QkFBUCxHQUFtQyxVQUFVdEUsS0FBVixFQUFpQnVFLFVBQWpCLEVBQTZCL0IsTUFBN0IsRUFBcUM7QUFDcEUzRSxNQUFFdUMsSUFBRixDQUFPO0FBQ0hDLGFBQUtMLEtBREY7QUFFSE0sZ0JBQVEsTUFGTDtBQUdIQyxrQkFBVSxNQUhQO0FBSUhDLGNBQU0sRUFBRWdFLGFBQWFELFVBQWYsRUFKSDtBQUtIOUQsaUJBQVMsaUJBQVVELElBQVYsRUFBZ0I7QUFDckJ0QyxvQkFBUUMsR0FBUixDQUFZcUMsSUFBWjtBQUNBO0FBQ0EsZ0JBQUlBLEtBQUt3QixRQUFMLElBQWlCLElBQXJCLEVBQTJCO0FBQ3ZCLHdCQUFRUSxNQUFSO0FBQ0kseUJBQUssUUFBTDtBQUNJRSxpQ0FBU0ksTUFBVDtBQUNBO0FBQ0o7QUFDSTVFLGdDQUFRQyxHQUFSLENBQVksZUFBWjtBQUNBO0FBTlI7QUFRSCxhQVRELE1BU087QUFDSE4sa0JBQUUsUUFBRixFQUFZaUIsSUFBWixDQUFpQjBCLEtBQUswQixPQUFMLENBQWEsV0FBYixDQUFqQjtBQUNBaEUsd0JBQVFDLEdBQVIsQ0FBWXFDLElBQVo7QUFDSDtBQUNKLFNBckJFO0FBc0JISSxlQUFPLGVBQVVKLElBQVYsRUFBZ0I7QUFDbkI7QUFDQXRDLG9CQUFRQyxHQUFSLENBQVlxQyxJQUFaO0FBQ0g7QUF6QkUsS0FBUDtBQTJCSCxDQTVCRDs7QUE4QkE7Ozs7OztBQU1BM0MsRUFBRSxjQUFGLEVBQWtCMkIsSUFBbEI7O0FBRUFULE9BQU8wRix3QkFBUCxHQUFrQyxZQUNsQztBQUNJNUcsTUFBRSxxQkFBRixFQUF5QjhDLElBQXpCLENBQThCLFNBQTlCLEVBQXlDLElBQXpDO0FBQ0E5QyxNQUFFLG1CQUFGLEVBQXVCOEMsSUFBdkIsQ0FBNEIsVUFBNUIsRUFBd0MsS0FBeEM7QUFDQTlDLE1BQUUsY0FBRixFQUFrQnlCLElBQWxCLENBQXVCLEdBQXZCO0FBQ0F6QixNQUFFLGNBQUYsRUFBa0IyQixJQUFsQixDQUF1QixDQUF2QjtBQUNBM0IsTUFBRSxtQkFBRixFQUF1QjJCLElBQXZCLENBQTRCLENBQTVCO0FBQ0EzQixNQUFFLGdCQUFGLEVBQW9CeUIsSUFBcEIsQ0FBeUIsQ0FBekI7QUFDSCxDQVJEOztBQVdBUCxPQUFPMkYseUJBQVAsR0FBbUMsWUFDbkM7QUFDSTdHLE1BQUUscUJBQUYsRUFBeUI4QyxJQUF6QixDQUE4QixTQUE5QixFQUF5QyxLQUF6QztBQUNBOUMsTUFBRSxtQkFBRixFQUF1QjhDLElBQXZCLENBQTRCLFVBQTVCLEVBQXdDLElBQXhDO0FBQ0E5QyxNQUFFLGNBQUYsRUFBa0IyQixJQUFsQixDQUF1QixDQUF2QjtBQUNBM0IsTUFBRSxjQUFGLEVBQWtCeUIsSUFBbEIsQ0FBdUIsR0FBdkI7QUFDQXpCLE1BQUUsbUJBQUYsRUFBdUJ5QixJQUF2QixDQUE0QixDQUE1QjtBQUNBekIsTUFBRSxnQkFBRixFQUFvQjJCLElBQXBCLENBQXlCLENBQXpCO0FBQ0gsQ0FSRDs7QUFVQTNCLEVBQUU4RyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUN4Qi9HLE1BQUUsZ0JBQUYsRUFBb0JDLEVBQXBCLENBQXVCLFFBQXZCLEVBQWlDLFlBQVU7QUFDdkMsWUFBSStHLFVBQVVoSCxFQUFFLElBQUYsRUFBUVcsR0FBUixFQUFkO0FBQ0FzRyxtQkFBV0QsT0FBWDtBQUNILEtBSEQ7QUFJSCxDQUxEOztBQVFBOzs7Ozs7QUFNQTlGLE9BQU9nRyxZQUFQLEdBQXNCLFVBQVNDLFFBQVQsRUFDdEI7QUFDSW5ILE1BQUVtSCxRQUFGLEVBQVl4RixJQUFaLENBQWlCLEdBQWpCO0FBQ0gsQ0FIRDs7QUFLQVQsT0FBT2tHLFFBQVAsR0FBa0IsVUFBU0MsYUFBVCxFQUF3QjtBQUN0QyxRQUFJbEIsU0FBUyxJQUFiO0FBQUEsUUFDSW1CLE1BQU0sRUFEVjtBQUVBekMsYUFBUzBDLE1BQVQsQ0FDS0MsTUFETCxDQUNZLENBRFosRUFFS3pDLEtBRkwsQ0FFVyxHQUZYLEVBR0swQyxPQUhMLENBR2EsVUFBVTNELElBQVYsRUFBZ0I7QUFDekJ3RCxjQUFNeEQsS0FBS2lCLEtBQUwsQ0FBVyxHQUFYLENBQU47QUFDQSxZQUFJdUMsSUFBSSxDQUFKLE1BQVdELGFBQWYsRUFBOEJsQixTQUFTdUIsbUJBQW1CSixJQUFJLENBQUosQ0FBbkIsQ0FBVDtBQUM3QixLQU5MO0FBT0EsV0FBT25CLE1BQVA7QUFDSCxDQVhEOztBQWNBakYsT0FBT3lHLFNBQVAsR0FBbUIsVUFBU25GLEdBQVQsRUFBYztBQUM3QixRQUFJb0YsU0FBUyxFQUFiO0FBQ0gsUUFBSUMsU0FBU2YsU0FBU2dCLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBRCxXQUFPL0MsSUFBUCxHQUFjdEMsR0FBZDtBQUNBLFFBQUl1RixRQUFRRixPQUFPTixNQUFQLENBQWNTLFNBQWQsQ0FBd0IsQ0FBeEIsQ0FBWjtBQUNBLFFBQUlDLE9BQU9GLE1BQU1oRCxLQUFOLENBQVksR0FBWixDQUFYO0FBQ0EsU0FBSyxJQUFJbUQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxLQUFLRSxNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDckMsWUFBSUUsT0FBT0gsS0FBS0MsQ0FBTCxFQUFRbkQsS0FBUixDQUFjLEdBQWQsQ0FBWDtBQUNBNkMsZUFBT1EsS0FBSyxDQUFMLENBQVAsSUFBa0JWLG1CQUFtQlUsS0FBSyxDQUFMLENBQW5CLENBQWxCO0FBQ0E7QUFDRCxXQUFPUixNQUFQO0FBQ0EsQ0FYRCxDIiwiZmlsZSI6Ii9qcy9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MjBjNTFiZjAwYzBjZDU2ZTE2YyIsIi8vIExvYWRlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoXCIubG9hZGVyLW9uLWNoYW5nZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNmdWxsLWxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4kKFwiLmxvYWRlci1vbi1zdWJtaXRcIikub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjZnVsbC1sb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuJCgnLmRvbnQtc3VibWl0LW9uLWVudGVyLCAuZHNvbicpLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJFTlRFUlwiKTtcbiAgICBpZiAoZS53aGljaCA9PSAxMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlLndoaWNoID09IDEzKSBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTW9kaWZ5IGNhcnQgaXRlbSBxdWFudGl0eSBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoJy5JbnB1dEJ0blEnKS5vbignY2hhbmdlIGtleXVwJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICBPcmlnaW5hbCBBcnRpY2xlIFByaWNlXG4gICAgbGV0IHZhbHVlID0gJCh0aGlzKS5zaWJsaW5ncygnLkFydGljbGVQcmljZScpLnZhbCgpO1xuICAgIC8vIFF1YW50aXR5XG4gICAgbGV0IHF1YW50aXR5ID0gJCh0aGlzKS52YWwoKTtcbiAgICAvLyBOZXIgVmFsdWVcbiAgICBsZXQgbmV3VmFsdWUgPSAodmFsdWUgKiBxdWFudGl0eSk7XG4gICAgLy8gTmV3IFByaWNlIFRhcmdldFxuICAgIGxldCBuZXdQcmljZVRhcmdldCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2libGluZ3MoJy5Ub3RhbEl0ZW1QcmljZScpO1xuXG4gICAgY29uc29sZS5sb2codmFsdWUsIHF1YW50aXR5LCBuZXdWYWx1ZSk7XG4gICAgbW9kaWZ5Q2FydEl0ZW1RKCQodGhpcyksIG5ld1ByaWNlVGFyZ2V0LCBuZXdWYWx1ZSk7XG59KVxuXG5mdW5jdGlvbiBtb2RpZnlDYXJ0SXRlbVEoZSwgbmV3UHJpY2VUYXJnZXQsIG5ld1ZhbHVlKSB7XG4gICAgZS5zaWJsaW5ncygnLklucHV0QnRuUScpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICBuZXdQcmljZVRhcmdldC5odG1sKCckICcgKyBuZXdWYWx1ZSk7XG59XG5cblxuLy8gQ2hlY2tvdXQgc2lkZWJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVx0XHRcbndpbmRvdy5jaGVja291dFNpZGViYXIgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblxuICAgIGNvbnN0IHNpZGViYXIgPSAkKCcuQ2hlY2tvdXRDYXJ0Jyk7XG4gICAgY29uc3Qgd3JhcHBlciA9ICQoJy5tYWluLXdyYXBwZXInKTtcblxuICAgIC8vIENoZWNrIGlmIGxheW91dCBuZWVkIHRvIGJlIGZpeGVkIGluIG9yZGVyIHRvIG5vdCBoYXZlIHNxdWlzaGVkIGNvbHMuXG4gICAgbGV0IGZpeExpc3RMYXlvdXQgPSBmYWxzZTtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxNjQ1ICYmICQod2luZG93KS53aWR0aCgpID4gMTIwMCkgXG4gICAgICAgIGZpeExpc3RMYXlvdXQgPSB0cnVlO1xuXG4gICAgY29uc3Qgc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTmV3IGNhcnQgc2lkZWJhclxuICAgICAgICBzaWRlYmFyLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnYWxsb3ctc2lkZWJhcicpO1xuICAgICAgICBpZihmaXhMaXN0TGF5b3V0KVxuICAgICAgICAgICAgJCgnLmFydGljbGVzLWNvbnRhaW5lciAuYXJ0aWNsZScpLnJlbW92ZUNsYXNzKCdjb2wteGwtMicpLmFkZENsYXNzKCdjb2wteGwtMycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBoaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBOZXcgY2FydCBzaWRlYmFyXG4gICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCdhbGxvdy1zaWRlYmFyJyk7XG4gICAgICAgIGlmKGZpeExpc3RMYXlvdXQpXG4gICAgICAgICAgICAkKCcuYXJ0aWNsZXMtY29udGFpbmVyIC5hcnRpY2xlJykuYWRkQ2xhc3MoJ2NvbC14bC0yJykucmVtb3ZlQ2xhc3MoJ2NvbC14bC0zJyk7XG4gICAgfVxuXG5cbiAgICBpZiAoc3RhdGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzaWRlYmFyLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdygpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSAnc2hvdycpIHtcbiAgICAgICAgc2hvdygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSAnaGlkZScpIHtcbiAgICAgICAgaGlkZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59XG5cblxuXG53aW5kb3cub3BlbkNoZWNrb3V0RGVza3RvcCA9IGZ1bmN0aW9uKClcbntcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgICAgY2hlY2tvdXRTaWRlYmFyKCdzaG93Jyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG4vLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbi8vICAgICBpZiAoc2Nyb2xsID4gMTI1KSB7XG4vLyAgICAgICAgICQoJy5jaGVja291dC1jYXJ0JykuYWRkQ2xhc3MoJ3Njcm9sbGVkJyk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICAkKCcuY2hlY2tvdXQtY2FydCcpLnJlbW92ZUNsYXNzKCdzY3JvbGxlZCcpO1xuLy8gICAgIH1cbi8vIH0pO1xuXG5cbi8vIFNpZGViYXIgY2hlY2tvdXQgYWJzb2x1dGVcbi8vIHdpbmRvdy5jaGVja291dFNpZGViYXIgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4vLyAgICAgaWYgKGFjdGlvbiA9PSAnb3BlbicpIHtcbi8vICAgICAgICAgJCgnI1NpZGVDb250YWluZXInKS50b2dnbGUoMTAwKTtcbi8vICAgICAgICAgJCgnI01haW5PdmVybGF5JykuZmFkZUluKDEwMCk7XG4vLyAgICAgfVxuLy8gICAgIGlmIChhY3Rpb24gPT0gJ2Nsb3NlJykge1xuLy8gICAgICAgICAkKCcjU2lkZUNvbnRhaW5lcicpLnRvZ2dsZSgxMDApO1xuLy8gICAgICAgICAkKCcjTWFpbk92ZXJsYXknKS5mYWRlT3V0KDEwMCk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAkKCcjTWFpbk92ZXJsYXknKS5jbGljayhmdW5jdGlvbiAoKSB7XG4vLyAgICAgY2hlY2tvdXRTaWRlYmFyKFwiY2xvc2VcIik7XG4vLyB9KTtcblxuLy8gd2luZG93Lm9wZW5GaWx0ZXJzID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGNvbnN0IGZpbHRlcnMgPSAkKCcjU2VhcmNoRmlsdGVycycpO1xuLy8gICAgIGlmIChmaWx0ZXJzLmNzcygnZGlzcGxheScpID09ICdub25lJykge1xuLy8gICAgICAgICBmaWx0ZXJzLmNzcygnZGlzcGxheScsICdpbmhlcml0Jyk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBmaWx0ZXJzLmNzcygnZGlzcGxheScsICdub25lJyk7XG4vLyAgICAgfVxuLy8gfVxuXG5cbndpbmRvdy5vcGVuRmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gJCgnI1NlYXJjaEZpbHRlcnMnKTtcbiAgICBjb25zdCB0cmlnZ2VyID0gJCgnI1NlYXJjaEZpbHRlcnNUcmlnZ2VyJyk7XG4gICAgaWYoZmlsdGVycy5oYXNDbGFzcygnYWN0aXZlJykpXG4gICAge1xuICAgICAgICBmaWx0ZXJzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdHJpZ2dlci5zaG93KCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGZpbHRlcnMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB0cmlnZ2VyLmhpZGUoKTtcbiAgICB9XG5cbn1cblxuLy8gSGlkZSBhbGVydHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbi8vICAgICAkKCcuYWxlcnQnKS5oaWRlKDEwMCk7XG4vLyB9LCA0MDAwKTtcblxuXG4vLyBDYXJ0IFJlc3VtZW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gd2luZG93LnNob3dDYXJ0UmVzdW1lTW9iaWxlID0gZnVuY3Rpb24oKVxuLy8ge1xuLy8gICAgICQoJy5jYXJ0LXJlc3VtZS1kZXRhaWxzLW1vYmlsZScpLnRvZ2dsZUNsYXNzKCdIaWRkZW4nLCAxMDApO1xuLy8gfVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IENBUlRcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLy8gQ2hlY2sgU3RvY2sgXG53aW5kb3cuY2hlY2tTaXplU3RvY2sgPSBmdW5jdGlvbiAocm91dGUsIGFydGljbGVJZCwgc2l6ZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHJvdXRlICsgXCIgfCBcIiArIGFydGljbGVJZCArIFwiIHwgXCIgKyBzaXplKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSAkKCcjQWRkVG9DYXJ0Rm9ybUJ0bicpO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHthcnRpY2xlSWQ6IGFydGljbGVJZCwgc2l6ZTogc2l6ZX0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0b2NrID4gMCkge1xuICAgICAgICAgICAgICAgICQoJy5BdmFpbGFibGVTdG9jaycpLmh0bWwoXCJTdG9jayBkaXNwb25pYmxlOiBcIiArIGRhdGEuc3RvY2spO1xuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdG9jayA8PSAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLkF2YWlsYWJsZVN0b2NrJykuaHRtbChcIk5vIGhheSBzdG9jayBhbCBtb21lbnRvXCIpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJy5BdmFpbGFibGVTdG9jaycpLmh0bWwoXCJQcm9kdWN0byBubyBkaXNwb25pYmxlXCIpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAvLyAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gY2hlY2tTaXplU3RvY2soKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG53aW5kb3cuc3VtQWxsSXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3VtID0gMDtcbiAgICAkKCcuVG90YWxJdGVtUHJpY2UnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoJCh0aGlzKS5odG1sKCkpO1xuICAgIH0pO1xuICAgICQoJy5TdWJUb3RhbCcpLmh0bWwoc3VtKTtcbn1cblxuXG4vLyBTdW0gZGl2cyB0ZXh0XG53aW5kb3cuc3VtRGl2cyA9IGZ1bmN0aW9uIChvcmlnaW5zLCB0YXJnZXQpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBvcmlnaW5zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBzdW0gKz0gcGFyc2VGbG9hdCgkKHRoaXMpLnRleHQoKSk7XG4gICAgfSk7XG4gICAgdGFyZ2V0LnRleHQoc3VtKTtcbn1cblxuXG4vLyBTZXQgY2FydCBpdGVtcyBKU09OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuc2V0SXRlbXNEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGl0ZW1EYXRhID0gW107XG5cbiAgICAkKCcuSXRlbS1EYXRhJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgdmFyIHByaWNlID0gJCh0aGlzKS5kYXRhKCdwcmljZScpO1xuICAgICAgICB2YXIgcXVhbnRpdHkgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICAgIGl0ZW0gPSB7fVxuICAgICAgICBpdGVtWydpZCddID0gaWQ7XG4gICAgICAgIGl0ZW1bJ3ByaWNlJ10gPSBwcmljZTtcbiAgICAgICAgaXRlbVsncXVhbnRpdHknXSA9IHF1YW50aXR5O1xuICAgICAgICAvLyBVcGRhdGUgZGlzcGxheSB0b3RhbCBpdGVtIHByaWNlXG4gICAgICAgIHRvdGFsID0gcHJpY2UgKiBxdWFudGl0eTtcbiAgICAgICAgJCgnLicgKyBpZCArICctVG90YWxJdGVtUHJpY2UnKS5odG1sKHRvdGFsKTtcblxuICAgICAgICBpdGVtRGF0YS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIC8vIFVwZGF0ZSBUb3RhbFxuICAgIGNvbnNvbGUuaW5mbyhpdGVtRGF0YSk7XG4gICAgc3VtQWxsSXRlbXMoKTtcbiAgICAkKCcjSXRlbXMtRGF0YScpLnZhbChpdGVtRGF0YSk7XG59XG5cbi8vIEFkZCBwcm9kdWN0IHRvIGNhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5hZGRUb0NhcnQgPSBmdW5jdGlvbiAocm91dGUsIGRhdGEpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgZGF0YS5tZXNzYWdlLCAnYm90dG9tQ2VudGVyJywgJycsIDI1MDApO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRvdGFscygpO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgc3VtQWxsSXRlbXMoKTtcbiAgICAgICAgICAgICAgICAgICAgb3BlbkNoZWNrb3V0RGVza3RvcCgpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3dhcm5pbmcnKSB7XG4gICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnVXBzIScsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIGFkZHRvQ2FydCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdVcHMhJywgJ0hhIG9jdXJyaWRvIHVuIGVycm9yOiA8Yj4nICsgZGF0YS5yZXNwb25zZUpTT05bJ21lc3NhZ2UnXSArICc8L2I+JywgJ2JvdHRvbUNlbnRlcicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiBcblxuLy8gUmVtb3ZlIHByb2R1Y3QgZnJvbSBjYXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cucmVtb3ZlRnJvbUNhcnQgPSBmdW5jdGlvbiAocm91dGUsIGlkLCBxdWFudGl0eSwgZGl2LCBhY3Rpb24pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBpdGVtaWQ6IGlkLCBxdWFudGl0eTogcXVhbnRpdHksIGFjdGlvbjogYWN0aW9uLCBtZXRob2Q6ICdhamF4JyB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ2NhcnQtcmVtb3ZlZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF07XG4gICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgJChkaXYpLmhpZGUoMTAwKTtcbiAgICAgICAgICAgICAgICAkKGRpdikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGl2KTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiByZW1vdmVGcm9tQ2FydCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyBJZiBhbiBlcnJvciBwb3BzIHdoZW4gZGVzdHJveWluZyBhbiBpdGVtLCByZWxvYWQgYW5kIHByZXZlbnQgYmFkIG1hZ2ljXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb3RhbHMoKSB7XG4gICAgLy8gTGl2ZSBSZWxvYWRpbmcgc3R1ZmZcbiAgICAkKFwiI1NpZGVDb250YWluZXJJdGVtc0ZpeGVkXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAjU2lkZUNvbnRhaW5lckl0ZW1zRml4ZWRcIik7XG4gICAgJChcIiNTaWRlQ29udGFpbmVySXRlbXNGbG9hdGluZ1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgI1NpZGVDb250YWluZXJJdGVtc0Zsb2F0aW5nXCIpO1xuICAgICQoXCIuVG90YWxDYXJ0SXRlbXNcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5Ub3RhbENhcnRJdGVtc1wiKTtcbiAgICAkKFwiLlRvdGFsQ2FydEl0ZW1zU2lkZWJhclwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLlRvdGFsQ2FydEl0ZW1zU2lkZWJhclwiKTtcbiAgICAkKFwiLkNhcnRTdWJUb3RhbFwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLkNhcnRTdWJUb3RhbFwiKTtcbiAgICAkKFwiLkF2YWlsYWJsZVN0b2NrXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuQXZhaWxhYmxlU3RvY2tcIik7XG59XG5cbi8vIFN1Ym1pdCBGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uIChyb3V0ZSwgdGFyZ2V0LCBkYXRhLCBhY3Rpb24pIHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1dGE6IFwiICsgcm91dGUgKyBcIiBUYXJnZXQ6IFwiICsgdGFyZ2V0ICsgXCIgRGF0YTogXCIgKyBkYXRhICsgXCJBY3Rpb246IFwiKyBhY3Rpb24pO1xuICAgIGRlYnVnZ2VyO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGRhdGEsIGFjdGlvbjogYWN0aW9uIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PSAncmVsb2FkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIHBhZ2UsIGRlbGV0ZSBwYXJhbWV0dGVycyBhbmQgb3BlbiBjaGVja291dCBzaWRlYmFyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXSArIFwiP2NoZWNrb3V0LW9uXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW4gc3VibWl0Rm9ybScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRvYXN0X2Vycm9yKCcnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInLCAnJyk7XG4gICAgICAgICAgICAgICAgJCgnLlNpZGVDb250YWluZXJFcnJvcicpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAvLyAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiBzdWJtaXRGb3JtKClcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIFZhbGlkYXRlIGFuZCBzZXQgY291cG9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cudmFsaWRhdGVBbmRTZXRDb3Vwb24gPSBmdW5jdGlvbiAocm91dGUsIGNvZGUsIGNhcnRpZCkge1xuICAgIGxldCBjb3Vwb25EaXYgPSAkKCcjQ291cG9uRGl2Jyk7XG4gICAgbGV0IGNvdXBvblNldCA9ICQoJyNTZXR0ZWRDb3Vwb24nKTtcbiAgICBjb25zb2xlLmxvZyhjb2RlLCBjYXJ0aWQpO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGNvZGU6IGNvZGUsIGNhcnRpZDogY2FydGlkIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcHJvYmFuZG8gY3Vww7NuLi4uXCIpO1xuICAgICAgICAgICAgJCgnLkNvdXBvbkxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKCcjQ291cG9uVmFsaWRhdGlvbk1lc3NhZ2UnKS5odG1sKFwiQ3Vww7NuIGFjZXB0YWRvICFcIik7XG4gICAgICAgICAgICAgICAgY291cG9uRGl2LmhpZGUoMjAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdXBvblNldC5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjQ291cG9uVmFsaWRhdGlvbk1lc3NhZ2UnKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLkNvdXBvbkxvYWRlcicpLmFkZENsYXNzKCdIaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBGYXZzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuYWRkQXJ0aWNsZVRvRmF2cyA9IGZ1bmN0aW9uIChyb3V0ZSwgZmF2aWQsIGFydGljbGVpZCwgYWN0aW9uLCBkaXNwbGF5QnV0dG9uKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZmF2X2lkOiBmYXZpZCwgYXJ0aWNsZV9pZDogYXJ0aWNsZWlkIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlICYmIGRhdGEucmVzdWx0ID09ICdhZGRlZCcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLnJlbW92ZUNsYXNzKCdmYXYtaWNvbi1ub2ZhdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5hZGRDbGFzcygnZmF2LWljb24taXNmYXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsICdQcm9kdWN0byBhZ3JlZ2FkbyBhIGZhdm9yaXRvcycsICdib3R0b21DZW50ZXInLCAnJywgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWN0dWFsaXphZG8gLSBTaW4gQWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhheSBhY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSAmJiBkYXRhLnJlc3VsdCA9PSAncmVtb3ZlZCcpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLmFkZENsYXNzKCdmYXYtaWNvbi1ub2ZhdicpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Zhdi1pY29uLWlzZmF2Jyk7XG4gICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgJ1Byb2R1Y3RvIGVsaW1pbmFkbyBkZSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJywgJycsIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0RmF2c1RvdGFsSWNvbihkYXRhLmZhdnNDb3VudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRGYXZzVG90YWxJY29uKGZhdnMpIHtcbiAgICBpZiAoZmF2cyA+IDApIHtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhcicpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5hZGRDbGFzcygnZmEnKTtcbiAgICB9IGVsc2UgaWYgKGZhdnMgPT0gMCkge1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmEnKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYScpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmFyJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLmFkZENsYXNzKCdmYScpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIHNldEZhdnNUb3RhbEljb24oKVwiKTtcbiAgICB9XG59XG5cbndpbmRvdy5yZW1vdmVBcnRpY2xlRnJvbUZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGZhdmlkLCBhY3Rpb24pIHtcbiAgICB2YXIgZG9hY3Rpb24gPSBhY3Rpb247XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZmF2X2lkOiBmYXZpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2FjdGlvbik7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChkb2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICdyZWxvYWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgJ1Byb2R1Y3RvIGVsaW1pbmFkbyBkZSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJywgYWN0aW9uLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhheSBhY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLm1lc3NhZ2VbJ2Vycm9ySW5mbyddKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG53aW5kb3cucmVtb3ZlQWxsQXJ0aWNsZXNGcm9tRmF2cyA9IGZ1bmN0aW9uIChyb3V0ZSwgY3VzdG9tZXJpZCwgYWN0aW9uKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgY3VzdG9tZXJfaWQ6IGN1c3RvbWVyaWQgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZVsnZXJyb3JJbmZvJ10pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IExPR0lOIEFORCBSRUdJU1RFUlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4kKCcjUmVzZWxsZXJCb3gnKS5oaWRlKCk7XG5cbndpbmRvdy5vcGVuUmVzZWxsZXJSZWdpc3RyYXRpb24gPSBmdW5jdGlvbigpXG57XG4gICAgJCgnI0lzUmVzZWxsZXJDaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAkKCcuSWZSZXNlbGxlckVuYWJsZScpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICQoJyNSZXNlbGxlckJveCcpLnNob3coMTAwKTtcbiAgICAkKCcjUmVzZWxsZXJDVEEnKS5oaWRlKDApO1xuICAgICQoJy5Ob3JtYUNsaWVudFRpdGxlJykuaGlkZSgwKTtcbiAgICAkKCcuUmVzZWxsZXJUaXRsZScpLnNob3coMCk7XG59XG5cblxud2luZG93LmNsb3NlUmVzZWxsZXJSZWdpc3RyYXRpb24gPSBmdW5jdGlvbigpXG57XG4gICAgJCgnI0lzUmVzZWxsZXJDaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgJCgnLklmUmVzZWxsZXJFbmFibGUnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICQoJyNSZXNlbGxlckJveCcpLmhpZGUoMCk7XG4gICAgJCgnI1Jlc2VsbGVyQ1RBJykuc2hvdygxMDApO1xuICAgICQoJy5Ob3JtYUNsaWVudFRpdGxlJykuc2hvdygwKTtcbiAgICAkKCcuUmVzZWxsZXJUaXRsZScpLmhpZGUoMCk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLkdlb1Byb3ZTZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHByb3ZfaWQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBnZXRHZW9Mb2NzKHByb3ZfaWQpO1xuICAgIH0pO1xufSk7XG5cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBNSVggRlVOQ1RJT05TXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbndpbmRvdy5jbG9zZUVsZW1lbnQgPSBmdW5jdGlvbihzZWxlY3RvcilcbntcbiAgICAkKHNlbGVjdG9yKS5oaWRlKDEwMCk7XG59XG5cbndpbmRvdy5nZXRQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtZXRlck5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbCxcbiAgICAgICAgdG1wID0gW107XG4gICAgbG9jYXRpb24uc2VhcmNoXG4gICAgICAgIC5zdWJzdHIoMSlcbiAgICAgICAgLnNwbGl0KFwiJlwiKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB0bXAgPSBpdGVtLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgaWYgKHRtcFswXSA9PT0gcGFyYW1ldGVyTmFtZSkgcmVzdWx0ID0gZGVjb2RlVVJJQ29tcG9uZW50KHRtcFsxXSk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxud2luZG93LmdldFBhcmFtcyA9IGZ1bmN0aW9uKHVybCkge1xuICAgIHZhciBwYXJhbXMgPSB7fTtcblx0dmFyIHBhcnNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0cGFyc2VyLmhyZWYgPSB1cmw7XG5cdHZhciBxdWVyeSA9IHBhcnNlci5zZWFyY2guc3Vic3RyaW5nKDEpO1xuXHR2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJyk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdCgnPScpO1xuXHRcdHBhcmFtc1twYWlyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcblx0fVxuXHRyZXR1cm4gcGFyYW1zO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NjcmlwdHMuanMiXSwic291cmNlUm9vdCI6IiJ9