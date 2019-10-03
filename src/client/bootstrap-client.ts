import { Application } from '@feathersjs/express';
import next from 'next';
import routes from './routes';
import { bootstrapModules } from '../client/bootstrap-modules';
import { logger } from '../server/core';
import { setCookie, clearCookie, generateRecentViewedKey, checkSubdomain } from './core';
import nextI18NextMiddleware from 'next-i18next/middleware';
import { i18n } from './i18n';
import { authenticate } from './core/authenticate';

export const bootstrapClient = async ({ server }: { server: Application<any> }) => {
  logger.info(`[Client] Bootstrapping...`);
  bootstrapModules({ routes });

  const dev = process.env.NODE_ENV !== 'production';
  const nextApp = next({ dev, dir: dev ? './src/client' : './dist/client' });
  const handler = routes.getRequestHandler(nextApp, ({req, res, route, query}: any) => {
    nextApp.render(req, res, route.page, query);
  });
  await nextApp.prepare();

  server.get('/_next/*', (req, res) => {
    return handler(req, res);
  });
  server.get('/static/*', (req, res) => {
    return handler(req, res);
  });
  // login success => set cookie on server
  server.post('/auth/login', setCookie);
  // logout => remove cookie
  server.get('/auth/logout', clearCookie);
  // authenticate
  server.use(authenticate);
  // recent viewed product
  server.use(generateRecentViewedKey);
  // check sub domain of shop
  server.use(checkSubdomain);
  server.use(nextI18NextMiddleware(i18n));
  server.use(handler);
};
