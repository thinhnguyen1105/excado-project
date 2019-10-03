import * as React from 'react';
import { Row, Col } from 'antd';
import { LeftSideBar } from './LeftSideBar';
import LeftSideBarWithoutMenu from './LeftSideBarWithoutMenu';
import { RightSideBar } from './RightSideBar';
import './MainContent.less';
import { Brand, Adsense, FeatureBrand } from '../../services/service-proxies';
import { getServiceProxy } from '@client/services';
import BrandList from '@client/modules/machine-news/screens/HomePageScreen/components/BrandList';
import { withNamespaces } from '@client/i18n';

interface Props {
  topBrands: Brand[];
  hasMenuItems: boolean;
  hasSideBar: boolean;
  children: any;
  hasBrandList?: boolean;
  t: (key: string) => string;
}
interface State {
  adsense: Adsense[];
  featureBrands: FeatureBrand[];
}
class BaseMainContent extends React.PureComponent<Props, State> {
  state: State = {
    adsense: [],
    featureBrands: [],
  };

  componentDidMount () {
    this.getAdsense();
    this.getFeatureBrands();
  }

  getAdsense = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const adsense = await serviceProxy.getAdsense(10, 'position|asc', undefined, undefined);
      this.setState({
        adsense: adsense.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  getFeatureBrands = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const featureBrands = await serviceProxy.getFeatureBrands(10, 'order|asc', undefined, undefined);
      this.setState({
        featureBrands: featureBrands.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  render () {
    const adsPosition1 = this.state.adsense.filter((item) => item.position === 1)[0];
    const adsPosition4 = this.state.adsense.filter((item) => item.position === 4)[0];

    return (
      <main className='main-content'>
        {this.props.hasBrandList && (
          <Row className='home-page-brand-list' type='flex' justify='center'>
            <Col xl={3} lg={0} md={0} sm={0} xs={0}>
              <a href={adsPosition1 && adsPosition1.hyperlink ? adsPosition1.hyperlink : '#'} target='_blank'>
                <div
                  className='image-promote'
                  style={{
                    marginTop: '30px',
                    height: '60px',
                    backgroundImage: `url(${adsPosition1 && adsPosition1.imageUrl ? adsPosition1.imageUrl : ''})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    border: adsPosition1 && adsPosition1.imageUrl ? '' : '1px dashed black',
                    color: '#000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {adsPosition1 && adsPosition1.imageUrl ? '' : this.props.t('common:contact-for-ads')}
                </div>
              </a>
            </Col>
            <Col xl={18} lg={24} md={24} xs={24} sm={24}>
              <BrandList featureBrands={this.state.featureBrands} />
            </Col>
            <Col xl={3} lg={0} md={0} sm={0} xs={0}>
              <a href={adsPosition4 && adsPosition4.hyperlink ? adsPosition4.hyperlink : '#'} target='_blank'>
                <div
                  className='image-promote'
                  style={{
                    marginTop: '30px',
                    height: '60px',
                    backgroundImage: `url(${adsPosition4 && adsPosition4.imageUrl ? adsPosition4.imageUrl : ''})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    border: adsPosition4 && adsPosition4.imageUrl ? '' : '1px dashed black',
                    color: '#000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {adsPosition4 && adsPosition4.imageUrl ? '' : this.props.t('common:contact-for-ads')}
                </div>
              </a>
            </Col>
          </Row>
        )}

        {this.props.hasSideBar ? (
          <Row className='padding-of-page'>
            <Col xl={3} lg={24} md={24} sm={24} xs={24} >
              {this.props.hasMenuItems ? (
                <LeftSideBar topBrands={this.props.topBrands} adsense={this.state.adsense} />
              ) : (
                <LeftSideBarWithoutMenu />
              )}
            </Col>
            <Col className='main-col' xl={18} lg={24} md={24} sm={24} xs={24} >
              {this.props.children}
            </Col>
            <Col xl={3} lg={0} md={0} sm={0} xs={0} >
              <RightSideBar adsense={this.state.adsense} />
            </Col>
          </Row>
        ) : (
          <Row className='padding-of-page' type='flex' justify='center'>
            {/* <Col xl={3} lg={0} md={0} sm={0} xs={0} /> */}
            <Col className='main-col' xl={18} lg={24} md={24} sm={24} xs={24} style={{ padding: '0px 20px' }}>
              {this.props.children}
            </Col>
            {/* <Col xl={3} lg={0} md={0} sm={0} xs={0} /> */}
          </Row>
        )}
      </main>
    );
  }
}

export const MainContent = withNamespaces(['common'])(BaseMainContent);
