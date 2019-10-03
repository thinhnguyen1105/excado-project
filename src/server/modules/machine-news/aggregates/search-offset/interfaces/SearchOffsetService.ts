import { RequestParams } from '@app/core';
import { NewsRepository } from '@app/machine-news';
import { SearchNewsOffsetPagingQuery } from './SearchNewsOffsetPagingQuery';
import { FindNewsESOffsetPagingResult } from './FindNewsESOffsetPagingResult';

export interface SearchOffsetService {
  find?: (params: RequestParams<NewsRepository> & { query: SearchNewsOffsetPagingQuery }) => Promise<FindNewsESOffsetPagingResult>;
}
