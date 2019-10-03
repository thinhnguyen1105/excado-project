"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminLayout = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/layout/style");

var _layout = _interopRequireDefault(require("antd/lib/layout"));

require("antd/lib/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/lib/dropdown"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireWildcard(require("react"));

require("./AdminLayout.less");

var _SideBar = require("./components/SideBar");

var _CollapsedButton = require("./components/CollapsedButton");

var _HeaderDropdown = require("./components/HeaderDropdown");

var _i18n = require("../../i18n");

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

var BaseAdminLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseAdminLayout, _React$Component);

  function BaseAdminLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseAdminLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseAdminLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      openedSubMenu: _this.props.openedSubMenu,
      selectedMenuItem: _this.props.selectedMenuItem,
      menuCollapsed: false,
      isChangingLanguage: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        menuCollapsed: !_this.state.menuCollapsed
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openSubMenuChange", function (newOpenedSubMenu) {
      _this.setState({
        openedSubMenu: newOpenedSubMenu
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeLanguage", function (newLang) {
      _this.setState({
        isChangingLanguage: true
      });

      (0, _i18n.changeLanguage)(newLang);

      _this.setState({
        isChangingLanguage: false
      });
    });

    return _this;
  }

  _createClass(BaseAdminLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var menuTheme = 'light';
      var menuWidth = 256;
      var collapsedWidth = 80;
      var links = [{
        key: 'Pro Antd',
        title: 'Pro Antd',
        href: 'https://pro.ant.design',
        blankTarget: true
      }, {
        key: 'github',
        title: _react.default.createElement(_icon.default, {
          type: "github"
        }),
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true
      }, {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true
      }];
      return _react.default.createElement("div", {
        className: "admin-container"
      }, _react.default.createElement(_spin.default, {
        spinning: this.state.isChangingLanguage
      }, _react.default.createElement(_layout.default, null, _react.default.createElement(_SideBar.SideBar, {
        menuWidth: menuWidth,
        collapsedWidth: collapsedWidth,
        menuTheme: menuTheme,
        openedSubMenu: this.state.openedSubMenu,
        selectedMenuItem: this.state.selectedMenuItem,
        openSubMenuChange: this.openSubMenuChange,
        menuCollapsed: this.state.menuCollapsed
      }), _react.default.createElement(_layout.default, {
        style: {
          minHeight: '100vh'
        }
      }, _react.default.createElement(_layout.default.Header, {
        style: {
          padding: 0
        }
      }, _react.default.createElement("div", {
        className: "header"
      }, _react.default.createElement(_CollapsedButton.CollapsedButton, {
        menuCollapsed: this.state.menuCollapsed,
        toggle: this.toggle
      }), _react.default.createElement("div", {
        className: "right"
      }, _react.default.createElement(_dropdown.default, {
        placement: "bottomCenter",
        overlay: _react.default.createElement(_menu.default, {
          onClick: function onClick(_ref) {
            var key = _ref.key;
            return _this2.changeLanguage(key);
          },
          selectedKeys: [this.props.currentLanguage]
        }, _react.default.createElement(_menu.default.Item, {
          key: "en"
        }, _react.default.createElement("img", {
          src: "/static/images/en.png",
          style: {
            width: '20px',
            height: '20px'
          }
        }), " \xA0 ", translate("common:en")), _react.default.createElement(_menu.default.Item, {
          key: "vn"
        }, _react.default.createElement("img", {
          src: "/static/images/vn.png",
          style: {
            width: '20px',
            height: '20px'
          }
        }), " \xA0 ", translate("common:vn")))
      }, _react.default.createElement("span", {
        className: "ant-dropdown-link",
        style: {
          marginRight: '10px',
          cursor: 'pointer'
        }
      }, _react.default.createElement("img", {
        src: "/static/images/".concat(this.props.currentLanguage, ".png"),
        style: {
          width: '20px',
          height: '20px'
        }
      }), " \xA0 ", translate("common:".concat(this.props.currentLanguage)))), _react.default.createElement(_HeaderDropdown.HeaderDropdown, null)))), _react.default.createElement(_layout.default.Content, {
        className: "content"
      }, this.props.children), _react.default.createElement(_layout.default.Footer, {
        style: {
          padding: 0
        }
      }, _react.default.createElement("footer", {
        className: "footer"
      }, _react.default.createElement("div", {
        className: "links"
      }, links.map(function (link) {
        return _react.default.createElement("a", {
          key: link.key,
          title: link.key,
          target: link.blankTarget ? '_blank' : '_self',
          href: link.href
        }, link.title);
      })), _react.default.createElement("div", {
        className: "copyright"
      }, _react.default.createElement(_react.Fragment, null, "Copyright ", _react.default.createElement(_icon.default, {
        type: "copyright"
      }), " 2018 - Techkids Software"))))))));
    }
  }]);

  return BaseAdminLayout;
}(_react.default.Component);

var AdminLayout = (0, _i18n.withNamespaces)('common')(BaseAdminLayout);
exports.AdminLayout = AdminLayout;
//# sourceMappingURL=AdminLayout.js.map