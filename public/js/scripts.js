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
                console.log("Setting Data");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWNjZDkzZmJhMWQ4NjFkODM3Y2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInJlbW92ZUNsYXNzIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInNpYmxpbmdzIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiaHRtbCIsIndpbmRvdyIsImNoZWNrb3V0U2lkZWJhciIsInN0YXRlIiwic2lkZWJhciIsIndyYXBwZXIiLCJmaXhMaXN0TGF5b3V0Iiwid2lkdGgiLCJzaG93IiwiYWRkQ2xhc3MiLCJoaWRlIiwidW5kZWZpbmVkIiwiaGFzQ2xhc3MiLCJvcGVuQ2hlY2tvdXREZXNrdG9wIiwib3BlbkZpbHRlcnMiLCJmaWx0ZXJzIiwidHJpZ2dlciIsImNoZWNrU2l6ZVN0b2NrIiwicm91dGUiLCJhcnRpY2xlSWQiLCJzaXplIiwic3VibWl0QnV0dG9uIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJzdG9jayIsInByb3AiLCJlcnJvciIsInN1bUFsbEl0ZW1zIiwic3VtIiwiZWFjaCIsImluZGV4IiwicGFyc2VJbnQiLCJzdW1EaXZzIiwib3JpZ2lucyIsInRhcmdldCIsInBhcnNlRmxvYXQiLCJ0ZXh0Iiwic2V0SXRlbXNEYXRhIiwiaXRlbURhdGEiLCJpZCIsInByaWNlIiwiaXRlbSIsInRvdGFsIiwicHVzaCIsImluZm8iLCJhZGRUb0NhcnQiLCJyZXNwb25zZSIsInRvYXN0X3N1Y2Nlc3MiLCJtZXNzYWdlIiwidXBkYXRlVG90YWxzIiwic2V0VGltZW91dCIsInJlc3BvbnNlSlNPTiIsInJlbW92ZUZyb21DYXJ0IiwiZGl2IiwiYWN0aW9uIiwiaXRlbWlkIiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJyZW1vdmUiLCJyZWxvYWQiLCJsb2FkIiwic3VibWl0Rm9ybSIsInRvYXN0X2Vycm9yIiwicmVzcG9uc2VUZXh0IiwidmFsaWRhdGVBbmRTZXRDb3Vwb24iLCJjb2RlIiwiY2FydGlkIiwiY291cG9uRGl2IiwiY291cG9uU2V0IiwiYmVmb3JlU2VuZCIsImNvbXBsZXRlIiwiYWRkQXJ0aWNsZVRvRmF2cyIsImZhdmlkIiwiYXJ0aWNsZWlkIiwiZGlzcGxheUJ1dHRvbiIsImZhdl9pZCIsImFydGljbGVfaWQiLCJyZXN1bHQiLCJzZXRGYXZzVG90YWxJY29uIiwiZmF2c0NvdW50IiwiZmF2cyIsInJlbW92ZUFydGljbGVGcm9tRmF2cyIsImRvYWN0aW9uIiwicmVtb3ZlQWxsQXJ0aWNsZXNGcm9tRmF2cyIsImN1c3RvbWVyaWQiLCJjdXN0b21lcl9pZCIsIm9wZW5SZXNlbGxlclJlZ2lzdHJhdGlvbiIsImNsb3NlUmVzZWxsZXJSZWdpc3RyYXRpb24iLCJkb2N1bWVudCIsInJlYWR5IiwicHJvdl9pZCIsImdldEdlb0xvY3MiLCJjbG9zZUVsZW1lbnQiLCJzZWxlY3RvciIsImdldFBhcmFtIiwicGFyYW1ldGVyTmFtZSIsInRtcCIsInNlYXJjaCIsInN1YnN0ciIsImZvckVhY2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJnZXRQYXJhbXMiLCJwYXJhbXMiLCJwYXJzZXIiLCJjcmVhdGVFbGVtZW50IiwicXVlcnkiLCJzdWJzdHJpbmciLCJ2YXJzIiwiaSIsImxlbmd0aCIsInBhaXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SEQ7O0FBS0FULE9BQU9rRyxRQUFQLEdBQWtCLFVBQVNDLGFBQVQsRUFBd0I7QUFDdEMsUUFBSWxCLFNBQVMsSUFBYjtBQUFBLFFBQ0ltQixNQUFNLEVBRFY7QUFFQXpDLGFBQVMwQyxNQUFULENBQ0tDLE1BREwsQ0FDWSxDQURaLEVBRUt6QyxLQUZMLENBRVcsR0FGWCxFQUdLMEMsT0FITCxDQUdhLFVBQVUzRCxJQUFWLEVBQWdCO0FBQ3pCd0QsY0FBTXhELEtBQUtpQixLQUFMLENBQVcsR0FBWCxDQUFOO0FBQ0EsWUFBSXVDLElBQUksQ0FBSixNQUFXRCxhQUFmLEVBQThCbEIsU0FBU3VCLG1CQUFtQkosSUFBSSxDQUFKLENBQW5CLENBQVQ7QUFDN0IsS0FOTDtBQU9BLFdBQU9uQixNQUFQO0FBQ0gsQ0FYRDs7QUFjQWpGLE9BQU95RyxTQUFQLEdBQW1CLFVBQVNuRixHQUFULEVBQWM7QUFDN0IsUUFBSW9GLFNBQVMsRUFBYjtBQUNILFFBQUlDLFNBQVNmLFNBQVNnQixhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQUQsV0FBTy9DLElBQVAsR0FBY3RDLEdBQWQ7QUFDQSxRQUFJdUYsUUFBUUYsT0FBT04sTUFBUCxDQUFjUyxTQUFkLENBQXdCLENBQXhCLENBQVo7QUFDQSxRQUFJQyxPQUFPRixNQUFNaEQsS0FBTixDQUFZLEdBQVosQ0FBWDtBQUNBLFNBQUssSUFBSW1ELElBQUksQ0FBYixFQUFnQkEsSUFBSUQsS0FBS0UsTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ3JDLFlBQUlFLE9BQU9ILEtBQUtDLENBQUwsRUFBUW5ELEtBQVIsQ0FBYyxHQUFkLENBQVg7QUFDQTZDLGVBQU9RLEtBQUssQ0FBTCxDQUFQLElBQWtCVixtQkFBbUJVLEtBQUssQ0FBTCxDQUFuQixDQUFsQjtBQUNBO0FBQ0QsV0FBT1IsTUFBUDtBQUNBLENBWEQsQyIsImZpbGUiOiIvanMvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWNjZDkzZmJhMWQ4NjFkODM3Y2IiLCIvLyBMb2FkZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kKFwiLmxvYWRlci1vbi1jaGFuZ2VcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjZnVsbC1sb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuJChcIi5sb2FkZXItb24tc3VibWl0XCIpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI2Z1bGwtbG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgIHJldHVybiB0cnVlO1xufSk7XG5cbiQoJy5kb250LXN1Ym1pdC1vbi1lbnRlciwgLmRzb24nKS5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiRU5URVJcIik7XG4gICAgaWYgKGUud2hpY2ggPT0gMTMpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZS53aGljaCA9PSAxMykgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbi8vIE1vZGlmeSBjYXJ0IGl0ZW0gcXVhbnRpdHkgXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kKCcuSW5wdXRCdG5RJykub24oJ2NoYW5nZSBrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgT3JpZ2luYWwgQXJ0aWNsZSBQcmljZVxuICAgIGxldCB2YWx1ZSA9ICQodGhpcykuc2libGluZ3MoJy5BcnRpY2xlUHJpY2UnKS52YWwoKTtcbiAgICAvLyBRdWFudGl0eVxuICAgIGxldCBxdWFudGl0eSA9ICQodGhpcykudmFsKCk7XG4gICAgLy8gTmVyIFZhbHVlXG4gICAgbGV0IG5ld1ZhbHVlID0gKHZhbHVlICogcXVhbnRpdHkpO1xuICAgIC8vIE5ldyBQcmljZSBUYXJnZXRcbiAgICBsZXQgbmV3UHJpY2VUYXJnZXQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnNpYmxpbmdzKCcuVG90YWxJdGVtUHJpY2UnKTtcblxuICAgIGNvbnNvbGUubG9nKHZhbHVlLCBxdWFudGl0eSwgbmV3VmFsdWUpO1xuICAgIG1vZGlmeUNhcnRJdGVtUSgkKHRoaXMpLCBuZXdQcmljZVRhcmdldCwgbmV3VmFsdWUpO1xufSlcblxuZnVuY3Rpb24gbW9kaWZ5Q2FydEl0ZW1RKGUsIG5ld1ByaWNlVGFyZ2V0LCBuZXdWYWx1ZSkge1xuICAgIGUuc2libGluZ3MoJy5JbnB1dEJ0blEnKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgbmV3UHJpY2VUYXJnZXQuaHRtbCgnJCAnICsgbmV3VmFsdWUpO1xufVxuXG5cbi8vIENoZWNrb3V0IHNpZGViYXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cdFx0XG53aW5kb3cuY2hlY2tvdXRTaWRlYmFyID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gJCgnLkNoZWNrb3V0Q2FydCcpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSAkKCcubWFpbi13cmFwcGVyJyk7XG5cbiAgICAvLyBDaGVjayBpZiBsYXlvdXQgbmVlZCB0byBiZSBmaXhlZCBpbiBvcmRlciB0byBub3QgaGF2ZSBzcXVpc2hlZCBjb2xzLlxuICAgIGxldCBmaXhMaXN0TGF5b3V0ID0gZmFsc2U7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTY0NSAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDEyMDApIFxuICAgICAgICBmaXhMaXN0TGF5b3V0ID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE5ldyBjYXJ0IHNpZGViYXJcbiAgICAgICAgc2lkZWJhci5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ2FsbG93LXNpZGViYXInKTtcbiAgICAgICAgaWYoZml4TGlzdExheW91dClcbiAgICAgICAgICAgICQoJy5hcnRpY2xlcy1jb250YWluZXIgLmFydGljbGUnKS5yZW1vdmVDbGFzcygnY29sLXhsLTInKS5hZGRDbGFzcygnY29sLXhsLTMnKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTmV3IGNhcnQgc2lkZWJhclxuICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygnYWxsb3ctc2lkZWJhcicpO1xuICAgICAgICBpZihmaXhMaXN0TGF5b3V0KVxuICAgICAgICAgICAgJCgnLmFydGljbGVzLWNvbnRhaW5lciAuYXJ0aWNsZScpLmFkZENsYXNzKCdjb2wteGwtMicpLnJlbW92ZUNsYXNzKCdjb2wteGwtMycpO1xuICAgIH1cblxuXG4gICAgaWYgKHN0YXRlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc2lkZWJhci5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3coKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ3Nob3cnKSB7XG4gICAgICAgIHNob3coKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gJ2hpZGUnKSB7XG4gICAgICAgIGhpZGUoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufVxuXG5cblxud2luZG93Lm9wZW5DaGVja291dERlc2t0b3AgPSBmdW5jdGlvbigpXG57XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAgIGNoZWNrb3V0U2lkZWJhcignc2hvdycpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4vLyAgICAgaWYgKHNjcm9sbCA+IDEyNSkge1xuLy8gICAgICAgICAkKCcuY2hlY2tvdXQtY2FydCcpLmFkZENsYXNzKCdzY3JvbGxlZCcpO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgICAgJCgnLmNoZWNrb3V0LWNhcnQnKS5yZW1vdmVDbGFzcygnc2Nyb2xsZWQnKTtcbi8vICAgICB9XG4vLyB9KTtcblxuXG4vLyBTaWRlYmFyIGNoZWNrb3V0IGFic29sdXRlXG4vLyB3aW5kb3cuY2hlY2tvdXRTaWRlYmFyID0gZnVuY3Rpb24gKGFjdGlvbikge1xuLy8gICAgIGlmIChhY3Rpb24gPT0gJ29wZW4nKSB7XG4vLyAgICAgICAgICQoJyNTaWRlQ29udGFpbmVyJykudG9nZ2xlKDEwMCk7XG4vLyAgICAgICAgICQoJyNNYWluT3ZlcmxheScpLmZhZGVJbigxMDApO1xuLy8gICAgIH1cbi8vICAgICBpZiAoYWN0aW9uID09ICdjbG9zZScpIHtcbi8vICAgICAgICAgJCgnI1NpZGVDb250YWluZXInKS50b2dnbGUoMTAwKTtcbi8vICAgICAgICAgJCgnI01haW5PdmVybGF5JykuZmFkZU91dCgxMDApO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gJCgnI01haW5PdmVybGF5JykuY2xpY2soZnVuY3Rpb24gKCkge1xuLy8gICAgIGNoZWNrb3V0U2lkZWJhcihcImNsb3NlXCIpO1xuLy8gfSk7XG5cbi8vIHdpbmRvdy5vcGVuRmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICBjb25zdCBmaWx0ZXJzID0gJCgnI1NlYXJjaEZpbHRlcnMnKTtcbi8vICAgICBpZiAoZmlsdGVycy5jc3MoJ2Rpc3BsYXknKSA9PSAnbm9uZScpIHtcbi8vICAgICAgICAgZmlsdGVycy5jc3MoJ2Rpc3BsYXknLCAnaW5oZXJpdCcpO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgICAgZmlsdGVycy5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuLy8gICAgIH1cbi8vIH1cblxuXG53aW5kb3cub3BlbkZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9ICQoJyNTZWFyY2hGaWx0ZXJzJyk7XG4gICAgY29uc3QgdHJpZ2dlciA9ICQoJyNTZWFyY2hGaWx0ZXJzVHJpZ2dlcicpO1xuICAgIGlmKGZpbHRlcnMuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgIHtcbiAgICAgICAgZmlsdGVycy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHRyaWdnZXIuc2hvdygpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmaWx0ZXJzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdHJpZ2dlci5oaWRlKCk7XG4gICAgfVxuXG59XG5cbi8vIEhpZGUgYWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4vLyAgICAgJCgnLmFsZXJ0JykuaGlkZSgxMDApO1xuLy8gfSwgNDAwMCk7XG5cblxuLy8gQ2FydCBSZXN1bWVuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHdpbmRvdy5zaG93Q2FydFJlc3VtZU1vYmlsZSA9IGZ1bmN0aW9uKClcbi8vIHtcbi8vICAgICAkKCcuY2FydC1yZXN1bWUtZGV0YWlscy1tb2JpbGUnKS50b2dnbGVDbGFzcygnSGlkZGVuJywgMTAwKTtcbi8vIH1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBDQVJUXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbi8vIENoZWNrIFN0b2NrIFxud2luZG93LmNoZWNrU2l6ZVN0b2NrID0gZnVuY3Rpb24gKHJvdXRlLCBhcnRpY2xlSWQsIHNpemUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhyb3V0ZSArIFwiIHwgXCIgKyBhcnRpY2xlSWQgKyBcIiB8IFwiICsgc2l6ZSk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gJCgnI0FkZFRvQ2FydEZvcm1CdG4nKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7YXJ0aWNsZUlkOiBhcnRpY2xlSWQsIHNpemU6IHNpemV9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdG9jayA+IDApIHtcbiAgICAgICAgICAgICAgICAkKCcuQXZhaWxhYmxlU3RvY2snKS5odG1sKFwiU3RvY2sgZGlzcG9uaWJsZTogXCIgKyBkYXRhLnN0b2NrKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuc3RvY2sgPD0gMCkge1xuICAgICAgICAgICAgICAgICQoJy5BdmFpbGFibGVTdG9jaycpLmh0bWwoXCJObyBoYXkgc3RvY2sgYWwgbW9tZW50b1wiKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcuQXZhaWxhYmxlU3RvY2snKS5odG1sKFwiUHJvZHVjdG8gbm8gZGlzcG9uaWJsZVwiKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIGNoZWNrU2l6ZVN0b2NrKClcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxud2luZG93LnN1bUFsbEl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgIHN1bSA9IDA7XG4gICAgJCgnLlRvdGFsSXRlbVByaWNlJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlSW50KCQodGhpcykuaHRtbCgpKTtcbiAgICB9KTtcbiAgICAkKCcuU3ViVG90YWwnKS5odG1sKHN1bSk7XG59XG5cblxuLy8gU3VtIGRpdnMgdGV4dFxud2luZG93LnN1bURpdnMgPSBmdW5jdGlvbiAob3JpZ2lucywgdGFyZ2V0KSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgb3JpZ2lucy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VtICs9IHBhcnNlRmxvYXQoJCh0aGlzKS50ZXh0KCkpO1xuICAgIH0pO1xuICAgIHRhcmdldC50ZXh0KHN1bSk7XG59XG5cblxuLy8gU2V0IGNhcnQgaXRlbXMgSlNPTlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnNldEl0ZW1zRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpdGVtRGF0YSA9IFtdO1xuXG4gICAgJCgnLkl0ZW0tRGF0YScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgIHZhciBwcmljZSA9ICQodGhpcykuZGF0YSgncHJpY2UnKTtcbiAgICAgICAgdmFyIHF1YW50aXR5ID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpdGVtID0ge31cbiAgICAgICAgaXRlbVsnaWQnXSA9IGlkO1xuICAgICAgICBpdGVtWydwcmljZSddID0gcHJpY2U7XG4gICAgICAgIGl0ZW1bJ3F1YW50aXR5J10gPSBxdWFudGl0eTtcbiAgICAgICAgLy8gVXBkYXRlIGRpc3BsYXkgdG90YWwgaXRlbSBwcmljZVxuICAgICAgICB0b3RhbCA9IHByaWNlICogcXVhbnRpdHk7XG4gICAgICAgICQoJy4nICsgaWQgKyAnLVRvdGFsSXRlbVByaWNlJykuaHRtbCh0b3RhbCk7XG5cbiAgICAgICAgaXRlbURhdGEucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICAvLyBVcGRhdGUgVG90YWxcbiAgICBjb25zb2xlLmluZm8oaXRlbURhdGEpO1xuICAgIHN1bUFsbEl0ZW1zKCk7XG4gICAgJCgnI0l0ZW1zLURhdGEnKS52YWwoaXRlbURhdGEpO1xufVxuXG4vLyBBZGQgcHJvZHVjdCB0byBjYXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuYWRkVG9DYXJ0ID0gZnVuY3Rpb24gKHJvdXRlLCBkYXRhKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicsICcnLCAyNTAwKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgRGF0YVwiKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1bUFsbEl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5DaGVja291dERlc2t0b3AoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09ICd3YXJuaW5nJykge1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ1VwcyEnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiBhZGR0b0NhcnQoKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnVXBzIScsICdIYSBvY3VycmlkbyB1biBlcnJvcjogPGI+JyArIGRhdGEucmVzcG9uc2VKU09OWydtZXNzYWdlJ10gKyAnPC9iPicsICdib3R0b21DZW50ZXInKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4gXG5cbi8vIFJlbW92ZSBwcm9kdWN0IGZyb20gY2FydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnJlbW92ZUZyb21DYXJ0ID0gZnVuY3Rpb24gKHJvdXRlLCBpZCwgcXVhbnRpdHksIGRpdiwgYWN0aW9uKSB7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgaXRlbWlkOiBpZCwgcXVhbnRpdHk6IHF1YW50aXR5LCBhY3Rpb246IGFjdGlvbiwgbWV0aG9kOiAnYWpheCcgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09ICdjYXJ0LXJlbW92ZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICQoZGl2KS5oaWRlKDEwMCk7XG4gICAgICAgICAgICAgICAgJChkaXYpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRvdGFscygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpdik7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gcmVtb3ZlRnJvbUNhcnQoKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gSWYgYW4gZXJyb3IgcG9wcyB3aGVuIGRlc3Ryb3lpbmcgYW4gaXRlbSwgcmVsb2FkIGFuZCBwcmV2ZW50IGJhZCBtYWdpY1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG90YWxzKCkge1xuICAgIC8vIExpdmUgUmVsb2FkaW5nIHN0dWZmXG4gICAgJChcIiNTaWRlQ29udGFpbmVySXRlbXNGaXhlZFwiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgI1NpZGVDb250YWluZXJJdGVtc0ZpeGVkXCIpO1xuICAgICQoXCIjU2lkZUNvbnRhaW5lckl0ZW1zRmxvYXRpbmdcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiICNTaWRlQ29udGFpbmVySXRlbXNGbG9hdGluZ1wiKTtcbiAgICAkKFwiLlRvdGFsQ2FydEl0ZW1zXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuVG90YWxDYXJ0SXRlbXNcIik7XG4gICAgJChcIi5Ub3RhbENhcnRJdGVtc1NpZGViYXJcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5Ub3RhbENhcnRJdGVtc1NpZGViYXJcIik7XG4gICAgJChcIi5DYXJ0U3ViVG90YWxcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5DYXJ0U3ViVG90YWxcIik7XG4gICAgJChcIi5BdmFpbGFibGVTdG9ja1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLkF2YWlsYWJsZVN0b2NrXCIpO1xufVxuXG4vLyBTdWJtaXQgRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAocm91dGUsIHRhcmdldCwgZGF0YSwgYWN0aW9uKSB7XG4gICAgY29uc29sZS5sb2coXCJSdXRhOiBcIiArIHJvdXRlICsgXCIgVGFyZ2V0OiBcIiArIHRhcmdldCArIFwiIERhdGE6IFwiICsgZGF0YSArIFwiQWN0aW9uOiBcIisgYWN0aW9uKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBkYXRhLCBhY3Rpb246IGFjdGlvbiB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gJ3JlbG9hZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBwYWdlLCBkZWxldGUgcGFyYW1ldHRlcnMgYW5kIG9wZW4gY2hlY2tvdXQgc2lkZWJhclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF0gKyBcIj9jaGVja291dC1vblwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGVuIHN1Ym1pdEZvcm0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0b2FzdF9lcnJvcignJywgZGF0YS5tZXNzYWdlLCAnYm90dG9tQ2VudGVyJywgJycpO1xuICAgICAgICAgICAgICAgICQoJy5TaWRlQ29udGFpbmVyRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gc3VibWl0Rm9ybSgpXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBWYWxpZGF0ZSBhbmQgc2V0IGNvdXBvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LnZhbGlkYXRlQW5kU2V0Q291cG9uID0gZnVuY3Rpb24gKHJvdXRlLCBjb2RlLCBjYXJ0aWQpIHtcbiAgICBsZXQgY291cG9uRGl2ID0gJCgnI0NvdXBvbkRpdicpO1xuICAgIGxldCBjb3Vwb25TZXQgPSAkKCcjU2V0dGVkQ291cG9uJyk7XG4gICAgY29uc29sZS5sb2coY29kZSwgY2FydGlkKTtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBjb2RlOiBjb2RlLCBjYXJ0aWQ6IGNhcnRpZCB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXByb2JhbmRvIGN1cMOzbi4uLlwiKTtcbiAgICAgICAgICAgICQoJy5Db3Vwb25Mb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChcIkN1cMOzbiBhY2VwdGFkbyAhXCIpO1xuICAgICAgICAgICAgICAgIGNvdXBvbkRpdi5oaWRlKDIwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb3Vwb25TZXQucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAkKCcjQ291cG9uVmFsaWRhdGlvbk1lc3NhZ2UnKS5odG1sKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5Db3Vwb25Mb2FkZXInKS5hZGRDbGFzcygnSGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gRmF2c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxud2luZG93LmFkZEFydGljbGVUb0ZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGZhdmlkLCBhcnRpY2xlaWQsIGFjdGlvbiwgZGlzcGxheUJ1dHRvbikge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGZhdl9pZDogZmF2aWQsIGFydGljbGVfaWQ6IGFydGljbGVpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSAmJiBkYXRhLnJlc3VsdCA9PSAnYWRkZWQnKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5yZW1vdmVDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24uYWRkQ2xhc3MoJ2Zhdi1pY29uLWlzZmF2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gYWdyZWdhZG8gYSBmYXZvcml0b3MnLCAnYm90dG9tQ2VudGVyJywgJycsIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjdHVhbGl6YWRvIC0gU2luIEFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUgJiYgZGF0YS5yZXN1bHQgPT0gJ3JlbW92ZWQnKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5hZGRDbGFzcygnZmF2LWljb24tbm9mYXYnKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLnJlbW92ZUNsYXNzKCdmYXYtaWNvbi1pc2ZhdicpO1xuICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsICdQcm9kdWN0byBlbGltaW5hZG8gZGUgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsICcnLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEZhdnNUb3RhbEljb24oZGF0YS5mYXZzQ291bnQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0RmF2c1RvdGFsSWNvbihmYXZzKSB7XG4gICAgaWYgKGZhdnMgPiAwKSB7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYXInKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhJyk7XG4gICAgfSBlbHNlIGlmIChmYXZzID09IDApIHtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLmFkZENsYXNzKCdmYXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmEnKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhcicpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5hZGRDbGFzcygnZmEnKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBlbiBzZXRGYXZzVG90YWxJY29uKClcIik7XG4gICAgfVxufVxuXG53aW5kb3cucmVtb3ZlQXJ0aWNsZUZyb21GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBmYXZpZCwgYWN0aW9uKSB7XG4gICAgdmFyIGRvYWN0aW9uID0gYWN0aW9uO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGZhdl9pZDogZmF2aWQgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9hY3Rpb24pO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZG9hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSAncmVsb2FkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ09rIScsICdQcm9kdWN0byBlbGltaW5hZG8gZGUgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsIGFjdGlvbiwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBoYXkgYWNjacOzbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5tZXNzYWdlWydlcnJvckluZm8nXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxud2luZG93LnJlbW92ZUFsbEFydGljbGVzRnJvbUZhdnMgPSBmdW5jdGlvbiAocm91dGUsIGN1c3RvbWVyaWQsIGFjdGlvbikge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGN1c3RvbWVyX2lkOiBjdXN0b21lcmlkIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLm1lc3NhZ2VbJ2Vycm9ySW5mbyddKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLypcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBMT0dJTiBBTkQgUkVHSVNURVJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuJCgnI1Jlc2VsbGVyQm94JykuaGlkZSgpO1xuXG53aW5kb3cub3BlblJlc2VsbGVyUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24oKVxue1xuICAgICQoJyNJc1Jlc2VsbGVyQ2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgJCgnLklmUmVzZWxsZXJFbmFibGUnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAkKCcjUmVzZWxsZXJCb3gnKS5zaG93KDEwMCk7XG4gICAgJCgnI1Jlc2VsbGVyQ1RBJykuaGlkZSgwKTtcbiAgICAkKCcuTm9ybWFDbGllbnRUaXRsZScpLmhpZGUoMCk7XG4gICAgJCgnLlJlc2VsbGVyVGl0bGUnKS5zaG93KDApO1xufVxuXG5cbndpbmRvdy5jbG9zZVJlc2VsbGVyUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24oKVxue1xuICAgICQoJyNJc1Jlc2VsbGVyQ2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICQoJy5JZlJlc2VsbGVyRW5hYmxlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAkKCcjUmVzZWxsZXJCb3gnKS5oaWRlKDApO1xuICAgICQoJyNSZXNlbGxlckNUQScpLnNob3coMTAwKTtcbiAgICAkKCcuTm9ybWFDbGllbnRUaXRsZScpLnNob3coMCk7XG4gICAgJCgnLlJlc2VsbGVyVGl0bGUnKS5oaWRlKDApO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy5HZW9Qcm92U2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBwcm92X2lkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgZ2V0R2VvTG9jcyhwcm92X2lkKTtcbiAgICB9KTtcbn0pO1xuXG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgTUlYIEZVTkNUSU9OU1xufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG53aW5kb3cuY2xvc2VFbGVtZW50ID0gZnVuY3Rpb24oc2VsZWN0b3IpXG57XG4gICAgJChzZWxlY3RvcikuaGlkZSgxMDApO1xufVxuXG53aW5kb3cuZ2V0UGFyYW0gPSBmdW5jdGlvbihwYXJhbWV0ZXJOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGwsXG4gICAgICAgIHRtcCA9IFtdO1xuICAgIGxvY2F0aW9uLnNlYXJjaFxuICAgICAgICAuc3Vic3RyKDEpXG4gICAgICAgIC5zcGxpdChcIiZcIilcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdG1wID0gaXRlbS5zcGxpdChcIj1cIik7XG4gICAgICAgIGlmICh0bXBbMF0gPT09IHBhcmFtZXRlck5hbWUpIHJlc3VsdCA9IGRlY29kZVVSSUNvbXBvbmVudCh0bXBbMV0pO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbndpbmRvdy5nZXRQYXJhbXMgPSBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgcGFyYW1zID0ge307XG5cdHZhciBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdHBhcnNlci5ocmVmID0gdXJsO1xuXHR2YXIgcXVlcnkgPSBwYXJzZXIuc2VhcmNoLnN1YnN0cmluZygxKTtcblx0dmFyIHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcblx0XHRwYXJhbXNbcGFpclswXV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG5cdH1cblx0cmV0dXJuIHBhcmFtcztcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==