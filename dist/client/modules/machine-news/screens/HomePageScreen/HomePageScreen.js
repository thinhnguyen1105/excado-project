"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var React = _interopRequireWildcard(require("react"));

var _DetailsHomePage = _interopRequireDefault(require("./components/DetailsHomePage"));

var _components = require("../../../../components");

var _HomePageScreenDbTest = require("./HomePageScreenDbTest");

var _Footer = _interopRequireDefault(require("../../../../components/CommonLayout/Footer"));

var _services = require("../../../../services");

var jsCookie = _interopRequireWildcard(require("js-cookie"));

var _reactDeviceDetect = require("react-device-detect");

require("./HomePageScreen.less");

var _CurrentTime = _interopRequireDefault(require("../../../../components/CommonLayout/CurrentTime"));

var _i18n = require("../../../../i18n");

var _head = _interopRequireDefault(require("next/head"));

var _config = require("../../../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HomePageScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HomePageScreen, _React$Component);

  function HomePageScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HomePageScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HomePageScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      categories: [],
      provinces: [],
      commonKeywords: [],
      seeMoreTotalMachineClicked: false,
      seeMoreClicked: false,
      resultSearchNewestPost: _this.props.resultSearchNewestPost,
      resultSuggestForToday: {
        data: [],
        before: '',
        after: ''
      },
      newsDataNearestMachine: {
        data: []
      },
      isLoadingNearestMachine: false,
      recentViewed: {
        data: [],
        before: undefined,
        after: undefined,
        first: 4,
        sortBy: "lastModifiedAt|desc"
      },
      isLoadingRecentViewed: false
    });

    _defineProperty(_assertThisInitialized(_this), "getCategories",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var serviceProxy, categories;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context.next = 4;
              return serviceProxy.findCategories();

            case 4:
              categories = _context.sent;

              _this.setState({
                categories: categories.data
              });

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getProvinces",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var serviceProxy, provinces;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context2.next = 4;
              return serviceProxy.findProvinces();

            case 4:
              provinces = _context2.sent;

              _this.setState({
                provinces: provinces.data
              });

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getCommonKeywords",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var serviceProxy, commonKeywords;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context3.next = 4;
              return serviceProxy.getCommonKeywords(20, 'count|desc', undefined, undefined);

            case 4:
              commonKeywords = _context3.sent;

              _this.setState({
                commonKeywords: commonKeywords.data
              });

              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getResultSuggestForToday",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var pageSizeSuggestForToday, serviceProxy, resultSuggestForToday;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              pageSizeSuggestForToday = 20;
              serviceProxy = (0, _services.getServiceProxy)();
              _context4.next = 5;
              return serviceProxy.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'SELL', undefined, undefined, undefined, undefined, undefined, undefined, undefined, pageSizeSuggestForToday, 'elasticsearchCreatedAt|desc', undefined, undefined);

            case 5:
              resultSuggestForToday = _context4.sent;

              _this.setState({
                resultSuggestForToday: {
                  data: resultSuggestForToday.data,
                  before: resultSuggestForToday.before,
                  after: resultSuggestForToday.after
                }
              });

              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context4.t0);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getMostFollowNews",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5() {
      var pageSizeNewsMostFollow, serviceProxy, resultNewsMostFollow;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              pageSizeNewsMostFollow = _reactDeviceDetect.isMobile ? 2 : 4;
              serviceProxy = (0, _services.getServiceProxy)();
              _context5.next = 5;
              return serviceProxy.searchNewsMostFollow(undefined, pageSizeNewsMostFollow, 'counterFollow', '_id', undefined, undefined);

            case 5:
              resultNewsMostFollow = _context5.sent;

              _this.props.searchReducers.getDataMostFollowSuccess(resultNewsMostFollow);

              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context5.t0);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getRecentViewedData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6() {
      var idToken, serviceProxies, recentViewedResult;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              idToken = jsCookie.get('token');
              serviceProxies = (0, _services.getServiceProxy)(idToken);
              _context6.next = 4;
              return serviceProxies.getRecentViewed(_this.state.recentViewed.first, _this.state.recentViewed.sortBy, undefined, undefined);

            case 4:
              recentViewedResult = _context6.sent;

              _this.setState({
                recentViewed: _objectSpread({}, _this.state.recentViewed, {
                  data: recentViewedResult.data,
                  before: recentViewedResult.before,
                  after: recentViewedResult.after
                })
              });

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));

    _defineProperty(_assertThisInitialized(_this), "getRecentViewedNextPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7() {
      var serviceProxies, recentViewedResult;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this.setState({
                isLoadingRecentViewed: true
              });

              _context7.prev = 1;
              serviceProxies = (0, _services.getServiceProxy)();
              _context7.next = 5;
              return serviceProxies.getRecentViewed(_this.state.recentViewed.first, _this.state.recentViewed.sortBy, undefined, _this.state.recentViewed.after);

            case 5:
              recentViewedResult = _context7.sent;

              _this.setState({
                recentViewed: _objectSpread({}, _this.state.recentViewed, {
                  data: recentViewedResult.data,
                  before: recentViewedResult.before,
                  after: recentViewedResult.after
                }),
                isLoadingRecentViewed: false
              });

              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](1);

              _message2.default.error(_context7.t0.message || JSON.parse(_context7.t0.response).message);

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getRecentViewedPrevPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8() {
      var serviceProxies, recentViewedResult;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _this.setState({
                isLoadingRecentViewed: true
              });

              _context8.prev = 1;
              serviceProxies = (0, _services.getServiceProxy)();
              _context8.next = 5;
              return serviceProxies.getRecentViewed(_this.state.recentViewed.first, _this.state.recentViewed.sortBy, _this.state.recentViewed.before, undefined);

            case 5:
              recentViewedResult = _context8.sent;

              _this.setState({
                recentViewed: _objectSpread({}, _this.state.recentViewed, {
                  data: recentViewedResult.data,
                  before: recentViewedResult.before,
                  after: recentViewedResult.after
                }),
                isLoadingRecentViewed: false
              });

              _context8.next = 12;
              break;

            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](1);

              _message2.default.error(_context8.t0.message || JSON.parse(_context8.t0.response).message);

            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[1, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "changeSuggestForTodayFollowStatus",
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(starStatus, id) {
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context9.next = 12;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context9.next = 7;
                  break;
                }

                _context9.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _this.setState({
                  resultSuggestForToday: _objectSpread({}, _this.state.resultSuggestForToday, {
                    data: _this.state.resultSuggestForToday.data.map(function (value) {
                      if (value._id === id) {
                        return _objectSpread({}, value, {
                          isFollowing: false
                        });
                      } else {
                        return value;
                      }
                    })
                  })
                });

                _context9.next = 10;
                break;

              case 7:
                _context9.next = 9;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 9:
                _this.setState({
                  resultSuggestForToday: _objectSpread({}, _this.state.resultSuggestForToday, {
                    data: _this.state.resultSuggestForToday.data.map(function (value) {
                      if (value._id === id) {
                        return _objectSpread({}, value, {
                          isFollowing: true
                        });
                      } else {
                        return value;
                      }
                    })
                  })
                });

              case 10:
                _context9.next = 15;
                break;

              case 12:
                _context9.next = 14;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 14:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x, _x2) {
        return _ref9.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "changeRecentViewedFollowStatus",
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(starStatus, id) {
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context10.next = 12;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context10.next = 7;
                  break;
                }

                _context10.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _this.setState({
                  recentViewed: _objectSpread({}, _this.state.recentViewed, {
                    data: _this.state.recentViewed.data.map(function (value) {
                      if (value.news._id === id) {
                        return _objectSpread({}, value, {
                          news: _objectSpread({}, value.news, {
                            isFollowing: false
                          })
                        });
                      } else {
                        return value;
                      }
                    })
                  })
                });

                _context10.next = 10;
                break;

              case 7:
                _context10.next = 9;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 9:
                _this.setState({
                  recentViewed: _objectSpread({}, _this.state.recentViewed, {
                    data: _this.state.recentViewed.data.map(function (value) {
                      if (value.news._id === id) {
                        return _objectSpread({}, value, {
                          news: _objectSpread({}, value.news, {
                            isFollowing: true
                          })
                        });
                      } else {
                        return value;
                      }
                    })
                  })
                });

              case 10:
                _context10.next = 15;
                break;

              case 12:
                _context10.next = 14;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 14:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 15:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x3, _x4) {
        return _ref10.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onSeeMoreCityListButtonClick", function () {
      _this.setState({
        seeMoreClicked: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchDataDynamic",
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(newsType, otherNewsType, before, after, location) {
        var pageSize, serviceProxy, result;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                pageSize = _reactDeviceDetect.isMobile ? 4 : 8;
                serviceProxy = (0, _services.getServiceProxy)();
                _context11.next = 4;
                return serviceProxy.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, otherNewsType, newsType, undefined, undefined, undefined, location, undefined, undefined, undefined, pageSize, 'elasticsearchCreatedAt|desc', before, after);

              case 4:
                result = _context11.sent;
                return _context11.abrupt("return", result);

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x5, _x6, _x7, _x8, _x9) {
        return _ref11.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getDataMostFollow",
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(before, after) {
        var pageSize, sortBy, otherSortBy, serviceProxy, result;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                pageSize = _reactDeviceDetect.isMobile ? 2 : 4;
                sortBy = 'counterFollow';
                otherSortBy = '_id';
                serviceProxy = (0, _services.getServiceProxy)();
                _context12.next = 6;
                return serviceProxy.searchNewsMostFollow(undefined, pageSize, sortBy, otherSortBy, before, after);

              case 6:
                result = _context12.sent;
                return _context12.abrupt("return", result);

              case 8:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x10, _x11) {
        return _ref12.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getDataInTabs",
    /*#__PURE__*/
    function () {
      var _ref13 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(activeTab, newsType, otherNewsType, dataLength, objectLoading) {
        var result;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _this.props.searchReducers.changeTabsOnHomePage(activeTab);

                _this.props.searchReducers.changeStatusNewsTypeSearch(newsType);

                if (!(dataLength === 0)) {
                  _context13.next = 8;
                  break;
                }

                _this.props.searchReducers.activeLoading(objectLoading);

                _context13.next = 6;
                return _this.fetchDataDynamic(newsType, otherNewsType, undefined, undefined, undefined);

              case 6:
                result = _context13.sent;

                _this.props.searchReducers.getDataInTabsSuccess({
                  result: result,
                  newsType: newsType
                });

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      return function (_x12, _x13, _x14, _x15, _x16) {
        return _ref13.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onChangeTabs",
    /*#__PURE__*/
    function () {
      var _ref14 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14(activeKeys) {
        var result;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.t0 = activeKeys;
                _context14.next = _context14.t0 === '1' ? 3 : _context14.t0 === '2' ? 5 : _context14.t0 === '3' ? 7 : _context14.t0 === '4' ? 9 : 16;
                break;

              case 3:
                _this.getDataInTabs('1', 'SELL', undefined, _this.props.searchState.dataTotal.dataSell.data.length, {
                  isLoadingDataSell: true
                });

                return _context14.abrupt("break", 16);

              case 5:
                _this.getDataInTabs('2', 'BUY', 'RENT', _this.props.searchState.dataTotal.dataBuy.data.length, {
                  isLoadingDataBuy: true
                });

                return _context14.abrupt("break", 16);

              case 7:
                _this.getDataInTabs('3', 'LEASE', undefined, _this.props.searchState.dataTotal.dataLease.data.length, {
                  isLoadingDataLease: true
                });

                return _context14.abrupt("break", 16);

              case 9:
                if (!(_this.props.profileData && _this.props.profileData.province)) {
                  _context14.next = 16;
                  break;
                }

                _this.setState({
                  isLoadingNearestMachine: true
                });

                _this.props.searchReducers.changeStatusNewsTypeSearch('NEAREST');

                _context14.next = 14;
                return _this.fetchDataDynamic(undefined, undefined, undefined, undefined, _this.props.profileData.province);

              case 14:
                result = _context14.sent;

                _this.setState({
                  newsDataNearestMachine: result,
                  isLoadingNearestMachine: false
                });

              case 16:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x17) {
        return _ref14.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getDataForButton",
    /*#__PURE__*/
    function () {
      var _ref15 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee15(beforeInData, afterInData, objectLoading, tab, otherNewsType) {
        var result;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(beforeInData !== undefined || afterInData !== undefined)) {
                  _context15.next = 6;
                  break;
                }

                _this.props.searchReducers.activeLoading(objectLoading);

                _context15.next = 4;
                return _this.fetchDataDynamic(tab, otherNewsType, beforeInData, afterInData, undefined);

              case 4:
                result = _context15.sent;

                _this.props.searchReducers.getDataInTabsSuccess({
                  result: result,
                  newsType: _this.props.searchState.statusNewsTypeSearch
                });

              case 6:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      return function (_x18, _x19, _x20, _x21, _x22) {
        return _ref15.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onClickButtonLeft",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee16() {
      var before, result;
      return _regenerator.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.t0 = _this.props.searchState.statusNewsTypeSearch;
              _context16.next = _context16.t0 === 'SELL' ? 3 : _context16.t0 === 'BUY' ? 5 : _context16.t0 === 'LEASE' ? 7 : _context16.t0 === 'NEAREST' ? 9 : 17;
              break;

            case 3:
              _this.getDataForButton(_this.props.searchState.dataTotal.dataSell.before, undefined, {
                isLoadingDataSell: true
              }, 'SELL', undefined);

              return _context16.abrupt("break", 17);

            case 5:
              _this.getDataForButton(_this.props.searchState.dataTotal.dataBuy.before, undefined, {
                isLoadingDataBuy: true
              }, 'BUY', 'RENT');

              return _context16.abrupt("break", 17);

            case 7:
              _this.getDataForButton(_this.props.searchState.dataTotal.dataLease.before, undefined, {
                isLoadingDataLease: true
              }, 'LEASE', undefined);

              return _context16.abrupt("break", 17);

            case 9:
              _this.setState({
                isLoadingNearestMachine: true
              });

              before = _this.state.newsDataNearestMachine.before;

              if (!before) {
                _context16.next = 16;
                break;
              }

              _context16.next = 14;
              return _this.fetchDataDynamic(undefined, undefined, before, undefined, _this.props.profileState.authUser.province);

            case 14:
              result = _context16.sent;

              _this.setState({
                isLoadingNearestMachine: false,
                newsDataNearestMachine: result
              });

            case 16:
              return _context16.abrupt("break", 17);

            case 17:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    })));

    _defineProperty(_assertThisInitialized(_this), "onClickButtonRight",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee17() {
      var after, result;
      return _regenerator.default.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.t0 = _this.props.searchState.statusNewsTypeSearch;
              _context17.next = _context17.t0 === 'SELL' ? 3 : _context17.t0 === 'BUY' ? 5 : _context17.t0 === 'LEASE' ? 7 : _context17.t0 === 'NEAREST' ? 9 : 17;
              break;

            case 3:
              _this.getDataForButton(undefined, _this.props.searchState.dataTotal.dataSell.after, {
                isLoadingDataSell: true
              }, 'SELL', undefined);

              return _context17.abrupt("break", 17);

            case 5:
              _this.getDataForButton(undefined, _this.props.searchState.dataTotal.dataBuy.after, {
                isLoadingDataBuy: true
              }, 'BUY', 'RENT');

              return _context17.abrupt("break", 17);

            case 7:
              _this.getDataForButton(undefined, _this.props.searchState.dataTotal.dataLease.after, {
                isLoadingDataLease: true
              }, 'LEASE', undefined);

              return _context17.abrupt("break", 17);

            case 9:
              _this.setState({
                isLoadingNearestMachine: true
              });

              after = _this.state.newsDataNearestMachine.after;

              if (!after) {
                _context17.next = 16;
                break;
              }

              _context17.next = 14;
              return _this.fetchDataDynamic(undefined, undefined, undefined, after, _this.props.profileState.authUser.province);

            case 14:
              result = _context17.sent;

              _this.setState({
                isLoadingNearestMachine: false,
                newsDataNearestMachine: result
              });

            case 16:
              return _context17.abrupt("break", 17);

            case 17:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    })));

    _defineProperty(_assertThisInitialized(_this), "onClickButtonRightMostFollow",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee18() {
      var afterDataMostFollow, result;
      return _regenerator.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _this.props.searchReducers.activeLoading({
                isLoadingDataMostFollow: true
              });

              afterDataMostFollow = _this.props.searchState.dataTotal.dataMostFollow.after;

              if (!(afterDataMostFollow !== undefined)) {
                _context18.next = 7;
                break;
              }

              _context18.next = 5;
              return _this.getDataMostFollow(undefined, afterDataMostFollow);

            case 5:
              result = _context18.sent;

              _this.props.searchReducers.getDataMostFollowSuccess(result);

            case 7:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    })));

    _defineProperty(_assertThisInitialized(_this), "onClickButtonLeftMostFollow",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee19() {
      var beforeDataMostFollow, result;
      return _regenerator.default.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _this.props.searchReducers.activeLoading({
                isLoadingDataMostFollow: true
              });

              beforeDataMostFollow = _this.props.searchState.dataTotal.dataMostFollow.before;

              if (!(beforeDataMostFollow !== undefined)) {
                _context19.next = 7;
                break;
              }

              _context19.next = 5;
              return _this.getDataMostFollow(beforeDataMostFollow, undefined);

            case 5:
              result = _context19.sent;

              _this.props.searchReducers.getDataMostFollowSuccess(result);

            case 7:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    })));

    _defineProperty(_assertThisInitialized(_this), "changeFollowStatus",
    /*#__PURE__*/
    function () {
      var _ref20 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee20(starStatus, id) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context20.next = 12;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context20.next = 7;
                  break;
                }

                _context20.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _this.props.searchReducers.onFollowChangeOnHomeScreenSuccess({
                  starStatus: starStatus,
                  newsId: id
                });

                _context20.next = 10;
                break;

              case 7:
                _context20.next = 9;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 9:
                _this.props.searchReducers.onFollowChangeOnHomeScreenSuccess({
                  starStatus: starStatus,
                  newsId: id
                });

              case 10:
                _context20.next = 15;
                break;

              case 12:
                _context20.next = 14;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 14:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 15:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      return function (_x23, _x24) {
        return _ref20.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "changeMostFollowNewsFollowStatus",
    /*#__PURE__*/
    function () {
      var _ref21 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee21(starStatus, id) {
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context21.next = 12;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context21.next = 7;
                  break;
                }

                _context21.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _this.props.searchReducers.onFollowChangeMostFollowNewsSuccess({
                  starStatus: starStatus,
                  newsId: id
                });

                _context21.next = 10;
                break;

              case 7:
                _context21.next = 9;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 9:
                _this.props.searchReducers.onFollowChangeMostFollowNewsSuccess({
                  starStatus: starStatus,
                  newsId: id
                });

              case 10:
                _context21.next = 15;
                break;

              case 12:
                _context21.next = 14;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 14:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 15:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));

      return function (_x25, _x26) {
        return _ref21.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "isShowButton", function (value) {
      return value !== undefined ? false : true;
    });

    _defineProperty(_assertThisInitialized(_this), "onSeeMoreTotalMachineClick", function () {
      _this.setState({
        seeMoreTotalMachineClicked: !_this.state.seeMoreTotalMachineClicked
      });
    });

    return _this;
  }

  _createClass(HomePageScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCategories();
      this.getProvinces();
      this.getCommonKeywords();
      this.getResultSuggestForToday();
      this.getMostFollowNews();
      this.getRecentViewedData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isShowButtonRight = function isShowButtonRight() {
        var statusTab = _this2.props.searchState.statusNewsTypeSearch;

        switch (statusTab) {
          case 'SELL':
            return _this2.isShowButton(_this2.props.searchState.dataTotal.dataSell.after);
            break;

          case 'BUY':
            return _this2.isShowButton(_this2.props.searchState.dataTotal.dataBuy.after);
            break;

          case 'LEASE':
            return _this2.isShowButton(_this2.props.searchState.dataTotal.dataLease.after);
            break;

          case 'NEAREST':
            return _this2.isShowButton(_this2.state.newsDataNearestMachine.after);
            break;

          default:
            return null;
        }
      };

      var isShowButtonLeft = function isShowButtonLeft() {
        var statusTab = _this2.props.searchState.statusNewsTypeSearch;

        switch (statusTab) {
          case 'SELL':
            return _this2.isShowButton(_this2.props.searchState.dataTotal.dataSell.before);
            break;

          case 'BUY':
            return _this2.isShowButton(_this2.props.searchState.dataTotal.dataBuy.before);
            break;

          case 'LEASE':
            return _this2.isShowButton(_this2.props.searchState.dataTotal.dataLease.before);
            break;

          case 'NEAREST':
            return _this2.isShowButton(_this2.state.newsDataNearestMachine.before);
            break;

          default:
            return null;
        }
      };

      return React.createElement("div", {
        className: "home-page-screen"
      }, React.createElement(_head.default, null, React.createElement("title", null, "Ch\u1EE3 m\xE1y c\xF4ng tr\xECnh | timmay.vn"), React.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), React.createElement("meta", {
        property: "description",
        content: "Ch\u1EE3 m\xE1y c\xF4ng tr\xECnh"
      }), React.createElement("meta", {
        property: "og:url",
        content: _config.config.url.main
      }), React.createElement("meta", {
        property: "og:type",
        content: "website"
      }), React.createElement("meta", {
        property: "og:title",
        content: "Ch\u1EE3 m\xE1y c\xF4ng tr\xECnh | timmay.vn"
      }), React.createElement("meta", {
        property: "og:description",
        content: "Ch\u1EE3 m\xE1y c\xF4ng tr\xECnh"
      }), React.createElement("meta", {
        property: "og:image:url",
        content: '/static/images/logo-timmay.png'
      }), React.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), React.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), React.createElement(_CurrentTime.default, null), React.createElement(_components.Header, {
        commonKeywords: this.state.commonKeywords,
        searchKeyword: this.props.searchKeyword,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        updateFilters: this.props.searchReducers.updateFilters
      }), React.createElement(_components.MainContent, {
        hasSideBar: true,
        hasMenuItems: true,
        topBrands: this.props.topBrands,
        hasBrandList: true
      }, React.createElement(_DetailsHomePage.default, {
        commonKeywords: this.state.commonKeywords,
        recentViewedData: this.state.recentViewed.data,
        isLoadingRecentViewed: this.state.isLoadingRecentViewed,
        getRecentViewedNextPage: this.getRecentViewedNextPage,
        getRecentViewedPrevPage: this.getRecentViewedPrevPage,
        hasRecentViewedNextPage: !Boolean(this.state.recentViewed.after),
        hasRecentViewedPrevPage: !Boolean(this.state.recentViewed.before),
        categories: this.state.categories,
        profileState: this.props.profileState,
        profileData: this.props.profileData,
        profileReducers: this.props.profileReducers,
        popularMachine: _HomePageScreenDbTest.popularMachine,
        provinces: this.state.provinces,
        seeMoreClicked: this.state.seeMoreClicked,
        onSeeMoreCityListButtonClick: this.onSeeMoreCityListButtonClick,
        resultSuggestForToday: this.state.resultSuggestForToday,
        changeFollowStatus: this.changeFollowStatus,
        onChangeTabs: this.onChangeTabs,
        searchState: this.props.searchState,
        buttonLeft: this.onClickButtonLeft,
        buttonRight: this.onClickButtonRight,
        disabledButtonLeft: isShowButtonLeft(),
        disabledButtonRight: isShowButtonRight(),
        buttonLeftMostFollow: this.onClickButtonLeftMostFollow,
        buttonRightMostFollow: this.onClickButtonRightMostFollow,
        disabledButtonLeftMostFollow: this.isShowButton(this.props.searchState.dataTotal.dataMostFollow.before),
        disabledButtonRightMostFollow: this.isShowButton(this.props.searchState.dataTotal.dataMostFollow.after),
        changeMostFollowNewsFollowStatus: this.changeMostFollowNewsFollowStatus,
        changeRecentViewedFollowStatus: this.changeRecentViewedFollowStatus,
        changeSuggestForTodayFollowStatus: this.changeSuggestForTodayFollowStatus,
        isLoadingNearestMachine: this.state.isLoadingNearestMachine,
        newsDataNearestMachine: this.state.newsDataNearestMachine,
        seeMoreTotalMachineClicked: this.state.seeMoreTotalMachineClicked,
        onSeeMoreTotalMachineClick: this.onSeeMoreTotalMachineClick
      })), React.createElement(_Footer.default, null));
    }
  }]);

  return HomePageScreen;
}(React.Component);

var _default = (0, _i18n.withNamespaces)('index')(HomePageScreen);

exports.default = _default;
//# sourceMappingURL=HomePageScreen.js.map