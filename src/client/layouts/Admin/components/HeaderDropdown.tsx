import React from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import './HeaderDropdown.less';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeFirebaseApp } from '@client/core';
import { AuthUser, initStore, withRematch } from '@client/store';
import { withNamespaces } from '@client/i18n';

const logOut = () => {
  initializeFirebaseApp();
  firebase.auth().signOut();
  window.location.href = '/auth/logout';
};

interface Props {
  authUser: AuthUser;
  t: (key: string) => string;
}
const DropdownMenu = React.memo<Props>((props: Props) => {
  const avatarUrl = props.authUser && props.authUser.avatarUrl ? props.authUser.avatarUrl : '/static/images/default-avatar.jpg';
  const menu = (
    <Menu className='dropdownMenu' selectedKeys={[]}>
      <Menu.Item key='homePage'>
        <a href='/'>
          <Icon type='home' />&nbsp; <span>{props.t(`common:back-to-home-page`)}</span>
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='logout'>
        <a onClick={logOut}>
          <Icon type='logout' />&nbsp; <span>{props.t(`common:log-out`)}</span>
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlayClassName='headerDropdown' overlay={menu}>
      <span className={`action account`}>
        <div
          className='avatar'
          style={{
            backgroundImage: `url(${avatarUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <span className='name'>{props.authUser ? props.authUser.fullName : 'Admin'}</span>
      </span>
    </Dropdown>
  );
});

const mapState = (rootState: any) => {
  return {
    authUser: rootState.profileModel.authUser,
  };
};

const mapDispatch = (_rootReducer: any) => {
  return {};
};

const HeaderDropdown = withRematch(initStore, mapState, mapDispatch)(withNamespaces(['common'])(DropdownMenu));

export {
  HeaderDropdown,
};
