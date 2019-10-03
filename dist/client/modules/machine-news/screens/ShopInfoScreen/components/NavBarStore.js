"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _react = _interopRequireWildcard(require("react"));

require("./NavBarStore.less");

var _config = require("../../../../../config");

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBarStore = function NavBarStore(props) {
  var translate = props.t;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_row.default, {
    className: "navbar-store"
  }, !_reactDeviceDetect.isMobile ? _react.default.createElement(_row.default, {
    className: "logo-timmay"
  }, _react.default.createElement("a", {
    href: _config.config.url.main,
    title: props.shopName
  }, _react.default.createElement("img", {
    className: "image-logo",
    src: "/static/images/logo-timmay.png"
  }))) : _react.default.createElement("div", null), _react.default.createElement(_row.default, {
    className: "logo-store"
  }, _react.default.createElement(_col.default, {
    lg: 12,
    md: 24,
    xs: 24,
    sm: 24,
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, _react.default.createElement("img", {
    className: "image-logo-store",
    src: props.linkLogoStore ? props.linkLogoStore : '/static/images/icon-shop.png',
    style: {
      height: '42px'
    }
  }), _react.default.createElement("span", {
    style: {
      fontSize: '24px',
      fontWeight: 550,
      marginLeft: '12px'
    }
  }, props.shopName)), _react.default.createElement(_col.default, {
    lg: 12,
    md: 0,
    xs: 0,
    sm: 0
  }, _react.default.createElement("span", {
    className: "link-redirect"
  }, _react.default.createElement("a", {
    href: _config.config.url.main,
    title: props.shopName,
    className: "home-page"
  }, translate('common:home')), _react.default.createElement("a", {
    className: "all-product",
    href: '/bai-dang-cua-hang',
    title: props.shopName
  }, translate('common:all-products')))))));
};

var _default = NavBarStore;
exports.default = _default;
//# sourceMappingURL=NavBarStore.js.map