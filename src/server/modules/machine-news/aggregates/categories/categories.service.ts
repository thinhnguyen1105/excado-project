import { CategoryInputError, logger, validateOperation, UserInputError, EntityNotFoundError } from '@app/core';
import { categoryRepository, CategoryService } from '@app/machine-news';
import * as yup from 'yup';
import slugify from 'slugify';
import { readFromCache } from '../brands/middlewares/readFromCache.middleware';
import { writeToCache } from '../brands/middlewares/writeToCache.middleware';
import { ensureAdmin } from '../../../../core/auth/ensureAdmin';
import { modelRepository } from '../models/models.repository';

const categoryService: CategoryService = {
  setup: (app, path) => {
    app.get(path + '/customs/find-category-detail/:categorySlug', readFromCache, async (req: any, res: any) => {
      try {
        const { categorySlug } = req.params;
        const categoryDetail = await categoryRepository.findCategoryDetail(categorySlug);
        writeToCache(path + `/customs/find-category-detail/${categorySlug}`, categoryDetail);
        res.status(200).json(categoryDetail);
      } catch (error) {
        logger.error(error);
        res.status(error.status || 500).end(error.message || 'Internal server error');
      }
    });
    app.get(path + '/customs/check-existed-category/:categoryName', categoryService.checkExistCategory);
  },
  find: async (_params) => {
    // 1. authorize

    // 2. validate

    // 3. do business logic

    // 4. persist to db
    const categories = await categoryRepository.find();
    const result: any = [];
    categories.data.forEach((item) => {
      if (['chung-loai-khac'].indexOf(item.slug) === -1) {
        result.push(item);
      }
    });
    const otherCategory = categories.data.filter((item) => item.slug === 'chung-loai-khac')[0];
    if (otherCategory) {
      result.push(otherCategory);
    }

    return {
      before: categories.before,
      after: categories.after,
      data: result,
    };
  },
  get: async (id, _params) => {
    // 1. authorize

    // 2. validate
    if (!id) {
      throw new CategoryInputError('Invalid query params');
    }

    // 3. do business logic

    // 4. persist to db
    return await categoryRepository.findById(id);
  },
  create: async (data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    const validationSchema = yup.object().shape({
      name: yup.string().required('Category name is required').max(50, 'Category name is too long'),
      imageUrl: yup.string().required('Category image is required'),
    });
    await validationSchema.validate(data);
    const existedCategoryName = await params.repository.findOne({slug: slugify(data.name)});
    if (existedCategoryName) {
      throw new UserInputError('Category already exist');
    }

    // 3. do business logic

    // 4. persist to db
    const id = await categoryRepository.create({
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
    categoryService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedCategory = await params.repository.findById(id);
    if (!existedCategory) {
      throw new EntityNotFoundError('Category');
    }
    const validationSchema = yup.object().shape({
      name: yup.string(),
      imageUrl: yup.string(),
    });
    await validationSchema.validate(data);
    if (existedCategory.name !== data.name) {
      const existedCategoryName = await params.repository.findOne({slug: slugify(data.name!)});
      if (existedCategoryName) {
        throw new UserInputError('Category already exist');
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
  checkExistCategory: async (req, res) => {
    try {
      if (!req.params.categoryName) {
        throw new UserInputError('Category name is empty');
      }

      const existedCategory = await categoryRepository.findOne({slug: slugify(req.params.categoryName)});
      res.status(200).json({
        existedCategory: Boolean(existedCategory),
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
    await categoryRepository.del(id);
    await modelRepository.deleteModelsByCategory(id);
    return {};
  },
};

export default categoryService;
