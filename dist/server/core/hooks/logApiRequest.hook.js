"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logApiRequest = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _ = require("./..");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var logApiRequest =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _.logger.info({
              timestamp: (0, _moment.default)().format('DD/MM/YYYY  HH:mm'),
              user: context.params.authUser ? context.params.authUser.id : '',
              service: context.path,
              method: context.method,
              id: context.id,
              data: context.data,
              query: context.params.query
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function logApiRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.logApiRequest = logApiRequest;
//# sourceMappingURL=logApiRequest.hook.js.map