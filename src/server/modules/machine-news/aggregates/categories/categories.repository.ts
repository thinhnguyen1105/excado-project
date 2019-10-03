import { addDeletableSchema, addAuditableSchema, FindResult, NotImplementedError } from '@app/core';
import { Category, CategoryRepository } from '@app/machine-news';
import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  slug: String,
  name: String,
  imageUrl: String,
  totalNews: {
    type: Number,
    default: 0,
  },
})));
CategorySchema.index({ name: 1, slug: 1 });
export const CategoryModel = mongoose.model('Category', CategorySchema);

const find = async (): Promise<FindResult<Category>> => {
  return {
    data: await CategoryModel.find().sort({slug: 1}) as any,
  };
};

const findById = async (id: string): Promise<Category> => {
  return await CategoryModel.findById(id).exec() as any;
};

const create = async (payload: Partial<Category>): Promise<string> => {
  const newCategory = new CategoryModel(payload);
  const data = await newCategory.save();
  return data._id;
};

const update = async (payload: any): Promise<void> => {
  await CategoryModel.findByIdAndUpdate(payload.id, { $set: payload }).exec();
};

const del = async (id: string): Promise<void> => {
  await CategoryModel.findByIdAndDelete(id);
};

const ensureIndexes = async () => {
  await CategoryModel.createIndexes();
};

const findOne = async (query: {slug?: string}): Promise<Category> => {
  if (query.slug) {
    return await CategoryModel.findOne({slug: query.slug}).exec() as any;
  } else {
    return undefined as any;
  }
};

const count = async (): Promise<number> => {
  throw new NotImplementedError();
};

const findCategoryDetail = async (categorySlug: string) => {
  const result = await CategoryModel.aggregate([
    {$match: {slug: categorySlug}},
    {$lookup: {from: 'models', localField: '_id', foreignField: 'category', as: 'categoryModels'}},
    {$unwind: '$categoryModels'},
    {$group: {_id: {category: '$_id', brand: '$categoryModels.brand', name: '$name', slug: '$slug', imageUrl: '$imageUrl', totalNews: '$totalNews' }, brandModels: {$push: '$categoryModels'}, totalNews: {$sum: '$categoryModels.totalNews'}}},
    {$lookup: {from: 'brands', localField: '_id.brand', foreignField: '_id', as: 'brand'}},
    {$unwind: '$brand'},
    {$project: {_id: 1, brand: {_id: '$brand._id', name: '$brand.name', slug: '$brand.slug', imageUrl: '$brand.imageUrl', brandModels: '$brandModels', totalNews: '$totalNews'}}},
    {$group: {_id: {category: '$_id.category', name: '$_id.name', slug: '$_id.slug', imageUrl: '$_id.imageUrl', totalNews: '$_id.totalNews' }, categoryBrands: {$push: '$brand'}}},
    {$project: {_id: '$_id.category', name: '$_id.name', slug: '$_id.slug', imageUrl: '$_id.imageUrl', categoryBrands: 1, totalNews: '$_id.totalNews'}},
  ]);

  return result[0];
};

const increaseNewsCount = async (categoryId: string) => {
  await CategoryModel.findByIdAndUpdate(categoryId, {$inc: {totalNews: 1}}).exec();
};

const decreaseNewsCount = async (categoryId: string) => {
  await CategoryModel.findByIdAndUpdate(categoryId, {$inc: {totalNews: -1}}).exec();
};

export const categoryRepository: CategoryRepository = {
  increaseNewsCount,
  decreaseNewsCount,
  findCategoryDetail,
  find,
  findById,
  create,
  update,
  del,
  ensureIndexes,
  findOne,
  count,
};
