"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _ = require("../..");

var yup = _interopRequireWildcard(require("yup"));

var _config = require("../../../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var reportReasons = ['SOLD', 'VIOLATE', 'WRONG_INFO'];
var resolveResult = ['DELETE', 'SKIP'];
var reportsService = {
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref) {
      var query, repository;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref.query, repository = _ref.repository;
              // 1. authorize
              // ensurePermission(authUser, PERMISSIONS.REPORTS.VIEW);
              // 2. validate
              (0, _core.validateQuery)(query); // 3. do business logic
              // 4. persist to db

              _context.next = 4;
              return repository.find(query);

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function find(_x) {
      return _find.apply(this, arguments);
    }

    return find;
  }(),
  get: function () {
    var _get = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(id, params) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // 1. authorize
              (0, _core.ensurePermission)(params.authUser, _.PERMISSIONS.REPORTS.VIEW); // 2. validate

              if (id) {
                _context2.next = 3;
                break;
              }

              throw new _core.UserInputError('Invalid id');

            case 3:
              _context2.next = 5;
              return params.repository.findById(id);

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function get(_x2, _x3) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(data, params) {
      var existedNews, existedReportOfNews, id;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _core.validatePayload)({
                news: yup.string().required('News is required'),
                reason: yup.string().required('Reason is required').oneOf(reportReasons),
                description: yup.string().required('Description is required').min(20, 'Too short').max(500, 'Too long'),
                email: yup.string().required('Email is required').email('Invalid email address'),
                phoneNo: yup.string().required('Phone number is required').matches(_config.config.regex.phone, 'Invalid phone number')
              }, data);

            case 2:
              _context3.next = 4;
              return params.newsRepository.findById(data.news);

            case 4:
              existedNews = _context3.sent;

              if (!(!existedNews || existedNews.status !== 'PUBLIC')) {
                _context3.next = 7;
                break;
              }

              throw new _core.EntityNotFoundError('News');

            case 7:
              _context3.next = 9;
              return params.repository.findOne({
                news: data.news
              });

            case 9:
              existedReportOfNews = _context3.sent;

              if (!existedReportOfNews) {
                _context3.next = 16;
                break;
              }

              _context3.next = 13;
              return params.repository.updateReport(existedReportOfNews._id, {
                reason: data.reason,
                description: data.description,
                email: data.email,
                phoneNo: data.phoneNo,
                createdAt: new Date().getTime()
              });

            case 13:
              return _context3.abrupt("return", {
                id: existedReportOfNews._id
              });

            case 16:
              _context3.next = 18;
              return params.repository.create({
                news: data.news,
                newsTitle: existedNews.title,
                reports: [{
                  reason: data.reason,
                  description: data.description,
                  email: data.email,
                  phoneNo: data.phoneNo,
                  createdAt: new Date().getTime()
                }],
                state: 'PENDING'
              });

            case 18:
              id = _context3.sent;
              return _context3.abrupt("return", {
                id: id
              });

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function create(_x4, _x5) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  patch: function () {
    var _patch = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(id, data, params) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              (0, _core.validateOperation)(data.operation, ['resolveReport']);
              _context4.next = 3;
              return reportsService[data.operation](id, data.payload, params);

            case 3:
              return _context4.abrupt("return", {});

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function patch(_x6, _x7, _x8) {
      return _patch.apply(this, arguments);
    }

    return patch;
  }(),
  resolveReport: function () {
    var _resolveReport = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, data, params) {
      var existedReport, validationSchema;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (id) {
                _context5.next = 2;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 2:
              _context5.next = 4;
              return params.repository.findById(id);

            case 4:
              existedReport = _context5.sent;

              if (existedReport) {
                _context5.next = 7;
                break;
              }

              throw new _core.EntityNotFoundError('Report');

            case 7:
              validationSchema = yup.object().shape({
                resolvedResult: yup.string().required('Result is required').oneOf(resolveResult)
              });
              _context5.next = 10;
              return validationSchema.validate(data);

            case 10:
              if (!(data.resolvedResult === 'DELETE')) {
                _context5.next = 13;
                break;
              }

              _context5.next = 13;
              return params.newsRepository.update(_objectSpread({
                id: existedReport.news._id,
                status: 'DELETED'
              }, params.modificationInfo));

            case 13:
              _context5.next = 15;
              return params.repository.update({
                id: existedReport._id,
                state: 'RESOLVED',
                resolvedResult: data.resolvedResult,
                resolvedAt: new Date().getTime(),
                resolvedBy: params.authUser.id
              });

            case 15:
              return _context5.abrupt("return", {});

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function resolveReport(_x9, _x10, _x11) {
      return _resolveReport.apply(this, arguments);
    }

    return resolveReport;
  }()
};
var _default = reportsService;
exports.default = _default;
//# sourceMappingURL=reports.service.js.map