"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

var _NavBarStore = _interopRequireDefault(require("../ShopInfoScreen/components/NavBarStore"));

var _ShopNewsDetails = _interopRequireDefault(require("./components/ShopNewsDetails"));

var _services = require("../../../../services");

var _i18n = require("../../../../i18n");

var _config = require("../../../../config");

var _core = require("../../../../core");

var _head = _interopRequireDefault(require("next/head"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShopNewsScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopNewsScreen, _Component);

  function ShopNewsScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ShopNewsScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ShopNewsScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filters: {
        keyword: undefined,
        state: undefined,
        priceType: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        weightRange: undefined,
        newsType: undefined,
        owner: undefined,
        shop: _this.props.shopInfo._id,
        location: undefined,
        type: undefined,
        brand: undefined,
        model: undefined,
        category: undefined
      },
      data: _this.props.newsResult.data,
      first: 12,
      sortBy: 'elasticsearchCreatedAt|desc',
      // fieldName|sortOrder
      before: _this.props.newsResult.before,
      after: _this.props.newsResult.after,
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (payload) {
      _this.setState({
        filters: _objectSpread({}, _this.state.filters, payload)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFiltersChange",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(payload) {
        var newFilters, serviceProxies, newsResult;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newFilters = {
                  keyword: _this.state.filters.keyword,
                  state: typeof payload.state === 'string' ? payload.state : _this.state.filters.state,
                  priceType: typeof payload.priceType === 'string' ? payload.priceType : _this.state.filters.priceType,
                  minPrice: typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : _this.state.filters.minPrice,
                  maxPrice: typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : _this.state.filters.maxPrice,
                  weightRange: typeof payload.weightRange === 'string' ? payload.weightRange : _this.state.filters.weightRange,
                  newsType: typeof payload.newsType === 'string' ? payload.newsType : _this.state.filters.newsType,
                  category: typeof payload.category === 'string' ? payload.category : _this.state.filters.category,
                  owner: _this.state.filters.owner,
                  shop: _this.state.filters.shop,
                  location: typeof payload.location === 'string' ? payload.location : _this.state.filters.location,
                  type: typeof payload.type === 'string' ? payload.type : _this.state.filters.type,
                  brand: typeof payload.brand === 'string' ? payload.brand : _this.state.filters.brand,
                  model: typeof payload.model === 'string' ? payload.model : _this.state.filters.model
                };

                _this.setState({
                  filters: newFilters,
                  loading: true
                });

                _context.prev = 2;
                serviceProxies = (0, _services.getServiceProxy)();
                _context.next = 6;
                return serviceProxies.searchElasticsearch(_this.state.filters.keyword, typeof payload.state === 'string' ? payload.state : _this.state.filters.state, typeof payload.priceType === 'string' ? payload.priceType : _this.state.filters.priceType, typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : _this.state.filters.minPrice, typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : _this.state.filters.maxPrice, typeof payload.weightRange === 'string' ? payload.weightRange : _this.state.filters.weightRange, undefined, typeof payload.newsType === 'string' ? payload.newsType : _this.state.filters.newsType, typeof payload.category === 'string' ? payload.category : _this.state.filters.category, _this.state.filters.owner, _this.state.filters.shop, typeof payload.location === 'string' ? payload.location : _this.state.filters.location, typeof payload.type === 'string' ? payload.type : _this.state.filters.type, typeof payload.brand === 'string' ? payload.brand : _this.state.filters.brand, typeof payload.model === 'string' ? payload.model : _this.state.filters.model, _this.state.first, _this.state.sortBy, undefined, undefined);

              case 6:
                newsResult = _context.sent;

                _this.setState({
                  data: newsResult.data,
                  before: newsResult.before,
                  after: newsResult.after,
                  loading: false
                });

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);

                _message2.default.error(_context.t0.message || JSON.parse(_context.t0.response).message);

                _this.setState({
                  loading: false
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getNextPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var serviceProxies, newsResult;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                loading: true
              });

              _context2.prev = 1;
              serviceProxies = (0, _services.getServiceProxy)();
              _context2.next = 5;
              return serviceProxies.searchElasticsearch(_this.state.filters.keyword, _this.state.filters.state, _this.state.filters.priceType, _this.state.filters.minPrice, _this.state.filters.maxPrice, _this.state.filters.weightRange, undefined, _this.state.filters.newsType, _this.state.filters.category, _this.state.filters.owner, _this.state.filters.shop, _this.state.filters.location, _this.state.filters.type, _this.state.filters.brand, _this.state.filters.model, _this.state.first, _this.state.sortBy, undefined, _this.state.after);

            case 5:
              newsResult = _context2.sent;

              _this.setState({
                data: newsResult.data,
                before: newsResult.before,
                after: newsResult.after,
                loading: false
              });

              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);

              _message2.default.error(_context2.t0.message || JSON.parse(_context2.t0.response).message);

              _this.setState({
                loading: false
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getPrevPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var serviceProxies, newsResult;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({
                loading: true
              });

              _context3.prev = 1;
              serviceProxies = (0, _services.getServiceProxy)();
              _context3.next = 5;
              return serviceProxies.searchElasticsearch(_this.state.filters.keyword, _this.state.filters.state, _this.state.filters.priceType, _this.state.filters.minPrice, _this.state.filters.maxPrice, _this.state.filters.weightRange, undefined, _this.state.filters.newsType, _this.state.filters.category, _this.state.filters.owner, _this.state.filters.shop, _this.state.filters.location, _this.state.filters.type, _this.state.filters.brand, _this.state.filters.model, _this.state.first, _this.state.sortBy, _this.state.before, undefined);

            case 5:
              newsResult = _context3.sent;

              _this.setState({
                data: newsResult.data,
                before: newsResult.before,
                after: newsResult.after,
                loading: false
              });

              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);

              _message2.default.error(_context3.t0.message || JSON.parse(_context3.t0.response).message);

              _this.setState({
                loading: false
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "changeFollowItemStatus",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(starStatus, id) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context4.next = 14;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _context4.next = 6;
                return _this.setState({
                  data: _this.state.data.map(function (item) {
                    return item._id === id ? _objectSpread({}, item, {
                      isFollowing: false
                    }) : item;
                  })
                });

              case 6:
                _context4.next = 12;
                break;

              case 8:
                _context4.next = 10;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 10:
                _context4.next = 12;
                return _this.setState({
                  data: _this.state.data.map(function (item) {
                    return item._id === id ? _objectSpread({}, item, {
                      isFollowing: true
                    }) : item;
                  })
                });

              case 12:
                _context4.next = 15;
                break;

              case 14:
                _message2.default.warning(_this.props.t('detail-news:notification-login'));

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x2, _x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(ShopNewsScreen, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, "".concat(this.props.shopInfo.name, " | timmay.vn")), _react.default.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), _react.default.createElement("meta", {
        property: "description",
        content: this.props.shopInfo.description
      }), _react.default.createElement("meta", {
        property: "og:url",
        content: (0, _core.getShopUrl)(this.props.shopInfo.domain)
      }), _react.default.createElement("meta", {
        property: "og:type",
        content: "website"
      }), _react.default.createElement("meta", {
        property: "og:title",
        content: "C\u1EEDa h\xE0ng ".concat(this.props.shopInfo.name, " | timmay.vn")
      }), _react.default.createElement("meta", {
        property: "og:description",
        content: this.props.shopInfo.description
      }), _react.default.createElement("meta", {
        property: "og:image:url",
        content: this.props.shopInfo.logoImage ? this.props.shopInfo.logoImage : "/static/images/logo-timmay.png"
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
      }), _react.default.createElement(_ShopNewsDetails.default, {
        resultSearchNewestPost: this.props.resultSearchNewestPost,
        loading: this.state.loading,
        data: this.state.data,
        shopName: this.props.shopInfo.name,
        hasNext: Boolean(this.state.after),
        hasPrev: Boolean(this.state.before),
        getNextPage: this.getNextPage,
        getPrevPage: this.getPrevPage,
        weightRanges: this.props.weightRanges,
        categories: this.props.categories,
        brands: this.props.brands,
        selectedBrand: this.state.filters.brand,
        selectedCategory: this.state.filters.category,
        searchKeywords: this.state.filters.keyword,
        selectedState: this.state.filters.state,
        selectedNewsType: this.state.filters.newsType,
        minPrice: this.state.filters.minPrice,
        maxPrice: this.state.filters.maxPrice,
        selectedWeightRange: this.state.filters.weightRange,
        handleSearchChange: this.handleSearchChange,
        handleFiltersChange: this.handleFiltersChange,
        profileState: this.props.profileState,
        changeFollowStatus: this.changeFollowItemStatus,
        t: this.props.t
      }));
    }
  }]);

  return ShopNewsScreen;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('detail-news')(ShopNewsScreen);

exports.default = _default;
//# sourceMappingURL=ShopNewsScreen.js.map