"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAuditableSchema = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addAuditableSchema = function addAuditableSchema(definition) {
  return _objectSpread({}, definition, {
    createdBy: {
      type: String,
      ref: 'User',
      es_type: 'text'
    },
    createdAt: {
      type: Number,
      es_type: 'float'
    },
    lastModifiedBy: {
      type: String,
      ref: 'User',
      es_type: 'text'
    },
    lastModifiedAt: {
      type: Number,
      es_type: 'double',
      default: 0
    }
  });
};

exports.addAuditableSchema = addAuditableSchema;
//# sourceMappingURL=addAuditableSchema.js.map