import { HookContext } from '@feathersjs/feathers';
import { followUsersRepository } from '../../../../machine-news/aggregates/follows/follow-users.repository';

export const checkFollowUserStatus = async (context: HookContext) => {
  if (context.params.authUser && context.params.authUser.id) {
    const JSONResult = JSON.parse(JSON.stringify(context.result));
    const followUser = await followUsersRepository.findOne({
      user: context.params.authUser.id,
      followee: JSONResult._id,
    });

    context.result = {
      ...JSONResult,
      isFollowing: Boolean(followUser),
    };
  }
};
