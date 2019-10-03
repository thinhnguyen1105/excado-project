import React, { Component, Fragment } from 'react';
import NavBarStore from '@client/modules/machine-news/screens/ShopInfoScreen/components/NavBarStore';
import ItemShopNewsDetail from './components/ItemShopNewsDetail';
import { Shop, News } from '@client/services/service-proxies';
import { ProfileState, FollowState, FollowReducers, FollowEffects } from '@client/store';
import { SearchState, SearchReducers, SearchEffects } from '@client/store/';
import { withNamespaces } from '@client/i18n';

import Head from 'next/head';
import { config } from '@client/config';
import { getShopUrl } from '@client/core';
interface Props {
  shopInfo: Shop;
  newsInfo: News;
  profileState: ProfileState;
  resultSearchNewestPost: { data: any[], before?: string, after?: string };
  newMachine: { data: any[], before?: string, after?: string };
  handleFiltersChange: (payload: { [key: string]: any }) => void;
  searchState: SearchState;
  searchReducers: SearchReducers & SearchEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  t: (key: string) => string;
}
interface State { }
class ShopNewsDetailScreen extends Component<Props, State> {
  render() {
    return (
      <Fragment>
        <Head>
          <title>{`${this.props.newsInfo.title} | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content={this.props.newsInfo.description} />
          <meta property='og:url' content={getShopUrl(this.props.shopInfo.domain)} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`${this.props.newsInfo.title} | timmay.vn`} />
          <meta property='og:description' content={this.props.newsInfo.description} />
          <meta property='og:image:url' content={this.props.newsInfo.imageUrls.length > 0 ? this.props.newsInfo.imageUrls[0] : '/static/images/logo-timmay.png'} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>
        <NavBarStore
          linkLogoStore={this.props.shopInfo.logoImage}
          shopName={this.props.shopInfo.name}
          t={this.props.t}
        />

        <ItemShopNewsDetail
          shopInfo={this.props.shopInfo}
          newMachine={this.props.newMachine}
          resultSearchNewestPost={this.props.resultSearchNewestPost}
          shopAddress={this.props.shopInfo.address}
          handleFiltersChange={this.props.handleFiltersChange}
          newsInfo={this.props.newsInfo}
          profileState={this.props.profileState}
          searchState={this.props.searchState}
          searchReducers={this.props.searchReducers}
          followState={this.props.followState}
          followReducers={this.props.followReducers}
          t={this.props.t}
        />
      </Fragment>
    );
  }
}

export default withNamespaces('shop-news-detail')(ShopNewsDetailScreen);
