import React from 'react';
import Router from 'next/router';
import { Icon } from 'antd';
import './NavBarNext.less';
import { News } from '@client/services/service-proxies';

interface Props {
  newsTitle: string;
  starStatus: any;
  newsData: News;
  changeFollowItemStatus: (starStatus: string, id: string) => void;
  t: (key: string) => string;
}

const NavBarNext = React.memo<Props>((props: Props) => {
  return (
    <div className='header-detail-news'>
      <a className='icon-back' onClick={() => Router.back()}>
        <Icon type='left' /> {props.t(`common:back`)}
      </a>
      <span className='sub-header'>
        {props.newsTitle}
      </span>
      <a onClick={() => props.changeFollowItemStatus(props.starStatus, props.newsData._id)}><Icon className='icon-star' type='star' theme={props.starStatus}></Icon></a>

    </div>
  );
});

export default NavBarNext;
