"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/skeleton/style");

var _skeleton = _interopRequireDefault(require("antd/lib/skeleton"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

require("./AdsensePositions.less");

var _i18n = require("../../../../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdsensePositions = function AdsensePositions(props) {
  var translate = props.t;

  var buttonType = function buttonType(position) {
    return props.adsenseInfo.position === position ? 'primary' : 'default';
  };

  return _react.default.createElement("div", null, _react.default.createElement("h2", {
    className: "adsense-title"
  }, translate('admin-adsense:adsense-position')), _react.default.createElement("div", {
    className: "adsense-positions"
  }, _react.default.createElement(_row.default, {
    className: "adsense-positions-header"
  }, _react.default.createElement(_col.default, {
    xs: 24
  }, _react.default.createElement("div", {
    className: "text-center"
  }, "Timmay.vn"))), _react.default.createElement(_row.default, {
    type: "flex",
    justify: "space-between",
    className: "adsense-positions-main"
  }, _react.default.createElement(_col.default, {
    xs: 5,
    className: "left"
  }, _react.default.createElement(_button.default, {
    onClick: function onClick() {
      return props.selectedAdsChange(1);
    },
    type: buttonType(1),
    block: true,
    className: "left-1"
  }, "1"), _react.default.createElement(_button.default, {
    onClick: function onClick() {
      return props.selectedAdsChange(2);
    },
    type: buttonType(2),
    block: true,
    className: "left-2"
  }, "2")), _react.default.createElement(_col.default, {
    xs: 14
  }, _react.default.createElement(_skeleton.default, {
    title: false,
    paragraph: {
      rows: 12,
      width: ['100%']
    }
  })), _react.default.createElement(_col.default, {
    xs: 5,
    className: "right"
  }, _react.default.createElement(_button.default, {
    onClick: function onClick() {
      return props.selectedAdsChange(3);
    },
    type: buttonType(3),
    block: true,
    className: "right-1"
  }, "3"), _react.default.createElement(_button.default, {
    onClick: function onClick() {
      return props.selectedAdsChange(4);
    },
    type: buttonType(4),
    block: true,
    className: "right-2"
  }, "4"), _react.default.createElement(_button.default, {
    onClick: function onClick() {
      return props.selectedAdsChange(5);
    },
    type: buttonType(5),
    block: true,
    className: "right-3"
  }, "5")))));
};

var _default = (0, _i18n.withNamespaces)('admin-adsense')(AdsensePositions);

exports.default = _default;
//# sourceMappingURL=AdsensePositions.js.map