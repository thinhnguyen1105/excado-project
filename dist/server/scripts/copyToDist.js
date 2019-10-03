"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = require("fs-extra");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// tslint:disable:no-console
var copyToDist =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var copyPromises, moduleNames, excludedModules, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, module;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            copyPromises = [(0, _fsExtra.copy)('src/client/.next', 'dist/client/.next/'), (0, _fsExtra.copy)('src/client/static', 'dist/client/static/'), (0, _fsExtra.copy)('src/server/config', 'dist/server/config/'), (0, _fsExtra.copy)('src/server/swagger.yaml', 'dist/server/swagger.yaml')];
            _context.next = 3;
            return (0, _fsExtra.readdir)("src/server/modules");

          case 3:
            moduleNames = _context.sent;
            excludedModules = ['website', '.DS_Store'];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 8;
            _iterator = moduleNames[Symbol.iterator]();

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 18;
              break;
            }

            module = _step.value;

            if (!(excludedModules.indexOf(module) !== -1)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("continue", 15);

          case 14:
            copyPromises.push((0, _fsExtra.copy)("src/server/modules/".concat(module, "/").concat(module, ".swagger.yaml"), "dist/server/modules/".concat(module, "/").concat(module, ".swagger.yaml")));

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 10;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](8);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 27:
            _context.prev = 27;

            if (!_didIteratorError) {
              _context.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return _context.finish(27);

          case 31:
            return _context.finish(24);

          case 32:
            _context.prev = 32;
            _context.next = 35;
            return Promise.all(copyPromises);

          case 35:
            _context.next = 40;
            break;

          case 37:
            _context.prev = 37;
            _context.t1 = _context["catch"](32);
            console.log(_context.t1);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 20, 24, 32], [25,, 27, 31], [32, 37]]);
  }));

  return function copyToDist() {
    return _ref.apply(this, arguments);
  };
}();

copyToDist().then(function () {
  console.log('Copy files success');
  process.exit();
});
//# sourceMappingURL=copyToDist.js.map