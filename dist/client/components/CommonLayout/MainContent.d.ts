import * as React from 'react';
import './MainContent.less';
import { Brand, Adsense, FeatureBrand } from '../../services/service-proxies';
interface Props {
    topBrands: Brand[];
    hasMenuItems: boolean;
    hasSideBar: boolean;
    children: any;
    hasBrandList?: boolean;
}
interface State {
    adsense: Adsense[];
    featureBrands: FeatureBrand[];
}
export declare class MainContent extends React.Component<Props, State> {
    state: State;
    componentDidMount(): void;
    getAdsense: () => Promise<void>;
    getFeatureBrands: () => Promise<void>;
    render(): JSX.Element;
}
export {};
