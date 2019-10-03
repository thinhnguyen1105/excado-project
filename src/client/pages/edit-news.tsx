import * as React from 'react';
import EditNewsScreen from '../modules/machine-news/screens/EditNewsScreen/EditNewsScreen';
import { initStore, withRematch, ProfileState, ProfileReducers, ProfileEffects } from '../store';
import { Brand, Category, Model, Province, CommonKeyword, News, WeightRange, RentalPeriod } from '../services/service-proxies';
import { getServiceProxy } from '../services';
import { NextContext } from 'next';
import Router from 'next/router';

interface Props {
  data: News;
  searchKeyword: string;
  commonKeywords: CommonKeyword[];
  brands: Brand[];
  categories: Category[];
  provinces: Province[];
  weightRanges: WeightRange[];
  rentalPeriods: RentalPeriod[];
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
}
interface State {}
class EditNews extends React.PureComponent<Props, State> {
  static async getInitialProps(context: NextContext) {
    const authUser = (context as any).store.getState().profileModel.authUser;
    if (!authUser || !authUser.id) {
      context.req ? (context.res as any).redirect('/not-found') : Router.push(`/not-found`);
    }

    const serviceProxy = getServiceProxy();
    const [data, provinces, brands, categories, weightRanges, rentalPeriods] = await Promise.all([
      serviceProxy.findNewsById(context.query.id as any),
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
    ]);

    return {
      data,
      provinces: provinces.data,
      brands: brands.data,
      categories: categories.data,
      weightRanges: weightRanges.data,
      rentalPeriods: rentalPeriods.data,
    };
  }

  render () {
    return (
      <div>
        <EditNewsScreen
          data={this.props.data}
          weightRanges={this.props.weightRanges}
          rentalPeriods={this.props.rentalPeriods}
          commonKeywords={this.props.commonKeywords}
          updateFilters={this.props.updateFilters}
          searchKeyword={this.props.searchKeyword}
          provinces={this.props.provinces}
          brands={this.props.brands}
          categories={this.props.categories}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        />
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    searchKeyword: rootState.searchModel.filters.keyword,
    commonKeywords: rootState.metadataModel.commonKeywords,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(EditNews);
