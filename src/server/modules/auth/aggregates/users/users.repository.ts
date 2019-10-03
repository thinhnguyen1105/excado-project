import { addDeletableSchema, addAuditableSchema, NotImplementedError, execCursorPaging } from '@app/core';
import mongoose from 'mongoose';
import { UsersRepository } from './interfaces/UsersRepository';

export const UsersSchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  _id: String,
  email: String,
  givenName: String,
  familyName: String,
  fullName: String,
  phoneNo: String,
  address: String,
  description: String,
  avatarUrl: String,
  province: String,
  dob: Number,
  gender: String,
  loginDetail: Object,
  roles: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
    default: [],
  },
  completeSignUp: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  followBy: {
    type: [{ type: String, ref: 'User' }],
    default: [],
  },
  counterFollow: {
    type: Number,
    default: 0,
  },
})));
UsersSchema.index({ email: 'text', fullName: 'text', phoneNo: 'text' });
export const UsersModel = mongoose.model('User', UsersSchema);

export const userRepository: UsersRepository = {
  getAll: async () => {
    return await UsersModel.find().exec() as any;
  },
  findById: async (id) => {
    return await UsersModel.findById(id)
      .populate('roles', '_id name')
      .exec() as any;
  },
  findOne: async (query: { email?: string; phoneNo?: string }) => {
    if (query.email) {
      return await UsersModel.findOne({ email: query.email }).exec() as any;
    }
    if (query.phoneNo) {
      return await UsersModel.findOne({ phoneNo: query.phoneNo }).exec() as any;
    }
  },
  find: async (query) => {
    const filters: any[] = [];
    if (query.search) {
      filters.push({ $text: { $search: `"${query.search}"` } });
    }
    if (query.roles && query.roles.length > 0) {
      filters.push({
        roles: { $all: query.roles },
      });
    }

    return await execCursorPaging(
      UsersModel,
      filters,
      query.sortBy,
      Number(query.first),
      ['roles'],
      query.before,
      query.after,
    );
  },
  count: async (_query) => {
    throw new NotImplementedError();
  },
  create: async (payload) => {
    const newUser = new UsersModel({
      ...payload,
      _id: payload.id,
    });
    await newUser.save();
    return newUser.id;
  },
  update: async (payload) => {
    await UsersModel.findByIdAndUpdate(payload.id, { $set: payload }).exec();
  },
  del: async (_id): Promise<void> => {
    throw new NotImplementedError();
  },
  follow: async (payload) => {
    await UsersModel.findOneAndUpdate({ _id: payload.id }, { $push: { followBy: payload.followerId } }, { new: true }).exec();
  },
  unfollow: async (payload) => {
    await UsersModel.findOneAndUpdate({ _id: payload.id }, { $pull: { followBy: payload.followerId } }, { new: true }).exec();
  },
  findFollowByUser: async (query) => {
    const filters: any[] = [{ followBy: query.id }];
    return await execCursorPaging(UsersModel, filters, query.sortBy, Number(query.first), ['users'], query.before, query.after);
  },
  checkFollow: async (payload) => {
    return await UsersModel.findOne({ $and: [{ _id: payload.userId }, { followBy: payload.followId }] });
  },
  ensureIndexes: async () => {
    await UsersModel.createIndexes();
  },
  increaseFollowCount: async (id: string) => {
    await UsersModel.findByIdAndUpdate(id, {$inc: {counterFollow: 1}}).exec();
  },
  decreaseFollowCount: async (id: string) => {
    await UsersModel.findByIdAndUpdate(id, {$inc: {counterFollow: -1}}).exec();
  },
};
