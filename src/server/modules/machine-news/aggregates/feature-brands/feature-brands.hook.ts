import { Hook, authenticate, logApiRequest, addCreationInfo, addModificationInfo } from '@app/core';
import { featureBrandRepository } from './feature-brands.repository';
import { brandRepository } from '../brands/brands.repository';

const featureBrandHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = featureBrandRepository;
        context.params.brandRepository = brandRepository;
      },
    ],
    create: [
      addCreationInfo,
    ],
    patch: [
      addModificationInfo,
    ],
  },
};

export default featureBrandHook;
