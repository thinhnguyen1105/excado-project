import { ShopService } from './interfaces/ShopService';
import { validateQuery, UserInputError, validatePayload, validateOperation, EntityNotFoundError, hasPermission, isOwner, NotAuthorizedError, logger } from '@app/core';
import * as yup from 'yup';
import { PERMISSIONS } from '../../permissions';
import { shopRepository } from './shop.repository';
import { Request, Response } from 'express';
import { followShopRepository } from '../follows/follow-shops.repository';
import { config } from '@app/config';
import { ensureAuthenticate } from '../../../../core/auth/ensureAuthenticate';
import { ensureAdmin } from '../../../../core/auth/ensureAdmin';

const domainNameRegex = /^(?=.*[a-z0-9-])[a-z0-9-\d]{3,}$/;
const shopService: ShopService = {
  setup: (app, path) => {
    app.get(path + '/get-by-domain/:shopDomain', shopService.getByDomain);
    app.get(path + '/get-by-owner/:ownerId', shopService.getByOwner);
  },
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
    // 1. validate
    if (!id) {
      throw new UserInputError('Invalid id');
    }

    // 2. authorize
    const shopInfo = await params.repository.findById(id);
    if (!isOwner(params.authUser, shopInfo.owner._id)) {
      throw new NotAuthorizedError();
    }

    // 3. do business logic

    // 4. persist to db
    return shopInfo;
  },
  create: async (data, params) => {
    // 1. authorize
    ensureAuthenticate(params.authUser);

    // 2. validate
    await validatePayload({
      owner: yup.string().required('Owner is required'),
      domain: yup.string()
        .matches(domainNameRegex, 'Domain name can only contain letters, numbers and hyphens')
        .required('Domain name is required')
        .min(2, 'Domain name is too short')
        .max(50, `Domain name is too long`),
      name: yup.string()
        .min(5, 'Shop name is too short')
        .max(100, 'Shop name is too long')
        .required('Shop name is required'),
      address: yup.string()
        .max(500, 'Address is too long'),
      geocode: yup.object()
        .required('Geocode is required')
        .shape({lng: yup.number(), lat: yup.number()}),
      description: yup.string()
        .min(10, 'Description is too short')
        .max(2000, 'Description is too long')
        .required('Description is required'),
      phone: yup.string()
        .matches(config.regex.phone, 'Invalid phone number')
        .required('Phone number is required'),
      email: yup.string()
        .required('Email is required')
        .matches(config.regex.email, 'Invalid email address'),
      representative: yup.object()
        .required(`Representative information is required`)
        .shape({
          fullName: yup.string()
            .required('Representative name is required')
            .min(2, `Representative name is too short`)
            .max(30, `Representative name is too long`),
          identityNumber: yup.string()
            .required('Identity number is required')
            .matches(config.regex.identityNumber, `Invalid identity number`)
            .min(5, `Identity number is too short`)
            .max(30, `Identity number is too long`),
          email: yup.string()
            .required('Representative name is required')
            .matches(config.regex.email, 'Invalid email address'),
          paymentPhoneNo: yup.string()
            .matches(config.regex.phone, 'Invalid phone number')
            .required('Representative name is required'),
          address: yup.string()
            .required('Representative name is required')
            .max(500, 'Address is too long'),
        }),
      introImages: yup.array().of(yup.string()),
      logoImage: yup.string(),
    }, data);
    const ownerExistedShop = await params.repository.findOne({ owner: data.owner });
    if (ownerExistedShop) {
      throw new NotAuthorizedError();
    }
    if (data.owner !== params.authUser!.id) {
      throw new NotAuthorizedError();
    }
    const existedDomain = await params.repository.findOne({ domain: data.domain });
    if (existedDomain) {
      throw new UserInputError('Domain name already exist');
    }

    // 3. do business logic

    // 4. persist to db
    const id = await params.repository.create({
      ...data,
      ...params.creationInfo,
      expiryDate: new Date().getTime() + 30 * 86400 * 1000,
    });

    return {
      id,
    };
  },
  patch: async (id, data, params) => {
    validateOperation(data.operation, ['updateDetail', 'activate', 'deactivate', 'updateIntroImages', 'updateLogoImage']);
    await shopService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params) => {
    // 1. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedShop = await params.repository.findById(id);
    if (!existedShop) {
      throw new EntityNotFoundError('Shop');
    }
    const validationSchema = yup.object().shape({
      owner: yup.string(),
      domain: yup.string()
        .matches(domainNameRegex, 'Domain name can only contain letters, numbers and hyphens')
        .min(2, 'Domain name is too short')
        .max(50, `Domain name is too long`),
      name: yup.string()
        .min(5, 'Shop name is too short')
        .max(100, 'Shop name is too long'),
      address: yup.string()
        .max(500, 'Address is too long'),
      geocode: yup.object()
        .shape({lng: yup.number(), lat: yup.number()}),
      description: yup.string()
        .min(10, 'Description is too short')
        .max(2000, 'Description is too long'),
      phone: yup.string()
        .matches(config.regex.phone, 'Invalid phone number'),
      email: yup.string()
        .matches(config.regex.email, 'Invalid email address'),
      representative: yup.object()
        .shape({
          fullName: yup.string()
            .min(2, `Representative name is too short`)
            .max(30, `Representative name is too long`),
          identityNumber: yup.string()
            .matches(config.regex.identityNumber, `Invalid identity number`)
            .min(5, `Identity number is too short`)
            .max(30, `Identity number is too long`),
          email: yup.string()
            .matches(config.regex.email, 'Invalid email address'),
          paymentPhoneNo: yup.string()
            .matches(config.regex.phone, 'Invalid phone number'),
          address: yup.string()
            .max(500, 'Address is too long'),
        }),
      introImages: yup.array().of(yup.string()),
      logoImage: yup.string(),
    });
    await validationSchema.validate(data);
    if (data.domain) {
      const existedDomain = await params.repository.findOne({ domain: data.domain });
      if (existedDomain && existedDomain._id.toString() !== id) {
        throw new UserInputError('Domain has been used');
      }
    }

    // 2. authorize
    if (!isOwner(params.authUser, existedShop.owner._id)) {
      throw new NotAuthorizedError();
    }

    // 3. do business logic

    // 4. persist to db
    await params.repository.update({
      id,
      ...data,
      ...params.modificationInfo,
    });
    return {};
  },
  activate: async (id, _data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedShop = await params.repository.findById(id);
    if (!existedShop) {
      throw new EntityNotFoundError('Shop');
    }

    // 3. do business logic

    // 4. persist to db
    await params.repository.update({
      id,
      isActive: true,
      ...params.modificationInfo,
    });

    return {};
  },
  deactivate: async (id, _data, params) => {
    // 1. authorize
    await ensureAdmin(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedShop = await params.repository.findById(id);
    if (!existedShop) {
      throw new EntityNotFoundError('Shop');
    }

    // 3. do business logic

    // 4. persist to db
    await params.repository.update({
      id,
      isActive: false,
      ...params.modificationInfo,
    });

    return {};
  },
  updateLogoImage: async (id, data, params) => {
    // 1. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedShop = await params.repository.findById(id);
    if (!existedShop) {
      throw new EntityNotFoundError('Shop');
    }

    // 2. authorize
    if (!hasPermission(params.authUser, PERMISSIONS.SHOPS.EDIT) && !isOwner(params.authUser, existedShop.owner._id)) {
      throw new NotAuthorizedError();
    }

    // 3. do business logic

    // 4. persist to db
    await params.repository.update({
      id,
      logoImage: data.logoImage,
      ...params.modificationInfo,
    });

    return {};
  },
  updateIntroImages: async (id, data, params) => {
    // 1. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedShop = await params.repository.findById(id);
    if (!existedShop) {
      throw new EntityNotFoundError('Shop');
    }

    // 2. authorize
    if (!hasPermission(params.authUser, PERMISSIONS.SHOPS.EDIT) && !isOwner(params.authUser, existedShop.owner._id)) {
      throw new NotAuthorizedError();
    }

    // 3. do business logic

    // 4. persist to db
    await params.repository.update({
      id,
      introImages: data.introImages,
      ...params.modificationInfo,
    });

    return {};
  },
  updateFollowCount: async (shopId, type) => {
    // 1. authorize

    // 2. validate
    if (!shopId || !type) {
      throw new UserInputError('Invalid query params');
    }
    const existedShop = await shopRepository.findById(shopId);
    if (!existedShop) {
      throw new EntityNotFoundError('News');
    }

    // 3. do business logic

    // 4. persist to db
    type === 'follow' ? await shopRepository.increaseFollowCount(shopId) : await shopRepository.decreaseFollowCount(shopId);
  },
  getByDomain: async (req: Request, res: Response) => {
    try {
      const shopInfo = await shopRepository.findOne({ domain: req.params.shopDomain });
      let shopInfoJSON = JSON.parse(JSON.stringify(shopInfo));
      if (req.query.authId) {
        const shopId = shopInfo._id;
        const userId = req.query.authId;
        const followShop = await followShopRepository.findOne({
          user: userId,
          shop: shopId,
        });

        shopInfoJSON = {
          ...shopInfoJSON,
          isFollowing: Boolean(followShop),
        };
      }

      res.status(200).json(shopInfoJSON);
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
  getByOwner: async (req: any, res: any) => {
    try {
      const shopInfo = await shopRepository.findOne({ owner: req.params.ownerId });
      res.status(200).json(shopInfo);
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
};

export default shopService;
