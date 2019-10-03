"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _react = _interopRequireDefault(require("react"));

require("./CreateShopStep5.less");

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateShopStep5 = function CreateShopStep5(props) {
  var translate = props.t;
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "step-5"
  }, _react.default.createElement(_row.default, {
    type: "flex",
    justify: "center"
  }, _react.default.createElement(_col.default, {
    xs: 12
  }, !_reactDeviceDetect.isMobile ? _react.default.createElement("h1", null, translate('create-shop:congratulation'), "!") : _react.default.createElement("h3", null, translate('create-shop:congratulation'), "!"), _react.default.createElement("div", {
    className: "icon-container"
  }, _react.default.createElement(_icon.default, {
    type: "check-circle",
    theme: "filled",
    className: "success-icon"
  })), !_reactDeviceDetect.isMobile ? _react.default.createElement("h2", null, translate('create-shop:create-success'), "!") : _react.default.createElement("h3", null, translate('create-shop:create-success'), "!"), _react.default.createElement("p", null, translate('create-shop:create-success-description'), "!")))), _reactDeviceDetect.isMobile ? _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement(_button.default, {
    className: "button-back-to-home"
  }, translate('create-shop:back-to-home-page'))) : _react.default.createElement("div", null));
};

var _default = CreateShopStep5;
exports.default = _default;
//# sourceMappingURL=CreateShopStep5.js.map