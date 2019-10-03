import { FindQuery } from '@app/core';

export interface FindModelsQuery extends FindQuery {
  search?: string;
  brand?: string;
  category?: string;
}
