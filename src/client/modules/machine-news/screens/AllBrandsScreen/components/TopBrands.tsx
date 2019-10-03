import React from 'react';
import { Row, Col } from 'antd';
import { Brand } from '@client/services/service-proxies';
import './TopBrands.less';
import { withNamespaces } from '@client/i18n';

interface Props {
  brands: Brand[];
  t: (key: string) => string;
}
const TopBrands = React.memo<Props>((props: Props) => {
  return (
    <div className='top-brands'>
      <h1 className='row-brand'>{props.t('common:top-brands')}</h1>

      <Row gutter={10}>
        {props.brands.slice(0, 16).sort((a, b) => b.totalNews - a.totalNews).map((brand: Brand) => (
          <Col key={brand._id} lg={6} md={12} sm={12} xs={24}>
            <a className='brand-link' title={brand.name} onClick={() => {
              window.location.href = `/danh-sach-hang/${brand.slug}`;
            }}>
              {brand.name.toUpperCase()} ({brand.totalNews})
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
});

export default withNamespaces('common')(TopBrands);
