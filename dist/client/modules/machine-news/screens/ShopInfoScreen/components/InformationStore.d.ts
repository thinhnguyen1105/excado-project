import { Component } from 'react';
import './InformationStore.less';
interface Props {
    title: string;
    address: string;
    describe: string;
    email: string;
    website: string;
    phoneNumber: string;
    t: (key: string) => string;
}
interface State {
}
declare class InformationStore extends Component<Props, State> {
    render(): JSX.Element;
}
export default InformationStore;
