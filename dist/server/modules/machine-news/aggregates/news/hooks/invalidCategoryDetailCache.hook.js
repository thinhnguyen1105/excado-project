"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidCategoryDetailCache = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../../core");

var _news = require("../news.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var invalidCategoryDetailCache =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var newsInfo, key;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _news.NewsModel.findById(context.result.id || context.id).populate('categoryId').exec();

          case 2:
            newsInfo = _context.sent;

            if (newsInfo) {
              key = "/api/categories/customs/find-category-detail/".concat(newsInfo.categoryId.slug);

              _core.apiCache.del(key, function (error) {
                _core.logger.error(error);
              });
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function invalidCategoryDetailCache(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.invalidCategoryDetailCache = invalidCategoryDetailCache;
//# sourceMappingURL=invalidCategoryDetailCache.hook.js.map