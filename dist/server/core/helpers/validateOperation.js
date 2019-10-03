"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateOperation = void 0;

var _UserInputError = require("../errors/UserInputError");

var validateOperation = function validateOperation(operation, allowedOperations) {
  if (allowedOperations.indexOf(operation) === -1) {
    throw new _UserInputError.UserInputError('Invalid operation');
  }
};

exports.validateOperation = validateOperation;
//# sourceMappingURL=validateOperation.js.map