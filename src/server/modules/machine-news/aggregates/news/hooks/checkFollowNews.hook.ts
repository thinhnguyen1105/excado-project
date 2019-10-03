import { HookContext } from '@feathersjs/feathers';
import { followNewsRepository } from '../../follows/follow-news.repository';
import { followUsersRepository } from '../../follows/follow-users.repository';
import { followShopRepository } from '../../follows/follow-shops.repository';

export const checkFollowNews = async (context: HookContext) => {
  if (context.params.authUser && context.params.authUser.id) {
    const checkFollowPromises: any[] = [
      followNewsRepository.findOne({
        user: context.params.authUser.id,
        news: context.result._id,
      }),
      followUsersRepository.findOne({
        user: context.params.authUser.id,
        followee: context.result.owner._id,
      }),
    ];
    if (context.result.shop && context.result.shop._id) {
      checkFollowPromises.push(followShopRepository.findOne({
        user: context.params.authUser.id,
        shop: context.result.shop._id,
      }));
    }
    const [followNews, followUser, followShop] = await Promise.all(checkFollowPromises);

    const JSONResult = JSON.parse(JSON.stringify(context.result));
    context.result = {
      ...JSONResult,
      owner: {
        ...JSONResult.owner,
        isFollowing: Boolean(followUser),
      },
      shop: JSONResult.shop && context.result.shop._id ? {
        ...JSONResult.shop,
        isFollowing: Boolean(followShop),
      } : undefined,
      isFollowing: Boolean(followNews),
    };
  }
};
