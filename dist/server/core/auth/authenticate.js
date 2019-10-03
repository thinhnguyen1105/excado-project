"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _lodash = require("lodash");

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authenticate =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var idToken, decodedIdToken, authUser;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            idToken = (0, _lodash.replace)(context.params.authorization, 'Bearer ', '');
            _context.next = 4;
            return _firebaseAdmin.default.auth().verifyIdToken(idToken);

          case 4:
            decodedIdToken = _context.sent;
            authUser = {
              id: decodedIdToken.uid,
              roles: decodedIdToken.roles,
              permissions: decodedIdToken.permissions
            };
            context.params.authUser = authUser;
            _context.next = 11;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function authenticate(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.authenticate = authenticate;
//# sourceMappingURL=authenticate.js.map