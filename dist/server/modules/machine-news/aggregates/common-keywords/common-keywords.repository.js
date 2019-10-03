"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonKeywordRepository = exports.CommonKeywordSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _core = require("../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CommonKeywordSchema = new _mongoose.default.Schema({
  keyword: String,
  count: {
    type: Number,
    default: 1
  },
  createdAt: Number,
  lastModifiedAt: Number
});
exports.CommonKeywordSchema = CommonKeywordSchema;

var CommonKeywordModel = _mongoose.default.model('CommonKeyword', CommonKeywordSchema);

var commonKeywordRepository = {
  count: function () {
    var _count = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return CommonKeywordModel.find().countDocuments().exec();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function count() {
      return _count.apply(this, arguments);
    }

    return count;
  }(),
  findOne: function () {
    var _findOne = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(payload) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return CommonKeywordModel.findOne(payload).exec();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findOne(_x) {
      return _findOne.apply(this, arguments);
    }

    return findOne;
  }(),
  findById: function () {
    var _findById = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(id) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return CommonKeywordModel.findById(id).exec();

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function findById(_x2) {
      return _findById.apply(this, arguments);
    }

    return findById;
  }(),
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(query) {
      var filters;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              filters = [];
              _context4.next = 3;
              return (0, _core.execCursorPaging)(CommonKeywordModel, filters, query.sortBy, Number(query.first), ['news'], query.before, query.after);

            case 3:
              return _context4.abrupt("return", _context4.sent);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function find(_x3) {
      return _find.apply(this, arguments);
    }

    return find;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(payload) {
      var newCommonKeyword;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              newCommonKeyword = new CommonKeywordModel(payload);
              _context5.next = 3;
              return newCommonKeyword.save();

            case 3:
              return _context5.abrupt("return", newCommonKeyword.id);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function create(_x4) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  update: function () {
    var _update = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(payload) {
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return CommonKeywordModel.findByIdAndUpdate(payload.id, {
                $set: payload
              }).exec();

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function update(_x5) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),
  del: function () {
    var _del = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(_id) {
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              throw new _core.NotImplementedError();

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function del(_x6) {
      return _del.apply(this, arguments);
    }

    return del;
  }(),
  ensureIndexes: function () {
    var _ensureIndexes = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8() {
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return CommonKeywordModel.ensureIndexes({
                count: 1,
                keyword: 1
              });

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function ensureIndexes() {
      return _ensureIndexes.apply(this, arguments);
    }

    return ensureIndexes;
  }()
};
exports.commonKeywordRepository = commonKeywordRepository;
//# sourceMappingURL=common-keywords.repository.js.map