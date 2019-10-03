import * as React from 'react';
import './CallMessButtonMobile.less';
interface Props {
    phoneNo: any;
}
interface State {
    isOpenModalSelectMessage: boolean;
}
declare class CallMessButtonMobile extends React.Component<Props, State> {
    state: State;
    onClickButtonMess: () => void;
    render(): JSX.Element;
}
export default CallMessButtonMobile;
