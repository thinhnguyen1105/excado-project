import mongoose from 'mongoose';
import { NotificationsRepository } from '@app/machine-news';
import { NotImplementedError, execCursorPaging } from '@app/core';

export const NotificationSchema = new mongoose.Schema({
  owner: {
    type: String,
    ref: 'User',
  },
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'News',
  },
  state: {
    type: String,
    default: 'UNREAD',
  },
  report: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Report',
  },
  description: String,
  type: String,
  createdAt: Number,
  readAt: Number,
});
NotificationSchema.index({ owner: 1, news: 1 });
const NotificationsModel = mongoose.model('Notification', NotificationSchema);

export const notificationsRepository: NotificationsRepository = {
  readAllNotifications: async (owner) => {
    await NotificationsModel.updateMany({owner}, {$set: {
      state: 'READ',
      readAt: new Date().getTime(),
    }}).exec();
  },
  countUnreadNotifications: async (id) => {
    return await NotificationsModel.find({
      owner: id,
      state: 'UNREAD',
    }).countDocuments().exec();
  },
  count: async () => {
    return await NotificationsModel.find().countDocuments().exec();
  },
  findOne: async () => {
    throw new NotImplementedError();
  },
  findById: async (id) => {
    return await NotificationsModel.findById(id).exec() as any;
  },
  find: async (query) => {
    const filters: any[] = [];
    if ((query as any).owner) {
      filters.push({owner: (query as any).owner});
    }

    return await execCursorPaging(
      NotificationsModel,
      filters,
      query.sortBy,
      Number(query.first),
      [
        `report`,
        {
          path: 'news',
          model: 'News',
          populate: [
            {
              path: 'shop',
              model: 'Shop',
            },
            {
              path: 'owner',
              model: 'User',
              select: '_id fullName phoneNo email',
            },
          ],
        } as any,
      ],
      query.before,
      query.after,
    );
  },
  create: async (payload) => {
    const newNotification = new NotificationsModel(payload);
    await newNotification.save();
    return newNotification.id;
  },
  update: async (payload: any): Promise<void> => {
    await NotificationsModel.findByIdAndUpdate(payload.id, {$set: payload}).exec();
  },
  del: async (_id): Promise<void> => {
    throw new NotImplementedError();
  },
  ensureIndexes: async () => {
    await NotificationsModel.createIndexes();
  },
};
