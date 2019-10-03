"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTimestampInSeconds = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurrentTimestampInSeconds = function getCurrentTimestampInSeconds() {
  return (0, _moment.default)().unix();
};

exports.getCurrentTimestampInSeconds = getCurrentTimestampInSeconds;
//# sourceMappingURL=getCurrentTimestampInSeconds.js.map