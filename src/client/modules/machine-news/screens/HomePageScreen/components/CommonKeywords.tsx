import React from 'react';
import { Row, Col } from 'antd';
import { CommonKeyword } from '@client/services/service-proxies';
import './CommonKeywords.less';

interface Props {
  commonKeywords: CommonKeyword[];
  t: (key: string) => string;
}
const CommonKeywords = React.memo<Props>((props: Props) => {
  return (
    <div className='common-keywords'>
      <h3>{props.t('common:common-keywords')}</h3>

      <Row>
        <ul>
          {props.commonKeywords.map((item, index) => (
            <Col lg={6} md={8} sm={12} xs={12} key={index}>
              <li>
                <a href={`/tim-kiem?keyword=${item.keyword}`} target='_blank' title={item.keyword}>
                  <span className='city-item'>{item.keyword}</span>
                </a>
              </li>
            </Col>
          ))}
        </ul>
      </Row>
    </div>
  );
});

export default CommonKeywords;
