import { Service, RequestParams } from '@app/core';
import { Role, FindRolesQuery, RolesRepository } from '@app/auth';
import { Application } from '@feathersjs/express';

export interface RolesService extends Service<Role, FindRolesQuery, RolesRepository> {
  setup?: (app: Application<any>, path: string) => void;
  updateDetail: (id: string, data: Partial<Role>, params: RequestParams<RolesRepository>) => Promise<{}>;
  activate: (id: string, data: Partial<Role>, params: RequestParams<RolesRepository>) => Promise<{}>;
  deactivate: (id: string, data: Partial<Role>, params: RequestParams<RolesRepository>) => Promise<{}>;
  getAll: (req: any, res: any) => void;
}
