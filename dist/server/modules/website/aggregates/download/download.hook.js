"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("../../../../core");

var downloadFilesHook = {
  before: {
    all: [// authenticate,
    ],
    find: [],
    create: [_core.addCreationInfo],
    update: [_core.addModificationInfo],
    patch: [_core.addModificationInfo],
    remove: []
  }
};
var _default = downloadFilesHook;
exports.default = _default;
//# sourceMappingURL=download.hook.js.map