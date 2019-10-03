import { ShopPackageService } from './interfaces/ShopPackageService';
import { ensureAuthenticate } from '../../../../core/auth/ensureAuthenticate';
import { UserInputError } from '@app/core';

const shopPackageService: ShopPackageService = {
  find: async ({ query, repository, authUser }) => {
    // 1. authorize
    ensureAuthenticate(authUser);

    // 2. validate

    // 3. do business logic

    // 4. persist to db
    return await repository.find(query);
  },
  get: async (id, params) => {
    // 1. authorize
    ensureAuthenticate(params.authUser);

    // 2. validate
    if (!id) {
      throw new UserInputError('Invalid id');
    }

    // 3. do business logic

    // 4. persist to db
    return await params.repository.findById(id);
  },
};

export default shopPackageService;
