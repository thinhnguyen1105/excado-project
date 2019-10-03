"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFromCache = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _util = require("util");

var _core = require("../../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var readFromCache =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res, next) {
    var key, getCacheValue, value;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            key = req.url;
            getCacheValue = (0, _util.promisify)(_core.apiCache.get);
            _context.next = 4;
            return getCacheValue(key);

          case 4:
            value = _context.sent;

            if (value) {
              res.status(200).json(value);
            } else {
              next();
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function readFromCache(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.readFromCache = readFromCache;
//# sourceMappingURL=readFromCache.middleware.js.map