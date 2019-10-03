import { HookContext } from '@feathersjs/feathers';
import { apiCache } from '..';

export const writeToCache = async (context: HookContext) => {
  if (!(context as any).readFromCache) {
    const key = `/${context.path}/${context.method}${Object.keys(context.params.query ? context.params.query : {}).map((item) => context.params.query![item]).join('&')}`;
    apiCache.set(key, context.result);
  }
};
