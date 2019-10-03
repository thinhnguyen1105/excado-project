"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForgotPasswordModal = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _core = require("../../core");

var yup = _interopRequireWildcard(require("yup"));

var _i18n = require("../../i18n");

var _config = require("../../config");

var _formik = require("formik");

var _services = require("../../services");

require("./ForgotPasswordModal.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
      _regenerator.default.mark(function _callee(values) {
        var fullPhoneNumber, serviceProxy, phoneNoExistResult, appVerifier, confirmationResult;
        return _regenerator.default.wrap(function _callee$(_context) {
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
                serviceProxy = (0, _services.getServiceProxy)();
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
                return _app.default.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);

              case 11:
                confirmationResult = _context.sent;
                window.confirmationResult = confirmationResult;

                _message2.default.success(_this.props.t('common:sendVerifyCodeSuccess'));

                _this.setState({
                  gettingCode: false
                });

                _context.next = 19;
                break;

              case 17:
                _this.setState({
                  gettingCode: false
                });

                _message2.default.error(_this.props.t('common:notFoundPhoneNo'));

              case 19:
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_this.props.t(_context.t0.code));

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
      _regenerator.default.mark(function _callee2(values) {
        var idToken;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(_this.props.type === 'email')) {
                  _context2.next = 8;
                  break;
                }

                (0, _core.initializeFirebaseApp)();

                _app.default.auth().sendPasswordResetEmail(values.email);

                _message2.default.success(_this.props.t('common:send-reset-password-email-success'));

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
                return _app.default.auth().currentUser.getIdToken();

              case 16:
                idToken = _context2.sent;
                _context2.next = 19;
                return fetch("".concat(_config.config.url.api, "/auth/update-password"), {
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
                _app.default.auth().signOut();

                _message2.default.success(_this.props.t('common:update-password-success'));

                _this.setState({
                  loading: false
                });

                _this.props.onCancel();

                _context2.next = 26;
                break;

              case 25:
                _message2.default.error(_this.props.t('common:invalid-verify-code'));

              case 26:
                _context2.next = 32;
                break;

              case 28:
                _context2.prev = 28;
                _context2.t0 = _context2["catch"](0);

                _message2.default.error(_this.props.t("common:".concat(_context2.t0.code || _context2.t0.message)));

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
      var ForgotEmailPasswordValidateSchema = yup.object().shape({
        email: yup.string().required(translate('common:pleaseInputVerifyCode')).matches(_config.config.regex.email, translate('common:invalidEmail'))
      });
      var PhoneNumberValidateSchema = yup.object().shape({
        countryCode: yup.string().required(translate('common:pleaseInputCountryCode')),
        phoneNo: yup.string().matches(_config.config.regex.phone, translate('common:invalidPhoneNo')).required(translate('common:pleaseInputPhoneNo'))
      });
      var ForgotPhonePasswordValidateSchema = yup.object().shape({
        verifyCode: yup.string().required(translate('common:pleaseInputVerifyCode')),
        password: yup.string().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(_config.config.regex.password, translate('common:invalidPassword')),
        confirmPassword: yup.string().required(translate('common:pleaseConfirmPassword'))
      });

      if (this.props.type === 'email') {
        return _react.default.createElement(_formik.Formik, {
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
            _regenerator.default.mark(function _callee3(values, formikBag) {
              return _regenerator.default.wrap(function _callee3$(_context3) {
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
          return _react.default.createElement(_modal.default, {
            title: translate('common:forgotPassword'),
            visible: _this2.props.visible,
            onOk: context.handleSubmit,
            onCancel: _this2.props.onCancel,
            confirmLoading: _this2.state.loading,
            okText: translate('common:send-reset-password-email'),
            cancelText: translate('common:cancel')
          }, _react.default.createElement(_form.default, {
            onSubmit: context.handleSubmit
          }, _react.default.createElement(_form.default.Item, {
            label: translate('common:your-email'),
            validateStatus: context.errors.email ? 'error' : undefined,
            help: context.errors.email
          }, _react.default.createElement(_input.default, {
            value: context.values.email,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              return (0, _core.validateField)({
                fieldName: 'email',
                validateSchema: ForgotEmailPasswordValidateSchema,
                context: context
              });
            },
            name: "email",
            prefix: _react.default.createElement(_icon.default, {
              type: "mail",
              style: {
                color: 'rgba(0,0,0,.25)'
              }
            }),
            placeholder: translate('common:your-email')
          }))));
        });
      } else {
        return _react.default.createElement(_modal.default, {
          className: "reset-password-modal",
          visible: this.props.visible,
          footer: null,
          onCancel: this.props.onCancel,
          destroyOnClose: true
        }, _react.default.createElement(_formik.Formik, {
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
            _regenerator.default.mark(function _callee4(values) {
              return _regenerator.default.wrap(function _callee4$(_context4) {
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
          return _react.default.createElement(_form.default.Item, {
            validateStatus: context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined,
            help: context.errors.phoneNo || context.errors.countryCode
          }, _react.default.createElement(_input.default.Search, {
            addonBefore: _react.default.createElement(_select.default, {
              style: {
                width: 120
              },
              value: context.values.countryCode,
              onChange: context.handleChange
            }, _react.default.createElement(_select.default.Option, {
              value: "+84"
            }, "VN (+84)")),
            value: context.values.phoneNo,
            onChange: context.handleChange,
            onBlur: context.handleBlur,
            placeholder: translate('common:phoneNo'),
            enterButton: _react.default.createElement(_button.default, {
              type: "primary",
              loading: _this2.state.gettingCode
            }, translate('common:sendCode')),
            onSearch: context.handleSubmit,
            name: "phoneNo"
          }));
        }), _react.default.createElement(_formik.Formik, {
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
            _regenerator.default.mark(function _callee5(values, formikBag) {
              return _regenerator.default.wrap(function _callee5$(_context5) {
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
          return _react.default.createElement(_form.default, {
            onSubmit: context.handleSubmit
          }, _react.default.createElement(_form.default.Item, {
            validateStatus: context.errors.verifyCode ? 'error' : undefined,
            help: context.errors.verifyCode
          }, _react.default.createElement(_input.default, {
            value: context.values.verifyCode,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              return (0, _core.validateField)({
                fieldName: 'verifyCode',
                validateSchema: ForgotPhonePasswordValidateSchema,
                context: context
              });
            },
            placeholder: translate('common:verifyCode'),
            name: "verifyCode"
          })), _react.default.createElement(_form.default.Item, {
            validateStatus: context.errors.password ? 'error' : undefined,
            help: context.errors.password
          }, _react.default.createElement(_input.default, {
            value: context.values.password,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              return (0, _core.validateField)({
                fieldName: 'password',
                validateSchema: ForgotPhonePasswordValidateSchema,
                context: context
              });
            },
            placeholder: translate('common:password'),
            type: "password",
            name: "password"
          })), _react.default.createElement(_form.default.Item, {
            validateStatus: context.errors.confirmPassword ? 'error' : undefined,
            help: context.errors.confirmPassword
          }, _react.default.createElement(_input.default, {
            value: context.values.confirmPassword,
            onChange: context.handleChange,
            onBlur: function onBlur() {
              if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
                context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
              } else {
                (0, _core.validateField)({
                  fieldName: 'confirmPassword',
                  validateSchema: ForgotPhonePasswordValidateSchema,
                  context: context
                });
              }
            },
            placeholder: translate('common:confirmPassword'),
            type: "password",
            name: "confirmPassword"
          })), _react.default.createElement(_form.default.Item, {
            className: "button-container",
            style: {
              textAlign: 'right'
            }
          }, _react.default.createElement(_button.default, {
            type: "primary",
            className: "login-button",
            htmlType: "submit",
            loading: _this2.state.loading
          }, translate('common:update-password')), _react.default.createElement("br", null)));
        }));
      }
    }
  }]);

  return BaseForgotPasswordModal;
}(_react.default.Component);

var ForgotPasswordModal = (0, _i18n.withNamespaces)('common')(_form.default.create()(BaseForgotPasswordModal));
exports.ForgotPasswordModal = ForgotPasswordModal;
//# sourceMappingURL=ForgotPasswordModal.js.map