"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrapClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _next2 = _interopRequireDefault(require("next"));

var _routes = _interopRequireDefault(require("./routes"));

var _bootstrapModules = require("../client/bootstrap-modules");

var _core = require("../server/core");

var _core2 = require("./core");

var _middleware = _interopRequireDefault(require("next-i18next/middleware"));

var _i18n = require("./i18n");

var _authenticate = require("./core/authenticate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bootstrapClient =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var server, dev, nextApp, handler;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            server = _ref.server;

            _core.logger.info("[Client] Bootstrapping...");

            (0, _bootstrapModules.bootstrapModules)({
              routes: _routes.default
            });
            dev = process.env.NODE_ENV !== 'production';
            nextApp = (0, _next2.default)({
              dev: dev,
              dir: dev ? './src/client' : './dist/client'
            });
            handler = _routes.default.getRequestHandler(nextApp, function (_ref3) {
              var req = _ref3.req,
                  res = _ref3.res,
                  route = _ref3.route,
                  query = _ref3.query;
              nextApp.render(req, res, route.page, query);
            });
            _context.next = 8;
            return nextApp.prepare();

          case 8:
            server.get('/_next/*', function (req, res) {
              return handler(req, res);
            });
            server.get('/static/*', function (req, res) {
              return handler(req, res);
            }); // login success => set cookie on server

            server.post('/auth/login', _core2.setCookie); // logout => remove cookie

            server.get('/auth/logout', _core2.clearCookie); // authenticate

            server.use(_authenticate.authenticate); // recent viewed product

            server.use(_core2.generateRecentViewedKey); // check sub domain of shop

            server.use(_core2.checkSubdomain);
            server.use((0, _middleware.default)(_i18n.i18n));
            server.use(handler);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function bootstrapClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.bootstrapClient = bootstrapClient;
//# sourceMappingURL=bootstrap-client.js.map