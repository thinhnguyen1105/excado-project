import { FindQuery } from '@app/core';

export interface FindUsersQuery extends FindQuery {
  search?: string;
  roles?: string[];
}
