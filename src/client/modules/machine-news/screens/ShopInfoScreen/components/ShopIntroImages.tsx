import React from 'react';
import { Row, Col } from 'antd';
import './ShopIntroImages.less';
import { isMobile } from 'react-device-detect';

interface Props {
  title: string;
  introImages: string[];
  t: (key: string) => string;
}
const ShopIntroImages = React.memo<Props>((props: Props) => {
  return (
    <Row className='outline-public-image-store'>
      <Row className='title'>
        <strong>{props.title}</strong>
      </Row>
      {props.introImages && props.introImages.length > 0 ? (
        <Row gutter={!isMobile ? 10 : 0} className='image'>
          <Col lg={12} md={12} xs={24} sm={24}>
            <a
              className='grid-post-image'
            >
              <img
                src={props.introImages[0]}
                alt={props.title}
              />
            </a>
          </Col>
          <Col lg={12} md={12} xs={24} sm={24}>
            <Row gutter={!isMobile ? 10 : 0}>
              {props.introImages.slice(1).map((item, index) =>
                <Col lg={8} md={8} xs={12} sm={24} key={index}>
                  <a
                    className='grid-post-image-small'
                  >
                    <img
                      src={item}
                      alt={props.title}
                    />
                  </a>
                </Col>,
              )}
            </Row>
          </Col>
        </Row>
      ) : (
          <Row className='image'>
            <Col xs={24}>
              {props.t('shop-info:no-features-image')}
          </Col>
          </Row>
        )}
    </Row>
  );
});

export default ShopIntroImages;
