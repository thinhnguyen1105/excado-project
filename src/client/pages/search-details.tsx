import React, { Component } from 'react';
import { SearchDetailsScreen } from '../modules/machine-news/screens/SearchDetailsScreen/SearchDetailsScreen';
import { Brand, Category, News, Province, WeightRange } from '../services/service-proxies';
import {
  withRematch, initStore, ProfileState, ProfileEffects, ProfileReducers,
  SearchFilters, FollowState, FollowReducers, FollowEffects, SearchReducers, SearchEffects,
} from '../store';
import { getServiceProxy } from '../services';
import { NextContext } from 'next';
import queryString from 'query-string';
import { generateFilters } from '../core';
import { withNamespaces } from '../i18n';
import * as jsCookie from 'js-cookie';

interface Props {
  loading: {
    handleSortChange: boolean;
    handleFiltersChange: boolean;
    getNextPage: boolean;
    getPrevPage: boolean;
  };
  sortBy: string;
  searchData: News[];
  total: number;
  pageNumber: number;
  pageSize: number;
  searchFilters: SearchFilters;
  brands: Brand[];
  topBrands: Brand[];
  categories: Category[];
  provinces: Province[];
  weightRanges: WeightRange[];
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  searchReducers: SearchReducers & SearchEffects;
  getData: (payload: {pageNumber: number; pageSize: number}) => void;
}

interface State { }

class SearchDetailsPage extends Component<Props, State> {
  static async getInitialProps(context: NextContext) {
    const query = queryString.parse(context.asPath.split('?')[1]);
    let serviceProxy: any;
    if (!context.req) {
      const idToken = jsCookie.get('token');
      serviceProxy = getServiceProxy(idToken);
    }
    else {
      serviceProxy = getServiceProxy((context.req as any).cookies.token);
    }
    const [topBrands, brands, categories, weightRanges, provinces] = await Promise.all([
      serviceProxy.findTopBrands(),
      serviceProxy.findBrands(
        query.brand as any,
        30,
        'slug|asc',
        undefined,
        undefined,
      ),
      serviceProxy.findCategories(),
      serviceProxy.getAllWeightRanges(),
      serviceProxy.findProvinces(),
    ]);

    const filters = generateFilters(query, {
      brands: brands.data,
      categories: categories.data,
      weightRanges: weightRanges.data,
      provinces: provinces.data,
    });
    (context as any).store.dispatch.searchModel.updateFilters(filters);

    const searchState = (context as any).store.getState().searchModel;
    const result = await serviceProxy.searchElasticsearchOffsetPaging(
      searchState.filters.keyword,
      searchState.filters.state,
      searchState.filters.priceType,
      searchState.filters.minPrice,
      searchState.filters.maxPrice,
      searchState.filters.weightRange,
      undefined,
      searchState.filters.newsType,
      searchState.filters.category,
      searchState.filters.owner,
      searchState.filters.shop,
      searchState.filters.location,
      searchState.filters.type,
      searchState.filters.brand,
      searchState.filters.model,
      searchState.sortBy,
      searchState.pageNumber,
      searchState.pageSize,
    );

    (context as any).store.dispatch.searchModel.getDataSuccess(result);
    return {
      namespacesRequired: ['common', 'search-detail'],
      topBrands: topBrands.data,
      brands: brands.data,
      categories: categories.data,
      weightRanges: weightRanges.data,
      provinces: provinces.data,
    };
  }

  render() {
    return (
      <div>
        <SearchDetailsScreen
          topBrands={this.props.topBrands}
          sortBy={this.props.sortBy}
          data={this.props.searchData}
          total={this.props.total}
          pageNumber={this.props.pageNumber}
          pageSize={this.props.pageSize}
          loading={this.props.loading}
          selectedBrand={this.props.searchFilters.brand}
          selectedCategory={this.props.searchFilters.category}
          selectedModel={this.props.searchFilters.model}
          selectedProvince={this.props.searchFilters.location}
          selectedState={this.props.searchFilters.state}
          selectedNewsType={this.props.searchFilters.newsType}
          minPrice={this.props.searchFilters.minPrice}
          maxPrice={this.props.searchFilters.maxPrice}
          selectedWeightRange={this.props.searchFilters.weightRange}
          searchKeyword={this.props.searchFilters.keyword}
          brands={this.props.brands}
          provinces={this.props.provinces}
          categories={this.props.categories}
          weightRanges={this.props.weightRanges}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          getData={this.props.getData}
          followState={this.props.followState}
          followReducers={this.props.followReducers}
          searchReducers={this.props.searchReducers}
        />
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    total: rootState.searchModel.total,
    pageNumber: rootState.searchModel.pageNumber,
    pageSize: rootState.searchModel.pageSize,
    searchData: rootState.searchModel.data,
    loading: rootState.loading.effects.searchModel,
    profileState: rootState.profileModel,
    searchFilters: rootState.searchModel.filters,
    followState: rootState.followModel,
    sortBy: rootState.searchModel.sortBy,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    getData: rootReducer.searchModel.getData,
    followReducers: rootReducer.followModel,
    searchReducers: rootReducer.searchModel,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(withNamespaces('search-detail')(SearchDetailsPage));
