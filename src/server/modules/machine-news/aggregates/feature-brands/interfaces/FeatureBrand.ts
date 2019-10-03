import { Aggregate } from '@app/core';

export interface FeatureBrand extends Aggregate {
  _id: string;
  brand: any;
  hyperlink: string;
  logoImage: string;
  order: number;
}
