import { addDeletableSchema, addAuditableSchema } from '@app/core';
import { Image } from '@app/website';
import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  name: String,
  url: String,
})), {timestamps: true});
ImageSchema.index({ location: 'text'});
const ImageModel = mongoose.model('Image', ImageSchema);

const find = async (): Promise<Image[]> => {
  return await ImageModel.find({}).exec() as any;
};

const findById = async (id: string): Promise<Image> => {
  return ImageModel.findById(id).exec() as any;
};

const create = async (payload: Partial<Image>): Promise<Image> => {
  const newImage = new ImageModel(payload);
  await newImage.save();
  return newImage as any;
};

const update = async (payload: any): Promise<void> => {
  await ImageModel.findByIdAndUpdate(payload._id, { $set: payload }).exec();
};

const deleteByUrls = async (urls: any) => {
  return await ImageModel.deleteMany({url: {$in: urls}}).exec();
};

export const imageRepository = {
  find,
  findById,
  create,
  update,
  deleteByUrls,
};
