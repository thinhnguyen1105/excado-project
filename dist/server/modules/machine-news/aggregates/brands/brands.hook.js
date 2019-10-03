"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _brands = require("./brands.repository");

var _invalidAllBrandsCache = require("./hooks/invalidAllBrandsCache.hook");

var _invalidBrandDetail = require("./hooks/invalidBrandDetail.hook");

var _invalidTopBrandsCache = require("./hooks/invalidTopBrandsCache.hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var brandHook = {
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
                context.params.repository = _brands.brandRepository;

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
    create: [_core.addCreationInfo],
    update: [_core.addModificationInfo],
    patch: [_core.addModificationInfo]
  },
  after: {
    find: [_core.writeToCache],
    create: [_invalidAllBrandsCache.invalidAllBrandsCache],
    patch: [_invalidAllBrandsCache.invalidAllBrandsCache, _invalidBrandDetail.invalidBrandDetailCache, _invalidTopBrandsCache.invalidTopBrandsCache]
  }
};
var _default = brandHook;
exports.default = _default;
//# sourceMappingURL=brands.hook.js.map