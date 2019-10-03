"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPermission = void 0;

var checkPermission = function checkPermission(authUser, requiredPermission) {
  if (!requiredPermission) {
    return true;
  }

  return requiredPermission && authUser && authUser.permissions && authUser.permissions.indexOf(requiredPermission) > -1;
};

exports.checkPermission = checkPermission;
//# sourceMappingURL=checkPermission.js.map