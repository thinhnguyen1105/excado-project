"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireWildcard(require("react"));

require("./NavLocation.less");

var _i18n = require("../../../../../i18n");

var _NavLocationAndFilterMobile = require("../components/NavLocationAndFilterMobile");

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

var Option = _select.default.Option;

var NavLocation =
/*#__PURE__*/
function (_Component) {
  _inherits(NavLocation, _Component);

  function NavLocation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavLocation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavLocation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      provinceModalVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "openProvinceModal", function () {
      _this.setState({
        provinceModalVisible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeProvinceModal", function () {
      _this.setState({
        provinceModalVisible: false
      });
    });

    return _this;
  }

  _createClass(NavLocation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var totalNewsCount = this.props.provinces.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.totalNews;
      }, 0);
      var selectedProvinceInfo = {};

      if (this.props.selectedProvince) {
        selectedProvinceInfo = this.props.provinces.filter(function (item) {
          return _this2.props.selectedProvince === item._id;
        })[0];
      }

      return _react.default.createElement("div", {
        className: "nav-location"
      }, !_reactDeviceDetect.isMobile ? _react.default.createElement(_row.default, null, _react.default.createElement("a", {
        onClick: this.openProvinceModal
      }, translate('common:select-location'), ": \xA0"), selectedProvinceInfo && selectedProvinceInfo.name ? _react.default.createElement("a", {
        className: "location"
      }, selectedProvinceInfo.name, " (", selectedProvinceInfo.totalNews, ")") : _react.default.createElement("a", {
        className: "location"
      }, translate('common:nationwide'), " (", totalNewsCount, ")"), _react.default.createElement("a", {
        className: "sort"
      }, _react.default.createElement(_select.default, {
        style: {
          width: '220px'
        },
        defaultValue: this.props.sortBy,
        onChange: function onChange(value) {
          return _this2.props.handleSortChange({
            sortBy: value
          });
        }
      }, _react.default.createElement(Option, {
        value: "elasticsearchCreatedAt|desc"
      }, translate('common:newest-post')), _react.default.createElement(Option, {
        value: "year|asc"
      }, translate('common:year-asc')), _react.default.createElement(Option, {
        value: "year|desc"
      }, translate('common:year-desc')), _react.default.createElement(Option, {
        value: "price|asc"
      }, translate('common:price-from-low-to-high')), _react.default.createElement(Option, {
        value: "price|desc"
      }, translate('common:price-from-high-to-low'))))) : _react.default.createElement(_NavLocationAndFilterMobile.NavLocationAndFilterMobile, {
        openModalFilter: this.props.openModalFilter,
        selectedProvinceInfo: selectedProvinceInfo,
        openModalSelectLocation: this.openProvinceModal
      }), _react.default.createElement(_modal.default, {
        title: translate('common:select-location'),
        visible: this.state.provinceModalVisible,
        onCancel: this.closeProvinceModal,
        width: 800,
        confirmLoading: this.props.loading.handleFiltersChange
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        lg: 6
      }, _react.default.createElement("a", {
        style: {
          color: this.props.selectedProvince ? '#FFC500' : '#000000',
          display: 'inline-block',
          margin: '4px'
        },
        onClick: function onClick() {
          _this2.props.handleFiltersChange({
            location: ''
          });

          _this2.setState({
            provinceModalVisible: false
          });
        }
      }, _react.default.createElement("span", {
        className: "city-item"
      }, "To\xE0n qu\u1ED1c (", totalNewsCount, ")"))), this.props.provinces.map(function (item) {
        return _react.default.createElement(_col.default, {
          lg: 6,
          key: item._id
        }, _react.default.createElement("a", {
          style: {
            color: _this2.props.selectedProvince === item._id ? '#FFC500' : '#000000',
            display: 'inline-block',
            margin: '4px'
          },
          onClick: function onClick() {
            _this2.props.handleFiltersChange({
              location: item._id
            });

            _this2.setState({
              provinceModalVisible: false
            });
          }
        }, _react.default.createElement("span", {
          className: "city-item"
        }, item.name, " (", item.totalNews, ")")));
      }))));
    }
  }]);

  return NavLocation;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('common')(NavLocation);

exports.default = _default;
//# sourceMappingURL=NavLocation.js.map