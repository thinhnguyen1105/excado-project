"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFollowCount = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _config = require("../../../../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var updateFollowCount =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = context.data.operation;
            _context.next = _context.t0 === 'followNews' ? 3 : _context.t0 === 'unfollowNews' ? 5 : _context.t0 === 'followUser' ? 7 : _context.t0 === 'unfollowUser' ? 9 : _context.t0 === 'followShop' ? 11 : _context.t0 === 'unfollowShop' ? 13 : 15;
            break;

          case 3:
            context.app.service("".concat(_config.config.web.api.prefix, "/news")).updateFollowCount(context.data.payload.newsId, 'follow');
            return _context.abrupt("break", 15);

          case 5:
            context.app.service("".concat(_config.config.web.api.prefix, "/news")).updateFollowCount(context.data.payload.newsId, 'unfollow');
            return _context.abrupt("break", 15);

          case 7:
            context.app.service("".concat(_config.config.web.api.prefix, "/users")).updateFollowCount(context.data.payload.userId, 'follow');
            return _context.abrupt("break", 15);

          case 9:
            context.app.service("".concat(_config.config.web.api.prefix, "/users")).updateFollowCount(context.data.payload.userId, 'unfollow');
            return _context.abrupt("break", 15);

          case 11:
            context.app.service("".concat(_config.config.web.api.prefix, "/shop")).updateFollowCount(context.data.payload.shopId, 'follow');
            return _context.abrupt("break", 15);

          case 13:
            context.app.service("".concat(_config.config.web.api.prefix, "/shop")).updateFollowCount(context.data.payload.shopId, 'unfollow');
            return _context.abrupt("break", 15);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateFollowCount(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateFollowCount = updateFollowCount;
//# sourceMappingURL=updateFollowCount.hook.js.map