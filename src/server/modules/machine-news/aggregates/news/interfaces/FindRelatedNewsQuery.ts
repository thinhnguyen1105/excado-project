import { FindQuery } from '@app/core';

export interface FindRelatedNewsQuery extends FindQuery {
  newsId: string;
  category: string;
  brand?: string;
  model?: string;
  weightRange: string;
  shop?: string;
  owner: string;
  location?: string;
}
