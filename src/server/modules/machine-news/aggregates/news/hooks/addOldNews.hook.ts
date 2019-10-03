import { HookContext } from '@feathersjs/feathers';
import { newsRepository } from '../news.repository';

export const addOldNews = async (context: HookContext) => {
  const newsId = context.id;
  const newsInfo = await newsRepository.findById(newsId as any);
  (context as any).oldNews = newsInfo;
};
