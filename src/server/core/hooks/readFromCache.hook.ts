import { HookContext } from '@feathersjs/feathers';
import { promisify } from 'util';
import { apiCache } from '..';

export const readFromCache = async (context: HookContext) => {
  const key = `/${context.path}/${context.method}${Object.keys(context.params.query ? context.params.query : {}).map((item) => context.params.query![item]).join('&')}`;
  const getCacheValue = promisify(apiCache.get);
  const value = await getCacheValue(key);
  if (value) {
    (context as any).readFromCache = true;
    context.result = value;
  }
};
