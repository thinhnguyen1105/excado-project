import * as React from 'react';
import { Row, Tabs, Button, Spin } from 'antd';
import { ProfileState, ProfileEffects, ProfileReducers, FollowState, FollowReducers, FollowEffects } from '@client/store';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import MachineItem from '@client/components/MachineItem/MachineItem';
import UserInfo from './components/UserInfo';
import FollowedListTitle from './components/FollowedListTitle';
import './FollowedListScreen.less';
import { Brand, User } from '../../../../services/service-proxies';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '../../../../services';
import { isMobile } from 'react-device-detect';
import { getImageUrl, newsTypeConst } from '@client/core';
import DetailMachineBoxHorizontal from '../SearchDetailsScreen/components/DetailMachineBoxHorizontal';
import { withNamespaces } from '@client/i18n';

import Head from 'next/head';
import { config } from '@client/config';
interface Props {
  topBrands: Brand[];
  searchKeyword: string;
  data: any;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  profileData: User;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  t: (key: string) => string;
}
interface State { }

const TabPane = Tabs.TabPane;
const Fragment = React.Fragment;

class FollowedListScreen extends React.PureComponent<Props, State> {
  state = {
    sellData: {
      data: this.props.data.filter((item: any) => item.newsType === newsTypeConst.SELL),
      before: undefined,
      after: undefined,
    },
    buyData: {
      data: this.props.data.filter((item: any) => item.newsType === newsTypeConst.BUY),
      before: undefined,
      after: undefined,
    },
    rentData: {
      data: this.props.data.filter((item: any) => item.newsType === newsTypeConst.RENT),
      before: undefined,
      after: undefined,
    },
    leaseData: {
      data: this.props.data.filter((item: any) => item.newsType === newsTypeConst.LEASE),
      before: undefined,
      after: undefined,
    },
    currentTab: 'SELL',
    isBusy: false,
  };

  onNextPage = async () => {
    this.setState({ isBusy: true });
    const idToken = await firebase.auth().currentUser!.getIdToken();
    const serviceProxies = getServiceProxy(idToken);
    if (this.state.currentTab === 'SELL') {
      const data = await serviceProxies.findFollow(
        (this.props.profileState.authUser as any).id,
        'news',
        'SELL',
        16,
        '_id',
        undefined,
        this.state.sellData.after,
      );
      this.setState({ sellData: data, isBusy: false });
    } else if (this.state.currentTab === 'BUY') {
      const data = await serviceProxies.findFollow(
        (this.props.profileState.authUser as any).id,
        'news',
        'BUY',
        16,
        '_id',
        undefined,
        this.state.buyData.after,
      );
      this.setState({ buyData: data, isBusy: false });
    } else if (this.state.currentTab === 'RENT') {
      const data = await serviceProxies.findFollow(
        (this.props.profileState.authUser as any).id,
        'news',
        'RENT',
        16,
        '_id',
        undefined,
        this.state.rentData.after,
      );
      this.setState({ rentData: data, isBusy: false });
    } else if (this.state.currentTab === 'LEASE') {
      const data = await serviceProxies.findFollow(
        (this.props.profileState.authUser as any).id,
        'news',
        'LEASE',
        16,
        '_id',
        undefined,
        this.state.leaseData.after,
      );
      this.setState({ leaseData: data, isBusy: false });
    }
  }

  onPreviousPage = async () => {
    this.setState({ isBusy: true });
    const idToken = await firebase.auth().currentUser!.getIdToken();
    const serviceProxies = getServiceProxy(idToken);
    if (this.state.currentTab === 'SELL') {
      const data = await serviceProxies.findFollow(
        (this.props.profileState.authUser as any).id,
        'news',
        'SELL',
        16,
        '_id',
        this.state.sellData.before,
        undefined,
      );
      this.setState({ sellData: data, isBusy: false });
    } else if (this.state.currentTab === 'BUY') {
      const data = await serviceProxies.findFollow(
        (this.props.profileState.authUser as any).id,
        'news',
        'BUY',
        16,
        '_id',
        this.state.buyData.before,
        undefined,
      );
      this.setState({ buyData: data, isBusy: false });
    } else if (this.state.currentTab === 'RENT') {
      const data = await serviceProxies.findFollow(
        (this.props.profileState.authUser as any).id,
        'news',
        'RENT',
        16,
        '_id',
        this.state.rentData.before,
        undefined,
      );
      this.setState({ rentData: data, isBusy: false });
    } else if (this.state.currentTab === 'LEASE') {
      const data = await serviceProxies.findFollow(
        (this.props.profileState.authUser as any).id,
        'news',
        'LEASE',
        16,
        '_id',
        this.state.leaseData.before,
        undefined,
      );
      this.setState({ leaseData: data, isBusy: false });
    }
  }

  changeFollowStatus = async (starStatus: string, id: string) => {
    if (starStatus === 'filled') {
      await this.props.followReducers.unfollowNews({
        userId: (this.props.profileState.authUser as any).id,
        newsId: id,
      });
      if (this.state.currentTab === 'SELL') {
        this.setState({
          sellData: {
            ...this.state.sellData,
            data: this.state.sellData.data.filter((value: any) => value._id !== id),
          },
        });
      } else if (this.state.currentTab === 'BUY') {
        this.setState({
          buyData: {
            ...this.state.buyData,
            data: this.state.buyData.data.filter((value: any) => value._id !== id),
          },
        });
      } else if (this.state.currentTab = 'RENT') {
        this.setState({
          rentData: {
            ...this.state.rentData,
            data: this.state.rentData.data.filter((value: any) => value._id !== id),
          },
        });
      } else if (this.state.currentTab = 'LEASE') {
        this.setState({
          leaseData: {
            ...this.state.leaseData,
            data: this.state.leaseData.data.filter((value: any) => value._id !== id),
          },
        });
      }
    } else {
      await this.props.followReducers.followNews({
        userId: (this.props.profileState.authUser as any).id,
        newsId: id,
      });
    }
  }

  render() {
    const renderSellFollowedList = this.state.sellData.data.map((item: any, index: any) => {
      return (
        !isMobile ?
          <MachineItem
            key={index}
            lg={6}
            md={6}
            sm={24}
            xs={24}
            linkRedirect={`/bai-dang/${item._id}`}
            id={item._id}
            starStatus={item.isFollowing ? 'filled' : 'outlined'}
            imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
            title={item.title}
            price={item.price}
            newsState={item.state}
            location={item.location ? item.location.name : ''}
            ownerName={item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email
              ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : ''}
            changeFollowStatus={this.changeFollowStatus}
            ownerId={item.owner ? item.owner._id : ''}
            currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
          /> :
          <DetailMachineBoxHorizontal
            id={item._id}
            key={index}
            imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
            title={item.title}
            price={item.price}
            linkRedirect={`/bai-dang/${item._id}`}
            location={item.location ? item.location.name : ''}
            newsState={item.state}
            typeOfMachine={item.cateboryId ? (item.categoryId as any).name : ''}
            brand={item.brand ? (item.brand as any).name : ''}
            owner={item.owner}
            starStatus={item.isFollowing ? 'filled' : 'outlined'}
            changeFollowStatus={this.changeFollowStatus}
            ownerId={item.owner ? item.owner._id : ''}
            currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
          />
      );
    });
    const renderBuyFollowedList = this.state.buyData.data.map((item: any, index: any) => {
      return (
        !isMobile ?
          <MachineItem
            key={index}
            lg={6}
            md={6}
            sm={24}
            xs={24}
            linkRedirect={`/bai-dang/${item._id}`}
            id={item._id}
            starStatus={item.isFollowing ? 'filled' : 'outlined'}
            imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
            title={item.title}
            price={item.price}
            newsState={item.state}
            location={item.location ? item.location.name : ''}
            ownerName={item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email
              ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : ''}
            changeFollowStatus={this.changeFollowStatus}
            ownerId={item.owner ? item.owner._id : ''}
            currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
          /> :
          <DetailMachineBoxHorizontal
            id={item._id}
            key={index}
            imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
            title={item.title}
            price={item.price}
            linkRedirect={`/bai-dang/${item._id}`}
            location={item.location ? (item.location as any).name : ''}
            newsState={item.state}
            typeOfMachine={item.categoryId ? (item.categoryId as any).name : ''}
            brand={item.brand ? (item.brand as any).name : ''}
            owner={item.owner}
            starStatus={item.isFollowing ? 'filled' : 'outlined'}
            changeFollowStatus={this.changeFollowStatus}
            ownerId={item.owner ? item.owner._id : ''}
            currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
          />
      );
    });
    const renderRentFollowedList = this.state.rentData.data.map((item: any, index: any) => {
      return (
        !isMobile ?
          <MachineItem
            key={index}
            lg={6}
            md={6}
            sm={24}
            xs={24}
            linkRedirect={`/bai-dang/${item._id}`}
            id={item._id}
            starStatus={item.isFollowing ? 'filled' : 'outlined'}
            imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
            title={item.title}
            price={item.price}
            newsState={item.state}
            location={item.location ? item.location.name : ''}
            ownerName={item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email
              ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : ''}
            changeFollowStatus={this.changeFollowStatus}
            ownerId={item.owner ? item.owner._id : ''}
            currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
          /> :
          <DetailMachineBoxHorizontal
            id={item._id}
            key={index}
            imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
            title={item.title}
            price={item.price}
            linkRedirect={`/bai-dang/${item._id}`}
            location={item.location ? (item.location as any).name : ''}
            newsState={item.state}
            typeOfMachine={item.categoryId ? (item.categoryId as any).name : ''}
            brand={item.brand ? (item.brand as any).name : ''}
            owner={item.owner}
            starStatus={item.isFollowing ? 'filled' : 'outlined'}
            changeFollowStatus={this.changeFollowStatus}
            ownerId={item.owner ? item.owner._id : ''}
            currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
          />
      );
    });
    const renderLeaseFollowedList = this.state.leaseData.data.map((item: any, index: any) => {
      return (
        !isMobile ?
          <MachineItem
            key={index}
            lg={6}
            md={6}
            sm={24}
            xs={24}
            linkRedirect={`/bai-dang/${item._id}`}
            id={item._id}
            starStatus={item.isFollowing ? 'filled' : 'outlined'}
            imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
            title={item.title}
            price={item.price}
            newsState={item.state}
            location={item.location ? item.location.name : ''}
            ownerName={item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email
              ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : ''}
            changeFollowStatus={this.changeFollowStatus}
            ownerId={item.owner ? item.owner._id : ''}
            currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
          /> :
          <DetailMachineBoxHorizontal
            id={item._id}
            key={index}
            imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
            title={item.title}
            price={item.price}
            linkRedirect={`/bai-dang/${item._id}`}
            location={item.location ? (item.location as any).name : ''}
            newsState={item.state}
            typeOfMachine={item.categoryId ? (item.categoryId as any).name : ''}
            brand={item.brand ? (item.brand as any).name : ''}
            owner={item.owner}
            starStatus={item.isFollowing ? 'filled' : 'outlined'}
            changeFollowStatus={this.changeFollowStatus}
            ownerId={item.owner ? item.owner._id : ''}
            currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
          />
      );
    });

    return (
      <div className='followed-list-screen'>
        <Head>
          <title>{`Tin đã lưu | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='og:url' content={`timmay.vn`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Tin đã lưu | timmay.vn`} />
          <meta property='og:image:url' content={'/static/images/logo-timmay.png'} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>
        <CommonLayout
          updateFilters={this.props.updateFilters}
          topBrands={this.props.topBrands}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={true}
          hasMenuItems={true}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        >
          <Spin spinning={this.state.isBusy}>
            <Row>
              <FollowedListTitle t={this.props.t} />
              {this.props.profileState.authUser && (
                <UserInfo
                  profileState={{
                    ...this.props.profileState,
                    authUser: {
                      ...this.props.profileState.authUser,
                      avatarUrl: this.props.profileData ? this.props.profileData.avatarUrl : undefined as any,
                    },
                  }}
                  t={this.props.t}
                />
              )}
            </Row>
            <Tabs defaultActiveKey='SELL' tabBarStyle={{ background: '#fff', margin: 0 }} onChange={(activeKey) => this.setState({ currentTab: activeKey })}>
              <TabPane tab={this.props.t('common:sell')} key='SELL'>
                <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {this.state.sellData.data.length === 0 ?
                    <div className='no-data'>
                      {this.props.t('common:no-data')}
                    </div> :
                    <Fragment>
                      {renderSellFollowedList}
                    </Fragment>}
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                  {this.state.sellData.before
                    ? <Button onClick={() => { this.onPreviousPage(); }} style={{ marginRight: 10 }} ><a>{this.props.t('common:previous')}</a></Button>
                    : <div></div>
                  }
                  {this.state.sellData.after
                    ? <Button onClick={() => { this.onNextPage(); }} style={{ marginRight: 10 }} type='primary' ><a>{this.props.t('common:next')}</a></Button>
                    : <div></div>
                  } </Row>
              </TabPane>
              <TabPane tab={this.props.t('common:buy')} key='BUY'>
                <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {this.state.buyData.data.length === 0 ?
                    <div className='no-data'>
                      {this.props.t('common:no-data')}
                    </div> :
                    <Fragment>
                      {renderBuyFollowedList}
                    </Fragment>}
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                  {this.state.buyData.before
                    ? <Button onClick={() => { this.onPreviousPage(); }} style={{ marginRight: 10 }} ><a>{this.props.t('common:previous')}</a></Button>
                    : <div></div>
                  }
                  {this.state.buyData.after
                    ? <Button onClick={() => { this.onNextPage(); }} style={{ marginRight: 10 }} type='primary' ><a>{this.props.t('common:next')}</a></Button>
                    : <div></div>
                  }</Row>
              </TabPane>
              <TabPane tab={this.props.t('common:rent')} key='RENT'>
                <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {this.state.rentData.data.length === 0 ?
                    <div className='no-data'>
                      {this.props.t('common:no-data')}
                    </div> :
                    <Fragment>
                      {renderRentFollowedList}
                    </Fragment>}
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                  {this.state.rentData.before
                    ? <Button onClick={() => { this.onPreviousPage(); }} style={{ marginRight: 10 }} ><a>{this.props.t('common:previous')}</a></Button>
                    : <div></div>
                  }
                  {this.state.rentData.after
                    ? <Button onClick={() => { this.onNextPage(); }} style={{ marginRight: 10 }} type='primary' ><a>{this.props.t('common:next')}</a></Button>
                    : <div></div>
                  }</Row>
              </TabPane>
              <TabPane tab={this.props.t('common:lease')} key='LEASE'>
                <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {this.state.leaseData.data.length === 0 ?
                    <div className='no-data'>
                      {this.props.t('common:no-data')}
                    </div> :
                    <Fragment>
                      {renderLeaseFollowedList}
                    </Fragment>}
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                  {this.state.sellData.before
                    ? <Button onClick={() => { this.onPreviousPage(); }} style={{ marginRight: 10 }} ><a>{this.props.t('common:previous')}</a></Button>
                    : <div></div>
                  }
                  {this.state.sellData.after
                    ? <Button onClick={() => { this.onNextPage(); }} style={{ marginRight: 10 }} type='primary' ><a>{this.props.t('common:next')}</a></Button>
                    : <div></div>
                  }</Row>
              </TabPane>
            </Tabs>
          </Spin>
        </CommonLayout>
      </div>
    );
  }
}

export default withNamespaces('common')(FollowedListScreen);
