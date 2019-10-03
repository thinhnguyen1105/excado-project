import React from 'react';
import './AdsensePositions.less';
import { Row, Col, Button, Skeleton } from 'antd';
import { Adsense } from '@app/machine-news';
import { withNamespaces } from '@client/i18n';

interface Props {
  adsenseInfo: Adsense;
  selectedAdsChange: (position: number) => void;
  t: (key: string) => string;
}
const AdsensePositions = React.memo<Props>((props: Props) => {
  const translate = props.t;

  const buttonType = (position: number) => {
    return props.adsenseInfo.position === position ? 'primary' : 'default';
  };

  return (
    <div>
      <h2 className='adsense-title'>
        {translate('admin-adsense:adsense-position')}
      </h2>
      <div className='adsense-positions'>
        <Row className='adsense-positions-header'>
          <Col xs={24}>
            <div className='text-center'>Timmay.vn</div>
          </Col>
        </Row>

        <Row type='flex' justify='space-between' className='adsense-positions-main'>
          <Col xs={5} className='left'>
            <Button onClick={() => props.selectedAdsChange(1)} type={buttonType(1)} block={true} className='position-1'>1</Button>
            <Button onClick={() => props.selectedAdsChange(2)} type={buttonType(2)} block={true} className='position-2'>2</Button>
            <Button onClick={() => props.selectedAdsChange(3)} type={buttonType(3)} block={true} className='position-3'>3</Button>
          </Col>
          <Col xs={14}>
            <Skeleton title={false} paragraph={{
              rows: 16,
              width: ['100%'],
            }} />
          </Col>
          <Col xs={5} className='right'>
            <Button onClick={() => props.selectedAdsChange(4)} type={buttonType(4)} block={true} className='position-4'>4</Button>
            <Button onClick={() => props.selectedAdsChange(5)} type={buttonType(5)} block={true} className='position-5'>5</Button>
            <Button onClick={() => props.selectedAdsChange(6)} type={buttonType(6)} block={true} className='position-6'>6</Button>
            <Button onClick={() => props.selectedAdsChange(7)} type={buttonType(7)} block={true} className='position-7'>7</Button>
            <Button onClick={() => props.selectedAdsChange(8)} type={buttonType(8)} block={true} className='position-8'>8</Button>
            <Button onClick={() => props.selectedAdsChange(9)} type={buttonType(9)} block={true} className='position-9'>9</Button>
            <Button onClick={() => props.selectedAdsChange(10)} type={buttonType(10)} block={true} className='position-10'>10</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
});

export default withNamespaces('admin-adsense')(AdsensePositions);
