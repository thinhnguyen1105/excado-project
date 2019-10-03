"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

require("antd/lib/tag/style");

var _tag = _interopRequireDefault(require("antd/lib/tag"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/lib/dropdown"));

require("antd/lib/badge/style");

var _badge = _interopRequireDefault(require("antd/lib/badge"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var React = _interopRequireWildcard(require("react"));

require("./Header.less");

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));

var _RegisterModal = require("./RegisterModal");

var _LoginModal = require("./LoginModal");

var _config = require("../../config");

var _core = require("../../core");

var _app = _interopRequireDefault(require("firebase/app"));

var _i18n = require("../../i18n");

require("firebase/auth");

var _services = require("../../services");

var jsCookie = _interopRequireWildcard(require("js-cookie"));

var _NotificationDropdown = require("./NotificationDropdown");

var _HamburgerMenu = _interopRequireDefault(require("./HamburgerMenu"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Search = _input.default.Search;

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
      currentLanguage: _config.config.i18n.defaultLang,
      searchBarStatus: false
    });

    _defineProperty(_assertThisInitialized(_this), "loadProfileInfo",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var idToken, serviceProxy, profileData;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.props.profileState.authUser && _this.props.profileState.authUser.id)) {
                _context.next = 7;
                break;
              }

              idToken = jsCookie.get('token');
              serviceProxy = (0, _services.getServiceProxy)(idToken);
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
    _regenerator.default.mark(function _callee2() {
      var idToken, serviceProxy, countNotificationResult;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this.props.profileState.authUser && _this.props.profileState.authUser.id)) {
                _context2.next = 7;
                break;
              }

              idToken = jsCookie.get('token');
              serviceProxy = (0, _services.getServiceProxy)(idToken);
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
      _regenerator.default.mark(function _callee3(lang) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                (0, _i18n.changeLanguage)(lang);
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
    _regenerator.default.mark(function _callee4() {
      return _regenerator.default.wrap(function _callee4$(_context4) {
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
      _app.default.auth().signOut();

      window.location.href = '/auth/logout';
    });

    _defineProperty(_assertThisInitialized(_this), "loadNotifications",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(dropdownVisible) {
        var idToken, serviceProxy, notificationsResult;
        return _regenerator.default.wrap(function _callee5$(_context5) {
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
                idToken = jsCookie.get('token');
                serviceProxy = (0, _services.getServiceProxy)(idToken);
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
    _regenerator.default.mark(function _callee6() {
      var idToken, serviceProxy, notificationsResult;
      return _regenerator.default.wrap(function _callee6$(_context6) {
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
              idToken = jsCookie.get('token');
              serviceProxy = (0, _services.getServiceProxy)(idToken);
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
    _regenerator.default.mark(function _callee7() {
      var idToken, serviceProxy;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this.setState({
                notifications: _objectSpread({}, _this.state.notifications, {
                  data: _this.state.notifications.data.map(function (item) {
                    if (item.state === _core.notificationState.UNREAD) {
                      return _objectSpread({}, item, {
                        state: _core.notificationState.READ
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
                  idToken = jsCookie.get('token');
                  serviceProxy = (0, _services.getServiceProxy)(idToken);
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
      _regenerator.default.mark(function _callee8(notificationId) {
        var idToken, serviceProxy;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this.setState({
                  notifications: _objectSpread({}, _this.state.notifications, {
                    data: _this.state.notifications.data.map(function (item) {
                      return item._id === notificationId ? _objectSpread({}, item, {
                        state: _core.notificationState.READ
                      }) : item;
                    })
                  }),
                  unreadNotifications: _this.state.unreadNotifications - 1
                });

                try {
                  if (_this.props.profileState.authUser && _this.props.profileState.authUser.id) {
                    idToken = jsCookie.get('token');
                    serviceProxy = (0, _services.getServiceProxy)(idToken);
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
      (0, _core.initializeFirebaseApp)();
      window.recaptchaVerifier = new _app.default.auth.RecaptchaVerifier('recaptcha', {
        'size': 'invisible'
      });
      this.setState({
        currentLanguage: _i18n.i18n.i18n.language
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      return React.createElement("header", {
        id: "header"
      }, React.createElement("div", {
        className: "fb-customerchat",
        "data-page_id": "2326851900883942",
        "data-logged_in_greeting": "Ch\xFAng t\xF4i c\xF3 th\u1EC3 gi\xFAp g\xEC cho b\u1EA1n ? ",
        "data-logged_out_greeting": "Ch\xFAng t\xF4i c\xF3 th\u1EC3 gi\xFAp g\xEC cho b\u1EA1n ? "
      }), React.createElement("div", {
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
      }), React.createElement(_row.default, {
        className: "header-container"
      }, React.createElement(_col.default, {
        lg: 6
      }, React.createElement("a", {
        href: "/"
      }, React.createElement("img", {
        src: "/static/images/logo-timmay.png",
        width: "100%"
      }))), React.createElement(_col.default, {
        lg: 12
      }), React.createElement(_col.default, {
        lg: 6,
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }, React.createElement(_select.default, {
        value: this.state.currentLanguage,
        style: {
          width: '140px',
          border: '1px solid #000000',
          color: '#000000'
        },
        onChange: function onChange(value) {
          return _this2.changeLanguage(value);
        }
      }, React.createElement(_select.default.Option, {
        value: _config.config.i18n.VN
      }, translate('common:vn')), React.createElement(_select.default.Option, {
        value: _config.config.i18n.EN
      }, translate('common:en'))))), React.createElement(_row.default, {
        className: "mobile-header",
        style: this.state.searchBarStatus ? {
          zIndex: 4
        } : {}
      }, React.createElement(_col.default, {
        lg: 1,
        md: 1,
        xs: 0,
        sm: 0
      }), this.state.searchBarStatus ? React.createElement(_col.default, {
        lg: 22,
        md: 22,
        sm: 24,
        xs: 24
      }, React.createElement(Search, {
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
      })) : React.createElement(React.Fragment, null, React.createElement(_col.default, {
        lg: 7,
        md: 7,
        xs: 12,
        sm: 12
      }, React.createElement("a", {
        href: "/"
      }, React.createElement("img", {
        src: "/static/images/logo-timmay.png",
        width: "100%"
      }))), React.createElement(_col.default, {
        lg: 11,
        md: 11,
        xs: 3,
        sm: 3
      }), React.createElement(_col.default, {
        lg: 2,
        md: 2,
        xs: 4,
        sm: 4
      }, React.createElement("img", {
        className: "icon-search",
        src: "/static/images/icon-search.png",
        width: "30px",
        onClick: this.onTurnOnSearchBar
      })), React.createElement(_col.default, {
        lg: 2,
        md: 2,
        xs: 3,
        sm: 3
      }, React.createElement(_HamburgerMenu.default, {
        handleHamburgerMenuClick: this.handleHamburgerMenuClick,
        toggle: this.state.toggle,
        profileState: _objectSpread({}, this.props.profileState, {
          authUser: _objectSpread({}, this.props.profileState.authUser, this.state.userProfile)
        }),
        profileReducers: this.props.profileReducers,
        logOut: this.logOut
      }))), React.createElement(_col.default, {
        lg: 1,
        md: 1,
        xs: 0,
        sm: 0
      })), React.createElement("div", {
        className: "header-desktop"
      }, React.createElement(_row.default, {
        className: "search-bar"
      }, React.createElement(_col.default, {
        lg: 6,
        md: 8,
        sm: 0,
        xs: 0
      }), React.createElement(_col.default, {
        lg: 12,
        md: 8,
        sm: 0,
        xs: 0
      }, React.createElement(Search, {
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
      })), this.props.profileState.authUser && this.props.profileState.authUser.id ? React.createElement(_col.default, {
        lg: 6,
        md: 8,
        sm: 0,
        xs: 0,
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }
      }, React.createElement(_dropdown.default, {
        overlay: React.createElement(_NotificationDropdown.NotificationDropdown, {
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
      }, React.createElement(_badge.default, {
        count: this.state.unreadNotifications
      }, React.createElement("a", null, React.createElement(_icon.default, {
        type: "bell",
        theme: "filled",
        style: {
          color: '#000000',
          fontSize: '24px'
        }
      })))), React.createElement(_dropdown.default, {
        overlay: React.createElement(_DropdownMenu.default, {
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
      }, React.createElement(_button.default, {
        type: "default",
        size: "large",
        className: "search-bar-button",
        icon: "user",
        style: {
          marginRight: '10px',
          marginLeft: '16px'
        }
      }, translate('common:account'))), React.createElement("a", {
        href: "/dang-tin"
      }, React.createElement(_button.default, {
        icon: "plus",
        type: "default",
        size: "large",
        className: "search-bar-button",
        style: {
          width: '100%'
        }
      }, translate('common:createNews')))) : React.createElement(_col.default, {
        lg: 6,
        md: 8,
        sm: 0,
        xs: 0,
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }
      }, React.createElement(_button.default, {
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
      }, translate('common:register')), React.createElement(_button.default, {
        type: "default",
        size: "large",
        className: "search-bar-button",
        onClick: function onClick() {
          return _this2.props.profileReducers.openModal({
            modalName: 'login'
          });
        }
      }, translate('common:login')))), React.createElement(_row.default, {
        className: "popular-keyword"
      }, React.createElement(_col.default, {
        lg: 6
      }), React.createElement(_col.default, {
        lg: 12,
        style: {
          marginTop: '6px',
          display: 'flex',
          alignItems: 'center'
        }
      }, React.createElement("span", null, translate('common:commonKeywords'), ": \xA0 "), this.props.commonKeywords.slice(0, 4).map(function (item, index) {
        return React.createElement("a", {
          style: {
            color: '#000000'
          },
          key: index,
          onClick: function onClick() {
            window.location.href = "/tim-kiem?keyword=".concat(item.keyword);
          }
        }, React.createElement(_tag.default, {
          color: "orange"
        }, item.keyword));
      })), React.createElement(_col.default, {
        lg: 6
      }))), React.createElement(_LoginModal.LoginModal, {
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), React.createElement(_RegisterModal.RegisterModal, {
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), React.createElement("div", {
        id: "recaptcha"
      }));
    }
  }]);

  return MainHeader;
}(React.Component);

var Header = (0, _i18n.withNamespaces)('common')(MainHeader);
exports.Header = Header;
//# sourceMappingURL=Header.js.map