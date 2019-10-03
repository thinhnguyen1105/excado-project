import { RequestParams, UserInputError, validateQuery, validateOperation, NotAuthorizedError } from '@app/core';
import { FollowsService, UserId, NewsId, FindFollowsQuery } from '@app/machine-news';
import { UsersRepository } from '@app/auth';
import { FollowPayload } from './interfaces/FollowPayload';
import { ShopId } from './interfaces/ShopId';
import { followNewsRepository } from './follow-news.repository';
import { followUsersRepository } from './follow-users.repository';
import { followShopRepository } from './follow-shops.repository';
import { ensureAuthenticate } from '../../../../core/auth/ensureAuthenticate';

const followsService: FollowsService = {
  find: async (params: RequestParams<any> & { query: FindFollowsQuery }) => {
    // 1. authorize
    ensureAuthenticate(params.authUser);
    if (params.authUser!.id !== params.query.id) {
      throw new NotAuthorizedError();
    }

    // 2. validate
    validateQuery(params.query);

    // 3. do business logic

    // 4. persist to db
    if (params.query.type === 'user') {
      return await followUsersRepository.findFollowByUser(params.query);
      // return {
      //   data: followUsersResult.data.map((item) => item.followee),
      //   before: followUsersResult.before,
      //   after: followUsersResult.after,
      // };
    } else if (params.query.type === 'news') {
      const followNews = await followNewsRepository.findFollowsByUser(params.query);
      return {
        data: followNews.map((item) => item.news),
        before: undefined,
        after: undefined,
      };
    } else if (params.query.type === 'shop') {
      return await followShopRepository.findFollowByUser(params.query);
      // return {
      //   data: followShopsResult.data.map((item) => item.shop),
      //   before: followShopsResult.before,
      //   after: followShopsResult.after,
      // };
    } else {
      throw new UserInputError('Missing query');
    }
  },
  patch: async (id: string, data: { operation: string, payload: FollowPayload }, params: RequestParams<any>): Promise<{}> => {
    validateOperation(data.operation, ['followUser', 'unfollowUser', 'followNews', 'unfollowNews', 'followShop', 'unfollowShop']);
    await followsService[data.operation](id, data.payload, params);
    return {};
  },
  followUser: async (id: string, data: UserId, _params: RequestParams<UsersRepository>): Promise<{}> => {
    // 1. authorize

    // 2. validate
    const followeeId = data.userId;
    const userId = id;
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    if (!data.userId) {
      throw new UserInputError('Invalid body');
    }
    const existedFollowUser = await followUsersRepository.findOne({user: userId, followee: followeeId});
    if (existedFollowUser) {
      throw new UserInputError('User is already followed');
    }

    // 3. do business logic

    // 4. persist to db
    await followUsersRepository.create({
      followee: followeeId,
      user: userId,
      createdAt: new Date().getTime(),
    });
    return {};
  },
  unfollowUser: async (id: string, data: UserId, _params: RequestParams<UsersRepository>): Promise<{}> => {
    // 1. authorize

    // 2. validate
    const followeeId = data.userId;
    const userId = id;
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    if (!data.userId) {
      throw new UserInputError('Invalid body');
    }
    const existedFollowUser = await followUsersRepository.findOne({user: userId, followee: followeeId});
    if (!existedFollowUser) {
      throw new UserInputError('User is not followed');
    }

    // 3. do business logic

    // 4. persist to db
    await followUsersRepository.del({
      followee: followeeId,
      user: userId,
    });
    return {};
  },
  followNews: async (id: string, data: NewsId, _params: RequestParams<any>): Promise<{}> => {
    // 1. authorize

    // 2. validate
    const newsId = data.newsId;
    const userId = id;
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    if (!data.newsId) {
      throw new UserInputError('Invalid body');
    }
    const existedFollowNews = await followNewsRepository.findOne({user: userId, news: newsId});
    if (existedFollowNews) {
      throw new UserInputError('News is already followed');
    }

    // 3. do business logic

    // 4. persist to db
    await followNewsRepository.create({
      news: newsId,
      user: userId,
      createdAt: new Date().getTime(),
    });
    return {};
  },
  unfollowNews: async (id: string, data: NewsId, _params: RequestParams<any>): Promise<{}> => {
    // 1. authorize

    // 2. validate
    const newsId = data.newsId;
    const userId = id;
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    if (!data.newsId) {
      throw new UserInputError('Invalid body');
    }
    const existedFollowNews = await followNewsRepository.findOne({user: userId, news: newsId});
    if (!existedFollowNews) {
      throw new UserInputError('News is not followed');
    }

    // 3. do business logic

    // 4. persist to db
    await followNewsRepository.del({
      user: userId,
      news: newsId,
    });
    return {};
  },
  followShop: async (id: string, data: ShopId, _params: RequestParams<any>): Promise<{}> => {
    // 1. authorize

    // 2. validate
    const shopId = data.shopId;
    const userId = id;
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    if (!data.shopId) {
      throw new UserInputError('Invalid body');
    }
    const existedFollowShop = await followShopRepository.findOne({user: userId, shop: shopId});
    if (existedFollowShop) {
      throw new UserInputError('Shop is already followed');
    }

    // 3. do business logic

    // 4. persist to db
    await followShopRepository.create({
      shop: shopId,
      user: userId,
      createdAt: new Date().getTime(),
    });
    return {};
  },

  unfollowShop: async (id: string, data: ShopId, _params: RequestParams<any>): Promise<{}> => {
    // 1. authorize

    // 2. validate
    const shopId = data.shopId;
    const userId = id;
    if (!id) {
      throw new UserInputError('Invalid query params');
    }
    if (!data.shopId) {
      throw new UserInputError('Invalid body');
    }
    const existedFollowShop = await followShopRepository.findOne({user: userId, shop: shopId});
    if (!existedFollowShop) {
      throw new UserInputError('Shop is not followed');
    }

    // 3. do business logic

    // 4. persist to db
    await followShopRepository.del({
      shop: shopId,
      user: userId,
    });
    return {};
  },
};

export default followsService;
