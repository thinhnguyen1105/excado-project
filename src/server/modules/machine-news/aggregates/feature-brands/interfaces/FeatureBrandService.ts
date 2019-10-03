import { RequestParams, FindResult, PatchPayload } from '@app/core';
import { FeatureBrand } from './FeatureBrand';
import { FeatureBrandRepository } from './FeatureBrandRepository';
import { FindFeatureBrandsQuery } from './FindFeatureBrandsQuery';
import { BrandRepository } from '../../brands/interfaces/BrandRepository';

export interface FeatureBrandService {
  find?: (params: RequestParams<FeatureBrandRepository> & { query: FindFeatureBrandsQuery }) => Promise<FindResult<FeatureBrand>>;
  get?: (id: string, params: RequestParams<FeatureBrandRepository>) => Promise<FeatureBrand>;
  create: (data: FeatureBrand, params: RequestParams<FeatureBrandRepository> & { brandRepository: BrandRepository }) => Promise<{ id: string }>;
  patch?: (id: string, data: PatchPayload<FeatureBrand>, params: RequestParams<FeatureBrandRepository>) => Promise<{}>;
  updateDetail?: (id: string, data: Partial<FeatureBrand>, params: RequestParams<FeatureBrandRepository>) => Promise<{}>;
}
