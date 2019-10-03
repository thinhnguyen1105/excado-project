import { Shop } from './Shop';
import { Repository, FindResult } from '../../../../../core';
import { FindShopQuery } from './FindShopQuery';
import { UpdateFollower } from '@app/auth';
export interface ShopRepository extends Repository<Shop> {
    getAll: () => Promise<Shop[]>;
    find: (query: FindShopQuery) => Promise<FindResult<Shop>>;
    follow: (payload: UpdateFollower) => Promise<void>;
    unfollow: (payload: UpdateFollower) => Promise<void>;
    increaseFollowCount: (id: string) => Promise<void>;
    decreaseFollowCount: (id: string) => Promise<void>;
}
