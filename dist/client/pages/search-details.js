"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _SearchDetailsScreen = require("../modules/machine-news/screens/SearchDetailsScreen/SearchDetailsScreen");

var _store = require("../store");

var _services = require("../services");

var _queryString = _interopRequireDefault(require("query-string"));

var _core = require("../core");

var _i18n = require("../i18n");

var jsCookie = _interopRequireWildcard(require("js-cookie"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SearchDetailsPage =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchDetailsPage, _Component);

  function SearchDetailsPage() {
    _classCallCheck(this, SearchDetailsPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchDetailsPage).apply(this, arguments));
  }

  _createClass(SearchDetailsPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_SearchDetailsScreen.SearchDetailsScreen, {
        topBrands: this.props.topBrands,
        sortBy: this.props.sortBy,
        data: this.props.searchData,
        loading: this.props.loading,
        selectedBrand: this.props.searchFilters.brand,
        selectedCategory: this.props.searchFilters.category,
        selectedModel: this.props.searchFilters.model,
        selectedProvince: this.props.searchFilters.location,
        selectedState: this.props.searchFilters.state,
        selectedNewsType: this.props.searchFilters.newsType,
        minPrice: this.props.searchFilters.minPrice,
        maxPrice: this.props.searchFilters.maxPrice,
        selectedWeightRange: this.props.searchFilters.weightRange,
        searchKeyword: this.props.searchFilters.keyword,
        brands: this.props.brands,
        provinces: this.props.provinces,
        categories: this.props.categories,
        weightRanges: this.props.weightRanges,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        getNextPage: this.props.getNextPage,
        getPrevPage: this.props.getPrevPage,
        hasPrev: this.props.hasPrev,
        hasNext: this.props.hasNext,
        followState: this.props.followState,
        followReducers: this.props.followReducers,
        searchReducers: this.props.searchReducers
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(context) {
        var query, serviceProxy, idToken, _ref, _ref2, topBrands, brands, categories, weightRanges, provinces, filters, searchState, result;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _queryString.default.parse(context.asPath.split('?')[1]);

                if (!context.req) {
                  idToken = jsCookie.get('token');
                  serviceProxy = (0, _services.getServiceProxy)(idToken);
                } else {
                  serviceProxy = (0, _services.getServiceProxy)(context.req.cookies.token);
                }

                _context.next = 4;
                return Promise.all([serviceProxy.findTopBrands(), serviceProxy.findBrands(query.brand, 30, 'slug|asc', undefined, undefined), serviceProxy.findCategories(), serviceProxy.getAllWeightRanges(), serviceProxy.findProvinces()]);

              case 4:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 5);
                topBrands = _ref2[0];
                brands = _ref2[1];
                categories = _ref2[2];
                weightRanges = _ref2[3];
                provinces = _ref2[4];
                filters = (0, _core.generateFilters)(query, {
                  brands: brands.data,
                  categories: categories.data,
                  weightRanges: weightRanges.data,
                  provinces: provinces.data
                });
                context.store.dispatch.searchModel.updateFilters(filters);
                searchState = context.store.getState().searchModel;
                _context.next = 16;
                return serviceProxy.searchElasticsearch(searchState.filters.keyword, searchState.filters.state, searchState.filters.priceType, searchState.filters.minPrice, searchState.filters.maxPrice, searchState.filters.weightRange, undefined, searchState.filters.newsType, searchState.filters.category, searchState.filters.owner, searchState.filters.shop, searchState.filters.location, searchState.filters.type, searchState.filters.brand, searchState.filters.model, 16, searchState.sortBy, undefined, undefined);

              case 16:
                result = _context.sent;
                context.store.dispatch.searchModel.getDataSuccess(result);
                return _context.abrupt("return", {
                  namespacesRequired: ['common', 'search-detail'],
                  topBrands: topBrands.data,
                  brands: brands.data,
                  categories: categories.data,
                  weightRanges: weightRanges.data,
                  provinces: provinces.data
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return SearchDetailsPage;
}(_react.Component);

var mapState = function mapState(rootState) {
  return {
    hasNext: rootState.searchModel.after ? true : false,
    hasPrev: rootState.searchModel.before ? true : false,
    searchData: rootState.searchModel.data,
    loading: rootState.loading.effects.searchModel,
    profileState: rootState.profileModel,
    searchFilters: rootState.searchModel.filters,
    followState: rootState.followModel,
    sortBy: rootState.searchModel.sortBy
  };
};

var mapDispatch = function mapDispatch(rootReducer) {
  return {
    profileReducers: rootReducer.profileModel,
    getNextPage: rootReducer.searchModel.getNextPage,
    getPrevPage: rootReducer.searchModel.getPrevPage,
    followReducers: rootReducer.followModel,
    searchReducers: rootReducer.searchModel
  };
};

var _default = (0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('search-detail')(SearchDetailsPage));

exports.default = _default;
//# sourceMappingURL=search-details.js.map