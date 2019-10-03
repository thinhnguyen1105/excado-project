import mongoose from 'mongoose';
import { addAuditableSchema, NotImplementedError, execCursorPaging } from '@app/core';
import { AdsenseRepository } from '@app/machine-news';

const AdsenseSchema = new mongoose.Schema(addAuditableSchema({
  position: Number,
  imageUrl: String,
  hyperlink: String,
}));
const AdsenseModel = mongoose.model('Adsense', AdsenseSchema);

export const adsenseRepository: AdsenseRepository = {
  findAll: async () => {
    throw new NotImplementedError();
  },
  find: async (query) => {
    const filters: any = [];

    return await execCursorPaging(
      AdsenseModel,
      filters,
      query.sortBy,
      Number(query.first),
      [],
      query.before,
      query.after,
    );
  },
  findById: async (id) => {
    return await AdsenseModel.findById(id).exec() as any;
  },
  findOne: async () => {
    throw new NotImplementedError();
  },
  count: async () => {
    throw new NotImplementedError();
  },
  create: async (payload) => {
    const newAdsense = new AdsenseModel(payload);
    await newAdsense.save();
    return newAdsense.id;
  },
  update: async (payload) => {
    return await AdsenseModel.findByIdAndUpdate(payload.id, {$set: payload}).exec() as any;
  },
  del: async () => {
    throw new NotImplementedError();
  },
  ensureIndexes: async () => {
    await AdsenseModel.createIndexes();
  },
};
