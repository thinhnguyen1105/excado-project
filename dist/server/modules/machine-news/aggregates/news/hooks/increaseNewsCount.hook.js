"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increaseNewsCount = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _news = require("../news.repository");

var _brands = require("../../brands/brands.repository");

var _provinces = require("../../provinces/provinces.repository");

var _categories = require("../../categories/categories.repository");

var _models = require("../../models/models.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var increaseNewsCount =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var newsId, newsInfo;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newsId = context.result.id;
            _context.next = 3;
            return _news.newsRepository.findById(newsId);

          case 3:
            newsInfo = _context.sent;

            if (newsInfo) {
              if (newsInfo.brand && newsInfo.brand._id) {
                _brands.brandRepository.increaseNewsCount(newsInfo.brand._id);
              }

              if (newsInfo.location && newsInfo.location._id) {
                _provinces.provinceRepository.increaseNewsCount(newsInfo.location._id);
              }

              if (newsInfo.categoryId && newsInfo.categoryId._id) {
                _categories.categoryRepository.increaseNewsCount(newsInfo.categoryId._id);
              }

              if (newsInfo.model && newsInfo.model._id) {
                _models.modelRepository.increaseNewsCount(newsInfo.model._id);
              }
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function increaseNewsCount(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.increaseNewsCount = increaseNewsCount;
//# sourceMappingURL=increaseNewsCount.hook.js.map