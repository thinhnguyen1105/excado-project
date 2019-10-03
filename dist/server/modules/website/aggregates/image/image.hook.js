"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("../../../../core");

var newsHook = {
  before: {
    all: [],
    find: [],
    create: [_core.addCreationInfo],
    update: [_core.addModificationInfo],
    patch: [_core.addModificationInfo],
    remove: []
  }
};
var _default = newsHook;
exports.default = _default;
//# sourceMappingURL=image.hook.js.map