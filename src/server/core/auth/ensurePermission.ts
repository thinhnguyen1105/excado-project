import { AuthUser, NotAuthenticatedError, NotAuthorizedError } from '@app/core';
import _ from 'lodash';

export const ensurePermission = (user: AuthUser | undefined, permission: string) => {
  if (permission) {
    if (!user) {
      throw new NotAuthenticatedError();
    } else if (!user.permissions || user.permissions.indexOf(permission) === -1) {
      throw new NotAuthorizedError();
    }
  }
};
