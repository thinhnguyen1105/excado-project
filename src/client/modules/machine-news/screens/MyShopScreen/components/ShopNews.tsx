import React from 'react';
import './ShopNews.less';
import { SearchFilters, FiltersChangePayload, ProfileState, ProfileReducers, ProfileEffects, FollowReducers, FollowEffects } from '@client/store';
import { News, Shop, Category, Brand, WeightRange } from '@client/services/service-proxies';
import { getServiceProxy } from '@client/services';
import { message, Spin, Col, Row } from 'antd';
import ListMachine from '../../ShopNewsScreen/components/ListMachine';
import { ListSelect } from '../../SearchDetailsScreen/components/ListSelect';
import SearchBar from '../../ShopNewsScreen/components/SearchBar';
import { withNamespaces } from '@client/i18n';

interface Props {
  shopInfo: Shop;
  categories: Category[];
  brands: Brand[];
  weightRanges: WeightRange[];
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followReducers: FollowReducers & FollowEffects;
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
class ShopNews extends React.PureComponent<Props, State> {
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
    data: [],
    first: 12,
    sortBy: 'elasticsearchCreatedAt|desc', // fieldName|sortOrder
    before: undefined,
    after: undefined,
    loading: false,
  };

  componentDidMount() {
    this.handleFiltersChange({});
  }

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
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(this.props.t('detail-news:notification-login'));
    }
  }

  render() {
    return (
      <Row className='outline-body' gutter={16}>
        <Col className='filter-my-shop' xs={24}>
          <SearchBar
            searchKeywords={this.state.filters.keyword}
            handleSearchChange={this.handleSearchChange}
            handleFiltersChange={this.handleFiltersChange}
            t={this.props.t}
          />

          <ListSelect
            brands={this.props.brands}
            categories={this.props.categories}
            weightRanges={this.props.weightRanges}
            selectedNewsType={this.state.filters.newsType}
            selectedBrand={this.state.filters.brand}
            selectedCategory={this.state.filters.category}
            selectedState={this.state.filters.state}
            selectedPrice={Number(this.state.filters.minPrice) > 0 ? `${this.state.filters.minPrice}-${this.state.filters.maxPrice}` : undefined}
            selectedWeightRange={this.state.filters.weightRange}
            handleFiltersChange={this.handleFiltersChange}
          />

          <Spin spinning={this.state.loading}>
            <ListMachine
              data={this.state.data}
              hasNext={Boolean(this.state.after)}
              hasPrev={Boolean(this.state.before)}
              getNextPage={this.getNextPage}
              getPrevPage={this.getPrevPage}
              profileState={this.props.profileState}
              changeFollowStatus={this.changeFollowItemStatus}
              t={this.props.t}
            />
          </Spin>
        </Col>
      </Row>
    );
  }
}

export default withNamespaces('news-detail')(ShopNews);
