import mongoose from 'mongoose';
import { addDeletableSchema, addAuditableSchema, execCursorPaging, NotImplementedError } from '@app/core';
import { ShopRepository } from './interfaces/ShopRepository';

const ShopSchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  owner: {
    type: String,
    ref: 'User',
  },
  domain: String,
  name: String,
  address: String,
  geocode: {
    lng: Number,
    lat: Number,
  },
  description: String,
  phone: String,
  email: String,
  introImages: [String],
  logoImage: String,
  expiryDate: Number,
  representative: {
    fullName: String,
    identityNumber: String,
    email: String,
    paymentPhoneNo: String,
    address: String,
  },
  purchasedPackages: [Number],
  counterFollow: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
})));
ShopSchema.index({ name: 'text' });
export const ShopModel = mongoose.model('Shop', ShopSchema);

export const shopRepository: ShopRepository = {
  getAll: async () => {
    return await ShopModel.find().populate('owner').exec() as any;
  },
  count: async (_query) => {
    throw new NotImplementedError();
  },
  find: async (query) => {
    const filters: any[] = [];
    if (query.search) {
      filters.push({ $text: { $search: `"${query.search}"` } });
    }
    if (query.isActive !== undefined) {
      filters.push({ isActive: query.isActive });
    }

    return await execCursorPaging(
      ShopModel,
      filters,
      query.sortBy,
      Number(query.first),
      ['owner'],
      query.before,
      query.after,
    );
  },
  findOne: async (query: { domain?: string; owner?: string }) => {
    if (query.domain) {
      return await ShopModel.findOne({ domain: query.domain }).exec() as any;
    }
    if (query.owner) {
      return await ShopModel.findOne({ owner: query.owner }).exec() as any;
    }
  },
  findById: async (id) => {
    return await ShopModel.findById(id)
      .populate('owner')
      .exec() as any;
  },
  create: async (payload) => {
    const newShop = new ShopModel({
      ...payload,
      _id: payload.id,
    });
    await newShop.save();
    return newShop.id;
  },
  update: async (payload) => {
    await ShopModel.findByIdAndUpdate(payload.id, { $set: payload }).exec();
  },
  follow: async (payload) => {
    await ShopModel.findOneAndUpdate({ _id: payload.id }, { $push: { followBy: payload.followerId } }, { new: true }).exec();
  },
  unfollow: async (payload) => {
    await ShopModel.findOneAndUpdate({ _id: payload.id }, { $pull: { followBy: payload.followerId } }, { new: true }).exec();
  },
  del: async (_id): Promise<void> => {
    throw new NotImplementedError();
  },
  ensureIndexes: async () => {
    await ShopModel.createIndexes();
  },
  increaseFollowCount: async (id: string) => {
    await ShopModel.findByIdAndUpdate(id, {$inc: {counterFollow: 1}}).exec();
  },
  decreaseFollowCount: async (id: string) => {
    await ShopModel.findByIdAndUpdate(id, {$inc: {counterFollow: -1}}).exec();
  },
};
