import * as React from 'react';
import UserNewsScreen from '../modules/machine-news/screens/UserNewsScreen/UserNewsScreen';
import { Brand, User, ElasticSearchResult, CommonKeyword } from '../services/service-proxies';
import { withRematch, initStore, ProfileState, ProfileEffects, ProfileReducers, FollowEffects, FollowReducers, FollowState } from '../store';
import { getServiceProxy } from '../services';
import { NextContext } from 'next';
import * as jsCookie from 'js-cookie';

interface Props {
  newsResult: ElasticSearchResult;
  profileData: Partial<User>;
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  updateFilters: (payload: { [key: string]: string | number }) => void;
}
interface State { }
class Users extends React.PureComponent<Props, State> {
  static async getInitialProps(context: NextContext) {
    let profileData: Partial<User>;
    let newsResult: ElasticSearchResult;
    let topBrands: { data: Brand[] };

    const userId = context.asPath.split('/')[context.asPath.split('/').length - 1];
    let serviceProxies: any;
    if (!context.req) {
      const idToken = jsCookie.get('token');
      serviceProxies = getServiceProxy(idToken);
    }
    else {
      serviceProxies = getServiceProxy((context.req as any).cookies.token);
    }
    if (!context.req) {
      [newsResult, profileData, topBrands] = await Promise.all([
        serviceProxies.searchElasticsearch(
          undefined,
          'PUBLIC',
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          'SELL',
          undefined,
          userId,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          12,
          'elasticsearchCreatedAt|desc',
          undefined,
          undefined,
        ),
        serviceProxies.findPublicProfile(userId),
        serviceProxies.findTopBrands(),
      ]);
    } else {
      [newsResult, profileData, topBrands] = await Promise.all([
        serviceProxies.searchElasticsearch(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          'SELL',
          undefined,
          userId,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          12,
          'elasticsearchCreatedAt|desc',
          undefined,
          undefined,
        ),
        serviceProxies.findPublicProfile(userId),
        serviceProxies.findTopBrands(),
      ]);
    }

    return {
      profileData,
      newsResult,
      topBrands: topBrands.data,
    };
  }

  render() {
    return (
      <div>
        <UserNewsScreen
          updateFilters={this.props.updateFilters}
          newsResult={this.props.newsResult}
          profileData={this.props.profileData}
          searchKeyword={this.props.searchKeyword}
          topBrands={this.props.topBrands}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          followState={this.props.followState}
          followReducers={this.props.followReducers}
        />
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    searchKeyword: rootState.searchModel.filters.keyword,
    followState: rootState.followModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    followReducers: rootReducer.followModel,
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(Users);
