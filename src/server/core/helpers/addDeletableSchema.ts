import { SchemaDefinition } from 'mongoose';

export const addDeletableSchema = (definition: SchemaDefinition): SchemaDefinition => {
  return {
    ...definition,
    deletedBy: {
      type: String,
      ref: 'User',
      es_type: 'text',
    },
    deletedAt: Number,
    isDeleted: {
      type: Boolean,
      default: false,
      es_type: 'boolean',
    },
  };
};
