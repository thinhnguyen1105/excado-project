import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import { formatMoney, newsStates } from '@client/core';
import './DetailMachineBoxHorizontal.less';
import { withNamespaces } from '@client/i18n';
interface Props {
  imageUrl: string;
  linkRedirect: string;
  price: number;
  title: string;
  location: string;
  isFollowing: boolean;
  statusMachine: string;
  typeOfMachine: string;
  isShowTotalFollowAndView?: boolean;
  counterFollow?: number;
  counterView?: number;
  brand: string;
  owner: {
    username: string;
    phoneNumber: string;
  };
  t: (key: string) => string;
}
interface State { }

class DetailMachineBoxHorizontal extends Component<Props, State> {
  render() {
    const translate = this.props.t;
    const newsState = newsStates.filter((item) => item.value === this.props.statusMachine)[0];

    return (
      <Fragment>
        <a
          style={{ color: 'black' }}
          href={this.props.linkRedirect}
          title={this.props.title}>
          <Row gutter={16}>
            <Col lg={8} md={6} xs={12} sm={12}>
              <a
                className='grid-post-image'
              >
                <img
                  src={this.props.imageUrl}
                  alt={this.props.title}
                />
              </a>
            </Col>
            <Col className='col-info' lg={16} md={18} xs={12} sm={12}>
              <Row className='info-main'>
                <div>
                  <a
                    href={this.props.linkRedirect}
                    className='grid-post-title'
                    title={this.props.title}
                  >
                    {this.props.title}
                  </a>
                  <div className='grid-post-price'>{this.props.price ? formatMoney(Number(this.props.price)) : ''}</div>
                </div>
                <div>
                  {newsState && (
                    <div>{translate(`common:${newsState.value.toLowerCase()}`)}</div>
                  )}
                  <div>{this.props.typeOfMachine} {translate('common:brand-name')} {this.props.brand}</div>
                  <div>{this.props.location}</div>
                  {this.props.isShowTotalFollowAndView ?
                    <div>
                      {this.props.counterView ? <div>{translate('common:counter-view-text')}: {this.props.counterView}</div> : null}
                      {this.props.counterFollow ? <div> {translate('common:counter-follow-text')}: {this.props.counterFollow}</div> : null}
                    </div> : null}
                </div>
              </Row>
            </Col >
          </Row>
        </a>
        <hr className='end-line' />
      </Fragment>
    );
  }
}

export default  withNamespaces('common')(DetailMachineBoxHorizontal);
