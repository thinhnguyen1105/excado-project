import { Component } from 'react';
import './ItemShopNewsDetail.less';
import { News, Shop } from '@client/services/service-proxies';
import { ProfileState, SearchState, SearchReducers, SearchEffects, FollowState, FollowReducers, FollowEffects } from '@client/store';
interface Props {
    shopInfo: Shop;
    shopAddress: string;
    newsInfo: News;
    profileState: ProfileState;
    resultSearchNewestPost: {
        data: any[];
        before?: string;
        after?: string;
    };
    newMachine: {
        data: any[];
        before?: string;
        after?: string;
    };
    handleFiltersChange: (payload: {
        [key: string]: any;
    }) => void;
    searchState: SearchState;
    searchReducers: SearchReducers & SearchEffects;
    followState: FollowState;
    followReducers: FollowReducers & FollowEffects;
}
interface State {
    newsInfo: News;
}
declare class ItemShopNewsDetails extends Component<Props, State> {
    state: {
        newsInfo: News;
    };
    onClickNextNew: () => void;
    changeFollowItemStatus: (starStatus: string, id: string) => Promise<void>;
    changeFollowUserStatus: (starStatus: string, id: string) => Promise<void>;
    changeFollowShopStatus: (starStatus: string, id: string) => Promise<void>;
    dataCurrent: {
        title: string;
        name: string;
        price: number;
        location: string;
        type: string;
        product: string;
        model: string;
        status: string;
        activeHours: number;
        yearOfProduct: number;
        frameNumber: string;
        view: number;
        description: string;
        contact: {
            nameConpany: string;
            contactPerson: string;
            address: string;
            phoneNumber: string;
        };
    };
    dataCurrentUser: {
        userName: string;
        location: string;
        dateJoin: string;
    };
    popularMachine: {
        key: number;
        title: string;
        imageUrl: string;
        status: string;
        ownerName: string;
        location: string;
        price: number;
    }[];
    dataMachine: {
        key: number;
        title: string;
        imageUrl: string;
        status: string;
        ownerName: string;
        location: string;
        price: number;
    }[];
    disabledButtonLeft: () => boolean;
    disabledButtonRight: () => boolean;
    buttonLeft: () => Promise<void>;
    buttonRight: () => Promise<void>;
    render(): JSX.Element;
}
export default ItemShopNewsDetails;
