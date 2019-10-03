"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var React = _interopRequireWildcard(require("react"));

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _CreateShopStep = _interopRequireDefault(require("./components/CreateShopStep1"));

var _CreateShopStep2 = _interopRequireDefault(require("./components/CreateShopStep2"));

var _CreateShopStep3 = _interopRequireDefault(require("./components/CreateShopStep3"));

var _CreateShopStep4 = _interopRequireDefault(require("./components/CreateShopStep4"));

var _CreateShopStep5 = _interopRequireDefault(require("./components/CreateShopStep5"));

var _CreateShopTitle = _interopRequireDefault(require("./components/CreateShopTitle"));

var _services = require("../../../../services");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _core = require("../../../../core");

require("./CreateShopScreen.less");

var _config = require("../../../../config");

var _i18n = require("../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var CreateShopScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateShopScreen, _React$Component);

  function CreateShopScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateShopScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateShopScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentStep: 1,
      selectedPackage: undefined,
      selectedPaymentMethod: undefined,
      shopInfo: undefined,
      introImageList: [],
      logoImageList: [],
      loading: {
        createShop: false
      }
    });

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      _this.setState({
        currentStep: _this.state.currentStep + 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "backStep", function () {
      _this.setState({
        currentStep: _this.state.currentStep - 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleShopInfoChange", function (payload) {
      _this.setState({
        shopInfo: _objectSpread({}, _this.state.shopInfo, payload)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createShop",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var introImageResult, introImageFormData, logoImageResult, logoImageFormData, idToken, serviceProxy, result;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  createShop: true
                })
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
              return serviceProxy.createShop(_objectSpread({}, _this.state.shopInfo, {
                owner: _this.props.profileState.authUser.id,
                expiryDate: new Date().getTime() + _this.state.selectedPackage.value,
                introImages: introImageResult ? introImageResult.introImages : [],
                logoImage: logoImageResult ? logoImageResult.logoImage : ''
              }));

            case 21:
              result = _context.sent;

              _this.setState({
                shopInfo: _objectSpread({}, _this.state.shopInfo, {
                  id: result._id
                }),
                currentStep: _this.state.currentStep + 1,
                loading: _objectSpread({}, _this.state.loading, {
                  createShop: false
                })
              });

              _this.props.profileReducers.updateProfileInfo({
                shopDomain: _this.state.shopInfo.domain
              });

              _context.next = 30;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](1);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  createShop: false
                })
              });

              _message2.default.error(JSON.parse(_context.t0.response).message || _context.t0.message);

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 26]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "selectPackageChange", function (payload) {
      _this.setState({
        selectedPackage: _core.storePackages.filter(function (item) {
          return item.value === payload.package;
        })[0]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "paymentMethodChange", function (payload) {
      _this.setState({
        selectedPaymentMethod: _core.paymentMethods.filter(function (item) {
          return item.value === payload.paymentMethod;
        })[0]
      });
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

      var newFileList = _this.state.introImageList.slice();

      newFileList.splice(index, 1);

      _this.setState({
        introImageList: newFileList
      });
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

    return _this;
  }

  _createClass(CreateShopScreen, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "create-shop-screen"
      }, React.createElement(_CommonLayout.default, {
        updateFilters: this.props.updateFilters,
        topBrands: this.props.topBrands,
        searchKeyword: this.props.searchKeyword,
        hasSideBar: true,
        hasMenuItems: true,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }, React.createElement(_CreateShopTitle.default, {
        currentStep: this.state.currentStep
      }), React.createElement(_tabs.default, {
        activeKey: String(this.state.currentStep)
      }, React.createElement(TabPane, {
        tab: "Step 1",
        key: "1"
      }, React.createElement(_CreateShopStep.default, {
        nextStep: this.nextStep,
        t: this.props.t
      })), React.createElement(TabPane, {
        tab: "Step 2",
        key: "2"
      }, React.createElement(_CreateShopStep2.default, {
        t: this.props.t,
        selectedPackage: this.state.selectedPackage,
        selectPackageChange: this.selectPackageChange,
        currentStep: this.state.currentStep,
        nextStep: this.nextStep,
        backStep: this.backStep
      })), React.createElement(TabPane, {
        tab: "Step 3",
        key: "3"
      }, React.createElement(_CreateShopStep3.default, {
        nextStep: this.nextStep,
        handleShopInfoChange: this.handleShopInfoChange,
        introImageList: this.state.introImageList,
        logoImageList: this.state.logoImageList,
        changeLogoImage: this.changeLogoImage,
        addIntroImage: this.addIntroImage,
        removeIntroImage: this.removeIntroImage
      })), React.createElement(TabPane, {
        tab: "Step 4",
        key: "4"
      }, React.createElement(_CreateShopStep4.default, {
        isCreating: this.state.loading.createShop,
        nextStep: this.nextStep,
        selectedPackage: this.state.selectedPackage,
        selectedPaymentMethod: this.state.selectedPaymentMethod,
        paymentMethodChange: this.paymentMethodChange,
        createShop: this.createShop
      })), React.createElement(TabPane, {
        tab: "Step 5",
        key: "5"
      }, React.createElement(_CreateShopStep5.default, {
        t: this.props.t
      })))));
    }
  }]);

  return CreateShopScreen;
}(React.Component);

var _default = (0, _i18n.withNamespaces)('create-shop')(CreateShopScreen);

exports.default = _default;
//# sourceMappingURL=CreateShopScreen.js.map