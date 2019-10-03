import { HookContext } from '@feathersjs/feathers';
import { newsRepository } from '../news.repository';
import { brandRepository } from '../../brands/brands.repository';
import { modelRepository } from '../../models/models.repository';
import { provinceRepository } from '../../provinces/provinces.repository';
import { categoryRepository } from '../../categories/categories.repository';

export const updateNewsCount = async (context: HookContext) => {
  const newsId = context.id;
  const newsInfo = await newsRepository.findById(newsId as any);
  const oldNews = (context as any).oldNews;

  ['brand', 'model', 'location'].forEach((item) => {
    let repository: any;
    switch (item) {
      case 'brand':
        repository = brandRepository;
        break;
      case 'model':
        repository = modelRepository;
        break;
      case 'location':
        repository = provinceRepository;
        break;
    }

    if (newsInfo && newsInfo[item] && (newsInfo[item] as any)._id) {
      if (!oldNews[item] || !oldNews[item]._id) {
        repository.increaseNewsCount((newsInfo[item] as any)._id);
      } else if (oldNews[item]._id && oldNews[item]._id !== (newsInfo[item] as any)._id) {
        repository.increaseNewsCount((newsInfo[item] as any)._id);
        repository.decreaseNewsCount(oldNews[item]._id);
      }
    } else if (newsInfo && newsInfo[item] && !(newsInfo[item] as any)._id) {
      if (oldNews[item] && oldNews[item]._id) {
        repository.decreaseNewsCount(oldNews[item]._id);
      }
    }
  });

  if (newsInfo && newsInfo.categoryId && (newsInfo.categoryId as any)._id) {
    if (oldNews.categoryId._id && oldNews.categoryId._id !== (newsInfo.categoryId as any)._id) {
      categoryRepository.increaseNewsCount((newsInfo.categoryId as any)._id);
      categoryRepository.decreaseNewsCount(oldNews.categoryId._id);
    }
  }
};
