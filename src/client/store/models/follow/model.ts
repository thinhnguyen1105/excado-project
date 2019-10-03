import { createModel, ModelConfig } from '@rematch/core';
import { FollowState, GetFollowDataPayload, FollowNewsPayload, FollowUserPayload, FollowShopPayload } from './interface';
import { getServiceProxy } from '@client/services';
import { message } from 'antd';
import { clientTranslate } from '@client/i18n';

const followModel: ModelConfig<FollowState> = createModel({
  state: {
    data: [],
    currentTab: 'SELL',
    currentType: 'news',
  },
  reducers: {
    getFollowDataSuccess: (state: FollowState, payload: any): FollowState => {
      return {
        ...state,
        data: payload.data,
      };
    },
  },
  effects: {
    async getFollowData(payload: GetFollowDataPayload): Promise<void> {
      try {
        const serviceProxies = getServiceProxy();
        const data = await serviceProxies.findFollow(
          payload.id,
          payload.type,
          payload.newsType,
          payload.first,
          payload.sortBy,
          payload.before,
          payload.after,
        );
        this.getFollowDataSuccess(data);
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
      }
    },
    async followNews (payload: FollowNewsPayload): Promise<void> {
      try {
        const serviceProxies = getServiceProxy();
        await serviceProxies.follow(
          payload.userId,
          {
            operation: 'followNews',
            payload: {
              newsId: payload.newsId,
        }});
        message.success(clientTranslate('common:follow-success'));
      } catch (error) {
        message.error(clientTranslate('common:error-happen'));
      }
    },
    async unfollowNews (payload: FollowNewsPayload): Promise<void> {
      try {
        const serviceProxies = getServiceProxy();
        await serviceProxies.follow(
          payload.userId,
          {
            operation: 'unfollowNews',
            payload: {
              newsId: payload.newsId,
        }});
        message.success(clientTranslate('common:unfollow-success'));
      } catch (error) {
        message.error(clientTranslate('common:error-happen'));
      }
    },
    async followUser (payload: FollowUserPayload): Promise<void> {
      try {
        const serviceProxies = getServiceProxy();
        await serviceProxies.follow(
          payload.authId,
          {
            operation: 'followUser',
            payload: {
              userId: payload.userId,
        }});
        message.success(clientTranslate('common:follow-success'));
      } catch (error) {
        message.error(clientTranslate('common:error-happen'));
      }
    },
    async unfollowUser (payload: FollowUserPayload): Promise<void> {
      try {
        const serviceProxies = getServiceProxy();
        await serviceProxies.follow(
          payload.authId,
          {
            operation: 'unfollowUser',
            payload: {
              userId: payload.userId,
        }});
        message.success(clientTranslate('common:unfollow-success'));
      } catch (error) {
        message.error(clientTranslate('common:error-happen'));
      }
    },
    async followShop (payload: FollowShopPayload): Promise<void> {
      try {
        const serviceProxies = getServiceProxy();
        await serviceProxies.follow(
          payload.authId,
          {
            operation: 'followShop',
            payload: {
              shopId: payload.shopId,
        }});
        message.success(clientTranslate('common:follow-success'));
      } catch (error) {
        message.error(clientTranslate('common:error-happen'));
      }
    },
    async unfollowShop (payload: FollowShopPayload): Promise<void> {
      try {
        const serviceProxies = getServiceProxy();
        await serviceProxies.follow(
          payload.authId,
          {
            operation: 'unfollowShop',
            payload: {
              shopId: payload.shopId,
        }});
        message.success(clientTranslate('common:unfollow-success'));
      } catch (error) {
        message.error(clientTranslate('common:error-happen'));
      }
    },
  },
});

export default followModel;
