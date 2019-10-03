"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var React = _interopRequireWildcard(require("react"));

var _store = require("../../../../store");

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _MachineItem = _interopRequireDefault(require("../../../../components/MachineItem/MachineItem"));

var _UserInfo = _interopRequireDefault(require("./components/UserInfo"));

var _FollowedListTitle = _interopRequireDefault(require("./components/FollowedListTitle"));

require("./FollowedListScreen.less");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../../../services");

var _reactDeviceDetect = require("react-device-detect");

var _core = require("../../../../core");

var _DetailMachineBoxHorizontal = _interopRequireDefault(require("../SearchDetailsScreen/components/DetailMachineBoxHorizontal"));

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

var TabPane = _tabs.default.TabPane;
var Fragment = React.Fragment;

var FollowedListScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowedListScreen, _React$Component);

  function FollowedListScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FollowedListScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FollowedListScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      sellData: {
        data: _this.props.data.filter(function (item) {
          return item.newsType === _core.newsTypeConst.SELL;
        }),
        before: undefined,
        after: undefined
      },
      buyData: {
        data: _this.props.data.filter(function (item) {
          return item.newsType === _core.newsTypeConst.BUY;
        }),
        before: undefined,
        after: undefined
      },
      rentData: {
        data: _this.props.data.filter(function (item) {
          return item.newsType === _core.newsTypeConst.RENT;
        }),
        before: undefined,
        after: undefined
      },
      leaseData: {
        data: _this.props.data.filter(function (item) {
          return item.newsType === _core.newsTypeConst.LEASE;
        }),
        before: undefined,
        after: undefined
      },
      currentTab: 'SELL',
      isBusy: false
    });

    _defineProperty(_assertThisInitialized(_this), "onNextPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var idToken, serviceProxies, data, _data, _data2, _data3;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                isBusy: true
              });

              _context.next = 3;
              return _app.default.auth().currentUser.getIdToken();

            case 3:
              idToken = _context.sent;
              serviceProxies = (0, _services.getServiceProxy)(idToken);

              if (!(_this.state.currentTab === 'SELL')) {
                _context.next = 12;
                break;
              }

              _context.next = 8;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'SELL', 16, '_id', undefined, _this.state.sellData.after);

            case 8:
              data = _context.sent;

              _this.setState({
                sellData: data,
                isBusy: false
              });

              _context.next = 31;
              break;

            case 12:
              if (!(_this.state.currentTab === 'BUY')) {
                _context.next = 19;
                break;
              }

              _context.next = 15;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'BUY', 16, '_id', undefined, _this.state.buyData.after);

            case 15:
              _data = _context.sent;

              _this.setState({
                buyData: _data,
                isBusy: false
              });

              _context.next = 31;
              break;

            case 19:
              if (!(_this.state.currentTab === 'RENT')) {
                _context.next = 26;
                break;
              }

              _context.next = 22;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'RENT', 16, '_id', undefined, _this.state.rentData.after);

            case 22:
              _data2 = _context.sent;

              _this.setState({
                rentData: _data2,
                isBusy: false
              });

              _context.next = 31;
              break;

            case 26:
              if (!(_this.state.currentTab === 'LEASE')) {
                _context.next = 31;
                break;
              }

              _context.next = 29;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'LEASE', 16, '_id', undefined, _this.state.leaseData.after);

            case 29:
              _data3 = _context.sent;

              _this.setState({
                leaseData: _data3,
                isBusy: false
              });

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "onPreviousPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var idToken, serviceProxies, data, _data4, _data5, _data6;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                isBusy: true
              });

              _context2.next = 3;
              return _app.default.auth().currentUser.getIdToken();

            case 3:
              idToken = _context2.sent;
              serviceProxies = (0, _services.getServiceProxy)(idToken);

              if (!(_this.state.currentTab === 'SELL')) {
                _context2.next = 12;
                break;
              }

              _context2.next = 8;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'SELL', 16, '_id', _this.state.sellData.before, undefined);

            case 8:
              data = _context2.sent;

              _this.setState({
                sellData: data,
                isBusy: false
              });

              _context2.next = 31;
              break;

            case 12:
              if (!(_this.state.currentTab === 'BUY')) {
                _context2.next = 19;
                break;
              }

              _context2.next = 15;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'BUY', 16, '_id', _this.state.buyData.before, undefined);

            case 15:
              _data4 = _context2.sent;

              _this.setState({
                buyData: _data4,
                isBusy: false
              });

              _context2.next = 31;
              break;

            case 19:
              if (!(_this.state.currentTab === 'RENT')) {
                _context2.next = 26;
                break;
              }

              _context2.next = 22;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'RENT', 16, '_id', _this.state.rentData.before, undefined);

            case 22:
              _data5 = _context2.sent;

              _this.setState({
                rentData: _data5,
                isBusy: false
              });

              _context2.next = 31;
              break;

            case 26:
              if (!(_this.state.currentTab === 'LEASE')) {
                _context2.next = 31;
                break;
              }

              _context2.next = 29;
              return serviceProxies.findFollow(_this.props.profileState.authUser.id, 'news', 'LEASE', 16, '_id', _this.state.leaseData.before, undefined);

            case 29:
              _data6 = _context2.sent;

              _this.setState({
                leaseData: _data6,
                isBusy: false
              });

            case 31:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "changeFollowStatus",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(starStatus, id) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(starStatus === 'filled')) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 3;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 3:
                if (_this.state.currentTab === 'SELL') {
                  _this.setState({
                    sellData: _objectSpread({}, _this.state.sellData, {
                      data: _this.state.sellData.data.filter(function (value) {
                        return value._id !== id;
                      })
                    })
                  });
                } else if (_this.state.currentTab === 'BUY') {
                  _this.setState({
                    buyData: _objectSpread({}, _this.state.buyData, {
                      data: _this.state.buyData.data.filter(function (value) {
                        return value._id !== id;
                      })
                    })
                  });
                } else if (_this.state.currentTab = 'RENT') {
                  _this.setState({
                    rentData: _objectSpread({}, _this.state.rentData, {
                      data: _this.state.rentData.data.filter(function (value) {
                        return value._id !== id;
                      })
                    })
                  });
                } else if (_this.state.currentTab = 'LEASE') {
                  _this.setState({
                    leaseData: _objectSpread({}, _this.state.leaseData, {
                      data: _this.state.leaseData.data.filter(function (value) {
                        return value._id !== id;
                      })
                    })
                  });
                }

                _context3.next = 8;
                break;

              case 6:
                _context3.next = 8;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 8:
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

    return _this;
  }

  _createClass(FollowedListScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var renderSellFollowedList = this.state.sellData.data.map(function (item, index) {
        return !_reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : React.createElement(_DetailMachineBoxHorizontal.default, {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId.name,
          brand: item.brand ? item.brand.name : item.brand,
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderBuyFollowedList = this.state.buyData.data.map(function (item, index) {
        return !_reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : React.createElement(_DetailMachineBoxHorizontal.default, {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId ? item.categoryId.name : '',
          brand: item.brand ? item.brand.name : '',
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderRentFollowedList = this.state.rentData.data.map(function (item, index) {
        return !_reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : React.createElement(_DetailMachineBoxHorizontal.default, {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId ? item.categoryId.name : '',
          brand: item.brand ? item.brand.name : '',
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderLeaseFollowedList = this.state.leaseData.data.map(function (item, index) {
        return !_reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location ? item.location.name : '',
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : React.createElement(_DetailMachineBoxHorizontal.default, {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls ? item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl : '',
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId ? item.categoryId.name : '',
          brand: item.brand ? item.brand.name : '',
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      return React.createElement("div", {
        className: "followed-list-screen"
      }, React.createElement(_head.default, null, React.createElement("title", null, "Tin \u0111\xE3 l\u01B0u | timmay.vn"), React.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), React.createElement("meta", {
        property: "og:url",
        content: "timmay.vn"
      }), React.createElement("meta", {
        property: "og:type",
        content: "website"
      }), React.createElement("meta", {
        property: "og:title",
        content: "C\u1EEDa h\xE0ng c\u1EE7a t\xF4i | timmay.vn"
      }), React.createElement("meta", {
        property: "og:image:url",
        content: '/static/images/logo-timmay.png'
      }), React.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), React.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), React.createElement(_CommonLayout.default, {
        updateFilters: this.props.updateFilters,
        topBrands: this.props.topBrands,
        searchKeyword: this.props.searchKeyword,
        hasSideBar: true,
        hasMenuItems: true,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }, React.createElement(_spin.default, {
        spinning: this.state.isBusy
      }, React.createElement(_row.default, null, React.createElement(_FollowedListTitle.default, {
        t: this.props.t
      }), this.props.profileState.authUser && React.createElement(_UserInfo.default, {
        profileState: _objectSpread({}, this.props.profileState, {
          authUser: _objectSpread({}, this.props.profileState.authUser, {
            avatarUrl: this.props.profileData ? this.props.profileData.avatarUrl : undefined
          })
        }),
        t: this.props.t
      })), React.createElement(_tabs.default, {
        defaultActiveKey: "SELL",
        tabBarStyle: {
          background: '#fff',
          margin: 0
        },
        onChange: function onChange(activeKey) {
          return _this2.setState({
            currentTab: activeKey
          });
        }
      }, React.createElement(TabPane, {
        tab: this.props.t('common:sell'),
        key: "SELL"
      }, React.createElement(_row.default, {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, this.state.sellData.data.length === 0 ? React.createElement("div", {
        className: "no-data"
      }, this.props.t('common:no-data')) : React.createElement(Fragment, null, renderSellFollowedList)), React.createElement(_row.default, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.sellData.before ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, React.createElement("a", null, this.props.t('common:previous'))) : React.createElement("div", null), this.state.sellData.after ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, React.createElement("a", null, this.props.t('common:next'))) : React.createElement("div", null), " ")), React.createElement(TabPane, {
        tab: this.props.t('common:buy'),
        key: "BUY"
      }, React.createElement(_row.default, {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, this.state.buyData.data.length === 0 ? React.createElement("div", {
        className: "no-data"
      }, this.props.t('common:no-data')) : React.createElement(Fragment, null, renderBuyFollowedList)), React.createElement(_row.default, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.buyData.before ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, React.createElement("a", null, this.props.t('common:previous'))) : React.createElement("div", null), this.state.buyData.after ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, React.createElement("a", null, this.props.t('common:next'))) : React.createElement("div", null))), React.createElement(TabPane, {
        tab: this.props.t('common:rent'),
        key: "RENT"
      }, React.createElement(_row.default, {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, this.state.rentData.data.length === 0 ? React.createElement("div", {
        className: "no-data"
      }, this.props.t('common:no-data')) : React.createElement(Fragment, null, renderRentFollowedList)), React.createElement(_row.default, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.rentData.before ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, React.createElement("a", null, this.props.t('common:previous'))) : React.createElement("div", null), this.state.rentData.after ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, React.createElement("a", null, this.props.t('common:next'))) : React.createElement("div", null))), React.createElement(TabPane, {
        tab: this.props.t('common:lease'),
        key: "LEASE"
      }, React.createElement(_row.default, {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, this.state.leaseData.data.length === 0 ? React.createElement("div", {
        className: "no-data"
      }, this.props.t('common:no-data')) : React.createElement(Fragment, null, renderLeaseFollowedList)), React.createElement(_row.default, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.sellData.before ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, React.createElement("a", null, this.props.t('common:previous'))) : React.createElement("div", null), this.state.sellData.after ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, React.createElement("a", null, this.props.t('common:next'))) : React.createElement("div", null)))))));
    }
  }]);

  return FollowedListScreen;
}(React.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel,
    followState: rootState.followModel
  };
};

var mapDispatch = function mapDispatch(rootReducer) {
  return {
    profileReducers: rootReducer.profileModel,
    followReducers: rootReducer.followModel
  };
};

var _default = (0, _i18n.withNamespaces)('common')((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)(FollowedListScreen));

exports.default = _default;
//# sourceMappingURL=FollowedListScreen.js.map