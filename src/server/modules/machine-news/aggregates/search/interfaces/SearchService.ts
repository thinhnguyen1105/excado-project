import { RequestParams } from '@app/core';
import { NewsRepository, SearchQuery } from '@app/machine-news';
import { FindNewsESResult } from './FindNewsESResult';

export interface SearchService {
  find?: (params: RequestParams<NewsRepository> & { query: SearchQuery }) => Promise<FindNewsESResult>;
}
