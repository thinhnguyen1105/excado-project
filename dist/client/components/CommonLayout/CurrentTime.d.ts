import * as React from 'react';
import './CurrentTime.less';
interface Props {
}
interface State {
    date: any;
}
declare class CurrentTime extends React.Component<Props, State> {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    tick(): void;
    render(): JSX.Element;
}
export default CurrentTime;
