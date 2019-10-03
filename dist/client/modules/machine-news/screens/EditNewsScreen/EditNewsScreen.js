"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("../../../../components");

require("./EditNewsScreen.less");

var _routes = require("../../../../routes");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _services = require("../../../../services");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _CreatePostStep = _interopRequireDefault(require("../CreateNewsScreen/components/CreatePostStep1"));

var _CreatePostStep2 = _interopRequireDefault(require("../CreateNewsScreen/components/CreatePostStep2"));

var _CreatePostStep3 = _interopRequireDefault(require("../CreateNewsScreen/components/CreatePostStep3"));

var _CreatePostStep4 = _interopRequireDefault(require("../CreateNewsScreen/components/CreatePostStep4"));

var _CreatePostStep5 = _interopRequireDefault(require("../CreateNewsScreen/components/CreatePostStep5"));

var _i18n = require("../../../../i18n");

var _head = _interopRequireDefault(require("next/head"));

var _config = require("../../../../config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var EditNewsScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(EditNewsScreen, _Component);

  function EditNewsScreen(props) {
    var _this;

    _classCallCheck(this, EditNewsScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditNewsScreen).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      step: 5,
      fileList: _this.props.data ? _this.props.data.imageUrls.map(function (item, index) {
        return {
          uid: item,
          name: "".concat(index, ".jpg"),
          status: 'done',
          url: "".concat(item, "-large.jpg")
        };
      }) : [],
      loading: false,
      models: [],
      brands: _this.props.brands,
      _id: _this.props.data._id,
      newsType: _this.props.data.newsType,
      categoryId: _this.props.data.categoryId._id,
      brand: _this.props.data.brand ? _this.props.data.brand._id : undefined,
      model: _this.props.data.model ? _this.props.data.model._id : undefined,
      weight: _this.props.data.weight,
      year: _this.props.data.year,
      location: _this.props.data.location ? _this.props.data.location._id : undefined,
      state: _this.props.data.state,
      usedHours: _this.props.data.usedHours,
      serialNo: _this.props.data.serialNo,
      imageUrls: _this.props.data.imageUrls.map(function (item) {
        return {
          uid: item,
          url: item
        };
      }),
      price: _this.props.data.price,
      priceType: _this.props.data.priceType,
      title: _this.props.data.title,
      description: _this.props.data.description,
      selectedWeightRange: _this.props.data.weightRange ? _this.props.data.weightRange.min : undefined,
      selectedRentalPeriod: _this.props.data.rentalPeriod ? _this.props.data.rentalPeriod.min : undefined
    });

    _defineProperty(_assertThisInitialized(_this), "addNewModel", function (payload) {
      _this.setState({
        models: [].concat(_toConsumableArray(_this.state.models), [payload])
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getBrands",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(value) {
        var serviceProxy, brands;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  loading: true
                });

                _context.prev = 1;
                serviceProxy = (0, _services.getServiceProxy)();
                _context.next = 5;
                return serviceProxy.findBrands(value, 20, 'slug|asc', undefined, undefined);

              case 5:
                brands = _context.sent;

                _this.setState({
                  loading: false,
                  brands: brands.data
                });

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_context.t0.message);

                _this.setState({
                  loading: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getModels",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(payload) {
        var allowed, serviceProxy, models;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                allowed = false;

                if (payload.search) {
                  allowed = true;
                } else if ((payload.categoryId || _this.state.categoryId) && (payload.brand || _this.state.brand)) {
                  allowed = true;
                }

                if (!allowed) {
                  _context2.next = 16;
                  break;
                }

                _this.setState({
                  loading: true
                });

                _context2.prev = 4;
                serviceProxy = (0, _services.getServiceProxy)();
                _context2.next = 8;
                return serviceProxy.findModels(payload.search, payload.brand || _this.state.brand, payload.categoryId || _this.state.categoryId, 20, 'slug|asc', undefined, undefined);

              case 8:
                models = _context2.sent;

                _this.setState({
                  loading: false,
                  models: models.data
                });

                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](4);

                _message2.default.error(_context2.t0.message);

                _this.setState({
                  loading: false
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
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

    _defineProperty(_assertThisInitialized(_this), "fetchModelsSuccess", function (payload) {
      _this.setState({
        models: payload
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submit",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      var isSeller, data, idToken, serviceProxy;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({
                loading: true
              });

              _context3.prev = 1;
              isSeller = ['SELL', 'LEASE'].indexOf(_this.state.newsType) > -1;

              if (!(!isSeller || _this.state.imageUrls.length)) {
                _context3.next = 17;
                break;
              }

              data = _objectSpread({}, _this.state, {
                weightRange: isSeller ? undefined : _this.props.weightRanges.filter(function (item) {
                  return item.min === _this.state.selectedWeightRange;
                })[0]._id,
                rentalPeriod: isSeller ? undefined : _this.props.rentalPeriods.filter(function (item) {
                  return item.min === _this.state.selectedRentalPeriod;
                })[0]._id,
                fileList: [],
                owner: _this.props.profileState ? _this.props.profileState.authUser ? _this.props.profileState.authUser.id : '' : '',
                status: 'PUBLIC'
              });
              _context3.next = 7;
              return _app.default.auth().currentUser.getIdToken();

            case 7:
              idToken = _context3.sent;
              _context3.next = 10;
              return (0, _services.getServiceProxy)(idToken);

            case 10:
              serviceProxy = _context3.sent;
              _context3.next = 13;
              return serviceProxy.updateNews(_this.state._id, {
                operation: 'updatePending',
                payload: data
              });

            case 13:
              _message2.default.success('Sửa tin thành công', 3);

              _routes.Router.push('/quan-li-tin-dang');

              _context3.next = 18;
              break;

            case 17:
              _message2.default.error('Bạn cần đăng ít nhất một ảnh mô tả sản phẩm', 5);

            case 18:
              _this.setState({
                loading: false
              });

              _context3.next = 25;
              break;

            case 21:
              _context3.prev = 21;
              _context3.t0 = _context3["catch"](1);

              _message2.default.error(_context3.t0.response || 'Đã có lỗi xảy ra. Vui lòng thử lại.');

              _this.setState({
                loading: false
              });

            case 25:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 21]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "calculateScreen", function () {
      switch (_this.state.step) {
        case 1:
          return _react.default.createElement(_CreatePostStep.default, {
            nextStep: _this.nextStep,
            newsType: _this.state.newsType,
            changeData: _this.changeData,
            updateUserPhoneNo: function updateUserPhoneNo() {
              return null;
            },
            t: _this.props.t
          });

        case 2:
          return _react.default.createElement(_CreatePostStep2.default, {
            newsType: _this.state.newsType,
            selectedRentalPeriod: _this.state.selectedRentalPeriod,
            selectedWeightRange: _this.state.selectedWeightRange,
            weightRanges: _this.props.weightRanges,
            rentalPeriods: _this.props.rentalPeriods,
            nextStep: _this.nextStep,
            backStep: _this.backStep,
            changeData: _this.changeData,
            brands: _this.props.data.brand ? [].concat(_toConsumableArray(_this.state.brands), [_this.props.data.brand]) : _this.state.brands,
            models: _this.props.data.model ? [].concat(_toConsumableArray(_this.state.models), [_this.props.data.model]) : _this.state.models,
            categories: _this.props.categories,
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
            provinces: _this.props.provinces,
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
            isCreate: false,
            selectedRentalPeriod: _this.state.selectedRentalPeriod,
            selectedWeightRange: _this.state.selectedWeightRange,
            weightRanges: _this.props.weightRanges,
            rentalPeriods: _this.props.rentalPeriods,
            backStep: _this.backStep,
            brands: _this.props.data.brand ? [].concat(_toConsumableArray(_this.state.brands), [_this.props.data.brand]) : _this.state.brands,
            models: _this.props.data.model ? [].concat(_toConsumableArray(_this.state.models), [_this.props.data.model]) : _this.state.models,
            categories: _this.props.categories,
            provinces: _this.props.provinces,
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
            nextStep: _this.nextStep,
            newsType: _this.state.newsType,
            changeData: _this.changeData,
            updateUserPhoneNo: function updateUserPhoneNo() {
              return null;
            },
            t: _this.props.t
          });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      _this.setState({
        step: _this.state.step !== 5 ? _this.state.step + 1 : 5
      });
    });

    _defineProperty(_assertThisInitialized(_this), "backStep", function () {
      _this.setState({
        step: _this.state.step === 1 ? 1 : _this.state.step - 1
      });
    });

    _this.getBrands = (0, _debounce.default)(_this.getBrands, 500);
    _this.getModels = (0, _debounce.default)(_this.getModels, 500);
    return _this;
  }

  _createClass(EditNewsScreen, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, "Ch\u1EC9nh s\u1EEDa tin \u0111\u0103ng | timmay.vn"), _react.default.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), _react.default.createElement("meta", {
        property: "og:url",
        content: "timmay.vn"
      }), _react.default.createElement("meta", {
        property: "og:type",
        content: "website"
      }), _react.default.createElement("meta", {
        property: "og:title",
        content: "Ch\u1EC9nh s\u1EEDa tin \u0111\u0103ng | timmay.vn"
      }), _react.default.createElement("meta", {
        property: "og:image:url",
        content: '/static/images/logo-timmay.png'
      }), _react.default.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), _react.default.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), _react.default.createElement(_components.Header, {
        commonKeywords: this.props.commonKeywords,
        updateFilters: this.props.updateFilters,
        searchKeyword: this.props.searchKeyword,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers
      }), _react.default.createElement("div", {
        className: "create-post create-post__container"
      }, this.calculateScreen()));
    }
  }]);

  return EditNewsScreen;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('create-news')(EditNewsScreen);

exports.default = _default;
//# sourceMappingURL=EditNewsScreen.js.map