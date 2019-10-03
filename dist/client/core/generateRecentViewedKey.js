"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRecentViewedKey = void 0;

var _uuid = require("uuid");

var _config = require("../config");

var recentViewedCookie = 'recent_viewed';

var generateRecentViewedKey = function generateRecentViewedKey(req, res, next) {
  if (!req.cookies[recentViewedCookie]) {
    var recentViewedKey = (0, _uuid.v4)();
    res.cookie(recentViewedCookie, recentViewedKey, {
      domain: _config.config.cookies.domain
    });
  }

  next();
};

exports.generateRecentViewedKey = generateRecentViewedKey;
//# sourceMappingURL=generateRecentViewedKey.js.map