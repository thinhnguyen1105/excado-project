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

require("antd/lib/empty/style");

var _empty = _interopRequireDefault(require("antd/lib/empty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var React = _interopRequireWildcard(require("react"));

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _MachineItem = _interopRequireDefault(require("../../../../components/MachineItem/MachineItem"));

var _UserInfo = _interopRequireDefault(require("./components/UserInfo"));

var _UserTitle = _interopRequireDefault(require("./components/UserTitle"));

require("./DashboardScreen.less");

var _core = require("../../../../core");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../../../services");

var _reactDeviceDetect = require("react-device-detect");

var _DetailMachineBoxHorizontal = _interopRequireDefault(require("../SearchDetailsScreen/components/DetailMachineBoxHorizontal"));

var _i18n = require("../../../../i18n");

var _config = require("../../../../config");

var _head = _interopRequireDefault(require("next/head"));

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

var Fragment = React.Fragment;
var TabPane = _tabs.default.TabPane;

var DashboardScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashboardScreen, _React$Component);

  function DashboardScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DashboardScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DashboardScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      publicData: _this.props.publicData,
      pendingData: _this.props.pendingData,
      stoppedData: _this.props.stoppedData,
      rejectedData: _this.props.rejectedData,
      deletedData: _this.props.deletedData,
      currentTab: 'PUBLIC',
      isBusy: false
    });

    _defineProperty(_assertThisInitialized(_this), "onNextPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var idToken, serviceProxies, data, _data, _data2, _data3, _data4;

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

              if (!(_this.state.currentTab === 'PUBLIC')) {
                _context.next = 12;
                break;
              }

              _context.next = 8;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'PUBLIC', 16, 'createdAt', undefined, _this.state.publicData.after);

            case 8:
              data = _context.sent;

              _this.setState({
                publicData: data,
                isBusy: false
              });

              _context.next = 38;
              break;

            case 12:
              if (!(_this.state.currentTab === 'PENDING')) {
                _context.next = 19;
                break;
              }

              _context.next = 15;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'PENDING', 16, 'createdAt', undefined, _this.state.pendingData.after);

            case 15:
              _data = _context.sent;

              _this.setState({
                pendingData: _data,
                isBusy: false
              });

              _context.next = 38;
              break;

            case 19:
              if (!(_this.state.currentTab === 'REJECTED')) {
                _context.next = 26;
                break;
              }

              _context.next = 22;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'REJECTED', 16, 'createdAt', undefined, _this.state.rejectedData.after);

            case 22:
              _data2 = _context.sent;

              _this.setState({
                rejectedData: _data2,
                isBusy: false
              });

              _context.next = 38;
              break;

            case 26:
              if (!(_this.state.currentTab === 'STOPPED')) {
                _context.next = 33;
                break;
              }

              _context.next = 29;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'STOPPED', 16, 'createdAt', undefined, _this.state.stoppedData.after);

            case 29:
              _data3 = _context.sent;

              _this.setState({
                stoppedData: _data3,
                isBusy: false
              });

              _context.next = 38;
              break;

            case 33:
              if (!(_this.state.currentTab === 'DELETED')) {
                _context.next = 38;
                break;
              }

              _context.next = 36;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'LEASE', 16, 'createdAt', undefined, _this.state.deletedData.after);

            case 36:
              _data4 = _context.sent;

              _this.setState({
                deletedData: _data4,
                isBusy: false
              });

            case 38:
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
      var idToken, serviceProxies, data, _data5, _data6, _data7, _data8;

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

              if (!(_this.state.currentTab === 'PUBLIC')) {
                _context2.next = 12;
                break;
              }

              _context2.next = 8;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'PUBLIC', 16, 'createdAt', _this.state.publicData.before, undefined);

            case 8:
              data = _context2.sent;

              _this.setState({
                publicData: data,
                isBusy: false
              });

              _context2.next = 38;
              break;

            case 12:
              if (!(_this.state.currentTab === 'PENDING')) {
                _context2.next = 19;
                break;
              }

              _context2.next = 15;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'PENDING', 16, 'createdAt', _this.state.pendingData.before, undefined);

            case 15:
              _data5 = _context2.sent;

              _this.setState({
                pendingData: _data5,
                isBusy: false
              });

              _context2.next = 38;
              break;

            case 19:
              if (!(_this.state.currentTab === 'REJECTED')) {
                _context2.next = 26;
                break;
              }

              _context2.next = 22;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'REJECTED', 16, 'createdAt', _this.state.rejectedData.before, undefined);

            case 22:
              _data6 = _context2.sent;

              _this.setState({
                rejectedData: _data6,
                isBusy: false
              });

              _context2.next = 38;
              break;

            case 26:
              if (!(_this.state.currentTab === 'STOPPED')) {
                _context2.next = 33;
                break;
              }

              _context2.next = 29;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'STOPPED', 16, 'createdAt', _this.state.stoppedData.before, undefined);

            case 29:
              _data7 = _context2.sent;

              _this.setState({
                stoppedData: _data7,
                isBusy: false
              });

              _context2.next = 38;
              break;

            case 33:
              if (!(_this.state.currentTab === 'DELETED')) {
                _context2.next = 38;
                break;
              }

              _context2.next = 36;
              return serviceProxies.findNewsByOwner(_this.props.profileState.authUser.id, 'DELETED', 16, 'createdAt', _this.state.deletedData.before, undefined);

            case 36:
              _data8 = _context2.sent;

              _this.setState({
                deletedData: _data8,
                isBusy: false
              });

            case 38:
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
                if (_this.state.currentTab === 'PUBLIC') {
                  _this.setState({
                    publicData: _objectSpread({}, _this.state.publicData, {
                      data: _this.state.publicData.data.map(function (value) {
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
                } else if (_this.state.currentTab === 'PENDING') {
                  _this.setState({
                    pendingData: _objectSpread({}, _this.state.pendingData, {
                      data: _this.state.pendingData.data.map(function (value) {
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
                } else if (_this.state.currentTab = 'REJECTED') {
                  _this.setState({
                    rejectedData: _objectSpread({}, _this.state.rejectedData, {
                      data: _this.state.rejectedData.data.map(function (value) {
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
                } else if (_this.state.currentTab = 'STOPPED') {
                  _this.setState({
                    stoppedData: _objectSpread({}, _this.state.stoppedData, {
                      data: _this.state.stoppedData.data.map(function (value) {
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
                } else if (_this.state.currentTab = 'DELETED') {
                  _this.setState({
                    deletedData: _objectSpread({}, _this.state.deletedData, {
                      data: _this.state.deletedData.data.map(function (value) {
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
                }

                _context3.next = 9;
                break;

              case 6:
                _context3.next = 8;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 8:
                if (_this.state.currentTab === 'PUBLIC') {
                  _this.setState({
                    publicData: _objectSpread({}, _this.state.publicData, {
                      data: _this.state.publicData.data.map(function (value) {
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
                } else if (_this.state.currentTab === 'PENDING') {
                  _this.setState({
                    pendingData: _objectSpread({}, _this.state.pendingData, {
                      data: _this.state.pendingData.data.map(function (value) {
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
                } else if (_this.state.currentTab = 'REJECTED') {
                  _this.setState({
                    rejectedData: _objectSpread({}, _this.state.rejectedData, {
                      data: _this.state.rejectedData.data.map(function (value) {
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
                } else if (_this.state.currentTab = 'STOPPED') {
                  _this.setState({
                    stoppedData: _objectSpread({}, _this.state.stoppedData, {
                      data: _this.state.stoppedData.data.map(function (value) {
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
                } else if (_this.state.currentTab = 'DELETED') {
                  _this.setState({
                    deletedData: _objectSpread({}, _this.state.deletedData, {
                      data: _this.state.deletedData.data.map(function (value) {
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
                }

              case 9:
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

  _createClass(DashboardScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      var renderPublicData = this.state.publicData.data.map(function (item, index) {
        return !_reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls && item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl,
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
          imageUrl: item.imageUrls && item.imageUrls.length > 0 ? (0, _core.getImageUrl)(item.imageUrls[0], 'small') : item.categoryId.imageUrl,
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location ? item.location.name : '',
          newsState: item.state,
          typeOfMachine: item.categoryId.name,
          brand: item.brand.name,
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderPendingData = this.state.pendingData.data.map(function (item, index) {
        return !_reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls[0],
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location.name,
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : React.createElement(_DetailMachineBoxHorizontal.default, {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls[0],
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location.name,
          newsState: item.state,
          typeOfMachine: item.categoryId.name,
          brand: item.brand.name,
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderRejectedData = this.state.rejectedData.data.map(function (item, index) {
        return !_reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls[0],
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location.name,
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : React.createElement(_DetailMachineBoxHorizontal.default, {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls[0],
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location.name,
          newsState: item.state,
          typeOfMachine: item.categoryId.name,
          brand: item.brand.name,
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderStoppedData = this.state.stoppedData.data.map(function (item, index) {
        return !_reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls[0],
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location.name,
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : React.createElement(_DetailMachineBoxHorizontal.default, {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls[0],
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location.name,
          newsState: item.state,
          typeOfMachine: item.categoryId.name,
          brand: item.brand.name,
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      var renderDeletedData = this.state.deletedData.data.map(function (item, index) {
        return _reactDeviceDetect.isMobile ? React.createElement(_MachineItem.default, {
          key: index,
          lg: 6,
          md: 6,
          sm: 24,
          xs: 24,
          linkRedirect: "/bai-dang/".concat(item._id),
          id: item._id,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          imageUrl: item.imageUrls[0],
          title: item.title,
          price: item.price,
          newsState: item.state,
          location: item.location.name,
          ownerName: item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : '',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        }) : React.createElement(_DetailMachineBoxHorizontal.default, {
          id: item._id,
          key: index,
          imageUrl: item.imageUrls[0],
          title: item.title,
          price: item.price,
          linkRedirect: "/bai-dang/".concat(item._id),
          location: item.location.name,
          newsState: item.state,
          typeOfMachine: item.categoryId.name,
          brand: item.brand.name,
          owner: item.owner,
          starStatus: item.isFollowing ? 'filled' : 'outlined',
          changeFollowStatus: _this2.changeFollowStatus,
          ownerId: item.owner ? item.owner._id : '',
          currentUserId: _this2.props.profileState && _this2.props.profileState.authUser && _this2.props.profileState.authUser.id ? _this2.props.profileState.authUser.id : ''
        });
      });
      return React.createElement("div", {
        className: "dashboard-screen"
      }, React.createElement(_head.default, null, React.createElement("title", null, "Qu\u1EA3n l\xED tin \u0111\u0103ng | timmay.vn"), React.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), React.createElement("meta", {
        property: "og:type",
        content: "website"
      }), React.createElement("meta", {
        property: "og:title",
        content: "Qu\u1EA3n l\xED tin \u0111\u0103ng | timmay.vn"
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
      }, React.createElement(_row.default, null, React.createElement(_UserTitle.default, {
        title: translate('common:news-managenment')
      }), React.createElement(_UserInfo.default, {
        currentUserData: this.props.currentUserData,
        profileState: this.props.profileState
      }), React.createElement(_spin.default, {
        spinning: this.state.isBusy
      }, React.createElement(_tabs.default, {
        defaultActiveKey: "PUBLIC",
        tabBarStyle: {
          background: '#fff',
          margin: 0,
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)'
        },
        onChange: function onChange(activeKey) {
          return _this2.setState({
            currentTab: activeKey
          });
        }
      }, React.createElement(TabPane, {
        tab: translate('dashboard:public-news'),
        key: "PUBLIC"
      }, React.createElement(_row.default, {
        style: {
          background: '#fff',
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, this.state.publicData.data.length === 0 ? React.createElement(_empty.default, {
        style: {
          width: '100%'
        },
        description: translate('dashboard:no-data')
      }) : React.createElement(Fragment, null, renderPublicData)), React.createElement(_row.default, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.publicData.before ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, React.createElement("a", null, translate('common:previous-page'))) : React.createElement("div", null), this.state.publicData.after ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, React.createElement("a", null, translate('common:next-page'))) : React.createElement("div", null), " ")), React.createElement(TabPane, {
        tab: translate('dashboard:pending-news'),
        key: "PENDING"
      }, React.createElement(_row.default, {
        style: {
          background: '#fff'
        }
      }, this.state.pendingData.data.length === 0 ? React.createElement(_empty.default, {
        description: translate('dashboard:no-data')
      }) : React.createElement(Fragment, null, renderPendingData)), React.createElement(_row.default, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.pendingData.before ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, React.createElement("a", null, translate('common:previous-page'))) : React.createElement("div", null), this.state.pendingData.after ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, React.createElement("a", null, translate('common:next-page'))) : React.createElement("div", null), " ")), React.createElement(TabPane, {
        tab: translate('dashboard:deleted-news'),
        key: "DELETED"
      }, React.createElement(_row.default, {
        style: {
          background: '#fff'
        }
      }, this.state.deletedData.data.length === 0 ? React.createElement(_empty.default, {
        description: translate('dashboard:no-data')
      }) : React.createElement(Fragment, null, renderDeletedData)), React.createElement(_row.default, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.deletedData.before ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, React.createElement("a", null, translate('common:previous-page'))) : React.createElement("div", null), this.state.deletedData.after ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, React.createElement("a", null, translate('common:next-page'))) : React.createElement("div", null), " ")), React.createElement(TabPane, {
        tab: translate('dashboard:stopped-news'),
        key: "STOPPED"
      }, React.createElement(_row.default, {
        style: {
          background: '#fff'
        }
      }, this.state.stoppedData.data.length === 0 ? React.createElement(_empty.default, {
        description: translate('dashboard:no-data')
      }) : React.createElement(Fragment, null, renderStoppedData)), React.createElement(_row.default, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.stoppedData.before ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, React.createElement("a", null, translate('common:previous-page'))) : React.createElement("div", null), this.state.stoppedData.after ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, React.createElement("a", null, translate('common:next-page'))) : React.createElement("div", null), " ")), React.createElement(TabPane, {
        tab: translate('dashboard:rejected-news'),
        key: "REJECTED"
      }, React.createElement(_row.default, {
        style: {
          background: '#fff'
        }
      }, this.state.rejectedData.data.length === 0 ? React.createElement(_empty.default, {
        description: translate('dashboard:no-data')
      }) : React.createElement(Fragment, null, renderRejectedData)), React.createElement(_row.default, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 10
        }
      }, this.state.rejectedData.before ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onPreviousPage();
        },
        style: {
          marginRight: 10
        }
      }, React.createElement("a", null, translate('common:previous-page'))) : React.createElement("div", null), this.state.rejectedData.after ? React.createElement(_button.default, {
        onClick: function onClick() {
          _this2.onNextPage();
        },
        style: {
          marginRight: 10
        },
        type: "primary"
      }, React.createElement("a", null, translate('common:next-page'))) : React.createElement("div", null), " ")))))));
    }
  }]);

  return DashboardScreen;
}(React.Component);

var _default = (0, _i18n.withNamespaces)('dashboard')(DashboardScreen);

exports.default = _default;
//# sourceMappingURL=DashboardScreen.js.map