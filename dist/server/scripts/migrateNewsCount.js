"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../config");

var _machineNews = require("../modules/machine-news");

var _weightRanges = require("../modules/machine-news/aggregates/weight-ranges/weight-ranges.repository");

var _rentalPeriods = require("../modules/machine-news/aggregates/rental-periods/rental-periods.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

console.log(_weightRanges.WeightRangeModel, _rentalPeriods.RentalPeriodModel);

var migrateNewsCount =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5() {
    var updateBrandNewsCount, updateCategoryNewsCount, updateModelNewsCount, updateProvinceNewsCount, brands, provinces, models, categories, updateBrands, updateModels, updateProvinces, updateCategories, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, brand, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, province, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, model, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, category;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _mongoose.default.connect(_config.config.database.connectionString, {
              useNewUrlParser: true
            });

          case 2:
            updateBrandNewsCount =
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee(brandId) {
                var totalNews;
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _machineNews.NewsModel.find({
                          brand: brandId
                        }).countDocuments().exec();

                      case 2:
                        totalNews = _context.sent;
                        _context.next = 5;
                        return _machineNews.BrandModel.findByIdAndUpdate(brandId, {
                          $set: {
                            totalNews: totalNews
                          }
                        });

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function updateBrandNewsCount(_x) {
                return _ref2.apply(this, arguments);
              };
            }();

            updateCategoryNewsCount =
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee2(categoryId) {
                var totalNews;
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _machineNews.NewsModel.find({
                          categoryId: categoryId
                        }).countDocuments().exec();

                      case 2:
                        totalNews = _context2.sent;
                        _context2.next = 5;
                        return _machineNews.CategoryModel.findByIdAndUpdate(categoryId, {
                          $set: {
                            totalNews: totalNews
                          }
                        });

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function updateCategoryNewsCount(_x2) {
                return _ref3.apply(this, arguments);
              };
            }();

            updateModelNewsCount =
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(modelId) {
                var totalNews;
                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _machineNews.NewsModel.find({
                          model: modelId
                        }).countDocuments().exec();

                      case 2:
                        totalNews = _context3.sent;
                        _context3.next = 5;
                        return _machineNews.ModelModel.findByIdAndUpdate(modelId, {
                          $set: {
                            totalNews: totalNews
                          }
                        });

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function updateModelNewsCount(_x3) {
                return _ref4.apply(this, arguments);
              };
            }();

            updateProvinceNewsCount =
            /*#__PURE__*/
            function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee4(provinceId) {
                var totalNews;
                return _regenerator.default.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _machineNews.NewsModel.find({
                          location: provinceId
                        }).countDocuments().exec();

                      case 2:
                        totalNews = _context4.sent;
                        _context4.next = 5;
                        return _machineNews.ProvinceModel.findByIdAndUpdate(provinceId, {
                          $set: {
                            totalNews: totalNews
                          }
                        });

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function updateProvinceNewsCount(_x4) {
                return _ref5.apply(this, arguments);
              };
            }();

            _context5.next = 8;
            return _machineNews.BrandModel.find().exec();

          case 8:
            brands = _context5.sent;
            _context5.next = 11;
            return _machineNews.ProvinceModel.find().exec();

          case 11:
            provinces = _context5.sent;
            _context5.next = 14;
            return _machineNews.ModelModel.find().exec();

          case 14:
            models = _context5.sent;
            _context5.next = 17;
            return _machineNews.CategoryModel.find().exec();

          case 17:
            categories = _context5.sent;
            updateBrands = [];
            updateModels = [];
            updateProvinces = [];
            updateCategories = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context5.prev = 25;

            for (_iterator = brands[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              brand = _step.value;
              updateBrands.push(updateBrandNewsCount(brand._id));
            }

            _context5.next = 33;
            break;

          case 29:
            _context5.prev = 29;
            _context5.t0 = _context5["catch"](25);
            _didIteratorError = true;
            _iteratorError = _context5.t0;

          case 33:
            _context5.prev = 33;
            _context5.prev = 34;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 36:
            _context5.prev = 36;

            if (!_didIteratorError) {
              _context5.next = 39;
              break;
            }

            throw _iteratorError;

          case 39:
            return _context5.finish(36);

          case 40:
            return _context5.finish(33);

          case 41:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context5.prev = 44;

            for (_iterator2 = provinces[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              province = _step2.value;
              updateProvinces.push(updateProvinceNewsCount(province._id));
            }

            _context5.next = 52;
            break;

          case 48:
            _context5.prev = 48;
            _context5.t1 = _context5["catch"](44);
            _didIteratorError2 = true;
            _iteratorError2 = _context5.t1;

          case 52:
            _context5.prev = 52;
            _context5.prev = 53;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 55:
            _context5.prev = 55;

            if (!_didIteratorError2) {
              _context5.next = 58;
              break;
            }

            throw _iteratorError2;

          case 58:
            return _context5.finish(55);

          case 59:
            return _context5.finish(52);

          case 60:
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context5.prev = 63;

            for (_iterator3 = models[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              model = _step3.value;
              updateModels.push(updateModelNewsCount(model._id));
            }

            _context5.next = 71;
            break;

          case 67:
            _context5.prev = 67;
            _context5.t2 = _context5["catch"](63);
            _didIteratorError3 = true;
            _iteratorError3 = _context5.t2;

          case 71:
            _context5.prev = 71;
            _context5.prev = 72;

            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }

          case 74:
            _context5.prev = 74;

            if (!_didIteratorError3) {
              _context5.next = 77;
              break;
            }

            throw _iteratorError3;

          case 77:
            return _context5.finish(74);

          case 78:
            return _context5.finish(71);

          case 79:
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context5.prev = 82;

            for (_iterator4 = categories[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              category = _step4.value;
              updateCategories.push(updateCategoryNewsCount(category._id));
            }

            _context5.next = 90;
            break;

          case 86:
            _context5.prev = 86;
            _context5.t3 = _context5["catch"](82);
            _didIteratorError4 = true;
            _iteratorError4 = _context5.t3;

          case 90:
            _context5.prev = 90;
            _context5.prev = 91;

            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }

          case 93:
            _context5.prev = 93;

            if (!_didIteratorError4) {
              _context5.next = 96;
              break;
            }

            throw _iteratorError4;

          case 96:
            return _context5.finish(93);

          case 97:
            return _context5.finish(90);

          case 98:
            _context5.next = 100;
            return Promise.all(updateBrands);

          case 100:
            _context5.next = 102;
            return Promise.all(updateModels);

          case 102:
            _context5.next = 104;
            return Promise.all(updateProvinces);

          case 104:
            _context5.next = 106;
            return Promise.all(updateCategories);

          case 106:
            console.log('Migrate news count success');
            process.exit();

          case 108:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[25, 29, 33, 41], [34,, 36, 40], [44, 48, 52, 60], [53,, 55, 59], [63, 67, 71, 79], [72,, 74, 78], [82, 86, 90, 98], [91,, 93, 97]]);
  }));

  return function migrateNewsCount() {
    return _ref.apply(this, arguments);
  };
}();

migrateNewsCount();
//# sourceMappingURL=migrateNewsCount.js.map