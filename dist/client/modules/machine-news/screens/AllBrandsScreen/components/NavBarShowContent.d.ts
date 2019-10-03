import { Component } from 'react';
import './NavBarShowContent.less';
interface Props {
    items: {
        label: string;
        value?: string;
    }[];
}
interface State {
}
declare class NavBarShowContent extends Component<Props, State> {
    render(): JSX.Element;
}
export default NavBarShowContent;
