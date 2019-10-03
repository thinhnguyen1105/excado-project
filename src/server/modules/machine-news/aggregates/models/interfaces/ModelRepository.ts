import { Repository, FindResult } from '@app/core';
import { Model } from '@app/machine-news';

export interface ModelRepository extends Repository<Model> {
  findAll: () => Promise<Model[]>;
  find: (query?: any) => Promise<FindResult<Model>>;
  increaseNewsCount: (newsId: string) => void;
  decreaseNewsCount: (newsId: string) => void;
  deleteModelsByCategory: (categoryId: string) => void;
  deleteModelsByBrand: (brandId: string) => void;
}
