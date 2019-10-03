import { config } from '@app/config';

export const updateFollowCount = async (context: any) => {
  switch (context.data.operation) {
    case 'followNews':
      context.app.service(`${config.web.api.prefix}/news`).updateFollowCount(context.data.payload.newsId, 'follow');
      break;
    case 'unfollowNews':
      context.app.service(`${config.web.api.prefix}/news`).updateFollowCount(context.data.payload.newsId, 'unfollow');
      break;
    case 'followUser':
      context.app.service(`${config.web.api.prefix}/users`).updateFollowCount(context.data.payload.userId, 'follow');
      break;
    case 'unfollowUser':
      context.app.service(`${config.web.api.prefix}/users`).updateFollowCount(context.data.payload.userId, 'unfollow');
      break;
    case 'followShop':
      context.app.service(`${config.web.api.prefix}/shop`).updateFollowCount(context.data.payload.shopId, 'follow');
      break;
    case 'unfollowShop':
      context.app.service(`${config.web.api.prefix}/shop`).updateFollowCount(context.data.payload.shopId, 'unfollow');
      break;
  }
};
