"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsRepository = exports.NewsModel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("../../../../core");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosastic = _interopRequireDefault(require("mongoosastic"));

var _slugify = _interopRequireDefault(require("slugify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NewsSchema = new _mongoose.default.Schema((0, _core.addAuditableSchema)((0, _core.addDeletableSchema)({
  title: {
    type: String,
    es_type: 'text'
  },
  elasticsearchTitle: {
    type: String,
    es_type: 'keyword'
  },
  elasticsearchKeywords: {
    type: String,
    es_type: 'text'
  },
  elasticsearchPrice: {
    type: Number,
    es_type: 'keyword'
  },
  elasticsearchCreatedAt: {
    type: Number,
    es_type: 'keyword'
  },
  state: {
    type: String,
    es_type: 'text'
  },
  description: {
    type: String,
    es_type: 'text'
  },
  imageUrls: [{
    type: String,
    es_type: 'text'
  }],
  price: {
    type: Number,
    es_type: 'float',
    default: 0
  },
  priceType: {
    type: String,
    es_type: 'text'
  },
  newsType: {
    type: String,
    es_type: 'text'
  },
  owner: {
    type: String,
    ref: 'User',
    es_type: 'nested'
  },
  shop: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Shop',
    es_type: 'nested'
  },
  location: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Province',
    es_type: 'nested'
  },
  status: {
    type: String,
    es_type: 'text'
  },
  usedHours: {
    type: Number,
    es_type: 'integer',
    default: 0
  },
  serialNo: {
    type: String,
    es_type: 'text'
  },
  categoryId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Category',
    es_type: 'nested'
  },
  type: {
    type: String,
    es_type: 'text'
  },
  brand: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Brand',
    es_type: 'nested'
  },
  model: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Model',
    es_type: 'nested'
  },
  weight: {
    type: Number,
    es_type: 'integer',
    default: 0
  },
  weightRange: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'WeightRange',
    es_type: 'nested'
  },
  year: {
    type: Number,
    es_type: 'integer',
    default: 0
  },
  rentalPeriod: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'RentalPeriod',
    es_type: 'nested'
  },
  reviewedAt: {
    type: Date,
    es_type: 'date'
  },
  reviewedBy: {
    type: String,
    es_type: 'text'
  },
  followBy: [{
    type: String,
    ref: 'User',
    es_type: 'text'
  }],
  elasticsearchID: {
    type: String,
    es_type: 'keyword'
  },
  counterView: {
    type: Number,
    default: 0
  },
  counterFollow: {
    type: Number,
    default: 0
  },
  createdDate: {
    type: Date,
    default: new Date()
  }
})));
// Connect mongoose plugin Mongoosastic with ElasticSearch
NewsSchema.plugin(_mongoosastic.default, {
  esClient: (0, _core.getElasticInstance)(),
  populate: [{
    path: 'owner',
    model: 'User'
  }, {
    path: 'categoryId',
    model: 'Category'
  }, {
    path: 'brand',
    model: 'Brand'
  }, {
    path: 'location',
    model: 'Province'
  }, {
    path: 'model',
    model: 'Model'
  }, {
    path: 'shop',
    model: 'Shop'
  }, {
    path: 'weightRange',
    model: 'WeightRange'
  }, {
    path: 'rentalPeriod',
    model: 'RentalPeriod'
  }],
  transform: function transform(data, _news) {
    return _objectSpread({}, data, {
      elasticsearchID: _news._id,
      elasticsearchTitle: _news.title,
      elasticsearchPrice: _news.price,
      elasticsearchCreatedAt: _news.createdAt,
      elasticsearchKeywords: (0, _core.changeToSlug)(_news.title ? _news.title : '') + (0, _core.changeToSlug)(_news.categoryId && _news.categoryId.name ? _news.categoryId.name : '') + (0, _core.changeToSlug)(_news.location && _news.location.name ? _news.location.name : '') + (0, _core.changeToSlug)(_news.model && _news.model.name ? _news.model.name : '')
    });
  }
});

var NewsModel = _mongoose.default.model('News', NewsSchema);

exports.NewsModel = NewsModel;
NewsModel.createMapping({
  'settings': {
    'number_of_shards': 1,
    'analysis': {
      'filter': {
        'nGram_filter': {
          'type': 'ngram',
          'min_gram': 3,
          'max_gram': 4,
          'token_chars': ['letter', 'digit', 'punctuation', 'whitespace', 'symbol']
        }
      },
      'analyzer': {
        'default': {
          'tokenizer': 'my_tokenizer',
          'filter': ['lowercase', 'asciifolding', 'nGram_filter']
        }
      },
      'tokenizer': {
        'my_tokenizer': {
          'type': 'ngram',
          'min_gram': 3,
          'max_gram': 4,
          'token_chars': ['letter', 'digit', // 'whitespace',
          'symbol']
        }
      }
    }
  }
}, function (err, mapping) {
  if (err) {
    // tslint:disable-next-line:no-console
    console.log('error creating mapping', err);
  } else {
    // tslint:disable-next-line:no-console
    console.log('Mapping Created', mapping); // Synchronize records from mongodb to elasticsearch index
    // tslint:disable-next-line

    var stream = NewsModel.synchronize(); // tslint:disable-next-line:no-var-keyword

    var countIndex = 0;
    stream.on('data', function () {
      countIndex++;
    });
    stream.on('close', function () {
      // tslint:disable-next-line:no-console
      console.log('Indexed ' + countIndex + ' Documents');
    });
    stream.on('error', function (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    });
  }
});

var searchNews = function searchNews(query) {
  try {
    return new Promise(function (resolve, reject) {
      var conditions = [];
      var shouldConditions = [];
      var sortCondition = [];
      var mustNotConditions = [];
      var searchAfterCondition = [];
      var sortField = query.sortBy.split('|')[0];
      var sortOrder = query.sortBy.split('|')[1];
      var invertSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'; // must not conditions

      if (query.sortBy && sortField === 'year') {
        mustNotConditions.push({
          range: {
            'year': {
              lte: 0
            }
          }
        });
      } // search after condition


      if (query.before) {
        var _decodeBase = (0, _core.decodeBase64)(query.before),
            sortFieldValue = _decodeBase.sortFieldValue,
            secondSortValue = _decodeBase.secondSortValue;

        searchAfterCondition.push(sortFieldValue);
        searchAfterCondition.push(secondSortValue);
      } else if (query.after) {
        var _decodeBase2 = (0, _core.decodeBase64)(query.after),
            _sortFieldValue = _decodeBase2.sortFieldValue,
            _secondSortValue = _decodeBase2.secondSortValue;

        searchAfterCondition.push(_sortFieldValue);
        searchAfterCondition.push(_secondSortValue);
      } // sort


      if (query.before) {
        sortCondition.push(_defineProperty({}, sortField, invertSortOrder));
        sortCondition.push({
          elasticsearchID: invertSortOrder
        });
      } else {
        sortCondition.push(_defineProperty({}, sortField, sortOrder));
        sortCondition.push({
          elasticsearchID: sortOrder
        });
      } // condition


      if (query.keyword) {
        var queryKeyword = (0, _slugify.default)(query.keyword).replace(/-/g, ' ');
        conditions.push({
          match: {
            'elasticsearchKeywords': {
              query: queryKeyword,
              'minimum_should_match': '100%'
            }
          }
        });
      }

      if (query.location) {
        conditions.push({
          nested: {
            path: 'location',
            query: {
              bool: {
                must: [{
                  match_phrase: {
                    'location._id': query.location
                  }
                }]
              }
            }
          }
        });
      }

      if (query.model) {
        conditions.push({
          nested: {
            path: 'model',
            query: {
              bool: {
                must: [{
                  match_phrase: {
                    'model._id': query.model
                  }
                }]
              }
            }
          }
        });
      }

      if (query.newsType && !query.otherNewsType) {
        conditions.push({
          match_phrase: {
            'newsType': query.newsType
          }
        });
      }

      if (query.newsType && query.otherNewsType) {
        shouldConditions.push({
          match_phrase: {
            'newsType': query.newsType
          }
        }, {
          match_phrase: {
            'newsType': query.otherNewsType
          }
        });
      }

      if (query.status) {
        conditions.push({
          match_phrase: {
            'status': query.status
          }
        });
      }

      if (query.brand) {
        conditions.push({
          nested: {
            path: 'brand',
            query: {
              bool: {
                must: [{
                  match_phrase: {
                    'brand._id': query.brand
                  }
                }]
              }
            }
          }
        });
      }

      if (query.categoryId) {
        conditions.push({
          nested: {
            path: 'categoryId',
            query: {
              bool: {
                must: [{
                  match_phrase: {
                    'categoryId._id': query.categoryId
                  }
                }]
              }
            }
          }
        });
      }

      if (query.weightRange) {
        conditions.push({
          nested: {
            path: 'weightRange',
            query: {
              bool: {
                must: [{
                  match_phrase: {
                    'weightRange._id': query.weightRange
                  }
                }]
              }
            }
          }
        });
      }

      if (query.owner) {
        conditions.push({
          nested: {
            path: 'owner',
            query: {
              bool: {
                must: [{
                  match_phrase: {
                    'owner._id': query.owner
                  }
                }]
              }
            }
          }
        });
      }

      if (query.priceType) {
        conditions.push({
          match_phrase: {
            'priceType': query.priceType
          }
        });
      }

      if (query.shop) {
        conditions.push({
          nested: {
            path: 'shop',
            query: {
              bool: {
                must: [{
                  match_phrase: {
                    'shop._id': query.shop
                  }
                }]
              }
            }
          }
        });
      }

      if (query.state) {
        conditions.push({
          match_phrase: {
            'state': query.state
          }
        });
      }

      if (query.type) {
        conditions.push({
          match_phrase: {
            'type': query.type
          }
        });
      }

      if (query.minPrice && query.maxPrice) {
        conditions.push({
          range: {
            'price': {
              gte: query.minPrice,
              lt: query.maxPrice
            }
          }
        });
      }

      var search = {
        from: 0,
        size: Number(Number(query.first)) + 1,
        query: {
          bool: {
            must: conditions,
            should: shouldConditions,
            must_not: mustNotConditions
          }
        },
        sort: sortCondition
      };

      if (searchAfterCondition.length > 0) {
        search.search_after = searchAfterCondition;
      }

      NewsModel.esSearch(search, {
        hydrate: false
      }, function (err, results) {
        if (err) {
          // tslint:disable-next-line:no-console
          console.log(err);
          reject(err.message || 'Internal server error.');
        }

        var data = results.hits.hits.map(function (item) {
          return _objectSpread({}, item._source, {
            _id: item._id
          });
        });

        if (query.before) {
          resolve({
            data: data.length === Number(query.first) + 1 ? data.slice(0, Number(query.first)).reverse() : _toConsumableArray(data).reverse(),
            before: data.length === Number(query.first) + 1 ? (0, _core.encodeBase64)({
              sortFieldValue: data[Number(query.first) - 1][sortField],
              secondSortValue: data[Number(query.first) - 1]._id
            }) : undefined,
            after: (0, _core.encodeBase64)({
              sortFieldValue: data[0][sortField],
              secondSortValue: data[0]._id
            })
          });
        } else {
          resolve({
            data: data.length === Number(query.first) + 1 ? data.slice(0, Number(query.first)) : data,
            before: query.after ? (0, _core.encodeBase64)({
              sortFieldValue: data[0][sortField],
              secondSortValue: data[0]._id
            }) : undefined,
            after: data.length === Number(query.first) + 1 ? (0, _core.encodeBase64)({
              sortFieldValue: data[Number(query.first) - 1][sortField],
              secondSortValue: data[Number(query.first) - 1]._id
            }) : undefined
          });
        }
      });
    });
  } catch (err) {
    throw new Error(err.message || 'Internal server error.');
  }
};

var find =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(query) {
    var filters, data, _data;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filters = [];

            if (!query.before) {
              _context.next = 8;
              break;
            }

            _context.next = 4;
            return NewsModel.find(filters.length > 0 ? {
              $and: filters
            } : {}).sort(_defineProperty({}, query.sortBy, 1)).where({
              _id: {
                $gt: query.before
              }
            }).limit(Number(query.first) + 1).exec();

          case 4:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data.length > Number(query.first) ? data.slice(0, Number(query.first) - 1).reverse() : _toConsumableArray(data).reverse(),
              before: data.length > Number(query.first) ? data[Number(query.first) - 1]._id : undefined,
              after: data[0]._id
            });

          case 8:
            _context.next = 10;
            return NewsModel.find(filters.length > 0 ? {
              $and: filters
            } : {}).sort(_defineProperty({}, query.sortBy, -1)).where({
              _id: {
                $lt: query.before
              }
            }).limit(Number(Number(query.first)) + 1).exec();

          case 10:
            _data = _context.sent;
            return _context.abrupt("return", {
              data: _data.length > Number(query.first) ? _data.slice(0, Number(query.first)) : _data,
              before: query.after ? _data[0]._id : undefined,
              after: _data.length > Number(query.first) ? _data[Number(query.first) - 1]._id : undefined
            });

          case 12:
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

var increaseView =
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
            return NewsModel.findOneAndUpdate({
              _id: id
            }, {
              $inc: {
                counterView: 1
              }
            }, {
              new: true
            }).exec();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function increaseView(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var findById =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(id) {
    var result;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return NewsModel.findById(id).populate('brand').populate('categoryId').populate('location').populate('model').populate('owner').populate('shop').populate('weightRange').populate('rentalPeriod').exec();

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function findById(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var create =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(payload) {
    var newNews, data;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            newNews = new NewsModel(payload);
            _context4.next = 3;
            return newNews.save();

          case 3:
            data = _context4.sent;
            return _context4.abrupt("return", data._id);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function create(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var update =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(payload) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // tslint:disable-next-line:no-console
            console.log(payload);
            _context5.next = 3;
            return NewsModel.findOneAndUpdate({
              _id: payload._id
            }, {
              $set: payload
            }, {
              new: true
            }).exec();

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function update(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var checkFollow =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(newsId, userId) {
    var data;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return NewsModel.findOne({
              $and: [{
                _id: newsId
              }, {
                followBy: userId
              }]
            }).exec();

          case 2:
            data = _context6.sent;
            return _context6.abrupt("return", data);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function checkFollow(_x6, _x7) {
    return _ref6.apply(this, arguments);
  };
}();

var follow =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(payload) {
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return NewsModel.findOneAndUpdate({
              _id: payload.id
            }, {
              $push: {
                followBy: payload.followerId
              },
              $inc: {
                counterFollow: 1
              }
            }, {
              new: true
            }).exec();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function follow(_x8) {
    return _ref7.apply(this, arguments);
  };
}();

var unfollow =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee8(payload) {
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return NewsModel.findOneAndUpdate({
              _id: payload.id
            }, {
              $pull: {
                followBy: payload.followerId
              },
              $inc: {
                counterFollow: -1
              }
            }, {
              new: true
            }).exec();

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function unfollow(_x9) {
    return _ref8.apply(this, arguments);
  };
}();

var findFollowByNews =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee9(query) {
    var filters;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            filters = [{
              followBy: query.id,
              newsType: query.newsType
            }];
            _context9.next = 3;
            return (0, _core.execCursorPaging)(NewsModel, filters, query.sortBy, Number(query.first), ['brand', 'categoryId', 'location', 'model', 'owner', 'shop'], query.before, query.after);

          case 3:
            return _context9.abrupt("return", _context9.sent);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function findFollowByNews(_x10) {
    return _ref9.apply(this, arguments);
  };
}();

var searchNewsHaveMostFollower =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee10(query) {
    var _$sort;

    var objectId, sortOrder, filters, sortFieldValue, secondSortValue, _sortFieldValue2, _secondSortValue2, queryMongo, data, result, _result;

    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            objectId = _mongoose.default.Types.ObjectId;
            sortOrder = query.before ? 1 : -1;
            filters = {};

            if (query.before) {
              sortFieldValue = query.before ? Number((0, _core.decodeBase64)(query.before).sortFieldValue) : '';
              secondSortValue = query.before ? objectId((0, _core.decodeBase64)(query.before).secondSortValue) : '';
              filters = {
                $or: [{
                  counterFollow: sortOrder === 1 ? {
                    $gt: sortFieldValue
                  } : {
                    $lt: sortFieldValue
                  }
                }, {
                  $and: [{
                    counterFollow: sortFieldValue
                  }, {
                    _id: sortOrder === 1 ? {
                      $gt: secondSortValue
                    } : {
                      $lt: secondSortValue
                    }
                  }]
                }]
              };
            } else if (query.after) {
              _sortFieldValue2 = query.after ? (0, _core.decodeBase64)(query.after).sortFieldValue : '';
              _secondSortValue2 = query.after ? objectId((0, _core.decodeBase64)(query.after).secondSortValue) : '';
              filters = {
                $or: [{
                  counterFollow: sortOrder === 1 ? {
                    $gt: _sortFieldValue2
                  } : {
                    $lt: _sortFieldValue2
                  }
                }, {
                  $and: [{
                    counterFollow: _sortFieldValue2
                  }, {
                    _id: sortOrder === 1 ? {
                      $gt: _secondSortValue2
                    } : {
                      $lt: _secondSortValue2
                    }
                  }]
                }]
              };
            } else if (query.shopId) {
              filters = {
                shop: objectId(query.shopId)
              };
            }

            queryMongo = [{
              $project: {
                _id: 1,
                isDeleted: 1,
                lastModifiedAt: 1,
                title: 1,
                imageUrls: 1,
                newsType: 1,
                state: 1,
                followBy: 1,
                counterFollow: 1,
                shop: 1,
                owner: 1,
                categoryId: 1,
                model: 1,
                brand: 1,
                location: 1,
                counterView: 1
              }
            }, {
              $sort: (_$sort = {}, _defineProperty(_$sort, query.sortBy, sortOrder), _defineProperty(_$sort, query.otherSortBy, sortOrder), _$sort)
            }, {
              $match: filters
            }, {
              $limit: Number(query.first) + 1
            }, {
              $lookup: {
                from: 'categories',
                localField: 'categoryId',
                foreignField: '_id',
                as: 'categoryId'
              }
            }, {
              $lookup: {
                from: 'brands',
                localField: 'brand',
                foreignField: '_id',
                as: 'brand'
              }
            }, {
              $lookup: {
                from: 'models',
                localField: 'model',
                foreignField: '_id',
                as: 'model'
              }
            }, {
              $lookup: {
                from: 'users',
                localField: 'owner',
                foreignField: '_id',
                as: 'owner'
              }
            }, {
              $lookup: {
                from: 'provinces',
                localField: 'location',
                foreignField: '_id',
                as: 'location'
              }
            }, {
              $unwind: '$categoryId'
            }, {
              $unwind: '$brand'
            }, {
              $unwind: '$model'
            }, {
              $unwind: '$owner'
            }, {
              $unwind: '$location'
            }];
            _context10.next = 7;
            return NewsModel.aggregate(queryMongo);

          case 7:
            data = _context10.sent;

            if (!query.before) {
              _context10.next = 13;
              break;
            }

            result = {
              data: data.length === Number(query.first) + 1 ? data.slice(0, Number(query.first)).reverse() : _toConsumableArray(data).reverse(),
              before: data.length === Number(query.first) + 1 ? (0, _core.encodeBase64)({
                sortFieldValue: data[Number(query.first) - 1]['counterFollow'],
                secondSortValue: data[Number(query.first) - 1]._id
              }) : undefined,
              after: (0, _core.encodeBase64)({
                sortFieldValue: data[0]['counterFollow'],
                secondSortValue: data[0]._id
              })
            };
            return _context10.abrupt("return", result);

          case 13:
            _result = {
              data: data.length === Number(query.first) + 1 ? data.slice(0, Number(query.first)) : data,
              before: query.after ? (0, _core.encodeBase64)({
                sortFieldValue: data[0]['counterFollow'],
                secondSortValue: data[0]._id
              }) : undefined,
              after: data.length === Number(query.first) + 1 ? (0, _core.encodeBase64)({
                sortFieldValue: data[Number(query.first) - 1]['counterFollow'],
                secondSortValue: data[Number(query.first) - 1]._id
              }) : undefined
            };
            return _context10.abrupt("return", _result);

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function searchNewsHaveMostFollower(_x11) {
    return _ref10.apply(this, arguments);
  };
}();

var getNewsByOwnerId =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11(query) {
    var filters, result;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            filters = [{
              status: query.status,
              owner: query.ownerId
            }];
            _context11.next = 3;
            return (0, _core.execCursorPaging)(NewsModel, filters, query.sortBy, Number(query.first), ['brand', 'categoryId', 'location', 'model', 'owner', 'shop'], query.before, query.after);

          case 3:
            result = _context11.sent;

            if (query.authUser) {
              _context11.next = 8;
              break;
            }

            return _context11.abrupt("return", _objectSpread({}, result, {
              data: result.data.map(function (value) {
                return _objectSpread({}, value._doc, {
                  followBy: [],
                  isFollowing: false
                });
              })
            }));

          case 8:
            return _context11.abrupt("return", _objectSpread({}, result, {
              data: result.data.map(function (value) {
                if (value.followBy.indexOf(query.authUser.id) !== -1) {
                  return _objectSpread({}, value._doc, {
                    followBy: [],
                    isFollowing: true
                  });
                } else {
                  return _objectSpread({}, value._doc, {
                    followBy: [],
                    isFollowing: false
                  });
                }
              })
            }));

          case 9:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function getNewsByOwnerId(_x12) {
    return _ref11.apply(this, arguments);
  };
}();

var del =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee12(_id) {
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            throw new _core.NotImplementedError();

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function del(_x13) {
    return _ref12.apply(this, arguments);
  };
}();

var ensureIndexes =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee13() {
    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return NewsModel.ensureIndexes({
              brand: 1
            });

          case 2:
            _context13.next = 4;
            return NewsModel.ensureIndexes({
              brand: 1,
              categoryId: 1,
              model: 1
            });

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function ensureIndexes() {
    return _ref13.apply(this, arguments);
  };
}();

var findOne =
/*#__PURE__*/
function () {
  var _ref14 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee14(_query) {
    return _regenerator.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            throw new _core.NotImplementedError();

          case 1:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function findOne(_x14) {
    return _ref14.apply(this, arguments);
  };
}();

var count =
/*#__PURE__*/
function () {
  var _ref15 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee15() {
    return _regenerator.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            throw new _core.NotImplementedError();

          case 1:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function count() {
    return _ref15.apply(this, arguments);
  };
}();

var increaseFollowCount =
/*#__PURE__*/
function () {
  var _ref16 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee16(id) {
    return _regenerator.default.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return NewsModel.findByIdAndUpdate(id, {
              $inc: {
                counterFollow: 1
              }
            }).exec();

          case 2:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function increaseFollowCount(_x15) {
    return _ref16.apply(this, arguments);
  };
}();

var decreaseFollowCount =
/*#__PURE__*/
function () {
  var _ref17 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee17(id) {
    return _regenerator.default.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return NewsModel.findByIdAndUpdate(id, {
              $inc: {
                counterFollow: -1
              }
            }).exec();

          case 2:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function decreaseFollowCount(_x16) {
    return _ref17.apply(this, arguments);
  };
}();

var getStatisticsInfo =
/*#__PURE__*/
function () {
  var _ref18 = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee18(startDate, endDate) {
    var _ref19, _ref20, daysOfWeek, hoursOfDay, brands, categories, provinces;

    return _regenerator.default.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return Promise.all([NewsModel.aggregate([{
              $match: {
                createdDate: {
                  $gte: new Date(startDate),
                  $lte: new Date(endDate)
                }
              }
            }, {
              $project: {
                dayOfWeek: {
                  $dayOfWeek: {
                    date: '$createdDate',
                    timezone: '+07:00'
                  }
                }
              }
            }, {
              $group: {
                _id: '$dayOfWeek',
                totalNews: {
                  $sum: 1
                }
              }
            }]), NewsModel.aggregate([{
              $match: {
                createdDate: {
                  $gte: new Date(startDate),
                  $lte: new Date(endDate)
                }
              }
            }, {
              $project: {
                hourOfDay: {
                  $hour: {
                    date: '$createdDate',
                    timezone: '+07:00'
                  }
                }
              }
            }, {
              $group: {
                _id: '$hourOfDay',
                totalNews: {
                  $sum: 1
                }
              }
            }]), NewsModel.aggregate([{
              $match: {
                createdDate: {
                  $gte: new Date(startDate),
                  $lte: new Date(endDate)
                }
              }
            }, {
              $group: {
                _id: '$brand',
                totalNews: {
                  $sum: 1
                }
              }
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
                totalNews: 1,
                slug: '$brand.slug',
                name: '$brand.name',
                logoImage: '$brand.logoImage',
                createdAt: '$brand.createdAt'
              }
            }]), NewsModel.aggregate([{
              $match: {
                createdDate: {
                  $gte: new Date(startDate),
                  $lte: new Date(endDate)
                }
              }
            }, {
              $group: {
                _id: '$categoryId',
                totalNews: {
                  $sum: 1
                }
              }
            }, {
              $lookup: {
                from: 'categories',
                localField: '_id',
                foreignField: '_id',
                as: 'category'
              }
            }, {
              $unwind: '$category'
            }, {
              $project: {
                _id: 1,
                totalNews: 1,
                slug: '$category.slug',
                name: '$category.name',
                imageUrl: '$category.imageUrl',
                createdAt: '$category.createdAt'
              }
            }]), NewsModel.aggregate([{
              $match: {
                createdDate: {
                  $gte: new Date(startDate),
                  $lte: new Date(endDate)
                }
              }
            }, {
              $group: {
                _id: '$location',
                totalNews: {
                  $sum: 1
                }
              }
            }, {
              $lookup: {
                from: 'provinces',
                localField: '_id',
                foreignField: '_id',
                as: 'location'
              }
            }, {
              $unwind: '$location'
            }, {
              $project: {
                _id: 1,
                totalNews: 1,
                slug: '$location.slug',
                name: '$location.name',
                createdAt: '$location.createdAt'
              }
            }])]);

          case 2:
            _ref19 = _context18.sent;
            _ref20 = _slicedToArray(_ref19, 5);
            daysOfWeek = _ref20[0];
            hoursOfDay = _ref20[1];
            brands = _ref20[2];
            categories = _ref20[3];
            provinces = _ref20[4];
            return _context18.abrupt("return", {
              daysOfWeek: daysOfWeek,
              hoursOfDay: hoursOfDay,
              brands: brands,
              categories: categories,
              provinces: provinces
            });

          case 10:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function getStatisticsInfo(_x17, _x18) {
    return _ref18.apply(this, arguments);
  };
}();

var newsRepository = {
  getStatisticsInfo: getStatisticsInfo,
  find: find,
  findById: findById,
  create: create,
  update: update,
  follow: follow,
  unfollow: unfollow,
  searchNews: searchNews,
  findFollowByNews: findFollowByNews,
  del: del,
  ensureIndexes: ensureIndexes,
  findOne: findOne,
  count: count,
  checkFollow: checkFollow,
  searchNewsHaveMostFollower: searchNewsHaveMostFollower,
  getNewsByOwnerId: getNewsByOwnerId,
  increaseView: increaseView,
  increaseFollowCount: increaseFollowCount,
  decreaseFollowCount: decreaseFollowCount
};
exports.newsRepository = newsRepository;
//# sourceMappingURL=news.repository.js.map