import { Hook, authenticate } from '@app/core';
import { checkFollowSearchResult } from '@app/machine-news';
const mostFollowHook: Hook = {
  before: {
    all: [
    ],
    find: [
      authenticate,
    ],
  },
  after: {
    find: [
      checkFollowSearchResult,
    ],
  },
};

export default mostFollowHook;
