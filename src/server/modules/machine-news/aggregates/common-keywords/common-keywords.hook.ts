import { logApiRequest } from '@app/core';
import { commonKeywordRepository } from './common-keywords.repository';

const commonKeywordsHook = {
  before: {
    all: [
      logApiRequest,
      async (context: any) => {
        context.params.repository = commonKeywordRepository;
      },
    ],
  },
};

export default commonKeywordsHook;
