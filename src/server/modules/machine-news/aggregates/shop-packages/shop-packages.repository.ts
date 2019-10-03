import mongoose from 'mongoose';
import { addAuditableSchema, NotImplementedError } from '@app/core';
import { ShopPackageRepository } from './interfaces/ShopPackageRepository';

const ShopPackageSchema = new mongoose.Schema(addAuditableSchema({
  price: Number,
  currency: {
    type: String,
    default: 'vnd',
  },
  monthDuration: Number,
  isActive: {
    type: Boolean,
    default: true,
  },
}));
const ShopPackageModel = mongoose.model('ShopPackage', ShopPackageSchema);

export const shopPackageReporitogy: ShopPackageRepository = {
  findById: async (id: string) => {
    return await ShopPackageModel.findById(id).exec() as any;
  },
  findOne: async () => {
    throw new NotImplementedError();
  },
  find: async () => {
    const data = await ShopPackageModel.find().exec();
    return {
      data,
      before: undefined,
      after: undefined,
    } as any;
  },
  count: async () => {
    throw new NotImplementedError();
  },
  create: async (payload) => {
    const newShopPackage = await ShopPackageModel.create(payload);
    return newShopPackage._id;
  },
  update: async (payload) => {
    await ShopPackageModel.findByIdAndUpdate(payload._id, {$set: payload}).exec();
  },
  ensureIndexes: async () => {
    await ShopPackageModel.createIndexes();
  },
  del: async () => {
    throw new NotImplementedError();
  },
};
