import { promisify } from 'util';
import { apiCache } from '@app/core';

export const readFromCache = async (req: any, res: any, next: any) => {
  const key = req.url;
  const getCacheValue = promisify(apiCache.get);
  const value = await getCacheValue(key);

  if (value) {
    res.status(200).json(value);
  } else {
    next();
  }
};
