import * as React from 'react';
import { Row, Col, Button, Input, Dropdown, Icon, Badge, Tag, Select, AutoComplete } from 'antd';
import './Header.less';
import { ProfileState, ProfileReducers, ProfileEffects, withRematch, initStore } from '@client/store';
import DropdownMenu from './DropdownMenu';
import { RegisterModal } from './RegisterModal';
import { LoginModal } from './LoginModal';
import { config } from '@client/config';
import { initializeFirebaseApp, notificationState } from '@client/core';
import firebase from 'firebase/app';
import { changeLanguage, i18n, withNamespaces } from '@client/i18n';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import * as jsCookie from 'js-cookie';
import { Notification, CommonKeyword, User } from '../../services/service-proxies';
import NotificationDropdown from './NotificationDropdown';
import HamburgerMenu from './HamburgerMenu';
import debounce from 'lodash/debounce';
const Search = Input.Search;
interface Props {
  searchKeyword: string;
  suggestions: string[];
  commonKeywords: CommonKeyword[];
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  fullName?: string;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  searchSuggestions: (payload: {keyword: string}) => void;
  t: (key: string) => string;
}
interface State {
  toggle: boolean;
  loadingNotification: boolean;
  notifications: {
    data: Notification[];
    before?: string;
    after?: string
  };
  sortBy: string;
  first: number;
  unreadNotifications: number;
  hasNotification: boolean;
  currentLanguage: string;
  searchBarStatus: boolean;
  userProfile?: User;
}
class MainHeader extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.searchSuggestions = debounce(this.searchSuggestions, 250);
  }

  state: State = {
    toggle: false,
    loadingNotification: false,
    notifications: {
      data: [],
      before: undefined,
      after: undefined,
    },
    sortBy: 'createdAt|desc',
    first: 10,
    unreadNotifications: 0,
    hasNotification: true,
    currentLanguage: i18n.i18n.language ? i18n.i18n.language : config.i18n.defaultLang,
    searchBarStatus: false,
  };

  searchSuggestions = (keyword: string) => {
    this.props.searchSuggestions({keyword});
  }

  componentDidMount() {
    this.loadNotificationCount();
    this.loadProfileInfo();

    initializeFirebaseApp();
    (window as any).recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      'size': 'invisible',
    });

    this.setState({
      currentLanguage: i18n.i18n.language ? i18n.i18n.language : config.i18n.defaultLang,
    });
  }

  loadProfileInfo = async () => {
    if (this.props.profileState.authUser && this.props.profileState.authUser.id) {
      const idToken = jsCookie.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const profileData = await serviceProxy.findPublicProfile(this.props.profileState.authUser.id);

      this.setState({
        userProfile: profileData,
      });
    }
  }

  loadNotificationCount = async () => {
    // load notification count
    if (this.props.profileState.authUser && this.props.profileState.authUser.id) {
      const idToken = jsCookie.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const countNotificationResult = await serviceProxy.countUnreadNotifications(this.props.profileState.authUser.id);

      this.setState({
        unreadNotifications: countNotificationResult.unreadNotifications,
      });
    }
  }

  onTurnOnSearchBar = () => {
    this.setState({ searchBarStatus: true });
  }

  onTurnOffSearchBar = () => {
    this.setState({ searchBarStatus: false });
  }

  changeLanguage = async (lang: string) => {
    changeLanguage(lang);
    this.setState({currentLanguage: lang});
  }

  handleHamburgerMenuClick = async () => {
    await this.setState({ toggle: !this.state.toggle });
    if (this.state.toggle) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }

  logOut = () => {
    firebase.auth().signOut();
    window.location.href = '/auth/logout';
  }

  loadNotifications = async (dropdownVisible: any) => {
    if (dropdownVisible && this.state.notifications.data.length === 0 && this.state.hasNotification) {
      this.setState({
        loadingNotification: true,
      });

      try {
        const idToken = jsCookie.get('token');
        const serviceProxy = getServiceProxy(idToken);
        const notificationsResult = await serviceProxy.findNotifications(
          this.state.first,
          this.state.sortBy,
          undefined,
          undefined,
        );

        this.setState({
          loadingNotification: false,
          notifications: notificationsResult,
          hasNotification: notificationsResult.data.length > 0,
        });
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);

        this.setState({
          loadingNotification: false,
        });
      }
    }
  }

  loadMoreNotifications = async () => {
    if (this.state.notifications.after) {
      this.setState({
        loadingNotification: true,
      });

      try {
        const idToken = jsCookie.get('token');
        const serviceProxy = getServiceProxy(idToken);
        const notificationsResult = await serviceProxy.findNotifications(
          this.state.first,
          this.state.sortBy,
          undefined,
          this.state.notifications.after,
        );

        this.setState({
          loadingNotification: false,
          notifications: {
            before: notificationsResult.before,
            after: notificationsResult.after,
            data: [...this.state.notifications.data, ...notificationsResult.data],
          },
        });
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);

        this.setState({
          loadingNotification: false,
        });
      }
    }
  }

  readAllNotifications = async () => {
    this.setState({
      notifications: {
        ...this.state.notifications,
        data: this.state.notifications.data.map((item) => {
          if (item.state === notificationState.UNREAD) {
            return {
              ...item,
              state: notificationState.READ,
            };
          } else {
            return item;
          }
        }) as any,
      },
      unreadNotifications: 0,
    });

    try {
      if (this.props.profileState.authUser && this.props.profileState.authUser.id) {
        const idToken = jsCookie.get('token');
        const serviceProxy = getServiceProxy(idToken);
        serviceProxy.readNotifications(this.props.profileState.authUser.id, {
          operation: 'readAllNotifications',
        });
      }
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }

  readNotification = async (notificationId: string) => {
    this.setState({
      notifications: {
        ...this.state.notifications,
        data: this.state.notifications.data.map((item) => item._id === notificationId ? {
          ...item,
          state: notificationState.READ,
        } : item) as any,
      },
      unreadNotifications: this.state.unreadNotifications - 1,
    });

    try {
      if (this.props.profileState.authUser && this.props.profileState.authUser.id) {
        const idToken = jsCookie.get('token');
        const serviceProxy = getServiceProxy(idToken);
        serviceProxy.readNotifications(this.props.profileState.authUser.id, {
          operation: 'readNotification',
          payload: {
            notificationId,
          },
        });
      }
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }

  render() {
    const translate = this.props.t;
    return (
      <header id='header'>
        <div className='dark-overlay'
          onClick={this.onTurnOffSearchBar}
          style={this.state.searchBarStatus ? {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 3,
            backgroundColor: 'rgba(0,0,0,0.5)',
            transition: 'opacity .25s ease-in-out',
          } : { display: 'none' }
          }></div>
        <Row className='header-container'>
          <Col lg={6}>
            <a href='/'>
              <img src='/static/images/logo-timmay.png' width='100%' />
            </a>
          </Col>
          <Col lg={12}></Col>
          <Col lg={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Select
              defaultValue={this.state.currentLanguage}
              style={{ width: '140px', border: '1px solid #000000', color: '#000000' }}
              onChange={(value) => this.changeLanguage(value)}
            >
              <Select.Option value={config.i18n.VN}>{translate('common:vn').toUpperCase()}</Select.Option>
              <Select.Option value={config.i18n.EN}>{translate('common:en').toUpperCase()}</Select.Option>
            </Select>
          </Col>
        </Row>
        <Row className='mobile-header' style={this.state.searchBarStatus ? { zIndex: 4 } : {}}>
          <Col lg={1} md={1} xs={0} sm={0}>
          </Col>
          {this.state.searchBarStatus ?
            <Col lg={22} md={22} sm={24} xs={24}>
              <AutoComplete
                dataSource={this.props.suggestions.length > 0 ? [this.props.searchKeyword, ...this.props.suggestions as any].filter((item) => item) : []}
                placeholder={translate('common:search')}
                onSelect={(value) => window.location.href = `/tim-kiem?keyword=${value}`}
                onChange={(value) => {
                  this.props.updateFilters({ keyword: value ? String(value) : '' });
                  this.searchSuggestions(value ? String(value) : '');
                }}
                value={this.props.searchKeyword}
                style={{ width: '100%', height: '100%', borderRadius: '8px' }}
              >
                <Search
                  onPressEnter={() => {
                    if (!this.props.searchKeyword || !this.props.suggestions.length) {
                      window.location.href = this.props.searchKeyword ? `/tim-kiem?keyword=${this.props.searchKeyword}` : `/tim-kiem`;
                    }
                  }}
                />
              </AutoComplete>
            </Col> :
            <React.Fragment>
              <Col lg={7} md={7} xs={12} sm={12}>
                <a href='/'>
                  <img src='/static/images/logo-timmay.png' width='100%' />
                </a>
              </Col>
              <Col lg={11} md={11} xs={3} sm={3}>
              </Col>
              <Col lg={2} md={2} xs={4} sm={4}>
                <img className='icon-search' src='/static/images/icon-search.png' width='30px' onClick={this.onTurnOnSearchBar} />
              </Col>
              <Col lg={2} md={2} xs={3} sm={3}>
                <HamburgerMenu
                  handleHamburgerMenuClick={this.handleHamburgerMenuClick}
                  toggle={this.state.toggle}
                  profileState={{
                    ...this.props.profileState,
                    authUser: {
                      ...this.props.profileState.authUser,
                      ...this.state.userProfile,
                    } as any,
                  }}
                  profileReducers={this.props.profileReducers}
                  logOut={this.logOut}
                />
              </Col>
            </React.Fragment>}
          <Col lg={1} md={1} xs={0} sm={0}>
          </Col>
        </Row>
        <div className='header-desktop'>
          <Row className='search-bar'>
            <Col lg={6} md={8} sm={0} xs={0}>
            </Col>
            <Col lg={12} md={8} sm={0} xs={0}>
              <AutoComplete
                dataSource={this.props.suggestions.length > 0 ? [this.props.searchKeyword, ...this.props.suggestions as any].filter((item) => item) : []}
                placeholder={translate('common:search')}
                onSelect={(value) => window.location.href = `/tim-kiem?keyword=${value}`}
                onChange={(value) => {
                  this.props.updateFilters({ keyword: String(value) });
                  this.searchSuggestions(String(value));
                }}
                value={this.props.searchKeyword}
                style={{ width: '95%', height: '100%', borderRadius: '8px' }}
              >
                <Input
                  onPressEnter={() => {
                    if (!this.props.searchKeyword || !this.props.suggestions.length) {
                      window.location.href = this.props.searchKeyword ? `/tim-kiem?keyword=${this.props.searchKeyword}` : `/tim-kiem`;
                    }
                  }}
                />
              </AutoComplete>
            </Col>
            {this.props.profileState.authUser && this.props.profileState.authUser.id ? (
              <Col lg={6} md={8} sm={0} xs={0} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Dropdown
                  overlay={
                    <NotificationDropdown
                      loadingNotification={this.state.loadingNotification}
                      hasNext={Boolean(this.state.notifications.after)}
                      loadMoreNotifications={this.loadMoreNotifications}
                      readAllNotifications={this.readAllNotifications}
                      notificationList={this.state.notifications.data}
                      readNotification={this.readNotification}
                    />
                  }
                  trigger={['click']}
                  placement='bottomCenter'
                  onVisibleChange={this.loadNotifications}
                  overlayClassName='dropdown-menu'
                >
                  <Badge count={this.state.unreadNotifications}>
                    <a><Icon type='bell' theme='filled' style={{ color: '#000000', fontSize: '24px' }} /></a>
                  </Badge>
                </Dropdown>

                <Dropdown
                  overlay={
                    <DropdownMenu
                      profileState={{
                        ...this.props.profileState,
                        authUser: {
                          ...this.state.userProfile,
                          ...this.props.profileState.authUser,
                          avatarUrl: this.state.userProfile ? this.state.userProfile.avatarUrl : undefined,
                          fullName: this.props.fullName ? this.props.fullName : this.state.userProfile ? this.state.userProfile.fullName : undefined,
                        } as any,
                      }}
                      logOut={this.logOut}
                    />
                  }
                  trigger={['click']}
                  placement='bottomCenter'
                  overlayClassName='dropdown-menu'
                >
                  <Button
                    type='default'
                    size='large'
                    className='search-bar-button'
                    icon='user'
                    style={{ marginRight: '10px', marginLeft: '16px' }}
                  >
                    {translate('common:account')}
                  </Button>
                </Dropdown>
                <a href={`/dang-tin`}>
                  <Button
                    icon='plus'
                    type='default'
                    size='large'
                    className='search-bar-button'
                    style={{ width: '100%' }}
                  >
                    {translate('common:createNews')}
                  </Button>
                </a>
              </Col>
            ) : (
                <Col lg={6} md={8} sm={0} xs={0} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Button
                    type='default'
                    size='large'
                    className='search-bar-button'
                    style={{ marginRight: '10px', marginLeft: '16px' }}
                    onClick={() => this.props.profileReducers.openModal({ modalName: 'register' })}
                  >
                    {translate('common:register')}
                  </Button>
                  <Button
                    type='default'
                    size='large'
                    className='search-bar-button'
                    onClick={() => this.props.profileReducers.openModal({ modalName: 'login' })}
                  >
                    {translate('common:login')}
                  </Button>
                </Col>
              )}
          </Row>

          <Row className='popular-keyword'>
            <Col lg={6}></Col>
            <Col lg={12} style={{
              marginTop: '6px',
              display: 'flex',
              alignItems: 'center',
            }}>
              <span>{translate('common:commonKeywords')}: &nbsp; </span>
              {this.props.commonKeywords.slice(0, 4).map((item, index) => (
                <a
                  style={{ color: '#000000' }}
                  key={index}
                  onClick={() => {
                    window.location.href = `/tim-kiem?keyword=${item.keyword}`;
                  }}
                >
                  <Tag color='orange'>{item.keyword}</Tag>
                </a>
              ))}
            </Col>
            <Col lg={6}></Col>
          </Row>
        </div>
        <LoginModal
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        />
        <RegisterModal
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        />
        <div id='recaptcha' />
      </header>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    suggestions: rootState.searchModel.suggestions,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    searchSuggestions: rootReducer.searchModel.searchSuggestions,
  };
};

export const Header = withNamespaces('common')(withRematch(initStore, mapState, mapDispatch)(MainHeader));
