"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNewsCount = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _news = require("../news.repository");

var _brands = require("../../brands/brands.repository");

var _models = require("../../models/models.repository");

var _provinces = require("../../provinces/provinces.repository");

var _categories = require("../../categories/categories.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var updateNewsCount =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var newsId, newsInfo, oldNews;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newsId = context.id;
            _context.next = 3;
            return _news.newsRepository.findById(newsId);

          case 3:
            newsInfo = _context.sent;
            oldNews = context.oldNews;
            ['brand', 'model', 'location'].forEach(function (item) {
              var repository;

              switch (item) {
                case 'brand':
                  repository = _brands.brandRepository;
                  break;

                case 'model':
                  repository = _models.modelRepository;
                  break;

                case 'location':
                  repository = _provinces.provinceRepository;
                  break;
              }

              if (newsInfo && newsInfo[item] && newsInfo[item]._id) {
                if (!oldNews[item] || !oldNews[item]._id) {
                  repository.increaseNewsCount(newsInfo[item]._id);
                } else if (oldNews[item]._id && oldNews[item]._id !== newsInfo[item]._id) {
                  repository.increaseNewsCount(newsInfo[item]._id);
                  repository.decreaseNewsCount(oldNews[item]._id);
                }
              } else if (newsInfo && newsInfo[item] && !newsInfo[item]._id) {
                if (oldNews[item] && oldNews[item]._id) {
                  repository.decreaseNewsCount(oldNews[item]._id);
                }
              }
            });

            if (newsInfo && newsInfo.categoryId && newsInfo.categoryId._id) {
              if (oldNews.categoryId._id && oldNews.categoryId._id !== newsInfo.categoryId._id) {
                _categories.categoryRepository.increaseNewsCount(newsInfo.categoryId._id);

                _categories.categoryRepository.decreaseNewsCount(oldNews.categoryId._id);
              }
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateNewsCount(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateNewsCount = updateNewsCount;
//# sourceMappingURL=updateNewsCount.hook.js.map