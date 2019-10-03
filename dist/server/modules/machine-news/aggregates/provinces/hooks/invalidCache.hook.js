"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidProvinceCache = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var invalidProvinceCache =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_context) {
    var key;
    return _regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            key = '/api/provinces/find';

            _core.apiCache.del(key, function (error) {
              _core.logger.error(error);
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));

  return function invalidProvinceCache(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.invalidProvinceCache = invalidProvinceCache;
//# sourceMappingURL=invalidCache.hook.js.map