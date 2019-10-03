"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminStatisticsScreen = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

var _components = require("../../../../components");

var _store = require("../../../../store");

var _i18n = require("../../../../i18n");

require("./AdminStatisticsScreen.less");

var _services = require("../../../../services");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _xlsx = require("xlsx");

var FileSaver = _interopRequireWildcard(require("file-saver"));

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

var AdminStatistics =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminStatistics, _React$Component);

  function AdminStatistics() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminStatistics);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminStatistics)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      data: {
        daysOfWeek: [],
        hoursOfDay: [],
        brands: [],
        categories: [],
        provinces: []
      },
      showAll: {
        brands: false,
        categories: false,
        provinces: false
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showAll", function (key) {
      _this.setState({
        showAll: _objectSpread({}, _this.state.showAll, _defineProperty({}, key, true))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getStatisticsInfo",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dates) {
        var startDate, endDate, idToken, serviceProxy, statisticsData;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(dates.length === 2)) {
                  _context.next = 19;
                  break;
                }

                _context.prev = 1;

                _this.setState({
                  loading: true
                });

                startDate = new Date(dates[0]).toISOString();
                endDate = new Date(dates[1]).toISOString();
                _context.next = 7;
                return _app.default.auth().currentUser.getIdToken();

              case 7:
                idToken = _context.sent;
                serviceProxy = (0, _services.getServiceProxy)(idToken);
                _context.next = 11;
                return serviceProxy.findNewsStatisticsInfo(startDate, endDate);

              case 11:
                statisticsData = _context.sent;

                _this.setState({
                  loading: false,
                  data: {
                    daysOfWeek: statisticsData.daysOfWeek,
                    hoursOfDay: statisticsData.hoursOfDay,
                    brands: statisticsData.brands,
                    categories: statisticsData.categories,
                    provinces: statisticsData.provinces
                  }
                });

                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_context.t0.message);

                _this.setState({
                  loading: false
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "exportExcel", function () {
      try {
        var tables = document.getElementsByTagName('table');
        var workSheets = Array.from(tables).map(function (item) {
          return _xlsx.utils.table_to_sheet(item);
        });
        var jsonData = workSheets.map(function (item) {
          return _xlsx.utils.sheet_to_json(item, {
            header: 1
          });
        });
        var result = [];
        result.concat(jsonData[0]);
        jsonData.forEach(function (item) {
          result = result.concat(item).concat(['']);
        });

        var worksheet = _xlsx.utils.json_to_sheet(result, {
          skipHeader: true
        });

        var workbook = _xlsx.utils.book_new();

        _xlsx.utils.book_append_sheet(workbook, worksheet, 'timmay.vn');

        var file = (0, _xlsx.writeFile)(workbook, 'statistic-timmay.xlsx');
        FileSaver.saveAs(file, 'statistic-timmay.xlsx');
      } catch (error) {//
      }
    });

    return _this;
  }

  _createClass(AdminStatistics, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var dateFormat = 'DD/MM/YYYY';
      var daysOfWeekData = {};
      this.state.data.daysOfWeek.forEach(function (item) {
        daysOfWeekData[item._id] = item.totalNews ? item.totalNews : 0;
      });
      var daysOfWeekColumns = [{
        title: translate('admin-statistics:day'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        render: function render() {
          return translate('admin-statistics:totalNews');
        }
      }, {
        title: translate('admin-statistics:monday'),
        dataIndex: '2',
        key: '2',
        render: function render(_text, record) {
          return record['2'] ? record['2'] : 0;
        }
      }, {
        title: translate('admin-statistics:tuesday'),
        dataIndex: '3',
        key: '3',
        render: function render(_text, record) {
          return record['3'] ? record['3'] : 0;
        }
      }, {
        title: translate('admin-statistics:wednesday'),
        dataIndex: '4',
        key: '4',
        render: function render(_text, record) {
          return record['4'] ? record['4'] : 0;
        }
      }, {
        title: translate('admin-statistics:thursday'),
        dataIndex: '5',
        key: '5',
        render: function render(_text, record) {
          return record['5'] ? record['5'] : 0;
        }
      }, {
        title: translate('admin-statistics:friday'),
        dataIndex: '6',
        key: '6',
        render: function render(_text, record) {
          return record['6'] ? record['6'] : 0;
        }
      }, {
        title: translate('admin-statistics:saturday'),
        dataIndex: '7',
        key: '7',
        render: function render(_text, record) {
          return record['7'] ? record['7'] : 0;
        }
      }, {
        title: translate('admin-statistics:sunday'),
        dataIndex: '1',
        key: '1',
        render: function render(_text, record) {
          return record['1'] ? record['1'] : 0;
        }
      }];
      var hoursOfDayColumns = [{
        title: translate('admin-statistics:hour'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        render: function render() {
          return translate('admin-statistics:totalNews');
        }
      }, {
        title: "0 - 2",
        dataIndex: '0',
        key: '0',
        render: function render(_text, record) {
          return record['0'] ? record['0'] : 0;
        }
      }, {
        title: "2 - 4",
        dataIndex: '2',
        key: '2',
        render: function render(_text, record) {
          return record['2'] ? record['2'] : 0;
        }
      }, {
        title: "4 - 6",
        dataIndex: '4',
        key: '4',
        render: function render(_text, record) {
          return record['4'] ? record['4'] : 0;
        }
      }, {
        title: "6 - 8",
        dataIndex: '6',
        key: '6',
        render: function render(_text, record) {
          return record['6'] ? record['6'] : 0;
        }
      }, {
        title: "8 - 10",
        dataIndex: '8',
        key: '8',
        render: function render(_text, record) {
          return record['8'] ? record['8'] : 0;
        }
      }, {
        title: "10 - 12",
        dataIndex: '10',
        key: '10',
        render: function render(_text, record) {
          return record['10'] ? record['10'] : 0;
        }
      }, {
        title: "12 - 14",
        dataIndex: '12',
        key: '12',
        render: function render(_text, record) {
          return record['12'] ? record['12'] : 0;
        }
      }, {
        title: "14 - 16",
        dataIndex: '14',
        key: '14',
        render: function render(_text, record) {
          return record['14'] ? record['14'] : 0;
        }
      }, {
        title: "16 - 18",
        dataIndex: '16',
        key: '16',
        render: function render(_text, record) {
          return record['16'] ? record['16'] : 0;
        }
      }, {
        title: "18 - 20",
        dataIndex: '18',
        key: '18',
        render: function render(_text, record) {
          return record['18'] ? record['18'] : 0;
        }
      }, {
        title: "20 - 22",
        dataIndex: '20',
        key: '20',
        render: function render(_text, record) {
          return record['20'] ? record['20'] : 0;
        }
      }, {
        title: "22 - 24",
        dataIndex: '22',
        key: '22',
        render: function render(_text, record) {
          return record['22'] ? record['22'] : 0;
        }
      }];
      var hoursOfDayData = {};
      this.state.data.hoursOfDay.forEach(function (hour) {
        if (Number(hour._id) % 2 === 0) {
          hoursOfDayData[Number(hour._id)] = Number(hour.totalNews);
        } else {
          hoursOfDayData[Number(hour._id) - 1] ? hoursOfDayData[Number(hour._id) - 1] += Number(hour.totalNews) : hoursOfDayData[Number(hour._id) - 1] = Number(hour.totalNews);
        }
      });
      var brandsColumns = [{
        title: translate('admin-statistics:brand'),
        dataIndex: 'name',
        key: 'name',
        sorter: function sorter(a, b) {
          return a.name - b.name;
        }
      }, {
        title: translate('admin-statistics:totalNews'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        sorter: function sorter(a, b) {
          return a.totalNews - b.totalNews;
        }
      }];
      var categoriesColumns = [{
        title: translate('admin-statistics:category'),
        dataIndex: 'name',
        key: 'name',
        sorter: function sorter(a, b) {
          return a.name - b.name;
        }
      }, {
        title: translate('admin-statistics:totalNews'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        sorter: function sorter(a, b) {
          return a.totalNews - b.totalNews;
        }
      }];
      var locationsColumns = [{
        title: translate('admin-statistics:location'),
        dataIndex: 'name',
        key: 'name',
        sorter: function sorter(a, b) {
          return a.name - b.name;
        }
      }, {
        title: translate('admin-statistics:totalNews'),
        dataIndex: 'totalNews',
        key: 'totalNews',
        sorter: function sorter(a, b) {
          return a.totalNews - b.totalNews;
        }
      }];
      return _react.default.createElement("div", {
        className: "admin-statistics-screen"
      }, _react.default.createElement(_row.default, {
        style: {
          marginBottom: '24px'
        }
      }, _react.default.createElement(_col.default, {
        xs: 24
      }, _react.default.createElement("div", {
        className: "date-picker-container"
      }, _react.default.createElement(_datePicker.default.RangePicker, {
        placeholder: [translate('admin-statistics:startDate'), translate('admin-statistics:endDate')],
        format: dateFormat,
        onCalendarChange: function onCalendarChange(dates) {
          return _this2.getStatisticsInfo(dates);
        }
      }), _react.default.createElement(_button.default, {
        htmlType: "submit",
        type: "primary",
        icon: "download",
        onClick: this.exportExcel
      }, translate('admin-statistics:exportToExcel'))))), _react.default.createElement(_table.default, {
        bordered: true,
        columns: daysOfWeekColumns,
        dataSource: this.state.data.daysOfWeek.length > 0 ? [daysOfWeekData] : [],
        pagination: false,
        scroll: {
          x: 1000
        },
        style: {
          marginBottom: '24px'
        },
        rowKey: function rowKey(record) {
          return record._id;
        },
        loading: this.state.loading
      }), _react.default.createElement(_table.default, {
        bordered: true,
        columns: hoursOfDayColumns,
        dataSource: this.state.data.hoursOfDay.length > 0 ? [hoursOfDayData] : [],
        pagination: false,
        scroll: {
          x: 1000
        },
        style: {
          marginBottom: '24px'
        },
        rowKey: function rowKey(record) {
          return record._id;
        },
        loading: this.state.loading
      }), _react.default.createElement(_row.default, {
        type: "flex",
        gutter: 24
      }, _react.default.createElement(_col.default, {
        xs: 24,
        lg: 8
      }, _react.default.createElement(_table.default, {
        bordered: true,
        columns: brandsColumns,
        dataSource: this.state.showAll.brands ? this.state.data.brands.sort(function (a, b) {
          return b.totalNews - a.totalNews;
        }) : this.state.data.brands.sort(function (a, b) {
          return b.totalNews - a.totalNews;
        }).slice(0, 15),
        pagination: false,
        style: {
          marginBottom: '24px'
        },
        rowKey: function rowKey(record) {
          return record._id;
        },
        loading: this.state.loading,
        footer: function footer() {
          return _this2.state.data.brands.length > 15 && !_this2.state.showAll.brands ? _react.default.createElement("a", {
            onClick: function onClick() {
              return _this2.showAll('brands');
            }
          }, translate('admin-statistics:showAll')) : null;
        }
      })), _react.default.createElement(_col.default, {
        xs: 24,
        lg: 8
      }, _react.default.createElement(_table.default, {
        bordered: true,
        columns: categoriesColumns,
        dataSource: this.state.showAll.categories ? this.state.data.categories.sort(function (a, b) {
          return b.totalNews - a.totalNews;
        }) : this.state.data.categories.sort(function (a, b) {
          return b.totalNews - a.totalNews;
        }).slice(0, 15),
        pagination: false,
        style: {
          marginBottom: '24px'
        },
        rowKey: function rowKey(record) {
          return record._id;
        },
        loading: this.state.loading,
        footer: function footer() {
          return _this2.state.data.categories.length > 15 && !_this2.state.showAll.categories ? _react.default.createElement("a", {
            onClick: function onClick() {
              return _this2.showAll('categories');
            }
          }, translate('admin-statistics:showAll')) : null;
        }
      })), _react.default.createElement(_col.default, {
        xs: 24,
        lg: 8
      }, _react.default.createElement(_table.default, {
        bordered: true,
        columns: locationsColumns,
        dataSource: this.state.showAll.provinces ? this.state.data.provinces.sort(function (a, b) {
          return b.totalNews - a.totalNews;
        }) : this.state.data.provinces.sort(function (a, b) {
          return b.totalNews - a.totalNews;
        }).slice(0, 15),
        pagination: false,
        style: {
          marginBottom: '24px'
        },
        rowKey: function rowKey(record) {
          return record._id;
        },
        loading: this.state.loading,
        footer: function footer() {
          return _this2.state.data.provinces.length > 15 && !_this2.state.showAll.provinces ? _react.default.createElement("a", {
            onClick: function onClick() {
              return _this2.showAll('provinces');
            }
          }, translate('admin-statistics:showAll')) : null;
        }
      }))));
    }
  }]);

  return AdminStatistics;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var AdminStatisticsScreen = (0, _components.Authorize)((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('admin-statistics')(AdminStatistics)), [], true, 'admin');
exports.AdminStatisticsScreen = AdminStatisticsScreen;
//# sourceMappingURL=AdminStatisticsScreen.js.map