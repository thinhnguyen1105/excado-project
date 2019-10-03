"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

var _router = _interopRequireDefault(require("next/router"));

require("./NavBarNext.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBarNext = function NavBarNext(props) {
  return _react.default.createElement("div", {
    className: "header-detail-news"
  }, _react.default.createElement("a", {
    className: "icon-back",
    onClick: function onClick() {
      return _router.default.back();
    }
  }, _react.default.createElement(_icon.default, {
    type: "left"
  })), _react.default.createElement("span", {
    className: "sub-header"
  }, props.newsTitle), _react.default.createElement("a", {
    onClick: function onClick() {
      return props.changeFollowItemStatus(props.starStatus, props.newsData._id);
    }
  }, _react.default.createElement(_icon.default, {
    className: "icon-star",
    type: "star",
    theme: props.starStatus
  })));
};

var _default = NavBarNext;
exports.default = _default;
//# sourceMappingURL=NavBarNext.js.map