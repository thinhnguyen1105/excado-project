import { Aggregate, TimestampInMilliseconds } from '@app/core';
import { User } from '@app/auth';
import { News } from '@app/machine-news';
export declare type NotificationState = 'READ' | 'UNREAD';
export declare type NotificationType = 'FOLLOW_USER' | 'FOLLOW_SHOP' | 'CREATE_NEWS';
export interface Notification extends Aggregate {
    _id?: string;
    owner: string | User;
    news: string | News;
    state: NotificationState;
    type: NotificationType;
    createdAt: TimestampInMilliseconds;
    readAt: TimestampInMilliseconds;
}
