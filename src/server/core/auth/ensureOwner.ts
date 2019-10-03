import { AuthUser, NotAuthenticatedError, NotAuthorizedError } from '@app/core';

export const ensureOwner = (authUser: AuthUser | undefined, ownerId: string) => {
  if (!authUser) {
    throw new NotAuthenticatedError();
  } else if (authUser.id !== ownerId) {
    throw new NotAuthorizedError();
  }
};
