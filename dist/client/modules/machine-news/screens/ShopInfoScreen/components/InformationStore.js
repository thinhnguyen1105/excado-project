"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _react = _interopRequireWildcard(require("react"));

require("./InformationStore.less");

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

var InformationStore =
/*#__PURE__*/
function (_Component) {
  _inherits(InformationStore, _Component);

  function InformationStore() {
    _classCallCheck(this, InformationStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(InformationStore).apply(this, arguments));
  }

  _createClass(InformationStore, [{
    key: "render",
    value: function render() {
      var translate = this.props.t;
      return _react.default.createElement(_row.default, {
        className: "outline-information-store"
      }, _react.default.createElement(_row.default, {
        className: "title"
      }, _react.default.createElement("strong", null, this.props.title)), _react.default.createElement(_row.default, {
        className: "details"
      }, _react.default.createElement("div", {
        className: "shop-info"
      }, _react.default.createElement("strong", null, translate('shop-info:address'), ": "), this.props.address), _react.default.createElement("div", {
        className: "shop-info"
      }, _react.default.createElement("strong", null, translate('shop-info:phone'), ": "), this.props.phoneNumber), _react.default.createElement("div", {
        className: "shop-info"
      }, _react.default.createElement("strong", null, "Email: "), this.props.email), _react.default.createElement("div", {
        className: "shop-info"
      }, _react.default.createElement("strong", null, "Website: "), this.props.website), _react.default.createElement("div", {
        className: "shop-info"
      }, _react.default.createElement("div", null, _react.default.createElement("strong", null, translate('shop-info:info'), ": ")), _react.default.createElement("div", {
        style: {
          wordBreak: 'break-word',
          whiteSpace: 'pre-line',
          padding: '0px 20px'
        }
      }, this.props.describe))));
    }
  }]);

  return InformationStore;
}(_react.Component);

var _default = InformationStore;
exports.default = _default;
//# sourceMappingURL=InformationStore.js.map