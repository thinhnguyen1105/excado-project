"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _UserTitle = _interopRequireDefault(require("../DashboardScreen/components/UserTitle"));

var _i18n = require("../../../../i18n");

var _ShopInfo = _interopRequireDefault(require("./components/ShopInfo"));

var _core = require("../../../../core");

require("./MyShopScreen.less");

var _config = require("../../../../config");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../../../services");

var _ShopNews = _interopRequireDefault(require("./components/ShopNews"));

var _reactDeviceDetect = require("react-device-detect");

var _head = _interopRequireDefault(require("next/head"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SHOP_INFO = 'SHOP_INFO';
var SHOP_NEWS = 'SHOP_NEWS';

var MyShopScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyShopScreen, _React$Component);

  function MyShopScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MyShopScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyShopScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeKey: 'SHOP_INFO',
      shopInfo: _this.props.shopInfo,
      introImageList: [],
      logoImageList: [],
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "addIntroImage", function (file) {
      (0, _core.getBase64Image)(file, function (base64Url) {
        _this.setState({
          introImageList: [].concat(_toConsumableArray(_this.state.introImageList), [{
            file: file,
            base64Url: base64Url
          }])
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeIntroImage", function (file) {
      var index = _this.state.introImageList.map(function (item) {
        return item.file;
      }).indexOf(file);

      if (index > -1) {
        var newFileList = _this.state.introImageList.slice();

        newFileList.splice(index, 1);

        _this.setState({
          introImageList: newFileList
        });
      } else {
        index = _this.state.shopInfo.introImages.indexOf(file.url);

        var _newFileList = _this.props.shopInfo.introImages.slice();

        _newFileList.splice(index, 1);

        _this.setState({
          shopInfo: _objectSpread({}, _this.state.shopInfo, {
            introImages: _newFileList
          })
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeLogoImage", function (file) {
      (0, _core.getBase64Image)(file, function (base64Url) {
        _this.setState({
          logoImageList: [{
            file: file,
            base64Url: base64Url
          }]
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateShop",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(values) {
        var introImageResult, introImageFormData, logoImageResult, logoImageFormData, idToken, serviceProxy;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  loading: true
                });

                _context.prev = 1;

                if (!(_this.state.introImageList.length > 0)) {
                  _context.next = 8;
                  break;
                }

                introImageFormData = new FormData();

                _this.state.introImageList.forEach(function (item) {
                  introImageFormData.append('introImage', item.file);
                });

                _context.next = 7;
                return fetch("".concat(_config.config.url.api, "/upload-image/shop-intro-images"), {
                  method: 'POST',
                  body: introImageFormData
                }).then(function (res) {
                  return res.json();
                });

              case 7:
                introImageResult = _context.sent;

              case 8:
                if (!(_this.state.logoImageList.length > 0)) {
                  _context.next = 14;
                  break;
                }

                logoImageFormData = new FormData();

                _this.state.logoImageList.forEach(function (item) {
                  logoImageFormData.append('logoImage', item.file);
                });

                _context.next = 13;
                return fetch("".concat(_config.config.url.api, "/upload-image/shop-logo-image"), {
                  method: 'POST',
                  body: logoImageFormData
                }).then(function (res) {
                  return res.json();
                });

              case 13:
                logoImageResult = _context.sent;

              case 14:
                // create shop
                (0, _core.initializeFirebaseApp)();
                _context.next = 17;
                return _app.default.auth().currentUser.getIdToken();

              case 17:
                idToken = _context.sent;
                serviceProxy = (0, _services.getServiceProxy)(idToken);
                _context.next = 21;
                return serviceProxy.updateShop(_this.props.shopInfo._id, {
                  operation: 'updateDetail',
                  payload: _objectSpread({}, values, {
                    introImages: introImageResult ? [].concat(_toConsumableArray(introImageResult.introImages), _toConsumableArray(_this.state.shopInfo.introImages)) : _this.state.shopInfo.introImages,
                    logoImage: logoImageResult ? logoImageResult.logoImage : _this.state.shopInfo.logoImage
                  })
                });

              case 21:
                _this.setState({
                  shopInfo: _objectSpread({}, values, {
                    introImages: introImageResult ? [].concat(_toConsumableArray(introImageResult.introImages), _toConsumableArray(_this.state.shopInfo.introImages)) : _this.state.shopInfo.introImages,
                    logoImage: logoImageResult ? logoImageResult.logoImage : _this.state.shopInfo.logoImage
                  }),
                  logoImageList: [],
                  introImageList: [],
                  loading: false
                });

                _message2.default.success('Cập nhật thông tin thành công');

                _context.next = 29;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](1);

                _this.setState({
                  loading: false
                });

                _message2.default.error(_context.t0.message || JSON.parse(_context.t0.response).message);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 25]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(MyShopScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var translate = this.props.t;
      return _react.default.createElement("div", {
        className: "my-shop-screen"
      }, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, "C\u1EEDa h\xE0ng c\u1EE7a t\xF4i | timmay.vn"), _react.default.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), _react.default.createElement("meta", {
        property: "description",
        content: this.props.shopInfo.description
      }), _react.default.createElement("meta", {
        property: "og:url",
        content: "timmay.vn"
      }), _react.default.createElement("meta", {
        property: "og:type",
        content: "website"
      }), _react.default.createElement("meta", {
        property: "og:title",
        content: "C\u1EEDa h\xE0ng c\u1EE7a t\xF4i | timmay.vn"
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
      })), _react.default.createElement(_CommonLayout.default, {
        updateFilters: this.props.updateFilters,
        topBrands: [],
        searchKeyword: this.props.searchKeyword,
        hasSideBar: false,
        hasMenuItems: false,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }, _react.default.createElement(_UserTitle.default, {
        title: translate('my-shop:my-shop')
      }), _react.default.createElement("div", {
        className: "my-shop-container"
      }, _react.default.createElement(_tabs.default, {
        activeKey: this.state.activeKey,
        onChange: function onChange(activeKey) {
          return activeKey ? _this2.setState({
            activeKey: activeKey
          }) : '';
        }
      }, _react.default.createElement(_tabs.default.TabPane, {
        tab: translate('my-shop:shop-info'),
        key: SHOP_INFO
      }, _react.default.createElement(_ShopInfo.default, {
        loading: this.state.loading,
        introImageList: [].concat(_toConsumableArray(this.state.shopInfo.introImages), _toConsumableArray(this.state.introImageList)),
        logoImageList: this.state.logoImageList.length > 0 ? this.state.logoImageList : this.state.shopInfo.logoImage,
        shopInfo: this.props.shopInfo,
        updateShop: this.updateShop,
        removeIntroImage: this.removeIntroImage,
        changeLogoImage: this.changeLogoImage,
        addIntroImage: this.addIntroImage
      })), _react.default.createElement(_tabs.default.TabPane, {
        tab: translate('my-shop:shop-news'),
        key: SHOP_NEWS
      }, _react.default.createElement(_ShopNews.default, {
        shopInfo: this.props.shopInfo,
        categories: this.props.categories,
        brands: this.props.brands,
        weightRanges: this.props.weightRanges,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        followReducers: this.props.followReducers
      })), _react.default.createElement(_tabs.default.TabPane, {
        key: undefined,
        tab: _react.default.createElement("div", null, !_reactDeviceDetect.isMobile ? _react.default.createElement("a", {
          href: "/dang-tin?shop=".concat(this.props.shopInfo._id)
        }, _react.default.createElement(_button.default, {
          type: "primary",
          icon: "plus"
        }, translate('my-shop:create-shop-news'))) : _react.default.createElement("div", null))
      })), _reactDeviceDetect.isMobile ? _react.default.createElement("a", {
        href: "/dang-tin?shop=".concat(this.props.shopInfo._id)
      }, _react.default.createElement(_button.default, {
        className: "button-create-shop-news-mobile",
        type: "primary",
        icon: "plus"
      }, translate('my-shop:create-shop-news'))) : _react.default.createElement("div", null))));
    }
  }]);

  return MyShopScreen;
}(_react.default.Component);

var _default = (0, _i18n.withNamespaces)('my-shop')(MyShopScreen);

exports.default = _default;
//# sourceMappingURL=MyShopScreen.js.map