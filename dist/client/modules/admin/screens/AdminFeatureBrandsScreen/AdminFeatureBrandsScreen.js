"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminFeatureBrandsScreen = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

require("antd/lib/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/lib/dropdown"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/tag/style");

var _tag = _interopRequireDefault(require("antd/lib/tag"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

require("./AdminFeatureBrandsScreen.less");

var _components = require("../../../../components");

var _store = require("../../../../store");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../../../services");

var moment = _interopRequireWildcard(require("moment"));

var _FeatureBrandModal = _interopRequireDefault(require("./components/FeatureBrandModal"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _config = require("../../../../config");

var _i18n = require("../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var AdminFeatureBrands =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminFeatureBrands, _React$Component);

  function AdminFeatureBrands(props) {
    var _this;

    _classCallCheck(this, AdminFeatureBrands);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminFeatureBrands).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filters: {
        search: undefined
      },
      data: [],
      before: undefined,
      after: undefined,
      first: 10,
      sortBy: "order|asc",
      loading: {
        table: true,
        modal: false,
        brands: false
      },
      featureBrandModalVisible: false,
      logoImage: undefined,
      selectedFeatureBrand: undefined,
      brands: []
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
                  loading: _objectSpread({}, _this.state.loading, {
                    brands: true
                  })
                });

                _context.prev = 1;
                serviceProxy = (0, _services.getServiceProxy)();
                _context.next = 5;
                return serviceProxy.findBrands(value, 20, 'slug|asc', undefined, undefined);

              case 5:
                brands = _context.sent;

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    brands: true
                  }),
                  brands: brands.data
                });

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_context.t0.message);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    brands: false
                  })
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

    _defineProperty(_assertThisInitialized(_this), "openBrandModal", function (selectedFeatureBrand) {
      _this.setState({
        featureBrandModalVisible: true,
        selectedFeatureBrand: selectedFeatureBrand
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeBrandModal", function () {
      _this.setState({
        featureBrandModalVisible: false,
        selectedFeatureBrand: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var idToken, serviceProxies, result;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: true
                })
              });

              _context2.prev = 1;
              _context2.next = 4;
              return _app.default.auth().currentUser.getIdToken;

            case 4:
              idToken = _context2.sent;
              serviceProxies = (0, _services.getServiceProxy)(idToken);
              _context2.next = 8;
              return serviceProxies.getFeatureBrands(_this.state.first, _this.state.sortBy, undefined, undefined);

            case 8:
              result = _context2.sent;

              _this.setState({
                data: result.data,
                before: result.before,
                after: result.after,
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);

              _message2.default.error(_context2.t0.message);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 12]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getPrevPage",
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
              return serviceProxies.getFeatureBrands(_this.state.first, _this.state.sortBy, _this.state.before, undefined);

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
              return serviceProxies.getFeatureBrands(_this.state.first, _this.state.sortBy, undefined, _this.state.after);

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

    _defineProperty(_assertThisInitialized(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(values) {
        var logoImageUrl, logoImageFormData, logoImageResult, idToken, serviceProxies, result;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: true
                  })
                });

                _context5.prev = 1;
                logoImageUrl = '';

                if (!_this.state.logoImage) {
                  _context5.next = 14;
                  break;
                }

                if (!_config.config.upload.allowImageExt.test(_this.state.logoImage.name)) {
                  _context5.next = 13;
                  break;
                }

                logoImageFormData = new FormData();
                logoImageFormData.append('featureBrandLogoImage', _this.state.logoImage);
                _context5.next = 9;
                return fetch("".concat(_config.config.url.api, "/upload-image/feature-brand-logo-image"), {
                  method: 'POST',
                  body: logoImageFormData
                }).then(function (res) {
                  return res.json();
                });

              case 9:
                logoImageResult = _context5.sent;
                logoImageUrl = logoImageResult.logoImage;
                _context5.next = 14;
                break;

              case 13:
                _message2.default.error('Ảnh chỉ nhận các định dạng PNG, JPG, JPEG');

              case 14:
                _context5.next = 16;
                return _app.default.auth().currentUser.getIdToken;

              case 16:
                idToken = _context5.sent;
                serviceProxies = (0, _services.getServiceProxy)(idToken);

                if (!(_this.state.selectedFeatureBrand && _this.state.selectedFeatureBrand._id)) {
                  _context5.next = 25;
                  break;
                }

                _context5.next = 21;
                return serviceProxies.updateFeatureBrand(_this.state.selectedFeatureBrand._id, {
                  operation: 'updateDetail',
                  payload: {
                    brand: values.brand,
                    logoImage: logoImageUrl ? logoImageUrl : _this.state.selectedFeatureBrand.logoImage,
                    hyperlink: values.hyperlink,
                    order: values.order
                  }
                });

              case 21:
                _this.setState({
                  featureBrandModalVisible: false,
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  }),
                  selectedFeatureBrand: undefined,
                  data: _this.state.data.map(function (item) {
                    return item._id === _this.state.selectedFeatureBrand._id ? _objectSpread({}, item, values, {
                      brand: values.brand === _this.state.selectedFeatureBrand.brand._id ? _this.state.selectedFeatureBrand.brand : _this.state.brands.filter(function (ite) {
                        return ite._id === values.brand;
                      })[0],
                      logoImage: logoImageUrl ? logoImageUrl : _this.state.selectedFeatureBrand.logoImage
                    }) : item;
                  })
                });

                _message2.default.success(_this.props.t('admin-brands:update-success'));

                _context5.next = 30;
                break;

              case 25:
                _context5.next = 27;
                return serviceProxies.createFeatureBrand({
                  logoImage: logoImageUrl,
                  brand: values.brand,
                  hyperlink: values.hyperlink,
                  order: values.order
                });

              case 27:
                result = _context5.sent;

                _this.setState({
                  featureBrandModalVisible: false,
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  }),
                  selectedFeatureBrand: undefined,
                  data: [{
                    _id: result.id,
                    brand: _this.state.brands.filter(function (item) {
                      return item._id === values.brand;
                    })[0],
                    logoImage: logoImageUrl,
                    hyperlink: values.hyperlink,
                    order: values.order,
                    createdAt: new Date().getTime()
                  }].concat(_toConsumableArray(_this.state.data))
                });

                _message2.default.success(_this.props.t('admin-brands:create-success'));

              case 30:
                _context5.next = 36;
                break;

              case 32:
                _context5.prev = 32;
                _context5.t0 = _context5["catch"](1);

                _message2.default.error(_context5.t0.message);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  })
                });

              case 36:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 32]]);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "uploadLogoImage",
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(file) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this.setState({
                  logoImage: file
                });

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }());

    _this.getBrands = (0, _debounce.default)(_this.getBrands, 500);
    return _this;
  }

  _createClass(AdminFeatureBrands, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
      this.getBrands('');
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
            return _this2.openBrandModal(record);
          }
        }, translate('common:edit'))));
      };

      var columns = [{
        title: translate('admin-feature-brands:brand-name'),
        dataIndex: 'name',
        key: 'name',
        render: function render(_text, record) {
          return _react.default.createElement("a", {
            href: record.hyperlink,
            target: "_blank"
          }, record.brand.name);
        }
      }, {
        title: translate('admin-feature-brands:order'),
        dataIndex: 'order',
        key: 'order',
        render: function render(_text, record) {
          return _react.default.createElement(_tag.default, {
            color: "volcano"
          }, "#", record.order);
        }
      }, {
        title: translate('admin-feature-brands:logo-image'),
        dataIndex: 'logoImage',
        key: 'logoImage',
        render: function render(_text, record) {
          return _react.default.createElement("img", {
            style: {
              height: '32px',
              width: 'auto'
            },
            src: "".concat(record.logoImage),
            alt: "".concat(record.brand.name)
          });
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
        className: "admin-feature-brands-screen"
      }, _react.default.createElement(_components.AdminSearchbar, {
        hasCreate: true,
        handleSearch: this.getData,
        value: '',
        showSearch: true,
        handleSearchChange: function handleSearchChange() {
          return null;
        },
        placeholder: translate('admin-feature-brands:search-brands'),
        onCreateClick: function onCreateClick() {
          return _this2.openBrandModal();
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
      }), this.state.featureBrandModalVisible && _react.default.createElement(_FeatureBrandModal.default, {
        loadingBrands: this.state.loading.brands,
        featureBrandInfo: this.state.selectedFeatureBrand,
        loading: this.state.loading.modal,
        visible: this.state.featureBrandModalVisible,
        handleCancel: this.closeBrandModal,
        handleOk: this.handleSubmit,
        uploadLogoImage: this.uploadLogoImage,
        brands: this.state.selectedFeatureBrand && this.state.selectedFeatureBrand._id ? [this.state.selectedFeatureBrand.brand].concat(_toConsumableArray(this.state.brands)) : this.state.brands,
        getBrands: this.getBrands
      }));
    }
  }]);

  return AdminFeatureBrands;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var AdminFeatureBrandsScreen = (0, _components.Authorize)((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('admin-feature-brands')(AdminFeatureBrands)), [], true, 'admin');
exports.AdminFeatureBrandsScreen = AdminFeatureBrandsScreen;
//# sourceMappingURL=AdminFeatureBrandsScreen.js.map