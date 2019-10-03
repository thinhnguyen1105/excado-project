"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ShopNewsDetails = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireWildcard(require("react"));

var _ListSelect = require("../../SearchDetailsScreen/components/ListSelect");

var _SeeMost = _interopRequireDefault(require("../../ShopInfoScreen/components/SeeMost"));

var _SearchBar = _interopRequireDefault(require("./SearchBar"));

var _ListMachine = _interopRequireDefault(require("./ListMachine"));

require("./ShopNewsDetails.less");

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShopNewsDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopNewsDetails, _Component);

  function ShopNewsDetails() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ShopNewsDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ShopNewsDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpenFilter: false
    });

    _defineProperty(_assertThisInitialized(_this), "changeStatusFilter", function () {
      _this.setState({
        isOpenFilter: !_this.state.isOpenFilter
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeFilterMobile", function () {
      _this.setState({
        isOpenFilter: false
      });
    });

    return _this;
  }

  _createClass(ShopNewsDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_row.default, {
        className: "outline-body-shop-news-detail",
        gutter: !_reactDeviceDetect.isMobile ? 16 : 0
      }, _react.default.createElement(_col.default, {
        lg: 16,
        md: 24,
        xs: 24,
        sm: 24
      }, _react.default.createElement(_row.default, {
        className: "filter-or-select-all-mobile"
      }, _react.default.createElement(_col.default, {
        lg: 0,
        md: 0,
        sm: 12,
        xs: 12
      }, _react.default.createElement("a", {
        href: "/bai-dang-cua-hang",
        title: this.props.shopName ? this.props.shopName : ''
      }, "T\u1EA5t c\u1EA3 s\u1EA3n ph\u1EA9m")), _react.default.createElement(_col.default, {
        className: "filter-button-mobile",
        lg: 0,
        md: 0,
        sm: 12,
        xs: 12
      }, _react.default.createElement("a", {
        onClick: function onClick() {
          return _this2.changeStatusFilter();
        }
      }, "B\u1ED9 l\u1ECDc ", _react.default.createElement(_icon.default, {
        type: "filter"
      })))), this.state.isOpenFilter && _reactDeviceDetect.isMobile ? _react.default.createElement(_row.default, null, _react.default.createElement(_SearchBar.default, {
        searchKeywords: this.props.searchKeywords,
        handleSearchChange: this.props.handleSearchChange,
        handleFiltersChange: this.props.handleFiltersChange,
        t: this.props.t
      }), _react.default.createElement(_ListSelect.ListSelect, {
        brands: this.props.brands,
        categories: this.props.categories,
        weightRanges: this.props.weightRanges,
        selectedBrand: this.props.selectedBrand,
        selectedCategory: this.props.selectedCategory,
        selectedState: this.props.selectedState,
        selectedNewsType: this.props.selectedNewsType,
        selectedPrice: Number(this.props.minPrice) > 0 ? "".concat(this.props.minPrice, "-").concat(this.props.maxPrice) : undefined,
        selectedWeightRange: this.props.selectedWeightRange,
        handleFiltersChange: this.props.handleFiltersChange
      }), _react.default.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, _react.default.createElement("a", {
        onClick: function onClick() {
          return _this2.closeFilterMobile();
        }
      }, "\u1EA8n b\u1ED9 l\u1ECDc"))) : _react.default.createElement("div", null), !_reactDeviceDetect.isMobile ? _react.default.createElement(_row.default, null, _react.default.createElement(_SearchBar.default, {
        searchKeywords: this.props.searchKeywords,
        handleSearchChange: this.props.handleSearchChange,
        handleFiltersChange: this.props.handleFiltersChange,
        t: this.props.t
      }), _react.default.createElement(_ListSelect.ListSelect, {
        brands: this.props.brands,
        categories: this.props.categories,
        weightRanges: this.props.weightRanges,
        selectedBrand: this.props.selectedBrand,
        selectedCategory: this.props.selectedCategory,
        selectedState: this.props.selectedState,
        selectedNewsType: this.props.selectedNewsType,
        selectedPrice: Number(this.props.minPrice) > 0 ? "".concat(this.props.minPrice, "-").concat(this.props.maxPrice) : undefined,
        selectedWeightRange: this.props.selectedWeightRange,
        handleFiltersChange: this.props.handleFiltersChange
      })) : _react.default.createElement("div", null), _react.default.createElement(_spin.default, {
        spinning: this.props.loading
      }, _react.default.createElement(_ListMachine.default, {
        data: this.props.data,
        hasNext: this.props.hasNext,
        hasPrev: this.props.hasPrev,
        getNextPage: this.props.getNextPage,
        getPrevPage: this.props.getPrevPage,
        profileState: this.props.profileState,
        changeFollowStatus: this.props.changeFollowStatus,
        t: this.props.t
      }))), _react.default.createElement(_col.default, {
        lg: 8,
        md: 24,
        xs: 24,
        sm: 24
      }, _react.default.createElement(_SeeMost.default, {
        title: "Nhi\u1EC1u ng\u01B0\u1EDDi xem nh\u1EA5t",
        dataMachine: this.props.resultSearchNewestPost.data
      })));
    }
  }]);

  return ShopNewsDetails;
}(_react.Component);

exports.ShopNewsDetails = ShopNewsDetails;
var _default = ShopNewsDetails;
exports.default = _default;
//# sourceMappingURL=ShopNewsDetails.js.map