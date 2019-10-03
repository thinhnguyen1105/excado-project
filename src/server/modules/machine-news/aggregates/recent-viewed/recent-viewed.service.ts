import { RecentViewedService } from './interfaces/RecentViewedService';
import { validateQuery, UserInputError } from '@app/core';
import * as yup from 'yup';

const recentViewedKey = 'recent_viewed';
const recentViewedService: RecentViewedService = {
  find: async (params) => {
    // 1. authorize

    // 2. validate
    validateQuery(params.query);

    // 3. do business logic

    // 4. persist to db
    const filter = {
      ...params.query,
      user: params.authUser ? params.authUser.id : '',
    };
    if (!filter.user) {
      filter.uuid = params.cookies[recentViewedKey];
    }

    return filter.uuid || filter.user ? await params.repository.find(filter as any) : {data: []};
  },
  create: async (data, params) => {
    // 1. authorize

    // 2. validate
    const validationSchema = yup.object().shape({
      news: yup.string().required('News is required'),
    });
    await validationSchema.validate(data);
    const existedNews = await (params as any).newsRepository.findById(data.news);
    if (!existedNews) {
      throw new UserInputError('News not found');
    }

    // 3. do business logic
    if (params.authUser && params.authUser.id) {
      // 4. persist to db
      await params.repository.update({
        newsStatus: 'PUBLIC',
        news: data.news,
        user: params.authUser.id,
        createdAt: new Date().getTime(),
        lastModifiedAt: new Date().getTime(),
      });
    } else {
      // 4. persist to db
      await params.repository.update({
        newsStatus: 'PUBLIC',
        news: data.news,
        uuid: params.cookies[recentViewedKey],
        createdAt: new Date().getTime(),
        lastModifiedAt: new Date().getTime(),
      });
    }

    return {} as any;
  },
};

export default recentViewedService;
