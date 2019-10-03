import React from 'react';
import { Spin } from 'antd';
import './Authorize.less';
import firebase from 'firebase/app';
import 'firebase/auth';
import Router from 'next/router';
import { getOrCreateStore, initStore } from '@client/store';
import { config } from '@client/config';
import { initializeFirebaseApp, getMenuConfigs } from '@client/core';
import { AdminLayout } from '@client/layouts';
import { i18n } from '@client/i18n';

interface AuthorizeProps {}
interface AuthorizeState {
  isAuthenticated?: boolean;
  isAuthorized?: boolean;
  openedSubMenu: string;
  selectedMenuItem: string;
  currentLanguage: string;
}
export const Authorize = (Component: any, permission: any, authenticationRequired?: boolean, layoutName?: string) => {
  return (props: any) => {
    class AuthorizeComponent extends React.PureComponent<AuthorizeProps, AuthorizeState> {
      state: AuthorizeState = {
        isAuthenticated: undefined,
        isAuthorized: undefined,
        openedSubMenu: '',
        selectedMenuItem: '',
        currentLanguage: '',
      };

      componentDidMount () {
        initializeFirebaseApp();
        firebase.auth().onAuthStateChanged(async (user) => {
          if (!user) {
            this.setState({
              isAuthenticated: false,
            });
          } else {
            const idTokenInfo = await user.getIdTokenResult();
            let isAuthorized = false;
            if (!permission || permission.length === 0) {
              isAuthorized = true;
            } else if (permission && permission.length && idTokenInfo.claims.permissions) {
              const filterPermission = permission.filter((val: string) => {
                return idTokenInfo.claims.permissions.indexOf(val) === -1;
              });

              filterPermission && filterPermission.length ? isAuthorized = false : isAuthorized = true;
            }

            if (isAuthorized) {
              const authUser = {
                id: idTokenInfo.claims.user_id,
                email: idTokenInfo.claims.email,
                fullName: idTokenInfo.claims.name,
                avatarUrl: idTokenInfo.claims.avatarUrl,
                roles: idTokenInfo.claims.roles,
                permissions: idTokenInfo.claims.permissions,
              };
              getOrCreateStore(initStore, {}).dispatch.profileModel.updateProfileInfo(authUser);

              const pathname = window.location.pathname;
              let openedSubMenu = '';
              getMenuConfigs().map((subMenu: any) => {
                subMenu.items.map((item: any) => {
                  if (item.path === pathname) {
                    openedSubMenu = subMenu.name;
                  }
                });
              });

              this.setState({
                isAuthenticated: true,
                isAuthorized,
                openedSubMenu,
                selectedMenuItem: pathname,
                currentLanguage: i18n.i18n.language ? i18n.i18n.language : config.i18n.defaultLang,
              });
            } else {
              this.setState({
                isAuthenticated: true,
                isAuthorized,
              });
            }
          }
        });
      }

      render () {
        if (this.state.isAuthenticated === false) {
          if (authenticationRequired) {
            Router.push('/auth/login');
          }
        }

        if (this.state.isAuthorized === false) {
          Router.push('/_error');
        }

        const renderAdminLayout = () => {
          return (
            <div>
              {(this.state.isAuthenticated && this.state.isAuthorized) || !authenticationRequired ? (
                <AdminLayout
                  openedSubMenu={this.state.openedSubMenu}
                  selectedMenuItem={this.state.selectedMenuItem}
                  currentLanguage={this.state.currentLanguage}
                >
                  <Component {...props} />
                </AdminLayout>
              ) : (
                <div className='loader'>
                  <Spin spinning={true} />
                </div>
              )}
            </div>
          );
        };

        switch (layoutName) {
          case 'admin':
            return renderAdminLayout();
          default:
            return renderAdminLayout();
        }
      }
    }

    return <AuthorizeComponent />;
  };
};
