import { News } from '../../news/interfaces/News';
import { TimestampInMilliseconds, Aggregate } from '@app/core';
import { User } from '@app/auth';

export type ReportState = 'PENDING'|'RESOLVED';

export type ReportResult = 'DELETE'|'SKIP'|'NOTIFY';

export type ReportReason = 'SOLD'|'WRONG_INFO'|'VIOLATE';

export interface ReportInfo {
  reason: ReportReason;
  description: string;
  createdBy: string;
  createdAt: TimestampInMilliseconds;
}

export interface Report extends Aggregate {
  _id?: string;
  news: string|News;
  newsTitle: string;
  reports: ReportInfo[];
  state: ReportState;
  resolvedResult?: ReportResult;
  resolvedAt?: TimestampInMilliseconds;
  resolvedBy?: string|User;
}
