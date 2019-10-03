import { UserInputError, EntityNotFoundError, validateQuery, ensurePermission, validatePayload, validateOperation, logger } from '@app/core';
import { PERMISSIONS, UsersService, addFullName } from '@app/auth';
import * as yup from 'yup';
import admin from 'firebase-admin';
import { Request, Response } from 'express';
import { userRepository } from './users.repository';
import { config } from '@client/config';

const usersService: UsersService = {
  setup: (app, path) => {
    app.get(path + '/customs/check-email-exist/:email', usersService.checkEmailExist);
    app.get(path + '/customs/check-phone-number-exist/:phoneNo', usersService.checkPhoneNoExist);
  },
  find: async ({ query, repository, authUser }) => {
    // 1. authorize
    ensurePermission(authUser, PERMISSIONS.USERS.VIEW);

    // 2. validate
    validateQuery(query);

    // 3. do business logic

    // 4. persist to db
    return await repository.find(query);
  },
  get: async (id, params) => {
    // 1. authorize
    ensurePermission(params.authUser, PERMISSIONS.USERS.VIEW);

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
    ensurePermission(params.authUser, PERMISSIONS.USERS.CREATE);

    // 2. validate
    await validatePayload({
      email: yup.string().required('Email is required').matches(config.regex.email, 'Invalid email address'),
      password: yup.string()
        .required('Password is required')
        .matches(config.regex.password, 'Password must be minimum 6 characters, at least 1 upper letter, 1 number and 1 special character'),
      roles: yup.array(),
      familyName: yup.string().required('Family name is required').min(2, 'Too short').max(50, 'Too long'),
      givenName: yup.string().required('Given name is required').min(2, 'Too short').max(50, 'Too long'),
    }, data);
    const existedUser = await params.repository.findOne({email: data.email});
    if (existedUser) {
      throw new UserInputError('Email already exist');
    }

    // 3. do business logic
    const newUser = await admin.auth().createUser({
      email: data.email,
      password: data.password,
    });

    admin.auth().updateUser(newUser.uid, {
      displayName: addFullName({ familyName: data.familyName!, givenName: data.givenName!, type: 'givenNameFirst' }),
      emailVerified: true,
    });

    const roles = await params.roleRepository.findByIds(data.roles);
    let permissions: string[] = [];
    await admin.auth().setCustomUserClaims(newUser.uid, {
      roles: data.roles,
      permissions: roles.map((item) => permissions = [...permissions, ...item.permissions]),
      avatarUrl: '',
      province: '',
    });

    // 4. persist to db
    const id = await params.repository.create({
      id: newUser.uid,
      ...data,
      ...params.creationInfo,
      loginDetail: {
        email: data.email,
        provider: 'email',
      },
      fullName: addFullName({ familyName: data.familyName!, givenName: data.givenName!, type: 'givenNameFirst' }),
    });

    return {
      id,
    };
  },
  patch: async (id, data, params) => {
    validateOperation(data.operation, ['updateDetail', 'activate', 'deactivate']);
    await usersService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params) => {
    // 1. authorize
    ensurePermission(params.authUser, PERMISSIONS.USERS.EDIT);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedUser = await params.repository.findById(id);
    if (!existedUser) {
      throw new EntityNotFoundError('User');
    }
    const validationSchema = yup.object().shape({
      email: yup.string().email('Invalid email'),
      familyName: yup.string().min(2, 'Too short').max(50, 'Too long'),
      givenName: yup.string().min(2, 'Too short').max(50, 'Too long'),
      roles: yup.array(),
    });
    await validationSchema.validate(data);
    if (data.email) {
      const emailExist = await params.repository.findOne({email: data.email});
      if (emailExist && emailExist.id !== id) {
        throw new UserInputError('Email already exist');
      }
      await admin.auth().updateUser(existedUser._id, {
        email: data.email,
      });
    }

    // 3. do business logic
    if (data.roles && data.roles.length > 0) {
      const [roles, userInfo] = await Promise.all([
        params.roleRepository.findByIds(data.roles),
        admin.auth().getUser(existedUser._id),
      ]);
      let permissions: string[] = [];
      roles.map((item) => permissions = [...permissions, ...item.permissions]);
      const customClaims = {
        ...userInfo.customClaims,
        roles: data.roles,
        permissions,
      };
      await admin.auth().setCustomUserClaims(existedUser._id, customClaims);
    }

    if (data.familyName || data.givenName) {
      await admin.auth().updateUser(existedUser._id, {
        displayName: addFullName({ familyName: data.familyName! || existedUser.familyName!, givenName: data.givenName! || existedUser.givenName!, type: 'givenNameFirst' }),
      });
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
  activate: async (id, _data, params) => {
    // 1. authorize
    ensurePermission(params.authUser, PERMISSIONS.USERS.EDIT);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedUser = await params.repository.findById(id);
    if (!existedUser) {
      throw new EntityNotFoundError('User');
    }

    // 3. do business logic
    await admin.auth().updateUser(existedUser._id, {
      disabled: false,
    });

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
    ensurePermission(params.authUser, PERMISSIONS.USERS.EDIT);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedUser = await params.repository.findById(id);
    if (!existedUser) {
      throw new EntityNotFoundError('User');
    }

    // 3. do business logic
    await admin.auth().updateUser(existedUser._id, {
      disabled: true,
    });

    // 4. persist to db
    await params.repository.update({
      id,
      isActive: false,
      ...params.modificationInfo,
    });

    return {};
  },
  updateFollowCount: async (userId, type) => {
    // 1. authorize

    // 2. validate
    if (!userId || !type) {
      throw new UserInputError('Invalid query params');
    }
    const existedNews = await userRepository.findById(userId);
    if (!existedNews) {
      throw new EntityNotFoundError('User');
    }

    // 3. do business logic

    // 4. persist to db
    type === 'follow' ? await userRepository.increaseFollowCount(userId) : await userRepository.decreaseFollowCount(userId);
  },
  checkEmailExist: async (req: Request, res: Response) => {
    try {
      const { email } = req.params;
      let firebaseUser: any;
      try {
        firebaseUser = await admin.auth().getUserByEmail(email);
      } catch (error) {
        firebaseUser = null;
      }
      const existedEmail = await userRepository.findOne({email});
      res.status(200).json({
        emailExist: Boolean(existedEmail || firebaseUser),
      });
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
  checkPhoneNoExist: async (req: Request, res: Response) => {
    try {
      const { phoneNo } = req.params;
      let firebaseUser: any;
      try {
        firebaseUser = await admin.auth().getUserByPhoneNumber(phoneNo);
      } catch (error) {
        firebaseUser = null;
      }
      const mongoUser = await userRepository.findOne({phoneNo});
      res.status(200).json({
        phoneNoExist: Boolean(firebaseUser || mongoUser),
      });
    } catch (error) {
      logger.error(error);
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  },
};

export default usersService;
