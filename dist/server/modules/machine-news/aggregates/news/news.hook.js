"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("../../../../core");

var _createNotification = require("./hooks/createNotification.hook");

var _addOldNews = require("./hooks/addOldNews.hook");

var _increaseNewsCount = require("./hooks/increaseNewsCount.hook");

var _updateNewsCount = require("./hooks/updateNewsCount.hook");

var _invalidCache = require("../categories/hooks/invalidCache.hook");

var _invalidBrandDetailCache = require("./hooks/invalidBrandDetailCache.hook");

var _invalidCategoryDetailCache = require("./hooks/invalidCategoryDetailCache.hook");

var _invalidCache2 = require("../provinces/hooks/invalidCache.hook");

var _invalidAllBrandsCache = require("../brands/hooks/invalidAllBrandsCache.hook");

var _invalidTopBrandsCache = require("../brands/hooks/invalidTopBrandsCache.hook");

var _checkFollowNews = require("./hooks/checkFollowNews.hook");

var newsHook = {
  before: {
    all: [_core.authenticate, _core.logApiRequest],
    find: [],
    create: [_core.authenticate, _core.addCreationInfo],
    update: [_core.authenticate, _core.addModificationInfo],
    patch: [_core.authenticate, _core.addModificationInfo, _addOldNews.addOldNews],
    remove: []
  },
  after: {
    get: [_checkFollowNews.checkFollowNews],
    create: [_increaseNewsCount.increaseNewsCount, _createNotification.createNotification, _invalidCache.invalidCategoryCache, _invalidCache2.invalidProvinceCache, _invalidAllBrandsCache.invalidAllBrandsCache, _invalidTopBrandsCache.invalidTopBrandsCache, _invalidCategoryDetailCache.invalidCategoryDetailCache, _invalidBrandDetailCache.invalidBrandDetailCache],
    patch: [_updateNewsCount.updateNewsCount, _invalidCache.invalidCategoryCache, _invalidCache2.invalidProvinceCache, _invalidAllBrandsCache.invalidAllBrandsCache, _invalidTopBrandsCache.invalidTopBrandsCache, _invalidCategoryDetailCache.invalidCategoryDetailCache, _invalidBrandDetailCache.invalidBrandDetailCache]
  }
};
var _default = newsHook;
exports.default = _default;
//# sourceMappingURL=news.hook.js.map