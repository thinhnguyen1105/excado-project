"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/empty/style");

var _empty = _interopRequireDefault(require("antd/lib/empty"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireWildcard(require("react"));

require("./CategoryDetailScreen.less");

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _NavBarShowContent = _interopRequireDefault(require("../AllBrandsScreen/components/NavBarShowContent"));

var _config = require("../../../../config");

var _head = _interopRequireDefault(require("next/head"));

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

var CategoryDetailScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CategoryDetailScreen, _React$Component);

  function CategoryDetailScreen() {
    _classCallCheck(this, CategoryDetailScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(CategoryDetailScreen).apply(this, arguments));
  }

  _createClass(CategoryDetailScreen, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, "".concat(this.props.categoryDetail ? this.props.categoryDetail.name : this.props.categoryName, " | timmay.vn")), _react.default.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), _react.default.createElement("meta", {
        property: "description",
        content: "timmay.vn"
      }), _react.default.createElement("meta", {
        property: "og:url",
        content: "".concat(_config.config.url.main, "/chung-loai-may/").concat(this.props.categoryDetail._id)
      }), _react.default.createElement("meta", {
        property: "og:type",
        content: "website"
      }), _react.default.createElement("meta", {
        property: "og:title",
        content: "".concat(this.props.categoryDetail ? this.props.categoryDetail.name : this.props.categoryName, " | timmay.vn")
      }), _react.default.createElement("meta", {
        property: "og:description",
        content: "timmay.vn"
      }), _react.default.createElement("meta", {
        property: "og:image:url",
        content: this.props.categoryDetail.imageUrl ? this.props.categoryDetail.imageUrl : '/static/images/logo-timmay.png'
      }), _react.default.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), _react.default.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), _react.default.createElement(_CommonLayout.default, {
        topBrands: this.props.topBrands,
        searchKeyword: this.props.searchKeyword,
        hasSideBar: true,
        hasMenuItems: true,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        updateFilters: this.props.updateFilters
      }, _react.default.createElement(_NavBarShowContent.default, {
        items: [{
          value: '/',
          label: 'Trang chủ'
        }, {
          value: '',
          label: this.props.categoryDetail && this.props.categoryDetail._id ? this.props.categoryDetail.name : this.props.categoryName
        }]
      }), _react.default.createElement("div", {
        className: "category-detail-screen"
      }, this.props.categoryDetail && this.props.categoryDetail._id ? this.props.categoryDetail.categoryBrands.map(function (brand, index) {
        return _react.default.createElement(_row.default, {
          key: index,
          gutter: 10,
          className: "brand-models",
          style: {
            display: 'flex',
            flexWrap: 'wrap'
          }
        }, _react.default.createElement(_col.default, {
          xs: 24
        }, _react.default.createElement("h2", null, _react.default.createElement("a", {
          className: "search-link",
          href: "/tim-kiem?brand=".concat(brand.slug, "&category=").concat(_this.props.categoryDetail.slug),
          title: _this.props.categoryDetail.name
        }, brand.name.toUpperCase(), " (", brand.totalNews, ")"))), brand.brandModels.map(function (model) {
          return _react.default.createElement(_col.default, {
            key: model._id,
            lg: 6,
            md: 12,
            sm: 12,
            xs: 24
          }, _react.default.createElement("ul", null, _react.default.createElement("a", {
            href: "/tim-kiem?keyword=".concat(model.name),
            title: model.name
          }, _react.default.createElement("li", {
            style: {
              color: 'black',
              fontSize: '12px'
            }
          }, model.name, " (", model.totalNews, ")"))));
        }));
      }) : _react.default.createElement(_empty.default, {
        description: "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"
      }))));
    }
  }]);

  return CategoryDetailScreen;
}(_react.default.Component);

var _default = CategoryDetailScreen;
exports.default = _default;
//# sourceMappingURL=CategoryDetailScreen.js.map