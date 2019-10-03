"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureRole = void 0;

var _2 = require("./..");

var ensureRole = function ensureRole(authUser, roleId) {
  if (roleId) {
    if (!authUser) {
      throw new _2.NotAuthenticatedError();
    } else if (!authUser.roles || authUser.roles.indexOf(roleId) === -1) {
      throw new _2.NotAuthorizedError();
    }
  }
};

exports.ensureRole = ensureRole;
//# sourceMappingURL=ensureRole.js.map