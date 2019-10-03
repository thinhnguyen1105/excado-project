"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportsRepository = exports.ReportsSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _core = require("../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ReportsSchema = new _mongoose.default.Schema({
  news: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'News'
  },
  newsTitle: String,
  reports: [{
    reason: String,
    description: String,
    email: String,
    phoneNo: String,
    createdAt: Number
  }],
  state: {
    type: String,
    default: 'PENDING'
  },
  resolvedResult: String,
  resolvedAt: Number,
  resolvedBy: {
    type: String,
    ref: 'User'
  }
});
exports.ReportsSchema = ReportsSchema;

var ReportsModel = _mongoose.default.model('Report', ReportsSchema);

var reportsRepository = {
  count: function () {
    var _count = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ReportsModel.find().countDocuments().exec();

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
    _regenerator.default.mark(function _callee2(query) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!query.news) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return ReportsModel.findOne({
                news: query.news
              }).exec();

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 6:
              throw new _core.NotImplementedError();

            case 7:
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
              return ReportsModel.findById(id).exec();

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

              if (query.search) {
                filters.push({
                  newsTitle: {
                    $regex: "".concat(query.search),
                    $options: 'i'
                  }
                });
              }

              if (query.state) {
                filters.push({
                  state: query.state
                });
              }

              if (query.reason) {
                filters.push({
                  'reports.reason': query.reason
                });
              }

              _context4.next = 6;
              return (0, _core.execCursorPaging)(ReportsModel, filters, query.sortBy, Number(query.first), [{
                path: 'news',
                model: 'News',
                populate: [{
                  path: 'shop',
                  model: 'Shop'
                }]
              }], query.before, query.after);

            case 6:
              return _context4.abrupt("return", _context4.sent);

            case 7:
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
      var newReport;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              newReport = new ReportsModel(payload);
              _context5.next = 3;
              return newReport.save();

            case 3:
              return _context5.abrupt("return", newReport.id);

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
              return ReportsModel.findByIdAndUpdate(payload.id, {
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
  updateReport: function () {
    var _updateReport = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(id, report) {
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return ReportsModel.findByIdAndUpdate(id, {
                $push: {
                  reports: report
                }
              }).exec();

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function updateReport(_x6, _x7) {
      return _updateReport.apply(this, arguments);
    }

    return updateReport;
  }(),
  del: function () {
    var _del = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8(_id) {
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

    function del(_x8) {
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
              _context9.next = 2;
              return ReportsModel.ensureIndexes({
                state: 1,
                'reports.reason': 1,
                newsTitle: 'text'
              });

            case 2:
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
exports.reportsRepository = reportsRepository;
//# sourceMappingURL=reports.repository.js.map