"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rentalPeriodRepository = exports.RentalPeriodModel = exports.RentalPeriodSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _core = require("../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var RentalPeriodSchema = new _mongoose.default.Schema((0, _core.addAuditableSchema)((0, _core.addDeletableSchema)({
  min: Number,
  max: Number
})));
exports.RentalPeriodSchema = RentalPeriodSchema;

var RentalPeriodModel = _mongoose.default.model('RentalPeriod', RentalPeriodSchema);

exports.RentalPeriodModel = RentalPeriodModel;
var rentalPeriodRepository = {
  findAll: function () {
    var _findAll = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return RentalPeriodModel.find().exec();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
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
    _regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              throw new _core.NotImplementedError();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function find() {
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
              return RentalPeriodModel.findById(id).exec();

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function findById(_x) {
      return _findById.apply(this, arguments);
    }

    return findById;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(payload) {
      var newRentalPeriod, data;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              newRentalPeriod = new RentalPeriodModel(payload);
              _context4.next = 3;
              return newRentalPeriod.save();

            case 3:
              data = _context4.sent;
              return _context4.abrupt("return", data._id);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function create(_x2) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  update: function () {
    var _update = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(payload) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return RentalPeriodModel.findByIdAndUpdate(payload.id, {
                $set: payload
              }).exec();

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function update(_x3) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),
  del: function () {
    var _del = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6() {
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              throw new _core.NotImplementedError();

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function del() {
      return _del.apply(this, arguments);
    }

    return del;
  }(),
  ensureIndexes: function () {
    var _ensureIndexes = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7() {
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

    function ensureIndexes() {
      return _ensureIndexes.apply(this, arguments);
    }

    return ensureIndexes;
  }(),
  findOne: function () {
    var _findOne = _asyncToGenerator(
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

    function findOne() {
      return _findOne.apply(this, arguments);
    }

    return findOne;
  }(),
  count: function () {
    var _count = _asyncToGenerator(
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

    function count() {
      return _count.apply(this, arguments);
    }

    return count;
  }()
};
exports.rentalPeriodRepository = rentalPeriodRepository;
//# sourceMappingURL=rental-periods.repository.js.map