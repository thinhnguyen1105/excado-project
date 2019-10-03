"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _BrandList = _interopRequireDefault(require("../modules/machine-news/screens/HomePageScreen/components/BrandList"));

var _Footer = _interopRequireDefault(require("../components/CommonLayout/Footer"));

var _store = require("../store");

var _services = require("../services");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, _getPrototypeOf(Error).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_components.Header, {
        commonKeywords: this.props.commonKeywords,
        updateFilters: this.props.updateFilters,
        searchKeyword: this.props.searchKeyword,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), _react.default.createElement(_row.default, {
        style: {
          padding: '0px 70px 0px 90px'
        }
      }, _react.default.createElement(_col.default, {
        lg: 4
      }), _react.default.createElement(_col.default, {
        lg: 20
      }, _react.default.createElement(_BrandList.default, {
        featureBrands: this.props.featureBrands
      }))), _react.default.createElement(_components.MainContent, {
        hasSideBar: true,
        hasMenuItems: true,
        topBrands: this.props.topBrands
      }, _react.default.createElement("div", {
        style: {
          background: '#ffffff',
          padding: '42px 20px'
        }
      }, _react.default.createElement("div", {
        style: {
          textAlign: 'center',
          color: '#f81d22',
          fontSize: '142px'
        }
      }, _react.default.createElement(_icon.default, {
        type: "exclamation-circle"
      })), _react.default.createElement("div", {
        style: {
          fontSize: '32px',
          fontWeight: 550,
          textAlign: 'center',
          color: '#f81d22'
        }
      }, this.props.pathname === '/not-found' ? 'Rất tiếc, trang này không tồn tại' : 'Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại'))), _react.default.createElement(_Footer.default, null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var asPath, serviceProxy, _ref2, _ref3, topBrands, featureBrands, commonKeywords;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                asPath = _ref.asPath;
                serviceProxy = (0, _services.getServiceProxy)();
                _context.next = 4;
                return Promise.all([serviceProxy.findTopBrands(), serviceProxy.getFeatureBrands(10, 'order|asc', undefined, undefined), serviceProxy.getCommonKeywords(4, 'count|desc', undefined, undefined)]);

              case 4:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 3);
                topBrands = _ref3[0];
                featureBrands = _ref3[1];
                commonKeywords = _ref3[2];
                return _context.abrupt("return", {
                  pathname: asPath,
                  topBrands: topBrands.data,
                  featureBrands: featureBrands.data,
                  commonKeywords: commonKeywords.data
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Error;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel,
    searchKeyword: rootState.searchModel.filters.keyword
  };
};

var mapDispatch = function mapDispatch(rootReducer) {
  return {
    profileReducers: rootReducer.profileModel,
    handleFiltersChange: rootReducer.searchModel.handleFiltersChange,
    updateFilters: rootReducer.searchModel.updateFilters
  };
};

var _default = (0, _store.withRematch)(_store.initStore, mapState, mapDispatch)(Error);

exports.default = _default;
//# sourceMappingURL=_error.js.map