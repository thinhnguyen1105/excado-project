import { Aggregate } from '@app/core';
export interface FollowShop extends Aggregate {
    shop: any;
    user: any;
    createdAt: number;
}
