import { Hook, addCreationInfo, addModificationInfo } from '@app/core';

const downloadFilesHook: Hook = {
  before: {
    all: [
      // authenticate,
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
};

export default downloadFilesHook;
