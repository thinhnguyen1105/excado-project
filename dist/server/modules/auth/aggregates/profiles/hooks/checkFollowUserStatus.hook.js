"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFollowUserStatus = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _followUsers = require("../../../../machine-news/aggregates/follows/follow-users.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkFollowUserStatus =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var JSONResult, followUser;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(context.params.authUser && context.params.authUser.id)) {
              _context.next = 6;
              break;
            }

            JSONResult = JSON.parse(JSON.stringify(context.result));
            _context.next = 4;
            return _followUsers.followUsersRepository.findOne({
              user: context.params.authUser.id,
              followee: JSONResult._id
            });

          case 4:
            followUser = _context.sent;
            context.result = _objectSpread({}, JSONResult, {
              isFollowing: Boolean(followUser)
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkFollowUserStatus(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkFollowUserStatus = checkFollowUserStatus;
//# sourceMappingURL=checkFollowUserStatus.hook.js.map