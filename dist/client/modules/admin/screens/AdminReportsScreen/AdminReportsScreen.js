"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminReportsScreen = void 0;

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

var _components = require("../../../../components");

require("./AdminReportsScreen.less");

var _i18n = require("../../../../i18n");

var jsCookie = _interopRequireWildcard(require("js-cookie"));

var _services = require("../../../../services");

var _core = require("../../../../core");

var moment = _interopRequireWildcard(require("moment"));

var _store = require("../../../../store");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

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

var AdminReports =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminReports, _React$Component);

  function AdminReports() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminReports);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminReports)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filters: {
        search: undefined,
        reason: undefined,
        state: undefined
      },
      data: [],
      before: undefined,
      after: undefined,
      first: 10,
      sortBy: "createdAt|desc",
      loading: {
        table: true
      }
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
              return serviceProxies.findReports(_this.state.filters.search, _this.state.filters.state, _this.state.filters.reason, _this.state.first, _this.state.sortBy, undefined, undefined);

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

    _defineProperty(_assertThisInitialized(_this), "getNextPage",
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
              return serviceProxies.findReports(_this.state.filters.search, _this.state.filters.state, _this.state.filters.reason, _this.state.first, _this.state.sortBy, undefined, _this.state.after);

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
              idToken = jsCookie.get('token');
              serviceProxies = (0, _services.getServiceProxy)(idToken);
              _context3.next = 6;
              return serviceProxies.findReports(_this.state.filters.search, _this.state.filters.state, _this.state.filters.reason, _this.state.first, _this.state.sortBy, _this.state.before, undefined);

            case 6:
              result = _context3.sent;

              _this.setState({
                data: result.data,
                before: result.before,
                after: result.after,
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

              _context3.next = 14;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);

              _message2.default.error(_context3.t0.message);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  table: false
                })
              });

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 10]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "resolveReport",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(payload) {
        var idToken, serviceProxies;
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
                idToken = jsCookie.get('token');
                serviceProxies = (0, _services.getServiceProxy)(idToken);
                _context4.next = 6;
                return serviceProxies.updateReport(payload.reportId, {
                  operation: 'resolveReport',
                  payload: {
                    resolvedResult: payload.resolvedResult
                  }
                });

              case 6:
                _this.setState({
                  data: _this.state.data.map(function (item) {
                    if (item._id === payload.reportId) {
                      return _objectSpread({}, item, {
                        state: 'RESOLVED',
                        resolvedResult: payload.resolvedResult,
                        resolvedAt: new Date().getTime(),
                        resolvedBy: _this.props.profileState.authUser.id
                      });
                    } else {
                      return item;
                    }
                  }),
                  loading: _objectSpread({}, _this.state.loading, {
                    table: false
                  })
                });

                _message2.default.success(_this.props.t('admin-reports:resolve-report-success'));

                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](1);

                _message2.default.error(_context4.t0.message);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 10]]);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(AdminReports, [{
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
            return _this2.resolveReport({
              reportId: record._id,
              resolvedResult: _core.reportResults.SKIP
            });
          }
        }, translate('admin-reports:skip'))), _react.default.createElement(_menu.default.Item, null, _react.default.createElement("a", {
          onClick: function onClick() {
            return _this2.resolveReport({
              reportId: record._id,
              resolvedResult: _core.reportResults.DELETE
            });
          }
        }, translate('admin-reports:delete'))));
      };

      var columns = [{
        title: translate('admin-reports:news-title'),
        dataIndex: 'newsTitle',
        key: 'newsTitle',
        render: function render(_text, record) {
          return _react.default.createElement("a", {
            href: record.news.shop ? "".concat((0, _core.getShopUrl)(record.news.shop.domain), "/bai-dang-cua-hang/").concat(record.news._id) : "/bai-dang/".concat(record.news._id),
            target: "_blank"
          }, record.news.title);
        }
      }, {
        title: translate('admin-reports:report-reasons'),
        dataIndex: 'reportReasons',
        key: 'reportReasons',
        render: function render(_text, record) {
          return record.reports.slice(0, 2).map(function (report, index) {
            return _react.default.createElement(_tag.default, {
              key: index,
              color: "red"
            }, _core.reportReasons.filter(function (item) {
              return item.value === report.reason;
            })[0].label);
          });
        }
      }, {
        title: translate('admin-reports:report-state'),
        dataIndex: 'reportState',
        key: 'reportState',
        render: function render(_text, record) {
          return _react.default.createElement(_tag.default, {
            color: record.state === 'PENDING' ? 'red' : 'blue'
          }, record.state === 'PENDING' ? translate('admin-reports:pending-report') : translate('admin-reports:resolved-report'));
        }
      }, {
        title: translate('admin-reports:resolved-result'),
        dataIndex: 'resolvedResult',
        key: 'resolvedResult',
        render: function render(_text, record) {
          return record.resolvedResult ? _react.default.createElement(_tag.default, {
            color: record.resolvedResult === 'DELETE' ? 'red' : 'blue'
          }, record.resolvedResult === 'DELETE' ? translate('admin-reports:pending-report') : translate('admin-reports:resolved-report')) : '';
        }
      }, {
        title: translate('admin-reports:resolved-at'),
        dataIndex: 'resolvedAt',
        key: 'resolvedAt',
        render: function render(_text, record) {
          return record.resolvedAt ? moment(new Date(record.resolvedAt)).format(dateFormat) : '';
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
        className: "admin-reports-screen"
      }, _react.default.createElement(_components.AdminSearchbar, {
        handleSearch: this.getData,
        value: this.state.filters.search,
        showSearch: true,
        handleSearchChange: this.handleSearchChange,
        placeholder: translate('admin-reports:search-reports')
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
      }));
    }
  }]);

  return AdminReports;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var AdminReportsScreen = (0, _components.Authorize)((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('admin-reports')(AdminReports)), [], true, 'admin');
exports.AdminReportsScreen = AdminReportsScreen;
//# sourceMappingURL=AdminReportsScreen.js.map