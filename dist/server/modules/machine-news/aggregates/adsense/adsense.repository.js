"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adsenseRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _core = require("../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AdsenseSchema = new _mongoose.default.Schema((0, _core.addAuditableSchema)({
  position: Number,
  imageUrl: String,
  hyperlink: String
}));

var AdsenseModel = _mongoose.default.model('Adsense', AdsenseSchema);

var adsenseRepository = {
  findAll: function () {
    var _findAll = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              throw new _core.NotImplementedError();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findAll() {
      return _findAll.apply(this, arguments);
    }

    return findAll;
  }(),
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(query) {
      var filters;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              filters = [];
              _context2.next = 3;
              return (0, _core.execCursorPaging)(AdsenseModel, filters, query.sortBy, Number(query.first), [], query.before, query.after);

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function find(_x) {
      return _find.apply(this, arguments);
    }

    return find;
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
              return AdsenseModel.findById(id).exec();

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
  findOne: function () {
    var _findOne = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              throw new _core.NotImplementedError();

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function findOne() {
      return _findOne.apply(this, arguments);
    }

    return findOne;
  }(),
  count: function () {
    var _count = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5() {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              throw new _core.NotImplementedError();

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function count() {
      return _count.apply(this, arguments);
    }

    return count;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(payload) {
      var newAdsense;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              newAdsense = new AdsenseModel(payload);
              _context6.next = 3;
              return newAdsense.save();

            case 3:
              return _context6.abrupt("return", newAdsense.id);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function create(_x3) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  update: function () {
    var _update = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(payload) {
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return AdsenseModel.findByIdAndUpdate(payload.id, {
                $set: payload
              }).exec();

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function update(_x4) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),
  del: function () {
    var _del = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8() {
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              throw new _core.NotImplementedError();

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function del() {
      return _del.apply(this, arguments);
    }

    return del;
  }(),
  ensureIndexes: function () {
    var _ensureIndexes = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee9() {
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              throw new _core.NotImplementedError();

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function ensureIndexes() {
      return _ensureIndexes.apply(this, arguments);
    }

    return ensureIndexes;
  }()
};
exports.adsenseRepository = adsenseRepository;
//# sourceMappingURL=adsense.repository.js.map