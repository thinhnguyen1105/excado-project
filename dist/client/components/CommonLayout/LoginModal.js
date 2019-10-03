"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginModal = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var React = _interopRequireWildcard(require("react"));

require("./LoginModal.less");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../services");

var _core = require("../../core");

var _formik = require("formik");

var _ForgotPasswordModal = require("./ForgotPasswordModal");

var yup = _interopRequireWildcard(require("yup"));

var _i18n = require("../../i18n");

var _config = require("../../config");

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
      _regenerator.default.mark(function _callee(values) {
        var email, signInResult, idToken, serviceProxy;
        return _regenerator.default.wrap(function _callee$(_context) {
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
                return _app.default.auth().signInWithEmailAndPassword(email, values.password);

              case 5:
                signInResult = _context.sent;

                if (!signInResult.user.emailVerified) {
                  _context.next = 16;
                  break;
                }

                _context.next = 9;
                return _app.default.auth().currentUser.getIdToken(true);

              case 9:
                idToken = _context.sent;
                serviceProxy = (0, _services.getServiceProxy)();
                serviceProxy.registerUser({
                  idToken: idToken
                });

                _message2.default.success(_this.props.t('common:loginSuccess'));

                (0, _core.submitLoginForm)(idToken);
                _context.next = 18;
                break;

              case 16:
                _message2.default.error(_this.props.t('common:unverifiedAccount'));

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

                _message2.default.error(_this.props.t(_context.t0.code));

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
    _regenerator.default.mark(function _callee2() {
      var provider, idToken, serviceProxy;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              provider = new _app.default.auth.FacebookAuthProvider();
              _context2.next = 4;
              return _app.default.auth().signInWithPopup(provider);

            case 4:
              _context2.next = 6;
              return _app.default.auth().currentUser.getIdToken(true);

            case 6:
              idToken = _context2.sent;
              serviceProxy = (0, _services.getServiceProxy)();
              _context2.next = 10;
              return serviceProxy.registerUser({
                idToken: idToken
              });

            case 10:
              _message2.default.success(_this.props.t('common:loginSuccess'));

              (0, _core.submitLoginForm)(idToken);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);

              _message2.default.error(_this.props.t("common:".concat(_context2.t0.code)));

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
    _regenerator.default.mark(function _callee3() {
      var provider, idToken, serviceProxy;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              provider = new _app.default.auth.GoogleAuthProvider();
              _context3.next = 4;
              return _app.default.auth().signInWithPopup(provider);

            case 4:
              _context3.next = 6;
              return _app.default.auth().currentUser.getIdToken(true);

            case 6:
              idToken = _context3.sent;
              serviceProxy = (0, _services.getServiceProxy)();
              _context3.next = 10;
              return serviceProxy.registerUser({
                idToken: idToken
              });

            case 10:
              _message2.default.success(_this.props.t('common:loginSuccess'));

              (0, _core.submitLoginForm)(idToken);
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);

              _message2.default.error(_this.props.t("common:".concat(_context3.t0.code)));

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
      var EmailValidateSchema = yup.object().shape({
        email: yup.string().required(translate('common:pleaseInputEmail')),
        password: yup.string().max(100, translate('common:passwordTooLong')).matches(/[^\s]/, translate('common:passwordCantContainSpace')).required(translate('common:pleaseInputPassword'))
      });
      var PhoneNumberValidateSchema = yup.object().shape({
        countryCode: yup.string().required(translate('common:pleaseInputCountryCode')),
        phoneNo: yup.string().matches(_config.config.regex.phone, translate('common:invalidPhoneNo')).required(translate('common:pleaseInputPhoneNo')),
        password: yup.string().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(/[^\s]/, translate('common:passwordCantContainSpace'))
      });
      return React.createElement(_modal.default, {
        className: "login-modal",
        visible: this.props.profileState.modal.login,
        footer: null,
        onCancel: function onCancel() {
          return _this2.props.profileReducers.closeModal({
            modalName: 'login'
          });
        },
        destroyOnClose: true
      }, React.createElement("h2", null, translate('common:login')), React.createElement("hr", {
        className: "title-underline"
      }), React.createElement(_tabs.default, {
        defaultActiveKey: this.state.activeTab,
        onChange: function onChange(activeTab) {
          return _this2.activeTabChange({
            activeTab: activeTab
          });
        }
      }, React.createElement(_tabs.default.TabPane, {
        tab: React.createElement("span", null, React.createElement(_icon.default, {
          type: "phone"
        }), translate('common:sms')),
        key: "phone"
      }, React.createElement(_formik.Formik, {
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
          _regenerator.default.mark(function _callee4(values, formikBag) {
            return _regenerator.default.wrap(function _callee4$(_context4) {
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
        return React.createElement(_form.default, {
          onSubmit: context.handleSubmit
        }, React.createElement(_form.default.Item, {
          validateStatus: context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined,
          help: context.errors.phoneNo || context.errors.countryCode
        }, React.createElement(_input.default, {
          addonBefore: React.createElement(_select.default, {
            style: {
              width: 120
            },
            value: context.values.countryCode,
            onChange: context.handleChange
          }, React.createElement(_select.default.Option, {
            value: "+84"
          }, "VN (+84)")),
          value: context.values.phoneNo,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'phoneNo',
              validateSchema: PhoneNumberValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:phoneNo'),
          name: "phoneNo"
        })), React.createElement(_form.default.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, React.createElement(_input.default, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'password',
              validateSchema: PhoneNumberValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), React.createElement(_form.default.Item, {
          className: "button-container"
        }, React.createElement(_button.default, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.login
        }, translate('common:login')), React.createElement("br", null), React.createElement(_button.default, {
          type: "default",
          className: "forgot-password-button",
          onClick: _this2.showForgotPasswordModal
        }, translate('common:forgotPassword'))));
      })), React.createElement(_tabs.default.TabPane, {
        tab: React.createElement("span", null, React.createElement(_icon.default, {
          type: "mail"
        }), translate('common:email')),
        key: "email"
      }, React.createElement(_formik.Formik, {
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
          _regenerator.default.mark(function _callee5(values, formikBag) {
            return _regenerator.default.wrap(function _callee5$(_context5) {
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
        return React.createElement(_form.default, {
          onSubmit: context.handleSubmit
        }, React.createElement(_form.default.Item, {
          validateStatus: context.errors.email ? 'error' : undefined,
          help: context.errors.email
        }, React.createElement(_input.default, {
          value: context.values.email,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'email',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:email'),
          type: "email",
          name: "email"
        })), React.createElement(_form.default.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, React.createElement(_input.default, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'password',
              validateSchema: EmailValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), React.createElement(_form.default.Item, {
          className: "button-container"
        }, React.createElement(_button.default, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.login
        }, translate('common:login')), React.createElement("br", null), React.createElement(_button.default, {
          type: "default",
          className: "forgot-password-button",
          onClick: _this2.showForgotPasswordModal
        }, translate('common:forgotPassword'))));
      }))), React.createElement(_row.default, null, React.createElement(_col.default, {
        lg: 10
      }, React.createElement("hr", null)), React.createElement(_col.default, {
        lg: 4,
        style: {
          textAlign: 'center'
        }
      }, React.createElement("span", null, translate('common:or'))), React.createElement(_col.default, {
        lg: 10
      }, React.createElement("hr", null))), React.createElement(_row.default, null, React.createElement(_button.default, {
        type: "primary",
        className: "login-facebook-button",
        onClick: this.loginWithFacebook
      }, translate('common:facebookLogin')), React.createElement(_button.default, {
        type: "primary",
        className: "login-google-button",
        onClick: this.loginWithGoogle
      }, translate('common:googleLogin'))), React.createElement("hr", null), React.createElement(_row.default, {
        style: {
          textAlign: 'center'
        }
      }, React.createElement("span", {
        style: {
          color: '#000'
        }
      }, translate('common:dontHaveAccount'), "? "), React.createElement("span", {
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
      }, translate('common:register'))), React.createElement("form", {
        id: "form",
        method: "post",
        action: "/auth/login",
        style: {
          display: 'none'
        }
      }), React.createElement(_ForgotPasswordModal.ForgotPasswordModal, {
        type: this.state.activeTab,
        visible: this.state.forgotPassword,
        onCancel: this.hideForgotPasswordModal
      }));
    }
  }]);

  return BaseLoginModal;
}(React.Component);

var LoginModal = (0, _i18n.withNamespaces)('common')(BaseLoginModal);
exports.LoginModal = LoginModal;
//# sourceMappingURL=LoginModal.js.map