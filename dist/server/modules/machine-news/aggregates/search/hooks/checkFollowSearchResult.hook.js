"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFollowSearchResult = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _followNews = require("../../follows/follow-news.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkFollowSearchResult =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var checkFollowPromises, followResult, JSONResult, data, i;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(context.params.authUser && context.params.authUser.id)) {
              _context.next = 10;
              break;
            }

            checkFollowPromises = [];
            context.result.data.filter(function (ite) {
              return ite;
            }).forEach(function (item) {
              checkFollowPromises.push(_followNews.followNewsRepository.findOne({
                user: context.params.authUser.id,
                news: item._id
              }));
            });
            _context.next = 5;
            return Promise.all(checkFollowPromises);

          case 5:
            followResult = _context.sent;
            JSONResult = JSON.parse(JSON.stringify(context.result));
            data = [];

            for (i = 0; i < followResult.length; i += 1) {
              data.push(_objectSpread({}, JSONResult.data[i], {
                followBy: [],
                isFollowing: Boolean(followResult[i])
              }));
            }

            context.result = _objectSpread({}, JSONResult, {
              data: data
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkFollowSearchResult(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkFollowSearchResult = checkFollowSearchResult;
//# sourceMappingURL=checkFollowSearchResult.hook.js.map