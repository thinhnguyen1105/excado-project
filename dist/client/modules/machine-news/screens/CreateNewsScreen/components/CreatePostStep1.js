"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

require("./CreatePost.less");

var _core = require("../../../../../core");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _services = require("../../../../../services");

var jsCookies = _interopRequireWildcard(require("js-cookie"));

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

var CreatePostStep1 =
/*#__PURE__*/
function (_Component) {
  _inherits(CreatePostStep1, _Component);

  function CreatePostStep1() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreatePostStep1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreatePostStep1)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      getCode: false,
      loading: false,
      error: false
    });

    _defineProperty(_assertThisInitialized(_this), "select", function (value) {
      _this.props.changeData({
        newsType: value
      });

      _this.setState({
        error: false
      });

      _this.props.nextStep();
    });

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      if (_this.props.newsType) {
        _this.setState({
          error: false
        });

        _this.props.nextStep();
      } else {
        _this.setState({
          error: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updatePhoneNo",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values) {
        var idToken, getCustomTokenResult, result, serviceProxy;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  loading: true
                });

                _context.prev = 1;
                idToken = jsCookies.get('token');
                _context.next = 5;
                return fetch("/api/auth/get-custom-token", {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    idToken: idToken
                  })
                }).then(function (res) {
                  return res.json();
                });

              case 5:
                getCustomTokenResult = _context.sent;
                _context.next = 8;
                return window.confirmationResult.confirm(values.verifyCode);

              case 8:
                result = _context.sent;
                serviceProxy = (0, _services.getServiceProxy)(idToken);
                _context.next = 12;
                return serviceProxy.updateProfile(_this.props.userProfile._id, {
                  operation: 'updateDetail',
                  payload: {
                    phoneNo: result.user.phoneNumber
                  }
                });

              case 12:
                _this.props.updateUserPhoneNo({
                  phoneNo: result.user.phoneNumber
                });

                _context.next = 15;
                return _app.default.auth().signInWithCustomToken(getCustomTokenResult.customToken);

              case 15:
                _this.setState({
                  loading: false
                });

                _message2.default.success("".concat(_this.props.t('create-news:update-phone-number-successful')), 5);

                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](1);

                _this.setState({
                  loading: false
                });

                _message2.default.error(_context.t0.message);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 19]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getCode",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(values) {
        var fullPhoneNumber, appVerifier, confirmationResult;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  getCode: true
                });

                _context2.prev = 1;
                fullPhoneNumber = "".concat(values.countryCode).concat(values.phoneNo);
                appVerifier = window.recaptchaVerifier;
                _context2.next = 6;
                return _app.default.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier);

              case 6:
                confirmationResult = _context2.sent;
                window.confirmationResult = confirmationResult;

                _message2.default.success("".concat(_this.props.t('create-news:send-code-successful')));

                _this.setState({
                  getCode: false
                });

                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);

                _message2.default.error(_context2.t0.message);

                _this.setState({
                  getCode: false
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CreatePostStep1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _core.initializeFirebaseApp)();
      window.recaptchaVerifier = new _app.default.auth.RecaptchaVerifier('phoneRecaptcha', {
        'size': 'invisible'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var PhoneNumberValidateSchema = yup.object().shape({
        countryCode: yup.string().required("".concat(this.props.t('create-news:input-country-code'))),
        phoneNo: yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Số điện thoại không hợp lệ').required("".concat(this.props.t('create-news:input-phone-number')))
      });
      var VerifyCodeValidateSchema = yup.object().shape({
        verifyCode: yup.string().required("".concat(this.props.t('create-news:input-validate-phone')))
      });
      return _react.default.createElement(_row.default, {
        className: "create-post-step1"
      }, _react.default.createElement(_col.default, {
        xs: {
          span: 22,
          offset: 1
        },
        sm: {
          span: 20,
          offset: 2
        },
        md: {
          span: 16,
          offset: 4
        },
        lg: {
          span: 12,
          offset: 6
        }
      }, _react.default.createElement("div", {
        className: "white-box text-center"
      }, _react.default.createElement("h3", {
        className: "create-post__headline text-bold no-margin"
      }, this.props.t('create-news:select-type'))), _react.default.createElement("div", {
        className: "slight-margin-top"
      }, _react.default.createElement("h3", {
        className: ""
      }, this.props.t('create-news:news-type'))), _core.newsTypes.map(function (val) {
        return _react.default.createElement("div", {
          className: "white-box justify-space-between vertical-center cursor-pointer",
          style: {
            background: _this2.props.newsType === val.value ? '#FFC500' : 'white'
          },
          key: val.value,
          onClick: function onClick() {
            return _this2.select(val.value);
          }
        }, _react.default.createElement("h3", {
          className: "create-post__headline text-bold no-margin"
        }, _this2.props.t("common:".concat(val.value.toLowerCase()))), _react.default.createElement(_icon.default, {
          type: "right"
        }));
      }), _react.default.createElement("div", null, this.state.error && _react.default.createElement("h4", {
        style: {
          color: '#f5222d',
          marginTop: '15px'
        }
      }, this.props.t('create-news:news-type-required'))), _react.default.createElement("div", {
        className: "create-post__next-button text-center big-margin-top cursor-pointer",
        onClick: this.nextStep
      }, _react.default.createElement("h3", {
        className: "no-margin text-bold text-white"
      }, this.props.t('create-news:next').toUpperCase()))), _react.default.createElement(_modal.default, {
        title: this.props.t('create-news:update-phone-number'),
        visible: this.props.userProfile ? !Boolean(this.props.userProfile.phoneNo) : false,
        onOk: this.updatePhoneNo,
        closable: false,
        footer: null
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
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee3(values) {
            return _regenerator.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _this2.getCode(values);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }()
      }, function (context) {
        return _react.default.createElement(_form.default, null, _react.default.createElement(_form.default.Item, {
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
          onBlur: function onBlur() {
            return (0, _core.validateField)({
              fieldName: 'phoneNo',
              validateSchema: PhoneNumberValidateSchema,
              context: context
            });
          },
          placeholder: _this2.props.t('create-news:phone-number'),
          enterButton: _react.default.createElement(_button.default, {
            type: "primary",
            loading: _this2.state.getCode
          }, _this2.props.t('create-news:send-code')),
          onSearch: context.handleSubmit,
          name: "phoneNo"
        })));
      }), _react.default.createElement(_formik.Formik, {
        initialValues: {
          verifyCode: ''
        },
        validateOnChange: false,
        validationSchema: VerifyCodeValidateSchema,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref4 = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee4(values, formikBag) {
            return _regenerator.default.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this2.updatePhoneNo(values);

                  case 2:
                    formikBag.resetForm({});

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x4, _x5) {
            return _ref4.apply(this, arguments);
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
              validateSchema: VerifyCodeValidateSchema,
              context: context
            });
          },
          placeholder: _this2.props.t('create-news:verify-code'),
          name: "verifyCode"
        })), _react.default.createElement(_form.default.Item, {
          className: "button-container",
          style: {
            textAlign: 'right',
            marginBottom: '0px'
          }
        }, _react.default.createElement(_button.default, {
          type: "primary",
          className: "login-button",
          htmlType: "submit",
          loading: _this2.state.loading
        }, _this2.props.t('create-news:update'))));
      })), _react.default.createElement("div", {
        id: "phoneRecaptcha"
      }));
    }
  }]);

  return CreatePostStep1;
}(_react.Component);

var _default = _form.default.create()(CreatePostStep1);

exports.default = _default;
//# sourceMappingURL=CreatePostStep1.js.map