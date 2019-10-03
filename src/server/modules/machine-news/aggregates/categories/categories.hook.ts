import { Hook, addCreationInfo, addModificationInfo, writeToCache, logApiRequest, readFromCache, authenticate } from '@app/core';
import { categoryRepository } from './categories.repository';
import { invalidCategoryCache } from './hooks/invalidCache.hook';
import { invalidCategoryDetailCache } from './hooks/invalidCategoryDetailCache.hook';

const categoryHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = categoryRepository;
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
    remove: [
    ],
  },
  after: {
    find: [
      writeToCache,
    ],
    create: [
      invalidCategoryCache,
    ],
    patch: [
      invalidCategoryCache,
      invalidCategoryDetailCache,
    ],
    remove: [
      invalidCategoryCache,
      invalidCategoryDetailCache,
    ],
  },
};

export default categoryHook;
