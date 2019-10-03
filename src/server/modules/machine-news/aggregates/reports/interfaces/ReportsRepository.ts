import { Report } from './Report';
import { FindReportsQuery } from './FindReportsQuery';
import { FindResult, Repository } from '@app/core';
import { CreateReportPayload } from './CreateReportPayload';

export interface ReportsRepository extends Repository<Report> {
  find: (query: FindReportsQuery) => Promise<FindResult<Report>>;
  findOnePending: (query: {news: string}) => Promise<Report>;
  updateReport: (id: string, report: Partial<CreateReportPayload>) => Promise<void>;
}
