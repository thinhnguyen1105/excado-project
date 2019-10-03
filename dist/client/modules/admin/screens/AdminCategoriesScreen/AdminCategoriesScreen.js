"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminCategoriesScreen = void 0;

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

require("./AdminCategoriesScreen.less");

var _components = require("../../../../components");

var _store = require("../../../../store");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../../../services");

var moment = _interopRequireWildcard(require("moment"));

var _CategoryModal = _interopRequireDefault(require("./components/CategoryModal"));

var _config = require("../../../../config");

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

var AdminCategories =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminCategories, _React$Component);

  function AdminCategories() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminCategories);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminCategories)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
      categoryModalVisible: false,
      imageUrl: undefined,
      selectedCategory: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "openCategoryModal", function (selectedCategory) {
      _this.setState({
        categoryModalVisible: true,
        selectedCategory: selectedCategory
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeBrandModal", function () {
      _this.setState({
        categoryModalVisible: false,
        selectedCategory: undefined
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
              return serviceProxies.findCategories();

            case 8:
              result = _context.sent;

              _this.setState({
                data: _this.state.filters.search ? result.data.filter(function (item) {
                  return (0, _slugify.default)(item.name.toLocaleLowerCase()).indexOf((0, _slugify.default)(_this.state.filters.search.toLocaleLowerCase())) > -1;
                }) : result.data,
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

    _defineProperty(_assertThisInitialized(_this), "getNextPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "getPrevPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (value) {
      _this.setState({
        filters: _objectSpread({}, _this.state.filters, {
          search: value
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(values) {
        var imageUrl, categoryImageFormData, categoryImageResult, idToken, serviceProxies, result;
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
                imageUrl = '';

                if (!_this.state.imageUrl) {
                  _context4.next = 14;
                  break;
                }

                if (!_config.config.upload.allowImageExt.test(_this.state.imageUrl.name)) {
                  _context4.next = 13;
                  break;
                }

                categoryImageFormData = new FormData();
                categoryImageFormData.append('categoryImage', _this.state.imageUrl);
                _context4.next = 9;
                return fetch("".concat(_config.config.url.api, "/upload-image/category-image"), {
                  method: 'POST',
                  body: categoryImageFormData
                }).then(function (res) {
                  return res.json();
                });

              case 9:
                categoryImageResult = _context4.sent;
                imageUrl = categoryImageResult.categoryImage;
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

                if (!(_this.state.selectedCategory && _this.state.selectedCategory._id)) {
                  _context4.next = 25;
                  break;
                }

                _context4.next = 21;
                return serviceProxies.updateCategory(_this.state.selectedCategory._id, {
                  operation: 'updateDetail',
                  payload: {
                    name: values.name,
                    imageUrl: imageUrl ? imageUrl : _this.state.selectedCategory.imageUrl
                  }
                });

              case 21:
                _this.setState({
                  categoryModalVisible: false,
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  }),
                  selectedCategory: undefined,
                  data: _this.state.data.map(function (item) {
                    return item._id === _this.state.selectedCategory._id ? _objectSpread({}, item, values, {
                      imageUrl: imageUrl ? imageUrl : _this.state.selectedCategory.imageUrl
                    }) : item;
                  })
                });

                _message2.default.success(_this.props.t('admin-categories:update-success'));

                _context4.next = 30;
                break;

              case 25:
                _context4.next = 27;
                return serviceProxies.createCategory({
                  name: values.name,
                  imageUrl: imageUrl
                });

              case 27:
                result = _context4.sent;

                _this.setState({
                  categoryModalVisible: false,
                  loading: _objectSpread({}, _this.state.loading, {
                    modal: false
                  }),
                  selectedCategory: undefined,
                  data: [{
                    _id: result.id,
                    name: values.name,
                    imageUrl: imageUrl,
                    slug: (0, _slugify.default)(values.name),
                    createdAt: new Date().getTime()
                  }].concat(_toConsumableArray(_this.state.data))
                });

                _message2.default.success(_this.props.t('admin-categories:create-success'));

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
                  imageUrl: file
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

  _createClass(AdminCategories, [{
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
            return _this2.openCategoryModal(record);
          }
        }, translate('common:edit'))));
      };

      var columns = [{
        title: translate('admin-categories:category-name'),
        dataIndex: 'name',
        key: 'name',
        render: function render(_text, record) {
          return _react.default.createElement("a", {
            href: "/chung-loai-may/".concat(record.slug),
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
        title: translate('admin-categories:category-image'),
        dataIndex: 'imageUrl',
        key: 'imageUrl',
        render: function render(_text, record) {
          return _react.default.createElement("img", {
            style: {
              height: '32px',
              width: 'auto'
            },
            src: "".concat(record.imageUrl),
            alt: "".concat(record.name)
          });
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
        className: "admin-categories-screen"
      }, _react.default.createElement(_components.AdminSearchbar, {
        hasCreate: true,
        handleSearch: this.getData,
        value: this.state.filters.search,
        showSearch: true,
        handleSearchChange: this.handleSearchChange,
        placeholder: translate('admin-categories:search-categories'),
        onCreateClick: function onCreateClick() {
          return _this2.openCategoryModal();
        }
      }), _react.default.createElement(_table.default, {
        columns: columns,
        dataSource: this.state.data.sort(function (a, b) {
          return a.slug - b.slug;
        }),
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
      }), this.state.categoryModalVisible && _react.default.createElement(_CategoryModal.default, {
        categoryInfo: this.state.selectedCategory,
        loading: this.state.loading.modal,
        visible: this.state.categoryModalVisible,
        handleCancel: this.closeBrandModal,
        handleOk: this.handleSubmit,
        uploadLogoImage: this.uploadLogoImage
      }));
    }
  }]);

  return AdminCategories;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var AdminCategoriesScreen = (0, _components.Authorize)((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('admin-categories')(AdminCategories)), [], true, 'admin');
exports.AdminCategoriesScreen = AdminCategoriesScreen;
//# sourceMappingURL=AdminCategoriesScreen.js.map