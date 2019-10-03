import { logger, UserInputError, validatePayload, validateOperation, EntityNotFoundError } from '@app/core';
import { RentalPeriodService } from './interfaces/RentalPeriodService';
import { rentalPeriodRepository } from './rental-periods.repository';
import * as yup from 'yup';

const rentalPeriodService: RentalPeriodService = {
  setup: (app, path) => {
    // TODO: Refactor setup method. Only register route handle, separate handle function
    app.get(path + '/customs/get-all', async (_req: any, res: any) => {
      try {
        const data = await rentalPeriodRepository.findAll();
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
      min: yup.number().required('Min rental period is required').min(1, 'Min rental period must be greater than 1'),
      max: yup.number().min(data.min, `Max rental period must be greater than min rental period`),
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
    await rentalPeriodService[data.operation](id, data.payload, params);
    return {};
  },
  updateDetail: async (id, data, params) => {
    // 1. authorize
    // ensurePermission(params.authUser, PERMISSIONS.USERS.EDIT);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    const existedRentalPeriod = await params.repository.findById(id);
    if (!existedRentalPeriod) {
      throw new EntityNotFoundError('Rental reriod');
    }
    const validationSchema = yup.object().shape({
      min: yup.number().min(1, 'Min rental period must be greater than 1'),
      max: yup.number().min(data.min || existedRentalPeriod.min, `Max rental period must be greater than min rental period`),
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

export default rentalPeriodService;
