import { FindQuery } from '@app/core';

export interface FindSameOwnerNewsQuery extends FindQuery {
  newsId: string;
  ownerId: string;
}
