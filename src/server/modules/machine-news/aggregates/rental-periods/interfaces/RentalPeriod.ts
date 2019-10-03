import { Aggregate } from '@app/core';

export interface RentalPeriod extends Aggregate {
  min: number;
  max?: number;
  createdAt: number;
}
