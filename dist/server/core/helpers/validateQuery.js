"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateQuery = void 0;

var _UserInputError = require("../errors/UserInputError");

var validateQuery = function validateQuery(query) {
  if (!query) {
    throw new _UserInputError.UserInputError('Query is undefined');
  }

  if (!query.first || isNaN(query.first) || query.first < 0 || query.first > 50) {
    throw new _UserInputError.UserInputError('Query.first is invalid');
  }
};

exports.validateQuery = validateQuery;
//# sourceMappingURL=validateQuery.js.map