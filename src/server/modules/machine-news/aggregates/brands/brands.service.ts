import { BrandInputError, logger, validateOperation, UserInputError, EntityNotFoundError } from '@app/core';
import { brandRepository, BrandService } from '@app/machine-news';
import * as yup from 'yup';
import slugify from 'slugify';
import { readFromCache } from './middlewares/readFromCache.middleware';
import { writeToCache } from './middlewares/writeToCache.middleware';
import { ensureAdmin } from '../../../../core/auth/ensureAdmin';
import { modelRepository } from '../models/models.repository';

const brandService: BrandService = {
  setup: (app, path) => {
    app.get(path + '/customs/find-top-brands', readFromCache, async (_req: any, res: any) => {
      try {
        const result = await brandRepository.findTopBrands();
        writeToCache(path + `/customs/find-top-brands`, result);
        res.status(200).json(result);
      } catch (error) {
        logger.error(error);
        res.status(error.status || 500).end(error.message || 'Internal server error');
      }
    });
    app.get(path + '/customs/find-brand-detail/:brandSlug', readFromCache, async (req: any, res: any) => {
      try {
        const brandDetail = await brandRepository.findBrandDetail(req.params.brandSlug);
        writeToCache(path + `/customs/find-brand-detail/${req.params.brandSlug}`, brandDetail);
        res.status(200).json(brandDetail);
      } catch (error) {
        logger.error(error);
        res.status(error.status || 500).end(error.message || 'Internal server error');
      }
    });
    app.get(path + '/customs/find-brand-list', readFromCache, async (_req: any, res: any) => {
      try {
        const result = await brandRepository.findBrandList();
        writeToCache(path + '/customs/find-brand-list', result);
        res.status(200).json(result);
      } catch (error) {
        logger.error(error);
        res.status(error.status || 500).end(error.message || 'Internal server error');
      }
    });
    app.get(path + '/customs/check-existed-brand/:brandName', brandService.checkExistBrand);
  },
  find: async (params) => {
    // 1. authorize

    // 2. validate

    // 3. do business logic

    // 4. persist to db
    return await params.repository.find(params.query);
  },
  get: async (id, _params) => {
    // 1. authorize

    // 2. validate
    if (!id) {
      throw new BrandInputError('Invalid query params');
    }

    // 3. do business logic

    // 4. persist to db
    return await brandRepository.findById(id);
  },
  create: async (data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    const validationSchema = yup.object().shape({
      name: yup.string().required('Name is required').max(50, 'Brand name is too long'),
      logoImage: yup.string().required('Logo image is required'),
    });
    await validationSchema.validate(data);
    const existedBrandName = await params.repository.findOne({slug: slugify(data.name)});
    if (existedBrandName) {
      throw new BrandInputError('Brand already exist');
    }

    // 3. do business logic

    // 4. persist to db
    const id = await brandRepository.create({
      ...data,
      ...params.creationInfo,
      slug: slugify(data.name!),
    });
    return {
      id,
    };
  },
  patch: async (id, data, params): Promise<{}> => {
    validateOperation(data.operation, ['updateDetail']);
    brandService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedBrand = await params.repository.findById(id);
    if (!existedBrand) {
      throw new EntityNotFoundError('Brand');
    }
    const validationSchema = yup.object().shape({
      name: yup.string().max(50, 'Brand name is too long'),
      logoImage: yup.string(),
    });
    await validationSchema.validate(data);
    if (existedBrand.name !== data.name) {
      const existedBrandName = await params.repository.findOne({slug: slugify(data.name!)});
      if (existedBrandName) {
        throw new BrandInputError('Brand already exist');
      }
    }

    // 3. do business logic

    // 4. persist to db
     await params.repository.update({
      id,
      ...data,
      ...params.modificationInfo,
      slug: slugify(data.name!),
    });
    return {};
  },
  checkExistBrand: async (req, res) => {
    try {
      if (!req.params.brandName) {
        throw new UserInputError('Brand name is empty');
      }

      const existedBrand = await brandRepository.findOne({slug: slugify(req.params.brandName)});
      res.status(200).json({
        existedBrand: Boolean(existedBrand),
      });
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
  remove: async (id, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }

    // 3. do business logic

    // 4. persist to db
    await brandRepository.del(id);
    await modelRepository.deleteModelsByBrand(id);
    return {};
  },
};

export default brandService;
