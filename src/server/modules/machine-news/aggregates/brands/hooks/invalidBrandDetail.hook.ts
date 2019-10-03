import { HookContext } from '@feathersjs/feathers';
import { apiCache, logger } from '@app/core';
import { BrandModel } from '../brands.repository';

export const invalidBrandDetailCache = async (context: HookContext) => {
  const brandInfo = await BrandModel.findById(context.id).exec() as any;
  if (brandInfo) {
    const key = `/api/brands/customs/find-brand-detail/${brandInfo.slug}`;
    apiCache.del(key, (error) => {
      logger.error(error);
    });
  }
};
