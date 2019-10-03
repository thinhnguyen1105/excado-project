import { HookContext } from '@feathersjs/feathers';
import { apiCache, logger } from '@app/core';

export const invalidAllBrandsCache = async (_context: HookContext) => {
  const key = '/api/brands/customs/find-brand-list';
  apiCache.del(key, (error) => {
    logger.error(error);
  });
};
