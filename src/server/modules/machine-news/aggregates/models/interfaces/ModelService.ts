import { Service, RequestParams } from '@app/core';
import { Model, ModelRepository } from '@app/machine-news';
import { FindModelsQuery } from './FindModelsQuery';
import { Application } from '@feathersjs/express';

export interface ModelService extends Service<Model, FindModelsQuery, ModelRepository> {
  setup: (app: Application<any>, path: string) => void;
  updateDetail: (id: string, data: Partial<Model>, params: RequestParams<ModelRepository>) => Promise<{}>;
  checkExistModel: (req: any, res: any) => void;
}
