"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeBase64 = void 0;

/**
 * encode json object to base 64 string
 */
var encodeBase64 = function encodeBase64(obj) {
  return Buffer.from(JSON.stringify(obj)).toString('base64');
};

exports.encodeBase64 = encodeBase64;
//# sourceMappingURL=encodeBase64.js.map