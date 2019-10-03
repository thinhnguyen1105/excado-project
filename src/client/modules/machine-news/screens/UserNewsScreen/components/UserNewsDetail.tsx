import * as React from 'react';
import './UserNewsDetail.less';
import { Tabs, Spin, Row, Button, Icon } from 'antd';
import MachineItem from '@client/components/MachineItem/MachineItem';
import { ProfileState } from '@client/store';
import { ElasticSearchItemResult } from '@client/services/service-proxies';
import { getImageUrl, newsTypes } from '@client/core';
import { isMobile } from 'react-device-detect';
import DetailMachineBoxHorizontal from '../../SearchDetailsScreen/components/DetailMachineBoxHorizontal';

const TabPane = Tabs.TabPane;
interface Props {
  hasNext: boolean;
  hasPrev: boolean;
  loading: boolean;
  data: ElasticSearchItemResult[];
  activeTab: string;
  profileState: ProfileState;
  getNextPage: () => void;
  getPrevPage: () => void;
  activeTabChange: (payload: { activeTab: string }) => void;
  changeFollowStatus: (starStatus: string, id: string) => void;
  t: (key: string) => string;
}
const UserNewsDetail = React.memo<Props>((props: Props) => {
  const renderShopItems = props.data.map((item: any, index) => {
    return (
      !isMobile ?
        <MachineItem
          id={item._id}
          key={index}
          lg={6}
          md={6}
          sm={24}
          xs={24}
          linkRedirect={`/bai-dang/${item._id}`}
          imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : (item.categoryId as any).imageUrl : ''}
          title={item.title}
          price={item.price}
          newsState={item.state}
          location={item.location ? item.location.name : `${props.t('user-page:undefined')}`}
          ownerName={(item.owner as any).fullName}
          starStatus={item.isFollowing ? 'filled' : 'outlined'}
          changeFollowStatus={props.changeFollowStatus}
          ownerId={item.owner ? item.owner._id : ''}
          currentUserId={props.profileState && props.profileState.authUser && props.profileState.authUser.id ? props.profileState.authUser.id : ''}
        /> :
        <DetailMachineBoxHorizontal
          id={item._id}
          key={index}
          imageUrl={item.imageUrls[0]}
          title={item.title}
          price={item.price}
          linkRedirect={`/bai-dang/${item._id}`}
          location={(item.location as any).name}
          newsState={item.state}
          typeOfMachine={(item.categoryId as any).name}
          brand={(item.brand as any).name}
          owner={item.owner}
          starStatus={item.isFollowing ? 'filled' : 'outlined'}
          changeFollowStatus={props.changeFollowStatus}
          ownerId={item.owner ? item.owner._id : ''}
          currentUserId={props.profileState && props.profileState.authUser && props.profileState.authUser.id ? props.profileState.authUser.id : ''}
        />
    );
  });

  return (
    <div className='shop-details'>
      <Tabs
        activeKey={props.activeTab}
        tabBarStyle={{ background: '#fff', margin: 0 }}
        onChange={(activeKey: string) => props.activeTabChange({ activeTab: activeKey })}
      >
        {newsTypes.map((item) => (
          <TabPane tab={props.t(`common:${item.value.toLowerCase()}`)} key={item.value}>
            <Spin spinning={props.loading}>
              {props.data.length > 0 ? (
                <div>
                  <Row>
                    {renderShopItems}
                  </Row>

                  <Row className='next-and-back-button'>
                    {props.hasPrev && (
                      <Button className='button-back'
                        onClick={props.getPrevPage}
                      >
                        <Icon type='left' /> {props.t('common:previous')}
                      </Button>
                    )}
                    {props.hasNext && (
                      <Button className='button-next' type='primary' onClick={props.getNextPage}>{props.t('common:next')} <Icon type='right' /></Button>
                    )}
                  </Row>
                </div>
              ) : (
                  <div className='no-data'>
                    {props.t('common:no-data')}
                </div>
                )}
            </Spin>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
});

export default UserNewsDetail;
