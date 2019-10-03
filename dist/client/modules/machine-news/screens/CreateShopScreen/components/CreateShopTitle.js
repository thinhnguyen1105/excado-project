"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/progress/style");

var _progress = _interopRequireDefault(require("antd/lib/progress"));

var React = _interopRequireWildcard(require("react"));

require("./CreateShopTitle.less");

var _reactDeviceDetect = require("react-device-detect");

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var CreateShopTitle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateShopTitle, _React$Component);

  function CreateShopTitle() {
    _classCallCheck(this, CreateShopTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(CreateShopTitle).apply(this, arguments));
  }

  _createClass(CreateShopTitle, [{
    key: "render",
    value: function render() {
      var _this = this;

      var translate = this.props.t;

      var titleForMobile = function titleForMobile() {
        switch (_this.props.currentStep) {
          case 1:
            return React.createElement("div", {
              className: "title-mobile"
            }, translate('create-shop:introduction'), " (", _this.props.currentStep, "/5)");
            break;

          case 2:
            return React.createElement("div", {
              className: "title-mobile"
            }, translate('create-shop:select-your-package'), " (", _this.props.currentStep, "/5)");
            break;

          case 3:
            return React.createElement("div", {
              className: "title-mobile"
            }, translate('create-shop:settings'), " (", _this.props.currentStep, "/5)");
            break;

          case 4:
            return React.createElement("div", {
              className: "title-mobile"
            }, translate('create-shop:payment'), " (", _this.props.currentStep, "/5)");
            break;

          case 5:
            return React.createElement("div", {
              className: "title-mobile"
            }, translate('create-shop:finish'), " (", _this.props.currentStep, "/5)");
            break;

          default:
            return 'NO DATA';
        }
      };

      return React.createElement("div", {
        className: "create-shop-title"
      }, React.createElement("h3", null, translate('create-shop:create-shop')), React.createElement("div", {
        className: "step"
      }, React.createElement("span", {
        className: this.props.currentStep >= 1 ? "active-step-title" : "step-title"
      }, translate('create-shop:introduction')), React.createElement("hr", {
        className: this.props.currentStep >= 2 ? "active-divider" : "basic-divider"
      }), React.createElement("span", {
        className: this.props.currentStep >= 2 ? "active-step-title" : "step-title"
      }, translate('create-shop:select-your-package')), React.createElement("hr", {
        className: this.props.currentStep >= 3 ? "active-divider" : "basic-divider"
      }), React.createElement("span", {
        className: this.props.currentStep >= 3 ? "active-step-title" : "step-title"
      }, translate('create-shop:settings')), React.createElement("hr", {
        className: this.props.currentStep >= 4 ? "active-divider" : "basic-divider"
      }), React.createElement("span", {
        className: this.props.currentStep >= 4 ? "active-step-title" : "step-title"
      }, translate('create-shop:payment')), React.createElement("hr", {
        className: this.props.currentStep >= 5 ? "active-divider" : "basic-divider"
      }), React.createElement("span", {
        className: this.props.currentStep >= 5 ? "active-step-title" : "step-title"
      }, translate('create-shop:finish'))), _reactDeviceDetect.isMobile ? React.createElement("div", null, React.createElement(_progress.default, {
        style: {
          top: -11
        },
        strokeColor: "#FFC500",
        showInfo: false,
        strokeWidth: 2,
        percent: this.props.currentStep * 20
      }), titleForMobile()) : React.createElement("div", null));
    }
  }]);

  return CreateShopTitle;
}(React.Component);

var _default = (0, _i18n.withNamespaces)('create-shop')(CreateShopTitle);

exports.default = _default;
//# sourceMappingURL=CreateShopTitle.js.map