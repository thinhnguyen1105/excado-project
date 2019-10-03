import * as React from 'react';
import './CityList.less';
import { Row, Col } from 'antd';
import { Province } from '@client/services/service-proxies';
import { withNamespaces } from '@client/i18n';

interface Props {
  provinces: Province[];
  seeMoreClicked: boolean;
  onSeeMoreButtonClick: () => void;
  t: (key: string) => string;
}
const CityList = React.memo<Props>((props: Props) => {
  const translate = props.t;
  const renderCityList = props.provinces.map((value: any, index: number) => {
    if (!props.seeMoreClicked) {
      if (index < 15) {
        return (
          <Col lg={6} md={8} sm={12} xs={12} key={index}>
            <a href={`/tim-kiem?location=${value.slug}`} target='_blank' title={value.name}>
              <span className='city-item'>{value.name} ({value.totalNews > 9999 ? '9999+' : value.totalNews})</span>
            </a>
          </Col>
        );
      } else if (index === 15) {
        return (
          <Col lg={6} md={8} sm={12} xs={12} key={index}>
            <span className='see-more-button' onClick={props.onSeeMoreButtonClick}>{translate('common:showMore')}</span>
          </Col>
        );
      } else {
        return null;
      }
    } else {
      return (
        <Col lg={6} md={8} sm={12} xs={12} key={index}>
          <a href={`/tim-kiem?location=${value.slug}`} target='_blank' title={value.name}>
            <span className='city-item'>{value.name} ({value.totalNews})</span>
          </a>
        </Col>
      );
    }
  });

  return (
    <div className='city-list'>
      <h3>{translate('common:provinces')}</h3>
      <Row>
        {renderCityList}
      </Row>
    </div>
  );
});

export default withNamespaces('common')(CityList);
