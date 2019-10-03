import { Service, RequestParams } from '@app/core';
import { Application } from '@feathersjs/express';
import { RentalPeriod } from './RentalPeriod';
import { RentalPeriodRepository } from './RentalPeriodRepository';

export interface RentalPeriodService extends Service<RentalPeriod, any, RentalPeriodRepository> {
  setup?: (app: Application<any>, path: string) => void;
  updateDetail?: (id: string, data: Partial<RentalPeriod>, params: RequestParams<RentalPeriodRepository>) => Promise<{}>;
}
