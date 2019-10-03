import React from 'react';
import { Tabs, Button } from 'antd';
import MachineItem from '@client/components/MachineItem/MachineItem';
import '@client/components/MachineDetailBox/MachineDetailBox.less';
import './DetailsProduct.less';
import { News } from '@client/services/service-proxies';
import { ProfileState } from '@client/store';
import { getImageUrl } from '@client/core';

interface Props {
  data: News[];
  profileState: ProfileState;
  changeFollowStatus: (starStatus: string, id: string) => void;
  t: (key: string) => string;
}
const TabPane = Tabs.TabPane;
const DetailsProduct = React.memo<Props>((props: Props) => {
  const translate = props.t;
  return (
    <div>
      <Tabs className='tab' defaultActiveKey='1' >
        <TabPane tab={translate('shop-info:public-news')} key='1' style={{display: 'flex', flexWrap: 'wrap'}}>
          {props.data && props.data.length > 0 ? (
            props.data.map((item, index) => (
              <MachineItem
                key={index}
                id={item._id}
                starStatus={item.isFollowing ? 'filled' : 'outlined'}
                changeFollowStatus={props.changeFollowStatus}
                lg={8}
                md={8}
                sm={12}
                xs={24}
                linkRedirect={`/bai-dang-cua-hang/${item._id}`}
                imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
                title={item.title}
                price={item.price}
                newsState={item.state}
                location={item.location ? item.location.name : ''}
                ownerName={item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email
                  ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : 'test'}
                ownerId={item.owner ? item.owner._id : ''}
                currentUserId={props.profileState && props.profileState.authUser && props.profileState.authUser.id ? props.profileState.authUser.id : ''}
              />
            ))
          ) : (
            <div className='noti-store-no-data'>
              {translate('shop-info:no-data')}
            </div>
          )}
        </TabPane>
      </Tabs>

      <div>
        <a href='/bai-dang-cua-hang'>
          <Button type='primary' className='button-see-more'>{translate('shop-info:more').toUpperCase()}</Button>
        </a>
      </div>
    </div>
  );
});

export default DetailsProduct;
