"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrapModules = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = require("fs-extra");

var _core = require("../server/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bootstrapModules =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var routes, rootDir, moduleNames, excludedModules, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, moduleName, setupRoutes;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            routes = _ref.routes;

            _core.logger.info('[Client] Loading client modules...');

            rootDir = "".concat(_core.rootLocation, "/client/modules");
            _context.next = 5;
            return (0, _fsExtra.readdir)(rootDir);

          case 5:
            moduleNames = _context.sent;
            excludedModules = ['.DS_Store'];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;
            _iterator = moduleNames[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 24;
              break;
            }

            moduleName = _step.value;

            if (!(excludedModules.indexOf(moduleName) !== -1)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("continue", 21);

          case 16:
            _core.logger.info("[Client] Loading module '".concat(moduleName, "'...")); // add aggregates graphql


            _core.logger.info("[Client] [".concat(moduleName, "] Setup routes..."));

            setupRoutes = void 0;

            try {
              setupRoutes = require("./modules/".concat(moduleName, "/routes")).setupRoutes;
            } catch (error) {// ignore service not found
            }

            if (setupRoutes) {
              setupRoutes({
                routes: routes
              });
            }

          case 21:
            _iteratorNormalCompletion = true;
            _context.next = 12;
            break;

          case 24:
            _context.next = 30;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](10);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 30:
            _context.prev = 30;
            _context.prev = 31;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 33:
            _context.prev = 33;

            if (!_didIteratorError) {
              _context.next = 36;
              break;
            }

            throw _iteratorError;

          case 36:
            return _context.finish(33);

          case 37:
            return _context.finish(30);

          case 38:
            _core.logger.info('[Client] Done loading modules...');

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 26, 30, 38], [31,, 33, 37]]);
  }));

  return function bootstrapModules(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.bootstrapModules = bootstrapModules;
//# sourceMappingURL=bootstrap-modules.js.map