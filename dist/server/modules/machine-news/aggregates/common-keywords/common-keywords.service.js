"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var yup = _interopRequireWildcard(require("yup"));

var _commonKeywords = require("./common-keywords.repository");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var commonKeywordService = {
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
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(data) {
      var existedKeyword;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _core.validatePayload)({
                keyword: yup.string().required('News is required')
              }, data);

            case 2:
              _context2.next = 4;
              return _commonKeywords.commonKeywordRepository.findOne(data);

            case 4:
              existedKeyword = _context2.sent;

              if (!existedKeyword) {
                _context2.next = 10;
                break;
              }

              _context2.next = 8;
              return _commonKeywords.commonKeywordRepository.update({
                id: existedKeyword._id,
                count: Number(existedKeyword.count) + 1
              });

            case 8:
              _context2.next = 12;
              break;

            case 10:
              _context2.next = 12;
              return _commonKeywords.commonKeywordRepository.create({
                keyword: data.keyword,
                createdAt: new Date().getTime(),
                lastModifiedAt: new Date().getTime(),
                count: 1
              });

            case 12:
              return _context2.abrupt("return", {});

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function create(_x2) {
      return _create.apply(this, arguments);
    }

    return create;
  }()
};
var _default = commonKeywordService;
exports.default = _default;
//# sourceMappingURL=common-keywords.service.js.map