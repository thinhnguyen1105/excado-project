import React, { Component } from 'react';
import ShopNewsDetailScreen from '../modules/machine-news/screens/ShopNewsDetailScreen/ShopNewsDetailScreen';
import { Shop, News } from '../services/service-proxies';
import { NextContext } from 'next';
import { getServiceProxy } from '../services';
import { Router } from '../routes';
import { config } from '../config';
import { withRematch, initStore, ProfileState, SelectOption, SearchState, SearchReducers, SearchEffects, FollowState, FollowReducers, FollowEffects, PriceRange } from '../store';
import * as jsCookie from 'js-cookie';

interface Props {
  shopInfo: Shop;
  newsInfo: News;
  profileState: ProfileState;
  resultSearchNewestPost: { data: any[], before?: string, after?: string };
  searchState: SearchState;
  searchReducers: SearchReducers & SearchEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  handleFiltersChange: (payload: { [key: string]: any }) => void;
}
interface State { }
class ShopNewsDetail extends Component<Props, State> {
  static async getInitialProps(context: NextContext) {
    let newsInfo: News;
    let resultSearchNewestPost: any;
    let newMachine: any;
    try {
      let serviceProxies: any;
      if (!context.req) {
        const idToken = jsCookie.get('token');
        serviceProxies = getServiceProxy(idToken);
      }
      else {
        serviceProxies = getServiceProxy((context.req as any).cookies.token);
      }
      const newsId = context.asPath.split('/')[context.asPath.split('/').length - 1];

      [newsInfo, resultSearchNewestPost, newMachine] = await Promise.all([
        serviceProxies.findNewsById(newsId),
        serviceProxies.searchNewsMostFollow(
          (context.req as any).shopInfo._id,
          4,
          'counterView',
          '_id',
          undefined,
          undefined,
        ),
        serviceProxies.searchElasticsearch(
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
          4,
          'elasticsearchCreatedAt|desc',
          undefined,
          undefined,
        ),
      ]);

      (context as any).store.dispatch.searchModel.getDataNewMachineSuccess(newMachine);
    } catch (error) {
      if (context.res) {
        (context.res as any).redirect(`${config.url.main}/not-found`);
      } else {
        Router.push(`${config.url.main}/not-found`);
      }
    }

    return {
      shopInfo: (context.req as any).shopInfo,
      newsInfo,
      resultSearchNewestPost,
    };
  }

  render() {
    return (
      <div>
        <ShopNewsDetailScreen
          newMachine={this.props.searchState.dataTotal.dataNewMachine}
          resultSearchNewestPost={this.props.resultSearchNewestPost}
          handleFiltersChange={this.props.handleFiltersChange}
          shopInfo={this.props.shopInfo}
          newsInfo={this.props.newsInfo}
          profileState={this.props.profileState}
          searchState={this.props.searchState}
          searchReducers={this.props.searchReducers}
          followState={this.props.followState}
          followReducers={this.props.followReducers}
        />
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    searchState: rootState.searchModel,
    followState: rootState.followModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    handleFiltersChange: rootReducer.searchModel.handleFiltersChange,
    searchReducers: rootReducer.searchModel,
    followReducers: rootReducer.followModel,
  };
};
export default withRematch(initStore, mapState, mapDispatch)(ShopNewsDetail);
