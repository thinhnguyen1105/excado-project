import { Repository, FindResult } from '@app/core';
import { Adsense } from './Adsense';
import { FindAdsenseQuery } from './FindAdsenseQuery';

export interface AdsenseRepository extends Repository<Adsense> {
  findAll: () => Promise<Adsense[]>;
  find: (query: FindAdsenseQuery) => Promise<FindResult<Adsense>>;
}
