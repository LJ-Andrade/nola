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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTFmNTI1Yjk5MjZlOTFjNDg2ZTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInJlbW92ZUNsYXNzIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInNpYmxpbmdzIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiaHRtbCIsIndpbmRvdyIsImNoZWNrb3V0U2lkZWJhciIsInN0YXRlIiwic2lkZWJhciIsIndyYXBwZXIiLCJmaXhMaXN0TGF5b3V0Iiwid2lkdGgiLCJzaG93IiwiYWRkQ2xhc3MiLCJoaWRlIiwidW5kZWZpbmVkIiwiaGFzQ2xhc3MiLCJvcGVuQ2hlY2tvdXREZXNrdG9wIiwib3BlbkZpbHRlcnMiLCJmaWx0ZXJzIiwidHJpZ2dlciIsImNoZWNrU2l6ZVN0b2NrIiwicm91dGUiLCJhcnRpY2xlSWQiLCJzaXplIiwic3VibWl0QnV0dG9uIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJzdG9jayIsInByb3AiLCJlcnJvciIsInN1bUFsbEl0ZW1zIiwic3VtIiwiZWFjaCIsImluZGV4IiwicGFyc2VJbnQiLCJzdW1EaXZzIiwib3JpZ2lucyIsInRhcmdldCIsInBhcnNlRmxvYXQiLCJ0ZXh0Iiwic2V0SXRlbXNEYXRhIiwiaXRlbURhdGEiLCJpZCIsInByaWNlIiwiaXRlbSIsInRvdGFsIiwicHVzaCIsImluZm8iLCJhZGRUb0NhcnQiLCJhc3luYyIsInJlc3BvbnNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ0b2FzdF9zdWNjZXNzIiwibWVzc2FnZSIsInVwZGF0ZVRvdGFscyIsInJlc3BvbnNlSlNPTiIsInJlbW92ZUZyb21DYXJ0IiwiZGl2IiwiYWN0aW9uIiwiaXRlbWlkIiwiaHJlZiIsInNwbGl0IiwicmVtb3ZlIiwibG9hZCIsInN1Ym1pdEZvcm0iLCJ0b2FzdF9lcnJvciIsInJlc3BvbnNlVGV4dCIsInZhbGlkYXRlQW5kU2V0Q291cG9uIiwiY29kZSIsImNhcnRpZCIsImNvdXBvbkRpdiIsImNvdXBvblNldCIsImJlZm9yZVNlbmQiLCJjb21wbGV0ZSIsImFkZEFydGljbGVUb0ZhdnMiLCJmYXZpZCIsImFydGljbGVpZCIsImRpc3BsYXlCdXR0b24iLCJmYXZfaWQiLCJhcnRpY2xlX2lkIiwicmVzdWx0Iiwic2V0RmF2c1RvdGFsSWNvbiIsImZhdnNDb3VudCIsImZhdnMiLCJyZW1vdmVBcnRpY2xlRnJvbUZhdnMiLCJkb2FjdGlvbiIsInJlbW92ZUFsbEFydGljbGVzRnJvbUZhdnMiLCJjdXN0b21lcmlkIiwiY3VzdG9tZXJfaWQiLCJvcGVuUmVzZWxsZXJSZWdpc3RyYXRpb24iLCJjbG9zZVJlc2VsbGVyUmVnaXN0cmF0aW9uIiwiZG9jdW1lbnQiLCJyZWFkeSIsInByb3ZfaWQiLCJnZXRHZW9Mb2NzIiwiY2xvc2VFbGVtZW50Iiwic2VsZWN0b3IiLCJnZXRQYXJhbSIsInBhcmFtZXRlck5hbWUiLCJ0bXAiLCJzZWFyY2giLCJzdWJzdHIiLCJmb3JFYWNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2V0UGFyYW1zIiwicGFyYW1zIiwicGFyc2VyIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5Iiwic3Vic3RyaW5nIiwidmFycyIsImkiLCJsZW5ndGgiLCJwYWlyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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OztBQUtBVCxPQUFPa0csUUFBUCxHQUFrQixVQUFTQyxhQUFULEVBQXdCO0FBQ3RDLFFBQUlsQixTQUFTLElBQWI7QUFBQSxRQUNJbUIsTUFBTSxFQURWO0FBRUFqRCxhQUFTa0QsTUFBVCxDQUNLQyxNQURMLENBQ1ksQ0FEWixFQUVLeEMsS0FGTCxDQUVXLEdBRlgsRUFHS3lDLE9BSEwsQ0FHYSxVQUFVM0QsSUFBVixFQUFnQjtBQUN6QndELGNBQU14RCxLQUFLa0IsS0FBTCxDQUFXLEdBQVgsQ0FBTjtBQUNBLFlBQUlzQyxJQUFJLENBQUosTUFBV0QsYUFBZixFQUE4QmxCLFNBQVN1QixtQkFBbUJKLElBQUksQ0FBSixDQUFuQixDQUFUO0FBQzdCLEtBTkw7QUFPQSxXQUFPbkIsTUFBUDtBQUNILENBWEQ7O0FBY0FqRixPQUFPeUcsU0FBUCxHQUFtQixVQUFTbkYsR0FBVCxFQUFjO0FBQzdCLFFBQUlvRixTQUFTLEVBQWI7QUFDSCxRQUFJQyxTQUFTZixTQUFTZ0IsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FELFdBQU85QyxJQUFQLEdBQWN2QyxHQUFkO0FBQ0EsUUFBSXVGLFFBQVFGLE9BQU9OLE1BQVAsQ0FBY1MsU0FBZCxDQUF3QixDQUF4QixDQUFaO0FBQ0EsUUFBSUMsT0FBT0YsTUFBTS9DLEtBQU4sQ0FBWSxHQUFaLENBQVg7QUFDQSxTQUFLLElBQUlrRCxJQUFJLENBQWIsRUFBZ0JBLElBQUlELEtBQUtFLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFzQztBQUNyQyxZQUFJRSxPQUFPSCxLQUFLQyxDQUFMLEVBQVFsRCxLQUFSLENBQWMsR0FBZCxDQUFYO0FBQ0E0QyxlQUFPUSxLQUFLLENBQUwsQ0FBUCxJQUFrQlYsbUJBQW1CVSxLQUFLLENBQUwsQ0FBbkIsQ0FBbEI7QUFDQTtBQUNELFdBQU9SLE1BQVA7QUFDQSxDQVhELEMiLCJmaWxlIjoiL2pzL3NjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGExZjUyNWI5OTI2ZTkxYzQ4NmU1IiwiLy8gTG9hZGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJChcIi5sb2FkZXItb24tY2hhbmdlXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI2Z1bGwtbG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbiQoXCIubG9hZGVyLW9uLXN1Ym1pdFwiKS5vbignc3VibWl0JywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNmdWxsLWxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4kKCcuZG9udC1zdWJtaXQtb24tZW50ZXIsIC5kc29uJykua2V5cHJlc3MoZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVOVEVSXCIpO1xuICAgIGlmIChlLndoaWNoID09IDEzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGUud2hpY2ggPT0gMTMpIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4vLyBNb2RpZnkgY2FydCBpdGVtIHF1YW50aXR5IFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJCgnLklucHV0QnRuUScpLm9uKCdjaGFuZ2Uga2V5dXAnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gIE9yaWdpbmFsIEFydGljbGUgUHJpY2VcbiAgICBsZXQgdmFsdWUgPSAkKHRoaXMpLnNpYmxpbmdzKCcuQXJ0aWNsZVByaWNlJykudmFsKCk7XG4gICAgLy8gUXVhbnRpdHlcbiAgICBsZXQgcXVhbnRpdHkgPSAkKHRoaXMpLnZhbCgpO1xuICAgIC8vIE5lciBWYWx1ZVxuICAgIGxldCBuZXdWYWx1ZSA9ICh2YWx1ZSAqIHF1YW50aXR5KTtcbiAgICAvLyBOZXcgUHJpY2UgVGFyZ2V0XG4gICAgbGV0IG5ld1ByaWNlVGFyZ2V0ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5zaWJsaW5ncygnLlRvdGFsSXRlbVByaWNlJyk7XG5cbiAgICBjb25zb2xlLmxvZyh2YWx1ZSwgcXVhbnRpdHksIG5ld1ZhbHVlKTtcbiAgICBtb2RpZnlDYXJ0SXRlbVEoJCh0aGlzKSwgbmV3UHJpY2VUYXJnZXQsIG5ld1ZhbHVlKTtcbn0pXG5cbmZ1bmN0aW9uIG1vZGlmeUNhcnRJdGVtUShlLCBuZXdQcmljZVRhcmdldCwgbmV3VmFsdWUpIHtcbiAgICBlLnNpYmxpbmdzKCcuSW5wdXRCdG5RJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgIG5ld1ByaWNlVGFyZ2V0Lmh0bWwoJyQgJyArIG5ld1ZhbHVlKTtcbn1cblxuXG4vLyBDaGVja291dCBzaWRlYmFyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHRcdFxud2luZG93LmNoZWNrb3V0U2lkZWJhciA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXG4gICAgY29uc3Qgc2lkZWJhciA9ICQoJy5DaGVja291dENhcnQnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gJCgnLm1haW4td3JhcHBlcicpO1xuXG4gICAgLy8gQ2hlY2sgaWYgbGF5b3V0IG5lZWQgdG8gYmUgZml4ZWQgaW4gb3JkZXIgdG8gbm90IGhhdmUgc3F1aXNoZWQgY29scy5cbiAgICBsZXQgZml4TGlzdExheW91dCA9IGZhbHNlO1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDE2NDUgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMjAwKSBcbiAgICAgICAgZml4TGlzdExheW91dCA9IHRydWU7XG5cbiAgICBjb25zdCBzaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBOZXcgY2FydCBzaWRlYmFyXG4gICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdhbGxvdy1zaWRlYmFyJyk7XG4gICAgICAgIGlmKGZpeExpc3RMYXlvdXQpXG4gICAgICAgICAgICAkKCcuYXJ0aWNsZXMtY29udGFpbmVyIC5hcnRpY2xlJykucmVtb3ZlQ2xhc3MoJ2NvbC14bC0yJykuYWRkQ2xhc3MoJ2NvbC14bC0zJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE5ldyBjYXJ0IHNpZGViYXJcbiAgICAgICAgc2lkZWJhci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2FsbG93LXNpZGViYXInKTtcbiAgICAgICAgaWYoZml4TGlzdExheW91dClcbiAgICAgICAgICAgICQoJy5hcnRpY2xlcy1jb250YWluZXIgLmFydGljbGUnKS5hZGRDbGFzcygnY29sLXhsLTInKS5yZW1vdmVDbGFzcygnY29sLXhsLTMnKTtcbiAgICB9XG5cblxuICAgIGlmIChzdGF0ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHNpZGViYXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBoaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93KCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXRlID09ICdzaG93Jykge1xuICAgICAgICBzaG93KCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09ICdoaWRlJykge1xuICAgICAgICBoaWRlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cblxuXG5cbndpbmRvdy5vcGVuQ2hlY2tvdXREZXNrdG9wID0gZnVuY3Rpb24oKVxue1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgICBjaGVja291dFNpZGViYXIoJ3Nob3cnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuLy8gICAgIGlmIChzY3JvbGwgPiAxMjUpIHtcbi8vICAgICAgICAgJCgnLmNoZWNrb3V0LWNhcnQnKS5hZGRDbGFzcygnc2Nyb2xsZWQnKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSB7XG4vLyAgICAgICAgICQoJy5jaGVja291dC1jYXJ0JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbGVkJyk7XG4vLyAgICAgfVxuLy8gfSk7XG5cblxuLy8gU2lkZWJhciBjaGVja291dCBhYnNvbHV0ZVxuLy8gd2luZG93LmNoZWNrb3V0U2lkZWJhciA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbi8vICAgICBpZiAoYWN0aW9uID09ICdvcGVuJykge1xuLy8gICAgICAgICAkKCcjU2lkZUNvbnRhaW5lcicpLnRvZ2dsZSgxMDApO1xuLy8gICAgICAgICAkKCcjTWFpbk92ZXJsYXknKS5mYWRlSW4oMTAwKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGFjdGlvbiA9PSAnY2xvc2UnKSB7XG4vLyAgICAgICAgICQoJyNTaWRlQ29udGFpbmVyJykudG9nZ2xlKDEwMCk7XG4vLyAgICAgICAgICQoJyNNYWluT3ZlcmxheScpLmZhZGVPdXQoMTAwKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vICQoJyNNYWluT3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbi8vICAgICBjaGVja291dFNpZGViYXIoXCJjbG9zZVwiKTtcbi8vIH0pO1xuXG4vLyB3aW5kb3cub3BlbkZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc3QgZmlsdGVycyA9ICQoJyNTZWFyY2hGaWx0ZXJzJyk7XG4vLyAgICAgaWYgKGZpbHRlcnMuY3NzKCdkaXNwbGF5JykgPT0gJ25vbmUnKSB7XG4vLyAgICAgICAgIGZpbHRlcnMuY3NzKCdkaXNwbGF5JywgJ2luaGVyaXQnKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSB7XG4vLyAgICAgICAgIGZpbHRlcnMuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbi8vICAgICB9XG4vLyB9XG5cblxud2luZG93Lm9wZW5GaWx0ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSAkKCcjU2VhcmNoRmlsdGVycycpO1xuICAgIGNvbnN0IHRyaWdnZXIgPSAkKCcjU2VhcmNoRmlsdGVyc1RyaWdnZXInKTtcbiAgICBpZihmaWx0ZXJzLmhhc0NsYXNzKCdhY3RpdmUnKSlcbiAgICB7XG4gICAgICAgIGZpbHRlcnMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB0cmlnZ2VyLnNob3coKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZmlsdGVycy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHRyaWdnZXIuaGlkZSgpO1xuICAgIH1cblxufVxuXG4vLyBIaWRlIGFsZXJ0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuLy8gICAgICQoJy5hbGVydCcpLmhpZGUoMTAwKTtcbi8vIH0sIDQwMDApO1xuXG5cbi8vIENhcnQgUmVzdW1lblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB3aW5kb3cuc2hvd0NhcnRSZXN1bWVNb2JpbGUgPSBmdW5jdGlvbigpXG4vLyB7XG4vLyAgICAgJCgnLmNhcnQtcmVzdW1lLWRldGFpbHMtbW9iaWxlJykudG9nZ2xlQ2xhc3MoJ0hpZGRlbicsIDEwMCk7XG4vLyB9XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgQ0FSVFxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4vLyBDaGVjayBTdG9jayBcbndpbmRvdy5jaGVja1NpemVTdG9jayA9IGZ1bmN0aW9uIChyb3V0ZSwgYXJ0aWNsZUlkLCBzaXplKSB7XG4gICAgLy8gY29uc29sZS5sb2cocm91dGUgKyBcIiB8IFwiICsgYXJ0aWNsZUlkICsgXCIgfCBcIiArIHNpemUpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9ICQoJyNBZGRUb0NhcnRGb3JtQnRuJyk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YToge2FydGljbGVJZDogYXJ0aWNsZUlkLCBzaXplOiBzaXplfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEuc3RvY2sgPiAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLkF2YWlsYWJsZVN0b2NrJykuaHRtbChcIlN0b2NrIGRpc3BvbmlibGU6IFwiICsgZGF0YS5zdG9jayk7XG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnN0b2NrIDw9IDApIHtcbiAgICAgICAgICAgICAgICAkKCcuQXZhaWxhYmxlU3RvY2snKS5odG1sKFwiTm8gaGF5IHN0b2NrIGFsIG1vbWVudG9cIik7XG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnLkF2YWlsYWJsZVN0b2NrJykuaHRtbChcIlByb2R1Y3RvIG5vIGRpc3BvbmlibGVcIik7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiBjaGVja1NpemVTdG9jaygpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbndpbmRvdy5zdW1BbGxJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzdW0gPSAwO1xuICAgICQoJy5Ub3RhbEl0ZW1QcmljZScpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludCgkKHRoaXMpLmh0bWwoKSk7XG4gICAgfSk7XG4gICAgJCgnLlN1YlRvdGFsJykuaHRtbChzdW0pO1xufVxuXG5cbi8vIFN1bSBkaXZzIHRleHRcbndpbmRvdy5zdW1EaXZzID0gZnVuY3Rpb24gKG9yaWdpbnMsIHRhcmdldCkge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIG9yaWdpbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUZsb2F0KCQodGhpcykudGV4dCgpKTtcbiAgICB9KTtcbiAgICB0YXJnZXQudGV4dChzdW0pO1xufVxuXG5cbi8vIFNldCBjYXJ0IGl0ZW1zIEpTT05cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5zZXRJdGVtc0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgaXRlbURhdGEgPSBbXTtcblxuICAgICQoJy5JdGVtLURhdGEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICB2YXIgcHJpY2UgPSAkKHRoaXMpLmRhdGEoJ3ByaWNlJyk7XG4gICAgICAgIHZhciBxdWFudGl0eSA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgaXRlbSA9IHt9XG4gICAgICAgIGl0ZW1bJ2lkJ10gPSBpZDtcbiAgICAgICAgaXRlbVsncHJpY2UnXSA9IHByaWNlO1xuICAgICAgICBpdGVtWydxdWFudGl0eSddID0gcXVhbnRpdHk7XG4gICAgICAgIC8vIFVwZGF0ZSBkaXNwbGF5IHRvdGFsIGl0ZW0gcHJpY2VcbiAgICAgICAgdG90YWwgPSBwcmljZSAqIHF1YW50aXR5O1xuICAgICAgICAkKCcuJyArIGlkICsgJy1Ub3RhbEl0ZW1QcmljZScpLmh0bWwodG90YWwpO1xuICAgICAgICBcbiAgICAgICAgaXRlbURhdGEucHVzaChpdGVtKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICB9KTtcbiAgICAvLyBVcGRhdGUgVG90YWxcbiAgICBjb25zb2xlLmluZm8oaXRlbURhdGEpO1xuICAgIHN1bUFsbEl0ZW1zKCk7XG4gICAgJCgnI0l0ZW1zLURhdGEnKS52YWwoaXRlbURhdGEpO1xufVxuXG4vLyBBZGQgcHJvZHVjdCB0byBjYXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuYWRkVG9DYXJ0ID0gZnVuY3Rpb24gKHJvdXRlLCBkYXRhKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGFzeW5jOiBmYWxzZSxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09ICdmaXJzdC1pdGVtJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbG9hZGluZ1wiKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInLCAnJywgMjUwMCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKCk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICAgICAgc3VtQWxsSXRlbXMoKTtcbiAgICAgICAgICAgICAgICBvcGVuQ2hlY2tvdXREZXNrdG9wKCk7XG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHNldEl0ZW1zRGF0YSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBzdW1BbGxJdGVtcygpO1xuICAgICAgICAgICAgICAgIC8vICAgICBvcGVuQ2hlY2tvdXREZXNrdG9wKCk7XG4gICAgICAgICAgICAgICAgLy8gfSwgMTAwKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09ICd3YXJuaW5nJykgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnVXBzIScsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIGFkZHRvQ2FydCgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdVcHMhJywgJ0hhIG9jdXJyaWRvIHVuIGVycm9yOiA8Yj4nICsgZGF0YS5yZXNwb25zZUpTT05bJ21lc3NhZ2UnXSArICc8L2I+JywgJ2JvdHRvbUNlbnRlcicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiBcblxuLy8gUmVtb3ZlIHByb2R1Y3QgZnJvbSBjYXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cucmVtb3ZlRnJvbUNhcnQgPSBmdW5jdGlvbiAocm91dGUsIGlkLCBxdWFudGl0eSwgZGl2LCBhY3Rpb24pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBpdGVtaWQ6IGlkLCBxdWFudGl0eTogcXVhbnRpdHksIGFjdGlvbjogYWN0aW9uLCBtZXRob2Q6ICdhamF4JyB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ2NhcnQtcmVtb3ZlZCcpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF07XG4gICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgJChkaXYpLmhpZGUoMTAwKTtcbiAgICAgICAgICAgICAgICAkKGRpdikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKCk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gcmVtb3ZlRnJvbUNhcnQoKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gSWYgYW4gZXJyb3IgcG9wcyB3aGVuIGRlc3Ryb3lpbmcgYW4gaXRlbSwgcmVsb2FkIGFuZCBwcmV2ZW50IGJhZCBtYWdpY1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG90YWxzKCkge1xuICAgIC8vIExpdmUgUmVsb2FkaW5nIHN0dWZmXG4gICAgJChcIiNTaWRlQ29udGFpbmVySXRlbXNGaXhlZFwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgI1NpZGVDb250YWluZXJJdGVtc0ZpeGVkXCIpO1xuICAgICQoXCIjU2lkZUNvbnRhaW5lckl0ZW1zRmxvYXRpbmdcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiICNTaWRlQ29udGFpbmVySXRlbXNGbG9hdGluZ1wiKTtcbiAgICAkKFwiLlRvdGFsQ2FydEl0ZW1zXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuVG90YWxDYXJ0SXRlbXNcIik7XG4gICAgJChcIi5Ub3RhbENhcnRJdGVtc1NpZGViYXJcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5Ub3RhbENhcnRJdGVtc1NpZGViYXJcIik7XG4gICAgJChcIi5DYXJ0U3ViVG90YWxcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5DYXJ0U3ViVG90YWxcIik7XG4gICAgJChcIi5BdmFpbGFibGVTdG9ja1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLkF2YWlsYWJsZVN0b2NrXCIpO1xufVxuXG4vLyBTdWJtaXQgRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAocm91dGUsIHRhcmdldCwgZGF0YSwgYWN0aW9uKSB7XG4gICAgY29uc29sZS5sb2coXCJSdXRhOiBcIiArIHJvdXRlICsgXCIgVGFyZ2V0OiBcIiArIHRhcmdldCArIFwiIERhdGE6IFwiICsgZGF0YSArIFwiQWN0aW9uOiBcIisgYWN0aW9uKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBkYXRhLCBhY3Rpb246IGFjdGlvbiB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gJ3JlbG9hZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBwYWdlLCBkZWxldGUgcGFyYW1ldHRlcnMgYW5kIG9wZW4gY2hlY2tvdXQgc2lkZWJhclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF0gKyBcIj9jaGVja291dC1vblwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGVuIHN1Ym1pdEZvcm0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0b2FzdF9lcnJvcignJywgZGF0YS5tZXNzYWdlLCAnYm90dG9tQ2VudGVyJywgJycpO1xuICAgICAgICAgICAgICAgICQoJy5TaWRlQ29udGFpbmVyRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gc3VibWl0Rm9ybSgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBWYWxpZGF0ZSBhbmQgc2V0IGNvdXBvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnZhbGlkYXRlQW5kU2V0Q291cG9uID0gZnVuY3Rpb24gKHJvdXRlLCBjb2RlLCBjYXJ0aWQpIHtcbiAgICBsZXQgY291cG9uRGl2ID0gJCgnI0NvdXBvbkRpdicpO1xuICAgIGxldCBjb3Vwb25TZXQgPSAkKCcjU2V0dGVkQ291cG9uJyk7XG4gICAgY29uc29sZS5sb2coY29kZSwgY2FydGlkKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBjb2RlOiBjb2RlLCBjYXJ0aWQ6IGNhcnRpZCB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXByb2JhbmRvIGN1cMOzbi4uLlwiKTtcbiAgICAgICAgICAgICQoJy5Db3Vwb25Mb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChcIkN1cMOzbiBhY2VwdGFkbyAhXCIpO1xuICAgICAgICAgICAgICAgIGNvdXBvbkRpdi5oaWRlKDIwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb3Vwb25TZXQucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAkKCcjQ291cG9uVmFsaWRhdGlvbk1lc3NhZ2UnKS5odG1sKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5Db3Vwb25Mb2FkZXInKS5hZGRDbGFzcygnSGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gRmF2c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LmFkZEFydGljbGVUb0ZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGZhdmlkLCBhcnRpY2xlaWQsIGFjdGlvbiwgZGlzcGxheUJ1dHRvbikge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGZhdl9pZDogZmF2aWQsIGFydGljbGVfaWQ6IGFydGljbGVpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSAmJiBkYXRhLnJlc3VsdCA9PSAnYWRkZWQnKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5yZW1vdmVDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24uYWRkQ2xhc3MoJ2Zhdi1pY29uLWlzZmF2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gYWdyZWdhZG8gYSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJywgJycsIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjdHVhbGl6YWRvIC0gU2luIEFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUgJiYgZGF0YS5yZXN1bHQgPT0gJ3JlbW92ZWQnKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5hZGRDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLnJlbW92ZUNsYXNzKCdmYXYtaWNvbi1pc2ZhdicpO1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsICdQcm9kdWN0byBlbGltaW5hZG8gZGUgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsICcnLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEZhdnNUb3RhbEljb24oZGF0YS5mYXZzQ291bnQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0RmF2c1RvdGFsSWNvbihmYXZzKSB7XG4gICAgaWYgKGZhdnMgPiAwKSB7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYXInKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhJyk7XG4gICAgfSBlbHNlIGlmIChmYXZzID09IDApIHtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLmFkZENsYXNzKCdmYXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmEnKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhcicpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5hZGRDbGFzcygnZmEnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiBzZXRGYXZzVG90YWxJY29uKClcIik7XG4gICAgfVxufVxuXG53aW5kb3cucmVtb3ZlQXJ0aWNsZUZyb21GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBmYXZpZCwgYWN0aW9uKSB7XG4gICAgdmFyIGRvYWN0aW9uID0gYWN0aW9uO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGZhdl9pZDogZmF2aWQgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9hY3Rpb24pO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZG9hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSAncmVsb2FkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsICdQcm9kdWN0byBlbGltaW5hZG8gZGUgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsIGFjdGlvbiwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5tZXNzYWdlWydlcnJvckluZm8nXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxud2luZG93LnJlbW92ZUFsbEFydGljbGVzRnJvbUZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGN1c3RvbWVyaWQsIGFjdGlvbikge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGN1c3RvbWVyX2lkOiBjdXN0b21lcmlkIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLm1lc3NhZ2VbJ2Vycm9ySW5mbyddKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBMT0dJTiBBTkQgUkVHSVNURVJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuJCgnI1Jlc2VsbGVyQm94JykuaGlkZSgpO1xuXG53aW5kb3cub3BlblJlc2VsbGVyUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24oKVxue1xuICAgICQoJyNJc1Jlc2VsbGVyQ2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgJCgnLklmUmVzZWxsZXJFbmFibGUnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAkKCcjUmVzZWxsZXJCb3gnKS5zaG93KDEwMCk7XG4gICAgJCgnI1Jlc2VsbGVyQ1RBJykuaGlkZSgwKTtcbiAgICAkKCcuTm9ybWFDbGllbnRUaXRsZScpLmhpZGUoMCk7XG4gICAgJCgnLlJlc2VsbGVyVGl0bGUnKS5zaG93KDApO1xufVxuXG5cbndpbmRvdy5jbG9zZVJlc2VsbGVyUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24oKVxue1xuICAgICQoJyNJc1Jlc2VsbGVyQ2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICQoJy5JZlJlc2VsbGVyRW5hYmxlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAkKCcjUmVzZWxsZXJCb3gnKS5oaWRlKDApO1xuICAgICQoJyNSZXNlbGxlckNUQScpLnNob3coMTAwKTtcbiAgICAkKCcuTm9ybWFDbGllbnRUaXRsZScpLnNob3coMCk7XG4gICAgJCgnLlJlc2VsbGVyVGl0bGUnKS5oaWRlKDApO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy5HZW9Qcm92U2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBwcm92X2lkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgZ2V0R2VvTG9jcyhwcm92X2lkKTtcbiAgICB9KTtcbn0pO1xuXG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgTUlYIEZVTkNUSU9OU1xufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG53aW5kb3cuY2xvc2VFbGVtZW50ID0gZnVuY3Rpb24oc2VsZWN0b3IpXG57XG4gICAgJChzZWxlY3RvcikuaGlkZSgxMDApO1xufVxuXG53aW5kb3cuZ2V0UGFyYW0gPSBmdW5jdGlvbihwYXJhbWV0ZXJOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGwsXG4gICAgICAgIHRtcCA9IFtdO1xuICAgIGxvY2F0aW9uLnNlYXJjaFxuICAgICAgICAuc3Vic3RyKDEpXG4gICAgICAgIC5zcGxpdChcIiZcIilcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdG1wID0gaXRlbS5zcGxpdChcIj1cIik7XG4gICAgICAgIGlmICh0bXBbMF0gPT09IHBhcmFtZXRlck5hbWUpIHJlc3VsdCA9IGRlY29kZVVSSUNvbXBvbmVudCh0bXBbMV0pO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbndpbmRvdy5nZXRQYXJhbXMgPSBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgcGFyYW1zID0ge307XG5cdHZhciBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdHBhcnNlci5ocmVmID0gdXJsO1xuXHR2YXIgcXVlcnkgPSBwYXJzZXIuc2VhcmNoLnN1YnN0cmluZygxKTtcblx0dmFyIHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcblx0XHRwYXJhbXNbcGFpclswXV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG5cdH1cblx0cmV0dXJuIHBhcmFtcztcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==