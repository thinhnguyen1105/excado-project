"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPermission = void 0;

var _2 = require("./..");

var hasPermission = function hasPermission(user, permission) {
  if (!permission) {
    return true;
  }

  if (!user) {
    throw new _2.NotAuthenticatedError();
  }

  return user.permissions && user.permissions.indexOf(permission) !== -1;
};

exports.hasPermission = hasPermission;
//# sourceMappingURL=hasPermission.js.map