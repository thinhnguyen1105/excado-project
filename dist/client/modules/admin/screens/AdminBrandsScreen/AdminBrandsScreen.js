"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminBrandsScreen = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

require("antd/lib/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/lib/dropdown"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/menu/style");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

require("./AdminBrandsScreen.less");

var _components = require("../../../../components");

var _store = require("../../../../store");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../../../services");

var _i18n = require("../../../../i18n");

var moment = _interopRequireWildcard(require("moment"));

var _BrandModal = _interopRequireDefault(require("./components/BrandModal"));

var _config = require("../../../../config");

var _slugify = _interopRequireDefault(require("slugify"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var AdminBrands =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminBrands, _React$Component);

  function AdminBrands() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminBrands);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminBrands)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
        modal: false
      },
      brandModalVisible: false,
      logoImage: undefined,
      selectedBrand: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "openBrandModal", function (selectedBrand) {
      _this.setState({
        brandModalVisible: true,
        selectedBrand: selectedBrand
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeBrandModal", function () {
      _this.setState({
        brandModalVisible: false,
        selectedBrand: undefined
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
    _regenerator.default.mark(function _callee() {
      var idToken, serviceProxies, result;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: true
                })
              });

              _context.prev = 1;
              _context.next = 4;
              return _app.default.auth().currentUser.getIdToken;

            case 4:
              idToken = _context.sent;
              serviceProxies = (0, _services.getServiceProxy)(idToken);
              _context.next = 8;
              return serviceProxies.findBrands(_this.state.filters.search, _this.state.first, _this.state.sortBy, undefined, undefined);

            case 8:
              result = _context.sent;

              _this.setState({
                data: result.data,
                before: result.before,
                after: result.after,
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);

              _message2.default.error(_context.t0.message);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getPrevPage",
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
              return serviceProxies.findBrands(_this.state.filters.search, _this.state.first, _this.state.sortBy, _this.state.before, undefined);

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

    _defineProperty(_assertThisInitialized(_this), "getNextPage",
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
              return serviceProxies.findBrands(_this.state.filters.search, _this.state.first, _this.state.sortBy, undefined, _this.state.after);

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

    _defineProperty(_assertThisInitialized(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(values) {
        var logoImageUrl, logoImageFormData, logoImageResult, idToken, serviceProxies, result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: true
                  })
                });

                _context4.prev = 1;
                logoImageUrl = '';

                if (!_this.state.logoImage) {
                  _context4.next = 14;
                  break;
                }

                if (!_config.config.upload.allowImageExt.test(_this.state.logoImage.name)) {
                  _context4.next = 13;
                  break;
                }

                logoImageFormData = new FormData();
                logoImageFormData.append('brandLogoImage', _this.state.logoImage);
                _context4.next = 9;
                return fetch("".concat(_config.config.url.api, "/upload-image/brand-logo-image"), {
                  method: 'POST',
                  body: logoImageFormData
                }).then(function (res) {
                  return res.json();
                });

              case 9:
                logoImageResult = _context4.sent;
                logoImageUrl = logoImageResult.logoImage;
                _context4.next = 14;
                break;

              case 13:
                _message2.default.error('Ảnh chỉ nhận các định dạng PNG, JPG, JPEG');

              case 14:
                _context4.next = 16;
                return _app.default.auth().currentUser.getIdToken;

              case 16:
                idToken = _context4.sent;
                serviceProxies = (0, _services.getServiceProxy)(idToken);

                if (!(_this.state.selectedBrand && _this.state.selectedBrand._id)) {
                  _context4.next = 25;
                  break;
                }

                _context4.next = 21;
                return serviceProxies.updateBrand(_this.state.selectedBrand._id, {
                  operation: 'updateDetail',
                  payload: {
                    name: values.name,
                    logoImage: logoImageUrl ? logoImageUrl : _this.state.selectedBrand.logoImage
                  }
                });

              case 21:
                _this.setState({
                  brandModalVisible: false,
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  }),
                  selectedBrand: undefined,
                  data: _this.state.data.map(function (item) {
                    return item._id === _this.state.selectedBrand._id ? _objectSpread({}, item, values, {
                      logoImage: logoImageUrl ? logoImageUrl : _this.state.selectedBrand.logoImage
                    }) : item;
                  })
                });

                _message2.default.success(_this.props.t('admin-brands:update-success'));

                _context4.next = 30;
                break;

              case 25:
                _context4.next = 27;
                return serviceProxies.createBrand({
                  name: values.name,
                  logoImage: logoImageUrl
                });

              case 27:
                result = _context4.sent;

                _this.setState({
                  brandModalVisible: false,
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  }),
                  selectedBrand: undefined,
                  data: [{
                    _id: result.id,
                    name: values.name,
                    logoImage: logoImageUrl,
                    slug: (0, _slugify.default)(values.name),
                    createdAt: new Date().getTime()
                  }].concat(_toConsumableArray(_this.state.data))
                });

                _message2.default.success(_this.props.t('admin-brands:create-success'));

              case 30:
                _context4.next = 36;
                break;

              case 32:
                _context4.prev = 32;
                _context4.t0 = _context4["catch"](1);

                _message2.default.error(_context4.t0.message);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  })
                });

              case 36:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 32]]);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "uploadLogoImage",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(file) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this.setState({
                  logoImage: file
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(AdminBrands, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
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
        title: translate('admin-brands:brand-name'),
        dataIndex: 'name',
        key: 'name',
        render: function render(_text, record) {
          return _react.default.createElement("a", {
            href: "/danh-sach-hang/".concat(record.slug),
            target: "_blank"
          }, record.name);
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
        className: "admin-brands-screen"
      }, _react.default.createElement(_components.AdminSearchbar, {
        hasCreate: true,
        handleSearch: this.getData,
        value: this.state.filters.search,
        showSearch: true,
        handleSearchChange: this.handleSearchChange,
        placeholder: translate('admin-brands:search-brands'),
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
      }), this.state.brandModalVisible && _react.default.createElement(_BrandModal.default, {
        brandInfo: this.state.selectedBrand,
        loading: this.state.loading.modal,
        visible: this.state.brandModalVisible,
        handleCancel: this.closeBrandModal,
        handleOk: this.handleSubmit,
        uploadLogoImage: this.uploadLogoImage
      }));
    }
  }]);

  return AdminBrands;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var AdminBrandsScreen = (0, _components.Authorize)((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('admin-brands')(AdminBrands)), [], true, 'admin');
exports.AdminBrandsScreen = AdminBrandsScreen;
//# sourceMappingURL=AdminBrandsScreen.js.map