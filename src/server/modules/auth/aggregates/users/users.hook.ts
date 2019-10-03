import { Hook, authenticate, addCreationInfo, addModificationInfo, logApiRequest } from '@app/core';
import { userRepository, roleRepository } from '@app/auth';
import { HookContext } from '@feathersjs/feathers';

const usersHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = userRepository;
      },
    ],
    create: [
      addCreationInfo,
      async ({ params }: HookContext) => {
        params.roleRepository = roleRepository;
      },
    ],
    update: [
      addModificationInfo,
      async (context: any) => {
        context.params.roleRepository = roleRepository;
      },
    ],
    patch: [
      addModificationInfo,
    ],
  },
};

export default usersHook;
