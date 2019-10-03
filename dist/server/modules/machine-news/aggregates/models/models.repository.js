"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modelRepository = exports.ModelModel = exports.ModelSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ModelSchema = new _mongoose.default.Schema((0, _core.addAuditableSchema)((0, _core.addDeletableSchema)({
  slug: String,
  name: String,
  totalNews: {
    type: Number,
    default: 0
  },
  brand: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Brand'
  },
  category: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Category'
  }
})));
exports.ModelSchema = ModelSchema;

var ModelModel = _mongoose.default.model('Model', ModelSchema);

exports.ModelModel = ModelModel;

var findAll =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ModelModel.find().populate('category').populate('brand').exec();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function findAll() {
    return _ref.apply(this, arguments);
  };
}();

var find =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(query) {
    var filters;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            filters = [];

            if (query.search) {
              filters.push({
                name: {
                  $regex: "^".concat(query.search),
                  $options: 'i'
                }
              });
            }

            if (query.brand) {
              filters.push({
                brand: query.brand
              });
            }

            if (query.category) {
              filters.push({
                category: query.category
              });
            }

            return _context2.abrupt("return", (0, _core.execCursorPaging)(ModelModel, filters, query.sortBy, Number(query.first), ['brand', 'category'], query.before, query.after));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function find(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var findById =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(id) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return ModelModel.findById(id).exec();

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function findById(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var create =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(payload) {
    var newModel, data;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            newModel = new ModelModel(payload);
            _context4.next = 3;
            return newModel.save();

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

  return function create(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var update =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(payload) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return ModelModel.findByIdAndUpdate(payload.id, {
              $set: payload
            }).exec();

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function update(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

var del =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(_id) {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return ModelModel.ensureIndexes({
              brand: 1,
              category: 1,
              slug: 1,
              name: 1
            });

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function del(_x5) {
    return _ref6.apply(this, arguments);
  };
}();

var ensureIndexes =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7() {
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return ModelModel.ensureIndexes({
              name: 1,
              slug: 1
            });

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function ensureIndexes() {
    return _ref7.apply(this, arguments);
  };
}();

var findOne =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee8(_query) {
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

  return function findOne(_x6) {
    return _ref8.apply(this, arguments);
  };
}();

var count =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
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

  return function count() {
    return _ref9.apply(this, arguments);
  };
}();

var increaseNewsCount =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee10(modelId) {
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return ModelModel.findByIdAndUpdate(modelId, {
              $inc: {
                totalNews: 1
              }
            }).exec();

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function increaseNewsCount(_x7) {
    return _ref10.apply(this, arguments);
  };
}();

var decreaseNewsCount =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11(modelId) {
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return ModelModel.findByIdAndUpdate(modelId, {
              $inc: {
                totalNews: -1
              }
            }).exec();

          case 2:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function decreaseNewsCount(_x8) {
    return _ref11.apply(this, arguments);
  };
}();

var modelRepository = {
  increaseNewsCount: increaseNewsCount,
  decreaseNewsCount: decreaseNewsCount,
  findAll: findAll,
  find: find,
  findById: findById,
  create: create,
  update: update,
  del: del,
  ensureIndexes: ensureIndexes,
  findOne: findOne,
  count: count
};
exports.modelRepository = modelRepository;
//# sourceMappingURL=models.repository.js.map