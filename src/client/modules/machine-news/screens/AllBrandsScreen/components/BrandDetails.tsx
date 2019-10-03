import React from 'react';
import { Row } from 'antd';
import './BrandDetails.less';
import BrandFollowLetter from './BrandFollowLetter';
import { Brand } from '../../../../../services/service-proxies';
import TopBrands from './TopBrands';

interface Props {
  brands: Brand[];
  topBrands: Brand[];
  loading: boolean;
}
const BrandDetails = React.memo<Props>((props: Props) => {
  const arrayLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return (
    <Row className='outline'>
      <TopBrands brands={props.topBrands} />

      <BrandFollowLetter
        arrayLetter={arrayLetter}
        listBrands={props.brands}
        loading={props.loading}
      />
    </Row>
  );
});

export default BrandDetails;
