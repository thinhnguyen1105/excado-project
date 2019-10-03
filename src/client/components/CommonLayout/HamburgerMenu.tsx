import * as React from 'react';
import { Row, Col, Dropdown } from 'antd';
import { ProfileState, ProfileReducers, ProfileEffects } from '@client/store';
import { changeLanguage, i18n, withNamespaces } from '@client/i18n';
import { config } from '@client/config';
import NotificationDropdown from './NotificationDropdown';
import { getServiceProxy } from '@client/services';
import * as jsCookie from 'js-cookie';
import { Notification } from '../../services/service-proxies';
import { notificationState } from '@client/core';

const Fragment = React.Fragment;
interface Props {
  toggle: boolean;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  logOut: () => void;
  handleHamburgerMenuClick: () => void;
  t: (key: string) => string;
}
interface State {
  onShowChangeLanguage: boolean;
  currentLanguage: string;
  unreadNotifications: number;
  hasNotification: boolean;
  loadingNotification: boolean;
  notifications: {
    data: Notification[];
    before?: string;
    after?: string
  };
  sortBy: string;
  first: number;
}

class HamburgerMenu extends React.PureComponent<Props, State> {
  state: State = {
    onShowChangeLanguage: false,
    currentLanguage: i18n.i18n.language ? i18n.i18n.language : config.i18n.defaultLang,
    unreadNotifications: 0,
    hasNotification: true,
    loadingNotification: false,
    notifications: {
      data: [],
      before: undefined,
      after: undefined,
    },
    sortBy: 'createdAt|desc',
    first: 10,
  };

  componentDidMount() {
    this.loadNotificationCount();
    this.setState({
      currentLanguage: i18n.i18n.language ? i18n.i18n.language : config.i18n.defaultLang,
    });
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

  onShowChangeLanguage = () => {
    this.setState({ onShowChangeLanguage: !this.state.onShowChangeLanguage });
  }

  changeLanguage = async (lang: string) => {
    changeLanguage(lang);
    this.setState({ currentLanguage: lang });
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
          notifications: notificationsResult,
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
      <React.Fragment>
        <div
          className='dark-overlay'
          style={!this.props.toggle ? {
            display: `none`,
          } : {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 3,
            backgroundColor: 'rgba(0,0,0,0.5)',
            transition: 'opacity .25s ease-in-out',
          }}
          onClick={this.props.handleHamburgerMenuClick}
        />
        <nav role='navigation'>
          <div id='menuToggle'>
            <input
              onClick={this.props.handleHamburgerMenuClick}
              onChange={() => null}
              type='checkbox'
              {...(this.props.toggle ? { checked: true } : {checked: false})}
            />
            <span className='hamburger' />
            <span className='hamburger' />
            <span className='hamburger' />
            <ul id='menu' style={this.props.handleHamburgerMenuClick ? { overflowY: 'scroll', height: '100vh' } : {}}>
              {
                this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ?
                  (
                    <div>
                      <a href='/thong-tin-ca-nhan' className='link'>
                        <Row className='menu-login'>
                          <Col md={6} xs={6} sm={6}>
                            <div className='image-hamburger-rounded'>
                              <img
                                src={this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : '/static/images/default-avatar.jpg'}
                              />
                            </div>
                          </Col>
                          <Col md={18} xs={18} sm={18}>
                            <span className='menu-item-text menu-text-fullname'>{this.props.profileState.authUser!.fullName}</span><br />
                            <span className='menu-item-text' style={{ color: '#FFC500', fontSize: '12px' }}>{translate('common:edit-your-profile')}</span>
                          </Col>
                        </Row>
                      </a>
                      <hr />
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
                        <a>
                          <Row className='menu-item'>
                            <Col md={3} xs={3} sm={3}>
                              <img
                                src='/static/images/icon-noti.png'
                                width='100%'
                              />
                            </Col>
                            <Col md={21} xs={21} sm={21}>
                              <span className='menu-item-text'>
                                <span style={this.state.unreadNotifications === 0 ? { color: '#000' } : { color: '#000', fontWeight: 600 }}>
                                  {translate('common:notifications')} {this.state.unreadNotifications === 0 ? '' : `(${this.state.unreadNotifications > 99 ? '99+' : this.state.unreadNotifications})`}</span>
                              </span>
                            </Col>
                          </Row>
                        </a>
                      </Dropdown>
                      <hr/>
                      <a href='/dang-tin'>
                        <Row className='menu-item'>
                          <Col md={3} xs={3} sm={3}>
                            <img
                              src='/static/images/create-news.png'
                              width='100%'
                            />
                          </Col>
                          <Col md={21} xs={21} sm={21}>
                            <span className='menu-item-text'>{translate('common:createNews')}</span>
                          </Col>
                        </Row>
                      </a>
                      <hr />
                      <a href='/quan-li-tin-dang'>
                        <Row className='menu-item'>
                          <Col md={3} xs={3} sm={3}>
                            <img
                              src='/static/images/quan-li-tin-dang-icon.jpg'
                              width='100%'
                            />
                          </Col>
                          <Col md={21} xs={21} sm={21}>
                            <span className='menu-item-text'>{translate('common:news-managenment')}</span>
                          </Col>
                        </Row>
                      </a>

                      <a href='/tin-da-luu'>
                        <Row className='menu-item'>
                          <Col md={3} xs={3} sm={3}>
                            <img
                              src='/static/images/tin-da-luu-icon.jpg'
                              width='100%'
                            />
                          </Col>
                          <Col md={21} xs={21} sm={21}>
                            <span className='menu-item-text'>{translate('common:followed-news')}</span>
                          </Col>
                        </Row>
                      </a>

                      <hr />
                      {this.props.profileState.authUser && this.props.profileState.authUser.shopDomain ?
                        <a href='/cua-hang-cua-toi'>
                          <Row className='menu-item'>
                            <Col md={3} xs={3} sm={3}>
                              <img
                                src='/static/images/cua-hang-cua-toi-icon.jpg'
                                width='100%'
                              />
                            </Col>
                            <Col md={21} xs={21} sm={21}>
                              <span className='menu-item-text'>{translate('common:my-shop')}</span>
                            </Col>
                          </Row>
                        </a> :
                        <a href='/tao-cua-hang'>
                          <Row className='menu-item'>
                            <Col md={3} xs={3} sm={3}>
                              <img
                                src='/static/images/tao-cua-hang-icon.jpg'
                                width='100%'
                              />
                            </Col>
                            <Col md={21} xs={21} sm={21}>
                              <span className='menu-item-text'>{translate('common:create-your-shop')}</span>
                            </Col>
                          </Row>
                        </a>
                      }

                      <a href='#'>
                        <Row className='menu-item'>
                          <Col md={3} xs={3} sm={3}>
                            <img
                              src='/static/images/dang-ki-quang-cao-icon.jpg'
                              width='100%'
                            />
                          </Col>
                          <Col md={21} xs={21} sm={21}>
                            <span className='menu-item-text'>{translate('common:advertisement-registration')}</span>
                          </Col>
                        </Row>
                      </a>

                      <hr />
                      <Row className='menu-item' onClick={this.onShowChangeLanguage}>
                        <Col md={3} xs={3} sm={3}>
                          <img
                            src='/static/images/language.png'
                            width='100%'
                          />
                        </Col>
                        <Col md={18} xs={18} sm={18}>
                          <span className='menu-item-text'>{translate('common:language')}</span>
                        </Col>
                        <Col md={3} xs={3} sm={3}>
                          <svg style={this.state.onShowChangeLanguage ? { transform: 'rotate(180deg)', transition: 'transform 0.5s' } : { transform: 'rotate(0deg)', transition: 'transform 0.5s' }} width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M1 1L8 8L15 1' stroke='black' strokeWidth='2' />
                          </svg>
                        </Col>
                      </Row>
                      {this.state.onShowChangeLanguage ? <div className='choose-language'>
                        <a>
                          <Row className='menu-item' onClick={() => this.changeLanguage(config.i18n.VN)}>
                            <Col md={3} xs={3} sm={3}>
                              <img
                                src='/static/images/vietnam.png'
                                width='100%'
                              />
                            </Col>
                            <Col md={21} xs={21} sm={21}>
                              <span className='menu-item-text' style={this.state.currentLanguage === config.i18n.VN ? { fontWeight: 600 } : {}}>{translate('common:vn')}</span>
                            </Col>
                          </Row>
                        </a>
                        <a>
                          <Row className='menu-item' style={this.state.currentLanguage === config.i18n.EN ? { fontWeight: 600 } : {}} onClick={() => this.changeLanguage(config.i18n.EN)}>
                            <Col md={3} xs={3} sm={3}>
                              <img
                                src='/static/images/united-states.png'
                                width='100%'
                              />
                            </Col>
                            <Col md={21} xs={21} sm={21}>
                              <span className='menu-item-text'>{translate('common:en')}</span>
                            </Col>
                          </Row>
                        </a>
                      </div> : <Fragment></Fragment>}
                      <hr />
                      <a href='#'>
                        <Row className='menu-item'>
                          <Col md={3} xs={3} sm={3}>
                            <img
                              src='/static/images/tro-giup-icon.jpg'
                              width='100%'
                            />
                          </Col>
                          <Col md={21} xs={21} sm={21}>
                            <span className='menu-item-text'>{translate('common:help')}</span>
                          </Col>
                        </Row>
                      </a>
                      <hr />
                      <a onClick={this.props.logOut}>
                        <Row className='menu-item'>
                          <Col md={3} xs={3} sm={3}>
                            <img
                              src='/static/images/icon-signout.png'
                              width='100%'
                            />
                          </Col>
                          <Col md={21} xs={21} sm={21}>
                            <span className='menu-item-text'>{translate('common:log-out')}</span>
                          </Col>
                        </Row>
                      </a>
                    </div>
                  )
                  :
                  (
                    <Fragment>
                      <Row className='menu-login' onClick={() => this.props.profileReducers.openModal({ modalName: 'login' })}>
                        <Col md={6} xs={6} sm={6}>
                          <img
                            src='/static/images/default-avatar.jpg'
                            width='100%'
                          />
                        </Col>
                        <Col md={18} xs={18} sm={18}>
                          <span className='menu-item-text'>{translate('common:login')} / {translate('common:register')}</span>
                        </Col>
                      </Row>
                      <Row className='menu-item' onClick={this.onShowChangeLanguage}>
                        <Col md={3} xs={3} sm={3}>
                          <img
                            src='/static/images/language.png'
                            width='100%'
                          />
                        </Col>
                        <Col md={18} xs={18} sm={18}>
                          <span className='menu-item-text'>{translate('common:language')}</span>
                        </Col>
                        <Col md={3} xs={3} sm={3}>
                          <svg style={this.state.onShowChangeLanguage ? { transform: 'rotate(180deg)', transition: 'transform 0.5s' } : { transform: 'rotate(0deg)', transition: 'transform 0.5s' }} width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M1 1L8 8L15 1' stroke='black' strokeWidth='2' />
                          </svg>
                        </Col>
                      </Row>
                      {this.state.onShowChangeLanguage ? <div className='choose-language'>
                        <a>
                          <Row className='menu-item' onClick={() => this.changeLanguage(config.i18n.VN)}>
                            <Col md={3} xs={3} sm={3}>
                              <img
                                src='/static/images/vietnam.png'
                                width='100%'
                              />
                            </Col>
                            <Col md={21} xs={21} sm={21}>
                              <span className='menu-item-text' style={this.state.currentLanguage === config.i18n.VN ? { fontWeight: 600 } : {}}>{translate('common:vn')}</span>
                            </Col>
                          </Row>
                        </a>
                        <a>
                          <Row className='menu-item' style={this.state.currentLanguage === config.i18n.EN ? { fontWeight: 600 } : {}} onClick={() => this.changeLanguage(config.i18n.EN)}>
                            <Col md={3} xs={3} sm={3}>
                              <img
                                src='/static/images/united-states.png'
                                width='100%'
                              />
                            </Col>
                            <Col md={21} xs={21} sm={21}>
                              <span className='menu-item-text'>{translate('common:en')}</span>
                            </Col>
                          </Row>
                        </a>
                      </div> : <Fragment></Fragment>}
                    </Fragment>
                  )
              }
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default withNamespaces('common')(HamburgerMenu);
