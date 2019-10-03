import * as React from 'react';
import { Row, Col } from 'antd';
import './MachineList.less';
import { Category } from '@client/services/service-proxies';
import { withNamespaces } from '@client/i18n';
import { isMobile } from 'react-device-detect';

interface Props {
  categories: Category[];
  onSeeMoreTotalMachineClick: () => void;
  seeMoreTotalMachineClicked: boolean;
  t: (key: string) => string;
}
const Fragment = React.Fragment;
const MachineList = React.memo<Props>((props: Props) => {
  const renderMachineList = props.categories.map((category, index) => {
    if (!props.seeMoreTotalMachineClicked) {
      if (isMobile) {
        if (index < 6) {
          return (
            <Col lg={4} md={8} sm={8} xs={8} className='machine-item' key={index} style={{ textAlign: 'center' }}>
              <a onClick={() => {
                window.location.href = `/chung-loai-may/${category.slug}`;
              }} title={category.name}>
                <img src={category.imageUrl} width='80%' />
                <br />
                <span className='name-machine' >{category.name} ({category.totalNews})</span>
              </a>
            </Col>
          );
        } else {
          return null;
        }

      } else {
        if (index < 12) {
          return (
            <Col lg={4} md={8} sm={8} xs={8} className='machine-item' key={index} style={{ textAlign: 'center' }}>
              <a onClick={() => {
                window.location.href = `/chung-loai-may/${category.slug}`;
              }} title={category.name}>
                <img src={category.imageUrl} width='80%' />
                <br />
                <span className='name-machine' >{category.name} ({category.totalNews})</span>
              </a>
            </Col>
          );
        } else {
          return null;
        }
      }

    } else {
      return (
        <Col lg={4} md={8} sm={8} xs={8} className='machine-item' key={index} style={{ textAlign: 'center' }}>
          <a onClick={() => {
            window.location.href = `/chung-loai-may/${category.slug}`;
          }} title={category.name}>
            <img src={category.imageUrl} width='80%' />
            <br />
            <span className='name-machine' >{category.name} ({category.totalNews})</span>
          </a>
        </Col>
      );
    }

  });

  return (
    <Fragment>
      <Row className='machine-list-title'>
        <h3>{props.t('common:list-of-total-machine')}</h3>
        <a onClick={props.onSeeMoreTotalMachineClick}>{props.seeMoreTotalMachineClicked ? props.t('common:showLess') : props.t('common:showMore')}</a>
      </Row>
      <Row gutter={12} type='flex' className='machine-list'>
        <Col className='button-pagging' lg={1} md={1} sm={0} xs={0}>
        </Col>
        <Col lg={22} md={22} sm={24} xs={24} style={{display: 'flex', flexWrap: 'wrap'}}>
          {renderMachineList}
        </Col>
        <Col className='button-pagging-right' lg={1} md={1} sm={0} xs={0}>
        </Col>
      </Row>
    </Fragment>
  );
});

export default withNamespaces('common')(MachineList);
