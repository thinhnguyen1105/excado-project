import { newsRepository } from '../news/news.repository';
import { SearchSuggestionService } from './interfaces/SearchSuggestionService';

const searchSuggestionService: SearchSuggestionService = {
  find: async (params) => {
    // 1. authorize

    // 2. validate

    // 3. do business logic

    // 4. persist to db
    return await newsRepository.searchSuggestions(params.query.keyword);
  },
};

export default searchSuggestionService;
