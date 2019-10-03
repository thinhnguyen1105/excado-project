"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var React = _interopRequireWildcard(require("react"));

var _CommonLayout = _interopRequireDefault(require("../../../../layouts/Page/CommonLayout"));

var _UserContact = _interopRequireDefault(require("./components/UserContact"));

var _UserNewsDetail = _interopRequireDefault(require("./components/UserNewsDetail"));

var _services = require("../../../../services");

var _core = require("../../../../core");

require("./UserNewsScreen.less");

var _CallMessButtonMobile = _interopRequireDefault(require("../DetailNewsScreen/components/CallMessButtonMobile"));

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

var UserNewsScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserNewsScreen, _React$Component);

  function UserNewsScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserNewsScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserNewsScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      activeTab: _core.newsTypes[0].value,
      first: 12,
      sortBy: 'elasticsearchCreatedAt|desc',
      SELL: _this.props.newsResult,
      profileData: _this.props.profileData
    });

    _defineProperty(_assertThisInitialized(_this), "changeFollowStatus",
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
                return _this.setState(_defineProperty({}, _this.state.activeTab, _objectSpread({}, _this.state[_this.state.activeTab], {
                  data: _this.state[_this.state.activeTab].data.map(function (value) {
                    if (value._id === id) {
                      return _objectSpread({}, value, {
                        isFollowing: false
                      });
                    } else return value;
                  })
                })));

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
                return _this.setState(_defineProperty({}, _this.state.activeTab, _objectSpread({}, _this.state[_this.state.activeTab], {
                  data: _this.state[_this.state.activeTab].data.map(function (value) {
                    if (value._id === id) {
                      return _objectSpread({}, value, {
                        isFollowing: true
                      });
                    } else return value;
                  })
                })));

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.next = 16;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 16:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 17:
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
                  profileData: _objectSpread({}, _this.state.profileData, {
                    isFollowing: false,
                    counterFollow: _this.state.profileData.counterFollow - 1
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
                  profileData: _objectSpread({}, _this.state.profileData, {
                    isFollowing: true,
                    counterFollow: _this.state.profileData.counterFollow + 1
                  })
                });

              case 12:
                _context2.next = 17;
                break;

              case 14:
                _context2.next = 16;
                return _this.props.profileReducers.openModal({
                  modalName: 'login'
                });

              case 16:
                _message2.default.warning('Bạn cần đăng nhập để thực hiện chức năng này!');

              case 17:
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

    _defineProperty(_assertThisInitialized(_this), "activeTabChange",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(payload) {
        var _this$setState3, serviceProxies, newsResult;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this.state[payload.activeTab]) {
                  _context3.next = 4;
                  break;
                }

                _this.setState({
                  activeTab: payload.activeTab
                });

                _context3.next = 17;
                break;

              case 4:
                _this.setState({
                  loading: true
                });

                _context3.prev = 5;
                serviceProxies = (0, _services.getServiceProxy)();
                _context3.next = 9;
                return serviceProxies.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, payload.activeTab, undefined, _this.state.profileData._id, undefined, undefined, undefined, undefined, undefined, _this.state.first, _this.state.sortBy, undefined, undefined);

              case 9:
                newsResult = _context3.sent;

                _this.setState((_this$setState3 = {
                  loading: false
                }, _defineProperty(_this$setState3, payload.activeTab, newsResult), _defineProperty(_this$setState3, "activeTab", payload.activeTab), _this$setState3));

                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);

                _message2.default.error(_context3.t0.message);

                _this.setState({
                  loading: false
                });

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      return function (_x5) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getNextPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4() {
      var serviceProxies, newsResult;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!_this.state[_this.state.activeTab].after) {
                _context4.next = 14;
                break;
              }

              _this.setState({
                loading: true
              });

              _context4.prev = 2;
              serviceProxies = (0, _services.getServiceProxy)();
              _context4.next = 6;
              return serviceProxies.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, _this.state.activeTab, undefined, _this.state.profileData._id, undefined, undefined, undefined, undefined, undefined, _this.state.first, _this.state.sortBy, undefined, _this.state[_this.state.activeTab].after);

            case 6:
              newsResult = _context4.sent;

              _this.setState(_defineProperty({
                loading: false
              }, _this.state.activeTab, newsResult));

              _context4.next = 14;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](2);

              _message2.default.error(_context4.t0.message);

              _this.setState({
                loading: false
              });

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 10]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getPrevPage",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5() {
      var serviceProxies, newsResult;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!_this.state[_this.state.activeTab].before) {
                _context5.next = 14;
                break;
              }

              _this.setState({
                loading: true
              });

              _context5.prev = 2;
              serviceProxies = (0, _services.getServiceProxy)();
              _context5.next = 6;
              return serviceProxies.searchElasticsearch(undefined, undefined, undefined, undefined, undefined, undefined, undefined, _this.state.activeTab, undefined, _this.state.profileData._id, undefined, undefined, undefined, undefined, undefined, _this.state.first, _this.state.sortBy, _this.state[_this.state.activeTab].before, undefined);

            case 6:
              newsResult = _context5.sent;

              _this.setState(_defineProperty({
                loading: false
              }, _this.state.activeTab, newsResult));

              _context5.next = 14;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](2);

              _message2.default.error(_context5.t0.message);

              _this.setState({
                loading: false
              });

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 10]]);
    })));

    return _this;
  }

  _createClass(UserNewsScreen, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(_head.default, null, React.createElement("title", null, "Ng\u01B0\u1EDDi d\xF9ng ".concat(this.props.profileData.fullName ? this.props.profileData.fullName : this.props.profileData.email ? this.props.profileData.email : this.props.profileData.phoneNo ? this.props.profileData.phoneNo : '', " | timmay.vn")), React.createElement("meta", {
        property: "fb:app_id",
        content: _config.config.facebookAppId
      }), React.createElement("meta", {
        property: "description",
        content: this.props.profileData.description
      }), React.createElement("meta", {
        property: "og:url",
        content: "".concat(_config.config.url.main, "/nguoi-dung/").concat(this.props.profileData._id)
      }), React.createElement("meta", {
        property: "og:type",
        content: "website"
      }), React.createElement("meta", {
        property: "og:title",
        content: "Ng\u01B0\u1EDDi d\xF9ng ".concat(this.props.profileData.fullName, " | timmay.vn")
      }), React.createElement("meta", {
        property: "og:description",
        content: this.props.profileData.description
      }), React.createElement("meta", {
        property: "og:image:url",
        content: this.props.profileData.avatarUrl ? this.props.profileData.avatarUrl : "/static/images/logo-timmay.png"
      }), React.createElement("meta", {
        property: "og:image:width",
        content: "800"
      }), React.createElement("meta", {
        property: "og:image:height",
        content: "600"
      })), React.createElement(_CommonLayout.default, {
        topBrands: this.props.topBrands,
        searchKeyword: this.props.searchKeyword,
        hasSideBar: true,
        hasMenuItems: true,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        updateFilters: this.props.updateFilters
      }, React.createElement(_row.default, {
        className: "user-screen"
      }, React.createElement(_col.default, {
        lg: 6,
        className: "user-screen-contact"
      }, React.createElement(_UserContact.default, {
        profileState: _objectSpread({}, this.props.profileState, {
          authUser: _objectSpread({}, this.props.profileState.authUser, {
            avatarUrl: this.state.profileData && this.state.profileData.avatarUrl ? this.state.profileData.avatarUrl : undefined
          })
        }),
        profileData: this.state.profileData,
        changeFollowUserStatus: this.changeFollowUserStatus,
        starStatus: this.state.profileData.isFollowing ? 'filled' : '',
        t: this.props.t
      })), React.createElement(_col.default, {
        lg: 18,
        className: "user-screen-news"
      }, React.createElement(_UserNewsDetail.default, {
        hasNext: Boolean(this.state[this.state.activeTab].after),
        hasPrev: Boolean(this.state[this.state.activeTab].before),
        getNextPage: this.getNextPage,
        getPrevPage: this.getPrevPage,
        data: this.state[this.state.activeTab].data,
        loading: this.state.loading,
        activeTab: this.state.activeTab,
        activeTabChange: this.activeTabChange,
        profileState: _objectSpread({}, this.props.profileState, {
          authUser: _objectSpread({}, this.props.profileState.authUser, {
            avatarUrl: this.state.profileData && this.state.profileData.avatarUrl ? this.state.profileData.avatarUrl : undefined
          })
        }),
        changeFollowStatus: this.changeFollowStatus,
        t: this.props.t
      }))), this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id !== this.props.profileData._id ? React.createElement(_CallMessButtonMobile.default, {
        phoneNo: this.props.profileData.phoneNo
      }) : null));
    }
  }]);

  return UserNewsScreen;
}(React.Component);

var _default = (0, _i18n.withNamespaces)('user-page')(UserNewsScreen);

exports.default = _default;
//# sourceMappingURL=UserNewsScreen.js.map