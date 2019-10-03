import { Hook, authenticate, addCreationInfo, addModificationInfo, logApiRequest } from '@app/core';
import { roleRepository } from '@app/auth';

const rolesHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = roleRepository;
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

export default rolesHook;
