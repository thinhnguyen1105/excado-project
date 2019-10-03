import { ModelInputError, validateOperation, UserInputError, EntityNotFoundError, logger } from '@app/core';
import { modelRepository, ModelService } from '@app/machine-news';
import * as yup from 'yup';
import slugify from 'slugify';
import { ensureAuthenticate } from '../../../../core/auth/ensureAuthenticate';
import { ensureAdmin } from '../../../../core/auth/ensureAdmin';

const modelService: ModelService = {
  setup: (app, path) => {
    app.get(path + '/customs/check-existed-model/:modelName', modelService.checkExistModel);
  },
  find: async (params) => {
    // 1. authorize

    // 2. validate

    // 3. do business logic

    // 4. persist to db
    return await modelRepository.find(params.query);
  },
  get: async (id, _params) => {
    // 1. authorize

    // 2. validate
    if (!id) {
      throw new ModelInputError('Invalid query params');
    }

    // 3. do business logic

    // 4. persist to db
    return await modelRepository.findById(id);
  },
  create: async (data, params) => {
    // 1. authorize
    ensureAuthenticate(params.authUser);

    // 2. validate
    const validationSchema = yup.object().shape({
      name: yup.string().required('Model name is required').max(50, `Model name is too long`),
      brand: yup.string().required('Brand is required'),
      category: yup.string().required('Category is required'),
    });
    await validationSchema.validate(data);
    const existedModelName = await params.repository.findOne({slug: slugify(data.name)});
    if (existedModelName && existedModelName.brand.toString() === data.brand && existedModelName.category.toString() === data.category) {
      throw new UserInputError('Model already exist');
    }

    // 3. do business logic

    // 4. persist to db
    const id = await modelRepository.create({
      ...data,
      ...params.creationInfo,
      slug: slugify(data.name),
    });
    return {
      id,
    };
  },
  patch: async (id, data, params): Promise<{}> => {
    validateOperation(data.operation, ['updateDetail']);
    modelService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedModel = await params.repository.findById(id);
    if (!existedModel) {
      throw new EntityNotFoundError('Model');
    }
    const validationSchema = yup.object().shape({
      name: yup.string().max(50, 'Model name is too long'),
    });
    await validationSchema.validate(data);
    if (existedModel.name !== data.name) {
      const existedModelName = await params.repository.findOne({slug: slugify(data.name!)});
      if (existedModelName && existedModelName.brand.toString() === data.brand && existedModelName.category.toString() === data.category) {
        throw new UserInputError('Model already exist');
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
  checkExistModel: async (req, res) => {
    try {
      if (!req.params.modelName || !req.query.brand || !req.query.category) {
        throw new UserInputError('Brand or Category or Model name is empty');
      }

      const existedModel = await modelRepository.findOne({slug: slugify(req.params.modelName)});
      res.status(200).json({
        existedModel: Boolean(existedModel && existedModel.brand.toString() === req.query.brand && req.query.category === existedModel.category.toString()),
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
      throw new ModelInputError('Invalid query params');
    }

    // 3. do business logic

    // 4. persist to db
    await modelRepository.del(id);
    return {};
  },
};

export default modelService;
