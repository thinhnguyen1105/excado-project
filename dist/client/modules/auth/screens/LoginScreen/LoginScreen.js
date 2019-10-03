"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginScreen = void 0;

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _LoginForm = require("./components/LoginForm");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _layouts = require("../../../../layouts");

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

var BaseLoginScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseLoginScreen, _React$Component);

  function BaseLoginScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseLoginScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseLoginScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeTab: 'email',
      loading: {
        login: false,
        getVerifyCode: false
      }
    });

    _defineProperty(_assertThisInitialized(_this), "activeTabChange", function (_ref) {
      var activeTab = _ref.activeTab;

      _this.setState({
        activeTab: activeTab
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(loginType) {
        var idToken, form, input;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    login: true
                  })
                });

                try {
                  idToken = '';

                  if (loginType === 'email') {
                    _this.props.form.validateFields(['email', 'password'],
                    /*#__PURE__*/
                    function () {
                      var _ref3 = _asyncToGenerator(
                      /*#__PURE__*/
                      _regenerator.default.mark(function _callee(error, values) {
                        return _regenerator.default.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (error) {
                                  _context.next = 6;
                                  break;
                                }

                                _context.next = 3;
                                return _app.default.auth().signInWithEmailAndPassword(values.email, values.password);

                              case 3:
                                _context.next = 5;
                                return _app.default.auth().currentUser.getIdToken();

                              case 5:
                                idToken = _context.sent;

                              case 6:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      return function (_x2, _x3) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                  } else if (loginType === 'phone') {
                    _this.props.form.validateFields(['verificationCode'],
                    /*#__PURE__*/
                    function () {
                      var _ref4 = _asyncToGenerator(
                      /*#__PURE__*/
                      _regenerator.default.mark(function _callee2(error, values) {
                        return _regenerator.default.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (error) {
                                  _context2.next = 6;
                                  break;
                                }

                                _context2.next = 3;
                                return window.confirmationResult.confirm(values.verificationCode);

                              case 3:
                                _context2.next = 5;
                                return _app.default.auth().currentUser.getIdToken();

                              case 5:
                                idToken = _context2.sent;

                              case 6:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      return function (_x4, _x5) {
                        return _ref4.apply(this, arguments);
                      };
                    }());
                  }

                  if (idToken) {
                    form = document.getElementById('form');
                    input = document.createElement('input');
                    input.type = 'text';
                    input.name = 'token';
                    input.value = idToken;
                    form.appendChild(input);
                    form.submit();

                    _message2.default.success('Log in success!!');
                  }
                } catch (error) {
                  _message2.default.error(error.message);
                }

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    login: false
                  })
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getCode", function () {
      _this.setState({
        loading: _objectSpread({}, _this.state.loading, {
          getVerifyCode: true
        })
      });

      try {
        _this.props.form.validateFields(['phoneNumber', 'phoneId'],
        /*#__PURE__*/
        function () {
          var _ref5 = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee4(error, values) {
            var phoneNumber, appVerifier, confirmationResult;
            return _regenerator.default.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (error) {
                      _context4.next = 8;
                      break;
                    }

                    phoneNumber = "".concat(values.phoneId).concat(values.phoneNumber);
                    appVerifier = window.recaptchaVerifier;
                    _context4.next = 5;
                    return _app.default.auth().signInWithPhoneNumber(phoneNumber, appVerifier);

                  case 5:
                    confirmationResult = _context4.sent;
                    window.confirmationResult = confirmationResult;

                    _message2.default.success('Send verification code success!!');

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x6, _x7) {
            return _ref5.apply(this, arguments);
          };
        }());
      } catch (error) {
        _message2.default.error(error.message);
      }

      _this.setState({
        loading: _objectSpread({}, _this.state.loading, {
          getVerifyCode: false
        })
      });
    });

    return _this;
  }

  _createClass(BaseLoginScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.recaptchaVerifier = new _app.default.auth.RecaptchaVerifier('recaptcha', {
        'size': 'invisible'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_layouts.AuthLayout, {
        pageName: "login"
      }, _react.default.createElement(_form.default, null, _react.default.createElement("div", {
        className: "form-container"
      }, _react.default.createElement(_LoginForm.LoginForm, {
        isLogin: this.state.loading.login,
        isSendingVerificationCode: this.state.loading.getVerifyCode,
        activeTab: this.state.activeTab,
        getFieldDecorator: this.props.form.getFieldDecorator,
        loginTabChange: this.activeTabChange,
        handleSubmit: this.handleSubmit,
        getVerificationCode: this.getCode
      }))));
    }
  }]);

  return BaseLoginScreen;
}(_react.default.Component);

var LoginScreen = _form.default.create()(BaseLoginScreen);

exports.LoginScreen = LoginScreen;
//# sourceMappingURL=LoginScreen.js.map