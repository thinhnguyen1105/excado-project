import React from 'react';
import { withRematch, initStore, ProfileState, ProfileReducers, ProfileEffects } from '../store';
import EditProfileScreen from '../modules/auth/screens/EditProfileScreen/EditProfileScreen';
import { User, CommonKeyword, Province } from '../services/service-proxies';
import { NextContext } from 'next';
import { getServiceProxy } from '../services';
import * as jsCookie from 'js-cookie';

interface Props {
  profileData: Partial<User>;
  searchKeyword: string;
  commonKeywords: CommonKeyword[];
  handleFiltersChange: (payload: { [key: string]: string | number }) => void;
  profileState: ProfileState;
  provinces: Province[];
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: { [key: string]: string | number }) => void;
}
interface State { }
const Fragment = React.Fragment;
class EditProfile extends React.PureComponent<Props, State> {
  static async getInitialProps(context: NextContext) {
    let profileData: Partial<User>;
    let provinces;
    if (!context.req) {
      const idToken = jsCookie.get('token');
      const serviceProxies = getServiceProxy(idToken);
      profileData = await serviceProxies.findProfile();
      provinces = await serviceProxies.findProvinces();
    } else {
      const serviceProxies = getServiceProxy((context.req as any).cookies.token);
      profileData = await serviceProxies.findProfile();
      provinces = await serviceProxies.findProvinces();
    }

    return {
      profileData,
      provinces: provinces.data,
    };
  }

  render() {
    return (
      <Fragment>
        <EditProfileScreen
          updateFilters={this.props.updateFilters}
          userProfile={this.props.profileData}
          searchKeyword={this.props.searchKeyword}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          provinces={this.props.provinces}
        />
      </Fragment>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    searchKeyword: rootState.searchModel.filters.keyword,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    handleFiltersChange: rootReducer.searchModel.handleFiltersChange,
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(EditProfile);
