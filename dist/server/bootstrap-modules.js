"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrapModules = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = require("fs-extra");

var _core = require("./core");

var _config = require("./config");

var _website = require("./modules/website");

var _productImage = require("./modules/website/aggregates/image/multer/productImage.middleware");

var _uploads = require("./modules/website/aggregates/uploads/uploads.router");

var _download = require("./modules/website/aggregates/download/download.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bootstrapModules =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var server, rootDir, moduleNames, excludedModules, excludedAggregates, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, moduleName, moduleDir, aggregateNames, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, aggregateName, serviceUrl, service, hook;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            server = _ref.server;

            _core.logger.info('[Server] Loading modules...');

            rootDir = "".concat(_core.rootLocation, "/server/modules");
            _context.next = 5;
            return (0, _fsExtra.readdir)(rootDir);

          case 5:
            moduleNames = _context.sent;
            excludedModules = ['.DS_Store'];
            excludedAggregates = ['helpers', '.DS_Store'];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 11;
            _iterator = moduleNames[Symbol.iterator]();

          case 13:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 56;
              break;
            }

            moduleName = _step.value;

            if (!(excludedModules.indexOf(moduleName) !== -1)) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("continue", 53);

          case 17:
            moduleDir = "".concat(rootDir, "/").concat(moduleName);

            _core.logger.info("[Server] Loading module '".concat(moduleName, "'...")); // add aggregates graphql


            _core.logger.info("[Server] [".concat(moduleName, "] Setup aggregates..."));

            _context.next = 22;
            return (0, _fsExtra.readdir)("".concat(moduleDir, "/aggregates"));

          case 22:
            aggregateNames = _context.sent;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 26;
            _iterator2 = aggregateNames[Symbol.iterator]();

          case 28:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 39;
              break;
            }

            aggregateName = _step2.value;

            if (!(excludedAggregates.indexOf(aggregateName) !== -1 || aggregateName.indexOf('index') === 0)) {
              _context.next = 32;
              break;
            }

            return _context.abrupt("continue", 36);

          case 32:
            _core.logger.info("[Server] [".concat(moduleName, "] Setup aggregate '").concat(aggregateName, "'..."));

            serviceUrl = "./modules/".concat(moduleName, "/aggregates/").concat(aggregateName, "/").concat(aggregateName, ".service");
            service = require(serviceUrl).default;

            if (service) {
              _core.logger.info("[Server] [".concat(moduleName, "][").concat(aggregateName, "] Register service api..."));

              if (service.setup) {
                service.setup(server, "/api/".concat(aggregateName));
              }

              server.use("/api/".concat(aggregateName), service);

              try {
                hook = require("./modules/".concat(moduleName, "/aggregates/").concat(aggregateName, "/").concat(aggregateName, ".hook")).default;
                server.service("".concat(_config.config.web.api.prefix, "/").concat(aggregateName)).hooks(hook);
              } catch (error) {// ignore hook not found
              }
            }

          case 36:
            _iteratorNormalCompletion2 = true;
            _context.next = 28;
            break;

          case 39:
            _context.next = 45;
            break;

          case 41:
            _context.prev = 41;
            _context.t0 = _context["catch"](26);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t0;

          case 45:
            _context.prev = 45;
            _context.prev = 46;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 48:
            _context.prev = 48;

            if (!_didIteratorError2) {
              _context.next = 51;
              break;
            }

            throw _iteratorError2;

          case 51:
            return _context.finish(48);

          case 52:
            return _context.finish(45);

          case 53:
            _iteratorNormalCompletion = true;
            _context.next = 13;
            break;

          case 56:
            _context.next = 62;
            break;

          case 58:
            _context.prev = 58;
            _context.t1 = _context["catch"](11);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 62:
            _context.prev = 62;
            _context.prev = 63;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 65:
            _context.prev = 65;

            if (!_didIteratorError) {
              _context.next = 68;
              break;
            }

            throw _iteratorError;

          case 68:
            return _context.finish(65);

          case 69:
            return _context.finish(62);

          case 70:
            // Upload images
            server.use('/api/image', _productImage.productImageMiddleware.single('image'));
            server.use('/api/upload-image', _website.imageRouter);
            server.use('/api/uploads', _uploads.uploadsRouter);
            server.use('/api/downloads', _download.downloadsRouter);

            _core.logger.info('[Server] Done loading modules...');

          case 75:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 58, 62, 70], [26, 41, 45, 53], [46,, 48, 52], [63,, 65, 69]]);
  }));

  return function bootstrapModules(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.bootstrapModules = bootstrapModules;
//# sourceMappingURL=bootstrap-modules.js.map