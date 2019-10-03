import { Hook, addCreationInfo, addModificationInfo, logApiRequest, authenticate } from '@app/core';
import { HookContext } from '@feathersjs/feathers';
import { shopRepository } from './shop.repository';
import { userRepository } from '@app/auth';

const shopHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: HookContext) => {
        context.params.repository = shopRepository;
      },
    ],
    create: [
      addCreationInfo,
      async (context: HookContext) => {
        context.params.userRepository = userRepository;
      },
    ],
    update: [
      addModificationInfo,
    ],
    patch: [
      addModificationInfo,
    ],
  },
};

export default shopHook;
