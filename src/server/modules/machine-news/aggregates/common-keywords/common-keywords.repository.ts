import mongoose from 'mongoose';
import { CommonKeywordRepository } from './interfaces/CommonKeywordRepository';
import { NotImplementedError, execCursorPaging } from '@app/core';

export const CommonKeywordSchema = new mongoose.Schema({
  keyword: String,
  count: {
    type: Number,
    default: 1,
  },
  createdAt: Number,
  lastModifiedAt: Number,
});
CommonKeywordSchema.index({ count: 1, keyword: 1 });
const CommonKeywordModel = mongoose.model('CommonKeyword', CommonKeywordSchema);

export const commonKeywordRepository: CommonKeywordRepository = {
  count: async () => {
    return await CommonKeywordModel.find().countDocuments().exec();
  },
  findOne: async (payload: any) => {
    return await CommonKeywordModel.findOne(payload).exec() as any;
  },
  findById: async (id) => {
    return await CommonKeywordModel.findById(id).exec() as any;
  },
  find: async (query) => {
    const filters: any[] = [];

    return await execCursorPaging(
      CommonKeywordModel,
      filters,
      query.sortBy,
      Number(query.first),
      ['news'],
      query.before,
      query.after,
    );
  },
  create: async (payload) => {
    const newCommonKeyword = new CommonKeywordModel(payload);
    await newCommonKeyword.save();
    return newCommonKeyword.id;
  },
  update: async (payload) => {
    await CommonKeywordModel.findByIdAndUpdate(payload.id, { $set: payload }).exec();
  },
  del: async (_id): Promise<void> => {
    throw new NotImplementedError();
  },
  ensureIndexes: async () => {
    await CommonKeywordModel.createIndexes();
  },
};
