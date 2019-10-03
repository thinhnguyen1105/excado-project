"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = void 0;

var _config = require("../../config");

var storage = function storage() {
  return require("./".concat(_config.config.storage.type, ".storage"));
};

exports.storage = storage;
//# sourceMappingURL=index.js.map