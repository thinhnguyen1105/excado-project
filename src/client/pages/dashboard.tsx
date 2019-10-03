import * as React from 'react';
import DashboardScreen from '../modules/machine-news/screens/DashboardScreen/DashboardScreen';
import { User as UserInterface, Brand, FindNewsResult, FindBrandsResult } from '../services/service-proxies';
import { withRematch, initStore, ProfileState, ProfileEffects, ProfileReducers, FollowEffects, FollowReducers, FollowState } from '../store';
import { getServiceProxy } from '../services';
import * as jsCookie from 'js-cookie';
import { NextContext } from 'next';

interface Props {
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  publicData: FindNewsResult;
  pendingData: FindNewsResult;
  rejectedData: FindNewsResult;
  stoppedData: FindNewsResult;
  deletedData: FindNewsResult;
  currentUserData: Partial<UserInterface>;
  updateFilters: (payload: { [key: string]: string | number }) => void;
}
interface State { }
const Fragment = React.Fragment;

class User extends React.PureComponent<Props, State> {
  static async getInitialProps(context: NextContext) {
    let publicData: FindNewsResult;
    let pendingData: FindNewsResult;
    let rejectedData: FindNewsResult;
    let stoppedData: FindNewsResult;
    let deletedData: FindNewsResult;
    let topBrands: FindBrandsResult;
    let currentUserData: Partial<UserInterface>;

    if (!context.req) {
      const idToken = jsCookie.get('token');
      const serviceProxies = getServiceProxy(idToken);
      const profileData = await serviceProxies.findProfile();

      [currentUserData, publicData, pendingData, rejectedData, stoppedData, deletedData, topBrands] = await Promise.all([
        serviceProxies.findProfile(),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'PUBLIC',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'PENDING',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'REJECTED',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'STOPPED',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'DELETED',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findTopBrands(),
      ]);
    } else {
      const serviceProxies = getServiceProxy((context.req as any).cookies.token);
      const profileData = await serviceProxies.findProfile();
      [currentUserData, publicData, pendingData, rejectedData, stoppedData, deletedData, topBrands] = await Promise.all([
        serviceProxies.findProfile(),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'PUBLIC',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'PENDING',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'REJECTED',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'STOPPED',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findNewsByOwner(
          profileData._id,
          'DELETED',
          16,
          'createdAt',
          undefined,
          undefined,
        ),
        serviceProxies.findTopBrands(),
      ]);
    }
    return {
      publicData,
      pendingData,
      rejectedData,
      stoppedData,
      deletedData,
      topBrands: topBrands.data,
      currentUserData,
    };
  }
  render() {
    return (
      <Fragment>
        <DashboardScreen
          publicData={this.props.publicData}
          currentUserData={this.props.currentUserData}
          pendingData={this.props.pendingData}
          rejectedData={this.props.rejectedData}
          stoppedData={this.props.stoppedData}
          deletedData={this.props.deletedData}
          searchKeyword={this.props.searchKeyword}
          topBrands={this.props.topBrands}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          followState={this.props.followState}
          followReducers={this.props.followReducers}
          updateFilters={this.props.updateFilters}
        />
      </Fragment>
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
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(User);
