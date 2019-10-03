"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBase64Image = void 0;

var getBase64Image = function getBase64Image(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};

exports.getBase64Image = getBase64Image;
//# sourceMappingURL=getBase64Image.js.map