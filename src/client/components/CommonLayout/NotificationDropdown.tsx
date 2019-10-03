import React from 'react';
import { List, Icon, Spin } from 'antd';
import { Notification } from '../../services/service-proxies';
import { getShopUrl, reportReasons } from '../../core';
import * as moment from 'moment';
import './NotificationDropdown.less';
import 'firebase/auth';
import { withNamespaces } from '@client/i18n';

interface Props {
  loadingNotification: boolean;
  hasNext: boolean;
  notificationList: Notification[];
  loadMoreNotifications: () => void;
  readAllNotifications: () => void;
  readNotification: (notificationId: string) => void;
  t: (key: string) => string;
}
const NotificationDropdown = React.memo<Props>((props: Props) => {
  const getNotificationContent = (notification: Notification) => {
    if (notification.type === 'WARN_NEWS') {
      const isShop = notification.news.shop && notification.news.shop._id;
      if (isShop) {
        return (
          <p>
            {props.t('common:news')} &nbsp;
            <a title={notification.news.title} onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `${getShopUrl(notification.news.shop.domain)}/bai-dang-cua-hang/${notification.news._id}`;
            }}>
              <b>{notification.news.title}</b>
            </a> &nbsp;
            {props.t('common:has-notification')}: &nbsp;
            <div style={{wordBreak: 'break-word', whiteSpace: 'pre-line'}}>{notification.description}</div>
          </p>
        );
      } else {
        return (
          <p>
            {props.t('common:news')} &nbsp;
            <a title={notification.news.title} onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `/bai-dang/${notification.news._id}`;
            }}>
              <b>{notification.news.title}</b>
            </a> &nbsp;
            {props.t('common:has-notification')}: &nbsp;
            <div style={{wordBreak: 'break-word', whiteSpace: 'pre-line'}}>{notification.description}</div>
          </p>
        );
      }
    } else if (notification.type === 'CREATE_NEWS') {
      const isShop = notification.news.shop && notification.news.shop._id;
      if (isShop) {
        const displayName = notification.news.shop.name;
        return (
          <p>
            {props.t('common:news')} &nbsp;
            <a title={notification.news.title} onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `${getShopUrl(notification.news.shop.domain)}/bai-dang-cua-hang/${notification.news._id}`;
            }}>
              <b>{notification.news.title}</b>
            </a> &nbsp;
            {props.t('common:successfully-in-the-store')} &nbsp;
            <a title={displayName} onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `${getShopUrl(notification.news.shop.domain)}/thong-tin-cua-hang`;
            }}>
              <b>{displayName}</b>
            </a>
          </p>
        );
      } else {
        return (
          <p>
            {props.t('common:news')} &nbsp;
            <a title={notification.news.title} onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `/bai-dang/${notification.news._id}`;
            }}>
              <b>{notification.news.title}</b>
            </a> &nbsp;
            {props.t('common:successfully-news')}
          </p>
        );
      }
    } else if (notification.type === 'DELETE_NEWS') {
      const isShop = notification.news.shop && notification.news.shop._id;
      const displayReason = reportReasons.filter((item) => item.value === notification.report.reports[0].reason)[0];
      if (isShop) {
        const displayName = notification.news.shop.name;
        return (
          <p>
            {props.t('common:news')} &nbsp;
            <a title={notification.news.title} onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `${getShopUrl(notification.news.shop.domain)}/bai-dang-cua-hang/${notification.news._id}`;
            }}>
              <b>{notification.news.title}</b>
            </a> &nbsp;
            {props.t('common:in-store')} &nbsp;
            <a title={displayName} onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `${getShopUrl(notification.news.shop.domain)}/thong-tin-cua-hang`;
            }}>
              <b>{displayName}</b>
            </a> &nbsp;
            {props.t('common:is-deleted-arcoding-to-violation')}: {props.t(`common:${displayReason.value.toLowerCase()}`)}
          </p>
        );
      } else {
        return (
          <p>
            {props.t('common:news')} &nbsp;
            <a title={notification.news.title} onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `/bai-dang/${notification.news._id}`;
            }}>
              <b>{notification.news.title}</b>
            </a> &nbsp;
            {props.t('common:is-deleted-arcoding-to-violation')}: {props.t(`common:${displayReason.value.toLowerCase()}`)}
          </p>
        );
      }
    } else if (notification.type === 'FOLLOW_USER') {
      const displayName = notification.news.owner.fullName || notification.news.owner.email || notification.news.owner.phoneNo;
      return (
        <p>
          {props.t('common:user')} &nbsp;
          <a title={displayName}
            onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `/nguoi-dung/${notification.news.owner._id}`;
            }}
          >
            <b>{displayName}</b>
          </a> &nbsp;
          {props.t('common:just-posted-a-news')} &nbsp;
          <a title={notification.news.title}
            onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `/bai-dang/${notification.news._id}`;
            }}
          >
            <b>{notification.news.title}</b>
          </a>
        </p>
      );
    } else if (notification.type === 'FOLLOW_SHOP') {
      const displayName = notification.news.shop.name;
      return (
        <p>
          {props.t('common:shop')} &nbsp;
          <a title={displayName}
            onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `${getShopUrl(notification.news.shop.domain)}/thong-tin-cua-hang`;
            }}
          >
            <b>{displayName}</b>
          </a> &nbsp;
          {props.t('common:just-posted-a-news')} &nbsp;
          <a title={notification.news.title}
            onClick={() => {
              props.readNotification(notification._id);
              window.location.href = `${getShopUrl(notification.news.shop.domain)}/bai-dang-cua-hang/${notification.news._id}`;
            }}
          >
            <b>{notification.news.title}</b>
          </a>
        </p>
      );
    }
    return ;
  };

  return (
    <div className='notification-dropdown'>
      <Spin spinning={props.loadingNotification}>
        {props.notificationList.length > 0 ? (
          <div>
            <List
              className='notification-list'
              itemLayout='horizontal'
              dataSource={props.notificationList}
              renderItem={(item: Notification) => (
                <List.Item
                  onClick={async () => props.readNotification(item._id)}
                  style={item.state === 'UNREAD' ? {background: '#e6f7ff', cursor: 'pointer'} : {}}
                >
                  <List.Item.Meta
                    title={getNotificationContent(item)}
                    description={<span style={{fontSize: '12px'}}><Icon type='clock-circle' /> {moment(item.createdAt).format('DD-MM-YYYY HH:mm')}</span>}
                  />
                </List.Item>
              )}
            >
              {props.hasNext && (
                <List.Item className='loadmore-containter'>
                  <a className='loadmore-button' onClick={props.loadMoreNotifications} type='primary'>{props.t('common:see-more')}</a>
                </List.Item>
              )}
            </List>
            <div className='small-text'>
              <a onClick={props.readAllNotifications}>{props.t('common:mark-all-as-read')}</a>
            </div>
          </div>
        ) : (
          <div style={{height: '60px', textAlign: 'center', marginTop: '40px', fontWeight: 500}}>
            {props.loadingNotification ? '' : `${props.t('common:no-new-notification')}`}
          </div>
        )}
      </Spin>
    </div>
  );
});

export default withNamespaces('common')(NotificationDropdown);
