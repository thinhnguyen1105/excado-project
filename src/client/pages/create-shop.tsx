import React from 'react';
import CreateShopScreen from '../modules/machine-news/screens/CreateShopScreen/CreateShopScreen';
import { Brand, CommonKeyword } from '../services/service-proxies';
import { withRematch, initStore, ProfileState, ProfileEffects, ProfileReducers } from '../store';
import { getServiceProxy } from '../services';
import { NextContext } from 'next';

const Fragment = React.Fragment;
interface Props {
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
}
interface State {}
class CreateShop extends React.PureComponent<Props, State> {
  static async getInitialProps (context: NextContext) {
    const servicePropxy = getServiceProxy();
    const topBrands = await servicePropxy.findTopBrands();

    return {
      topBrands: topBrands.data,
    };
  }
  render() {
    return (
      <Fragment>
        <CreateShopScreen
          searchKeyword={this.props.searchKeyword}
          topBrands={this.props.topBrands}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          updateFilters={this.props.updateFilters}
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
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(CreateShop);
