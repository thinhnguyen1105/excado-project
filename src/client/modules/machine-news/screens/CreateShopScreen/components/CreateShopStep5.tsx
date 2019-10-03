import React from 'react';
import { Icon, Row, Col, Button } from 'antd';
import './CreateShopStep5.less';
import { isMobile } from 'react-device-detect';

interface Props {
  t: (key: string) => string;
 }
const CreateShopStep5 = React.memo<Props>((props: Props) => {
  const translate = props.t;
  return (
    <div>
      <div className='step-5'>
        <Row type='flex' justify='center'>
          <Col xs={12}>
            {!isMobile ? <h1>{translate('create-shop:congratulation')}!</h1> : <h3>{translate('create-shop:congratulation')}!</h3>}
            <div className='icon-container'>
              <Icon type='check-circle' theme='filled' className='success-icon' />
            </div>
            {!isMobile ? <h2>{translate('create-shop:create-success')}!</h2> : <h3>{translate('create-shop:create-success')}!</h3>}
            <p>{translate('create-shop:create-success-description')}!</p>
          </Col>
        </Row>
      </div>
      {isMobile
        ? <a href='/'><Button className='button-back-to-home'>{translate('create-shop:back-to-home-page')}</Button></a>
        : <div></div>}
    </div>
  );
});

export default CreateShopStep5;
