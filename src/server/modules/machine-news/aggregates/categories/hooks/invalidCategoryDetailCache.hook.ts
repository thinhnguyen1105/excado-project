import { HookContext } from '@feathersjs/feathers';
import { apiCache, logger } from '@app/core';
import { CategoryModel } from '../categories.repository';

export const invalidCategoryDetailCache = async (context: HookContext) => {
  const categoryInfo = await CategoryModel.findById(context.id).exec() as any;
  if (categoryInfo) {
    const key = `/api/categories/customs/find-category-detail/${categoryInfo.slug}`;
    apiCache.del(key, (error) => {
      logger.error(error);
    });
  }
};
