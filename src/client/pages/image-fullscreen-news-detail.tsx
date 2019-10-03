import * as React from 'react';
import { getServiceProxy } from '../services';
import { FindNewsDetail, Brand, CommonKeyword } from '../services/service-proxies';
import { withRematch, initStore,  ProfileState, ProfileReducers, ProfileEffects } from '../store';
import ImageFullScreenNewsDetailScreen from '../modules/machine-news/screens/ImageFullScreenNewsDetailScreen/ImageFullScreenNewsDetailScreen';
import { withNamespaces } from '../i18n';

interface Props {
  topBrands: Brand[];
  commonKeywords: CommonKeyword[];
  searchKeyword: string;
  newsData: FindNewsDetail;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  handleFiltersChange: (payload: { [key: string]: string | number }) => void;
}
interface State { }

class ImageFullScreenNewsDetail extends React.PureComponent<Props, State> {
  static async getInitialProps(context: any) {
    let serviceProxies: any;
    serviceProxies = getServiceProxy();
    const newsData = await serviceProxies.findNewsById(context.query.id);
    const topBrands = await serviceProxies.findTopBrands();

    return {
      newsData,
      topBrands: topBrands.data,
    };
  }

  render() {
    return (
      <React.Fragment>
        <ImageFullScreenNewsDetailScreen
          newsData={this.props.newsData}
          searchKeyword={this.props.searchKeyword}
          topBrands={this.props.topBrands}
          handleFiltersChange={this.props.handleFiltersChange}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          updateFilters={this.props.updateFilters}
        />
      </React.Fragment>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    searchKeyword: rootState.searchModel.filters.keyword,
    commonKeywords: rootState.metadataModel.commonKeywords,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    handleFiltersChange: rootReducer.searchModel.handleFiltersChange,
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};
export default withRematch(initStore, mapState, mapDispatch)(withNamespaces('image-fullscreen-news-detail')(ImageFullScreenNewsDetail));
