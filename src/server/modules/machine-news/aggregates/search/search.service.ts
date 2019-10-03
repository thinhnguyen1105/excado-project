import { SearchService } from '@app/machine-news';
import { newsRepository } from '../news/news.repository';

const searchService: SearchService = {
  find: async (params) => {
    // 1. authorize

    // 2. validate
    // validateQuery(params.query);

    // 3. do business logic

    // 4. persist to db
    return await newsRepository.searchNews(params.query);
  },
};

export default searchService;
