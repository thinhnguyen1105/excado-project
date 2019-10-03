"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fsExtra = require("fs-extra");

var _core = require("../../../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var permissionsService = {
  find: function () {
    var _find = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_params) {
      var result, rootDir, moduleNames, excludedModules, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, moduleName, permissions;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              result = {};
              rootDir = "".concat(_core.rootLocation, "/server/modules");
              _context.next = 4;
              return (0, _fsExtra.readdir)(rootDir);

            case 4:
              moduleNames = _context.sent;
              excludedModules = ['.DS_Store'];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 9;
              _iterator = moduleNames.sort()[Symbol.iterator]();

            case 11:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 20;
                break;
              }

              moduleName = _step.value;

              if (!(excludedModules.indexOf(moduleName) !== -1)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("continue", 17);

            case 15:
              _core.logger.info("Loading '".concat(moduleName, "' permissons ..."));

              try {
                permissions = require("../../../".concat(moduleName, "/permissions")).PERMISSIONS;
                result[moduleName] = permissions;
              } catch (error) {// ignore if not found module
              }

            case 17:
              _iteratorNormalCompletion = true;
              _context.next = 11;
              break;

            case 20:
              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](9);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 26:
              _context.prev = 26;
              _context.prev = 27;

              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }

            case 29:
              _context.prev = 29;

              if (!_didIteratorError) {
                _context.next = 32;
                break;
              }

              throw _iteratorError;

            case 32:
              return _context.finish(29);

            case 33:
              return _context.finish(26);

            case 34:
              return _context.abrupt("return", result);

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 22, 26, 34], [27,, 29, 33]]);
    }));

    function find(_x) {
      return _find.apply(this, arguments);
    }

    return find;
  }()
};
var _default = permissionsService;
exports.default = _default;
//# sourceMappingURL=permissions.service.js.map