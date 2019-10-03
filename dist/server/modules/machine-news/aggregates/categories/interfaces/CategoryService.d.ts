import { Service, RequestParams } from '@app/core';
import { Category, CategoryRepository } from '@app/machine-news';
import { Application } from '@feathersjs/express';
export interface CategoryService extends Service<Category, any, CategoryRepository> {
    setup?: (app: Application<any>, path: string) => void;
    updateDetail?: (id: string, data: Partial<Category>, params: RequestParams<CategoryRepository>) => Promise<{}>;
}
