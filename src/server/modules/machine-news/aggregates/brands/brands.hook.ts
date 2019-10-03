import { Hook, addCreationInfo, addModificationInfo, writeToCache, logApiRequest, authenticate } from '@app/core';
import { brandRepository } from './brands.repository';
import { invalidAllBrandsCache } from './hooks/invalidAllBrandsCache.hook';
import { invalidBrandDetailCache } from './hooks/invalidBrandDetail.hook';
import { invalidTopBrandsCache } from './hooks/invalidTopBrandsCache.hook';

const brandHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = brandRepository;
      },
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
  },
  after: {
    find: [
      writeToCache,
    ],
    create: [
      invalidAllBrandsCache,
    ],
    patch: [
      invalidAllBrandsCache,
      invalidBrandDetailCache,
      invalidTopBrandsCache,
    ],
    remove: [
      invalidAllBrandsCache,
      invalidBrandDetailCache,
      invalidTopBrandsCache,
    ],
  },
};

export default brandHook;
