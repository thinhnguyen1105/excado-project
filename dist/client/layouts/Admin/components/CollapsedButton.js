"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsedButton = void 0;

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

require("./CollapsedButton.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollapsedButton = function CollapsedButton(props) {
  return _react.default.createElement("span", {
    className: "trigger",
    onClick: props.toggle
  }, _react.default.createElement(_icon.default, {
    type: props.menuCollapsed ? 'menu-unfold' : 'menu-fold'
  }));
};

exports.CollapsedButton = CollapsedButton;
//# sourceMappingURL=CollapsedButton.js.map