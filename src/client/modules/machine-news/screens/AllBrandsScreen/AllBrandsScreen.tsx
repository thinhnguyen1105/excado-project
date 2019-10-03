import React, { Component, Fragment } from 'react';
import { ProfileState, ProfileReducers, ProfileEffects } from '@client/store';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import NavBarShowContent from './components/NavBarShowContent';
import BrandDetails from './components/BrandDetails';
import { config } from '@client/config';
import Head from 'next/head';
import { Brand, FindBrandsResult } from '../../../../services/service-proxies';
import { withNamespaces } from '@client/i18n';

interface Props {
  brandsResult: FindBrandsResult;
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
  t: (key: string) => string;
}
interface State {
  brands: {
    data: Brand[];
    after?: string;
  };
  loading: boolean;
}
class AllBrandsScreen extends Component<Props, State> {
  state: State = {
    brands: {
      data: this.props.brandsResult.data,
      after: this.props.brandsResult.after,
    },
    loading: false,
  };

  render() {
    const translate = this.props.t;
    return (
      <Fragment>
        <Head>
          <title>{`Tất cả các hãng | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='description' content={`timmay.vn`} />
          <meta property='og:url' content={`${config.url.main}/danh-sach-hang/`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Tất cả các hãng | timmay.vn`} />
          <meta property='og:description' content={`timmay.vn`} />
          <meta property='og:image:url' content={'/static/images/logo-timmay.png'} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>
        <CommonLayout
          updateFilters={this.props.updateFilters}
          topBrands={this.props.topBrands}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={true}
          hasMenuItems={true}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        >
          <NavBarShowContent
            items={[
              {value: '/', label: `${translate('common:home')}`},
              {value: '', label: `${translate('common:brand-list')}`},
            ]}
          />

          <BrandDetails topBrands={this.props.topBrands} brands={this.state.brands.data} loading={this.state.loading} />
        </CommonLayout>
      </Fragment>
    );
  }
}

export default withNamespaces('common')(AllBrandsScreen);
