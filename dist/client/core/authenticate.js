"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authenticate =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res, next) {
    var bearerToken, token, tokenInfo;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req.url.indexOf('/refresh-token') === -1)) {
              _context.next = 20;
              break;
            }

            bearerToken = req.cookies.token || req.headers.authorization;

            if (!bearerToken) {
              _context.next = 17;
              break;
            }

            _context.prev = 3;
            token = bearerToken.replace('Bearer ', '');
            _context.next = 7;
            return _firebaseAdmin.default.auth().verifyIdToken(token);

          case 7:
            tokenInfo = _context.sent;
            req.authUser = {
              id: tokenInfo.uid,
              fullName: tokenInfo.name,
              avatarUrl: tokenInfo.avatarUrl,
              province: tokenInfo.province,
              roles: tokenInfo.roles,
              permissions: tokenInfo.permissions
            };
            next();
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            res.redirect('/refresh-token');

          case 15:
            _context.next = 18;
            break;

          case 17:
            next();

          case 18:
            _context.next = 21;
            break;

          case 20:
            next();

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 12]]);
  }));

  return function authenticate(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.authenticate = authenticate;
//# sourceMappingURL=authenticate.js.map