"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRematch = exports.getOrCreateStore = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _services = require("../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __NEXT_REMATCH_STORE__ = '__NEXT_REMATCH_STORE__'; // https://github.com/iliakan/detect-node

var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
};

var getOrCreateStore = function getOrCreateStore(initStore, initialState) {
  // Always make a new store if server
  if (checkServer() || typeof window === 'undefined') {
    return initStore(initialState);
  } // Memoize store in global variable if client


  if (!window[__NEXT_REMATCH_STORE__]) {
    window[__NEXT_REMATCH_STORE__] = initStore(initialState);
  }

  return window[__NEXT_REMATCH_STORE__];
};

exports.getOrCreateStore = getOrCreateStore;

var withRematch = function withRematch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (Component) {
    // First argument is initStore, the rest are redux connect arguments and get passed
    var initStore = args[0],
        connectArgs = args.slice(1); // Connect page to redux with connect arguments

    var ConnectedComponent = _reactRedux.connect.apply(null, connectArgs)(Component);

    var ComponentWithRematch = function ComponentWithRematch() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState,
          others = _objectWithoutProperties(props, ["store", "initialProps", "initialState"]); // Wrap with redux Provider with store
      // Create connected page with initialProps


      return _react.default.createElement(_reactRedux.Provider, {
        store: store && store.dispatch ? store : getOrCreateStore(initStore, initialState)
      }, _react.default.createElement(ConnectedComponent, _objectSpread({}, initialProps, others)));
    };

    ComponentWithRematch.getInitialProps =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var props,
          isServer,
          authUser,
          shopResult,
          serviceProxy,
          store,
          initialProps,
          _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              props = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              isServer = checkServer();

              if (!isServer) {
                _context.next = 9;
                break;
              }

              authUser = props.req.authUser;
              serviceProxy = (0, _services.getServiceProxy)(props.req.cookies.token);

              if (!(authUser && authUser.id)) {
                _context.next = 9;
                break;
              }

              _context.next = 8;
              return serviceProxy.findShopByOwner(authUser.id);

            case 8:
              shopResult = _context.sent;

            case 9:
              store = getOrCreateStore(initStore, {
                profileModel: {
                  modal: {
                    login: false,
                    register: false
                  },
                  authUser: authUser ? _objectSpread({}, authUser, {
                    shopDomain: shopResult && shopResult.domain ? shopResult.domain : undefined
                  }) : undefined
                }
              }); // Run page getInitialProps with store and isServer

              if (!Component.getInitialProps) {
                _context.next = 16;
                break;
              }

              _context.next = 13;
              return Component.getInitialProps(_objectSpread({}, props, {
                isServer: isServer,
                store: store
              }));

            case 13:
              _context.t0 = _context.sent;
              _context.next = 17;
              break;

            case 16:
              _context.t0 = {};

            case 17:
              initialProps = _context.t0;
              return _context.abrupt("return", {
                store: store,
                initialState: store.getState(),
                initialProps: initialProps
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return ComponentWithRematch;
  };
};

exports.withRematch = withRematch;
//# sourceMappingURL=withRematch.js.map