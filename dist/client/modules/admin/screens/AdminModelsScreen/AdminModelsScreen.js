"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminModelsScreen = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

require("antd/lib/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/lib/dropdown"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

require("./AdminModelsScreen.less");

var _components = require("../../../../components");

var _store = require("../../../../store");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../../../services");

var moment = _interopRequireWildcard(require("moment"));

var _ModelModal = _interopRequireDefault(require("./components/ModelModal"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _slugify = _interopRequireDefault(require("slugify"));

var _i18n = require("../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AdminModels =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminModels, _React$Component);

  function AdminModels(props) {
    var _this;

    _classCallCheck(this, AdminModels);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminModels).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filters: {
        search: undefined
      },
      data: [],
      before: undefined,
      after: undefined,
      first: 10,
      sortBy: "slug|asc",
      loading: {
        table: true,
        modal: false,
        brands: false
      },
      modelModalVisible: false,
      selectedModel: undefined,
      brands: [],
      categories: []
    });

    _defineProperty(_assertThisInitialized(_this), "getCategories",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var idToken, serviceProxy, _ref2, _ref3, categories;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _app.default.auth().currentUser.getIdToken;

            case 2:
              idToken = _context.sent;
              serviceProxy = (0, _services.getServiceProxy)(idToken);
              _context.next = 6;
              return Promise.all([serviceProxy.findCategories()]);

            case 6:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 1);
              categories = _ref3[0];

              _this.setState({
                categories: categories.data
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "getBrands",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(value) {
        var serviceProxy, brands;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    brands: true
                  })
                });

                _context2.prev = 1;
                serviceProxy = (0, _services.getServiceProxy)();
                _context2.next = 5;
                return serviceProxy.findBrands(value, 20, 'slug|asc', undefined, undefined);

              case 5:
                brands = _context2.sent;

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    brands: true
                  }),
                  brands: brands.data
                });

                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);

                _message2.default.error(_context2.t0.message);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    brands: false
                  })
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "openModelModal", function (selectedModel) {
      _this.setState({
        modelModalVisible: true,
        selectedModel: selectedModel
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeBrandModal", function () {
      _this.setState({
        modelModalVisible: false,
        selectedModel: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (value) {
      _this.setState({
        filters: _objectSpread({}, _this.state.filters, {
          search: value
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var idToken, serviceProxies, result;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: true
                })
              });

              _context3.prev = 1;
              _context3.next = 4;
              return _app.default.auth().currentUser.getIdToken;

            case 4:
              idToken = _context3.sent;
              serviceProxies = (0, _services.getServiceProxy)(idToken);
              _context3.next = 8;
              return serviceProxies.findModels(_this.state.filters.search, undefined, undefined, _this.state.first, _this.state.sortBy, undefined, undefined);

            case 8:
              result = _context3.sent;

              _this.setState({
                data: result.data,
                before: result.before,
                after: result.after,
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](1);

              _message2.default.error(_context3.t0.message);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 12]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getNextPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var idToken, serviceProxies, result;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: true
                })
              });

              _context4.prev = 1;
              _context4.next = 4;
              return _app.default.auth().currentUser.getIdToken;

            case 4:
              idToken = _context4.sent;
              serviceProxies = (0, _services.getServiceProxy)(idToken);
              _context4.next = 8;
              return serviceProxies.findModels(_this.state.filters.search, undefined, undefined, _this.state.first, _this.state.sortBy, undefined, _this.state.after);

            case 8:
              result = _context4.sent;

              _this.setState({
                data: result.data,
                before: result.before,
                after: result.after,
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

              _context4.next = 16;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](1);

              _message2.default.error(_context4.t0.message);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 12]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getPrevPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5() {
      var idToken, serviceProxies, result;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: true
                })
              });

              _context5.prev = 1;
              _context5.next = 4;
              return _app.default.auth().currentUser.getIdToken;

            case 4:
              idToken = _context5.sent;
              serviceProxies = (0, _services.getServiceProxy)(idToken);
              _context5.next = 8;
              return serviceProxies.findModels(_this.state.filters.search, undefined, undefined, _this.state.first, _this.state.sortBy, _this.state.before, undefined);

            case 8:
              result = _context5.sent;

              _this.setState({
                data: result.data,
                before: result.before,
                after: result.after,
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

              _context5.next = 16;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](1);

              _message2.default.error(_context5.t0.message);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 12]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(values) {
        var idToken, serviceProxies, result;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: true
                  })
                });

                _context6.prev = 1;
                _context6.next = 4;
                return _app.default.auth().currentUser.getIdToken;

              case 4:
                idToken = _context6.sent;
                serviceProxies = (0, _services.getServiceProxy)(idToken);

                if (!(_this.state.selectedModel && _this.state.selectedModel._id)) {
                  _context6.next = 13;
                  break;
                }

                _context6.next = 9;
                return serviceProxies.updateModel(_this.state.selectedModel._id, {
                  operation: 'updateDetail',
                  payload: {
                    name: values.name
                  }
                });

              case 9:
                _this.setState({
                  modelModalVisible: false,
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  }),
                  selectedModel: undefined,
                  data: _this.state.data.map(function (item) {
                    return item._id === _this.state.selectedModel._id ? _objectSpread({}, item, {
                      name: values.name
                    }) : item;
                  })
                });

                _message2.default.success(_this.props.t('admin-models:update-success'));

                _context6.next = 18;
                break;

              case 13:
                _context6.next = 15;
                return serviceProxies.createModel({
                  name: values.name,
                  brand: values.brand,
                  category: values.category
                });

              case 15:
                result = _context6.sent;

                _this.setState({
                  modelModalVisible: false,
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  }),
                  selectedModel: undefined,
                  data: [{
                    _id: result.id,
                    name: values.name,
                    slug: (0, _slugify.default)(values.name),
                    brand: _this.state.brands.filter(function (item) {
                      return item._id === values.brand;
                    })[0],
                    category: _this.state.categories.filter(function (item) {
                      return item._id === values.category;
                    })[0],
                    createdAt: new Date().getTime()
                  }].concat(_toConsumableArray(_this.state.data))
                });

                _message2.default.success(_this.props.t('admin-models:create-success'));

              case 18:
                _context6.next = 24;
                break;

              case 20:
                _context6.prev = 20;
                _context6.t0 = _context6["catch"](1);

                _message2.default.error(_context6.t0.message);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  })
                });

              case 24:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 20]]);
      }));

      return function (_x2) {
        return _ref8.apply(this, arguments);
      };
    }());

    _this.getBrands = (0, _debounce.default)(_this.getBrands, 500);
    return _this;
  }

  _createClass(AdminModels, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
      this.getBrands('');
      this.getCategories();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var dateFormat = 'DD/MM/YYYY HH:mm';

      var actionsDropdown = function actionsDropdown(record) {
        return _react.default.createElement(_menu.default, null, _react.default.createElement(_menu.default.Item, null, _react.default.createElement("a", {
          onClick: function onClick() {
            return _this2.openModelModal(record);
          }
        }, translate('common:edit'))));
      };

      var columns = [{
        title: translate('admin-models:model-name'),
        dataIndex: 'name',
        key: 'name'
      }, {
        title: translate('admin-models:brand'),
        dataIndex: 'brand',
        key: 'brand',
        render: function render(_text, record) {
          return record.brand.name;
        }
      }, {
        title: translate('common:category'),
        dataIndex: 'category',
        key: 'category',
        render: function render(_text, record) {
          return record.category.name;
        }
      }, {
        title: translate('common:created-at'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: function render(_text, record) {
          return moment(new Date(record.createdAt)).format(dateFormat);
        }
      }, {
        title: translate('common:actions'),
        dataIndex: 'operations',
        key: 'operations',
        render: function render(_text, record) {
          return _react.default.createElement(_dropdown.default, {
            overlay: actionsDropdown(record),
            trigger: ['click']
          }, _react.default.createElement("a", {
            className: "ant-dropdown-link"
          }, translate('common:actions'), " ", _react.default.createElement(_icon.default, {
            type: "down"
          })));
        }
      }];
      return _react.default.createElement("div", {
        className: "admin-models-screen"
      }, _react.default.createElement(_components.AdminSearchbar, {
        hasCreate: true,
        handleSearch: this.getData,
        value: this.state.filters.search,
        showSearch: true,
        handleSearchChange: this.handleSearchChange,
        placeholder: translate('admin-models:search-models'),
        onCreateClick: function onCreateClick() {
          return _this2.openModelModal();
        }
      }), _react.default.createElement(_table.default, {
        columns: columns,
        dataSource: this.state.data,
        loading: this.state.loading.table,
        pagination: false,
        scroll: {
          x: 1000
        },
        style: {
          marginBottom: '24px'
        },
        rowKey: function rowKey(record) {
          return record._id;
        }
      }), _react.default.createElement(_components.PagingButtons, {
        before: this.state.before,
        after: this.state.after,
        getNextPage: this.getNextPage,
        getPrevPage: this.getPrevPage
      }), this.state.modelModalVisible && _react.default.createElement(_ModelModal.default, {
        brands: this.state.brands,
        categories: this.state.categories,
        loadingBrands: this.state.loading.brands,
        getBrands: this.getBrands,
        modelInfo: this.state.selectedModel,
        loading: this.state.loading.modal,
        visible: this.state.modelModalVisible,
        handleCancel: this.closeBrandModal,
        handleOk: this.handleSubmit
      }));
    }
  }]);

  return AdminModels;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var AdminModelsScreen = (0, _components.Authorize)((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('admin-models')(AdminModels)), [], true, 'admin');
exports.AdminModelsScreen = AdminModelsScreen;
//# sourceMappingURL=AdminModelsScreen.js.map