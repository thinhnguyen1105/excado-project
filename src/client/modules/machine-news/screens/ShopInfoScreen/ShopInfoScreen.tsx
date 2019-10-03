import React, { Component, Fragment } from 'react';
import { message } from 'antd';
import NavBarStore from './components/NavBarStore';
import ShopInfoDetails from './components/ShopInfoDetails';
import { Shop, News } from '@client/services/service-proxies';
import { ProfileState, ProfileEffects, ProfileReducers, FollowState, FollowReducers, FollowEffects } from '@client/store';
import { withNamespaces } from '@client/i18n';

import Head from 'next/head';
import { config } from '@client/config';
import { getShopUrl } from '@client/core';
interface Props {
  shopInfo: Shop;
  newsData: News[];
  resultSearchNewestPost: any;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  t: (key: string) => string;
}
interface State { }
class ShopInfoScreen extends Component<Props, State> {
  state = {
    shopInfo: this.props.shopInfo,
    newsData: this.props.newsData,
  };

  changeFollowShopStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowShop({
          authId: (this.props.profileState.authUser as any).id,
          shopId: id,
        });
        this.setState({
          shopInfo: {
            ...this.state.shopInfo,
            isFollowing: false,
          },
        });
      } else {
        await this.props.followReducers.followShop({
          authId: (this.props.profileState.authUser as any).id,
          shopId: id,
        });
        this.setState({
          shopInfo: {
            ...this.state.shopInfo,
            isFollowing: true,
          },
        });
      }
    } else {
      message.warning(`${this.props.t('common:login-required-message')}`);
    }
  }
  changeFollowItemStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.setState({
          newsData: this.state.newsData.map((value: any) => {
            if (value._id === id) {
              return {
                ...value,
                isFollowing: false,
              };
            } else {
              return value;
            }
          }),
        });
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.setState({
          newsData: this.state.newsData.map((value: any) => {
            if (value._id === id) {
              return {
                ...value,
                isFollowing: true,
              };
            } else {
              return value;
            }
          }),
        });
      }
    } else {
      message.warning(`${this.props.t('common:login-required-message')}`);
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
          <meta property='og:image:url' content={this.props.shopInfo.introImages.length > 0 ? this.props.shopInfo.introImages[0] : '/static/images/logo-timmay.png'} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>

        <NavBarStore
          linkLogoStore={this.props.shopInfo.logoImage}
          shopName={this.props.shopInfo.name}
          t={this.props.t}
        />

        <ShopInfoDetails
          newsData={this.state.newsData}
          shopInfo={this.state.shopInfo}
          starStatus={this.state.shopInfo.isFollowing ? 'filled' : ''}
          changeFollowStatus={this.changeFollowShopStatus}
          resultSearchNewestPost={this.props.resultSearchNewestPost}
          changeFollowItemStatus={this.changeFollowItemStatus}
          profileState={this.props.profileState}
          t={this.props.t}
        />
      </Fragment>
    );
  }
}

export default withNamespaces('shop-info')(ShopInfoScreen);
