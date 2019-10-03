import { EntityNotFoundError, validateQuery, UserInputError, logger, AuthUser, NotAuthorizedError, validateOperation } from '@app/core';
import { newsRepository, NewsService, categoryRepository, brandRepository, modelRepository } from '@app/machine-news';
import { imageService } from '@app/website';
import * as yup from 'yup';
import { Application } from '@feathersjs/express';
import { shopRepository } from '../shop/shop.repository';
import { replace } from 'lodash';
import admin from 'firebase-admin';
import { followNewsRepository } from '../follows/follow-news.repository';
import { ensureAuthenticate } from '../../../../core/auth/ensureAuthenticate';
import { ensureAdmin } from '../../../../core/auth/ensureAdmin';
import { reportsRepository } from '../reports/reports.repository';

const newsService: NewsService = {
  setup: (app: Application<any>, path: string) => {
    app.get(path + '/get-by-owner/:ownerId', newsService.getByOwner);
    app.get(path + '/statistics/info', newsService.getStatisticsInfo);
    app.get(path + `/customs/related-news`, async (req: any, _res, next) => {
      try {
        const bearerToken = req.headers.authorization || req.cookies.token;
        if (bearerToken) {
          const idToken = replace(bearerToken, 'Bearer ', '');
          const decodedIdToken = await admin.auth().verifyIdToken(idToken);
          const authUser: AuthUser = {
            id: decodedIdToken.uid,
            roles: decodedIdToken.roles,
            permissions: decodedIdToken.permissions,
          };

          req.authUser = authUser;
        }
      } catch (error) {
        logger.error(error);
      }
      next();
    }, newsService.getRelatedNews);
    app.get(path + `/customs/same-owner-news`, async (req: any, _res, next) => {
      try {
        const bearerToken = req.headers.authorization || req.cookies.token;
        if (bearerToken) {
          const idToken = replace(bearerToken, 'Bearer ', '');
          const decodedIdToken = await admin.auth().verifyIdToken(idToken);
          const authUser: AuthUser = {
            id: decodedIdToken.uid,
            roles: decodedIdToken.roles,
            permissions: decodedIdToken.permissions,
          };

          req.authUser = authUser;
        }
      } catch (error) {
        logger.error(error);
      }
      next();
    }, newsService.getSameOwnerNews);
    app.get(path + `/customs/pending-news`, async (req: any, _res, next) => {
      try {
        const bearerToken = req.headers.authorization || req.cookies.token;
        if (bearerToken) {
          const idToken = replace(bearerToken, 'Bearer ', '');
          const decodedIdToken = await admin.auth().verifyIdToken(idToken);
          const authUser: AuthUser = {
            id: decodedIdToken.uid,
            roles: decodedIdToken.roles,
            permissions: decodedIdToken.permissions,
          };

          req.authUser = authUser;
        }
      } catch (error) {
        logger.error(error);
      }
      next();
    }, newsService.getPendingNews);
  },
  find: async (params) => {
    // 1. authorize

    // 2. validate
    validateQuery(params.query);

    // 3. do business logic

    // 4. persist to db
    return await newsRepository.find(params.query);
  },
  get: async (id, _params) => {
    // 1. authorize

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }

    // 3. do business logic
    await newsRepository.increaseView(id);

    // 4. persist to db
    return await newsRepository.findById(id);
  },
  create: async (data, params) => {
    // 1. authorize
    ensureAuthenticate(params.authUser);

    // 2. validate
    const validationSchema = yup.object().shape({
      title: yup.string().required('Title is required'),
      state: yup.string(),
      newsType: yup.string().required('News type is required'),
      priceType: yup.string().required('Price type is required'),
      location: yup.string(),
      owner: yup.string().required('Owner ID is required'),
      status: yup.string(),
      usedHours: yup.number(),
      serialNo: yup.string(),
      year: yup.number(),
      shop: yup.string(),
      weightRange: yup.number(),
      rentalPeriod: yup.number(),
      categoryId: yup.string().required(`Category is required`),
      brand: yup.string().required(`Brand is required`),
      model: yup.string().required(`Model is required`),
    });
    await validationSchema.validate(data);

    const [existedCategory, existedBrand, existedModel] = await Promise.all([
      categoryRepository.findById(data.categoryId),
      brandRepository.findById(data.brand),
      modelRepository.findById(data.model),
    ]);
    if (!existedCategory) {
      throw new UserInputError('Category not found');
    }
    if (!existedBrand) {
      throw new UserInputError('Brand not found');
    }
    if (!existedModel) {
      throw new UserInputError('Model not found');
    }

    if (data.shop) {
      const existedShop = await shopRepository.findById(data.shop);
      if (!existedShop) {
        throw new UserInputError('Shop didnt exist');
      }
    }

    // 3. do business logic
    if (data.imageUrls && data.imageUrls.length) {
      const promises = data.imageUrls.map((val: any) => {
        return imageService.moveFilesToUploadFolder(val.url);
      });

      await Promise.all(promises);

      // Delete records in temporaryImage collection
      await imageService.deleteByUrls(data.imageUrls.map((val: any) => val.url));
      const ids = await newsRepository.create({
        ...data,
        ...params.creationInfo,
        createdDate: new Date(params.creationInfo!.createdAt!),
        imageUrls: data.imageUrls.map((val: any) => {
          const lastDot = val.url.lastIndexOf('.');
          const fileHash = val.url.slice(0, lastDot).trim();
          return `/upload/${fileHash}`;
        }),
      });
      return {
        id: ids,
      };
    }

    // 4. persist to db
    const id = await newsRepository.create({
      ...data,
      ...params.creationInfo,
      createdDate: new Date(params.creationInfo!.createdAt!),
    });
    return {
      id,
    };
  },
  patch: async (id, data, params) => {
    validateOperation(data.operation, [`updatePending`, `approveNews`, `rejectNews`]);
    await newsService[data.operation](id, data.payload, params);
    return {};
  },
  updatePending: async (id, data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedNews = await newsRepository.findById(id);
    if (!existedNews) {
      throw new EntityNotFoundError('News');
    }
    const validationSchema = yup.object().shape({
      title: yup.string(),
      newsType: yup.string(),
      priceType: yup.string(),
      location: yup.string(),
      status: yup.string(),
      usedHours: yup.number(),
      serialNo: yup.string(),
      categoryId: yup.string(),
      type: yup.string(),
      brand: yup.string(),
      model: yup.string(),
      weight: yup.number(),
      year: yup.number(),
    });
    await validationSchema.validate(data);

    // 3. do business logic

    // 4. persist to db
    // Check if this news has report
    const newsReport = await reportsRepository.findOnePending({
      news: id,
    });
    if (data.imageUrls && data.imageUrls.length) {
      const promises = data.imageUrls.filter((val: any) => val.url.indexOf('/upload') < 0).map((val: any) => {
        return imageService.moveFilesToUploadFolder(val.url);
      });

      await Promise.all(promises);

      // Delete records in temporaryImage collection
      await imageService.deleteByUrls(data.imageUrls.filter((val: any) => val.url.indexOf('/upload') < 0).map((val: any) => val.url));
      await newsRepository.update({
        _id: id,
        ...data,
        imageUrls: data.imageUrls.map((val: any) => {
          const lastDot = val.url.lastIndexOf('.');
          const fileHash = val.url.slice(0, lastDot).trim();
          const indexOfSrc = val.url.indexOf('/upload');
          return indexOfSrc >= 0 ? val.url : `/upload/${fileHash}`;
        }),
        status: newsReport ? 'PENDING' : 'PUBLIC',
        ...params.modificationInfo,
      });
      return {};
    } else {
      await newsRepository.update({
        _id: id,
        ...data,
        status: newsReport ? 'PENDING' : 'PUBLIC',
        ...params.modificationInfo,
      });
      return {};
    }
  },
  approveNews: async (id, _data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedNews = await newsRepository.findById(id);
    if (!existedNews) {
      throw new EntityNotFoundError('News');
    }

    // 3. do business logic

    // 4. persist to db
    await newsRepository.update({
      _id: id,
      status: 'PUBLIC',
      ...params.modificationInfo,
    });
    return {};
  },
  rejectNews: async (id, _data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedNews = await newsRepository.findById(id);
    if (!existedNews) {
      throw new EntityNotFoundError('News');
    }

    // 3. do business logic

    // 4. persist to db
    await newsRepository.update({
      _id: id,
      status: 'REJECTED',
      ...params.modificationInfo,
    });
    return {};
  },
  updateFollowCount: async (newsId, type) => {
    // 1. authorize

    // 2. validate
    if (!newsId || !type) {
      throw new UserInputError('Invalid query params');
    }
    const existedNews = await newsRepository.findById(newsId);
    if (!existedNews) {
      throw new EntityNotFoundError('News');
    }

    // 3. do business logic

    // 4. persist to db
    type === 'follow' ? await newsRepository.increaseFollowCount(newsId) : await newsRepository.decreaseFollowCount(newsId);
  },
  getByOwner: async (req: any, res: any) => {
    try {
      const idToken = replace(req.headers.authorization, 'Bearer ', '');
      const decodedIdToken = await admin.auth().verifyIdToken(idToken);
      const authUser: AuthUser = {
        id: decodedIdToken.uid,
        roles: decodedIdToken.roles,
        permissions: decodedIdToken.permissions,
      };

      validateQuery(req.query);
      const data = await newsRepository.getNewsByOwnerId({
        status: req.query.status,
        ownerId: req.params.ownerId,
        first: req.query.first,
        before: req.query.before,
        after: req.query.after,
        sortBy: req.query.sortBy,
        authUser,
      });

      res.status(200).json(data);
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
  getStatisticsInfo: async (req, res) => {
    try {
      // authorization
      const idToken = replace(req.cookies.token || req.headers.authorization, 'Bearer ', '');

      if (!idToken) {
        throw new NotAuthorizedError();
      }
      const decodedIdToken = await admin.auth().verifyIdToken(idToken);
      await ensureAdmin({
        id: decodedIdToken.uid,
        roles: decodedIdToken.roles,
        permissions: decodedIdToken.permissions,
      });

      // validate start/end date
      const { startDate, endDate } = req.query;
      const validationSchema = yup.object().shape({
        startDate: yup.string().required('Bad request'),
        endDate: yup.string().required('Bad request'),
      });
      await validationSchema.validate({
        startDate,
        endDate,
      });
      if (new Date(startDate).getTime() > new Date(endDate).getTime()) {
        throw new UserInputError('Date range');
      }

      // get result
      const result = await newsRepository.getStatisticsInfo(startDate, endDate);
      res.status(200).json(result);
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
  getRelatedNews: async (req, res) => {
    try {
      const relatedResult = await newsRepository.getRelatedNews(req.query);
      let result: any = {
        data: relatedResult.data,
      };

      if (req.authUser && req.authUser.id) {
        const checkFollowPromises: any = [];
        relatedResult.data.filter((ite: any) => ite).forEach((item: any) => {
          checkFollowPromises.push(followNewsRepository.findOne({
            user: req.authUser.id,
            news: item._id,
          }));
        });
        const followResult = await Promise.all(checkFollowPromises);

        const JSONResult = JSON.parse(JSON.stringify(relatedResult));
        const data = [];
        for (let i = 0; i < followResult.length; i += 1) {
          data.push({
            ...JSONResult.data[i],
            followBy: [],
            isFollowing: Boolean(followResult[i]),
          });
        }

        result = {
          ...JSONResult,
          data,
        };
      }

      res.status(200).json(result);
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
  getSameOwnerNews: async (req, res) => {
    try {
      const relatedResult = await newsRepository.getSameOwnerNews(req.query);
      let result: any = {
        data: relatedResult.data,
      };

      if (req.authUser && req.authUser.id) {
        const checkFollowPromises: any = [];
        relatedResult.data.filter((ite: any) => ite).forEach((item: any) => {
          checkFollowPromises.push(followNewsRepository.findOne({
            user: req.authUser.id,
            news: item._id,
          }));
        });
        const followResult = await Promise.all(checkFollowPromises);

        const JSONResult = JSON.parse(JSON.stringify(relatedResult));
        const data = [];
        for (let i = 0; i < followResult.length; i += 1) {
          data.push({
            ...JSONResult.data[i],
            followBy: [],
            isFollowing: Boolean(followResult[i]),
          });
        }

        result = {
          ...JSONResult,
          data,
        };
      }

      res.status(200).json(result);
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
  getPendingNews: async (req, res) => {
    try {
      await ensureAdmin(req.authUser);
      const result = await newsRepository.findPendingNew(req.query);

      res.status(200).json(result);
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
};

export default newsService;
