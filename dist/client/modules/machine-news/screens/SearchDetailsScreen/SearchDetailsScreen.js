"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchDetailsScreen = void 0;

require("antd/lib/empty/style");

var _empty = _interopRequireDefault(require("antd/lib/empty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

var _NavBarShowContent = _interopRequireDefault(require("../AllBrandsScreen/components/NavBarShowContent"));

var _DetailSearchPage = _interopRequireDefault(require("./components/DetailSearchPage"));

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _ListSelect = require("./components/ListSelect");

var _NavLocation = _interopRequireDefault(require("./components/NavLocation"));

var _ListSelectMobile = require("./components/ListSelectMobile");

var _reactDeviceDetect = require("react-device-detect");

var _core = require("../../../../core");

var _qs = _interopRequireDefault(require("qs"));

var _i18n = require("../../../../i18n");

var _head = _interopRequireDefault(require("next/head"));

var _config = require("../../../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseSearchDetailsScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(BaseSearchDetailsScreen, _Component);

  function BaseSearchDetailsScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseSearchDetailsScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseSearchDetailsScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpenModalFilter: false
    });

    _defineProperty(_assertThisInitialized(_this), "changeFollowStatus",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(starStatus, id) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context.next = 14;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _context.next = 6;
                return _this.props.searchReducers.onFollowChangeOnSearchDetailScreenSuccess({
                  starStatus: starStatus,
                  newsId: id
                });

              case 6:
                _context.next = 12;
                break;

              case 8:
                _context.next = 10;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 10:
                _context.next = 12;
                return _this.props.searchReducers.onFollowChangeOnSearchDetailScreenSuccess({
                  starStatus: starStatus,
                  newsId: id
                });

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.next = 16;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 16:
                _message2.default.warning(_this.props.t('search-detail:notification-login'));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "openModalFilter", function () {
      _this.setState({
        isOpenModalFilter: !_this.state.isOpenModalFilter
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeModalFilter", function () {
      _this.setState({
        isOpenModalFilter: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSearchUrl", function (payload) {
      var oldFilters = _qs.default.parse(window.location.search.replace('?', ''));

      var queryString = (0, _core.generateSearchUrl)({
        keyword: payload.searchKeyword || _this.props.searchKeyword,
        brand: typeof payload.brand === 'string' ? payload.brand : oldFilters.brand,
        category: typeof payload.category === 'string' ? payload.category : oldFilters.category,
        model: typeof payload.model === 'string' ? payload.model : oldFilters.model,
        location: typeof payload.location === 'string' ? payload.location : oldFilters.location,
        state: typeof payload.state === 'string' ? payload.state : oldFilters.state,
        newsType: typeof payload.newsType === 'string' ? payload.newsType : oldFilters.newsType,
        minPrice: typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : oldFilters.minPrice,
        maxPrice: typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : oldFilters.maxPrice,
        minWeight: typeof payload.minWeight === 'string' || typeof payload.minWeight === 'number' ? payload.minWeight : oldFilters.minWeight,
        maxWeight: typeof payload.maxWeight === 'string' || typeof payload.maxWeight === 'number' ? payload.maxWeight : oldFilters.maxWeight
      });
      history.pushState({}, '', "".concat(window.location.pathname, "?").concat(queryString));
    });

    return _this;
  }

  _createClass(BaseSearchDetailsScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var siteTitle = this.props.searchKeyword ? "T\xECm ki\u1EBFm ".concat(this.props.searchKeyword) : this.props.selectedCategory ? "T\xECm ki\u1EBFm m\xE1y ".concat(this.props.categories.filter(function (value) {
        return value._id === _this2.props.selectedCategory;
      })[0].name) : this.props.selectedBrand ? "T\xECm ki\u1EBFm h\xE3ng ".concat(this.props.brands.filter(function (value) {
        return value._id === _this2.props.selectedBrand;
      })[0].name) : this.props.selectedProvince ? "T\xECm ki\u1EBFm m\xE1y \u1EDF ".concat(this.props.provinces.filter(function (value) {
        return value._id === _this2.props.selectedProvince;
      })[0].name) : 'Tìm kiếm';
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, "".concat(siteTitle, " | timmay.vn")), _react.default.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), _react.default.createElement("meta", {
        property: "description",
        content: "".concat(siteTitle, " | timmay.vn")
      }), _react.default.createElement("meta", {
        property: "og:type",
        content: "website"
      }), _react.default.createElement("meta", {
        property: "og:title",
        content: "".concat(siteTitle, " | timmay.vn")
      }), _react.default.createElement("meta", {
        property: "og:description",
        content: "".concat(siteTitle, " | timmay.vn")
      }), _react.default.createElement("meta", {
        property: "og:image:url",
        content: "/static/images/logo-timmay.png"
      }), _react.default.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), _react.default.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), _react.default.createElement(_CommonLayout.default, {
        topBrands: this.props.topBrands,
        updateFilters: this.props.searchReducers.updateFilters,
        searchKeyword: this.props.searchKeyword,
        hasSideBar: true,
        hasMenuItems: true,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }, !_reactDeviceDetect.isMobile && _react.default.createElement(_NavBarShowContent.default, {
        items: [{
          value: '/',
          label: "".concat(translate('common:home'))
        }, {
          value: '',
          label: "".concat(translate('common:search'))
        }]
      }), !_reactDeviceDetect.isMobile ? _react.default.createElement(_ListSelect.ListSelect, {
        selectedBrand: this.props.selectedBrand,
        selectedCategory: this.props.selectedCategory,
        selectedState: this.props.selectedState,
        selectedNewsType: this.props.selectedNewsType,
        selectedPrice: Number(this.props.minPrice) > 0 ? "".concat(this.props.minPrice, "-").concat(this.props.maxPrice) : undefined,
        selectedWeightRange: this.props.selectedWeightRange,
        brands: this.props.brands,
        categories: this.props.categories,
        weightRanges: this.props.weightRanges,
        handleFiltersChange: this.props.searchReducers.handleFiltersChange,
        updateSearchUrl: this.updateSearchUrl
      }) : _react.default.createElement("div", null), _react.default.createElement(_NavLocation.default, {
        openModalFilter: this.openModalFilter,
        loading: this.props.loading,
        provinces: this.props.provinces,
        sortBy: this.props.sortBy,
        selectedProvince: this.props.selectedProvince,
        handleFiltersChange: this.props.searchReducers.handleFiltersChange,
        handleSortChange: this.props.searchReducers.handleSortChange
      }), _reactDeviceDetect.isMobile && this.state.isOpenModalFilter === true ? _react.default.createElement(_ListSelectMobile.ListSelectMobile, {
        selectedBrand: this.props.selectedBrand,
        selectedCategory: this.props.selectedCategory,
        selectedState: this.props.selectedState,
        selectedNewsType: this.props.selectedNewsType,
        selectedPrice: Number(this.props.minPrice) > 0 ? "".concat(this.props.minPrice, "-").concat(this.props.maxPrice) : undefined,
        selectedWeightRange: this.props.selectedWeightRange,
        brands: this.props.brands,
        categories: this.props.categories,
        weightRanges: this.props.weightRanges,
        handleFiltersChange: this.props.searchReducers.handleFiltersChange,
        updateSearchUrl: this.updateSearchUrl,
        closeFilterModalMobile: this.closeModalFilter
      }) : _react.default.createElement("div", null), this.props.data && this.props.data.length > 0 ? _react.default.createElement(_DetailSearchPage.default, {
        loading: this.props.loading,
        getNextPage: this.props.getNextPage,
        getPrevPage: this.props.getPrevPage,
        data: this.props.data,
        hasPrev: this.props.hasPrev,
        hasNext: this.props.hasNext,
        profileState: this.props.profileState,
        changeFollowStatus: this.changeFollowStatus
      }) : _react.default.createElement(_empty.default, {
        description: translate('search-details:no-data'),
        style: {
          marginTop: '24px'
        }
      })));
    }
  }]);

  return BaseSearchDetailsScreen;
}(_react.Component);

var SearchDetailsScreen = (0, _i18n.withNamespaces)('search-detail')(BaseSearchDetailsScreen);
exports.SearchDetailsScreen = SearchDetailsScreen;
//# sourceMappingURL=SearchDetailsScreen.js.map