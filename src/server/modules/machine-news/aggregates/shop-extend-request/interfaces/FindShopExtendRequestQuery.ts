import { FindQuery } from '@app/core';
import { ShopExtendRequestState } from './ShopExtendRequest';

export interface FindShopExtendRequestQuery extends FindQuery {
  search?: string;
  state?: ShopExtendRequestState;
}
