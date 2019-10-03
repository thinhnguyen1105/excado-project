import { Repository, FindResult } from '@app/core';
import { Image } from '@app/website';

export interface ImageRepository extends Repository<Image> {
  find: (query?: any) => Promise<FindResult<Image>>;
}
