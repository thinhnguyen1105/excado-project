import React, { Component } from 'react';
import AllBrandsScreen from '../modules/machine-news/screens/AllBrandsScreen/AllBrandsScreen';
import { Brand, CommonKeyword, FindBrandsResult } from '../services/service-proxies';
import { withRematch, initStore, ProfileState, ProfileEffects, ProfileReducers } from '../store';
import { withNamespaces } from '../i18n';
import { NextContext } from 'next';
import { getServiceProxy } from '../services';

interface Props {
  brandsResult: FindBrandsResult;
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
}
interface State {}
class Brands extends Component<Props, State> {
  static async getInitialProps (_context: NextContext) {
    const serviceProxy = getServiceProxy();
    const [topBrands, brandsResult] = await Promise.all([
      serviceProxy.findTopBrands(),
      serviceProxy.findBrandList(),
    ]);

    return {
      topBrands: topBrands.data,
      brandsResult,
    };
  }

  render() {
    return (
      <AllBrandsScreen
        searchKeyword={this.props.searchKeyword}
        topBrands={this.props.topBrands}
        brandsResult={this.props.brandsResult}
        updateFilters={this.props.updateFilters}
        profileState={this.props.profileState}
        profileReducers={this.props.profileReducers}
      />
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

export default withRematch(initStore, mapState, mapDispatch)(withNamespaces('common')(Brands));
