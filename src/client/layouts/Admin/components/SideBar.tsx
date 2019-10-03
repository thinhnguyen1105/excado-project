import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './SideBar.less';
import { getMenuConfigs, checkPermission } from '@client/core';
import { initStore, AuthUser, withRematch } from '@client/store';
import { withNamespaces } from '@client/i18n';

interface Props {
  menuCollapsed: boolean;
  menuWidth: number;
  collapsedWidth: number;
  menuTheme: 'dark'|'light';
  selectedMenuItem: string;
  openedSubMenu: string;
  openSubMenuChange: (newOpenSubMenu: string) => void;
  t: (key: string) => string;
}
interface State {}
class SideBarMenu extends React.PureComponent<Props & {authUser: AuthUser}, State> {
  state: State = {
    selectedMenuItem: '',
    openedSubMenu: '',
  };

  render () {
    const translate = this.props.t;

    const getMenuItem = (item: any) => {
      if (checkPermission(this.props.authUser, item.permission)) {
        return (
          <Menu.Item key={item.path}>
            <a href={item.path}>
              <span>{translate(`common:${item.name}`)}</span>
            </a>
          </Menu.Item>
        );
      }
      return;
    };

    const getSubMenus = (subMenu: any) => {
      let render = false;
      for (const item of subMenu.items) {
        if (checkPermission(this.props.authUser, item.permission)) {
          render = true;
          break;
        }
      }
      if (render) {
        return (
          <Menu.SubMenu key={subMenu.name} title={<span><Icon type={subMenu.icon} /><span>{translate(`common:${subMenu.name}`)}</span></span>}>
            {subMenu.items.map((item: any) => getMenuItem(item))}
          </Menu.SubMenu>
        );
      }
      return;
    };

    const menuProps: any = {};
    if (!this.props.menuCollapsed) {
      menuProps.openKeys = [this.props.openedSubMenu];
    }
    return (
      <Layout.Sider
        trigger={null}
        collapsible={true}
        collapsed={this.props.menuCollapsed}
        breakpoint='lg'
        width={this.props.menuWidth}
        collapsedWidth={this.props.collapsedWidth}
        theme={this.props.menuTheme}
        className='sider'
      >
        <div className='logo' id='logo'>
            <a href='#'>
              <img src='/static/images/logo-timmay.png' alt='logo' />
              {/* <h1>Timmay.vn</h1> */}
            </a>
        </div>

        <Menu
          key='Menu'
          mode='inline'
          inlineCollapsed={this.props.menuCollapsed}
          theme={this.props.menuTheme}
          style={{ padding: '16px 0', width: '100%' }}
          className='sider'
          onOpenChange={(openKeys: string[]) => this.props.openSubMenuChange(openKeys[openKeys.length - 1])}
          selectedKeys={[this.props.selectedMenuItem]}
          {...menuProps}
        >
          {getMenuConfigs().map((item) => getSubMenus(item))}
        </Menu>
      </Layout.Sider>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    authUser: rootState.profileModel.authUser,
  };
};

const mapDispatch = (_rootReducer: any) => {
  return {};
};

const SideBar = withNamespaces('common')(withRematch<Props>(initStore, mapState, mapDispatch)(SideBarMenu));

export {
  SideBar,
};
