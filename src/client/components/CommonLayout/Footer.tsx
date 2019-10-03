import * as React from 'react';
import './Footer.less';
import Container from './Container';
import { Row, Col } from 'antd';
import { withNamespaces } from '@client/i18n';

interface Props {
  t: (key: string) => string;
}
interface State {
  isMobile: boolean;
}
const Fragment = React.Fragment;
class Footer extends React.PureComponent<Props, State> {
  state = {
    isMobile: false,
  };
  componentDidMount() {
    const mobileDetection = require('react-device-detect');
    this.setState({
      isMobile: mobileDetection.isMobile,
    });
  }
  render() {
    const translate = this.props.t;
    return (
      <Fragment>
        <footer className='footer'>
          <Container>
            <Row className='all-link'>
              {!this.state.isMobile ? <Fragment>
                <Col lg={6} md={6} xs={0} sm={0} className='footer-item'>
                  <h3>{translate('common:link')}</h3>
                  <img src='/static/images/Facebook.png' />
                  <span> Facebook</span><br />
                  <img src='/static/images/Youtube.png' />
                  <span> Youtube</span><br />
                </Col>
                <Col lg={6} md={6} xs={0} sm={0} className='footer-item'>
                  <h3>{translate('common:about-timmay')}</h3>
                  <span>{translate('common:about-us')}</span><br />
                  <span>{translate('common:contact')}</span><br />
                </Col>
                <Col lg={6} md={6} xs={0} sm={0} className='footer-item'>
                  <h3>{translate('common:support-customer')}</h3>
                  <span>{translate('common:central-of-support')}</span><br />
                  <span>{translate('common:posting-regulations')}</span><br />
                  <span>{translate('common:operating-regulations')}</span><br />
                </Col>
                <Col lg={6} md={6} xs={24} sm={24} className='footer-item'>
                  <h3>{translate('common:certificate')}</h3>
                  <img src={'/static/images/certificate.png'} width='50%' />
                </Col>
              </Fragment> :
                <Row>
                  <Col lg={24} md={24} xs={24} sm={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
                    <a href='#' style={{ marginLeft: '15px' }}>
                      <span>{translate('common:about-us')} </span><br />
                    </a>
                    <a href='#' style={{ marginLeft: '15px' }}>
                      <span> Facebook </span><br />
                    </a>
                    <a href='#' style={{ marginLeft: '15px' }}>
                      <span>{translate('common:central-of-support')}</span><br />
                    </a>
                  </Col>
                  <Col lg={24} md={24} xs={24} sm={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3>{translate('common:certificate')}</h3>
                    <img src={'/static/images/certificate.png'} width='50%' />
                  </Col>
                </Row>
              }
            </Row>
            <Row style={{ textAlign: 'center', paddingBottom: '20px' }} className='address'>
              <span>{translate('common:info-footer')}<br />
                {translate('common:info-footer-2')}<br />
                {/* {translate('common:info-footer-3')}<br /> */}
                {translate('common:info-footer-4')}</span>
            </Row>
            <Row className='license'>
              <span>{translate('common:credit-timmay')}</span>
            </Row>
            <Row className='responsive-switcher'>
            <a href='#' className='rs-link' data-link-desktop={`${translate('common:switch-to-desktop-version')}`} data-link-responsive={`${translate('common:switch-to-mobile-version')}`} onClick={() => this.setState({isMobile: !this.state.isMobile})}>
            {!this.state.isMobile ? `${translate('common:switch-to-mobile-version')}` : `${translate('common:switch-to-desktop-version')}`}
            </a>
            </Row>
          </Container>
        </footer>
      </Fragment>
    );
  }
}

export default withNamespaces('common')(Footer);
