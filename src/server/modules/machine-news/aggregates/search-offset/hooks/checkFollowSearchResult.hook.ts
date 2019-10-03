import { HookContext } from '@feathersjs/feathers';
import { followNewsRepository } from '../../follows/follow-news.repository';

export const checkFollowSearchResult = async (context: HookContext) => {
  if (context.params.authUser && context.params.authUser.id) {
    const checkFollowPromises: any = [];
    context.result.data.filter((ite: any) => ite).forEach((item: any) => {
      checkFollowPromises.push(followNewsRepository.findOne({
        user: context.params.authUser.id,
        news: item._id,
      }));
    });
    const followResult = await Promise.all(checkFollowPromises);

    const JSONResult = JSON.parse(JSON.stringify(context.result));
    const data = [];
    for (let i = 0; i < followResult.length; i += 1) {
      data.push({
        ...JSONResult.data[i],
        followBy: [],
        isFollowing: Boolean(followResult[i]),
      });
    }
    context.result = {
      ...JSONResult,
      data,
    };
  }
};
