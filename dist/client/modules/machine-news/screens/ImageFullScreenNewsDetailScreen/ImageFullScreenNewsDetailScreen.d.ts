import * as React from 'react';
import { FindNewsDetail, Brand } from '../../../../services/service-proxies';
import { ProfileState, ProfileReducers, ProfileEffects } from '../../../../store';
import 'react-image-gallery/styles/css/image-gallery.css';
interface Props {
    topBrands: Brand[];
    searchKeyword: string;
    newsData: FindNewsDetail;
    profileState: ProfileState;
    profileReducers: ProfileReducers & ProfileEffects;
    updateFilters: (payload: {
        [key: string]: string | number;
    }) => void;
    handleFiltersChange: (payload: {
        [key: string]: string | number;
    }) => void;
}
interface State {
}
declare class ImageFullScreenNewsDetailScreen extends React.Component<Props, State> {
    imageGallery: any;
    constructor(props: any);
    render(): JSX.Element;
}
export default ImageFullScreenNewsDetailScreen;
