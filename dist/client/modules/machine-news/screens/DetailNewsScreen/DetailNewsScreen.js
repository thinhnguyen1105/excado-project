"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _NavBarNext = _interopRequireDefault(require("./components/NavBarNext"));

var _DetailMachine = _interopRequireDefault(require("./components/DetailMachine"));

var _DetailUser = _interopRequireDefault(require("./components/DetailUser"));

var _CallMessButtonMobile = _interopRequireDefault(require("./components/CallMessButtonMobile"));

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _MachineDetailBox = _interopRequireDefault(require("../../../../components/MachineDetailBox/MachineDetailBox"));

require("./DetailNewsScreen.less");

var _services = require("../../../../services");

var jsCookies = _interopRequireWildcard(require("js-cookie"));

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

var DetailNewsScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailNewsScreen, _Component);

  function DetailNewsScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DetailNewsScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DetailNewsScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      newsData: _this.props.newsData,
      isLoadingDataSameSeller: false,
      newsDataSameOwner: {
        data: [],
        before: '',
        after: ''
      },
      newDataRelatedProducts: {
        data: [],
        before: '',
        after: ''
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getNewsDataSameOwner",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var serviceProxy, newsDataSameOwner;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context.next = 4;
              return serviceProxy.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _this.props.newsData.owner._id, undefined, undefined, undefined, undefined, undefined, 4, 'elasticsearchCreatedAt|desc', undefined, undefined);

            case 4:
              newsDataSameOwner = _context.sent;

              _this.setState({
                newsDataSameOwner: newsDataSameOwner
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

    _defineProperty(_assertThisInitialized(_this), "getNewDataRelatedProducts",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var pageSizeRelatedProduct, serviceProxy, newDataRelatedProducts;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              pageSizeRelatedProduct = 8;
              serviceProxy = (0, _services.getServiceProxy)();
              _context2.next = 5;
              return serviceProxy.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'SELL', undefined, undefined, undefined, undefined, undefined, undefined, undefined, pageSizeRelatedProduct, 'elasticsearchCreatedAt|desc', undefined, undefined);

            case 5:
              newDataRelatedProducts = _context2.sent;

              _this.setState({
                newDataRelatedProducts: newDataRelatedProducts
              });

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "changeFollowItemStatus",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(starStatus, id) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context3.next = 14;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _context3.next = 6;
                return _this.setState({
                  newsData: _objectSpread({}, _this.state.newsData, {
                    isFollowing: false,
                    counterFollow: _this.state.newsData.counterFollow - 1
                  })
                });

              case 6:
                _context3.next = 12;
                break;

              case 8:
                _context3.next = 10;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 10:
                _context3.next = 12;
                return _this.setState({
                  newsData: _objectSpread({}, _this.state.newsData, {
                    isFollowing: true,
                    counterFollow: _this.state.newsData.counterFollow + 1
                  })
                });

              case 12:
                _context3.next = 17;
                break;

              case 14:
                _context3.next = 16;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 16:
                _message2.default.warning(_this.props.t('detail-news:notification-login'));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "changeFollowUserStatus",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(starStatus, id) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context4.next = 14;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 4;
                return _this.props.followReducers.unfollowUser({
                  authId: _this.props.profileState.authUser.id,
                  userId: id
                });

              case 4:
                _context4.next = 6;
                return _this.setState({
                  newsData: _objectSpread({}, _this.state.newsData, {
                    owner: _objectSpread({}, _this.state.newsData.owner, {
                      isFollowing: false
                    })
                  })
                });

              case 6:
                _context4.next = 12;
                break;

              case 8:
                _context4.next = 10;
                return _this.props.followReducers.followUser({
                  authId: _this.props.profileState.authUser.id,
                  userId: id
                });

              case 10:
                _context4.next = 12;
                return _this.setState({
                  newsData: _objectSpread({}, _this.state.newsData, {
                    owner: _objectSpread({}, _this.state.newsData.owner, {
                      isFollowing: true
                    })
                  })
                });

              case 12:
                _context4.next = 17;
                break;

              case 14:
                _context4.next = 16;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 16:
                _message2.default.warning(_this.props.t('detail-news:notification-login'));

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "changeFollowShopStatus",
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(starStatus, id) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context5.next = 14;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 4;
                return _this.props.followReducers.unfollowShop({
                  authId: _this.props.profileState.authUser.id,
                  shopId: id
                });

              case 4:
                _context5.next = 6;
                return _this.setState({
                  newsData: _objectSpread({}, _this.state.newsData, {
                    shop: _objectSpread({}, _this.state.newsData.shop, {
                      isFollowing: false
                    })
                  })
                });

              case 6:
                _context5.next = 12;
                break;

              case 8:
                _context5.next = 10;
                return _this.props.followReducers.followShop({
                  authId: _this.props.profileState.authUser.id,
                  shopId: id
                });

              case 10:
                _context5.next = 12;
                return _this.setState({
                  newsData: _objectSpread({}, _this.state.newsData, {
                    shop: _objectSpread({}, _this.state.newsData.shop, {
                      isFollowing: true
                    })
                  })
                });

              case 12:
                _context5.next = 17;
                break;

              case 14:
                _context5.next = 16;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 16:
                _message2.default.warning(_this.props.t('detail-news:notification-login'));

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5, _x6) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "changeSameSellerNewsFollowStatus",
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(starStatus, id) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context6.next = 12;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _this.setState({
                  newsDataSameOwner: _objectSpread({}, _this.state.newsDataSameOwner, {
                    data: _this.state.newsDataSameOwner.data.map(function (value) {
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

                _context6.next = 10;
                break;

              case 7:
                _context6.next = 9;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 9:
                _this.setState({
                  newsDataSameOwner: _objectSpread({}, _this.state.newsDataSameOwner, {
                    data: _this.state.newsDataSameOwner.data.map(function (value) {
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
                _context6.next = 15;
                break;

              case 12:
                _context6.next = 14;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 14:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "showButtonLeft", function () {
      if (_this.state.newsDataSameOwner.before) {
        return false;
      } else {
        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showButtonRight", function () {
      if (_this.state.newsDataSameOwner.after) {
        return false;
      } else {
        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fetchDataDynamic",
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(ownerId, after, before) {
        var serviceProxies, resultData;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this.setState({
                  isLoadingDataSameSeller: true
                });

                serviceProxies = (0, _services.getServiceProxy)();
                _context7.next = 4;
                return serviceProxies.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ownerId, undefined, undefined, undefined, undefined, undefined, 4, 'elasticsearchCreatedAt|desc', before, after);

              case 4:
                resultData = _context7.sent;
                return _context7.abrupt("return", resultData);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x9, _x10, _x11) {
        return _ref7.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onCLickButtonLeft",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee8() {
      var newsData;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!_this.state.newsDataSameOwner.before) {
                _context8.next = 5;
                break;
              }

              _context8.next = 3;
              return _this.fetchDataDynamic(_this.state.newsData.owner._id, undefined, _this.state.newsDataSameOwner.before);

            case 3:
              newsData = _context8.sent;

              _this.setState({
                newsDataSameOwner: newsData,
                isLoadingDataSameSeller: false
              });

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));

    _defineProperty(_assertThisInitialized(_this), "onCLickButtonRight",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee9() {
      var newsData;
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!_this.state.newsDataSameOwner.after) {
                _context9.next = 5;
                break;
              }

              _context9.next = 3;
              return _this.fetchDataDynamic(_this.state.newsData.owner._id, _this.state.newsDataSameOwner.after, undefined);

            case 3:
              newsData = _context9.sent;

              _this.setState({
                newsDataSameOwner: newsData,
                isLoadingDataSameSeller: false
              });

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));

    return _this;
  }

  _createClass(DetailNewsScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNewsDataSameOwner();
      this.getNewDataRelatedProducts();
      var idToken = jsCookies.get('token');
      var serviceProxies = (0, _services.getServiceProxy)(idToken);
      serviceProxies.createRecentViewed({
        news: this.props.newsData._id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var translate = this.props.t;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, "".concat(this.props.newsData.title, " | timmay.vn")), _react.default.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), _react.default.createElement("meta", {
        property: "description",
        content: this.props.newsData.description
      }), _react.default.createElement("meta", {
        property: "og:url",
        content: "".concat(_config.config.url.main, "/bai-dang/").concat(this.props.newsData._id)
      }), _react.default.createElement("meta", {
        property: "og:type",
        content: "website"
      }), _react.default.createElement("meta", {
        property: "og:title",
        content: "".concat(this.props.newsData.title, " | timmay.vn")
      }), _react.default.createElement("meta", {
        property: "og:description",
        content: this.props.newsData.description
      }), _react.default.createElement("meta", {
        property: "og:image:url",
        content: this.props.newsData.imageUrls.length > 0 ? this.props.newsData.imageUrls[0] : '/static/images/logo-timmay.png'
      }), _react.default.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), _react.default.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), _react.default.createElement(_CommonLayout.default, {
        updateFilters: this.props.updateFilters,
        topBrands: this.props.topBrands,
        searchKeyword: this.props.searchKeyword,
        hasSideBar: true,
        hasMenuItems: true,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_NavBarNext.default, {
        newsData: this.state.newsData,
        changeFollowItemStatus: this.changeFollowItemStatus,
        starStatus: this.state.newsData.isFollowing ? 'filled' : '',
        newsTitle: this.state.newsData.title
      }), _react.default.createElement(_DetailMachine.default, {
        newsData: this.state.newsData,
        changeFollowItemStatus: this.changeFollowItemStatus,
        starStatus: this.state.newsData.isFollowing ? 'filled' : '',
        handleFiltersChange: this.props.handleFiltersChange,
        profileState: this.props.profileState
      }), _react.default.createElement(_DetailUser.default, {
        profileState: this.props.profileState,
        newsData: this.state.newsData,
        changeFollowUserStatus: this.changeFollowUserStatus,
        changeFollowShopStatus: this.changeFollowShopStatus,
        starUserStatus: this.state.newsData.owner.isFollowing ? 'filled' : '',
        starShopStatus: this.state.newsData.shop && this.state.newsData.shop.isFollowing ? 'filled' : '',
        isShopDomain: false
      }), _react.default.createElement(_row.default, {
        className: "machine-list"
      }, _react.default.createElement(_spin.default, {
        spinning: this.state.isLoadingDataSameSeller
      }, _react.default.createElement(_MachineDetailBox.default, {
        profileState: this.props.profileState,
        title: translate('detail-news:same-seller'),
        data: this.state.newsDataSameOwner.data,
        buttonLeft: this.onCLickButtonLeft,
        buttonRight: this.onCLickButtonRight,
        disabledButtonLeft: this.showButtonLeft(),
        disabledButtonRight: this.showButtonRight(),
        changeFollowStatus: this.changeSameSellerNewsFollowStatus,
        hiddenButton: false,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6
      }))), _react.default.createElement(_row.default, {
        className: "machine-list"
      }, _react.default.createElement(_MachineDetailBox.default, {
        profileState: this.props.profileState,
        title: translate('detail-news:related-products'),
        data: this.state.newDataRelatedProducts.data,
        hiddenButton: true,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        disabledButtonLeft: true,
        disabledButtonRight: true,
        changeFollowStatus: function changeFollowStatus() {
          return null;
        },
        buttonLeft: function buttonLeft() {
          return null;
        },
        buttonRight: function buttonRight() {
          return null;
        }
      })), _react.default.createElement(_row.default, {
        className: "call-mess-button-mobile"
      }, _react.default.createElement(_CallMessButtonMobile.default, {
        phoneNo: this.props.newsData.owner.phoneNo
      })))));
    }
  }]);

  return DetailNewsScreen;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('detail-news')(DetailNewsScreen);

exports.default = _default;
//# sourceMappingURL=DetailNewsScreen.js.map