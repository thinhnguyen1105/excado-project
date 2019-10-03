import mongoose from 'mongoose';
import { addAuditableSchema } from '@app/core';
import { FollowNewsRepository } from './interfaces/FollowNewsRepository';

const FollowNewsSchema = new mongoose.Schema(addAuditableSchema({
  user: {
    type: String,
    ref: 'User',
  },
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'News',
  },
}));
FollowNewsSchema.index({user: 1});
FollowNewsSchema.index({user: 1, news: 1});
const FollowNewsModel = mongoose.model('FollowNews', FollowNewsSchema);

export const followNewsRepository: FollowNewsRepository = {
  findFollowsByUser: async (query) => {
    return await FollowNewsModel.find({user: query.id})
      .populate({
        path: 'news',
        model: 'News',
        populate: [
          {
            path: 'categoryId',
            model: 'Category',
          },
          {
            path: 'brand',
            model: 'Brand',
          },
          {
            path: 'model',
            model: 'Model',
          },
          {
            path: 'location',
            model: 'Province',
          },
          {
            path: 'owner',
            model: 'User',
            select: '_id fullName email phoneNo',
          },
          {
            path: 'shop',
            model: 'Shop',
            select: '_id name domain',
          },
        ],
      }).exec() as any;
  },
  findOne: async (query) => {
    return await FollowNewsModel.findOne({user: query.user, news: query.news}).exec() as any;
  },
  create: async (payload) => {
    const newFollow = new FollowNewsModel(payload);
    await newFollow.save();
    return newFollow.id;
  },
  del: async (payload: {user: string; news: string}) => {
    await FollowNewsModel.deleteOne({user: payload.user, news: payload.news}).exec();
  },
  ensureIndexes: async () => {
    await FollowNewsModel.createIndexes();
  },
};
