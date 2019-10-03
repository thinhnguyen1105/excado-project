import React from 'react';
import { Row, Tabs, Spin } from 'antd';
import './DetailsHomePage.less';
import CityList from '../components/CityList';
import MachineList from './MachineList';
import MachineDetailBox from '@client/components/MachineDetailBox/MachineDetailBox';
import { RecentViewedItem, Category, Province, CommonKeyword, User } from '@client/services/service-proxies';
import CommonKeywords from './CommonKeywords';
import { SearchState, ProfileState, ProfileReducers, ProfileEffects } from '@client/store';
import { withNamespaces } from '@client/i18n';

const TabPane = Tabs.TabPane;
interface Props {
  searchState: SearchState;
  profileState: ProfileState;
  profileData: User;
  profileReducers: ProfileReducers & ProfileEffects;
  disabledButtonLeft: boolean;
  disabledButtonRight: boolean;
  disabledButtonLeftMostFollow: boolean;
  disabledButtonRightMostFollow: boolean;
  categories: Category[];
  provinces: Province[];
  seeMoreClicked: boolean;
  recentViewedData: RecentViewedItem[];
  commonKeywords: CommonKeyword[];
  hasRecentViewedNextPage: boolean;
  hasRecentViewedPrevPage: boolean;
  isLoadingRecentViewed: boolean;
  isLoadingNearestMachine: boolean;
  newsDataNearestMachine: any;
  resultSuggestForToday: any;
  seeMoreTotalMachineClicked: boolean;
  changeFollowStatus: (starStatus: string, id: string) => void;
  onChangeTabs: (activeKey: string) => void;
  buttonLeft: () => void;
  buttonRight: () => void;
  changeMostFollowNewsFollowStatus: (starStatus: string, id: string) => void;
  buttonLeftMostFollow: () => void;
  buttonRightMostFollow: () => void;
  onSeeMoreCityListButtonClick: () => void;
  getRecentViewedNextPage: () => void;
  getRecentViewedPrevPage: () => void;
  onSeeMoreTotalMachineClick: () => void;
  changeRecentViewedFollowStatus: (starStatus: string, id: string) => void;
  changeSuggestForTodayFollowStatus: (starStatus: string, id: string) => void;
  t: (key: string) => string;
}
interface State { }
class DetailsHomePage extends React.PureComponent<Props, State> {
  render() {
    const translate = this.props.t;

    return (
      <Row className='details-home-page'>
        <Tabs defaultActiveKey='1' onChange={(activeKey) => this.props.onChangeTabs(activeKey)}>
          <TabPane tab={translate('index:news-sell')} key='1'>
            <Spin spinning={this.props.searchState.isLoadingDataSell}>
              <Row className='machine-list'>
                {this.props.searchState.dataTotal.dataSell.data.length === 0
                  ? <div className='box-nodata'>{translate('index:no-data')}</div>
                  : <MachineDetailBox
                    title={translate('index:news-sell')}
                    data={this.props.searchState.dataTotal.dataSell.data}
                    profileState={this.props.profileState}
                    changeFollowStatus={this.props.changeFollowStatus}
                    buttonLeft={this.props.buttonLeft}
                    buttonRight={this.props.buttonRight}
                    disabledButtonLeft={this.props.disabledButtonLeft}
                    disabledButtonRight={this.props.disabledButtonRight}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    hiddenButton={false}
                  />}
              </Row>
            </Spin>
          </TabPane>

          <TabPane tab={translate('index:news-buy-or-rent')} key='2'>
            <Spin spinning={this.props.searchState.isLoadingDataBuy}>
              <Row className='machine-list'>
                {this.props.searchState.dataTotal.dataBuy.data.length === 0
                  ? <div className='box-nodata'>{translate('index:no-data')}</div>
                  : <MachineDetailBox
                    title={translate('index:news-buy-or-rent')}
                    data={this.props.searchState.dataTotal.dataBuy.data}
                    profileState={this.props.profileState}
                    changeFollowStatus={this.props.changeFollowStatus}
                    buttonLeft={this.props.buttonLeft}
                    buttonRight={this.props.buttonRight}
                    disabledButtonLeft={this.props.disabledButtonLeft}
                    disabledButtonRight={this.props.disabledButtonRight}
                    hiddenButton={false}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6} />}
              </Row>
            </Spin>
          </TabPane>

          <TabPane tab={translate('index:machine-for-rent')} key='3'>
            <Spin spinning={this.props.searchState.isLoadingDataLease}>
              <Row className='machine-list'>
                {this.props.searchState.dataTotal.dataLease.data.length === 0
                  ? <div className='box-nodata'>{translate('index:no-data')}</div>
                  : <MachineDetailBox
                    title={translate('index:machine-for-rent')}
                    data={this.props.searchState.dataTotal.dataLease.data}
                    profileState={this.props.profileState}
                    changeFollowStatus={this.props.changeFollowStatus}
                    buttonLeft={this.props.buttonLeft}
                    buttonRight={this.props.buttonRight}
                    disabledButtonLeft={this.props.disabledButtonLeft}
                    disabledButtonRight={this.props.disabledButtonRight}
                    hiddenButton={false}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6} />}
              </Row>
            </Spin>
          </TabPane>

          <TabPane tab={translate('index:machine-nearest')} key='4' >
            <Spin spinning={this.props.isLoadingNearestMachine}>
              <Row className='machine-list'>
                {this.props.profileData && this.props.profileData.province
                  ? (
                    <MachineDetailBox
                      profileState={this.props.profileState}
                      title={translate('index:machine-nearest')}
                      data={this.props.newsDataNearestMachine.data}
                      changeFollowStatus={this.props.changeMostFollowNewsFollowStatus}
                      buttonLeft={this.props.buttonLeft}
                      buttonRight={this.props.buttonRight}
                      disabledButtonLeft={this.props.disabledButtonLeft}
                      disabledButtonRight={this.props.disabledButtonRight}
                      hiddenButton={false}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={6}
                    />
                  ) : (
                    <div className='box-nodata'>
                      {this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? (
                        <a href={`/thong-tin-ca-nhan`}>
                          {translate('common:update-location-notify')}
                        </a>
                      ) : (
                        <a onClick={() => this.props.profileReducers.openModal({ modalName: 'login' })}>
                          {translate('common:login-update-location-notify')}
                        </a>
                      )}
                    </div>
                  )}
              </Row>
            </Spin>
          </TabPane>
        </Tabs>

        {this.props.searchState.dataTotal.dataMostFollow.data && this.props.searchState.dataTotal.dataMostFollow.data.length > 0 ? (
          <Spin spinning={this.props.searchState.isLoadingDataMostFollow}>
            <Row className='machine-list'>
              <MachineDetailBox
                profileState={this.props.profileState}
                title={translate('index:most-follow-news')}
                data={this.props.searchState.dataTotal.dataMostFollow.data}
                changeFollowStatus={this.props.changeMostFollowNewsFollowStatus}
                buttonLeft={this.props.buttonLeftMostFollow}
                buttonRight={this.props.buttonRightMostFollow}
                disabledButtonLeft={this.props.disabledButtonLeftMostFollow}
                disabledButtonRight={this.props.disabledButtonRightMostFollow}
                hiddenButton={false}
                isShowTotalFollowAndView={false}
                xs={12}
                sm={12}
                md={12}
                lg={6}
              />
            </Row>
          </Spin>
        ) : null}

        <Row>
          <MachineList
            categories={this.props.categories}
            seeMoreTotalMachineClicked={this.props.seeMoreTotalMachineClicked}
            onSeeMoreTotalMachineClick={this.props.onSeeMoreTotalMachineClick}
          />
        </Row>

        <CityList
          provinces={this.props.provinces}
          seeMoreClicked={this.props.seeMoreClicked}
          onSeeMoreButtonClick={this.props.onSeeMoreCityListButtonClick}
        />

        {this.props.recentViewedData.length > 0 && (
          <Spin spinning={this.props.isLoadingRecentViewed}>
            <Row className='machine-list'>
              <MachineDetailBox
                title={translate('index:recent-news')}
                data={this.props.recentViewedData.map((item: RecentViewedItem) => item.news)}
                profileState={this.props.profileState}
                xs={12}
                sm={12}
                md={12}
                lg={6}
                buttonRight={this.props.getRecentViewedNextPage}
                buttonLeft={this.props.getRecentViewedPrevPage}
                disabledButtonRight={this.props.hasRecentViewedNextPage}
                disabledButtonLeft={this.props.hasRecentViewedPrevPage}
                changeFollowStatus={this.props.changeRecentViewedFollowStatus}
                hiddenButton={false}
              />
            </Row>
          </Spin>
        )}

        {this.props.resultSuggestForToday.data && this.props.resultSuggestForToday.data.length > 0 ? (
          <Row className='machine-list'>
            <MachineDetailBox
              title={translate('index:suggest-for-today')}
              data={this.props.resultSuggestForToday.data}
              profileState={this.props.profileState}
              hiddenButton={true}
              disabledButtonLeft={true}
              disabledButtonRight={true}
              xs={12}
              sm={12}
              md={12}
              lg={6}
              changeFollowStatus={this.props.changeSuggestForTodayFollowStatus}
              buttonLeft={() => { return; }}
              buttonRight={() => { return; }}
            />
          </Row>
        ) : null}

        <CommonKeywords commonKeywords={this.props.commonKeywords} t={this.props.t} />
      </Row>
    );
  }
}

export default withNamespaces('index')(DetailsHomePage);
