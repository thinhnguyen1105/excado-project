import * as React from 'react';
import './UserInfo.less';
import { ProfileState } from '@client/store';
interface Props {
    profileState: ProfileState;
    t: (key: string) => string;
}
interface State {
}
declare class UserInfo extends React.Component<Props, State> {
    render(): JSX.Element;
}
export default UserInfo;
