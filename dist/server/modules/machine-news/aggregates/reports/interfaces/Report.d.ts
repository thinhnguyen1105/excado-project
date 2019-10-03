import { News } from '../../news/interfaces/News';
import { TimestampInMilliseconds, Aggregate } from '@app/core';
import { User } from '@app/auth';
export declare type ReportState = 'PENDING' | 'RESOLVED';
export declare type ReportResult = 'DELETE' | 'SKIP';
export declare type ReportReason = 'SOLD' | 'WRONG_INFO' | 'VIOLATE';
export interface ReportInfo {
    reason: ReportReason;
    description: string;
    email: string;
    phoneNo: string;
    createdAt: TimestampInMilliseconds;
}
export interface Report extends Aggregate {
    _id?: string;
    news: string | News;
    newsTitle: string;
    reports: ReportInfo[];
    state: ReportState;
    resolvedResult?: ReportResult;
    resolvedAt?: TimestampInMilliseconds;
    resolvedBy?: string | User;
}
