"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainContent = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var React = _interopRequireWildcard(require("react"));

var _LeftSideBar = require("./LeftSideBar");

var _LeftSideBarWithoutMenu = _interopRequireDefault(require("./LeftSideBarWithoutMenu"));

var _RightSideBar = require("./RightSideBar");

require("./MainContent.less");

var _services = require("../../services");

var _BrandList = _interopRequireDefault(require("../../modules/machine-news/screens/HomePageScreen/components/BrandList"));

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

var MainContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainContent, _React$Component);

  function MainContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MainContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      adsense: [],
      featureBrands: []
    });

    _defineProperty(_assertThisInitialized(_this), "getAdsense",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var serviceProxy, adsense;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context.next = 4;
              return serviceProxy.getAdsense(5, 'position|asc', undefined, undefined);

            case 4:
              adsense = _context.sent;

              _this.setState({
                adsense: adsense.data
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

    _defineProperty(_assertThisInitialized(_this), "getFeatureBrands",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var serviceProxy, featureBrands;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context2.next = 4;
              return serviceProxy.getFeatureBrands(10, 'order|asc', undefined, undefined);

            case 4:
              featureBrands = _context2.sent;

              _this.setState({
                featureBrands: featureBrands.data
              });

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    })));

    return _this;
  }

  _createClass(MainContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAdsense();
      this.getFeatureBrands();
    }
  }, {
    key: "render",
    value: function render() {
      var adsPosition1 = this.state.adsense.filter(function (item) {
        return item.position === 1;
      })[0];
      var adsPosition3 = this.state.adsense.filter(function (item) {
        return item.position === 3;
      })[0];
      return React.createElement("main", {
        className: "main-content"
      }, this.props.hasBrandList && React.createElement(_row.default, {
        className: "home-page-brand-list",
        type: "flex",
        justify: "center"
      }, React.createElement(_col.default, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }, React.createElement("a", {
        href: adsPosition1 && adsPosition1.hyperlink ? adsPosition1.hyperlink : '#'
      }, React.createElement("img", {
        className: "image-promote",
        src: adsPosition1 && adsPosition1.imageUrl ? adsPosition1.imageUrl : '/static/images/promotion.png',
        style: {
          maxHeight: '60px'
        }
      }))), React.createElement(_col.default, {
        lg: 18,
        md: 24,
        xs: 24,
        sm: 24
      }, React.createElement(_BrandList.default, {
        featureBrands: this.state.featureBrands
      })), React.createElement(_col.default, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }, React.createElement("a", {
        href: adsPosition3 && adsPosition3.hyperlink ? adsPosition3.hyperlink : '#'
      }, React.createElement("img", {
        className: "image-promote",
        src: adsPosition3 && adsPosition3.imageUrl ? adsPosition3.imageUrl : '/static/images/promotion.png',
        style: {
          maxHeight: '60px'
        }
      })))), this.props.hasSideBar ? React.createElement(_row.default, {
        className: "padding-of-page"
      }, React.createElement(_col.default, {
        lg: 3,
        md: 24,
        sm: 24,
        xs: 24
      }, this.props.hasMenuItems ? React.createElement(_LeftSideBar.LeftSideBar, {
        topBrands: this.props.topBrands,
        adsense: this.state.adsense
      }) : React.createElement(_LeftSideBarWithoutMenu.default, null)), React.createElement(_col.default, {
        className: "main-col",
        lg: 18,
        md: 24,
        sm: 24,
        xs: 24
      }, this.props.children), React.createElement(_col.default, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }, React.createElement(_RightSideBar.RightSideBar, {
        adsense: this.state.adsense
      }))) : React.createElement(_row.default, {
        className: "padding-of-page"
      }, React.createElement(_col.default, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      }), React.createElement(_col.default, {
        className: "main-col",
        lg: 18,
        md: 24,
        sm: 24,
        xs: 24,
        style: {
          padding: '0px 20px'
        }
      }, this.props.children), React.createElement(_col.default, {
        lg: 3,
        md: 0,
        sm: 0,
        xs: 0
      })));
    }
  }]);

  return MainContent;
}(React.Component);

exports.MainContent = MainContent;
//# sourceMappingURL=MainContent.js.map