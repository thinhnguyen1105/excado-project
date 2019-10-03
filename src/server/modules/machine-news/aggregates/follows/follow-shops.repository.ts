import mongoose from 'mongoose';
import { addAuditableSchema, execCursorPaging } from '@app/core';
import { FollowShopRepository } from './interfaces/FollowShopRespository';

const FollowShopSchema = new mongoose.Schema(addAuditableSchema({
  user: {
    type: String,
    ref: 'User',
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
  },
}));
FollowShopSchema.index({shop: 1});
FollowShopSchema.index({shop: 1, user: 1});
const FollowShopModel = mongoose.model('FollowShop', FollowShopSchema);

export const followShopRepository: FollowShopRepository = {
  findFollowByUser: async (query) => {
    const filters = [
      {user: query.id},
    ];
    return await execCursorPaging(
      FollowShopModel,
      filters,
      query.sortBy,
      Number(query.first),
      [`user`, `shop`],
      query.before,
      query.after,
    );
  },
  findByShop: async (shopId) => {
    return await FollowShopModel.find({shop: shopId}).exec() as any;
  },
  findOne: async (query) => {
    return await FollowShopModel.findOne({user: query.user, shop: query.shop}).exec() as any;
  },
  create: async (payload) => {
    const newFollow = new FollowShopModel(payload);
    await newFollow.save();
    return newFollow.id;
  },
  del: async (payload) => {
    await FollowShopModel.deleteOne({user: payload.user, shop: payload.shop}).exec();
  },
  ensureIndexes: async () => {
    await FollowShopModel.createIndexes();
  },
};
