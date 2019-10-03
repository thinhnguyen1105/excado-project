"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

require("./CommonKeywords.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonKeywords = function CommonKeywords(props) {
  return _react.default.createElement("div", {
    className: "common-keywords"
  }, _react.default.createElement("h3", null, props.t('common:common-keywords')), _react.default.createElement(_row.default, null, _react.default.createElement("ul", null, props.commonKeywords.map(function (item, index) {
    return _react.default.createElement(_col.default, {
      lg: 6,
      md: 8,
      sm: 12,
      xs: 12,
      key: index
    }, _react.default.createElement("li", null, _react.default.createElement("a", {
      href: "/tim-kiem?keyword=".concat(item.keyword),
      target: "_blank",
      title: item.keyword
    }, _react.default.createElement("span", {
      className: "city-item"
    }, item.keyword))));
  }))));
};

var _default = CommonKeywords;
exports.default = _default;
//# sourceMappingURL=CommonKeywords.js.map