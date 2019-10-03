import React from 'react';
import './FollowItem.less';
import { Card, Button, Dropdown, Menu, Icon } from 'antd';
import moment from 'moment';

interface Props {
  _id: string;
  followId: string;
  redirectUrl: string;
  imageUrl: string;
  displayName: string;
  createdAt: number;
  unfollowItem: (id: string, followId: string) => void;
  t: (key: string) => string;
}
const FollowItem = React.memo<Props>((props: Props) => {
  const unfollowItem = () => {
    props.unfollowItem(props._id, props.followId);
  };

  return (
    <Card className='follow-item'>
      <div className='image-container'>
        <a href={props.redirectUrl} title={props.displayName} target='_blank'>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${props.imageUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </a>
      </div>
      <div className='info-container'>
        <div className='info'>
          <a href={props.redirectUrl} title={props.displayName} target='_blank'>
            <h4>{props.displayName}</h4>
          </a>
          <div className='created-at'>{moment(new Date(props.createdAt)).format(`DD/MM/YYYY`)}</div>
        </div>
        <div className='follow-button'>
          <Dropdown
            overlay={(
              <Menu>
                <Menu.Item>
                  <a onClick={unfollowItem}>
                    <Icon type='close' /> {props.t(`follows:unfollow`)}
                  </a>
                </Menu.Item>
              </Menu>
            )}
          >
            <Button icon='check'>{props.t(`follows:followed`)}</Button>
          </Dropdown>
        </div>
      </div>
    </Card>
  );
});

export default FollowItem;
