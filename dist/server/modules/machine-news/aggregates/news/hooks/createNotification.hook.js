"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNotification = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _news = require("../news.repository");

var _notifications = _interopRequireDefault(require("../../notifications/notifications.service"));

var _notifications2 = require("../../notifications/notifications.repository");

var _followShops = require("../../follows/follow-shops.repository");

var _followUsers = require("../../follows/follow-users.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createNotification =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var news, createNotiPromises, followShops, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, follow, followUsers, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _follow;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _news.newsRepository.findById(context.result.id);

          case 2:
            news = _context.sent;
            createNotiPromises = [_notifications.default.create({
              owner: news.owner._id,
              news: news._id,
              state: 'UNREAD',
              type: 'CREATE_NEWS'
            }, _objectSpread({}, context.result, {
              repository: _notifications2.notificationsRepository
            }))];

            if (!(news.shop && news.shop._id)) {
              _context.next = 29;
              break;
            }

            _context.next = 7;
            return _followShops.followShopRepository.findByShop(news.shop._id);

          case 7:
            followShops = _context.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 11;

            for (_iterator = followShops[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              follow = _step.value;
              createNotiPromises.push(_notifications.default.create({
                owner: follow.user,
                news: news._id,
                state: 'UNREAD',
                type: 'FOLLOW_SHOP'
              }, _objectSpread({}, context.result, {
                repository: _notifications2.notificationsRepository
              })));
            }

            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](11);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 19:
            _context.prev = 19;
            _context.prev = 20;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 22:
            _context.prev = 22;

            if (!_didIteratorError) {
              _context.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return _context.finish(22);

          case 26:
            return _context.finish(19);

          case 27:
            _context.next = 52;
            break;

          case 29:
            if (!(news.owner && news.owner._id)) {
              _context.next = 52;
              break;
            }

            _context.next = 32;
            return _followUsers.followUsersRepository.findByFollowee(news.owner._id);

          case 32:
            followUsers = _context.sent;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 36;

            for (_iterator2 = followUsers[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _follow = _step2.value;
              createNotiPromises.push(_notifications.default.create({
                owner: _follow.user,
                news: news._id,
                state: 'UNREAD',
                type: 'FOLLOW_USER'
              }, _objectSpread({}, context.result, {
                repository: _notifications2.notificationsRepository
              })));
            }

            _context.next = 44;
            break;

          case 40:
            _context.prev = 40;
            _context.t1 = _context["catch"](36);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 44:
            _context.prev = 44;
            _context.prev = 45;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 47:
            _context.prev = 47;

            if (!_didIteratorError2) {
              _context.next = 50;
              break;
            }

            throw _iteratorError2;

          case 50:
            return _context.finish(47);

          case 51:
            return _context.finish(44);

          case 52:
            _context.next = 54;
            return Promise.all(createNotiPromises);

          case 54:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 15, 19, 27], [20,, 22, 26], [36, 40, 44, 52], [45,, 47, 51]]);
  }));

  return function createNotification(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createNotification = createNotification;
//# sourceMappingURL=createNotification.hook.js.map