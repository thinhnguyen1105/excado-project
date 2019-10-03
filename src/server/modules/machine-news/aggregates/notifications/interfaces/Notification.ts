import { Aggregate, TimestampInMilliseconds } from '@app/core';
import { User } from '@app/auth';
import { News } from '@app/machine-news';

export type NotificationState = 'READ'|'UNREAD';

export type NotificationType = 'FOLLOW_USER'|'FOLLOW_SHOP'|'CREATE_NEWS'|'DELETE_NEWS'|'WARN_NEWS';

export interface Notification extends Aggregate {
  _id?: string;
  owner: string|User;
  news?: string|News;
  report?: string;
  description?: string;
  state: NotificationState;
  type: NotificationType;
  createdAt: TimestampInMilliseconds;
  readAt?: TimestampInMilliseconds;
}
