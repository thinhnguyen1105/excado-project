"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _ = require("../..");

var _auth = require("../../../auth");

var _followNews2 = require("./follow-news.repository");

var _followUsers = require("./follow-users.repository");

var _followShops = require("./follow-shops.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var followsService = {
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(params) {
      var followNews;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 1. authorize
              // ensurePermission(params.authUser, PERMISSIONS.NEWS.VIEW);
              // 2. validate
              (0, _core.validateQuery)(params.query); // 3. do business logic
              // 4. persist to db

              if (!(params.query.type === 'user')) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return _auth.userRepository.findFollowByUser(params.query);

            case 4:
              return _context.abrupt("return", _context.sent);

            case 7:
              if (!(params.query.type === 'news')) {
                _context.next = 14;
                break;
              }

              _context.next = 10;
              return _followNews2.followNewsRepository.findFollowsByUser(params.query.id);

            case 10:
              followNews = _context.sent;
              return _context.abrupt("return", {
                data: followNews.map(function (item) {
                  return item.news;
                })
              });

            case 14:
              if (!(params.query.type === 'shop')) {
                _context.next = 20;
                break;
              }

              _context.next = 17;
              return _.newsRepository.findFollowByNews(params.query);

            case 17:
              return _context.abrupt("return", _context.sent);

            case 20:
              throw new _core.UserInputError('Missing query');

            case 21:
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
  patch: function () {
    var _patch = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(id, data, params) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              (0, _core.validateOperation)(data.operation, ['followUser', 'unfollowUser', 'followNews', 'unfollowNews', 'followShop', 'unfollowShop']);
              _context2.next = 3;
              return followsService[data.operation](id, data.payload, params);

            case 3:
              return _context2.abrupt("return", {});

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function patch(_x2, _x3, _x4) {
      return _patch.apply(this, arguments);
    }

    return patch;
  }(),
  followUser: function () {
    var _followUser = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(id, data, _params) {
      var followeeId, userId, existedFollowUser;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // 1. authorize
              // 2. validate
              followeeId = data.userId;
              userId = id;

              if (id) {
                _context3.next = 4;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 4:
              if (data.userId) {
                _context3.next = 6;
                break;
              }

              throw new _core.UserInputError('Invalid body');

            case 6:
              _context3.next = 8;
              return _followUsers.followUsersRepository.findOne({
                user: userId,
                followee: followeeId
              });

            case 8:
              existedFollowUser = _context3.sent;

              if (!existedFollowUser) {
                _context3.next = 11;
                break;
              }

              throw new _core.UserInputError('User is already followed');

            case 11:
              _context3.next = 13;
              return _followUsers.followUsersRepository.create({
                followee: followeeId,
                user: userId,
                createdAt: new Date().getTime()
              });

            case 13:
              return _context3.abrupt("return", {});

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function followUser(_x5, _x6, _x7) {
      return _followUser.apply(this, arguments);
    }

    return followUser;
  }(),
  unfollowUser: function () {
    var _unfollowUser = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(id, data, _params) {
      var followeeId, userId, existedFollowUser;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // 1. authorize
              // 2. validate
              followeeId = data.userId;
              userId = id;

              if (id) {
                _context4.next = 4;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 4:
              if (data.userId) {
                _context4.next = 6;
                break;
              }

              throw new _core.UserInputError('Invalid body');

            case 6:
              _context4.next = 8;
              return _followUsers.followUsersRepository.findOne({
                user: userId,
                followee: followeeId
              });

            case 8:
              existedFollowUser = _context4.sent;

              if (existedFollowUser) {
                _context4.next = 11;
                break;
              }

              throw new _core.UserInputError('User is not followed');

            case 11:
              _context4.next = 13;
              return _followUsers.followUsersRepository.del({
                followee: followeeId,
                user: userId
              });

            case 13:
              return _context4.abrupt("return", {});

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function unfollowUser(_x8, _x9, _x10) {
      return _unfollowUser.apply(this, arguments);
    }

    return unfollowUser;
  }(),
  followNews: function () {
    var _followNews = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, data, _params) {
      var newsId, userId, existedFollowNews;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // 1. authorize
              // 2. validate
              newsId = data.newsId;
              userId = id;

              if (id) {
                _context5.next = 4;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 4:
              if (data.newsId) {
                _context5.next = 6;
                break;
              }

              throw new _core.UserInputError('Invalid body');

            case 6:
              _context5.next = 8;
              return _followNews2.followNewsRepository.findOne({
                user: userId,
                news: newsId
              });

            case 8:
              existedFollowNews = _context5.sent;

              if (!existedFollowNews) {
                _context5.next = 11;
                break;
              }

              throw new _core.UserInputError('News is already followed');

            case 11:
              _context5.next = 13;
              return _followNews2.followNewsRepository.create({
                news: newsId,
                user: userId,
                createdAt: new Date().getTime()
              });

            case 13:
              return _context5.abrupt("return", {});

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function followNews(_x11, _x12, _x13) {
      return _followNews.apply(this, arguments);
    }

    return followNews;
  }(),
  unfollowNews: function () {
    var _unfollowNews = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(id, data, _params) {
      var newsId, userId, existedFollowNews;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // 1. authorize
              // 2. validate
              newsId = data.newsId;
              userId = id;

              if (id) {
                _context6.next = 4;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 4:
              if (data.newsId) {
                _context6.next = 6;
                break;
              }

              throw new _core.UserInputError('Invalid body');

            case 6:
              _context6.next = 8;
              return _followNews2.followNewsRepository.findOne({
                user: userId,
                news: newsId
              });

            case 8:
              existedFollowNews = _context6.sent;

              if (existedFollowNews) {
                _context6.next = 11;
                break;
              }

              throw new _core.UserInputError('News is not followed');

            case 11:
              _context6.next = 13;
              return _followNews2.followNewsRepository.del({
                user: userId,
                news: newsId
              });

            case 13:
              return _context6.abrupt("return", {});

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function unfollowNews(_x14, _x15, _x16) {
      return _unfollowNews.apply(this, arguments);
    }

    return unfollowNews;
  }(),
  followShop: function () {
    var _followShop = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(id, data, _params) {
      var shopId, userId, existedFollowShop;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              // 1. authorize
              // 2. validate
              shopId = data.shopId;
              userId = id;

              if (id) {
                _context7.next = 4;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 4:
              if (data.shopId) {
                _context7.next = 6;
                break;
              }

              throw new _core.UserInputError('Invalid body');

            case 6:
              _context7.next = 8;
              return _followShops.followShopRepository.findOne({
                user: userId,
                shop: shopId
              });

            case 8:
              existedFollowShop = _context7.sent;

              if (!existedFollowShop) {
                _context7.next = 11;
                break;
              }

              throw new _core.UserInputError('Shop is already followed');

            case 11:
              _context7.next = 13;
              return _followShops.followShopRepository.create({
                shop: shopId,
                user: userId,
                createdAt: new Date().getTime()
              });

            case 13:
              return _context7.abrupt("return", {});

            case 14:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function followShop(_x17, _x18, _x19) {
      return _followShop.apply(this, arguments);
    }

    return followShop;
  }(),
  unfollowShop: function () {
    var _unfollowShop = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8(id, data, _params) {
      var shopId, userId, existedFollowShop;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              // 1. authorize
              // 2. validate
              shopId = data.shopId;
              userId = id;

              if (id) {
                _context8.next = 4;
                break;
              }

              throw new _core.UserInputError('Invalid query params');

            case 4:
              if (data.shopId) {
                _context8.next = 6;
                break;
              }

              throw new _core.UserInputError('Invalid body');

            case 6:
              _context8.next = 8;
              return _followShops.followShopRepository.findOne({
                user: userId,
                shop: shopId
              });

            case 8:
              existedFollowShop = _context8.sent;

              if (existedFollowShop) {
                _context8.next = 11;
                break;
              }

              throw new _core.UserInputError('Shop is not followed');

            case 11:
              _context8.next = 13;
              return _followShops.followShopRepository.del({
                shop: shopId,
                user: userId
              });

            case 13:
              return _context8.abrupt("return", {});

            case 14:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function unfollowShop(_x20, _x21, _x22) {
      return _unfollowShop.apply(this, arguments);
    }

    return unfollowShop;
  }()
};
var _default = followsService;
exports.default = _default;
//# sourceMappingURL=follows.service.js.map