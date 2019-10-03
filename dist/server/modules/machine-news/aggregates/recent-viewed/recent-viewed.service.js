"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var yup = _interopRequireWildcard(require("yup"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var recentViewedKey = 'recent_viewed';
var recentViewedService = {
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(params) {
      var filter;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 1. authorize
              // 2. validate
              (0, _core.validateQuery)(params.query); // 3. do business logic
              // 4. persist to db

              filter = _objectSpread({}, params.query, {
                user: params.authUser ? params.authUser.id : ''
              });

              if (!filter.user) {
                filter.uuid = params.cookies[recentViewedKey];
              }

              if (!(filter.uuid || filter.user)) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return params.repository.find(filter);

            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 9:
              _context.t0 = {
                data: []
              };

            case 10:
              return _context.abrupt("return", _context.t0);

            case 11:
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
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(data, params) {
      var validationSchema, existedNews;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // 1. authorize
              // 2. validate
              validationSchema = yup.object().shape({
                news: yup.string().required('News is required')
              });
              _context2.next = 3;
              return validationSchema.validate(data);

            case 3:
              _context2.next = 5;
              return params.newsRepository.findById(data.news);

            case 5:
              existedNews = _context2.sent;

              if (existedNews) {
                _context2.next = 8;
                break;
              }

              throw new _core.UserInputError('News not found');

            case 8:
              if (!(params.authUser && params.authUser.id)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 11;
              return params.repository.update({
                news: data.news,
                user: params.authUser.id,
                createdAt: new Date().getTime(),
                lastModifiedAt: new Date().getTime()
              });

            case 11:
              _context2.next = 15;
              break;

            case 13:
              _context2.next = 15;
              return params.repository.update({
                news: data.news,
                uuid: params.cookies[recentViewedKey],
                createdAt: new Date().getTime(),
                lastModifiedAt: new Date().getTime()
              });

            case 15:
              return _context2.abrupt("return", {});

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function create(_x2, _x3) {
      return _create.apply(this, arguments);
    }

    return create;
  }()
};
var _default = recentViewedService;
exports.default = _default;
//# sourceMappingURL=recent-viewed.service.js.map