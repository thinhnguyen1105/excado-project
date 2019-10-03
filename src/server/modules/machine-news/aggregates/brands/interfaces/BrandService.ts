import { Service, RequestParams } from '@app/core';
import { Brand, BrandRepository } from '@app/machine-news';
import { Application } from '@feathersjs/express';

export interface BrandService extends Service<Brand, any, BrandRepository> {
  setup?: (app: Application<any>, path: string) => void;
  updateDetail?: (id: string, data: Partial<Brand>, params: RequestParams<BrandRepository>) => Promise<{}>;
  checkExistBrand: (req: any, res: any) => void;
}
