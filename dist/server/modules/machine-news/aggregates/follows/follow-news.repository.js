"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.followNewsRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _core = require("../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FollowNewsSchema = new _mongoose.default.Schema((0, _core.addAuditableSchema)({
  user: {
    type: String,
    ref: 'User'
  },
  news: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'News'
  }
}));

var FollowNewsModel = _mongoose.default.model('FollowNews', FollowNewsSchema);

var followNewsRepository = {
  findFollowsByUser: function () {
    var _findFollowsByUser = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(userId) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return FollowNewsModel.find({
                user: userId
              }).populate({
                path: 'news',
                model: 'News',
                populate: [{
                  path: 'categoryId',
                  model: 'Category'
                }, {
                  path: 'brand',
                  model: 'Brand'
                }, {
                  path: 'model',
                  model: 'Model'
                }, {
                  path: 'location',
                  model: 'Province'
                }, {
                  path: 'owner',
                  model: 'User',
                  select: '_id fullName email phoneNo'
                }, {
                  path: 'shop',
                  model: 'Shop',
                  select: '_id name domain'
                }]
              }).exec();

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findFollowsByUser(_x) {
      return _findFollowsByUser.apply(this, arguments);
    }

    return findFollowsByUser;
  }(),
  findOne: function () {
    var _findOne = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(query) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return FollowNewsModel.findOne({
                user: query.user,
                news: query.news
              }).exec();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findOne(_x2) {
      return _findOne.apply(this, arguments);
    }

    return findOne;
  }(),
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(payload) {
      var newFollow;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              newFollow = new FollowNewsModel(payload);
              _context3.next = 3;
              return newFollow.save();

            case 3:
              return _context3.abrupt("return", newFollow.id);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function create(_x3) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  del: function () {
    var _del = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(payload) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return FollowNewsModel.deleteOne({
                user: payload.user,
                news: payload.news
              }).exec();

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function del(_x4) {
      return _del.apply(this, arguments);
    }

    return del;
  }()
};
exports.followNewsRepository = followNewsRepository;
//# sourceMappingURL=follow-news.repository.js.map