import { AdsenseService } from './interfaces/AdsenseService';
import { validateQuery, UserInputError, validatePayload, validateOperation } from '@app/core';
import * as yup from 'yup';
import { config } from '@app/config';

const adsenseService: AdsenseService = {
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
      position: yup.number().required('Order is required').oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Invalid position'),
      imageUrl: yup.string().required('Image is required'),
      hyperlink: yup.string()
        .required('Adsense hyperlink is required')
        .matches(config.regex.url, `Invalid URL. Ex: 'https://google.com'`),
    }, data);

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
    await adsenseService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params) => {
    // 1. authorize
    // ensurePermission(params.authUser, PERMISSIONS.USERS.CREATE);

    // 2. validate
    await validatePayload({
      position: yup.number().oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Invalid position'),
      imageUrl: yup.string(),
      hyperlink: yup.string(),
    }, data);
    const existedAdsense = await params.repository.findById(id);
    if (!existedAdsense) {
      throw new UserInputError('Ads didnt exist');
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

export default adsenseService;
