import { FindQuery } from '@app/core';

export interface SearchQuery extends FindQuery {
  keyword?: string;
  state?: string;
  priceType?: string;
  minPrice?: number;
  maxPrice?: number;
  weightRange?: string;
  otherNewsType?: string;
  newsType?: string;
  categoryId?: string;
  status?: string;
  brand?: string;
  model?: string;
  owner?: string;
  shop?: string;
  type?: string;
  location?: string;
}
