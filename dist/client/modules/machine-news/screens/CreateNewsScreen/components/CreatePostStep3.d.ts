import { Component } from 'react';
import './CreatePost.less';
import { Province } from '@client/services/service-proxies';
interface Props {
    newsType?: string;
    location?: string;
    state?: string;
    price?: number;
    priceType?: string;
    usedHours?: number;
    serialNo?: string;
    provinces: Province[];
    nextStep: () => void;
    backStep: () => void;
    changeData: (payload: {
        [key: string]: any;
    }) => void;
    t: (key: string) => string;
}
interface State {
}
declare class CreatePostStep3 extends Component<Props, State> {
    convertPriceToText: (value: number) => string;
    render(): JSX.Element;
}
export default CreatePostStep3;
