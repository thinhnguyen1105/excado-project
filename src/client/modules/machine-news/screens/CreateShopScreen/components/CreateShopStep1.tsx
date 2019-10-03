import * as React from 'react';
import { Row, Col, Button } from 'antd';
import './CreateShopStep1.less';

interface Props {
  nextStep: () => void;
  t: (key: string) => string;
}
const CreateShopStep1 = React.memo<Props>((props: Props) => {
  const translate = props.t;
  return (
    <div className='step-1'>
      <Row className='intro'>
        <Col lg={1} />
        <Col lg={6} className='intro-item'>
          <img src={`/static/images/shop-icon-1.png`} width='90px' style={{ marginBottom: '15px' }} />
          <h3>{translate('create-shop:own')}<br />{translate('create-shop:your-domain')}</h3>
          <span>{translate('create-shop:own-your-domain-description')}</span>
        </Col>
        <Col lg={1} />
        <Col lg={1} />
        <Col lg={6} className='intro-item'>
          <img src={`/static/images/shop-icon-2.png`} width='90px' style={{ marginBottom: '15px' }} />
          <h3>{translate('create-shop:customer-care')}</h3>
          <span>{translate('create-shop:customer-care-description')}</span>
        </Col>
        <Col lg={1} />
        <Col lg={1} />
        <Col lg={6} className='intro-item'>
          <img src={`/static/images/shop-icon-3.png`} width='90px' style={{ marginBottom: '15px' }} />
          <h3>{translate('create-shop:details')}</h3>
          <br />
          <span>{translate('create-shop:details-description')}</span>
          <span className='icon-Youtube'></span>
        </Col>
        <Col lg={1} />
      </Row>

      <Row>
        <Button onClick={props.nextStep} type='primary' className='next-button' size='large'>{translate('create-shop:next')}</Button>
      </Row>
    </div>
  );
});

export default CreateShopStep1;
