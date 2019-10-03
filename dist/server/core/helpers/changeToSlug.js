"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeToSlug = void 0;

var _slugify = _interopRequireDefault(require("slugify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeToSlug = function changeToSlug(title) {
  return (0, _slugify.default)(title).replace(/-/g, ' ') + ' ';
};

exports.changeToSlug = changeToSlug;
//# sourceMappingURL=changeToSlug.js.map