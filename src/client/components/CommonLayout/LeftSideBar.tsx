import * as React from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import './LeftSideBar.less';
import { Brand, Adsense } from '../../services/service-proxies';
import { withNamespaces } from '@client/i18n';
const SubMenu = Menu.SubMenu;

interface Props {
  topBrands: Brand[];
  adsense: Adsense[];
  t: (key: string) => string;
}
interface State {
  isOpenDropdownMenu: boolean;
  isCollapsedMenu: boolean;
}
class BaseLeftSideBar extends React.PureComponent<Props, State> {
  state: State = {
    isOpenDropdownMenu: false,
    isCollapsedMenu: true,
  };

  render() {
    const translate = this.props.t;
    const renderMenuBar = this.props.topBrands.map((brand) => {
      return (
        <SubMenu
          key={brand._id}
          title={<span style={{ color: '#000', fontSize: '12px' }}>{brand.name.toUpperCase()} ({brand.totalNews})</span>}
          onTitleClick={() => window.location.href = `/danh-sach-hang/${brand.slug}`}
        >
          {brand.brandCategories.map((category: any) => (
            <Menu.Item key={category.slug}><a title={category.name} style={{fontSize: '12px'}}>{category.name} ({category.totalNews})</a></Menu.Item>
          ))}
        </SubMenu>
      );
    });
    const adsPosition2 = this.props.adsense.filter((item) => item.position === 2)[0];
    const adsPosition3 = this.props.adsense.filter((item) => item.position === 3)[0];

    return (
      <div className={'left-sidebar'}>
        <span className='title'>
          <b>{translate('common:list-of-brand')}</b>
          {this.state.isCollapsedMenu ? (
            <a style={{ float: 'right', color: 'white' }} onClick={() => this.setState({ isOpenDropdownMenu: !this.state.isOpenDropdownMenu })}>
              <Icon type='caret-down' />
            </a>
          ) : <div />}
        </span>

        <Row>
          <Col xs={24} xl={0}>
            {this.state.isOpenDropdownMenu && (
              <Menu
                style={{
                  width: '100%',
                  background: '#fff',
                  border: '1px solid #F4F4F4',
                  borderBottom: 'none',
                  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                }}
                mode={'inline'}
                onClick={(info: any) => {
                  const selectedBrand = this.props.topBrands.filter((brand) => brand._id === info.keyPath[1])[0].slug;
                  const selectedCategory = info.keyPath[0];
                  window.location.href = `/tim-kiem?brand=${selectedBrand}&category=${selectedCategory}`;
                }}
              >
                {renderMenuBar}
              </Menu>
            )}
          </Col>
        </Row>

        <Row>
          <Col xs={0} xl={24}>
            <Menu
              style={{
                width: '100%',
                background: '#fff',
                border: '1px solid #F4F4F4',
                borderBottom: 'none',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
              }}
              mode={'vertical' as any}
              onClick={(info: any) => {
                const selectedBrand = this.props.topBrands.filter((brand) => brand._id === info.keyPath[1])[0].slug;
                const selectedCategory = info.keyPath[0];
                window.location.href = `/tim-kiem?brand=${selectedBrand}&category=${selectedCategory}`;
              }}
            >
              {renderMenuBar}
            </Menu>
          </Col>
        </Row>

        <a href='/danh-sach-hang' title={translate('common:all-brands')} className='all-brand'>
          <b>{translate('common:all-brands')}</b>
        </a>

        <Row>
          <Col xs={0} xl={24}>
            <a href={adsPosition2 && adsPosition2.hyperlink ? adsPosition2.hyperlink : '#'} target='_blank'>
              <div
                className='image-promote'
                style={{
                  marginTop: '30px',
                  height: '400px',
                  backgroundImage: `url(${adsPosition2 && adsPosition2.imageUrl ? adsPosition2.imageUrl : ''})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  border: adsPosition2 && adsPosition2.imageUrl ? '' : '1px dashed black',
                  color: '#000',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {adsPosition2 && adsPosition2.imageUrl ? '' : this.props.t('common:contact-for-ads')}
              </div>
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs={0} xl={24}>
            <a href={adsPosition3 && adsPosition3.hyperlink ? adsPosition3.hyperlink : '#'} target='_blank'>
              <div
                className='image-promote'
                style={{
                  marginTop: '30px',
                  height: '400px',
                  backgroundImage: `url(${adsPosition3 && adsPosition3.imageUrl ? adsPosition3.imageUrl : ''})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  border: adsPosition3 && adsPosition3.imageUrl ? '' : '1px dashed black',
                  color: '#000',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {adsPosition3 && adsPosition3.imageUrl ? '' : this.props.t('common:contact-for-ads')}
              </div>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export const LeftSideBar = withNamespaces('common')(BaseLeftSideBar);
