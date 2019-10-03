import { Service, RequestParams } from '@app/core';
import { MostFollowQuery } from '@app/machine-news';

export interface MostFollowsService extends Service<any, any, any> {
  find: (params: RequestParams<any> & { query: MostFollowQuery }) => any;
}
