import { SchemaDefinition } from 'mongoose';

export const addAuditableSchema = (definition: SchemaDefinition): SchemaDefinition => {
  return {
    ...definition,
    createdBy: {
      type: String,
      ref: 'User',
      es_type: 'text',
    },
    createdAt: {
      type: Number,
      es_type: 'float',
    },
    lastModifiedBy: {
      type: String,
      ref: 'User',
      es_type: 'text',
    },
    lastModifiedAt: {
      type: Number,
      es_type: 'double',
      default: 0,
    },
  };
};
