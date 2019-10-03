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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AdminLayout/AdminSearchbar.tsx":
/*!***************************************************!*\
  !*** ./components/AdminLayout/AdminSearchbar.tsx ***!
  \***************************************************/
/*! exports provided: AdminSearchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSearchbar", function() { return AdminSearchbar; });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");










var AdminSearchbar = Object(_i18n__WEBPACK_IMPORTED_MODULE_9__["withNamespaces"])('common')(function (props) {
  var translate = props.t;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    style: {
      marginBottom: '24px'
    },
    justify: "space-between"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    xs: 12,
    xl: 8
  }, props.showSearch && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a.Search, {
    enterButton: true,
    placeholder: props.placeholder,
    onChange: function onChange(e) {
      return props.handleSearchChange(e.target.value);
    },
    onSearch: function onSearch(value) {
      return props.handleSearch(value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    xs: 12,
    xl: 16,
    style: {
      textAlign: 'right'
    }
  }, props.hasCreate && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    onClick: props.onCreateClick
  }, translate('common:create'))));
});


/***/ }),

/***/ "./components/AdminLayout/AdminSidebar.less":
/*!**************************************************!*\
  !*** ./components/AdminLayout/AdminSidebar.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/AdminLayout/AdminSidebar.tsx":
/*!*************************************************!*\
  !*** ./components/AdminLayout/AdminSidebar.tsx ***!
  \*************************************************/
/*! exports provided: AdminSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebar", function() { return AdminSidebar; });
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var _AdminSidebar_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdminSidebar.less */ "./components/AdminLayout/AdminSidebar.less");
/* harmony import */ var _AdminSidebar_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_AdminSidebar_less__WEBPACK_IMPORTED_MODULE_8__);









var AdminSidebar = Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["withNamespaces"])('admin-reports')(function (props) {
  var menuWidth = 256;
  var menuTheme = 'light';
  var translate = props.t;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Sider, {
    trigger: null,
    collapsible: true,
    breakpoint: "lg",
    width: menuWidth,
    theme: menuTheme,
    className: "sider"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "logo",
    id: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "/users"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
    src: "/static/images/logo-timmay.png",
    alt: "logo"
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: "Menu",
    mode: "inline",
    theme: menuTheme,
    style: {
      padding: '16px 0',
      width: '100%'
    },
    className: "sider"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "/admin/reports"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "/admin/reports"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "warning"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, translate('admin-reports:reports'))))));
});

/***/ }),

/***/ "./components/AdminLayout/Authorize.less":
/*!***********************************************!*\
  !*** ./components/AdminLayout/Authorize.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/AdminLayout/Authorize.tsx":
/*!**********************************************!*\
  !*** ./components/AdminLayout/Authorize.tsx ***!
  \**********************************************/
/*! exports provided: Authorize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authorize", function() { return Authorize; });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "antd/lib/spin/style");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Authorize_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Authorize.less */ "./components/AdminLayout/Authorize.less");
/* harmony import */ var _Authorize_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Authorize_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./config/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core */ "./core/index.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layouts */ "./layouts/index.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");




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











var Authorize = function Authorize(Component, permission, authenticationRequired, layoutName) {
  return function (props) {
    var AuthorizeComponent =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AuthorizeComponent, _React$Component);

      function AuthorizeComponent() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, AuthorizeComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AuthorizeComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", {
          isAuthenticated: undefined,
          isAuthorized: undefined,
          openedSubMenu: '',
          selectedMenuItem: '',
          currentLanguage: ''
        });

        return _this;
      }

      _createClass(AuthorizeComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          Object(_core__WEBPACK_IMPORTED_MODULE_10__["initializeFirebaseApp"])();
          firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a.auth().onAuthStateChanged(
          /*#__PURE__*/
          function () {
            var _ref = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(user) {
              var idTokenInfo, isAuthorized, filterPermission, authUser, pathname, openedSubMenu;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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
                        Object(_store__WEBPACK_IMPORTED_MODULE_8__["getOrCreateStore"])(_store__WEBPACK_IMPORTED_MODULE_8__["initStore"], {}).dispatch.profileModel.updateProfileInfo(authUser);
                        pathname = window.location.pathname;
                        openedSubMenu = '';
                        Object(_core__WEBPACK_IMPORTED_MODULE_10__["getMenuConfigs"])().map(function (subMenu) {
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
                          currentLanguage: _i18n__WEBPACK_IMPORTED_MODULE_12__["i18n"].i18n.language ? _i18n__WEBPACK_IMPORTED_MODULE_12__["i18n"].i18n.language : _config__WEBPACK_IMPORTED_MODULE_9__["config"].i18n.defaultLang
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
              next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/auth/login');
            }
          }

          if (this.state.isAuthorized === false) {
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/_error');
          }

          var renderAdminLayout = function renderAdminLayout() {
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _this3.state.isAuthenticated && _this3.state.isAuthorized || !authenticationRequired ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_11__["AdminLayout"], {
              openedSubMenu: _this3.state.openedSubMenu,
              selectedMenuItem: _this3.state.selectedMenuItem,
              currentLanguage: _this3.state.currentLanguage
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, props)) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              className: "loader"
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AuthorizeComponent, null);
  };
};

/***/ }),

/***/ "./components/AdminLayout/PagingButtons.tsx":
/*!**************************************************!*\
  !*** ./components/AdminLayout/PagingButtons.tsx ***!
  \**************************************************/
/*! exports provided: PagingButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingButtons", function() { return PagingButtons; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var PagingButtons = function PagingButtons(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "pagination",
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, props.before && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: props.getPrevPage
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "left"
  }), " Prev"), props.after && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: props.getNextPage
  }, "Next ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "right"
  })));
};



/***/ }),

/***/ "./components/CommonLayout/Container.less":
/*!************************************************!*\
  !*** ./components/CommonLayout/Container.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/Container.tsx":
/*!***********************************************!*\
  !*** ./components/CommonLayout/Container.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.less */ "./components/CommonLayout/Container.less");
/* harmony import */ var _Container_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container_less__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Container =
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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "container"
      }, this.props.children);
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/CommonLayout/CurrentTime.less":
/*!**************************************************!*\
  !*** ./components/CommonLayout/CurrentTime.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/CurrentTime.tsx":
/*!*************************************************!*\
  !*** ./components/CommonLayout/CurrentTime.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrentTime_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrentTime.less */ "./components/CommonLayout/CurrentTime.less");
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

/* harmony default export */ __webpack_exports__["default"] = (CurrentTime);

/***/ }),

/***/ "./components/CommonLayout/DropdownMenu.less":
/*!***************************************************!*\
  !*** ./components/CommonLayout/DropdownMenu.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/DropdownMenu.tsx":
/*!**************************************************!*\
  !*** ./components/CommonLayout/DropdownMenu.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider/style */ "antd/lib/divider/style");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DropdownMenu_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownMenu.less */ "./components/CommonLayout/DropdownMenu.less");
/* harmony import */ var _DropdownMenu_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DropdownMenu_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MenuItem = antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item;

var DropdownMenu =
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
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "dropdown-menu",
        mode: "inline"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, {
        key: "1",
        className: "user-image-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "/thong-tin-ca-nhan",
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "user-image"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundImage: "url(".concat(this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : '/static/images/default-avatar.jpg', ")"),
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "user-info"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "title"
      }, this.props.profileState.authUser.fullName), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "title small-text"
      }, translate('common:edit-your-profile'))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, {
        key: "2",
        className: "menu-item-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "/quan-li-tin-dang",
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "/static/images/quan-li-tin-dang-icon.jpg",
        className: "item-image"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "item-info"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "item-title"
      }, translate('common:news-managenment'))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, {
        key: "3",
        className: "menu-item-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "/tin-da-luu",
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "/static/images/tin-da-luu-icon.jpg",
        className: "item-image"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "item-info"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "item-title"
      }, translate('common:followed-news'))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), this.props.profileState.authUser && this.props.profileState.authUser.shopDomain ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, {
        key: "4",
        className: "menu-item-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "/cua-hang-cua-toi",
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "/static/images/cua-hang-cua-toi-icon.jpg",
        className: "item-image"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "item-info"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "item-title"
      }, translate('common:my-shop'))))) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, {
        key: "4",
        className: "menu-item-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "/tao-cua-hang",
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "/static/images/cua-hang-cua-toi-icon.jpg",
        className: "item-image"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "item-info"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "item-title"
      }, translate('common:create-your-shop'))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, {
        key: "5",
        className: "menu-item-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "#",
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "/static/images/dang-ki-quang-cao-icon.jpg",
        className: "item-image"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "item-info"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "item-title"
      }, translate('common:advertisement-registration'))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, {
        key: "6",
        className: "menu-item-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "#",
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "/static/images/tro-giup-icon.jpg",
        className: "item-image"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "item-info"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "item-title"
      }, translate('common:help'))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), this.props.profileState.authUser && this.props.profileState.authUser.roles && this.props.profileState.authUser.roles.indexOf('5c7f747708898183ac62f2af') > -1 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, {
        key: "7",
        className: "menu-item-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "/quan-ly/danh-sach-hang",
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "/static/images/admin.png",
        className: "item-image"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "item-info"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "item-title"
      }, translate('common:admin'))))), this.props.profileState.authUser && this.props.profileState.authUser.roles && this.props.profileState.authUser.roles.indexOf('5c7f747708898183ac62f2af') > -1 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MenuItem, {
        key: "8",
        className: "menu-item-container"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        onClick: this.props.logOut,
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "/static/images/icon-signout.png",
        className: "item-image"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "item-info"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "item-title"
      }, translate('common:log-out'))))));
    }
  }]);

  return DropdownMenu;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withNamespaces"])('common')(DropdownMenu));

/***/ }),

/***/ "./components/CommonLayout/Footer.less":
/*!*********************************************!*\
  !*** ./components/CommonLayout/Footer.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/Footer.tsx":
/*!********************************************!*\
  !*** ./components/CommonLayout/Footer.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Footer_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer.less */ "./components/CommonLayout/Footer.less");
/* harmony import */ var _Footer_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Footer_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Container */ "./components/CommonLayout/Container.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_8__);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Fragment = react__WEBPACK_IMPORTED_MODULE_4__["Fragment"];

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var translate = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("footer", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Container__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "all-link"
      }, !react_device_detect__WEBPACK_IMPORTED_MODULE_8__["isMobile"] ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Fragment, null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 6,
        md: 6,
        xs: 0,
        sm: 0,
        className: "footer-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h3", null, translate('common:link')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/Facebook.png"
      }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, " Facebook"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/Youtube.png"
      }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, " Youtube"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null)), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 6,
        md: 6,
        xs: 0,
        sm: 0,
        className: "footer-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h3", null, translate('common:about-timmay')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, translate('common:about-us')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, translate('common:contact')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null)), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 6,
        md: 6,
        xs: 0,
        sm: 0,
        className: "footer-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h3", null, translate('common:support-customer')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, translate('common:central-of-support')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, translate('common:posting-regulations')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, translate('common:operating-regulations')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null)), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 6,
        md: 6,
        xs: 24,
        sm: 24,
        className: "footer-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h3", null, translate('common:certificate')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: '/static/images/certificate.png',
        width: "50%"
      }))) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "#",
        style: {
          marginLeft: '15px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, translate('common:about-us'), " "), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null)), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "#",
        style: {
          marginLeft: '15px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, " Facebook "), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null)), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "#",
        style: {
          marginLeft: '15px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, translate('common:central-of-support')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 24,
        md: 24,
        xs: 24,
        sm: 24,
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h3", null, translate('common:certificate')), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: '/static/images/certificate.png',
        width: "50%"
      })))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          textAlign: 'center',
          paddingBottom: '20px'
        },
        className: "address"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, translate('common:info-footer'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), translate('common:info-footer-2'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), translate('common:info-footer-3'), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), translate('common:info-footer-4'))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "license"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null, " B\u1EA3n quy\u1EC1n thu\u1ED9c v\u1EC1 Timmay.vn "))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["withNamespaces"])('common')(Footer));

/***/ }),

/***/ "./components/CommonLayout/ForgotPasswordModal.less":
/*!**********************************************************!*\
  !*** ./components/CommonLayout/ForgotPasswordModal.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/ForgotPasswordModal.tsx":
/*!*********************************************************!*\
  !*** ./components/CommonLayout/ForgotPasswordModal.tsx ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModal", function() { return ForgotPasswordModal; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select/style */ "antd/lib/select/style");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal/style */ "antd/lib/modal/style");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form/style */ "antd/lib/form/style");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/message/style */ "antd/lib/message/style");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core */ "./core/index.ts");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../config */ "./config/index.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _ForgotPasswordModal_less__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ForgotPasswordModal.less */ "./components/CommonLayout/ForgotPasswordModal.less");
/* harmony import */ var _ForgotPasswordModal_less__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_ForgotPasswordModal_less__WEBPACK_IMPORTED_MODULE_24__);
















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












var BaseForgotPasswordModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseForgotPasswordModal, _React$Component);

  function BaseForgotPasswordModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseForgotPasswordModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseForgotPasswordModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      gettingCode: false,
      phone: {
        phoneNo: '',
        countryCode: ''
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getCode",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee(values) {
        var fullPhoneNumber, serviceProxy, phoneNoExistResult, appVerifier, confirmationResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee$(_context) {
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
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_23__["getServiceProxy"])();
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
                return firebase_app__WEBPACK_IMPORTED_MODULE_16___default.a.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);

              case 11:
                confirmationResult = _context.sent;
                window.confirmationResult = confirmationResult;

                antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.success(_this.props.t('common:sendVerifyCodeSuccess'));

                _this.setState({
                  gettingCode: false
                });

                _context.next = 19;
                break;

              case 17:
                _this.setState({
                  gettingCode: false
                });

                antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error(_this.props.t('common:notFoundPhoneNo'));

              case 19:
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](1);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error(_this.props.t(_context.t0.code));

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

    _defineProperty(_assertThisInitialized(_this), "handleOk",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee2(values) {
        var idToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(_this.props.type === 'email')) {
                  _context2.next = 8;
                  break;
                }

                Object(_core__WEBPACK_IMPORTED_MODULE_18__["initializeFirebaseApp"])();
                firebase_app__WEBPACK_IMPORTED_MODULE_16___default.a.auth().sendPasswordResetEmail(values.email);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.success(_this.props.t('common:send-reset-password-email-success'));

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
                return firebase_app__WEBPACK_IMPORTED_MODULE_16___default.a.auth().currentUser.getIdToken();

              case 16:
                idToken = _context2.sent;
                _context2.next = 19;
                return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_21__["config"].url.api, "/auth/update-password"), {
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
                firebase_app__WEBPACK_IMPORTED_MODULE_16___default.a.auth().signOut();

                antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.success(_this.props.t('common:update-password-success'));

                _this.setState({
                  loading: false
                });

                _this.props.onCancel();

                _context2.next = 26;
                break;

              case 25:
                antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error(_this.props.t('common:invalid-verify-code'));

              case 26:
                _context2.next = 32;
                break;

              case 28:
                _context2.prev = 28;
                _context2.t0 = _context2["catch"](0);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error(_this.props.t("common:".concat(_context2.t0.code || _context2.t0.message)));

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

  _createClass(BaseForgotPasswordModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var ForgotEmailPasswordValidateSchema = yup__WEBPACK_IMPORTED_MODULE_19__["object"]().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_19__["string"]().required(translate('common:pleaseInputVerifyCode')).matches(_config__WEBPACK_IMPORTED_MODULE_21__["config"].regex.email, translate('common:invalidEmail'))
      });
      var PhoneNumberValidateSchema = yup__WEBPACK_IMPORTED_MODULE_19__["object"]().shape({
        countryCode: yup__WEBPACK_IMPORTED_MODULE_19__["string"]().required(translate('common:pleaseInputCountryCode')),
        phoneNo: yup__WEBPACK_IMPORTED_MODULE_19__["string"]().matches(_config__WEBPACK_IMPORTED_MODULE_21__["config"].regex.phone, translate('common:invalidPhoneNo')).required(translate('common:pleaseInputPhoneNo'))
      });
      var ForgotPhonePasswordValidateSchema = yup__WEBPACK_IMPORTED_MODULE_19__["object"]().shape({
        verifyCode: yup__WEBPACK_IMPORTED_MODULE_19__["string"]().required(translate('common:pleaseInputVerifyCode')),
        password: yup__WEBPACK_IMPORTED_MODULE_19__["string"]().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(_config__WEBPACK_IMPORTED_MODULE_21__["config"].regex.password, translate('common:invalidPassword')),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_19__["string"]().required(translate('common:pleaseConfirmPassword'))
      });

      if (this.props.type === 'email') {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Formik"], {
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
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee3(values, formikBag) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee3$(_context3) {
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
          return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
            title: translate('common:forgotPassword'),
            visible: _this2.props.visible,
            onOk: context.handleSubmit,
            onCancel: _this2.props.onCancel,
            confirmLoading: _this2.state.loading,
            okText: translate('common:send-reset-password-email'),
            cancelText: translate('common:cancel')
          }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a, {
            onSubmit: context.handleSubmit
          }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
            label: translate('common:your-email'),
            validateStatus: context.errors.email ? 'error' : undefined,
            help: context.errors.email
          }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
            value: context.values.email,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              return Object(_core__WEBPACK_IMPORTED_MODULE_18__["validateField"])({
                fieldName: 'email',
                validateSchema: ForgotEmailPasswordValidateSchema,
                context: context
              });
            },
            name: "email",
            prefix: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
              type: "mail",
              style: {
                color: 'rgba(0,0,0,.25)'
              }
            }),
            placeholder: translate('common:your-email')
          }))));
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: "reset-password-modal",
          visible: this.props.visible,
          footer: null,
          onCancel: this.props.onCancel,
          destroyOnClose: true
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Formik"], {
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
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee4(values) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee4$(_context4) {
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
          return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
            validateStatus: context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined,
            help: context.errors.phoneNo || context.errors.countryCode
          }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a.Search, {
            addonBefore: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
              style: {
                width: 120
              },
              value: context.values.countryCode,
              onChange: context.handleChange
            }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a.Option, {
              value: "+84"
            }, "VN (+84)")),
            value: context.values.phoneNo,
            onChange: context.handleChange,
            onBlur: context.handleBlur,
            placeholder: translate('common:phoneNo'),
            enterButton: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
              type: "primary",
              loading: _this2.state.gettingCode
            }, translate('common:sendCode')),
            onSearch: context.handleSubmit,
            name: "phoneNo"
          }));
        }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_22__["Formik"], {
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
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee5(values, formikBag) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee5$(_context5) {
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
          return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a, {
            onSubmit: context.handleSubmit
          }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
            validateStatus: context.errors.verifyCode ? 'error' : undefined,
            help: context.errors.verifyCode
          }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
            value: context.values.verifyCode,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              return Object(_core__WEBPACK_IMPORTED_MODULE_18__["validateField"])({
                fieldName: 'verifyCode',
                validateSchema: ForgotPhonePasswordValidateSchema,
                context: context
              });
            },
            placeholder: translate('common:verifyCode'),
            name: "verifyCode"
          })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
            validateStatus: context.errors.password ? 'error' : undefined,
            help: context.errors.password
          }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
            value: context.values.password,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              return Object(_core__WEBPACK_IMPORTED_MODULE_18__["validateField"])({
                fieldName: 'password',
                validateSchema: ForgotPhonePasswordValidateSchema,
                context: context
              });
            },
            placeholder: translate('common:password'),
            type: "password",
            name: "password"
          })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
            validateStatus: context.errors.confirmPassword ? 'error' : undefined,
            help: context.errors.confirmPassword
          }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
            value: context.values.confirmPassword,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
                context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
              } else {
                Object(_core__WEBPACK_IMPORTED_MODULE_18__["validateField"])({
                  fieldName: 'confirmPassword',
                  validateSchema: ForgotPhonePasswordValidateSchema,
                  context: context
                });
              }
            },
            placeholder: translate('common:confirmPassword'),
            type: "password",
            name: "confirmPassword"
          })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
            className: "button-container",
            style: {
              textAlign: 'right'
            }
          }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            type: "primary",
            className: "login-button",
            htmlType: "submit",
            loading: _this2.state.loading
          }, translate('common:update-password')), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", null)));
        }));
      }
    }
  }]);

  return BaseForgotPasswordModal;
}(react__WEBPACK_IMPORTED_MODULE_15___default.a.Component);

var ForgotPasswordModal = Object(_i18n__WEBPACK_IMPORTED_MODULE_20__["withNamespaces"])('common')(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.create()(BaseForgotPasswordModal));

/***/ }),

/***/ "./components/CommonLayout/HamburgerMenu.tsx":
/*!***************************************************!*\
  !*** ./components/CommonLayout/HamburgerMenu.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var HamburgerMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HamburgerMenu, _React$Component);

  function HamburgerMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HamburgerMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HamburgerMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(HamburgerMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
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
      }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("nav", {
        role: "navigation"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        id: "menuToggle"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", _extends({
        onClick: this.props.handleHamburgerMenuClick,
        type: "checkbox"
      }, this.props.toggle ? {
        checked: true
      } : {})), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "hamburger"
      }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "hamburger"
      }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "hamburger"
      }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("ul", {
        id: "menu",
        style: this.props.handleHamburgerMenuClick ? {
          overflowY: 'scroll',
          height: '100vh'
        } : {}
      }, this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "/thong-tin-ca-nhan",
        className: "link"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-login"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 6,
        xs: 6,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: "image-hamburger-rounded"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : '/static/images/default-avatar.jpg'
      }))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 18,
        xs: 18,
        sm: 18
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text menu-text-fullname"
      }, this.props.profileState.authUser.fullName), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text",
        style: {
          color: '#FFC500',
          fontSize: '12px'
        }
      }, translate('common:edit-your-profile'))))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("hr", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "/dang-tin"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/create-news.png",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:createNews'))))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/icon-noti.png",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:notifications'))))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("hr", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "/quan-li-tin-dang"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/quan-li-tin-dang-icon.jpg",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:news-managenment'))))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "/tin-da-luu"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/tin-da-luu-icon.jpg",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:followed-news'))))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("hr", null), this.props.profileState.authUser && this.props.profileState.authUser.shopDomain ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "/cua-hang-cua-toi"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/cua-hang-cua-toi-icon.jpg",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:my-shop'))))) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "/tao-cua-hang"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/tao-cua-hang-icon.jpg",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:create-your-shop'))))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/dang-ki-quang-cao-icon.jpg",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:advertisement-registration'))))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("hr", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/tro-giup-icon.jpg",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:help'))))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("hr", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        onClick: this.props.logOut
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 3,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/icon-signout.png",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 21,
        xs: 21,
        sm: 21
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:log-out')))))) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "menu-login",
        onClick: function onClick() {
          return _this2.props.profileReducers.openModal({
            modalName: 'login'
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 6,
        xs: 6,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: "/static/images/default-avatar.jpg",
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        md: 18,
        xs: 18,
        sm: 18
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "menu-item-text"
      }, translate('common:login'), " /\x1C ", translate('common:register'))))))));
    }
  }]);

  return HamburgerMenu;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withNamespaces"])('common')(HamburgerMenu));

/***/ }),

/***/ "./components/CommonLayout/Header.less":
/*!*********************************************!*\
  !*** ./components/CommonLayout/Header.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/Header.tsx":
/*!********************************************!*\
  !*** ./components/CommonLayout/Header.tsx ***!
  \********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "antd/lib/tag/style");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tag */ "antd/lib/tag");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/dropdown/style */ "antd/lib/dropdown/style");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/badge/style */ "antd/lib/badge/style");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/badge */ "antd/lib/badge");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/select/style */ "antd/lib/select/style");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Header.less */ "./components/CommonLayout/Header.less");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Header_less__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./DropdownMenu */ "./components/CommonLayout/DropdownMenu.tsx");
/* harmony import */ var _RegisterModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RegisterModal */ "./components/CommonLayout/RegisterModal.tsx");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./LoginModal */ "./components/CommonLayout/LoginModal.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../config */ "./config/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../core */ "./core/index.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _NotificationDropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./NotificationDropdown */ "./components/CommonLayout/NotificationDropdown.tsx");
/* harmony import */ var _HamburgerMenu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./HamburgerMenu */ "./components/CommonLayout/HamburgerMenu.tsx");




















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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















var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_18___default.a.Search;

var MainHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainHeader, _React$Component);

  function MainHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MainHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
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
      currentLanguage: _config__WEBPACK_IMPORTED_MODULE_24__["config"].i18n.defaultLang,
      searchBarStatus: false
    });

    _defineProperty(_assertThisInitialized(_this), "loadProfileInfo",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.mark(function _callee() {
      var idToken, serviceProxy, profileData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.props.profileState.authUser && _this.props.profileState.authUser.id)) {
                _context.next = 7;
                break;
              }

              idToken = js_cookie__WEBPACK_IMPORTED_MODULE_30__["get"]('token');
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_29__["getServiceProxy"])(idToken);
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

    _defineProperty(_assertThisInitialized(_this), "loadNotificationCount",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.mark(function _callee2() {
      var idToken, serviceProxy, countNotificationResult;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this.props.profileState.authUser && _this.props.profileState.authUser.id)) {
                _context2.next = 7;
                break;
              }

              idToken = js_cookie__WEBPACK_IMPORTED_MODULE_30__["get"]('token');
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_29__["getServiceProxy"])(idToken);
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

    _defineProperty(_assertThisInitialized(_this), "onTurnOnSearchBar", function () {
      _this.setState({
        searchBarStatus: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTurnOffSearchBar", function () {
      _this.setState({
        searchBarStatus: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeLanguage",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.mark(function _callee3(lang) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Object(_i18n__WEBPACK_IMPORTED_MODULE_27__["changeLanguage"])(lang);
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

    _defineProperty(_assertThisInitialized(_this), "handleHamburgerMenuClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.wrap(function _callee4$(_context4) {
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

    _defineProperty(_assertThisInitialized(_this), "logOut", function () {
      firebase_app__WEBPACK_IMPORTED_MODULE_26___default.a.auth().signOut();
      window.location.href = '/auth/logout';
    });

    _defineProperty(_assertThisInitialized(_this), "loadNotifications",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.mark(function _callee5(dropdownVisible) {
        var idToken, serviceProxy, notificationsResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.wrap(function _callee5$(_context5) {
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
                idToken = js_cookie__WEBPACK_IMPORTED_MODULE_30__["get"]('token');
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_29__["getServiceProxy"])(idToken);
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

    _defineProperty(_assertThisInitialized(_this), "loadMoreNotifications",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.mark(function _callee6() {
      var idToken, serviceProxy, notificationsResult;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.wrap(function _callee6$(_context6) {
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
              idToken = js_cookie__WEBPACK_IMPORTED_MODULE_30__["get"]('token');
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_29__["getServiceProxy"])(idToken);
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

    _defineProperty(_assertThisInitialized(_this), "readAllNotifications",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.mark(function _callee7() {
      var idToken, serviceProxy;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this.setState({
                notifications: _objectSpread({}, _this.state.notifications, {
                  data: _this.state.notifications.data.map(function (item) {
                    if (item.state === _core__WEBPACK_IMPORTED_MODULE_25__["notificationState"].UNREAD) {
                      return _objectSpread({}, item, {
                        state: _core__WEBPACK_IMPORTED_MODULE_25__["notificationState"].READ
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
                  idToken = js_cookie__WEBPACK_IMPORTED_MODULE_30__["get"]('token');
                  serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_29__["getServiceProxy"])(idToken);
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

    _defineProperty(_assertThisInitialized(_this), "readNotification",
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.mark(function _callee8(notificationId) {
        var idToken, serviceProxy;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this.setState({
                  notifications: _objectSpread({}, _this.state.notifications, {
                    data: _this.state.notifications.data.map(function (item) {
                      return item._id === notificationId ? _objectSpread({}, item, {
                        state: _core__WEBPACK_IMPORTED_MODULE_25__["notificationState"].READ
                      }) : item;
                    })
                  }),
                  unreadNotifications: _this.state.unreadNotifications - 1
                });

                try {
                  if (_this.props.profileState.authUser && _this.props.profileState.authUser.id) {
                    idToken = js_cookie__WEBPACK_IMPORTED_MODULE_30__["get"]('token');
                    serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_29__["getServiceProxy"])(idToken);
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

  _createClass(MainHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadNotificationCount();
      this.loadProfileInfo();
      Object(_core__WEBPACK_IMPORTED_MODULE_25__["initializeFirebaseApp"])();
      window.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_26___default.a.auth.RecaptchaVerifier('recaptcha', {
        'size': 'invisible'
      });
      this.setState({
        currentLanguage: _i18n__WEBPACK_IMPORTED_MODULE_27__["i18n"].i18n.language
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("header", {
        id: "header"
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("div", {
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
      }), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "header-container"
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("a", {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("img", {
        src: "/static/images/logo-timmay.png",
        width: "100%"
      }))), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 12
      }), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 6,
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default.a, {
        value: this.state.currentLanguage,
        style: {
          width: '140px',
          border: '1px solid #000000',
          color: '#000000'
        },
        onChange: function onChange(value) {
          return _this2.changeLanguage(value);
        }
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default.a.Option, {
        value: _config__WEBPACK_IMPORTED_MODULE_24__["config"].i18n.VN
      }, translate('common:vn')), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default.a.Option, {
        value: _config__WEBPACK_IMPORTED_MODULE_24__["config"].i18n.EN
      }, translate('common:en'))))), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "mobile-header",
        style: this.state.searchBarStatus ? {
          zIndex: 4
        } : {}
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 1,
        md: 1,
        xs: 0,
        sm: 0
      }), this.state.searchBarStatus ? react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 22,
        md: 22,
        sm: 24,
        xs: 24
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](Search, {
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
      })) : react__WEBPACK_IMPORTED_MODULE_19__["createElement"](react__WEBPACK_IMPORTED_MODULE_19__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 7,
        md: 7,
        xs: 12,
        sm: 12
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("a", {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("img", {
        src: "/static/images/logo-timmay.png",
        width: "100%"
      }))), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 11,
        md: 11,
        xs: 3,
        sm: 3
      }), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 2,
        md: 2,
        xs: 4,
        sm: 4
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("img", {
        className: "icon-search",
        src: "/static/images/icon-search.png",
        width: "30px",
        onClick: this.onTurnOnSearchBar
      })), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 2,
        md: 2,
        xs: 3,
        sm: 3
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](_HamburgerMenu__WEBPACK_IMPORTED_MODULE_32__["default"], {
        handleHamburgerMenuClick: this.handleHamburgerMenuClick,
        toggle: this.state.toggle,
        profileState: _objectSpread({}, this.props.profileState, {
          authUser: _objectSpread({}, this.props.profileState.authUser, this.state.userProfile)
        }),
        profileReducers: this.props.profileReducers,
        logOut: this.logOut
      }))), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 1,
        md: 1,
        xs: 0,
        sm: 0
      })), react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("div", {
        className: "header-desktop"
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "search-bar"
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 6,
        md: 8,
        sm: 0,
        xs: 0
      }), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 12,
        md: 8,
        sm: 0,
        xs: 0
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](Search, {
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
      })), this.props.profileState.authUser && this.props.profileState.authUser.id ? react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 6,
        md: 8,
        sm: 0,
        xs: 0,
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        overlay: react__WEBPACK_IMPORTED_MODULE_19__["createElement"](_NotificationDropdown__WEBPACK_IMPORTED_MODULE_31__["NotificationDropdown"], {
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
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
        count: this.state.unreadNotifications
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("a", null, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "bell",
        theme: "filled",
        style: {
          color: '#000000',
          fontSize: '24px'
        }
      })))), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        overlay: react__WEBPACK_IMPORTED_MODULE_19__["createElement"](_DropdownMenu__WEBPACK_IMPORTED_MODULE_21__["default"], {
          profileState: _objectSpread({}, this.props.profileState, {
            authUser: _objectSpread({}, this.state.userProfile, this.props.profileState.authUser, {
              avatarUrl: this.state.userProfile ? this.state.userProfile.avatarUrl : undefined,
              fullName: this.props.fullName ? this.props.fullName : this.state.userProfile ? this.state.userProfile.fullName : undefined
            })
          }),
          logOut: this.logOut
        }),
        trigger: ['click'],
        placement: "bottomCenter",
        overlayClassName: "dropdown-menu"
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "default",
        size: "large",
        className: "search-bar-button",
        icon: "user",
        style: {
          marginRight: '10px',
          marginLeft: '16px'
        }
      }, translate('common:account'))), react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("a", {
        href: "/dang-tin"
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        icon: "plus",
        type: "default",
        size: "large",
        className: "search-bar-button",
        style: {
          width: '100%'
        }
      }, translate('common:createNews')))) : react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 6,
        md: 8,
        sm: 0,
        xs: 0,
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      }, translate('common:register')), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "default",
        size: "large",
        className: "search-bar-button",
        onClick: function onClick() {
          return _this2.props.profileReducers.openModal({
            modalName: 'login'
          });
        }
      }, translate('common:login')))), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "popular-keyword"
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 6
      }), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 12,
        style: {
          marginTop: '6px',
          display: 'flex',
          alignItems: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("span", null, translate('common:commonKeywords'), ": \xA0 "), this.props.commonKeywords.slice(0, 4).map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("a", {
          style: {
            color: '#000000'
          },
          key: index,
          onClick: function onClick() {
            window.location.href = "/tim-kiem?keyword=".concat(item.keyword);
          }
        }, react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, {
          color: "orange"
        }, item.keyword));
      })), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default.a, {
        lg: 6
      }))), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](_LoginModal__WEBPACK_IMPORTED_MODULE_23__["LoginModal"], {
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), react__WEBPACK_IMPORTED_MODULE_19__["createElement"](_RegisterModal__WEBPACK_IMPORTED_MODULE_22__["RegisterModal"], {
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("div", {
        id: "recaptcha"
      }));
    }
  }]);

  return MainHeader;
}(react__WEBPACK_IMPORTED_MODULE_19__["Component"]);

var Header = Object(_i18n__WEBPACK_IMPORTED_MODULE_27__["withNamespaces"])('common')(MainHeader);

/***/ }),

/***/ "./components/CommonLayout/LeftSideBar.less":
/*!**************************************************!*\
  !*** ./components/CommonLayout/LeftSideBar.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/LeftSideBar.tsx":
/*!*************************************************!*\
  !*** ./components/CommonLayout/LeftSideBar.tsx ***!
  \*************************************************/
/*! exports provided: LeftSideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideBar", function() { return LeftSideBar; });
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LeftSideBar_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LeftSideBar.less */ "./components/CommonLayout/LeftSideBar.less");
/* harmony import */ var _LeftSideBar_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LeftSideBar_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");





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





var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.SubMenu;

var BaseLeftSideBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseLeftSideBar, _React$Component);

  function BaseLeftSideBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseLeftSideBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseLeftSideBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpenDropdownMenu: false
    });

    return _this;
  }

  _createClass(BaseLeftSideBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var renderMenuBar = this.props.topBrands.map(function (brand) {
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](SubMenu, {
          key: brand._id,
          title: react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
            style: {
              color: '#000',
              fontSize: '12px'
            }
          }, brand.name.toUpperCase(), " (", brand.totalNews, ")"),
          onTitleClick: function onTitleClick() {
            return window.location.href = "/danh-sach-hang/".concat(brand.slug);
          }
        }, brand.brandCategories.map(function (category) {
          return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
            key: category.slug
          }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
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
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobile"] ? 'left-sidebar-mobile' : 'left-sidebar'
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("b", null, translate('common:list-of-brand')), react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobile"] ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        style: {
          float: 'right',
          color: 'white'
        },
        onClick: function onClick() {
          return _this2.setState({
            isOpenDropdownMenu: !_this2.state.isOpenDropdownMenu
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "caret-down"
      })) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null)), react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobile"] && this.state.isOpenDropdownMenu ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      }, renderMenuBar) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null), !react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobile"] ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      }, renderMenuBar) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: "/danh-sach-hang",
        title: "Danh s\xE1ch h\xE3ng",
        className: "all-brand"
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("b", null, translate('common:all-brands'))), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
        href: adsPosition2 && adsPosition2.hyperlink ? adsPosition2.hyperlink : '#'
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
        src: adsPosition2 && adsPosition2.imageUrl ? adsPosition2.imageUrl : '/static/images/sidebar-1.png',
        width: "100%",
        className: "image-promotion-right"
      })));
    }
  }]);

  return BaseLeftSideBar;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var LeftSideBar = Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["withNamespaces"])('common')(BaseLeftSideBar);

/***/ }),

/***/ "./components/CommonLayout/LeftSideBarWithoutMenu.tsx":
/*!************************************************************!*\
  !*** ./components/CommonLayout/LeftSideBarWithoutMenu.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Fragment = react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];

var LeftSideBarWithoutMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LeftSideBarWithoutMenu, _React$Component);

  function LeftSideBarWithoutMenu() {
    _classCallCheck(this, LeftSideBarWithoutMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftSideBarWithoutMenu).apply(this, arguments));
  }

  _createClass(LeftSideBarWithoutMenu, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        src: "/static/images/sidebar-1.png",
        width: "100%"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        src: "/static/images/sidebar-2.png",
        width: "100%",
        style: {
          marginTop: '30px'
        }
      }));
    }
  }]);

  return LeftSideBarWithoutMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LeftSideBarWithoutMenu);

/***/ }),

/***/ "./components/CommonLayout/LoginModal.less":
/*!*************************************************!*\
  !*** ./components/CommonLayout/LoginModal.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/LoginModal.tsx":
/*!************************************************!*\
  !*** ./components/CommonLayout/LoginModal.tsx ***!
  \************************************************/
/*! exports provided: LoginModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModal", function() { return LoginModal; });
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "antd/lib/modal/style");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs/style */ "antd/lib/tabs/style");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/form/style */ "antd/lib/form/style");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/select/style */ "antd/lib/select/style");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/message/style */ "antd/lib/message/style");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _LoginModal_less__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./LoginModal.less */ "./components/CommonLayout/LoginModal.less");
/* harmony import */ var _LoginModal_less__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_LoginModal_less__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../core */ "./core/index.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ForgotPasswordModal */ "./components/CommonLayout/ForgotPasswordModal.tsx");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../config */ "./config/index.ts");






















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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













var BaseLoginModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseLoginModal, _React$Component);

  function BaseLoginModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseLoginModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseLoginModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
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

    _defineProperty(_assertThisInitialized(_this), "activeTabChange", function (_ref) {
      var activeTab = _ref.activeTab;

      _this.setState({
        activeTab: activeTab
      });
    });

    _defineProperty(_assertThisInitialized(_this), "login",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee(values) {
        var email, signInResult, idToken, serviceProxy;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee$(_context) {
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
                return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().signInWithEmailAndPassword(email, values.password);

              case 5:
                signInResult = _context.sent;

                if (!signInResult.user.emailVerified) {
                  _context.next = 16;
                  break;
                }

                _context.next = 9;
                return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().currentUser.getIdToken(true);

              case 9:
                idToken = _context.sent;
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_25__["getServiceProxy"])();
                serviceProxy.registerUser({
                  idToken: idToken
                });

                antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.success(_this.props.t('common:loginSuccess'));

                Object(_core__WEBPACK_IMPORTED_MODULE_26__["submitLoginForm"])(idToken);
                _context.next = 18;
                break;

              case 16:
                antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.error(_this.props.t('common:unverifiedAccount'));

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

                antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.error(_this.props.t(_context.t0.code));

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

    _defineProperty(_assertThisInitialized(_this), "loginWithFacebook",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee2() {
      var provider, idToken, serviceProxy;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              provider = new firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth.FacebookAuthProvider();
              _context2.next = 4;
              return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().signInWithPopup(provider);

            case 4:
              _context2.next = 6;
              return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().currentUser.getIdToken(true);

            case 6:
              idToken = _context2.sent;
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_25__["getServiceProxy"])();
              _context2.next = 10;
              return serviceProxy.registerUser({
                idToken: idToken
              });

            case 10:
              antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.success(_this.props.t('common:loginSuccess'));

              Object(_core__WEBPACK_IMPORTED_MODULE_26__["submitLoginForm"])(idToken);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);

              antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.error(_this.props.t("common:".concat(_context2.t0.code)));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "loginWithGoogle",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee3() {
      var provider, idToken, serviceProxy;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              provider = new firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth.GoogleAuthProvider();
              _context3.next = 4;
              return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().signInWithPopup(provider);

            case 4:
              _context3.next = 6;
              return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().currentUser.getIdToken(true);

            case 6:
              idToken = _context3.sent;
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_25__["getServiceProxy"])();
              _context3.next = 10;
              return serviceProxy.registerUser({
                idToken: idToken
              });

            case 10:
              antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.success(_this.props.t('common:loginSuccess'));

              Object(_core__WEBPACK_IMPORTED_MODULE_26__["submitLoginForm"])(idToken);
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);

              antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.error(_this.props.t("common:".concat(_context3.t0.code)));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "showForgotPasswordModal", function () {
      _this.setState({
        forgotPassword: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideForgotPasswordModal", function () {
      _this.setState({
        forgotPassword: false
      });
    });

    return _this;
  }

  _createClass(BaseLoginModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var EmailValidateSchema = yup__WEBPACK_IMPORTED_MODULE_29__["object"]().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_29__["string"]().required(translate('common:pleaseInputEmail')),
        password: yup__WEBPACK_IMPORTED_MODULE_29__["string"]().max(100, translate('common:passwordTooLong')).matches(/[^\s]/, translate('common:passwordCantContainSpace')).required(translate('common:pleaseInputPassword'))
      });
      var PhoneNumberValidateSchema = yup__WEBPACK_IMPORTED_MODULE_29__["object"]().shape({
        countryCode: yup__WEBPACK_IMPORTED_MODULE_29__["string"]().required(translate('common:pleaseInputCountryCode')),
        phoneNo: yup__WEBPACK_IMPORTED_MODULE_29__["string"]().matches(_config__WEBPACK_IMPORTED_MODULE_31__["config"].regex.phone, translate('common:invalidPhoneNo')).required(translate('common:pleaseInputPhoneNo')),
        password: yup__WEBPACK_IMPORTED_MODULE_29__["string"]().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(/[^\s]/, translate('common:passwordCantContainSpace'))
      });
      return react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "login-modal",
        visible: this.props.profileState.modal.login,
        footer: null,
        onCancel: function onCancel() {
          return _this2.props.profileReducers.closeModal({
            modalName: 'login'
          });
        },
        destroyOnClose: true
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("h2", null, translate('common:login')), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("hr", {
        className: "title-underline"
      }), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default.a, {
        defaultActiveKey: this.state.activeTab,
        onChange: function onChange(activeTab) {
          return _this2.activeTabChange({
            activeTab: activeTab
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default.a.TabPane, {
        tab: react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
          type: "phone"
        }), translate('common:sms')),
        key: "phone"
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](formik__WEBPACK_IMPORTED_MODULE_27__["Formik"], {
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
          var _ref5 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee4(values, formikBag) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee4$(_context4) {
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
        return react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a, {
          onSubmit: context.handleSubmit
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
          validateStatus: context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined,
          help: context.errors.phoneNo || context.errors.countryCode
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
          addonBefore: react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a, {
            style: {
              width: 120
            },
            value: context.values.countryCode,
            onChange: context.handleChange
          }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a.Option, {
            value: "+84"
          }, "VN (+84)")),
          value: context.values.phoneNo,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
              fieldName: 'phoneNo',
              validateSchema: PhoneNumberValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:phoneNo'),
          name: "phoneNo"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
              fieldName: 'password',
              validateSchema: PhoneNumberValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
          className: "button-container"
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.login
        }, translate('common:login')), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "default",
          className: "forgot-password-button",
          onClick: _this2.showForgotPasswordModal
        }, translate('common:forgotPassword'))));
      })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default.a.TabPane, {
        tab: react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
          type: "mail"
        }), translate('common:email')),
        key: "email"
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](formik__WEBPACK_IMPORTED_MODULE_27__["Formik"], {
        initialValues: {
          email: '',
          password: ''
        },
        validateOnChange: false,
        validationSchema: EmailValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref6 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee5(values, formikBag) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee5$(_context5) {
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
        return react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a, {
          onSubmit: context.handleSubmit
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
          validateStatus: context.errors.email ? 'error' : undefined,
          help: context.errors.email
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
          value: context.values.email,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
              fieldName: 'email',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:email'),
          type: "email",
          name: "email"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
              fieldName: 'password',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
          className: "button-container"
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.login
        }, translate('common:login')), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "default",
          className: "forgot-password-button",
          onClick: _this2.showForgotPasswordModal
        }, translate('common:forgotPassword'))));
      }))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        lg: 10
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("hr", null)), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        lg: 4,
        style: {
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", null, translate('common:or'))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        lg: 10
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("hr", null))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "primary",
        className: "login-facebook-button",
        onClick: this.loginWithFacebook
      }, translate('common:facebookLogin')), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "primary",
        className: "login-google-button",
        onClick: this.loginWithGoogle
      }, translate('common:googleLogin'))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("hr", null), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", {
        style: {
          color: '#000'
        }
      }, translate('common:dontHaveAccount'), "? "), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", {
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
      }, translate('common:register'))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("form", {
        id: "form",
        method: "post",
        action: "/auth/login",
        style: {
          display: 'none'
        }
      }), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_28__["ForgotPasswordModal"], {
        type: this.state.activeTab,
        visible: this.state.forgotPassword,
        onCancel: this.hideForgotPasswordModal
      }));
    }
  }]);

  return BaseLoginModal;
}(react__WEBPACK_IMPORTED_MODULE_21__["Component"]);

var LoginModal = Object(_i18n__WEBPACK_IMPORTED_MODULE_30__["withNamespaces"])('common')(BaseLoginModal);

/***/ }),

/***/ "./components/CommonLayout/MainContent.less":
/*!**************************************************!*\
  !*** ./components/CommonLayout/MainContent.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/MainContent.tsx":
/*!*************************************************!*\
  !*** ./components/CommonLayout/MainContent.tsx ***!
  \*************************************************/
/*! exports provided: MainContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContent", function() { return MainContent; });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LeftSideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LeftSideBar */ "./components/CommonLayout/LeftSideBar.tsx");
/* harmony import */ var _LeftSideBarWithoutMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeftSideBarWithoutMenu */ "./components/CommonLayout/LeftSideBarWithoutMenu.tsx");
/* harmony import */ var _RightSideBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RightSideBar */ "./components/CommonLayout/RightSideBar.tsx");
/* harmony import */ var _MainContent_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MainContent.less */ "./components/CommonLayout/MainContent.less");
/* harmony import */ var _MainContent_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MainContent_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _modules_machine_news_screens_HomePageScreen_components_BrandList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/machine-news/screens/HomePageScreen/components/BrandList */ "./modules/machine-news/screens/HomePageScreen/components/BrandList.tsx");






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








var MainContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainContent, _React$Component);

  function MainContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MainContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      adsense: [],
      featureBrands: []
    });

    _defineProperty(_assertThisInitialized(_this), "getAdsense",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      var serviceProxy, adsense;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_10__["getServiceProxy"])();
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

    _defineProperty(_assertThisInitialized(_this), "getFeatureBrands",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
      var serviceProxy, featureBrands;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_10__["getServiceProxy"])();
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

  _createClass(MainContent, [{
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
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("main", {
        className: "main-content"
      }, this.props.hasBrandList && react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "home-page-brand-list",
        type: "flex",
        justify: "center"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("a", {
        href: adsPosition1 && adsPosition1.hyperlink ? adsPosition1.hyperlink : '#'
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
        className: "image-promote",
        src: adsPosition1 && adsPosition1.imageUrl ? adsPosition1.imageUrl : '/static/images/promotion.png',
        style: {
          maxHeight: '60px'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 18,
        md: 24,
        xs: 24,
        sm: 24
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_modules_machine_news_screens_HomePageScreen_components_BrandList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        featureBrands: this.state.featureBrands
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("a", {
        href: adsPosition3 && adsPosition3.hyperlink ? adsPosition3.hyperlink : '#'
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
        className: "image-promote",
        src: adsPosition3 && adsPosition3.imageUrl ? adsPosition3.imageUrl : '/static/images/promotion.png',
        style: {
          maxHeight: '60px'
        }
      })))), this.props.hasSideBar ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "padding-of-page"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 3,
        md: 24,
        sm: 24,
        xs: 24
      }, this.props.hasMenuItems ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_LeftSideBar__WEBPACK_IMPORTED_MODULE_6__["LeftSideBar"], {
        topBrands: this.props.topBrands,
        adsense: this.state.adsense
      }) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_LeftSideBarWithoutMenu__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "main-col",
        lg: 18,
        md: 24,
        sm: 24,
        xs: 24
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_RightSideBar__WEBPACK_IMPORTED_MODULE_8__["RightSideBar"], {
        adsense: this.state.adsense
      }))) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "padding-of-page"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "main-col",
        lg: 18,
        md: 24,
        sm: 24,
        xs: 24,
        style: {
          padding: '0px 20px'
        }
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      })));
    }
  }]);

  return MainContent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./components/CommonLayout/NotificationDropdown.less":
/*!***********************************************************!*\
  !*** ./components/CommonLayout/NotificationDropdown.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/NotificationDropdown.tsx":
/*!**********************************************************!*\
  !*** ./components/CommonLayout/NotificationDropdown.tsx ***!
  \**********************************************************/
/*! exports provided: NotificationDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropdown", function() { return NotificationDropdown; });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "antd/lib/spin/style");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/list/style */ "antd/lib/list/style");
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/list */ "antd/lib/list");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core */ "./core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _NotificationDropdown_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NotificationDropdown.less */ "./components/CommonLayout/NotificationDropdown.less");
/* harmony import */ var _NotificationDropdown_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_NotificationDropdown_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_11__);








function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var NotificationDropdown = function NotificationDropdown(props) {
  var getNotificationContent = function getNotificationContent(notification) {
    if (notification.type === 'CREATE_NEWS') {
      var isShop = notification.news.shop && notification.news.shop._id;

      if (isShop) {
        var displayName = notification.news.shop.name;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "B\xE0i vi\u1EBFt \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          title: notification.news.title,
          onClick: function onClick() {
            props.readNotification(notification._id);
            window.location.href = "".concat(Object(_core__WEBPACK_IMPORTED_MODULE_8__["getShopUrl"])(notification.news.shop.domain), "/bai-dang-cua-hang/").concat(notification.news._id);
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, notification.news.title)), " \xA0 \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u0103ng th\xE0nh c\xF4ng trong c\u1EEDa h\xE0ng \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          title: displayName,
          onClick: function onClick() {
            props.readNotification(notification._id);
            window.location.href = "".concat(Object(_core__WEBPACK_IMPORTED_MODULE_8__["getShopUrl"])(notification.news.shop.domain), "/thong-tin-cua-hang");
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, displayName)));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "B\xE0i vi\u1EBFt \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          title: notification.news.title,
          onClick: function onClick() {
            props.readNotification(notification._id);
            window.location.href = "/bai-dang/".concat(notification.news._id);
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, notification.news.title)), " \xA0 \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u0103ng th\xE0nh c\xF4ng");
      }
    } else if (notification.type === 'FOLLOW_USER') {
      var _displayName = notification.news.owner.fullName || notification.news.owner.email || notification.news.owner.phoneNo;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Ng\u01B0\u1EDDi d\xF9ng \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: _displayName,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "/nguoi-dung/".concat(notification.news.owner._id);
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, _displayName)), " \xA0 v\u1EEBa \u0111\u0103ng b\xE0i vi\u1EBFt \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: notification.news.title,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "/bai-dang/".concat(notification.news._id);
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, notification.news.title)));
    } else if (notification.type === 'FOLLOW_SHOP') {
      var _displayName2 = notification.news.shop.name;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "C\u1EEDa h\xE0ng \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: _displayName2,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "".concat(Object(_core__WEBPACK_IMPORTED_MODULE_8__["getShopUrl"])(notification.news.shop.domain), "/thong-tin-cua-hang");
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, _displayName2)), " \xA0 v\u1EEBa \u0111\u0103ng b\xE0i vi\u1EBFt \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: notification.news.title,
        onClick: function onClick() {
          props.readNotification(notification._id);
          window.location.href = "".concat(Object(_core__WEBPACK_IMPORTED_MODULE_8__["getShopUrl"])(notification.news.shop.domain), "/bai-dang-cua-hang/").concat(notification.news._id);
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, notification.news.title)));
    }

    return;
  };

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "notification-dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
    spinning: props.loadingNotification
  }, props.notificationList.length > 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "notification-list",
    itemLayout: "horizontal",
    dataSource: props.notificationList,
    renderItem: function renderItem(item) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        onClick:
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
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
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item.Meta, {
        title: getNotificationContent(item),
        description: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          style: {
            fontSize: '12px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "clock-circle"
        }), " ", moment__WEBPACK_IMPORTED_MODULE_9__(item.createdAt).format('DD-MM-YYYY HH:mm'))
      }));
    }
  }, props.hasNext && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    className: "loadmore-containter"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    className: "loadmore-button",
    onClick: props.loadMoreNotifications,
    type: "primary"
  }, "Xem th\xEAm"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "small-text"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    onClick: props.readAllNotifications
  }, "\u0110\xE1nh d\u1EA5u \u0111\xE3 \u0111\u1ECDc t\u1EA5t c\u1EA3"))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: {
      height: '60px',
      textAlign: 'center',
      marginTop: '40px',
      fontWeight: 500
    }
  }, props.loadingNotification ? '' : 'Bạn không có thông báo nào')));
};

/***/ }),

/***/ "./components/CommonLayout/RegisterModal.less":
/*!****************************************************!*\
  !*** ./components/CommonLayout/RegisterModal.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/CommonLayout/RegisterModal.tsx":
/*!***************************************************!*\
  !*** ./components/CommonLayout/RegisterModal.tsx ***!
  \***************************************************/
/*! exports provided: RegisterModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModal", function() { return RegisterModal; });
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "antd/lib/modal/style");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs/style */ "antd/lib/tabs/style");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/form/style */ "antd/lib/form/style");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/select/style */ "antd/lib/select/style");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/message/style */ "antd/lib/message/style");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _RegisterModal_less__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RegisterModal.less */ "./components/CommonLayout/RegisterModal.less");
/* harmony import */ var _RegisterModal_less__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_RegisterModal_less__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../core */ "./core/index.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../config */ "./config/index.ts");






















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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












var BaseRegisterModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseRegisterModal, _React$Component);

  function BaseRegisterModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseRegisterModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseRegisterModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
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

    _defineProperty(_assertThisInitialized(_this), "activeTabChange", function (_ref) {
      var activeTab = _ref.activeTab;

      _this.setState({
        activeTab: activeTab
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCode",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee(values) {
        var fullPhoneNumber, serviceProxy, phoneNoExistResult, appVerifier, confirmationResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  phone: {
                    phoneNo: values.phoneNo,
                    countryCode: values.countryCode
                  },
                  loading: _objectSpread({}, _this.state.loading, {
                    getVerifyCode: true
                  })
                });

                _context.prev = 1;
                fullPhoneNumber = "".concat(values.countryCode).concat(values.phoneNo);
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_25__["getServiceProxy"])();
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
                return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);

              case 11:
                confirmationResult = _context.sent;
                window.confirmationResult = confirmationResult;

                antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.success(_this.props.t('common:sendVerifyCodeSuccess'));

                _context.next = 17;
                break;

              case 16:
                antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.error(_this.props.t('common:phoneNoHasBeenUsed'));

              case 17:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    getVerifyCode: false
                  })
                });

                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](1);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.error(_this.props.t(_context.t0.code));

              case 23:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
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

    _defineProperty(_assertThisInitialized(_this), "register",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee2(values) {
        var newUser, serviceProxy, idToken, phoneNo, _idToken, _serviceProxy;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    register: true
                  })
                });

                _context2.prev = 1;

                if (!(_this.state.activeTab === 'email')) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 5;
                return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().createUserWithEmailAndPassword(values.email, values.password);

              case 5:
                newUser = _context2.sent;
                newUser.user.sendEmailVerification(); // create mongodb record

                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_25__["getServiceProxy"])();
                _context2.next = 10;
                return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().currentUser.getIdToken(true);

              case 10:
                idToken = _context2.sent;
                serviceProxy.registerUser({
                  idToken: idToken
                }); // redirect

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    register: false
                  })
                });

                antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.success(_this.props.t('common:registerEmailSuccess'), 4);

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
                return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().currentUser.updateEmail("".concat(phoneNo.replace('+', ''), "@timmay.vn"));

              case 22:
                _context2.next = 24;
                return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().currentUser.updatePassword(values.password);

              case 24:
                _context2.next = 26;
                return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().currentUser.getIdToken(true);

              case 26:
                _idToken = _context2.sent;
                _serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_25__["getServiceProxy"])();
                _context2.next = 30;
                return _serviceProxy.registerUser({
                  idToken: _idToken
                });

              case 30:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    register: false
                  })
                });

                antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.success(_this.props.t('common:registerSuccess'));

              case 32:
                _context2.next = 38;
                break;

              case 34:
                _context2.prev = 34;
                _context2.t0 = _context2["catch"](1);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.error(_this.props.t(_context2.t0.code));

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
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

    _defineProperty(_assertThisInitialized(_this), "loginWithFacebook",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee3() {
      var provider, serviceProxy, idToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              provider = new firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth.FacebookAuthProvider();
              _context3.next = 4;
              return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().signInWithPopup(provider);

            case 4:
              // create mongodb record
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_25__["getServiceProxy"])();
              _context3.next = 7;
              return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().currentUser.getIdToken(true);

            case 7:
              idToken = _context3.sent;
              serviceProxy.registerUser({
                idToken: idToken
              });

              antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.success(_this.props.t('common:registerSuccess'));

              Object(_core__WEBPACK_IMPORTED_MODULE_26__["submitLoginForm"])(idToken);
              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);

              antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.error(_this.props.t("common:".concat(_context3.t0.code)));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "loginWithGoogle",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee4() {
      var provider, serviceProxy, idToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              provider = new firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth.GoogleAuthProvider();
              _context4.next = 4;
              return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().signInWithPopup(provider);

            case 4:
              // create mongodb record
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_25__["getServiceProxy"])();
              _context4.next = 7;
              return firebase_app__WEBPACK_IMPORTED_MODULE_23___default.a.auth().currentUser.getIdToken(true);

            case 7:
              idToken = _context4.sent;
              serviceProxy.registerUser({
                idToken: idToken
              });

              antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.success(_this.props.t('common:registerSuccess'));

              Object(_core__WEBPACK_IMPORTED_MODULE_26__["submitLoginForm"])(idToken);
              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);

              antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default.a.error(_this.props.t("common:".concat(_context4.t0.code)));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    })));

    return _this;
  }

  _createClass(BaseRegisterModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var EmailValidateSchema = yup__WEBPACK_IMPORTED_MODULE_28__["object"]().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(translate('common:pleaseInputEmail')).matches(_config__WEBPACK_IMPORTED_MODULE_30__["config"].regex.email, translate('common:invalidEmail')),
        password: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(_config__WEBPACK_IMPORTED_MODULE_30__["config"].regex.password, translate('common:invalidPassword')),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(translate('common:pleaseConfirmPassword'))
      });
      var PhoneNumberValidateSchema = yup__WEBPACK_IMPORTED_MODULE_28__["object"]().shape({
        countryCode: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(translate('common:pleaseInputCountryCode')),
        phoneNo: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().matches(_config__WEBPACK_IMPORTED_MODULE_30__["config"].regex.phone, translate('common:invalidPhoneNo')).required(translate('common:pleaseInputPhoneNo'))
      });
      var VerifyCodeValidateSchema = yup__WEBPACK_IMPORTED_MODULE_28__["object"]().shape({
        verifyCode: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(translate('common:pleaseInputVerifyCode')),
        password: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(_config__WEBPACK_IMPORTED_MODULE_30__["config"].regex.password, translate('common:invalidPassword')),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_28__["string"]().required(translate('common:pleaseConfirmPassword'))
      });
      return react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "register-modal",
        visible: this.props.profileState.modal.register,
        footer: null,
        onCancel: function onCancel() {
          return _this2.props.profileReducers.closeModal({
            modalName: 'register'
          });
        },
        destroyOnClose: true
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("h2", null, translate('common:register')), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("hr", {
        className: "title-underline"
      }), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default.a, {
        defaultActiveKey: this.state.activeTab,
        onChange: function onChange(activeTab) {
          return _this2.activeTabChange({
            activeTab: activeTab
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default.a.TabPane, {
        tab: react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
          type: "phone"
        }), translate('common:sms')),
        key: "phone"
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](formik__WEBPACK_IMPORTED_MODULE_27__["Formik"], {
        initialValues: {
          countryCode: '+84',
          phoneNo: ''
        },
        validateOnChange: false,
        validationSchema: PhoneNumberValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref6 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee5(values) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee5$(_context5) {
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
        return react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          validateStatus: context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined,
          help: context.errors.phoneNo || context.errors.countryCode
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a.Search, {
          addonBefore: react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a, {
            style: {
              width: 120
            },
            value: context.values.countryCode,
            onChange: context.handleChange
          }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a.Option, {
            value: "+84"
          }, "VN (+84)")),
          value: context.values.phoneNo,
          onChange: context.handleChange,
          onBlur: context.handleBlur,
          placeholder: translate('common:phoneNo'),
          enterButton: react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_13___default.a, {
            type: "primary",
            loading: _this2.state.loading.getVerifyCode
          }, translate('common:sendCode')),
          onSearch: context.handleSubmit,
          name: "phoneNo"
        }));
      }), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](formik__WEBPACK_IMPORTED_MODULE_27__["Formik"], {
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
          var _ref7 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee6(values, formikBag) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee6$(_context6) {
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
        return react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a, {
          onSubmit: context.handleSubmit
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          validateStatus: context.errors.verifyCode ? 'error' : undefined,
          help: context.errors.verifyCode
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a, {
          value: context.values.verifyCode,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
              fieldName: 'verifyCode',
              validateSchema: VerifyCodeValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:verifyCode'),
          name: "verifyCode"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
              fieldName: 'password',
              validateSchema: VerifyCodeValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          validateStatus: context.errors.confirmPassword ? 'error' : undefined,
          help: context.errors.confirmPassword
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a, {
          value: context.values.confirmPassword,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
              context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
            } else {
              Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
                fieldName: 'confirmPassword',
                validateSchema: VerifyCodeValidateSchema,
                context: context
              });
            }
          },
          placeholder: translate('common:confirmPassword'),
          type: "password",
          name: "confirmPassword"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          className: "button-container"
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_13___default.a, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.register
        }, translate('common:register')), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("br", null)));
      })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_tabs__WEBPACK_IMPORTED_MODULE_7___default.a.TabPane, {
        tab: react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_icon__WEBPACK_IMPORTED_MODULE_17___default.a, {
          type: "mail"
        }), "Email"),
        key: "email"
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](formik__WEBPACK_IMPORTED_MODULE_27__["Formik"], {
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
          var _ref8 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee7(values, formikBag) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee7$(_context7) {
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
        return react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a, {
          onSubmit: context.handleSubmit
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          validateStatus: context.errors.email ? 'error' : undefined,
          help: context.errors.email
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a, {
          value: context.values.email,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
              fieldName: 'email',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:email'),
          type: "email",
          name: "email"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
              fieldName: 'password',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          validateStatus: context.errors.confirmPassword ? 'error' : undefined,
          help: context.errors.confirmPassword
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a, {
          value: context.values.confirmPassword,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
              context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
            } else {
              Object(_core__WEBPACK_IMPORTED_MODULE_26__["validateField"])({
                fieldName: 'confirmPassword',
                validateSchema: EmailValidateSchema,
                context: context
              });
            }
          },
          placeholder: translate('common:confirmPassword'),
          type: "password",
          name: "confirmPassword"
        })), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          className: "button-container"
        }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_13___default.a, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.register
        }, translate('common:register')), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("br", null)));
      }))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        lg: 10
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("hr", null)), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        lg: 4,
        style: {
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", null, translate('common:or'))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        lg: 10
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("hr", null))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "primary",
        className: "login-facebook-button",
        onClick: this.loginWithFacebook
      }, translate('common:registerFacebook')), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "primary",
        className: "login-google-button",
        onClick: this.loginWithGoogle
      }, translate('common:registerGoogle'))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("hr", null), react__WEBPACK_IMPORTED_MODULE_21__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", {
        style: {
          color: '#000'
        }
      }, translate('common:alreadyHaveAccount'), "? "), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("span", {
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
      }, translate('common:login'))), react__WEBPACK_IMPORTED_MODULE_21__["createElement"]("form", {
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
}(react__WEBPACK_IMPORTED_MODULE_21__["Component"]);

var RegisterModal = Object(_i18n__WEBPACK_IMPORTED_MODULE_29__["withNamespaces"])('common')(BaseRegisterModal);

/***/ }),

/***/ "./components/CommonLayout/RightSideBar.tsx":
/*!**************************************************!*\
  !*** ./components/CommonLayout/RightSideBar.tsx ***!
  \**************************************************/
/*! exports provided: RightSideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSideBar", function() { return RightSideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Fragment = react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
var RightSideBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RightSideBar, _React$Component);

  function RightSideBar() {
    _classCallCheck(this, RightSideBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(RightSideBar).apply(this, arguments));
  }

  _createClass(RightSideBar, [{
    key: "render",
    value: function render() {
      var adsPosition4 = this.props.adsense.filter(function (item) {
        return item.position === 4;
      })[0];
      var adsPosition5 = this.props.adsense.filter(function (item) {
        return item.position === 5;
      })[0];
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: adsPosition4 && adsPosition4.hyperlink ? adsPosition4.hyperlink : '#'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        src: adsPosition4 && adsPosition4.imageUrl ? adsPosition4.imageUrl : '/static/images/sidebar-1.png',
        width: "100%"
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: adsPosition5 && adsPosition5.hyperlink ? adsPosition5.hyperlink : '#'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        src: adsPosition5 && adsPosition5.imageUrl ? adsPosition5.imageUrl : '/static/images/sidebar-1.png',
        width: "100%",
        style: {
          marginTop: '30px'
        }
      })));
    }
  }]);

  return RightSideBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./components/MachineDetailBox/MachineDetailBox.less":
/*!***********************************************************!*\
  !*** ./components/MachineDetailBox/MachineDetailBox.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/MachineDetailBox/MachineDetailBox.tsx":
/*!**********************************************************!*\
  !*** ./components/MachineDetailBox/MachineDetailBox.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MachineDetailBox_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MachineDetailBox.less */ "./components/MachineDetailBox/MachineDetailBox.less");
/* harmony import */ var _MachineDetailBox_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MachineDetailBox_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MachineItem_MachineItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MachineItem/MachineItem */ "./components/MachineItem/MachineItem.tsx");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core */ "./core/index.ts");









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
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_MachineItem_MachineItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: item._id,
          key: index,
          lg: _this.props.lg,
          md: _this.props.md,
          sm: _this.props.sm,
          xs: _this.props.xs,
          linkRedirect: item._id ? "/bai-dang/".concat(item._id) : '#',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? Object(_core__WEBPACK_IMPORTED_MODULE_11__["getImageUrl"])(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
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

/* harmony default export */ __webpack_exports__["default"] = (MachineDetailBox);

/***/ }),

/***/ "./components/MachineItem/MachineItem.tsx":
/*!************************************************!*\
  !*** ./components/MachineItem/MachineItem.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core */ "./core/index.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");







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

      var newsState = _core__WEBPACK_IMPORTED_MODULE_7__["newsStates"].filter(function (item) {
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
      }, this.props.price ? Object(_core__WEBPACK_IMPORTED_MODULE_7__["formatMoney"])(Number(this.props.price)) : "".concat(this.props.t('common:contact')))), react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withNamespaces"])('common')(MachineItem));

/***/ }),

/***/ "./components/MapWithSearchBox/MapWithSearchBox.less":
/*!***********************************************************!*\
  !*** ./components/MapWithSearchBox/MapWithSearchBox.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/MapWithSearchBox/MapWithSearchBox.tsx":
/*!**********************************************************!*\
  !*** ./components/MapWithSearchBox/MapWithSearchBox.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "antd/lib/spin/style");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_maps_lib_components_places_SearchBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-maps/lib/components/places/SearchBox */ "react-google-maps/lib/components/places/SearchBox");
/* harmony import */ var react_google_maps_lib_components_places_SearchBox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_places_SearchBox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MapWithSearchBox_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MapWithSearchBox.less */ "./components/MapWithSearchBox/MapWithSearchBox.less");
/* harmony import */ var _MapWithSearchBox_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MapWithSearchBox_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./config/index.ts");









var MapWithSearchBox = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(_config__WEBPACK_IMPORTED_MODULE_8__["config"].googleMaps.apiKey, "&libraries=geometry,drawing,places"),
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
/* harmony default export */ __webpack_exports__["default"] = (MapWithSearchBox);

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: LoginModal, RegisterModal, Header, LeftSideBar, RightSideBar, MainContent, AdminSidebar, AdminSearchbar, PagingButtons, Authorize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MachineDetailBox_MachineDetailBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MachineDetailBox/MachineDetailBox */ "./components/MachineDetailBox/MachineDetailBox.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _CommonLayout_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommonLayout/DropdownMenu */ "./components/CommonLayout/DropdownMenu.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _CommonLayout_LoginModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommonLayout/LoginModal */ "./components/CommonLayout/LoginModal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginModal", function() { return _CommonLayout_LoginModal__WEBPACK_IMPORTED_MODULE_2__["LoginModal"]; });

/* harmony import */ var _CommonLayout_RegisterModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommonLayout/RegisterModal */ "./components/CommonLayout/RegisterModal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterModal", function() { return _CommonLayout_RegisterModal__WEBPACK_IMPORTED_MODULE_3__["RegisterModal"]; });

/* harmony import */ var _CommonLayout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommonLayout/Footer */ "./components/CommonLayout/Footer.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _CommonLayout_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommonLayout/Header */ "./components/CommonLayout/Header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _CommonLayout_Header__WEBPACK_IMPORTED_MODULE_5__["Header"]; });

/* harmony import */ var _CommonLayout_HamburgerMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommonLayout/HamburgerMenu */ "./components/CommonLayout/HamburgerMenu.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _CommonLayout_LeftSideBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommonLayout/LeftSideBar */ "./components/CommonLayout/LeftSideBar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeftSideBar", function() { return _CommonLayout_LeftSideBar__WEBPACK_IMPORTED_MODULE_7__["LeftSideBar"]; });

/* harmony import */ var _CommonLayout_RightSideBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommonLayout/RightSideBar */ "./components/CommonLayout/RightSideBar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightSideBar", function() { return _CommonLayout_RightSideBar__WEBPACK_IMPORTED_MODULE_8__["RightSideBar"]; });

/* harmony import */ var _CommonLayout_MainContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommonLayout/MainContent */ "./components/CommonLayout/MainContent.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainContent", function() { return _CommonLayout_MainContent__WEBPACK_IMPORTED_MODULE_9__["MainContent"]; });

/* harmony import */ var _CommonLayout_CurrentTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommonLayout/CurrentTime */ "./components/CommonLayout/CurrentTime.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _MachineItem_MachineItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MachineItem/MachineItem */ "./components/MachineItem/MachineItem.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _MapWithSearchBox_MapWithSearchBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MapWithSearchBox/MapWithSearchBox */ "./components/MapWithSearchBox/MapWithSearchBox.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _AdminLayout_AdminSidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AdminLayout/AdminSidebar */ "./components/AdminLayout/AdminSidebar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminSidebar", function() { return _AdminLayout_AdminSidebar__WEBPACK_IMPORTED_MODULE_13__["AdminSidebar"]; });

/* harmony import */ var _AdminLayout_AdminSearchbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AdminLayout/AdminSearchbar */ "./components/AdminLayout/AdminSearchbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminSearchbar", function() { return _AdminLayout_AdminSearchbar__WEBPACK_IMPORTED_MODULE_14__["AdminSearchbar"]; });

/* harmony import */ var _AdminLayout_PagingButtons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AdminLayout/PagingButtons */ "./components/AdminLayout/PagingButtons.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagingButtons", function() { return _AdminLayout_PagingButtons__WEBPACK_IMPORTED_MODULE_15__["PagingButtons"]; });

/* harmony import */ var _AdminLayout_Authorize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AdminLayout/Authorize */ "./components/AdminLayout/Authorize.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Authorize", function() { return _AdminLayout_Authorize__WEBPACK_IMPORTED_MODULE_16__["Authorize"]; });



















/***/ }),

/***/ "./config/default.config.ts":
/*!**********************************!*\
  !*** ./config/default.config.ts ***!
  \**********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _override_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./override.config */ "./config/override.config.ts");
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
}, _override_config__WEBPACK_IMPORTED_MODULE_0__["overrideConfig"]);

/***/ }),

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.config */ "./config/default.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _default_config__WEBPACK_IMPORTED_MODULE_0__["config"]; });



/***/ }),

/***/ "./config/override.config.ts":
/*!***********************************!*\
  !*** ./config/override.config.ts ***!
  \***********************************/
/*! exports provided: overrideConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrideConfig", function() { return overrideConfig; });
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

/***/ }),

/***/ "./core/checkFollowStatus.ts":
/*!***********************************!*\
  !*** ./core/checkFollowStatus.ts ***!
  \***********************************/
/*! exports provided: checkFollowStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFollowStatus", function() { return checkFollowStatus; });
var checkFollowStatus = function checkFollowStatus(profileState, item) {
  return profileState && profileState.authUser && item && item.followBy.indexOf(profileState.authUser.id) !== -1 ? true : false;
};

/***/ }),

/***/ "./core/checkIsMobile.ts":
/*!*******************************!*\
  !*** ./core/checkIsMobile.ts ***!
  \*******************************/
/*! exports provided: isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
var isMobile = function isMobile(req) {
  var userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i) ? true : false;
};

/***/ }),

/***/ "./core/checkPermission.ts":
/*!*********************************!*\
  !*** ./core/checkPermission.ts ***!
  \*********************************/
/*! exports provided: checkPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPermission", function() { return checkPermission; });
var checkPermission = function checkPermission(authUser, requiredPermission) {
  if (!requiredPermission) {
    return true;
  }

  return requiredPermission && authUser && authUser.permissions && authUser.permissions.indexOf(requiredPermission) > -1;
};

/***/ }),

/***/ "./core/checkSubdomain.ts":
/*!********************************!*\
  !*** ./core/checkSubdomain.ts ***!
  \********************************/
/*! exports provided: checkSubdomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSubdomain", function() { return checkSubdomain; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./services/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var checkSubdomain =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res, next) {
    var shopDomain, authUserId, serviceProxies, shopResult, allowPaths;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.subdomains && req.subdomains.length > 0)) {
              _context.next = 15;
              break;
            }

            shopDomain = '';

            if (_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.main === "https://timmay.vn" && req.subdomains[0] !== "www") {
              shopDomain = req.subdomains[0];
            } else if (_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.main === "https://test.timmay.vn" && req.subdomains[1] !== "www") {
              shopDomain = req.subdomains[1];
            } else if (_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.main.indexOf("techkids.io") > -1 && req.subdomains[1] !== "www") {
              shopDomain = req.subdomains[1];
            } else if (req.subdomains[0] !== "www") {
              shopDomain = req.subdomains[0];
            }

            if (!shopDomain) {
              _context.next = 12;
              break;
            }

            authUserId = req.authUser ? req.authUser.id : '';
            serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getServiceProxy"])();
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
              res.redirect("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.main, "/not-found"));
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

/***/ }),

/***/ "./core/clearCookie.ts":
/*!*****************************!*\
  !*** ./core/clearCookie.ts ***!
  \*****************************/
/*! exports provided: clearCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCookie", function() { return clearCookie; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var clearCookie =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.clearCookie('token', {
              domain: _config__WEBPACK_IMPORTED_MODULE_1__["config"].cookies.domain
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

/***/ }),

/***/ "./core/constants.ts":
/*!***************************!*\
  !*** ./core/constants.ts ***!
  \***************************/
/*! exports provided: newsStatus, newsTypeConst, notificationState, reportResults, priceRanges, newsStates, newsTypes, storePackages, paymentMethods, reportReasons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsStatus", function() { return newsStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsTypeConst", function() { return newsTypeConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationState", function() { return notificationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportResults", function() { return reportResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceRanges", function() { return priceRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsStates", function() { return newsStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsTypes", function() { return newsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storePackages", function() { return storePackages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentMethods", function() { return paymentMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportReasons", function() { return reportReasons; });
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

/***/ }),

/***/ "./core/convertVietnamese.ts":
/*!***********************************!*\
  !*** ./core/convertVietnamese.ts ***!
  \***********************************/
/*! exports provided: convertVietnamese */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertVietnamese", function() { return convertVietnamese; });
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

/***/ }),

/***/ "./core/firebase.ts":
/*!**************************!*\
  !*** ./core/firebase.ts ***!
  \**************************/
/*! exports provided: initializeFirebaseApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeFirebaseApp", function() { return initializeFirebaseApp; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.ts");



var initializeFirebaseApp = function initializeFirebaseApp() {
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_config__WEBPACK_IMPORTED_MODULE_2__["config"].firebase);
  }

  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL) // tslint:disable-next-line:no-console
  .catch(function (error) {
    return console.log(error);
  });
};

/***/ }),

/***/ "./core/formatter.ts":
/*!***************************!*\
  !*** ./core/formatter.ts ***!
  \***************************/
/*! exports provided: formatMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
var formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'VND',
  currencyDisplay: 'code',
  minimumFractionDigits: 0
});
var formatMoney = formatter.format;


/***/ }),

/***/ "./core/generateFilters.ts":
/*!*********************************!*\
  !*** ./core/generateFilters.ts ***!
  \*********************************/
/*! exports provided: generateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });
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

/***/ }),

/***/ "./core/generateRecentViewedKey.ts":
/*!*****************************************!*\
  !*** ./core/generateRecentViewedKey.ts ***!
  \*****************************************/
/*! exports provided: generateRecentViewedKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRecentViewedKey", function() { return generateRecentViewedKey; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.ts");


var recentViewedCookie = 'recent_viewed';
var generateRecentViewedKey = function generateRecentViewedKey(req, res, next) {
  if (!req.cookies[recentViewedCookie]) {
    var recentViewedKey = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    res.cookie(recentViewedCookie, recentViewedKey, {
      domain: _config__WEBPACK_IMPORTED_MODULE_1__["config"].cookies.domain
    });
  }

  next();
};

/***/ }),

/***/ "./core/generateSearchUrl.ts":
/*!***********************************!*\
  !*** ./core/generateSearchUrl.ts ***!
  \***********************************/
/*! exports provided: generateSearchUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSearchUrl", function() { return generateSearchUrl; });
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

/***/ }),

/***/ "./core/getBase64Image.ts":
/*!********************************!*\
  !*** ./core/getBase64Image.ts ***!
  \********************************/
/*! exports provided: getBase64Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBase64Image", function() { return getBase64Image; });
var getBase64Image = function getBase64Image(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};

/***/ }),

/***/ "./core/getImageUrl.ts":
/*!*****************************!*\
  !*** ./core/getImageUrl.ts ***!
  \*****************************/
/*! exports provided: getImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageUrl", function() { return getImageUrl; });
var getImageUrl = function getImageUrl(imageUrl, imageType) {
  return imageUrl ? imageUrl.indexOf('.jpg') === -1 && imageUrl.indexOf('.png') === -1 ? "".concat(imageUrl, "-").concat(imageType, ".jpg") : imageUrl : '';
};

/***/ }),

/***/ "./core/getMenuConfigs.ts":
/*!********************************!*\
  !*** ./core/getMenuConfigs.ts ***!
  \********************************/
/*! exports provided: getMenuConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuConfigs", function() { return getMenuConfigs; });
/* harmony import */ var _modules_admin_menuConfigs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/admin/menuConfigs */ "./modules/admin/menuConfigs.ts");

var getMenuConfigs = function getMenuConfigs() {
  return [_modules_admin_menuConfigs__WEBPACK_IMPORTED_MODULE_0__["authMenuConfigs"], _modules_admin_menuConfigs__WEBPACK_IMPORTED_MODULE_0__["appMenuConfigs"], _modules_admin_menuConfigs__WEBPACK_IMPORTED_MODULE_0__["statisticsMenuConfigs"]];
};

/***/ }),

/***/ "./core/getShopUrl.ts":
/*!****************************!*\
  !*** ./core/getShopUrl.ts ***!
  \****************************/
/*! exports provided: getShopUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShopUrl", function() { return getShopUrl; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config/index.ts");

var getShopUrl = function getShopUrl(shopDomain) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["config"].url.shop.replace('shopDomain', shopDomain);
};

/***/ }),

/***/ "./core/index.ts":
/*!***********************!*\
  !*** ./core/index.ts ***!
  \***********************/
/*! exports provided: initializeFirebaseApp, setCookie, formatMoney, submitLoginForm, validateField, clearCookie, metadata, getBase64Image, getImageUrl, newsStatus, newsTypeConst, notificationState, reportResults, priceRanges, newsStates, newsTypes, storePackages, paymentMethods, reportReasons, checkSubdomain, checkFollowStatus, getShopUrl, generateSearchUrl, generateFilters, generateRecentViewedKey, isMobile, convertVietnamese, getMenuConfigs, checkPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "./core/firebase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFirebaseApp", function() { return _firebase__WEBPACK_IMPORTED_MODULE_0__["initializeFirebaseApp"]; });

/* harmony import */ var _setCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setCookie */ "./core/setCookie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return _setCookie__WEBPACK_IMPORTED_MODULE_1__["setCookie"]; });

/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatter */ "./core/formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return _formatter__WEBPACK_IMPORTED_MODULE_2__["formatMoney"]; });

/* harmony import */ var _submitLoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitLoginForm */ "./core/submitLoginForm.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submitLoginForm", function() { return _submitLoginForm__WEBPACK_IMPORTED_MODULE_3__["submitLoginForm"]; });

/* harmony import */ var _validateField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateField */ "./core/validateField.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateField", function() { return _validateField__WEBPACK_IMPORTED_MODULE_4__["validateField"]; });

/* harmony import */ var _clearCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearCookie */ "./core/clearCookie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearCookie", function() { return _clearCookie__WEBPACK_IMPORTED_MODULE_5__["clearCookie"]; });

/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata */ "./core/metadata.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _metadata__WEBPACK_IMPORTED_MODULE_6__["metadata"]; });

/* harmony import */ var _getBase64Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getBase64Image */ "./core/getBase64Image.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBase64Image", function() { return _getBase64Image__WEBPACK_IMPORTED_MODULE_7__["getBase64Image"]; });

/* harmony import */ var _getImageUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getImageUrl */ "./core/getImageUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageUrl", function() { return _getImageUrl__WEBPACK_IMPORTED_MODULE_8__["getImageUrl"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./core/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsStatus", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["newsStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsTypeConst", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["newsTypeConst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationState", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["notificationState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportResults", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["reportResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "priceRanges", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["priceRanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsStates", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["newsStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsTypes", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["newsTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storePackages", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["storePackages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentMethods", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["paymentMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportReasons", function() { return _constants__WEBPACK_IMPORTED_MODULE_9__["reportReasons"]; });

/* harmony import */ var _checkSubdomain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkSubdomain */ "./core/checkSubdomain.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSubdomain", function() { return _checkSubdomain__WEBPACK_IMPORTED_MODULE_10__["checkSubdomain"]; });

/* harmony import */ var _checkFollowStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkFollowStatus */ "./core/checkFollowStatus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFollowStatus", function() { return _checkFollowStatus__WEBPACK_IMPORTED_MODULE_11__["checkFollowStatus"]; });

/* harmony import */ var _getShopUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getShopUrl */ "./core/getShopUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShopUrl", function() { return _getShopUrl__WEBPACK_IMPORTED_MODULE_12__["getShopUrl"]; });

/* harmony import */ var _generateSearchUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generateSearchUrl */ "./core/generateSearchUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateSearchUrl", function() { return _generateSearchUrl__WEBPACK_IMPORTED_MODULE_13__["generateSearchUrl"]; });

/* harmony import */ var _generateFilters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./generateFilters */ "./core/generateFilters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return _generateFilters__WEBPACK_IMPORTED_MODULE_14__["generateFilters"]; });

/* harmony import */ var _generateRecentViewedKey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./generateRecentViewedKey */ "./core/generateRecentViewedKey.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateRecentViewedKey", function() { return _generateRecentViewedKey__WEBPACK_IMPORTED_MODULE_15__["generateRecentViewedKey"]; });

/* harmony import */ var _checkIsMobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkIsMobile */ "./core/checkIsMobile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _checkIsMobile__WEBPACK_IMPORTED_MODULE_16__["isMobile"]; });

/* harmony import */ var _convertVietnamese__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./convertVietnamese */ "./core/convertVietnamese.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertVietnamese", function() { return _convertVietnamese__WEBPACK_IMPORTED_MODULE_17__["convertVietnamese"]; });

/* harmony import */ var _getMenuConfigs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./getMenuConfigs */ "./core/getMenuConfigs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuConfigs", function() { return _getMenuConfigs__WEBPACK_IMPORTED_MODULE_18__["getMenuConfigs"]; });

/* harmony import */ var _checkPermission__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkPermission */ "./core/checkPermission.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkPermission", function() { return _checkPermission__WEBPACK_IMPORTED_MODULE_19__["checkPermission"]; });






















/***/ }),

/***/ "./core/metadata.ts":
/*!**************************!*\
  !*** ./core/metadata.ts ***!
  \**************************/
/*! exports provided: metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
var metadata = {};

/***/ }),

/***/ "./core/setCookie.ts":
/*!***************************!*\
  !*** ./core/setCookie.ts ***!
  \***************************/
/*! exports provided: setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var setCookie =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.body.token;
            res.cookie('token', "Bearer ".concat(token), {
              domain: _config__WEBPACK_IMPORTED_MODULE_1__["config"].cookies.domain
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

/***/ }),

/***/ "./core/submitLoginForm.ts":
/*!*********************************!*\
  !*** ./core/submitLoginForm.ts ***!
  \*********************************/
/*! exports provided: submitLoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitLoginForm", function() { return submitLoginForm; });
var submitLoginForm = function submitLoginForm(idToken) {
  var form = document.getElementById('form');
  var input = document.createElement('input');
  input.type = 'text';
  input.name = 'token';
  input.value = idToken;
  form.appendChild(input);
  form.submit();
};

/***/ }),

/***/ "./core/validateField.ts":
/*!*******************************!*\
  !*** ./core/validateField.ts ***!
  \*******************************/
/*! exports provided: validateField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateField", function() { return validateField; });
var validateField = function validateField(params) {
  try {
    params.validateSchema.validateSyncAt(params.fieldName, params.context.values);
    params.context.setFieldError(params.fieldName, '');
  } catch (error) {
    params.context.setFieldError(params.fieldName, error.message);
  }
};

/***/ }),

/***/ "./i18n/i18n.ts":
/*!**********************!*\
  !*** ./i18n/i18n.ts ***!
  \**********************/
/*! exports provided: i18n, appWithTranslation, changeLanguage, withNamespaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appWithTranslation", function() { return appWithTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLanguage", function() { return changeLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withNamespaces", function() { return withNamespaces; });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ "next-i18next");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.ts");


var i18n = new next_i18next__WEBPACK_IMPORTED_MODULE_0___default.a({
  defaultLanguage: _config__WEBPACK_IMPORTED_MODULE_1__["config"].i18n.defaultLang,
  otherLanguages: [_config__WEBPACK_IMPORTED_MODULE_1__["config"].i18n.EN],
  localePath: "".concat( true ? 'src' : undefined, "/client/static/locales"),
  detection: {
    cookieDomain: _config__WEBPACK_IMPORTED_MODULE_1__["config"].cookies.domain
  }
});
var appWithTranslation = i18n.appWithTranslation;

var changeLanguage = function changeLanguage(lang) {
  i18n.i18n.changeLanguage(lang);
};

var withNamespaces = i18n.withNamespaces;


/***/ }),

/***/ "./i18n/index.ts":
/*!***********************!*\
  !*** ./i18n/index.ts ***!
  \***********************/
/*! exports provided: i18n, appWithTranslation, changeLanguage, withNamespaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n */ "./i18n/i18n.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appWithTranslation", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["appWithTranslation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeLanguage", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["changeLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withNamespaces", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__["withNamespaces"]; });



/***/ }),

/***/ "./layouts/Admin/AdminLayout.less":
/*!****************************************!*\
  !*** ./layouts/Admin/AdminLayout.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./layouts/Admin/AdminLayout.tsx":
/*!***************************************!*\
  !*** ./layouts/Admin/AdminLayout.tsx ***!
  \***************************************/
/*! exports provided: AdminLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayout", function() { return AdminLayout; });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "antd/lib/spin/style");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/dropdown/style */ "antd/lib/dropdown/style");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AdminLayout_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AdminLayout.less */ "./layouts/Admin/AdminLayout.less");
/* harmony import */ var _AdminLayout_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_AdminLayout_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/SideBar */ "./layouts/Admin/components/SideBar.tsx");
/* harmony import */ var _components_CollapsedButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/CollapsedButton */ "./layouts/Admin/components/CollapsedButton.tsx");
/* harmony import */ var _components_HeaderDropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/HeaderDropdown */ "./layouts/Admin/components/HeaderDropdown.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");











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








var BaseAdminLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseAdminLayout, _React$Component);

  function BaseAdminLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseAdminLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseAdminLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      openedSubMenu: _this.props.openedSubMenu,
      selectedMenuItem: _this.props.selectedMenuItem,
      menuCollapsed: false,
      isChangingLanguage: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        menuCollapsed: !_this.state.menuCollapsed
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openSubMenuChange", function (newOpenedSubMenu) {
      _this.setState({
        openedSubMenu: newOpenedSubMenu
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeLanguage", function (newLang) {
      _this.setState({
        isChangingLanguage: true
      });

      Object(_i18n__WEBPACK_IMPORTED_MODULE_15__["changeLanguage"])(newLang);

      _this.setState({
        isChangingLanguage: false
      });
    });

    return _this;
  }

  _createClass(BaseAdminLayout, [{
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
        title: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "admin-container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: this.state.isChangingLanguage
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SideBar__WEBPACK_IMPORTED_MODULE_12__["SideBar"], {
        menuWidth: menuWidth,
        collapsedWidth: collapsedWidth,
        menuTheme: menuTheme,
        openedSubMenu: this.state.openedSubMenu,
        selectedMenuItem: this.state.selectedMenuItem,
        openSubMenuChange: this.openSubMenuChange,
        menuCollapsed: this.state.menuCollapsed
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          minHeight: '100vh'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Header, {
        style: {
          padding: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_CollapsedButton__WEBPACK_IMPORTED_MODULE_13__["CollapsedButton"], {
        menuCollapsed: this.state.menuCollapsed,
        toggle: this.toggle
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "right"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        placement: "bottomCenter",
        overlay: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
          onClick: function onClick(_ref) {
            var key = _ref.key;
            return _this2.changeLanguage(key);
          },
          selectedKeys: [this.props.currentLanguage]
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
          key: "en"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: "/static/images/en.png",
          style: {
            width: '20px',
            height: '20px'
          }
        }), " \xA0 ", translate("common:en")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
          key: "vn"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: "/static/images/vn.png",
          style: {
            width: '20px',
            height: '20px'
          }
        }), " \xA0 ", translate("common:vn")))
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "ant-dropdown-link",
        style: {
          marginRight: '10px',
          cursor: 'pointer'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/images/".concat(this.props.currentLanguage, ".png"),
        style: {
          width: '20px',
          height: '20px'
        }
      }), " \xA0 ", translate("common:".concat(this.props.currentLanguage)))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_HeaderDropdown__WEBPACK_IMPORTED_MODULE_14__["HeaderDropdown"], null)))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Content, {
        className: "content"
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Footer, {
        style: {
          padding: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("footer", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "links"
      }, links.map(function (link) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          key: link.key,
          title: link.key,
          target: link.blankTarget ? '_blank' : '_self',
          href: link.href
        }, link.title);
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "copyright"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, "Copyright ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "copyright"
      }), " 2018 - Techkids Software"))))))));
    }
  }]);

  return BaseAdminLayout;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var AdminLayout = Object(_i18n__WEBPACK_IMPORTED_MODULE_15__["withNamespaces"])('common')(BaseAdminLayout);

/***/ }),

/***/ "./layouts/Admin/components/CollapsedButton.less":
/*!*******************************************************!*\
  !*** ./layouts/Admin/components/CollapsedButton.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./layouts/Admin/components/CollapsedButton.tsx":
/*!******************************************************!*\
  !*** ./layouts/Admin/components/CollapsedButton.tsx ***!
  \******************************************************/
/*! exports provided: CollapsedButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsedButton", function() { return CollapsedButton; });
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CollapsedButton_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CollapsedButton.less */ "./layouts/Admin/components/CollapsedButton.less");
/* harmony import */ var _CollapsedButton_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CollapsedButton_less__WEBPACK_IMPORTED_MODULE_3__);




var CollapsedButton = function CollapsedButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "trigger",
    onClick: props.toggle
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: props.menuCollapsed ? 'menu-unfold' : 'menu-fold'
  }));
};

/***/ }),

/***/ "./layouts/Admin/components/HeaderDropdown.less":
/*!******************************************************!*\
  !*** ./layouts/Admin/components/HeaderDropdown.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./layouts/Admin/components/HeaderDropdown.tsx":
/*!*****************************************************!*\
  !*** ./layouts/Admin/components/HeaderDropdown.tsx ***!
  \*****************************************************/
/*! exports provided: HeaderDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDropdown", function() { return HeaderDropdown; });
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/dropdown/style */ "antd/lib/dropdown/style");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar/style */ "antd/lib/avatar/style");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _HeaderDropdown_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderDropdown.less */ "./layouts/Admin/components/HeaderDropdown.less");
/* harmony import */ var _HeaderDropdown_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_HeaderDropdown_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core */ "./core/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");















var logOut = function logOut() {
  Object(_core__WEBPACK_IMPORTED_MODULE_12__["initializeFirebaseApp"])();
  firebase_app__WEBPACK_IMPORTED_MODULE_10___default.a.auth().signOut();
  window.location.href = '/auth/logout';
};

var menu = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
  className: "dropdownMenu",
  selectedKeys: []
}, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  key: "homePage"
}, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
  href: "/"
}, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
  type: "home"
}), "\xA0 ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Quay l\u1EA1i trang ch\u1EE7"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Divider, null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  key: "logout"
}, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
  onClick: logOut
}, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
  type: "logout"
}), "\xA0 ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "\u0110\u0103ng xu\u1EA5t"))));

var DropdownMenu = function DropdownMenu(props) {
  var avatarUrl = props.authUser && props.authUser.avatarUrl ? props.authUser.avatarUrl : '/static/images/default-avatar.jpg';
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    overlayClassName: "headerDropdown",
    overlay: menu
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "action account"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    size: "small",
    className: "avatar",
    src: avatarUrl,
    alt: "avatar"
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "name"
  }, props.authUser ? props.authUser.fullName : 'Admin')));
};

var mapState = function mapState(rootState) {
  return {
    authUser: rootState.profileModel.authUser
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var HeaderDropdown = Object(_store__WEBPACK_IMPORTED_MODULE_13__["withRematch"])(_store__WEBPACK_IMPORTED_MODULE_13__["initStore"], mapState, mapDispatch)(DropdownMenu);


/***/ }),

/***/ "./layouts/Admin/components/SideBar.less":
/*!***********************************************!*\
  !*** ./layouts/Admin/components/SideBar.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./layouts/Admin/components/SideBar.tsx":
/*!**********************************************!*\
  !*** ./layouts/Admin/components/SideBar.tsx ***!
  \**********************************************/
/*! exports provided: SideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return SideBar; });
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SideBar_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideBar.less */ "./layouts/Admin/components/SideBar.less");
/* harmony import */ var _SideBar_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SideBar_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core */ "./core/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../i18n */ "./i18n/index.ts");







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SideBarMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideBarMenu, _React$Component);

  function SideBarMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SideBarMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SideBarMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedMenuItem: '',
      openedSubMenu: ''
    });

    return _this;
  }

  _createClass(SideBarMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;

      var getMenuItem = function getMenuItem(item) {
        if (Object(_core__WEBPACK_IMPORTED_MODULE_8__["checkPermission"])(_this2.props.authUser, item.permission)) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
            key: item.path
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            href: item.path
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, translate("common:".concat(item.name)))));
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

            if (Object(_core__WEBPACK_IMPORTED_MODULE_8__["checkPermission"])(_this2.props.authUser, item.permission)) {
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
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.SubMenu, {
            key: subMenu.name,
            title: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
              type: subMenu.icon
            }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, translate("common:".concat(subMenu.name))))
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

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Sider, {
        trigger: null,
        collapsible: true,
        collapsed: this.props.menuCollapsed,
        breakpoint: "lg",
        width: this.props.menuWidth,
        collapsedWidth: this.props.collapsedWidth,
        theme: this.props.menuTheme,
        className: "sider"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "logo",
        id: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/images/logo-timmay.png",
        alt: "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
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
      }, menuProps), Object(_core__WEBPACK_IMPORTED_MODULE_8__["getMenuConfigs"])().map(function (item) {
        return getSubMenus(item);
      })));
    }
  }]);

  return SideBarMenu;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapState = function mapState(rootState) {
  return {
    authUser: rootState.profileModel.authUser
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var SideBar = Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withNamespaces"])('common')(Object(_store__WEBPACK_IMPORTED_MODULE_9__["withRematch"])(_store__WEBPACK_IMPORTED_MODULE_9__["initStore"], mapState, mapDispatch)(SideBarMenu));


/***/ }),

/***/ "./layouts/Auth/AuthLayout.less":
/*!**************************************!*\
  !*** ./layouts/Auth/AuthLayout.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./layouts/Auth/AuthLayout.tsx":
/*!*************************************!*\
  !*** ./layouts/Auth/AuthLayout.tsx ***!
  \*************************************/
/*! exports provided: AuthLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayout", function() { return AuthLayout; });
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider/style */ "antd/lib/divider/style");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthLayout_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthLayout.less */ "./layouts/Auth/AuthLayout.less");
/* harmony import */ var _AuthLayout_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AuthLayout_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ "react-firebaseui/StyledFirebaseAuth");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ "./routes.ts");




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







var AuthLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AuthLayout, _React$Component);

  function AuthLayout(props) {
    var _this;

    _classCallCheck(this, AuthLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthLayout).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.setState({
        clientOnly: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "uiConfig", {
      signInFlow: 'popup',
      signInOptions: [firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth.GoogleAuthProvider.PROVIDER_ID, firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth.FacebookAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: function signInSuccessWithAuthResult(_authResult, _redirectUrl) {
          _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
            var idToken, form, input;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth().currentUser.getIdToken();

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
          var _signInFailure = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(error) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
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

  _createClass(AuthLayout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "auth-container"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "form-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Techkids Software")), this.props.children, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
        dashed: true
      }), this.state.clientOnly && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_5___default.a, {
        uiConfig: this.uiConfig,
        firebaseAuth: firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth(),
        className: "oauth-container"
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "links-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "#",
        className: "forgot"
      }, "Forgot password"), this.props.pageName === 'login' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/dang-ki"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        className: "login-register"
      }, "Create an account")), this.props.pageName === 'register' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/dang-nhap"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        className: "login-register"
      }, "Already have an account? Log in")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
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
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/***/ }),

/***/ "./layouts/Page/CommonLayout.tsx":
/*!***************************************!*\
  !*** ./layouts/Page/CommonLayout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _components_CommonLayout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CommonLayout/Footer */ "./components/CommonLayout/Footer.tsx");
/* harmony import */ var _components_CommonLayout_CurrentTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CommonLayout/CurrentTime */ "./components/CommonLayout/CurrentTime.tsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./services/index.ts");


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
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getServiceProxy"])();
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
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Fragment, null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_CommonLayout_CurrentTime__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        commonKeywords: this.state.commonKeywords,
        searchKeyword: this.props.searchKeyword,
        updateFilters: this.props.updateFilters,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        fullName: this.props.fullName
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["MainContent"], {
        topBrands: this.props.topBrands,
        hasSideBar: this.props.hasSideBar,
        hasMenuItems: this.props.hasMenuItems
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          marginBottom: '350px'
        },
        className: "push"
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_CommonLayout_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return CommonLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CommonLayout);

/***/ }),

/***/ "./layouts/Page/Page.tsx":
/*!*******************************!*\
  !*** ./layouts/Page/Page.tsx ***!
  \*******************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.children);
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./layouts/index.ts":
/*!**************************!*\
  !*** ./layouts/index.ts ***!
  \**************************/
/*! exports provided: Page, AuthLayout, AdminLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page/Page */ "./layouts/Page/Page.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _Page_Page__WEBPACK_IMPORTED_MODULE_0__["Page"]; });

/* harmony import */ var _Auth_AuthLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth/AuthLayout */ "./layouts/Auth/AuthLayout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayout", function() { return _Auth_AuthLayout__WEBPACK_IMPORTED_MODULE_1__["AuthLayout"]; });

/* harmony import */ var _Page_CommonLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page/CommonLayout */ "./layouts/Page/CommonLayout.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _Admin_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Admin/AdminLayout */ "./layouts/Admin/AdminLayout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayout", function() { return _Admin_AdminLayout__WEBPACK_IMPORTED_MODULE_3__["AdminLayout"]; });






/***/ }),

/***/ "./modules/admin/menuConfigs.ts":
/*!**************************************!*\
  !*** ./modules/admin/menuConfigs.ts ***!
  \**************************************/
/*! exports provided: appMenuConfigs, authMenuConfigs, statisticsMenuConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appMenuConfigs", function() { return appMenuConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authMenuConfigs", function() { return authMenuConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisticsMenuConfigs", function() { return statisticsMenuConfigs; });
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

/***/ }),

/***/ "./modules/machine-news/screens/HomePageScreen/components/BrandList.less":
/*!*******************************************************************************!*\
  !*** ./modules/machine-news/screens/HomePageScreen/components/BrandList.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./modules/machine-news/screens/HomePageScreen/components/BrandList.tsx":
/*!******************************************************************************!*\
  !*** ./modules/machine-news/screens/HomePageScreen/components/BrandList.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BrandList_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandList.less */ "./modules/machine-news/screens/HomePageScreen/components/BrandList.less");
/* harmony import */ var _BrandList_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BrandList_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
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

/* harmony default export */ __webpack_exports__["default"] = (BrandList);

/***/ }),

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var _modules_machine_news_screens_HomePageScreen_components_BrandList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/machine-news/screens/HomePageScreen/components/BrandList */ "./modules/machine-news/screens/HomePageScreen/components/BrandList.tsx");
/* harmony import */ var _components_CommonLayout_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CommonLayout/Footer */ "./components/CommonLayout/Footer.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services */ "./services/index.ts");








function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, _getPrototypeOf(Error).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        commonKeywords: this.props.commonKeywords,
        updateFilters: this.props.updateFilters,
        searchKeyword: this.props.searchKeyword,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          padding: '0px 70px 0px 90px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        lg: 4
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        lg: 20
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_modules_machine_news_screens_HomePageScreen_components_BrandList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        featureBrands: this.props.featureBrands
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["MainContent"], {
        hasSideBar: true,
        hasMenuItems: true,
        topBrands: this.props.topBrands
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          background: '#ffffff',
          padding: '42px 20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          textAlign: 'center',
          color: '#f81d22',
          fontSize: '142px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "exclamation-circle"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          fontSize: '32px',
          fontWeight: 550,
          textAlign: 'center',
          color: '#f81d22'
        }
      }, this.props.pathname === '/not-found' ? 'Rất tiếc, trang này không tồn tại' : 'Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại'))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CommonLayout_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var asPath, serviceProxy, _ref2, _ref3, topBrands, featureBrands, commonKeywords;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                asPath = _ref.asPath;
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_12__["getServiceProxy"])();
                _context.next = 4;
                return Promise.all([serviceProxy.findTopBrands(), serviceProxy.getFeatureBrands(10, 'order|asc', undefined, undefined), serviceProxy.getCommonKeywords(4, 'count|desc', undefined, undefined)]);

              case 4:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 3);
                topBrands = _ref3[0];
                featureBrands = _ref3[1];
                commonKeywords = _ref3[2];
                return _context.abrupt("return", {
                  pathname: asPath,
                  topBrands: topBrands.data,
                  featureBrands: featureBrands.data,
                  commonKeywords: commonKeywords.data
                });

              case 10:
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

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel,
    searchKeyword: rootState.searchModel.filters.keyword
  };
};

var mapDispatch = function mapDispatch(rootReducer) {
  return {
    profileReducers: rootReducer.profileModel,
    handleFiltersChange: rootReducer.searchModel.handleFiltersChange,
    updateFilters: rootReducer.searchModel.updateFilters
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_store__WEBPACK_IMPORTED_MODULE_11__["withRematch"])(_store__WEBPACK_IMPORTED_MODULE_11__["initStore"], mapState, mapDispatch)(Error));

/***/ }),

/***/ "./routes.ts":
/*!*******************!*\
  !*** ./routes.ts ***!
  \*******************/
/*! exports provided: Link, Router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var next_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-routes */ "next-routes");
/* harmony import */ var next_routes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_routes__WEBPACK_IMPORTED_MODULE_0__);

var routes = next_routes__WEBPACK_IMPORTED_MODULE_0___default()();
var Link = routes.Link;
var Router = routes.Router;

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./services/index.ts":
/*!***************************!*\
  !*** ./services/index.ts ***!
  \***************************/
/*! exports provided: getServiceProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceProxy", function() { return getServiceProxy; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_proxies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-proxies */ "./services/service-proxies.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.ts");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);





var getAuthHttp = function getAuthHttp(idToken) {
  return {
    fetch: function fetch(url, option) {
      option.headers.Authorization = "".concat(idToken);
      option.headers['Access-Control-Allow-Origin'] = '*';
      option.credentials = 'include';
      return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url, option);
    }
  };
};

var getServiceProxy = function getServiceProxy() {
  var idToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var httpOption = getAuthHttp(idToken);
  return new _service_proxies__WEBPACK_IMPORTED_MODULE_1__["ServiceProxy"](_config__WEBPACK_IMPORTED_MODULE_2__["config"].url.api, httpOption);
};



/***/ }),

/***/ "./services/service-proxies.ts":
/*!*************************************!*\
  !*** ./services/service-proxies.ts ***!
  \*************************************/
/*! exports provided: ServiceProxy, State, Reason, ActivateRolePayloadOperation, DeactivateRolePayloadOperation, UpdateRolePayloadOperation, FacebookLoginProvider, GoogleLoginProvider, PhoneLoginProvider, EmailLoginProvider, UpdateUserPayloadOperation, UpdateProfilePayloadOperation, ActivateUserPayloadOperation, DeactivateUserPayloadOperation, UpdateAvatarPayloadOperation, UpdateAdsensePayloadOperation, UpdateFeatureBrandPayloadOperation, UpdateRentalPeriodPayloadOperation, UpdateWeightRangePayloadOperation, ReadNotificationPayloadOperation, ReadAllNotificationsPayloadOperation, NotificationState, NotificationType, UpdateReportPayloadOperation, ReportState, ReportResolvedResult, CreateReportPayloadReason, UpdateIntroImagesShopPayloadOperation, UpdateLogoImageShopPayloadOperation, DeactivateShopPayloadOperation, ActivateShopPayloadOperation, UpdateShopPayloadOperation, UpdateBrandPayloadOperation, UpdateCategoryPayloadOperation, Payload9ResolvedResult, ReportsReason, SwaggerException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProxy", function() { return ServiceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reason", function() { return Reason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateRolePayloadOperation", function() { return ActivateRolePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateRolePayloadOperation", function() { return DeactivateRolePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRolePayloadOperation", function() { return UpdateRolePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function() { return FacebookLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function() { return GoogleLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneLoginProvider", function() { return PhoneLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailLoginProvider", function() { return EmailLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserPayloadOperation", function() { return UpdateUserPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilePayloadOperation", function() { return UpdateProfilePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateUserPayloadOperation", function() { return ActivateUserPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateUserPayloadOperation", function() { return DeactivateUserPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAvatarPayloadOperation", function() { return UpdateAvatarPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAdsensePayloadOperation", function() { return UpdateAdsensePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFeatureBrandPayloadOperation", function() { return UpdateFeatureBrandPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRentalPeriodPayloadOperation", function() { return UpdateRentalPeriodPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateWeightRangePayloadOperation", function() { return UpdateWeightRangePayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadNotificationPayloadOperation", function() { return ReadNotificationPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadAllNotificationsPayloadOperation", function() { return ReadAllNotificationsPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationState", function() { return NotificationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReportPayloadOperation", function() { return UpdateReportPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportState", function() { return ReportState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportResolvedResult", function() { return ReportResolvedResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReportPayloadReason", function() { return CreateReportPayloadReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIntroImagesShopPayloadOperation", function() { return UpdateIntroImagesShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLogoImageShopPayloadOperation", function() { return UpdateLogoImageShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateShopPayloadOperation", function() { return DeactivateShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateShopPayloadOperation", function() { return ActivateShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateShopPayloadOperation", function() { return UpdateShopPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBrandPayloadOperation", function() { return UpdateBrandPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCategoryPayloadOperation", function() { return UpdateCategoryPayloadOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payload9ResolvedResult", function() { return Payload9ResolvedResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsReason", function() { return ReportsReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerException", function() { return SwaggerException; });
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

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./store/store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["initStore"]; });

/* harmony import */ var _withRematch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withRematch */ "./store/withRematch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateStore", function() { return _withRematch__WEBPACK_IMPORTED_MODULE_1__["getOrCreateStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRematch", function() { return _withRematch__WEBPACK_IMPORTED_MODULE_1__["withRematch"]; });

/* harmony import */ var _models_profile_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/profile/interface */ "./store/models/profile/interface.ts");
/* harmony import */ var _models_profile_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_profile_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_profile_interface__WEBPACK_IMPORTED_MODULE_2__) if(["initStore","getOrCreateStore","withRematch","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_profile_interface__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/profile/model */ "./store/models/profile/model.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _models_follow_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/follow/interface */ "./store/models/follow/interface.ts");
/* harmony import */ var _models_follow_interface__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_follow_interface__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_follow_interface__WEBPACK_IMPORTED_MODULE_4__) if(["initStore","getOrCreateStore","withRematch","default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_follow_interface__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_follow_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/follow/model */ "./store/models/follow/model.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _models_search_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/search/interface */ "./store/models/search/interface.ts");
/* harmony import */ var _models_search_interface__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_models_search_interface__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_search_interface__WEBPACK_IMPORTED_MODULE_6__) if(["initStore","getOrCreateStore","withRematch","default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_search_interface__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/search/model */ "./store/models/search/model.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _models_metadata_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/metadata/interface */ "./store/models/metadata/interface.ts");
/* harmony import */ var _models_metadata_interface__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_models_metadata_interface__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_metadata_interface__WEBPACK_IMPORTED_MODULE_8__) if(["initStore","getOrCreateStore","withRematch","default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_metadata_interface__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_metadata_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/metadata/model */ "./store/models/metadata/model.ts");
/* empty/unused harmony star reexport */










/***/ }),

/***/ "./store/models/follow/interface.ts":
/*!******************************************!*\
  !*** ./store/models/follow/interface.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/models/follow/model.ts":
/*!**************************************!*\
  !*** ./store/models/follow/model.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style */ "antd/lib/message/style");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rematch/core */ "@rematch/core");
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./services/index.ts");




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
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getServiceProxy"])();
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
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getServiceProxy"])();
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
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getServiceProxy"])();
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
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getServiceProxy"])();
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
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getServiceProxy"])();
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
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getServiceProxy"])();
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
                serviceProxies = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getServiceProxy"])();
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
/* harmony default export */ __webpack_exports__["default"] = (followModel);

/***/ }),

/***/ "./store/models/metadata/interface.ts":
/*!********************************************!*\
  !*** ./store/models/metadata/interface.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/models/metadata/model.ts":
/*!****************************************!*\
  !*** ./store/models/metadata/model.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rematch/core */ "@rematch/core");
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
/* harmony default export */ __webpack_exports__["default"] = (metadataModel);

/***/ }),

/***/ "./store/models/profile/interface.ts":
/*!*******************************************!*\
  !*** ./store/models/profile/interface.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/models/profile/model.ts":
/*!***************************************!*\
  !*** ./store/models/profile/model.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rematch/core */ "@rematch/core");
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
/* harmony default export */ __webpack_exports__["default"] = (profileModel);

/***/ }),

/***/ "./store/models/search/interface.ts":
/*!******************************************!*\
  !*** ./store/models/search/interface.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/models/search/model.ts":
/*!**************************************!*\
  !*** ./store/models/search/model.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rematch/core */ "@rematch/core");
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./services/index.ts");


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
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getServiceProxy"])();
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
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getServiceProxy"])();
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
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getServiceProxy"])();
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
                serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getServiceProxy"])();
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
/* harmony default export */ __webpack_exports__["default"] = (searchModel);

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rematch/core */ "@rematch/core");
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rematch_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rematch/loading */ "@rematch/loading");
/* harmony import */ var _rematch_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rematch_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/profile/model */ "./store/models/profile/model.ts");
/* harmony import */ var _models_follow_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/follow/model */ "./store/models/follow/model.ts");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/search/model */ "./store/models/search/model.ts");
/* harmony import */ var _models_metadata_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/metadata/model */ "./store/models/metadata/model.ts");





 // loading plugin

var loadingOptions = {};
var loading = _rematch_loading__WEBPACK_IMPORTED_MODULE_1___default()(loadingOptions); // init store

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(_rematch_core__WEBPACK_IMPORTED_MODULE_0__["init"])({
    models: {
      profileModel: _models_profile_model__WEBPACK_IMPORTED_MODULE_2__["default"],
      followModel: _models_follow_model__WEBPACK_IMPORTED_MODULE_3__["default"],
      searchModel: _models_search_model__WEBPACK_IMPORTED_MODULE_4__["default"],
      metadataModel: _models_metadata_model__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    redux: {
      initialState: initialState
    },
    plugins: [loading]
  });
};

/***/ }),

/***/ "./store/withRematch.ts":
/*!******************************!*\
  !*** ./store/withRematch.ts ***!
  \******************************/
/*! exports provided: getOrCreateStore, withRematch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateStore", function() { return getOrCreateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRematch", function() { return withRematch; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./services/index.ts");


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
              serviceProxy = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getServiceProxy"])(props.req.cookies.token);

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

/***/ 2:
/*!********************************!*\
  !*** multi ./pages/_error.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_error.tsx */"./pages/_error.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@rematch/core":
/*!********************************!*\
  !*** external "@rematch/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rematch/core");

/***/ }),

/***/ "@rematch/loading":
/*!***********************************!*\
  !*** external "@rematch/loading" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rematch/loading");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/avatar/style":
/*!****************************************!*\
  !*** external "antd/lib/avatar/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar/style");

/***/ }),

/***/ "antd/lib/badge":
/*!*********************************!*\
  !*** external "antd/lib/badge" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge");

/***/ }),

/***/ "antd/lib/badge/style":
/*!***************************************!*\
  !*** external "antd/lib/badge/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge/style");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style":
/*!****************************************!*\
  !*** external "antd/lib/button/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style":
/*!*************************************!*\
  !*** external "antd/lib/col/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/divider/style":
/*!*****************************************!*\
  !*** external "antd/lib/divider/style" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider/style");

/***/ }),

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/dropdown/style":
/*!******************************************!*\
  !*** external "antd/lib/dropdown/style" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown/style");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/form/style":
/*!**************************************!*\
  !*** external "antd/lib/form/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style":
/*!**************************************!*\
  !*** external "antd/lib/icon/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input/style":
/*!***************************************!*\
  !*** external "antd/lib/input/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/layout/style":
/*!****************************************!*\
  !*** external "antd/lib/layout/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/list/style":
/*!**************************************!*\
  !*** external "antd/lib/list/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list/style");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/menu/style":
/*!**************************************!*\
  !*** external "antd/lib/menu/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/message/style":
/*!*****************************************!*\
  !*** external "antd/lib/message/style" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/modal/style":
/*!***************************************!*\
  !*** external "antd/lib/modal/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style":
/*!*************************************!*\
  !*** external "antd/lib/row/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/select/style":
/*!****************************************!*\
  !*** external "antd/lib/select/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "antd/lib/spin/style":
/*!**************************************!*\
  !*** external "antd/lib/spin/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin/style");

/***/ }),

/***/ "antd/lib/tabs":
/*!********************************!*\
  !*** external "antd/lib/tabs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ "antd/lib/tabs/style":
/*!**************************************!*\
  !*** external "antd/lib/tabs/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs/style");

/***/ }),

/***/ "antd/lib/tag":
/*!*******************************!*\
  !*** external "antd/lib/tag" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "antd/lib/tag/style":
/*!*************************************!*\
  !*** external "antd/lib/tag/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag/style");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-firebaseui/StyledFirebaseAuth":
/*!******************************************************!*\
  !*** external "react-firebaseui/StyledFirebaseAuth" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-firebaseui/StyledFirebaseAuth");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-google-maps/lib/components/places/SearchBox":
/*!********************************************************************!*\
  !*** external "react-google-maps/lib/components/places/SearchBox" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/places/SearchBox");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map