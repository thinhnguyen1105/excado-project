import { Repository, FindResult } from '@app/core';
import { Brand } from '@app/machine-news';
import { FindBrandsQuery } from './FindBrandsQuery';
export interface BrandRepository extends Repository<Brand> {
    findBrandList: () => Promise<FindResult<Brand>>;
    findBrandDetail: (brandSlug: string) => Promise<Brand>;
    findTopBrands: () => Promise<FindResult<Brand>>;
    find: (query: FindBrandsQuery) => Promise<FindResult<Brand>>;
    increaseNewsCount: (newsId: string) => void;
    decreaseNewsCount: (newsId: string) => void;
}
