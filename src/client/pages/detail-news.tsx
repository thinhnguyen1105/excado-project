import * as React from 'react';
import DetailNewsScreen from '../modules/machine-news/screens/DetailNewsScreen/DetailNewsScreen';
import { getServiceProxy } from '../services';
import { Brand, ElasticSearchResult, CommonKeyword, FindNewsDetail } from '../services/service-proxies';
import { withRematch, initStore, ProfileState, ProfileEffects, ProfileReducers, FollowEffects, FollowReducers, FollowState, SelectOption, PriceRange } from '../store';
import { withNamespaces } from '../i18n';
import * as jsCookie from 'js-cookie';

interface Props {
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  newsData: FindNewsDetail;
  dataFilteredOwner: ElasticSearchResult;
  newDataRelatedProducts: ElasticSearchResult;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  handleFiltersChange: (payload: { [key: string]: string | number }) => void;
}
interface State { }
class DetailNews extends React.PureComponent<Props, State> {
  static async getInitialProps(context: any) {
    let serviceProxies: any;
    if (!context.req) {
      const idToken = jsCookie.get('token');
      serviceProxies = getServiceProxy(idToken);
    }
    else {
      serviceProxies = getServiceProxy((context.req as any).cookies.token);
    }
    // tslint:disable-next-line:no-console
    console.log('query', context.query);
    const [newsData, topBrands] = await Promise.all([
      serviceProxies.findNewsById(context.query.id),
      serviceProxies.findTopBrands(),
    ]);

    return {
      namespacesRequired: ['common', 'detail-news'],
      newsData,
      topBrands: topBrands.data,
    };
  }

  render() {
    return (
      <DetailNewsScreen
        topBrands={this.props.topBrands}
        newsData={this.props.newsData}
        searchKeyword={this.props.searchKeyword}
        profileState={this.props.profileState}
        profileReducers={this.props.profileReducers}
        followState={this.props.followState}
        followReducers={this.props.followReducers}
        updateFilters={this.props.updateFilters}
        handleFiltersChange={this.props.handleFiltersChange}
      />
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    followState: rootState.followModel,
    searchKeyword: rootState.searchModel.filters.keyword,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    followReducers: rootReducer.followModel,
    handleFiltersChange: rootReducer.searchModel.handleFiltersChange,
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};
export default withRematch(initStore, mapState, mapDispatch)(withNamespaces('detail-news')(DetailNews));
