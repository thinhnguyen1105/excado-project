import { WeightRange } from './WeightRange';
import { Repository } from '@app/core';

export interface WeightRangeRepository extends Repository<WeightRange> {
  findAll: () => Promise<WeightRange[]>;
}
