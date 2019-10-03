"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _react = _interopRequireDefault(require("react"));

require("./ShopIntroImages.less");

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShopIntroImages = function ShopIntroImages(props) {
  return _react.default.createElement(_row.default, {
    className: "outline-public-image-store"
  }, _react.default.createElement(_row.default, {
    className: "title"
  }, _react.default.createElement("strong", null, props.title)), props.introImages && props.introImages.length > 0 ? _react.default.createElement(_row.default, {
    gutter: !_reactDeviceDetect.isMobile ? 10 : 0,
    className: "image"
  }, _react.default.createElement(_col.default, {
    lg: 12,
    md: 12,
    xs: 24,
    sm: 24
  }, _react.default.createElement("a", {
    style: {
      backgroundImage: "url('".concat(props.introImages[0], "')")
    },
    className: "grid-post-image"
  })), _react.default.createElement(_col.default, {
    lg: 12,
    md: 12,
    xs: 24,
    sm: 24
  }, _react.default.createElement(_row.default, {
    gutter: !_reactDeviceDetect.isMobile ? 10 : 0
  }, props.introImages.slice(1).map(function (item, index) {
    return _react.default.createElement(_col.default, {
      lg: 8,
      md: 8,
      xs: 12,
      sm: 24,
      key: index
    }, _react.default.createElement("a", {
      style: {
        backgroundImage: "url('".concat(item, "')")
      },
      className: "grid-post-image-small"
    }));
  })))) : _react.default.createElement(_row.default, {
    className: "image"
  }, _react.default.createElement(_col.default, {
    xs: 24
  }, "C\u1EEDa h\xE0ng ch\u01B0a c\u1EADp nh\u1EADt h\xECnh \u1EA3nh ti\xEAu bi\u1EC3u")));
};

var _default = ShopIntroImages;
exports.default = _default;
//# sourceMappingURL=ShopIntroImages.js.map