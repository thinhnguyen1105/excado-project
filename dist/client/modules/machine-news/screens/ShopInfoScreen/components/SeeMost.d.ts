import { Component } from 'react';
import './SeeMost.less';
interface Props {
    dataMachine: any[];
    title: string;
}
interface State {
}
declare class SeeMost extends Component<Props, State> {
    render(): JSX.Element;
}
export default SeeMost;
