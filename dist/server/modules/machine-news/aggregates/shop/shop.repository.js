"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shopRepository = exports.ShopModel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _core = require("../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ShopSchema = new _mongoose.default.Schema((0, _core.addAuditableSchema)((0, _core.addDeletableSchema)({
  owner: {
    type: String,
    ref: 'User'
  },
  domain: String,
  name: String,
  address: String,
  geocode: {
    lng: Number,
    lat: Number
  },
  description: String,
  phone: String,
  email: String,
  introImages: [String],
  logoImage: String,
  followBy: {
    type: [{
      type: String,
      ref: 'User'
    }],
    default: []
  },
  isActive: {
    type: Boolean,
    default: true
  },
  expiryDate: Number,
  counterFollow: {
    type: Number,
    default: 0
  }
})));

var ShopModel = _mongoose.default.model('Shop', ShopSchema);

exports.ShopModel = ShopModel;
var shopRepository = {
  getAll: function () {
    var _getAll = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ShopModel.find().populate('owner').exec();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getAll() {
      return _getAll.apply(this, arguments);
    }

    return getAll;
  }(),
  count: function () {
    var _count = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_query) {
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

    function count(_x) {
      return _count.apply(this, arguments);
    }

    return count;
  }(),
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(query) {
      var filters;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              filters = [];

              if (query.search) {
                filters.push({
                  $text: {
                    $search: "\"".concat(query.search, "\"")
                  }
                });
              }

              if (query.isActive !== undefined) {
                filters.push({
                  isActive: query.isActive
                });
              }

              _context3.next = 5;
              return (0, _core.execCursorPaging)(ShopModel, filters, query.sortBy, Number(query.first), ['owner'], query.before, query.after);

            case 5:
              return _context3.abrupt("return", _context3.sent);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function find(_x2) {
      return _find.apply(this, arguments);
    }

    return find;
  }(),
  findOne: function () {
    var _findOne = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(query) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!query.domain) {
                _context4.next = 4;
                break;
              }

              _context4.next = 3;
              return ShopModel.findOne({
                domain: query.domain
              }).exec();

            case 3:
              return _context4.abrupt("return", _context4.sent);

            case 4:
              if (!query.owner) {
                _context4.next = 8;
                break;
              }

              _context4.next = 7;
              return ShopModel.findOne({
                owner: query.owner
              }).exec();

            case 7:
              return _context4.abrupt("return", _context4.sent);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function findOne(_x3) {
      return _findOne.apply(this, arguments);
    }

    return findOne;
  }(),
  findById: function () {
    var _findById = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return ShopModel.findById(id).populate('owner').exec();

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function findById(_x4) {
      return _findById.apply(this, arguments);
    }

    return findById;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(payload) {
      var newShop;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              newShop = new ShopModel(_objectSpread({}, payload, {
                _id: payload.id
              }));
              _context6.next = 3;
              return newShop.save();

            case 3:
              return _context6.abrupt("return", newShop.id);

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
              return ShopModel.findByIdAndUpdate(payload.id, {
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
  follow: function () {
    var _follow = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8(payload) {
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return ShopModel.findOneAndUpdate({
                _id: payload.id
              }, {
                $push: {
                  followBy: payload.followerId
                }
              }, {
                new: true
              }).exec();

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function follow(_x7) {
      return _follow.apply(this, arguments);
    }

    return follow;
  }(),
  unfollow: function () {
    var _unfollow = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee9(payload) {
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return ShopModel.findOneAndUpdate({
                _id: payload.id
              }, {
                $pull: {
                  followBy: payload.followerId
                }
              }, {
                new: true
              }).exec();

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function unfollow(_x8) {
      return _unfollow.apply(this, arguments);
    }

    return unfollow;
  }(),
  del: function () {
    var _del = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee10(_id) {
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              throw new _core.NotImplementedError();

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function del(_x9) {
      return _del.apply(this, arguments);
    }

    return del;
  }(),
  ensureIndexes: function () {
    var _ensureIndexes = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee11() {
      return _regenerator.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return ShopModel.ensureIndexes({
                name: 'text'
              });

            case 2:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    function ensureIndexes() {
      return _ensureIndexes.apply(this, arguments);
    }

    return ensureIndexes;
  }(),
  increaseFollowCount: function () {
    var _increaseFollowCount = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee12(id) {
      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return ShopModel.findByIdAndUpdate(id, {
                $inc: {
                  counterFollow: 1
                }
              }).exec();

            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    function increaseFollowCount(_x10) {
      return _increaseFollowCount.apply(this, arguments);
    }

    return increaseFollowCount;
  }(),
  decreaseFollowCount: function () {
    var _decreaseFollowCount = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee13(id) {
      return _regenerator.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return ShopModel.findByIdAndUpdate(id, {
                $inc: {
                  counterFollow: -1
                }
              }).exec();

            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    function decreaseFollowCount(_x11) {
      return _decreaseFollowCount.apply(this, arguments);
    }

    return decreaseFollowCount;
  }()
};
exports.shopRepository = shopRepository;
//# sourceMappingURL=shop.repository.js.map