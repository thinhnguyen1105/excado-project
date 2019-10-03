import * as React from 'react';
import DetailsHomePage from './components/DetailsHomePage';
import { message } from 'antd';
import { ProfileState, ProfileEffects, ProfileReducers, FollowState, FollowReducers, FollowEffects, SearchState, SearchReducers, SearchEffects, DataResult } from '@client/store';
import { Header, MainContent } from '@client/components';
import Footer from '@client/components/CommonLayout/Footer';
import { Brand, ElasticSearchResult, Category, Province, RecentViewedItem, CommonKeyword, User } from '../../../../services/service-proxies';
import { getServiceProxy } from '../../../../services';
import * as jsCookie from 'js-cookie';
import { isMobile } from 'react-device-detect';
import './HomePageScreen.less';
import CurrentTime from '@client/components/CommonLayout/CurrentTime';
import { withNamespaces } from '@client/i18n';
import Head from 'next/head';
import { config } from '@client/config';

interface Props {
  topBrands: Brand[];
  searchKeyword: string;
  resultSearchNewestPost: ElasticSearchResult;
  profileState: ProfileState;
  profileData: User;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducers: FollowReducers & FollowEffects;
  searchState: SearchState;
  searchReducers: SearchReducers & SearchEffects;
  t: (key: string) => string;
}
interface State {
  categories: Category[];
  provinces: Province[];
  commonKeywords: CommonKeyword[];
  seeMoreClicked: boolean;
  seeMoreTotalMachineClicked: boolean;
  resultSearchNewestPost: ElasticSearchResult;
  resultSuggestForToday: ElasticSearchResult;
  isLoadingNearestMachine: boolean;
  newsDataNearestMachine: DataResult;
  recentViewed: {
    data: RecentViewedItem[];
    before?: string;
    after?: string;
    first: number;
    sortBy: string;
  };
  isLoadingRecentViewed: boolean;
}
class HomePageScreen extends React.PureComponent<Props, State> {
  state: State = {
    categories: [],
    provinces: [],
    commonKeywords: [],
    seeMoreTotalMachineClicked: false,
    seeMoreClicked: false,
    resultSearchNewestPost: this.props.resultSearchNewestPost,
    resultSuggestForToday: {
      data: [],
      before: '',
      after: '',
    },
    newsDataNearestMachine: {
      data: [],
    },
    isLoadingNearestMachine: false,
    recentViewed: {
      data: [],
      before: undefined,
      after: undefined,
      first: 4,
      sortBy: `lastModifiedAt|desc`,
    },
    isLoadingRecentViewed: false,
  };

  componentDidMount() {
    this.getCategories();
    this.getProvinces();
    this.getCommonKeywords();
    this.getResultSuggestForToday();
    this.getMostFollowNews();
    this.getRecentViewedData();
  }

  getCategories = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const categories = await serviceProxy.findCategories();
      this.setState({
        categories: categories.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getProvinces = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const provinces = await serviceProxy.findProvinces();
      this.setState({
        provinces: provinces.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getCommonKeywords = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const commonKeywords = await serviceProxy.getCommonKeywords(20, 'count|desc', undefined, undefined);
      this.setState({
        commonKeywords: commonKeywords.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getResultSuggestForToday = async () => {
    try {
      const pageSizeSuggestForToday = 20;
      const serviceProxy = getServiceProxy();
      const resultSuggestForToday = await serviceProxy.searchElasticsearch(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        'SELL',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        pageSizeSuggestForToday,
        'elasticsearchCreatedAt|desc',
        undefined,
        undefined,
      );
      this.setState({
        resultSuggestForToday: {
          ...this.state.resultSuggestForToday,
          data: resultSuggestForToday.data,
          before: resultSuggestForToday.before,
          after: resultSuggestForToday.after,
        },
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getMostFollowNews = async () => {
    try {
      const pageSizeNewsMostFollow = isMobile ? 2 : 4;
      const serviceProxy = getServiceProxy();
      const resultNewsMostFollow = await serviceProxy.searchNewsMostFollow(
        undefined,
        pageSizeNewsMostFollow,
        'counterFollow|desc',
        '_id',
        undefined,
        undefined,
      );

      this.props.searchReducers.getDataMostFollowSuccess(resultNewsMostFollow);
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getRecentViewedData = async () => {
    const idToken = jsCookie.get('token');
    const serviceProxies = getServiceProxy(idToken);
    const recentViewedResult = await serviceProxies.getRecentViewed(
      this.state.recentViewed.first,
      this.state.recentViewed.sortBy,
      undefined,
      undefined,
    );

    this.setState({
      recentViewed: {
        ...this.state.recentViewed,
        data: recentViewedResult.data,
        before: recentViewedResult.before,
        after: recentViewedResult.after,
      },
    });
  }

  getRecentViewedNextPage = async () => {
    this.setState({ isLoadingRecentViewed: true });
    try {
      const serviceProxies = getServiceProxy();
      const recentViewedResult = await serviceProxies.getRecentViewed(
        this.state.recentViewed.first,
        this.state.recentViewed.sortBy,
        undefined,
        this.state.recentViewed.after,
      );

      this.setState({
        recentViewed: {
          ...this.state.recentViewed,
          data: recentViewedResult.data,
          before: recentViewedResult.before,
          after: recentViewedResult.after,
        },
        isLoadingRecentViewed: false,
      });
    } catch (error) {
      message.error(error.message || JSON.parse(error.response).message);
    }
  }

  getRecentViewedPrevPage = async () => {
    this.setState({ isLoadingRecentViewed: true });
    try {
      const serviceProxies = getServiceProxy();
      const recentViewedResult = await serviceProxies.getRecentViewed(
        this.state.recentViewed.first,
        this.state.recentViewed.sortBy,
        this.state.recentViewed.before,
        undefined,
      );

      this.setState({
        recentViewed: {
          ...this.state.recentViewed,
          data: recentViewedResult.data,
          before: recentViewedResult.before,
          after: recentViewedResult.after,
        },
        isLoadingRecentViewed: false,
      });
    } catch (error) {
      message.error(error.message || JSON.parse(error.response).message);
    }
  }

  changeSuggestForTodayFollowStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.setState({
          resultSuggestForToday: {
            ...this.state.resultSuggestForToday,
            data: this.state.resultSuggestForToday.data.map((value: any) => {
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
          resultSuggestForToday: {
            ...this.state.resultSuggestForToday,
            data: this.state.resultSuggestForToday.data.map((value: any) => {
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
      message.warning(`${this.props.t('common:login-required-message')}`);
    }
  }

  changeRecentViewedFollowStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {
      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.setState({
          recentViewed: {
            ...this.state.recentViewed,
            data: this.state.recentViewed.data.map((value: any) => {
              if (value.news._id === id) {
                return {
                  ...value,
                  news: {
                    ...value.news,
                    isFollowing: false,
                  },
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
          recentViewed: {
            ...this.state.recentViewed,
            data: this.state.recentViewed.data.map((value: any) => {
              if (value.news._id === id) {
                return {
                  ...value,
                  news: {
                    ...value.news,
                    isFollowing: true,
                  },
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
      message.warning(`${this.props.t('common:login-required-message')}`);
    }
  }

  onSeeMoreCityListButtonClick: any = () => {
    this.setState({ seeMoreClicked: true });
  }

  fetchDataDynamic = async (newsType: string | undefined, otherNewsType: string | undefined, before: string | undefined, after: string | undefined, location: string | undefined) => {
    const pageSize = isMobile ? 4 : 8;
    const serviceProxy = getServiceProxy();
    const result = await serviceProxy.searchElasticsearch(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      otherNewsType,
      newsType,
      undefined,
      undefined,
      undefined,
      location,
      undefined,
      undefined,
      undefined,
      pageSize,
      'elasticsearchCreatedAt|desc',
      before,
      after,
    );
    return result;
  }

  getDataMostFollow = async (before: string | undefined, after: string | undefined) => {
    const pageSize = isMobile ? 2 : 4;
    const sortBy = 'counterFollow';
    const otherSortBy = '_id';

    const serviceProxy = getServiceProxy();
    const result = await serviceProxy.searchNewsMostFollow(
      undefined,
      pageSize,
      sortBy,
      otherSortBy,
      before,
      after,
    );
    return result;
  }

  getDataInTabs = async (activeTab: string, newsType: string, otherNewsType: string | undefined, dataLength: number, objectLoading: object) => {
    this.props.searchReducers.changeTabsOnHomePage(activeTab);
    this.props.searchReducers.changeStatusNewsTypeSearch(newsType);
    if (dataLength === 0) {
      this.props.searchReducers.activeLoading(objectLoading);
      const result = await this.fetchDataDynamic(newsType, otherNewsType, undefined, undefined, undefined);
      this.props.searchReducers.getDataInTabsSuccess({ result, newsType });
    }
  }

  onChangeTabs = async (activeKeys: string) => {
    switch (activeKeys) {
      case '1':
        this.getDataInTabs('1', 'SELL', undefined, this.props.searchState.dataTotal.dataSell.data.length, { isLoadingDataSell: true });
        break;
      case '2':
        this.getDataInTabs('2', 'BUY', 'RENT', this.props.searchState.dataTotal.dataBuy.data.length, { isLoadingDataBuy: true });
        break;
      case '3':
        this.getDataInTabs('3', 'LEASE', undefined, this.props.searchState.dataTotal.dataLease.data.length, { isLoadingDataLease: true });
        break;
      case '4':
        if (this.props.profileData && this.props.profileData.province) {
          this.setState({ isLoadingNearestMachine: true });
          this.props.searchReducers.changeStatusNewsTypeSearch('NEAREST');
          const result = await this.fetchDataDynamic(undefined, undefined, undefined, undefined, this.props.profileData.province);
          this.setState({
            newsDataNearestMachine: result,
            isLoadingNearestMachine: false,
          });
        }
    }
  }

  getDataForButton = async (beforeInData: any, afterInData: any, objectLoading: object, tab: string, otherNewsType: string | undefined) => {
    if (beforeInData !== undefined || afterInData !== undefined) {
      this.props.searchReducers.activeLoading(objectLoading);
      const result = await this.fetchDataDynamic(tab, otherNewsType, beforeInData, afterInData, undefined);
      this.props.searchReducers.getDataInTabsSuccess({ result, newsType: this.props.searchState.statusNewsTypeSearch });
    }
  }

  onClickButtonLeft = async () => {
    switch (this.props.searchState.statusNewsTypeSearch) {
      case 'SELL':
        this.getDataForButton(this.props.searchState.dataTotal.dataSell.before, undefined, { isLoadingDataSell: true }, 'SELL', undefined);
        break;
      case 'BUY':
        this.getDataForButton(this.props.searchState.dataTotal.dataBuy.before, undefined, { isLoadingDataBuy: true }, 'BUY', 'RENT');
        break;
      case 'LEASE':
        this.getDataForButton(this.props.searchState.dataTotal.dataLease.before, undefined, { isLoadingDataLease: true }, 'LEASE', undefined);
        break;
      case 'NEAREST':
        this.setState({ isLoadingNearestMachine: true });
        const before = this.state.newsDataNearestMachine.before;
        if (before) {
          const result = await this.fetchDataDynamic(undefined, undefined, before, undefined, (this.props.profileState.authUser as any).province);
          this.setState({
            isLoadingNearestMachine: false,
            newsDataNearestMachine: result,
          });
        }
        break;
    }
  }

  onClickButtonRight = async () => {
    switch (this.props.searchState.statusNewsTypeSearch) {
      case 'SELL':
        this.getDataForButton(undefined, this.props.searchState.dataTotal.dataSell.after, { isLoadingDataSell: true }, 'SELL', undefined);
        break;
      case 'BUY':
        this.getDataForButton(undefined, this.props.searchState.dataTotal.dataBuy.after, { isLoadingDataBuy: true }, 'BUY', 'RENT');
        break;
      case 'LEASE':
        this.getDataForButton(undefined, this.props.searchState.dataTotal.dataLease.after, { isLoadingDataLease: true }, 'LEASE', undefined);
        break;
      case 'NEAREST':
        this.setState({ isLoadingNearestMachine: true });
        const after = this.state.newsDataNearestMachine.after;
        if (after) {
          const result = await this.fetchDataDynamic(undefined, undefined, undefined, after, (this.props.profileState.authUser as any).province);
          this.setState({
            isLoadingNearestMachine: false,
            newsDataNearestMachine: result,
          });
        }
        break;
    }
  }

  onClickButtonRightMostFollow = async () => {
    this.props.searchReducers.activeLoading({ isLoadingDataMostFollow: true });
    const afterDataMostFollow = this.props.searchState.dataTotal.dataMostFollow.after;
    if (afterDataMostFollow !== undefined) {
      const result = await this.getDataMostFollow(undefined, afterDataMostFollow);
      this.props.searchReducers.getDataMostFollowSuccess(result);
    }
  }
  onClickButtonLeftMostFollow = async () => {
    this.props.searchReducers.activeLoading({ isLoadingDataMostFollow: true });
    const beforeDataMostFollow = this.props.searchState.dataTotal.dataMostFollow.before;
    if (beforeDataMostFollow !== undefined) {
      const result = await this.getDataMostFollow(beforeDataMostFollow, undefined);
      this.props.searchReducers.getDataMostFollowSuccess(result);
    }
  }

  changeFollowStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {

      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.props.searchReducers.onFollowChangeOnHomeScreenSuccess({
          starStatus,
          newsId: id,
        });
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.props.searchReducers.onFollowChangeOnHomeScreenSuccess({
          starStatus,
          newsId: id,
        });
      }
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(`${this.props.t('common:login-required-message')}`);
    }
  }
  changeMostFollowNewsFollowStatus = async (starStatus: string, id: string) => {
    if (this.props.profileState && this.props.profileState.authUser) {

      if (starStatus === 'filled') {
        await this.props.followReducers.unfollowNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.props.searchReducers.onFollowChangeMostFollowNewsSuccess({
          starStatus,
          newsId: id,
        });
      } else {
        await this.props.followReducers.followNews({
          userId: (this.props.profileState.authUser as any).id,
          newsId: id,
        });
        this.props.searchReducers.onFollowChangeMostFollowNewsSuccess({
          starStatus,
          newsId: id,
        });
      }
    } else {
      await this.props.profileReducers.openModal({ modalName: 'login' });
      message.warning(`${this.props.t('common:login-required-message')}`);
    }
  }

  isShowButton = (value: any) => {
    return value !== undefined ? false : true;
  }

  onSeeMoreTotalMachineClick = () => {
    this.setState({ seeMoreTotalMachineClicked: !this.state.seeMoreTotalMachineClicked });
  }

  render() {
    const isShowButtonRight = () => {
      const statusTab = this.props.searchState.statusNewsTypeSearch;
      switch (statusTab) {
        case 'SELL':
          return this.isShowButton(this.props.searchState.dataTotal.dataSell.after);
          break;
        case 'BUY':
          return this.isShowButton(this.props.searchState.dataTotal.dataBuy.after);
          break;
        case 'LEASE':
          return this.isShowButton(this.props.searchState.dataTotal.dataLease.after);
          break;
        case 'NEAREST':
          return this.isShowButton(this.state.newsDataNearestMachine.after);
          break;
        default:
          return null;
      }
    };
    const isShowButtonLeft = () => {
      const statusTab = this.props.searchState.statusNewsTypeSearch;
      switch (statusTab) {
        case 'SELL':
          return this.isShowButton(this.props.searchState.dataTotal.dataSell.before);
          break;
        case 'BUY':
          return this.isShowButton(this.props.searchState.dataTotal.dataBuy.before);
          break;
        case 'LEASE':
          return this.isShowButton(this.props.searchState.dataTotal.dataLease.before);
          break;
        case 'NEAREST':
          return this.isShowButton(this.state.newsDataNearestMachine.before);
          break;
        default:
          return null;
      }
    };

    return (
      <div className='home-page-screen'>
        <Head>
          <title>{`Chợ máy công trình | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content='Chợ máy công trình' />
          <meta property='og:url' content={config.url.main} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Chợ máy công trình | timmay.vn`} />
          <meta property='og:description' content='Chợ máy công trình' />
          <meta property='og:image:url' content={'/static/images/logo-timmay.png'} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>

        <CurrentTime />

        <Header
          commonKeywords={this.state.commonKeywords}
          searchKeyword={this.props.searchKeyword}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          updateFilters={this.props.searchReducers.updateFilters}
        />

        <MainContent
          hasSideBar={true}
          hasMenuItems={true}
          topBrands={this.props.topBrands}
          hasBrandList={true}
        >
          <DetailsHomePage
            commonKeywords={this.state.commonKeywords}
            recentViewedData={this.state.recentViewed.data}
            isLoadingRecentViewed={this.state.isLoadingRecentViewed}
            getRecentViewedNextPage={this.getRecentViewedNextPage}
            getRecentViewedPrevPage={this.getRecentViewedPrevPage}
            hasRecentViewedNextPage={!Boolean(this.state.recentViewed.after)}
            hasRecentViewedPrevPage={!Boolean(this.state.recentViewed.before)}
            categories={this.state.categories}
            profileState={this.props.profileState}
            profileData={this.props.profileData}
            profileReducers={this.props.profileReducers}
            provinces={this.state.provinces}
            seeMoreClicked={this.state.seeMoreClicked}
            onSeeMoreCityListButtonClick={this.onSeeMoreCityListButtonClick}
            resultSuggestForToday={this.state.resultSuggestForToday}
            changeFollowStatus={this.changeFollowStatus}
            onChangeTabs={this.onChangeTabs}
            searchState={this.props.searchState}
            buttonLeft={this.onClickButtonLeft}
            buttonRight={this.onClickButtonRight}
            disabledButtonLeft={isShowButtonLeft() as any}
            disabledButtonRight={isShowButtonRight() as any}
            buttonLeftMostFollow={this.onClickButtonLeftMostFollow}
            buttonRightMostFollow={this.onClickButtonRightMostFollow}
            disabledButtonLeftMostFollow={this.isShowButton(this.props.searchState.dataTotal.dataMostFollow.before)}
            disabledButtonRightMostFollow={this.isShowButton(this.props.searchState.dataTotal.dataMostFollow.after)}
            changeMostFollowNewsFollowStatus={this.changeMostFollowNewsFollowStatus}
            changeRecentViewedFollowStatus={this.changeRecentViewedFollowStatus}
            changeSuggestForTodayFollowStatus={this.changeSuggestForTodayFollowStatus}
            isLoadingNearestMachine={this.state.isLoadingNearestMachine}
            newsDataNearestMachine={this.state.newsDataNearestMachine}
            seeMoreTotalMachineClicked={this.state.seeMoreTotalMachineClicked}
            onSeeMoreTotalMachineClick={this.onSeeMoreTotalMachineClick}
          />
        </MainContent>

        <Footer />
      </div >
    );
  }
}

export default withNamespaces('index')(HomePageScreen);
