import { RequestParams, FindResult, Nullable, PatchPayload } from '@app/core';
import { ShopRepository } from './ShopRepository';
import { Shop } from './Shop';
import { FindShopQuery } from './FindShopQuery';
import { UsersRepository } from '@app/auth';
import { Application } from '@feathersjs/express';

export interface ShopService {
  setup?: (app: Application<any>, path: string) => void;
  find?: (params: RequestParams<ShopRepository> & { query: FindShopQuery }) => Promise<FindResult<Shop>>;
  get?: (id: string, params: RequestParams<ShopRepository>) => Promise<Nullable<Shop>>;
  create: (data: Shop, params: RequestParams<ShopRepository> & { userRepository: UsersRepository }) => Promise<{ id: string }>;
  patch?: (id: string, data: PatchPayload<Shop>, params: RequestParams<ShopRepository>) => Promise<{}>;
  updateDetail: (id: string, data: Partial<Shop>, params: RequestParams<ShopRepository>) => Promise<{}>;
  activate: (id: string, data: Partial<Shop>, params: RequestParams<ShopRepository>) => Promise<{}>;
  deactivate: (id: string, data: Partial<Shop>, params: RequestParams<ShopRepository>) => Promise<{}>;
  updateLogoImage: (id: string, data: Partial<Shop>, params: RequestParams<ShopRepository>) => Promise<{}>;
  updateIntroImages: (id: string, data: Partial<Shop>, params: RequestParams<ShopRepository>) => Promise<{}>;
  updateFollowCount: (newsId: string, type: 'follow'|'unfollow') => void;
  getByDomain: (req: any, res: any) => void;
  getByOwner: (req: any, res: any) => void;
}
