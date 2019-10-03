import React from 'react';
import { Row, Col, Checkbox } from 'antd';
import './ExtendShopStep1.less';
import { formatMoney } from '@client/core';
import { isMobile } from 'react-device-detect';
import { ShopPackage } from '@client/services/service-proxies';

interface Props {
  shopPackages: ShopPackage[];
  selectedPackage?: ShopPackage;
  selectPackageChange: (payload: ShopPackage) => void;
  t: (key: string) => string;
}
const ExtendShopStep1 = React.memo<Props>((props: Props) => {
  const translate = props.t;

  return (
    <div className='extend-1'>
      {!isMobile ? (
        <div>
          {props.shopPackages.sort((a, b) => a.monthDuration - b.monthDuration).map((item) => (
            <a onClick={() => props.selectPackageChange(item)} style={{color: '#000'}}>
              <Row
                key={item._id}
                style={{ height: 100, display: 'flex', alignItems: 'center', margin: '0px 60px 20px 60px', padding: 20, border: '1px solid' }}
                className='align-items' gutter={20}
              >
                <Col style={{ display: 'flex', justifyContent: 'center' }} className='check-box' lg={4} md={4} xs={24} sm={24}>
                  <Checkbox
                    checked={props.selectedPackage ? item._id === props.selectedPackage._id : false}
                    value={item._id}
                    onChange={() => props.selectPackageChange(item)}
                  />
                </Col>
                <Col lg={20} md={20} xs={24} sm={24}>
                  <div><strong>{item.monthDuration} {props.t(item.monthDuration === 1 ? `create-shop:month` : `create-shop:months`)}</strong> {props.t(`create-shop:usage`)}</div>
                  <div><em style={{ color: 'red', fontWeight: 'bold' }}>{item.price ? formatMoney(item.price) : translate('create-shop:free')}</em></div>
                </Col>
              </Row>
            </a>
          ))}
        </div>
      ) : (
        <div>
          {props.shopPackages.sort((a, b) => a.monthDuration - b.monthDuration).map((item) => (
            <a onClick={() => props.selectPackageChange(item)}  style={{color: '#000'}}>
              <Row
                key={item._id}
                style={{ height: 100, display: 'flex', alignItems: 'center', marginBottom: 20, padding: 20, border: '1px solid black' }}
                className='align-items' gutter={20}
              >
                <Col style={{ display: 'flex', justifyContent: 'center' }} className='check-box' lg={4} md={4} xs={4} sm={4}>
                  <Checkbox
                    checked={props.selectedPackage ? item._id === props.selectedPackage._id : false}
                    value={item._id}
                    onChange={() => props.selectPackageChange(item)}
                  />
                </Col>
                <Col lg={20} md={20} xs={20} sm={20}>
                  <div><strong>{item.monthDuration} {props.t(item.monthDuration === 1 ? `create-shop:month` : `create-shop:months`)}</strong> {props.t(`create-shop:usage`)}</div>
                  <div><em style={{ color: 'red', fontWeight: 'bold' }}>{item.price ? formatMoney(item.price) : translate('create-shop:free')}</em></div>
                </Col>
              </Row>
            </a>
          ))}
        </div>
      )}
    </div>
  );
});

export default ExtendShopStep1;
