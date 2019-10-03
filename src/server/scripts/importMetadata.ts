import { readFile, utils } from 'xlsx';
import { brandRepository, BrandModel } from '../modules/machine-news/aggregates/brands/brands.repository';
import { config } from '@app/config';
import mongoose from 'mongoose';
import { categoryRepository, CategoryModel } from '../modules/machine-news/aggregates/categories/categories.repository';
import { modelRepository, Brand, Category } from '@app/machine-news';
import slugify from 'slugify';
import { startCase } from 'lodash';
import provinces from './provinces';
import { provinceRepository } from '../modules/machine-news/aggregates/provinces/provinces.repository';
import { weightRangeRepository } from '../modules/machine-news/aggregates/weight-ranges/weight-ranges.repository';
import { rentalPeriodRepository } from '../modules/machine-news/aggregates/rental-periods/rental-periods.repository';
import { shopPackageReporitogy } from '../modules/machine-news/aggregates/shop-packages/shop-packages.repository';

// tslint:disable:no-console
const convertVietnamese = (str: string) => {
  let result = str.toLowerCase();
  result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gi, 'a');
  result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, 'e');
  result = result.replace(/ì|í|ị|ỉ|ĩ/gi, 'i');
  result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gi, 'o');
  result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/gi, 'u');
  result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/gi, 'y');
  result = result.replace(/đ/gi, 'd');
  result = result.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/gi, ' ');
  result = result.replace(/ + /gi, ' ');
  result = result.trim();
  return result;
};

const importProvinces = async () => {
  const provincesPromises = provinces.map((val: any) => {
    return provinceRepository.create(val);
  });
  await Promise.all(provincesPromises);
};

const importWeightRanges = async () => {
  const weightRange = [
    { id: '5c779ea03b2bb3480e255e41', min: 1, max: 4 },
    { id: '5c779ea03b2bb3480e255e42', min: 4, max: 11 },
    { id: '5c779ea03b2bb3480e255e43', min: 11, max: 19 },
    { id: '5c779ea03b2bb3480e255e44', min: 19, max: 29 },
    { id: '5c779ea03b2bb3480e255e45', min: 29, max: 39 },
    { id: '5c779ea03b2bb3480e255e46', min: 39, max: 55 },
    { id: '5c779ea03b2bb3480e255e47', min: 55, max: 75 },
    { id: '5c779ea03b2bb3480e255e48', min: 80, max: 120 },
    { id: '5c779ea03b2bb3480e255e49', min: 120, max: 180 },
    { id: '5c779ea03b2bb3480e255e4a', min: 180, max: 250 },
    { id: '5c779ea03b2bb3480e255e4b', min: 250, max: undefined },
  ];

  const weightRangePromises: any = [];
  weightRange.forEach((item) => {
    weightRangePromises.push(weightRangeRepository.create({
      _id: item.id,
      min: item.min,
      max: item.max,
      createdAt: new Date().getTime(),
    } as any));
  });
  await Promise.all(weightRangePromises);
};

const importRentalPeriods = async () => {
  const rentalPeriods = [
    { id: '5c779f4535fdfd4c393f3847', min: 1, max: 3 },
    { id: '5c779f4535fdfd4c393f3848', min: 3, max: 6 },
    { id: '5c779f4535fdfd4c393f3849', min: 6, max: 12 },
    { id: '5c779f4535fdfd4c393f384a', min: 12, max: undefined },
  ];

  const rentalPeriodPromises: any = [];
  rentalPeriods.forEach((item) => {
    rentalPeriodPromises.push(rentalPeriodRepository.create({
      _id: item.id,
      min: item.min,
      max: item.max,
      createdAt: new Date().getTime(),
    } as any));
  });
  await Promise.all(rentalPeriodPromises);
};

const importCategories = async () => {
  const workbook = readFile(`excado-data.xlsx`);

  const categoriesWorksheet = workbook.Sheets[workbook.SheetNames[1]];
  const categoriesSheetAsJson = utils.sheet_to_json(categoriesWorksheet, { header: 'A' });
  const categories = categoriesSheetAsJson.map((item: any) => item['B'].trim());
  const categoryPromises = categories.filter((category) => category).map((item: any) => {
    const slug = slugify(convertVietnamese(item).trim());

    return categoryRepository.create({
      name: item.trim(),
      slug,
      imageUrl: `/static/images/categories/${slug}.png`,
      totalNews: 0,
      createdAt: new Date().getTime(),
    });
  });
  await Promise.all(categoryPromises);
};

const importBrands = async () => {
  const workbook = readFile(`excado-data.xlsx`);

  const brandsWorksheet = workbook.Sheets[workbook.SheetNames[2]];
  const brandsSheetAsJson = utils.sheet_to_json(brandsWorksheet, { header: 'A' });
  const brands = brandsSheetAsJson.filter((brand) => brand).map((item: any) => startCase(item['A'].toLowerCase().trim().replace('-', '8')).replace(' 8 ', '-'));
  const brandPromises = brands.filter((brand) => brand).map((item: any) => {
    const slug = slugify(item.toLocaleLowerCase().trim());

    return brandRepository.create({
      slug,
      name: item.trim(),
      logoImage: `/static/images/logo-timmay.png`,
      totalNews: 0,
      createdAt: new Date().getTime(),
    });
  });
  await Promise.all(brandPromises);
};

const importBrandModels = async (sheetName: string, sheetData: any, categories: any, brands: any) => {
  const brandName = sheetName.split(' ')[1];
  const modelPromises: any = [];
  sheetData.slice(3).forEach((item: any) => {
    const selectedBrand = brands.filter((brand: Brand) => brand.slug === slugify(brandName.toLowerCase().trim()))[0];
    const selectedCategory = categories.filter((category: Category) => category.slug === slugify(convertVietnamese(String(item['C']).trim())))[0];

    if (selectedBrand && selectedCategory) {
      modelPromises.push(modelRepository.create({
        name: String(item['D']).trim(),
        slug: slugify(String(item['D']).trim()),
        brand: selectedBrand._id,
        category: selectedCategory._id,
        totalNews: 0,
        createdAt: new Date().getTime(),
      }));
    }
  });

  console.log(`import brand models ${sheetName}`, modelPromises.length);
  await Promise.all(modelPromises);
};

const importModels = async () => {
  const workbook = readFile(`excado-data.xlsx`);

  const categories = await CategoryModel.find().exec();
  const brands = await BrandModel.find().exec();
  const brandsWithModels = workbook.SheetNames.slice(4);
  const modelPromises = brandsWithModels.map((item: any) => importBrandModels(
    item,
    utils.sheet_to_json(workbook.Sheets[item], { header: 'A' }),
    categories,
    brands,
  ));

  await Promise.all(modelPromises);
};

const importShopPackages = async () => {
  const shopPackages = [
    { monthDuration: 3, price: 300000 },
    { monthDuration: 6, price: 600000 },
    { monthDuration: 12, price: 1200000 },
  ];

  const createShopPackagePromises = [];
  for (const item of shopPackages) {
    createShopPackagePromises.push(
      shopPackageReporitogy.create({
        ...item,
        createdAt: new Date().getTime(),
        createdBy: `admin`,
        currency: 'vnd',
        isActive: true,
      }),
    );
  }

  await Promise.all(createShopPackagePromises);
};

const importMetadata = async () => {
  await mongoose.connect(config.database.connectionString, { useNewUrlParser: true });

  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log(`
      Invalid args.
      Please provide type of metadatas you want to import: ['provinces', 'categories', 'brands', 'models', 'shopPackages'].
      Ex: - yarn importMetadata -- provinces
          - yarn importMetadata -- categories models brands
    `);
    process.exit();
  } else {
    if (args.indexOf('provinces') > -1) {
      await importProvinces();
    }

    if (args.indexOf('categories') > -1) {
      await importCategories();
    }

    if (args.indexOf('brands') > -1) {
      await importBrands();
    }

    if (args.indexOf('models') > -1) {
      await importModels();
    }

    if (args.indexOf('weightRanges') > -1) {
      await importWeightRanges();
    }

    if (args.indexOf('rentalPeriods') > -1) {
      await importRentalPeriods();
    }

    if (args.indexOf('shopPackages') > -1) {
      await importShopPackages();
    }

    console.log(`Import metadata success`);
    process.exit();
  }
};

importMetadata();
