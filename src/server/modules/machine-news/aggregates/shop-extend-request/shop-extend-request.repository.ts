import mongoose from 'mongoose';
import { addAuditableSchema, NotImplementedError, execCursorPaging } from '@app/core';
import { ShopExtendRequestRepository } from './interfaces/ShopExtendRequestRepository';

const ShopExtendRequestSchema = new mongoose.Schema(addAuditableSchema({
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShopPackage',
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
  },
  shopName: String,
  state: {
    type: String,
    default: 'PENDING',
  },
  requestedAt: Number,
  requestedBy: {
    type: String,
    ref: `User`,
  },
  extendedAt: Number,
  extendedBy: {
    type: String,
    ref: 'User',
  },
}));
ShopExtendRequestSchema.index({shopName: 'text'});
const ShopExtendRequestModel = mongoose.model(`ShopExtendRequest`, ShopExtendRequestSchema);

export const shopExtendRequestRepository: ShopExtendRequestRepository = {
  findById: async (id: string) => {
    return await ShopExtendRequestModel.findById(id).populate(['package', 'shop']).exec() as any;
  },
  findOne: async () => {
    throw new NotImplementedError();
  },
  find: async (query) => {
    const filters: any[] = [];
    if (query.search) {
      filters.push({ $text: { $search: `"${query.search}"` } });
    }
    if (query.state) {
      filters.push({state: query.state});
    }

    return await execCursorPaging(
      ShopExtendRequestModel,
      filters,
      query.sortBy,
      Number(query.first),
      ['shop', 'package', 'requestedBy'],
      query.before,
      query.after,
    );
  },
  count: async () => {
    throw new NotImplementedError();
  },
  create: async (payload) => {
    const newShopExtendRequest = await ShopExtendRequestModel.create(payload);
    return newShopExtendRequest._id;
  },
  update: async (payload) => {
    await ShopExtendRequestModel.findByIdAndUpdate(payload._id, {$set: payload}).exec();
  },
  ensureIndexes: async () => {
    await ShopExtendRequestModel.createIndexes();
  },
  del: async () => {
    throw new NotImplementedError();
  },
};
