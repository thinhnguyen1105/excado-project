import { Notification } from '../../services/service-proxies';
import './NotificationDropdown.less';
import 'firebase/auth';
interface Props {
    loadingNotification: boolean;
    hasNext: boolean;
    notificationList: Notification[];
    loadMoreNotifications: () => void;
    readAllNotifications: () => void;
    readNotification: (notificationId: string) => void;
}
export declare const NotificationDropdown: (props: Props) => JSX.Element;
export {};
