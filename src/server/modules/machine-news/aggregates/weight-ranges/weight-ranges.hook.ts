import { Hook, addCreationInfo, addModificationInfo, logApiRequest } from '@app/core';
import { weightRangeRepository } from './weight-ranges.repository';

const weightRangesHook: Hook = {
  before: {
    all: [
      logApiRequest,
      async (context: any) => {
        context.params.repository = weightRangeRepository;
      },
    ],
    create: [
      addCreationInfo,
    ],
    patch: [
      addModificationInfo,
    ],
  },
};

export default weightRangesHook;
