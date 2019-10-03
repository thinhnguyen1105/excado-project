"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterModal = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var React = _interopRequireWildcard(require("react"));

require("./RegisterModal.less");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../services");

var _core = require("../../core");

var _formik = require("formik");

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
                  loading: _objectSpread({}, _this.state.loading, {
                    getVerifyCode: true
                  })
                });

                _context.prev = 1;
                fullPhoneNumber = "".concat(values.countryCode).concat(values.phoneNo);
                serviceProxy = (0, _services.getServiceProxy)();
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
                return _app.default.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);

              case 11:
                confirmationResult = _context.sent;
                window.confirmationResult = confirmationResult;

                _message2.default.success(_this.props.t('common:sendVerifyCodeSuccess'));

                _context.next = 17;
                break;

              case 16:
                _message2.default.error(_this.props.t('common:phoneNoHasBeenUsed'));

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

                _message2.default.error(_this.props.t(_context.t0.code));

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
      _regenerator.default.mark(function _callee2(values) {
        var newUser, serviceProxy, idToken, phoneNo, _idToken, _serviceProxy;

        return _regenerator.default.wrap(function _callee2$(_context2) {
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
                return _app.default.auth().createUserWithEmailAndPassword(values.email, values.password);

              case 5:
                newUser = _context2.sent;
                newUser.user.sendEmailVerification(); // create mongodb record

                serviceProxy = (0, _services.getServiceProxy)();
                _context2.next = 10;
                return _app.default.auth().currentUser.getIdToken(true);

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

                _message2.default.success(_this.props.t('common:registerEmailSuccess'), 4);

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
                return _app.default.auth().currentUser.updateEmail("".concat(phoneNo.replace('+', ''), "@timmay.vn"));

              case 22:
                _context2.next = 24;
                return _app.default.auth().currentUser.updatePassword(values.password);

              case 24:
                _context2.next = 26;
                return _app.default.auth().currentUser.getIdToken(true);

              case 26:
                _idToken = _context2.sent;
                _serviceProxy = (0, _services.getServiceProxy)();
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

                _message2.default.success(_this.props.t('common:registerSuccess'));

              case 32:
                _context2.next = 38;
                break;

              case 34:
                _context2.prev = 34;
                _context2.t0 = _context2["catch"](1);

                _message2.default.error(_this.props.t(_context2.t0.code));

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
    _regenerator.default.mark(function _callee3() {
      var provider, serviceProxy, idToken;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              provider = new _app.default.auth.FacebookAuthProvider();
              _context3.next = 4;
              return _app.default.auth().signInWithPopup(provider);

            case 4:
              // create mongodb record
              serviceProxy = (0, _services.getServiceProxy)();
              _context3.next = 7;
              return _app.default.auth().currentUser.getIdToken(true);

            case 7:
              idToken = _context3.sent;
              serviceProxy.registerUser({
                idToken: idToken
              });

              _message2.default.success(_this.props.t('common:registerSuccess'));

              (0, _core.submitLoginForm)(idToken);
              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);

              _message2.default.error(_this.props.t("common:".concat(_context3.t0.code)));

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
    _regenerator.default.mark(function _callee4() {
      var provider, serviceProxy, idToken;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              provider = new _app.default.auth.GoogleAuthProvider();
              _context4.next = 4;
              return _app.default.auth().signInWithPopup(provider);

            case 4:
              // create mongodb record
              serviceProxy = (0, _services.getServiceProxy)();
              _context4.next = 7;
              return _app.default.auth().currentUser.getIdToken(true);

            case 7:
              idToken = _context4.sent;
              serviceProxy.registerUser({
                idToken: idToken
              });

              _message2.default.success(_this.props.t('common:registerSuccess'));

              (0, _core.submitLoginForm)(idToken);
              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);

              _message2.default.error(_this.props.t("common:".concat(_context4.t0.code)));

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
      var EmailValidateSchema = yup.object().shape({
        email: yup.string().required(translate('common:pleaseInputEmail')).matches(_config.config.regex.email, translate('common:invalidEmail')),
        password: yup.string().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(_config.config.regex.password, translate('common:invalidPassword')),
        confirmPassword: yup.string().required(translate('common:pleaseConfirmPassword'))
      });
      var PhoneNumberValidateSchema = yup.object().shape({
        countryCode: yup.string().required(translate('common:pleaseInputCountryCode')),
        phoneNo: yup.string().matches(_config.config.regex.phone, translate('common:invalidPhoneNo')).required(translate('common:pleaseInputPhoneNo'))
      });
      var VerifyCodeValidateSchema = yup.object().shape({
        verifyCode: yup.string().required(translate('common:pleaseInputVerifyCode')),
        password: yup.string().required(translate('common:pleaseInputPassword')).max(100, translate('common:passwordTooLong')).matches(_config.config.regex.password, translate('common:invalidPassword')),
        confirmPassword: yup.string().required(translate('common:pleaseConfirmPassword'))
      });
      return React.createElement(_modal.default, {
        className: "register-modal",
        visible: this.props.profileState.modal.register,
        footer: null,
        onCancel: function onCancel() {
          return _this2.props.profileReducers.closeModal({
            modalName: 'register'
          });
        },
        destroyOnClose: true
      }, React.createElement("h2", null, translate('common:register')), React.createElement("hr", {
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
          phoneNo: ''
        },
        validateOnChange: false,
        validationSchema: PhoneNumberValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref6 = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee5(values) {
            return _regenerator.default.wrap(function _callee5$(_context5) {
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
        return React.createElement(_form.default.Item, {
          validateStatus: context.errors.phoneNo || context.errors.countryCode ? 'error' : undefined,
          help: context.errors.phoneNo || context.errors.countryCode
        }, React.createElement(_input.default.Search, {
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
          onBlur: context.handleBlur,
          placeholder: translate('common:phoneNo'),
          enterButton: React.createElement(_button.default, {
            type: "primary",
            loading: _this2.state.loading.getVerifyCode
          }, translate('common:sendCode')),
          onSearch: context.handleSubmit,
          name: "phoneNo"
        }));
      }), React.createElement(_formik.Formik, {
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
          _regenerator.default.mark(function _callee6(values, formikBag) {
            return _regenerator.default.wrap(function _callee6$(_context6) {
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
        return React.createElement(_form.default, {
          onSubmit: context.handleSubmit
        }, React.createElement(_form.default.Item, {
          validateStatus: context.errors.verifyCode ? 'error' : undefined,
          help: context.errors.verifyCode
        }, React.createElement(_input.default, {
          value: context.values.verifyCode,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'verifyCode',
              validateSchema: VerifyCodeValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:verifyCode'),
          name: "verifyCode"
        })), React.createElement(_form.default.Item, {
          validateStatus: context.errors.password ? 'error' : undefined,
          help: context.errors.password
        }, React.createElement(_input.default, {
          value: context.values.password,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'password',
              validateSchema: VerifyCodeValidateSchema,
              context: context
            });
          },
          placeholder: translate('common:password'),
          type: "password",
          name: "password"
        })), React.createElement(_form.default.Item, {
          validateStatus: context.errors.confirmPassword ? 'error' : undefined,
          help: context.errors.confirmPassword
        }, React.createElement(_input.default, {
          value: context.values.confirmPassword,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
              context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
            } else {
              (0, _core.validateField)({
                fieldName: 'confirmPassword',
                validateSchema: VerifyCodeValidateSchema,
                context: context
              });
            }
          },
          placeholder: translate('common:confirmPassword'),
          type: "password",
          name: "confirmPassword"
        })), React.createElement(_form.default.Item, {
          className: "button-container"
        }, React.createElement(_button.default, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.register
        }, translate('common:register')), React.createElement("br", null)));
      })), React.createElement(_tabs.default.TabPane, {
        tab: React.createElement("span", null, React.createElement(_icon.default, {
          type: "mail"
        }), "Email"),
        key: "email"
      }, React.createElement(_formik.Formik, {
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
          _regenerator.default.mark(function _callee7(values, formikBag) {
            return _regenerator.default.wrap(function _callee7$(_context7) {
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
          validateStatus: context.errors.confirmPassword ? 'error' : undefined,
          help: context.errors.confirmPassword
        }, React.createElement(_input.default, {
          value: context.values.confirmPassword,
          onChange: context.handleChange,
          onBlur: function onBlur() {
            if (context.values.confirmPassword && context.values.confirmPassword !== context.values.password) {
              context.setFieldError('confirmPassword', translate('common:confirmPasswordDidntMatch'));
            } else {
              (0, _core.validateField)({
                fieldName: 'confirmPassword',
                validateSchema: EmailValidateSchema,
                context: context
              });
            }
          },
          placeholder: translate('common:confirmPassword'),
          type: "password",
          name: "confirmPassword"
        })), React.createElement(_form.default.Item, {
          className: "button-container"
        }, React.createElement(_button.default, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading.register
        }, translate('common:register')), React.createElement("br", null)));
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
      }, translate('common:registerFacebook')), React.createElement(_button.default, {
        type: "primary",
        className: "login-google-button",
        onClick: this.loginWithGoogle
      }, translate('common:registerGoogle'))), React.createElement("hr", null), React.createElement(_row.default, {
        style: {
          textAlign: 'center'
        }
      }, React.createElement("span", {
        style: {
          color: '#000'
        }
      }, translate('common:alreadyHaveAccount'), "? "), React.createElement("span", {
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
      }, translate('common:login'))), React.createElement("form", {
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
}(React.Component);

var RegisterModal = (0, _i18n.withNamespaces)('common')(BaseRegisterModal);
exports.RegisterModal = RegisterModal;
//# sourceMappingURL=RegisterModal.js.map