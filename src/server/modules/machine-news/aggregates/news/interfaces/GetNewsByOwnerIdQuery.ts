import { FindQuery } from '@app/core';

export interface GetNewsByOwnerIdQuery extends FindQuery  {
  status: string;
  ownerId: string;
  authUser: any;
}
