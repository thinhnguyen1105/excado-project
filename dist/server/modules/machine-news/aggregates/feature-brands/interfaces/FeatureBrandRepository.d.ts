import { Repository, FindResult } from '@app/core';
import { FeatureBrand } from './FeatureBrand';
import { FindFeatureBrandsQuery } from './FindFeatureBrandsQuery';
export interface FeatureBrandRepository extends Repository<FeatureBrand> {
    findAll: () => Promise<FeatureBrand[]>;
    find: (query: FindFeatureBrandsQuery) => Promise<FindResult<FeatureBrand>>;
}
