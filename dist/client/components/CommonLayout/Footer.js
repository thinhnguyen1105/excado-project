"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var React = _interopRequireWildcard(require("react"));

require("./Footer.less");

var _Container = _interopRequireDefault(require("./Container"));

var _i18n = require("../../i18n");

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Fragment = React.Fragment;

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var translate = this.props.t;
      return React.createElement("footer", {
        className: "footer"
      }, React.createElement(_Container.default, null, React.createElement(_row.default, {
        className: "all-link"
      }, !_reactDeviceDetect.isMobile ? React.createElement(Fragment, null, React.createElement(_col.default, {
        lg: 6,
        md: 6,
        xs: 0,
        sm: 0,
        className: "footer-item"
      }, React.createElement("h3", null, translate('common:link')), React.createElement("img", {
        src: "/static/images/Facebook.png"
      }), React.createElement("span", null, " Facebook"), React.createElement("br", null), React.createElement("img", {
        src: "/static/images/Youtube.png"
      }), React.createElement("span", null, " Youtube"), React.createElement("br", null)), React.createElement(_col.default, {
        lg: 6,
        md: 6,
        xs: 0,
        sm: 0,
        className: "footer-item"
      }, React.createElement("h3", null, translate('common:about-timmay')), React.createElement("span", null, translate('common:about-us')), React.createElement("br", null), React.createElement("span", null, translate('common:contact')), React.createElement("br", null)), React.createElement(_col.default, {
        lg: 6,
        md: 6,
        xs: 0,
        sm: 0,
        className: "footer-item"
      }, React.createElement("h3", null, translate('common:support-customer')), React.createElement("span", null, translate('common:central-of-support')), React.createElement("br", null), React.createElement("span", null, translate('common:posting-regulations')), React.createElement("br", null), React.createElement("span", null, translate('common:operating-regulations')), React.createElement("br", null)), React.createElement(_col.default, {
        lg: 6,
        md: 6,
        xs: 24,
        sm: 24,
        className: "footer-item"
      }, React.createElement("h3", null, translate('common:certificate')), React.createElement("img", {
        src: '/static/images/certificate.png',
        width: "50%"
      }))) : React.createElement(_row.default, null, React.createElement(_col.default, {
        lg: 24,
        md: 24,
        xs: 24,
        sm: 24,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px'
        }
      }, React.createElement("a", {
        href: "#",
        style: {
          marginLeft: '15px'
        }
      }, React.createElement("span", null, translate('common:about-us'), " "), React.createElement("br", null)), React.createElement("a", {
        href: "#",
        style: {
          marginLeft: '15px'
        }
      }, React.createElement("span", null, " Facebook "), React.createElement("br", null)), React.createElement("a", {
        href: "#",
        style: {
          marginLeft: '15px'
        }
      }, React.createElement("span", null, translate('common:central-of-support')), React.createElement("br", null))), React.createElement(_col.default, {
        lg: 24,
        md: 24,
        xs: 24,
        sm: 24,
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }, React.createElement("h3", null, translate('common:certificate')), React.createElement("img", {
        src: '/static/images/certificate.png',
        width: "50%"
      })))), React.createElement(_row.default, {
        style: {
          textAlign: 'center',
          paddingBottom: '20px'
        },
        className: "address"
      }, React.createElement("span", null, translate('common:info-footer'), React.createElement("br", null), translate('common:info-footer-2'), React.createElement("br", null), translate('common:info-footer-3'), React.createElement("br", null), translate('common:info-footer-4'))), React.createElement(_row.default, {
        className: "license"
      }, React.createElement("span", null, " B\u1EA3n quy\u1EC1n thu\u1ED9c v\u1EC1 Timmay.vn "))));
    }
  }]);

  return Footer;
}(React.Component);

var _default = (0, _i18n.withNamespaces)('common')(Footer);

exports.default = _default;
//# sourceMappingURL=Footer.js.map