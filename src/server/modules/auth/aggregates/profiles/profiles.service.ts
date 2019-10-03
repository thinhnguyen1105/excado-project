import { UserInputError, EntityNotFoundError, ensureOwner, NotAuthenticatedError, validateOperation } from '@app/core';
import { ProfilesService, addFullName } from '@app/auth';
import * as yup from 'yup';
import admin from 'firebase-admin';
import { config } from '@app/config';

const profileService: ProfilesService = {
  find: async (params) => {
    if (!params.authUser || !params.authUser.id) {
      throw new NotAuthenticatedError();
    } else {
      return await params.repository.findById(params.authUser!.id) as any;
    }
  },
  get: async (id, params) => {
    // 1. authorize
    // API to get User public info (For guess view) => No need authorized

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }

    // 3. do business logic

    // 4. persist to db
    return await params.repository.findById(id);
  },
  patch: async (id, data, params) => {
    validateOperation(data.operation, ['updateDetail', 'updateAvatar', 'changePassword']);
    await profileService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params): Promise<{}> => {
    // 1. authorize
    ensureOwner(params.authUser, id);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedUser = await params.repository.findById(id);
    if (!existedUser) {
      throw new EntityNotFoundError('User');
    }
    const validationSchema = yup.object().shape({
      familyName: yup.string().min(2, 'Family name is too short').max(50, 'Family name is too long'),
      givenName: yup.string().min(2, 'Given name is too short').max(50, 'Given name is too long'),
      phoneNo: yup.string().matches(config.regex.phone, 'Invalid phone number'),
      email: yup.string().email('Invalid email address'),
      address: yup.string().min(5, 'Address is too short').max(500, 'Address is too long'),
      description: yup.string().min(10, 'Description is too short').max(1000, 'Description is too long'),
    });
    await validationSchema.validate(data);

    // 3. do business logic
    if (data.familyName || data.givenName) {
      await admin.auth().updateUser(existedUser._id, {
        displayName: addFullName({ familyName: data.familyName! || existedUser.familyName!, givenName: data.givenName! || existedUser.givenName!, type: 'givenNameFirst' }),
      });
    }
    if (data.province) {
      const user = await admin.auth().getUser(existedUser._id);
      const currentCustomClaims = user.customClaims || {};
      currentCustomClaims['province'] = data.province;
      await admin.auth().setCustomUserClaims(existedUser._id, currentCustomClaims);
    }

    // 4. persist to db
    await params.repository.update({
      id,
      ...data,
      ...params.modificationInfo,
      fullName: addFullName({ familyName: data.familyName! || existedUser.familyName!, givenName: data.givenName! || existedUser.givenName!, type: 'givenNameFirst' }),
    });
    return {};
  },
  updateAvatar: async (id, data, params): Promise<{}> => {
    // 1. authorize
    ensureOwner(params.authUser, id);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedUser = await params.repository.findById(id);
    if (!existedUser) {
      throw new EntityNotFoundError('User');
    }

    // 3. do business logic
    const user = await admin.auth().getUser(existedUser._id);
    const currentCustomClaims = user.customClaims || {};
    currentCustomClaims['avatarUrl'] = data.avatarUrl;
    await admin.auth().setCustomUserClaims(existedUser._id, currentCustomClaims);

    // 4. persist to db
    await params.repository.update({
      id,
      avatarUrl: data.avatarUrl,
      ...params.modificationInfo,
    });

    return {};
  },
  changePassword: async (id, data, params): Promise<{}> => {
    // 1. authorize
    ensureOwner(params.authUser, id);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedUser = await params.repository.findById(id);
    if (!existedUser) {
      throw new EntityNotFoundError('User');
    }
    const validationSchema = yup.object().shape({
      newPassword: yup.string().matches(config.regex.password, 'Password must be minimum 6 characters, at least 1 upper letter, 1 number and 1 special character'),
    });
    await validationSchema.validate(data);

    // 3. do business logic
    await admin.auth().updateUser(existedUser._id, {
      password: data.newPassword,
    });

    // 4. persist to db
    return {};
  },
};

export default profileService;
