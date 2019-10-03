import express, { Application } from '@feathersjs/express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import compress from 'compression';
import helmet from 'helmet';
import { logger, rootLocation } from './core';
import { bootstrapModules } from './bootstrap-modules';
import admin from 'firebase-admin';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import applicationHook from './application.hooks';
import { config } from '@app/config';
import { readdir } from 'fs-extra';
import { merge } from 'lodash';
import { checkFinishedSessionsJob } from '@app/machine-news';

export const bootstrapServer = async ({ server }: { server: Application<any> }) => {
  logger.info(`[Server] Bootstrapping...`);
  server
    .configure(express.rest())
    .use(helmet())
    .use(compress())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cookieParser())
    .use(cors({
      origin: config.web.cors.whitelistUrls,
      credentials: true,
    }));

  // global hooks
  server.hooks(applicationHook);

  // add authorization to feathers
  server.use((req, _res, next) => {
    if (!req.cookies[`next-i18next`]) {
      req.cookies[`next-i18next`] = `vn`;
    }
    (req as any).feathers.cookies = req.cookies;
    (req as any).feathers.authorization = req.headers.authorization || req.cookies.token;
    next();
  });

  // add swagger documents
  let swaggerDocument = YAML.load(`${rootLocation}/server/swagger.yaml`);
  const moduleNames = await readdir(`${rootLocation}/server/modules`);
  for (const module of moduleNames) {
    try {
      const moduleSwaggerDocument = YAML.load(`${rootLocation}/server/modules/${module}/${module}.swagger.yaml`);
      swaggerDocument = merge(swaggerDocument, moduleSwaggerDocument);
    } catch (error) {
      // ignore missing modules
    }
  }
  server.use(config.web.api.docsJson, async (_req, res) => {
    res.status(200).json(swaggerDocument);
  });
  server.use(config.web.api.docsUrl, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // bootstrap modules
  await bootstrapModules({ server });

  server.use('/upload', express.static(path.join(__dirname, '../../upload')));

  // cron-job
  checkFinishedSessionsJob.start();

  // init firebase-admin
  logger.info(`[Server] Initialize firebase.....`);
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: config.firebase.serviceAccount['project_id'],
      clientEmail: config.firebase.serviceAccount['client_email'],
      privateKey: config.firebase.serviceAccount['private_key'],
    }),
    databaseURL: config.firebase.databaseURL,
  });
};
