import mongoose from 'mongoose';
import { ReportsRepository } from './interfaces/ReportsRepository';
import { execCursorPaging, NotImplementedError } from '@app/core';

export const ReportsSchema = new mongoose.Schema({
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'News',
  },
  newsTitle: String,
  reports: [{
    reason: String,
    description: String,
    createdBy: {
      type: String,
      ref: 'User',
    },
    createdAt: Number,
  }],
  state: {
    type: String,
    default: 'PENDING',
  },
  resolvedResult: String,
  resolvedAt: Number,
  resolvedBy: {
    type: String,
    ref: 'User',
  },
});
ReportsSchema.index({ state: 1, 'reports.reason': 1 });
ReportsSchema.index({newsTitle: 'text'});
const ReportsModel = mongoose.model('Report', ReportsSchema);

export const reportsRepository: ReportsRepository = {
  count: async () => {
    return await ReportsModel.find().countDocuments().exec();
  },
  findOne: async (query: {news?: string}) => {
    if (query.news) {
      return await ReportsModel.findOne({news: query.news}).exec() as any;
    } else {
      throw new NotImplementedError();
    }
  },
  findOnePending: async (query: {news: string}) => {
    return await ReportsModel.findOne({news: query.news, state: `PENDING`}).exec() as any;
  },
  findById: async (id) => {
    return await ReportsModel.findById(id).populate(['news']).exec() as any;
  },
  find: async (query) => {
    const filters: any[] = [];
    if (query.search) {
      filters.push({newsTitle: { $regex: `${query.search}`, $options: 'i' }});
    }
    if (query.state) {
      filters.push({state: query.state});
    }
    if (query.reason) {
      filters.push({'reports.reason': query.reason});
    }

    return await execCursorPaging(
      ReportsModel,
      filters,
      query.sortBy,
      Number(query.first),
      [
        `reports.createdBy`,
        `report`,
        {
          path: 'news',
          model: 'News',
          populate: [
            {
              path: 'shop',
              model: 'Shop',
            },
          ],
        } as any,
      ],
      query.before,
      query.after,
    );
  },
  create: async (payload) => {
    const newReport = new ReportsModel(payload);
    await newReport.save();
    return newReport.id;
  },
  update: async (payload) => {
    await ReportsModel.findByIdAndUpdate(payload.id, { $set: payload }).exec();
  },
  updateReport: async (id, report) => {
    await ReportsModel.findByIdAndUpdate(id, {$push: {reports: report}}).exec();
  },
  del: async (_id): Promise<void> => {
    throw new NotImplementedError();
  },
  ensureIndexes: async () => {
    await ReportsModel.createIndexes();
  },
};
