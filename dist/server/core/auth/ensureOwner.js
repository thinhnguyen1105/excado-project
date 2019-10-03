"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureOwner = void 0;

var _ = require("./..");

var ensureOwner = function ensureOwner(authUser, ownerId) {
  if (!authUser) {
    throw new _.NotAuthenticatedError();
  } else if (authUser.id !== ownerId) {
    throw new _.NotAuthorizedError();
  }
};

exports.ensureOwner = ensureOwner;
//# sourceMappingURL=ensureOwner.js.map