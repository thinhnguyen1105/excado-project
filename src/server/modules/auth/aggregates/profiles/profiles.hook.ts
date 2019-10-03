import { Hook, authenticate, addModificationInfo } from '@app/core';
import { userRepository } from '@app/auth';
import { checkFollowUserStatus } from './hooks/checkFollowUserStatus.hook';

const profilesHook: Hook = {
  before: {
    all: [
      async (context: any) => {
        context.params.repository = userRepository;
      },
    ],
    find: [
      authenticate,
    ],
    get: [
      authenticate,
    ],
    patch: [
      authenticate,
      addModificationInfo,
    ],
  },
  after: {
    get: [
      checkFollowUserStatus,
    ],
  },
};

export default profilesHook;
