"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSelectMobile = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireWildcard(require("react"));

require("./ListSelectMobile.less");

var _core = require("../../../../../core");

var _services = require("../../../../../services");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _slugify = _interopRequireDefault(require("slugify"));

var _i18n = require("../../../../../i18n");

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

var Option = _select.default.Option;

var BaseListSelectMobile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseListSelectMobile, _React$Component);

  function BaseListSelectMobile(props) {
    var _this;

    _classCallCheck(this, BaseListSelectMobile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseListSelectMobile).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      brands: _this.props.brands,
      loadingBrands: false
    });

    _defineProperty(_assertThisInitialized(_this), "getBrands",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(value) {
        var serviceProxy, brands;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  loadingBrands: true
                });

                _context.prev = 1;
                serviceProxy = (0, _services.getServiceProxy)();
                _context.next = 5;
                return serviceProxy.findBrands(value, 20, 'slug|asc', undefined, undefined);

              case 5:
                brands = _context.sent;

                _this.setState({
                  loadingBrands: false,
                  brands: brands.data
                });

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_context.t0.message);

                _this.setState({
                  loadingBrands: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.getBrands = (0, _debounce.default)(_this.getBrands, 500);
    return _this;
  }

  _createClass(BaseListSelectMobile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_row.default, {
        className: "outline-list-select-mobile"
      }, _react.default.createElement(_select.default, {
        showSearch: true,
        filterOption: function filterOption(inputValue, option) {
          return (0, _slugify.default)(option.props.children.toLowerCase()).indexOf((0, _slugify.default)(inputValue.toLocaleLowerCase())) === 0;
        },
        className: "select-box-mobile",
        value: this.props.selectedCategory ? this.props.selectedCategory : translate('common:type-of-machine'),
        onSelect: function onSelect(value, option) {
          _this2.props.handleFiltersChange({
            category: value
          });

          if (_this2.props.updateSearchUrl) {
            _this2.props.updateSearchUrl({
              category: option.props['data-slug']
            });
          }
        }
      }, _react.default.createElement(Option, {
        "data-slug": "",
        value: ""
      }, "T\u1EA5t c\u1EA3"), this.props.categories.map(function (item) {
        return _react.default.createElement(Option, {
          "data-slug": item.slug,
          value: item._id,
          key: item._id
        }, item.name);
      })), _react.default.createElement(_select.default, {
        className: "select-box-mobile",
        value: this.props.selectedPrice ? this.props.selectedPrice : translate('common:range-of-price'),
        onSelect: function onSelect(value, option) {
          _this2.props.handleFiltersChange({
            minPrice: value.split('-')[0],
            maxPrice: value.split('-')[1]
          });

          if (_this2.props.updateSearchUrl) {
            _this2.props.updateSearchUrl({
              minPrice: option.props['data-minprice'],
              maxPrice: option.props['data-maxprice']
            });
          }
        }
      }, _react.default.createElement(Option, {
        "data-minprice": 0,
        "data-maxprice": 0,
        value: "0-0"
      }, "T\u1EA5t c\u1EA3"), _core.priceRanges.map(function (item, index) {
        return _react.default.createElement(Option, {
          "data-minprice": item.min,
          "data-maxprice": item.max,
          value: "".concat(item.min, "-").concat(item.max),
          key: "".concat(index)
        }, "".concat((0, _core.formatMoney)(item.min), " - ").concat((0, _core.formatMoney)(item.max)));
      })), _react.default.createElement(_select.default, {
        className: "select-box-mobile",
        value: this.props.selectedWeightRange ? this.props.selectedWeightRange : translate('common:weight-range'),
        onSelect: function onSelect(value, option) {
          _this2.props.handleFiltersChange({
            weightRange: value
          });

          if (_this2.props.updateSearchUrl) {
            _this2.props.updateSearchUrl({
              minWeight: option.props['data-minweight'],
              maxWeight: option.props['data-maxweight']
            });
          }
        }
      }, _react.default.createElement(Option, {
        "data-minweight": 0,
        "data-maxweight": 0,
        value: ""
      }, "T\u1EA5t c\u1EA3"), this.props.weightRanges.sort(function (a, b) {
        return a.min - b.min;
      }).map(function (item, index) {
        return _react.default.createElement(Option, {
          "data-minweight": item.min,
          "data-maxweight": item.max,
          value: item._id,
          key: "".concat(index)
        }, item.max ? "".concat(item.min, " ").concat(translate('common:ton'), " - ").concat(item.max, " ").concat(translate('common:ton')) : "".concat(translate('common:more-than'), " ").concat(item.min, " ").concat(translate('common:ton')));
      })), _react.default.createElement(_select.default, {
        value: this.props.selectedBrand ? this.props.selectedBrand : translate('common:manufacturer'),
        className: "select-box-mobile",
        notFoundContent: this.state.loadingBrands ? _react.default.createElement("div", {
          style: {
            textAlign: 'center'
          }
        }, _react.default.createElement(_spin.default, {
          size: "small"
        })) : null,
        showSearch: true,
        filterOption: false,
        onSearch: this.getBrands,
        onSelect: function onSelect(value, option) {
          _this2.props.handleFiltersChange({
            brand: value
          });

          if (_this2.props.updateSearchUrl) {
            _this2.props.updateSearchUrl({
              brand: option.props['data-slug']
            });
          }
        }
      }, _react.default.createElement(Option, {
        "data-slug": "",
        value: ""
      }, "T\u1EA5t c\u1EA3"), this.state.brands.slice(0, 10).map(function (item) {
        return _react.default.createElement(Option, {
          "data-slug": item.slug,
          value: item._id,
          key: item._id
        }, item.name);
      })), _react.default.createElement(_select.default, {
        className: "select-box-mobile",
        value: this.props.selectedState ? this.props.selectedState : translate('common:status-of-machine'),
        onSelect: function onSelect(value, option) {
          _this2.props.handleFiltersChange({
            state: value
          });

          if (_this2.props.updateSearchUrl) {
            _this2.props.updateSearchUrl({
              state: option.props['data-slug']
            });
          }
        }
      }, _react.default.createElement(Option, {
        "data-slug": "",
        value: ""
      }, "T\u1EA5t c\u1EA3"), _core.newsStates.map(function (item, index) {
        return _react.default.createElement(Option, {
          "data-slug": item.value,
          value: item.value,
          key: "".concat(index)
        }, translate("common:".concat(item.value.toLowerCase())));
      })), _react.default.createElement(_select.default, {
        className: "select-box-mobile",
        value: this.props.selectedNewsType ? this.props.selectedNewsType : translate('common:type-of-post'),
        onSelect: function onSelect(value, option) {
          _this2.props.handleFiltersChange({
            newsType: value
          });

          if (_this2.props.updateSearchUrl) {
            _this2.props.updateSearchUrl({
              newsType: option.props['data-slug']
            });
          }
        }
      }, _react.default.createElement(Option, {
        "data-slug": '',
        value: ""
      }, "T\u1EA5t c\u1EA3"), _core.newsTypes.map(function (item, index) {
        return _react.default.createElement(Option, {
          "data-slug": item.value,
          value: item.value,
          key: "".concat(index)
        }, _this2.props.t("common:".concat(item.value.toLowerCase())));
      })), _react.default.createElement(_row.default, {
        className: "disable-modal-filter"
      }, _react.default.createElement("a", {
        onClick: this.props.closeFilterModalMobile
      }, "\u1EA8n b\u1ED9 l\u1ECDc ", _react.default.createElement(_icon.default, {
        type: "up"
      })))));
    }
  }]);

  return BaseListSelectMobile;
}(_react.default.Component);

var ListSelectMobile = (0, _i18n.withNamespaces)('common')(BaseListSelectMobile);
exports.ListSelectMobile = ListSelectMobile;
//# sourceMappingURL=ListSelectMobile.js.map