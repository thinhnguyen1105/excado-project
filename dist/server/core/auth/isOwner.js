"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOwner = void 0;

var _ = require("./..");

var isOwner = function isOwner(authUser, ownerId) {
  if (!authUser) {
    throw new _.NotAuthenticatedError();
  }

  return authUser.id === ownerId;
};

exports.isOwner = isOwner;
//# sourceMappingURL=isOwner.js.map