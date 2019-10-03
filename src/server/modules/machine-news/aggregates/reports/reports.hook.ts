import { Hook, logApiRequest, addCreationInfo, addModificationInfo, authenticate } from '@app/core';
import { reportsRepository, newsRepository } from '@app/machine-news';

const reportsHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = reportsRepository;
      },
    ],
    create: [
      addCreationInfo,
      async (context: any) => {
        context.params.newsRepository = newsRepository;
      },
    ],
    patch: [
      addModificationInfo,
      async (context: any) => {
        context.params.newsRepository = newsRepository;
      },
    ],
  },
};

export default reportsHook;
