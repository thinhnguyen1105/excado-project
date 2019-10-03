import { ShopExtendRequestService } from './interfaces/ShopExtendRequestService';
import { ensureAuthenticate } from '../../../../core/auth/ensureAuthenticate';
import { ensureAdmin } from '../../../../core/auth/ensureAdmin';
import { validateQuery, UserInputError, validateOperation } from '@app/core';
import * as yup from 'yup';
import { shopRepository } from '../shop/shop.repository';
import { shopPackageReporitogy } from '../shop-packages/shop-packages.repository';

const shopExtendRequestService: ShopExtendRequestService = {
  find: async ({ query, repository, authUser }) => {
    // 1. authorize
    await ensureAdmin(authUser);

    // 2. validate
    validateQuery(query);

    // 3. do business logic

    // 4. persist to db
    return await repository.find(query);
  },
  get: async (id, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

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
    ensureAuthenticate(params.authUser);

    // 2. validate
    const validationSchema = yup.object().shape({
      shop: yup.string().required('Shop is required'),
      package: yup.string().required('Package is required'),
    });
    await validationSchema.validate(data);
    const [existedShop, existedPackage] = await Promise.all([
      shopRepository.findById(data.shop),
      shopPackageReporitogy.findById(data.package),
    ]);
    if (!existedShop || !existedPackage) {
      throw new UserInputError(`Shop or package not found`);
    }

    // 3. do business logic

    // 4. persist to db
    const newExtendRequestId = await params.repository.create({
      ...data,
      ...params.creationInfo,
      shopName: existedShop.name,
      requestedAt: new Date().getTime(),
      requestedBy: params.authUser!.id,
    });
    return {
      id: newExtendRequestId,
    };
  },
  patch: async (id, data, params) => {
    validateOperation(data.operation, ['extendShop']);
    await shopExtendRequestService[data.operation](id, data.payload, params);
    return {};
  },
  extendShop: async (id, _data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid id');
    }

    // 3. do business logic
    const requestInfo = await params.repository.findById(id);
    await shopRepository.update({
      id: (requestInfo.shop as any)._id,
      expiryDate: (requestInfo.shop as any).expiryDate <= new Date().getTime() ? new Date().getTime() + (requestInfo.package as any).monthDuration * 30 * 86400 * 1000 : (requestInfo.shop as any).expiryDate + (requestInfo.package as any).monthDuration * 30 * 86400 * 1000,
    });

    // 4. persist to db
    await params.repository.update({
      _id: id,
      state: 'FINISHED',
    });
  },
};

export default shopExtendRequestService;
