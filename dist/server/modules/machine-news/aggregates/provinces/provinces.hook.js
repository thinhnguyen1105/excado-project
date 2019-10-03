"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("../../../../core");

var _invalidCache = require("./hooks/invalidCache.hook");

var provinceHook = {
  before: {
    all: [],
    find: [_core.readFromCache],
    create: [_core.addCreationInfo],
    update: [_core.addModificationInfo],
    patch: [_core.addModificationInfo],
    remove: []
  },
  after: {
    find: [_core.writeToCache],
    create: [_invalidCache.invalidProvinceCache],
    patch: [_invalidCache.invalidProvinceCache]
  }
};
var _default = provinceHook;
exports.default = _default;
//# sourceMappingURL=provinces.hook.js.map