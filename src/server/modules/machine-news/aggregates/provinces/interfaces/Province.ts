import { Aggregate, IsAuditable } from '@app/core';

export interface Province extends Aggregate, IsAuditable {
  slug: string;
  name: string;
  totalNews: number;
}
