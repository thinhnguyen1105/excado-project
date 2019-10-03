import { Hook, logApiRequest, authenticate } from '@app/core';
import { createCommonKeyword } from '../../hooks/createCommonKeyword.hook';
import { checkFollowSearchResult } from './hooks/checkFollowSearchResult.hook';

const searchHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
    ],
    find: [
      createCommonKeyword,
    ],
  },
  after: {
    find: [
      checkFollowSearchResult,
    ],
  },
};

export default searchHook;
