"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("../../../../core");

var _ = require("../..");

var mostFollowHook = {
  before: {
    all: [],
    find: [_core.authenticate]
  },
  after: {
    find: [_.checkFollowSearchResult]
  }
};
var _default = mostFollowHook;
exports.default = _default;
//# sourceMappingURL=search-news-most-follow.hook.js.map