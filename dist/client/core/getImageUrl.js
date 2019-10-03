"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageUrl = void 0;

var getImageUrl = function getImageUrl(imageUrl, imageType) {
  return imageUrl ? imageUrl.indexOf('.jpg') === -1 && imageUrl.indexOf('.png') === -1 ? "".concat(imageUrl, "-").concat(imageType, ".jpg") : imageUrl : '';
};

exports.getImageUrl = getImageUrl;
//# sourceMappingURL=getImageUrl.js.map