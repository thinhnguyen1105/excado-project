import { FindQuery } from '@app/core';

export interface MostFollowQuery extends FindQuery {
  shopId?: string;
  otherSortBy: string;
}
