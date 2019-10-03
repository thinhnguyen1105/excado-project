import { Report } from './Report';
import { ReportsRepository } from './ReportsRepository';
import { RequestParams, FindResult, PatchPayload } from '@app/core';
import { NewsRepository } from '../../news/interfaces/NewsRepository';
import { FindReportsQuery } from './FindReportsQuery';
import { CreateReportPayload } from './CreateReportPayload';

export interface ReportsService {
  find: (params: RequestParams<ReportsRepository> & { query: FindReportsQuery }) => Promise<FindResult<Report>>;
  get: (id: string, params: RequestParams<ReportsRepository>) => Promise<Report>;
  create: (data: CreateReportPayload, params: RequestParams<ReportsRepository> & {newsRepository: NewsRepository}) => Promise<{ id: string }>;
  patch: (id: string, data: PatchPayload<Report>, params: RequestParams<ReportsRepository> & {newsRepository: NewsRepository}) => Promise<{}>;
  resolveReport: (id: string, data: Partial<Report>, params: RequestParams<ReportsRepository> & {newsRepository: NewsRepository}) => Promise<{}>;
}
