import { newsRepository } from '../news/news.repository';
import { SearchOffsetService } from './interfaces/SearchOffsetService';

const searchService: SearchOffsetService = {
  find: async (params) => {
    // 1. authorize

    // 2. validate
    // validateQuery(params.query);

    // 3. do business logic

    // 4. persist to db
    return await newsRepository.searchNewsOffsetPaging(params.query);
  },
};

export default searchService;
