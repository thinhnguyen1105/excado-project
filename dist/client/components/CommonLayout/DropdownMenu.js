"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/divider/style");

var _divider = _interopRequireDefault(require("antd/lib/divider"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

var _react = _interopRequireDefault(require("react"));

require("./DropdownMenu.less");

var _i18n = require("../../i18n");

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

var MenuItem = _menu.default.Item;

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      var translate = this.props.t;
      return _react.default.createElement(_menu.default, {
        className: "dropdown-menu",
        mode: "inline"
      }, _react.default.createElement(MenuItem, {
        key: "1",
        className: "user-image-container"
      }, _react.default.createElement("a", {
        href: "/thong-tin-ca-nhan",
        className: "link"
      }, _react.default.createElement("div", {
        className: "user-image"
      }, _react.default.createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundImage: "url(".concat(this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : '/static/images/default-avatar.jpg', ")"),
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }
      })), _react.default.createElement("div", {
        className: "user-info"
      }, _react.default.createElement("span", {
        className: "title"
      }, this.props.profileState.authUser.fullName), _react.default.createElement("span", {
        className: "title small-text"
      }, translate('common:edit-your-profile'))))), _react.default.createElement(_divider.default, null), _react.default.createElement(MenuItem, {
        key: "2",
        className: "menu-item-container"
      }, _react.default.createElement("a", {
        href: "/quan-li-tin-dang",
        className: "link"
      }, _react.default.createElement("img", {
        src: "/static/images/quan-li-tin-dang-icon.jpg",
        className: "item-image"
      }), _react.default.createElement("div", {
        className: "item-info"
      }, _react.default.createElement("span", {
        className: "item-title"
      }, translate('common:news-managenment'))))), _react.default.createElement(MenuItem, {
        key: "3",
        className: "menu-item-container"
      }, _react.default.createElement("a", {
        href: "/tin-da-luu",
        className: "link"
      }, _react.default.createElement("img", {
        src: "/static/images/tin-da-luu-icon.jpg",
        className: "item-image"
      }), _react.default.createElement("div", {
        className: "item-info"
      }, _react.default.createElement("span", {
        className: "item-title"
      }, translate('common:followed-news'))))), _react.default.createElement(_divider.default, null), this.props.profileState.authUser && this.props.profileState.authUser.shopDomain ? _react.default.createElement(MenuItem, {
        key: "4",
        className: "menu-item-container"
      }, _react.default.createElement("a", {
        href: "/cua-hang-cua-toi",
        className: "link"
      }, _react.default.createElement("img", {
        src: "/static/images/cua-hang-cua-toi-icon.jpg",
        className: "item-image"
      }), _react.default.createElement("div", {
        className: "item-info"
      }, _react.default.createElement("span", {
        className: "item-title"
      }, translate('common:my-shop'))))) : _react.default.createElement(MenuItem, {
        key: "4",
        className: "menu-item-container"
      }, _react.default.createElement("a", {
        href: "/tao-cua-hang",
        className: "link"
      }, _react.default.createElement("img", {
        src: "/static/images/cua-hang-cua-toi-icon.jpg",
        className: "item-image"
      }), _react.default.createElement("div", {
        className: "item-info"
      }, _react.default.createElement("span", {
        className: "item-title"
      }, translate('common:create-your-shop'))))), _react.default.createElement(MenuItem, {
        key: "5",
        className: "menu-item-container"
      }, _react.default.createElement("a", {
        href: "#",
        className: "link"
      }, _react.default.createElement("img", {
        src: "/static/images/dang-ki-quang-cao-icon.jpg",
        className: "item-image"
      }), _react.default.createElement("div", {
        className: "item-info"
      }, _react.default.createElement("span", {
        className: "item-title"
      }, translate('common:advertisement-registration'))))), _react.default.createElement(_divider.default, null), _react.default.createElement(MenuItem, {
        key: "6",
        className: "menu-item-container"
      }, _react.default.createElement("a", {
        href: "#",
        className: "link"
      }, _react.default.createElement("img", {
        src: "/static/images/tro-giup-icon.jpg",
        className: "item-image"
      }), _react.default.createElement("div", {
        className: "item-info"
      }, _react.default.createElement("span", {
        className: "item-title"
      }, translate('common:help'))))), _react.default.createElement(_divider.default, null), this.props.profileState.authUser && this.props.profileState.authUser.roles && this.props.profileState.authUser.roles.indexOf('5c7f747708898183ac62f2af') > -1 && _react.default.createElement(MenuItem, {
        key: "7",
        className: "menu-item-container"
      }, _react.default.createElement("a", {
        href: "/quan-ly/danh-sach-hang",
        className: "link"
      }, _react.default.createElement("img", {
        src: "/static/images/admin.png",
        className: "item-image"
      }), _react.default.createElement("div", {
        className: "item-info"
      }, _react.default.createElement("span", {
        className: "item-title"
      }, translate('common:admin'))))), this.props.profileState.authUser && this.props.profileState.authUser.roles && this.props.profileState.authUser.roles.indexOf('5c7f747708898183ac62f2af') > -1 && _react.default.createElement(_divider.default, null), _react.default.createElement(MenuItem, {
        key: "8",
        className: "menu-item-container"
      }, _react.default.createElement("a", {
        onClick: this.props.logOut,
        className: "link"
      }, _react.default.createElement("img", {
        src: "/static/images/icon-signout.png",
        className: "item-image"
      }), _react.default.createElement("div", {
        className: "item-info"
      }, _react.default.createElement("span", {
        className: "item-title"
      }, translate('common:log-out'))))));
    }
  }]);

  return DropdownMenu;
}(_react.default.Component);

var _default = (0, _i18n.withNamespaces)('common')(DropdownMenu);

exports.default = _default;
//# sourceMappingURL=DropdownMenu.js.map