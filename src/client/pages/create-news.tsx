import * as React from 'react';
import CreateNewsScreen from '../modules/machine-news/screens/CreateNewsScreen/CreateNewsScreen';
import { initStore, withRematch, ProfileState, ProfileReducers, ProfileEffects, SelectOption, PriceRange } from '../store';
import { Brand, Model, Province, CommonKeyword, Category, WeightRange, RentalPeriod, User } from '../services/service-proxies';
import { NextContext } from 'next';
import Router from 'next/router';
import { getServiceProxy } from '../services';
import * as jsCookie from 'js-cookie';

interface Props {
  userProfile: User;
  searchKeyword: string;
  brands: Brand[];
  categories: Category[];
  provinces: Province[];
  weightRanges: WeightRange[];
  rentalPeriods: RentalPeriod[];
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
  addNewModel: (payload: Model) => void;
}
interface State {}
class CreateNews extends React.PureComponent<Props, State> {
  static async getInitialProps (context: NextContext) {
    const authUser = (context as any).store.getState().profileModel.authUser;
    if (!authUser || !authUser.id) {
      context.req ? (context.res as any).redirect('/not-found') : Router.push(`/not-found`);
    }

    const idToken = context.req ? (context.req as any).cookies.token : jsCookie.get('token');
    const serviceProxy = getServiceProxy(idToken);
    const [provinces, brands, categories, weightRanges, rentalPeriods, userProfile] = await Promise.all([
      serviceProxy.findProvinces(),
      serviceProxy.findBrands(
        undefined,
        50,
        'slug|asc',
        undefined,
        undefined,
      ),
      serviceProxy.findCategories(),
      serviceProxy.getAllWeightRanges(),
      serviceProxy.getAllRentalPeriods(),
      serviceProxy.findProfile(),
    ]);

    return {
      provinces: provinces.data,
      brands: brands.data,
      categories: categories.data,
      weightRanges: weightRanges.data,
      rentalPeriods: rentalPeriods.data,
      userProfile,
    };
  }

  render () {
    return (
      <div>
        <CreateNewsScreen
          updateFilters={this.props.updateFilters}
          searchKeyword={this.props.searchKeyword}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          addNewModel={this.props.addNewModel}
        />
      </div>
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
    addNewModel: rootReducer.metadataModel.addNewModel,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(CreateNews);
