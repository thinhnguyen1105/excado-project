import React, { Component } from 'react';
import ShopNewsScreen from '../modules/machine-news/screens/ShopNewsScreen/ShopNewsScreen';
import { Brand, Category, Shop, ElasticSearchResult, WeightRange } from '../services/service-proxies';
import { withRematch, initStore, ProfileState, FollowEffects, FollowReducers, ProfileEffects, ProfileReducers } from '../store';
import { NextContext } from 'next';
import * as jsCookie from 'js-cookie';
import { getServiceProxy } from '../services';
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
}
interface State { }
class AllProducts extends Component<Props, State> {
  static async getInitialProps(context: NextContext) {
    let serviceProxy: any;
    if (!context.req) {
      const idToken = jsCookie.get('token');
      serviceProxy = getServiceProxy(idToken);
    }
    else {
      serviceProxy = getServiceProxy((context.req as any).cookies.token);
    }
    const [newsResult, resultSearchNewestPost, categories, brands, weightRanges] = await Promise.all([
      serviceProxy.searchElasticsearch(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        (context.req as any).shopInfo._id,
        undefined,
        undefined,
        undefined,
        undefined,
        12,
        'elasticsearchCreatedAt|desc',
        undefined,
        undefined,
      ),
      serviceProxy.searchNewsMostFollow(
        (context.req as any).shopInfo._id,
        4,
        'counterView',
        '_id',
        undefined,
        undefined,
      ),
      serviceProxy.findCategories(),
      serviceProxy.findBrands(
        undefined,
        30,
        'slug|asc',
        undefined,
        undefined,
      ),
      serviceProxy.getAllWeightRanges(),
    ]);

    return {
      newsResult,
      shopInfo: (context.req as any).shopInfo,
      resultSearchNewestPost,
      categories: categories.data,
      brands: brands.data,
      weightRanges: weightRanges.data,
    };
  }

  render() {
    return (
      <div>
        <ShopNewsScreen
          resultSearchNewestPost={this.props.resultSearchNewestPost}
          newsResult={this.props.newsResult}
          shopInfo={this.props.shopInfo}
          weightRanges={this.props.weightRanges}
          categories={this.props.categories}
          brands={this.props.brands}
          profileReducers={this.props.profileReducers}
          profileState={this.props.profileState}
          followReducers={this.props.followReducers}
        />
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileMode,
    followReducers: rootReducer.followModel,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(AllProducts);
