import * as express from 'express';
import replace from 'lodash/replace';
import admin from 'firebase-admin';
import * as path from 'path';
import { NotAuthorizedError } from '@app/core';

const downloadsRouter = express.Router();

downloadsRouter.get('/excel-template', async (req: any, res) => {
  try {
    const idToken = replace(req.headers.authorization || req.cookies.token, 'Bearer ', '');
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    if (decodedIdToken.roles.indexOf('5c7f747708898183ac62f2af') > -1) {
      res.download(path.join(__dirname, `../../../../../../import-news-template.xlsx`));
    } else {
      throw new NotAuthorizedError();
    }
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

export {
  downloadsRouter,
};
