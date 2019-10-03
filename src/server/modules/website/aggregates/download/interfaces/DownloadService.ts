import { RequestParams, Service } from '@app/core';
// import { DownloadPayload } from './DownloadPayload';

export interface DownloadFilesService extends Service<any, any, any> {
  create: (data: any, params: RequestParams<any>) => Promise<any>;
}
