"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderDropdown = void 0;

require("antd/lib/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/lib/dropdown"));

require("antd/lib/avatar/style");

var _avatar = _interopRequireDefault(require("antd/lib/avatar"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

require("./HeaderDropdown.less");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _core = require("../../../core");

var _store = require("../../../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logOut = function logOut() {
  (0, _core.initializeFirebaseApp)();

  _app.default.auth().signOut();

  window.location.href = '/auth/logout';
};

var menu = _react.default.createElement(_menu.default, {
  className: "dropdownMenu",
  selectedKeys: []
}, _react.default.createElement(_menu.default.Item, {
  key: "homePage"
}, _react.default.createElement("a", {
  href: "/"
}, _react.default.createElement(_icon.default, {
  type: "home"
}), "\xA0 ", _react.default.createElement("span", null, "Quay l\u1EA1i trang ch\u1EE7"))), _react.default.createElement(_menu.default.Divider, null), _react.default.createElement(_menu.default.Item, {
  key: "logout"
}, _react.default.createElement("a", {
  onClick: logOut
}, _react.default.createElement(_icon.default, {
  type: "logout"
}), "\xA0 ", _react.default.createElement("span", null, "\u0110\u0103ng xu\u1EA5t"))));

var DropdownMenu = function DropdownMenu(props) {
  var avatarUrl = props.authUser && props.authUser.avatarUrl ? props.authUser.avatarUrl : '/static/images/default-avatar.jpg';
  return _react.default.createElement(_dropdown.default, {
    overlayClassName: "headerDropdown",
    overlay: menu
  }, _react.default.createElement("span", {
    className: "action account"
  }, _react.default.createElement(_avatar.default, {
    size: "small",
    className: "avatar",
    src: avatarUrl,
    alt: "avatar"
  }), _react.default.createElement("span", {
    className: "name"
  }, props.authUser ? props.authUser.fullName : 'Admin')));
};

var mapState = function mapState(rootState) {
  return {
    authUser: rootState.profileModel.authUser
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var HeaderDropdown = (0, _store.withRematch)(_store.initStore, mapState, mapDispatch)(DropdownMenu);
exports.HeaderDropdown = HeaderDropdown;
//# sourceMappingURL=HeaderDropdown.js.map