import React, { Component, Fragment } from 'react';
import NavBarShowContent from '@client/modules/machine-news/screens/AllBrandsScreen/components/NavBarShowContent';
import { ProfileState, ProfileReducers, ProfileEffects, PriceRange, FollowState, FollowReducers, FollowEffects, SearchEffects, SearchReducers, FiltersChangePayload } from '@client/store';
import DetailSearchPage from './components/DetailSearchPage';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import { ListSelect } from './components/ListSelect';
import { message, Empty, Row, Col } from 'antd';
import NavLocation from './components/NavLocation';
import { ListSelectMobile } from './components/ListSelectMobile';
import { Brand, Category, News, Province } from '../../../../services/service-proxies';
import { generateSearchUrl } from '@client/core';
import qs from 'qs';
import { withNamespaces } from '@client/i18n';
import Head from 'next/head';
import { config } from '@client/config';

interface Props {
  loading: {
    handleSortChange: boolean;
    handleFiltersChange: boolean;
    getNextPage: boolean;
    getPrevPage: boolean;
  };
  topBrands: Brand[];
  hasPrev: boolean;
  hasNext: boolean;
  data: News[];
  total: number;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  selectedBrand?: string;
  selectedCategory?: string;
  selectedModel?: string;
  selectedProvince?: string;
  selectedState?: string;
  selectedNewsType?: string;
  minPrice?: number;
  maxPrice?: number;
  selectedWeightRange?: string;
  brands: Brand[];
  categories: Category[];
  provinces: Province[];
  weightRanges: PriceRange[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  searchReducers: SearchReducers & SearchEffects;
  getData: (payload: { pageNumber: number; pageSize: number }) => void;
  t: (key: string) => string;
}

interface State {
  isOpenModalFilter: boolean;
  isMobile: boolean;
  brands: Brand[];
}

class BaseSearchDetailsScreen extends Component<Props, State> {
  state: State = {
    isOpenModalFilter: false,
    isMobile: false,
    brands: this.props.brands,
  };

  componentDidMount() {
    const mobileDetection = require('react-device-detect');
    this.setState({
      isMobile: mobileDetection.isMobile,
    });
  }

  changeFollowStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        await this.props.searchReducers.onFollowChangeOnSearchDetailScreenSuccess({
          starStatus,
          newsId: id,
        });
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        await this.props.searchReducers.onFollowChangeOnSearchDetailScreenSuccess({
          starStatus,
          newsId: id,
        });
      }
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(this.props.t('search-detail:notification-login'));
    }
  }

  openModalFilter = () => {
    this.setState({ isOpenModalFilter: !this.state.isOpenModalFilter });
  }

  closeModalFilter = () => {
    this.setState({ isOpenModalFilter: false });
  }

  updateSearchUrl = (payload: FiltersChangePayload) => {
    const oldFilters = qs.parse(window.location.search.replace('?', ''));

    const queryString = generateSearchUrl({
      keyword: payload.searchKeyword || this.props.searchKeyword,
      brand: typeof payload.brand === 'string' ? payload.brand : oldFilters.brand,
      category: typeof payload.category === 'string' ? payload.category : oldFilters.category,
      model: typeof payload.model === 'string' ? payload.model : oldFilters.model,
      location: typeof payload.location === 'string' ? payload.location : oldFilters.location,
      state: typeof payload.state === 'string' ? payload.state : oldFilters.state,
      newsType: typeof payload.newsType === 'string' ? payload.newsType : oldFilters.newsType,
      minPrice: typeof payload.minPrice === 'string' || typeof payload.minPrice === 'number' ? Number(payload.minPrice) > 0 ? Number(payload.minPrice) : undefined : oldFilters.minPrice,
      maxPrice: typeof payload.maxPrice === 'string' || typeof payload.maxPrice === 'number' ? Number(payload.maxPrice) > 0 ? Number(payload.maxPrice) : undefined : oldFilters.maxPrice,
      minWeight: typeof payload.minWeight === 'string' || typeof payload.minWeight === 'number' ? payload.minWeight : oldFilters.minWeight,
      maxWeight: typeof payload.maxWeight === 'string' || typeof payload.maxWeight === 'number' ? payload.maxWeight : oldFilters.maxWeight,
    });

    history.pushState({}, '', `${window.location.pathname}?${queryString}`);
  }

  updateBrands = (brands: Brand[]) => {
    this.setState({
      brands,
    });
  }

  render() {
    const translate = this.props.t;
    const selectedCategory = this.props.selectedCategory ? this.props.categories.filter((value: any) => value._id === this.props.selectedCategory)[0] : undefined;
    const selectedBrand = this.props.selectedBrand ? this.state.brands.filter((value: any) => value._id === this.props.selectedBrand)[0] : undefined;
    const selectedProvince = this.props.selectedProvince ? this.props.provinces.filter((value: any) => value._id === this.props.selectedProvince)[0] : undefined;

    const siteTitle = this.props.searchKeyword ? `Tìm kiếm ${this.props.searchKeyword}` : selectedCategory ? `Tìm kiếm máy ${selectedCategory.name}`
      : selectedBrand ? `Tìm kiếm hãng ${selectedBrand.name}` : selectedProvince ? `Tìm kiếm máy ở ${selectedProvince.name}` : 'Tìm kiếm';
    return (
      <Fragment>
        <Head>
          <title>{`${siteTitle} | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content={`${siteTitle} | timmay.vn`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`${siteTitle} | timmay.vn`} />
          <meta property='og:description' content={`${siteTitle} | timmay.vn`} />
          <meta property='og:image:url' content={`/static/images/logo-timmay.png`} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>
        <CommonLayout
          topBrands={this.props.topBrands}
          updateFilters={this.props.searchReducers.updateFilters}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={true}
          hasMenuItems={true}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        >
          <NavBarShowContent
            items={[
              { value: '/', label: `${translate('common:home')}` },
              { value: '', label: `${translate('common:search')}` },
            ]}
          />

          <Row>
            <Col xs={0} xl={24}>
              <ListSelect
                selectedBrand={this.props.selectedBrand}
                selectedCategory={this.props.selectedCategory}
                selectedState={this.props.selectedState}
                selectedNewsType={this.props.selectedNewsType}
                selectedPrice={Number(this.props.minPrice) > 0 ? `${this.props.minPrice}-${this.props.maxPrice}` : undefined}
                selectedWeightRange={this.props.selectedWeightRange}
                brands={this.props.brands}
                categories={this.props.categories}
                weightRanges={this.props.weightRanges}
                handleFiltersChange={this.props.searchReducers.handleFiltersChange}
                updateSearchUrl={this.updateSearchUrl}
                updateBrands={this.updateBrands}
              />
            </Col>
          </Row>

          <NavLocation
            openModalFilter={this.openModalFilter}
            loading={this.props.loading}
            provinces={this.props.provinces}
            sortBy={this.props.sortBy}
            selectedProvince={this.props.selectedProvince}
            handleFiltersChange={this.props.searchReducers.handleFiltersChange}
            handleSortChange={this.props.searchReducers.handleSortChange}
          />

          <Row>
            <Col xs={24} xl={0}>
              {this.state.isOpenModalFilter && (
                <ListSelectMobile
                  selectedBrand={this.props.selectedBrand}
                  selectedCategory={this.props.selectedCategory}
                  selectedState={this.props.selectedState}
                  selectedNewsType={this.props.selectedNewsType}
                  selectedPrice={Number(this.props.minPrice) > 0 ? `${this.props.minPrice}-${this.props.maxPrice}` : undefined}
                  selectedWeightRange={this.props.selectedWeightRange}
                  brands={this.props.brands}
                  categories={this.props.categories}
                  weightRanges={this.props.weightRanges}
                  handleFiltersChange={this.props.searchReducers.handleFiltersChange}
                  updateSearchUrl={this.updateSearchUrl}
                  closeFilterModalMobile={this.closeModalFilter}
                />
              )}
            </Col>
          </Row>

          {this.props.data && this.props.data.length > 0 ? (
            <DetailSearchPage
              loading={this.props.loading}
              data={this.props.data}
              total={this.props.total}
              pageNumber={this.props.pageNumber}
              pageSize={this.props.pageSize}
              getData={this.props.getData}
              profileState={this.props.profileState}
              changeFollowStatus={this.changeFollowStatus}
              isMobile={this.state.isMobile}
            />
          ) : (
              <Empty description={translate('search-detail:no-data')} style={{ marginTop: '24px', textAlign: 'center' }} />
            )}
        </CommonLayout>
      </Fragment>
    );
  }
}

export const SearchDetailsScreen = withNamespaces('search-detail')(BaseSearchDetailsScreen);
