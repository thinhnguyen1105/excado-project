"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShopUrl = void 0;

var _config = require("../config");

var getShopUrl = function getShopUrl(shopDomain) {
  return _config.config.url.shop.replace('shopDomain', shopDomain);
};

exports.getShopUrl = getShopUrl;
//# sourceMappingURL=getShopUrl.js.map