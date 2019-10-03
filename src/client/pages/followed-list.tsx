import React from 'react';
import FollowedListScreen from '../modules/machine-news/screens/FollowedListScreen/FollowedListScreen';
import { initStore, withRematch, ProfileState, ProfileEffects, ProfileReducers, FollowState, FollowReducers, FollowEffects } from '../store';
import { Brand, CommonKeyword } from '../services/service-proxies';
import { getServiceProxy } from '../services';
import * as jsCookie from 'js-cookie';
import { NextContext } from 'next';

interface Props {
  commonKeywords: CommonKeyword[];
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducer: FollowReducers & FollowEffects;
  topBrands: Brand[];
  searchKeyword: string;
  profileData: any;
  data: any;
  updateFilters: (payload: {[key: string]: string|number}) => void;
}
interface State {}
class FollowList extends React.PureComponent<Props, State> {
  static async getInitialProps(context: NextContext) {
  let followNewsResult: any;
  let topBrands: any;
  let profileData: any;

  if (!context.req) {
    const idToken = jsCookie.get('token');
    const serviceProxies = getServiceProxy(idToken);
    profileData = await serviceProxies.findProfile();

    [followNewsResult, topBrands] = await Promise.all([
      serviceProxies.findFollow(
        profileData._id,
        'news',
        'SELL',
        16,
        '_id',
        undefined,
        undefined,
      ),
      serviceProxies.findTopBrands(),
    ]);
  } else {
    const serviceProxies = getServiceProxy((context.req as any).cookies.token);
    profileData = await serviceProxies.findProfile();

    [followNewsResult, topBrands] = await Promise.all([
      serviceProxies.findFollow(
        profileData._id,
        'news',
        'SELL',
        16,
        '_id',
        undefined,
        undefined,
      ),
      serviceProxies.findTopBrands(),
    ]);
  }
  return {
    data: followNewsResult.data,
    topBrands: topBrands.data,
    profileData,
  };
}
  render() {
    return (
      <div>
        <FollowedListScreen
          commonKeywords={this.props.commonKeywords}
          data={this.props.data}
          searchKeyword={this.props.searchKeyword}
          topBrands={this.props.topBrands}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          updateFilters={this.props.updateFilters}
          profileData={this.props.profileData}
        />
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    followState: rootState.followModel,
    searchKeyword: rootState.searchModel.filters.keyword,
    commonKeywords: rootState.metadataModel.commonKeywords,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    followReducer: rootReducer.followModel,
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(FollowList);
