import { WeightRangeService } from './interfaces/WeightRangeService';
import { weightRangeRepository } from './weight-ranges.repository';
import { logger, UserInputError, validatePayload, validateOperation, EntityNotFoundError } from '@app/core';
import * as yup from 'yup';

const weightRangeService: WeightRangeService = {
  setup: (app, path) => {
    app.get(path + '/customs/get-all', async (_req: any, res: any) => {
      try {
        const data = await weightRangeRepository.findAll();
        res.status(200).json({
          data,
        });
      } catch (error) {
        logger.error(error);
        res.status(error.status || 500).end(error.message || 'Internal server error');
      }
    });
  },
  get: async (id, params) => {
    // 1. authorize
    // ensurePermission(params.authUser, PERMISSIONS.USERS.VIEW);

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
      min: yup.number().required('Min weight is required').min(1, 'Min weight must be greater than 1'),
      max: yup.number().min(data.min, `Max weight must be greater than min weight`),
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
    validateOperation(data.operation, ['updateDetail']);
    await weightRangeService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params) => {
    // 1. authorize
    // ensurePermission(params.authUser, PERMISSIONS.USERS.EDIT);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedWeightRange = await params.repository.findById(id);
    if (!existedWeightRange) {
      throw new EntityNotFoundError('Weight Range');
    }
    const validationSchema = yup.object().shape({
      min: yup.number().min(1, 'Min weight must be greater than 1'),
      max: yup.number().min(data.min || existedWeightRange.min, `Max weight must be greater than min weight`),
    });
    await validationSchema.validate(data);

    // 3. do business logic

    // 4. persist to db
    await params.repository.update({
      id,
      ...data,
      ...params.modificationInfo,
    });
    return {};
  },
};

export default weightRangeService;
