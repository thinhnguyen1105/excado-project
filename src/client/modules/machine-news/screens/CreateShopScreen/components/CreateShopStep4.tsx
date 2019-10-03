import React from 'react';
import './CreateShopStep4.less';
import { Row, Col, Button } from 'antd';
import { SelectOption } from '@client/store';
import { isMobile } from 'react-device-detect';
import { withNamespaces } from '@client/i18n';
import { UploadFile } from 'antd/lib/upload/interface';
import { formatMoney } from '@client/core';

interface Props {
  isCreating: boolean;
  selectedPackage: { label: string; value: number; price: number };
  selectedPaymentMethod?: SelectOption;
  logoImageList: {
    file: UploadFile;
    base64Url: string;
  }[];
  nextStep: () => void;
  paymentMethodChange: (payload: { paymentMethod: string }) => void;
  createShop: () => void;
  t: (key: string) => string;
}
class CreateShopStep4 extends React.PureComponent<Props, any> {
  render() {
    const handlePurchaseClick = () => {
      // if (props.selectedPaymentMethod && props.selectedPaymentMethod.value) {
      //   props.createShop();
      // } else {
      //   message.error('Vui lòng chọn hình thức thanh toán để tiếp tục');
      // }

      this.props.createShop();
    };

    const translate = this.props.t;

    return (
      <div>
        <Row className='outline'>
          <Row className='title'><strong>{translate('create-shop:invoice')}</strong></Row>
          <hr className='shadow-line' />
          <Row gutter={30} style={{ display: 'flex' }}>
            <Col lg={8} md={8} xs={10} sm={10} style={{textAlign: 'center'}}>
              <div
                className='shop-logo'
                style={{
                  backgroundImage: `url(${this.props.logoImageList[0] ? this.props.logoImageList[0].base64Url : '/static/images/icon-shop.png'})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
            </Col>
            <Col lg={16} md={16} xs={14} sm={14}>
              <Row>
                <div>{translate('create-shop:store-registration-service')}</div>
                <div style={{ height: 100 }}>
                  <em>{this.props.t('create-shop:duration')}: &nbsp;
                    <strong>{this.props.selectedPackage ? this.props.selectedPackage.label : ''} {this.props.t(this.props.selectedPackage.label === `1` ? `create-shop:month` : `create-shop:months`)}</strong>
                  </em>
                </div>
              </Row>
              <Row className='money-layout' type='flex' justify='start' style={{ position: 'absolute', bottom: '0px', width: '100%' }}>
                <Col lg={12}>
                  <span>{translate('create-shop:total')}: &nbsp; <span className='price'>{this.props.selectedPackage.price ? formatMoney(this.props.selectedPackage.price) : translate('create-shop:free')}</span></span>
                  {/* <span className='price'>{formatMoney(props.selectedPackage ? props.selectedPackage.price : 0)}</span> */}
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className='shadow-line-balance' />
          {/* <div className='title'><strong>{translate('create-shop:select-your-payment')}</strong></div> */}
          {/* {paymentMethods.map((item, key) => (
            key === 1 ? (
              <Row key={item.value} className='box-item'>
                <Col lg={2}>
                  <Checkbox
                    value={item.value}
                    checked={props.selectedPaymentMethod && props.selectedPaymentMethod.value === item.value}
                    onChange={(e) => props.paymentMethodChange({ paymentMethod: e.target.value })}
                  />
                </Col>
                <Col lg={20}>
                  <div>{item.label}</div>
                </Col>
                <Col className='credit-card' lg={2}>
                  <img className='image-card' src={item.imageUrl[0]}></img>
                  <img className='image-card' style={{ marginLeft: 5 }} src={item.imageUrl[1]}></img>
                </Col>
              </Row>
            ) : (
                <Row key={item.value} className='box-item'>
                  <Col lg={2}>
                    <Checkbox
                      value={item.value}
                      checked={props.selectedPaymentMethod && props.selectedPaymentMethod.value === item.value}
                      onChange={(e) => props.paymentMethodChange({ paymentMethod: e.target.value })}
                    />
                  </Col>
                  <Col lg={20}>
                    <div>{item.label}</div>
                  </Col>
                  <Col className='credit-card' lg={2}>
                    <img className='image-card' src={item.imageUrl[0]}></img>
                  </Col>
                </Row>
              )
          ))} */}
          <div className='align-text'><em>{translate('create-shop:by-using-the-store-service')},</em></div>
          <div className='align-text'><em>{translate('create-shop:you-agree-with')} <a style={{ color: '#2F8AFF' }}>{translate('create-shop:term-of-use')}</a> {translate('create-shop:of-timmay-vn')}</em></div>
          {!isMobile
            ? <Button className='button-paid' onClick={handlePurchaseClick} loading={this.props.isCreating}>
              {translate('create-shop:create-shop').toUpperCase()}
              {/* THANH TOÁN NGAY - Miễn phí */}
              {/* {formatMoney(props.selectedPackage ? props.selectedPackage.price : 0)} */}
            </Button>
            : <div></div>}
        </Row>
        {isMobile ?
          <Button className='button-paid-mobile' onClick={handlePurchaseClick} loading={this.props.isCreating}>
            {translate('create-shop:create-shop').toUpperCase()}
          </Button> : <div></div>}
      </div>
    );
  }
}

export default withNamespaces('create-shop')(CreateShopStep4);
