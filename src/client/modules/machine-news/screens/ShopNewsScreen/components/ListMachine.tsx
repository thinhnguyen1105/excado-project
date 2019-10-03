import React from 'react';
import { Button, Row, Icon } from 'antd';
import MachineItem from '@client/components/MachineItem/MachineItem';
import './ListMachine.less';
import { News } from '@client/services/service-proxies';
import { getShopUrl, getImageUrl } from '@client/core';
import { ProfileState } from '@client/store';

interface Props {
  data: News[];
  hasNext: boolean;
  hasPrev: boolean;
  profileState: ProfileState;
  getNextPage: () => void;
  getPrevPage: () => void;
  changeFollowStatus: (starStatus: string, id: string) => void;
  t: (key: string) => string;
}
const ListMachine = React.memo<Props>((props: Props) => {
  if (props.data.length > 0) {
    return (
      <div className='list-machine'>
        <Row>
          {props.data.map((item, index) =>
            <MachineItem
              id={item._id}
              key={index}
              lg={8}
              md={8}
              sm={24}
              xs={24}
              linkRedirect={`${getShopUrl(item.shop.domain)}/bai-dang-cua-hang/${item._id}`}
              imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
              title={item.title}
              price={item.price}
              newsState={item.state}
              location={item.location ? item.location.name : ''}
              ownerName={item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email
                ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : 'test'}
              starStatus={item.isFollowing ? 'filled' : 'outlined'}
              changeFollowStatus={props.changeFollowStatus}
              ownerId={item.owner ? item.owner._id : ''}
              currentUserId={props.profileState && props.profileState.authUser && props.profileState.authUser.id ? props.profileState.authUser.id : ''}
            />,
          )}
        </Row>
        <Row className='group-button'>
          {props.hasPrev && (
            <Button className='button-previous' onClick={props.getPrevPage}>
              <Icon type='left' /> {props.t('common:prev')}
            </Button>
          )}
          {props.hasNext && (
            <Button className='button-next' type='primary' onClick={props.getNextPage}>
              {props.t('common:next')} <Icon type='right' />
            </Button>
          )}
        </Row>
      </div>
    );
  } else {
    return (
      <div className='list-machine' style={{
        padding: '42px 20px',
        fontSize: '24px',
        textAlign: 'center',
      }}>
        {props.t('common:no-data')}
      </div>
    );
  }
});

export default ListMachine;
