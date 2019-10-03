import mongoose from 'mongoose';
import { addAuditableSchema, execCursorPaging } from '@app/core';
import { FollowUsersRepository } from './interfaces/FollowUsersRepository';

const FollowUsersSchema = new mongoose.Schema(addAuditableSchema({
  user: {
    type: String,
    ref: 'User',
  },
  followee: {
    type: String,
    ref: 'User',
  },
}));
FollowUsersSchema.index({followee: 1});
FollowUsersSchema.index({followee: 1, user: 1});
const FollowUsersModel = mongoose.model('FollowUsers', FollowUsersSchema);

export const followUsersRepository: FollowUsersRepository = {
  findFollowByUser: async (query) => {
    const filters = [
      {user: query.id},
    ];
    return await execCursorPaging(
      FollowUsersModel,
      filters,
      query.sortBy,
      Number(query.first),
      [`user`, `followee`],
      query.before,
      query.after,
    );
  },
  findByFollowee: async (followeeId) => {
    return await FollowUsersModel.find({followee: followeeId}).exec() as any;
  },
  findOne: async (query) => {
    return await FollowUsersModel.findOne({user: query.user, followee: query.followee}).exec() as any;
  },
  create: async (payload) => {
    const newFollow = new FollowUsersModel(payload);
    await newFollow.save();
    return newFollow.id;
  },
  del: async (payload: {user: string; followee: string}) => {
    await FollowUsersModel.deleteOne({user: payload.user, followee: payload.followee}).exec();
  },
  ensureIndexes: async () => {
    await FollowUsersModel.createIndexes();
  },
};
