import mongoose from 'mongoose';
import { addAuditableSchema, addDeletableSchema, NotImplementedError } from '@app/core';
import { WeightRangeRepository } from './interfaces/WeightRangeRepository';

export const WeightRangeSchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  min: Number,
  max: Number,
})));
export const WeightRangeModel = mongoose.model('WeightRange', WeightRangeSchema);

export const weightRangeRepository: WeightRangeRepository = {
  findAll: async () => {
    return await WeightRangeModel.find().exec() as any;
  },
  find: async () => {
    throw new NotImplementedError();
  },
  findById: async (id) => {
    return await WeightRangeModel.findById(id).exec() as any;
  },
  create: async (payload) => {
    const newWeightRange = new WeightRangeModel(payload);
    const data = await newWeightRange.save();
    return data._id;
  },
  update: async (payload) => {
    return await WeightRangeModel.findByIdAndUpdate(payload.id, {$set: payload}).exec() as any;
  },
  del: async () => {
    throw new NotImplementedError();
  },
  ensureIndexes: async () => {
    await WeightRangeModel.createIndexes();
  },
  findOne: async () => {
    throw new NotImplementedError();
  },
  count: async () => {
    throw new NotImplementedError();
  },
};
