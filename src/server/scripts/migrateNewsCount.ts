// tslint:disable
import mongoose from 'mongoose';
import { config } from '@app/config';
import { BrandModel, NewsModel, CategoryModel, ModelModel, ProvinceModel } from '@app/machine-news';
import { WeightRangeModel } from '../modules/machine-news/aggregates/weight-ranges/weight-ranges.repository';
import { RentalPeriodModel } from '../modules/machine-news/aggregates/rental-periods/rental-periods.repository';

console.log(WeightRangeModel, RentalPeriodModel);

const migrateNewsCount = async () => {
  await mongoose.connect(config.database.connectionString, { useNewUrlParser: true });

  const updateBrandNewsCount = async (brandId: string) => {
    const totalNews = await NewsModel.find({brand: brandId}).countDocuments().exec();
    await BrandModel.findByIdAndUpdate(brandId, {$set: {totalNews}});
  };

  const updateCategoryNewsCount = async (categoryId: string) => {
    const totalNews = await NewsModel.find({categoryId}).countDocuments().exec();
    await CategoryModel.findByIdAndUpdate(categoryId, {$set: {totalNews}});
  };

  const updateModelNewsCount = async (modelId: string) => {
    const totalNews = await NewsModel.find({model: modelId}).countDocuments().exec();
    await ModelModel.findByIdAndUpdate(modelId, {$set: {totalNews}});
  };

  const updateProvinceNewsCount = async (provinceId: string) => {
    const totalNews = await NewsModel.find({location: provinceId}).countDocuments().exec();
    await ProvinceModel.findByIdAndUpdate(provinceId, {$set: {totalNews}});
  };

  const brands = await BrandModel.find().exec();
  const provinces = await ProvinceModel.find().exec();
  const models = await ModelModel.find().exec();
  const categories = await CategoryModel.find().exec();

  const updateBrands: any = [];
  const updateModels: any = [];
  const updateProvinces: any = [];
  const updateCategories: any = [];

  for (let brand of brands) {
    updateBrands.push(updateBrandNewsCount(brand._id));
  }
  for (let province of provinces) {
    updateProvinces.push(updateProvinceNewsCount(province._id));
  }
  for (let model of models) {
    updateModels.push(updateModelNewsCount(model._id));
  }
  for (let category of categories) {
    updateCategories.push(updateCategoryNewsCount(category._id));
  }

  await Promise.all(updateBrands);
  await Promise.all(updateModels);
  await Promise.all(updateProvinces);
  await Promise.all(updateCategories);

  console.log('Migrate news count success');
  process.exit();
};
migrateNewsCount();
