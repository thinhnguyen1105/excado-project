import { Hook, addCreationInfo, addModificationInfo, writeToCache, readFromCache, logApiRequest, authenticate } from '@app/core';
import { modelRepository } from './models.repository';
import { invalidModelsCache } from './hooks/invalidModelsCache.hook';

const modelHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = modelRepository;
      },
    ],
    find: [
      readFromCache,
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
    remove: [],
  },
  after: {
    find: [
      writeToCache,
    ],
    create: [
      invalidModelsCache,
    ],
    patch: [
      invalidModelsCache,
    ],
    remove: [
      invalidModelsCache,
    ],
  },
};

export default modelHook;
