"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _xlsx = require("xlsx");

var _brands = require("../modules/machine-news/aggregates/brands/brands.repository");

var _config = require("../config");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _categories = require("../modules/machine-news/aggregates/categories/categories.repository");

var _machineNews = require("../modules/machine-news");

var _slugify = _interopRequireDefault(require("slugify"));

var _lodash = require("lodash");

var _provinces = _interopRequireDefault(require("./provinces"));

var _provinces2 = require("../modules/machine-news/aggregates/provinces/provinces.repository");

var _weightRanges = require("../modules/machine-news/aggregates/weight-ranges/weight-ranges.repository");

var _rentalPeriods = require("../modules/machine-news/aggregates/rental-periods/rental-periods.repository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// tslint:disable:no-console
var convertVietnamese = function convertVietnamese(str) {
  var result = str.toLowerCase();
  result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gi, 'a');
  result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, 'e');
  result = result.replace(/ì|í|ị|ỉ|ĩ/gi, 'i');
  result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gi, 'o');
  result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/gi, 'u');
  result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/gi, 'y');
  result = result.replace(/đ/gi, 'd');
  result = result.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/gi, ' ');
  result = result.replace(/ + /gi, ' ');
  result = result.trim();
  return result;
};

var importProvinces =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var provincesPromises;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            provincesPromises = _provinces.default.map(function (val) {
              return _provinces2.provinceRepository.create(val);
            });
            _context.next = 3;
            return Promise.all(provincesPromises);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function importProvinces() {
    return _ref.apply(this, arguments);
  };
}();

var importWeightRanges =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2() {
    var weightRange, weightRangePromises;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            weightRange = [{
              id: '5c779ea03b2bb3480e255e41',
              min: 1,
              max: 4
            }, {
              id: '5c779ea03b2bb3480e255e42',
              min: 4,
              max: 11
            }, {
              id: '5c779ea03b2bb3480e255e43',
              min: 11,
              max: 19
            }, {
              id: '5c779ea03b2bb3480e255e44',
              min: 19,
              max: 29
            }, {
              id: '5c779ea03b2bb3480e255e45',
              min: 29,
              max: 39
            }, {
              id: '5c779ea03b2bb3480e255e46',
              min: 39,
              max: 55
            }, {
              id: '5c779ea03b2bb3480e255e47',
              min: 55,
              max: 75
            }, {
              id: '5c779ea03b2bb3480e255e48',
              min: 80,
              max: 120
            }, {
              id: '5c779ea03b2bb3480e255e49',
              min: 120,
              max: 180
            }, {
              id: '5c779ea03b2bb3480e255e4a',
              min: 180,
              max: 250
            }, {
              id: '5c779ea03b2bb3480e255e4b',
              min: 250,
              max: undefined
            }];
            weightRangePromises = [];
            weightRange.forEach(function (item) {
              weightRangePromises.push(_weightRanges.weightRangeRepository.create({
                _id: item.id,
                min: item.min,
                max: item.max,
                createdAt: new Date().getTime()
              }));
            });
            _context2.next = 5;
            return Promise.all(weightRangePromises);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function importWeightRanges() {
    return _ref2.apply(this, arguments);
  };
}();

var importRentalPeriods =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    var rentalPeriods, rentalPeriodPromises;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            rentalPeriods = [{
              id: '5c779f4535fdfd4c393f3847',
              min: 1,
              max: 3
            }, {
              id: '5c779f4535fdfd4c393f3848',
              min: 3,
              max: 6
            }, {
              id: '5c779f4535fdfd4c393f3849',
              min: 6,
              max: 12
            }, {
              id: '5c779f4535fdfd4c393f384a',
              min: 12,
              max: undefined
            }];
            rentalPeriodPromises = [];
            rentalPeriods.forEach(function (item) {
              rentalPeriodPromises.push(_rentalPeriods.rentalPeriodRepository.create({
                _id: item.id,
                min: item.min,
                max: item.max,
                createdAt: new Date().getTime()
              }));
            });
            _context3.next = 5;
            return Promise.all(rentalPeriodPromises);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function importRentalPeriods() {
    return _ref3.apply(this, arguments);
  };
}();

var importCategories =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4() {
    var workbook, categoriesWorksheet, categoriesSheetAsJson, categories, categoryPromises;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            workbook = (0, _xlsx.readFile)("excado-data.xlsx");
            categoriesWorksheet = workbook.Sheets[workbook.SheetNames[1]];
            categoriesSheetAsJson = _xlsx.utils.sheet_to_json(categoriesWorksheet, {
              header: 'A'
            });
            categories = categoriesSheetAsJson.map(function (item) {
              return item['B'];
            });
            categoryPromises = categories.map(function (item) {
              var slug = (0, _slugify.default)(convertVietnamese(item));
              return _categories.categoryRepository.create({
                name: item,
                slug: slug,
                imageUrl: "/static/images/categories/".concat(slug, ".jpg"),
                totalNews: 0,
                createdAt: new Date().getTime()
              });
            });
            _context4.next = 7;
            return Promise.all(categoryPromises);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function importCategories() {
    return _ref4.apply(this, arguments);
  };
}();

var importBrands =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5() {
    var workbook, brandsWorksheet, brandsSheetAsJson, brands, brandPromises;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            workbook = (0, _xlsx.readFile)("excado-data.xlsx");
            brandsWorksheet = workbook.Sheets[workbook.SheetNames[2]];
            brandsSheetAsJson = _xlsx.utils.sheet_to_json(brandsWorksheet, {
              header: 'A'
            });
            brands = brandsSheetAsJson.map(function (item) {
              return (0, _lodash.startCase)(item['A'].toLowerCase().trim().replace('-', '8')).replace(' 8 ', '-');
            });
            brandPromises = brands.map(function (item) {
              var slug = (0, _slugify.default)(item.toLocaleLowerCase());
              return _brands.brandRepository.create({
                slug: slug,
                name: item,
                logoImage: "/static/images/brands/".concat(slug, ".jpg"),
                totalNews: 0,
                createdAt: new Date().getTime()
              });
            });
            _context5.next = 7;
            return Promise.all(brandPromises);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function importBrands() {
    return _ref5.apply(this, arguments);
  };
}();

var importBrandModels =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(sheetName, sheetData, categories, brands) {
    var brandName, modelPromises;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            brandName = sheetName.split(' ')[1];
            modelPromises = [];
            sheetData.slice(3).forEach(function (item) {
              var selectedBrand = brands.filter(function (brand) {
                return brand.slug === (0, _slugify.default)(brandName.toLowerCase());
              })[0];
              var selectedCategory = categories.filter(function (category) {
                return category.slug === (0, _slugify.default)(convertVietnamese(String(item['C'])));
              })[0];

              if (selectedBrand && selectedCategory) {
                modelPromises.push(_machineNews.modelRepository.create({
                  name: item['D'],
                  slug: (0, _slugify.default)(String(item['D'])),
                  brand: selectedBrand._id,
                  category: selectedCategory._id,
                  totalNews: 0,
                  createdAt: new Date().getTime()
                }));
              }
            });
            console.log("import brand models ".concat(sheetName), modelPromises.length);
            _context6.next = 6;
            return Promise.all(modelPromises);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function importBrandModels(_x, _x2, _x3, _x4) {
    return _ref6.apply(this, arguments);
  };
}();

var importModels =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7() {
    var workbook, categories, brands, brandsWithModels, modelPromises;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            workbook = (0, _xlsx.readFile)("excado-data.xlsx");
            _context7.next = 3;
            return _categories.CategoryModel.find().exec();

          case 3:
            categories = _context7.sent;
            _context7.next = 6;
            return _brands.BrandModel.find().exec();

          case 6:
            brands = _context7.sent;
            brandsWithModels = workbook.SheetNames.slice(4);
            modelPromises = brandsWithModels.map(function (item) {
              return importBrandModels(item, _xlsx.utils.sheet_to_json(workbook.Sheets[item], {
                header: 'A'
              }), categories, brands);
            });
            _context7.next = 11;
            return Promise.all(modelPromises);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function importModels() {
    return _ref7.apply(this, arguments);
  };
}();

var importMetadata =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee8() {
    var args;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _mongoose.default.connect(_config.config.database.connectionString, {
              useNewUrlParser: true
            });

          case 2:
            args = process.argv.slice(2);

            if (!(args.length === 0)) {
              _context8.next = 8;
              break;
            }

            console.log("\n      Invalid args.\n      Please provide type of metadatas you want to import: ['provinces', 'categories', 'brands', 'models'].\n      Ex: - yarn importMetadata -- provinces\n          - yarn importMetadata -- categories models brands\n    ");
            process.exit();
            _context8.next = 28;
            break;

          case 8:
            if (!(args.indexOf('provinces') > -1)) {
              _context8.next = 11;
              break;
            }

            _context8.next = 11;
            return importProvinces();

          case 11:
            if (!(args.indexOf('categories') > -1)) {
              _context8.next = 14;
              break;
            }

            _context8.next = 14;
            return importCategories();

          case 14:
            if (!(args.indexOf('brands') > -1)) {
              _context8.next = 17;
              break;
            }

            _context8.next = 17;
            return importBrands();

          case 17:
            if (!(args.indexOf('models') > -1)) {
              _context8.next = 20;
              break;
            }

            _context8.next = 20;
            return importModels();

          case 20:
            if (!(args.indexOf('weightRanges') > -1)) {
              _context8.next = 23;
              break;
            }

            _context8.next = 23;
            return importWeightRanges();

          case 23:
            if (!(args.indexOf('rentalPeriods') > -1)) {
              _context8.next = 26;
              break;
            }

            _context8.next = 26;
            return importRentalPeriods();

          case 26:
            console.log("Import metadata success");
            process.exit();

          case 28:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function importMetadata() {
    return _ref8.apply(this, arguments);
  };
}();

importMetadata();
//# sourceMappingURL=importMetadata.js.map