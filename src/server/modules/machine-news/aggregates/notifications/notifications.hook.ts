import { Hook, logApiRequest, authenticate, addCreationInfo } from '@app/core';
import { notificationsRepository } from '@app/machine-news';

const notificationsHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = notificationsRepository;
      },
    ],
    create: [
      addCreationInfo,
    ],
  },
};

export default notificationsHook;
