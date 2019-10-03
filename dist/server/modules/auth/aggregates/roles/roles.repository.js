"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var mongoose = _interopRequireWildcard(require("mongoose"));

var _core = require("../../../../core");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var RoleSchema = new mongoose.Schema((0, _core.addAuditableSchema)((0, _core.addDeletableSchema)({
  name: String,
  description: String,
  permissions: [String],
  isDefault: Boolean,
  isActive: {
    type: Boolean,
    default: true
  }
})));
var RoleModel = mongoose.model('Role', RoleSchema);
var roleRepository = {
  findAll: function () {
    var _findAll = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return RoleModel.find().select('_id name').exec();

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
  findById: function () {
    var _findById = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(id) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", RoleModel.findById(id).exec());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findById(_x) {
      return _findById.apply(this, arguments);
    }

    return findById;
  }(),
  findOne: function () {
    var _findOne = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(query) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", RoleModel.findOne({
                name: query.name
              }).exec());

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function findOne(_x2) {
      return _findOne.apply(this, arguments);
    }

    return findOne;
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
                  $text: {
                    $search: "\"".concat(query.search, "\"")
                  }
                });
              }

              if (query.permissions) {
                filters.push({
                  permissions: {
                    $all: query.permissions
                  }
                });
              }

              _context4.next = 5;
              return (0, _core.execCursorPaging)(RoleModel, filters, query.sortBy, Number(query.first), [], query.before, query.after);

            case 5:
              return _context4.abrupt("return", _context4.sent);

            case 6:
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
  count: function () {
    var _count = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(_query) {
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

    function count(_x4) {
      return _count.apply(this, arguments);
    }

    return count;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(payload) {
      var newRole;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              newRole = new RoleModel(payload);
              _context6.next = 3;
              return newRole.save();

            case 3:
              return _context6.abrupt("return", newRole.id);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function create(_x5) {
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
              return RoleModel.findByIdAndUpdate(payload.id, {
                $set: payload
              }).exec();

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function update(_x6) {
      return _update.apply(this, arguments);
    }

    return update;
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

    function del(_x7) {
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
  }(),
  findByIds: function () {
    var _findByIds = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee10(ids) {
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", RoleModel.find({
                _id: {
                  $in: ids
                }
              }).exec());

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function findByIds(_x8) {
      return _findByIds.apply(this, arguments);
    }

    return findByIds;
  }(),
  findDefaultRoles: function () {
    var _findDefaultRoles = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee11() {
      return _regenerator.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", RoleModel.find({
                isDefault: true
              }));

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    function findDefaultRoles() {
      return _findDefaultRoles.apply(this, arguments);
    }

    return findDefaultRoles;
  }()
};
exports.roleRepository = roleRepository;
//# sourceMappingURL=roles.repository.js.map