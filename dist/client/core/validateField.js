"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateField = void 0;

var validateField = function validateField(params) {
  try {
    params.validateSchema.validateSyncAt(params.fieldName, params.context.values);
    params.context.setFieldError(params.fieldName, '');
  } catch (error) {
    params.context.setFieldError(params.fieldName, error.message);
  }
};

exports.validateField = validateField;
//# sourceMappingURL=validateField.js.map