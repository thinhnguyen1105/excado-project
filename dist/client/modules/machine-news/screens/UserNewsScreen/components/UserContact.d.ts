import './UserContact.less';
import { ProfileState } from '@client/store';
import { User } from '@client/services/service-proxies';
interface Props {
    profileState: ProfileState;
    profileData: Partial<User>;
    starStatus: any;
    changeFollowUserStatus: (authId: string, userId: string) => void;
    t: (key: string) => string;
}
declare const UserContact: (props: Props) => JSX.Element;
export default UserContact;
