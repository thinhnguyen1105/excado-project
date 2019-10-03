"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = require("./default.config");

Object.keys(_default).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _default[key];
    }
  });
});
//# sourceMappingURL=index.js.map