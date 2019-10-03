"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeToCache = void 0;

var _core = require("../../../../../core");

var writeToCache = function writeToCache(key, value) {
  _core.apiCache.set(key, value);
};

exports.writeToCache = writeToCache;
//# sourceMappingURL=writeToCache.middleware.js.map