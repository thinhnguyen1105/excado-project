import React from 'react';
import HomePageScreen from '../modules/machine-news/screens/HomePageScreen/HomePageScreen';
import { ProfileState, ProfileEffects, ProfileReducers, FollowState, FollowReducers, FollowEffects, SearchState, SearchReducers, SearchEffects, withRematch, initStore } from '../store';
import { Brand, ElasticSearchResult, User } from '../services/service-proxies';
import { getServiceProxy } from '../services';
import { withNamespaces } from '../i18n';
import { isMobile } from '../core/checkIsMobile';
import * as jsCookie from 'js-cookie';

interface Props {
  topBrands: Brand[];
  profileState: ProfileState;
  profileData: User;
  profileReducers: ProfileReducers & ProfileEffects;
  resultSearchNewestPost: ElasticSearchResult;
  resultSuggestForToday: ElasticSearchResult;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  searchState: SearchState;
  searchReducers: SearchReducers & SearchEffects;
}
interface State { }
class Index extends React.PureComponent<Props, State> {
  static async getInitialProps(context: any) {
    const pageSizeOfNewestPost = isMobile(context.req) ? 4 : 8;
    let serviceProxy: any;
    const idToken = !context.req ? jsCookie.get('token') : (context.req as any).cookies.token;
    serviceProxy = getServiceProxy(idToken);

    const promises = [
      serviceProxy.searchElasticsearch(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        'SELL',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        pageSizeOfNewestPost,
        'elasticsearchCreatedAt|desc',
        undefined,
        undefined,
      ),
      serviceProxy.findTopBrands(),
    ];
    if (idToken) {
      promises.push(serviceProxy.findProfile());
    }
    const [resultSearchNewestPost, topBrands, profileData] = await Promise.all(promises);

    (context as any).store.dispatch.searchModel.getDataInTabsSuccess({ result: resultSearchNewestPost, newsType: 'SELL' });

    return {
      namespacesRequired: ['common', 'index'],
      resultSearchNewestPost,
      topBrands: topBrands.data,
      profileData: profileData ? profileData : {},
    };
  }

  render() {
    return (
      <HomePageScreen
        topBrands={this.props.topBrands}
        followState={this.props.followState}
        followReducers={this.props.followReducers}
        searchState={this.props.searchState}
        searchReducers={this.props.searchReducers}
        profileState={this.props.profileState}
        profileReducers={this.props.profileReducers}
        searchKeyword={this.props.searchState.filters.keyword}
        resultSearchNewestPost={this.props.resultSearchNewestPost}
        profileData={this.props.profileData}
      />
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    searchState: rootState.searchModel,
    followState: rootState.followModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    searchReducers: rootReducer.searchModel,
    followReducers: rootReducer.followModel,
  };
};
export default withRematch(initStore, mapState, mapDispatch)(withNamespaces('index')(Index));
