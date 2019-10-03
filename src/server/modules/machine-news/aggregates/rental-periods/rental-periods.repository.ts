import mongoose from 'mongoose';
import { addAuditableSchema, addDeletableSchema, NotImplementedError } from '@app/core';
import { RentalPeriodRepository } from './interfaces/RentalPeriodRepository';

export const RentalPeriodSchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  min: Number,
  max: Number,
})));
export const RentalPeriodModel = mongoose.model('RentalPeriod', RentalPeriodSchema);

export const rentalPeriodRepository: RentalPeriodRepository = {
  findAll: async () => {
    return await RentalPeriodModel.find().exec() as any;
  },
  find: async () => {
    throw new NotImplementedError();
  },
  findById: async (id) => {
    return await RentalPeriodModel.findById(id).exec() as any;
  },
  create: async (payload) => {
    const newRentalPeriod = new RentalPeriodModel(payload);
    const data = await newRentalPeriod.save();
    return data._id;
  },
  update: async (payload) => {
    return await RentalPeriodModel.findByIdAndUpdate(payload.id, {$set: payload}).exec() as any;
  },
  del: async () => {
    throw new NotImplementedError();
  },
  ensureIndexes: async () => {
    await RentalPeriodModel.createIndexes();
  },
  findOne: async () => {
    throw new NotImplementedError();
  },
  count: async () => {
    throw new NotImplementedError();
  },
};
