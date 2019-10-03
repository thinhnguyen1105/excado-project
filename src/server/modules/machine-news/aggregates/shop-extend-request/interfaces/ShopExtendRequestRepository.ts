import { ShopExtendRequest } from './ShopExtendRequest';
import { Repository, FindResult } from '@app/core';
import { FindShopExtendRequestQuery } from './FindShopExtendRequestQuery';

export interface ShopExtendRequestRepository extends Repository<ShopExtendRequest> {
  find: (query: FindShopExtendRequestQuery) => Promise<FindResult<ShopExtendRequest>>;
}
