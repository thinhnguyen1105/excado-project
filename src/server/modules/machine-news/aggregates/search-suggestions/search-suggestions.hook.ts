import { Hook, logApiRequest, authenticate } from '@app/core';

const searchSuggestionHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
    ],
  },
};

export default searchSuggestionHook;
