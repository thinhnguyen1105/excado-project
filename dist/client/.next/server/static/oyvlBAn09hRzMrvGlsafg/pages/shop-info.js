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
/******/ 	return __webpack_require__(__webpack_require__.s = 275);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 10:
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 155:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavBarStore_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(167);
/* harmony import */ var _NavBarStore_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NavBarStore_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_7__);









var NavBarStore = function NavBarStore(props) {
  var translate = props.t;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "navbar-store"
  }, !react_device_detect__WEBPACK_IMPORTED_MODULE_7__["isMobile"] ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "logo-timmay"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_6__[/* config */ "a"].url.main,
    title: props.shopName
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    className: "image-logo",
    src: "/static/images/logo-timmay.png"
  }))) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "logo-store"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    lg: 12,
    md: 24,
    xs: 24,
    sm: 24,
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    className: "image-logo-store",
    src: props.linkLogoStore ? props.linkLogoStore : '/static/images/icon-shop.png',
    style: {
      height: '42px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    style: {
      fontSize: '24px',
      fontWeight: 550,
      marginLeft: '12px'
    }
  }, props.shopName)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    lg: 12,
    md: 0,
    xs: 0,
    sm: 0
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "link-redirect"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_6__[/* config */ "a"].url.main,
    title: props.shopName,
    className: "home-page"
  }, translate('common:home')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    className: "all-product",
    href: '/bai-dang-cua-hang',
    title: props.shopName
  }, translate('common:all-products')))))));
};

/* harmony default export */ __webpack_exports__["a"] = (NavBarStore);

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/row/style"
var style_ = __webpack_require__(22);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/SeeMost.less
var components_SeeMost = __webpack_require__(168);

// EXTERNAL MODULE: external "antd/lib/col/style"
var col_style_ = __webpack_require__(24);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(2);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./core/index.ts + 20 modules
var core = __webpack_require__(4);

// EXTERNAL MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/DetailMachineBoxHorizontal.less
var components_DetailMachineBoxHorizontal = __webpack_require__(169);

// EXTERNAL MODULE: ./i18n/index.ts + 1 modules
var i18n = __webpack_require__(10);

// CONCATENATED MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/DetailMachineBoxHorizontal.tsx





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var DetailMachineBoxHorizontal_DetailMachineBoxHorizontal =
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
      var newsState = core["k" /* newsStates */].filter(function (item) {
        return item.value === _this.props.statusMachine;
      })[0];
      var newsType = core["m" /* newsTypes */].filter(function (item) {
        return item.value === _this.props.typeOfMachine;
      })[0];
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("a", {
        style: {
          color: 'black'
        },
        href: this.props.linkRedirect,
        title: this.props.title
      }, external_react_default.a.createElement(row_default.a, {
        gutter: 16
      }, external_react_default.a.createElement(col_default.a, {
        lg: 8,
        md: 6,
        xs: 12,
        sm: 12
      }, external_react_default.a.createElement("a", {
        style: {
          backgroundImage: "url('".concat(this.props.imageUrl, "')")
        },
        className: "grid-post-image"
      })), external_react_default.a.createElement(col_default.a, {
        className: "col-info",
        lg: 16,
        md: 18,
        xs: 12,
        sm: 12
      }, external_react_default.a.createElement(row_default.a, {
        className: "info-main"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
        href: this.props.linkRedirect,
        className: "grid-post-title",
        title: this.props.title
      }, this.props.title), external_react_default.a.createElement("div", {
        className: "grid-post-price"
      }, this.props.price ? Object(core["c" /* formatMoney */])(Number(this.props.price)) : '')), external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, translate("common:".concat(newsState.value.toLowerCase()))), external_react_default.a.createElement("div", null, newsType && newsType.label, " | ", translate('common:brand-name'), " ", this.props.brand), external_react_default.a.createElement("div", null, this.props.location), this.props.isShowTotalFollowAndView ? external_react_default.a.createElement("div", null, this.props.counterView ? external_react_default.a.createElement("div", null, translate('common:counter-view-text'), ": ", this.props.counterView) : null, this.props.counterFollow ? external_react_default.a.createElement("div", null, " ", translate('common:counter-follow-text'), ": ", this.props.counterFollow) : null) : null))))), external_react_default.a.createElement("hr", {
        className: "end-line"
      }));
    }
  }]);

  return DetailMachineBoxHorizontal;
}(external_react_["Component"]);

/* harmony default export */ var ShopInfoScreen_components_DetailMachineBoxHorizontal = (Object(i18n["d" /* withNamespaces */])('common')(DetailMachineBoxHorizontal_DetailMachineBoxHorizontal));
// CONCATENATED MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/SeeMost.tsx



function SeeMost_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SeeMost_typeof = function _typeof(obj) { return typeof obj; }; } else { SeeMost_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SeeMost_typeof(obj); }

function SeeMost_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SeeMost_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SeeMost_createClass(Constructor, protoProps, staticProps) { if (protoProps) SeeMost_defineProperties(Constructor.prototype, protoProps); if (staticProps) SeeMost_defineProperties(Constructor, staticProps); return Constructor; }

function SeeMost_possibleConstructorReturn(self, call) { if (call && (SeeMost_typeof(call) === "object" || typeof call === "function")) { return call; } return SeeMost_assertThisInitialized(self); }

function SeeMost_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SeeMost_getPrototypeOf(o) { SeeMost_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SeeMost_getPrototypeOf(o); }

function SeeMost_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SeeMost_setPrototypeOf(subClass, superClass); }

function SeeMost_setPrototypeOf(o, p) { SeeMost_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SeeMost_setPrototypeOf(o, p); }






var SeeMost_SeeMost =
/*#__PURE__*/
function (_Component) {
  SeeMost_inherits(SeeMost, _Component);

  function SeeMost() {
    SeeMost_classCallCheck(this, SeeMost);

    return SeeMost_possibleConstructorReturn(this, SeeMost_getPrototypeOf(SeeMost).apply(this, arguments));
  }

  SeeMost_createClass(SeeMost, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(row_default.a, {
        className: "out-line-see-most"
      }, external_react_default.a.createElement(row_default.a, {
        className: "title"
      }, external_react_default.a.createElement("strong", null, this.props.title)), external_react_default.a.createElement(row_default.a, {
        className: "body"
      }, this.props.dataMachine.length === 0 ? external_react_default.a.createElement("div", null, "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u") : external_react_default.a.createElement("div", null, this.props.dataMachine.map(function (item, index) {
        return external_react_default.a.createElement(ShopInfoScreen_components_DetailMachineBoxHorizontal, {
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price ? item.price : 0,
          linkRedirect: item._id ? "/bai-dang-cua-hang/".concat(item._id) : '',
          location: item.location.name,
          statusMachine: item.state,
          isFollowing: true,
          typeOfMachine: item.newsType,
          brand: item.brand.name,
          owner: item.owner.name,
          isShowTotalFollowAndView: true,
          counterFollow: item.counterFollow,
          counterView: item.counterView
        });
      }))));
    }
  }]);

  return SeeMost;
}(external_react_["Component"]);

/* harmony default export */ var ShopInfoScreen_components_SeeMost = __webpack_exports__["a"] = (SeeMost_SeeMost);

/***/ }),

/***/ 16:
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

/***/ 167:
/***/ (function(module, exports) {



/***/ }),

/***/ 168:
/***/ (function(module, exports) {



/***/ }),

/***/ 169:
/***/ (function(module, exports) {



/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Map_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(191);
/* harmony import */ var _Map_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Map_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var MyMapComponent = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["withGoogleMap"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMap"], {
    defaultZoom: 16,
    defaultCenter: props.locationGeocode
  }, props.isMarkerShown && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["Marker"], {
    position: props.locationGeocode
  }));
}));

var Map =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Map)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      locationGeocode: _this.props.geocode ? _this.props.geocode : {
        lat: 21.0277644,
        lng: 105.8341598
      }
    });

    return _this;
  }

  _createClass(Map, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "outline-map"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("strong", null, this.props.t('shop-info:map'))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MyMapComponent, {
        isMarkerShown: true,
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(_config__WEBPACK_IMPORTED_MODULE_7__[/* config */ "a"].googleMaps.apiKey, "&libraries=geometry,drawing,places"),
        locationGeocode: this.state.locationGeocode,
        loadingElement: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: {
            height: "100%",
            textAlign: 'center'
          }
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, null)),
        containerElement: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: {
            height: "400px"
          }
        }),
        mapElement: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: {
            height: "100%"
          }
        })
      }));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__[/* withNamespaces */ "d"])('shop-info')(Map));

/***/ }),

/***/ 191:
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ }),

/***/ 276:
/***/ (function(module, exports) {



/***/ }),

/***/ 277:
/***/ (function(module, exports) {



/***/ }),

/***/ 278:
/***/ (function(module, exports) {



/***/ }),

/***/ 279:
/***/ (function(module, exports) {



/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("@rematch/core");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/message/style"
var style_ = __webpack_require__(31);

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(3);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/NavBarStore.tsx
var NavBarStore = __webpack_require__(155);

// EXTERNAL MODULE: external "antd/lib/row/style"
var row_style_ = __webpack_require__(22);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/button/style"
var button_style_ = __webpack_require__(27);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(13);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/icon/style"
var icon_style_ = __webpack_require__(18);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(12);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/col/style"
var col_style_ = __webpack_require__(24);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(2);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/ShopInfoDetails.less
var components_ShopInfoDetails = __webpack_require__(276);

// EXTERNAL MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/InformationStore.less
var components_InformationStore = __webpack_require__(277);

// CONCATENATED MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/InformationStore.tsx



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var InformationStore_InformationStore =
/*#__PURE__*/
function (_Component) {
  _inherits(InformationStore, _Component);

  function InformationStore() {
    _classCallCheck(this, InformationStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(InformationStore).apply(this, arguments));
  }

  _createClass(InformationStore, [{
    key: "render",
    value: function render() {
      var translate = this.props.t;
      return external_react_default.a.createElement(row_default.a, {
        className: "outline-information-store"
      }, external_react_default.a.createElement(row_default.a, {
        className: "title"
      }, external_react_default.a.createElement("strong", null, this.props.title)), external_react_default.a.createElement(row_default.a, {
        className: "details"
      }, external_react_default.a.createElement("div", {
        className: "shop-info"
      }, external_react_default.a.createElement("strong", null, translate('shop-info:address'), ": "), this.props.address), external_react_default.a.createElement("div", {
        className: "shop-info"
      }, external_react_default.a.createElement("strong", null, translate('shop-info:phone'), ": "), this.props.phoneNumber), external_react_default.a.createElement("div", {
        className: "shop-info"
      }, external_react_default.a.createElement("strong", null, "Email: "), this.props.email), external_react_default.a.createElement("div", {
        className: "shop-info"
      }, external_react_default.a.createElement("strong", null, "Website: "), this.props.website), external_react_default.a.createElement("div", {
        className: "shop-info"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, translate('shop-info:info'), ": ")), external_react_default.a.createElement("div", {
        style: {
          wordBreak: 'break-word',
          whiteSpace: 'pre-line',
          padding: '0px 20px'
        }
      }, this.props.describe))));
    }
  }]);

  return InformationStore;
}(external_react_["Component"]);

/* harmony default export */ var ShopInfoScreen_components_InformationStore = (InformationStore_InformationStore);
// EXTERNAL MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/ShopIntroImages.less
var components_ShopIntroImages = __webpack_require__(278);

// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(29);

// CONCATENATED MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/ShopIntroImages.tsx








var ShopIntroImages_ShopIntroImages = function ShopIntroImages(props) {
  return external_react_default.a.createElement(row_default.a, {
    className: "outline-public-image-store"
  }, external_react_default.a.createElement(row_default.a, {
    className: "title"
  }, external_react_default.a.createElement("strong", null, props.title)), props.introImages && props.introImages.length > 0 ? external_react_default.a.createElement(row_default.a, {
    gutter: !external_react_device_detect_["isMobile"] ? 10 : 0,
    className: "image"
  }, external_react_default.a.createElement(col_default.a, {
    lg: 12,
    md: 12,
    xs: 24,
    sm: 24
  }, external_react_default.a.createElement("a", {
    style: {
      backgroundImage: "url('".concat(props.introImages[0], "')")
    },
    className: "grid-post-image"
  })), external_react_default.a.createElement(col_default.a, {
    lg: 12,
    md: 12,
    xs: 24,
    sm: 24
  }, external_react_default.a.createElement(row_default.a, {
    gutter: !external_react_device_detect_["isMobile"] ? 10 : 0
  }, props.introImages.slice(1).map(function (item, index) {
    return external_react_default.a.createElement(col_default.a, {
      lg: 8,
      md: 8,
      xs: 12,
      sm: 24,
      key: index
    }, external_react_default.a.createElement("a", {
      style: {
        backgroundImage: "url('".concat(item, "')")
      },
      className: "grid-post-image-small"
    }));
  })))) : external_react_default.a.createElement(row_default.a, {
    className: "image"
  }, external_react_default.a.createElement(col_default.a, {
    xs: 24
  }, "C\u1EEDa h\xE0ng ch\u01B0a c\u1EADp nh\u1EADt h\xECnh \u1EA3nh ti\xEAu bi\u1EC3u")));
};

/* harmony default export */ var ShopInfoScreen_components_ShopIntroImages = (ShopIntroImages_ShopIntroImages);
// EXTERNAL MODULE: external "antd/lib/tabs/style"
var tabs_style_ = __webpack_require__(78);

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__(36);
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: ./components/MachineItem/MachineItem.tsx
var MachineItem = __webpack_require__(48);

// EXTERNAL MODULE: ./components/MachineDetailBox/MachineDetailBox.less
var MachineDetailBox = __webpack_require__(94);

// EXTERNAL MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/DetailsProduct.less
var components_DetailsProduct = __webpack_require__(279);

// EXTERNAL MODULE: ./core/index.ts + 20 modules
var core = __webpack_require__(4);

// CONCATENATED MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/DetailsProduct.tsx









var TabPane = tabs_default.a.TabPane;

var DetailsProduct_DetailsProduct = function DetailsProduct(props) {
  var translate = props.t;
  return external_react_default.a.createElement(tabs_default.a, {
    className: "tab",
    defaultActiveKey: "1"
  }, external_react_default.a.createElement(TabPane, {
    tab: translate('shop-info:public-news'),
    key: "1"
  }, props.data && props.data.length > 0 ? props.data.map(function (item, index) {
    return external_react_default.a.createElement(MachineItem["a" /* default */], {
      key: index,
      id: item._id,
      starStatus: item.isFollowing ? 'filled' : 'outlined',
      changeFollowStatus: props.changeFollowStatus,
      lg: 8,
      md: 8,
      sm: 12,
      xs: 24,
      linkRedirect: "/bai-dang-cua-hang/".concat(item._id),
      imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(core["g" /* getImageUrl */])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
      title: item.title,
      price: item.price,
      newsState: item.state,
      location: item.location.name,
      ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : 'test',
      ownerId: item.owner ? item.owner._id : '',
      currentUserId: props.profileState && props.profileState.authUser && props.profileState.authUser.id ? props.profileState.authUser.id : ''
    });
  }) : external_react_default.a.createElement("div", {
    className: "noti-store-no-data"
  }, translate('shop-info:no-data')), external_react_default.a.createElement("a", {
    href: "/bai-dang-cua-hang"
  }, external_react_default.a.createElement(button_default.a, {
    type: "primary",
    className: "button-see-more"
  }, translate('shop-info:more').toUpperCase()))));
};

/* harmony default export */ var ShopInfoScreen_components_DetailsProduct = (DetailsProduct_DetailsProduct);
// EXTERNAL MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/Map.tsx
var Map = __webpack_require__(183);

// EXTERNAL MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/SeeMost.tsx + 1 modules
var SeeMost = __webpack_require__(156);

// CONCATENATED MODULE: ./modules/machine-news/screens/ShopInfoScreen/components/ShopInfoDetails.tsx


















var ShopInfoDetails_ShopInfoDetails = function ShopInfoDetails(props) {
  var translate = props.t;
  return external_react_default.a.createElement(row_default.a, {
    className: "outline-body",
    gutter: !external_react_device_detect_["isMobile"] ? 16 : 0
  }, external_react_default.a.createElement(col_default.a, {
    lg: 16,
    md: 24,
    xs: 24,
    sm: 24
  }, external_react_default.a.createElement(ShopInfoScreen_components_InformationStore, {
    title: props.shopInfo.name,
    address: props.shopInfo.address,
    email: props.shopInfo.email,
    website: Object(core["i" /* getShopUrl */])(props.shopInfo.domain),
    describe: props.shopInfo.description,
    phoneNumber: props.shopInfo.phone,
    t: props.t
  }), external_react_default.a.createElement(ShopInfoScreen_components_ShopIntroImages, {
    title: translate('shop-info:feature-images'),
    introImages: props.shopInfo.introImages
  }), external_react_default.a.createElement(ShopInfoScreen_components_DetailsProduct, {
    t: props.t,
    data: props.newsData,
    profileState: props.profileState,
    changeFollowStatus: props.changeFollowItemStatus
  })), external_react_default.a.createElement(col_default.a, {
    lg: 8,
    md: 24,
    xs: 24,
    sm: 24
  }, props.profileState && props.profileState.authUser && props.profileState.authUser.id !== props.shopInfo.owner ? external_react_default.a.createElement(row_default.a, {
    gutter: !external_react_device_detect_["isMobile"] ? 10 : 0,
    style: {
      marginBottom: '12px',
      marginLeft: '0px',
      marginRight: '0px'
    }
  }, external_react_default.a.createElement(col_default.a, {
    lg: 12,
    md: 12,
    xs: 12,
    sm: 12,
    style: {
      paddingLeft: '0px',
      paddingRight: '0px'
    }
  }, external_react_default.a.createElement(button_default.a, {
    className: "button-follow",
    onClick: function onClick() {
      return props.changeFollowStatus(props.starStatus, props.shopInfo._id);
    }
  }, external_react_default.a.createElement(icon_default.a, {
    type: "star",
    theme: props.starStatus
  }), props.starStatus === 'filled' ? translate('shop-info:unfollow') : translate('shop-info:follow'))), external_react_default.a.createElement(col_default.a, {
    lg: 12,
    md: 12,
    xs: 12,
    sm: 12,
    style: {
      paddingLeft: '0px',
      paddingRight: '0px'
    }
  }, external_react_default.a.createElement(button_default.a, {
    className: "send-message-button",
    type: "primary",
    icon: "message"
  }, translate('shop-info:mess')))) : null, external_react_default.a.createElement(Map["a" /* default */], {
    location: props.shopInfo.address,
    geocode: props.shopInfo.geocode
  }), external_react_default.a.createElement(SeeMost["a" /* default */], {
    title: translate('shop-info:most-viewed'),
    dataMachine: props.resultSearchNewestPost.data
  })));
};

/* harmony default export */ var ShopInfoScreen_components_ShopInfoDetails = (ShopInfoDetails_ShopInfoDetails);
// EXTERNAL MODULE: ./i18n/index.ts + 1 modules
var i18n = __webpack_require__(10);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(62);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./config/index.ts + 2 modules
var config = __webpack_require__(8);

// CONCATENATED MODULE: ./modules/machine-news/screens/ShopInfoScreen/ShopInfoScreen.tsx




function ShopInfoScreen_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ShopInfoScreen_typeof = function _typeof(obj) { return typeof obj; }; } else { ShopInfoScreen_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ShopInfoScreen_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ShopInfoScreen_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ShopInfoScreen_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ShopInfoScreen_createClass(Constructor, protoProps, staticProps) { if (protoProps) ShopInfoScreen_defineProperties(Constructor.prototype, protoProps); if (staticProps) ShopInfoScreen_defineProperties(Constructor, staticProps); return Constructor; }

function ShopInfoScreen_possibleConstructorReturn(self, call) { if (call && (ShopInfoScreen_typeof(call) === "object" || typeof call === "function")) { return call; } return ShopInfoScreen_assertThisInitialized(self); }

function ShopInfoScreen_getPrototypeOf(o) { ShopInfoScreen_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ShopInfoScreen_getPrototypeOf(o); }

function ShopInfoScreen_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ShopInfoScreen_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ShopInfoScreen_setPrototypeOf(subClass, superClass); }

function ShopInfoScreen_setPrototypeOf(o, p) { ShopInfoScreen_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ShopInfoScreen_setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ShopInfoScreen_ShopInfoScreen =
/*#__PURE__*/
function (_Component) {
  ShopInfoScreen_inherits(ShopInfoScreen, _Component);

  function ShopInfoScreen() {
    var _getPrototypeOf2;

    var _this;

    ShopInfoScreen_classCallCheck(this, ShopInfoScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ShopInfoScreen_possibleConstructorReturn(this, (_getPrototypeOf2 = ShopInfoScreen_getPrototypeOf(ShopInfoScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(ShopInfoScreen_assertThisInitialized(_this), "state", {
      shopInfo: _this.props.shopInfo,
      newsData: _this.props.newsData
    });

    _defineProperty(ShopInfoScreen_assertThisInitialized(_this), "changeFollowShopStatus",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(starStatus, id) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context.next = 12;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return _this.props.followReducers.unfollowShop({
                  authId: _this.props.profileState.authUser.id,
                  shopId: id
                });

              case 4:
                _this.setState({
                  shopInfo: _objectSpread({}, _this.state.shopInfo, {
                    isFollowing: false
                  })
                });

                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return _this.props.followReducers.followShop({
                  authId: _this.props.profileState.authUser.id,
                  shopId: id
                });

              case 9:
                _this.setState({
                  shopInfo: _objectSpread({}, _this.state.shopInfo, {
                    isFollowing: true
                  })
                });

              case 10:
                _context.next = 13;
                break;

              case 12:
                message_default.a.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(ShopInfoScreen_assertThisInitialized(_this), "changeFollowItemStatus",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(starStatus, id) {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context2.next = 12;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _this.setState({
                  newsData: _this.state.newsData.map(function (value) {
                    if (value._id === id) {
                      return _objectSpread({}, value, {
                        isFollowing: false
                      });
                    } else {
                      return value;
                    }
                  })
                });

                _context2.next = 10;
                break;

              case 7:
                _context2.next = 9;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 9:
                _this.setState({
                  newsData: _this.state.newsData.map(function (value) {
                    if (value._id === id) {
                      return _objectSpread({}, value, {
                        isFollowing: true
                      });
                    } else {
                      return value;
                    }
                  })
                });

              case 10:
                _context2.next = 13;
                break;

              case 12:
                message_default.a.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  ShopInfoScreen_createClass(ShopInfoScreen, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "".concat(this.props.shopInfo.name, "| timmay.vn")), external_react_default.a.createElement("meta", {
        property: "fb:app_id",
        content: config["a" /* config */].facebookAppId
      }), external_react_default.a.createElement("meta", {
        property: "description",
        content: this.props.shopInfo.description
      }), external_react_default.a.createElement("meta", {
        property: "og:url",
        content: Object(core["i" /* getShopUrl */])(this.props.shopInfo.domain)
      }), external_react_default.a.createElement("meta", {
        property: "og:type",
        content: "website"
      }), external_react_default.a.createElement("meta", {
        property: "og:title",
        content: "C\u1EEDa h\xE0ng ".concat(this.props.shopInfo.name, " | timmay.vn")
      }), external_react_default.a.createElement("meta", {
        property: "og:description",
        content: this.props.shopInfo.description
      }), external_react_default.a.createElement("meta", {
        property: "og:image:url",
        content: this.props.shopInfo.introImages.length > 0 ? this.props.shopInfo.introImages[0] : '/static/images/logo-timmay.png'
      }), external_react_default.a.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), external_react_default.a.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), external_react_default.a.createElement(NavBarStore["a" /* default */], {
        linkLogoStore: this.props.shopInfo.logoImage,
        shopName: this.props.shopInfo.name,
        t: this.props.t
      }), external_react_default.a.createElement(ShopInfoScreen_components_ShopInfoDetails, {
        newsData: this.state.newsData,
        shopInfo: this.state.shopInfo,
        starStatus: this.state.shopInfo.isFollowing ? 'filled' : '',
        changeFollowStatus: this.changeFollowShopStatus,
        resultSearchNewestPost: this.props.resultSearchNewestPost,
        changeFollowItemStatus: this.changeFollowItemStatus,
        profileState: this.props.profileState,
        t: this.props.t
      }));
    }
  }]);

  return ShopInfoScreen;
}(external_react_["Component"]);

/* harmony default export */ var screens_ShopInfoScreen_ShopInfoScreen = (Object(i18n["d" /* withNamespaces */])('shop-info')(ShopInfoScreen_ShopInfoScreen));
// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(16);

// EXTERNAL MODULE: ./services/index.ts + 1 modules
var services = __webpack_require__(5);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(33);

// CONCATENATED MODULE: ./pages/shop-info.tsx


function shop_info_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { shop_info_typeof = function _typeof(obj) { return typeof obj; }; } else { shop_info_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return shop_info_typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function shop_info_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function shop_info_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { shop_info_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { shop_info_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function shop_info_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function shop_info_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function shop_info_createClass(Constructor, protoProps, staticProps) { if (protoProps) shop_info_defineProperties(Constructor.prototype, protoProps); if (staticProps) shop_info_defineProperties(Constructor, staticProps); return Constructor; }

function shop_info_possibleConstructorReturn(self, call) { if (call && (shop_info_typeof(call) === "object" || typeof call === "function")) { return call; } return shop_info_assertThisInitialized(self); }

function shop_info_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function shop_info_getPrototypeOf(o) { shop_info_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return shop_info_getPrototypeOf(o); }

function shop_info_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) shop_info_setPrototypeOf(subClass, superClass); }

function shop_info_setPrototypeOf(o, p) { shop_info_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return shop_info_setPrototypeOf(o, p); }







var shop_info_ShopInfo =
/*#__PURE__*/
function (_Component) {
  shop_info_inherits(ShopInfo, _Component);

  function ShopInfo() {
    shop_info_classCallCheck(this, ShopInfo);

    return shop_info_possibleConstructorReturn(this, shop_info_getPrototypeOf(ShopInfo).apply(this, arguments));
  }

  shop_info_createClass(ShopInfo, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(screens_ShopInfoScreen_ShopInfoScreen, {
        newsData: this.props.newsData,
        shopInfo: this.props.shopInfo,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        followState: this.props.followState,
        followReducers: this.props.followReducers,
        resultSearchNewestPost: this.props.resultSearchNewestPost
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = shop_info_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(context) {
        var serviceProxy, idToken, _ref, _ref2, newsData, resultSearchNewestPost;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!context.req) {
                  idToken = external_js_cookie_["get"]('token');
                  serviceProxy = Object(services["a" /* getServiceProxy */])(idToken);
                } else {
                  serviceProxy = Object(services["a" /* getServiceProxy */])(context.req.cookies.token);
                }

                _context.next = 3;
                return Promise.all([serviceProxy.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, context.req.shopInfo._id, undefined, undefined, undefined, undefined, 12, 'elasticsearchCreatedAt|desc', undefined, undefined), serviceProxy.searchNewsMostFollow(context.req.shopInfo._id, 4, 'counterView', '_id', undefined, undefined)]);

              case 3:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 2);
                newsData = _ref2[0];
                resultSearchNewestPost = _ref2[1];
                return _context.abrupt("return", {
                  shopInfo: context.req.shopInfo,
                  resultSearchNewestPost: resultSearchNewestPost,
                  newsData: newsData.data
                });

              case 8:
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

  return ShopInfo;
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

/* harmony default export */ var shop_info = __webpack_exports__["default"] = (Object(store["withRematch"])(store["initStore"], mapState, mapDispatch)(shop_info_ShopInfo));

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ 4:
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

/***/ 41:
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin/style");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ 48:
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

/***/ 5:
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

/***/ 50:
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

/***/ 51:
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

/***/ 52:
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

/***/ 53:
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

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMobile; });
var isMobile = function isMobile(req) {
  var userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i) ? true : false;
};

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ 71:
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

/***/ 72:
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

/***/ 73:
/***/ (function(module, exports) {



/***/ }),

/***/ 74:
/***/ (function(module, exports) {



/***/ }),

/***/ 75:
/***/ (function(module, exports) {



/***/ }),

/***/ 76:
/***/ (function(module, exports) {



/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = require("@rematch/loading");

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs/style");

/***/ }),

/***/ 8:
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

/***/ 94:
/***/ (function(module, exports) {



/***/ })

/******/ });