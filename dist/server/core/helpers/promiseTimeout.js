"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseTimeout = void 0;

var promiseTimeout = function promiseTimeout(promise) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30000;
  // Create a promise that rejects in <ms> milliseconds
  var timeout = new Promise(function (_resolve, reject) {
    var id = setTimeout(function () {
      clearTimeout(id);
      reject("Timed out in ".concat(ms, " 'ms."));
    }, ms);
  }); // Returns a race between our timeout and the passed in promise

  return Promise.race([promise, timeout]);
};

exports.promiseTimeout = promiseTimeout;
//# sourceMappingURL=promiseTimeout.js.map