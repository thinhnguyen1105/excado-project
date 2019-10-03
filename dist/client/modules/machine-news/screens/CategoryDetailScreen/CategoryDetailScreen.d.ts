import React from 'react';
import './CategoryDetailScreen.less';
import { Category, Brand } from '@client/services/service-proxies';
import { ProfileState, ProfileReducers, ProfileEffects } from '@client/store';
interface Props {
    categoryName: string;
    categoryDetail: Category;
    topBrands: Brand[];
    searchKeyword: string;
    profileState: ProfileState;
    profileReducers: ProfileReducers & ProfileEffects;
    updateFilters: (payload: {
        [key: string]: string | number;
    }) => void;
}
interface State {
}
declare class CategoryDetailScreen extends React.Component<Props, State> {
    render(): JSX.Element;
}
export default CategoryDetailScreen;
