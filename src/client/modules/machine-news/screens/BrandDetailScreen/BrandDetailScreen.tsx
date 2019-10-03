import React, { Fragment } from 'react';
import './BrandDetailScreen.less';
import { Model, Brand } from '@client/services/service-proxies';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import { ProfileState, ProfileReducers, ProfileEffects } from '@client/store';
import NavBarShowContent from '../AllBrandsScreen/components/NavBarShowContent';
import { Row, Col, Empty } from 'antd';
import { withNamespaces } from '@client/i18n';
import Head from 'next/head';
import { config } from '@client/config';
import naturalCompare from 'string-natural-compare';

interface Props {
  brandName: string;
  brandDetail: Brand;
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: { [key: string]: string | number }) => void;
  t: (key: string) => string;
}
interface State { }
class BrandDetailScreen extends React.PureComponent<Props, State> {
  render() {
    const translate = this.props.t;
    return (
      <Fragment>
        <Head>
          <title>{`${this.props.brandDetail ? this.props.brandDetail.name : this.props.brandName} | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content={`timmay.vn`} />
          <meta property='og:url' content={`${config.url.main}/danh-sach-hang/${this.props.brandDetail.slug}`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Máy ${this.props.brandDetail ? this.props.brandDetail.name : this.props.brandDetail} | timmay.vn`} />
          <meta property='og:description' content={`timmay.vn`} />
          <meta property='og:image:url' content={this.props.brandDetail.logoImage ? this.props.brandDetail.logoImage : '/static/images/logo-timmay.png'} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>

        <CommonLayout
          topBrands={this.props.topBrands}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={true}
          hasMenuItems={true}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          updateFilters={this.props.updateFilters}
        >
          <NavBarShowContent
            items={[
              { value: '/', label: `${translate('common:home')}` },
              { value: '/danh-sach-hang', label: `${translate('common:brand-list')}` },
              { value: '', label: this.props.brandDetail && this.props.brandDetail._id ? this.props.brandDetail.name : this.props.brandName },
            ]}
          />

          <div className='brand-detail-screen'>
            {this.props.brandDetail && this.props.brandDetail._id ? (
              this.props.brandDetail.brandCategories.map((category, index) => (
                <Row key={index} gutter={10} className='brand-models' style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <Col xs={24}>
                    <h2>
                      <a className='category-link' href={`/tim-kiem?brand=${this.props.brandDetail.slug}&category=${category.slug}`} title={category.name}>{category.name} ({category.totalNews})</a>
                    </h2>
                  </Col>

                  {category.categoryModels.sort((a, b) => naturalCompare(a.name, b.name)).map((model: Model) => (
                    <Col key={model._id} lg={6} md={12} sm={12} xs={24}>
                      <ul>
                        <a href={`/tim-kiem?keyword=${model.name}`} title={model.name}>
                          <li style={{ color: 'black', fontSize: '12px' }}>{model.name} ({model.totalNews})</li>
                        </a>
                      </ul>
                    </Col>
                  ))}
                </Row>
              ))
            ) : (
              <Empty description={translate('common:no-data')} />
            )}
          </div>
        </CommonLayout>
      </Fragment>
    );
  }
}

export default withNamespaces('common')(BrandDetailScreen);
