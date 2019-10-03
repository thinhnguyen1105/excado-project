import React from 'react';
import { Menu, Divider } from 'antd';
import { ProfileState } from '@client/store';
import './DropdownMenu.less';
import { withNamespaces } from '@client/i18n';

interface Props {
  profileState: ProfileState;
  logOut: () => void;
  t: (key: string) => string;
}
const MenuItem = Menu.Item;
class DropdownMenu extends React.PureComponent<Props, any> {
  render() {
    const translate = this.props.t;
    return (
      <Menu className='dropdown-menu' mode='inline'>
        <MenuItem key='1' className='user-image-container'>
          <a href='/thong-tin-ca-nhan' className='link'>
            <div className='user-image'>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl ? this.props.profileState.authUser.avatarUrl : '/static/images/default-avatar.jpg'})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
            </div>

            <div className='user-info'>
              <span className='title'>{this.props.profileState.authUser!.fullName}</span>
              <span className='title small-text'>{translate('common:edit-your-profile')}</span>
            </div>
          </a>
        </MenuItem>

        <Divider />

        <MenuItem key='2' className='menu-item-container'>
          <a href='/quan-li-tin-dang' className='link'>
            <img src='/static/images/quan-li-tin-dang-icon.jpg' className='item-image' />
            <div className='item-info'>
              <span className='item-title'>{translate('common:news-managenment')}</span>
            </div>
          </a>
        </MenuItem>
        <MenuItem key='3' className='menu-item-container'>
          <a href='/tin-da-luu' className='link'>
            <img src='/static/images/tin-da-luu-icon.jpg' className='item-image' />
            <div className='item-info'>
              <span className='item-title'>{translate('common:followed-news')}</span>
            </div>
          </a>
        </MenuItem>
        <MenuItem key='4' className='menu-item-container'>
          <a href='/danh-sach-theo-doi' className='link'>
            <img src='/static/images/shop-icon-1.png' className='item-image' />
            <div className='item-info'>
              <span className='item-title'>{translate('common:follows-managenment')}</span>
            </div>
          </a>
        </MenuItem>

        <Divider />

        {this.props.profileState.authUser && this.props.profileState.authUser.shopDomain ? (
          <MenuItem key='5' className='menu-item-container'>
            <a href='/cua-hang-cua-toi' className='link'>
              <img src='/static/images/cua-hang-cua-toi-icon.jpg' className='item-image' />
              <div className='item-info'>
                <span className='item-title'>{translate('common:my-shop')}</span>
              </div>
            </a>
          </MenuItem>
        ) : (
            <MenuItem key='6' className='menu-item-container'>
              <a href='/tao-cua-hang' className='link'>
                <img src='/static/images/cua-hang-cua-toi-icon.jpg' className='item-image' />
                <div className='item-info'>
                  <span className='item-title'>{translate('common:create-your-shop')}</span>
                </div>
              </a>
            </MenuItem>
          )}
        {/* <MenuItem key='7' className='menu-item-container'>
          <a href='#' className='link'>
            <img src='/static/images/dang-ki-quang-cao-icon.jpg' className='item-image' />
            <div className='item-info'>
              <span className='item-title'>{translate('common:advertisement-registration')}</span>
            </div>
          </a>
        </MenuItem> */}

        <Divider />

        <MenuItem key='8' className='menu-item-container'>
          <a href='#' className='link'>
            <img src='/static/images/tro-giup-icon.jpg' className='item-image' />
            <div className='item-info'>
              <span className='item-title'>{translate('common:help')}</span>
            </div>
          </a>
        </MenuItem>

        <Divider />

        {(this.props.profileState.authUser && this.props.profileState.authUser.roles && this.props.profileState.authUser.roles.indexOf('5c7f747708898183ac62f2af') > -1) && (
          <MenuItem key='9' className='menu-item-container'>
            <a href='/quan-ly/danh-sach-hang' className='link'>
              <img src='/static/images/admin.png' className='item-image' />
              <div className='item-info'>
                <span className='item-title'>{translate('common:admin')}</span>
              </div>
            </a>
          </MenuItem>
        )}

        {(this.props.profileState.authUser && this.props.profileState.authUser.roles && this.props.profileState.authUser.roles.indexOf('5c7f747708898183ac62f2af') > -1) && (
          <Divider />
        )}

        <MenuItem key='10' className='menu-item-container'>
          <a onClick={this.props.logOut} className='link'>
            <img src='/static/images/icon-signout.png' className='item-image' />
            <div className='item-info'>
              <span className='item-title'>{translate('common:log-out')}</span>
            </div>
          </a>
        </MenuItem>
      </Menu>
    );
  }
}

export default withNamespaces('common')(DropdownMenu);
