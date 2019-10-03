import React from 'react';
import { withRematch, initStore, ProfileState, ProfileReducers, ProfileEffects } from '../store';
import { withNamespaces } from '../i18n';
import { NextContext } from 'next';
import BrandDetailScreen from '../modules/machine-news/screens/BrandDetailScreen/BrandDetailScreen';
import { Brand } from '../services/service-proxies';
import { getServiceProxy } from '../services';
import startCase from 'lodash/startCase';

interface Props {
  brandName: string;
  topBrands: Brand[];
  brandDetail: Brand;
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
}
interface State {}
class BrandDetail extends React.PureComponent<Props, State> {
  static async getInitialProps(context: NextContext) {
    const brandSlug = context.asPath.split('/')[context.asPath.split('/').length - 1];
    const serviceProxy = getServiceProxy();
    const [brandDetail, topBrands] = await Promise.all([
      serviceProxy.findBrandDetail(brandSlug),
      serviceProxy.findTopBrands(),
    ]);

    return {
      namespacesRequired: ['common', 'brand-detail'],
      brandDetail,
      topBrands: topBrands.data,
      brandName: startCase(brandSlug),
    };
  }

  render () {
    return (
      <BrandDetailScreen
        brandName={this.props.brandName}
        brandDetail={this.props.brandDetail}
        topBrands={this.props.topBrands}
        searchKeyword={this.props.searchKeyword}
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
export default withRematch(initStore, mapState, mapDispatch)(withNamespaces('common')(BrandDetail));
