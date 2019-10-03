"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFromCache = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _util = require("util");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var readFromCache =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var key, getCacheValue, value;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            key = "/".concat(context.path, "/").concat(context.method).concat(Object.keys(context.params.query ? context.params.query : {}).map(function (item) {
              return context.params.query[item];
            }).join('&'));
            getCacheValue = (0, _util.promisify)(_.apiCache.get);
            _context.next = 4;
            return getCacheValue(key);

          case 4:
            value = _context.sent;

            if (value) {
              context.readFromCache = true;
              context.result = value;
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function readFromCache(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.readFromCache = readFromCache;
//# sourceMappingURL=readFromCache.hook.js.map