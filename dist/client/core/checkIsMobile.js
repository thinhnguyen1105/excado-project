"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = void 0;

var isMobile = function isMobile(req) {
  var userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i) ? true : false;
};

exports.isMobile = isMobile;
//# sourceMappingURL=checkIsMobile.js.map