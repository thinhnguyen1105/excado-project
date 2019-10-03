"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminAdsenseScreen = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

require("./AdminAdsenseScreen.less");

var _components = require("../../../../components");

var _store = require("../../../../store");

var _AdsensePositions = _interopRequireDefault(require("./components/AdsensePositions"));

var _AdsenseInfo = _interopRequireDefault(require("./components/AdsenseInfo"));

var _config = require("../../../../config");

var _services = require("../../../../services");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _i18n = require("../../../../i18n");

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

var AdminAdsense =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminAdsense, _React$Component);

  function AdminAdsense() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminAdsense);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminAdsense)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: [],
      before: undefined,
      after: undefined,
      first: 10,
      sortBy: 'position|asc',
      loading: {
        form: false,
        data: false
      },
      logoImage: undefined,
      selectedAdsense: {
        position: 1
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var idToken, serviceProxies, result;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  data: true
                })
              });

              _context.prev = 1;
              _context.next = 4;
              return _app.default.auth().currentUser.getIdToken;

            case 4:
              idToken = _context.sent;
              serviceProxies = (0, _services.getServiceProxy)(idToken);
              _context.next = 8;
              return serviceProxies.getAdsense(_this.state.first, _this.state.sortBy, undefined, undefined);

            case 8:
              result = _context.sent;

              _this.setState({
                data: result.data,
                loading: _objectSpread({}, _this.state.loading, {
                  data: false
                }),
                selectedAdsense: result.data[0] ? result.data[0] : {
                  position: 1
                }
              });

              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);

              _message2.default.error(_context.t0.message);

              _this.setState({
                loading: _objectSpread({}, _this.state.loading, {
                  data: false
                })
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleOk",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(values) {
        var imageUrl, logoImageFormData, logoImageResult, idToken, serviceProxies, result;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    form: true
                  })
                });

                _context2.prev = 1;
                // uploadimage
                imageUrl = '';

                if (!_this.state.logoImage) {
                  _context2.next = 14;
                  break;
                }

                if (!_config.config.upload.allowImageExt.test(_this.state.logoImage.name)) {
                  _context2.next = 13;
                  break;
                }

                logoImageFormData = new FormData();
                logoImageFormData.append('adsenseImage', _this.state.logoImage);
                _context2.next = 9;
                return fetch("".concat(_config.config.url.api, "/upload-image/adsense-image"), {
                  method: 'POST',
                  body: logoImageFormData
                }).then(function (res) {
                  return res.json();
                });

              case 9:
                logoImageResult = _context2.sent;
                imageUrl = logoImageResult.adsenseImage;
                _context2.next = 14;
                break;

              case 13:
                _message2.default.error('Ảnh chỉ nhận các định dạng PNG, JPG, JPEG');

              case 14:
                _context2.next = 16;
                return _app.default.auth().currentUser.getIdToken;

              case 16:
                idToken = _context2.sent;
                serviceProxies = (0, _services.getServiceProxy)(idToken);

                if (!(_this.state.selectedAdsense && _this.state.selectedAdsense._id)) {
                  _context2.next = 25;
                  break;
                }

                _context2.next = 21;
                return serviceProxies.updateAdsense(_this.state.selectedAdsense._id, {
                  operation: 'updateDetail',
                  payload: {
                    name: values.name,
                    hyperlink: values.hyperlink,
                    imageUrl: imageUrl ? imageUrl : _this.state.selectedAdsense.imageUrl
                  }
                });

              case 21:
                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    form: false
                  }),
                  selectedAdsense: _objectSpread({}, _this.state.selectedAdsense, values, {
                    imageUrl: imageUrl ? imageUrl : _this.state.selectedAdsense.imageUrl
                  }),
                  data: _this.state.data.map(function (item) {
                    return item._id === _this.state.selectedAdsense._id ? _objectSpread({}, item, values, {
                      imageUrl: imageUrl ? imageUrl : _this.state.selectedAdsense.imageUrl
                    }) : item;
                  })
                });

                _message2.default.success(_this.props.t('admin-adsense:update-success'));

                _context2.next = 30;
                break;

              case 25:
                _context2.next = 27;
                return serviceProxies.createAdsense({
                  name: values.name,
                  hyperlink: values.hyperlink,
                  position: _this.state.selectedAdsense.position,
                  imageUrl: imageUrl
                });

              case 27:
                result = _context2.sent;

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    form: false
                  }),
                  selectedAdsense: _objectSpread({
                    _id: result.id
                  }, values, {
                    position: _this.state.selectedAdsense.position,
                    imageUrl: imageUrl
                  }),
                  data: [_objectSpread({
                    _id: result.id
                  }, values, {
                    position: _this.state.selectedAdsense.position,
                    imageUrl: imageUrl,
                    createdAt: new Date().getTime()
                  })].concat(_toConsumableArray(_this.state.data))
                });

                _message2.default.success(_this.props.t('admin-adsense:update-success'));

              case 30:
                _context2.next = 36;
                break;

              case 32:
                _context2.prev = 32;
                _context2.t0 = _context2["catch"](1);

                _message2.default.error(_context2.t0.message);

                _this.setState({
                  loading: _objectSpread({}, _this.state.loading, {
                    form: false
                  })
                });

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 32]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "uploadLogoImage",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(file) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.setState({
                  logoImage: file
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "selectedAdsChange", function (position) {
      var selectedAds = _this.state.data.filter(function (item) {
        return item.position === position;
      })[0];

      _this.setState({
        selectedAdsense: selectedAds && selectedAds._id ? selectedAds : {
          position: position
        }
      });
    });

    return _this;
  }

  _createClass(AdminAdsense, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "admin-adsense-screen"
      }, _react.default.createElement(_spin.default, {
        spinning: this.state.loading.data
      }, _react.default.createElement(_row.default, {
        gutter: 36
      }, _react.default.createElement(_col.default, {
        xs: 8
      }, _react.default.createElement(_AdsensePositions.default, {
        adsenseInfo: this.state.selectedAdsense,
        selectedAdsChange: this.selectedAdsChange
      })), _react.default.createElement(_col.default, {
        xs: 16
      }, _react.default.createElement(_AdsenseInfo.default, {
        adsenseInfo: this.state.selectedAdsense,
        loading: this.state.loading.form,
        handleOk: this.handleOk,
        uploadLogoImage: this.uploadLogoImage
      })))));
    }
  }]);

  return AdminAdsense;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel
  };
};

var mapDispatch = function mapDispatch(_rootReducer) {
  return {};
};

var AdminAdsenseScreen = (0, _components.Authorize)((0, _store.withRematch)(_store.initStore, mapState, mapDispatch)((0, _i18n.withNamespaces)('admin-adsense')(AdminAdsense)), [], true, 'admin');
exports.AdminAdsenseScreen = AdminAdsenseScreen;
//# sourceMappingURL=AdminAdsenseScreen.js.map