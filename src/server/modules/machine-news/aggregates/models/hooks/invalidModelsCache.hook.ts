import { HookContext } from '@feathersjs/feathers';
import { apiCache, logger } from '@app/core';

export const invalidModelsCache = async (_context: HookContext) => {
  const key = '/api/models/find10&slug|asc';
  apiCache.del(key, (error) => {
    logger.error(error);
  });
};
