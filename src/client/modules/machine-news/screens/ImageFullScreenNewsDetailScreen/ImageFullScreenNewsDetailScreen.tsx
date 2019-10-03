import * as React from 'react';
import { FindNewsDetail, Brand } from '../../../../services/service-proxies';
import { ProfileState, ProfileReducers, ProfileEffects } from '../../../../store';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import { getImageUrl } from '@client/core';
import 'react-image-gallery/styles/css/image-gallery.css';
let images: any = [];
interface Props {
  topBrands: Brand[];
  searchKeyword: string;
  newsData: FindNewsDetail;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  handleFiltersChange: (payload: { [key: string]: string | number }) => void;
}
interface State { }
class ImageFullScreenNewsDetailScreen extends React.PureComponent<Props, State> {
  imageGallery: any;
  constructor(props: any) {
    super(props);
    this.imageGallery = React.createRef();
  }
  render() {
    images = this.props.newsData.imageUrls.length > 0 ? this.props.newsData.imageUrls.map((value: any) => {
      return {
        original: getImageUrl(value, 'large') ? getImageUrl(value, 'large') : this.props.newsData.categoryId.imageUrl,
      };
    }) : [{ original: '/static/images/sample-machine.png', thumbnail: '/static/images/sample-machine.png' }];
    const renderImages = images.map ((value: any) => {
      return (
        <img src={`${value.original}`} width='100%' style={{marginBottom: '15px'}}/>
      );
    });
    return (
      <React.Fragment>
        <CommonLayout
          updateFilters={this.props.updateFilters}
          topBrands={this.props.topBrands}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={false}
          hasMenuItems={true}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        >
          {renderImages}
        </CommonLayout>
      </React.Fragment>
    );
  }
}

export default ImageFullScreenNewsDetailScreen;
