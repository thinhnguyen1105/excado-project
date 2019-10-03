import { WeightRange } from './WeightRange';
import { Service, RequestParams } from '@app/core';
import { WeightRangeRepository } from './WeightRangeRepository';
import { Application } from '@feathersjs/express';

export interface WeightRangeService extends Service<WeightRange, any, WeightRangeRepository> {
  setup?: (app: Application<any>, path: string) => void;
  updateDetail?: (id: string, data: Partial<WeightRange>, params: RequestParams<WeightRangeRepository>) => Promise<{}>;
}
