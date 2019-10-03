"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminUploadExcelScreen = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

require("antd/lib/upload/style");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/tag/style");

var _tag = _interopRequireDefault(require("antd/lib/tag"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

var _store = require("../../../../store");

var _components = require("../../../../components");

var _i18n = require("../../../../i18n");

require("./AdminUploadExcelScreen.less");

var _config = require("../../../../config");

var moment = _interopRequireWildcard(require("moment"));

var _core = require("../../../../core");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

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

var AdminUploadExcel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminUploadExcel, _React$Component);

  function AdminUploadExcel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminUploadExcel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminUploadExcel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      data: [],
      excelFile: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "uploadExcelFile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(file) {
        var uploadExcelFileResult, excelFormData, idToken;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_config.config.upload.allowExcelExt.test(file.name)) {
                  _context.next = 19;
                  break;
                }

                _context.prev = 1;

                _this.setState({
                  loading: true,
                  data: []
                });

                excelFormData = new FormData();
                excelFormData.append('newsExcel', file);
                _context.next = 7;
                return _app.default.auth().currentUser.getIdToken();

              case 7:
                idToken = _context.sent;
                _context.next = 10;
                return fetch("".concat(_config.config.url.api, "/uploads/news-excel"), {
                  method: 'POST',
                  headers: {
                    authorization: idToken
                  },
                  body: excelFormData
                }).then(function (res) {
                  return res.json();
                });

              case 10:
                uploadExcelFileResult = _context.sent;

                _this.setState({
                  loading: false,
                  data: uploadExcelFileResult.data
                });

                _message2.default.success(_this.props.t('admin-upload-excel:upload-success'));

                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);

                _this.setState({
                  loading: false,
                  data: []
                });

                _message2.default.error(_context.t0.message);

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

    _defineProperty(_assertThisInitialized(_this), "beforeUploadExcelFile",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(file) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.uploadExcelFile(file);

                return _context2.abrupt("return", false);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(AdminUploadExcel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var dateFormat = 'DD/MM/YYYY HH:mm';
      var columns = [{
        title: translate('admin-upload-excel:title'),
        dataIndex: 'title',
        key: 'title',
        render: function render(_text, record) {
          return _react.default.createElement("a", {
            href: "".concat(_config.config.url.main, "/bai-dang/").concat(record._id)
          }, record.title);
        }
      }, {
        title: translate('admin-upload-excel:news-type'),
        dataIndex: 'newsType',
        key: 'newsType',
        render: function render(_text, record) {
          return _react.default.createElement(_tag.default, {
            color: "volcano"
          }, _core.newsTypes.filter(function (item) {
            return item.value === record.newsType;
          })[0].label);
        }
      }, {
        title: translate('admin-upload-excel:category'),
        dataIndex: 'categoryId',
        key: 'categoryId',
        render: function render(_text, record) {
          return record.categoryId.name;
        }
      }, {
        title: translate('admin-upload-excel:weight-range'),
        dataIndex: 'weightRange',
        key: 'weightRange',
        render: function render(_text, record) {
          var weightRange = record.weightRange.max ? _this2.props.t('common:from-to').replace('{from}', record.weightRange.min).replace('{to}', record.weightRange.max) + ' ' + _this2.props.t('common:ton') : _this2.props.t('common:more-than') + ' ' + record.weightRange.min + ' ' + _this2.props.t('common:ton');
          return weightRange;
        }
      }, {
        title: translate('common:created-at'),
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: function render(_text, record) {
          return moment(new Date(record.createdAt)).format(dateFormat);
        }
      }];
      return _react.default.createElement("div", {
        className: "admin-upload-excel-screen"
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        xs: 24,
        style: {
          textAlign: 'right',
          marginBottom: '12px'
        }
      }, _react.default.createElement("a", {
        href: "".concat(_config.config.url.api, "/downloads/excel-template"),
        target: "_blank"
      }, _react.default.createElement(_button.default, {
        type: "primary"
      }, translate('admin-upload-excel:download-template'))))), _react.default.createElement(_upload.default.Dragger, {
        beforeUpload: this.beforeUploadExcelFile,
        showUploadList: false
      }, _react.default.createElement(_spin.default, {
        spinning: this.state.loading
      }, _react.default.createElement("p", {
        className: "ant-upload-drag-icon"
      }, _react.default.createElement(_icon.default, {
        type: "inbox"
      })), _react.default.createElement("p", {
        className: "ant-upload-text"
      }, translate('admin-upload-excel:instruction')))), this.state.data.length > 0 && _react.default.createElement(_table.default, {
        columns: columns,
        dataSource: this.state.data,
        loading: this.state.loading,
        pagination: false,
        scroll: {
          x: 1000
        },
        style: {
          marginTop: '24px',
          marginBottom: '24px'
        },
        rowKey: function rowKey(record) {
          return record._id;
        }
      }));
    }
  }]);

  return AdminUploadExcel;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var AdminUploadExcelScreen = (0, _components.Authorize)((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('admin-upload-excel')(AdminUploadExcel)), [], true, 'admin');
exports.AdminUploadExcelScreen = AdminUploadExcelScreen;
//# sourceMappingURL=AdminUploadExcelScreen.js.map