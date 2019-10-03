"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _FollowedListScreen = _interopRequireDefault(require("../modules/machine-news/screens/FollowedListScreen/FollowedListScreen"));

var _store = require("../store");

var _services = require("../services");

var jsCookie = _interopRequireWildcard(require("js-cookie"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FollowList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowList, _React$Component);

  function FollowList() {
    _classCallCheck(this, FollowList);

    return _possibleConstructorReturn(this, _getPrototypeOf(FollowList).apply(this, arguments));
  }

  _createClass(FollowList, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_FollowedListScreen.default, {
        commonKeywords: this.props.commonKeywords,
        data: this.props.data,
        searchKeyword: this.props.searchKeyword,
        topBrands: this.props.topBrands,
        profileState: this.props.profileState,
        profileReducers: this.props.profileReducers,
        updateFilters: this.props.updateFilters,
        profileData: this.props.profileData
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(context) {
        var followNewsResult, topBrands, profileData, idToken, serviceProxies, _ref, _ref2, _serviceProxies, _ref3, _ref4;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (context.req) {
                  _context.next = 14;
                  break;
                }

                idToken = jsCookie.get('token');
                serviceProxies = (0, _services.getServiceProxy)(idToken);
                _context.next = 5;
                return serviceProxies.findProfile();

              case 5:
                profileData = _context.sent;
                _context.next = 8;
                return Promise.all([serviceProxies.findFollow(profileData._id, 'news', 'SELL', 16, '_id', undefined, undefined), serviceProxies.findTopBrands()]);

              case 8:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 2);
                followNewsResult = _ref2[0];
                topBrands = _ref2[1];
                _context.next = 24;
                break;

              case 14:
                _serviceProxies = (0, _services.getServiceProxy)(context.req.cookies.token);
                _context.next = 17;
                return _serviceProxies.findProfile();

              case 17:
                profileData = _context.sent;
                _context.next = 20;
                return Promise.all([_serviceProxies.findFollow(profileData._id, 'news', 'SELL', 16, '_id', undefined, undefined), _serviceProxies.findTopBrands()]);

              case 20:
                _ref3 = _context.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                followNewsResult = _ref4[0];
                topBrands = _ref4[1];

              case 24:
                return _context.abrupt("return", {
                  data: followNewsResult.data,
                  topBrands: topBrands.data,
                  profileData: profileData
                });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FollowList;
}(_react.default.Component);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel,
    followState: rootState.followModel,
    searchKeyword: rootState.searchModel.filters.keyword,
    commonKeywords: rootState.metadataModel.commonKeywords
  };
};

var mapDispatch = function mapDispatch(rootReducer) {
  return {
    profileReducers: rootReducer.profileModel,
    followReducer: rootReducer.followModel,
    updateFilters: rootReducer.searchModel.updateFilters
  };
};

var _default = (0, _store.withRematch)(_store.initStore, mapState, mapDispatch)(FollowList);

exports.default = _default;
//# sourceMappingURL=followed-list.js.map