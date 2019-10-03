import { Hook, authenticate, logApiRequest } from '@app/core';
import { recentViewedRepository } from './recent-viewed.repository';
import { newsRepository } from '../news/news.repository';
import { checkFollowRecentViewed } from '@app/machine-news';

const recentViewedHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = recentViewedRepository;
        context.params.newsRepository = newsRepository;
      },
    ],
  },
  after: {
    find: [
      checkFollowRecentViewed,
    ],
  },
};

export default recentViewedHook;
