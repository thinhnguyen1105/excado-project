"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/card/style");

var _card = _interopRequireDefault(require("antd/lib/card"));

require("antd/lib/upload/style");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireDefault(require("react"));

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _UserTitle = _interopRequireDefault(require("../../../machine-news/screens/DashboardScreen/components/UserTitle"));

require("./EditProfileScreen.less");

var _UserProfileForm = _interopRequireDefault(require("./components/UserProfileForm"));

var _core = require("../../../../core");

var _firebase = _interopRequireDefault(require("firebase"));

require("firebase/auth");

var _services = require("../../../../services");

var _config = require("../../../../config");

var _reactDeviceDetect = require("react-device-detect");

var _i18n = require("../../../../i18n");

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

var EditProfileScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditProfileScreen, _React$Component);

  function EditProfileScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditProfileScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditProfileScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      userProfile: _this.props.userProfile,
      avatarImageList: []
    });

    _defineProperty(_assertThisInitialized(_this), "editUserProfile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(payload) {
        var idToken, serviceProxy;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  loading: true
                });

                _context.prev = 1;
                (0, _core.initializeFirebaseApp)();
                _context.next = 5;
                return _firebase.default.auth().currentUser.getIdToken();

              case 5:
                idToken = _context.sent;
                serviceProxy = (0, _services.getServiceProxy)(idToken);
                _context.next = 9;
                return serviceProxy.updateProfile(_this.props.userProfile._id, {
                  operation: payload.newPassword ? 'changePassword' : payload.avatarUrl ? 'updateAvatar' : 'updateDetail',
                  payload: payload
                });

              case 9:
                _this.setState({
                  loading: false,
                  userProfile: _objectSpread({}, _this.state.userProfile, payload)
                });

                if (payload.familyName || payload.givenName) {
                  _this.props.profileReducers.updateProfileInfo({
                    fullName: [payload.familyName, payload.givenName].join(' ')
                  });

                  _this.setState({
                    fullName: [payload.familyName, payload.givenName].join(' ')
                  });
                }

                _message2.default.success(_this.props.t('edit-profile:updateProfileSuccess'));

                return _context.abrupt("return", true);

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);

                _message2.default.error(_context.t0.message || JSON.parse(_context.t0.response).message);

                _this.setState({
                  loading: false
                });

                return _context.abrupt("return", false);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "uploadAvatar",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(file) {
        var avatarImageResult, avatarImageFormData;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_config.config.upload.allowImageExt.test(file.name)) {
                  _context2.next = 11;
                  break;
                }

                avatarImageFormData = new FormData();
                avatarImageFormData.append('avatarImage', file);
                _context2.next = 5;
                return fetch("".concat(_config.config.url.api, "/upload-image/avatar-image"), {
                  method: 'POST',
                  body: avatarImageFormData
                }).then(function (res) {
                  return res.json();
                });

              case 5:
                avatarImageResult = _context2.sent;
                _context2.next = 8;
                return _this.editUserProfile(avatarImageResult);

              case 8:
                _this.setState({
                  userProfile: _objectSpread({}, _this.state.userProfile, avatarImageResult)
                });

                _context2.next = 12;
                break;

              case 11:
                _message2.default.error('Ảnh chỉ nhận các định dạng PNG, JPG, JPEG');

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "avatarImageBeforeUpload",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(file) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.uploadAvatar(file);

                return _context3.abrupt("return", false);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(EditProfileScreen, [{
    key: "render",
    value: function render() {
      var translate = this.props.t;
      return _react.default.createElement("div", {
        className: "edit-profile-screen"
      }, _react.default.createElement(_CommonLayout.default, {
        updateFilters: this.props.updateFilters,
        topBrands: [],
        searchKeyword: this.props.searchKeyword,
        hasSideBar: false,
        hasMenuItems: false,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        fullName: this.state.fullName
      }, _react.default.createElement(_UserTitle.default, {
        title: translate('edit-profile:profile-settings')
      }), _react.default.createElement("div", {
        className: "edit-profile-container"
      }, _react.default.createElement(_row.default, {
        type: "flex",
        gutter: !_reactDeviceDetect.isMobile ? 24 : 0
      }, _react.default.createElement(_col.default, {
        lg: 8,
        md: 8,
        sm: 24,
        xs: 24
      }, _react.default.createElement(_card.default, {
        style: {
          padding: '20px 20px 0px 20px',
          margin: '0 auto',
          maxWidth: '240px'
        },
        cover: _react.default.createElement("div", {
          className: "circular--landscape"
        }, _react.default.createElement("div", {
          style: {
            width: '100%',
            height: '100%',
            backgroundImage: "url(".concat(this.state.userProfile.avatarUrl ? this.state.userProfile.avatarUrl : '/static/images/default-avatar.jpg', ")"),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }
        }))
      }, _react.default.createElement(_card.default.Meta, {
        title: _react.default.createElement(_upload.default, {
          beforeUpload: this.avatarImageBeforeUpload,
          showUploadList: false
        }, _react.default.createElement(_button.default, {
          icon: "upload"
        }, translate('edit-profile:uploadAvatar')))
      }))), _react.default.createElement(_col.default, {
        lg: 16,
        md: 16,
        sm: 24,
        xs: 24
      }, _react.default.createElement(_UserProfileForm.default, {
        loading: this.state.loading,
        userProfile: this.state.userProfile,
        editUserProfile: this.editUserProfile,
        provinces: this.props.provinces,
        t: this.props.t
      }))))));
    }
  }]);

  return EditProfileScreen;
}(_react.default.Component);

var _default = (0, _i18n.withNamespaces)('edit-profile')(EditProfileScreen);

exports.default = _default;
//# sourceMappingURL=EditProfileScreen.js.map