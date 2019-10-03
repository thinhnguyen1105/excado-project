import React, { Component } from 'react';
import { Row, Col, message } from 'antd';
import SeeMost from '@client/modules/machine-news/screens/ShopInfoScreen/components/SeeMost';
import Map from '@client/modules/machine-news/screens/ShopInfoScreen/components/Map';
import './ItemShopNewsDetail.less';
import NavBarNext from '../../DetailNewsScreen/components/NavBarNext';
import DetailMachine from '../../DetailNewsScreen/components/DetailMachine';
import DetailUser from '../../DetailNewsScreen/components/DetailUser';
import MachineDetailBox from '@client/components/MachineDetailBox/MachineDetailBox';
import { News, Shop } from '@client/services/service-proxies';
import { getServiceProxy } from '@client/services';
import { ProfileState, SearchState, SearchReducers, SearchEffects, FollowState, FollowReducers, FollowEffects } from '@client/store';
import { isMobile } from 'react-device-detect';

interface Props {
  shopInfo: Shop;
  shopAddress: string;
  newsInfo: News;
  profileState: ProfileState;
  resultSearchNewestPost: { data: any[], before?: string, after?: string };
  newMachine: { data: any[], before?: string, after?: string };
  searchState: SearchState;
  searchReducers: SearchReducers & SearchEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  handleFiltersChange: (payload: { [key: string]: any }) => void;
  t: (key: string) => string;
}
interface State {
  newsInfo: News;
}
class ItemShopNewsDetails extends Component<Props, State> {
  state = {
    newsInfo: this.props.newsInfo,
  };

  onClickNextNew = () => {
    //
  }

  changeFollowItemStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        await this.setState({
          newsInfo: {
            ...this.state.newsInfo,
            isFollowing: false,
          },
        });
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        await this.setState({
          newsInfo: {
            ...this.state.newsInfo,
            isFollowing: true,
          },
        });
      }
    } else {
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
          newsInfo: {
            ...this.state.newsInfo,
            owner: {
              ...this.state.newsInfo.owner,
              isFollowing: false,
            },
          },
        });
      } else {
        await this.props.followReducers.followUser({
          authId: (this.props.profileState.authUser as any).id,
          userId: id,
        });
        await this.setState({
          newsInfo: {
            ...this.state.newsInfo,
            owner: {
              ...this.state.newsInfo.owner,
              isFollowing: true,
            },
          },
        });
      }
    } else {
      message.warning(`${this.props.t('common:login-required-message')}`);
    }
  }

  changeFollowShopStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowShop({
          authId: (this.props.profileState.authUser as any).id,
          shopId: id,
        });
        await this.setState({
          newsInfo: {
            ...this.state.newsInfo,
            shop: {
              ...this.state.newsInfo.shop,
              isFollowing: false,
            },
          },
        });
      } else {
        await this.props.followReducers.followShop({
          authId: (this.props.profileState.authUser as any).id,
          shopId: id,
        });
        await this.setState({
          newsInfo: {
            ...this.state.newsInfo,
            shop: {
              ...this.state.newsInfo.shop,
              isFollowing: true,
            },
          },
        });
      }
    } else {
      message.warning(`${this.props.t('common:login-required-message')}`);
    }
  }

  disabledButtonLeft = () => {
    if (this.props.newMachine.before) {
      return false;
    } else {
      return true;
    }
  }
  disabledButtonRight = () => {
    if (this.props.newMachine.after) {
      return false;
    } else {
      return true;
    }
  }

  buttonLeft = async () => {
    if (this.props.newMachine.before) {
      const serviceProxies = getServiceProxy();
      const newMachine = await serviceProxies.searchElasticsearch(
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
        this.props.shopInfo._id,
        undefined,
        undefined,
        undefined,
        undefined,
        4,
        'elasticsearchCreatedAt|desc',
        this.props.newMachine.before,
        undefined,
      );
      this.props.searchReducers.getDataNewMachineSuccess(newMachine);
    }
  }
  buttonRight = async () => {
    if (this.props.newMachine.after) {
      const serviceProxies = getServiceProxy();
      const newMachine = await serviceProxies.searchElasticsearch(
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
        this.props.shopInfo._id,
        undefined,
        undefined,
        undefined,
        undefined,
        4,
        'elasticsearchCreatedAt|desc',
        undefined,
        this.props.newMachine.after,
      );
      this.props.searchReducers.getDataNewMachineSuccess(newMachine);
    }
  }
  render() {
    return (
      <Row className='outline-body' gutter={!isMobile ? 16 : 0}>
        <Col className='navbar-next' lg={16} md={24} xs={24} sm={24} >
          <NavBarNext
            newsData={this.state.newsInfo}
            changeFollowItemStatus={this.changeFollowItemStatus}
            starStatus={this.state.newsInfo.isFollowing ? 'filled' : 'outlined'}
            newsTitle={this.state.newsInfo.title}
            t={this.props.t}
          />

          <DetailMachine
            newsData={this.state.newsInfo}
            changeFollowItemStatus={this.changeFollowItemStatus}
            handleFiltersChange={this.props.handleFiltersChange}
            starStatus={this.state.newsInfo.isFollowing ? 'filled' : 'outlined'}
          />

          <DetailUser
            newsData={this.state.newsInfo}
            profileState={this.props.profileState}
            starUserStatus={this.state.newsInfo.owner.isFollowing ? 'filled' : ''}
            starShopStatus={this.state.newsInfo.shop.isFollowing ? 'filled' : ''}
            changeFollowUserStatus={this.changeFollowUserStatus}
            changeFollowShopStatus={this.changeFollowShopStatus}
            isShopDomain={true}
          />

          <Row className='machine-list'>
            <MachineDetailBox
              title={this.props.t('common:new-arrived')}
              disabledButtonLeft={this.disabledButtonLeft()}
              disabledButtonRight={this.disabledButtonRight()}
              buttonLeft={this.buttonLeft}
              buttonRight={this.buttonRight}
              data={this.props.newMachine.data}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              profileState={this.props.profileState}
              changeFollowStatus={this.changeFollowItemStatus}
              hiddenButton={false}
            />
          </Row>
        </Col>
        <Col lg={8} md={24} xs={24} sm={24} >
          <Map location={this.props.shopAddress} geocode={this.props.shopInfo.geocode} />
          <SeeMost
            title={this.props.t('shop-info:most-viewed')}
            dataMachine={this.props.resultSearchNewestPost.data} />
        </Col>
      </Row>
    );
  }
}

export default ItemShopNewsDetails;
