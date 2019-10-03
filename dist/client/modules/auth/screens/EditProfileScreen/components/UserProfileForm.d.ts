import React from 'react';
import { User, Province } from '../../../../../services/service-proxies';
interface Props {
    loading: boolean;
    userProfile: Partial<User>;
    editUserProfile: (payload: any) => Promise<boolean>;
    provinces: Province[];
    t: (key: string) => string;
}
interface State {
}
declare class UserProfileForm extends React.Component<Props, State> {
    render(): JSX.Element;
}
export default UserProfileForm;
