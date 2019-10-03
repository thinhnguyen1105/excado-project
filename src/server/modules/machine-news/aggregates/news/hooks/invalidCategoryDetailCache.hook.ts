import { HookContext } from '@feathersjs/feathers';
import { apiCache, logger } from '@app/core';
import { NewsModel } from '../news.repository';

export const invalidCategoryDetailCache = async (context: HookContext) => {
  const newsInfo = await NewsModel.findById(context.result.id || context.id).populate('categoryId').exec() as any;
  if (newsInfo) {
    const key = `/api/categories/customs/find-category-detail/${newsInfo.categoryId.slug}`;
    apiCache.del(key, (error) => {
      logger.error(error);
    });
  }
};
