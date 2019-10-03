"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLocationAndFilterMobile = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireWildcard(require("react"));

require("./NavLocationAndFilterMobile.less");

var _i18n = require("../../../../../i18n");

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

var BaseNavLocationAndFilterMobile =
/*#__PURE__*/
function (_Component) {
  _inherits(BaseNavLocationAndFilterMobile, _Component);

  function BaseNavLocationAndFilterMobile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseNavLocationAndFilterMobile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseNavLocationAndFilterMobile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpenSelecLocationModal: false
    });

    return _this;
  }

  _createClass(BaseNavLocationAndFilterMobile, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_row.default, {
        className: "outline-location-and-filter"
      }, _react.default.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("a", {
        onClick: this.props.openModalSelectLocation,
        className: "text"
      }, this.props.selectedProvinceInfo && this.props.selectedProvinceInfo.name ? this.props.selectedProvinceInfo.name : this.props.t('common:nationwide'), " ", _react.default.createElement(_icon.default, {
        type: "caret-down"
      }))), _react.default.createElement(_col.default, {
        className: "filter",
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12
      }, _react.default.createElement("a", {
        onClick: this.props.openModalFilter,
        className: "text"
      }, _react.default.createElement(_icon.default, {
        type: "filter"
      }), " B\u1ED9 l\u1ECDc")));
    }
  }]);

  return BaseNavLocationAndFilterMobile;
}(_react.Component);

var NavLocationAndFilterMobile = (0, _i18n.withNamespaces)('common')(BaseNavLocationAndFilterMobile);
exports.NavLocationAndFilterMobile = NavLocationAndFilterMobile;
//# sourceMappingURL=NavLocationAndFilterMobile.js.map