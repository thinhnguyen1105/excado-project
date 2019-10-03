import { Hook, addCreationInfo, addModificationInfo, writeToCache, readFromCache } from '@app/core';
import { invalidProvinceCache } from './hooks/invalidCache.hook';

const provinceHook: Hook = {
  before: {
    all: [],
    find: [
      readFromCache,
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
      writeToCache,
    ],
    create: [
      invalidProvinceCache,
    ],
    patch: [
      invalidProvinceCache,
    ],
  },
};

export default provinceHook;
