import { HookContext } from '@feathersjs/feathers';
import { apiCache, logger } from '@app/core';

export const invalidProvinceCache = async (_context: HookContext) => {
  const key = '/api/provinces/find';
  apiCache.del(key, (error) => {
    logger.error(error);
  });
};
