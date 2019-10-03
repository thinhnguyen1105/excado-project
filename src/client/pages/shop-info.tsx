import React, { Component } from 'react';
import ShopInfoScreen from '../modules/machine-news/screens/ShopInfoScreen/ShopInfoScreen';
import { NextContext } from 'next';
import { Shop, News } from '../services/service-proxies';
import { initStore, withRematch, ProfileState, ProfileEffects, ProfileReducers, FollowState, FollowReducers, FollowEffects } from '../store';
import { getServiceProxy } from '../services';
import * as jsCookie from 'js-cookie';

interface Props {
  shopInfo: Shop;
  newsData: News[];
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  resultSearchNewestPost: any;
}
interface State { }
class ShopInfo extends Component<Props, State> {
  static async getInitialProps(context: NextContext) {
    let serviceProxy: any;
    if (!context.req) {
      const idToken = jsCookie.get('token');
      serviceProxy = getServiceProxy(idToken);
    }
    else {
      serviceProxy = getServiceProxy((context.req as any).cookies.token);
    }
    const [newsData, resultSearchNewestPost] = await Promise.all([
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
    ]);
    return {
      shopInfo: (context.req as any).shopInfo,
      resultSearchNewestPost,
      newsData: newsData.data,
    };
  }

  render() {
    return (
      <div>
        <ShopInfoScreen
          newsData={this.props.newsData}
          shopInfo={this.props.shopInfo}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          followState={this.props.followState}
          followReducers={this.props.followReducers}
          resultSearchNewestPost={this.props.resultSearchNewestPost}
        />
      </div>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    followState: rootState.followModel,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    followReducers: rootReducer.followModel,
  };
};

export default withRematch(initStore, mapState, mapDispatch)(ShopInfo);
