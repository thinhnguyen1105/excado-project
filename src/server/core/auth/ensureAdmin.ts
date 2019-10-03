import { AuthUser, NotAuthenticatedError, NotAuthorizedError } from '..';
import { RoleModel } from '@app/auth';

export const ensureAdmin = async (authUser: AuthUser | undefined) => {
  if (!authUser) {
    throw new NotAuthenticatedError();
  } else if (!authUser.roles) {
    throw new NotAuthorizedError();
  } else {
    const adminRole = await RoleModel.findOne({$or: [
      {name: 'admin'},
      {name: 'administrator'},
    ]});

    if (authUser.roles.indexOf(adminRole!._id) > -1) {
      throw new NotAuthorizedError();
    }
  }
};
