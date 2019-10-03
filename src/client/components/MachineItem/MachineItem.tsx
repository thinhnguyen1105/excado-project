import * as React from 'react';
import { formatMoney, newsStates } from '@client/core';
import { Row, Col, Icon } from 'antd';
import { withNamespaces } from '@client/i18n';
import './MachineItem.less';

interface Props {
  id: string;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  starStatus: 'filled' | 'outlined';
  linkRedirect: string;
  title: string;
  imageUrl: string;
  price?: number;
  newsState: string;
  ownerName: string;
  location: string;
  totalFollow?: number;
  totalView?: number;
  currentUserId: string;
  ownerId: string;
  isShowTotalFollowAndView?: boolean;
  changeFollowStatus: (starStatus: string, itemId: string) => void;
  t: (key: string) => string;
}
interface State { }
class MachineItem extends React.PureComponent<Props, State> {
  render() {
    const newsState = newsStates.filter((item) => item.value === this.props.newsState)[0];
    return (
      <Col className='grid-post' lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs} >
        <div className='container'>
          <div style={{ marginBottom: 10 }}>
            {this.props.currentUserId !== this.props.ownerId
              ? <a className='star-following' title={`Follow ${this.props.title}`}>
                <Icon type='star' theme={this.props.starStatus} onClick={() => this.props.changeFollowStatus(this.props.starStatus, this.props.id)} />
              </a> : null}
            <a href={this.props.linkRedirect} title={this.props.title} className='grid-post-image'>
              <img alt={this.props.title} className='item-image' src={this.props.imageUrl} />
            </a>
          </div>

          <div>
            <Row>
              <a href={this.props.linkRedirect} title={this.props.title} className='grid-post-title'>
                {this.props.title}
              </a>
            </Row>
            <Row>
              <div className='grid-post-price'>{this.props.price ? formatMoney(Number(this.props.price)) : `${this.props.t('common:contact')}`}</div>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={24} xs={24}>
                {newsState && newsState.value ? (
                  <div className='grid-post-status'><em>{this.props.t(`common:${newsState ? newsState.value.toLowerCase() : this.props.newsState ? this.props.newsState.toLowerCase() : ''}`)}</em></div>
                ) : null}
              </Col>
              <Col lg={12} md={12} sm={0} xs={0}>
                <div className='grid-post-owner-name'>
                  {this.props.ownerName}
                </div>
              </Col>
            </Row>
            <Row>
              <div className='grid-post-location'>
                {this.props.location}
              </div>
            </Row>
            {this.props.isShowTotalFollowAndView ?
              <div>
                {this.props.totalFollow ?
                  <Row>
                    <div className='grid-post-location'>
                      {this.props.t('common:total-followers')} : {this.props.totalFollow}
                    </div>
                  </Row> : null}
                {this.props.totalView ?
                  <Row>
                    <div className='grid-post-location'>
                      {this.props.t('common:total-views')} : {this.props.totalView}
                    </div>
                  </Row> : null}
              </div> : null}
          </div>
        </div>
      </Col>
    );
  }
}

export default withNamespaces('common')(MachineItem);
