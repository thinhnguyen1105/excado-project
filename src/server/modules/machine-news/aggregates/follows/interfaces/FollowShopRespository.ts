import { FollowShop } from './FollowShop';
import { FindResult } from '@app/core';
import { FindFollowsQuery } from './FindFollowsQuery';

export interface FollowShopRepository {
  findFollowByUser: (query: FindFollowsQuery) => Promise<FindResult<FollowShop>>;
  findByShop: (shopId: string) => Promise<FollowShop[]>;
  findOne: (query: {user: string; shop: string}) => Promise<FollowShop>;
  create: (payload: {user: string; shop: string; createdAt: number}) => Promise<string>;
  del: (payload: {user: string; shop: string}) => Promise<void>;
  ensureIndexes: () => Promise<void>;
}
