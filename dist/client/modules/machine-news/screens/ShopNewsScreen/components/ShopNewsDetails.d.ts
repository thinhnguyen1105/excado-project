import { Component } from 'react';
import './ShopNewsDetails.less';
import { Category, Brand, News } from '../../../../../services/service-proxies';
import { PriceRange, ProfileState } from '../../../../../store';
interface Props {
    loading: boolean;
    data: News[];
    hasNext: boolean;
    hasPrev: boolean;
    categories: Category[];
    brands: Brand[];
    weightRanges: PriceRange[];
    searchKeywords?: string;
    selectedBrand?: string;
    selectedCategory?: string;
    selectedState?: string;
    selectedNewsType?: string;
    minPrice?: number;
    maxPrice?: number;
    selectedWeightRange?: string;
    shopName: string;
    resultSearchNewestPost: {
        data: any[];
        before?: string;
        after?: string;
    };
    profileState: ProfileState;
    getNextPage: () => void;
    getPrevPage: () => void;
    handleSearchChange: (payload: {
        keyword: string;
    }) => void;
    handleFiltersChange: (payload: {
        [key: string]: any;
    }) => void;
    changeFollowStatus: (starStatus: string, id: string) => void;
    t: (key: string) => string;
}
interface State {
    isOpenFilter: boolean;
}
export declare class ShopNewsDetails extends Component<Props, State> {
    state: State;
    changeStatusFilter: () => void;
    closeFilterMobile: () => void;
    render(): JSX.Element;
}
export default ShopNewsDetails;
