import NodeCache from 'node-cache';
import { config } from '@app/config';

export const apiCache = new NodeCache({
  stdTTL: config.cache.ttl,
  checkperiod: config.cache.checkperiod,
});
