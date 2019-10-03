"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeftSideBar = void 0;

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

var React = _interopRequireWildcard(require("react"));

require("./LeftSideBar.less");

var _reactDeviceDetect = require("react-device-detect");

var _i18n = require("../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SubMenu = _menu.default.SubMenu;

var BaseLeftSideBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseLeftSideBar, _React$Component);

  function BaseLeftSideBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseLeftSideBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseLeftSideBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpenDropdownMenu: false
    });

    return _this;
  }

  _createClass(BaseLeftSideBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var renderMenuBar = this.props.topBrands.map(function (brand) {
        return React.createElement(SubMenu, {
          key: brand._id,
          title: React.createElement("span", {
            style: {
              color: '#000',
              fontSize: '12px'
            }
          }, brand.name.toUpperCase(), " (", brand.totalNews, ")"),
          onTitleClick: function onTitleClick() {
            return window.location.href = "/danh-sach-hang/".concat(brand.slug);
          }
        }, brand.brandCategories.map(function (category) {
          return React.createElement(_menu.default.Item, {
            key: category.slug
          }, React.createElement("a", {
            title: category.name,
            style: {
              fontSize: '12px'
            }
          }, category.name, " (", category.totalNews, ")"));
        }));
      });
      var adsPosition2 = this.props.adsense.filter(function (item) {
        return item.position === 2;
      })[0];
      return React.createElement("div", {
        className: _reactDeviceDetect.isMobile ? 'left-sidebar-mobile' : 'left-sidebar'
      }, React.createElement("span", {
        className: "title"
      }, React.createElement("b", null, translate('common:list-of-brand')), _reactDeviceDetect.isMobile ? React.createElement("a", {
        style: {
          float: 'right',
          color: 'white'
        },
        onClick: function onClick() {
          return _this2.setState({
            isOpenDropdownMenu: !_this2.state.isOpenDropdownMenu
          });
        }
      }, React.createElement(_icon.default, {
        type: "caret-down"
      })) : React.createElement("div", null)), _reactDeviceDetect.isMobile && this.state.isOpenDropdownMenu ? React.createElement(_menu.default, {
        style: {
          width: '100%',
          background: '#fff',
          border: '1px solid #F4F4F4',
          borderBottom: 'none',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
        },
        mode: 'inline',
        onClick: function onClick(info) {
          var selectedBrand = _this2.props.topBrands.filter(function (brand) {
            return brand._id === info.keyPath[1];
          })[0].slug;

          var selectedCategory = info.keyPath[0];
          window.location.href = "/tim-kiem?brand=".concat(selectedBrand, "&category=").concat(selectedCategory);
        }
      }, renderMenuBar) : React.createElement("div", null), !_reactDeviceDetect.isMobile ? React.createElement(_menu.default, {
        style: {
          width: '100%',
          background: '#fff',
          border: '1px solid #F4F4F4',
          borderBottom: 'none',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
        } // mode={window.innerWidth < 992 ? 'inline' : 'vertical'}
        ,
        mode: 'vertical',
        onClick: function onClick(info) {
          var selectedBrand = _this2.props.topBrands.filter(function (brand) {
            return brand._id === info.keyPath[1];
          })[0].slug;

          var selectedCategory = info.keyPath[0];
          window.location.href = "/tim-kiem?brand=".concat(selectedBrand, "&category=").concat(selectedCategory);
        }
      }, renderMenuBar) : React.createElement("div", null), React.createElement("a", {
        href: "/danh-sach-hang",
        title: "Danh s\xE1ch h\xE3ng",
        className: "all-brand"
      }, React.createElement("b", null, translate('common:all-brands'))), React.createElement("a", {
        href: adsPosition2 && adsPosition2.hyperlink ? adsPosition2.hyperlink : '#'
      }, React.createElement("img", {
        src: adsPosition2 && adsPosition2.imageUrl ? adsPosition2.imageUrl : '/static/images/sidebar-1.png',
        width: "100%",
        className: "image-promotion-right"
      })));
    }
  }]);

  return BaseLeftSideBar;
}(React.Component);

var LeftSideBar = (0, _i18n.withNamespaces)('common')(BaseLeftSideBar);
exports.LeftSideBar = LeftSideBar;
//# sourceMappingURL=LeftSideBar.js.map