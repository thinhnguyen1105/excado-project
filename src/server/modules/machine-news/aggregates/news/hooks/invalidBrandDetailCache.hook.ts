import { HookContext } from '@feathersjs/feathers';
import { apiCache, logger } from '@app/core';
import { NewsModel } from '../news.repository';

export const invalidBrandDetailCache = async (context: HookContext) => {
  const newsInfo = await NewsModel.findById(context.result.id || context.id).populate('brand').exec() as any;
  if (newsInfo && newsInfo.brand && newsInfo.brand._id) {
    const key = `/api/brands/customs/find-brand-detail/${newsInfo.brand.slug}`;
    apiCache.del(key, (error) => {
      logger.error(error);
    });
  }
};
