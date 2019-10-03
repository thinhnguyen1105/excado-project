"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("./server/core");

var _feathers = _interopRequireDefault(require("@feathersjs/feathers"));

var _express = _interopRequireDefault(require("@feathersjs/express"));

var _bootstrapClient = require("./client/bootstrap-client");

var _bootstrapServer = require("./server/bootstrap-server");

var _config = require("./server/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator(
/*#__PURE__*/
_regenerator.default.mark(function _callee() {
  var server, port;
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          server = (0, _express.default)((0, _feathers.default)()); // 1. connect to mongo

          _context.next = 3;
          return _core.mongoDatabase.startDatabase(_config.config.database.connectionString);

        case 3:
          _context.next = 5;
          return (0, _bootstrapServer.bootstrapServer)({
            server: server
          });

        case 5:
          _context.next = 7;
          return (0, _bootstrapClient.bootstrapClient)({
            server: server
          });

        case 7:
          // 4. setup error handler
          server.use(_express.default.notFound()).use(_express.default.errorHandler({
            logger: _core.logger
          })); // 5. start server

          port = parseInt(process.env.PORT ? process.env.PORT : '', 10) || 3000;
          _context.next = 11;
          return server.listen(port);

        case 11:
          _core.logger.info("[Server] Server listens on port ".concat(port, " ..."));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
//# sourceMappingURL=index.js.map