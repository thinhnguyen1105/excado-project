"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Page = require("./Page/Page");

Object.keys(_Page).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Page[key];
    }
  });
});

var _AuthLayout = require("./Auth/AuthLayout");

Object.keys(_AuthLayout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AuthLayout[key];
    }
  });
});

var _CommonLayout = require("./Page/CommonLayout");

Object.keys(_CommonLayout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CommonLayout[key];
    }
  });
});

var _AdminLayout = require("./Admin/AdminLayout");

Object.keys(_AdminLayout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AdminLayout[key];
    }
  });
});
//# sourceMappingURL=index.js.map