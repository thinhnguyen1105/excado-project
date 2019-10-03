"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brandRepository = exports.BrandModel = exports.BrandSchema = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _ = require("../..");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BrandSchema = new _mongoose.default.Schema((0, _core.addAuditableSchema)((0, _core.addDeletableSchema)({
  slug: String,
  name: String,
  logoImage: String,
  totalNews: {
    type: Number,
    default: 0
  }
})));
exports.BrandSchema = BrandSchema;
BrandSchema.index({
  name: 'text',
  slug: 'text'
});

var BrandModel = _mongoose.default.model('Brand', BrandSchema);

exports.BrandModel = BrandModel;

var find =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(query) {
    var filters;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filters = [];

            if (query.search) {
              filters.push({
                name: {
                  $regex: "^".concat(query.search),
                  $options: 'i'
                }
              });
            }

            _context.next = 4;
            return (0, _core.execCursorPaging)(BrandModel, filters, query.sortBy, Number(query.first), [], query.before, query.after);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function find(_x) {
    return _ref.apply(this, arguments);
  };
}();

var findById =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(id) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return BrandModel.findById(id).exec();

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function findById(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var create =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(payload) {
    var newBrand, data;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            newBrand = new BrandModel(payload);
            _context3.next = 3;
            return newBrand.save();

          case 3:
            data = _context3.sent;
            return _context3.abrupt("return", data._id);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function create(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var update =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(payload) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return BrandModel.findByIdAndUpdate(payload.id, {
              $set: payload
            }).exec();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function update(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var del =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(_id) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            throw new _core.NotImplementedError();

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function del(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var ensureIndexes =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return BrandModel.ensureIndexes({
              name: 1,
              slug: 1
            });

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function ensureIndexes() {
    return _ref6.apply(this, arguments);
  };
}();

var findOne =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(query) {
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!query.slug) {
              _context7.next = 4;
              break;
            }

            return _context7.abrupt("return", BrandModel.findOne({
              slug: query.slug
            }).exec());

          case 4:
            return _context7.abrupt("return", {});

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function findOne(_x6) {
    return _ref7.apply(this, arguments);
  };
}();

var count =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee8() {
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            throw new _core.NotImplementedError();

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function count() {
    return _ref8.apply(this, arguments);
  };
}();

var findTopBrands =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee9() {
    var data;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _.NewsModel.aggregate([{
              $group: {
                _id: {
                  category: '$categoryId',
                  brand: '$brand'
                },
                totalNews: {
                  $sum: 1
                }
              }
            }, {
              $lookup: {
                from: 'categories',
                localField: '_id.category',
                foreignField: '_id',
                as: 'category'
              }
            }, {
              $unwind: '$category'
            }, {
              $group: {
                _id: '$_id.brand',
                totalNews: {
                  $sum: '$totalNews'
                },
                brandCategories: {
                  $push: {
                    _id: '$category._id',
                    name: '$category.name',
                    slug: '$category.slug',
                    imageUrl: '$category.imageUrl',
                    totalNews: '$totalNews'
                  }
                }
              }
            }, {
              $sort: {
                totalNews: -1
              }
            }, {
              $limit: 16
            }, {
              $lookup: {
                from: 'brands',
                localField: '_id',
                foreignField: '_id',
                as: 'brand'
              }
            }, {
              $unwind: '$brand'
            }, {
              $project: {
                _id: 1,
                brandCategories: 1,
                totalNews: 1,
                name: '$brand.name',
                slug: '$brand.slug',
                logoImage: '$brand.logoImage'
              }
            }]);

          case 2:
            data = _context9.sent;
            return _context9.abrupt("return", {
              data: data
            });

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function findTopBrands() {
    return _ref9.apply(this, arguments);
  };
}();

var findBrandDetail =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee10(brandSlug) {
    var result;
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return BrandModel.aggregate([{
              $match: {
                slug: brandSlug
              }
            }, {
              $lookup: {
                from: 'news',
                localField: '_id',
                foreignField: 'brand',
                as: 'news_doc'
              }
            }, {
              $project: {
                _id: 1,
                name: 1,
                slug: 1,
                imageUrl: 1,
                news_doc: 1,
                totalNews: {
                  $size: '$news_doc'
                }
              }
            }, {
              $unwind: '$news_doc'
            }, {
              $group: {
                _id: {
                  brand: '$_id',
                  category: '$news_doc.categoryId',
                  model: '$news_doc.model',
                  name: '$name',
                  slug: '$slug',
                  logoImage: '$logoImage'
                },
                totalNews: {
                  $sum: 1
                }
              }
            }, {
              $lookup: {
                from: 'models',
                localField: '_id.model',
                foreignField: '_id',
                as: 'model'
              }
            }, {
              $unwind: '$model'
            }, {
              $group: {
                _id: {
                  brand: '$_id.brand',
                  category: '$_id.category',
                  name: '$_id.name',
                  slug: '$_id.slug',
                  logoImage: '$_id.logoImage'
                },
                totalNews: {
                  $sum: '$totalNews'
                },
                categoryModels: {
                  $push: {
                    _id: '$model._id',
                    name: '$model.name',
                    slug: '$model.slug',
                    brand: '$model.brand',
                    category: '$model.category',
                    totalNews: '$totalNews'
                  }
                }
              }
            }, {
              $lookup: {
                from: 'categories',
                localField: '_id.category',
                foreignField: '_id',
                as: 'category'
              }
            }, {
              $unwind: '$category'
            }, {
              $project: {
                _id: 1,
                category: {
                  _id: '$category._id',
                  name: '$category.name',
                  slug: '$category.slug',
                  imageUrl: '$category.imageUrl',
                  categoryModels: '$categoryModels',
                  totalNews: '$totalNews'
                }
              }
            }, {
              $group: {
                _id: {
                  brand: '$_id.brand',
                  name: '$_id.name',
                  slug: '$_id.slug',
                  logoImage: '$_id.logoImage'
                },
                brandCategories: {
                  $push: '$category'
                },
                totalNews: {
                  $sum: '$category.totalNews'
                }
              }
            }, {
              $project: {
                _id: '$_id.brand',
                name: '$_id.name',
                slug: '$_id.slug',
                logoImage: '$_id.logoImage',
                brandCategories: 1,
                totalNews: 1
              }
            }]);

          case 2:
            result = _context10.sent;
            return _context10.abrupt("return", result[0]);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function findBrandDetail(_x7) {
    return _ref10.apply(this, arguments);
  };
}();

var findBrandList =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11() {
    var data;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return BrandModel.find().exec();

          case 2:
            data = _context11.sent;
            return _context11.abrupt("return", {
              data: data
            });

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function findBrandList() {
    return _ref11.apply(this, arguments);
  };
}();

var increaseNewsCount =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee12(newsId) {
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return BrandModel.findByIdAndUpdate(newsId, {
              $inc: {
                totalNews: 1
              }
            }).exec();

          case 2:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function increaseNewsCount(_x8) {
    return _ref12.apply(this, arguments);
  };
}();

var decreaseNewsCount =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee13(newsId) {
    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return BrandModel.findByIdAndUpdate(newsId, {
              $inc: {
                totalNews: -1
              }
            }).exec();

          case 2:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function decreaseNewsCount(_x9) {
    return _ref13.apply(this, arguments);
  };
}();

var brandRepository = {
  increaseNewsCount: increaseNewsCount,
  decreaseNewsCount: decreaseNewsCount,
  findBrandList: findBrandList,
  findBrandDetail: findBrandDetail,
  findTopBrands: findTopBrands,
  find: find,
  findById: findById,
  create: create,
  update: update,
  del: del,
  ensureIndexes: ensureIndexes,
  findOne: findOne,
  count: count
};
exports.brandRepository = brandRepository;
//# sourceMappingURL=brands.repository.js.map