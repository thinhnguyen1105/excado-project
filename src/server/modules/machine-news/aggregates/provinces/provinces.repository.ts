import { addDeletableSchema, addAuditableSchema, FindResult, NotImplementedError } from '@app/core';
import { Province, ProvinceRepository } from '@app/machine-news';
import mongoose from 'mongoose';

export const ProvinceSchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  slug: String,
  name: String,
  totalNews: {
    type: Number,
    default: 0,
  },
})));

export const ProvinceModel = mongoose.model('Province', ProvinceSchema);

const find = async (): Promise<FindResult<Province>> => {
  return {
    data: await ProvinceModel.find().sort({slug: 1}) as any,
  };
};

const findById = async (id: string): Promise<Province> => {
  return await ProvinceModel.findById(id).exec() as any;
};

const create = async (payload: Partial<Province>): Promise<string> => {
  const newProvince = new ProvinceModel(payload);
  const data = await newProvince.save();
  return data._id;
};

const update = async (payload: any): Promise<void> => {
  await ProvinceModel.findByIdAndUpdate(payload._id, { $set: payload }).exec();
};

const del = async (_id: string): Promise<void> => {
  throw new NotImplementedError();
};

const ensureIndexes = async () => {
  await ProvinceModel.createIndexes();
};

const findOne = async (_query: any): Promise<Province> => {
  throw new NotImplementedError();
};

const count = async (): Promise<number> => {
  throw new NotImplementedError();
};

const increaseNewsCount = async (provinceId: string) => {
  await ProvinceModel.findByIdAndUpdate(provinceId, {$inc: {totalNews: 1}}).exec();
};

const decreaseNewsCount = async (provinceId: string) => {
  await ProvinceModel.findByIdAndUpdate(provinceId, {$inc: {totalNews: -1}}).exec();
};

export const provinceRepository: ProvinceRepository = {
  increaseNewsCount,
  decreaseNewsCount,
  find,
  findById,
  create,
  update,
  del,
  ensureIndexes,
  findOne,
  count,
};
