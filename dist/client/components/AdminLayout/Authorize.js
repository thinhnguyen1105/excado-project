"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authorize = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

require("./Authorize.less");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _router = _interopRequireDefault(require("next/router"));

var _store = require("../../store");

var _config = require("../../config");

var _core = require("../../core");

var _layouts = require("../../layouts");

var _i18n = require("../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

          (0, _core.initializeFirebaseApp)();

          _app.default.auth().onAuthStateChanged(
          /*#__PURE__*/
          function () {
            var _ref = _asyncToGenerator(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee(user) {
              var idTokenInfo, isAuthorized, filterPermission, authUser, pathname, openedSubMenu;
              return _regenerator.default.wrap(function _callee$(_context) {
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
                        (0, _store.getOrCreateStore)(_store.initStore, {}).dispatch.profileModel.updateProfileInfo(authUser);
                        pathname = window.location.pathname;
                        openedSubMenu = '';
                        (0, _core.getMenuConfigs)().map(function (subMenu) {
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
                          currentLanguage: _i18n.i18n.i18n.language ? _i18n.i18n.i18n.language : _config.config.i18n.defaultLang
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
              _router.default.push('/auth/login');
            }
          }

          if (this.state.isAuthorized === false) {
            _router.default.push('/_error');
          }

          var renderAdminLayout = function renderAdminLayout() {
            return _react.default.createElement("div", null, _this3.state.isAuthenticated && _this3.state.isAuthorized || !authenticationRequired ? _react.default.createElement(_layouts.AdminLayout, {
              openedSubMenu: _this3.state.openedSubMenu,
              selectedMenuItem: _this3.state.selectedMenuItem,
              currentLanguage: _this3.state.currentLanguage
            }, _react.default.createElement(Component, props)) : _react.default.createElement("div", {
              className: "loader"
            }, _react.default.createElement(_spin.default, {
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
    }(_react.default.Component);

    return _react.default.createElement(AuthorizeComponent, null);
  };
};

exports.Authorize = Authorize;
//# sourceMappingURL=Authorize.js.map