"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasRole = void 0;

var _2 = require("./..");

var hasRole = function hasRole(authUser, roleId) {
  if (!roleId) {
    return true;
  } else {
    if (!authUser) {
      throw new _2.NotAuthenticatedError();
    }

    return authUser.roles && authUser.roles.indexOf(roleId) !== -1;
  }
};

exports.hasRole = hasRole;
//# sourceMappingURL=hasRole.js.map