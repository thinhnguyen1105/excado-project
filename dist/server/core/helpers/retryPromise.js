"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retryPromise = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _ = require("./..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var retryPromise =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(promise) {
    var times,
        timeout,
        count,
        _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            times = _args.length > 1 && _args[1] !== undefined ? _args[1] : 3;
            timeout = _args.length > 2 && _args[2] !== undefined ? _args[2] : 30000;
            count = 1;

            if (!(times < 0)) {
              _context.next = 5;
              break;
            }

            throw Error('invalid times to retry promise');

          case 5:
            if (!(timeout < 0)) {
              _context.next = 7;
              break;
            }

            throw Error('invalid timeout to retry promise');

          case 7:
            if (!(count <= times)) {
              _context.next = 23;
              break;
            }

            _context.prev = 8;
            _context.next = 11;
            return (0, _.promiseTimeout)(promise, timeout);

          case 11:
            return _context.abrupt("return", _context.sent);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](8);

            if (!(count < times)) {
              _context.next = 20;
              break;
            }

            count++;
            _context.next = 21;
            break;

          case 20:
            throw _context.t0;

          case 21:
            _context.next = 7;
            break;

          case 23:
            return _context.abrupt("return", undefined);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 14]]);
  }));

  return function retryPromise(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.retryPromise = retryPromise;
//# sourceMappingURL=retryPromise.js.map