"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("../../../../components");

var _queryString = _interopRequireDefault(require("query-string"));

var _services = require("../../../../services");

var _router = _interopRequireDefault(require("next/router"));

var _CreatePostStep = _interopRequireDefault(require("./components/CreatePostStep1"));

var _CreatePostStep2 = _interopRequireDefault(require("./components/CreatePostStep2"));

var _CreatePostStep3 = _interopRequireDefault(require("./components/CreatePostStep3"));

var _CreatePostStep4 = _interopRequireDefault(require("./components/CreatePostStep4"));

var _CreatePostStep5 = _interopRequireDefault(require("./components/CreatePostStep5"));

require("./components/CreatePost.less");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _i18n = require("../../../../i18n");

var jsCookies = _interopRequireWildcard(require("js-cookie"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var CreateNewsScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateNewsScreen, _Component);

  function CreateNewsScreen(props) {
    var _this;

    _classCallCheck(this, CreateNewsScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateNewsScreen).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      userProfile: undefined,
      step: 1,
      fileList: [],
      loading: false,
      models: [],
      brands: [],
      commonKeywords: [],
      categories: [],
      provinces: [],
      weightRanges: [],
      rentalPeriods: [],
      newsType: undefined,
      categoryId: undefined,
      brand: undefined,
      model: undefined,
      weight: undefined,
      year: undefined,
      location: undefined,
      state: undefined,
      usedHours: 0,
      serialNo: undefined,
      imageUrls: [],
      price: 0,
      priceType: 'FIXED',
      title: undefined,
      description: undefined,
      shop: undefined,
      selectedWeightRange: undefined,
      selectedRentalPeriod: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "getUserProfile",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var idToken, serviceProxy, userProfile;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              idToken = jsCookies.get('token');
              serviceProxy = (0, _services.getServiceProxy)(idToken);
              _context.next = 5;
              return serviceProxy.findProfile();

            case 5:
              userProfile = _context.sent;

              _this.setState({
                userProfile: userProfile
              });

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getWeightRanges",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      var serviceProxy, weightRanges;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context2.next = 4;
              return serviceProxy.getAllWeightRanges();

            case 4:
              weightRanges = _context2.sent;

              _this.setState({
                weightRanges: weightRanges.data
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

    _defineProperty(_assertThisInitialized(_this), "getRentalPeriods",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var serviceProxy, rentalPeriods;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context3.next = 4;
              return serviceProxy.getAllRentalPeriods();

            case 4:
              rentalPeriods = _context3.sent;

              _this.setState({
                rentalPeriods: rentalPeriods.data
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

    _defineProperty(_assertThisInitialized(_this), "getCommonKeywords",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var serviceProxy, commonKeywords;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context4.next = 4;
              return serviceProxy.getCommonKeywords(20, 'count|desc', undefined, undefined);

            case 4:
              commonKeywords = _context4.sent;

              _this.setState({
                commonKeywords: commonKeywords.data
              });

              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getCategories",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5() {
      var serviceProxy, categories;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context5.next = 4;
              return serviceProxy.findCategories();

            case 4:
              categories = _context5.sent;

              _this.setState({
                categories: categories.data
              });

              _context5.next = 11;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context5.t0);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 8]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getProvinces",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6() {
      var serviceProxy, provinces;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              serviceProxy = (0, _services.getServiceProxy)();
              _context6.next = 4;
              return serviceProxy.findProvinces();

            case 4:
              provinces = _context6.sent;

              _this.setState({
                provinces: provinces.data
              });

              _context6.next = 11;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              // tslint:disable-next-line: no-console
              console.log(_context6.t0);

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 8]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getBrands",
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(value) {
        var serviceProxy, brands;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this.setState({
                  loading: true
                });

                _context7.prev = 1;
                serviceProxy = (0, _services.getServiceProxy)();
                _context7.next = 5;
                return serviceProxy.findBrands(value, 20, 'slug|asc', undefined, undefined);

              case 5:
                brands = _context7.sent;

                _this.setState({
                  loading: false,
                  brands: brands.data
                });

                _context7.next = 13;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](1);

                _message2.default.error(_context7.t0.message);

                _this.setState({
                  loading: false
                });

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 9]]);
      }));

      return function (_x) {
        return _ref7.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getModels",
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(payload) {
        var allowed, serviceProxy, models;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                allowed = false;

                if (payload.search) {
                  allowed = true;
                } else if ((payload.categoryId || _this.state.categoryId) && (payload.brand || _this.state.brand)) {
                  allowed = true;
                }

                if (!allowed) {
                  _context8.next = 16;
                  break;
                }

                _this.setState({
                  loading: true
                });

                _context8.prev = 4;
                serviceProxy = (0, _services.getServiceProxy)();
                _context8.next = 8;
                return serviceProxy.findModels(payload.search, payload.brand || _this.state.brand, payload.categoryId || _this.state.categoryId, 20, 'slug|asc', undefined, undefined);

              case 8:
                models = _context8.sent;

                _this.setState({
                  loading: false,
                  models: models.data
                });

                _context8.next = 16;
                break;

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8["catch"](4);

                _message2.default.error(_context8.t0.message);

                _this.setState({
                  loading: false
                });

              case 16:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[4, 12]]);
      }));

      return function (_x2) {
        return _ref8.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "changeFileList", function (payload) {
      _this.setState({
        fileList: payload.fileList,
        imageUrls: _this.state.imageUrls.filter(function (val) {
          return payload.fileList.map(function (item) {
            return item.uid;
          }).indexOf(val.uid) >= 0;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toStep", function (step) {
      _this.setState({
        step: step
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeData", function (option) {
      _this.setState(option);
    });

    _defineProperty(_assertThisInitialized(_this), "submit",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee9() {
      var isSeller, data, serviceProxy;
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _this.setState({
                loading: true
              });

              _context9.prev = 1;
              isSeller = ['SELL', 'LEASE'].indexOf(_this.state.newsType) > -1;

              if (!(!isSeller || _this.state.imageUrls.length)) {
                _context9.next = 14;
                break;
              }

              data = _objectSpread({}, _this.state, {
                weightRange: _this.state.selectedWeightRange,
                rentalPeriod: isSeller ? undefined : _this.state.selectedRentalPeriod,
                fileList: [],
                owner: _this.props.profileState.authUser && _this.props.profileState.authUser.id ? _this.props.profileState.authUser.id : '',
                status: 'PUBLIC'
              });
              _context9.next = 7;
              return (0, _services.getServiceProxy)();

            case 7:
              serviceProxy = _context9.sent;
              _context9.next = 10;
              return serviceProxy.createNews(data);

            case 10:
              _message2.default.success("".concat(_this.props.t('create-news:create-successful')), 3);

              _router.default.push('/quan-li-tin-dang');

              _context9.next = 15;
              break;

            case 14:
              _message2.default.error("".concat(_this.props.t('create-news:image-limit')), 5);

            case 15:
              _this.setState({
                loading: false
              });

              _context9.next = 22;
              break;

            case 18:
              _context9.prev = 18;
              _context9.t0 = _context9["catch"](1);

              _message2.default.error(_context9.t0.response || "".concat(_this.props.t('common:error-happen')));

              _this.setState({
                loading: false
              });

            case 22:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[1, 18]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      var title = _this.state.title;

      if (_this.state.step === 3 || _this.state.step === 4) {
        var newsType = _this.state.newsType;

        var selectedCategory = _this.state.categories.filter(function (item) {
          return item._id === _this.state.categoryId;
        })[0];

        var selectedBrand = _this.state.brands.filter(function (item) {
          return item._id === _this.state.brand;
        })[0];

        var selectedModel = _this.state.models.filter(function (item) {
          return item._id === _this.state.model;
        })[0];

        switch (newsType) {
          case 'SELL':
            title = "".concat(_this.state.year ? _this.state.year : '', " ").concat(selectedBrand.name.toUpperCase(), " ").concat(selectedModel.name, " ").concat(_this.state.serialNo ? _this.state.serialNo : '');
            break;

          case 'LEASE':
            title = "".concat(_this.state.year ? _this.state.year : '', " ").concat(selectedBrand.name.toUpperCase(), " ").concat(selectedModel.name, " ").concat(_this.state.serialNo ? _this.state.serialNo : '');
            break;

          case 'BUY':
            title = "T\xECm mua ".concat(selectedCategory.name);
            break;

          case 'RENT':
            title = "T\xECm thu\xEA ".concat(selectedCategory.name);
            break;

          default:
            break;
        }
      }

      _this.setState({
        step: _this.state.step !== 5 ? _this.state.step + 1 : 5,
        title: title
      });
    });

    _defineProperty(_assertThisInitialized(_this), "backStep", function () {
      _this.setState({
        step: _this.state.step === 1 ? 1 : _this.state.step - 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addNewModel", function (payload) {
      _this.setState({
        models: [].concat(_toConsumableArray(_this.state.models), [payload])
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateUserPhoneNo", function (payload) {
      _this.setState({
        userProfile: _objectSpread({}, _this.state.userProfile, {
          phoneNo: payload.phoneNo
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "calculateScreen", function () {
      switch (_this.state.step) {
        case 1:
          return _react.default.createElement(_CreatePostStep.default, {
            userProfile: _this.state.userProfile,
            nextStep: _this.nextStep,
            newsType: _this.state.newsType,
            changeData: _this.changeData,
            updateUserPhoneNo: _this.updateUserPhoneNo,
            t: _this.props.t
          });

        case 2:
          return _react.default.createElement(_CreatePostStep2.default, {
            newsType: _this.state.newsType,
            selectedRentalPeriod: _this.state.selectedRentalPeriod,
            selectedWeightRange: _this.state.selectedWeightRange,
            weightRanges: _this.state.weightRanges,
            rentalPeriods: _this.state.rentalPeriods,
            nextStep: _this.nextStep,
            backStep: _this.backStep,
            changeData: _this.changeData,
            brands: _this.state.brands,
            models: _this.state.models,
            categories: _this.state.categories,
            categoryId: _this.state.categoryId,
            brand: _this.state.brand,
            model: _this.state.model,
            weight: _this.state.weight,
            year: _this.state.year,
            addNewModel: _this.addNewModel,
            loading: _this.state.loading,
            getBrands: _this.getBrands,
            getModels: _this.getModels,
            t: _this.props.t
          });

        case 3:
          return _react.default.createElement(_CreatePostStep3.default, {
            newsType: _this.state.newsType,
            nextStep: _this.nextStep,
            backStep: _this.backStep,
            changeData: _this.changeData,
            provinces: _this.state.provinces,
            location: _this.state.location,
            state: _this.state.state,
            usedHours: _this.state.usedHours,
            serialNo: _this.state.serialNo,
            price: _this.state.price,
            priceType: _this.state.priceType,
            t: _this.props.t
          });

        case 4:
          return _react.default.createElement(_CreatePostStep4.default, {
            newsType: _this.state.newsType,
            nextStep: _this.nextStep,
            backStep: _this.backStep,
            fileList: _this.state.fileList,
            imageUrls: _this.state.imageUrls,
            title: _this.state.title,
            description: _this.state.description,
            changeData: _this.changeData,
            changeFileList: _this.changeFileList,
            submit: _this.submit,
            t: _this.props.t
          });

        case 5:
          return _react.default.createElement(_CreatePostStep5.default, {
            isCreate: true,
            selectedRentalPeriod: _this.state.selectedRentalPeriod,
            selectedWeightRange: _this.state.selectedWeightRange,
            weightRanges: _this.state.weightRanges,
            rentalPeriods: _this.state.rentalPeriods,
            backStep: _this.backStep,
            brands: _this.state.brands,
            categories: _this.state.categories,
            provinces: _this.state.provinces,
            models: _this.state.models,
            fileList: _this.state.fileList,
            newsType: _this.state.newsType,
            imageUrls: _this.state.imageUrls,
            categoryId: _this.state.categoryId,
            brand: _this.state.brand,
            model: _this.state.model,
            weight: _this.state.weight,
            year: _this.state.year,
            location: _this.state.location,
            state: _this.state.state,
            usedHours: _this.state.usedHours,
            serialNo: _this.state.serialNo,
            price: _this.state.price,
            priceType: _this.state.priceType,
            title: _this.state.title,
            description: _this.state.description,
            changeFileList: _this.changeFileList,
            changeData: _this.changeData,
            toStep: _this.toStep,
            submit: _this.submit,
            loading: _this.state.loading,
            getModels: _this.getModels,
            getBrands: _this.getBrands,
            addNewModel: _this.addNewModel,
            t: _this.props.t
          });

        default:
          return _react.default.createElement(_CreatePostStep.default, {
            userProfile: _this.state.userProfile,
            nextStep: _this.nextStep,
            newsType: _this.state.newsType,
            changeData: _this.changeData,
            updateUserPhoneNo: _this.updateUserPhoneNo,
            t: _this.props.t
          });
      }
    });

    _this.getBrands = (0, _debounce.default)(_this.getBrands, 500);
    _this.getModels = (0, _debounce.default)(_this.getModels, 500);
    return _this;
  }

  _createClass(CreateNewsScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCommonKeywords();
      this.getUserProfile();
      this.getBrands('');
      this.getCategories();
      this.getProvinces();
      this.getWeightRanges();
      this.getRentalPeriods();

      var query = _queryString.default.parse(window.location.search);

      if (query.shop) {
        this.setState({
          shop: query.shop
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_components.Header, {
        commonKeywords: this.state.commonKeywords,
        updateFilters: this.props.updateFilters,
        searchKeyword: this.props.searchKeyword,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), _react.default.createElement("div", {
        className: "create-post create-post__container"
      }, this.calculateScreen()));
    }
  }]);

  return CreateNewsScreen;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('create-news')(CreateNewsScreen);

exports.default = _default;
//# sourceMappingURL=CreateNewsScreen.js.map