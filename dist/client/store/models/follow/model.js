"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("@rematch/core");

var _services = require("../../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var followModel = (0, _core.createModel)({
  state: {
    data: [],
    currentTab: 'SELL',
    currentType: 'news'
  },
  reducers: {
    getFollowDataSuccess: function getFollowDataSuccess(state, payload) {
      return _objectSpread({}, state, {
        data: payload.data
      });
    }
  },
  effects: {
    getFollowData: function () {
      var _getFollowData = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(payload) {
        var serviceProxies, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                serviceProxies = (0, _services.getServiceProxy)();
                _context.next = 4;
                return serviceProxies.findFollow(payload.id, payload.type, payload.newsType, payload.first, payload.sortBy, payload.before, payload.after);

              case 4:
                data = _context.sent;
                this.getFollowDataSuccess(data);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function getFollowData(_x) {
        return _getFollowData.apply(this, arguments);
      }

      return getFollowData;
    }(),
    followNews: function () {
      var _followNews = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(payload) {
        var serviceProxies;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                serviceProxies = (0, _services.getServiceProxy)();
                _context2.next = 4;
                return serviceProxies.follow(payload.userId, {
                  operation: 'followNews',
                  payload: {
                    newsId: payload.newsId
                  }
                });

              case 4:
                _message2.default.success('Theo dõi tin thành công');

                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                _message2.default.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function followNews(_x2) {
        return _followNews.apply(this, arguments);
      }

      return followNews;
    }(),
    unfollowNews: function () {
      var _unfollowNews = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(payload) {
        var serviceProxies;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                serviceProxies = (0, _services.getServiceProxy)();
                _context3.next = 4;
                return serviceProxies.follow(payload.userId, {
                  operation: 'unfollowNews',
                  payload: {
                    newsId: payload.newsId
                  }
                });

              case 4:
                _message2.default.success('Bỏ theo dõi tin thành công');

                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

                _message2.default.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function unfollowNews(_x3) {
        return _unfollowNews.apply(this, arguments);
      }

      return unfollowNews;
    }(),
    followUser: function () {
      var _followUser = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(payload) {
        var serviceProxies;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                serviceProxies = (0, _services.getServiceProxy)();
                _context4.next = 4;
                return serviceProxies.follow(payload.authId, {
                  operation: 'followUser',
                  payload: {
                    userId: payload.userId
                  }
                });

              case 4:
                _message2.default.success('Theo dõi người bán thành công');

                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);

                _message2.default.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function followUser(_x4) {
        return _followUser.apply(this, arguments);
      }

      return followUser;
    }(),
    unfollowUser: function () {
      var _unfollowUser = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(payload) {
        var serviceProxies;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                serviceProxies = (0, _services.getServiceProxy)();
                _context5.next = 4;
                return serviceProxies.follow(payload.authId, {
                  operation: 'unfollowUser',
                  payload: {
                    userId: payload.userId
                  }
                });

              case 4:
                _message2.default.success(' Bỏ theo dõi người bán thành công');

                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);

                _message2.default.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function unfollowUser(_x5) {
        return _unfollowUser.apply(this, arguments);
      }

      return unfollowUser;
    }(),
    followShop: function () {
      var _followShop = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(payload) {
        var serviceProxies;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                serviceProxies = (0, _services.getServiceProxy)();
                _context6.next = 4;
                return serviceProxies.follow(payload.authId, {
                  operation: 'followShop',
                  payload: {
                    shopId: payload.shopId
                  }
                });

              case 4:
                _message2.default.success('Theo dõi cửa hàng thành công');

                _context6.next = 10;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);

                _message2.default.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }));

      function followShop(_x6) {
        return _followShop.apply(this, arguments);
      }

      return followShop;
    }(),
    unfollowShop: function () {
      var _unfollowShop = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(payload) {
        var serviceProxies;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                serviceProxies = (0, _services.getServiceProxy)();
                _context7.next = 4;
                return serviceProxies.follow(payload.authId, {
                  operation: 'unfollowShop',
                  payload: {
                    shopId: payload.shopId
                  }
                });

              case 4:
                _message2.default.success('Bỏ theo dõi cửa hàng thành công');

                _context7.next = 10;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);

                _message2.default.error('Đã có lỗi xảy ra');

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }));

      function unfollowShop(_x7) {
        return _unfollowShop.apply(this, arguments);
      }

      return unfollowShop;
    }()
  }
});
var _default = followModel;
exports.default = _default;
//# sourceMappingURL=model.js.map