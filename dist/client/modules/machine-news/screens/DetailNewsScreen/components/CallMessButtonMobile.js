"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var React = _interopRequireWildcard(require("react"));

require("./CallMessButtonMobile.less");

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

var CallMessButtonMobile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CallMessButtonMobile, _React$Component);

  function CallMessButtonMobile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CallMessButtonMobile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CallMessButtonMobile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpenModalSelectMessage: false
    });

    _defineProperty(_assertThisInitialized(_this), "onClickButtonMess", function () {
      _this.setState({
        isOpenModalSelectMessage: true
      });
    });

    return _this;
  }

  _createClass(CallMessButtonMobile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // tslint:disable
      var callSvg = function callSvg() {
        return React.createElement("svg", {
          width: "17",
          height: "16",
          viewBox: "0 0 17 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, React.createElement("path", {
          d: "M16.0137 12.6552L13.4839 10.1784C12.9801 9.6871 12.1456 9.70203 11.6242 10.2127L10.5543 11.2598C10.4326 11.3789 10.2474 11.4051 10.0982 11.3231C9.29331 10.8866 8.19175 10.2882 7.03258 9.15259C5.86998 8.01458 5.25818 6.93454 4.81086 6.14613C4.7308 6.00445 4.75539 5.82581 4.87176 5.71206L5.52916 5.06945L5.9497 4.65725C6.47194 4.14586 6.48634 3.32921 5.98363 2.83648L3.45385 0.359373C2.95114 -0.132666 2.11632 -0.117739 1.59408 0.39365L0.89135 1.08554C0.885726 1.09108 0.885755 1.10016 0.891416 1.10566C0.896615 1.11071 0.897127 1.11888 0.892616 1.12456C0.657071 1.42087 0.460081 1.76176 0.313068 2.12905C0.176026 2.4826 0.0907036 2.81998 0.0516897 3.15805C-0.282352 5.86906 0.983128 8.34671 4.41748 11.7088C9.16479 16.3559 12.9905 16.0049 13.1555 15.9877C13.515 15.9457 13.8595 15.8616 14.2096 15.7285C14.5825 15.5859 14.9313 15.3927 15.2344 15.1617C15.2389 15.1583 15.2452 15.1585 15.2495 15.1622C15.2542 15.1663 15.2611 15.1661 15.2656 15.1618L15.98 14.477C16.5012 13.9657 16.5162 13.1487 16.0137 12.6552Z",
          fill: "white"
        }));
      };

      var messSvg = function messSvg() {
        return React.createElement("svg", {
          width: "20",
          height: "21",
          viewBox: "0 0 20 21",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, React.createElement("path", {
          d: "M16.4935 0.000183105H3.50647C1.57297 0.000183105 0 1.69984 0 3.78899V12.4443C0 14.5334 1.57297 16.233 3.50647 16.233L11.7785 16.2331L15.7384 20.5117C15.8726 20.6567 16.0519 20.7336 16.2344 20.7336C16.3248 20.7336 16.4159 20.7147 16.5026 20.6759C16.7647 20.5586 16.9356 20.2824 16.9356 19.9759V16.2031C18.6613 15.9676 20 14.3717 20 12.4443V3.78899C20 1.69984 18.427 0.000183105 16.4935 0.000183105ZM18.5974 12.4444C18.5974 13.6979 17.6536 14.7176 16.4935 14.7176H16.2343C15.847 14.7176 15.533 15.057 15.533 15.4754V18.1465L12.5649 14.9395C12.4334 14.7974 12.2551 14.7176 12.069 14.7176H3.50647C2.34636 14.7176 1.40259 13.6979 1.40259 12.4444V3.78905C1.40259 2.53555 2.34636 1.5158 3.50647 1.5158H16.4935C17.6536 1.5158 18.5974 2.53555 18.5974 3.78905V12.4444Z",
          fill: "#ffffff"
        }), React.createElement("path", {
          d: "M15.161 5.3656H4.83801C4.45073 5.3656 4.13672 5.70482 4.13672 6.12332C4.13672 6.54177 4.45073 6.88104 4.83801 6.88104H15.161C15.5483 6.88104 15.8623 6.54177 15.8623 6.12332C15.8623 5.70482 15.5484 5.3656 15.161 5.3656Z",
          fill: "#ffffff"
        }), React.createElement("path", {
          d: "M15.161 9.60907H4.83801C4.45073 9.60907 4.13672 9.9483 4.13672 10.3668C4.13672 10.7853 4.45073 11.1246 4.83801 11.1246H15.161C15.5483 11.1246 15.8623 10.7853 15.8623 10.3668C15.8623 9.94836 15.5484 9.60907 15.161 9.60907Z",
          fill: "#ffffff"
        }));
      };

      return React.createElement("div", null, this.props.phoneNo ? React.createElement(_row.default, {
        className: "call-mess-group"
      }, React.createElement(_col.default, {
        lg: 0,
        md: 0,
        sm: 12,
        xs: 12
      }, React.createElement("a", {
        href: "tel:".concat(this.props.phoneNo),
        title: "Call to ".concat(this.props.phoneNo)
      }, React.createElement(_button.default, {
        type: "primary",
        className: "call-button",
        size: "large"
      }, React.createElement("div", null, React.createElement(_icon.default, {
        component: callSvg
      }), React.createElement("span", null, " G\u1ECDi \u0111i\u1EC7n "))))), React.createElement(_col.default, {
        lg: 0,
        md: 0,
        sm: 12,
        xs: 12
      }, React.createElement(_button.default, {
        onClick: function onClick() {
          return _this2.onClickButtonMess();
        },
        type: "primary",
        className: "mess-button",
        size: "large"
      }, React.createElement("div", null, React.createElement(_icon.default, {
        component: messSvg
      }), React.createElement("span", null, " Nh\u1EAFn tin ")))), React.createElement(_modal.default, {
        title: "G\u1EEDi tin nh\u1EAFn cho ng\u01B0\u1EDDi b\xE1n",
        visible: this.state.isOpenModalSelectMessage,
        footer: null,
        centered: true,
        onCancel: function onCancel() {
          return _this2.setState({
            isOpenModalSelectMessage: false
          });
        }
      }, React.createElement("a", {
        href: "http://zalo.me/".concat(this.props.phoneNo)
      }, React.createElement(_button.default, {
        className: "button-send-message"
      }, "G\u1EEDi tin nh\u1EAFn qua Zalo")), React.createElement("a", {
        href: "sms:".concat(this.props.phoneNo),
        title: "Send message to ".concat(this.props.phoneNo)
      }, React.createElement(_button.default, {
        className: "button-send-message"
      }, "G\u1EEDi tin nh\u1EAFn qua SMS")))) : null);
    }
  }]);

  return CallMessButtonMobile;
}(React.Component);

var _default = CallMessButtonMobile;
exports.default = _default;
//# sourceMappingURL=CallMessButtonMobile.js.map