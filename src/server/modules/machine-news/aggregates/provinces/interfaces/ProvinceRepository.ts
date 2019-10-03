import { Repository, FindResult } from '@app/core';
import { Province } from '@app/machine-news';

export interface ProvinceRepository extends Repository<Province> {
  find: (query?: any) => Promise<FindResult<Province>>;
  increaseNewsCount: (provinceId: string) => void;
  decreaseNewsCount: (provinceId: string) => void;
}
