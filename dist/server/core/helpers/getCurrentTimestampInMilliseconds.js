"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTimestampInMilliseconds = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurrentTimestampInMilliseconds = function getCurrentTimestampInMilliseconds() {
  return (0, _moment.default)().valueOf();
};

exports.getCurrentTimestampInMilliseconds = getCurrentTimestampInMilliseconds;
//# sourceMappingURL=getCurrentTimestampInMilliseconds.js.map