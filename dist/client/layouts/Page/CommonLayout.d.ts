import * as React from 'react';
import { ProfileState, ProfileEffects, ProfileReducers } from '@client/store';
import { Brand, CommonKeyword } from '../../services/service-proxies';
interface Props {
    topBrands: Brand[];
    searchKeyword: string;
    profileState: ProfileState;
    profileReducers: ProfileEffects & ProfileReducers;
    hasSideBar: boolean;
    hasMenuItems: boolean;
    fullName?: string;
    updateFilters: (payload: {
        [key: string]: string | number;
    }) => void;
}
interface State {
    commonKeywords: CommonKeyword[];
}
declare class CommonLayout extends React.Component<Props, State> {
    state: State;
    componentDidMount(): void;
    getCommonKeywords: () => Promise<void>;
    render(): JSX.Element;
}
export default CommonLayout;
