import { FindQuery } from '@app/core';

export interface FollowState {
  data: any;
  currentTab: string;
  currentType: string;
}

export interface GetFollowDataPayload extends FindQuery {
  id: string;
  type: string;
  newsType?: string;
}

export interface FollowNewsPayload {
  newsId: string;
  userId: string;
}

export interface FollowUserPayload {
  authId: string;
  userId: string;
}

export interface FollowShopPayload {
  authId: string;
  shopId: string;
}

export interface FollowReducers {
  getFollowDataSuccess: (payload: any) => any;
}

export interface FollowEffects {
  getFollowData: (payload: GetFollowDataPayload) => void;
  followNews: (payload: FollowNewsPayload) => void;
  unfollowNews: (payload: FollowNewsPayload) => void;
  followUser: (payload: FollowUserPayload) => void;
  unfollowUser: (payload: FollowUserPayload) => void;
  followShop: (payload: FollowShopPayload) => void;
  unfollowShop: (payload: FollowShopPayload) => void;
}
