import { Hook, addCreationInfo, addModificationInfo, logApiRequest } from '@app/core';
import { rentalPeriodRepository } from './rental-periods.repository';

const rentalPeriodsHook: Hook = {
  before: {
    all: [
      logApiRequest,
      async (context: any) => {
        context.params.repository = rentalPeriodRepository;
      },
    ],
    create: [
      addCreationInfo,
    ],
    update: [
      addModificationInfo,
    ],
    patch: [
      addModificationInfo,
    ],
  },
};

export default rentalPeriodsHook;
