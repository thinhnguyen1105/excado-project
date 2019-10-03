import { HookContext } from '@feathersjs/feathers';
import { apiCache, logger } from '@app/core';

export const invalidCategoryCache = async (_context: HookContext) => {
  const key = '/api/categories/find';
  apiCache.del(key, (error) => {
    logger.error(error);
  });
};
