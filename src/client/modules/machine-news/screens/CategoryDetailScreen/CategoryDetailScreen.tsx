import React, { Fragment } from 'react';
import './CategoryDetailScreen.less';
import { Category, Brand, Model } from '@client/services/service-proxies';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import { ProfileState, ProfileReducers, ProfileEffects } from '@client/store';
import NavBarShowContent from '../AllBrandsScreen/components/NavBarShowContent';
import { Row, Col, Empty } from 'antd';
import { config } from '@client/config';
import Head from 'next/head';
import { withNamespaces } from '@client/i18n';
import naturalCompare from 'string-natural-compare';

interface Props {
  categoryName: string;
  categoryDetail: Category;
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
  t: (key: string) => string;
}
interface State {}
class CategoryDetailScreen extends React.PureComponent<Props, State> {
  render () {
    return (
      <Fragment>
        <Head>
          <title>{`${this.props.categoryDetail ? this.props.categoryDetail.name : this.props.categoryName} | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content={`timmay.vn`} />
          <meta property='og:url' content={`${config.url.main}/chung-loai-may/${this.props.categoryDetail._id}`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`${this.props.categoryDetail ? this.props.categoryDetail.name : this.props.categoryName} | timmay.vn`} />
          <meta property='og:description' content={`timmay.vn`} />
          <meta property='og:image:url' content={this.props.categoryDetail.imageUrl ? this.props.categoryDetail.imageUrl : '/static/images/logo-timmay.png'} />
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
              {value: '/', label: `${this.props.t('common:home')}`},
              {value: '', label: this.props.categoryDetail && this.props.categoryDetail._id ? this.props.categoryDetail.name : this.props.categoryName},
            ]}
          />

          <div className='category-detail-screen'>
            {this.props.categoryDetail && this.props.categoryDetail._id ? (
              this.props.categoryDetail.categoryBrands.map((brand, index) => (
                <Row key={index} gutter={10} className='brand-models' style={{display: 'flex', flexWrap: 'wrap'}}>
                  <Col xs={24}>
                    <h2>
                      <a className='search-link' href={`/tim-kiem?brand=${brand.slug}&category=${this.props.categoryDetail.slug}`} title={this.props.categoryDetail.name}>
                        {brand.name.toUpperCase()} ({brand.totalNews})
                      </a>
                    </h2>
                  </Col>

                  {brand.brandModels.sort((a, b) => naturalCompare(a.name, b.name)).map((model: Model) => (
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
              <Empty description={this.props.t('common:no-data')} />
            )}
          </div>
        </CommonLayout>
      </Fragment>
    );
  }
}

export default withNamespaces(['common'])(CategoryDetailScreen);
