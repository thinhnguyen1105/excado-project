"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = require("./routes");

Object.keys(_routes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _routes[key];
    }
  });
});

var _LoginScreen = require("./screens/LoginScreen/LoginScreen");

Object.keys(_LoginScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LoginScreen[key];
    }
  });
});

var _RegisterScreen = require("./screens/RegisterScreen/RegisterScreen");

Object.keys(_RegisterScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RegisterScreen[key];
    }
  });
});

var _EditProfileScreen = require("./screens/EditProfileScreen/EditProfileScreen");

Object.keys(_EditProfileScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EditProfileScreen[key];
    }
  });
});
//# sourceMappingURL=index.js.map