"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeBase64 = void 0;

/**
 * decode base 64 string to json object
 */
var decodeBase64 = function decodeBase64(str) {
  return JSON.parse(Buffer.from(str, 'base64').toString('ascii'));
};

exports.decodeBase64 = decodeBase64;
//# sourceMappingURL=decodeBase64.js.map