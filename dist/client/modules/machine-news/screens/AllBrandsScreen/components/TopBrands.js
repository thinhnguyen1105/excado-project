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

require("./TopBrands.less");

var _i18n = require("../../../../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBrands = function TopBrands(props) {
  return _react.default.createElement("div", {
    className: "top-brands"
  }, _react.default.createElement("h1", {
    className: "row-brand"
  }, props.t('common:top-brands')), _react.default.createElement(_row.default, {
    gutter: 10
  }, props.brands.slice(0, 16).sort(function (a, b) {
    return b.totalNews - a.totalNews;
  }).map(function (brand) {
    return _react.default.createElement(_col.default, {
      key: brand._id,
      lg: 6,
      md: 12,
      sm: 12,
      xs: 24
    }, _react.default.createElement("a", {
      className: "brand-link",
      title: brand.name,
      onClick: function onClick() {
        window.location.href = "/danh-sach-hang/".concat(brand.slug);
      }
    }, brand.name.toUpperCase(), " (", brand.totalNews, ")"));
  })));
};

var _default = (0, _i18n.withNamespaces)('common')(TopBrands);

exports.default = _default;
//# sourceMappingURL=TopBrands.js.map