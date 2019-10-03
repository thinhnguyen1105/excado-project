import { HookContext } from '@feathersjs/feathers';
import { newsRepository } from '../news.repository';
import { brandRepository } from '../../brands/brands.repository';
import { provinceRepository } from '../../provinces/provinces.repository';
import { categoryRepository } from '../../categories/categories.repository';
import { modelRepository } from '../../models/models.repository';

export const increaseNewsCount = async (context: HookContext) => {
  const newsId = context.result.id;
  const newsInfo = await newsRepository.findById(newsId);

  if (newsInfo) {
    if (newsInfo.brand && (newsInfo.brand as any)._id) {
      brandRepository.increaseNewsCount((newsInfo.brand as any)._id);
    }

    if (newsInfo.location && (newsInfo.location as any)._id) {
      provinceRepository.increaseNewsCount((newsInfo.location as any)._id);
    }

    if (newsInfo.categoryId && (newsInfo.categoryId as any)._id) {
      categoryRepository.increaseNewsCount((newsInfo.categoryId as any)._id);
    }

    if (newsInfo.model && (newsInfo.model as any)._id) {
      modelRepository.increaseNewsCount((newsInfo.model as any)._id);
    }
  }
};
