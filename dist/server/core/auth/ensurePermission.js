"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensurePermission = void 0;

var _2 = require("./..");

var ensurePermission = function ensurePermission(user, permission) {
  if (permission) {
    if (!user) {
      throw new _2.NotAuthenticatedError();
    } else if (!user.permissions || user.permissions.indexOf(permission) === -1) {
      throw new _2.NotAuthorizedError();
    }
  }
};

exports.ensurePermission = ensurePermission;
//# sourceMappingURL=ensurePermission.js.map