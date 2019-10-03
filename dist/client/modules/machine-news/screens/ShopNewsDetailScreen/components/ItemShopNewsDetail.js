"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

var _SeeMost = _interopRequireDefault(require("../../ShopInfoScreen/components/SeeMost"));

var _Map = _interopRequireDefault(require("../../ShopInfoScreen/components/Map"));

require("./ItemShopNewsDetail.less");

var _NavBarNext = _interopRequireDefault(require("../../DetailNewsScreen/components/NavBarNext"));

var _DetailMachine = _interopRequireDefault(require("../../DetailNewsScreen/components/DetailMachine"));

var _DetailUser = _interopRequireDefault(require("../../DetailNewsScreen/components/DetailUser"));

var _MachineDetailBox = _interopRequireDefault(require("../../../../../components/MachineDetailBox/MachineDetailBox"));

var _services = require("../../../../../services");

var _reactDeviceDetect = require("react-device-detect");

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

var ItemShopNewsDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(ItemShopNewsDetails, _Component);

  function ItemShopNewsDetails() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ItemShopNewsDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ItemShopNewsDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      newsInfo: _this.props.newsInfo
    });

    _defineProperty(_assertThisInitialized(_this), "onClickNextNew", function () {//
    });

    _defineProperty(_assertThisInitialized(_this), "changeFollowItemStatus",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(starStatus, id) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context.next = 14;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _context.next = 6;
                return _this.setState({
                  newsInfo: _objectSpread({}, _this.state.newsInfo, {
                    isFollowing: false
                  })
                });

              case 6:
                _context.next = 12;
                break;

              case 8:
                _context.next = 10;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 10:
                _context.next = 12;
                return _this.setState({
                  newsInfo: _objectSpread({}, _this.state.newsInfo, {
                    isFollowing: true
                  })
                });

              case 12:
                _context.next = 15;
                break;

              case 14:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này');

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "changeFollowUserStatus",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(starStatus, id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this.props.profileState && _this.props.profileState.authUser)) {
                  _context2.next = 14;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 4;
                return _this.props.followReducers.unfollowUser({
                  authId: _this.props.profileState.authUser.id,
                  userId: id
                });

              case 4:
                _context2.next = 6;
                return _this.setState({
                  newsInfo: _objectSpread({}, _this.state.newsInfo, {
                    owner: _objectSpread({}, _this.state.newsInfo.owner, {
                      isFollowing: false
                    })
                  })
                });

              case 6:
                _context2.next = 12;
                break;

              case 8:
                _context2.next = 10;
                return _this.props.followReducers.followUser({
                  authId: _this.props.profileState.authUser.id,
                  userId: id
                });

              case 10:
                _context2.next = 12;
                return _this.setState({
                  newsInfo: _objectSpread({}, _this.state.newsInfo, {
                    owner: _objectSpread({}, _this.state.newsInfo.owner, {
                      isFollowing: true
                    })
                  })
                });

              case 12:
                _context2.next = 15;
                break;

              case 14:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này');

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "changeFollowShopStatus",
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
                return _this.props.followReducers.unfollowShop({
                  authId: _this.props.profileState.authUser.id,
                  shopId: id
                });

              case 4:
                _context3.next = 6;
                return _this.setState({
                  newsInfo: _objectSpread({}, _this.state.newsInfo, {
                    shop: _objectSpread({}, _this.state.newsInfo.shop, {
                      isFollowing: false
                    })
                  })
                });

              case 6:
                _context3.next = 12;
                break;

              case 8:
                _context3.next = 10;
                return _this.props.followReducers.followShop({
                  authId: _this.props.profileState.authUser.id,
                  shopId: id
                });

              case 10:
                _context3.next = 12;
                return _this.setState({
                  newsInfo: _objectSpread({}, _this.state.newsInfo, {
                    shop: _objectSpread({}, _this.state.newsInfo.shop, {
                      isFollowing: true
                    })
                  })
                });

              case 12:
                _context3.next = 15;
                break;

              case 14:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này');

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "dataCurrent", {
      title: 'May xuc',
      name: '1998 KOMATSU D53P - 18',
      price: 45000000,
      location: 'Hà Nội',
      type: 'Máy đào mini',
      product: 'KOMATSU',
      model: 'PC204-2',
      status: 'đã sử dụng',
      activeHours: 2000,
      yearOfProduct: 2018,
      frameNumber: '20xx',
      view: 16,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      contact: {
        nameConpany: 'Cty TNHH - DV Vĩnh Hững',
        contactPerson: 'Phòng KD',
        address: '35/11 Xa lộ Hà Nội, Ấp Ngãi Thắng',
        phoneNumber: '+08412873687'
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dataCurrentUser", {
      userName: 'hung_dts_halong_1976',
      location: 'Q.Hoàn Kiếm, TP Hà Nội',
      dateJoin: '20/10/209'
    });

    _defineProperty(_assertThisInitialized(_this), "popularMachine", [{
      key: 1,
      title: 'Komatsu PC200-6',
      imageUrl: '/static/images/may-ui.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Hà Nội',
      price: 45000000
    }, {
      key: 2,
      title: 'Hitachi PC200-6',
      imageUrl: '/static/images/xe-xuc.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Nam Định',
      price: 3600000
    }, {
      key: 3,
      title: 'Komatsu PC200-6',
      imageUrl: '/static/images/may-ui.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Hà Nội',
      price: 45000000
    }, {
      key: 4,
      title: 'Hitachi PC200-6',
      imageUrl: '/static/images/xe-xuc.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Nam Định',
      price: 3600000
    }]);

    _defineProperty(_assertThisInitialized(_this), "dataMachine", [{
      key: 1,
      title: 'Komatsu PC200-6',
      imageUrl: '/static/images/may-ui.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Hà Nội',
      price: 45000000
    }, {
      key: 2,
      title: 'Hitachi PC200-6',
      imageUrl: '/static/images/xe-xuc.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Nam Định',
      price: 3600000
    }, {
      key: 3,
      title: 'Komatsu PC200-6',
      imageUrl: '/static/images/may-ui.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Hà Nội',
      price: 45000000
    }, {
      key: 4,
      title: 'Hitachi PC200-6',
      imageUrl: '/static/images/xe-xuc.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Nam Định',
      price: 3600000
    }, {
      key: 5,
      title: 'Komatsu PC200-6',
      imageUrl: '/static/images/may-ui.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Hà Nội',
      price: 45000000
    }, {
      key: 6,
      title: 'Hitachi PC200-6',
      imageUrl: '/static/images/xe-xuc.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Nam Định',
      price: 3600000
    }, {
      key: 7,
      title: 'Komatsu PC200-6',
      imageUrl: '/static/images/may-ui.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Hà Nội',
      price: 45000000
    }, {
      key: 8,
      title: 'Hitachi PC200-6',
      imageUrl: '/static/images/xe-xuc.jpg',
      status: 'Đã sử dụng',
      ownerName: 'Thinh Nguyen',
      location: 'Nam Định',
      price: 3600000
    }]);

    _defineProperty(_assertThisInitialized(_this), "disabledButtonLeft", function () {
      if (_this.props.newMachine.before) {
        return false;
      } else {
        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "disabledButtonRight", function () {
      if (_this.props.newMachine.after) {
        return false;
      } else {
        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "buttonLeft",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var serviceProxies, newMachine;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!_this.props.newMachine.before) {
                _context4.next = 6;
                break;
              }

              serviceProxies = (0, _services.getServiceProxy)();
              _context4.next = 4;
              return serviceProxies.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _this.props.shopInfo._id, undefined, undefined, undefined, undefined, 4, 'elasticsearchCreatedAt|desc', _this.props.newMachine.before, undefined);

            case 4:
              newMachine = _context4.sent;

              _this.props.searchReducers.getDataNewMachineSuccess(newMachine);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));

    _defineProperty(_assertThisInitialized(_this), "buttonRight",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5() {
      var serviceProxies, newMachine;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!_this.props.newMachine.after) {
                _context5.next = 6;
                break;
              }

              serviceProxies = (0, _services.getServiceProxy)();
              _context5.next = 4;
              return serviceProxies.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _this.props.shopInfo._id, undefined, undefined, undefined, undefined, 4, 'elasticsearchCreatedAt|desc', undefined, _this.props.newMachine.after);

            case 4:
              newMachine = _context5.sent;

              _this.props.searchReducers.getDataNewMachineSuccess(newMachine);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));

    return _this;
  }

  _createClass(ItemShopNewsDetails, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_row.default, {
        className: "outline-body",
        gutter: !_reactDeviceDetect.isMobile ? 16 : 0
      }, _react.default.createElement(_col.default, {
        className: "navbar-next",
        lg: 16,
        md: 24,
        xs: 24,
        sm: 24
      }, _react.default.createElement(_NavBarNext.default, {
        newsData: this.state.newsInfo,
        changeFollowItemStatus: this.changeFollowItemStatus,
        starStatus: this.state.newsInfo.isFollowing ? 'filled' : 'outlined',
        newsTitle: this.state.newsInfo.title
      }), _react.default.createElement(_DetailMachine.default, {
        newsData: this.state.newsInfo,
        changeFollowItemStatus: this.changeFollowItemStatus,
        handleFiltersChange: this.props.handleFiltersChange,
        starStatus: this.state.newsInfo.isFollowing ? 'filled' : 'outlined'
      }), _react.default.createElement(_DetailUser.default, {
        newsData: this.state.newsInfo,
        profileState: this.props.profileState,
        starUserStatus: this.state.newsInfo.owner.isFollowing ? 'filled' : '',
        starShopStatus: this.state.newsInfo.shop.isFollowing ? 'filled' : '',
        changeFollowUserStatus: this.changeFollowUserStatus,
        changeFollowShopStatus: this.changeFollowShopStatus,
        isShopDomain: true
      }), _react.default.createElement(_row.default, {
        className: "machine-list"
      }, _react.default.createElement(_MachineDetailBox.default, {
        title: "M\xE1y m\u1EDBi v\u1EC1",
        disabledButtonLeft: this.disabledButtonLeft(),
        disabledButtonRight: this.disabledButtonRight(),
        buttonLeft: this.buttonLeft,
        buttonRight: this.buttonRight,
        data: this.props.newMachine.data,
        xs: 24,
        sm: 24,
        md: 12,
        lg: 6,
        profileState: this.props.profileState,
        changeFollowStatus: this.changeFollowItemStatus,
        hiddenButton: false
      }))), _react.default.createElement(_col.default, {
        lg: 8,
        md: 24,
        xs: 24,
        sm: 24
      }, _react.default.createElement(_Map.default, {
        location: this.props.shopAddress,
        geocode: this.props.shopInfo.geocode
      }), _react.default.createElement(_SeeMost.default, {
        title: "Nhi\u1EC1u ng\u01B0\u1EDDi xem nh\u1EA5t",
        dataMachine: this.props.resultSearchNewestPost.data
      })));
    }
  }]);

  return ItemShopNewsDetails;
}(_react.Component);

var _default = ItemShopNewsDetails;
exports.default = _default;
//# sourceMappingURL=ItemShopNewsDetail.js.map