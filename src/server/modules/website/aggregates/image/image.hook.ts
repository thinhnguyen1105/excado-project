import { Hook, addCreationInfo, addModificationInfo } from '@app/core';

const newsHook: Hook = {
  before: {
    all: [],
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
};

export default newsHook;
