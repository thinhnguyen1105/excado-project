import { apiCache } from '@app/core';

export const writeToCache = (key: string, value: any) => {
  apiCache.set(key, value);
};
