import { Hook, addCreationInfo, addModificationInfo, authenticate, logApiRequest } from '@app/core';
import { createNotification } from './hooks/createNotification.hook';
import { addOldNews } from './hooks/addOldNews.hook';
import { increaseNewsCount } from './hooks/increaseNewsCount.hook';
import { updateNewsCount } from './hooks/updateNewsCount.hook';
import { invalidCategoryCache } from '../categories/hooks/invalidCache.hook';
import { invalidBrandDetailCache } from './hooks/invalidBrandDetailCache.hook';
import { invalidCategoryDetailCache } from './hooks/invalidCategoryDetailCache.hook';
import { invalidProvinceCache } from '../provinces/hooks/invalidCache.hook';
import { invalidAllBrandsCache } from '../brands/hooks/invalidAllBrandsCache.hook';
import { invalidTopBrandsCache } from '../brands/hooks/invalidTopBrandsCache.hook';
import { checkFollowNews } from './hooks/checkFollowNews.hook';

const newsHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
    ],
    find: [
    ],
    create: [
      authenticate,
      addCreationInfo,
    ],
    update: [
      authenticate,
      addModificationInfo,
    ],
    patch: [
      authenticate,
      addModificationInfo,
      addOldNews,
    ],
    remove: [
    ],
  },
  after: {
    get: [
      checkFollowNews,
    ],
    create: [
      increaseNewsCount,
      createNotification,
      invalidCategoryCache,
      invalidProvinceCache,
      invalidAllBrandsCache,
      invalidTopBrandsCache,
      invalidCategoryDetailCache,
      invalidBrandDetailCache,
    ],
    patch: [
      updateNewsCount,
      invalidCategoryCache,
      invalidProvinceCache,
      invalidAllBrandsCache,
      invalidTopBrandsCache,
      invalidCategoryDetailCache,
      invalidBrandDetailCache,
    ],
  },
};

export default newsHook;
