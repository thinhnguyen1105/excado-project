import React from 'react';
import { withRematch, initStore, ProfileState, ProfileEffects, ProfileReducers, PriceRange, SelectOption, FollowEffects, FollowReducers } from '../store';
import { withNamespaces } from '../i18n';
import MyShopScreen from '../modules/machine-news/screens/MyShopScreen/MyShopScreen';
import { Shop, Brand, Category } from '../services/service-proxies';
import { NextContext } from 'next';
import Router from 'next/router';
import { getServiceProxy } from '../services';

interface Props {
  weightRanges: PriceRange[];
  shopInfo: Shop;
  searchKeyword: string;
  categories: Category[];
  brands: Brand[];
  profileState: ProfileState;
  profileReducers: ProfileEffects & ProfileReducers;
  followReducers: FollowEffects & FollowReducers;
  updateFilters: (payload: {[key: string]: string|number}) => void;
  handleFiltersChange: (payload: {[key: string]: string|number}) => void;
}
interface State {}
class MyShop extends React.PureComponent<Props, State> {
  static async getInitialProps (context: NextContext) {
    const authUser = (context as any).store.getState().profileModel.authUser;
    if (!authUser || !authUser.id) {
      context.req ? (context.res as any).redirect('/not-found') : Router.push(`/not-found`);
    }

    const idToken = (context.req as any).cookies.token;
    const serviceProxy = getServiceProxy(idToken);
    const [shopInfo, weightRanges, categories, brands] = await Promise.all([
      serviceProxy.findShopByOwner(authUser.id),
      serviceProxy.getAllWeightRanges(),
      serviceProxy.findCategories(),
      serviceProxy.findBrands(
        undefined,
        50,
        'slug|asc',
        undefined,
        undefined,
      ),
    ]);

    if (!shopInfo) {
      Router.push(`/not-found`);
    }

    return  {
      shopInfo,
      weightRanges: weightRanges.data,
      categories: categories.data,
      brands: brands.data,
    };
  }
  render () {
    return (
      <MyShopScreen
        weightRanges={this.props.weightRanges}
        categories={this.props.categories}
        brands={this.props.brands}
        shopInfo={this.props.shopInfo}
        searchKeyword={this.props.searchKeyword}
        profileState={this.props.profileState}
        profileReducers={this.props.profileReducers}
        updateFilters={this.props.updateFilters}
        followReducers={this.props.followReducers}
      />
    );
  }
}

const mapState = (rootState: any) => {
  return {
    searchKeyword: rootState.searchModel.filters.keyword,
    profileState: rootState.profileModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    updateFilters: rootReducer.searchModel.updateFilters,
    profileReducers: rootReducer.profileModel,
    followReducers: rootReducer.followModel,
  };
};
export default withRematch(initStore, mapState, mapDispatch)(withNamespaces('my-shop')(MyShop));
