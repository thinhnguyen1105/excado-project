import { RequestParams, Service } from '@app/core';
export interface DownloadFilesService extends Service<any, any, any> {
    create: (data: any, params: RequestParams<any>) => Promise<any>;
}
