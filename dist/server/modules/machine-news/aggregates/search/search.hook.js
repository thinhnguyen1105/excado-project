"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("../../../../core");

var _createCommonKeyword = require("../../hooks/createCommonKeyword.hook");

var _checkFollowSearchResult = require("./hooks/checkFollowSearchResult.hook");

var searchHook = {
  before: {
    all: [_core.authenticate, _core.logApiRequest],
    find: [_createCommonKeyword.createCommonKeyword]
  },
  after: {
    find: [_checkFollowSearchResult.checkFollowSearchResult]
  }
};
var _default = searchHook;
exports.default = _default;
//# sourceMappingURL=search.hook.js.map