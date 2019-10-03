import { UploadService } from './interfaces/UploadService';
import { ProvinceModel, CategoryModel, BrandModel, ModelModel, NewsModel, WeightRangeModel, RentalPeriodModel } from '@app/machine-news';
import { NotAuthorizedError } from '@app/core';
import { UsersModel } from '@app/auth';
import admin from 'firebase-admin';
import slugify from 'slugify';
import { convertVietnamese } from '@client/core';
import { readFile, utils } from 'xlsx';
import replace from 'lodash/replace';

const getError = (status: number, message: string) => {
  const error: any = new Error(message);
  error.status = status;
  return error;
};

export const uploadService: UploadService = {
  createNewsFromExcelRow: async (row, _index, newsType): Promise<any> => {
    const newsStates = [
      { value: 'NEW', label: 'Mới' },
      { value: 'USED', label: 'Nhập bãi' },
      { value: 'LIQUIDATE', label: 'Thanh lý' },
    ];

    const phoneNo = row['A'] ? `+${row['A']}`.trim() : '';
    const firstName = row['B'] ? row['B'].trim() : '';
    const newsState = newsStates.filter((state) => state.label === row['C'])[0] ? newsStates.filter((state) => state.label === row['C'])[0].value : '';
    const location = row['D'] ? await ProvinceModel.findOne({slug: slugify(convertVietnamese(row['D'].trim()))}).exec() : '';
    const usedHours = row['E'];
    const price = row['F'];
    const serialNo = row['G'];
    const category: any = row['H'] ? await CategoryModel.findOne({slug: slugify(convertVietnamese(row['H'].trim()))}).exec() : '';
    const brand: any = row['I'] ? await BrandModel.findOne({slug: slugify(convertVietnamese(row['I'].trim()))}).exec() : '';
    const model: any = row['J'] ? await ModelModel.findOne({slug: slugify(row['J'].trim())})
      .populate('brand')
      .populate('category')
      .exec() : '';
    const description = row['K'];
    const year = row['L'];
    const weightRange = row['N'] ? await WeightRangeModel.findById(row['N'].split('/')[1]) : '';
    const rentalPeriod = row['M'] ? await RentalPeriodModel.findById(row['M'].split('/')[1]) : '';
    const imageUrls = row['O'] ? row['O'].split('\n') : [];

    // validate
    if (!phoneNo || !firstName) {
      throw getError(400, `Invalid user info`);
    }
    let existedUser = await UsersModel.findOne({phoneNo}).exec();
    if (!existedUser) {
      let newUser;
      try {
        newUser = await admin.auth().getUserByPhoneNumber(phoneNo);
      } catch (error) {
        // create firebase user
        try {
          newUser = await admin.auth().createUser({
            phoneNumber: phoneNo,
            password: 'Timmay@123',
            email: `${phoneNo.replace('+', '')}@timmay.vn`,
            displayName: firstName,
            emailVerified: true,
          });
        } catch (err) {
          throw getError(400, `Invalid user info`);
        }
      }

      // create mongo user
      if (existedUser) {
        existedUser = await UsersModel.create({
          _id: newUser.uid,
          email: newUser.email,
          phoneNo,
          familyName: firstName,
          givenName: '',
          fullName: firstName,
          loginDetail: {
            phoneNo: newUser.phoneNumber,
            provider: 'phone',
          },
          roles: [],
          isActive: true,
          completeSignUp: false,
          createdBy: newUser.uid,
          createdAt: new Date().getTime(),
        });
      }
    } else if (['SELL', 'LEASE'].indexOf(newsType) > -1 && !newsState) {
      throw getError(400, `Invalid news state`);
    } else if (['SELL', 'LEASE'].indexOf(newsType) > -1 && (!location || !location._id)) {
      throw getError(400, `Invalid location`);
    } else if (usedHours && isNaN(usedHours)) {
      throw getError(400, `Invalid used hours`);
    } else if (price && isNaN(price)) {
      throw getError(400, `Invalid price`);
    } else if (!category || !category._id) {
      throw getError(400, `Invalid category`);
    } else if (!brand || !brand._id) {
      throw getError(400, `Invalid brand`);
    } else if (!model || !model._id) {
      throw getError(400, `Invalid model`);
    } else if (newsType === 'RENT' && (!rentalPeriod)) {
      throw getError(400, `Invalid rental period`);
    } else if (!weightRange) {
      throw getError(400, `Invalid weight range`);
    } else if (['SELL', 'LEASE'].indexOf(newsType) > -1 && imageUrls.length === 0) {
      throw getError(400, `Missing images`);
    } else {
      let title = '';
      switch (newsType) {
        case 'SELL':
          title = `${year ? year : ''} ${model.brand.name.toUpperCase()} ${model.name} ${serialNo ? serialNo.trim() : ''}`;
          break;
        case 'LEASE':
          title = `${year ? year : ''} ${model.brand.name.toUpperCase()} ${model.name} ${serialNo ? serialNo.trim() : ''}`;
          break;
        case 'BUY':
          title = `Tìm mua ${model.brand.name.toUpperCase()} ${model.name}`;
          break;
        case 'RENT':
          title = `Tìm thuê ${model.brand.name.toUpperCase()} ${model.name}`;
          break;
        default:
          break;
      }

      // create news
      const newInfo: any = {
        title,
        state: newsState,
        newsType,
        location: location ? location._id : undefined,
        owner: existedUser!._id,
        status: 'PUBLIC',
        description,
        usedHours,
        price,
        serialNo,
        categoryId: model && model.category ? model.category._id : category ? category._id : undefined,
        brand: model && model.brand ? model.brand._id : brand ? brand._id : undefined,
        model: model ? model._id : undefined,
        year,
        createdAt: new Date().getTime(),
        createdDate: new Date(),
        imageUrls,
      };
      if (weightRange) {
        newInfo.weightRange = weightRange;
      }
      if (rentalPeriod) {
        newInfo.rentalPeriod = rentalPeriod;
      }
      const news = new NewsModel(newInfo);
      await news.save();
      await news.populate('categoryId').populate('weightRange').execPopulate();
      return news;
    }
  },
  uploadExcelFile: async (file: any, authorizationHeader: string) => {
    const idToken = replace(authorizationHeader, 'Bearer ', '');
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    if (decodedIdToken.roles.indexOf('5c7f747708898183ac62f2af') > -1) {
      const newsTypes = ['SELL', 'LEASE', 'BUY', 'RENT'];
      const workbook = readFile(`upload/${file.filename}`);
      const createNewsPromises = [];

      for (let i = 0; i < 4; i += 1) {
        const newsType = newsTypes[i];
        const wordSheet = workbook.Sheets[workbook.SheetNames[i]];
        const sheetData = utils.sheet_to_json(wordSheet, {header: 'A'});

        for (let j = 4; j < sheetData.length; j += 1) {
          createNewsPromises.push(uploadService.createNewsFromExcelRow(sheetData[j], j, newsType).then((news: any) => news).catch((err: any) => ({status: err.status, message: err.message, row: j})));
        }
      }

      const result = await Promise.all(createNewsPromises);

      return {
        data: result.filter((item) => item && item._id),
        error: result.filter((item) => item && item.message),
      };
    } else {
      throw new NotAuthorizedError();
    }
  },
};
