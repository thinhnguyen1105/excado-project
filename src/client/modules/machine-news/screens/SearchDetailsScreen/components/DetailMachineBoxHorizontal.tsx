import React, { Component, Fragment } from 'react';
import { Row, Col, Icon } from 'antd';
import { formatMoney, getImageUrl, newsStates } from '@client/core';
import './DetailMachineBoxHorizontal.less';
import { isMobile } from 'react-device-detect';
import { withNamespaces } from '@client/i18n';
interface Props {
  id: string;
  imageUrl: string;
  linkRedirect: string;
  price: number;
  title: string;
  location: string;
  newsState: string;
  typeOfMachine: string;
  brand: string;
  owner: any;
  starStatus: any;
  currentUserId: string;
  ownerId: string;
  changeFollowStatus: (starStatus: string, id: string) => void;
  t: (key: string) => string;
}
interface State { }
class DetailMachineBoxHorizontal extends Component<Props, State> {
  render() {
    const translate = this.props.t;
    const newsState = newsStates.filter((item) => item.value === this.props.newsState)[0];
    return (
      <Fragment>
        <Row gutter={16} className='machine-box-horizontal'>
          <Col lg={8} md={6} xs={12} sm={12}>
            <a
              href={this.props.linkRedirect}
              title={this.props.title}
              className='grid-post-image'
            >
              <img
                src={getImageUrl(this.props.imageUrl, 'small')}
                alt={this.props.title}
              />
            </a>
          </Col>
          <Col className='col-info' lg={16} md={18} xs={12} sm={12}>
            <Row className='full-heigh' gutter={16}>
              <Col className='info-main' lg={20} md={18} xs={24} sm={24}>
                <div>
                  <a href={this.props.linkRedirect} className='grid-post-title' title={this.props.title}>
                    {this.props.title && isMobile ? this.props.title.length > 13 ? `${this.props.title}...` : this.props.title : this.props.title}
                  </a>
                  <div className='grid-post-price'>{this.props.price ? formatMoney(Number(this.props.price)) : ''}</div>
                </div>
                <div className='grid-post-news-info'>
                  {newsState && (
                    <div>{translate('common:status')} {translate(`common:${newsState.value.toLowerCase()}`)}</div>
                  )}
                  <div>{this.props.typeOfMachine} {this.props.brand ? ` | Hãng ${this.props.brand}` : ''}</div>
                  <div>
                    {translate('common:owner')} {this.props.owner.fullName || this.props.owner.email || this.props.owner.phoneNo}
                  </div>
                  <div>
                    {this.props.owner.phoneNo || this.props.owner.email ? `${translate('common:contact-with-colon')} ${this.props.owner.phoneNo || this.props.owner.email}` : ''}
                  </div>
                </div>
              </Col >
              <Col className='location-and-following' lg={4} md={6} xs={24} sm={24}>
                <div className='location'>{this.props.location}</div>
                {this.props.currentUserId !== this.props.ownerId
                  ? <a><Icon className='star-following' theme={this.props.starStatus} type='star'
                    onClick={() => this.props.changeFollowStatus(this.props.starStatus, this.props.id)}></Icon></a>
                  : null}
              </Col>
            </Row>
          </Col>

        </Row>
        <hr className='end-line' />
      </Fragment>
    );
  }
}

export default withNamespaces('common')(DetailMachineBoxHorizontal);
