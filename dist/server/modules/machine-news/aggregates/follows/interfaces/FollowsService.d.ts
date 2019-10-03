import { RequestParams, Service, PatchPayload } from '@app/core';
import { UserId, NewsId, FindFollowsQuery, FollowPayload } from '@app/machine-news';
import { UsersRepository } from '@app/auth';
import { ShopId } from './ShopId';
export interface FollowsService extends Service<any, FindFollowsQuery, any> {
    find: (params: RequestParams<any> & {
        query: FindFollowsQuery;
    }) => any;
    patch: (id: string, data: PatchPayload<FollowPayload>, params: RequestParams<any>) => Promise<{}>;
    followUser: (id: string, data: UserId, params: RequestParams<UsersRepository>) => Promise<{}>;
    unfollowUser: (id: string, data: UserId, params: RequestParams<UsersRepository>) => Promise<{}>;
    followNews: (id: string, data: NewsId, params: RequestParams<any>) => Promise<{}>;
    unfollowNews: (id: string, data: NewsId, params: RequestParams<any>) => Promise<{}>;
    followShop: (id: string, data: ShopId, params: RequestParams<any>) => Promise<{}>;
    unfollowShop: (id: string, data: ShopId, params: RequestParams<any>) => Promise<{}>;
}
