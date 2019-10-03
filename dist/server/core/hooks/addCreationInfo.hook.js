"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCreationInfo = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _2 = require("./..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addCreationInfo =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context.params.creationInfo = {
              createdBy: context.params.authUser ? context.params.authUser.id : '',
              createdAt: (0, _2.getCurrentTimestampInMilliseconds)()
            };

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addCreationInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addCreationInfo = addCreationInfo;
//# sourceMappingURL=addCreationInfo.hook.js.map