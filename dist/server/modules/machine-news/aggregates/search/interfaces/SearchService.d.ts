import { RequestParams } from '@app/core';
import { NewsRepository } from '@app/machine-news';
import { SearchQuery } from './SearchQuery';
import { FindNewsESResult } from './FindNewsESResult';
export interface SearchService {
    find?: (params: RequestParams<NewsRepository> & {
        query: SearchQuery;
    }) => Promise<FindNewsESResult>;
}
