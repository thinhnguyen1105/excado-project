import React, { Fragment } from 'react';
import { Layout, Icon, Dropdown, Menu, Spin } from 'antd';
import './AdminLayout.less';
import { SideBar } from './components/SideBar';
import { CollapsedButton } from './components/CollapsedButton';
import { HeaderDropdown } from './components/HeaderDropdown';
import { changeLanguage, withNamespaces } from '@client/i18n';

interface Props {
  openedSubMenu: string;
  selectedMenuItem: string;
  currentLanguage: string;
  t: (key: string) => string;
}
interface State {
  openedSubMenu: string;
  selectedMenuItem: string;
  menuCollapsed: boolean;
  isChangingLanguage: boolean;
}
class BaseAdminLayout extends React.PureComponent<Props, State> {
  state: State = {
    openedSubMenu: this.props.openedSubMenu,
    selectedMenuItem: this.props.selectedMenuItem,
    menuCollapsed: false,
    isChangingLanguage: false,
  };

  toggle = () => {
    this.setState({
      menuCollapsed: !this.state.menuCollapsed,
    });
  };

  openSubMenuChange = (newOpenedSubMenu: string) => {
    this.setState({
      openedSubMenu: newOpenedSubMenu,
    });
  }

  changeLanguage = (newLang: string) => {
    this.setState({
      isChangingLanguage: true,
    });
    changeLanguage(newLang);
    this.setState({
      isChangingLanguage: false,
    });
  }

  render() {
    const translate = this.props.t;
    const menuTheme = 'light';
    const menuWidth = 256;
    const collapsedWidth = 80;
    const links = [
      {
        key: 'Pro Antd',
        title: 'Pro Antd',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <Icon type='github' />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ];

    return (
      <div className='admin-container'>
        <Spin spinning={this.state.isChangingLanguage}>
          <Layout>
            <SideBar
              menuWidth={menuWidth}
              collapsedWidth={collapsedWidth}
              menuTheme={menuTheme}
              openedSubMenu={this.state.openedSubMenu}
              selectedMenuItem={this.state.selectedMenuItem}
              openSubMenuChange={this.openSubMenuChange}
              menuCollapsed={this.state.menuCollapsed}
            />

            <Layout
              style={{ minHeight: '100vh' }}>
              <Layout.Header
                style={{ padding: 0 }}>
                <div className='header'>
                  <CollapsedButton menuCollapsed={this.state.menuCollapsed} toggle={this.toggle} />

                  <div className='right'>
                    <Dropdown placement='bottomCenter' overlay={(
                      <Menu onClick={({ key }) => this.changeLanguage(key)} selectedKeys={[this.props.currentLanguage]}>
                        <Menu.Item key='en'>
                          <img src='/static/images/en.png' style={{ width: '20px', height: '20px' }} /> &nbsp; {translate(`common:en`)}
                        </Menu.Item>
                        <Menu.Item key='vn'>
                          <img src='/static/images/vn.png' style={{ width: '20px', height: '20px' }} /> &nbsp; {translate(`common:vn`)}
                        </Menu.Item>
                      </Menu>
                    )}>
                      <span className='ant-dropdown-link' style={{ marginRight: '10px', cursor: 'pointer' }}>
                        <img src={`/static/images/${this.props.currentLanguage}.png`} style={{ width: '20px', height: '20px' }} /> &nbsp; {translate(`common:${this.props.currentLanguage}`)}
                      </span>
                    </Dropdown>

                    <HeaderDropdown />
                  </div>
                </div>
              </Layout.Header>

              <Layout.Content
                className='content'>
                {this.props.children}
              </Layout.Content>

              <Layout.Footer
                style={{ padding: 0 }}>
                <footer className='footer'>
                  <div className='links'>
                    {links.map((link) => (
                      <a
                        key={link.key}
                        title={link.key}
                        target={link.blankTarget ? '_blank' : '_self'}
                        href={link.href}
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                  <div className='copyright'>
                    <Fragment>
                      Copyright <Icon type='copyright' /> 2018 - Techkids Software
                    </Fragment>
                  </div>
                </footer>
              </Layout.Footer>
            </Layout>
          </Layout>
        </Spin>
      </div>
    );
  }
}

export const AdminLayout = withNamespaces('common')(BaseAdminLayout);
