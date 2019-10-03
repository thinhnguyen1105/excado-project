"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

var _NavBarStore = _interopRequireDefault(require("./components/NavBarStore"));

var _ShopInfoDetails = _interopRequireDefault(require("./components/ShopInfoDetails"));

var _i18n = require("../../../../i18n");

var _head = _interopRequireDefault(require("next/head"));

var _config = require("../../../../config");

var _core = require("../../../../core");

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

var ShopInfoScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopInfoScreen, _Component);

  function ShopInfoScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ShopInfoScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ShopInfoScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      shopInfo: _this.props.shopInfo,
      newsData: _this.props.newsData
    });

    _defineProperty(_assertThisInitialized(_this), "changeFollowShopStatus",
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
                  _context.next = 12;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return _this.props.followReducers.unfollowShop({
                  authId: _this.props.profileState.authUser.id,
                  shopId: id
                });

              case 4:
                _this.setState({
                  shopInfo: _objectSpread({}, _this.state.shopInfo, {
                    isFollowing: false
                  })
                });

                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return _this.props.followReducers.followShop({
                  authId: _this.props.profileState.authUser.id,
                  shopId: id
                });

              case 9:
                _this.setState({
                  shopInfo: _objectSpread({}, _this.state.shopInfo, {
                    isFollowing: true
                  })
                });

              case 10:
                _context.next = 13;
                break;

              case 12:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 13:
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

    _defineProperty(_assertThisInitialized(_this), "changeFollowItemStatus",
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
                  _context2.next = 12;
                  break;
                }

                if (!(starStatus === 'filled')) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return _this.props.followReducers.unfollowNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 4:
                _this.setState({
                  newsData: _this.state.newsData.map(function (value) {
                    if (value._id === id) {
                      return _objectSpread({}, value, {
                        isFollowing: false
                      });
                    } else {
                      return value;
                    }
                  })
                });

                _context2.next = 10;
                break;

              case 7:
                _context2.next = 9;
                return _this.props.followReducers.followNews({
                  userId: _this.props.profileState.authUser.id,
                  newsId: id
                });

              case 9:
                _this.setState({
                  newsData: _this.state.newsData.map(function (value) {
                    if (value._id === id) {
                      return _objectSpread({}, value, {
                        isFollowing: true
                      });
                    } else {
                      return value;
                    }
                  })
                });

              case 10:
                _context2.next = 13;
                break;

              case 12:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 13:
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

    return _this;
  }

  _createClass(ShopInfoScreen, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, "".concat(this.props.shopInfo.name, "| timmay.vn")), _react.default.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), _react.default.createElement("meta", {
        property: "description",
        content: this.props.shopInfo.description
      }), _react.default.createElement("meta", {
        property: "og:url",
        content: (0, _core.getShopUrl)(this.props.shopInfo.domain)
      }), _react.default.createElement("meta", {
        property: "og:type",
        content: "website"
      }), _react.default.createElement("meta", {
        property: "og:title",
        content: "C\u1EEDa h\xE0ng ".concat(this.props.shopInfo.name, " | timmay.vn")
      }), _react.default.createElement("meta", {
        property: "og:description",
        content: this.props.shopInfo.description
      }), _react.default.createElement("meta", {
        property: "og:image:url",
        content: this.props.shopInfo.introImages.length > 0 ? this.props.shopInfo.introImages[0] : '/static/images/logo-timmay.png'
      }), _react.default.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), _react.default.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), _react.default.createElement(_NavBarStore.default, {
        linkLogoStore: this.props.shopInfo.logoImage,
        shopName: this.props.shopInfo.name,
        t: this.props.t
      }), _react.default.createElement(_ShopInfoDetails.default, {
        newsData: this.state.newsData,
        shopInfo: this.state.shopInfo,
        starStatus: this.state.shopInfo.isFollowing ? 'filled' : '',
        changeFollowStatus: this.changeFollowShopStatus,
        resultSearchNewestPost: this.props.resultSearchNewestPost,
        changeFollowItemStatus: this.changeFollowItemStatus,
        profileState: this.props.profileState,
        t: this.props.t
      }));
    }
  }]);

  return ShopInfoScreen;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('shop-info')(ShopInfoScreen);

exports.default = _default;
//# sourceMappingURL=ShopInfoScreen.js.map