"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NavBarStore = _interopRequireDefault(require("../ShopInfoScreen/components/NavBarStore"));

var _ItemShopNewsDetail = _interopRequireDefault(require("./components/ItemShopNewsDetail"));

var _i18n = require("../../../../i18n");

var _head = _interopRequireDefault(require("next/head"));

var _config = require("../../../../config");

var _core = require("../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ShopNewsDetailScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopNewsDetailScreen, _Component);

  function ShopNewsDetailScreen() {
    _classCallCheck(this, ShopNewsDetailScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShopNewsDetailScreen).apply(this, arguments));
  }

  _createClass(ShopNewsDetailScreen, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, "".concat(this.props.newsInfo.title, " | timmay.vn")), _react.default.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), _react.default.createElement("meta", {
        property: "description",
        content: this.props.newsInfo.description
      }), _react.default.createElement("meta", {
        property: "og:url",
        content: (0, _core.getShopUrl)(this.props.shopInfo.domain)
      }), _react.default.createElement("meta", {
        property: "og:type",
        content: "website"
      }), _react.default.createElement("meta", {
        property: "og:title",
        content: "".concat(this.props.newsInfo.title, " | timmay.vn")
      }), _react.default.createElement("meta", {
        property: "og:description",
        content: this.props.newsInfo.description
      }), _react.default.createElement("meta", {
        property: "og:image:url",
        content: this.props.newsInfo.imageUrls.length > 0 ? this.props.newsInfo.imageUrls[0] : '/static/images/logo-timmay.png'
      }), _react.default.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), _react.default.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), _react.default.createElement(_NavBarStore.default, {
        linkLogoStore: this.props.shopInfo.logoImage,
        shopName: this.props.shopInfo.name,
        t: this.props.t
      }), _react.default.createElement(_ItemShopNewsDetail.default, {
        shopInfo: this.props.shopInfo,
        newMachine: this.props.newMachine,
        resultSearchNewestPost: this.props.resultSearchNewestPost,
        shopAddress: this.props.shopInfo.address,
        handleFiltersChange: this.props.handleFiltersChange,
        newsInfo: this.props.newsInfo,
        profileState: this.props.profileState,
        searchState: this.props.searchState,
        searchReducers: this.props.searchReducers,
        followState: this.props.followState,
        followReducers: this.props.followReducers
      }));
    }
  }]);

  return ShopNewsDetailScreen;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('shop-news-detail')(ShopNewsDetailScreen);

exports.default = _default;
//# sourceMappingURL=ShopNewsDetailScreen.js.map