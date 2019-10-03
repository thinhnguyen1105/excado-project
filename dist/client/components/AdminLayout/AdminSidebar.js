"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminSidebar = void 0;

require("antd/lib/layout/style");

var _layout = _interopRequireDefault(require("antd/lib/layout"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

var _i18n = require("../../i18n");

require("./AdminSidebar.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminSidebar = (0, _i18n.withNamespaces)('admin-reports')(function (props) {
  var menuWidth = 256;
  var menuTheme = 'light';
  var translate = props.t;
  return _react.default.createElement(_layout.default.Sider, {
    trigger: null,
    collapsible: true,
    breakpoint: "lg",
    width: menuWidth,
    theme: menuTheme,
    className: "sider"
  }, _react.default.createElement("div", {
    className: "logo",
    id: "logo"
  }, _react.default.createElement("a", {
    href: "/users"
  }, _react.default.createElement("img", {
    src: "/static/images/logo-timmay.png",
    alt: "logo"
  }))), _react.default.createElement(_menu.default, {
    key: "Menu",
    mode: "inline",
    theme: menuTheme,
    style: {
      padding: '16px 0',
      width: '100%'
    },
    className: "sider"
  }, _react.default.createElement(_menu.default.Item, {
    key: "/admin/reports"
  }, _react.default.createElement("a", {
    href: "/admin/reports"
  }, _react.default.createElement(_icon.default, {
    type: "warning"
  }), _react.default.createElement("span", null, translate('admin-reports:reports'))))));
});
exports.AdminSidebar = AdminSidebar;
//# sourceMappingURL=AdminSidebar.js.map