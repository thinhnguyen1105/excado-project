import { Component } from 'react';
import './MachineDetailBox.less';
import { ElasticSearchItemResult } from '@client/services/service-proxies';
import { ProfileState } from '@client/store';
interface Props {
    data: ElasticSearchItemResult[];
    xs: number;
    sm: number;
    md: number;
    lg: number;
    profileState: ProfileState;
    title: string;
    disabledButtonLeft: boolean;
    disabledButtonRight: boolean;
    hiddenButton: boolean;
    changeFollowStatus: (starStatus: string, id: string) => void;
    buttonLeft: () => void;
    totalFollow?: number;
    isShowTotalFollowAndView?: boolean;
    buttonRight: () => void;
}
interface State {
}
declare class MachineDetailBox extends Component<Props, State> {
    render(): JSX.Element;
}
export default MachineDetailBox;
