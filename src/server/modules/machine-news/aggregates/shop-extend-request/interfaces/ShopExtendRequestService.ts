import { FindShopExtendRequestQuery } from './FindShopExtendRequestQuery';
import { ShopExtendRequest } from './ShopExtendRequest';
import { Service, RequestParams } from '@app/core';
import { ShopExtendRequestRepository } from './ShopExtendRequestRepository';

export interface ShopExtendRequestService extends Service<ShopExtendRequest, FindShopExtendRequestQuery, ShopExtendRequestRepository> {
  extendShop: (id: string, data: Partial<ShopExtendRequest>, params: RequestParams<ShopExtendRequestRepository>) => Promise<void>;
}
