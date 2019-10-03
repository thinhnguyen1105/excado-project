import { Service, FindQuery, RequestParams } from '@app/core';
import { Notification } from './Notification';
import { NotificationsRepository } from './NotificationsRepository';

export interface NotificationsService extends Service<Notification, FindQuery, NotificationsRepository> {
  readAllNotifications: (id: string, data: {}, params: RequestParams<NotificationsRepository>) => Promise<void>;
  readNotification: (id: string, data: {notificationId: string}, params: RequestParams<NotificationsRepository>) => Promise<void>;
}
