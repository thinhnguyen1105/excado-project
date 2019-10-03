import { addDeletableSchema, addAuditableSchema, FindResult, NotImplementedError, execCursorPaging } from '@app/core';
import { Brand, BrandRepository, ModelModel } from '@app/machine-news';
import mongoose from 'mongoose';
import { FindBrandsQuery } from './interfaces/FindBrandsQuery';

export const BrandSchema = new mongoose.Schema(addAuditableSchema(addDeletableSchema({
  slug: String,
  name: String,
  logoImage: String,
  totalNews: {
    type: Number,
    default: 0,
  },
})));
BrandSchema.index({ name: 'text', slug: 'text' });
BrandSchema.index({ name: 1, slug: 1 });
export const BrandModel = mongoose.model('Brand', BrandSchema);

const find = async (query: FindBrandsQuery): Promise<FindResult<Brand>> => {
  const filters: any = [];
  if (query.search) {
    filters.push({ name: { $regex: `^${query.search}`, $options: 'i' } });
  }
  return await execCursorPaging(
    BrandModel,
    filters,
    query.sortBy,
    Number(query.first),
    [],
    query.before,
    query.after,
  );
};

const findById = async (id: string): Promise<Brand> => {
  return await BrandModel.findById(id).exec() as any;
};

const create = async (payload: Partial<Brand>): Promise<string> => {
  const newBrand = new BrandModel(payload);
  const data = await newBrand.save();
  return data._id;
};

const update = async (payload: any): Promise<void> => {
  await BrandModel.findByIdAndUpdate(payload.id, { $set: payload }).exec();
};

const del = async (id: string): Promise<void> => {
  await BrandModel.findByIdAndDelete(id);
};

const ensureIndexes = async () => {
  await BrandModel.createIndexes();
};

const findOne = async (query: {slug?: string; name?: string}): Promise<Brand> => {
  if (query.slug) {
    return BrandModel.findOne({slug: query.slug}).exec() as any;
  } else if (query.name) {
    return BrandModel.findOne({name: query.name}).exec() as any;
  } else {
    return undefined as any;
  }
};

const count = async (): Promise<number> => {
  throw new NotImplementedError();
};

const findTopBrands = async (): Promise<FindResult<Brand>> => {
  const data = await ModelModel.aggregate([
    {$group: {_id: {category: '$category', brand: '$brand'}, totalNews: {$sum: '$totalNews'}}},
    {$lookup: {from: 'categories', localField: '_id.category', foreignField: '_id', as: 'category'}},
    {$unwind: '$category'},
    {$group: {
      _id: '$_id.brand',
      totalNews: {$sum: '$totalNews'},
      brandCategories: {$push: {_id: '$category._id', name: '$category.name', slug: '$category.slug', imageUrl: '$category.imageUrl', totalNews: '$totalNews'}},
    }},
    {$sort: {totalNews: -1}},
    {$limit: 16},
    {$lookup: {from: 'brands', localField: '_id', foreignField: '_id', as: 'brand'}},
    {$unwind: '$brand'},
    {$project: {_id: 1, brandCategories: 1, totalNews: 1, name: '$brand.name', slug: '$brand.slug', logoImage: '$brand.logoImage'}},
  ]);

  return {
    data,
  };
};

const findBrandDetail = async (brandSlug: string): Promise<Brand> => {
  const start = new Date().getTime();

  const result = await BrandModel.aggregate([
    {$match: {slug: brandSlug}},
    {$lookup: {from: 'models', localField: '_id', foreignField: 'brand', as: 'brandModels'}},
    {$unwind: '$brandModels'},
    {$group: {_id: {brand: '$_id', category: '$brandModels.category', name: '$name', slug: '$slug', logoImage: '$logoImage', totalNews: '$totalNews' }, categoryModels: {$push: '$brandModels'}, totalNews: {$sum: '$brandModels.totalNews'}}},
    {$lookup: {from: 'categories', localField: '_id.category', foreignField: '_id', as: 'category'}},
    {$unwind: '$category'},
    {$project: {_id: 1, category: {_id: '$category._id', name: '$category.name', slug: '$category.slug', imageUrl: '$category.imageUrl', categoryModels: '$categoryModels', totalNews: '$totalNews'}}},
    {$group: {_id: {brand: '$_id.brand', name: '$_id.name', slug: '$_id.slug', logoImage: '$_id.logoImage', totalNews: '$_id.totalNews' }, brandCategories: {$push: '$category'}}},
    {$project: {_id: '$_id.brand', name: '$_id.name', slug: '$_id.slug', logoImage: '$_id.logoImage', brandCategories: 1, totalNews: '$_id.totalNews'}},
  ]);

  const end = new Date().getTime();
  // tslint:disable-next-line:no-console
  console.log(`234567890wertyuio`, end - start);
  return result[0];
};

const findBrandList = async () => {
  const data = await BrandModel.find().exec() as any;

  return {
    data,
  };
};

const increaseNewsCount = async (newsId: string) => {
  await BrandModel.findByIdAndUpdate(newsId, {$inc: {totalNews: 1}}).exec();
};

const decreaseNewsCount = async (newsId: string) => {
  await BrandModel.findByIdAndUpdate(newsId, {$inc: {totalNews: -1}}).exec();
};

export const brandRepository: BrandRepository = {
  increaseNewsCount,
  decreaseNewsCount,
  findBrandList,
  findBrandDetail,
  findTopBrands,
  find,
  findById,
  create,
  update,
  del,
  ensureIndexes,
  findOne,
  count,
};
