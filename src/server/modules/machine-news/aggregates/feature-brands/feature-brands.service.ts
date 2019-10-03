import { FeatureBrandService } from './interfaces/FeatureBrandService';
import { validateQuery, UserInputError, validatePayload, validateOperation } from '@app/core';
import * as yup from 'yup';

const featureBrandService: FeatureBrandService = {
  find: async (params) => {
    // 1. authorize

    // 2. validate
    validateQuery(params.query);

    // 3. do business logic

    // 4. persist to db
    return await params.repository.find(params.query);
  },
  get: async (id, params) => {
    // 1. authorize

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid id');
    }

    // 3. do business logic

    // 4. persist to db
    return await params.repository.findById(id);
  },
  create: async (data, params) => {
    // 1. authorize
    // ensurePermission(params.authUser, PERMISSIONS.USERS.CREATE);

    // 2. validate
    await validatePayload({
      brand: yup.string().required('Brand is required'),
      hyperlink: yup.string().required('Hyperlink is required'),
      logoImage: yup.string().required('Logo image is required'),
      order: yup.number().required('Order is required'),
    }, data);
    const existedBrand = await params.brandRepository.findById(data.brand);
    if (!existedBrand) {
      throw new UserInputError('Brand didnt exist');
    }

    // 3. do business logic

    // 4. persist to db
    const id = await params.repository.create({
      ...data,
      ...params.creationInfo,
    });

    return {
      id,
    };
  },
  patch: async (id, data, params) => {
    validateOperation(data.operation, ['updateDetail', 'activate', 'deactivate']);
    await featureBrandService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params) => {
    // 1. authorize
    // ensurePermission(params.authUser, PERMISSIONS.USERS.CREATE);

    // 2. validate
    await validatePayload({
      brand: yup.string(),
      hyperlink: yup.string(),
      logoImage: yup.string(),
      order: yup.number(),
    }, data);
    const existedFeatureBrand = await params.repository.findById(id);
    if (!existedFeatureBrand) {
      throw new UserInputError('Brand didnt exist');
    }

    // 3. do business logic

    // 4. persist to db
    await params.repository.update({
      id,
      ...data,
    });
    return {};
  },
};

export default featureBrandService;
