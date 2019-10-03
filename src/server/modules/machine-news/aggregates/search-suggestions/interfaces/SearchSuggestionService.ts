import { RequestParams } from '@app/core';
import { NewsRepository } from '@app/machine-news';

export interface SearchSuggestionService {
  find?: (params: RequestParams<NewsRepository> & { query: {keyword: string} }) => Promise<{suggestions: string[]}>;
}
