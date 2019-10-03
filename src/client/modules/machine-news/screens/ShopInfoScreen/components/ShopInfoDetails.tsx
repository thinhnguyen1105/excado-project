import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import './ShopInfoDetails.less';
import InfomationStore from './InformationStore';
import ShopIntroImages from './ShopIntroImages';
import DetailsProduct from './DetailsProduct';
import Map from './Map';
import SeeMost from './SeeMost';
import { Shop, News } from '@client/services/service-proxies';
import { getShopUrl } from '@client/core';
import { ProfileState } from '@client/store';
import { isMobile } from 'react-device-detect';

interface Props {
  newsData: News[];
  shopInfo: Shop;
  resultSearchNewestPost: any;
  starStatus: any;
  profileState: ProfileState;
  changeFollowStatus: (starStatus: string, id: string) => void;
  changeFollowItemStatus: (statStatus: string, id: string) => void;
  t: (key: string) => string;
}
const ShopInfoDetails = React.memo<Props>((props: Props) => {
  const translate = props.t;
  return (
    <Row className='outline-body' gutter={!isMobile ? 16 : 0}>
      <Col lg={16} md={24} xs={24} sm={24} >
        <InfomationStore
          title={props.shopInfo.name}
          address={props.shopInfo.address}
          email={props.shopInfo.email}
          website={getShopUrl(props.shopInfo.domain)}
          describe={props.shopInfo .description}
          phoneNumber={props.shopInfo.phone}
          t={props.t}
        />
        <ShopIntroImages
          title={translate('shop-info:feature-images')}
          introImages={props.shopInfo.introImages}
          t={props.t}
        />
        <DetailsProduct
          t={props.t}
          data={props.newsData}
          profileState={props.profileState}
          changeFollowStatus={props.changeFollowItemStatus}
        />
      </Col>

      <Col lg={8} md={24} xs={24} sm={24} >
        {props.profileState && props.profileState.authUser && props.profileState.authUser.id !== props.shopInfo.owner
          ? <Row gutter={!isMobile ? 10 : 0} style={{ marginBottom: '12px', marginLeft: '0px', marginRight: '0px' }}>
            <Col lg={12} md={12} xs={12} sm={12} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
              <Button className='button-follow'
                onClick={() => props.changeFollowStatus(props.starStatus, props.shopInfo._id)} >
                <Icon type='star' theme={props.starStatus} />
                {props.starStatus === 'filled' ? translate('shop-info:unfollow') : translate('shop-info:follow')}
              </Button>
            </Col>
            <Col lg={12} md={12} xs={12} sm={12} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
              <Button className='send-message-button' type='primary' icon='message' >{translate('shop-info:mess')}</Button>
            </Col>
          </Row> : null}
        <Map location={props.shopInfo.address} geocode={props.shopInfo.geocode} />
        <SeeMost
          title={translate('shop-info:most-viewed')}
          dataMachine={props.resultSearchNewestPost.data}
        />
      </Col>
    </Row>
  );
});

export default ShopInfoDetails;
