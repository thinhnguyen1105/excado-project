module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 251);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(6);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(21);

// EXTERNAL MODULE: ./config/index.ts + 2 modules
var config = __webpack_require__(8);

// CONCATENATED MODULE: ./core/firebase.ts



var firebase_initializeFirebaseApp = function initializeFirebaseApp() {
  if (!app_default.a.apps.length) {
    app_default.a.initializeApp(config["a" /* config */].firebase);
  }

  app_default.a.auth().setPersistence(app_default.a.auth.Auth.Persistence.LOCAL) // tslint:disable-next-line:no-console
  .catch(function (error) {
    return console.log(error);
  });
};
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// CONCATENATED MODULE: ./core/setCookie.ts


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var setCookie =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res) {
    var token;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.body.token;
            res.cookie('token', "Bearer ".concat(token), {
              domain: config["a" /* config */].cookies.domain
            }).redirect('/');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setCookie(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./core/formatter.ts
var formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'VND',
  currencyDisplay: 'code',
  minimumFractionDigits: 0
});
var formatMoney = formatter.format;

// CONCATENATED MODULE: ./core/submitLoginForm.ts
var submitLoginForm = function submitLoginForm(idToken) {
  var form = document.getElementById('form');
  var input = document.createElement('input');
  input.type = 'text';
  input.name = 'token';
  input.value = idToken;
  form.appendChild(input);
  form.submit();
};
// CONCATENATED MODULE: ./core/validateField.ts
var validateField = function validateField(params) {
  try {
    params.validateSchema.validateSyncAt(params.fieldName, params.context.values);
    params.context.setFieldError(params.fieldName, '');
  } catch (error) {
    params.context.setFieldError(params.fieldName, error.message);
  }
};
// CONCATENATED MODULE: ./core/clearCookie.ts


function clearCookie_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function clearCookie_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { clearCookie_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { clearCookie_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var clearCookie =
/*#__PURE__*/
function () {
  var _ref = clearCookie_asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(_req, res) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.clearCookie('token', {
              domain: config["a" /* config */].cookies.domain
            }).redirect('/');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function clearCookie(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./core/metadata.ts
var metadata = {};
// CONCATENATED MODULE: ./core/getBase64Image.ts
var getBase64Image = function getBase64Image(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};
// CONCATENATED MODULE: ./core/getImageUrl.ts
var getImageUrl = function getImageUrl(imageUrl, imageType) {
  return imageUrl ? imageUrl.indexOf('.jpg') === -1 && imageUrl.indexOf('.png') === -1 ? "".concat(imageUrl, "-").concat(imageType, ".jpg") : imageUrl : '';
};
// CONCATENATED MODULE: ./core/constants.ts
// PENDING / PUBLIC / STOPPED / REJECTED / DELETED
var newsStatus = {
  PENDING: 'PENDING',
  PUBLIC: 'PUBLIC',
  STOPPED: 'STOPPED',
  REJECTED: 'REJECTED',
  DELETED: 'DELETED'
};
var newsTypeConst = {
  SELL: 'SELL',
  LEASE: 'LEASE',
  BUY: 'BUY',
  RENT: 'RENT'
};
var notificationState = {
  READ: 'READ',
  UNREAD: 'UNREAD'
};
var reportResults = {
  SKIP: 'SKIP',
  DELETE: 'DELETE'
};
var priceRanges = [{
  min: 100000000,
  max: 500000000
}, {
  min: 500000000,
  max: 1000000000
}, {
  min: 1000000000,
  max: 5000000000
}, {
  min: 5000000000,
  max: 10000000000
}, {
  min: 10000000000,
  max: 50000000000
}];
var newsStates = [{
  value: 'NEW',
  label: 'Mới'
}, {
  value: 'USED',
  label: 'Nhập bãi'
}, {
  value: 'LIQUIDATE',
  label: 'Thanh lý'
}];
var newsTypes = [{
  value: 'SELL',
  label: 'Cần bán'
}, {
  value: 'LEASE',
  label: 'Cần cho thuê'
}, {
  value: 'BUY',
  label: 'Cần mua'
}, {
  value: 'RENT',
  label: 'Cần thuê'
}];
var storePackages = [{
  label: '1 tháng',
  value: 86400 * 30 * 1000,
  price: 100000,
  imageUrl: ''
}, {
  label: '3 tháng',
  value: 3 * 86400 * 30 * 1000,
  price: 300000,
  imageUrl: '/static/images/tag30k.png'
}, {
  label: '6 tháng',
  value: 6 * 86400 * 30 * 1000,
  price: 600000,
  imageUrl: '/static/images/tag50k.png'
}, {
  label: '12 tháng',
  value: 12 * 86400 * 30 * 1000,
  price: 1200000,
  imageUrl: '/static/images/tag990k.png'
}];
var paymentMethods = [{
  label: 'Thẻ ngân hàng nội địa',
  value: 'domesticCard',
  imageUrl: ['/static/images/credit-card.png']
}, {
  label: 'Thẻ quốc tế',
  value: 'globalCard',
  imageUrl: ['/static/images/Visa.png', '/static/images/Mastercard.png']
}, {
  label: 'Ví momo',
  value: 'momoWallet',
  imageUrl: ['/static/images/momo.png']
}];
var reportReasons = [{
  label: 'Báo tin đã bán',
  value: 'SOLD'
}, {
  label: 'Báo tin vi phạm',
  value: 'VIOLATE'
}, {
  label: 'Báo tin đăng sai',
  value: 'WRONG_INFO'
}];
// EXTERNAL MODULE: ./services/index.ts + 1 modules
var services = __webpack_require__(5);

// CONCATENATED MODULE: ./core/checkSubdomain.ts


function checkSubdomain_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function checkSubdomain_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { checkSubdomain_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { checkSubdomain_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var checkSubdomain =
/*#__PURE__*/
function () {
  var _ref = checkSubdomain_asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res, next) {
    var shopDomain, authUserId, serviceProxies, shopResult, allowPaths;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.subdomains && req.subdomains.length > 0)) {
              _context.next = 15;
              break;
            }

            shopDomain = '';

            if (config["a" /* config */].url.main === "https://timmay.vn" && req.subdomains[0] !== "www") {
              shopDomain = req.subdomains[0];
            } else if (config["a" /* config */].url.main === "https://test.timmay.vn" && req.subdomains[1] !== "www") {
              shopDomain = req.subdomains[1];
            } else if (config["a" /* config */].url.main.indexOf("techkids.io") > -1 && req.subdomains[1] !== "www") {
              shopDomain = req.subdomains[1];
            } else if (req.subdomains[0] !== "www") {
              shopDomain = req.subdomains[0];
            }

            if (!shopDomain) {
              _context.next = 12;
              break;
            }

            authUserId = req.authUser ? req.authUser.id : '';
            serviceProxies = Object(services["a" /* getServiceProxy */])();
            _context.next = 8;
            return serviceProxies.findShopByDomain(shopDomain, authUserId);

          case 8:
            shopResult = _context.sent;

            if (shopResult) {
              req.shopInfo = shopResult;
              allowPaths = ['/thong-tin-cua-hang', '/bai-dang-cua-hang'];

              if (allowPaths.indexOf(req.url) > -1 || req.url.indexOf('/bai-dang-cua-hang') > -1) {
                next();
              } else {
                res.redirect('/thong-tin-cua-hang');
              }
            } else {
              // custom 404 page
              res.redirect("".concat(config["a" /* config */].url.main, "/not-found"));
            }

            _context.next = 13;
            break;

          case 12:
            next();

          case 13:
            _context.next = 16;
            break;

          case 15:
            next();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkSubdomain(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./core/checkFollowStatus.ts
var checkFollowStatus = function checkFollowStatus(profileState, item) {
  return profileState && profileState.authUser && item && item.followBy.indexOf(profileState.authUser.id) !== -1 ? true : false;
};
// CONCATENATED MODULE: ./core/getShopUrl.ts

var getShopUrl_getShopUrl = function getShopUrl(shopDomain) {
  return config["a" /* config */].url.shop.replace('shopDomain', shopDomain);
};
// CONCATENATED MODULE: ./core/generateSearchUrl.ts
var generateSearchUrl = function generateSearchUrl(filters) {
  var filterValues = {};

  if (filters.keyword) {
    filterValues.keyword = filters.keyword;
  }

  if (Number(filters.minPrice)) {
    filterValues.minPrice = Number(filters.minPrice);
  }

  if (Number(filters.maxPrice)) {
    filterValues.maxPrice = Number(filters.maxPrice);
  }

  if (Number(filters.minWeight)) {
    filterValues.minWeight = Number(filters.minWeight);
  }

  if (Number(filters.maxWeight)) {
    filterValues.maxWeight = Number(filters.maxWeight);
  }

  if (filters.state) {
    filterValues.state = filters.state;
  }

  if (filters.newsType) {
    filterValues.newsType = filters.newsType;
  }

  if (filters.category) {
    filterValues.category = filters.category;
  }

  if (filters.brand) {
    filterValues.brand = filters.brand;
  }

  if (filters.model) {
    filterValues.model = filters.model;
  }

  if (filters.location) {
    filterValues.location = filters.location;
  }

  return Object.keys(filterValues).sort().map(function (item) {
    return "".concat(item, "=").concat(filterValues[item]);
  }).join('&');
};
// CONCATENATED MODULE: ./core/generateFilters.ts
var generateFilters = function generateFilters(query, metadataState) {
  var availableFilters = {};

  if (query.keyword) {
    availableFilters.keyword = query.keyword;
  }

  if (query.minPrice) {
    availableFilters.minPrice = query.minPrice;
  }

  if (query.maxPrice) {
    availableFilters.maxPrice = query.maxPrice;
  }

  if (query.minWeight) {
    availableFilters.weightRange = metadataState.weightRanges.filter(function (item) {
      return item.min === Number(query.minWeight);
    })[0]._id;
  }

  if (query.state) {
    availableFilters.state = query.state;
  }

  if (query.newsType) {
    availableFilters.newsType = query.newsType;
  }

  if (query.category) {
    availableFilters.category = metadataState.categories.filter(function (item) {
      return item.slug === query.category;
    })[0]._id;
  }

  if (query.brand) {
    availableFilters.brand = metadataState.brands.filter(function (item) {
      return item.slug === query.brand;
    })[0]._id;
  }

  if (query.location) {
    availableFilters.location = metadataState.provinces.filter(function (item) {
      return item.slug === query.location;
    })[0]._id;
  }

  return availableFilters;
};
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(65);

// CONCATENATED MODULE: ./core/generateRecentViewedKey.ts


var recentViewedCookie = 'recent_viewed';
var generateRecentViewedKey_generateRecentViewedKey = function generateRecentViewedKey(req, res, next) {
  if (!req.cookies[recentViewedCookie]) {
    var recentViewedKey = Object(external_uuid_["v4"])();
    res.cookie(recentViewedCookie, recentViewedKey, {
      domain: config["a" /* config */].cookies.domain
    });
  }

  next();
};
// EXTERNAL MODULE: ./core/checkIsMobile.ts
var checkIsMobile = __webpack_require__(67);

// CONCATENATED MODULE: ./core/convertVietnamese.ts
var convertVietnamese = function convertVietnamese(str) {
  var result = str.toLowerCase();
  result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gi, 'a');
  result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, 'e');
  result = result.replace(/ì|í|ị|ỉ|ĩ/gi, 'i');
  result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gi, 'o');
  result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/gi, 'u');
  result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/gi, 'y');
  result = result.replace(/đ/gi, 'd');
  result = result.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/gi, ' ');
  result = result.replace(/ + /gi, ' ');
  result = result.trim();
  return result;
};
// CONCATENATED MODULE: ./modules/admin/menuConfigs.ts
var appMenuConfigs = {
  name: 'appManagement',
  icon: 'qrcode',
  items: [{
    name: 'reportsManagement',
    path: '/quan-ly/bao-cao-vi-pham',
    permission: '',
    children: []
  }, {
    name: 'brandsManagement',
    path: '/quan-ly/danh-sach-hang',
    permission: '',
    children: []
  }, {
    name: 'categoriesManagement',
    path: '/quan-ly/chung-loai-may',
    permission: '',
    children: []
  }, {
    name: 'modelsManagement',
    path: '/quan-ly/danh-sach-models',
    permission: '',
    children: []
  }, {
    name: 'weightRangesManagement',
    path: '/quan-ly/khoang-trong-luong',
    permission: '',
    children: []
  }, {
    name: 'rentalPeriodsManagement',
    path: '/quan-ly/thoi-gian-thue',
    permission: '',
    children: []
  }, {
    name: 'featureBrandsManagement',
    path: '/quan-ly/hang-hop-tac',
    permission: '',
    children: []
  }, {
    name: 'adsenseManagement',
    path: '/quan-ly/quang-cao',
    permission: '',
    children: []
  }, {
    name: 'uploadExcelFile',
    path: '/quan-ly/dang-tin',
    permission: '',
    children: []
  }]
};
var authMenuConfigs = {
  name: 'authManagement',
  icon: 'user',
  items: [{
    name: 'usersManagement',
    path: '/quan-ly/nguoi-dung',
    permission: '',
    children: []
  }]
};
var statisticsMenuConfigs = {
  name: 'statisticsManagement',
  icon: 'rise',
  items: [{
    name: 'newsStatistics',
    path: '/quan-ly/thong-ke-tin-bai',
    permission: '',
    children: []
  }]
};
// CONCATENATED MODULE: ./core/getMenuConfigs.ts

var getMenuConfigs_getMenuConfigs = function getMenuConfigs() {
  return [authMenuConfigs, appMenuConfigs, statisticsMenuConfigs];
};
// CONCATENATED MODULE: ./core/checkPermission.ts
var checkPermission = function checkPermission(authUser, requiredPermission) {
  if (!requiredPermission) {
    return true;
  }

  return requiredPermission && authUser && authUser.permissions && authUser.permissions.indexOf(requiredPermission) > -1;
};
// CONCATENATED MODULE: ./core/index.ts
/* concated harmony reexport initializeFirebaseApp */__webpack_require__.d(__webpack_exports__, "j", function() { return firebase_initializeFirebaseApp; });
/* unused concated harmony import setCookie */
/* concated harmony reexport formatMoney */__webpack_require__.d(__webpack_exports__, "c", function() { return formatMoney; });
/* concated harmony reexport submitLoginForm */__webpack_require__.d(__webpack_exports__, "t", function() { return submitLoginForm; });
/* concated harmony reexport validateField */__webpack_require__.d(__webpack_exports__, "u", function() { return validateField; });
/* unused concated harmony import clearCookie */
/* unused concated harmony import metadata */
/* concated harmony reexport getBase64Image */__webpack_require__.d(__webpack_exports__, "f", function() { return getBase64Image; });
/* concated harmony reexport getImageUrl */__webpack_require__.d(__webpack_exports__, "g", function() { return getImageUrl; });
/* unused concated harmony import newsStatus */
/* concated harmony reexport newsTypeConst */__webpack_require__.d(__webpack_exports__, "l", function() { return newsTypeConst; });
/* concated harmony reexport notificationState */__webpack_require__.d(__webpack_exports__, "n", function() { return notificationState; });
/* concated harmony reexport reportResults */__webpack_require__.d(__webpack_exports__, "r", function() { return reportResults; });
/* concated harmony reexport priceRanges */__webpack_require__.d(__webpack_exports__, "p", function() { return priceRanges; });
/* concated harmony reexport newsStates */__webpack_require__.d(__webpack_exports__, "k", function() { return newsStates; });
/* concated harmony reexport newsTypes */__webpack_require__.d(__webpack_exports__, "m", function() { return newsTypes; });
/* concated harmony reexport storePackages */__webpack_require__.d(__webpack_exports__, "s", function() { return storePackages; });
/* concated harmony reexport paymentMethods */__webpack_require__.d(__webpack_exports__, "o", function() { return paymentMethods; });
/* concated harmony reexport reportReasons */__webpack_require__.d(__webpack_exports__, "q", function() { return reportReasons; });
/* unused concated harmony import checkSubdomain */
/* unused concated harmony import checkFollowStatus */
/* concated harmony reexport getShopUrl */__webpack_require__.d(__webpack_exports__, "i", function() { return getShopUrl_getShopUrl; });
/* concated harmony reexport generateSearchUrl */__webpack_require__.d(__webpack_exports__, "e", function() { return generateSearchUrl; });
/* concated harmony reexport generateFilters */__webpack_require__.d(__webpack_exports__, "d", function() { return generateFilters; });
/* unused concated harmony import generateRecentViewedKey */
/* unused concated harmony import isMobile */
/* concated harmony reexport convertVietnamese */__webpack_require__.d(__webpack_exports__, "b", function() { return convertVietnamese; });
/* concated harmony reexport getMenuConfigs */__webpack_require__.d(__webpack_exports__, "h", function() { return getMenuConfigs_getMenuConfigs; });
/* concated harmony reexport checkPermission */__webpack_require__.d(__webpack_exports__, "a", function() { return checkPermission; });





















/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(21);

// CONCATENATED MODULE: ./services/service-proxies.ts
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.5.0 (NJsonSchema v9.13.2.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var ServiceProxy =
/*#__PURE__*/
function () {
  function ServiceProxy(baseUrl, http) {
    _classCallCheck(this, ServiceProxy);

    _defineProperty(this, "http", void 0);

    _defineProperty(this, "baseUrl", void 0);

    _defineProperty(this, "jsonParseReviver", undefined);

    this.http = http ? http : window;
    this.baseUrl = baseUrl ? baseUrl : "http://localhost:3000/api";
  }
  /**
   * Register user
   * @param body (optional) 
   * @return successful operation
   */


  _createClass(ServiceProxy, [{
    key: "registerUser",
    value: function registerUser(body) {
      var _this = this;

      var url_ = this.baseUrl + "/auth";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this.processRegisterUser(_response);
      });
    }
  }, {
    key: "processRegisterUser",
    value: function processRegisterUser(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find permissions list of all modules
     * @return successful operation
     */

  }, {
    key: "findPermissions",
    value: function findPermissions() {
      var _this2 = this;

      var url_ = this.baseUrl + "/permissions";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this2.processFindPermissions(_response);
      });
    }
  }, {
    key: "processFindPermissions",
    value: function processFindPermissions(response) {
      var _this3 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this3.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Check role name exist
     * @param roleName roleName
     * @return successful operation
     */

  }, {
    key: "checkRoleNameExist",
    value: function checkRoleNameExist(roleName) {
      var _this4 = this;

      var url_ = this.baseUrl + "/roles/customs/check-name-exist/{roleName}";
      if (roleName === undefined || roleName === null) throw new Error("The parameter 'roleName' must be defined.");
      url_ = url_.replace("{roleName}", encodeURIComponent("" + roleName));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this4.processCheckRoleNameExist(_response);
      });
    }
  }, {
    key: "processCheckRoleNameExist",
    value: function processCheckRoleNameExist(response) {
      var _this5 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this5.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find all roles
     * @return successful operation
     */

  }, {
    key: "getAllRoles",
    value: function getAllRoles() {
      var _this6 = this;

      var url_ = this.baseUrl + "/roles/customs/get-all";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this6.processGetAllRoles(_response);
      });
    }
  }, {
    key: "processGetAllRoles",
    value: function processGetAllRoles(response) {
      var _this7 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this7.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find role by id
     * @param roleId roleId
     * @return successful operation
     */

  }, {
    key: "findRoleById",
    value: function findRoleById(roleId) {
      var _this8 = this;

      var url_ = this.baseUrl + "/roles/{roleId}";
      if (roleId === undefined || roleId === null) throw new Error("The parameter 'roleId' must be defined.");
      url_ = url_.replace("{roleId}", encodeURIComponent("" + roleId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this8.processFindRoleById(_response);
      });
    }
  }, {
    key: "processFindRoleById",
    value: function processFindRoleById(response) {
      var _this9 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this9.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update role
     * @param roleId roleId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateRole",
    value: function updateRole(roleId, body) {
      var _this10 = this;

      var url_ = this.baseUrl + "/roles/{roleId}";
      if (roleId === undefined || roleId === null) throw new Error("The parameter 'roleId' must be defined.");
      url_ = url_.replace("{roleId}", encodeURIComponent("" + roleId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this10.processUpdateRole(_response);
      });
    }
  }, {
    key: "processUpdateRole",
    value: function processUpdateRole(response) {
      var _this11 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this11.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find roles
     * @param search (optional) search
     * @param permissions (optional) filter by permissions
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findRoles",
    value: function findRoles(search, permissions, first, sortBy, before, after) {
      var _this12 = this;

      var url_ = this.baseUrl + "/roles?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (permissions === null) throw new Error("The parameter 'permissions' cannot be null.");else if (permissions !== undefined) permissions && permissions.forEach(function (item) {
        url_ += "permissions=" + encodeURIComponent("" + item) + "&";
      });
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this12.processFindRoles(_response);
      });
    }
  }, {
    key: "processFindRoles",
    value: function processFindRoles(response) {
      var _this13 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this13.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create role
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createRole",
    value: function createRole(body) {
      var _this14 = this;

      var url_ = this.baseUrl + "/roles";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this14.processCreateRole(_response);
      });
    }
  }, {
    key: "processCreateRole",
    value: function processCreateRole(response) {
      var _this15 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this15.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find profile
     * @return successful operation
     */

  }, {
    key: "findProfile",
    value: function findProfile() {
      var _this16 = this;

      var url_ = this.baseUrl + "/profiles";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this16.processFindProfile(_response);
      });
    }
  }, {
    key: "processFindProfile",
    value: function processFindProfile(response) {
      var _this17 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this17.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find use profile for guess view
     * @param userId userId
     * @return successful operation
     */

  }, {
    key: "findPublicProfile",
    value: function findPublicProfile(userId) {
      var _this18 = this;

      var url_ = this.baseUrl + "/profiles/{userId}";
      if (userId === undefined || userId === null) throw new Error("The parameter 'userId' must be defined.");
      url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this18.processFindPublicProfile(_response);
      });
    }
  }, {
    key: "processFindPublicProfile",
    value: function processFindPublicProfile(response) {
      var _this19 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this19.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update profile
     * @param userId userId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateProfile",
    value: function updateProfile(userId, body) {
      var _this20 = this;

      var url_ = this.baseUrl + "/profiles/{userId}";
      if (userId === undefined || userId === null) throw new Error("The parameter 'userId' must be defined.");
      url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this20.processUpdateProfile(_response);
      });
    }
  }, {
    key: "processUpdateProfile",
    value: function processUpdateProfile(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find users
     * @param search (optional) search
     * @param roles (optional) filter by roles
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findUsers",
    value: function findUsers(search, roles, first, sortBy, before, after) {
      var _this21 = this;

      var url_ = this.baseUrl + "/users?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (roles === null) throw new Error("The parameter 'roles' cannot be null.");else if (roles !== undefined) roles && roles.forEach(function (item) {
        url_ += "roles=" + encodeURIComponent("" + item) + "&";
      });
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this21.processFindUsers(_response);
      });
    }
  }, {
    key: "processFindUsers",
    value: function processFindUsers(response) {
      var _this22 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this22.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create user
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createUser",
    value: function createUser(body) {
      var _this23 = this;

      var url_ = this.baseUrl + "/users";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this23.processCreateUser(_response);
      });
    }
  }, {
    key: "processCreateUser",
    value: function processCreateUser(response) {
      var _this24 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Check phone number exist
     * @param phoneNo phoneNo
     * @return successful operation
     */

  }, {
    key: "checkPhoneNoExist",
    value: function checkPhoneNoExist(phoneNo) {
      var _this25 = this;

      var url_ = this.baseUrl + "/users/customs/check-phone-number-exist/{phoneNo}";
      if (phoneNo === undefined || phoneNo === null) throw new Error("The parameter 'phoneNo' must be defined.");
      url_ = url_.replace("{phoneNo}", encodeURIComponent("" + phoneNo));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this25.processCheckPhoneNoExist(_response);
      });
    }
  }, {
    key: "processCheckPhoneNoExist",
    value: function processCheckPhoneNoExist(response) {
      var _this26 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Check email exist
     * @param email email
     * @return successful operation
     */

  }, {
    key: "checkEmailExist",
    value: function checkEmailExist(email) {
      var _this27 = this;

      var url_ = this.baseUrl + "/users/customs/check-email-exist/{email}";
      if (email === undefined || email === null) throw new Error("The parameter 'email' must be defined.");
      url_ = url_.replace("{email}", encodeURIComponent("" + email));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this27.processCheckEmailExist(_response);
      });
    }
  }, {
    key: "processCheckEmailExist",
    value: function processCheckEmailExist(response) {
      var _this28 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this28.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find user by id
     * @param userId userId
     * @return successful operation
     */

  }, {
    key: "findUserById",
    value: function findUserById(userId) {
      var _this29 = this;

      var url_ = this.baseUrl + "/users/{userId}";
      if (userId === undefined || userId === null) throw new Error("The parameter 'userId' must be defined.");
      url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this29.processFindUserById(_response);
      });
    }
  }, {
    key: "processFindUserById",
    value: function processFindUserById(response) {
      var _this30 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this30.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update user
     * @param userId userId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateUser",
    value: function updateUser(userId, body) {
      var _this31 = this;

      var url_ = this.baseUrl + "/users/{userId}";
      if (userId === undefined || userId === null) throw new Error("The parameter 'userId' must be defined.");
      url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this31.processUpdateUser(_response);
      });
    }
  }, {
    key: "processUpdateUser",
    value: function processUpdateUser(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * update adsense
     * @param adsenseId adsenseId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateAdsense",
    value: function updateAdsense(adsenseId, body) {
      var _this32 = this;

      var url_ = this.baseUrl + "/adsense/{adsenseId}";
      if (adsenseId === undefined || adsenseId === null) throw new Error("The parameter 'adsenseId' must be defined.");
      url_ = url_.replace("{adsenseId}", encodeURIComponent("" + adsenseId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this32.processUpdateAdsense(_response);
      });
    }
  }, {
    key: "processUpdateAdsense",
    value: function processUpdateAdsense(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create adsense
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createAdsense",
    value: function createAdsense(body) {
      var _this33 = this;

      var url_ = this.baseUrl + "/adsense";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this33.processCreateAdsense(_response);
      });
    }
  }, {
    key: "processCreateAdsense",
    value: function processCreateAdsense(response) {
      var _this34 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this34.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this34.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get adsense
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "getAdsense",
    value: function getAdsense(first, sortBy, before, after) {
      var _this35 = this;

      var url_ = this.baseUrl + "/adsense?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this35.processGetAdsense(_response);
      });
    }
  }, {
    key: "processGetAdsense",
    value: function processGetAdsense(response) {
      var _this36 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this36.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * update feature brand
     * @param featureBrandId featureBrandId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateFeatureBrand",
    value: function updateFeatureBrand(featureBrandId, body) {
      var _this37 = this;

      var url_ = this.baseUrl + "/feature-brands/{featureBrandId}";
      if (featureBrandId === undefined || featureBrandId === null) throw new Error("The parameter 'featureBrandId' must be defined.");
      url_ = url_.replace("{featureBrandId}", encodeURIComponent("" + featureBrandId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this37.processUpdateFeatureBrand(_response);
      });
    }
  }, {
    key: "processUpdateFeatureBrand",
    value: function processUpdateFeatureBrand(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get feature brands
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "getFeatureBrands",
    value: function getFeatureBrands(first, sortBy, before, after) {
      var _this38 = this;

      var url_ = this.baseUrl + "/feature-brands?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this38.processGetFeatureBrands(_response);
      });
    }
  }, {
    key: "processGetFeatureBrands",
    value: function processGetFeatureBrands(response) {
      var _this39 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this39.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create feature brand for ads
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createFeatureBrand",
    value: function createFeatureBrand(body) {
      var _this40 = this;

      var url_ = this.baseUrl + "/feature-brands";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this40.processCreateFeatureBrand(_response);
      });
    }
  }, {
    key: "processCreateFeatureBrand",
    value: function processCreateFeatureBrand(response) {
      var _this41 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this41.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this41.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update rental period
     * @param rentalPeriodId rental period id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateRentalPeriod",
    value: function updateRentalPeriod(rentalPeriodId, body) {
      var _this42 = this;

      var url_ = this.baseUrl + "/rental-periods/{rentalPeriodId}";
      if (rentalPeriodId === undefined || rentalPeriodId === null) throw new Error("The parameter 'rentalPeriodId' must be defined.");
      url_ = url_.replace("{rentalPeriodId}", encodeURIComponent("" + rentalPeriodId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this42.processUpdateRentalPeriod(_response);
      });
    }
  }, {
    key: "processUpdateRentalPeriod",
    value: function processUpdateRentalPeriod(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create rental period item
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createRentalPeriod",
    value: function createRentalPeriod(body) {
      var _this43 = this;

      var url_ = this.baseUrl + "/rental-periods";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this43.processCreateRentalPeriod(_response);
      });
    }
  }, {
    key: "processCreateRentalPeriod",
    value: function processCreateRentalPeriod(response) {
      var _this44 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this44.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this44.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get rental periods
     * @return successful operation
     */

  }, {
    key: "getAllRentalPeriods",
    value: function getAllRentalPeriods() {
      var _this45 = this;

      var url_ = this.baseUrl + "/rental-periods/customs/get-all";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this45.processGetAllRentalPeriods(_response);
      });
    }
  }, {
    key: "processGetAllRentalPeriods",
    value: function processGetAllRentalPeriods(response) {
      var _this46 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this46.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update weight range
     * @param weightRangeId weight range Id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateWeightRange",
    value: function updateWeightRange(weightRangeId, body) {
      var _this47 = this;

      var url_ = this.baseUrl + "/weight-ranges/{weightRangeId}";
      if (weightRangeId === undefined || weightRangeId === null) throw new Error("The parameter 'weightRangeId' must be defined.");
      url_ = url_.replace("{weightRangeId}", encodeURIComponent("" + weightRangeId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this47.processUpdateWeightRange(_response);
      });
    }
  }, {
    key: "processUpdateWeightRange",
    value: function processUpdateWeightRange(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create weight range item
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createWeightRange",
    value: function createWeightRange(body) {
      var _this48 = this;

      var url_ = this.baseUrl + "/weight-ranges";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this48.processCreateWeightRange(_response);
      });
    }
  }, {
    key: "processCreateWeightRange",
    value: function processCreateWeightRange(response) {
      var _this49 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this49.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this49.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get weight ranges
     * @return successful operation
     */

  }, {
    key: "getAllWeightRanges",
    value: function getAllWeightRanges() {
      var _this50 = this;

      var url_ = this.baseUrl + "/weight-ranges/customs/get-all";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this50.processGetAllWeightRanges(_response);
      });
    }
  }, {
    key: "processGetAllWeightRanges",
    value: function processGetAllWeightRanges(response) {
      var _this51 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this51.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get common search keywords
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "getCommonKeywords",
    value: function getCommonKeywords(first, sortBy, before, after) {
      var _this52 = this;

      var url_ = this.baseUrl + "/common-keywords?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this52.processGetCommonKeywords(_response);
      });
    }
  }, {
    key: "processGetCommonKeywords",
    value: function processGetCommonKeywords(response) {
      var _this53 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this53.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create recent viewed item
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createRecentViewed",
    value: function createRecentViewed(body) {
      var _this54 = this;

      var url_ = this.baseUrl + "/recent-viewed";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this54.processCreateRecentViewed(_response);
      });
    }
  }, {
    key: "processCreateRecentViewed",
    value: function processCreateRecentViewed(response) {
      var _this55 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this55.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this55.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Get recent viewed items by users or uuid key
     * @param first limit size
     * @param sortBy order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "getRecentViewed",
    value: function getRecentViewed(first, sortBy, before, after) {
      var _this56 = this;

      var url_ = this.baseUrl + "/recent-viewed?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this56.processGetRecentViewed(_response);
      });
    }
  }, {
    key: "processGetRecentViewed",
    value: function processGetRecentViewed(response) {
      var _this57 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this57.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Search news most follow
     * @param shopId (optional) shop Id
     * @param first limit size
     * @param sortBy order by
     * @param otherSortBy other order by
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "searchNewsMostFollow",
    value: function searchNewsMostFollow(shopId, first, sortBy, otherSortBy, before, after) {
      var _this58 = this;

      var url_ = this.baseUrl + "/search-news-most-follow?";
      if (shopId === null) throw new Error("The parameter 'shopId' cannot be null.");else if (shopId !== undefined) url_ += "shopId=" + encodeURIComponent("" + shopId) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (otherSortBy === undefined || otherSortBy === null) throw new Error("The parameter 'otherSortBy' must be defined and cannot be null.");else url_ += "otherSortBy=" + encodeURIComponent("" + otherSortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this58.processSearchNewsMostFollow(_response);
      });
    }
  }, {
    key: "processSearchNewsMostFollow",
    value: function processSearchNewsMostFollow(response) {
      var _this59 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this59.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Count unread notification
     * @param ownerId owner id
     * @return successful operation
     */

  }, {
    key: "countUnreadNotifications",
    value: function countUnreadNotifications(ownerId) {
      var _this60 = this;

      var url_ = this.baseUrl + "/notifications/{ownerId}";
      if (ownerId === undefined || ownerId === null) throw new Error("The parameter 'ownerId' must be defined.");
      url_ = url_.replace("{ownerId}", encodeURIComponent("" + ownerId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this60.processCountUnreadNotifications(_response);
      });
    }
  }, {
    key: "processCountUnreadNotifications",
    value: function processCountUnreadNotifications(response) {
      var _this61 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this61.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Read notifications
     * @param ownerId owner id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "readNotifications",
    value: function readNotifications(ownerId, body) {
      var _this62 = this;

      var url_ = this.baseUrl + "/notifications/{ownerId}";
      if (ownerId === undefined || ownerId === null) throw new Error("The parameter 'ownerId' must be defined.");
      url_ = url_.replace("{ownerId}", encodeURIComponent("" + ownerId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this62.processReadNotifications(_response);
      });
    }
  }, {
    key: "processReadNotifications",
    value: function processReadNotifications(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find notifications
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findNotifications",
    value: function findNotifications(first, sortBy, before, after) {
      var _this63 = this;

      var url_ = this.baseUrl + "/notifications?";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this63.processFindNotifications(_response);
      });
    }
  }, {
    key: "processFindNotifications",
    value: function processFindNotifications(response) {
      var _this64 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this64.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update report
     * @param reportId report id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateReport",
    value: function updateReport(reportId, body) {
      var _this65 = this;

      var url_ = this.baseUrl + "/reports/{reportId}";
      if (reportId === undefined || reportId === null) throw new Error("The parameter 'reportId' must be defined.");
      url_ = url_.replace("{reportId}", encodeURIComponent("" + reportId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this65.processUpdateReport(_response);
      });
    }
  }, {
    key: "processUpdateReport",
    value: function processUpdateReport(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find report by id
     * @param reportId report id
     * @return successful operation
     */

  }, {
    key: "findReportById",
    value: function findReportById(reportId) {
      var _this66 = this;

      var url_ = this.baseUrl + "/reports/{reportId}";
      if (reportId === undefined || reportId === null) throw new Error("The parameter 'reportId' must be defined.");
      url_ = url_.replace("{reportId}", encodeURIComponent("" + reportId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this66.processFindReportById(_response);
      });
    }
  }, {
    key: "processFindReportById",
    value: function processFindReportById(response) {
      var _this67 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this67.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create report
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createReport",
    value: function createReport(body) {
      var _this68 = this;

      var url_ = this.baseUrl + "/reports";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this68.processCreateReport(_response);
      });
    }
  }, {
    key: "processCreateReport",
    value: function processCreateReport(response) {
      var _this69 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this69.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this69.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find reports
     * @param search (optional) state filter
     * @param state (optional) state filter
     * @param reason (optional) reason filter
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findReports",
    value: function findReports(search, state, reason, first, sortBy, before, after) {
      var _this70 = this;

      var url_ = this.baseUrl + "/reports?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (state === null) throw new Error("The parameter 'state' cannot be null.");else if (state !== undefined) url_ += "state=" + encodeURIComponent("" + state) + "&";
      if (reason === null) throw new Error("The parameter 'reason' cannot be null.");else if (reason !== undefined) url_ += "reason=" + encodeURIComponent("" + reason) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this70.processFindReports(_response);
      });
    }
  }, {
    key: "processFindReports",
    value: function processFindReports(response) {
      var _this71 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this71.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find shop by owner id
     * @param ownerId shop owner id
     * @return successful operation
     */

  }, {
    key: "findShopByOwner",
    value: function findShopByOwner(ownerId) {
      var _this72 = this;

      var url_ = this.baseUrl + "/shop/get-by-owner/{ownerId}";
      if (ownerId === undefined || ownerId === null) throw new Error("The parameter 'ownerId' must be defined.");
      url_ = url_.replace("{ownerId}", encodeURIComponent("" + ownerId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this72.processFindShopByOwner(_response);
      });
    }
  }, {
    key: "processFindShopByOwner",
    value: function processFindShopByOwner(response) {
      var _this73 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this73.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find shop by id
     * @param shopDomain shop domain
     * @param authId (optional) authUserId
     * @return successful operation
     */

  }, {
    key: "findShopByDomain",
    value: function findShopByDomain(shopDomain, authId) {
      var _this74 = this;

      var url_ = this.baseUrl + "/shop/get-by-domain/{shopDomain}?";
      if (shopDomain === undefined || shopDomain === null) throw new Error("The parameter 'shopDomain' must be defined.");
      url_ = url_.replace("{shopDomain}", encodeURIComponent("" + shopDomain));
      if (authId === null) throw new Error("The parameter 'authId' cannot be null.");else if (authId !== undefined) url_ += "authId=" + encodeURIComponent("" + authId) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this74.processFindShopByDomain(_response);
      });
    }
  }, {
    key: "processFindShopByDomain",
    value: function processFindShopByDomain(response) {
      var _this75 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this75.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news by id
     * @param shopId shop id
     * @return successful operation
     */

  }, {
    key: "findShopById",
    value: function findShopById(shopId) {
      var _this76 = this;

      var url_ = this.baseUrl + "/shop/{shopId}";
      if (shopId === undefined || shopId === null) throw new Error("The parameter 'shopId' must be defined.");
      url_ = url_.replace("{shopId}", encodeURIComponent("" + shopId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this76.processFindShopById(_response);
      });
    }
  }, {
    key: "processFindShopById",
    value: function processFindShopById(response) {
      var _this77 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this77.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update shop
     * @param shopId shop id
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateShop",
    value: function updateShop(shopId, body) {
      var _this78 = this;

      var url_ = this.baseUrl + "/shop/{shopId}";
      if (shopId === undefined || shopId === null) throw new Error("The parameter 'shopId' must be defined.");
      url_ = url_.replace("{shopId}", encodeURIComponent("" + shopId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this78.processUpdateShop(_response);
      });
    }
  }, {
    key: "processUpdateShop",
    value: function processUpdateShop(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create shops
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createShop",
    value: function createShop(body) {
      var _this79 = this;

      var url_ = this.baseUrl + "/shop";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this79.processCreateShop(_response);
      });
    }
  }, {
    key: "processCreateShop",
    value: function processCreateShop(response) {
      var _this80 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this80.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this80.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find shops
     * @param search (optional) search query
     * @param isActive (optional) isActive filter
     * @param owner (optional) owner filter
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findShops",
    value: function findShops(search, isActive, owner, first, sortBy, before, after) {
      var _this81 = this;

      var url_ = this.baseUrl + "/shop?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (isActive === null) throw new Error("The parameter 'isActive' cannot be null.");else if (isActive !== undefined) url_ += "isActive=" + encodeURIComponent("" + isActive) + "&";
      if (owner === null) throw new Error("The parameter 'owner' cannot be null.");else if (owner !== undefined) url_ += "owner=" + encodeURIComponent("" + owner) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this81.processFindShops(_response);
      });
    }
  }, {
    key: "processFindShops",
    value: function processFindShops(response) {
      var _this82 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this82.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news by id
     * @param newsId newsId
     * @return successful operation
     */

  }, {
    key: "findNewsById",
    value: function findNewsById(newsId) {
      var _this83 = this;

      var url_ = this.baseUrl + "/news/{newsId}";
      if (newsId === undefined || newsId === null) throw new Error("The parameter 'newsId' must be defined.");
      url_ = url_.replace("{newsId}", encodeURIComponent("" + newsId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this83.processFindNewsById(_response);
      });
    }
  }, {
    key: "processFindNewsById",
    value: function processFindNewsById(response) {
      var _this84 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this84.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update news
     * @param newsId newsId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateNews",
    value: function updateNews(newsId, body) {
      var _this85 = this;

      var url_ = this.baseUrl + "/news/{newsId}";
      if (newsId === undefined || newsId === null) throw new Error("The parameter 'newsId' must be defined.");
      url_ = url_.replace("{newsId}", encodeURIComponent("" + newsId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this85.processUpdateNews(_response);
      });
    }
  }, {
    key: "processUpdateNews",
    value: function processUpdateNews(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news statistics for admin
     * @param startDate startDate
     * @param endDate endDate
     * @return successful operation
     */

  }, {
    key: "findNewsStatisticsInfo",
    value: function findNewsStatisticsInfo(startDate, endDate) {
      var _this86 = this;

      var url_ = this.baseUrl + "/news/statistics/info?";
      if (startDate === undefined || startDate === null) throw new Error("The parameter 'startDate' must be defined and cannot be null.");else url_ += "startDate=" + encodeURIComponent("" + startDate) + "&";
      if (endDate === undefined || endDate === null) throw new Error("The parameter 'endDate' must be defined and cannot be null.");else url_ += "endDate=" + encodeURIComponent("" + endDate) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this86.processFindNewsStatisticsInfo(_response);
      });
    }
  }, {
    key: "processFindNewsStatisticsInfo",
    value: function processFindNewsStatisticsInfo(response) {
      var _this87 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this87.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news by owner
     * @param ownerId ownerId
     * @param status news status
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findNewsByOwner",
    value: function findNewsByOwner(ownerId, status, first, sortBy, before, after) {
      var _this88 = this;

      var url_ = this.baseUrl + "/news/get-by-owner/{ownerId}?";
      if (ownerId === undefined || ownerId === null) throw new Error("The parameter 'ownerId' must be defined.");
      url_ = url_.replace("{ownerId}", encodeURIComponent("" + ownerId));
      if (status === undefined || status === null) throw new Error("The parameter 'status' must be defined and cannot be null.");else url_ += "status=" + encodeURIComponent("" + status) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this88.processFindNewsByOwner(_response);
      });
    }
  }, {
    key: "processFindNewsByOwner",
    value: function processFindNewsByOwner(response) {
      var _this89 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this89.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find news
     * @param keyword (optional) search keyword
     * @param state (optional) product state (old/new)
     * @param priceType (optional) price type (fixed/negociate)
     * @param minPrice (optional) min price
     * @param maxPrice (optional) max price
     * @param newsType (optional) news type (sell/buy/...)
     * @param owner (optional) news owner id
     * @param shop (optional) shop id
     * @param location (optional) location (only by city)
     * @param type (optional) product type (may ui/may xuc/may dao)
     * @param brand (optional) product's brand
     * @param model (optional) product model
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findNews",
    value: function findNews(keyword, state, priceType, minPrice, maxPrice, newsType, owner, shop, location, type, brand, model, first, sortBy, before, after) {
      var _this90 = this;

      var url_ = this.baseUrl + "/news?";
      if (keyword === null) throw new Error("The parameter 'keyword' cannot be null.");else if (keyword !== undefined) url_ += "keyword=" + encodeURIComponent("" + keyword) + "&";
      if (state === null) throw new Error("The parameter 'state' cannot be null.");else if (state !== undefined) url_ += "state=" + encodeURIComponent("" + state) + "&";
      if (priceType === null) throw new Error("The parameter 'priceType' cannot be null.");else if (priceType !== undefined) url_ += "priceType=" + encodeURIComponent("" + priceType) + "&";
      if (minPrice === null) throw new Error("The parameter 'minPrice' cannot be null.");else if (minPrice !== undefined) url_ += "minPrice=" + encodeURIComponent("" + minPrice) + "&";
      if (maxPrice === null) throw new Error("The parameter 'maxPrice' cannot be null.");else if (maxPrice !== undefined) url_ += "maxPrice=" + encodeURIComponent("" + maxPrice) + "&";
      if (newsType === null) throw new Error("The parameter 'newsType' cannot be null.");else if (newsType !== undefined) url_ += "newsType=" + encodeURIComponent("" + newsType) + "&";
      if (owner === null) throw new Error("The parameter 'owner' cannot be null.");else if (owner !== undefined) url_ += "owner=" + encodeURIComponent("" + owner) + "&";
      if (shop === null) throw new Error("The parameter 'shop' cannot be null.");else if (shop !== undefined) url_ += "shop=" + encodeURIComponent("" + shop) + "&";
      if (location === null) throw new Error("The parameter 'location' cannot be null.");else if (location !== undefined) url_ += "location=" + encodeURIComponent("" + location) + "&";
      if (type === null) throw new Error("The parameter 'type' cannot be null.");else if (type !== undefined) url_ += "type=" + encodeURIComponent("" + type) + "&";
      if (brand === null) throw new Error("The parameter 'brand' cannot be null.");else if (brand !== undefined) url_ += "brand=" + encodeURIComponent("" + brand) + "&";
      if (model === null) throw new Error("The parameter 'model' cannot be null.");else if (model !== undefined) url_ += "model=" + encodeURIComponent("" + model) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this90.processFindNews(_response);
      });
    }
  }, {
    key: "processFindNews",
    value: function processFindNews(response) {
      var _this91 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this91.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create news
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createNews",
    value: function createNews(body) {
      var _this92 = this;

      var url_ = this.baseUrl + "/news";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this92.processCreateNews(_response);
      });
    }
  }, {
    key: "processCreateNews",
    value: function processCreateNews(response) {
      var _this93 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this93.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this93.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find brands
     * @param search (optional) search query to filter brands
     * @param first search query to filter brands
     * @param sortBy search query to filter brands
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findBrands",
    value: function findBrands(search, first, sortBy, before, after) {
      var _this94 = this;

      var url_ = this.baseUrl + "/brands?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this94.processFindBrands(_response);
      });
    }
  }, {
    key: "processFindBrands",
    value: function processFindBrands(response) {
      var _this95 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this95.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create brand
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createBrand",
    value: function createBrand(body) {
      var _this96 = this;

      var url_ = this.baseUrl + "/brands";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this96.processCreateBrand(_response);
      });
    }
  }, {
    key: "processCreateBrand",
    value: function processCreateBrand(response) {
      var _this97 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this97.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this97.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find brands list
     * @return successful operation
     */

  }, {
    key: "findBrandList",
    value: function findBrandList() {
      var _this98 = this;

      var url_ = this.baseUrl + "/brands/customs/find-brand-list";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this98.processFindBrandList(_response);
      });
    }
  }, {
    key: "processFindBrandList",
    value: function processFindBrandList(response) {
      var _this99 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this99.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find brand detail by slug
     * @param brandSlug brandSlug
     * @return successful operation
     */

  }, {
    key: "findBrandDetail",
    value: function findBrandDetail(brandSlug) {
      var _this100 = this;

      var url_ = this.baseUrl + "/brands/customs/find-brand-detail/{brandSlug}";
      if (brandSlug === undefined || brandSlug === null) throw new Error("The parameter 'brandSlug' must be defined.");
      url_ = url_.replace("{brandSlug}", encodeURIComponent("" + brandSlug));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this100.processFindBrandDetail(_response);
      });
    }
  }, {
    key: "processFindBrandDetail",
    value: function processFindBrandDetail(response) {
      var _this101 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this101.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find top brands
     * @return successful operation
     */

  }, {
    key: "findTopBrands",
    value: function findTopBrands() {
      var _this102 = this;

      var url_ = this.baseUrl + "/brands/customs/find-top-brands";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this102.processFindTopBrands(_response);
      });
    }
  }, {
    key: "processFindTopBrands",
    value: function processFindTopBrands(response) {
      var _this103 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this103.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find brand by id
     * @param brandId brandId
     * @return successful operation
     */

  }, {
    key: "findBrandById",
    value: function findBrandById(brandId) {
      var _this104 = this;

      var url_ = this.baseUrl + "/brands/{brandId}";
      if (brandId === undefined || brandId === null) throw new Error("The parameter 'brandId' must be defined.");
      url_ = url_.replace("{brandId}", encodeURIComponent("" + brandId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this104.processFindBrandById(_response);
      });
    }
  }, {
    key: "processFindBrandById",
    value: function processFindBrandById(response) {
      var _this105 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this105.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update brand
     * @param brandId brandId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateBrand",
    value: function updateBrand(brandId, body) {
      var _this106 = this;

      var url_ = this.baseUrl + "/brands/{brandId}";
      if (brandId === undefined || brandId === null) throw new Error("The parameter 'brandId' must be defined.");
      url_ = url_.replace("{brandId}", encodeURIComponent("" + brandId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this106.processUpdateBrand(_response);
      });
    }
  }, {
    key: "processUpdateBrand",
    value: function processUpdateBrand(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find categories
     * @return successful operation
     */

  }, {
    key: "findCategories",
    value: function findCategories() {
      var _this107 = this;

      var url_ = this.baseUrl + "/categories";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this107.processFindCategories(_response);
      });
    }
  }, {
    key: "processFindCategories",
    value: function processFindCategories(response) {
      var _this108 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this108.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create category
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createCategory",
    value: function createCategory(body) {
      var _this109 = this;

      var url_ = this.baseUrl + "/categories";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this109.processCreateCategory(_response);
      });
    }
  }, {
    key: "processCreateCategory",
    value: function processCreateCategory(response) {
      var _this110 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this110.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this110.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find category detail by slug
     * @param categorySlug categorySlug
     * @return successful operation
     */

  }, {
    key: "findCategoryDetail",
    value: function findCategoryDetail(categorySlug) {
      var _this111 = this;

      var url_ = this.baseUrl + "/categories/customs/find-category-detail/{categorySlug}";
      if (categorySlug === undefined || categorySlug === null) throw new Error("The parameter 'categorySlug' must be defined.");
      url_ = url_.replace("{categorySlug}", encodeURIComponent("" + categorySlug));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this111.processFindCategoryDetail(_response);
      });
    }
  }, {
    key: "processFindCategoryDetail",
    value: function processFindCategoryDetail(response) {
      var _this112 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this112.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find category by id
     * @param categoryId categoryId
     * @return successful operation
     */

  }, {
    key: "findCategoryById",
    value: function findCategoryById(categoryId) {
      var _this113 = this;

      var url_ = this.baseUrl + "/categories/{categoryId}";
      if (categoryId === undefined || categoryId === null) throw new Error("The parameter 'categoryId' must be defined.");
      url_ = url_.replace("{categoryId}", encodeURIComponent("" + categoryId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this113.processFindCategoryById(_response);
      });
    }
  }, {
    key: "processFindCategoryById",
    value: function processFindCategoryById(response) {
      var _this114 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this114.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update category
     * @param categoryId categoryId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateCategory",
    value: function updateCategory(categoryId, body) {
      var _this115 = this;

      var url_ = this.baseUrl + "/categories/{categoryId}";
      if (categoryId === undefined || categoryId === null) throw new Error("The parameter 'categoryId' must be defined.");
      url_ = url_.replace("{categoryId}", encodeURIComponent("" + categoryId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this115.processUpdateCategory(_response);
      });
    }
  }, {
    key: "processUpdateCategory",
    value: function processUpdateCategory(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find models
     * @param search (optional) search string
     * @param brand (optional) brand
     * @param category (optional) category
     * @param first search query to filter brands
     * @param sortBy search query to filter brands
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "findModels",
    value: function findModels(search, brand, category, first, sortBy, before, after) {
      var _this116 = this;

      var url_ = this.baseUrl + "/models?";
      if (search === null) throw new Error("The parameter 'search' cannot be null.");else if (search !== undefined) url_ += "search=" + encodeURIComponent("" + search) + "&";
      if (brand === null) throw new Error("The parameter 'brand' cannot be null.");else if (brand !== undefined) url_ += "brand=" + encodeURIComponent("" + brand) + "&";
      if (category === null) throw new Error("The parameter 'category' cannot be null.");else if (category !== undefined) url_ += "category=" + encodeURIComponent("" + category) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this116.processFindModels(_response);
      });
    }
  }, {
    key: "processFindModels",
    value: function processFindModels(response) {
      var _this117 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this117.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create model
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createModel",
    value: function createModel(body) {
      var _this118 = this;

      var url_ = this.baseUrl + "/models";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this118.processCreateModel(_response);
      });
    }
  }, {
    key: "processCreateModel",
    value: function processCreateModel(response) {
      var _this119 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this119.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this119.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find model by id
     * @param modelId modelId
     * @return successful operation
     */

  }, {
    key: "findModelById",
    value: function findModelById(modelId) {
      var _this120 = this;

      var url_ = this.baseUrl + "/models/{modelId}";
      if (modelId === undefined || modelId === null) throw new Error("The parameter 'modelId' must be defined.");
      url_ = url_.replace("{modelId}", encodeURIComponent("" + modelId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this120.processFindModelById(_response);
      });
    }
  }, {
    key: "processFindModelById",
    value: function processFindModelById(response) {
      var _this121 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this121.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update model
     * @param modelId modelId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateModel",
    value: function updateModel(modelId, body) {
      var _this122 = this;

      var url_ = this.baseUrl + "/models/{modelId}";
      if (modelId === undefined || modelId === null) throw new Error("The parameter 'modelId' must be defined.");
      url_ = url_.replace("{modelId}", encodeURIComponent("" + modelId));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this122.processUpdateModel(_response);
      });
    }
  }, {
    key: "processUpdateModel",
    value: function processUpdateModel(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find provinces
     * @return successful operation
     */

  }, {
    key: "findProvinces",
    value: function findProvinces() {
      var _this123 = this;

      var url_ = this.baseUrl + "/provinces";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this123.processFindProvinces(_response);
      });
    }
  }, {
    key: "processFindProvinces",
    value: function processFindProvinces(response) {
      var _this124 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this124.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Create province
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "createProvince",
    value: function createProvince(body) {
      var _this125 = this;

      var url_ = this.baseUrl + "/provinces";
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this125.processCreateProvince(_response);
      });
    }
  }, {
    key: "processCreateProvince",
    value: function processCreateProvince(response) {
      var _this126 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this126.jsonParseReviver);
          return result200;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          var result201 = null;
          result201 = _responseText === "" ? null : JSON.parse(_responseText, _this126.jsonParseReviver);
          return result201;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find province by id
     * @param provinceId provinceId
     * @return successful operation
     */

  }, {
    key: "findProvinceById",
    value: function findProvinceById(provinceId) {
      var _this127 = this;

      var url_ = this.baseUrl + "/provinces/{provinceId}";
      if (provinceId === undefined || provinceId === null) throw new Error("The parameter 'provinceId' must be defined.");
      url_ = url_.replace("{provinceId}", encodeURIComponent("" + provinceId));
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this127.processFindProvinceById(_response);
      });
    }
  }, {
    key: "processFindProvinceById",
    value: function processFindProvinceById(response) {
      var _this128 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this128.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Update province
     * @param province provinceId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "updateProvince",
    value: function updateProvince(province, body) {
      var _this129 = this;

      var url_ = this.baseUrl + "/provinces/{provinceId}";
      if (province === undefined || province === null) throw new Error("The parameter 'province' must be defined.");
      url_ = url_.replace("{province}", encodeURIComponent("" + province));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this129.processUpdateProvince(_response);
      });
    }
  }, {
    key: "processUpdateProvince",
    value: function processUpdateProvince(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Search by elasticsearch
     * @param keyword (optional) search keyword
     * @param state (optional) product state (old/new)
     * @param priceType (optional) price type (fixed/negociate)
     * @param minPrice (optional) min price
     * @param maxPrice (optional) max price
     * @param weightRange (optional) weight range
     * @param otherNewsType (optional) news type (sell/buy/...)
     * @param newsType (optional) news type (sell/buy/...)
     * @param categoryId (optional) categoryID
     * @param owner (optional) news owner id
     * @param shop (optional) shop id
     * @param location (optional) location (only by city)
     * @param type (optional) product type (may ui/may xuc/may dao)
     * @param brand (optional) product's brand
     * @param model (optional) product model
     * @param first number of records returned
     * @param sortBy sort field
     * @param before (optional) before token
     * @param after (optional) after token
     * @return successful operation
     */

  }, {
    key: "searchElasticsearch",
    value: function searchElasticsearch(keyword, state, priceType, minPrice, maxPrice, weightRange, otherNewsType, newsType, categoryId, owner, shop, location, type, brand, model, first, sortBy, before, after) {
      var _this130 = this;

      var url_ = this.baseUrl + "/search?";
      if (keyword === null) throw new Error("The parameter 'keyword' cannot be null.");else if (keyword !== undefined) url_ += "keyword=" + encodeURIComponent("" + keyword) + "&";
      if (state === null) throw new Error("The parameter 'state' cannot be null.");else if (state !== undefined) url_ += "state=" + encodeURIComponent("" + state) + "&";
      if (priceType === null) throw new Error("The parameter 'priceType' cannot be null.");else if (priceType !== undefined) url_ += "priceType=" + encodeURIComponent("" + priceType) + "&";
      if (minPrice === null) throw new Error("The parameter 'minPrice' cannot be null.");else if (minPrice !== undefined) url_ += "minPrice=" + encodeURIComponent("" + minPrice) + "&";
      if (maxPrice === null) throw new Error("The parameter 'maxPrice' cannot be null.");else if (maxPrice !== undefined) url_ += "maxPrice=" + encodeURIComponent("" + maxPrice) + "&";
      if (weightRange === null) throw new Error("The parameter 'weightRange' cannot be null.");else if (weightRange !== undefined) url_ += "weightRange=" + encodeURIComponent("" + weightRange) + "&";
      if (otherNewsType === null) throw new Error("The parameter 'otherNewsType' cannot be null.");else if (otherNewsType !== undefined) url_ += "otherNewsType=" + encodeURIComponent("" + otherNewsType) + "&";
      if (newsType === null) throw new Error("The parameter 'newsType' cannot be null.");else if (newsType !== undefined) url_ += "newsType=" + encodeURIComponent("" + newsType) + "&";
      if (categoryId === null) throw new Error("The parameter 'categoryId' cannot be null.");else if (categoryId !== undefined) url_ += "categoryId=" + encodeURIComponent("" + categoryId) + "&";
      if (owner === null) throw new Error("The parameter 'owner' cannot be null.");else if (owner !== undefined) url_ += "owner=" + encodeURIComponent("" + owner) + "&";
      if (shop === null) throw new Error("The parameter 'shop' cannot be null.");else if (shop !== undefined) url_ += "shop=" + encodeURIComponent("" + shop) + "&";
      if (location === null) throw new Error("The parameter 'location' cannot be null.");else if (location !== undefined) url_ += "location=" + encodeURIComponent("" + location) + "&";
      if (type === null) throw new Error("The parameter 'type' cannot be null.");else if (type !== undefined) url_ += "type=" + encodeURIComponent("" + type) + "&";
      if (brand === null) throw new Error("The parameter 'brand' cannot be null.");else if (brand !== undefined) url_ += "brand=" + encodeURIComponent("" + brand) + "&";
      if (model === null) throw new Error("The parameter 'model' cannot be null.");else if (model !== undefined) url_ += "model=" + encodeURIComponent("" + model) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this130.processSearchElasticsearch(_response);
      });
    }
  }, {
    key: "processSearchElasticsearch",
    value: function processSearchElasticsearch(response) {
      var _this131 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this131.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Follow
     * @param id newsId
     * @param body (optional) 
     * @return successful operation
     */

  }, {
    key: "follow",
    value: function follow(id, body) {
      var _this132 = this;

      var url_ = this.baseUrl + "/follows/{id}";
      if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
      url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");
      var content_ = JSON.stringify(body);
      var options_ = {
        body: content_,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this132.processFollow(_response);
      });
    }
  }, {
    key: "processFollow",
    value: function processFollow(response) {
      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 201) {
        return response.text().then(function (_responseText) {
          return;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
    /**
     * Find follow by user/news
     * @param id id
     * @param type type
     * @param newsType (optional) type
     * @param first first
     * @param sortBy sortBy
     * @param before (optional) before
     * @param after (optional) after
     * @return successful operation
     */

  }, {
    key: "findFollow",
    value: function findFollow(id, type, newsType, first, sortBy, before, after) {
      var _this133 = this;

      var url_ = this.baseUrl + "/follows?";
      if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined and cannot be null.");else url_ += "id=" + encodeURIComponent("" + id) + "&";
      if (type === undefined || type === null) throw new Error("The parameter 'type' must be defined and cannot be null.");else url_ += "type=" + encodeURIComponent("" + type) + "&";
      if (newsType === null) throw new Error("The parameter 'newsType' cannot be null.");else if (newsType !== undefined) url_ += "newsType=" + encodeURIComponent("" + newsType) + "&";
      if (first === undefined || first === null) throw new Error("The parameter 'first' must be defined and cannot be null.");else url_ += "first=" + encodeURIComponent("" + first) + "&";
      if (sortBy === undefined || sortBy === null) throw new Error("The parameter 'sortBy' must be defined and cannot be null.");else url_ += "sortBy=" + encodeURIComponent("" + sortBy) + "&";
      if (before === null) throw new Error("The parameter 'before' cannot be null.");else if (before !== undefined) url_ += "before=" + encodeURIComponent("" + before) + "&";
      if (after === null) throw new Error("The parameter 'after' cannot be null.");else if (after !== undefined) url_ += "after=" + encodeURIComponent("" + after) + "&";
      url_ = url_.replace(/[?&]$/, "");
      var options_ = {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      };
      return this.http.fetch(url_, options_).then(function (_response) {
        return _this133.processFindFollow(_response);
      });
    }
  }, {
    key: "processFindFollow",
    value: function processFindFollow(response) {
      var _this134 = this;

      var status = response.status;
      var _headers = {};

      if (response.headers && response.headers.forEach) {
        response.headers.forEach(function (v, k) {
          return _headers[k] = v;
        });
      }

      ;

      if (status === 200) {
        return response.text().then(function (_responseText) {
          var result200 = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, _this134.jsonParseReviver);
          return result200;
        });
      } else if (status === 400) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 401) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status === 500) {
        return response.text().then(function (_responseText) {
          return throwException("A server error occurred.", status, _responseText, _headers);
        });
      } else if (status !== 200 && status !== 204) {
        return response.text().then(function (_responseText) {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
      }

      return Promise.resolve(null);
    }
  }]);

  return ServiceProxy;
}();
var State;

(function (State) {
  State["PENDING"] = "PENDING";
  State["RESOLVED"] = "RESOLVED";
})(State || (State = {}));

var Reason;

(function (Reason) {
  Reason["WRONG_INFO"] = "WRONG_INFO";
  Reason["SOLD"] = "SOLD";
  Reason["VIOLATE"] = "VIOLATE";
})(Reason || (Reason = {}));

var ActivateRolePayloadOperation;

(function (ActivateRolePayloadOperation) {
  ActivateRolePayloadOperation["Activate"] = "activate";
})(ActivateRolePayloadOperation || (ActivateRolePayloadOperation = {}));

var DeactivateRolePayloadOperation;

(function (DeactivateRolePayloadOperation) {
  DeactivateRolePayloadOperation["Deactivate"] = "deactivate";
})(DeactivateRolePayloadOperation || (DeactivateRolePayloadOperation = {}));

var UpdateRolePayloadOperation;

(function (UpdateRolePayloadOperation) {
  UpdateRolePayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateRolePayloadOperation || (UpdateRolePayloadOperation = {}));

var FacebookLoginProvider;

(function (FacebookLoginProvider) {
  FacebookLoginProvider["Facebook"] = "facebook";
})(FacebookLoginProvider || (FacebookLoginProvider = {}));

var GoogleLoginProvider;

(function (GoogleLoginProvider) {
  GoogleLoginProvider["Google"] = "google";
})(GoogleLoginProvider || (GoogleLoginProvider = {}));

var PhoneLoginProvider;

(function (PhoneLoginProvider) {
  PhoneLoginProvider["Phone"] = "phone";
})(PhoneLoginProvider || (PhoneLoginProvider = {}));

var EmailLoginProvider;

(function (EmailLoginProvider) {
  EmailLoginProvider["Email"] = "email";
})(EmailLoginProvider || (EmailLoginProvider = {}));

var UpdateUserPayloadOperation;

(function (UpdateUserPayloadOperation) {
  UpdateUserPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateUserPayloadOperation || (UpdateUserPayloadOperation = {}));

var UpdateProfilePayloadOperation;

(function (UpdateProfilePayloadOperation) {
  UpdateProfilePayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateProfilePayloadOperation || (UpdateProfilePayloadOperation = {}));

var ActivateUserPayloadOperation;

(function (ActivateUserPayloadOperation) {
  ActivateUserPayloadOperation["Activate"] = "activate";
})(ActivateUserPayloadOperation || (ActivateUserPayloadOperation = {}));

var DeactivateUserPayloadOperation;

(function (DeactivateUserPayloadOperation) {
  DeactivateUserPayloadOperation["Deactivate"] = "deactivate";
})(DeactivateUserPayloadOperation || (DeactivateUserPayloadOperation = {}));

var UpdateAvatarPayloadOperation;

(function (UpdateAvatarPayloadOperation) {
  UpdateAvatarPayloadOperation["UpdateAvatar"] = "updateAvatar";
})(UpdateAvatarPayloadOperation || (UpdateAvatarPayloadOperation = {}));

var UpdateAdsensePayloadOperation;

(function (UpdateAdsensePayloadOperation) {
  UpdateAdsensePayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateAdsensePayloadOperation || (UpdateAdsensePayloadOperation = {}));

var UpdateFeatureBrandPayloadOperation;

(function (UpdateFeatureBrandPayloadOperation) {
  UpdateFeatureBrandPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateFeatureBrandPayloadOperation || (UpdateFeatureBrandPayloadOperation = {}));

var UpdateRentalPeriodPayloadOperation;

(function (UpdateRentalPeriodPayloadOperation) {
  UpdateRentalPeriodPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateRentalPeriodPayloadOperation || (UpdateRentalPeriodPayloadOperation = {}));

var UpdateWeightRangePayloadOperation;

(function (UpdateWeightRangePayloadOperation) {
  UpdateWeightRangePayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateWeightRangePayloadOperation || (UpdateWeightRangePayloadOperation = {}));

var ReadNotificationPayloadOperation;

(function (ReadNotificationPayloadOperation) {
  ReadNotificationPayloadOperation["ReadNotification"] = "readNotification";
})(ReadNotificationPayloadOperation || (ReadNotificationPayloadOperation = {}));

var ReadAllNotificationsPayloadOperation;

(function (ReadAllNotificationsPayloadOperation) {
  ReadAllNotificationsPayloadOperation["ReadAllNotifications"] = "readAllNotifications";
})(ReadAllNotificationsPayloadOperation || (ReadAllNotificationsPayloadOperation = {}));

var NotificationState;

(function (NotificationState) {
  NotificationState["READ"] = "READ";
  NotificationState["UNREAD"] = "UNREAD";
})(NotificationState || (NotificationState = {}));

var NotificationType;

(function (NotificationType) {
  NotificationType["FOLLOW_USER"] = "FOLLOW_USER";
  NotificationType["FOLLOW_SHOP"] = "FOLLOW_SHOP";
  NotificationType["CREATE_NEWS"] = "CREATE_NEWS";
})(NotificationType || (NotificationType = {}));

var UpdateReportPayloadOperation;

(function (UpdateReportPayloadOperation) {
  UpdateReportPayloadOperation["ResolveReport"] = "resolveReport";
})(UpdateReportPayloadOperation || (UpdateReportPayloadOperation = {}));

var ReportState;

(function (ReportState) {
  ReportState["PENDING"] = "PENDING";
  ReportState["RESOLVED"] = "RESOLVED";
})(ReportState || (ReportState = {}));

var ReportResolvedResult;

(function (ReportResolvedResult) {
  ReportResolvedResult["SKIP"] = "SKIP";
  ReportResolvedResult["DELETE"] = "DELETE";
})(ReportResolvedResult || (ReportResolvedResult = {}));

var CreateReportPayloadReason;

(function (CreateReportPayloadReason) {
  CreateReportPayloadReason["WRONG_INFO"] = "WRONG_INFO";
  CreateReportPayloadReason["SOLD"] = "SOLD";
  CreateReportPayloadReason["VIOLATE"] = "VIOLATE";
})(CreateReportPayloadReason || (CreateReportPayloadReason = {}));

var UpdateIntroImagesShopPayloadOperation;

(function (UpdateIntroImagesShopPayloadOperation) {
  UpdateIntroImagesShopPayloadOperation["UpdateCover"] = "updateCover";
})(UpdateIntroImagesShopPayloadOperation || (UpdateIntroImagesShopPayloadOperation = {}));

var UpdateLogoImageShopPayloadOperation;

(function (UpdateLogoImageShopPayloadOperation) {
  UpdateLogoImageShopPayloadOperation["UpdateAvatar"] = "updateAvatar";
})(UpdateLogoImageShopPayloadOperation || (UpdateLogoImageShopPayloadOperation = {}));

var DeactivateShopPayloadOperation;

(function (DeactivateShopPayloadOperation) {
  DeactivateShopPayloadOperation["Deactivate"] = "deactivate";
})(DeactivateShopPayloadOperation || (DeactivateShopPayloadOperation = {}));

var ActivateShopPayloadOperation;

(function (ActivateShopPayloadOperation) {
  ActivateShopPayloadOperation["Activate"] = "activate";
})(ActivateShopPayloadOperation || (ActivateShopPayloadOperation = {}));

var UpdateShopPayloadOperation;

(function (UpdateShopPayloadOperation) {
  UpdateShopPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateShopPayloadOperation || (UpdateShopPayloadOperation = {}));

var UpdateBrandPayloadOperation;

(function (UpdateBrandPayloadOperation) {
  UpdateBrandPayloadOperation["UpdateDetail"] = "updateDetail";
})(UpdateBrandPayloadOperation || (UpdateBrandPayloadOperation = {}));

var UpdateCategoryPayloadOperation;

(function (UpdateCategoryPayloadOperation) {
  UpdateCategoryPayloadOperation["UdpateDetail"] = "udpateDetail";
})(UpdateCategoryPayloadOperation || (UpdateCategoryPayloadOperation = {}));

var Payload9ResolvedResult;

(function (Payload9ResolvedResult) {
  Payload9ResolvedResult["SKIP"] = "SKIP";
  Payload9ResolvedResult["DELETE"] = "DELETE";
})(Payload9ResolvedResult || (Payload9ResolvedResult = {}));

var ReportsReason;

(function (ReportsReason) {
  ReportsReason["WRONG_INFO"] = "WRONG_INFO";
  ReportsReason["SOLD"] = "SOLD";
  ReportsReason["VIOLATE"] = "VIOLATE";
})(ReportsReason || (ReportsReason = {}));

var SwaggerException =
/*#__PURE__*/
function (_Error) {
  _inherits(SwaggerException, _Error);

  function SwaggerException(message, status, response, headers, result) {
    var _this135;

    _classCallCheck(this, SwaggerException);

    _this135 = _possibleConstructorReturn(this, _getPrototypeOf(SwaggerException).call(this));

    _defineProperty(_assertThisInitialized(_this135), "message", void 0);

    _defineProperty(_assertThisInitialized(_this135), "status", void 0);

    _defineProperty(_assertThisInitialized(_this135), "response", void 0);

    _defineProperty(_assertThisInitialized(_this135), "headers", void 0);

    _defineProperty(_assertThisInitialized(_this135), "result", void 0);

    _defineProperty(_assertThisInitialized(_this135), "isSwaggerException", true);

    _this135.message = message;
    _this135.status = status;
    _this135.response = response;
    _this135.headers = headers;
    _this135.result = result;
    return _this135;
  }

  _createClass(SwaggerException, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return SwaggerException;
}(_wrapNativeSuper(Error));

function throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) throw result;else throw new SwaggerException(message, status, response, headers, null);
}
// EXTERNAL MODULE: ./config/index.ts + 2 modules
var config = __webpack_require__(8);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__(68);
var external_isomorphic_fetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_fetch_);

// CONCATENATED MODULE: ./services/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return services_getServiceProxy; });





var services_getAuthHttp = function getAuthHttp(idToken) {
  return {
    fetch: function fetch(url, option) {
      option.headers.Authorization = "".concat(idToken);
      option.headers['Access-Control-Allow-Origin'] = '*';
      option.credentials = 'include';
      return external_isomorphic_fetch_default()(url, option);
    }
  };
};

var services_getServiceProxy = function getServiceProxy() {
  var idToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var httpOption = services_getAuthHttp(idToken);
  return new ServiceProxy(config["a" /* config */].url.api, httpOption);
};



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./config/override.config.ts
var overrideConfig = {
  appName: 'excado-develop',
  facebookAppId: '329120894475942',
  firebase: {
    apiKey: 'AIzaSyDaNVSsb66VTC7olY2VuAiKmO-J5e_PDYM',
    authDomain: 'techkids-ac7a7.firebaseapp.com',
    databaseURL: 'https://techkids-ac7a7.firebaseio.com',
    projectId: 'techkids-ac7a7',
    storageBucket: 'techkids-ac7a7.appspot.com',
    messagingSenderId: '809846546437'
  },
  url: {
    main: 'http://timmay.local:3000',
    api: 'http://localhost:3000/api',
    shop: 'http://shopDomain.timmay.local:3000'
  },
  cookies: {
    domain: 'timmay.local',
    maxAge: 60 * 60 * 1000
  }
};
// CONCATENATED MODULE: ./config/default.config.ts
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var config = _objectSpread({
  appName: '',
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  },
  url: {
    main: '',
    api: '',
    shop: ''
  },
  i18n: {
    VN: 'vn',
    EN: 'en',
    defaultLang: 'vn'
  },
  upload: {
    allowImageExt: /\.(gif|jpg|jpeg|tiff|png|JPG|PNG|JPEG|GIF|TIFF)$/,
    allowExcelExt: /\.(csv|xls|xlsm|xlsx|xml|xlsb|xlam)$/,
    shopIntroImageNumber: 10
  },
  googleMaps: {
    apiKey: 'AIzaSyBWcb9PYE2yddvlnN53fB76Y1XSfjURHFk' // 'AIzaSyCvrUsYnz-hSv0rZF3zAx7gx98uz4O-bvM',

  },
  cookies: {
    domain: '',
    maxAge: 0
  },
  regex: {
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    email: /^[a-z][a-z0-9_\.]{5,40}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
    phone: /^([+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*){8,}$/
  }
}, overrideConfig);
// CONCATENATED MODULE: ./config/index.ts
/* concated harmony reexport config */__webpack_require__.d(__webpack_exports__, "a", function() { return config; });


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(70);
var external_next_i18next_default = /*#__PURE__*/__webpack_require__.n(external_next_i18next_);

// EXTERNAL MODULE: ./config/index.ts + 2 modules
var config = __webpack_require__(8);

// CONCATENATED MODULE: ./i18n/i18n.ts


var i18n = new external_next_i18next_default.a({
  defaultLanguage: config["a" /* config */].i18n.defaultLang,
  otherLanguages: [config["a" /* config */].i18n.EN],
  localePath: "".concat( false ? undefined : 'dist', "/client/static/locales"),
  detection: {
    cookieDomain: config["a" /* config */].cookies.domain
  }
});
var appWithTranslation = i18n.appWithTranslation;

var changeLanguage = function changeLanguage(lang) {
  i18n.i18n.changeLanguage(lang);
};

var withNamespaces = i18n.withNamespaces;

// CONCATENATED MODULE: ./i18n/index.ts
/* concated harmony reexport i18n */__webpack_require__.d(__webpack_exports__, "c", function() { return i18n; });
/* concated harmony reexport appWithTranslation */__webpack_require__.d(__webpack_exports__, "a", function() { return appWithTranslation; });
/* concated harmony reexport changeLanguage */__webpack_require__.d(__webpack_exports__, "b", function() { return changeLanguage; });
/* concated harmony reexport withNamespaces */__webpack_require__.d(__webpack_exports__, "d", function() { return withNamespaces; });


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _withRematch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateStore", function() { return _withRematch__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRematch", function() { return _withRematch__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _models_profile_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _models_profile_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_profile_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _models_follow_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var _models_follow_interface__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_follow_interface__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_follow_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _models_search_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75);
/* harmony import */ var _models_search_interface__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_models_search_interface__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52);
/* harmony import */ var _models_metadata_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76);
/* harmony import */ var _models_metadata_interface__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_models_metadata_interface__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_metadata_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);











/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./components/MachineDetailBox/MachineDetailBox.tsx
var MachineDetailBox = __webpack_require__(69);

// EXTERNAL MODULE: external "antd/lib/divider/style"
var style_ = __webpack_require__(84);

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__(38);
var divider_default = /*#__PURE__*/__webpack_require__.n(divider_);

// EXTERNAL MODULE: external "antd/lib/menu/style"
var menu_style_ = __webpack_require__(35);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(14);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/CommonLayout/DropdownMenu.less
var CommonLayout_DropdownMenu = __webpack_require__(96);

// EXTERNAL MODULE: ./i18n/index.ts + 1 modules
var i18n = __webpack_require__(10);

// CONCATENATED MODULE: ./components/CommonLayout/DropdownMenu.tsx





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MenuItem = menu_default.a.Item;

var DropdownMenu_DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      var translate = this.props.t;
      return external_react_default.a.createElement(menu_default.a, {
        className: "dropdown-menu",
        mode: "inline"
      }, external_react_default.a.createElement(MenuItem, {
        key: "1",
        className: "user-image-container"
      }, external_react_default.a.createElement("a", {
        href: "/thong-tin-ca-nhan",
        className: "link"
      }, external_react_default.a.createElement("div", {
        className: "user-image"
      }, external_react_default.a.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundImage: "url(".concat(this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : '/static/images/default-avatar.jpg', ")"),
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }
      })), external_react_default.a.createElement("div", {
        className: "user-info"
      }, external_react_default.a.createElement("span", {
        className: "title"
      }, this.props.profileState.authUser.fullName), external_react_default.a.createElement("span", {
        className: "title small-text"
      }, translate('common:edit-your-profile'))))), external_react_default.a.createElement(divider_default.a, null), external_react_default.a.createElement(MenuItem, {
        key: "2",
        className: "menu-item-container"
      }, external_react_default.a.createElement("a", {
        href: "/quan-li-tin-dang",
        className: "link"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/quan-li-tin-dang-icon.jpg",
        className: "item-image"
      }), external_react_default.a.createElement("div", {
        className: "item-info"
      }, external_react_default.a.createElement("span", {
        className: "item-title"
      }, translate('common:news-managenment'))))), external_react_default.a.createElement(MenuItem, {
        key: "3",
        className: "menu-item-container"
      }, external_react_default.a.createElement("a", {
        href: "/tin-da-luu",
        className: "link"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/tin-da-luu-icon.jpg",
        className: "item-image"
      }), external_react_default.a.createElement("div", {
        className: "item-info"
      }, external_react_default.a.createElement("span", {
        className: "item-title"
      }, translate('common:followed-news'))))), external_react_default.a.createElement(divider_default.a, null), this.props.profileState.authUser && this.props.profileState.authUser.shopDomain ? external_react_default.a.createElement(MenuItem, {
        key: "4",
        className: "menu-item-container"
      }, external_react_default.a.createElement("a", {
        href: "/cua-hang-cua-toi",
        className: "link"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/cua-hang-cua-toi-icon.jpg",
        className: "item-image"
      }), external_react_default.a.createElement("div", {
        className: "item-info"
      }, external_react_default.a.createElement("span", {
        className: "item-title"
      }, translate('common:my-shop'))))) : external_react_default.a.createElement(MenuItem, {
        key: "4",
        className: "menu-item-container"
      }, external_react_default.a.createElement("a", {
        href: "/tao-cua-hang",
        className: "link"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/cua-hang-cua-toi-icon.jpg",
        className: "item-image"
      }), external_react_default.a.createElement("div", {
        className: "item-info"
      }, external_react_default.a.createElement("span", {
        className: "item-title"
      }, translate('common:create-your-shop'))))), external_react_default.a.createElement(MenuItem, {
        key: "5",
        className: "menu-item-container"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "link"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/dang-ki-quang-cao-icon.jpg",
        className: "item-image"
      }), external_react_default.a.createElement("div", {
        className: "item-info"
      }, external_react_default.a.createElement("span", {
        className: "item-title"
      }, translate('common:advertisement-registration'))))), external_react_default.a.createElement(divider_default.a, null), external_react_default.a.createElement(MenuItem, {
        key: "6",
        className: "menu-item-container"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "link"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/tro-giup-icon.jpg",
        className: "item-image"
      }), external_react_default.a.createElement("div", {
        className: "item-info"
      }, external_react_default.a.createElement("span", {
        className: "item-title"
      }, translate('common:help'))))), external_react_default.a.createElement(divider_default.a, null), this.props.profileState.authUser && this.props.profileState.authUser.roles && this.props.profileState.authUser.roles.indexOf('5c7f747708898183ac62f2af') > -1 && external_react_default.a.createElement(MenuItem, {
        key: "7",
        className: "menu-item-container"
      }, external_react_default.a.createElement("a", {
        href: "/quan-ly/danh-sach-hang",
        className: "link"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/admin.png",
        className: "item-image"
      }), external_react_default.a.createElement("div", {
        className: "item-info"
      }, external_react_default.a.createElement("span", {
        className: "item-title"
      }, translate('common:admin'))))), this.props.profileState.authUser && this.props.profileState.authUser.roles && this.props.profileState.authUser.roles.indexOf('5c7f747708898183ac62f2af') > -1 && external_react_default.a.createElement(divider_default.a, null), external_react_default.a.createElement(MenuItem, {
        key: "8",
        className: "menu-item-container"
      }, external_react_default.a.createElement("a", {
        onClick: this.props.logOut,
        className: "link"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/icon-signout.png",
        className: "item-image"
      }), external_react_default.a.createElement("div", {
        className: "item-info"
      }, external_react_default.a.createElement("span", {
        className: "item-title"
      }, translate('common:log-out'))))));
    }
  }]);

  return DropdownMenu;
}(external_react_default.a.Component);

/* harmony default export */ var components_CommonLayout_DropdownMenu = (Object(i18n["d" /* withNamespaces */])('common')(DropdownMenu_DropdownMenu));
// EXTERNAL MODULE: external "antd/lib/modal/style"
var modal_style_ = __webpack_require__(42);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(23);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/row/style"
var row_style_ = __webpack_require__(22);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col/style"
var col_style_ = __webpack_require__(24);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(2);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/tabs/style"
var tabs_style_ = __webpack_require__(78);

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__(36);
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: external "antd/lib/button/style"
var button_style_ = __webpack_require__(27);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(13);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/form/style"
var form_style_ = __webpack_require__(40);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(11);
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/input/style"
var input_style_ = __webpack_require__(37);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(15);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/select/style"
var select_style_ = __webpack_require__(46);

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__(17);
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: external "antd/lib/icon/style"
var icon_style_ = __webpack_require__(18);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(12);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "antd/lib/message/style"
var message_style_ = __webpack_require__(31);

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(3);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./components/CommonLayout/LoginModal.less
var LoginModal = __webpack_require__(97);

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(6);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(21);

// EXTERNAL MODULE: ./services/index.ts + 1 modules
var services = __webpack_require__(5);

// EXTERNAL MODULE: ./core/index.ts + 20 modules
var core = __webpack_require__(4);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(19);

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9);

// EXTERNAL MODULE: ./config/index.ts + 2 modules
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./components/CommonLayout/ForgotPasswordModal.less
var ForgotPasswordModal = __webpack_require__(98);

// CONCATENATED MODULE: ./components/CommonLayout/ForgotPasswordModal.tsx
















function ForgotPasswordModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ForgotPasswordModal_typeof = function _typeof(obj) { return typeof obj; }; } else { ForgotPasswordModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ForgotPasswordModal_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ForgotPasswordModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ForgotPasswordModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ForgotPasswordModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) ForgotPasswordModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) ForgotPasswordModal_defineProperties(Constructor, staticProps); return Constructor; }

function ForgotPasswordModal_possibleConstructorReturn(self, call) { if (call && (ForgotPasswordModal_typeof(call) === "object" || typeof call === "function")) { return call; } return ForgotPasswordModal_assertThisInitialized(self); }

function ForgotPasswordModal_getPrototypeOf(o) { ForgotPasswordModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ForgotPasswordModal_getPrototypeOf(o); }

function ForgotPasswordModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ForgotPasswordModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ForgotPasswordModal_setPrototypeOf(subClass, superClass); }

function ForgotPasswordModal_setPrototypeOf(o, p) { ForgotPasswordModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ForgotPasswordModal_setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var ForgotPasswordModal_BaseForgotPasswordModal =
/*#__PURE__*/
function (_React$Component) {
  ForgotPasswordModal_inherits(BaseForgotPasswordModal, _React$Component);

  function BaseForgotPasswordModal() {
    var _getPrototypeOf2;

    var _this;

    ForgotPasswordModal_classCallCheck(this, BaseForgotPasswordModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ForgotPasswordModal_possibleConstructorReturn(this, (_getPrototypeOf2 = ForgotPasswordModal_getPrototypeOf(BaseForgotPasswordModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(ForgotPasswordModal_assertThisInitialized(_this), "state", {
      loading: false,
      gettingCode: false,
      phone: {
        phoneNo: '',
        countryCode: ''
      }
    });

    _defineProperty(ForgotPasswordModal_assertThisInitialized(_this), "getCode",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(values) {
        var fullPhoneNumber, serviceProxy, phoneNoExistResult, appVerifier, confirmationResult;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  phone: {
                    phoneNo: values.phoneNo,
                    countryCode: values.countryCode
                  },
                  gettingCode: true
                });

                _context.prev = 1;
                fullPhoneNumber = "".concat(values.countryCode).concat(values.phoneNo);
                serviceProxy = Object(services["a" /* getServiceProxy */])();
                _context.next = 6;
                return serviceProxy.checkPhoneNoExist(fullPhoneNumber);

              case 6:
                phoneNoExistResult = _context.sent;

                if (!phoneNoExistResult.phoneNoExist) {
                  _context.next = 17;
                  break;
                }

                appVerifier = window.recaptchaVerifier;
                _context.next = 11;
                return app_default.a.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);

              case 11:
                confirmationResult = _context.sent;
                window.confirmationResult = confirmationResult;

                message_default.a.success(_this.props.t('common:sendVerifyCodeSuccess'));

                _this.setState({
                  gettingCode: false
                });

                _context.next = 19;
                break;

              case 17:
                _this.setState({
                  gettingCode: false
                });

                message_default.a.error(_this.props.t('common:notFoundPhoneNo'));

              case 19:
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](1);

                message_default.a.error(_this.props.t(_context.t0.code));

                _this.setState({
                  gettingCode: false
                });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 21]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(ForgotPasswordModal_assertThisInitialized(_this), "handleOk",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(values) {
        var idToken;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(_this.props.type === 'email')) {
                  _context2.next = 8;
                  break;
                }

                Object(core["j" /* initializeFirebaseApp */])();
                app_default.a.auth().sendPasswordResetEmail(values.email);

                message_default.a.success(_this.props.t('common:send-reset-password-email-success'));

                _this.props.onCancel();

                _context2.next = 26;
                break;

              case 8:
                _context2.next = 10;
                return window.confirmationResult;

              case 10:
                if (!_context2.sent) {
                  _context2.next = 25;
                  break;
                }

                _this.setState({
                  loading: true
                });

                _context2.next = 14;
                return window.confirmationResult.confirm(values.verifyCode);

              case 14:
                _context2.next = 16;
                return app_default.a.auth().currentUser.getIdToken();

              case 16:
                idToken = _context2.sent;
                _context2.next = 19;
                return fetch("".concat(config["a" /* config */].url.api, "/auth/update-password"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    idToken: idToken,
                    newPassword: values.password
                  })
                });

              case 19:
                app_default.a.auth().signOut();

                message_default.a.success(_this.props.t('common:update-password-success'));

                _this.setState({
                  loading: false
                });

                _this.props.onCancel();

                _context2.next = 26;
                break;

              case 25:
                message_default.a.error(_this.props.t('common:invalid-verify-code'));

              case 26:
                _context2.next = 32;
                break;

              case 28:
                _context2.prev = 28;
                _context2.t0 = _context2["catch"](0);

                message_default.a.error(_this.props.t("common:".concat(_context2.t0.code || _context2.t0.message)));

                _this.setState({
                  loading: false
                });

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 28]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  ForgotPasswordModal_createClass(BaseForgotPasswordModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var ForgotEmailPasswordValidateSchema = external_yup_["object"]().shape({
        email: external_yup_["string"]().required(translate('common:pleaseInputVerifyCode')).matches(config["a" /* config */].regex.email, translate('common:invalidEmail'))
      });
      var PhoneNumberValidateSchema = external_yup_["object"]().shape({
        countryCode: external_yup_["string"]().required(translate('common:pleaseInputCountryCode')),
        phoneNo: external_yup_["string"]().matches(config["a" /* config */].regex.phone, translate('common:invalidPhoneNo')).required(translate('common:pleaseInputPhoneNo'))
      });
      var ForgotPhonePasswordValidateSchema = external_yup_["object"]().shape({
        verifyCode: external_yup_["string"]().required(translate('common:pleaseInputVerifyCode')),
        password: external_yup_["string"]().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(config["a" /* config */].regex.password, translate('common:invalidPassword')),
        confirmPassword: external_yup_["string"]().required(translate('common:pleaseConfirmPassword'))
      });

      if (this.props.type === 'email') {
        return external_react_default.a.createElement(external_formik_["Formik"], {
          initialValues: {
            email: ''
          },
          enableReinitialize: true,
          validateOnChange: false,
          validationSchema: ForgotEmailPasswordValidateSchema,
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref3 = _asyncToGenerator(
            /*#__PURE__*/
            regenerator_default.a.mark(function _callee3(values, formikBag) {
              return regenerator_default.a.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _this2.handleOk(values);

                    case 2:
                      formikBag.resetForm({
                        email: ''
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            return function (_x3, _x4) {
              return _ref3.apply(this, arguments);
            };
          }()
        }, function (context) {
          return external_react_default.a.createElement(modal_default.a, {
            title: translate('common:forgotPassword'),
            visible: _this2.props.visible,
            onOk: context.handleSubmit,
            onCancel: _this2.props.onCancel,
            confirmLoading: _this2.state.loading,
            okText: translate('common:send-reset-password-email'),
            cancelText: translate('common:cancel')
          }, external_react_default.a.createElement(form_default.a, {
            onSubmit: context.handleSubmit
          }, external_react_default.a.createElement(form_default.a.Item, {
            label: translate('common:your-email'),
            validateStatus: context.errors.email ? 'error' : undefined,
            help: context.errors.email
          }, external_react_default.a.createElement(input_default.a, {
            value: context.values.email,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              return Object(core["u" /* validateField */])({
                fieldName: 'email',
                validateSchema: ForgotEmailPasswordValidateSchema,
                context: context
              });
            },
            name: "email",
            prefix: external_react_default.a.createElement(icon_default.a, {
              type: "mail",
              style: {
                color: 'rgba(0,0,0,.25)'
              }
            }),
            placeholder: translate('common:your-email')
          }))));
        });
      } else {
        return external_react_default.a.createElement(modal_default.a, {
          className: "reset-password-modal",
          visible: this.props.visible,
          footer: null,
          onCancel: this.props.onCancel,
          destroyOnClose: true
        }, external_react_default.a.createElement(external_formik_["Formik"], {
          initialValues: {
            countryCode: '+84',
            phoneNo: ''
          },
          validateOnChange: false,
          validationSchema: PhoneNumberValidateSchema,
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref4 = _asyncToGenerator(
            /*#__PURE__*/
            regenerator_default.a.mark(function _callee4(values) {
              return regenerator_default.a.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return _this2.getCode(values);

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            return function (_x5) {
              return _ref4.apply(this, arguments);
            };
          }()
        }, function (context) {
          return external_react_default.a.createElement(form_default.a.Item, {
            validateStatus: context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined,
            help: context.errors.phoneNo || context.errors.countryCode
          }, external_react_default.a.createElement(input_default.a.Search, {
            addonBefore: external_react_default.a.createElement(select_default.a, {
              style: {
                width: 120
              },
              value: context.values.countryCode,
              onChange: context.handleChange
            }, external_react_default.a.createElement(select_default.a.Option, {
              value: "+84"
            }, "VN (+84)")),
            value: context.values.phoneNo,
            onChange: context.handleChange,
            onBlur: context.handleBlur,
            placeholder: translate('common:phoneNo'),
            enterButton: external_react_default.a.createElement(button_default.a, {
              type: "primary",
              loading: _this2.state.gettingCode
            }, translate('common:sendCode')),
            onSearch: context.handleSubmit,
            name: "phoneNo"
          }));
        }), external_react_default.a.createElement(external_formik_["Formik"], {
          initialValues: {
            verifyCode: '',
            password: '',
            confirmPassword: ''
          },
          validateOnChange: false,
          validationSchema: ForgotPhonePasswordValidateSchema,
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref5 = _asyncToGenerator(
            /*#__PURE__*/
            regenerator_default.a.mark(function _callee5(values, formikBag) {
              return regenerator_default.a.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return _this2.handleOk(values);

                    case 2:
                      formikBag.resetForm({
                        verifyCode: '',
                        password: '',
                        confirmPassword: ''
                      });

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            return function (_x6, _x7) {
              return _ref5.apply(this, arguments);
            };
          }()
        }, function (context) {
          return external_react_default.a.createElement(form_default.a, {
            onSubmit: context.handleSubmit
          }, external_react_default.a.createElement(form_default.a.Item, {
            validateStatus: context.errors.verifyCode ? 'error' : undefined,
            help: context.errors.verifyCode
          }, external_react_default.a.createElement(input_default.a, {
            value: context.values.verifyCode,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              return Object(core["u" /* validateField */])({
                fieldName: 'verifyCode',
                validateSchema: ForgotPhonePasswordValidateSchema,
                context: context
              });
            },
            placeholder: translate('common:verifyCode'),
            name: "verifyCode"
          })), external_react_default.a.createElement(form_default.a.Item, {
            validateStatus: context.errors.password ? 'error' : undefined,
            help: context.errors.password
          }, external_react_default.a.createElement(input_default.a, {
            value: context.values.password,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              return Object(core["u" /* validateField */])({
                fieldName: 'password',
                validateSchema: ForgotPhonePasswordValidateSchema,
                context: context
              });
            },
            placeholder: translate('common:password'),
            type: "password",
            name: "password"
          })), external_react_default.a.createElement(form_default.a.Item, {
            validateStatus: context.errors.confirmPassword ? 'error' : undefined,
            help: context.errors.confirmPassword
          }, external_react_default.a.createElement(input_default.a, {
            value: context.values.confirmPassword,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
                context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
              } else {
                Object(core["u" /* validateField */])({
                  fieldName: 'confirmPassword',
                  validateSchema: ForgotPhonePasswordValidateSchema,
                  context: context
                });
              }
            },
            placeholder: translate('common:confirmPassword'),
            type: "password",
            name: "confirmPassword"
          })), external_react_default.a.createElement(form_default.a.Item, {
            className: "button-container",
            style: {
              textAlign: 'right'
            }
          }, external_react_default.a.createElement(button_default.a, {
            type: "primary",
            className: "login-button",
            htmlType: "submit",
            loading: _this2.state.loading
          }, translate('common:update-password')), external_react_default.a.createElement("br", null)));
        }));
      }
    }
  }]);

  return BaseForgotPasswordModal;
}(external_react_default.a.Component);

var ForgotPasswordModal_ForgotPasswordModal = Object(i18n["d" /* withNamespaces */])('common')(form_default.a.create()(ForgotPasswordModal_BaseForgotPasswordModal));
// CONCATENATED MODULE: ./components/CommonLayout/LoginModal.tsx






















function LoginModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LoginModal_typeof = function _typeof(obj) { return typeof obj; }; } else { LoginModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LoginModal_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { LoginModal_defineProperty(target, key, source[key]); }); } return target; }

function LoginModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function LoginModal_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { LoginModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { LoginModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function LoginModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LoginModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LoginModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) LoginModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) LoginModal_defineProperties(Constructor, staticProps); return Constructor; }

function LoginModal_possibleConstructorReturn(self, call) { if (call && (LoginModal_typeof(call) === "object" || typeof call === "function")) { return call; } return LoginModal_assertThisInitialized(self); }

function LoginModal_getPrototypeOf(o) { LoginModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LoginModal_getPrototypeOf(o); }

function LoginModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LoginModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LoginModal_setPrototypeOf(subClass, superClass); }

function LoginModal_setPrototypeOf(o, p) { LoginModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LoginModal_setPrototypeOf(o, p); }

function LoginModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var LoginModal_BaseLoginModal =
/*#__PURE__*/
function (_React$Component) {
  LoginModal_inherits(BaseLoginModal, _React$Component);

  function BaseLoginModal() {
    var _getPrototypeOf2;

    var _this;

    LoginModal_classCallCheck(this, BaseLoginModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = LoginModal_possibleConstructorReturn(this, (_getPrototypeOf2 = LoginModal_getPrototypeOf(BaseLoginModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    LoginModal_defineProperty(LoginModal_assertThisInitialized(_this), "state", {
      activeTab: 'phone',
      phone: {
        countryCode: '',
        phoneNo: ''
      },
      loading: {
        login: false,
        getVerifyCode: false
      },
      forgotPassword: false
    });

    LoginModal_defineProperty(LoginModal_assertThisInitialized(_this), "activeTabChange", function (_ref) {
      var activeTab = _ref.activeTab;

      _this.setState({
        activeTab: activeTab
      });
    });

    LoginModal_defineProperty(LoginModal_assertThisInitialized(_this), "login",
    /*#__PURE__*/
    function () {
      var _ref2 = LoginModal_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(values) {
        var email, signInResult, idToken, serviceProxy;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    login: true
                  })
                });

                _context.prev = 1;
                email = _this.state.activeTab === 'phone' ? "".concat(values.countryCode.replace('+', '')).concat(values.phoneNo, "@timmay.vn") : values.email;
                _context.next = 5;
                return app_default.a.auth().signInWithEmailAndPassword(email, values.password);

              case 5:
                signInResult = _context.sent;

                if (!signInResult.user.emailVerified) {
                  _context.next = 16;
                  break;
                }

                _context.next = 9;
                return app_default.a.auth().currentUser.getIdToken(true);

              case 9:
                idToken = _context.sent;
                serviceProxy = Object(services["a" /* getServiceProxy */])();
                serviceProxy.registerUser({
                  idToken: idToken
                });

                message_default.a.success(_this.props.t('common:loginSuccess'));

                Object(core["t" /* submitLoginForm */])(idToken);
                _context.next = 18;
                break;

              case 16:
                message_default.a.error(_this.props.t('common:unverifiedAccount'));

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    login: false
                  })
                });

              case 18:
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](1);

                message_default.a.error(_this.props.t(_context.t0.code));

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    login: false
                  })
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 20]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    LoginModal_defineProperty(LoginModal_assertThisInitialized(_this), "loginWithFacebook",
    /*#__PURE__*/
    LoginModal_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      var provider, idToken, serviceProxy;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              provider = new app_default.a.auth.FacebookAuthProvider();
              _context2.next = 4;
              return app_default.a.auth().signInWithPopup(provider);

            case 4:
              _context2.next = 6;
              return app_default.a.auth().currentUser.getIdToken(true);

            case 6:
              idToken = _context2.sent;
              serviceProxy = Object(services["a" /* getServiceProxy */])();
              _context2.next = 10;
              return serviceProxy.registerUser({
                idToken: idToken
              });

            case 10:
              message_default.a.success(_this.props.t('common:loginSuccess'));

              Object(core["t" /* submitLoginForm */])(idToken);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);

              message_default.a.error(_this.props.t("common:".concat(_context2.t0.code)));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    })));

    LoginModal_defineProperty(LoginModal_assertThisInitialized(_this), "loginWithGoogle",
    /*#__PURE__*/
    LoginModal_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee3() {
      var provider, idToken, serviceProxy;
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              provider = new app_default.a.auth.GoogleAuthProvider();
              _context3.next = 4;
              return app_default.a.auth().signInWithPopup(provider);

            case 4:
              _context3.next = 6;
              return app_default.a.auth().currentUser.getIdToken(true);

            case 6:
              idToken = _context3.sent;
              serviceProxy = Object(services["a" /* getServiceProxy */])();
              _context3.next = 10;
              return serviceProxy.registerUser({
                idToken: idToken
              });

            case 10:
              message_default.a.success(_this.props.t('common:loginSuccess'));

              Object(core["t" /* submitLoginForm */])(idToken);
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);

              message_default.a.error(_this.props.t("common:".concat(_context3.t0.code)));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    })));

    LoginModal_defineProperty(LoginModal_assertThisInitialized(_this), "showForgotPasswordModal", function () {
      _this.setState({
        forgotPassword: true
      });
    });

    LoginModal_defineProperty(LoginModal_assertThisInitialized(_this), "hideForgotPasswordModal", function () {
      _this.setState({
        forgotPassword: false
      });
    });

    return _this;
  }

  LoginModal_createClass(BaseLoginModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var EmailValidateSchema = external_yup_["object"]().shape({
        email: external_yup_["string"]().required(translate('common:pleaseInputEmail')),
        password: external_yup_["string"]().max(100, translate('common:passwordTooLong')).matches(/[^\s]/, translate('common:passwordCantContainSpace')).required(translate('common:pleaseInputPassword'))
      });
      var PhoneNumberValidateSchema = external_yup_["object"]().shape({
        countryCode: external_yup_["string"]().required(translate('common:pleaseInputCountryCode')),
        phoneNo: external_yup_["string"]().matches(config["a" /* config */].regex.phone, translate('common:invalidPhoneNo')).required(translate('common:pleaseInputPhoneNo')),
        password: external_yup_["string"]().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(/[^\s]/, translate('common:passwordCantContainSpace'))
      });
      return external_react_["createElement"](modal_default.a, {
        className: "login-modal",
        visible: this.props.profileState.modal.login,
        footer: null,
        onCancel: function onCancel() {
          return _this2.props.profileReducers.closeModal({
            modalName: 'login'
          });
        },
        destroyOnClose: true
      }, external_react_["createElement"]("h2", null, translate('common:login')), external_react_["createElement"]("hr", {
        className: "title-underline"
      }), external_react_["createElement"](tabs_default.a, {
        defaultActiveKey: this.state.activeTab,
        onChange: function onChange(activeTab) {
          return _this2.activeTabChange({
            activeTab: activeTab
          });
        }
      }, external_react_["createElement"](tabs_default.a.TabPane, {
        tab: external_react_["createElement"]("span", null, external_react_["createElement"](icon_default.a, {
          type: "phone"
        }), translate('common:sms')),
        key: "phone"
      }, external_react_["createElement"](external_formik_["Formik"], {
        initialValues: {
          countryCode: '+84',
          phoneNo: '',
          password: ''
        },
        validateOnChange: false,
        validationSchema: PhoneNumberValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref5 = LoginModal_asyncToGenerator(
          /*#__PURE__*/
          regenerator_default.a.mark(function _callee4(values, formikBag) {
            return regenerator_default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this2.login(values);

                  case 2:
                    formikBag.resetForm({
                      countryCode: '+84',
                      phoneNo: values.phoneNo,
                      password: ''
                    });

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x2, _x3) {
            return _ref5.apply(this, arguments);
          };
        }()
      }, function (context) {
        return external_react_["createElement"](form_default.a, {
          onSubmit: context.handleSubmit
        }, external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined,
          help: context.errors.phoneNo || context.errors.countryCode
        }, external_react_["createElement"](input_default.a, {
          addonBefore: external_react_["createElement"](select_default.a, {
            style: {
              width: 120
            },
            value: context.values.countryCode,
            onChange: context.handleChange
          }, external_react_["createElement"](select_default.a.Option, {
            value: "+84"
          }, "VN (+84)")),
          value: context.values.phoneNo,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(core["u" /* validateField */])({
              fieldName: 'phoneNo',
              validateSchema: PhoneNumberValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:phoneNo'),
          name: "phoneNo"
        })), external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, external_react_["createElement"](input_default.a, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(core["u" /* validateField */])({
              fieldName: 'password',
              validateSchema: PhoneNumberValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), external_react_["createElement"](form_default.a.Item, {
          className: "button-container"
        }, external_react_["createElement"](button_default.a, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.login
        }, translate('common:login')), external_react_["createElement"]("br", null), external_react_["createElement"](button_default.a, {
          type: "default",
          className: "forgot-password-button",
          onClick: _this2.showForgotPasswordModal
        }, translate('common:forgotPassword'))));
      })), external_react_["createElement"](tabs_default.a.TabPane, {
        tab: external_react_["createElement"]("span", null, external_react_["createElement"](icon_default.a, {
          type: "mail"
        }), translate('common:email')),
        key: "email"
      }, external_react_["createElement"](external_formik_["Formik"], {
        initialValues: {
          email: '',
          password: ''
        },
        validateOnChange: false,
        validationSchema: EmailValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref6 = LoginModal_asyncToGenerator(
          /*#__PURE__*/
          regenerator_default.a.mark(function _callee5(values, formikBag) {
            return regenerator_default.a.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _this2.login(values);

                  case 2:
                    formikBag.resetForm({
                      email: values.email,
                      password: ''
                    });

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          return function (_x4, _x5) {
            return _ref6.apply(this, arguments);
          };
        }()
      }, function (context) {
        return external_react_["createElement"](form_default.a, {
          onSubmit: context.handleSubmit
        }, external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.email ? 'error' : undefined,
          help: context.errors.email
        }, external_react_["createElement"](input_default.a, {
          value: context.values.email,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(core["u" /* validateField */])({
              fieldName: 'email',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:email'),
          type: "email",
          name: "email"
        })), external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, external_react_["createElement"](input_default.a, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(core["u" /* validateField */])({
              fieldName: 'password',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), external_react_["createElement"](form_default.a.Item, {
          className: "button-container"
        }, external_react_["createElement"](button_default.a, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.login
        }, translate('common:login')), external_react_["createElement"]("br", null), external_react_["createElement"](button_default.a, {
          type: "default",
          className: "forgot-password-button",
          onClick: _this2.showForgotPasswordModal
        }, translate('common:forgotPassword'))));
      }))), external_react_["createElement"](row_default.a, null, external_react_["createElement"](col_default.a, {
        lg: 10
      }, external_react_["createElement"]("hr", null)), external_react_["createElement"](col_default.a, {
        lg: 4,
        style: {
          textAlign: 'center'
        }
      }, external_react_["createElement"]("span", null, translate('common:or'))), external_react_["createElement"](col_default.a, {
        lg: 10
      }, external_react_["createElement"]("hr", null))), external_react_["createElement"](row_default.a, null, external_react_["createElement"](button_default.a, {
        type: "primary",
        className: "login-facebook-button",
        onClick: this.loginWithFacebook
      }, translate('common:facebookLogin')), external_react_["createElement"](button_default.a, {
        type: "primary",
        className: "login-google-button",
        onClick: this.loginWithGoogle
      }, translate('common:googleLogin'))), external_react_["createElement"]("hr", null), external_react_["createElement"](row_default.a, {
        style: {
          textAlign: 'center'
        }
      }, external_react_["createElement"]("span", {
        style: {
          color: '#000'
        }
      }, translate('common:dontHaveAccount'), "? "), external_react_["createElement"]("span", {
        style: {
          color: 'blue',
          cursor: 'pointer'
        },
        onClick: function onClick() {
          _this2.props.profileReducers.closeModal({
            modalName: 'login'
          });

          _this2.props.profileReducers.openModal({
            modalName: 'register'
          });
        }
      }, translate('common:register'))), external_react_["createElement"]("form", {
        id: "form",
        method: "post",
        action: "/auth/login",
        style: {
          display: 'none'
        }
      }), external_react_["createElement"](ForgotPasswordModal_ForgotPasswordModal, {
        type: this.state.activeTab,
        visible: this.state.forgotPassword,
        onCancel: this.hideForgotPasswordModal
      }));
    }
  }]);

  return BaseLoginModal;
}(external_react_["Component"]);

var LoginModal_LoginModal = Object(i18n["d" /* withNamespaces */])('common')(LoginModal_BaseLoginModal);
// EXTERNAL MODULE: ./components/CommonLayout/RegisterModal.less
var RegisterModal = __webpack_require__(99);

// CONCATENATED MODULE: ./components/CommonLayout/RegisterModal.tsx






















function RegisterModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RegisterModal_typeof = function _typeof(obj) { return typeof obj; }; } else { RegisterModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RegisterModal_typeof(obj); }

function RegisterModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { RegisterModal_defineProperty(target, key, source[key]); }); } return target; }

function RegisterModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function RegisterModal_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { RegisterModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { RegisterModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function RegisterModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RegisterModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RegisterModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) RegisterModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) RegisterModal_defineProperties(Constructor, staticProps); return Constructor; }

function RegisterModal_possibleConstructorReturn(self, call) { if (call && (RegisterModal_typeof(call) === "object" || typeof call === "function")) { return call; } return RegisterModal_assertThisInitialized(self); }

function RegisterModal_getPrototypeOf(o) { RegisterModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RegisterModal_getPrototypeOf(o); }

function RegisterModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RegisterModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RegisterModal_setPrototypeOf(subClass, superClass); }

function RegisterModal_setPrototypeOf(o, p) { RegisterModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RegisterModal_setPrototypeOf(o, p); }

function RegisterModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var RegisterModal_BaseRegisterModal =
/*#__PURE__*/
function (_React$Component) {
  RegisterModal_inherits(BaseRegisterModal, _React$Component);

  function BaseRegisterModal() {
    var _getPrototypeOf2;

    var _this;

    RegisterModal_classCallCheck(this, BaseRegisterModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = RegisterModal_possibleConstructorReturn(this, (_getPrototypeOf2 = RegisterModal_getPrototypeOf(BaseRegisterModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    RegisterModal_defineProperty(RegisterModal_assertThisInitialized(_this), "state", {
      activeTab: 'phone',
      phone: {
        countryCode: '',
        phoneNo: ''
      },
      loading: {
        register: false,
        getVerifyCode: false
      }
    });

    RegisterModal_defineProperty(RegisterModal_assertThisInitialized(_this), "activeTabChange", function (_ref) {
      var activeTab = _ref.activeTab;

      _this.setState({
        activeTab: activeTab
      });
    });

    RegisterModal_defineProperty(RegisterModal_assertThisInitialized(_this), "getCode",
    /*#__PURE__*/
    function () {
      var _ref2 = RegisterModal_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(values) {
        var fullPhoneNumber, serviceProxy, phoneNoExistResult, appVerifier, confirmationResult;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  phone: {
                    phoneNo: values.phoneNo,
                    countryCode: values.countryCode
                  },
                  loading: RegisterModal_objectSpread({}, _this.state.loading, {
                    getVerifyCode: true
                  })
                });

                _context.prev = 1;
                fullPhoneNumber = "".concat(values.countryCode).concat(values.phoneNo);
                serviceProxy = Object(services["a" /* getServiceProxy */])();
                _context.next = 6;
                return serviceProxy.checkPhoneNoExist(fullPhoneNumber);

              case 6:
                phoneNoExistResult = _context.sent;

                if (phoneNoExistResult.phoneNoExist) {
                  _context.next = 16;
                  break;
                }

                appVerifier = window.recaptchaVerifier;
                _context.next = 11;
                return app_default.a.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);

              case 11:
                confirmationResult = _context.sent;
                window.confirmationResult = confirmationResult;

                message_default.a.success(_this.props.t('common:sendVerifyCodeSuccess'));

                _context.next = 17;
                break;

              case 16:
                message_default.a.error(_this.props.t('common:phoneNoHasBeenUsed'));

              case 17:
                _this.setState({
                  loading: RegisterModal_objectSpread({}, _this.state.loading, {
                    getVerifyCode: false
                  })
                });

                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](1);

                message_default.a.error(_this.props.t(_context.t0.code));

              case 23:
                _this.setState({
                  loading: RegisterModal_objectSpread({}, _this.state.loading, {
                    getVerifyCode: false
                  })
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 20]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    RegisterModal_defineProperty(RegisterModal_assertThisInitialized(_this), "register",
    /*#__PURE__*/
    function () {
      var _ref3 = RegisterModal_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(values) {
        var newUser, serviceProxy, idToken, phoneNo, _idToken, _serviceProxy;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  loading: RegisterModal_objectSpread({}, _this.state.loading, {
                    register: true
                  })
                });

                _context2.prev = 1;

                if (!(_this.state.activeTab === 'email')) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 5;
                return app_default.a.auth().createUserWithEmailAndPassword(values.email, values.password);

              case 5:
                newUser = _context2.sent;
                newUser.user.sendEmailVerification(); // create mongodb record

                serviceProxy = Object(services["a" /* getServiceProxy */])();
                _context2.next = 10;
                return app_default.a.auth().currentUser.getIdToken(true);

              case 10:
                idToken = _context2.sent;
                serviceProxy.registerUser({
                  idToken: idToken
                }); // redirect

                _this.setState({
                  loading: RegisterModal_objectSpread({}, _this.state.loading, {
                    register: false
                  })
                });

                message_default.a.success(_this.props.t('common:registerEmailSuccess'), 4);

                _context2.next = 32;
                break;

              case 16:
                if (!(_this.state.activeTab === 'phone')) {
                  _context2.next = 32;
                  break;
                }

                phoneNo = "".concat(_this.state.phone.countryCode).concat(_this.state.phone.phoneNo);
                _context2.next = 20;
                return window.confirmationResult.confirm(values.verifyCode);

              case 20:
                _context2.next = 22;
                return app_default.a.auth().currentUser.updateEmail("".concat(phoneNo.replace('+', ''), "@timmay.vn"));

              case 22:
                _context2.next = 24;
                return app_default.a.auth().currentUser.updatePassword(values.password);

              case 24:
                _context2.next = 26;
                return app_default.a.auth().currentUser.getIdToken(true);

              case 26:
                _idToken = _context2.sent;
                _serviceProxy = Object(services["a" /* getServiceProxy */])();
                _context2.next = 30;
                return _serviceProxy.registerUser({
                  idToken: _idToken
                });

              case 30:
                _this.setState({
                  loading: RegisterModal_objectSpread({}, _this.state.loading, {
                    register: false
                  })
                });

                message_default.a.success(_this.props.t('common:registerSuccess'));

              case 32:
                _context2.next = 38;
                break;

              case 34:
                _context2.prev = 34;
                _context2.t0 = _context2["catch"](1);

                message_default.a.error(_this.props.t(_context2.t0.code));

                _this.setState({
                  loading: RegisterModal_objectSpread({}, _this.state.loading, {
                    register: false
                  })
                });

              case 38:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 34]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    RegisterModal_defineProperty(RegisterModal_assertThisInitialized(_this), "loginWithFacebook",
    /*#__PURE__*/
    RegisterModal_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee3() {
      var provider, serviceProxy, idToken;
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              provider = new app_default.a.auth.FacebookAuthProvider();
              _context3.next = 4;
              return app_default.a.auth().signInWithPopup(provider);

            case 4:
              // create mongodb record
              serviceProxy = Object(services["a" /* getServiceProxy */])();
              _context3.next = 7;
              return app_default.a.auth().currentUser.getIdToken(true);

            case 7:
              idToken = _context3.sent;
              serviceProxy.registerUser({
                idToken: idToken
              });

              message_default.a.success(_this.props.t('common:registerSuccess'));

              Object(core["t" /* submitLoginForm */])(idToken);
              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);

              message_default.a.error(_this.props.t("common:".concat(_context3.t0.code)));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    })));

    RegisterModal_defineProperty(RegisterModal_assertThisInitialized(_this), "loginWithGoogle",
    /*#__PURE__*/
    RegisterModal_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee4() {
      var provider, serviceProxy, idToken;
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              provider = new app_default.a.auth.GoogleAuthProvider();
              _context4.next = 4;
              return app_default.a.auth().signInWithPopup(provider);

            case 4:
              // create mongodb record
              serviceProxy = Object(services["a" /* getServiceProxy */])();
              _context4.next = 7;
              return app_default.a.auth().currentUser.getIdToken(true);

            case 7:
              idToken = _context4.sent;
              serviceProxy.registerUser({
                idToken: idToken
              });

              message_default.a.success(_this.props.t('common:registerSuccess'));

              Object(core["t" /* submitLoginForm */])(idToken);
              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);

              message_default.a.error(_this.props.t("common:".concat(_context4.t0.code)));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    })));

    return _this;
  }

  RegisterModal_createClass(BaseRegisterModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var EmailValidateSchema = external_yup_["object"]().shape({
        email: external_yup_["string"]().required(translate('common:pleaseInputEmail')).matches(config["a" /* config */].regex.email, translate('common:invalidEmail')),
        password: external_yup_["string"]().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(config["a" /* config */].regex.password, translate('common:invalidPassword')),
        confirmPassword: external_yup_["string"]().required(translate('common:pleaseConfirmPassword'))
      });
      var PhoneNumberValidateSchema = external_yup_["object"]().shape({
        countryCode: external_yup_["string"]().required(translate('common:pleaseInputCountryCode')),
        phoneNo: external_yup_["string"]().matches(config["a" /* config */].regex.phone, translate('common:invalidPhoneNo')).required(translate('common:pleaseInputPhoneNo'))
      });
      var VerifyCodeValidateSchema = external_yup_["object"]().shape({
        verifyCode: external_yup_["string"]().required(translate('common:pleaseInputVerifyCode')),
        password: external_yup_["string"]().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(config["a" /* config */].regex.password, translate('common:invalidPassword')),
        confirmPassword: external_yup_["string"]().required(translate('common:pleaseConfirmPassword'))
      });
      return external_react_["createElement"](modal_default.a, {
        className: "register-modal",
        visible: this.props.profileState.modal.register,
        footer: null,
        onCancel: function onCancel() {
          return _this2.props.profileReducers.closeModal({
            modalName: 'register'
          });
        },
        destroyOnClose: true
      }, external_react_["createElement"]("h2", null, translate('common:register')), external_react_["createElement"]("hr", {
        className: "title-underline"
      }), external_react_["createElement"](tabs_default.a, {
        defaultActiveKey: this.state.activeTab,
        onChange: function onChange(activeTab) {
          return _this2.activeTabChange({
            activeTab: activeTab
          });
        }
      }, external_react_["createElement"](tabs_default.a.TabPane, {
        tab: external_react_["createElement"]("span", null, external_react_["createElement"](icon_default.a, {
          type: "phone"
        }), translate('common:sms')),
        key: "phone"
      }, external_react_["createElement"](external_formik_["Formik"], {
        initialValues: {
          countryCode: '+84',
          phoneNo: ''
        },
        validateOnChange: false,
        validationSchema: PhoneNumberValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref6 = RegisterModal_asyncToGenerator(
          /*#__PURE__*/
          regenerator_default.a.mark(function _callee5(values) {
            return regenerator_default.a.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _this2.getCode(values);

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          return function (_x3) {
            return _ref6.apply(this, arguments);
          };
        }()
      }, function (context) {
        return external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined,
          help: context.errors.phoneNo || context.errors.countryCode
        }, external_react_["createElement"](input_default.a.Search, {
          addonBefore: external_react_["createElement"](select_default.a, {
            style: {
              width: 120
            },
            value: context.values.countryCode,
            onChange: context.handleChange
          }, external_react_["createElement"](select_default.a.Option, {
            value: "+84"
          }, "VN (+84)")),
          value: context.values.phoneNo,
          onChange: context.handleChange,
          onBlur: context.handleBlur,
          placeholder: translate('common:phoneNo'),
          enterButton: external_react_["createElement"](button_default.a, {
            type: "primary",
            loading: _this2.state.loading.getVerifyCode
          }, translate('common:sendCode')),
          onSearch: context.handleSubmit,
          name: "phoneNo"
        }));
      }), external_react_["createElement"](external_formik_["Formik"], {
        initialValues: {
          verifyCode: '',
          password: '',
          confirmPassword: ''
        },
        validateOnChange: false,
        validationSchema: VerifyCodeValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref7 = RegisterModal_asyncToGenerator(
          /*#__PURE__*/
          regenerator_default.a.mark(function _callee6(values, formikBag) {
            return regenerator_default.a.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _this2.register(values);

                  case 2:
                    formikBag.resetForm({});

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));

          return function (_x4, _x5) {
            return _ref7.apply(this, arguments);
          };
        }()
      }, function (context) {
        return external_react_["createElement"](form_default.a, {
          onSubmit: context.handleSubmit
        }, external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.verifyCode ? 'error' : undefined,
          help: context.errors.verifyCode
        }, external_react_["createElement"](input_default.a, {
          value: context.values.verifyCode,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(core["u" /* validateField */])({
              fieldName: 'verifyCode',
              validateSchema: VerifyCodeValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:verifyCode'),
          name: "verifyCode"
        })), external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, external_react_["createElement"](input_default.a, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(core["u" /* validateField */])({
              fieldName: 'password',
              validateSchema: VerifyCodeValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.confirmPassword ? 'error' : undefined,
          help: context.errors.confirmPassword
        }, external_react_["createElement"](input_default.a, {
          value: context.values.confirmPassword,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
              context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
            } else {
              Object(core["u" /* validateField */])({
                fieldName: 'confirmPassword',
                validateSchema: VerifyCodeValidateSchema,
                context: context
              });
            }
          },
          placeholder: translate('common:confirmPassword'),
          type: "password",
          name: "confirmPassword"
        })), external_react_["createElement"](form_default.a.Item, {
          className: "button-container"
        }, external_react_["createElement"](button_default.a, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.register
        }, translate('common:register')), external_react_["createElement"]("br", null)));
      })), external_react_["createElement"](tabs_default.a.TabPane, {
        tab: external_react_["createElement"]("span", null, external_react_["createElement"](icon_default.a, {
          type: "mail"
        }), "Email"),
        key: "email"
      }, external_react_["createElement"](external_formik_["Formik"], {
        initialValues: {
          email: '',
          password: '',
          confirmPassword: ''
        },
        validateOnChange: false,
        validationSchema: EmailValidateSchema,
        validate: function validate(values) {
          var errors = {};

          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = translate('common:confirmPasswordDidntMatch');
          }

          return errors;
        },
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref8 = RegisterModal_asyncToGenerator(
          /*#__PURE__*/
          regenerator_default.a.mark(function _callee7(values, formikBag) {
            return regenerator_default.a.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return _this2.register(values);

                  case 2:
                    formikBag.resetForm({
                      email: '',
                      password: '',
                      confirmPassword: ''
                    });

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          return function (_x6, _x7) {
            return _ref8.apply(this, arguments);
          };
        }()
      }, function (context) {
        return external_react_["createElement"](form_default.a, {
          onSubmit: context.handleSubmit
        }, external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.email ? 'error' : undefined,
          help: context.errors.email
        }, external_react_["createElement"](input_default.a, {
          value: context.values.email,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(core["u" /* validateField */])({
              fieldName: 'email',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:email'),
          type: "email",
          name: "email"
        })), external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, external_react_["createElement"](input_default.a, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(core["u" /* validateField */])({
              fieldName: 'password',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), external_react_["createElement"](form_default.a.Item, {
          validateStatus: context.errors.confirmPassword ? 'error' : undefined,
          help: context.errors.confirmPassword
        }, external_react_["createElement"](input_default.a, {
          value: context.values.confirmPassword,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
              context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
            } else {
              Object(core["u" /* validateField */])({
                fieldName: 'confirmPassword',
                validateSchema: EmailValidateSchema,
                context: context
              });
            }
          },
          placeholder: translate('common:confirmPassword'),
          type: "password",
          name: "confirmPassword"
        })), external_react_["createElement"](form_default.a.Item, {
          className: "button-container"
        }, external_react_["createElement"](button_default.a, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.register
        }, translate('common:register')), external_react_["createElement"]("br", null)));
      }))), external_react_["createElement"](row_default.a, null, external_react_["createElement"](col_default.a, {
        lg: 10
      }, external_react_["createElement"]("hr", null)), external_react_["createElement"](col_default.a, {
        lg: 4,
        style: {
          textAlign: 'center'
        }
      }, external_react_["createElement"]("span", null, translate('common:or'))), external_react_["createElement"](col_default.a, {
        lg: 10
      }, external_react_["createElement"]("hr", null))), external_react_["createElement"](row_default.a, null, external_react_["createElement"](button_default.a, {
        type: "primary",
        className: "login-facebook-button",
        onClick: this.loginWithFacebook
      }, translate('common:registerFacebook')), external_react_["createElement"](button_default.a, {
        type: "primary",
        className: "login-google-button",
        onClick: this.loginWithGoogle
      }, translate('common:registerGoogle'))), external_react_["createElement"]("hr", null), external_react_["createElement"](row_default.a, {
        style: {
          textAlign: 'center'
        }
      }, external_react_["createElement"]("span", {
        style: {
          color: '#000'
        }
      }, translate('common:alreadyHaveAccount'), "? "), external_react_["createElement"]("span", {
        style: {
          color: 'blue',
          cursor: 'pointer'
        },
        onClick: function onClick() {
          _this2.props.profileReducers.closeModal({
            modalName: 'register'
          });

          _this2.props.profileReducers.openModal({
            modalName: 'login'
          });
        }
      }, translate('common:login'))), external_react_["createElement"]("form", {
        id: "form",
        method: "post",
        action: "/auth/login",
        style: {
          display: 'none'
        }
      }));
    }
  }]);

  return BaseRegisterModal;
}(external_react_["Component"]);

var RegisterModal_RegisterModal = Object(i18n["d" /* withNamespaces */])('common')(RegisterModal_BaseRegisterModal);
// EXTERNAL MODULE: ./components/CommonLayout/Footer.tsx + 1 modules
var Footer = __webpack_require__(55);

// EXTERNAL MODULE: external "antd/lib/tag/style"
var tag_style_ = __webpack_require__(66);

// EXTERNAL MODULE: external "antd/lib/tag"
var tag_ = __webpack_require__(39);
var tag_default = /*#__PURE__*/__webpack_require__.n(tag_);

// EXTERNAL MODULE: external "antd/lib/dropdown/style"
var dropdown_style_ = __webpack_require__(43);

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__(25);
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: external "antd/lib/badge/style"
var badge_style_ = __webpack_require__(102);

// EXTERNAL MODULE: external "antd/lib/badge"
var badge_ = __webpack_require__(86);
var badge_default = /*#__PURE__*/__webpack_require__.n(badge_);

// EXTERNAL MODULE: ./components/CommonLayout/Header.less
var Header = __webpack_require__(103);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(33);

// EXTERNAL MODULE: external "antd/lib/spin/style"
var spin_style_ = __webpack_require__(41);

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(26);
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: external "antd/lib/list/style"
var list_style_ = __webpack_require__(104);

// EXTERNAL MODULE: external "antd/lib/list"
var list_ = __webpack_require__(47);
var list_default = /*#__PURE__*/__webpack_require__.n(list_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(32);

// EXTERNAL MODULE: ./components/CommonLayout/NotificationDropdown.less
var CommonLayout_NotificationDropdown = __webpack_require__(105);

// CONCATENATED MODULE: ./components/CommonLayout/NotificationDropdown.tsx








function NotificationDropdown_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function NotificationDropdown_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { NotificationDropdown_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { NotificationDropdown_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var NotificationDropdown_NotificationDropdown = function NotificationDropdown(props) {
  var getNotificationContent = function getNotificationContent(notification) {
    if (notification.type === 'CREATE_NEWS') {
      var isShop = notification.news.shop && notification.news.shop._id;

      if (isShop) {
        var displayName = notification.news.shop.name;
        return external_react_default.a.createElement("p", null, "B\xE0i vi\u1EBFt \xA0", external_react_default.a.createElement("a", {
          title: notification.news.title,
          onClick: function onClick() {
            props.readNotification(notification._id);
            window.location.href = "".concat(Object(core["i" /* getShopUrl */])(notification.news.shop.domain), "/bai-dang-cua-hang/").concat(notification.news._id);
          }
        }, external_react_default.a.createElement("b", null, notification.news.title)), " \xA0 \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u0103ng th\xE0nh c\xF4ng trong c\u1EEDa h\xE0ng \xA0", external_react_default.a.createElement("a", {
          title: displayName,
          onClick: function onClick() {
            props.readNotification(notification._id);
            window.location.href = "".concat(Object(core["i" /* getShopUrl */])(notification.news.shop.domain), "/thong-tin-cua-hang");
          }
        }, external_react_default.a.createElement("b", null, displayName)));
      } else {
        return external_react_default.a.createElement("p", null, "B\xE0i vi\u1EBFt \xA0", external_react_default.a.createElement("a", {
          title: notification.news.title,
          onClick: function onClick() {
            props.readNotification(notification._id);
            window.location.href = "/bai-dang/".concat(notification.news._id);
          }
        }, external_react_default.a.createElement("b", null, notification.news.title)), " \xA0 \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u0103ng th\xE0nh c\xF4ng");
      }
    } else if (notification.type === 'FOLLOW_USER') {
      var _displayName = notification.news.owner.fullName || notification.news.owner.email || notification.news.owner.phoneNo;

      return external_react_default.a.createElement("p", null, "Ng\u01B0\u1EDDi d\xF9ng \xA0", external_react_default.a.createElement("a", {
        title: _displayName,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "/nguoi-dung/".concat(notification.news.owner._id);
        }
      }, external_react_default.a.createElement("b", null, _displayName)), " \xA0 v\u1EEBa \u0111\u0103ng b\xE0i vi\u1EBFt \xA0", external_react_default.a.createElement("a", {
        title: notification.news.title,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "/bai-dang/".concat(notification.news._id);
        }
      }, external_react_default.a.createElement("b", null, notification.news.title)));
    } else if (notification.type === 'FOLLOW_SHOP') {
      var _displayName2 = notification.news.shop.name;
      return external_react_default.a.createElement("p", null, "C\u1EEDa h\xE0ng \xA0", external_react_default.a.createElement("a", {
        title: _displayName2,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "".concat(Object(core["i" /* getShopUrl */])(notification.news.shop.domain), "/thong-tin-cua-hang");
        }
      }, external_react_default.a.createElement("b", null, _displayName2)), " \xA0 v\u1EEBa \u0111\u0103ng b\xE0i vi\u1EBFt \xA0", external_react_default.a.createElement("a", {
        title: notification.news.title,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "".concat(Object(core["i" /* getShopUrl */])(notification.news.shop.domain), "/bai-dang-cua-hang/").concat(notification.news._id);
        }
      }, external_react_default.a.createElement("b", null, notification.news.title)));
    }

    return;
  };

  return external_react_default.a.createElement("div", {
    className: "notification-dropdown"
  }, external_react_default.a.createElement(spin_default.a, {
    spinning: props.loadingNotification
  }, props.notificationList.length > 0 ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(list_default.a, {
    className: "notification-list",
    itemLayout: "horizontal",
    dataSource: props.notificationList,
    renderItem: function renderItem(item) {
      return external_react_default.a.createElement(list_default.a.Item, {
        onClick:
        /*#__PURE__*/
        NotificationDropdown_asyncToGenerator(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee() {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", props.readNotification(item._id));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })),
        style: item.state === 'UNREAD' ? {
          background: '#e6f7ff',
          cursor: 'pointer'
        } : {}
      }, external_react_default.a.createElement(list_default.a.Item.Meta, {
        title: getNotificationContent(item),
        description: external_react_default.a.createElement("span", {
          style: {
            fontSize: '12px'
          }
        }, external_react_default.a.createElement(icon_default.a, {
          type: "clock-circle"
        }), " ", external_moment_(item.createdAt).format('DD-MM-YYYY HH:mm'))
      }));
    }
  }, props.hasNext && external_react_default.a.createElement(list_default.a.Item, {
    className: "loadmore-containter"
  }, external_react_default.a.createElement("a", {
    className: "loadmore-button",
    onClick: props.loadMoreNotifications,
    type: "primary"
  }, "Xem th\xEAm"))), external_react_default.a.createElement("div", {
    className: "small-text"
  }, external_react_default.a.createElement("a", {
    onClick: props.readAllNotifications
  }, "\u0110\xE1nh d\u1EA5u \u0111\xE3 \u0111\u1ECDc t\u1EA5t c\u1EA3"))) : external_react_default.a.createElement("div", {
    style: {
      height: '60px',
      textAlign: 'center',
      marginTop: '40px',
      fontWeight: 500
    }
  }, props.loadingNotification ? '' : 'Bạn không có thông báo nào')));
};
// CONCATENATED MODULE: ./components/CommonLayout/HamburgerMenu.tsx





function HamburgerMenu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HamburgerMenu_typeof = function _typeof(obj) { return typeof obj; }; } else { HamburgerMenu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HamburgerMenu_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function HamburgerMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HamburgerMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HamburgerMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) HamburgerMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) HamburgerMenu_defineProperties(Constructor, staticProps); return Constructor; }

function HamburgerMenu_possibleConstructorReturn(self, call) { if (call && (HamburgerMenu_typeof(call) === "object" || typeof call === "function")) { return call; } return HamburgerMenu_assertThisInitialized(self); }

function HamburgerMenu_getPrototypeOf(o) { HamburgerMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HamburgerMenu_getPrototypeOf(o); }

function HamburgerMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HamburgerMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HamburgerMenu_setPrototypeOf(subClass, superClass); }

function HamburgerMenu_setPrototypeOf(o, p) { HamburgerMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HamburgerMenu_setPrototypeOf(o, p); }

function HamburgerMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var HamburgerMenu_HamburgerMenu =
/*#__PURE__*/
function (_React$Component) {
  HamburgerMenu_inherits(HamburgerMenu, _React$Component);

  function HamburgerMenu() {
    var _getPrototypeOf2;

    var _this;

    HamburgerMenu_classCallCheck(this, HamburgerMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = HamburgerMenu_possibleConstructorReturn(this, (_getPrototypeOf2 = HamburgerMenu_getPrototypeOf(HamburgerMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    HamburgerMenu_defineProperty(HamburgerMenu_assertThisInitialized(_this), "state", {});

    return _this;
  }

  HamburgerMenu_createClass(HamburgerMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"]("div", {
        className: "dark-overlay",
        style: this.props.toggle ? {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 3,
          backgroundColor: 'rgba(0,0,0,0.5)',
          transition: 'opacity .25s ease-in-out'
        } : {
          display: 'none'
        },
        onClick: this.props.handleHamburgerMenuClick
      }), external_react_["createElement"]("nav", {
        role: "navigation"
      }, external_react_["createElement"]("div", {
        id: "menuToggle"
      }, external_react_["createElement"]("input", _extends({
        onClick: this.props.handleHamburgerMenuClick,
        type: "checkbox"
      }, this.props.toggle ? {
        checked: true
      } : {})), external_react_["createElement"]("span", {
        className: "hamburger"
      }), external_react_["createElement"]("span", {
        className: "hamburger"
      }), external_react_["createElement"]("span", {
        className: "hamburger"
      }), external_react_["createElement"]("ul", {
        id: "menu",
        style: this.props.handleHamburgerMenuClick ? {
          overflowY: 'scroll',
          height: '100vh'
        } : {}
      }, this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? external_react_["createElement"]("div", null, external_react_["createElement"]("a", {
        href: "/thong-tin-ca-nhan",
        className: "link"
      }, external_react_["createElement"](row_default.a, {
        className: "menu-login"
      }, external_react_["createElement"](col_default.a, {
        md: 6,
        xs: 6,
        sm: 6
      }, external_react_["createElement"]("div", {
        className: "image-hamburger-rounded"
      }, external_react_["createElement"]("img", {
        src: this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : '/static/images/default-avatar.jpg'
      }))), external_react_["createElement"](col_default.a, {
        md: 18,
        xs: 18,
        sm: 18
      }, external_react_["createElement"]("span", {
        className: "menu-item-text menu-text-fullname"
      }, this.props.profileState.authUser.fullName), external_react_["createElement"]("br", null), external_react_["createElement"]("span", {
        className: "menu-item-text",
        style: {
          color: '#FFC500',
          fontSize: '12px'
        }
      }, translate('common:edit-your-profile'))))), external_react_["createElement"]("hr", null), external_react_["createElement"]("a", {
        href: "/dang-tin"
      }, external_react_["createElement"](row_default.a, {
        className: "menu-item"
      }, external_react_["createElement"](col_default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, external_react_["createElement"]("img", {
        src: "/static/images/create-news.png",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:createNews'))))), external_react_["createElement"]("a", {
        href: "#"
      }, external_react_["createElement"](row_default.a, {
        className: "menu-item"
      }, external_react_["createElement"](col_default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, external_react_["createElement"]("img", {
        src: "/static/images/icon-noti.png",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:notifications'))))), external_react_["createElement"]("hr", null), external_react_["createElement"]("a", {
        href: "/quan-li-tin-dang"
      }, external_react_["createElement"](row_default.a, {
        className: "menu-item"
      }, external_react_["createElement"](col_default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, external_react_["createElement"]("img", {
        src: "/static/images/quan-li-tin-dang-icon.jpg",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:news-managenment'))))), external_react_["createElement"]("a", {
        href: "/tin-da-luu"
      }, external_react_["createElement"](row_default.a, {
        className: "menu-item"
      }, external_react_["createElement"](col_default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, external_react_["createElement"]("img", {
        src: "/static/images/tin-da-luu-icon.jpg",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:followed-news'))))), external_react_["createElement"]("hr", null), this.props.profileState.authUser && this.props.profileState.authUser.shopDomain ? external_react_["createElement"]("a", {
        href: "/cua-hang-cua-toi"
      }, external_react_["createElement"](row_default.a, {
        className: "menu-item"
      }, external_react_["createElement"](col_default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, external_react_["createElement"]("img", {
        src: "/static/images/cua-hang-cua-toi-icon.jpg",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:my-shop'))))) : external_react_["createElement"]("a", {
        href: "/tao-cua-hang"
      }, external_react_["createElement"](row_default.a, {
        className: "menu-item"
      }, external_react_["createElement"](col_default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, external_react_["createElement"]("img", {
        src: "/static/images/tao-cua-hang-icon.jpg",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:create-your-shop'))))), external_react_["createElement"]("a", {
        href: "#"
      }, external_react_["createElement"](row_default.a, {
        className: "menu-item"
      }, external_react_["createElement"](col_default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, external_react_["createElement"]("img", {
        src: "/static/images/dang-ki-quang-cao-icon.jpg",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:advertisement-registration'))))), external_react_["createElement"]("hr", null), external_react_["createElement"]("a", {
        href: "#"
      }, external_react_["createElement"](row_default.a, {
        className: "menu-item"
      }, external_react_["createElement"](col_default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, external_react_["createElement"]("img", {
        src: "/static/images/tro-giup-icon.jpg",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:help'))))), external_react_["createElement"]("hr", null), external_react_["createElement"]("a", {
        onClick: this.props.logOut
      }, external_react_["createElement"](row_default.a, {
        className: "menu-item"
      }, external_react_["createElement"](col_default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, external_react_["createElement"]("img", {
        src: "/static/images/icon-signout.png",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:log-out')))))) : external_react_["createElement"](row_default.a, {
        className: "menu-login",
        onClick: function onClick() {
          return _this2.props.profileReducers.openModal({
            modalName: 'login'
          });
        }
      }, external_react_["createElement"](col_default.a, {
        md: 6,
        xs: 6,
        sm: 6
      }, external_react_["createElement"]("img", {
        src: "/static/images/default-avatar.jpg",
        width: "100%"
      })), external_react_["createElement"](col_default.a, {
        md: 18,
        xs: 18,
        sm: 18
      }, external_react_["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:login'), " /\x1C ", translate('common:register'))))))));
    }
  }]);

  return HamburgerMenu;
}(external_react_["Component"]);

/* harmony default export */ var CommonLayout_HamburgerMenu = (Object(i18n["d" /* withNamespaces */])('common')(HamburgerMenu_HamburgerMenu));
// CONCATENATED MODULE: ./components/CommonLayout/Header.tsx




















function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Header_defineProperty(target, key, source[key]); }); } return target; }

function Header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Header_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var Search = input_default.a.Search;

var Header_MainHeader =
/*#__PURE__*/
function (_React$Component) {
  Header_inherits(MainHeader, _React$Component);

  function MainHeader() {
    var _getPrototypeOf2;

    var _this;

    Header_classCallCheck(this, MainHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Header_possibleConstructorReturn(this, (_getPrototypeOf2 = Header_getPrototypeOf(MainHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Header_defineProperty(Header_assertThisInitialized(_this), "state", {
      toggle: false,
      loadingNotification: false,
      notifications: {
        data: [],
        before: undefined,
        after: undefined
      },
      sortBy: 'createdAt|desc',
      first: 10,
      unreadNotifications: 0,
      hasNotification: true,
      currentLanguage: config["a" /* config */].i18n.defaultLang,
      searchBarStatus: false
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "loadProfileInfo",
    /*#__PURE__*/
    Header_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var idToken, serviceProxy, profileData;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.props.profileState.authUser && _this.props.profileState.authUser.id)) {
                _context.next = 7;
                break;
              }

              idToken = external_js_cookie_["get"]('token');
              serviceProxy = Object(services["a" /* getServiceProxy */])(idToken);
              _context.next = 5;
              return serviceProxy.findPublicProfile(_this.props.profileState.authUser.id);

            case 5:
              profileData = _context.sent;

              _this.setState({
                userProfile: profileData
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Header_defineProperty(Header_assertThisInitialized(_this), "loadNotificationCount",
    /*#__PURE__*/
    Header_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      var idToken, serviceProxy, countNotificationResult;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this.props.profileState.authUser && _this.props.profileState.authUser.id)) {
                _context2.next = 7;
                break;
              }

              idToken = external_js_cookie_["get"]('token');
              serviceProxy = Object(services["a" /* getServiceProxy */])(idToken);
              _context2.next = 5;
              return serviceProxy.countUnreadNotifications(_this.props.profileState.authUser.id);

            case 5:
              countNotificationResult = _context2.sent;

              _this.setState({
                unreadNotifications: countNotificationResult.unreadNotifications
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Header_defineProperty(Header_assertThisInitialized(_this), "onTurnOnSearchBar", function () {
      _this.setState({
        searchBarStatus: true
      });
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "onTurnOffSearchBar", function () {
      _this.setState({
        searchBarStatus: false
      });
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "changeLanguage",
    /*#__PURE__*/
    function () {
      var _ref3 = Header_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(lang) {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Object(i18n["b" /* changeLanguage */])(lang);
                window.location.reload();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    Header_defineProperty(Header_assertThisInitialized(_this), "handleHamburgerMenuClick",
    /*#__PURE__*/
    Header_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee4() {
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this.setState({
                toggle: !_this.state.toggle
              });

            case 2:
              if (_this.state.toggle) {
                document.body.style.overflow = 'hidden';
                document.body.style.height = '100vh';
              } else {
                document.body.style.overflow = 'auto';
                document.body.style.height = 'auto';
              }

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));

    Header_defineProperty(Header_assertThisInitialized(_this), "logOut", function () {
      app_default.a.auth().signOut();
      window.location.href = '/auth/logout';
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "loadNotifications",
    /*#__PURE__*/
    function () {
      var _ref5 = Header_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(dropdownVisible) {
        var idToken, serviceProxy, notificationsResult;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(dropdownVisible && _this.state.notifications.data.length === 0 && _this.state.hasNotification)) {
                  _context5.next = 15;
                  break;
                }

                _this.setState({
                  loadingNotification: true
                });

                _context5.prev = 2;
                idToken = external_js_cookie_["get"]('token');
                serviceProxy = Object(services["a" /* getServiceProxy */])(idToken);
                _context5.next = 7;
                return serviceProxy.findNotifications(_this.state.first, _this.state.sortBy, undefined, undefined);

              case 7:
                notificationsResult = _context5.sent;

                _this.setState({
                  loadingNotification: false,
                  notifications: notificationsResult,
                  hasNotification: notificationsResult.data.length > 0
                });

                _context5.next = 15;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](2);
                // tslint:disable-next-line:no-console
                console.log(_context5.t0);

                _this.setState({
                  loadingNotification: false
                });

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 11]]);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());

    Header_defineProperty(Header_assertThisInitialized(_this), "loadMoreNotifications",
    /*#__PURE__*/
    Header_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee6() {
      var idToken, serviceProxy, notificationsResult;
      return regenerator_default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!_this.state.notifications.after) {
                _context6.next = 15;
                break;
              }

              _this.setState({
                loadingNotification: true
              });

              _context6.prev = 2;
              idToken = external_js_cookie_["get"]('token');
              serviceProxy = Object(services["a" /* getServiceProxy */])(idToken);
              _context6.next = 7;
              return serviceProxy.findNotifications(_this.state.first, _this.state.sortBy, undefined, _this.state.notifications.after);

            case 7:
              notificationsResult = _context6.sent;

              _this.setState({
                loadingNotification: false,
                notifications: notificationsResult
              });

              _context6.next = 15;
              break;

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](2);
              // tslint:disable-next-line:no-console
              console.log(_context6.t0);

              _this.setState({
                loadingNotification: false
              });

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 11]]);
    })));

    Header_defineProperty(Header_assertThisInitialized(_this), "readAllNotifications",
    /*#__PURE__*/
    Header_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee7() {
      var idToken, serviceProxy;
      return regenerator_default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this.setState({
                notifications: Header_objectSpread({}, _this.state.notifications, {
                  data: _this.state.notifications.data.map(function (item) {
                    if (item.state === core["n" /* notificationState */].UNREAD) {
                      return Header_objectSpread({}, item, {
                        state: core["n" /* notificationState */].READ
                      });
                    } else {
                      return item;
                    }
                  })
                }),
                unreadNotifications: 0
              });

              try {
                if (_this.props.profileState.authUser && _this.props.profileState.authUser.id) {
                  idToken = external_js_cookie_["get"]('token');
                  serviceProxy = Object(services["a" /* getServiceProxy */])(idToken);
                  serviceProxy.readNotifications(_this.props.profileState.authUser.id, {
                    operation: 'readAllNotifications'
                  });
                }
              } catch (error) {
                // tslint:disable-next-line:no-console
                console.log(error);
              }

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));

    Header_defineProperty(Header_assertThisInitialized(_this), "readNotification",
    /*#__PURE__*/
    function () {
      var _ref8 = Header_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee8(notificationId) {
        var idToken, serviceProxy;
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this.setState({
                  notifications: Header_objectSpread({}, _this.state.notifications, {
                    data: _this.state.notifications.data.map(function (item) {
                      return item._id === notificationId ? Header_objectSpread({}, item, {
                        state: core["n" /* notificationState */].READ
                      }) : item;
                    })
                  }),
                  unreadNotifications: _this.state.unreadNotifications - 1
                });

                try {
                  if (_this.props.profileState.authUser && _this.props.profileState.authUser.id) {
                    idToken = external_js_cookie_["get"]('token');
                    serviceProxy = Object(services["a" /* getServiceProxy */])(idToken);
                    serviceProxy.readNotifications(_this.props.profileState.authUser.id, {
                      operation: 'readNotification',
                      payload: {
                        notificationId: notificationId
                      }
                    });
                  }
                } catch (error) {
                  // tslint:disable-next-line:no-console
                  console.log(error);
                }

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x3) {
        return _ref8.apply(this, arguments);
      };
    }());

    return _this;
  }

  Header_createClass(MainHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadNotificationCount();
      this.loadProfileInfo();
      Object(core["j" /* initializeFirebaseApp */])();
      window.recaptchaVerifier = new app_default.a.auth.RecaptchaVerifier('recaptcha', {
        'size': 'invisible'
      });
      this.setState({
        currentLanguage: i18n["c" /* i18n */].i18n.language
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      return external_react_["createElement"]("header", {
        id: "header"
      }, external_react_["createElement"]("div", {
        className: "dark-overlay",
        onClick: this.onTurnOffSearchBar,
        style: this.state.searchBarStatus ? {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 3,
          backgroundColor: 'rgba(0,0,0,0.5)',
          transition: 'opacity .25s ease-in-out'
        } : {
          display: 'none'
        }
      }), external_react_["createElement"](row_default.a, {
        className: "header-container"
      }, external_react_["createElement"](col_default.a, {
        lg: 6
      }, external_react_["createElement"]("a", {
        href: "/"
      }, external_react_["createElement"]("img", {
        src: "/static/images/logo-timmay.png",
        width: "100%"
      }))), external_react_["createElement"](col_default.a, {
        lg: 12
      }), external_react_["createElement"](col_default.a, {
        lg: 6,
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }, external_react_["createElement"](select_default.a, {
        value: this.state.currentLanguage,
        style: {
          width: '140px',
          border: '1px solid #000000',
          color: '#000000'
        },
        onChange: function onChange(value) {
          return _this2.changeLanguage(value);
        }
      }, external_react_["createElement"](select_default.a.Option, {
        value: config["a" /* config */].i18n.VN
      }, translate('common:vn')), external_react_["createElement"](select_default.a.Option, {
        value: config["a" /* config */].i18n.EN
      }, translate('common:en'))))), external_react_["createElement"](row_default.a, {
        className: "mobile-header",
        style: this.state.searchBarStatus ? {
          zIndex: 4
        } : {}
      }, external_react_["createElement"](col_default.a, {
        lg: 1,
        md: 1,
        xs: 0,
        sm: 0
      }), this.state.searchBarStatus ? external_react_["createElement"](col_default.a, {
        lg: 22,
        md: 22,
        sm: 24,
        xs: 24
      }, external_react_["createElement"](Search, {
        placeholder: translate('common:search'),
        onSearch: function onSearch() {
          return window.location.href = "/tim-kiem".concat(_this2.props.searchKeyword ? "?keyword=".concat(_this2.props.searchKeyword) : '');
        },
        onChange: function onChange(e) {
          return _this2.props.updateFilters({
            keyword: e.target.value
          });
        },
        value: this.props.searchKeyword,
        style: {
          width: '100%',
          borderRadius: '0px'
        }
      })) : external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](col_default.a, {
        lg: 7,
        md: 7,
        xs: 12,
        sm: 12
      }, external_react_["createElement"]("a", {
        href: "/"
      }, external_react_["createElement"]("img", {
        src: "/static/images/logo-timmay.png",
        width: "100%"
      }))), external_react_["createElement"](col_default.a, {
        lg: 11,
        md: 11,
        xs: 3,
        sm: 3
      }), external_react_["createElement"](col_default.a, {
        lg: 2,
        md: 2,
        xs: 4,
        sm: 4
      }, external_react_["createElement"]("img", {
        className: "icon-search",
        src: "/static/images/icon-search.png",
        width: "30px",
        onClick: this.onTurnOnSearchBar
      })), external_react_["createElement"](col_default.a, {
        lg: 2,
        md: 2,
        xs: 3,
        sm: 3
      }, external_react_["createElement"](CommonLayout_HamburgerMenu, {
        handleHamburgerMenuClick: this.handleHamburgerMenuClick,
        toggle: this.state.toggle,
        profileState: Header_objectSpread({}, this.props.profileState, {
          authUser: Header_objectSpread({}, this.props.profileState.authUser, this.state.userProfile)
        }),
        profileReducers: this.props.profileReducers,
        logOut: this.logOut
      }))), external_react_["createElement"](col_default.a, {
        lg: 1,
        md: 1,
        xs: 0,
        sm: 0
      })), external_react_["createElement"]("div", {
        className: "header-desktop"
      }, external_react_["createElement"](row_default.a, {
        className: "search-bar"
      }, external_react_["createElement"](col_default.a, {
        lg: 6,
        md: 8,
        sm: 0,
        xs: 0
      }), external_react_["createElement"](col_default.a, {
        lg: 12,
        md: 8,
        sm: 0,
        xs: 0
      }, external_react_["createElement"](Search, {
        placeholder: translate('common:search'),
        onSearch: function onSearch() {
          return window.location.href = "/tim-kiem".concat(_this2.props.searchKeyword ? "?keyword=".concat(_this2.props.searchKeyword) : '');
        },
        onChange: function onChange(e) {
          return _this2.props.updateFilters({
            keyword: e.target.value
          });
        },
        value: this.props.searchKeyword,
        style: {
          width: '95%',
          height: '100%',
          borderRadius: '8px'
        }
      })), this.props.profileState.authUser && this.props.profileState.authUser.id ? external_react_["createElement"](col_default.a, {
        lg: 6,
        md: 8,
        sm: 0,
        xs: 0,
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }
      }, external_react_["createElement"](dropdown_default.a, {
        overlay: external_react_["createElement"](NotificationDropdown_NotificationDropdown, {
          loadingNotification: this.state.loadingNotification,
          hasNext: Boolean(this.state.notifications.after),
          loadMoreNotifications: this.loadMoreNotifications,
          readAllNotifications: this.readAllNotifications,
          notificationList: this.state.notifications.data,
          readNotification: this.readNotification
        }),
        trigger: ['click'],
        placement: "bottomCenter",
        onVisibleChange: this.loadNotifications,
        overlayClassName: "dropdown-menu"
      }, external_react_["createElement"](badge_default.a, {
        count: this.state.unreadNotifications
      }, external_react_["createElement"]("a", null, external_react_["createElement"](icon_default.a, {
        type: "bell",
        theme: "filled",
        style: {
          color: '#000000',
          fontSize: '24px'
        }
      })))), external_react_["createElement"](dropdown_default.a, {
        overlay: external_react_["createElement"](components_CommonLayout_DropdownMenu, {
          profileState: Header_objectSpread({}, this.props.profileState, {
            authUser: Header_objectSpread({}, this.state.userProfile, this.props.profileState.authUser, {
              avatarUrl: this.state.userProfile ? this.state.userProfile.avatarUrl : undefined,
              fullName: this.props.fullName ? this.props.fullName : this.state.userProfile ? this.state.userProfile.fullName : undefined
            })
          }),
          logOut: this.logOut
        }),
        trigger: ['click'],
        placement: "bottomCenter",
        overlayClassName: "dropdown-menu"
      }, external_react_["createElement"](button_default.a, {
        type: "default",
        size: "large",
        className: "search-bar-button",
        icon: "user",
        style: {
          marginRight: '10px',
          marginLeft: '16px'
        }
      }, translate('common:account'))), external_react_["createElement"]("a", {
        href: "/dang-tin"
      }, external_react_["createElement"](button_default.a, {
        icon: "plus",
        type: "default",
        size: "large",
        className: "search-bar-button",
        style: {
          width: '100%'
        }
      }, translate('common:createNews')))) : external_react_["createElement"](col_default.a, {
        lg: 6,
        md: 8,
        sm: 0,
        xs: 0,
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }
      }, external_react_["createElement"](button_default.a, {
        type: "default",
        size: "large",
        className: "search-bar-button",
        style: {
          marginRight: '10px',
          marginLeft: '16px'
        },
        onClick: function onClick() {
          return _this2.props.profileReducers.openModal({
            modalName: 'register'
          });
        }
      }, translate('common:register')), external_react_["createElement"](button_default.a, {
        type: "default",
        size: "large",
        className: "search-bar-button",
        onClick: function onClick() {
          return _this2.props.profileReducers.openModal({
            modalName: 'login'
          });
        }
      }, translate('common:login')))), external_react_["createElement"](row_default.a, {
        className: "popular-keyword"
      }, external_react_["createElement"](col_default.a, {
        lg: 6
      }), external_react_["createElement"](col_default.a, {
        lg: 12,
        style: {
          marginTop: '6px',
          display: 'flex',
          alignItems: 'center'
        }
      }, external_react_["createElement"]("span", null, translate('common:commonKeywords'), ": \xA0 "), this.props.commonKeywords.slice(0, 4).map(function (item, index) {
        return external_react_["createElement"]("a", {
          style: {
            color: '#000000'
          },
          key: index,
          onClick: function onClick() {
            window.location.href = "/tim-kiem?keyword=".concat(item.keyword);
          }
        }, external_react_["createElement"](tag_default.a, {
          color: "orange"
        }, item.keyword));
      })), external_react_["createElement"](col_default.a, {
        lg: 6
      }))), external_react_["createElement"](LoginModal_LoginModal, {
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), external_react_["createElement"](RegisterModal_RegisterModal, {
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), external_react_["createElement"]("div", {
        id: "recaptcha"
      }));
    }
  }]);

  return MainHeader;
}(external_react_["Component"]);

var Header_Header = Object(i18n["d" /* withNamespaces */])('common')(Header_MainHeader);
// EXTERNAL MODULE: ./components/CommonLayout/LeftSideBar.less
var LeftSideBar = __webpack_require__(106);

// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(29);

// CONCATENATED MODULE: ./components/CommonLayout/LeftSideBar.tsx





function LeftSideBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LeftSideBar_typeof = function _typeof(obj) { return typeof obj; }; } else { LeftSideBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LeftSideBar_typeof(obj); }

function LeftSideBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LeftSideBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LeftSideBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) LeftSideBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) LeftSideBar_defineProperties(Constructor, staticProps); return Constructor; }

function LeftSideBar_possibleConstructorReturn(self, call) { if (call && (LeftSideBar_typeof(call) === "object" || typeof call === "function")) { return call; } return LeftSideBar_assertThisInitialized(self); }

function LeftSideBar_getPrototypeOf(o) { LeftSideBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LeftSideBar_getPrototypeOf(o); }

function LeftSideBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LeftSideBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LeftSideBar_setPrototypeOf(subClass, superClass); }

function LeftSideBar_setPrototypeOf(o, p) { LeftSideBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LeftSideBar_setPrototypeOf(o, p); }

function LeftSideBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SubMenu = menu_default.a.SubMenu;

var LeftSideBar_BaseLeftSideBar =
/*#__PURE__*/
function (_React$Component) {
  LeftSideBar_inherits(BaseLeftSideBar, _React$Component);

  function BaseLeftSideBar() {
    var _getPrototypeOf2;

    var _this;

    LeftSideBar_classCallCheck(this, BaseLeftSideBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = LeftSideBar_possibleConstructorReturn(this, (_getPrototypeOf2 = LeftSideBar_getPrototypeOf(BaseLeftSideBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    LeftSideBar_defineProperty(LeftSideBar_assertThisInitialized(_this), "state", {
      isOpenDropdownMenu: false
    });

    return _this;
  }

  LeftSideBar_createClass(BaseLeftSideBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var renderMenuBar = this.props.topBrands.map(function (brand) {
        return external_react_["createElement"](SubMenu, {
          key: brand._id,
          title: external_react_["createElement"]("span", {
            style: {
              color: '#000',
              fontSize: '12px'
            }
          }, brand.name.toUpperCase(), " (", brand.totalNews, ")"),
          onTitleClick: function onTitleClick() {
            return window.location.href = "/danh-sach-hang/".concat(brand.slug);
          }
        }, brand.brandCategories.map(function (category) {
          return external_react_["createElement"](menu_default.a.Item, {
            key: category.slug
          }, external_react_["createElement"]("a", {
            title: category.name,
            style: {
              fontSize: '12px'
            }
          }, category.name, " (", category.totalNews, ")"));
        }));
      });
      var adsPosition2 = this.props.adsense.filter(function (item) {
        return item.position === 2;
      })[0];
      return external_react_["createElement"]("div", {
        className: external_react_device_detect_["isMobile"] ? 'left-sidebar-mobile' : 'left-sidebar'
      }, external_react_["createElement"]("span", {
        className: "title"
      }, external_react_["createElement"]("b", null, translate('common:list-of-brand')), external_react_device_detect_["isMobile"] ? external_react_["createElement"]("a", {
        style: {
          float: 'right',
          color: 'white'
        },
        onClick: function onClick() {
          return _this2.setState({
            isOpenDropdownMenu: !_this2.state.isOpenDropdownMenu
          });
        }
      }, external_react_["createElement"](icon_default.a, {
        type: "caret-down"
      })) : external_react_["createElement"]("div", null)), external_react_device_detect_["isMobile"] && this.state.isOpenDropdownMenu ? external_react_["createElement"](menu_default.a, {
        style: {
          width: '100%',
          background: '#fff',
          border: '1px solid #F4F4F4',
          borderBottom: 'none',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
        },
        mode: 'inline',
        onClick: function onClick(info) {
          var selectedBrand = _this2.props.topBrands.filter(function (brand) {
            return brand._id === info.keyPath[1];
          })[0].slug;

          var selectedCategory = info.keyPath[0];
          window.location.href = "/tim-kiem?brand=".concat(selectedBrand, "&category=").concat(selectedCategory);
        }
      }, renderMenuBar) : external_react_["createElement"]("div", null), !external_react_device_detect_["isMobile"] ? external_react_["createElement"](menu_default.a, {
        style: {
          width: '100%',
          background: '#fff',
          border: '1px solid #F4F4F4',
          borderBottom: 'none',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
        } // mode={window.innerWidth < 992 ? 'inline' : 'vertical'}
        ,
        mode: 'vertical',
        onClick: function onClick(info) {
          var selectedBrand = _this2.props.topBrands.filter(function (brand) {
            return brand._id === info.keyPath[1];
          })[0].slug;

          var selectedCategory = info.keyPath[0];
          window.location.href = "/tim-kiem?brand=".concat(selectedBrand, "&category=").concat(selectedCategory);
        }
      }, renderMenuBar) : external_react_["createElement"]("div", null), external_react_["createElement"]("a", {
        href: "/danh-sach-hang",
        title: "Danh s\xE1ch h\xE3ng",
        className: "all-brand"
      }, external_react_["createElement"]("b", null, translate('common:all-brands'))), external_react_["createElement"]("a", {
        href: adsPosition2 && adsPosition2.hyperlink ? adsPosition2.hyperlink : '#'
      }, external_react_["createElement"]("img", {
        src: adsPosition2 && adsPosition2.imageUrl ? adsPosition2.imageUrl : '/static/images/sidebar-1.png',
        width: "100%",
        className: "image-promotion-right"
      })));
    }
  }]);

  return BaseLeftSideBar;
}(external_react_["Component"]);

var LeftSideBar_LeftSideBar = Object(i18n["d" /* withNamespaces */])('common')(LeftSideBar_BaseLeftSideBar);
// CONCATENATED MODULE: ./components/CommonLayout/RightSideBar.tsx
function RightSideBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RightSideBar_typeof = function _typeof(obj) { return typeof obj; }; } else { RightSideBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RightSideBar_typeof(obj); }

function RightSideBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RightSideBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RightSideBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) RightSideBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) RightSideBar_defineProperties(Constructor, staticProps); return Constructor; }

function RightSideBar_possibleConstructorReturn(self, call) { if (call && (RightSideBar_typeof(call) === "object" || typeof call === "function")) { return call; } return RightSideBar_assertThisInitialized(self); }

function RightSideBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RightSideBar_getPrototypeOf(o) { RightSideBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RightSideBar_getPrototypeOf(o); }

function RightSideBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RightSideBar_setPrototypeOf(subClass, superClass); }

function RightSideBar_setPrototypeOf(o, p) { RightSideBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RightSideBar_setPrototypeOf(o, p); }


var Fragment = external_react_["Fragment"];
var RightSideBar_RightSideBar =
/*#__PURE__*/
function (_React$Component) {
  RightSideBar_inherits(RightSideBar, _React$Component);

  function RightSideBar() {
    RightSideBar_classCallCheck(this, RightSideBar);

    return RightSideBar_possibleConstructorReturn(this, RightSideBar_getPrototypeOf(RightSideBar).apply(this, arguments));
  }

  RightSideBar_createClass(RightSideBar, [{
    key: "render",
    value: function render() {
      var adsPosition4 = this.props.adsense.filter(function (item) {
        return item.position === 4;
      })[0];
      var adsPosition5 = this.props.adsense.filter(function (item) {
        return item.position === 5;
      })[0];
      return external_react_["createElement"](Fragment, null, external_react_["createElement"]("a", {
        href: adsPosition4 && adsPosition4.hyperlink ? adsPosition4.hyperlink : '#'
      }, external_react_["createElement"]("img", {
        src: adsPosition4 && adsPosition4.imageUrl ? adsPosition4.imageUrl : '/static/images/sidebar-1.png',
        width: "100%"
      })), external_react_["createElement"]("a", {
        href: adsPosition5 && adsPosition5.hyperlink ? adsPosition5.hyperlink : '#'
      }, external_react_["createElement"]("img", {
        src: adsPosition5 && adsPosition5.imageUrl ? adsPosition5.imageUrl : '/static/images/sidebar-1.png',
        width: "100%",
        style: {
          marginTop: '30px'
        }
      })));
    }
  }]);

  return RightSideBar;
}(external_react_["Component"]);
// CONCATENATED MODULE: ./components/CommonLayout/LeftSideBarWithoutMenu.tsx
function LeftSideBarWithoutMenu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LeftSideBarWithoutMenu_typeof = function _typeof(obj) { return typeof obj; }; } else { LeftSideBarWithoutMenu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LeftSideBarWithoutMenu_typeof(obj); }

function LeftSideBarWithoutMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LeftSideBarWithoutMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LeftSideBarWithoutMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) LeftSideBarWithoutMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) LeftSideBarWithoutMenu_defineProperties(Constructor, staticProps); return Constructor; }

function LeftSideBarWithoutMenu_possibleConstructorReturn(self, call) { if (call && (LeftSideBarWithoutMenu_typeof(call) === "object" || typeof call === "function")) { return call; } return LeftSideBarWithoutMenu_assertThisInitialized(self); }

function LeftSideBarWithoutMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LeftSideBarWithoutMenu_getPrototypeOf(o) { LeftSideBarWithoutMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LeftSideBarWithoutMenu_getPrototypeOf(o); }

function LeftSideBarWithoutMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LeftSideBarWithoutMenu_setPrototypeOf(subClass, superClass); }

function LeftSideBarWithoutMenu_setPrototypeOf(o, p) { LeftSideBarWithoutMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LeftSideBarWithoutMenu_setPrototypeOf(o, p); }


var LeftSideBarWithoutMenu_Fragment = external_react_["Fragment"];

var LeftSideBarWithoutMenu_LeftSideBarWithoutMenu =
/*#__PURE__*/
function (_React$Component) {
  LeftSideBarWithoutMenu_inherits(LeftSideBarWithoutMenu, _React$Component);

  function LeftSideBarWithoutMenu() {
    LeftSideBarWithoutMenu_classCallCheck(this, LeftSideBarWithoutMenu);

    return LeftSideBarWithoutMenu_possibleConstructorReturn(this, LeftSideBarWithoutMenu_getPrototypeOf(LeftSideBarWithoutMenu).apply(this, arguments));
  }

  LeftSideBarWithoutMenu_createClass(LeftSideBarWithoutMenu, [{
    key: "render",
    value: function render() {
      return external_react_["createElement"](LeftSideBarWithoutMenu_Fragment, null, external_react_["createElement"]("img", {
        src: "/static/images/sidebar-1.png",
        width: "100%"
      }), external_react_["createElement"]("img", {
        src: "/static/images/sidebar-2.png",
        width: "100%",
        style: {
          marginTop: '30px'
        }
      }));
    }
  }]);

  return LeftSideBarWithoutMenu;
}(external_react_["Component"]);

/* harmony default export */ var CommonLayout_LeftSideBarWithoutMenu = (LeftSideBarWithoutMenu_LeftSideBarWithoutMenu);
// EXTERNAL MODULE: ./components/CommonLayout/MainContent.less
var CommonLayout_MainContent = __webpack_require__(107);

// EXTERNAL MODULE: ./modules/machine-news/screens/HomePageScreen/components/BrandList.tsx
var BrandList = __webpack_require__(85);

// CONCATENATED MODULE: ./components/CommonLayout/MainContent.tsx






function MainContent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MainContent_typeof = function _typeof(obj) { return typeof obj; }; } else { MainContent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MainContent_typeof(obj); }

function MainContent_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function MainContent_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { MainContent_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { MainContent_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function MainContent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MainContent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MainContent_createClass(Constructor, protoProps, staticProps) { if (protoProps) MainContent_defineProperties(Constructor.prototype, protoProps); if (staticProps) MainContent_defineProperties(Constructor, staticProps); return Constructor; }

function MainContent_possibleConstructorReturn(self, call) { if (call && (MainContent_typeof(call) === "object" || typeof call === "function")) { return call; } return MainContent_assertThisInitialized(self); }

function MainContent_getPrototypeOf(o) { MainContent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MainContent_getPrototypeOf(o); }

function MainContent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MainContent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MainContent_setPrototypeOf(subClass, superClass); }

function MainContent_setPrototypeOf(o, p) { MainContent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MainContent_setPrototypeOf(o, p); }

function MainContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var MainContent_MainContent =
/*#__PURE__*/
function (_React$Component) {
  MainContent_inherits(MainContent, _React$Component);

  function MainContent() {
    var _getPrototypeOf2;

    var _this;

    MainContent_classCallCheck(this, MainContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = MainContent_possibleConstructorReturn(this, (_getPrototypeOf2 = MainContent_getPrototypeOf(MainContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    MainContent_defineProperty(MainContent_assertThisInitialized(_this), "state", {
      adsense: [],
      featureBrands: []
    });

    MainContent_defineProperty(MainContent_assertThisInitialized(_this), "getAdsense",
    /*#__PURE__*/
    MainContent_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var serviceProxy, adsense;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              serviceProxy = Object(services["a" /* getServiceProxy */])();
              _context.next = 4;
              return serviceProxy.getAdsense(5, 'position|asc', undefined, undefined);

            case 4:
              adsense = _context.sent;

              _this.setState({
                adsense: adsense.data
              });

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    })));

    MainContent_defineProperty(MainContent_assertThisInitialized(_this), "getFeatureBrands",
    /*#__PURE__*/
    MainContent_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      var serviceProxy, featureBrands;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              serviceProxy = Object(services["a" /* getServiceProxy */])();
              _context2.next = 4;
              return serviceProxy.getFeatureBrands(10, 'order|asc', undefined, undefined);

            case 4:
              featureBrands = _context2.sent;

              _this.setState({
                featureBrands: featureBrands.data
              });

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    })));

    return _this;
  }

  MainContent_createClass(MainContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAdsense();
      this.getFeatureBrands();
    }
  }, {
    key: "render",
    value: function render() {
      var adsPosition1 = this.state.adsense.filter(function (item) {
        return item.position === 1;
      })[0];
      var adsPosition3 = this.state.adsense.filter(function (item) {
        return item.position === 3;
      })[0];
      return external_react_["createElement"]("main", {
        className: "main-content"
      }, this.props.hasBrandList && external_react_["createElement"](row_default.a, {
        className: "home-page-brand-list",
        type: "flex",
        justify: "center"
      }, external_react_["createElement"](col_default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }, external_react_["createElement"]("a", {
        href: adsPosition1 && adsPosition1.hyperlink ? adsPosition1.hyperlink : '#'
      }, external_react_["createElement"]("img", {
        className: "image-promote",
        src: adsPosition1 && adsPosition1.imageUrl ? adsPosition1.imageUrl : '/static/images/promotion.png',
        style: {
          maxHeight: '60px'
        }
      }))), external_react_["createElement"](col_default.a, {
        lg: 18,
        md: 24,
        xs: 24,
        sm: 24
      }, external_react_["createElement"](BrandList["a" /* default */], {
        featureBrands: this.state.featureBrands
      })), external_react_["createElement"](col_default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }, external_react_["createElement"]("a", {
        href: adsPosition3 && adsPosition3.hyperlink ? adsPosition3.hyperlink : '#'
      }, external_react_["createElement"]("img", {
        className: "image-promote",
        src: adsPosition3 && adsPosition3.imageUrl ? adsPosition3.imageUrl : '/static/images/promotion.png',
        style: {
          maxHeight: '60px'
        }
      })))), this.props.hasSideBar ? external_react_["createElement"](row_default.a, {
        className: "padding-of-page"
      }, external_react_["createElement"](col_default.a, {
        lg: 3,
        md: 24,
        sm: 24,
        xs: 24
      }, this.props.hasMenuItems ? external_react_["createElement"](LeftSideBar_LeftSideBar, {
        topBrands: this.props.topBrands,
        adsense: this.state.adsense
      }) : external_react_["createElement"](CommonLayout_LeftSideBarWithoutMenu, null)), external_react_["createElement"](col_default.a, {
        className: "main-col",
        lg: 18,
        md: 24,
        sm: 24,
        xs: 24
      }, this.props.children), external_react_["createElement"](col_default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }, external_react_["createElement"](RightSideBar_RightSideBar, {
        adsense: this.state.adsense
      }))) : external_react_["createElement"](row_default.a, {
        className: "padding-of-page"
      }, external_react_["createElement"](col_default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }), external_react_["createElement"](col_default.a, {
        className: "main-col",
        lg: 18,
        md: 24,
        sm: 24,
        xs: 24,
        style: {
          padding: '0px 20px'
        }
      }, this.props.children), external_react_["createElement"](col_default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      })));
    }
  }]);

  return MainContent;
}(external_react_["Component"]);
// EXTERNAL MODULE: ./components/CommonLayout/CurrentTime.tsx
var CurrentTime = __webpack_require__(56);

// EXTERNAL MODULE: ./components/MachineItem/MachineItem.tsx
var MachineItem = __webpack_require__(48);

// EXTERNAL MODULE: ./components/MapWithSearchBox/MapWithSearchBox.tsx
var MapWithSearchBox = __webpack_require__(82);

// EXTERNAL MODULE: external "antd/lib/layout/style"
var layout_style_ = __webpack_require__(63);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(30);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: ./components/AdminLayout/AdminSidebar.less
var AdminSidebar = __webpack_require__(111);

// CONCATENATED MODULE: ./components/AdminLayout/AdminSidebar.tsx









var AdminSidebar_AdminSidebar = Object(i18n["d" /* withNamespaces */])('admin-reports')(function (props) {
  var menuWidth = 256;
  var menuTheme = 'light';
  var translate = props.t;
  return external_react_default.a.createElement(layout_default.a.Sider, {
    trigger: null,
    collapsible: true,
    breakpoint: "lg",
    width: menuWidth,
    theme: menuTheme,
    className: "sider"
  }, external_react_default.a.createElement("div", {
    className: "logo",
    id: "logo"
  }, external_react_default.a.createElement("a", {
    href: "/users"
  }, external_react_default.a.createElement("img", {
    src: "/static/images/logo-timmay.png",
    alt: "logo"
  }))), external_react_default.a.createElement(menu_default.a, {
    key: "Menu",
    mode: "inline",
    theme: menuTheme,
    style: {
      padding: '16px 0',
      width: '100%'
    },
    className: "sider"
  }, external_react_default.a.createElement(menu_default.a.Item, {
    key: "/admin/reports"
  }, external_react_default.a.createElement("a", {
    href: "/admin/reports"
  }, external_react_default.a.createElement(icon_default.a, {
    type: "warning"
  }), external_react_default.a.createElement("span", null, translate('admin-reports:reports'))))));
});
// CONCATENATED MODULE: ./components/AdminLayout/AdminSearchbar.tsx










var AdminSearchbar = Object(i18n["d" /* withNamespaces */])('common')(function (props) {
  var translate = props.t;
  return external_react_default.a.createElement(row_default.a, {
    type: "flex",
    style: {
      marginBottom: '24px'
    },
    justify: "space-between"
  }, external_react_default.a.createElement(col_default.a, {
    xs: 12,
    xl: 8
  }, props.showSearch && external_react_default.a.createElement(input_default.a.Search, {
    enterButton: true,
    placeholder: props.placeholder,
    onChange: function onChange(e) {
      return props.handleSearchChange(e.target.value);
    },
    onSearch: function onSearch(value) {
      return props.handleSearch(value);
    }
  })), external_react_default.a.createElement(col_default.a, {
    xs: 12,
    xl: 16,
    style: {
      textAlign: 'right'
    }
  }, props.hasCreate && external_react_default.a.createElement(button_default.a, {
    type: "primary",
    onClick: props.onCreateClick
  }, translate('common:create'))));
});

// CONCATENATED MODULE: ./components/AdminLayout/PagingButtons.tsx






var PagingButtons_PagingButtons = function PagingButtons(props) {
  return external_react_default.a.createElement("div", {
    className: "pagination",
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, props.before && external_react_default.a.createElement(button_default.a, {
    onClick: props.getPrevPage
  }, external_react_default.a.createElement(icon_default.a, {
    type: "left"
  }), " Prev"), props.after && external_react_default.a.createElement(button_default.a, {
    onClick: props.getNextPage
  }, "Next ", external_react_default.a.createElement(icon_default.a, {
    type: "right"
  })));
};


// EXTERNAL MODULE: ./components/AdminLayout/Authorize.less
var AdminLayout_Authorize = __webpack_require__(112);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(59);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(16);

// CONCATENATED MODULE: ./layouts/Page/Page.tsx
function Page_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Page_typeof = function _typeof(obj) { return typeof obj; }; } else { Page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Page_typeof(obj); }

function Page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Page_createClass(Constructor, protoProps, staticProps) { if (protoProps) Page_defineProperties(Constructor.prototype, protoProps); if (staticProps) Page_defineProperties(Constructor, staticProps); return Constructor; }

function Page_possibleConstructorReturn(self, call) { if (call && (Page_typeof(call) === "object" || typeof call === "function")) { return call; } return Page_assertThisInitialized(self); }

function Page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Page_getPrototypeOf(o) { Page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Page_getPrototypeOf(o); }

function Page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Page_setPrototypeOf(subClass, superClass); }

function Page_setPrototypeOf(o, p) { Page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Page_setPrototypeOf(o, p); }


var Page_Page =
/*#__PURE__*/
function (_React$Component) {
  Page_inherits(Page, _React$Component);

  function Page() {
    Page_classCallCheck(this, Page);

    return Page_possibleConstructorReturn(this, Page_getPrototypeOf(Page).apply(this, arguments));
  }

  Page_createClass(Page, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, this.props.children);
    }
  }]);

  return Page;
}(external_react_default.a.Component);
// EXTERNAL MODULE: ./layouts/Auth/AuthLayout.less
var Auth_AuthLayout = __webpack_require__(113);

// EXTERNAL MODULE: external "react-firebaseui/StyledFirebaseAuth"
var StyledFirebaseAuth_ = __webpack_require__(89);
var StyledFirebaseAuth_default = /*#__PURE__*/__webpack_require__.n(StyledFirebaseAuth_);

// EXTERNAL MODULE: ./routes.ts
var routes = __webpack_require__(61);

// CONCATENATED MODULE: ./layouts/Auth/AuthLayout.tsx




function AuthLayout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AuthLayout_typeof = function _typeof(obj) { return typeof obj; }; } else { AuthLayout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AuthLayout_typeof(obj); }

function AuthLayout_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function AuthLayout_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { AuthLayout_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { AuthLayout_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function AuthLayout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AuthLayout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AuthLayout_createClass(Constructor, protoProps, staticProps) { if (protoProps) AuthLayout_defineProperties(Constructor.prototype, protoProps); if (staticProps) AuthLayout_defineProperties(Constructor, staticProps); return Constructor; }

function AuthLayout_possibleConstructorReturn(self, call) { if (call && (AuthLayout_typeof(call) === "object" || typeof call === "function")) { return call; } return AuthLayout_assertThisInitialized(self); }

function AuthLayout_getPrototypeOf(o) { AuthLayout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AuthLayout_getPrototypeOf(o); }

function AuthLayout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AuthLayout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AuthLayout_setPrototypeOf(subClass, superClass); }

function AuthLayout_setPrototypeOf(o, p) { AuthLayout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AuthLayout_setPrototypeOf(o, p); }

function AuthLayout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AuthLayout_AuthLayout =
/*#__PURE__*/
function (_React$Component) {
  AuthLayout_inherits(AuthLayout, _React$Component);

  function AuthLayout(props) {
    var _this;

    AuthLayout_classCallCheck(this, AuthLayout);

    _this = AuthLayout_possibleConstructorReturn(this, AuthLayout_getPrototypeOf(AuthLayout).call(this, props));

    AuthLayout_defineProperty(AuthLayout_assertThisInitialized(_this), "componentDidMount", function () {
      _this.setState({
        clientOnly: true
      });
    });

    AuthLayout_defineProperty(AuthLayout_assertThisInitialized(_this), "uiConfig", {
      signInFlow: 'popup',
      signInOptions: [app_default.a.auth.GoogleAuthProvider.PROVIDER_ID, app_default.a.auth.FacebookAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: function signInSuccessWithAuthResult(_authResult, _redirectUrl) {
          AuthLayout_asyncToGenerator(
          /*#__PURE__*/
          regenerator_default.a.mark(function _callee() {
            var idToken, form, input;
            return regenerator_default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return app_default.a.auth().currentUser.getIdToken();

                  case 2:
                    idToken = _context.sent;
                    form = document.getElementById('form');
                    input = document.createElement('input');
                    input.type = 'text';
                    input.name = 'token';
                    input.value = idToken;
                    form.appendChild(input);
                    form.submit();

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();

          return false;
        },
        signInFailure: function () {
          var _signInFailure = AuthLayout_asyncToGenerator(
          /*#__PURE__*/
          regenerator_default.a.mark(function _callee2(error) {
            return regenerator_default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // tslint:disable-next-line:no-console
                    console.log(error);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function signInFailure(_x) {
            return _signInFailure.apply(this, arguments);
          }

          return signInFailure;
        }()
      }
    });

    _this.state = {
      clientOnly: false
    };
    return _this;
  }

  AuthLayout_createClass(AuthLayout, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "auth-container"
      }, external_react_default.a.createElement("div", {
        className: "form-wrapper"
      }, external_react_default.a.createElement("div", {
        className: "logo"
      }, external_react_default.a.createElement("span", null, "Techkids Software")), this.props.children, external_react_default.a.createElement(divider_default.a, {
        dashed: true
      }), this.state.clientOnly && external_react_default.a.createElement(StyledFirebaseAuth_default.a, {
        uiConfig: this.uiConfig,
        firebaseAuth: app_default.a.auth(),
        className: "oauth-container"
      }), external_react_default.a.createElement("div", {
        className: "links-wrapper"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "forgot"
      }, "Forgot password"), this.props.pageName === 'login' && external_react_default.a.createElement(routes["a" /* Link */], {
        route: "/dang-ki"
      }, external_react_default.a.createElement("a", {
        className: "login-register"
      }, "Create an account")), this.props.pageName === 'register' && external_react_default.a.createElement(routes["a" /* Link */], {
        route: "/dang-nhap"
      }, external_react_default.a.createElement("a", {
        className: "login-register"
      }, "Already have an account? Log in")), external_react_default.a.createElement("form", {
        id: "form",
        method: "post",
        action: "/auth/login",
        style: {
          display: 'none'
        }
      }))));
    }
  }]);

  return AuthLayout;
}(external_react_default.a.Component);
// EXTERNAL MODULE: ./layouts/Page/CommonLayout.tsx
var CommonLayout = __webpack_require__(64);

// EXTERNAL MODULE: ./layouts/Admin/AdminLayout.less
var AdminLayout = __webpack_require__(114);

// EXTERNAL MODULE: ./layouts/Admin/components/SideBar.less
var SideBar = __webpack_require__(115);

// CONCATENATED MODULE: ./layouts/Admin/components/SideBar.tsx







function SideBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SideBar_typeof = function _typeof(obj) { return typeof obj; }; } else { SideBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SideBar_typeof(obj); }

function SideBar_extends() { SideBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SideBar_extends.apply(this, arguments); }

function SideBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SideBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SideBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) SideBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) SideBar_defineProperties(Constructor, staticProps); return Constructor; }

function SideBar_possibleConstructorReturn(self, call) { if (call && (SideBar_typeof(call) === "object" || typeof call === "function")) { return call; } return SideBar_assertThisInitialized(self); }

function SideBar_getPrototypeOf(o) { SideBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SideBar_getPrototypeOf(o); }

function SideBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SideBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SideBar_setPrototypeOf(subClass, superClass); }

function SideBar_setPrototypeOf(o, p) { SideBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SideBar_setPrototypeOf(o, p); }

function SideBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SideBar_SideBarMenu =
/*#__PURE__*/
function (_React$Component) {
  SideBar_inherits(SideBarMenu, _React$Component);

  function SideBarMenu() {
    var _getPrototypeOf2;

    var _this;

    SideBar_classCallCheck(this, SideBarMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = SideBar_possibleConstructorReturn(this, (_getPrototypeOf2 = SideBar_getPrototypeOf(SideBarMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    SideBar_defineProperty(SideBar_assertThisInitialized(_this), "state", {
      selectedMenuItem: '',
      openedSubMenu: ''
    });

    return _this;
  }

  SideBar_createClass(SideBarMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;

      var getMenuItem = function getMenuItem(item) {
        if (Object(core["a" /* checkPermission */])(_this2.props.authUser, item.permission)) {
          return external_react_default.a.createElement(menu_default.a.Item, {
            key: item.path
          }, external_react_default.a.createElement("a", {
            href: item.path
          }, external_react_default.a.createElement("span", null, translate("common:".concat(item.name)))));
        }

        return;
      };

      var getSubMenus = function getSubMenus(subMenu) {
        var render = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = subMenu.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (Object(core["a" /* checkPermission */])(_this2.props.authUser, item.permission)) {
              render = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (render) {
          return external_react_default.a.createElement(menu_default.a.SubMenu, {
            key: subMenu.name,
            title: external_react_default.a.createElement("span", null, external_react_default.a.createElement(icon_default.a, {
              type: subMenu.icon
            }), external_react_default.a.createElement("span", null, translate("common:".concat(subMenu.name))))
          }, subMenu.items.map(function (item) {
            return getMenuItem(item);
          }));
        }

        return;
      };

      var menuProps = {};

      if (!this.props.menuCollapsed) {
        menuProps.openKeys = [this.props.openedSubMenu];
      }

      return external_react_default.a.createElement(layout_default.a.Sider, {
        trigger: null,
        collapsible: true,
        collapsed: this.props.menuCollapsed,
        breakpoint: "lg",
        width: this.props.menuWidth,
        collapsedWidth: this.props.collapsedWidth,
        theme: this.props.menuTheme,
        className: "sider"
      }, external_react_default.a.createElement("div", {
        className: "logo",
        id: "logo"
      }, external_react_default.a.createElement("a", {
        href: "#"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/logo-timmay.png",
        alt: "logo"
      }))), external_react_default.a.createElement(menu_default.a, SideBar_extends({
        key: "Menu",
        mode: "inline",
        inlineCollapsed: this.props.menuCollapsed,
        theme: this.props.menuTheme,
        style: {
          padding: '16px 0',
          width: '100%'
        },
        className: "sider",
        onOpenChange: function onOpenChange(openKeys) {
          return _this2.props.openSubMenuChange(openKeys[openKeys.length - 1]);
        },
        selectedKeys: [this.props.selectedMenuItem]
      }, menuProps), Object(core["h" /* getMenuConfigs */])().map(function (item) {
        return getSubMenus(item);
      })));
    }
  }]);

  return SideBarMenu;
}(external_react_default.a.Component);

var mapState = function mapState(rootState) {
  return {
    authUser: rootState.profileModel.authUser
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var SideBar_SideBar = Object(i18n["d" /* withNamespaces */])('common')(Object(store["withRematch"])(store["initStore"], mapState, mapDispatch)(SideBar_SideBarMenu));

// EXTERNAL MODULE: ./layouts/Admin/components/CollapsedButton.less
var components_CollapsedButton = __webpack_require__(116);

// CONCATENATED MODULE: ./layouts/Admin/components/CollapsedButton.tsx




var CollapsedButton_CollapsedButton = function CollapsedButton(props) {
  return external_react_default.a.createElement("span", {
    className: "trigger",
    onClick: props.toggle
  }, external_react_default.a.createElement(icon_default.a, {
    type: props.menuCollapsed ? 'menu-unfold' : 'menu-fold'
  }));
};
// EXTERNAL MODULE: external "antd/lib/avatar/style"
var avatar_style_ = __webpack_require__(95);

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__(80);
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: ./layouts/Admin/components/HeaderDropdown.less
var HeaderDropdown = __webpack_require__(117);

// CONCATENATED MODULE: ./layouts/Admin/components/HeaderDropdown.tsx















var HeaderDropdown_logOut = function logOut() {
  Object(core["j" /* initializeFirebaseApp */])();
  app_default.a.auth().signOut();
  window.location.href = '/auth/logout';
};

var menu = external_react_default.a.createElement(menu_default.a, {
  className: "dropdownMenu",
  selectedKeys: []
}, external_react_default.a.createElement(menu_default.a.Item, {
  key: "homePage"
}, external_react_default.a.createElement("a", {
  href: "/"
}, external_react_default.a.createElement(icon_default.a, {
  type: "home"
}), "\xA0 ", external_react_default.a.createElement("span", null, "Quay l\u1EA1i trang ch\u1EE7"))), external_react_default.a.createElement(menu_default.a.Divider, null), external_react_default.a.createElement(menu_default.a.Item, {
  key: "logout"
}, external_react_default.a.createElement("a", {
  onClick: HeaderDropdown_logOut
}, external_react_default.a.createElement(icon_default.a, {
  type: "logout"
}), "\xA0 ", external_react_default.a.createElement("span", null, "\u0110\u0103ng xu\u1EA5t"))));

var HeaderDropdown_DropdownMenu = function DropdownMenu(props) {
  var avatarUrl = props.authUser && props.authUser.avatarUrl ? props.authUser.avatarUrl : '/static/images/default-avatar.jpg';
  return external_react_default.a.createElement(dropdown_default.a, {
    overlayClassName: "headerDropdown",
    overlay: menu
  }, external_react_default.a.createElement("span", {
    className: "action account"
  }, external_react_default.a.createElement(avatar_default.a, {
    size: "small",
    className: "avatar",
    src: avatarUrl,
    alt: "avatar"
  }), external_react_default.a.createElement("span", {
    className: "name"
  }, props.authUser ? props.authUser.fullName : 'Admin')));
};

var HeaderDropdown_mapState = function mapState(rootState) {
  return {
    authUser: rootState.profileModel.authUser
  };
};

var HeaderDropdown_mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var HeaderDropdown_HeaderDropdown = Object(store["withRematch"])(store["initStore"], HeaderDropdown_mapState, HeaderDropdown_mapDispatch)(HeaderDropdown_DropdownMenu);

// CONCATENATED MODULE: ./layouts/Admin/AdminLayout.tsx











function AdminLayout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AdminLayout_typeof = function _typeof(obj) { return typeof obj; }; } else { AdminLayout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AdminLayout_typeof(obj); }

function AdminLayout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AdminLayout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AdminLayout_createClass(Constructor, protoProps, staticProps) { if (protoProps) AdminLayout_defineProperties(Constructor.prototype, protoProps); if (staticProps) AdminLayout_defineProperties(Constructor, staticProps); return Constructor; }

function AdminLayout_possibleConstructorReturn(self, call) { if (call && (AdminLayout_typeof(call) === "object" || typeof call === "function")) { return call; } return AdminLayout_assertThisInitialized(self); }

function AdminLayout_getPrototypeOf(o) { AdminLayout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AdminLayout_getPrototypeOf(o); }

function AdminLayout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AdminLayout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AdminLayout_setPrototypeOf(subClass, superClass); }

function AdminLayout_setPrototypeOf(o, p) { AdminLayout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AdminLayout_setPrototypeOf(o, p); }

function AdminLayout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var AdminLayout_BaseAdminLayout =
/*#__PURE__*/
function (_React$Component) {
  AdminLayout_inherits(BaseAdminLayout, _React$Component);

  function BaseAdminLayout() {
    var _getPrototypeOf2;

    var _this;

    AdminLayout_classCallCheck(this, BaseAdminLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = AdminLayout_possibleConstructorReturn(this, (_getPrototypeOf2 = AdminLayout_getPrototypeOf(BaseAdminLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    AdminLayout_defineProperty(AdminLayout_assertThisInitialized(_this), "state", {
      openedSubMenu: _this.props.openedSubMenu,
      selectedMenuItem: _this.props.selectedMenuItem,
      menuCollapsed: false,
      isChangingLanguage: false
    });

    AdminLayout_defineProperty(AdminLayout_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        menuCollapsed: !_this.state.menuCollapsed
      });
    });

    AdminLayout_defineProperty(AdminLayout_assertThisInitialized(_this), "openSubMenuChange", function (newOpenedSubMenu) {
      _this.setState({
        openedSubMenu: newOpenedSubMenu
      });
    });

    AdminLayout_defineProperty(AdminLayout_assertThisInitialized(_this), "changeLanguage", function (newLang) {
      _this.setState({
        isChangingLanguage: true
      });

      Object(i18n["b" /* changeLanguage */])(newLang);

      _this.setState({
        isChangingLanguage: false
      });
    });

    return _this;
  }

  AdminLayout_createClass(BaseAdminLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var menuTheme = 'light';
      var menuWidth = 256;
      var collapsedWidth = 80;
      var links = [{
        key: 'Pro Antd',
        title: 'Pro Antd',
        href: 'https://pro.ant.design',
        blankTarget: true
      }, {
        key: 'github',
        title: external_react_default.a.createElement(icon_default.a, {
          type: "github"
        }),
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true
      }, {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true
      }];
      return external_react_default.a.createElement("div", {
        className: "admin-container"
      }, external_react_default.a.createElement(spin_default.a, {
        spinning: this.state.isChangingLanguage
      }, external_react_default.a.createElement(layout_default.a, null, external_react_default.a.createElement(SideBar_SideBar, {
        menuWidth: menuWidth,
        collapsedWidth: collapsedWidth,
        menuTheme: menuTheme,
        openedSubMenu: this.state.openedSubMenu,
        selectedMenuItem: this.state.selectedMenuItem,
        openSubMenuChange: this.openSubMenuChange,
        menuCollapsed: this.state.menuCollapsed
      }), external_react_default.a.createElement(layout_default.a, {
        style: {
          minHeight: '100vh'
        }
      }, external_react_default.a.createElement(layout_default.a.Header, {
        style: {
          padding: 0
        }
      }, external_react_default.a.createElement("div", {
        className: "header"
      }, external_react_default.a.createElement(CollapsedButton_CollapsedButton, {
        menuCollapsed: this.state.menuCollapsed,
        toggle: this.toggle
      }), external_react_default.a.createElement("div", {
        className: "right"
      }, external_react_default.a.createElement(dropdown_default.a, {
        placement: "bottomCenter",
        overlay: external_react_default.a.createElement(menu_default.a, {
          onClick: function onClick(_ref) {
            var key = _ref.key;
            return _this2.changeLanguage(key);
          },
          selectedKeys: [this.props.currentLanguage]
        }, external_react_default.a.createElement(menu_default.a.Item, {
          key: "en"
        }, external_react_default.a.createElement("img", {
          src: "/static/images/en.png",
          style: {
            width: '20px',
            height: '20px'
          }
        }), " \xA0 ", translate("common:en")), external_react_default.a.createElement(menu_default.a.Item, {
          key: "vn"
        }, external_react_default.a.createElement("img", {
          src: "/static/images/vn.png",
          style: {
            width: '20px',
            height: '20px'
          }
        }), " \xA0 ", translate("common:vn")))
      }, external_react_default.a.createElement("span", {
        className: "ant-dropdown-link",
        style: {
          marginRight: '10px',
          cursor: 'pointer'
        }
      }, external_react_default.a.createElement("img", {
        src: "/static/images/".concat(this.props.currentLanguage, ".png"),
        style: {
          width: '20px',
          height: '20px'
        }
      }), " \xA0 ", translate("common:".concat(this.props.currentLanguage)))), external_react_default.a.createElement(HeaderDropdown_HeaderDropdown, null)))), external_react_default.a.createElement(layout_default.a.Content, {
        className: "content"
      }, this.props.children), external_react_default.a.createElement(layout_default.a.Footer, {
        style: {
          padding: 0
        }
      }, external_react_default.a.createElement("footer", {
        className: "footer"
      }, external_react_default.a.createElement("div", {
        className: "links"
      }, links.map(function (link) {
        return external_react_default.a.createElement("a", {
          key: link.key,
          title: link.key,
          target: link.blankTarget ? '_blank' : '_self',
          href: link.href
        }, link.title);
      })), external_react_default.a.createElement("div", {
        className: "copyright"
      }, external_react_default.a.createElement(external_react_["Fragment"], null, "Copyright ", external_react_default.a.createElement(icon_default.a, {
        type: "copyright"
      }), " 2018 - Techkids Software"))))))));
    }
  }]);

  return BaseAdminLayout;
}(external_react_default.a.Component);

var AdminLayout_AdminLayout = Object(i18n["d" /* withNamespaces */])('common')(AdminLayout_BaseAdminLayout);
// CONCATENATED MODULE: ./layouts/index.ts




// CONCATENATED MODULE: ./components/AdminLayout/Authorize.tsx




function Authorize_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Authorize_typeof = function _typeof(obj) { return typeof obj; }; } else { Authorize_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Authorize_typeof(obj); }

function Authorize_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Authorize_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Authorize_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Authorize_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Authorize_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Authorize_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Authorize_createClass(Constructor, protoProps, staticProps) { if (protoProps) Authorize_defineProperties(Constructor.prototype, protoProps); if (staticProps) Authorize_defineProperties(Constructor, staticProps); return Constructor; }

function Authorize_possibleConstructorReturn(self, call) { if (call && (Authorize_typeof(call) === "object" || typeof call === "function")) { return call; } return Authorize_assertThisInitialized(self); }

function Authorize_getPrototypeOf(o) { Authorize_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Authorize_getPrototypeOf(o); }

function Authorize_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Authorize_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Authorize_setPrototypeOf(subClass, superClass); }

function Authorize_setPrototypeOf(o, p) { Authorize_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Authorize_setPrototypeOf(o, p); }

function Authorize_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Authorize_Authorize = function Authorize(Component, permission, authenticationRequired, layoutName) {
  return function (props) {
    var AuthorizeComponent =
    /*#__PURE__*/
    function (_React$Component) {
      Authorize_inherits(AuthorizeComponent, _React$Component);

      function AuthorizeComponent() {
        var _getPrototypeOf2;

        var _this;

        Authorize_classCallCheck(this, AuthorizeComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = Authorize_possibleConstructorReturn(this, (_getPrototypeOf2 = Authorize_getPrototypeOf(AuthorizeComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        Authorize_defineProperty(Authorize_assertThisInitialized(_this), "state", {
          isAuthenticated: undefined,
          isAuthorized: undefined,
          openedSubMenu: '',
          selectedMenuItem: '',
          currentLanguage: ''
        });

        return _this;
      }

      Authorize_createClass(AuthorizeComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          Object(core["j" /* initializeFirebaseApp */])();
          app_default.a.auth().onAuthStateChanged(
          /*#__PURE__*/
          function () {
            var _ref = Authorize_asyncToGenerator(
            /*#__PURE__*/
            regenerator_default.a.mark(function _callee(user) {
              var idTokenInfo, isAuthorized, filterPermission, authUser, pathname, openedSubMenu;
              return regenerator_default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (user) {
                        _context.next = 4;
                        break;
                      }

                      _this2.setState({
                        isAuthenticated: false
                      });

                      _context.next = 10;
                      break;

                    case 4:
                      _context.next = 6;
                      return user.getIdTokenResult();

                    case 6:
                      idTokenInfo = _context.sent;
                      isAuthorized = false;

                      if (!permission || permission.length === 0) {
                        isAuthorized = true;
                      } else if (permission && permission.length && idTokenInfo.claims.permissions) {
                        filterPermission = permission.filter(function (val) {
                          return idTokenInfo.claims.permissions.indexOf(val) === -1;
                        });
                        filterPermission && filterPermission.length ? isAuthorized = false : isAuthorized = true;
                      }

                      if (isAuthorized) {
                        authUser = {
                          id: idTokenInfo.claims.user_id,
                          email: idTokenInfo.claims.email,
                          fullName: idTokenInfo.claims.name,
                          avatarUrl: idTokenInfo.claims.avatarUrl,
                          roles: idTokenInfo.claims.roles,
                          permissions: idTokenInfo.claims.permissions
                        };
                        Object(store["getOrCreateStore"])(store["initStore"], {}).dispatch.profileModel.updateProfileInfo(authUser);
                        pathname = window.location.pathname;
                        openedSubMenu = '';
                        Object(core["h" /* getMenuConfigs */])().map(function (subMenu) {
                          subMenu.items.map(function (item) {
                            if (item.path === pathname) {
                              openedSubMenu = subMenu.name;
                            }
                          });
                        });

                        _this2.setState({
                          isAuthenticated: true,
                          isAuthorized: isAuthorized,
                          openedSubMenu: openedSubMenu,
                          selectedMenuItem: pathname,
                          currentLanguage: i18n["c" /* i18n */].i18n.language ? i18n["c" /* i18n */].i18n.language : config["a" /* config */].i18n.defaultLang
                        });
                      } else {
                        _this2.setState({
                          isAuthenticated: true,
                          isAuthorized: isAuthorized
                        });
                      }

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          if (this.state.isAuthenticated === false) {
            if (authenticationRequired) {
              router_default.a.push('/auth/login');
            }
          }

          if (this.state.isAuthorized === false) {
            router_default.a.push('/_error');
          }

          var renderAdminLayout = function renderAdminLayout() {
            return external_react_default.a.createElement("div", null, _this3.state.isAuthenticated && _this3.state.isAuthorized || !authenticationRequired ? external_react_default.a.createElement(AdminLayout_AdminLayout, {
              openedSubMenu: _this3.state.openedSubMenu,
              selectedMenuItem: _this3.state.selectedMenuItem,
              currentLanguage: _this3.state.currentLanguage
            }, external_react_default.a.createElement(Component, props)) : external_react_default.a.createElement("div", {
              className: "loader"
            }, external_react_default.a.createElement(spin_default.a, {
              spinning: true
            })));
          };

          switch (layoutName) {
            case 'admin':
              return renderAdminLayout();

            default:
              return renderAdminLayout();
          }
        }
      }]);

      return AuthorizeComponent;
    }(external_react_default.a.Component);

    return external_react_default.a.createElement(AuthorizeComponent, null);
  };
};
// CONCATENATED MODULE: ./components/index.ts
/* unused concated harmony import LoginModal */
/* unused concated harmony import RegisterModal */
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "c", function() { return Header_Header; });
/* unused concated harmony import LeftSideBar */
/* unused concated harmony import RightSideBar */
/* concated harmony reexport MainContent */__webpack_require__.d(__webpack_exports__, "d", function() { return MainContent_MainContent; });
/* unused concated harmony import AdminSidebar */
/* concated harmony reexport AdminSearchbar */__webpack_require__.d(__webpack_exports__, "a", function() { return AdminSearchbar; });
/* concated harmony reexport PagingButtons */__webpack_require__.d(__webpack_exports__, "e", function() { return PagingButtons_PagingButtons; });
/* concated harmony reexport Authorize */__webpack_require__.d(__webpack_exports__, "b", function() { return Authorize_Authorize; });


















/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@rematch/core");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin/style");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown/style");

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var MachineItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MachineItem, _React$Component);

  function MachineItem() {
    _classCallCheck(this, MachineItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MachineItem).apply(this, arguments));
  }

  _createClass(MachineItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      var newsState = _core__WEBPACK_IMPORTED_MODULE_7__[/* newsStates */ "k"].filter(function (item) {
        return item.value === _this.props.newsState;
      })[0];
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "grid-post",
        lg: this.props.lg,
        md: this.props.md,
        sm: this.props.sm,
        xs: this.props.xs
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        style: {
          marginBottom: 10
        }
      }, this.props.currentUserId !== this.props.ownerId ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("a", {
        className: "star-following",
        title: "Follow ".concat(this.props.title)
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "star",
        theme: this.props.starStatus,
        onClick: function onClick() {
          return _this.props.changeFollowStatus(_this.props.starStatus, _this.props.id);
        }
      })) : null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("a", {
        href: this.props.linkRedirect,
        title: this.props.title,
        style: {
          backgroundImage: "url('".concat(this.props.imageUrl, "')")
        },
        className: "grid-post-image"
      })), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("a", {
        href: this.props.linkRedirect,
        title: this.props.title,
        className: "grid-post-title"
      }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "grid-post-price"
      }, this.props.price ? Object(_core__WEBPACK_IMPORTED_MODULE_7__[/* formatMoney */ "c"])(Number(this.props.price)) : "".concat(this.props.t('common:contact')))), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
      }, newsState && react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "grid-post-status"
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("em", null, this.props.t("common:".concat(newsState.value.toLowerCase()))))), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        lg: 12,
        md: 12,
        sm: 0,
        xs: 0
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "grid-post-owner-name"
      }, this.props.ownerName))), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "grid-post-location"
      }, this.props.location)), this.props.isShowTotalFollowAndView ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", null, this.props.totalFollow ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "grid-post-location"
      }, this.props.t('common:total-followers'), " : ", this.props.totalFollow)) : null, this.props.totalView ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "grid-post-location"
      }, this.props.t('common:total-views'), " : ", this.props.totalView)) : null) : null)));
    }
  }]);

  return MachineItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__[/* withNamespaces */ "d"])('common')(MachineItem));

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var profileModel = Object(_rematch_core__WEBPACK_IMPORTED_MODULE_0__["createModel"])({
  state: {
    modal: {
      login: false,
      register: false
    },
    authUser: null
  },
  reducers: {
    openModal: function openModal(state, payload) {
      return _objectSpread({}, state, {
        modal: _objectSpread({}, state.modal, _defineProperty({}, payload.modalName, true))
      });
    },
    closeModal: function closeModal(state, payload) {
      return _objectSpread({}, state, {
        modal: _objectSpread({}, state.modal, _defineProperty({}, payload.modalName, false))
      });
    },
    changeModal: function changeModal(state) {
      return _objectSpread({}, state, {
        modal: {
          login: !state.modal.login,
          register: !state.modal.register
        }
      });
    },
    updateProfileInfo: function updateProfileInfo(state, payload) {
      return _objectSpread({}, state, {
        authUser: _objectSpread({}, state.authUser, payload)
      });
    }
  },
  effects: {}
});
/* harmony default export */ __webpack_exports__["a"] = (profileModel);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var followModel = Object(_rematch_core__WEBPACK_IMPORTED_MODULE_3__["createModel"])({
  state: {
    data: [],
    currentTab: 'SELL',
    currentType: 'news'
  },
  reducers: {
    getFollowDataSuccess: function getFollowDataSuccess(state, payload) {
      return _objectSpread({}, state, {
        data: payload.data
      });
    }
  },
  effects: {
    getFollowData: function () {
      var _getFollowData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(payload) {
        var serviceProxies, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__[/* getServiceProxy */ "a"])();
                _context.next = 4;
                return serviceProxies.findFollow(payload.id, payload.type, payload.newsType, payload.first, payload.sortBy, payload.before, payload.after);

              case 4:
                data = _context.sent;
                this.getFollowDataSuccess(data);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function getFollowData(_x) {
        return _getFollowData.apply(this, arguments);
      }

      return getFollowData;
    }(),
    followNews: function () {
      var _followNews = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(payload) {
        var serviceProxies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__[/* getServiceProxy */ "a"])();
                _context2.next = 4;
                return serviceProxies.follow(payload.userId, {
                  operation: 'followNews',
                  payload: {
                    newsId: payload.newsId
                  }
                });

              case 4:
                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success('Theo dõi tin thành công');

                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function followNews(_x2) {
        return _followNews.apply(this, arguments);
      }

      return followNews;
    }(),
    unfollowNews: function () {
      var _unfollowNews = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(payload) {
        var serviceProxies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__[/* getServiceProxy */ "a"])();
                _context3.next = 4;
                return serviceProxies.follow(payload.userId, {
                  operation: 'unfollowNews',
                  payload: {
                    newsId: payload.newsId
                  }
                });

              case 4:
                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success('Bỏ theo dõi tin thành công');

                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function unfollowNews(_x3) {
        return _unfollowNews.apply(this, arguments);
      }

      return unfollowNews;
    }(),
    followUser: function () {
      var _followUser = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(payload) {
        var serviceProxies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__[/* getServiceProxy */ "a"])();
                _context4.next = 4;
                return serviceProxies.follow(payload.authId, {
                  operation: 'followUser',
                  payload: {
                    userId: payload.userId
                  }
                });

              case 4:
                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success('Theo dõi người bán thành công');

                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function followUser(_x4) {
        return _followUser.apply(this, arguments);
      }

      return followUser;
    }(),
    unfollowUser: function () {
      var _unfollowUser = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(payload) {
        var serviceProxies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__[/* getServiceProxy */ "a"])();
                _context5.next = 4;
                return serviceProxies.follow(payload.authId, {
                  operation: 'unfollowUser',
                  payload: {
                    userId: payload.userId
                  }
                });

              case 4:
                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success(' Bỏ theo dõi người bán thành công');

                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function unfollowUser(_x5) {
        return _unfollowUser.apply(this, arguments);
      }

      return unfollowUser;
    }(),
    followShop: function () {
      var _followShop = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(payload) {
        var serviceProxies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__[/* getServiceProxy */ "a"])();
                _context6.next = 4;
                return serviceProxies.follow(payload.authId, {
                  operation: 'followShop',
                  payload: {
                    shopId: payload.shopId
                  }
                });

              case 4:
                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success('Theo dõi cửa hàng thành công');

                _context6.next = 10;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }));

      function followShop(_x6) {
        return _followShop.apply(this, arguments);
      }

      return followShop;
    }(),
    unfollowShop: function () {
      var _unfollowShop = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(payload) {
        var serviceProxies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__[/* getServiceProxy */ "a"])();
                _context7.next = 4;
                return serviceProxies.follow(payload.authId, {
                  operation: 'unfollowShop',
                  payload: {
                    shopId: payload.shopId
                  }
                });

              case 4:
                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success('Bỏ theo dõi cửa hàng thành công');

                _context7.next = 10;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }));

      function unfollowShop(_x7) {
        return _unfollowShop.apply(this, arguments);
      }

      return unfollowShop;
    }()
  }
});
/* harmony default export */ __webpack_exports__["a"] = (followModel);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var searchModel = Object(_rematch_core__WEBPACK_IMPORTED_MODULE_1__["createModel"])({
  state: {
    filters: {
      keyword: undefined,
      state: undefined,
      priceType: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      minWeight: undefined,
      maxWeight: undefined,
      newsType: undefined,
      owner: undefined,
      shop: undefined,
      location: undefined,
      type: undefined,
      brand: undefined,
      model: undefined,
      category: undefined
    },
    data: [],
    first: 16,
    sortBy: 'elasticsearchCreatedAt|desc',
    // fieldName|sortOrder
    before: undefined,
    after: undefined,
    statusNewsTypeSearch: 'SELL',
    statusTab: '1',
    isLoading: false,
    isLoadingDataSell: false,
    isLoadingDataBuy: false,
    isLoadingDataLease: false,
    isLoadingDataMostFollow: false,
    isLoadingDataNewMachine: false,
    dataTotal: {
      dataSell: {
        data: [],
        after: undefined,
        before: undefined
      },
      dataBuy: {
        data: [],
        before: undefined,
        after: undefined
      },
      dataLease: {
        data: [],
        before: undefined,
        after: undefined
      },
      dataMostFollow: {
        data: [],
        before: undefined,
        after: undefined
      },
      dataNewMachine: {
        data: [],
        before: undefined,
        after: undefined
      }
    }
  },
  reducers: {
    onFollowChangeOnSearchDetailScreenSuccess: function onFollowChangeOnSearchDetailScreenSuccess(state, payload) {
      if (payload.starStatus === 'filled') {
        return _objectSpread({}, state, {
          data: state.data.map(function (value) {
            if (value._id === payload.newsId) {
              return _objectSpread({}, value, {
                isFollowing: false
              });
            } else {
              return value;
            }
          })
        });
      } else {
        return _objectSpread({}, state, {
          data: state.data.map(function (value) {
            if (value._id === payload.newsId) {
              return _objectSpread({}, value, {
                isFollowing: true
              });
            } else {
              return value;
            }
          })
        });
      }
    },
    onFollowChangeMostFollowNewsSuccess: function onFollowChangeMostFollowNewsSuccess(state, payload) {
      if (payload.starStatus === 'filled') {
        return _objectSpread({}, state, {
          dataTotal: _objectSpread({}, state.dataTotal, {
            dataMostFollow: _objectSpread({}, state.dataTotal.dataMostFollow, {
              data: state.dataTotal.dataMostFollow.data.map(function (value) {
                if (value._id === payload.newsId) {
                  return _objectSpread({}, value, {
                    isFollowing: false
                  });
                } else {
                  return value;
                }
              })
            })
          })
        });
      } else {
        return _objectSpread({}, state, {
          dataTotal: _objectSpread({}, state.dataTotal, {
            dataMostFollow: _objectSpread({}, state.dataTotal.dataMostFollow, {
              data: state.dataTotal.dataMostFollow.data.map(function (value) {
                if (value._id === payload.newsId) {
                  return _objectSpread({}, value, {
                    isFollowing: true
                  });
                } else {
                  return value;
                }
              })
            })
          })
        });
      }
    },
    onFollowChangeOnHomeScreenSuccess: function onFollowChangeOnHomeScreenSuccess(state, payload) {
      if (payload.starStatus === 'filled') {
        switch (state.statusTab) {
          case '1':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataSell: _objectSpread({}, state.dataTotal.dataSell, {
                  data: state.dataTotal.dataSell.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: false
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          case '2':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataBuy: _objectSpread({}, state.dataTotal.dataBuy, {
                  data: state.dataTotal.dataBuy.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: false
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          case '3':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataLease: _objectSpread({}, state.dataTotal.dataLease, {
                  data: state.dataTotal.dataLease.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: false
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          default:
            return _objectSpread({}, state);
        }
      } else {
        switch (state.statusTab) {
          case '1':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataSell: _objectSpread({}, state.dataTotal.dataSell, {
                  data: state.dataTotal.dataSell.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: true
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          case '2':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataBuy: _objectSpread({}, state.dataTotal.dataBuy, {
                  data: state.dataTotal.dataBuy.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: true
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          case '3':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataLease: _objectSpread({}, state.dataTotal.dataLease, {
                  data: state.dataTotal.dataLease.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: true
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          default:
            return _objectSpread({}, state);
        }
      }
    },
    activeLoading: function activeLoading(state, payload) {
      return _objectSpread({}, state, payload);
    },
    updateFilters: function updateFilters(state, payload) {
      return _objectSpread({}, state, {
        filters: _objectSpread({}, state.filters, payload)
      });
    },
    changeTabsOnHomePage: function changeTabsOnHomePage(state, payload) {
      return _objectSpread({}, state, {
        statusTab: payload
      });
    },
    changeStatusNewsTypeSearch: function changeStatusNewsTypeSearch(state, payload) {
      return _objectSpread({}, state, {
        statusNewsTypeSearch: payload
      });
    },
    updateSort: function updateSort(state, payload) {
      return _objectSpread({}, state, {
        sortBy: payload.sortBy
      });
    },
    getDataSuccess: function getDataSuccess(state, payload) {
      return _objectSpread({}, state, {
        data: payload.data,
        before: payload.before,
        after: payload.after,
        isLoading: false
      });
    },
    getDataInTabsSuccess: function getDataInTabsSuccess(state, payload) {
      switch (payload.newsType) {
        case 'SELL':
          return _objectSpread({}, state, {
            dataTotal: _objectSpread({}, state.dataTotal, {
              dataSell: payload.result
            }),
            isLoadingDataSell: false
          });
          break;

        case 'BUY':
          return _objectSpread({}, state, {
            dataTotal: _objectSpread({}, state.dataTotal, {
              dataBuy: payload.result
            }),
            isLoadingDataBuy: false
          });
          break;

        case 'LEASE':
          return _objectSpread({}, state, {
            dataTotal: _objectSpread({}, state.dataTotal, {
              dataLease: payload.result
            }),
            isLoadingDataLease: false
          });
          break;

        default:
          return _objectSpread({}, state);
      }
    },
    getDataMostFollowSuccess: function getDataMostFollowSuccess(state, payload) {
      return _objectSpread({}, state, {
        dataTotal: _objectSpread({}, state.dataTotal, {
          dataMostFollow: payload
        }),
        isLoadingDataMostFollow: false
      });
    },
    getDataNewMachineSuccess: function getDataNewMachineSuccess(state, payload) {
      return _objectSpread({}, state, {
        dataTotal: _objectSpread({}, state.dataTotal, {
          dataNewMachine: payload
        }),
        isLoadingDataNewMachine: false
      });
    }
  },
  effects: {
    handleFiltersChange: function () {
      var _handleFiltersChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payload, rootState) {
        var searchState, newFilters, serviceProxy, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                searchState = rootState.searchModel;
                newFilters = {
                  keyword: payload.keyword || searchState.filters.keyword,
                  state: typeof payload.state === 'string' ? payload.state : searchState.filters.state,
                  priceType: typeof payload.priceType === 'string' ? payload.priceType : searchState.filters.priceType,
                  minPrice: typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : searchState.filters.minPrice,
                  maxPrice: typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : searchState.filters.maxPrice,
                  weightRange: typeof payload.weightRange === 'string' ? payload.weightRange : searchState.filters.weightRange,
                  newsType: typeof payload.newsType === 'string' ? payload.newsType : searchState.filters.newsType,
                  category: typeof payload.category === 'string' ? payload.category : searchState.filters.category,
                  searchState: payload.owner || searchState.filters.owner,
                  shop: payload.shop || searchState.filters.shop,
                  location: typeof payload.location === 'string' ? payload.location : searchState.filters.location,
                  type: typeof payload.type === 'string' ? payload.type : searchState.filters.type,
                  brand: typeof payload.brand === 'string' ? payload.brand : searchState.filters.brand,
                  model: typeof payload.model === 'string' ? payload.model : searchState.filters.model
                };
                this.updateFilters(newFilters);
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_2__[/* getServiceProxy */ "a"])();
                _context.next = 7;
                return serviceProxy.searchElasticsearch(payload.keyword || searchState.filters.keyword, typeof payload.state === 'string' ? payload.state : searchState.filters.state, typeof payload.state === 'string' ? payload.priceType : searchState.filters.priceType, typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : searchState.filters.minPrice, typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : searchState.filters.maxPrice, typeof payload.weightRange === 'string' ? payload.weightRange : searchState.filters.weightRange, undefined, typeof payload.newsType === 'string' ? payload.newsType : searchState.filters.newsType, typeof payload.category === 'string' ? payload.category : searchState.filters.category, payload.owner || searchState.filters.owner, payload.shop || searchState.filters.shop, typeof payload.location === 'string' ? payload.location : searchState.filters.location, typeof payload.type === 'string' ? payload.type : searchState.filters.type, typeof payload.brand === 'string' ? payload.brand : searchState.filters.brand, typeof payload.model === 'string' ? payload.model : searchState.filters.model, searchState.first, searchState.sortBy, undefined, undefined);

              case 7:
                result = _context.sent;
                this.getDataSuccess(result);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context.t0); // message.error(JSON.parse(error.response).message);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function handleFiltersChange(_x, _x2) {
        return _handleFiltersChange.apply(this, arguments);
      }

      return handleFiltersChange;
    }(),
    handleSortChange: function () {
      var _handleSortChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(payload, rootState) {
        var searchState, serviceProxy, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.updateSort(payload);
                searchState = rootState.searchModel;
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_2__[/* getServiceProxy */ "a"])();
                _context2.next = 6;
                return serviceProxy.searchElasticsearch(searchState.filters.keyword, searchState.filters.state, searchState.filters.priceType, searchState.filters.minPrice, searchState.filters.maxPrice, searchState.filters.weightRange, undefined, searchState.filters.newsType, searchState.filters.category, searchState.filters.owner, searchState.filters.shop, searchState.filters.location, searchState.filters.type, searchState.filters.brand, searchState.filters.model, searchState.first, payload.sortBy, undefined, undefined);

              case 6:
                result = _context2.sent;
                this.getDataSuccess(result);
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context2.t0); // message.error(JSON.parse(error.response).message);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function handleSortChange(_x3, _x4) {
        return _handleSortChange.apply(this, arguments);
      }

      return handleSortChange;
    }(),
    getNextPage: function () {
      var _getNextPage = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_payload, rootState) {
        var searchState, serviceProxy, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                searchState = rootState.searchModel;
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_2__[/* getServiceProxy */ "a"])();
                _context3.next = 5;
                return serviceProxy.searchElasticsearch(searchState.filters.keyword, searchState.filters.state, searchState.filters.priceType, searchState.filters.minPrice, searchState.filters.maxPrice, searchState.filters.weightRange, undefined, searchState.filters.newsType, searchState.filters.category, searchState.filters.owner, searchState.filters.shop, searchState.filters.location, searchState.filters.type, searchState.filters.brand, searchState.filters.model, searchState.first, searchState.sortBy, undefined, searchState.after);

              case 5:
                result = _context3.sent;
                this.getDataSuccess(result);
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context3.t0); // message.error(JSON.parse(error.response).message);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function getNextPage(_x5, _x6) {
        return _getNextPage.apply(this, arguments);
      }

      return getNextPage;
    }(),
    getPrevPage: function () {
      var _getPrevPage = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_payload, rootState) {
        var searchState, serviceProxy, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                searchState = rootState.searchModel;
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_2__[/* getServiceProxy */ "a"])();
                _context4.next = 5;
                return serviceProxy.searchElasticsearch(searchState.filters.keyword, searchState.filters.state, searchState.filters.priceType, searchState.filters.minPrice, searchState.filters.maxPrice, searchState.filters.weightRange, undefined, searchState.filters.newsType, searchState.filters.category, searchState.filters.owner, searchState.filters.shop, searchState.filters.location, searchState.filters.type, searchState.filters.brand, searchState.filters.model, searchState.first, searchState.sortBy, searchState.before, undefined);

              case 5:
                result = _context4.sent;
                this.getDataSuccess(result);
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context4.t0); // message.error(JSON.parse(error.response).message);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      function getPrevPage(_x7, _x8) {
        return _getPrevPage.apply(this, arguments);
      }

      return getPrevPage;
    }()
  }
});
/* harmony default export */ __webpack_exports__["a"] = (searchModel);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var metadataModel = Object(_rematch_core__WEBPACK_IMPORTED_MODULE_0__["createModel"])({
  state: {
    loaded: false,
    brands: [],
    categories: [],
    models: [],
    provinces: [],
    weightRanges: [],
    rentalPeriods: [],
    state: [],
    commonKeywords: []
  },
  reducers: {
    loadMetadataSuccess: function loadMetadataSuccess(state) {
      return _objectSpread({}, state);
    },
    addNewModel: function addNewModel(state, payload) {
      return _objectSpread({}, state, {
        models: [].concat(_toConsumableArray(state.models), [payload])
      });
    }
  },
  effects: {}
});
/* harmony default export */ __webpack_exports__["a"] = (metadataModel);

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/row/style"
var style_ = __webpack_require__(22);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col/style"
var col_style_ = __webpack_require__(24);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(2);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// EXTERNAL MODULE: ./components/CommonLayout/Footer.less
var CommonLayout_Footer = __webpack_require__(100);

// EXTERNAL MODULE: ./components/CommonLayout/Container.less
var CommonLayout_Container = __webpack_require__(101);

// CONCATENATED MODULE: ./components/CommonLayout/Container.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Container_Container =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      return external_react_["createElement"]("div", {
        className: "container"
      }, this.props.children);
    }
  }]);

  return Container;
}(external_react_["Component"]);

/* harmony default export */ var components_CommonLayout_Container = (Container_Container);
// EXTERNAL MODULE: ./i18n/index.ts + 1 modules
var i18n = __webpack_require__(10);

// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(29);

// CONCATENATED MODULE: ./components/CommonLayout/Footer.tsx





function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }






var Fragment = external_react_["Fragment"];

var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  Footer_inherits(Footer, _React$Component);

  function Footer() {
    Footer_classCallCheck(this, Footer);

    return Footer_possibleConstructorReturn(this, Footer_getPrototypeOf(Footer).apply(this, arguments));
  }

  Footer_createClass(Footer, [{
    key: "render",
    value: function render() {
      var translate = this.props.t;
      return external_react_["createElement"]("footer", {
        className: "footer"
      }, external_react_["createElement"](components_CommonLayout_Container, null, external_react_["createElement"](row_default.a, {
        className: "all-link"
      }, !external_react_device_detect_["isMobile"] ? external_react_["createElement"](Fragment, null, external_react_["createElement"](col_default.a, {
        lg: 6,
        md: 6,
        xs: 0,
        sm: 0,
        className: "footer-item"
      }, external_react_["createElement"]("h3", null, translate('common:link')), external_react_["createElement"]("img", {
        src: "/static/images/Facebook.png"
      }), external_react_["createElement"]("span", null, " Facebook"), external_react_["createElement"]("br", null), external_react_["createElement"]("img", {
        src: "/static/images/Youtube.png"
      }), external_react_["createElement"]("span", null, " Youtube"), external_react_["createElement"]("br", null)), external_react_["createElement"](col_default.a, {
        lg: 6,
        md: 6,
        xs: 0,
        sm: 0,
        className: "footer-item"
      }, external_react_["createElement"]("h3", null, translate('common:about-timmay')), external_react_["createElement"]("span", null, translate('common:about-us')), external_react_["createElement"]("br", null), external_react_["createElement"]("span", null, translate('common:contact')), external_react_["createElement"]("br", null)), external_react_["createElement"](col_default.a, {
        lg: 6,
        md: 6,
        xs: 0,
        sm: 0,
        className: "footer-item"
      }, external_react_["createElement"]("h3", null, translate('common:support-customer')), external_react_["createElement"]("span", null, translate('common:central-of-support')), external_react_["createElement"]("br", null), external_react_["createElement"]("span", null, translate('common:posting-regulations')), external_react_["createElement"]("br", null), external_react_["createElement"]("span", null, translate('common:operating-regulations')), external_react_["createElement"]("br", null)), external_react_["createElement"](col_default.a, {
        lg: 6,
        md: 6,
        xs: 24,
        sm: 24,
        className: "footer-item"
      }, external_react_["createElement"]("h3", null, translate('common:certificate')), external_react_["createElement"]("img", {
        src: '/static/images/certificate.png',
        width: "50%"
      }))) : external_react_["createElement"](row_default.a, null, external_react_["createElement"](col_default.a, {
        lg: 24,
        md: 24,
        xs: 24,
        sm: 24,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px'
        }
      }, external_react_["createElement"]("a", {
        href: "#",
        style: {
          marginLeft: '15px'
        }
      }, external_react_["createElement"]("span", null, translate('common:about-us'), " "), external_react_["createElement"]("br", null)), external_react_["createElement"]("a", {
        href: "#",
        style: {
          marginLeft: '15px'
        }
      }, external_react_["createElement"]("span", null, " Facebook "), external_react_["createElement"]("br", null)), external_react_["createElement"]("a", {
        href: "#",
        style: {
          marginLeft: '15px'
        }
      }, external_react_["createElement"]("span", null, translate('common:central-of-support')), external_react_["createElement"]("br", null))), external_react_["createElement"](col_default.a, {
        lg: 24,
        md: 24,
        xs: 24,
        sm: 24,
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }, external_react_["createElement"]("h3", null, translate('common:certificate')), external_react_["createElement"]("img", {
        src: '/static/images/certificate.png',
        width: "50%"
      })))), external_react_["createElement"](row_default.a, {
        style: {
          textAlign: 'center',
          paddingBottom: '20px'
        },
        className: "address"
      }, external_react_["createElement"]("span", null, translate('common:info-footer'), external_react_["createElement"]("br", null), translate('common:info-footer-2'), external_react_["createElement"]("br", null), translate('common:info-footer-3'), external_react_["createElement"]("br", null), translate('common:info-footer-4'))), external_react_["createElement"](row_default.a, {
        className: "license"
      }, external_react_["createElement"]("span", null, " B\u1EA3n quy\u1EC1n thu\u1ED9c v\u1EC1 Timmay.vn "))));
    }
  }]);

  return Footer;
}(external_react_["Component"]);

/* harmony default export */ var components_CommonLayout_Footer = __webpack_exports__["a"] = (Object(i18n["d" /* withNamespaces */])('common')(Footer_Footer));

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrentTime_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(109);
/* harmony import */ var _CurrentTime_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CurrentTime_less__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var timerID;

var CurrentTime =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CurrentTime, _React$Component);

  function CurrentTime(props) {
    var _this;

    _classCallCheck(this, CurrentTime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CurrentTime).call(this, props));
    _this.state = {
      date: new Date()
    };
    return _this;
  }

  _createClass(CurrentTime, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      timerID = setInterval(function () {
        return _this2.tick();
      }, 60000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var vietnameseDay = ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'];
      var day = vietnameseDay[this.state.date.getDay()];
      var date = this.state.date.getDate() < 10 ? "0".concat(this.state.date.getDate()) : this.state.date.getDate();
      var month = this.state.date.getMonth() + 1 < 10 ? "0".concat(this.state.date.getMonth() + 1) : this.state.date.getMonth() + 1;
      var year = this.state.date.getFullYear();
      var hours = this.state.date.getHours() < 10 ? "0".concat(this.state.date.getHours()) : this.state.date.getHours();
      var minutes = this.state.date.getMinutes() < 10 ? "0".concat(this.state.date.getMinutes()) : this.state.date.getMinutes();
      var timeZone = "GMT".concat(this.state.date.getTimezoneOffset() / -60 > 0 ? "+".concat(this.state.date.getTimezoneOffset() / -60) : this.state.date.getTimezoneOffset() / -60);
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "current-time"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "city-time"
      }, "".concat(day, ", ").concat(date, "/").concat(month, "/").concat(year, ", ").concat(hours, ":").concat(minutes, " (").concat(timeZone, ")")));
    }
  }]);

  return CurrentTime;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CurrentTime);

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 58 */,
/* 59 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Router; });
/* harmony import */ var next_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var next_routes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_routes__WEBPACK_IMPORTED_MODULE_0__);

var routes = next_routes__WEBPACK_IMPORTED_MODULE_0___default()();
var Link = routes.Link;
var Router = routes.Router;

/* unused harmony default export */ var _unused_webpack_default_export = (routes);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style");

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _components_CommonLayout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _components_CommonLayout_CurrentTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Fragment = react__WEBPACK_IMPORTED_MODULE_1__["Fragment"];





var CommonLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommonLayout, _React$Component);

  function CommonLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CommonLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CommonLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      commonKeywords: []
    });

    _defineProperty(_assertThisInitialized(_this), "getCommonKeywords",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var serviceProxy, commonKeywords;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_5__[/* getServiceProxy */ "a"])();
              _context.next = 4;
              return serviceProxy.getCommonKeywords(4, 'count|desc', undefined, undefined);

            case 4:
              commonKeywords = _context.sent;

              _this.setState({
                commonKeywords: commonKeywords.data
              });

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    })));

    return _this;
  }

  _createClass(CommonLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCommonKeywords();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Fragment, null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_CommonLayout_CurrentTime__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__[/* Header */ "c"], {
        commonKeywords: this.state.commonKeywords,
        searchKeyword: this.props.searchKeyword,
        updateFilters: this.props.updateFilters,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        fullName: this.props.fullName
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__[/* MainContent */ "d"], {
        topBrands: this.props.topBrands,
        hasSideBar: this.props.hasSideBar,
        hasMenuItems: this.props.hasMenuItems
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          marginBottom: '350px'
        },
        className: "push"
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_CommonLayout_Footer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
    }
  }]);

  return CommonLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CommonLayout);

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag/style");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMobile; });
var isMobile = function isMobile(req) {
  var userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i) ? true : false;
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MachineDetailBox_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94);
/* harmony import */ var _MachineDetailBox_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MachineDetailBox_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MachineItem_MachineItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4);









function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MachineDetailBox =
/*#__PURE__*/
function (_Component) {
  _inherits(MachineDetailBox, _Component);

  function MachineDetailBox() {
    _classCallCheck(this, MachineDetailBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(MachineDetailBox).apply(this, arguments));
  }

  _createClass(MachineDetailBox, [{
    key: "render",
    value: function render() {
      var _this = this;

      var renderMachineDetailList = this.props.data.filter(function (ite) {
        return Boolean(ite);
      }).map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_MachineItem_MachineItem__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          id: item._id,
          key: index,
          lg: _this.props.lg,
          md: _this.props.md,
          sm: _this.props.sm,
          xs: _this.props.xs,
          linkRedirect: item._id ? "/bai-dang/".concat(item._id) : '#',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(_core__WEBPACK_IMPORTED_MODULE_11__[/* getImageUrl */ "g"])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title ? item.title : '',
          price: item.price ? item.price : 0,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this.props.changeFollowStatus,
          totalFollow: item.counterFollow && item.counterFollow !== 0 ? item.counterFollow : undefined,
          totalView: item.counterView && item.counterView !== 0 ? item.counterView : undefined,
          isShowTotalFollowAndView: _this.props.isShowTotalFollowAndView,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this.props.profileState && _this.props.profileState.authUser && _this.props.profileState.authUser.id ? _this.props.profileState.authUser.id : ''
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "title"
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 12,
        type: "flex",
        className: "grid-view"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "button-pagging",
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1
      }, !this.props.hiddenButton ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        disabled: this.props.disabledButtonLeft,
        onClick: this.props.buttonLeft,
        className: "button-left"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "arrow-left"
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 22,
        md: 22,
        sm: 22,
        xs: 22
      }, renderMachineDetailList), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "button-pagging-right",
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1
      }, !this.props.hiddenButton ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        disabled: this.props.disabledButtonRight,
        onClick: this.props.buttonRight,
        className: "button-right"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "arrow-right"
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null))));
    }
  }]);

  return MachineDetailBox;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MachineDetailBox);

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initStore; });
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rematch_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _rematch_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rematch_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var _models_follow_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
/* harmony import */ var _models_metadata_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);





 // loading plugin

var loadingOptions = {};
var loading = _rematch_loading__WEBPACK_IMPORTED_MODULE_1___default()(loadingOptions); // init store

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(_rematch_core__WEBPACK_IMPORTED_MODULE_0__["init"])({
    models: {
      profileModel: _models_profile_model__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
      followModel: _models_follow_model__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
      searchModel: _models_search_model__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
      metadataModel: _models_metadata_model__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
    },
    redux: {
      initialState: initialState
    },
    plugins: [loading]
  });
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getOrCreateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withRematch; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var __NEXT_REMATCH_STORE__ = '__NEXT_REMATCH_STORE__'; // https://github.com/iliakan/detect-node

var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
};

var getOrCreateStore = function getOrCreateStore(initStore, initialState) {
  // Always make a new store if server
  if (checkServer() || typeof window === 'undefined') {
    return initStore(initialState);
  } // Memoize store in global variable if client


  if (!window[__NEXT_REMATCH_STORE__]) {
    window[__NEXT_REMATCH_STORE__] = initStore(initialState);
  }

  return window[__NEXT_REMATCH_STORE__];
};
var withRematch = function withRematch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (Component) {
    // First argument is initStore, the rest are redux connect arguments and get passed
    var initStore = args[0],
        connectArgs = args.slice(1); // Connect page to redux with connect arguments

    var ConnectedComponent = react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"].apply(null, connectArgs)(Component);

    var ComponentWithRematch = function ComponentWithRematch() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState,
          others = _objectWithoutProperties(props, ["store", "initialProps", "initialState"]); // Wrap with redux Provider with store
      // Create connected page with initialProps


      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: store && store.dispatch ? store : getOrCreateStore(initStore, initialState)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ConnectedComponent, _objectSpread({}, initialProps, others)));
    };

    ComponentWithRematch.getInitialProps =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var props,
          isServer,
          authUser,
          shopResult,
          serviceProxy,
          store,
          initialProps,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              props = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              isServer = checkServer();

              if (!isServer) {
                _context.next = 9;
                break;
              }

              authUser = props.req.authUser;
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_3__[/* getServiceProxy */ "a"])(props.req.cookies.token);

              if (!(authUser && authUser.id)) {
                _context.next = 9;
                break;
              }

              _context.next = 8;
              return serviceProxy.findShopByOwner(authUser.id);

            case 8:
              shopResult = _context.sent;

            case 9:
              store = getOrCreateStore(initStore, {
                profileModel: {
                  modal: {
                    login: false,
                    register: false
                  },
                  authUser: authUser ? _objectSpread({}, authUser, {
                    shopDomain: shopResult && shopResult.domain ? shopResult.domain : undefined
                  }) : undefined
                }
              }); // Run page getInitialProps with store and isServer

              if (!Component.getInitialProps) {
                _context.next = 16;
                break;
              }

              _context.next = 13;
              return Component.getInitialProps(_objectSpread({}, props, {
                isServer: isServer,
                store: store
              }));

            case 13:
              _context.t0 = _context.sent;
              _context.next = 17;
              break;

            case 16:
              _context.t0 = {};

            case 17:
              initialProps = _context.t0;
              return _context.abrupt("return", {
                store: store,
                initialState: store.getState(),
                initialProps: initialProps
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return ComponentWithRematch;
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {



/***/ }),
/* 74 */
/***/ (function(module, exports) {



/***/ }),
/* 75 */
/***/ (function(module, exports) {



/***/ }),
/* 76 */
/***/ (function(module, exports) {



/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@rematch/loading");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs/style");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),
/* 81 */,
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_maps_lib_components_places_SearchBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);
/* harmony import */ var react_google_maps_lib_components_places_SearchBox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_places_SearchBox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MapWithSearchBox_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(110);
/* harmony import */ var _MapWithSearchBox_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MapWithSearchBox_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);









var MapWithSearchBox = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(_config__WEBPACK_IMPORTED_MODULE_8__[/* config */ "a"].googleMaps.apiKey, "&libraries=geometry,drawing,places"),
  loadingElement: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      height: "100%",
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, null)),
  containerElement: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      height: "400px"
    }
  }),
  mapElement: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      height: "100%"
    }
  })
}), Object(recompose__WEBPACK_IMPORTED_MODULE_3__["lifecycle"])({
  componentWillMount: function componentWillMount() {
    var _this = this;

    var refs = {};
    this.setState({
      bounds: null,
      center: this.props.geocode ? this.props.geocode : {
        lat: 21.0277644,
        lng: 105.8341598
      },
      markers: [{
        position: this.props.geocode ? this.props.geocode : {
          lat: 21.0277644,
          lng: 105.8341598
        }
      }],
      onMapMounted: function onMapMounted(ref) {
        refs.map = ref;
      },
      onBoundsChanged: function onBoundsChanged() {
        _this.setState({
          bounds: refs.map.getBounds(),
          center: refs.map.getCenter()
        });
      },
      onSearchBoxMounted: function onSearchBoxMounted(ref) {
        refs.searchBox = ref;
      },
      onPlacesChanged: function onPlacesChanged() {
        var places = refs.searchBox.getPlaces();
        var newAddress = places[0]['formatted_address'].indexOf(places[0].name) > -1 ? places[0]['formatted_address'] : "".concat(places[0].name, ", ").concat(places[0]['formatted_address']);

        _this.props.selectAddress('address', newAddress);

        _this.props.selectAddress('geocode', {
          lng: places[0].geometry.location.lng(),
          lat: places[0].geometry.location.lat()
        });

        var bounds = new window.google.maps.LatLngBounds();
        places.forEach(function (place) {
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        var nextMarkers = places.map(function (place) {
          return {
            position: place.geometry.location
          };
        });
        var nextCenter = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(nextMarkers, '0.position', _this.state.center);

        _this.setState({
          center: nextCenter,
          markers: nextMarkers
        });
      }
    });
  }
}), react_google_maps__WEBPACK_IMPORTED_MODULE_4__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_4__["withGoogleMap"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMap"], {
    ref: props.onMapMounted,
    defaultZoom: 16,
    center: props.center,
    onBoundsChanged: props.onBoundsChanged
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps_lib_components_places_SearchBox__WEBPACK_IMPORTED_MODULE_5___default.a, {
    ref: props.onSearchBoxMounted,
    bounds: props.bounds,
    controlPosition: window.google.maps.ControlPosition.TOP_LEFT,
    onPlacesChanged: props.onPlacesChanged
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    defaultValue: props.address,
    placeholder: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 c\u1EEDa h\xE0ng ...",
    style: {
      boxSizing: "border-box",
      border: "1px solid transparent",
      width: "240px",
      height: "32px",
      marginTop: "10px",
      marginLeft: "10px",
      padding: "0 12px",
      borderRadius: "3px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
      fontSize: "14px",
      outline: "none",
      textOverflow: "ellipses"
    }
  })), props.markers.map(function (marker, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
      key: index,
      position: marker.position,
      draggable: true
    });
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (MapWithSearchBox);

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider/style");

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BrandList_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _BrandList_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BrandList_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);





var BrandList = function BrandList(props) {
  var renderBrand = props.featureBrands.map(function (featureBrand, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "brand-image",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "".concat(featureBrand.hyperlink),
      title: featureBrand.brand.name
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: featureBrand.logoImage
    })));
  });
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 1120,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      }
    }, {
      breakpoint: 768,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      }
    }, {
      breakpoint: 425,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      }
    }, {
      breakpoint: 576,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000
      }
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "google",
    content: "notranslate"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/static/images/favicon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Timmay.vn | Ch\u1EE3 m\xE1y c\xF4ng tr\xECnh")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "brand-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, renderBrand)));
};

/* harmony default export */ __webpack_exports__["a"] = (BrandList);

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/places/SearchBox");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("react-firebaseui/StyledFirebaseAuth");

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports) {



/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar/style");

/***/ }),
/* 96 */
/***/ (function(module, exports) {



/***/ }),
/* 97 */
/***/ (function(module, exports) {



/***/ }),
/* 98 */
/***/ (function(module, exports) {



/***/ }),
/* 99 */
/***/ (function(module, exports) {



/***/ }),
/* 100 */
/***/ (function(module, exports) {



/***/ }),
/* 101 */
/***/ (function(module, exports) {



/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge/style");

/***/ }),
/* 103 */
/***/ (function(module, exports) {



/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list/style");

/***/ }),
/* 105 */
/***/ (function(module, exports) {



/***/ }),
/* 106 */
/***/ (function(module, exports) {



/***/ }),
/* 107 */
/***/ (function(module, exports) {



/***/ }),
/* 108 */
/***/ (function(module, exports) {



/***/ }),
/* 109 */
/***/ (function(module, exports) {



/***/ }),
/* 110 */
/***/ (function(module, exports) {



/***/ }),
/* 111 */
/***/ (function(module, exports) {



/***/ }),
/* 112 */
/***/ (function(module, exports) {



/***/ }),
/* 113 */
/***/ (function(module, exports) {



/***/ }),
/* 114 */
/***/ (function(module, exports) {



/***/ }),
/* 115 */
/***/ (function(module, exports) {



/***/ }),
/* 116 */
/***/ (function(module, exports) {



/***/ }),
/* 117 */
/***/ (function(module, exports) {



/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _DetailMachineBoxHorizontal_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(160);
/* harmony import */ var _DetailMachineBoxHorizontal_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_DetailMachineBoxHorizontal_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var DetailMachineBoxHorizontal =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailMachineBoxHorizontal, _Component);

  function DetailMachineBoxHorizontal() {
    _classCallCheck(this, DetailMachineBoxHorizontal);

    return _possibleConstructorReturn(this, _getPrototypeOf(DetailMachineBoxHorizontal).apply(this, arguments));
  }

  _createClass(DetailMachineBoxHorizontal, [{
    key: "render",
    value: function render() {
      var _this = this;

      var translate = this.props.t;
      var newsState = _core__WEBPACK_IMPORTED_MODULE_7__[/* newsStates */ "k"].filter(function (item) {
        return item.value === _this.props.newsState;
      })[0];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 16,
        className: "machine-box-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        lg: 8,
        md: 6,
        xs: 12,
        sm: 12
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: this.props.linkRedirect,
        title: this.props.title,
        style: {
          backgroundImage: "url('".concat(Object(_core__WEBPACK_IMPORTED_MODULE_7__[/* getImageUrl */ "g"])(this.props.imageUrl, 'small'), "')")
        },
        className: "grid-post-image"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "col-info",
        lg: 16,
        md: 18,
        xs: 12,
        sm: 12
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "full-heigh",
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "info-main",
        lg: 20,
        md: 18,
        xs: 24,
        sm: 24
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: this.props.linkRedirect,
        className: "grid-post-title",
        title: this.props.title
      }, this.props.title && react_device_detect__WEBPACK_IMPORTED_MODULE_9__["isMobile"] ? this.props.title.length > 13 ? "".concat(this.props.title, "...") : this.props.title : this.props.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "grid-post-price"
      }, this.props.price ? Object(_core__WEBPACK_IMPORTED_MODULE_7__[/* formatMoney */ "c"])(Number(this.props.price)) : '')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "grid-post-news-info"
      }, newsState && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, translate('common:status'), " ", translate("common:".concat(newsState.value.toLowerCase()))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, this.props.typeOfMachine, " ", this.props.brand ? " | H\xE3ng ".concat(this.props.brand) : ''), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, translate('common:owner'), " ", this.props.owner.fullName || this.props.owner.email || this.props.owner.phoneNo), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, this.props.owner.phoneNo || this.props.owner.email ? "".concat(translate('common:contact-with-colon'), " ").concat(this.props.owner.phoneNo || this.props.owner.email) : ''))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "location-and-following",
        lg: 4,
        md: 6,
        xs: 24,
        sm: 24
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "location"
      }, this.props.location), this.props.currentUserId !== this.props.ownerId ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "star-following",
        theme: this.props.starStatus,
        type: "star",
        onClick: function onClick() {
          return _this.props.changeFollowStatus(_this.props.starStatus, _this.props.id);
        }
      })) : null)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "end-line"
      }));
    }
  }]);

  return DetailMachineBoxHorizontal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__[/* withNamespaces */ "d"])('common')(DetailMachineBoxHorizontal));

/***/ }),
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, exports) {



/***/ }),
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ }),
/* 252 */
/***/ (function(module, exports) {



/***/ }),
/* 253 */
/***/ (function(module, exports) {



/***/ }),
/* 254 */
/***/ (function(module, exports) {



/***/ }),
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/spin/style"
var style_ = __webpack_require__(41);

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(26);
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: external "antd/lib/button/style"
var button_style_ = __webpack_require__(27);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(13);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/row/style"
var row_style_ = __webpack_require__(22);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/tabs/style"
var tabs_style_ = __webpack_require__(78);

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__(36);
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(16);

// EXTERNAL MODULE: ./layouts/Page/CommonLayout.tsx
var CommonLayout = __webpack_require__(64);

// EXTERNAL MODULE: ./components/MachineItem/MachineItem.tsx
var MachineItem = __webpack_require__(48);

// EXTERNAL MODULE: external "antd/lib/col/style"
var col_style_ = __webpack_require__(24);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(2);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./modules/machine-news/screens/FollowedListScreen/components/UserInfo.less
var components_UserInfo = __webpack_require__(252);

// CONCATENATED MODULE: ./modules/machine-news/screens/FollowedListScreen/components/UserInfo.tsx





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var UserInfo_UserInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserInfo, _React$Component);

  function UserInfo() {
    _classCallCheck(this, UserInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserInfo).apply(this, arguments));
  }

  _createClass(UserInfo, [{
    key: "render",
    value: function render() {
      return external_react_["createElement"](row_default.a, {
        className: "user-info"
      }, external_react_["createElement"](col_default.a, {
        lg: 4,
        md: 4,
        sm: 24,
        xs: 24,
        className: "user-avatar",
        style: {
          textAlign: 'center'
        }
      }, external_react_["createElement"]("div", {
        className: "image-dashboard"
      }, external_react_["createElement"]("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundImage: "url(".concat(this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : 'static/images/default-avatar.jpg', ")"),
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }
      }))), external_react_["createElement"](col_default.a, {
        lg: 20,
        md: 20,
        sm: 24,
        xs: 24,
        className: "user-text"
      }, external_react_["createElement"]("span", null, this.props.profileState.authUser.fullName), external_react_["createElement"]("br", null), external_react_["createElement"]("a", {
        href: "/nguoi-dung/".concat(this.props.profileState.authUser.id),
        title: this.props.profileState.authUser.fullName
      }, external_react_["createElement"]("span", null, "Xem trang c\xE1 nh\xE2n"))));
    }
  }]);

  return UserInfo;
}(external_react_["Component"]);

/* harmony default export */ var FollowedListScreen_components_UserInfo = (UserInfo_UserInfo);
// EXTERNAL MODULE: ./modules/machine-news/screens/FollowedListScreen/components/FollowedListTitle.less
var components_FollowedListTitle = __webpack_require__(253);

// CONCATENATED MODULE: ./modules/machine-news/screens/FollowedListScreen/components/FollowedListTitle.tsx



function FollowedListTitle_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FollowedListTitle_typeof = function _typeof(obj) { return typeof obj; }; } else { FollowedListTitle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FollowedListTitle_typeof(obj); }

function FollowedListTitle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FollowedListTitle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FollowedListTitle_createClass(Constructor, protoProps, staticProps) { if (protoProps) FollowedListTitle_defineProperties(Constructor.prototype, protoProps); if (staticProps) FollowedListTitle_defineProperties(Constructor, staticProps); return Constructor; }

function FollowedListTitle_possibleConstructorReturn(self, call) { if (call && (FollowedListTitle_typeof(call) === "object" || typeof call === "function")) { return call; } return FollowedListTitle_assertThisInitialized(self); }

function FollowedListTitle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FollowedListTitle_getPrototypeOf(o) { FollowedListTitle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FollowedListTitle_getPrototypeOf(o); }

function FollowedListTitle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FollowedListTitle_setPrototypeOf(subClass, superClass); }

function FollowedListTitle_setPrototypeOf(o, p) { FollowedListTitle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FollowedListTitle_setPrototypeOf(o, p); }




var FollowedListTitle_FollowedListTitle =
/*#__PURE__*/
function (_React$Component) {
  FollowedListTitle_inherits(FollowedListTitle, _React$Component);

  function FollowedListTitle() {
    FollowedListTitle_classCallCheck(this, FollowedListTitle);

    return FollowedListTitle_possibleConstructorReturn(this, FollowedListTitle_getPrototypeOf(FollowedListTitle).apply(this, arguments));
  }

  FollowedListTitle_createClass(FollowedListTitle, [{
    key: "render",
    value: function render() {
      return external_react_["createElement"](row_default.a, {
        className: "followed-list-title"
      }, external_react_["createElement"]("h3", null, this.props.t('common:followed-news')));
    }
  }]);

  return FollowedListTitle;
}(external_react_["Component"]);

/* harmony default export */ var FollowedListScreen_components_FollowedListTitle = (FollowedListTitle_FollowedListTitle);
// EXTERNAL MODULE: ./modules/machine-news/screens/FollowedListScreen/FollowedListScreen.less
var FollowedListScreen_FollowedListScreen = __webpack_require__(254);

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(6);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(21);

// EXTERNAL MODULE: ./services/index.ts + 1 modules
var services = __webpack_require__(5);

// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(29);

// EXTERNAL MODULE: ./core/index.ts + 20 modules
var core = __webpack_require__(4);

// EXTERNAL MODULE: ./modules/machine-news/screens/SearchDetailsScreen/components/DetailMachineBoxHorizontal.tsx
var DetailMachineBoxHorizontal = __webpack_require__(148);

// EXTERNAL MODULE: ./i18n/index.ts + 1 modules
var i18n = __webpack_require__(10);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(62);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./config/index.ts + 2 modules
var config = __webpack_require__(8);

// CONCATENATED MODULE: ./modules/machine-news/screens/FollowedListScreen/FollowedListScreen.tsx










function FollowedListScreen_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FollowedListScreen_typeof = function _typeof(obj) { return typeof obj; }; } else { FollowedListScreen_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FollowedListScreen_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function FollowedListScreen_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FollowedListScreen_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FollowedListScreen_createClass(Constructor, protoProps, staticProps) { if (protoProps) FollowedListScreen_defineProperties(Constructor.prototype, protoProps); if (staticProps) FollowedListScreen_defineProperties(Constructor, staticProps); return Constructor; }

function FollowedListScreen_possibleConstructorReturn(self, call) { if (call && (FollowedListScreen_typeof(call) === "object" || typeof call === "function")) { return call; } return FollowedListScreen_assertThisInitialized(self); }

function FollowedListScreen_getPrototypeOf(o) { FollowedListScreen_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FollowedListScreen_getPrototypeOf(o); }

function FollowedListScreen_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FollowedListScreen_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FollowedListScreen_setPrototypeOf(subClass, superClass); }

function FollowedListScreen_setPrototypeOf(o, p) { FollowedListScreen_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FollowedListScreen_setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var TabPane = tabs_default.a.TabPane;
var Fragment = external_react_["Fragment"];

var FollowedListScreen_FollowedListScreen_FollowedListScreen =
/*#__PURE__*/
function (_React$Component) {
  FollowedListScreen_inherits(FollowedListScreen, _React$Component);

  function FollowedListScreen() {
    var _getPrototypeOf2;

    var _this;

    FollowedListScreen_classCallCheck(this, FollowedListScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = FollowedListScreen_possibleConstructorReturn(this, (_getPrototypeOf2 = FollowedListScreen_getPrototypeOf(FollowedListScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(FollowedListScreen_assertThisInitialized(_this), "state", {
      sellData: {
        data: _this.props.data.filter(function (item) {
          return item.newsType === core["l" /* newsTypeConst */].SELL;
        }),
        before: undefined,
        after: undefined
      },
      buyData: {
        data: _this.props.data.filter(function (item) {
          return item.newsType === core["l" /* newsTypeConst */].BUY;
        }),
        before: undefined,
        after: undefined
      },
      rentData: {
        data: _this.props.data.filter(function (item) {
          return item.newsType === core["l" /* newsTypeConst */].RENT;
        }),
        before: undefined,
        after: undefined
      },
      leaseData: {
        data: _this.props.data.filter(function (item) {
          return item.newsType === core["l" /* newsTypeConst */].LEASE;
        }),
        before: undefined,
        after: undefined
      },
      currentTab: 'SELL',
      isBusy: false
    });

    _defineProperty(FollowedListScreen_assertThisInitialized(_this), "onNextPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var idToken, serviceProxies, data, _data, _data2, _data3;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                isBusy: true
              });

              _context.next = 3;
              return app_default.a.auth().currentUser.getIdToken();

            case 3:
              idToken = _context.sent;
              serviceProxies = Object(services["a" /* getServiceProxy */])(idToken);

              if (!(_this.state.currentTab === 'SELL')) {
                _context.next = 12;
                break;
              }

              _context.next = 8;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'SELL', 16, '_id', undefined, _this.state.sellData.after);

            case 8:
              data = _context.sent;

              _this.setState({
                sellData: data,
                isBusy: false
              });

              _context.next = 31;
              break;

            case 12:
              if (!(_this.state.currentTab === 'BUY')) {
                _context.next = 19;
                break;
              }

              _context.next = 15;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'BUY', 16, '_id', undefined, _this.state.buyData.after);

            case 15:
              _data = _context.sent;

              _this.setState({
                buyData: _data,
                isBusy: false
              });

              _context.next = 31;
              break;

            case 19:
              if (!(_this.state.currentTab === 'RENT')) {
                _context.next = 26;
                break;
              }

              _context.next = 22;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'RENT', 16, '_id', undefined, _this.state.rentData.after);

            case 22:
              _data2 = _context.sent;

              _this.setState({
                rentData: _data2,
                isBusy: false
              });

              _context.next = 31;
              break;

            case 26:
              if (!(_this.state.currentTab === 'LEASE')) {
                _context.next = 31;
                break;
              }

              _context.next = 29;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'LEASE', 16, '_id', undefined, _this.state.leaseData.after);

            case 29:
              _data3 = _context.sent;

              _this.setState({
                leaseData: _data3,
                isBusy: false
              });

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(FollowedListScreen_assertThisInitialized(_this), "onPreviousPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      var idToken, serviceProxies, data, _data4, _data5, _data6;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                isBusy: true
              });

              _context2.next = 3;
              return app_default.a.auth().currentUser.getIdToken();

            case 3:
              idToken = _context2.sent;
              serviceProxies = Object(services["a" /* getServiceProxy */])(idToken);

              if (!(_this.state.currentTab === 'SELL')) {
                _context2.next = 12;
                break;
              }

              _context2.next = 8;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'SELL', 16, '_id', _this.state.sellData.before, undefined);

            case 8:
              data = _context2.sent;

              _this.setState({
                sellData: data,
                isBusy: false
              });

              _context2.next = 31;
              break;

            case 12:
              if (!(_this.state.currentTab === 'BUY')) {
                _context2.next = 19;
                break;
              }

              _context2.next = 15;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'BUY', 16, '_id', _this.state.buyData.before, undefined);

            case 15:
              _data4 = _context2.sent;

              _this.setState({
                buyData: _data4,
                isBusy: false
              });

              _context2.next = 31;
              break;

            case 19:
              if (!(_this.state.currentTab === 'RENT')) {
                _context2.next = 26;
                break;
              }

              _context2.next = 22;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'RENT', 16, '_id', _this.state.rentData.before, undefined);

            case 22:
              _data5 = _context2.sent;

              _this.setState({
                rentData: _data5,
                isBusy: false
              });

              _context2.next = 31;
              break;

            case 26:
              if (!(_this.state.currentTab === 'LEASE')) {
                _context2.next = 31;
                break;
              }

              _context2.next = 29;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'LEASE', 16, '_id', _this.state.leaseData.before, undefined);

            case 29:
              _data6 = _context2.sent;

              _this.setState({
                leaseData: _data6,
                isBusy: false
              });

            case 31:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(FollowedListScreen_assertThisInitialized(_this), "changeFollowStatus",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(starStatus, id) {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(starStatus === 'filled')) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 3;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 3:
                if (_this.state.currentTab === 'SELL') {
                  _this.setState({
                    sellData: _objectSpread({}, _this.state.sellData, {
                      data: _this.state.sellData.data.filter(function (value) {
                        return value._id !== id;
                      })
                    })
                  });
                } else if (_this.state.currentTab === 'BUY') {
                  _this.setState({
                    buyData: _objectSpread({}, _this.state.buyData, {
                      data: _this.state.buyData.data.filter(function (value) {
                        return value._id !== id;
                      })
                    })
                  });
                } else if (_this.state.currentTab = 'RENT') {
                  _this.setState({
                    rentData: _objectSpread({}, _this.state.rentData, {
                      data: _this.state.rentData.data.filter(function (value) {
                        return value._id !== id;
                      })
                    })
                  });
                } else if (_this.state.currentTab = 'LEASE') {
                  _this.setState({
                    leaseData: _objectSpread({}, _this.state.leaseData, {
                      data: _this.state.leaseData.data.filter(function (value) {
                        return value._id !== id;
                      })
                    })
                  });
                }

                _context3.next = 8;
                break;

              case 6:
                _context3.next = 8;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    return _this;
  }

  FollowedListScreen_createClass(FollowedListScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var renderSellFollowedList = this.state.sellData.data.map(function (item, index) {
        return !external_react_device_detect_["isMobile"] ? external_react_["createElement"](MachineItem["a" /* default */], {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : external_react_["createElement"](DetailMachineBoxHorizontal["a" /* default */], {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId.name,
          brand: item.brand ? item.brand.name : item.brand,
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderBuyFollowedList = this.state.buyData.data.map(function (item, index) {
        return !external_react_device_detect_["isMobile"] ? external_react_["createElement"](MachineItem["a" /* default */], {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : external_react_["createElement"](DetailMachineBoxHorizontal["a" /* default */], {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId ? item.categoryId.name : '',
          brand: item.brand ? item.brand.name : '',
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderRentFollowedList = this.state.rentData.data.map(function (item, index) {
        return !external_react_device_detect_["isMobile"] ? external_react_["createElement"](MachineItem["a" /* default */], {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : external_react_["createElement"](DetailMachineBoxHorizontal["a" /* default */], {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId ? item.categoryId.name : '',
          brand: item.brand ? item.brand.name : '',
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderLeaseFollowedList = this.state.leaseData.data.map(function (item, index) {
        return !external_react_device_detect_["isMobile"] ? external_react_["createElement"](MachineItem["a" /* default */], {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : external_react_["createElement"](DetailMachineBoxHorizontal["a" /* default */], {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId ? item.categoryId.name : '',
          brand: item.brand ? item.brand.name : '',
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      return external_react_["createElement"]("div", {
        className: "followed-list-screen"
      }, external_react_["createElement"](head_default.a, null, external_react_["createElement"]("title", null, "Tin \u0111\xE3 l\u01B0u | timmay.vn"), external_react_["createElement"]("meta", {
        property: "fb:app_id",
        content: config["a" /* config */].facebookAppId
      }), external_react_["createElement"]("meta", {
        property: "og:url",
        content: "timmay.vn"
      }), external_react_["createElement"]("meta", {
        property: "og:type",
        content: "website"
      }), external_react_["createElement"]("meta", {
        property: "og:title",
        content: "C\u1EEDa h\xE0ng c\u1EE7a t\xF4i | timmay.vn"
      }), external_react_["createElement"]("meta", {
        property: "og:image:url",
        content: '/static/images/logo-timmay.png'
      }), external_react_["createElement"]("meta", {
        property: "og:image:width",
        content: "800"
      }), external_react_["createElement"]("meta", {
        property: "og:image:height",
        content: "600"
      })), external_react_["createElement"](CommonLayout["a" /* default */], {
        updateFilters: this.props.updateFilters,
        topBrands: this.props.topBrands,
        searchKeyword: this.props.searchKeyword,
        hasSideBar: true,
        hasMenuItems: true,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }, external_react_["createElement"](spin_default.a, {
        spinning: this.state.isBusy
      }, external_react_["createElement"](row_default.a, null, external_react_["createElement"](FollowedListScreen_components_FollowedListTitle, {
        t: this.props.t
      }), this.props.profileState.authUser && external_react_["createElement"](FollowedListScreen_components_UserInfo, {
        profileState: _objectSpread({}, this.props.profileState, {
          authUser: _objectSpread({}, this.props.profileState.authUser, {
            avatarUrl: this.props.profileData ? this.props.profileData.avatarUrl : undefined
          })
        }),
        t: this.props.t
      })), external_react_["createElement"](tabs_default.a, {
        defaultActiveKey: "SELL",
        tabBarStyle: {
          background: '#fff',
          margin: 0
        },
        onChange: function onChange(activeKey) {
          return _this2.setState({
            currentTab: activeKey
          });
        }
      }, external_react_["createElement"](TabPane, {
        tab: this.props.t('common:sell'),
        key: "SELL"
      }, external_react_["createElement"](row_default.a, {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, this.state.sellData.data.length === 0 ? external_react_["createElement"]("div", {
        className: "no-data"
      }, this.props.t('common:no-data')) : external_react_["createElement"](Fragment, null, renderSellFollowedList)), external_react_["createElement"](row_default.a, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.sellData.before ? external_react_["createElement"](button_default.a, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, external_react_["createElement"]("a", null, this.props.t('common:previous'))) : external_react_["createElement"]("div", null), this.state.sellData.after ? external_react_["createElement"](button_default.a, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, external_react_["createElement"]("a", null, this.props.t('common:next'))) : external_react_["createElement"]("div", null), " ")), external_react_["createElement"](TabPane, {
        tab: this.props.t('common:buy'),
        key: "BUY"
      }, external_react_["createElement"](row_default.a, {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, this.state.buyData.data.length === 0 ? external_react_["createElement"]("div", {
        className: "no-data"
      }, this.props.t('common:no-data')) : external_react_["createElement"](Fragment, null, renderBuyFollowedList)), external_react_["createElement"](row_default.a, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.buyData.before ? external_react_["createElement"](button_default.a, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, external_react_["createElement"]("a", null, this.props.t('common:previous'))) : external_react_["createElement"]("div", null), this.state.buyData.after ? external_react_["createElement"](button_default.a, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, external_react_["createElement"]("a", null, this.props.t('common:next'))) : external_react_["createElement"]("div", null))), external_react_["createElement"](TabPane, {
        tab: this.props.t('common:rent'),
        key: "RENT"
      }, external_react_["createElement"](row_default.a, {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, this.state.rentData.data.length === 0 ? external_react_["createElement"]("div", {
        className: "no-data"
      }, this.props.t('common:no-data')) : external_react_["createElement"](Fragment, null, renderRentFollowedList)), external_react_["createElement"](row_default.a, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.rentData.before ? external_react_["createElement"](button_default.a, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, external_react_["createElement"]("a", null, this.props.t('common:previous'))) : external_react_["createElement"]("div", null), this.state.rentData.after ? external_react_["createElement"](button_default.a, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, external_react_["createElement"]("a", null, this.props.t('common:next'))) : external_react_["createElement"]("div", null))), external_react_["createElement"](TabPane, {
        tab: this.props.t('common:lease'),
        key: "LEASE"
      }, external_react_["createElement"](row_default.a, {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, this.state.leaseData.data.length === 0 ? external_react_["createElement"]("div", {
        className: "no-data"
      }, this.props.t('common:no-data')) : external_react_["createElement"](Fragment, null, renderLeaseFollowedList)), external_react_["createElement"](row_default.a, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.sellData.before ? external_react_["createElement"](button_default.a, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, external_react_["createElement"]("a", null, this.props.t('common:previous'))) : external_react_["createElement"]("div", null), this.state.sellData.after ? external_react_["createElement"](button_default.a, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, external_react_["createElement"]("a", null, this.props.t('common:next'))) : external_react_["createElement"]("div", null)))))));
    }
  }]);

  return FollowedListScreen;
}(external_react_["Component"]);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel,
    followState: rootState.followModel
  };
};

var mapDispatch = function mapDispatch(rootReducer) {
  return {
    profileReducers: rootReducer.profileModel,
    followReducers: rootReducer.followModel
  };
};

/* harmony default export */ var screens_FollowedListScreen_FollowedListScreen = (Object(i18n["d" /* withNamespaces */])('common')(Object(store["withRematch"])(store["initStore"], mapState, mapDispatch)(FollowedListScreen_FollowedListScreen_FollowedListScreen)));
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(33);

// CONCATENATED MODULE: ./pages/followed-list.tsx


function followed_list_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { followed_list_typeof = function _typeof(obj) { return typeof obj; }; } else { followed_list_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return followed_list_typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function followed_list_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function followed_list_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { followed_list_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { followed_list_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function followed_list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function followed_list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function followed_list_createClass(Constructor, protoProps, staticProps) { if (protoProps) followed_list_defineProperties(Constructor.prototype, protoProps); if (staticProps) followed_list_defineProperties(Constructor, staticProps); return Constructor; }

function followed_list_possibleConstructorReturn(self, call) { if (call && (followed_list_typeof(call) === "object" || typeof call === "function")) { return call; } return followed_list_assertThisInitialized(self); }

function followed_list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function followed_list_getPrototypeOf(o) { followed_list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return followed_list_getPrototypeOf(o); }

function followed_list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) followed_list_setPrototypeOf(subClass, superClass); }

function followed_list_setPrototypeOf(o, p) { followed_list_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return followed_list_setPrototypeOf(o, p); }







var followed_list_FollowList =
/*#__PURE__*/
function (_React$Component) {
  followed_list_inherits(FollowList, _React$Component);

  function FollowList() {
    followed_list_classCallCheck(this, FollowList);

    return followed_list_possibleConstructorReturn(this, followed_list_getPrototypeOf(FollowList).apply(this, arguments));
  }

  followed_list_createClass(FollowList, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(screens_FollowedListScreen_FollowedListScreen, {
        commonKeywords: this.props.commonKeywords,
        data: this.props.data,
        searchKeyword: this.props.searchKeyword,
        topBrands: this.props.topBrands,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        updateFilters: this.props.updateFilters,
        profileData: this.props.profileData
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = followed_list_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(context) {
        var followNewsResult, topBrands, profileData, idToken, serviceProxies, _ref, _ref2, _serviceProxies, _ref3, _ref4;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (context.req) {
                  _context.next = 14;
                  break;
                }

                idToken = external_js_cookie_["get"]('token');
                serviceProxies = Object(services["a" /* getServiceProxy */])(idToken);
                _context.next = 5;
                return serviceProxies.findProfile();

              case 5:
                profileData = _context.sent;
                _context.next = 8;
                return Promise.all([serviceProxies.findFollow(profileData._id, 'news', 'SELL', 16, '_id', undefined, undefined), serviceProxies.findTopBrands()]);

              case 8:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 2);
                followNewsResult = _ref2[0];
                topBrands = _ref2[1];
                _context.next = 24;
                break;

              case 14:
                _serviceProxies = Object(services["a" /* getServiceProxy */])(context.req.cookies.token);
                _context.next = 17;
                return _serviceProxies.findProfile();

              case 17:
                profileData = _context.sent;
                _context.next = 20;
                return Promise.all([_serviceProxies.findFollow(profileData._id, 'news', 'SELL', 16, '_id', undefined, undefined), _serviceProxies.findTopBrands()]);

              case 20:
                _ref3 = _context.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                followNewsResult = _ref4[0];
                topBrands = _ref4[1];

              case 24:
                return _context.abrupt("return", {
                  data: followNewsResult.data,
                  topBrands: topBrands.data,
                  profileData: profileData
                });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FollowList;
}(external_react_default.a.Component);

var followed_list_mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel,
    followState: rootState.followModel,
    searchKeyword: rootState.searchModel.filters.keyword,
    commonKeywords: rootState.metadataModel.commonKeywords
  };
};

var followed_list_mapDispatch = function mapDispatch(rootReducer) {
  return {
    profileReducers: rootReducer.profileModel,
    followReducer: rootReducer.followModel,
    updateFilters: rootReducer.searchModel.updateFilters
  };
};

/* harmony default export */ var followed_list = __webpack_exports__["default"] = (Object(store["withRematch"])(store["initStore"], followed_list_mapState, followed_list_mapDispatch)(followed_list_FollowList));

/***/ })
/******/ ]);