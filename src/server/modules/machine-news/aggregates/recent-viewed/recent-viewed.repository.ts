import mongoose from 'mongoose';
import { RecentViewedRepository } from './interfaces/RecentViewedRepository';
import { NotImplementedError, execCursorPaging } from '@app/core';

export const RecentViewedSchema = new mongoose.Schema({
  uuid: String,
  user: {
    type: String,
    ref: 'User',
  },
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'News',
  },
  newsStatus: String,
  createdAt: Number,
  lastModifiedAt: Number,
});
RecentViewedSchema.index({ uuid: 1, user: 1, news: 1 });
export const RecentViewedModel = mongoose.model('RecentViewed', RecentViewedSchema);

export const recentViewedRepository: RecentViewedRepository = {
  count: async () => {
    throw new NotImplementedError();
  },
  findById: async (id) => {
    return await RecentViewedModel.findById(id).populate('news').exec() as any;
  },
  findOne: async (query: any) => {
    const filters: any = [{news: query.news}];
    if (query.user) {
      filters.push({user: query.user});
    } else if (query.uuid) {
      filters.push({uuid: query.uuid});
    }
    return await RecentViewedModel.findOne(filters.length > 0 ? {$and: filters} : {}).exec() as any;
  },
  find: async (query) => {
    const filters: any[] = [
      {newsStatus: 'PUBLIC'},
    ];
    if ((query as any).user) {
      filters.push({user: (query as any).user});
    } else if ((query as any).uuid) {
      filters.push({uuid: (query as any).uuid});
    }

    return await execCursorPaging(
      RecentViewedModel,
      filters,
      query.sortBy,
      Number(query.first),
      [
        {
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
        },
      ] as any,
      query.before,
      query.after,
    );
  },
  create: async (payload) => {
    const newRecentViewedItem = new RecentViewedModel(payload);
    await newRecentViewedItem.save();
    return newRecentViewedItem.id;
  },
  update: async (payload: any): Promise<void> => {
    await RecentViewedModel.findOneAndUpdate({news: payload.news, user: payload.user}, {$set: payload}, {upsert: true}).exec();
  },
  del: async (_id): Promise<void> => {
    throw new NotImplementedError();
  },
  ensureIndexes: async () => {
    await RecentViewedModel.createIndexes();
  },
};
