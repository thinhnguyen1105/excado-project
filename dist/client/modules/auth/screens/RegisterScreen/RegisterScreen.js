"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterScreen = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

var _layouts = require("../../../../layouts");

var _RegisterForm = require("./components/RegisterForm");

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _config = require("../../../../config");

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

var ValidateRegistrationSchema = yup.object().shape({
  firstName: yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Required'),
  lastName: yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().matches(_config.config.regex.password, 'Password must be more than 6 characters and contain at least 1 number').required(),
  confirmPassword: yup.string().required('Required')
});

var RegisterScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegisterScreen, _React$Component);

  function RegisterScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RegisterScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegisterScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: {
        register: false
      }
    });

    _defineProperty(_assertThisInitialized(_this), "register",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    register: true
                  })
                });

                _context.prev = 1;
                _context.next = 4;
                return _app.default.auth().createUserWithEmailAndPassword(values.email, values.password);

              case 4:
                _app.default.auth().currentUser.sendEmailVerification();

                _message2.default.success('Register success. Please verify your email!!', 4);

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_context.t0.message);

              case 11:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    register: false
                  })
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(RegisterScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_layouts.AuthLayout, {
        pageName: "register"
      }, _react.default.createElement(_formik.Formik, {
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        },
        validateOnChange: false,
        validationSchema: ValidateRegistrationSchema,
        validate: function validate(values) {
          var errors = {};

          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Confirm password didn't match";
          }

          return errors;
        },
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee2(values, formikBag) {
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.register(values);

                  case 2:
                    formikBag.resetForm({});

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2, _x3) {
            return _ref2.apply(this, arguments);
          };
        }()
      }, function (props) {
        return _react.default.createElement("div", {
          className: "form-container"
        }, _react.default.createElement(_RegisterForm.RegisterForm, {
          isRegister: _this2.state.loading.register,
          handleChange: props.handleChange,
          handleSubmit: props.handleSubmit,
          error: props.errors,
          values: props.values
        }));
      }));
    }
  }]);

  return RegisterScreen;
}(_react.default.Component);

exports.RegisterScreen = RegisterScreen;
//# sourceMappingURL=RegisterScreen.js.map