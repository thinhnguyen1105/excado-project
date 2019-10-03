webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommonLayout/Header.tsx":
/*!********************************************!*\
  !*** ./components/CommonLayout/Header.tsx ***!
  \********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "../../node_modules/antd/lib/tag/style/index.js");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tag */ "../../node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "../../node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "../../node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/dropdown/style */ "../../node_modules/antd/lib/dropdown/style/index.js");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/dropdown */ "../../node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/badge/style */ "../../node_modules/antd/lib/badge/style/index.js");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/badge */ "../../node_modules/antd/lib/badge/index.js");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/icon/style */ "../../node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/icon */ "../../node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/row/style */ "../../node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/row */ "../../node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/select/style */ "../../node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/select */ "../../node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/col/style */ "../../node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/col */ "../../node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/input/style */ "../../node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/input */ "../../node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Header.less */ "./components/CommonLayout/Header.less");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Header_less__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./DropdownMenu */ "./components/CommonLayout/DropdownMenu.tsx");
/* harmony import */ var _RegisterModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RegisterModal */ "./components/CommonLayout/RegisterModal.tsx");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./LoginModal */ "./components/CommonLayout/LoginModal.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../config */ "./config/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../core */ "./core/index.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! firebase/app */ "../../node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! firebase/auth */ "../../node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../services */ "./services/index.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/src/js.cookie.js");
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
        className: "fb-customerchat",
        "data-attribution": "setup_tool",
        "data-page_id": "2371640139534245",
        "data-logged_in_greeting": "Ch\xFAng t\xF4i c\xF3 th\u1EC3 gi\xFAp g\xEC cho b\u1EA1n ? ",
        "data-logged_out_greeting": "Ch\xFAng t\xF4i c\xF3 th\u1EC3 gi\xFAp g\xEC cho b\u1EA1n ? "
      }), react__WEBPACK_IMPORTED_MODULE_19__["createElement"]("div", {
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

/***/ })

})
//# sourceMappingURL=index.js.59b8def842b7b4a4ffba.hot-update.js.map