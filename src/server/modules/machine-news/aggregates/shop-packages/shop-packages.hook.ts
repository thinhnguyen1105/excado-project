import { Hook, logApiRequest, authenticate, addCreationInfo } from '@app/core';
import { shopPackageReporitogy } from './shop-packages.repository';

const shopPackageHook: Hook = {
  before: {
    all: [
      authenticate,
      logApiRequest,
      async (context: any) => {
        context.params.repository = shopPackageReporitogy;
      },
    ],
    create: [
      addCreationInfo,
    ],
  },
};

export default shopPackageHook;
