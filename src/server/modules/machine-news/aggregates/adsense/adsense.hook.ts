import { Hook, authenticate, logApiRequest, addCreationInfo, addModificationInfo } from '@app/core';
import { adsenseRepository } from './adsense.repository';

const adsenseHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = adsenseRepository;
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

export default adsenseHook;
