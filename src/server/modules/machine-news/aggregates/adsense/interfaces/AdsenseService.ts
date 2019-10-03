import { RequestParams, FindResult, PatchPayload } from '@app/core';
import { AdsenseRepository } from './AdsenseRepository';
import { FindFeatureBrandsQuery, Adsense } from '@app/machine-news';

export interface AdsenseService {
  find?: (params: RequestParams<AdsenseRepository> & { query: FindFeatureBrandsQuery }) => Promise<FindResult<Adsense>>;
  get?: (id: string, params: RequestParams<AdsenseRepository>) => Promise<Adsense>;
  create: (data: Adsense, params: RequestParams<AdsenseRepository>) => Promise<{ id: string }>;
  patch?: (id: string, data: PatchPayload<Adsense>, params: RequestParams<AdsenseRepository>) => Promise<{}>;
  updateDetail?: (id: string, data: Partial<Adsense>, params: RequestParams<AdsenseRepository>) => Promise<{}>;
}
