import * as React from 'react';
import { ProfileState, ProfileEffects, ProfileReducers, FollowEffects, FollowReducers, FollowState } from '@client/store';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import UserContact from './components/UserContact';
import UserNewsDetail from './components/UserNewsDetail';
import { Row, Col, message } from 'antd';
import { Brand, ElasticSearchResult, User } from '../../../../services/service-proxies';
import { getServiceProxy } from '@client/services';
import { newsTypes } from '@client/core';
import './UserNewsScreen.less';
import CallMessButtonMobile from '../DetailNewsScreen/components/CallMessButtonMobile';
import { withNamespaces } from '@client/i18n';

import Head from 'next/head';
import { config } from '@client/config';
interface Props {
  newsResult: ElasticSearchResult;
  profileData: Partial<User>;
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
  t: (key: string) => string;
}
interface State {
  loading: boolean;
  activeTab: string;
  first: number;
  sortBy: string;
  SELL?: ElasticSearchResult;
  BUY?: ElasticSearchResult;
  RENT?: ElasticSearchResult;
  LEASE?: ElasticSearchResult;
  profileData: Partial<User>;
}

class UserNewsScreen extends React.PureComponent<Props, State> {
  state: State = {
    loading: false,
    activeTab: newsTypes[0].value,
    first: 12,
    sortBy: 'elasticsearchCreatedAt|desc',
    SELL: this.props.newsResult,
    profileData: this.props.profileData,
  };

  changeFollowStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        await this.setState({
          [this.state.activeTab]: {
            ...this.state[this.state.activeTab],
            data: this.state[this.state.activeTab].data.map((value: any) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: false,
                };
              } else return value;
            }),
          },
        } as any);
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        await this.setState({
          [this.state.activeTab]: {
            ...this.state[this.state.activeTab],
            data: this.state[this.state.activeTab].data.map((value: any) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: true,
                };
              } else return value;
            }),
          },
        } as any);
      }
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(`${this.props.t('common:login-required-message')}`);
    }
  }

  changeFollowUserStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowUser({
          authId: (this.props.profileState.authUser as any).id,
          userId: id,
        });
        await this.setState({
          profileData: {
            ...this.state.profileData,
            isFollowing: false,
            counterFollow: (this.state.profileData as any).counterFollow - 1,
          },
        });
      } else {
        await this.props.followReducers.followUser({
          authId: (this.props.profileState.authUser as any).id,
          userId: id,
        });
        await this.setState({
          profileData: {
            ...this.state.profileData,
            isFollowing: true,
            counterFollow: (this.state.profileData as any).counterFollow + 1,
          },
        });
      }
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(`${this.props.t('common:login-required-message')}`);
    }
  }

  activeTabChange = async (payload: { activeTab: string }) => {
    if (this.state[payload.activeTab]) {
      this.setState({
        activeTab: payload.activeTab,
      });
    } else {
      this.setState({
        loading: true,
      });

      try {
        const serviceProxies = getServiceProxy();
        const newsResult = await serviceProxies.searchElasticsearch(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          payload.activeTab,
          undefined,
          this.state.profileData._id,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          this.state.first,
          this.state.sortBy,
          undefined,
          undefined,
        );

        this.setState({
          loading: false,
          [payload.activeTab]: newsResult,
          activeTab: payload.activeTab,
        } as any);
      } catch (error) {
        message.error(error.message);
        this.setState({
          loading: false,
        });
      }
    }
  }

  getNextPage = async () => {
    if (this.state[this.state.activeTab].after) {
      this.setState({
        loading: true,
      });

      try {
        const serviceProxies = getServiceProxy();
        const newsResult = await serviceProxies.searchElasticsearch(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          this.state.activeTab,
          undefined,
          this.state.profileData._id,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          this.state.first,
          this.state.sortBy,
          undefined,
          this.state[this.state.activeTab].after,
        );

        this.setState({
          loading: false,
          [this.state.activeTab]: newsResult,
        } as any);
      } catch (error) {
        message.error(error.message);
        this.setState({
          loading: false,
        });
      }
    }
  }

  getPrevPage = async () => {
    if (this.state[this.state.activeTab].before) {
      this.setState({
        loading: true,
      });

      try {
        const serviceProxies = getServiceProxy();
        const newsResult = await serviceProxies.searchElasticsearch(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          this.state.activeTab,
          undefined,
          this.state.profileData._id,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          this.state.first,
          this.state.sortBy,
          this.state[this.state.activeTab].before,
          undefined,
        );

        this.setState({
          loading: false,
          [this.state.activeTab]: newsResult,
        } as any);
      } catch (error) {
        message.error(error.message);
        this.setState({
          loading: false,
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{`Người dùng ${this.props.profileData.fullName ? this.props.profileData.fullName : this.props.profileData.email ? this.props.profileData.email : this.props.profileData.phoneNo ? this.props.profileData.phoneNo : ''} | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content={this.props.profileData.description} />
          <meta property='og:url' content={`${config.url.main}/nguoi-dung/${this.props.profileData._id}`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Người dùng ${this.props.profileData.fullName} | timmay.vn`} />
          <meta property='og:description' content={this.props.profileData.description} />
          <meta property='og:image:url' content={this.props.profileData.avatarUrl ? this.props.profileData.avatarUrl : `/static/images/logo-timmay.png`} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>
        <CommonLayout
          topBrands={this.props.topBrands}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={true}
          hasMenuItems={true}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          updateFilters={this.props.updateFilters}
        >
          <Row className='user-screen'>
            <Col lg={6} className='user-screen-contact'>
              <UserContact
                profileState={{
                  ...this.props.profileState,
                  authUser: {
                    ...this.props.profileState.authUser,
                    avatarUrl: this.state.profileData && this.state.profileData.avatarUrl ? this.state.profileData.avatarUrl : undefined,
                  } as any,
                }}
                profileData={this.state.profileData}
                changeFollowUserStatus={this.changeFollowUserStatus}
                starStatus={this.state.profileData.isFollowing ? 'filled' : ''}
                t={this.props.t}
              />
            </Col>

            <Col lg={18} className='user-screen-news'>
              <UserNewsDetail
                hasNext={Boolean(this.state[this.state.activeTab].after)}
                hasPrev={Boolean(this.state[this.state.activeTab].before)}
                getNextPage={this.getNextPage}
                getPrevPage={this.getPrevPage}
                data={this.state[this.state.activeTab].data}
                loading={this.state.loading}
                activeTab={this.state.activeTab}
                activeTabChange={this.activeTabChange}
                profileState={{
                  ...this.props.profileState,
                  authUser: {
                    ...this.props.profileState.authUser,
                    avatarUrl: this.state.profileData && this.state.profileData.avatarUrl ? this.state.profileData.avatarUrl : undefined,
                  } as any,
                }}
                changeFollowStatus={this.changeFollowStatus}
                t={this.props.t}
              />
            </Col>
          </Row>
          {this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id !== this.props.profileData._id
            ? <CallMessButtonMobile phoneNo={this.props.profileData.phoneNo} t={this.props.t} />
            : null}

        </CommonLayout>
      </React.Fragment>
    );
  }
}

export default withNamespaces('user-page')(UserNewsScreen);
