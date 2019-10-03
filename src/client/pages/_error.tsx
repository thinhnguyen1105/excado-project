import React, { Fragment } from 'react';
import { NextContext } from 'next';
import { Header, MainContent } from '../components';
import { Row, Col, Icon } from 'antd';
import BrandList from '../modules/machine-news/screens/HomePageScreen/components/BrandList';
import { Brand, CommonKeyword, FeatureBrand } from '../services/service-proxies';
import Footer from '../components/CommonLayout/Footer';
import { withRematch, initStore, ProfileState, ProfileReducers, ProfileEffects } from '../store';
import { getServiceProxy } from '../services';
import { withNamespaces } from '../i18n';

interface Props {
  pathname: string;
  topBrands: Brand[];
  commonKeywords: CommonKeyword[];
  featureBrands: FeatureBrand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  updateFilters: (payload: {[key: string]: string|number}) => void;
  t: (key: string) => string;
}
interface State {}
class Error extends React.PureComponent<Props, State> {
  static async getInitialProps({ asPath }: NextContext) {
    const serviceProxy = getServiceProxy();
    const [topBrands, featureBrands, commonKeywords] = await Promise.all([
      serviceProxy.findTopBrands(),
      serviceProxy.getFeatureBrands(10, 'order|asc', undefined, undefined),
      serviceProxy.getCommonKeywords(4, 'count|desc', undefined, undefined),
    ]);
    return {
      pathname: asPath,
      topBrands: topBrands.data,
      featureBrands: featureBrands.data,
      commonKeywords: commonKeywords.data,
    };
  }

  render() {
    return (
      <Fragment>
        <Header
          commonKeywords={this.props.commonKeywords}
          updateFilters={this.props.updateFilters}
          searchKeyword={this.props.searchKeyword}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        />

        <Row className='home-page-brand-list' type='flex' justify='center'>
          <Col xl={18} lg={24} md={24} xs={24} sm={24}>
            <BrandList featureBrands={this.props.featureBrands} />
          </Col>
        </Row>

        <MainContent
          hasSideBar={true}
          hasMenuItems={true}
          topBrands={this.props.topBrands}
        >
          <div style={{background: '#ffffff', padding: '42px 20px', height: '150vh'}}>
            <div style={{
              textAlign: 'center',
              color: '#f81d22',
              fontSize: '142px',
            }}>
              <Icon type='exclamation-circle' />
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: 550,
              textAlign: 'center',
              color: '#f81d22',
            }}>
              {this.props.t(`common:global-error`)}
            </div>
          </div>
        </MainContent>

        <Footer />
      </Fragment>
    );
  }
}

const mapState = (rootState: any) => {
  return {
    profileState: rootState.profileModel,
    searchKeyword: rootState.searchModel.filters.keyword,
  };
};

const mapDispatch = (rootReducer: any) => {
  return {
    profileReducers: rootReducer.profileModel,
    handleFiltersChange: rootReducer.searchModel.handleFiltersChange,
    updateFilters: rootReducer.searchModel.updateFilters,
  };
};
export default withRematch(initStore, mapState, mapDispatch)(withNamespaces(['common'])(Error));
