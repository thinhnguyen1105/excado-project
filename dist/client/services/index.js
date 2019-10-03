"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceProxy = void 0;

require("firebase/auth");

var _serviceProxies = require("./service-proxies");

var _config = require("../config");

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAuthHttp = function getAuthHttp(idToken) {
  return {
    fetch: function fetch(url, option) {
      option.headers.Authorization = "".concat(idToken);
      option.headers['Access-Control-Allow-Origin'] = '*';
      option.credentials = 'include';
      return (0, _isomorphicFetch.default)(url, option);
    }
  };
};

var getServiceProxy = function getServiceProxy() {
  var idToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var httpOption = getAuthHttp(idToken);
  return new _serviceProxies.ServiceProxy(_config.config.url.api, httpOption);
};

exports.getServiceProxy = getServiceProxy;
//# sourceMappingURL=index.js.map