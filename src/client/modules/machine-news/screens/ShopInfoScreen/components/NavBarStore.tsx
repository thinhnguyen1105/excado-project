import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import './NavBarStore.less';
import { config } from '@client/config';
import { isMobile } from 'react-device-detect';

interface Props {
  linkLogoStore: string;
  shopName: string;
  t: (key: string) => string;
}
const NavBarStore = React.memo<Props>((props: Props) => {
  const translate = props.t;
  return (
    <Fragment>
      <Row className='navbar-store'>
        {!isMobile
          ? <Row className='logo-timmay'>
            <a href={config.url.main} title={props.shopName}>
              <img className='image-logo' src='/static/images/logo-timmay.png' />
            </a>
          </Row>
          : <div></div>}
        <Row className='logo-store'>
          <Col lg={12} md={24} xs={24} sm={24} style={{ display: 'flex', alignItems: 'center' }}>
            <img
              className='image-logo-store'
              src={props.linkLogoStore ? props.linkLogoStore : '/static/images/icon-shop.png'}
              style={{
                height: '42px',
              }}
            />
            <span style={{
              fontSize: '24px',
              fontWeight: 550,
              marginLeft: '12px',
            }}>
              {props.shopName}
            </span>
          </Col>
          <Col lg={12} md={0} xs={0} sm={0}>
            <span className='link-redirect'>
              <a href={config.url.main} title={props.shopName} className='home-page'>{translate('common:home')}</a>
              <a className='all-product' href={'/bai-dang-cua-hang'} title={props.shopName}>{translate('common:all-products')}</a>
            </span>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
});

export default NavBarStore;
