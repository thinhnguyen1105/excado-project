"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var React = _interopRequireWildcard(require("react"));

var _components = require("../../components");

var _Footer = _interopRequireDefault(require("../../components/CommonLayout/Footer"));

var _CurrentTime = _interopRequireDefault(require("../../components/CommonLayout/CurrentTime"));

var _services = require("../../services");

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

var Fragment = React.Fragment;

var CommonLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommonLayout, _React$Component);

  function CommonLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CommonLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CommonLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      commonKeywords: []
    });

    _defineProperty(_assertThisInitialized(_this), "getCommonKeywords",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var serviceProxy, commonKeywords;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context.next = 4;
              return serviceProxy.getCommonKeywords(4, 'count|desc', undefined, undefined);

            case 4:
              commonKeywords = _context.sent;

              _this.setState({
                commonKeywords: commonKeywords.data
              });

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    })));

    return _this;
  }

  _createClass(CommonLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCommonKeywords();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Fragment, null, React.createElement(_CurrentTime.default, null), React.createElement(_components.Header, {
        commonKeywords: this.state.commonKeywords,
        searchKeyword: this.props.searchKeyword,
        updateFilters: this.props.updateFilters,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        fullName: this.props.fullName
      }), React.createElement(_components.MainContent, {
        topBrands: this.props.topBrands,
        hasSideBar: this.props.hasSideBar,
        hasMenuItems: this.props.hasMenuItems
      }, this.props.children), React.createElement("div", {
        style: {
          marginBottom: '350px'
        },
        className: "push"
      }), React.createElement(_Footer.default, null));
    }
  }]);

  return CommonLayout;
}(React.Component);

var _default = CommonLayout;
exports.default = _default;
//# sourceMappingURL=CommonLayout.js.map