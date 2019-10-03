import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withNamespaces } from '@client/i18n';
import './AdminSidebar.less';

interface Props {
  t: (key: string) => string;
}
export const AdminSidebar = withNamespaces('admin-reports')((props: Props) => {
  const menuWidth = 256;
  const menuTheme = 'light';
  const translate = props.t;

  return (
    <Layout.Sider
      trigger={null}
      collapsible={true}
      breakpoint='lg'
      width={menuWidth}
      theme={menuTheme}
      className='sider'
    >
      <div className='logo' id='logo'>
        <a href='/users'>
          <img src='/static/images/logo-timmay.png' alt='logo' />
        </a>
      </div>

      <Menu
        key='Menu'
        mode='inline'
        theme={menuTheme}
        style={{ padding: '16px 0', width: '100%' }}
        className='sider'
      >
        <Menu.Item key='/admin/reports'>
          <a href='/admin/reports'>
            <Icon type='warning' />
            <span>{translate('admin-reports:reports')}</span>
          </a>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
});
