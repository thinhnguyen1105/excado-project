import React from 'react';
import { PagingButtons } from '@client/components';
import './TabContent.less';
import { Row, Col, Empty } from 'antd';
import FollowItem from './FollowItem';
import { getShopUrl } from '@client/core';

interface Props {
  activeTab: 'users'|'shops';
  searchKeyword: string;
  placeholder: string;
  data: any[];
  before?: string;
  after?: string;
  unfollow: (id: string, followId: string) => void;
  getPrevPage: () => void;
  getNextPage: () => void;
  handleSearchChange: (value: string) => void;
  getData: (value: string) => void;
  t: (key: string) => string;
}
const TabContent = React.memo<Props>((props: Props) => {
  return (
    <div className='tab-content'>
      {props.data.length > 0 ? (
        <Row type='flex' gutter={24}>
          {props.data.map((ite) => {
            const item = props.activeTab === 'users' ? ite.followee : ite.shop;
            return (
              <Col xs={24} xl={12} key={item._id} style={{marginBottom: '24px'}}>
                <FollowItem
                  _id={item._id}
                  followId={ite._id}
                  redirectUrl={props.activeTab === 'users' ? `/nguoi-dung/${item._id}` : getShopUrl(item.domain)}
                  imageUrl={props.activeTab === `users` ? item.avatarUrl ? item.avatarUrl : `/static/images/default-avatar.jpg` : item.logoImage ? item.logoImage : `/static/images/home.png`}
                  displayName={props.activeTab === `users` ? item.fullName || item.email || item.phoneNo : item.name}
                  createdAt={item.createdAt}
                  unfollowItem={props.unfollow}
                  t={props.t}
                />
              </Col>
            );
          })}
        </Row>
      ) : (
        <Empty />
      )}

      <PagingButtons
        before={props.before}
        after={props.after}
        getNextPage={props.getNextPage}
        getPrevPage={props.getPrevPage}
      />
    </div>
  );
});

export default TabContent;
