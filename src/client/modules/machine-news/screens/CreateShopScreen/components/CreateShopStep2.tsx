import React from 'react';
import { Row, Col, Modal, Checkbox, message } from 'antd';
import './CreateShopStep2.less';
import { formatMoney, storePackages } from '@client/core';
import { isMobile } from 'react-device-detect';

interface Props {
  currentStep: number;
  selectedPackage?: { label: string; value: number; price: number };
  nextStep: () => void;
  backStep: () => void;
  selectPackageChange: (payload: { package: number }) => void;
  t: (key: string) => string;
}
const CreateShopStep2 = React.memo<Props>((props: Props) => {
  const translate = props.t;
  const handleOk = () => {
    if (props.selectedPackage && props.selectedPackage.value) {
      props.nextStep();
    } else {
      message.error(translate('create-shop:please-select-your-shop-package-to-continue'));
    }
  };

  return (
    <div className='step-2'>
      <Modal
        width={678}
        className='select-category'
        title={translate('create-shop:select-your-package')}
        visible={props.currentStep === 2}
        okText={translate('create-shop:next')}
        onOk={handleOk}
        onCancel={props.backStep}
      >
        <div>
          {!isMobile ? (
            <div>
              {storePackages.slice(0, 1).map((item) => (
                <a onClick={() => props.selectPackageChange({ package: item.value })} style={{color: '#000'}}>
                  <Row
                    key={item.value}
                    style={{ height: 100, display: 'flex', alignItems: 'center', margin: '0px 60px 20px 60px', padding: 20, border: '1px solid' }}
                    className='align-items' gutter={20}
                  >
                    <Col style={{ display: 'flex', justifyContent: 'center' }} className='check-box' lg={4} md={4} xs={24} sm={24}>
                      <Checkbox
                        checked={props.selectedPackage ? item.value === props.selectedPackage.value : false}
                        value={item.value}
                        onChange={(e) => props.selectPackageChange({ package: e.target.value })}
                      />
                    </Col>
                    <Col lg={20} md={20} xs={24} sm={24}>
                      <div><strong>{item.label} {props.t(item.label === `1` ? `create-shop:month` : `create-shop:months`)}</strong> {props.t(`create-shop:usage`)}</div>
                      <div><em style={{ color: 'red', fontWeight: 'bold' }}>{item.price ? formatMoney(item.price) : translate('create-shop:free')}</em></div>
                    </Col>
                  </Row>
                </a>
              ))}
            </div>
          ) : (
            <div>
              {storePackages.slice(0, 1).map((item) => (
                <a onClick={() => props.selectPackageChange({ package: item.value })}  style={{color: '#000'}}>
                  <Row
                    key={item.value}
                    style={{ height: 100, display: 'flex', alignItems: 'center', marginBottom: 20, padding: 20, border: '1px solid black' }}
                    className='align-items' gutter={20}
                  >
                    <Col style={{ display: 'flex', justifyContent: 'center' }} className='check-box' lg={4} md={4} xs={4} sm={4}>
                      <Checkbox
                        checked={props.selectedPackage ? item.value === props.selectedPackage.value : false}
                        value={item.value}
                        onChange={(e) => props.selectPackageChange({ package: e.target.value })}
                      />
                    </Col>
                    <Col lg={20} md={20} xs={20} sm={20}>
                      <div><strong>{item.label} {props.t(item.label === `1` ? `create-shop:month` : `create-shop:months`)}</strong> {props.t(`create-shop:usage`)}</div>
                      <div><em style={{ color: 'red', fontWeight: 'bold' }}>{item.price ? formatMoney(item.price) : translate('create-shop:free')}</em></div>
                    </Col>
                  </Row>
                </a>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
});

export default CreateShopStep2;
