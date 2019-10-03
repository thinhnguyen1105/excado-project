import { FindQuery } from '@app/core';
import { ReportState, ReportReason } from './Report';

export interface FindReportsQuery extends FindQuery {
  search?: string;
  state?: ReportState;
  reason?: ReportReason;
}
