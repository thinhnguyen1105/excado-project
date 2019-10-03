"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _react = _interopRequireDefault(require("react"));

require("./BrandDetails.less");

var _BrandFollowLetter = _interopRequireDefault(require("./BrandFollowLetter"));

var _TopBrands = _interopRequireDefault(require("./TopBrands"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrandDetails = function BrandDetails(props) {
  var arrayLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return _react.default.createElement(_row.default, {
    className: "outline"
  }, _react.default.createElement(_TopBrands.default, {
    brands: props.topBrands
  }), _react.default.createElement(_BrandFollowLetter.default, {
    arrayLetter: arrayLetter,
    listBrands: props.brands,
    loading: props.loading
  }));
};

var _default = BrandDetails;
exports.default = _default;
//# sourceMappingURL=BrandDetails.js.map