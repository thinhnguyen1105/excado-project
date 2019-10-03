import * as React from 'react';
import { Row, Tabs, Button, Spin, Empty } from 'antd';
import { ProfileState, ProfileEffects, ProfileReducers, FollowEffects, FollowReducers, FollowState } from '@client/store';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import MachineItem from '@client/components/MachineItem/MachineItem';
import UserInfo from './components/UserInfo';
import UserTitle from './components/UserTitle';
import { Brand, FindNewsResultWithFollow, User } from '../../../../services/service-proxies';
import './DashboardScreen.less';
import { getImageUrl } from '@client/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getServiceProxy } from '../../../../services';
import { isMobile } from 'react-device-detect';
import DetailMachineBoxHorizontal from '../SearchDetailsScreen/components/DetailMachineBoxHorizontal';
import { withNamespaces } from '@client/i18n';
import { config } from '@client/config';
import Head from 'next/head';
const Fragment = React.Fragment;
interface Props {
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  publicData: FindNewsResultWithFollow;
  pendingData: FindNewsResultWithFollow;
  rejectedData: FindNewsResultWithFollow;
  stoppedData: FindNewsResultWithFollow;
  deletedData: FindNewsResultWithFollow;
  currentUserData: Partial<User>;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  t: (key: string) => string;
}
interface State { }

const TabPane = Tabs.TabPane;

class DashboardScreen extends React.PureComponent<Props, State> {
  state = {
    publicData: this.props.publicData,
    pendingData: this.props.pendingData,
    stoppedData: this.props.stoppedData,
    rejectedData: this.props.rejectedData,
    deletedData: this.props.deletedData,
    currentTab: 'PUBLIC',
    isBusy: false,
  };
  onNextPage = async () => {
    this.setState({ isBusy: true });
    const idToken = await firebase.auth().currentUser!.getIdToken();
    const serviceProxies = getServiceProxy(idToken);
    if (this.state.currentTab === 'PUBLIC') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'PUBLIC',
        16,
        'createdAt',
        undefined,
        this.state.publicData.after,
      );
      this.setState({ publicData: data, isBusy: false });
    } else if (this.state.currentTab === 'PENDING') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'PENDING',
        16,
        'createdAt',
        undefined,
        this.state.pendingData.after,
      );
      this.setState({ pendingData: data, isBusy: false });
    } else if (this.state.currentTab === 'REJECTED') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'REJECTED',
        16,
        'createdAt',
        undefined,
        this.state.rejectedData.after,
      );
      this.setState({ rejectedData: data, isBusy: false });
    } else if (this.state.currentTab === 'STOPPED') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'STOPPED',
        16,
        'createdAt',
        undefined,
        this.state.stoppedData.after,
      );
      this.setState({ stoppedData: data, isBusy: false });
    }
    else if (this.state.currentTab === 'DELETED') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'LEASE',
        16,
        'createdAt',
        undefined,
        this.state.deletedData.after,
      );
      this.setState({ deletedData: data, isBusy: false });
    }
  }

  onPreviousPage = async () => {
    this.setState({ isBusy: true });
    const idToken = await firebase.auth().currentUser!.getIdToken();
    const serviceProxies = getServiceProxy(idToken);
    if (this.state.currentTab === 'PUBLIC') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'PUBLIC',
        16,
        'createdAt',
        this.state.publicData.before,
        undefined,
      );
      this.setState({ publicData: data, isBusy: false });
    } else if (this.state.currentTab === 'PENDING') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'PENDING',
        16,
        'createdAt',
        this.state.pendingData.before,
        undefined,
      );
      this.setState({ pendingData: data, isBusy: false });
    } else if (this.state.currentTab === 'REJECTED') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'REJECTED',
        16,
        'createdAt',
        this.state.rejectedData.before,
        undefined,
      );
      this.setState({ rejectedData: data, isBusy: false });
    } else if (this.state.currentTab === 'STOPPED') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'STOPPED',
        16,
        'createdAt',
        this.state.stoppedData.before,
        undefined,
      );
      this.setState({ stoppedData: data, isBusy: false });
    } else if (this.state.currentTab === 'DELETED') {
      const data = await serviceProxies.findNewsByOwner(
        (this.props.profileState.authUser as any).id,
        'DELETED',
        16,
        'createdAt',
        this.state.deletedData.before,
        undefined,
      );
      this.setState({ deletedData: data, isBusy: false });
    }

  }
  changeFollowStatus = async (starStatus: string, id: string) => {
    if (starStatus === 'filled') {
      await this.props.followReducers.unfollowNews({
        userId: (this.props.profileState.authUser as any).id,
        newsId: id,
      });
      if (this.state.currentTab === 'PUBLIC') {
        this.setState({
          publicData: {
            ...this.state.publicData,
            data: this.state.publicData.data.map((value: any) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: false,
                };
              } else {
                return value;
              }
            }),
          },
        });
      } else if (this.state.currentTab === 'PENDING') {
        this.setState({
          pendingData: {
            ...this.state.pendingData,
            data: this.state.pendingData.data.map((value) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: false,
                };
              } else {
                return value;
              }
            }),
          },
        });
      } else if (this.state.currentTab = 'REJECTED') {
        this.setState({
          rejectedData: {
            ...this.state.rejectedData,
            data: this.state.rejectedData.data.map((value) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: false,
                };
              } else {
                return value;
              }
            }),
          },
        });
      } else if (this.state.currentTab = 'STOPPED') {
        this.setState({
          stoppedData: {
            ...this.state.stoppedData,
            data: this.state.stoppedData.data.map((value) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: false,
                };
              } else {
                return value;
              }
            }),
          },
        });
      } else if (this.state.currentTab = 'DELETED') {
        this.setState({
          deletedData: {
            ...this.state.deletedData,
            data: this.state.deletedData.data.map((value) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: false,
                };
              } else {
                return value;
              }
            }),
          },
        });
      }
    } else {
      await this.props.followReducers.followNews({
        userId: (this.props.profileState.authUser as any).id,
        newsId: id,
      });
      if (this.state.currentTab === 'PUBLIC') {
        this.setState({
          publicData: {
            ...this.state.publicData,
            data: this.state.publicData.data.map((value: any) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: true,
                };
              } else {
                return value;
              }
            }),
          },
        });
      } else if (this.state.currentTab === 'PENDING') {
        this.setState({
          pendingData: {
            ...this.state.pendingData,
            data: this.state.pendingData.data.map((value) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: true,
                };
              } else {
                return value;
              }
            }),
          },
        });
      } else if (this.state.currentTab = 'REJECTED') {
        this.setState({
          rejectedData: {
            ...this.state.rejectedData,
            data: this.state.rejectedData.data.map((value) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: true,
                };
              } else {
                return value;
              }
            }),
          },
        });
      } else if (this.state.currentTab = 'STOPPED') {
        this.setState({
          stoppedData: {
            ...this.state.stoppedData,
            data: this.state.stoppedData.data.map((value) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: true,
                };
              } else {
                return value;
              }
            }),
          },
        });
      } else if (this.state.currentTab = 'DELETED') {
        this.setState({
          deletedData: {
            ...this.state.deletedData,
            data: this.state.deletedData.data.map((value) => {
              if (value._id === id) {
                return {
                  ...value,
                  isFollowing: true,
                };
              } else {
                return value;
              }
            }),
          },
        });
      }
    }
  };
  render() {
    const translate = this.props.t;
    const renderPublicData = this.state.publicData.data.map((item: any, index: number) => {
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
            imageUrl={item.imageUrls && item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl}
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
            imageUrl={item.imageUrls && item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl}
            title={item.title}
            price={item.price}
            linkRedirect={`/bai-dang/${item._id}`}
            location={item.location ? item.location.name : ''}
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

    const renderPendingData = this.state.pendingData.data.map((item, index) => {
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
            // imageUrl={item.imageUrls[0]}
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
            imageUrl={item.imageUrls[0]}
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

    const renderRejectedData = this.state.rejectedData.data.map((item, index) => {
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
            // imageUrl={item.imageUrls[0]}
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
            imageUrl={item.imageUrls[0]}
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

    const renderStoppedData = this.state.stoppedData.data.map((item, index) => {
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
            // imageUrl={item.imageUrls[0]}
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
            imageUrl={item.imageUrls[0]}
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

    const renderDeletedData = this.state.deletedData.data.map((item, index) => {
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
            // imageUrl={item.imageUrls[0]}
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
            imageUrl={item.imageUrls[0]}
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
      <div className='dashboard-screen'>
        <Head>
          <title>{`Quản lí tin đăng | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Quản lí tin đăng | timmay.vn`} />
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
          <Row>
            <UserTitle title={translate('common:news-managenment')}  />
            <UserInfo currentUserData={this.props.currentUserData} profileState={this.props.profileState} />
            <Spin spinning={this.state.isBusy}>
              <Tabs defaultActiveKey='PUBLIC' tabBarStyle={{ background: '#fff', margin: 0, boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)' }}
                onChange={(activeKey) => this.setState({ currentTab: activeKey })}>
                <TabPane tab={translate('dashboard:public-news')} key='PUBLIC'>
                  <Row style={{ background: '#fff', display: 'flex', flexWrap: 'wrap' }}>
                    {this.state.publicData.data.length === 0 ?
                      <Empty style={{ width: '100%' }} description={translate('dashboard:no-data')} /> :
                      <Fragment>
                        {renderPublicData}
                      </Fragment>}
                  </Row>
                  <Row style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                    {this.state.publicData.before
                      ? <Button onClick={() => { this.onPreviousPage(); }} style={{ marginRight: 10 }} ><a>{translate('common:previous-page')}</a></Button>
                      : <div></div>
                    }
                    {this.state.publicData.after
                      ? <Button onClick={() => { this.onNextPage(); }} style={{ marginRight: 10 }} type='primary' ><a>{translate('common:next-page')}</a></Button>
                      : <div></div>
                    } </Row>
                </TabPane>
                <TabPane tab={translate('dashboard:pending-news')} key='PENDING'>
                  <Row style={{ background: '#fff' }}>
                    {this.state.pendingData.data.length === 0 ?
                      <Empty description={translate('dashboard:no-data')} /> :
                      <Fragment>
                        {renderPendingData}
                      </Fragment>}
                  </Row>
                  <Row style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                    {this.state.pendingData.before
                      ? <Button onClick={() => { this.onPreviousPage(); }} style={{ marginRight: 10 }} ><a>{translate('common:previous-page')}</a></Button>
                      : <div></div>
                    }
                    {this.state.pendingData.after
                      ? <Button onClick={() => { this.onNextPage(); }} style={{ marginRight: 10 }} type='primary' ><a>{translate('common:next-page')}</a></Button>
                      : <div></div>
                    } </Row></TabPane>
                <TabPane tab={translate('dashboard:deleted-news')} key='DELETED'>
                  <Row style={{ background: '#fff' }}>
                    {this.state.deletedData.data.length === 0 ?
                      <Empty description={translate('dashboard:no-data')} /> :
                      <Fragment>
                        {renderDeletedData}
                      </Fragment>}
                  </Row>
                  <Row style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                    {this.state.deletedData.before
                      ? <Button onClick={() => { this.onPreviousPage(); }} style={{ marginRight: 10 }} ><a>{translate('common:previous-page')}</a></Button>
                      : <div></div>
                    }
                    {this.state.deletedData.after
                      ? <Button onClick={() => { this.onNextPage(); }} style={{ marginRight: 10 }} type='primary' ><a>{translate('common:next-page')}</a></Button>
                      : <div></div>
                    } </Row>
                </TabPane>
                <TabPane tab={translate('dashboard:stopped-news')} key='STOPPED'>
                  <Row style={{ background: '#fff' }}>
                    {this.state.stoppedData.data.length === 0 ?
                      <Empty description={translate('dashboard:no-data')} /> :
                      <Fragment>
                        {renderStoppedData}
                      </Fragment>}
                  </Row>
                  <Row style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                    {this.state.stoppedData.before
                      ? <Button onClick={() => { this.onPreviousPage(); }} style={{ marginRight: 10 }} ><a>{translate('common:previous-page')}</a></Button>
                      : <div></div>
                    }
                    {this.state.stoppedData.after
                      ? <Button onClick={() => { this.onNextPage(); }} style={{ marginRight: 10 }} type='primary' ><a>{translate('common:next-page')}</a></Button>
                      : <div></div>
                    } </Row>
                </TabPane>
                <TabPane tab={translate('dashboard:rejected-news')} key='REJECTED'>
                  <Row style={{ background: '#fff' }}>
                    {this.state.rejectedData.data.length === 0 ?
                      <Empty description={translate('dashboard:no-data')} /> :
                      <Fragment>
                        {renderRejectedData}
                      </Fragment>}
                  </Row>
                  <Row style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
                    {this.state.rejectedData.before
                      ? <Button onClick={() => { this.onPreviousPage(); }} style={{ marginRight: 10 }} ><a>{translate('common:previous-page')}</a></Button>
                      : <div></div>
                    }
                    {this.state.rejectedData.after
                      ? <Button onClick={() => { this.onNextPage(); }} style={{ marginRight: 10 }} type='primary' ><a>{translate('common:next-page')}</a></Button>
                      : <div></div>
                    } </Row>
                </TabPane>
              </Tabs>
            </Spin>
          </Row>
        </CommonLayout>
      </div>
    );
  }
}

export default withNamespaces('dashboard')(DashboardScreen);
