import { Repository, FindResult } from '@app/core';
import { Category } from '@app/machine-news';

export interface CategoryRepository extends Repository<Category> {
  findCategoryDetail: (categorySlug: string) => Promise<Category>;
  find: (query?: any) => Promise<FindResult<Category>>;
  increaseNewsCount: (categoryId: string) => void;
  decreaseNewsCount: (categoryId: string) => void;
}
