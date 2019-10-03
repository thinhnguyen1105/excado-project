"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrapServer = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _express = _interopRequireDefault(require("@feathersjs/express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _compression = _interopRequireDefault(require("compression"));

var _helmet = _interopRequireDefault(require("helmet"));

var _core = require("./core");

var _bootstrapModules = require("./bootstrap-modules");

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _yamljs = _interopRequireDefault(require("yamljs"));

var _application = _interopRequireDefault(require("./application.hooks"));

var _config = require("./config");

var _fsExtra = require("fs-extra");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bootstrapServer =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(_ref) {
    var server, swaggerDocument, moduleNames, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, module, moduleSwaggerDocument;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            server = _ref.server;

            _core.logger.info("[Server] Bootstrapping...");

            server.configure(_express.default.rest()).use((0, _helmet.default)()).use((0, _compression.default)()).use(_express.default.json()).use(_express.default.urlencoded({
              extended: true
            })).use((0, _cookieParser.default)()).use((0, _cors.default)({
              // origin(origin, callback) {
              //   if (config.web.cors.whitelistUrls.indexOf(origin) !== -1 || !origin) {
              //     callback(null, true);
              //   } else {
              //     callback(new Error('Not allowed by CORS'));
              //   }
              // },
              origin: _config.config.web.cors.whitelistUrls,
              credentials: true
            })); // global hooks

            server.hooks(_application.default); // add authorization to feathers

            server.use(function (req, _res, next) {
              req.feathers.cookies = req.cookies;
              req.feathers.authorization = req.headers.authorization || req.cookies.token;
              next();
            }); // add swagger documents

            swaggerDocument = _yamljs.default.load("".concat(_core.rootLocation, "/server/swagger.yaml"));
            _context2.next = 8;
            return (0, _fsExtra.readdir)("".concat(_core.rootLocation, "/server/modules"));

          case 8:
            moduleNames = _context2.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 12;

            for (_iterator = moduleNames[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              module = _step.value;

              try {
                moduleSwaggerDocument = _yamljs.default.load("".concat(_core.rootLocation, "/server/modules/").concat(module, "/").concat(module, ".swagger.yaml"));
                swaggerDocument = (0, _lodash.merge)(swaggerDocument, moduleSwaggerDocument);
              } catch (error) {// ignore missing modules
              }
            }

            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](12);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 20:
            _context2.prev = 20;
            _context2.prev = 21;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 23:
            _context2.prev = 23;

            if (!_didIteratorError) {
              _context2.next = 26;
              break;
            }

            throw _iteratorError;

          case 26:
            return _context2.finish(23);

          case 27:
            return _context2.finish(20);

          case 28:
            server.use(_config.config.web.api.docsJson,
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee(_req, res) {
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        res.status(200).json(swaggerDocument);

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2, _x3) {
                return _ref3.apply(this, arguments);
              };
            }());
            server.use(_config.config.web.api.docsUrl, _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(swaggerDocument)); // bootstrap modules

            _context2.next = 32;
            return (0, _bootstrapModules.bootstrapModules)({
              server: server
            });

          case 32:
            server.use('/upload', _express.default.static(_path.default.join(__dirname, '../../upload'))); // init firebase-admin

            _core.logger.info("[Server] Initialize firebase.....");

            _firebaseAdmin.default.initializeApp({
              credential: _firebaseAdmin.default.credential.cert({
                projectId: _config.config.firebase.serviceAccount['project_id'],
                clientEmail: _config.config.firebase.serviceAccount['client_email'],
                privateKey: _config.config.firebase.serviceAccount['private_key']
              }),
              databaseURL: _config.config.firebase.databaseURL
            });

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[12, 16, 20, 28], [21,, 23, 27]]);
  }));

  return function bootstrapServer(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.bootstrapServer = bootstrapServer;
//# sourceMappingURL=bootstrap-server.js.map