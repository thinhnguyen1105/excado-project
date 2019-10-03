"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthLayout = void 0;

require("antd/lib/divider/style");

var _divider = _interopRequireDefault(require("antd/lib/divider"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

require("./AuthLayout.less");

var _StyledFirebaseAuth = _interopRequireDefault(require("react-firebaseui/StyledFirebaseAuth"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _routes = require("../../routes");

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
      signInOptions: [_app.default.auth.GoogleAuthProvider.PROVIDER_ID, _app.default.auth.FacebookAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: function signInSuccessWithAuthResult(_authResult, _redirectUrl) {
          _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee() {
            var idToken, form, input;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _app.default.auth().currentUser.getIdToken();

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
          _regenerator.default.mark(function _callee2(error) {
            return _regenerator.default.wrap(function _callee2$(_context2) {
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
      return _react.default.createElement("div", {
        className: "auth-container"
      }, _react.default.createElement("div", {
        className: "form-wrapper"
      }, _react.default.createElement("div", {
        className: "logo"
      }, _react.default.createElement("span", null, "Techkids Software")), this.props.children, _react.default.createElement(_divider.default, {
        dashed: true
      }), this.state.clientOnly && _react.default.createElement(_StyledFirebaseAuth.default, {
        uiConfig: this.uiConfig,
        firebaseAuth: _app.default.auth(),
        className: "oauth-container"
      }), _react.default.createElement("div", {
        className: "links-wrapper"
      }, _react.default.createElement("a", {
        href: "#",
        className: "forgot"
      }, "Forgot password"), this.props.pageName === 'login' && _react.default.createElement(_routes.Link, {
        route: "/dang-ki"
      }, _react.default.createElement("a", {
        className: "login-register"
      }, "Create an account")), this.props.pageName === 'register' && _react.default.createElement(_routes.Link, {
        route: "/dang-nhap"
      }, _react.default.createElement("a", {
        className: "login-register"
      }, "Already have an account? Log in")), _react.default.createElement("form", {
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
}(_react.default.Component);

exports.AuthLayout = AuthLayout;
//# sourceMappingURL=AuthLayout.js.map