import { ReportReason } from './Report';
import { TimestampInMilliseconds } from '@app/core';

export interface CreateReportPayload {
  news: string;
  reason: ReportReason;
  description: string;
  createdBy: string;
  createdAt: TimestampInMilliseconds;
}
