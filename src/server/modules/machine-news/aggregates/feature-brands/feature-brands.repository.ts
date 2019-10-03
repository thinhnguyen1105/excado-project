import mongoose from 'mongoose';
import { addAuditableSchema, NotImplementedError, execCursorPaging } from '@app/core';
import { FeatureBrandRepository } from './interfaces/FeatureBrandRepository';

const FeatureBrandSchema = new mongoose.Schema(addAuditableSchema({
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
  },
  logoImage: String,
  hyperlink: String,
  order: Number,
}));
const FeatureBrandModel = mongoose.model('FeatureBrand', FeatureBrandSchema);

export const featureBrandRepository: FeatureBrandRepository = {
  findAll: async () => {
    throw new NotImplementedError();
  },
  find: async (query) => {
    const filters: any = [];

    return await execCursorPaging(
      FeatureBrandModel,
      filters,
      query.sortBy,
      Number(query.first),
      ['brand'],
      query.before,
      query.after,
    );
  },
  findById: async (id) => {
    return await FeatureBrandModel.findById(id).exec() as any;
  },
  findOne: async () => {
    throw new NotImplementedError();
  },
  count: async () => {
    throw new NotImplementedError();
  },
  create: async (payload) => {
    const newFeatureBrand = new FeatureBrandModel(payload);
    await newFeatureBrand.save();
    return newFeatureBrand.id;
  },
  update: async (payload) => {
    return await FeatureBrandModel.findByIdAndUpdate(payload.id, {$set: payload}).exec() as any;
  },
  del: async () => {
    throw new NotImplementedError();
  },
  ensureIndexes: async () => {
    await FeatureBrandModel.createIndexes();
  },
};
