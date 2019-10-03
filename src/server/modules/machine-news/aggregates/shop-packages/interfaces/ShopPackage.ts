import { Aggregate, IsAuditable } from '@app/core';

export interface ShopPackage extends Aggregate, IsAuditable {
  _id?: string;
  price: number;
  currency: string;
  monthDuration: number;
  isActive: boolean;
}
