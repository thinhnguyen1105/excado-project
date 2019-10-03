"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFollowNews = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _followNews = require("../../follows/follow-news.repository");

var _followUsers = require("../../follows/follow-users.repository");

var _followShops = require("../../follows/follow-shops.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkFollowNews =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var checkFollowPromises, _ref2, _ref3, followNews, followUser, followShop, JSONResult;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(context.params.authUser && context.params.authUser.id)) {
              _context.next = 12;
              break;
            }

            checkFollowPromises = [_followNews.followNewsRepository.findOne({
              user: context.params.authUser.id,
              news: context.result._id
            }), _followUsers.followUsersRepository.findOne({
              user: context.params.authUser.id,
              followee: context.result.owner._id
            })];

            if (context.result.shop && context.result.shop._id) {
              checkFollowPromises.push(_followShops.followShopRepository.findOne({
                user: context.params.authUser.id,
                shop: context.result.shop._id
              }));
            }

            _context.next = 5;
            return Promise.all(checkFollowPromises);

          case 5:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 3);
            followNews = _ref3[0];
            followUser = _ref3[1];
            followShop = _ref3[2];
            JSONResult = JSON.parse(JSON.stringify(context.result));
            context.result = _objectSpread({}, JSONResult, {
              owner: _objectSpread({}, JSONResult.owner, {
                isFollowing: Boolean(followUser)
              }),
              shop: JSONResult.shop && context.result.shop._id ? _objectSpread({}, JSONResult.shop, {
                isFollowing: Boolean(followShop)
              }) : undefined,
              isFollowing: Boolean(followNews)
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkFollowNews(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkFollowNews = checkFollowNews;
//# sourceMappingURL=checkFollowNews.hook.js.map