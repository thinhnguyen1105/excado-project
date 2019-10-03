import { Hook, authenticate, logApiRequest, addCreationInfo, addModificationInfo } from '@app/core';
import { shopExtendRequestRepository } from './shop-extend-request.repository';

const shopExtendRequestHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = shopExtendRequestRepository;
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

export default shopExtendRequestHook;
