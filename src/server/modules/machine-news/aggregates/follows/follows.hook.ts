import { Hook, addCreationInfo, addModificationInfo, authenticate } from '@app/core';
import { userRepository } from '@app/auth';
import { newsRepository, checkFollowSearchResult } from '@app/machine-news';
import { updateFollowCount } from './hooks/updateFollowCount.hook';

const followsHook: Hook = {
  before: {
    all: [
      authenticate,
      async (context: any) => {
        context.params.userRepository = userRepository;
        context.params.newsRepository = newsRepository;
      },
    ],
    find: [
    ],
    create: [
      addCreationInfo,
    ],
    update: [
      addModificationInfo,
    ],
    patch: [
      addModificationInfo,
    ],
    remove: [
    ],
  },
  after: {
    find: [
      checkFollowSearchResult,
    ],
    patch: [
      updateFollowCount,
    ],
  },
};

export default followsHook;
