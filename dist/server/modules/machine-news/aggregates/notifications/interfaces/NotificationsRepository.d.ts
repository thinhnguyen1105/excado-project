import { Repository } from '@app/core';
import { Notification } from './Notification';
export interface NotificationsRepository extends Repository<Notification> {
    countUnreadNotifications: (id: string) => Promise<number>;
    readAllNotifications: (owner: string) => void;
}
