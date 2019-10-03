import { Repository } from '@app/core';
import { RentalPeriod } from './RentalPeriod';
export interface RentalPeriodRepository extends Repository<RentalPeriod> {
    findAll: () => Promise<RentalPeriod[]>;
}
