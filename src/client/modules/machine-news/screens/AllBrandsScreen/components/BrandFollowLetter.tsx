import React, { Fragment } from 'react';
import { Row, Col, Icon } from 'antd';
import './BrandFollowLetter.less';
import { Brand } from '../../../../../services/service-proxies';

interface Props {
  arrayLetter: string[];
  listBrands: Brand[];
  loading: boolean;
}
const BrandFollowLetter = React.memo<Props>((props: Props) => {
  const classifyObject = () => {
    const result = {};
    props.listBrands.filter((item) => item.name).sort().map((brand) => {
      const letter = brand.name[0].toUpperCase();
      result[letter] ? result[letter] = [...result[letter], brand] : result[letter] = [brand];
    });
    return result;
  };

  const listBrandAlphabet = classifyObject();

  return (
    <Fragment>
      {Object.keys(listBrandAlphabet).map((item, index) =>
        <Row key={index}>
          <h1 className='row-brand'>{item}</h1>
          <Row gutter={10}>
            {listBrandAlphabet[item].map((brand: Brand) => (
              <Col key={brand._id} lg={6} md={12} sm={12} xs={24}>
                <a className='brand-link' title={brand.name} onClick={() => {
                  window.location.href = `/danh-sach-hang/${brand.slug}`;
                }}>
                  {brand.name.toUpperCase()} ({brand.totalNews})
                </a>
              </Col>
            ))}
          </Row>
        </Row>)}

        {props.loading && (
          <Row style={{textAlign: 'center', marginTop: '24px'}}>
            <Icon type='sync' spin style={{fontSize: '42px'}}/>
          </Row>
        )}
    </Fragment>
  );
});

export default BrandFollowLetter;
