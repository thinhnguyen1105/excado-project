import { FollowShop } from './FollowShop';
export interface FollowShopRepository {
    findByShop: (shopId: string) => Promise<FollowShop[]>;
    findOne: (query: {
        user: string;
        shop: string;
    }) => Promise<FollowShop>;
    create: (payload: {
        user: string;
        shop: string;
        createdAt: number;
    }) => Promise<string>;
    del: (payload: {
        user: string;
        shop: string;
    }) => Promise<void>;
}
