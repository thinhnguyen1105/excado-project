import { addDeletableSchema, addAuditableSchema, FindResult, NotImplementedError, execCursorPaging } from '@app/core';
import { Model, ModelRepository } from '@app/machine-news';
import mongoose from 'mongoose';
import { FindModelsQuery } from './interfaces/FindModelsQuery';

export const ModelSchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  slug: String,
  name: String,
  totalNews: {
    type: Number,
    default: 0,
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
})));
ModelSchema.index({ name: 1, slug: 1 });
ModelSchema.index({ brand: 1, category: 1 });
export const ModelModel = mongoose.model('Model', ModelSchema);

const findAll = async (): Promise<Model[]> => {
  return await ModelModel.find().populate('category').populate('brand').exec() as any;
};

const find = async (query: FindModelsQuery): Promise<FindResult<Model>> => {
  const filters: any = [];
  if (query.search) {
    filters.push({
      name: { $regex: `^${query.search}`, $options: 'i' },
    });
  }
  if (query.brand) {
    filters.push({
      brand: query.brand,
    });
  }
  if (query.category) {
    filters.push({
      category: query.category,
    });
  }
  return execCursorPaging(
    ModelModel,
    filters,
    query.sortBy,
    Number(query.first),
    ['brand', 'category'],
    query.before,
    query.after,
  );
};

const findById = async (id: string): Promise<Model> => {
  return await ModelModel.findById(id).exec() as any;
};

const create = async (payload: Partial<Model>): Promise<string> => {
  const newModel = new ModelModel(payload);
  const data = await newModel.save();
  return data._id;
};

const update = async (payload: Partial<Model>): Promise<void> => {
  await ModelModel.findByIdAndUpdate(payload.id, { $set: payload }).exec();
};

const del = async (id: string): Promise<void> => {
  await ModelModel.findByIdAndDelete(id);
};

const ensureIndexes = async () => {
  await ModelModel.createIndexes();
};

const findOne = async (query: {slug?: string}): Promise<Model> => {
  if (query.slug) {
    return await ModelModel.findOne({slug: query.slug}).exec() as any;
  } else {
    return undefined as any;
  }
};

const count = async (): Promise<number> => {
  throw new NotImplementedError();
};

const increaseNewsCount = async (modelId: string) => {
  await ModelModel.findByIdAndUpdate(modelId, {$inc: {totalNews: 1}}).exec();
};

const decreaseNewsCount = async (modelId: string) => {
  await ModelModel.findByIdAndUpdate(modelId, {$inc: {totalNews: -1}}).exec();
};

const deleteModelsByCategory = async (categoryId: string) => {
  await ModelModel.deleteMany({category: categoryId}).exec();
};

const deleteModelsByBrand = async (brandId: string) => {
  await ModelModel.deleteMany({brand: brandId}).exec();
};

export const modelRepository: ModelRepository = {
  deleteModelsByBrand,
  deleteModelsByCategory,
  increaseNewsCount,
  decreaseNewsCount,
  findAll,
  find,
  findById,
  create,
  update,
  del,
  ensureIndexes,
  findOne,
  count,
};
