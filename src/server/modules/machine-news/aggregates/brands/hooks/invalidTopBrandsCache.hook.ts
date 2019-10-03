import { HookContext } from '@feathersjs/feathers';
import { apiCache, logger } from '@app/core';

export const invalidTopBrandsCache = async (_context: HookContext) => {
  const key = '/api/brands/customs/find-top-brands';
  apiCache.del(key, (error) => {
    logger.error(error);
  });
};
