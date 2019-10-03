import { HookContext } from '@feathersjs/feathers';
import { newsRepository } from '../news.repository';
import { notificationsRepository } from '../../notifications/notifications.repository';
import { followShopRepository } from '../../follows/follow-shops.repository';
import { followUsersRepository } from '../../follows/follow-users.repository';

export const createNotification = async (context: HookContext) => {
  const news = await newsRepository.findById(context.result.id);

  const createNotiPromises: any = [
    notificationsRepository.create({
      owner: (news.owner as any)._id,
      news: news._id,
      state: 'UNREAD',
      type: 'CREATE_NEWS',
      createdAt: new Date().getTime(),
    }),
  ];

  if (news.shop && (news.shop as any)._id) {
    const followShops = await followShopRepository.findByShop((news.shop as any)._id);
    for (const follow of followShops) {
      createNotiPromises.push(notificationsRepository.create({
        owner: follow.user,
        news: news._id,
        state: 'UNREAD',
        type: 'FOLLOW_SHOP',
        createdAt: new Date().getTime(),
      }));
    }
  } else if (news.owner && (news.owner as any)._id) {
    const followUsers = await followUsersRepository.findByFollowee((news.owner as any)._id);
    for (const follow of followUsers) {
      createNotiPromises.push(notificationsRepository.create({
        owner: follow.user,
        news: news._id,
        state: 'UNREAD',
        type: 'FOLLOW_USER',
        createdAt: new Date().getTime(),
      }));
    }
  }

  await Promise.all(createNotiPromises);
};
