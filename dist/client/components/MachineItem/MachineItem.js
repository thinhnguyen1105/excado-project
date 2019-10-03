"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var React = _interopRequireWildcard(require("react"));

var _core = require("../../core");

var _i18n = require("../../i18n");

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

var MachineItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MachineItem, _React$Component);

  function MachineItem() {
    _classCallCheck(this, MachineItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MachineItem).apply(this, arguments));
  }

  _createClass(MachineItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      var newsState = _core.newsStates.filter(function (item) {
        return item.value === _this.props.newsState;
      })[0];

      return React.createElement(_col.default, {
        className: "grid-post",
        lg: this.props.lg,
        md: this.props.md,
        sm: this.props.sm,
        xs: this.props.xs
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        style: {
          marginBottom: 10
        }
      }, this.props.currentUserId !== this.props.ownerId ? React.createElement("a", {
        className: "star-following",
        title: "Follow ".concat(this.props.title)
      }, React.createElement(_icon.default, {
        type: "star",
        theme: this.props.starStatus,
        onClick: function onClick() {
          return _this.props.changeFollowStatus(_this.props.starStatus, _this.props.id);
        }
      })) : null, React.createElement("a", {
        href: this.props.linkRedirect,
        title: this.props.title,
        style: {
          backgroundImage: "url('".concat(this.props.imageUrl, "')")
        },
        className: "grid-post-image"
      })), React.createElement("div", null, React.createElement(_row.default, null, React.createElement("a", {
        href: this.props.linkRedirect,
        title: this.props.title,
        className: "grid-post-title"
      }, this.props.title)), React.createElement(_row.default, null, React.createElement("div", {
        className: "grid-post-price"
      }, this.props.price ? (0, _core.formatMoney)(Number(this.props.price)) : "".concat(this.props.t('common:contact')))), React.createElement(_row.default, null, React.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 24,
        xs: 24
      }, newsState && React.createElement("div", {
        className: "grid-post-status"
      }, React.createElement("em", null, this.props.t("common:".concat(newsState.value.toLowerCase()))))), React.createElement(_col.default, {
        lg: 12,
        md: 12,
        sm: 0,
        xs: 0
      }, React.createElement("div", {
        className: "grid-post-owner-name"
      }, this.props.ownerName))), React.createElement(_row.default, null, React.createElement("div", {
        className: "grid-post-location"
      }, this.props.location)), this.props.isShowTotalFollowAndView ? React.createElement("div", null, this.props.totalFollow ? React.createElement(_row.default, null, React.createElement("div", {
        className: "grid-post-location"
      }, this.props.t('common:total-followers'), " : ", this.props.totalFollow)) : null, this.props.totalView ? React.createElement(_row.default, null, React.createElement("div", {
        className: "grid-post-location"
      }, this.props.t('common:total-views'), " : ", this.props.totalView)) : null) : null)));
    }
  }]);

  return MachineItem;
}(React.Component);

var _default = (0, _i18n.withNamespaces)('common')(MachineItem);

exports.default = _default;
//# sourceMappingURL=MachineItem.js.map