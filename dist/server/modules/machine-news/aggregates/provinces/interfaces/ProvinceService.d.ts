import { Service, RequestParams } from '@app/core';
import { Province, ProvinceRepository } from '@app/machine-news';
export interface ProvinceService extends Service<Province, any, ProvinceRepository> {
    update?: (id: string, data: Partial<Province>, params: RequestParams<ProvinceRepository>) => Promise<{}>;
}
