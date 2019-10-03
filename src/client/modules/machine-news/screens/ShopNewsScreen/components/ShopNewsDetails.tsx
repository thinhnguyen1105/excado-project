import React, { Component } from 'react';
import { Row, Col, Spin, Icon } from 'antd';
import { ListSelect } from '@client/modules/machine-news/screens/SearchDetailsScreen/components/ListSelect';
import SeeMost from '@client/modules/machine-news/screens/ShopInfoScreen/components/SeeMost';
import SearchBar from './SearchBar';
import ListMachine from './ListMachine';
import './ShopNewsDetails.less';
import { Category, Brand, News } from '../../../../../services/service-proxies';
import { PriceRange, ProfileState } from '../../../../../store';
import { isMobile } from 'react-device-detect';

interface Props {
  loading: boolean;
  data: News[];
  hasNext: boolean;
  hasPrev: boolean;
  categories: Category[];
  brands: Brand[];
  weightRanges: PriceRange[];
  searchKeywords?: string;
  selectedBrand?: string;
  selectedCategory?: string;
  selectedState?: string;
  selectedNewsType?: string;
  minPrice?: number;
  maxPrice?: number;
  selectedWeightRange?: string;
  shopName: string;
  resultSearchNewestPost: { data: any[], before?: string, after?: string };
  profileState: ProfileState;
  getNextPage: () => void;
  getPrevPage: () => void;
  handleSearchChange: (payload: { keyword: string }) => void;
  handleFiltersChange: (payload: { [key: string]: any }) => void;
  changeFollowStatus: (starStatus: string, id: string) => void;
  t: (key: string) => string;
}
interface State {
  isOpenFilter: boolean;
}
export class ShopNewsDetails extends Component<Props, State> {
  state: State = {
    isOpenFilter: false,
  };
  changeStatusFilter = () => {
    this.setState({ isOpenFilter: !this.state.isOpenFilter });
  }
  closeFilterMobile = () => {
    this.setState({ isOpenFilter: false });
  }
  render() {
    return (
      <Row className='outline-body-shop-news-detail' gutter={!isMobile ? 16 : 0}>
        <Col lg={16} md={24} xs={24} sm={24} >
          <Row className='filter-or-select-all-mobile'>
            <Col lg={0} md={0} sm={12} xs={12}>
              <a href='/bai-dang-cua-hang' title={this.props.shopName ? this.props.shopName : ''}>{this.props.t('common:all-products')}</a>
            </Col>
            <Col className='filter-button-mobile' lg={0} md={0} sm={12} xs={12}>
              <a onClick={() => this.changeStatusFilter()}>{this.props.t(`common:filters`)} <Icon type='filter' /></a>
            </Col>
          </Row>

          {this.state.isOpenFilter && isMobile
            ? <Row>
              <SearchBar
                searchKeywords={this.props.searchKeywords}
                handleSearchChange={this.props.handleSearchChange}
                handleFiltersChange={this.props.handleFiltersChange}
                t={this.props.t}
              />

              <ListSelect
                brands={this.props.brands}
                categories={this.props.categories}
                weightRanges={this.props.weightRanges}
                selectedBrand={this.props.selectedBrand}
                selectedCategory={this.props.selectedCategory}
                selectedState={this.props.selectedState}
                selectedNewsType={this.props.selectedNewsType}
                selectedPrice={Number(this.props.minPrice) > 0 ? `${this.props.minPrice}-${this.props.maxPrice}` : undefined}
                selectedWeightRange={this.props.selectedWeightRange}
                handleFiltersChange={this.props.handleFiltersChange}
              />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a onClick={() => this.closeFilterMobile()}>{this.props.t('common:hide-filters')}</a>
              </div>
            </Row>
            : <div></div>
          }
          {!isMobile
            ? <Row>
              <SearchBar
                searchKeywords={this.props.searchKeywords}
                handleSearchChange={this.props.handleSearchChange}
                handleFiltersChange={this.props.handleFiltersChange}
                t={this.props.t}
              />

              <ListSelect
                brands={this.props.brands}
                categories={this.props.categories}
                weightRanges={this.props.weightRanges}
                selectedBrand={this.props.selectedBrand}
                selectedCategory={this.props.selectedCategory}
                selectedState={this.props.selectedState}
                selectedNewsType={this.props.selectedNewsType}
                selectedPrice={Number(this.props.minPrice) > 0 ? `${this.props.minPrice}-${this.props.maxPrice}` : undefined}
                selectedWeightRange={this.props.selectedWeightRange}
                handleFiltersChange={this.props.handleFiltersChange}
              />
            </Row>
            : <div></div>}
          <Spin spinning={this.props.loading}>
            <ListMachine
              data={this.props.data}
              hasNext={this.props.hasNext}
              hasPrev={this.props.hasPrev}
              getNextPage={this.props.getNextPage}
              getPrevPage={this.props.getPrevPage}
              profileState={this.props.profileState}
              changeFollowStatus={this.props.changeFollowStatus}
              t={this.props.t}
            />
          </Spin>
        </Col>

        <Col lg={8} md={24} xs={24} sm={24} >
          <SeeMost
            title={this.props.t('shop-info:most-viewed')}
            dataMachine={this.props.resultSearchNewestPost.data}
          />
        </Col>
      </Row>
    );
  }
}

export default ShopNewsDetails;
