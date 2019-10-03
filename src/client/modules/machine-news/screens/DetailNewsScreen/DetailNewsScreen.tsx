import React, { Component, Fragment } from 'react';
import { Row, message, Spin } from 'antd';
import NavBarNext from './components/NavBarNext';
import DetailMachine from './components/DetailMachine';
import DetailUser from './components/DetailUser';
import CallMessButtonMobile from './components/CallMessButtonMobile';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import MachineDetailBox from '@client/components/MachineDetailBox/MachineDetailBox';
import { ProfileState, ProfileReducers, ProfileEffects, FollowState, FollowReducers, FollowEffects } from '@client/store';
import './DetailNewsScreen.less';
import { Brand, ElasticSearchResult, FindNewsDetail, ElasticSearchItemResult } from '../../../../services/service-proxies';
import { getServiceProxy } from '@client/services';
import * as jsCookies from 'js-cookie';
import { withNamespaces } from '@client/i18n';
import Head from 'next/head';
import { config } from '@client/config';

interface Props {
  topBrands: Brand[];
  newsData: FindNewsDetail;
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  t: (key: string) => string;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  handleFiltersChange: (payload: { [key: string]: string | number }) => void;
}
interface State {
  newsData: FindNewsDetail;
  isLoadingDataSameSeller: boolean;
  newsDataSameOwner: ElasticSearchResult;
  newDataRelatedProducts: {
    data: ElasticSearchItemResult[];
    pageNumber: number;
  };
}

class DetailNewsScreen extends Component<Props, State> {
  state: State = {
    newsData: this.props.newsData,
    isLoadingDataSameSeller: false,
    newsDataSameOwner: {
      data: [],
      before: '',
      after: '',
    },
    newDataRelatedProducts: {
      data: [],
      pageNumber: 1,
    },
  };

  componentDidMount() {
    this.getNewsDataSameOwner();
    this.getNewDataRelatedProducts();

    const idToken = jsCookies.get('token');
    const serviceProxies = getServiceProxy(idToken);
    serviceProxies.createRecentViewed({
      news: this.props.newsData._id,
    });
  }

  getNewsDataSameOwner = async () => {
    try {
      const idToken = jsCookies.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const newsDataSameOwner = await serviceProxy.findSameOwnerNews(
        this.props.newsData._id,
        this.props.newsData.owner._id,
        4,
        `createdAt|desc`,
        undefined,
        undefined,
      );

      this.setState({
        newsDataSameOwner,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getNewsDataSameOwnerNextPage = async () => {
    try {
      const idToken = jsCookies.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const newsDataSameOwner = await serviceProxy.findSameOwnerNews(
        this.props.newsData._id,
        this.props.newsData.owner._id,
        4,
        `createdAt|desc`,
        undefined,
        this.state.newsDataSameOwner.after,
      );

      this.setState({
        newsDataSameOwner,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getNewsDataSameOwnerPrevPage = async () => {
    try {
      const idToken = jsCookies.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const newsDataSameOwner = await serviceProxy.findSameOwnerNews(
        this.props.newsData._id,
        this.props.newsData.owner._id,
        4,
        `createdAt|desc`,
        this.state.newsDataSameOwner.before,
        undefined,
      );

      this.setState({
        newsDataSameOwner,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getNewDataRelatedProducts = async () => {
    try {
      const pageSizeRelatedProduct = 8;
      const idToken = jsCookies.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const relatedNewsResult = await serviceProxy.findRelatedNews(
        this.props.newsData._id,
        this.props.newsData.owner._id,
        this.props.newsData.categoryId._id,
        this.props.newsData.brand ? this.props.newsData.brand._id : undefined,
        this.props.newsData.model ? this.props.newsData.model._id : undefined,
        this.props.newsData.weightRange ? this.props.newsData.weightRange._id : undefined,
        this.props.newsData.shop ? this.props.newsData.shop._id : undefined,
        this.props.newsData.location ? this.props.newsData.location._id : undefined,
        pageSizeRelatedProduct,
        `createdAt|desc`,
        undefined,
        undefined,
      );

      this.setState({
        newDataRelatedProducts: {
          ...this.state.newDataRelatedProducts,
          data: relatedNewsResult.data ? relatedNewsResult.data : [],
        },
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
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
          newsData: {
            ...this.state.newsData,
            isFollowing: false,
            counterFollow: this.state.newsData.counterFollow - 1,
          },
        });
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        await this.setState({
          newsData: {
            ...this.state.newsData,
            isFollowing: true,
            counterFollow: this.state.newsData.counterFollow + 1,
          },
        });
      }
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(this.props.t('detail-news:notification-login'));
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
          newsData: {
            ...this.state.newsData,
            owner: {
              ...this.state.newsData.owner,
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
          newsData: {
            ...this.state.newsData,
            owner: {
              ...this.state.newsData.owner,
              isFollowing: true,
            },
          },
        });
      }
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(this.props.t('detail-news:notification-login'));
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
          newsData: {
            ...this.state.newsData,
            shop: {
              ...this.state.newsData.shop,
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
          newsData: {
            ...this.state.newsData,
            shop: {
              ...this.state.newsData.shop,
              isFollowing: true,
            },
          },
        });
      }
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(this.props.t('detail-news:notification-login'));
    }
  }

  changeSameSellerNewsFollowStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {

      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.setState({
          newsDataSameOwner: {
            ...this.state.newsDataSameOwner,
            data: this.state.newsDataSameOwner.data.map((value: any) => {
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
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.setState({
          newsDataSameOwner: {
            ...this.state.newsDataSameOwner,
            data: this.state.newsDataSameOwner.data.map((value: any) => {
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
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(this.props.t('detail-news:notification-login'));
    }
  }

  changeRelatedNewsFollowStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {

      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.setState({
          newDataRelatedProducts: {
            ...this.state.newDataRelatedProducts,
            data: this.state.newDataRelatedProducts.data.map((value: any) => {
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
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.setState({
          newDataRelatedProducts: {
            ...this.state.newDataRelatedProducts,
            data: this.state.newDataRelatedProducts.data.map((value: any) => {
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
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(this.props.t('detail-news:notification-login'));
    }
  }

  showButtonLeft = () => {
    if (this.state.newsDataSameOwner.before) {
      return false;
    } else {
      return true;
    }
  }
  showButtonRight = () => {
    if (this.state.newsDataSameOwner.after) {
      return false;
    } else {
      return true;
    }
  }

  fetchDataDynamic = async (ownerId: string, after: string | undefined, before: string | undefined) => {
    this.setState({ isLoadingDataSameSeller: true });

    const serviceProxies = getServiceProxy();
    const resultData = await serviceProxies.searchElasticsearch(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      ownerId,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      4,
      'elasticsearchCreatedAt|desc',
      before,
      after,
    );
    return resultData;
  }

  onCLickButtonLeft = async () => {
    if (this.state.newsDataSameOwner.before) {
      const newsData = await this.fetchDataDynamic(this.state.newsData.owner._id, undefined, this.state.newsDataSameOwner.before);
      this.setState({
        newsDataSameOwner: newsData as any,
        isLoadingDataSameSeller: false,
      });
    }
  }
  onCLickButtonRight = async () => {
    if (this.state.newsDataSameOwner.after) {
      const newsData = await this.fetchDataDynamic(this.state.newsData.owner._id, this.state.newsDataSameOwner.after, undefined);
      this.setState({
        newsDataSameOwner: newsData as any,
        isLoadingDataSameSeller: false,
      });
    }
  }

  render() {
    const translate = this.props.t;
    const relatedData = this.state.newDataRelatedProducts.data.slice((this.state.newDataRelatedProducts.pageNumber - 1) * 8, this.state.newDataRelatedProducts.pageNumber * 8);
    return (
      <Fragment>
        <Head>
          <title>{`${this.props.newsData.title} | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content={this.props.newsData.description} />
          <meta property='og:url' content={`${config.url.main}/bai-dang/${this.props.newsData._id}`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`${this.props.newsData.title} | timmay.vn`} />
          <meta property='og:description' content={this.props.newsData.description} />
          <meta property='og:image:url' content={this.props.newsData.imageUrls.length > 0 ? this.props.newsData.imageUrls[0] : '/static/images/logo-timmay.png'} />
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
            <NavBarNext
              newsData={this.state.newsData}
              changeFollowItemStatus={this.changeFollowItemStatus}
              starStatus={this.state.newsData.isFollowing ? 'filled' : ''}
              newsTitle={this.state.newsData.title}
              t={this.props.t}
            />

            <DetailMachine
              newsData={this.state.newsData}
              changeFollowItemStatus={this.changeFollowItemStatus}
              starStatus={this.state.newsData.isFollowing ? 'filled' : ''}
              handleFiltersChange={this.props.handleFiltersChange}
              profileState={this.props.profileState}
            />

            <DetailUser
              profileState={this.props.profileState}
              profileReducers={this.props.profileReducers}
              newsData={this.state.newsData}
              changeFollowUserStatus={this.changeFollowUserStatus}
              changeFollowShopStatus={this.changeFollowShopStatus}
              starUserStatus={this.state.newsData.owner.isFollowing ? 'filled' : ''}
              starShopStatus={this.state.newsData.shop && this.state.newsData.shop.isFollowing ? 'filled' : ''}
              isShopDomain={false}
            />

            {this.state.newsDataSameOwner.data && this.state.newsDataSameOwner.data.length > 0 ? (
              <Row className='machine-list'>
                <Spin spinning={this.state.isLoadingDataSameSeller}>
                  <MachineDetailBox
                    profileState={this.props.profileState}
                    title={translate('detail-news:same-seller')}
                    data={this.state.newsDataSameOwner.data}
                    buttonLeft={this.getNewsDataSameOwnerPrevPage}
                    buttonRight={this.getNewsDataSameOwnerNextPage}
                    disabledButtonLeft={this.showButtonLeft()}
                    disabledButtonRight={this.showButtonRight()}
                    changeFollowStatus={this.changeSameSellerNewsFollowStatus}
                    hiddenButton={false}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                  />
                </Spin>
              </Row>
            ) : null}

            {this.state.newDataRelatedProducts.data && this.state.newDataRelatedProducts.data.length > 0 ? (
              <Row className='machine-list'>
                <MachineDetailBox
                  profileState={this.props.profileState}
                  title={translate('detail-news:related-products')}
                  data={this.state.newDataRelatedProducts.data.slice((this.state.newDataRelatedProducts.pageNumber - 1) * 8, this.state.newDataRelatedProducts.pageNumber * 8)}
                  hiddenButton={false}
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  disabledButtonLeft={this.state.newDataRelatedProducts.pageNumber === 1}
                  disabledButtonRight={this.state.newDataRelatedProducts.pageNumber === 3 || relatedData.length < 8}
                  changeFollowStatus={this.changeRelatedNewsFollowStatus}
                  buttonLeft={() => this.setState({
                    newDataRelatedProducts: {
                      ...this.state.newDataRelatedProducts,
                      pageNumber: this.state.newDataRelatedProducts.pageNumber === 1 ? 1 : this.state.newDataRelatedProducts.pageNumber - 1,
                    },
                  })}
                  buttonRight={() => this.setState({
                    newDataRelatedProducts: {
                      ...this.state.newDataRelatedProducts,
                      pageNumber: this.state.newDataRelatedProducts.pageNumber === 3 ? 3 : this.state.newDataRelatedProducts.pageNumber + 1,
                    },
                  })}
                />
              </Row>
            ) : null}

            <Row className='call-mess-button-mobile'>
              <CallMessButtonMobile
                phoneNo={this.props.newsData.owner.phoneNo}
                t={this.props.t} />
            </Row>
          </Row>
        </CommonLayout>
      </Fragment>
    );
  }
}

export default withNamespaces('detail-news')(DetailNewsScreen);
