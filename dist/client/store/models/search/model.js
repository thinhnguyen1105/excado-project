"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _core = require("@rematch/core");

var _services = require("../../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var searchModel = (0, _core.createModel)({
  state: {
    filters: {
      keyword: undefined,
      state: undefined,
      priceType: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      minWeight: undefined,
      maxWeight: undefined,
      newsType: undefined,
      owner: undefined,
      shop: undefined,
      location: undefined,
      type: undefined,
      brand: undefined,
      model: undefined,
      category: undefined
    },
    data: [],
    first: 16,
    sortBy: 'elasticsearchCreatedAt|desc',
    // fieldName|sortOrder
    before: undefined,
    after: undefined,
    statusNewsTypeSearch: 'SELL',
    statusTab: '1',
    isLoading: false,
    isLoadingDataSell: false,
    isLoadingDataBuy: false,
    isLoadingDataLease: false,
    isLoadingDataMostFollow: false,
    isLoadingDataNewMachine: false,
    dataTotal: {
      dataSell: {
        data: [],
        after: undefined,
        before: undefined
      },
      dataBuy: {
        data: [],
        before: undefined,
        after: undefined
      },
      dataLease: {
        data: [],
        before: undefined,
        after: undefined
      },
      dataMostFollow: {
        data: [],
        before: undefined,
        after: undefined
      },
      dataNewMachine: {
        data: [],
        before: undefined,
        after: undefined
      }
    }
  },
  reducers: {
    onFollowChangeOnSearchDetailScreenSuccess: function onFollowChangeOnSearchDetailScreenSuccess(state, payload) {
      if (payload.starStatus === 'filled') {
        return _objectSpread({}, state, {
          data: state.data.map(function (value) {
            if (value._id === payload.newsId) {
              return _objectSpread({}, value, {
                isFollowing: false
              });
            } else {
              return value;
            }
          })
        });
      } else {
        return _objectSpread({}, state, {
          data: state.data.map(function (value) {
            if (value._id === payload.newsId) {
              return _objectSpread({}, value, {
                isFollowing: true
              });
            } else {
              return value;
            }
          })
        });
      }
    },
    onFollowChangeMostFollowNewsSuccess: function onFollowChangeMostFollowNewsSuccess(state, payload) {
      if (payload.starStatus === 'filled') {
        return _objectSpread({}, state, {
          dataTotal: _objectSpread({}, state.dataTotal, {
            dataMostFollow: _objectSpread({}, state.dataTotal.dataMostFollow, {
              data: state.dataTotal.dataMostFollow.data.map(function (value) {
                if (value._id === payload.newsId) {
                  return _objectSpread({}, value, {
                    isFollowing: false
                  });
                } else {
                  return value;
                }
              })
            })
          })
        });
      } else {
        return _objectSpread({}, state, {
          dataTotal: _objectSpread({}, state.dataTotal, {
            dataMostFollow: _objectSpread({}, state.dataTotal.dataMostFollow, {
              data: state.dataTotal.dataMostFollow.data.map(function (value) {
                if (value._id === payload.newsId) {
                  return _objectSpread({}, value, {
                    isFollowing: true
                  });
                } else {
                  return value;
                }
              })
            })
          })
        });
      }
    },
    onFollowChangeOnHomeScreenSuccess: function onFollowChangeOnHomeScreenSuccess(state, payload) {
      if (payload.starStatus === 'filled') {
        switch (state.statusTab) {
          case '1':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataSell: _objectSpread({}, state.dataTotal.dataSell, {
                  data: state.dataTotal.dataSell.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: false
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          case '2':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataBuy: _objectSpread({}, state.dataTotal.dataBuy, {
                  data: state.dataTotal.dataBuy.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: false
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          case '3':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataLease: _objectSpread({}, state.dataTotal.dataLease, {
                  data: state.dataTotal.dataLease.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: false
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          default:
            return _objectSpread({}, state);
        }
      } else {
        switch (state.statusTab) {
          case '1':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataSell: _objectSpread({}, state.dataTotal.dataSell, {
                  data: state.dataTotal.dataSell.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: true
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          case '2':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataBuy: _objectSpread({}, state.dataTotal.dataBuy, {
                  data: state.dataTotal.dataBuy.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: true
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          case '3':
            return _objectSpread({}, state, {
              dataTotal: _objectSpread({}, state.dataTotal, {
                dataLease: _objectSpread({}, state.dataTotal.dataLease, {
                  data: state.dataTotal.dataLease.data.map(function (value) {
                    if (value._id === payload.newsId) {
                      return _objectSpread({}, value, {
                        isFollowing: true
                      });
                    } else {
                      return value;
                    }
                  })
                })
              })
            });

          default:
            return _objectSpread({}, state);
        }
      }
    },
    activeLoading: function activeLoading(state, payload) {
      return _objectSpread({}, state, payload);
    },
    updateFilters: function updateFilters(state, payload) {
      return _objectSpread({}, state, {
        filters: _objectSpread({}, state.filters, payload)
      });
    },
    changeTabsOnHomePage: function changeTabsOnHomePage(state, payload) {
      return _objectSpread({}, state, {
        statusTab: payload
      });
    },
    changeStatusNewsTypeSearch: function changeStatusNewsTypeSearch(state, payload) {
      return _objectSpread({}, state, {
        statusNewsTypeSearch: payload
      });
    },
    updateSort: function updateSort(state, payload) {
      return _objectSpread({}, state, {
        sortBy: payload.sortBy
      });
    },
    getDataSuccess: function getDataSuccess(state, payload) {
      return _objectSpread({}, state, {
        data: payload.data,
        before: payload.before,
        after: payload.after,
        isLoading: false
      });
    },
    getDataInTabsSuccess: function getDataInTabsSuccess(state, payload) {
      switch (payload.newsType) {
        case 'SELL':
          return _objectSpread({}, state, {
            dataTotal: _objectSpread({}, state.dataTotal, {
              dataSell: payload.result
            }),
            isLoadingDataSell: false
          });
          break;

        case 'BUY':
          return _objectSpread({}, state, {
            dataTotal: _objectSpread({}, state.dataTotal, {
              dataBuy: payload.result
            }),
            isLoadingDataBuy: false
          });
          break;

        case 'LEASE':
          return _objectSpread({}, state, {
            dataTotal: _objectSpread({}, state.dataTotal, {
              dataLease: payload.result
            }),
            isLoadingDataLease: false
          });
          break;

        default:
          return _objectSpread({}, state);
      }
    },
    getDataMostFollowSuccess: function getDataMostFollowSuccess(state, payload) {
      return _objectSpread({}, state, {
        dataTotal: _objectSpread({}, state.dataTotal, {
          dataMostFollow: payload
        }),
        isLoadingDataMostFollow: false
      });
    },
    getDataNewMachineSuccess: function getDataNewMachineSuccess(state, payload) {
      return _objectSpread({}, state, {
        dataTotal: _objectSpread({}, state.dataTotal, {
          dataNewMachine: payload
        }),
        isLoadingDataNewMachine: false
      });
    }
  },
  effects: {
    handleFiltersChange: function () {
      var _handleFiltersChange = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(payload, rootState) {
        var searchState, newFilters, serviceProxy, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                searchState = rootState.searchModel;
                newFilters = {
                  keyword: payload.keyword || searchState.filters.keyword,
                  state: typeof payload.state === 'string' ? payload.state : searchState.filters.state,
                  priceType: typeof payload.priceType === 'string' ? payload.priceType : searchState.filters.priceType,
                  minPrice: typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : searchState.filters.minPrice,
                  maxPrice: typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : searchState.filters.maxPrice,
                  weightRange: typeof payload.weightRange === 'string' ? payload.weightRange : searchState.filters.weightRange,
                  newsType: typeof payload.newsType === 'string' ? payload.newsType : searchState.filters.newsType,
                  category: typeof payload.category === 'string' ? payload.category : searchState.filters.category,
                  searchState: payload.owner || searchState.filters.owner,
                  shop: payload.shop || searchState.filters.shop,
                  location: typeof payload.location === 'string' ? payload.location : searchState.filters.location,
                  type: typeof payload.type === 'string' ? payload.type : searchState.filters.type,
                  brand: typeof payload.brand === 'string' ? payload.brand : searchState.filters.brand,
                  model: typeof payload.model === 'string' ? payload.model : searchState.filters.model
                };
                this.updateFilters(newFilters);
                serviceProxy = (0, _services.getServiceProxy)();
                _context.next = 7;
                return serviceProxy.searchElasticsearch(payload.keyword || searchState.filters.keyword, typeof payload.state === 'string' ? payload.state : searchState.filters.state, typeof payload.state === 'string' ? payload.priceType : searchState.filters.priceType, typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : searchState.filters.minPrice, typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : searchState.filters.maxPrice, typeof payload.weightRange === 'string' ? payload.weightRange : searchState.filters.weightRange, undefined, typeof payload.newsType === 'string' ? payload.newsType : searchState.filters.newsType, typeof payload.category === 'string' ? payload.category : searchState.filters.category, payload.owner || searchState.filters.owner, payload.shop || searchState.filters.shop, typeof payload.location === 'string' ? payload.location : searchState.filters.location, typeof payload.type === 'string' ? payload.type : searchState.filters.type, typeof payload.brand === 'string' ? payload.brand : searchState.filters.brand, typeof payload.model === 'string' ? payload.model : searchState.filters.model, searchState.first, searchState.sortBy, undefined, undefined);

              case 7:
                result = _context.sent;
                this.getDataSuccess(result);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context.t0); // message.error(JSON.parse(error.response).message);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function handleFiltersChange(_x, _x2) {
        return _handleFiltersChange.apply(this, arguments);
      }

      return handleFiltersChange;
    }(),
    handleSortChange: function () {
      var _handleSortChange = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(payload, rootState) {
        var searchState, serviceProxy, result;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.updateSort(payload);
                searchState = rootState.searchModel;
                serviceProxy = (0, _services.getServiceProxy)();
                _context2.next = 6;
                return serviceProxy.searchElasticsearch(searchState.filters.keyword, searchState.filters.state, searchState.filters.priceType, searchState.filters.minPrice, searchState.filters.maxPrice, searchState.filters.weightRange, undefined, searchState.filters.newsType, searchState.filters.category, searchState.filters.owner, searchState.filters.shop, searchState.filters.location, searchState.filters.type, searchState.filters.brand, searchState.filters.model, searchState.first, payload.sortBy, undefined, undefined);

              case 6:
                result = _context2.sent;
                this.getDataSuccess(result);
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context2.t0); // message.error(JSON.parse(error.response).message);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function handleSortChange(_x3, _x4) {
        return _handleSortChange.apply(this, arguments);
      }

      return handleSortChange;
    }(),
    getNextPage: function () {
      var _getNextPage = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(_payload, rootState) {
        var searchState, serviceProxy, result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                searchState = rootState.searchModel;
                serviceProxy = (0, _services.getServiceProxy)();
                _context3.next = 5;
                return serviceProxy.searchElasticsearch(searchState.filters.keyword, searchState.filters.state, searchState.filters.priceType, searchState.filters.minPrice, searchState.filters.maxPrice, searchState.filters.weightRange, undefined, searchState.filters.newsType, searchState.filters.category, searchState.filters.owner, searchState.filters.shop, searchState.filters.location, searchState.filters.type, searchState.filters.brand, searchState.filters.model, searchState.first, searchState.sortBy, undefined, searchState.after);

              case 5:
                result = _context3.sent;
                this.getDataSuccess(result);
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context3.t0); // message.error(JSON.parse(error.response).message);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function getNextPage(_x5, _x6) {
        return _getNextPage.apply(this, arguments);
      }

      return getNextPage;
    }(),
    getPrevPage: function () {
      var _getPrevPage = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(_payload, rootState) {
        var searchState, serviceProxy, result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                searchState = rootState.searchModel;
                serviceProxy = (0, _services.getServiceProxy)();
                _context4.next = 5;
                return serviceProxy.searchElasticsearch(searchState.filters.keyword, searchState.filters.state, searchState.filters.priceType, searchState.filters.minPrice, searchState.filters.maxPrice, searchState.filters.weightRange, undefined, searchState.filters.newsType, searchState.filters.category, searchState.filters.owner, searchState.filters.shop, searchState.filters.location, searchState.filters.type, searchState.filters.brand, searchState.filters.model, searchState.first, searchState.sortBy, searchState.before, undefined);

              case 5:
                result = _context4.sent;
                this.getDataSuccess(result);
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                // tslint:disable-next-line:no-console
                console.log(_context4.t0); // message.error(JSON.parse(error.response).message);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      function getPrevPage(_x7, _x8) {
        return _getPrevPage.apply(this, arguments);
      }

      return getPrevPage;
    }()
  }
});
var _default = searchModel;
exports.default = _default;
//# sourceMappingURL=model.js.map