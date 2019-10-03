import { Aggregate, IsAuditable } from '@app/core';

export interface Category extends Aggregate, IsAuditable {
  slug: string;
  name: string;
  imageUrl: string;
  totalNews: number;
}
