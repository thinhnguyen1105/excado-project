"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _categories = require("./categories.repository");

var _invalidCache = require("./hooks/invalidCache.hook");

var _invalidCategoryDetailCache = require("./hooks/invalidCategoryDetailCache.hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var categoryHook = {
  before: {
    all: [_core.logApiRequest,
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(context) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.params.repository = _categories.categoryRepository;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()],
    find: [_core.readFromCache],
    create: [_core.addCreationInfo],
    update: [_core.addModificationInfo],
    patch: [_core.addModificationInfo],
    remove: []
  },
  after: {
    find: [_core.writeToCache],
    create: [_invalidCache.invalidCategoryCache],
    patch: [_invalidCache.invalidCategoryCache, _invalidCategoryDetailCache.invalidCategoryDetailCache]
  }
};
var _default = categoryHook;
exports.default = _default;
//# sourceMappingURL=categories.hook.js.map