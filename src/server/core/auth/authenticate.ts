import { replace } from 'lodash';
import admin from 'firebase-admin';
import { AuthUser } from './AuthUser';
import { HookContext } from '@feathersjs/feathers';
import { logger } from '..';

export const authenticate = async (context: HookContext) => {
  try {
    const idToken = replace(context.params.authorization, 'Bearer ', '');
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    const authUser: AuthUser = {
      id: decodedIdToken.uid,
      roles: decodedIdToken.roles,
      permissions: decodedIdToken.permissions,
    };
    context.params.authUser = authUser;
  } catch (err) {
    logger.error(context.path);
    logger.error(err);
  }
};
