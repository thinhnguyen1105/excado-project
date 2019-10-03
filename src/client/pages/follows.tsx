import React from 'react';
import { withNamespaces } from '../i18n';
import { FollowsScreen } from '../modules/machine-news';
import * as jsCookie from 'js-cookie';
import { getServiceProxy } from '../services';
import { initStore, withRematch, ProfileState, ProfileEffects, ProfileReducers, FollowState, FollowReducers, FollowEffects } from '../store';
import { Brand, CommonKeyword } from '../services/service-proxies';

interface Props {
  commonKeywords: CommonKeyword[];
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducer: FollowReducers & FollowEffects;
  topBrands: Brand[];
  searchKeyword: string;
  profileData: any;
  updateFilters: (payload: {[key: string]: string|number}) => void;
}
interface State {}

class Follows extends React.PureComponent<Props, State> {
  static async getInitialProps(context: any) {
    let topBrands: any;
    if (!context.req) {
      const idToken = jsCookie.get('token');
      const serviceProxies = getServiceProxy(idToken);

      [topBrands] = await Promise.all([
        serviceProxies.findTopBrands(),
      ]);
    } else {
      const serviceProxies = getServiceProxy((context.req as any).cookies.token);

      [topBrands] = await Promise.all([
        serviceProxies.findTopBrands(),
      ]);
    }
    return {
      topBrands: topBrands.data,
      namespacesRequired: ['common', 'follows'],
    };
  }

  render () {
    return (
      <FollowsScreen
        commonKeywords={this.props.commonKeywords}
        searchKeyword={this.props.searchKeyword}
        topBrands={this.props.topBrands}
        profileState={this.props.profileState}
        profileReducers={this.props.profileReducers}
        updateFilters={this.props.updateFilters}
        profileData={this.props.profileData}
        followReducer={this.props.followReducer}
      />
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

export default withRematch(initStore, mapState, mapDispatch)(withNamespaces('follows')(Follows));
