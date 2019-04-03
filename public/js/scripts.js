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
        async: false,
        data: data,
        success: function success(data) {
            console.log(data);
            if (data.response == 'success') {
                toast_success('Ok!', data.message, 'bottomCenter', '', 2500);
                updateTotals();
                console.log("Setting Data");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDJlY2JiNTczMjZiMzlhYzE5Y2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInJlbW92ZUNsYXNzIiwia2V5cHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInNpYmxpbmdzIiwidmFsIiwicXVhbnRpdHkiLCJuZXdWYWx1ZSIsIm5ld1ByaWNlVGFyZ2V0IiwicGFyZW50IiwibW9kaWZ5Q2FydEl0ZW1RIiwiaHRtbCIsIndpbmRvdyIsImNoZWNrb3V0U2lkZWJhciIsInN0YXRlIiwic2lkZWJhciIsIndyYXBwZXIiLCJmaXhMaXN0TGF5b3V0Iiwid2lkdGgiLCJzaG93IiwiYWRkQ2xhc3MiLCJoaWRlIiwidW5kZWZpbmVkIiwiaGFzQ2xhc3MiLCJvcGVuQ2hlY2tvdXREZXNrdG9wIiwib3BlbkZpbHRlcnMiLCJmaWx0ZXJzIiwidHJpZ2dlciIsImNoZWNrU2l6ZVN0b2NrIiwicm91dGUiLCJhcnRpY2xlSWQiLCJzaXplIiwic3VibWl0QnV0dG9uIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJzdG9jayIsInByb3AiLCJlcnJvciIsInN1bUFsbEl0ZW1zIiwic3VtIiwiZWFjaCIsImluZGV4IiwicGFyc2VJbnQiLCJzdW1EaXZzIiwib3JpZ2lucyIsInRhcmdldCIsInBhcnNlRmxvYXQiLCJ0ZXh0Iiwic2V0SXRlbXNEYXRhIiwiaXRlbURhdGEiLCJpZCIsInByaWNlIiwiaXRlbSIsInRvdGFsIiwicHVzaCIsImluZm8iLCJhZGRUb0NhcnQiLCJhc3luYyIsInJlc3BvbnNlIiwidG9hc3Rfc3VjY2VzcyIsIm1lc3NhZ2UiLCJ1cGRhdGVUb3RhbHMiLCJyZXNwb25zZUpTT04iLCJyZW1vdmVGcm9tQ2FydCIsImRpdiIsImFjdGlvbiIsIml0ZW1pZCIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwicmVtb3ZlIiwicmVsb2FkIiwibG9hZCIsInN1Ym1pdEZvcm0iLCJ0b2FzdF9lcnJvciIsInJlc3BvbnNlVGV4dCIsInZhbGlkYXRlQW5kU2V0Q291cG9uIiwiY29kZSIsImNhcnRpZCIsImNvdXBvbkRpdiIsImNvdXBvblNldCIsImJlZm9yZVNlbmQiLCJjb21wbGV0ZSIsImFkZEFydGljbGVUb0ZhdnMiLCJmYXZpZCIsImFydGljbGVpZCIsImRpc3BsYXlCdXR0b24iLCJmYXZfaWQiLCJhcnRpY2xlX2lkIiwicmVzdWx0Iiwic2V0RmF2c1RvdGFsSWNvbiIsImZhdnNDb3VudCIsImZhdnMiLCJyZW1vdmVBcnRpY2xlRnJvbUZhdnMiLCJkb2FjdGlvbiIsInJlbW92ZUFsbEFydGljbGVzRnJvbUZhdnMiLCJjdXN0b21lcmlkIiwiY3VzdG9tZXJfaWQiLCJvcGVuUmVzZWxsZXJSZWdpc3RyYXRpb24iLCJjbG9zZVJlc2VsbGVyUmVnaXN0cmF0aW9uIiwiZG9jdW1lbnQiLCJyZWFkeSIsInByb3ZfaWQiLCJnZXRHZW9Mb2NzIiwiY2xvc2VFbGVtZW50Iiwic2VsZWN0b3IiLCJnZXRQYXJhbSIsInBhcmFtZXRlck5hbWUiLCJ0bXAiLCJzZWFyY2giLCJzdWJzdHIiLCJmb3JFYWNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2V0UGFyYW1zIiwicGFyYW1zIiwicGFyc2VyIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5Iiwic3Vic3RyaW5nIiwidmFycyIsImkiLCJsZW5ndGgiLCJwYWlyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QVQsT0FBT2tHLFFBQVAsR0FBa0IsVUFBU0MsYUFBVCxFQUF3QjtBQUN0QyxRQUFJbEIsU0FBUyxJQUFiO0FBQUEsUUFDSW1CLE1BQU0sRUFEVjtBQUVBekMsYUFBUzBDLE1BQVQsQ0FDS0MsTUFETCxDQUNZLENBRFosRUFFS3pDLEtBRkwsQ0FFVyxHQUZYLEVBR0swQyxPQUhMLENBR2EsVUFBVTNELElBQVYsRUFBZ0I7QUFDekJ3RCxjQUFNeEQsS0FBS2lCLEtBQUwsQ0FBVyxHQUFYLENBQU47QUFDQSxZQUFJdUMsSUFBSSxDQUFKLE1BQVdELGFBQWYsRUFBOEJsQixTQUFTdUIsbUJBQW1CSixJQUFJLENBQUosQ0FBbkIsQ0FBVDtBQUM3QixLQU5MO0FBT0EsV0FBT25CLE1BQVA7QUFDSCxDQVhEOztBQWNBakYsT0FBT3lHLFNBQVAsR0FBbUIsVUFBU25GLEdBQVQsRUFBYztBQUM3QixRQUFJb0YsU0FBUyxFQUFiO0FBQ0gsUUFBSUMsU0FBU2YsU0FBU2dCLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBRCxXQUFPL0MsSUFBUCxHQUFjdEMsR0FBZDtBQUNBLFFBQUl1RixRQUFRRixPQUFPTixNQUFQLENBQWNTLFNBQWQsQ0FBd0IsQ0FBeEIsQ0FBWjtBQUNBLFFBQUlDLE9BQU9GLE1BQU1oRCxLQUFOLENBQVksR0FBWixDQUFYO0FBQ0EsU0FBSyxJQUFJbUQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxLQUFLRSxNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDckMsWUFBSUUsT0FBT0gsS0FBS0MsQ0FBTCxFQUFRbkQsS0FBUixDQUFjLEdBQWQsQ0FBWDtBQUNBNkMsZUFBT1EsS0FBSyxDQUFMLENBQVAsSUFBa0JWLG1CQUFtQlUsS0FBSyxDQUFMLENBQW5CLENBQWxCO0FBQ0E7QUFDRCxXQUFPUixNQUFQO0FBQ0EsQ0FYRCxDIiwiZmlsZSI6Ii9qcy9zY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MmVjYmI1NzMyNmIzOWFjMTljZSIsIi8vIExvYWRlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoXCIubG9hZGVyLW9uLWNoYW5nZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNmdWxsLWxvYWRlcicpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG4kKFwiLmxvYWRlci1vbi1zdWJtaXRcIikub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjZnVsbC1sb2FkZXInKS5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuJCgnLmRvbnQtc3VibWl0LW9uLWVudGVyLCAuZHNvbicpLmtleXByZXNzKGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJFTlRFUlwiKTtcbiAgICBpZiAoZS53aGljaCA9PSAxMykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlLndoaWNoID09IDEzKSBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTW9kaWZ5IGNhcnQgaXRlbSBxdWFudGl0eSBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoJy5JbnB1dEJ0blEnKS5vbignY2hhbmdlIGtleXVwJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICBPcmlnaW5hbCBBcnRpY2xlIFByaWNlXG4gICAgbGV0IHZhbHVlID0gJCh0aGlzKS5zaWJsaW5ncygnLkFydGljbGVQcmljZScpLnZhbCgpO1xuICAgIC8vIFF1YW50aXR5XG4gICAgbGV0IHF1YW50aXR5ID0gJCh0aGlzKS52YWwoKTtcbiAgICAvLyBOZXIgVmFsdWVcbiAgICBsZXQgbmV3VmFsdWUgPSAodmFsdWUgKiBxdWFudGl0eSk7XG4gICAgLy8gTmV3IFByaWNlIFRhcmdldFxuICAgIGxldCBuZXdQcmljZVRhcmdldCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuc2libGluZ3MoJy5Ub3RhbEl0ZW1QcmljZScpO1xuXG4gICAgY29uc29sZS5sb2codmFsdWUsIHF1YW50aXR5LCBuZXdWYWx1ZSk7XG4gICAgbW9kaWZ5Q2FydEl0ZW1RKCQodGhpcyksIG5ld1ByaWNlVGFyZ2V0LCBuZXdWYWx1ZSk7XG59KVxuXG5mdW5jdGlvbiBtb2RpZnlDYXJ0SXRlbVEoZSwgbmV3UHJpY2VUYXJnZXQsIG5ld1ZhbHVlKSB7XG4gICAgZS5zaWJsaW5ncygnLklucHV0QnRuUScpLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICBuZXdQcmljZVRhcmdldC5odG1sKCckICcgKyBuZXdWYWx1ZSk7XG59XG5cblxuLy8gQ2hlY2tvdXQgc2lkZWJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVx0XHRcbndpbmRvdy5jaGVja291dFNpZGViYXIgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblxuICAgIGNvbnN0IHNpZGViYXIgPSAkKCcuQ2hlY2tvdXRDYXJ0Jyk7XG4gICAgY29uc3Qgd3JhcHBlciA9ICQoJy5tYWluLXdyYXBwZXInKTtcblxuICAgIC8vIENoZWNrIGlmIGxheW91dCBuZWVkIHRvIGJlIGZpeGVkIGluIG9yZGVyIHRvIG5vdCBoYXZlIHNxdWlzaGVkIGNvbHMuXG4gICAgbGV0IGZpeExpc3RMYXlvdXQgPSBmYWxzZTtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxNjQ1ICYmICQod2luZG93KS53aWR0aCgpID4gMTIwMCkgXG4gICAgICAgIGZpeExpc3RMYXlvdXQgPSB0cnVlO1xuXG4gICAgY29uc3Qgc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTmV3IGNhcnQgc2lkZWJhclxuICAgICAgICBzaWRlYmFyLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnYWxsb3ctc2lkZWJhcicpO1xuICAgICAgICBpZihmaXhMaXN0TGF5b3V0KVxuICAgICAgICAgICAgJCgnLmFydGljbGVzLWNvbnRhaW5lciAuYXJ0aWNsZScpLnJlbW92ZUNsYXNzKCdjb2wteGwtMicpLmFkZENsYXNzKCdjb2wteGwtMycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBoaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBOZXcgY2FydCBzaWRlYmFyXG4gICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCdhbGxvdy1zaWRlYmFyJyk7XG4gICAgICAgIGlmKGZpeExpc3RMYXlvdXQpXG4gICAgICAgICAgICAkKCcuYXJ0aWNsZXMtY29udGFpbmVyIC5hcnRpY2xlJykuYWRkQ2xhc3MoJ2NvbC14bC0yJykucmVtb3ZlQ2xhc3MoJ2NvbC14bC0zJyk7XG4gICAgfVxuXG5cbiAgICBpZiAoc3RhdGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzaWRlYmFyLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdygpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSAnc2hvdycpIHtcbiAgICAgICAgc2hvdygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PSAnaGlkZScpIHtcbiAgICAgICAgaGlkZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59XG5cblxuXG53aW5kb3cub3BlbkNoZWNrb3V0RGVza3RvcCA9IGZ1bmN0aW9uKClcbntcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgICAgY2hlY2tvdXRTaWRlYmFyKCdzaG93Jyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG4vLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbi8vICAgICBpZiAoc2Nyb2xsID4gMTI1KSB7XG4vLyAgICAgICAgICQoJy5jaGVja291dC1jYXJ0JykuYWRkQ2xhc3MoJ3Njcm9sbGVkJyk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICAkKCcuY2hlY2tvdXQtY2FydCcpLnJlbW92ZUNsYXNzKCdzY3JvbGxlZCcpO1xuLy8gICAgIH1cbi8vIH0pO1xuXG5cbi8vIFNpZGViYXIgY2hlY2tvdXQgYWJzb2x1dGVcbi8vIHdpbmRvdy5jaGVja291dFNpZGViYXIgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4vLyAgICAgaWYgKGFjdGlvbiA9PSAnb3BlbicpIHtcbi8vICAgICAgICAgJCgnI1NpZGVDb250YWluZXInKS50b2dnbGUoMTAwKTtcbi8vICAgICAgICAgJCgnI01haW5PdmVybGF5JykuZmFkZUluKDEwMCk7XG4vLyAgICAgfVxuLy8gICAgIGlmIChhY3Rpb24gPT0gJ2Nsb3NlJykge1xuLy8gICAgICAgICAkKCcjU2lkZUNvbnRhaW5lcicpLnRvZ2dsZSgxMDApO1xuLy8gICAgICAgICAkKCcjTWFpbk92ZXJsYXknKS5mYWRlT3V0KDEwMCk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAkKCcjTWFpbk92ZXJsYXknKS5jbGljayhmdW5jdGlvbiAoKSB7XG4vLyAgICAgY2hlY2tvdXRTaWRlYmFyKFwiY2xvc2VcIik7XG4vLyB9KTtcblxuLy8gd2luZG93Lm9wZW5GaWx0ZXJzID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGNvbnN0IGZpbHRlcnMgPSAkKCcjU2VhcmNoRmlsdGVycycpO1xuLy8gICAgIGlmIChmaWx0ZXJzLmNzcygnZGlzcGxheScpID09ICdub25lJykge1xuLy8gICAgICAgICBmaWx0ZXJzLmNzcygnZGlzcGxheScsICdpbmhlcml0Jyk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBmaWx0ZXJzLmNzcygnZGlzcGxheScsICdub25lJyk7XG4vLyAgICAgfVxuLy8gfVxuXG5cbndpbmRvdy5vcGVuRmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gJCgnI1NlYXJjaEZpbHRlcnMnKTtcbiAgICBjb25zdCB0cmlnZ2VyID0gJCgnI1NlYXJjaEZpbHRlcnNUcmlnZ2VyJyk7XG4gICAgaWYoZmlsdGVycy5oYXNDbGFzcygnYWN0aXZlJykpXG4gICAge1xuICAgICAgICBmaWx0ZXJzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdHJpZ2dlci5zaG93KCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGZpbHRlcnMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB0cmlnZ2VyLmhpZGUoKTtcbiAgICB9XG5cbn1cblxuLy8gSGlkZSBhbGVydHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbi8vICAgICAkKCcuYWxlcnQnKS5oaWRlKDEwMCk7XG4vLyB9LCA0MDAwKTtcblxuXG4vLyBDYXJ0IFJlc3VtZW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gd2luZG93LnNob3dDYXJ0UmVzdW1lTW9iaWxlID0gZnVuY3Rpb24oKVxuLy8ge1xuLy8gICAgICQoJy5jYXJ0LXJlc3VtZS1kZXRhaWxzLW1vYmlsZScpLnRvZ2dsZUNsYXNzKCdIaWRkZW4nLCAxMDApO1xuLy8gfVxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IENBUlRcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLy8gQ2hlY2sgU3RvY2sgXG53aW5kb3cuY2hlY2tTaXplU3RvY2sgPSBmdW5jdGlvbiAocm91dGUsIGFydGljbGVJZCwgc2l6ZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHJvdXRlICsgXCIgfCBcIiArIGFydGljbGVJZCArIFwiIHwgXCIgKyBzaXplKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSAkKCcjQWRkVG9DYXJ0Rm9ybUJ0bicpO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHthcnRpY2xlSWQ6IGFydGljbGVJZCwgc2l6ZTogc2l6ZX0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0b2NrID4gMCkge1xuICAgICAgICAgICAgICAgICQoJy5BdmFpbGFibGVTdG9jaycpLmh0bWwoXCJTdG9jayBkaXNwb25pYmxlOiBcIiArIGRhdGEuc3RvY2spO1xuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdG9jayA8PSAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLkF2YWlsYWJsZVN0b2NrJykuaHRtbChcIk5vIGhheSBzdG9jayBhbCBtb21lbnRvXCIpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJy5BdmFpbGFibGVTdG9jaycpLmh0bWwoXCJQcm9kdWN0byBubyBkaXNwb25pYmxlXCIpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAvLyAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gY2hlY2tTaXplU3RvY2soKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG53aW5kb3cuc3VtQWxsSXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3VtID0gMDtcbiAgICAkKCcuVG90YWxJdGVtUHJpY2UnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBzdW0gKz0gcGFyc2VJbnQoJCh0aGlzKS5odG1sKCkpO1xuICAgIH0pO1xuICAgICQoJy5TdWJUb3RhbCcpLmh0bWwoc3VtKTtcbn1cblxuXG4vLyBTdW0gZGl2cyB0ZXh0XG53aW5kb3cuc3VtRGl2cyA9IGZ1bmN0aW9uIChvcmlnaW5zLCB0YXJnZXQpIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBvcmlnaW5zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBzdW0gKz0gcGFyc2VGbG9hdCgkKHRoaXMpLnRleHQoKSk7XG4gICAgfSk7XG4gICAgdGFyZ2V0LnRleHQoc3VtKTtcbn1cblxuXG4vLyBTZXQgY2FydCBpdGVtcyBKU09OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG53aW5kb3cuc2V0SXRlbXNEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGl0ZW1EYXRhID0gW107XG5cbiAgICAkKCcuSXRlbS1EYXRhJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgdmFyIHByaWNlID0gJCh0aGlzKS5kYXRhKCdwcmljZScpO1xuICAgICAgICB2YXIgcXVhbnRpdHkgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICAgIGl0ZW0gPSB7fVxuICAgICAgICBpdGVtWydpZCddID0gaWQ7XG4gICAgICAgIGl0ZW1bJ3ByaWNlJ10gPSBwcmljZTtcbiAgICAgICAgaXRlbVsncXVhbnRpdHknXSA9IHF1YW50aXR5O1xuICAgICAgICAvLyBVcGRhdGUgZGlzcGxheSB0b3RhbCBpdGVtIHByaWNlXG4gICAgICAgIHRvdGFsID0gcHJpY2UgKiBxdWFudGl0eTtcbiAgICAgICAgJCgnLicgKyBpZCArICctVG90YWxJdGVtUHJpY2UnKS5odG1sKHRvdGFsKTtcblxuICAgICAgICBpdGVtRGF0YS5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIC8vIFVwZGF0ZSBUb3RhbFxuICAgIGNvbnNvbGUuaW5mbyhpdGVtRGF0YSk7XG4gICAgc3VtQWxsSXRlbXMoKTtcbiAgICAkKCcjSXRlbXMtRGF0YScpLnZhbChpdGVtRGF0YSk7XG59XG5cbi8vIEFkZCBwcm9kdWN0IHRvIGNhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5hZGRUb0NhcnQgPSBmdW5jdGlvbiAocm91dGUsIGRhdGEpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCBkYXRhLm1lc3NhZ2UsICdib3R0b21DZW50ZXInLCAnJywgMjUwMCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVG90YWxzKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXR0aW5nIERhdGFcIik7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXNEYXRhKCk7XG4gICAgICAgICAgICAgICAgc3VtQWxsSXRlbXMoKTtcbiAgICAgICAgICAgICAgICBvcGVuQ2hlY2tvdXREZXNrdG9wKCk7XG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHNldEl0ZW1zRGF0YSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBzdW1BbGxJdGVtcygpO1xuICAgICAgICAgICAgICAgIC8vICAgICBvcGVuQ2hlY2tvdXREZXNrdG9wKCk7XG4gICAgICAgICAgICAgICAgLy8gfSwgMTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSAnd2FybmluZycpIHtcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdVcHMhJywgZGF0YS5tZXNzYWdlLCAnYm90dG9tQ2VudGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gYWRkdG9DYXJ0KClcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRvYXN0X3N1Y2Nlc3MoJ1VwcyEnLCAnSGEgb2N1cnJpZG8gdW4gZXJyb3I6IDxiPicgKyBkYXRhLnJlc3BvbnNlSlNPTlsnbWVzc2FnZSddICsgJzwvYj4nLCAnYm90dG9tQ2VudGVyJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuIFxuXG4vLyBSZW1vdmUgcHJvZHVjdCBmcm9tIGNhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5yZW1vdmVGcm9tQ2FydCA9IGZ1bmN0aW9uIChyb3V0ZSwgaWQsIHF1YW50aXR5LCBkaXYsIGFjdGlvbikge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogcm91dGUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBkYXRhOiB7IGl0ZW1pZDogaWQsIHF1YW50aXR5OiBxdWFudGl0eSwgYWN0aW9uOiBhY3Rpb24sIG1ldGhvZDogJ2FqYXgnIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZSA9PSAnY2FydC1yZW1vdmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRvdGFscygpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtc0RhdGEoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAkKGRpdikuaGlkZSgxMDApO1xuICAgICAgICAgICAgICAgICQoZGl2KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbHMoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXYpO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zRGF0YSgpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIHJlbW92ZUZyb21DYXJ0KClcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vIElmIGFuIGVycm9yIHBvcHMgd2hlbiBkZXN0cm95aW5nIGFuIGl0ZW0sIHJlbG9hZCBhbmQgcHJldmVudCBiYWQgbWFnaWNcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvdGFscygpIHtcbiAgICAvLyBMaXZlIFJlbG9hZGluZyBzdHVmZlxuICAgICQoXCIjU2lkZUNvbnRhaW5lckl0ZW1zRml4ZWRcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiICNTaWRlQ29udGFpbmVySXRlbXNGaXhlZFwiKTtcbiAgICAkKFwiI1NpZGVDb250YWluZXJJdGVtc0Zsb2F0aW5nXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAjU2lkZUNvbnRhaW5lckl0ZW1zRmxvYXRpbmdcIik7XG4gICAgJChcIi5Ub3RhbENhcnRJdGVtc1wiKS5sb2FkKHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCIgLlRvdGFsQ2FydEl0ZW1zXCIpO1xuICAgICQoXCIuVG90YWxDYXJ0SXRlbXNTaWRlYmFyXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuVG90YWxDYXJ0SXRlbXNTaWRlYmFyXCIpO1xuICAgICQoXCIuQ2FydFN1YlRvdGFsXCIpLmxvYWQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIiAuQ2FydFN1YlRvdGFsXCIpO1xuICAgICQoXCIuQXZhaWxhYmxlU3RvY2tcIikubG9hZCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiIC5BdmFpbGFibGVTdG9ja1wiKTtcbn1cblxuLy8gU3VibWl0IEZvcm1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKHJvdXRlLCB0YXJnZXQsIGRhdGEsIGFjdGlvbikge1xuICAgIGNvbnNvbGUubG9nKFwiUnV0YTogXCIgKyByb3V0ZSArIFwiIFRhcmdldDogXCIgKyB0YXJnZXQgKyBcIiBEYXRhOiBcIiArIGRhdGEgKyBcIkFjdGlvbjogXCIrIGFjdGlvbik7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgZGF0YSwgYWN0aW9uOiBhY3Rpb24gfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09ICdyZWxvYWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggcGFnZSwgZGVsZXRlIHBhcmFtZXR0ZXJzIGFuZCBvcGVuIGNoZWNrb3V0IHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdICsgXCI/Y2hlY2tvdXQtb25cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbiBzdWJtaXRGb3JtJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdG9hc3RfZXJyb3IoJycsIGRhdGEubWVzc2FnZSwgJ2JvdHRvbUNlbnRlcicsICcnKTtcbiAgICAgICAgICAgICAgICAkKCcuU2lkZUNvbnRhaW5lckVycm9yJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vICQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGVuIHN1Ym1pdEZvcm0oKVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gVmFsaWRhdGUgYW5kIHNldCBjb3Vwb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy52YWxpZGF0ZUFuZFNldENvdXBvbiA9IGZ1bmN0aW9uIChyb3V0ZSwgY29kZSwgY2FydGlkKSB7XG4gICAgbGV0IGNvdXBvbkRpdiA9ICQoJyNDb3Vwb25EaXYnKTtcbiAgICBsZXQgY291cG9uU2V0ID0gJCgnI1NldHRlZENvdXBvbicpO1xuICAgIGNvbnNvbGUubG9nKGNvZGUsIGNhcnRpZCk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIGRhdGE6IHsgY29kZTogY29kZSwgY2FydGlkOiBjYXJ0aWQgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21wcm9iYW5kbyBjdXDDs24uLi5cIik7XG4gICAgICAgICAgICAkKCcuQ291cG9uTG9hZGVyJykucmVtb3ZlQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoXCJDdXDDs24gYWNlcHRhZG8gIVwiKTtcbiAgICAgICAgICAgICAgICBjb3Vwb25EaXYuaGlkZSgyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY291cG9uU2V0LnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgJCgnI0NvdXBvblZhbGlkYXRpb25NZXNzYWdlJykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoJyNDb3Vwb25WYWxpZGF0aW9uTWVzc2FnZScpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuQ291cG9uTG9hZGVyJykuYWRkQ2xhc3MoJ0hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIEZhdnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5hZGRBcnRpY2xlVG9GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBmYXZpZCwgYXJ0aWNsZWlkLCBhY3Rpb24sIGRpc3BsYXlCdXR0b24pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBmYXZfaWQ6IGZhdmlkLCBhcnRpY2xlX2lkOiBhcnRpY2xlaWQgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlID09IHRydWUgJiYgZGF0YS5yZXN1bHQgPT0gJ2FkZGVkJykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Zhdi1pY29uLW5vZmF2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uLmFkZENsYXNzKCdmYXYtaWNvbi1pc2ZhdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Rfc3VjY2VzcygnT2shJywgJ1Byb2R1Y3RvIGFncmVnYWRvIGEgZmF2b3JpdG9zJywgJ2JvdHRvbUNlbnRlcicsICcnLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBY3R1YWxpemFkbyAtIFNpbiBBY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZSA9PSB0cnVlICYmIGRhdGEucmVzdWx0ID09ICdyZW1vdmVkJykge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b24uYWRkQ2xhc3MoJ2Zhdi1pY29uLW5vZmF2Jyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUJ1dHRvbi5yZW1vdmVDbGFzcygnZmF2LWljb24taXNmYXYnKTtcbiAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gZWxpbWluYWRvIGRlIGZhdm9yaXRvcycsICdib3R0b21DZW50ZXInLCAnJywgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRGYXZzVG90YWxJY29uKGRhdGEuZmF2c0NvdW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEZhdnNUb3RhbEljb24oZmF2cykge1xuICAgIGlmIChmYXZzID4gMCkge1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5yZW1vdmVDbGFzcygnZmFyJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLmFkZENsYXNzKCdmYScpO1xuICAgIH0gZWxzZSBpZiAoZmF2cyA9PSAwKSB7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYScpO1xuICAgICAgICAkKCcuRmF2TWFpbkljb24nKS5hZGRDbGFzcygnZmFyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykucmVtb3ZlQ2xhc3MoJ2ZhJyk7XG4gICAgICAgICQoJy5GYXZNYWluSWNvbicpLnJlbW92ZUNsYXNzKCdmYXInKTtcbiAgICAgICAgJCgnLkZhdk1haW5JY29uJykuYWRkQ2xhc3MoJ2ZhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZW4gc2V0RmF2c1RvdGFsSWNvbigpXCIpO1xuICAgIH1cbn1cblxud2luZG93LnJlbW92ZUFydGljbGVGcm9tRmF2cyA9IGZ1bmN0aW9uIChyb3V0ZSwgZmF2aWQsIGFjdGlvbikge1xuICAgIHZhciBkb2FjdGlvbiA9IGFjdGlvbjtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBmYXZfaWQ6IGZhdmlkIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRvYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gJ3JlbG9hZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdF9zdWNjZXNzKCdPayEnLCAnUHJvZHVjdG8gZWxpbWluYWRvIGRlIGZhdm9yaXRvcycsICdib3R0b21DZW50ZXInLCBhY3Rpb24sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gaGF5IGFjY2nDs24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEubWVzc2FnZVsnZXJyb3JJbmZvJ10pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vJCgnI0Vycm9yJykuaHRtbChkYXRhLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbndpbmRvdy5yZW1vdmVBbGxBcnRpY2xlc0Zyb21GYXZzID0gZnVuY3Rpb24gKHJvdXRlLCBjdXN0b21lcmlkLCBhY3Rpb24pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHJvdXRlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgZGF0YTogeyBjdXN0b21lcl9pZDogY3VzdG9tZXJpZCB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyQoJyNFcnJvcicpLmh0bWwoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGhheSBhY2Npw7NuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNFcnJvcicpLmh0bWwoZGF0YS5tZXNzYWdlWydlcnJvckluZm8nXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8kKCcjRXJyb3InKS5odG1sKGRhdGEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgTE9HSU4gQU5EIFJFR0lTVEVSXG58LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbiQoJyNSZXNlbGxlckJveCcpLmhpZGUoKTtcblxud2luZG93Lm9wZW5SZXNlbGxlclJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uKClcbntcbiAgICAkKCcjSXNSZXNlbGxlckNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICQoJy5JZlJlc2VsbGVyRW5hYmxlJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgJCgnI1Jlc2VsbGVyQm94Jykuc2hvdygxMDApO1xuICAgICQoJyNSZXNlbGxlckNUQScpLmhpZGUoMCk7XG4gICAgJCgnLk5vcm1hQ2xpZW50VGl0bGUnKS5oaWRlKDApO1xuICAgICQoJy5SZXNlbGxlclRpdGxlJykuc2hvdygwKTtcbn1cblxuXG53aW5kb3cuY2xvc2VSZXNlbGxlclJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uKClcbntcbiAgICAkKCcjSXNSZXNlbGxlckNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAkKCcuSWZSZXNlbGxlckVuYWJsZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgJCgnI1Jlc2VsbGVyQm94JykuaGlkZSgwKTtcbiAgICAkKCcjUmVzZWxsZXJDVEEnKS5zaG93KDEwMCk7XG4gICAgJCgnLk5vcm1hQ2xpZW50VGl0bGUnKS5zaG93KDApO1xuICAgICQoJy5SZXNlbGxlclRpdGxlJykuaGlkZSgwKTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcuR2VvUHJvdlNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgcHJvdl9pZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGdldEdlb0xvY3MocHJvdl9pZCk7XG4gICAgfSk7XG59KTtcblxuXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IE1JWCBGVU5DVElPTlNcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxud2luZG93LmNsb3NlRWxlbWVudCA9IGZ1bmN0aW9uKHNlbGVjdG9yKVxue1xuICAgICQoc2VsZWN0b3IpLmhpZGUoMTAwKTtcbn1cblxud2luZG93LmdldFBhcmFtID0gZnVuY3Rpb24ocGFyYW1ldGVyTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBudWxsLFxuICAgICAgICB0bXAgPSBbXTtcbiAgICBsb2NhdGlvbi5zZWFyY2hcbiAgICAgICAgLnN1YnN0cigxKVxuICAgICAgICAuc3BsaXQoXCImXCIpXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHRtcCA9IGl0ZW0uc3BsaXQoXCI9XCIpO1xuICAgICAgICBpZiAodG1wWzBdID09PSBwYXJhbWV0ZXJOYW1lKSByZXN1bHQgPSBkZWNvZGVVUklDb21wb25lbnQodG1wWzFdKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG53aW5kb3cuZ2V0UGFyYW1zID0gZnVuY3Rpb24odXJsKSB7XG4gICAgdmFyIHBhcmFtcyA9IHt9O1xuXHR2YXIgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRwYXJzZXIuaHJlZiA9IHVybDtcblx0dmFyIHF1ZXJ5ID0gcGFyc2VyLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG5cdHZhciB2YXJzID0gcXVlcnkuc3BsaXQoJyYnKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHBhaXIgPSB2YXJzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0cGFyYW1zW3BhaXJbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuXHR9XG5cdHJldHVybiBwYXJhbXM7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvc2NyaXB0cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=