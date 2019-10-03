import React, { Component, Fragment } from 'react';
import NavBarStore from '@client/modules/machine-news/screens/ShopInfoScreen/components/NavBarStore';
import ShopNewsDetails from './components/ShopNewsDetails';
import { Category, Brand, Shop, News, ElasticSearchResult, WeightRange } from '../../../../services/service-proxies';
import { FiltersChangePayload, SearchFilters, ProfileState, FollowEffects, FollowReducers, ProfileEffects, ProfileReducers } from '../../../../store';
import { message } from 'antd';
import { getServiceProxy } from '@client/services';
import { withNamespaces } from '@client/i18n';
import { config } from '@client/config';
import { getShopUrl } from '@client/core';
import Head from 'next/head';

interface Props {
  newsResult: ElasticSearchResult;
  shopInfo: Shop;
  categories: Category[];
  brands: Brand[];
  weightRanges: WeightRange[];
  resultSearchNewestPost: { data: any[], before?: string, after?: string };
  profileState: ProfileState;
  followReducers: FollowEffects & FollowReducers;
  profileReducers: ProfileEffects & ProfileReducers;
  t: (key: string) => string;
}
interface State {
  filters: SearchFilters;
  data: News[];
  first: number; // pageSize: default = 10
  sortBy: string; // default: createdAt|desc
  before?: string;
  after?: string;
  loading: boolean;
}
class ShopNewsScreen extends Component<Props, State> {
  state: State = {
    filters: {
      keyword: undefined,
      state: undefined,
      priceType: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      weightRange: undefined,
      newsType: undefined,
      owner: undefined,
      shop: this.props.shopInfo._id,
      location: undefined,
      type: undefined,
      brand: undefined,
      model: undefined,
      category: undefined,
    },
    data: this.props.newsResult.data as any,
    first: 12,
    sortBy: 'elasticsearchCreatedAt|desc', // fieldName|sortOrder
    before: this.props.newsResult.before,
    after: this.props.newsResult.after,
    loading: false,
  };

  handleSearchChange = (payload: { keyword: string }) => {
    this.setState({
      filters: {
        ...this.state.filters,
        ...payload,
      },
    });
  }

  handleFiltersChange = async (payload: FiltersChangePayload) => {
    const newFilters = {
      keyword: this.state.filters.keyword,
      state: typeof payload.state === 'string' ? payload.state : this.state.filters.state,
      priceType: typeof payload.priceType === 'string' ? payload.priceType : this.state.filters.priceType,
      minPrice: typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : this.state.filters.minPrice,
      maxPrice: typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : this.state.filters.maxPrice,
      weightRange: typeof payload.weightRange === 'string' ? payload.weightRange : this.state.filters.weightRange,
      newsType: typeof payload.newsType === 'string' ? payload.newsType : this.state.filters.newsType,
      category: typeof payload.category === 'string' ? payload.category : this.state.filters.category,
      owner: this.state.filters.owner,
      shop: this.state.filters.shop,
      location: typeof payload.location === 'string' ? payload.location : this.state.filters.location,
      type: typeof payload.type === 'string' ? payload.type : this.state.filters.type,
      brand: typeof payload.brand === 'string' ? payload.brand : this.state.filters.brand,
      model: typeof payload.model === 'string' ? payload.model : this.state.filters.model,
    };
    this.setState({
      filters: newFilters,
      loading: true,
    });

    try {
      const serviceProxies = getServiceProxy();
      const newsResult = await serviceProxies.searchElasticsearch(
        this.state.filters.keyword,
        typeof payload.state === 'string' ? payload.state : this.state.filters.state,
        typeof payload.priceType === 'string' ? payload.priceType : this.state.filters.priceType,
        typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : this.state.filters.minPrice,
        typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : this.state.filters.maxPrice,
        typeof payload.weightRange === 'string' ? payload.weightRange : this.state.filters.weightRange,
        undefined,
        typeof payload.newsType === 'string' ? payload.newsType : this.state.filters.newsType,
        typeof payload.category === 'string' ? payload.category : this.state.filters.category,
        this.state.filters.owner,
        this.state.filters.shop,
        typeof payload.location === 'string' ? payload.location : this.state.filters.location,
        typeof payload.type === 'string' ? payload.type : this.state.filters.type,
        typeof payload.brand === 'string' ? payload.brand : this.state.filters.brand,
        typeof payload.model === 'string' ? payload.model : this.state.filters.model,
        this.state.first,
        this.state.sortBy,
        undefined,
        undefined,
      );

      this.setState({
        data: newsResult.data as any,
        before: newsResult.before,
        after: newsResult.after,
        loading: false,
      });
    } catch (error) {
      message.error(error.message || JSON.parse(error.response).message);
      this.setState({
        loading: false,
      });
    }
  }

  getNextPage = async () => {
    this.setState({
      loading: true,
    });

    try {
      const serviceProxies = getServiceProxy();
      const newsResult = await serviceProxies.searchElasticsearch(
        this.state.filters.keyword,
        this.state.filters.state,
        this.state.filters.priceType,
        this.state.filters.minPrice,
        this.state.filters.maxPrice,
        this.state.filters.weightRange,
        undefined,
        this.state.filters.newsType,
        this.state.filters.category,
        this.state.filters.owner,
        this.state.filters.shop,
        this.state.filters.location,
        this.state.filters.type,
        this.state.filters.brand,
        this.state.filters.model,
        this.state.first,
        this.state.sortBy,
        undefined,
        this.state.after,
      );

      this.setState({
        data: newsResult.data as any,
        before: newsResult.before,
        after: newsResult.after,
        loading: false,
      });
    } catch (error) {
      message.error(error.message || JSON.parse(error.response).message);
      this.setState({
        loading: false,
      });
    }
  }

  getPrevPage = async () => {
    this.setState({
      loading: true,
    });

    try {
      const serviceProxies = getServiceProxy();
      const newsResult = await serviceProxies.searchElasticsearch(
        this.state.filters.keyword,
        this.state.filters.state,
        this.state.filters.priceType,
        this.state.filters.minPrice,
        this.state.filters.maxPrice,
        this.state.filters.weightRange,
        undefined,
        this.state.filters.newsType,
        this.state.filters.category,
        this.state.filters.owner,
        this.state.filters.shop,
        this.state.filters.location,
        this.state.filters.type,
        this.state.filters.brand,
        this.state.filters.model,
        this.state.first,
        this.state.sortBy,
        this.state.before,
        undefined,
      );

      this.setState({
        data: newsResult.data as any,
        before: newsResult.before,
        after: newsResult.after,
        loading: false,
      });
    } catch (error) {
      message.error(error.message || JSON.parse(error.response).message);
      this.setState({
        loading: false,
      });
    }
  }

  changeFollowItemStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        await this.setState({
          data: this.state.data.map((item) => {
            return item._id === id ? {
              ...item,
              isFollowing: false,
            } : item;
          }),
        });
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        await this.setState({
          data: this.state.data.map((item) => {
            return item._id === id ? {
              ...item,
              isFollowing: true,
            } : item;
          }),
        });
      }
    } else {
      message.warning(this.props.t('detail-news:notification-login'));
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>{`${this.props.shopInfo.name} | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content={this.props.shopInfo.description} />
          <meta property='og:url' content={getShopUrl(this.props.shopInfo.domain)} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Cửa hàng ${this.props.shopInfo.name} | timmay.vn`} />
          <meta property='og:description' content={this.props.shopInfo.description} />
          <meta property='og:image:url' content={this.props.shopInfo.logoImage ? this.props.shopInfo.logoImage : `/static/images/logo-timmay.png`} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>
        <NavBarStore
          linkLogoStore={this.props.shopInfo.logoImage}
          shopName={this.props.shopInfo.name}
          t={this.props.t}
        />

        <ShopNewsDetails
          resultSearchNewestPost={this.props.resultSearchNewestPost}
          loading={this.state.loading}
          data={this.state.data}
          shopName={this.props.shopInfo.name}
          hasNext={Boolean(this.state.after)}
          hasPrev={Boolean(this.state.before)}
          getNextPage={this.getNextPage}
          getPrevPage={this.getPrevPage}
          weightRanges={this.props.weightRanges}
          categories={this.props.categories}
          brands={this.props.brands}
          selectedBrand={this.state.filters.brand}
          selectedCategory={this.state.filters.category}
          searchKeywords={this.state.filters.keyword}
          selectedState={this.state.filters.state}
          selectedNewsType={this.state.filters.newsType}
          minPrice={this.state.filters.minPrice}
          maxPrice={this.state.filters.maxPrice}
          selectedWeightRange={this.state.filters.weightRange}
          handleSearchChange={this.handleSearchChange}
          handleFiltersChange={this.handleFiltersChange}
          profileState={this.props.profileState}
          changeFollowStatus={this.changeFollowItemStatus}
          t={this.props.t}
        />
      </Fragment>
    );
  }
}

export default withNamespaces('detail-news')(ShopNewsScreen);
