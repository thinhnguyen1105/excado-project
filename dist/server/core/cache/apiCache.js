"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiCache = void 0;

var _nodeCache = _interopRequireDefault(require("node-cache"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiCache = new _nodeCache.default({
  stdTTL: _config.config.cache.ttl,
  checkperiod: _config.config.cache.checkperiod
});
exports.apiCache = apiCache;
//# sourceMappingURL=apiCache.js.map