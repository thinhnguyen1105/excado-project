"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var React = _interopRequireWildcard(require("react"));

var _i18n = require("../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HamburgerMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HamburgerMenu, _React$Component);

  function HamburgerMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HamburgerMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HamburgerMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(HamburgerMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: "dark-overlay",
        style: this.props.toggle ? {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 3,
          backgroundColor: 'rgba(0,0,0,0.5)',
          transition: 'opacity .25s ease-in-out'
        } : {
          display: 'none'
        },
        onClick: this.props.handleHamburgerMenuClick
      }), React.createElement("nav", {
        role: "navigation"
      }, React.createElement("div", {
        id: "menuToggle"
      }, React.createElement("input", _extends({
        onClick: this.props.handleHamburgerMenuClick,
        type: "checkbox"
      }, this.props.toggle ? {
        checked: true
      } : {})), React.createElement("span", {
        className: "hamburger"
      }), React.createElement("span", {
        className: "hamburger"
      }), React.createElement("span", {
        className: "hamburger"
      }), React.createElement("ul", {
        id: "menu",
        style: this.props.handleHamburgerMenuClick ? {
          overflowY: 'scroll',
          height: '100vh'
        } : {}
      }, this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? React.createElement("div", null, React.createElement("a", {
        href: "/thong-tin-ca-nhan",
        className: "link"
      }, React.createElement(_row.default, {
        className: "menu-login"
      }, React.createElement(_col.default, {
        md: 6,
        xs: 6,
        sm: 6
      }, React.createElement("div", {
        className: "image-hamburger-rounded"
      }, React.createElement("img", {
        src: this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : '/static/images/default-avatar.jpg'
      }))), React.createElement(_col.default, {
        md: 18,
        xs: 18,
        sm: 18
      }, React.createElement("span", {
        className: "menu-item-text menu-text-fullname"
      }, this.props.profileState.authUser.fullName), React.createElement("br", null), React.createElement("span", {
        className: "menu-item-text",
        style: {
          color: '#FFC500',
          fontSize: '12px'
        }
      }, translate('common:edit-your-profile'))))), React.createElement("hr", null), React.createElement("a", {
        href: "/dang-tin"
      }, React.createElement(_row.default, {
        className: "menu-item"
      }, React.createElement(_col.default, {
        md: 3,
        xs: 3,
        sm: 3
      }, React.createElement("img", {
        src: "/static/images/create-news.png",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 21,
        xs: 21,
        sm: 21
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:createNews'))))), React.createElement("a", {
        href: "#"
      }, React.createElement(_row.default, {
        className: "menu-item"
      }, React.createElement(_col.default, {
        md: 3,
        xs: 3,
        sm: 3
      }, React.createElement("img", {
        src: "/static/images/icon-noti.png",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 21,
        xs: 21,
        sm: 21
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:notifications'))))), React.createElement("hr", null), React.createElement("a", {
        href: "/quan-li-tin-dang"
      }, React.createElement(_row.default, {
        className: "menu-item"
      }, React.createElement(_col.default, {
        md: 3,
        xs: 3,
        sm: 3
      }, React.createElement("img", {
        src: "/static/images/quan-li-tin-dang-icon.jpg",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 21,
        xs: 21,
        sm: 21
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:news-managenment'))))), React.createElement("a", {
        href: "/tin-da-luu"
      }, React.createElement(_row.default, {
        className: "menu-item"
      }, React.createElement(_col.default, {
        md: 3,
        xs: 3,
        sm: 3
      }, React.createElement("img", {
        src: "/static/images/tin-da-luu-icon.jpg",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 21,
        xs: 21,
        sm: 21
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:followed-news'))))), React.createElement("hr", null), this.props.profileState.authUser && this.props.profileState.authUser.shopDomain ? React.createElement("a", {
        href: "/cua-hang-cua-toi"
      }, React.createElement(_row.default, {
        className: "menu-item"
      }, React.createElement(_col.default, {
        md: 3,
        xs: 3,
        sm: 3
      }, React.createElement("img", {
        src: "/static/images/cua-hang-cua-toi-icon.jpg",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 21,
        xs: 21,
        sm: 21
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:my-shop'))))) : React.createElement("a", {
        href: "/tao-cua-hang"
      }, React.createElement(_row.default, {
        className: "menu-item"
      }, React.createElement(_col.default, {
        md: 3,
        xs: 3,
        sm: 3
      }, React.createElement("img", {
        src: "/static/images/tao-cua-hang-icon.jpg",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 21,
        xs: 21,
        sm: 21
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:create-your-shop'))))), React.createElement("a", {
        href: "#"
      }, React.createElement(_row.default, {
        className: "menu-item"
      }, React.createElement(_col.default, {
        md: 3,
        xs: 3,
        sm: 3
      }, React.createElement("img", {
        src: "/static/images/dang-ki-quang-cao-icon.jpg",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 21,
        xs: 21,
        sm: 21
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:advertisement-registration'))))), React.createElement("hr", null), React.createElement("a", {
        href: "#"
      }, React.createElement(_row.default, {
        className: "menu-item"
      }, React.createElement(_col.default, {
        md: 3,
        xs: 3,
        sm: 3
      }, React.createElement("img", {
        src: "/static/images/tro-giup-icon.jpg",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 21,
        xs: 21,
        sm: 21
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:help'))))), React.createElement("hr", null), React.createElement("a", {
        onClick: this.props.logOut
      }, React.createElement(_row.default, {
        className: "menu-item"
      }, React.createElement(_col.default, {
        md: 3,
        xs: 3,
        sm: 3
      }, React.createElement("img", {
        src: "/static/images/icon-signout.png",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 21,
        xs: 21,
        sm: 21
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:log-out')))))) : React.createElement(_row.default, {
        className: "menu-login",
        onClick: function onClick() {
          return _this2.props.profileReducers.openModal({
            modalName: 'login'
          });
        }
      }, React.createElement(_col.default, {
        md: 6,
        xs: 6,
        sm: 6
      }, React.createElement("img", {
        src: "/static/images/default-avatar.jpg",
        width: "100%"
      })), React.createElement(_col.default, {
        md: 18,
        xs: 18,
        sm: 18
      }, React.createElement("span", {
        className: "menu-item-text"
      }, translate('common:login'), " /\x1C ", translate('common:register'))))))));
    }
  }]);

  return HamburgerMenu;
}(React.Component);

var _default = (0, _i18n.withNamespaces)('common')(HamburgerMenu);

exports.default = _default;
//# sourceMappingURL=HamburgerMenu.js.map