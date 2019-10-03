import { Service, RequestParams } from '@app/core';
import { Model, ModelRepository } from '@app/machine-news';
import { FindModelsQuery } from './FindModelsQuery';
export interface ModelService extends Service<Model, FindModelsQuery, ModelRepository> {
    updateDetail: (id: string, data: Partial<Model>, params: RequestParams<ModelRepository>) => Promise<{}>;
}
