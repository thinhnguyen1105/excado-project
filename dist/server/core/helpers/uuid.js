"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuid = void 0;

var _v = _interopRequireDefault(require("uuid/v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = function uuid() {
  return (0, _v.default)();
};

exports.uuid = uuid;
//# sourceMappingURL=uuid.js.map