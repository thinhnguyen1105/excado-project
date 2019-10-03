import { AuthUser, NotAuthenticatedError } from '..';

export const ensureAuthenticate = (authUser: AuthUser | undefined) => {
  if (!authUser || !authUser.id) {
    throw new NotAuthenticatedError();
  }
};
