"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _react = _interopRequireDefault(require("react"));

require("./CreateShopStep4.less");

var _reactDeviceDetect = require("react-device-detect");

var _i18n = require("../../../../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CreateShopStep4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateShopStep4, _React$Component);

  function CreateShopStep4() {
    _classCallCheck(this, CreateShopStep4);

    return _possibleConstructorReturn(this, _getPrototypeOf(CreateShopStep4).apply(this, arguments));
  }

  _createClass(CreateShopStep4, [{
    key: "render",
    value: function render() {
      var _this = this;

      var handlePurchaseClick = function handlePurchaseClick() {
        // if (props.selectedPaymentMethod && props.selectedPaymentMethod.value) {
        //   props.createShop();
        // } else {
        //   message.error('Vui lòng chọn hình thức thanh toán để tiếp tục');
        // }
        _this.props.createShop();
      };

      var translate = this.props.t;
      return _react.default.createElement("div", null, _react.default.createElement(_row.default, {
        className: "outline"
      }, _react.default.createElement(_row.default, {
        className: "title"
      }, _react.default.createElement("strong", null, translate('create-shop:invoice'))), _react.default.createElement("hr", {
        className: "shadow-line"
      }), _react.default.createElement(_row.default, {
        gutter: 30,
        style: {
          display: 'flex'
        }
      }, _react.default.createElement(_col.default, {
        lg: 8,
        md: 8,
        xs: 10,
        sm: 10
      }, _react.default.createElement("img", {
        width: "100%",
        src: "/static/images/home.png"
      })), _react.default.createElement(_col.default, {
        lg: 16,
        md: 16,
        xs: 14,
        sm: 14
      }, _react.default.createElement(_row.default, null, _react.default.createElement("div", null, translate('create-shop:store-registration-service')), _react.default.createElement("div", {
        style: {
          height: 100
        }
      }, _react.default.createElement("em", null, "Th\u1EDDi h\u1EA1n: \xA0", _react.default.createElement("strong", null, this.props.selectedPackage ? this.props.selectedPackage.label : '')), " ")), _react.default.createElement(_row.default, {
        className: "money-layout",
        type: "flex",
        justify: "start",
        style: {
          position: 'absolute',
          bottom: '0px',
          width: '100%'
        }
      }, _react.default.createElement(_col.default, {
        lg: 12
      }, _react.default.createElement("span", null, translate('create-shop:total'), ": \xA0 ", _react.default.createElement("span", {
        className: "price"
      }, translate('create-shop:free'))))))), _react.default.createElement("hr", {
        className: "shadow-line-balance"
      }), _react.default.createElement("div", {
        className: "title"
      }, _react.default.createElement("strong", null, translate('create-shop:select-your-payment'))), _react.default.createElement("div", {
        className: "align-text"
      }, _react.default.createElement("em", null, translate('create-shop:by-using-the-store-service'), ",")), _react.default.createElement("div", {
        className: "align-text"
      }, _react.default.createElement("em", null, translate('create-shop:you-agree-with'), " ", _react.default.createElement("a", {
        style: {
          color: '#2F8AFF'
        }
      }, translate('create-shop:term-of-use')), " ", translate('create-shop:of-timmay-vn'))), !_reactDeviceDetect.isMobile ? _react.default.createElement(_button.default, {
        className: "button-paid",
        onClick: handlePurchaseClick,
        loading: this.props.isCreating
      }, translate('create-shop:create-shop').toUpperCase()) : _react.default.createElement("div", null)), _reactDeviceDetect.isMobile ? _react.default.createElement(_button.default, {
        className: "button-paid-mobile",
        onClick: handlePurchaseClick,
        loading: this.props.isCreating
      }, translate('create-shop:create-shop').toUpperCase()) : _react.default.createElement("div", null));
    }
  }]);

  return CreateShopStep4;
}(_react.default.Component);

var _default = (0, _i18n.withNamespaces)('create-shop')(CreateShopStep4);

exports.default = _default;
//# sourceMappingURL=CreateShopStep4.js.map