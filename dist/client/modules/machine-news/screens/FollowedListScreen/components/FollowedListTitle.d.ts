import * as React from 'react';
import './FollowedListTitle.less';
interface Props {
    t: (key: string) => string;
}
interface State {
}
declare class FollowedListTitle extends React.Component<Props, State> {
    render(): JSX.Element;
}
export default FollowedListTitle;
