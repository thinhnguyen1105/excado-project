
import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import './NavLocationAndFilterMobile.less';
import { withNamespaces } from '@client/i18n';

interface Props {
  selectedProvinceInfo: any;
  openModalSelectLocation: () => void;
  openModalFilter: () => void;
  updateSearchUrl?: (payload: { [key: string]: string | number }) => void;
  t: (key: string) => string;
}
interface State {
  isOpenSelecLocationModal: boolean;
}

class BaseNavLocationAndFilterMobile extends Component<Props, State> {
  state: State = {
    isOpenSelecLocationModal: false,
  };
  render() {
    return (
      <Row className='outline-location-and-filter'>
        <Col lg={12} md={12} sm={12} xs={12} className='location'>
          <a onClick={this.props.openModalSelectLocation} style={{color: '#000'}} className='text'>{this.props.selectedProvinceInfo && this.props.selectedProvinceInfo.name
            ? this.props.selectedProvinceInfo.name
            : this.props.t('common:nationwide')} <Icon type='caret-down' /></a>
        </Col>
        <Col className='filter' lg={12} md={12} sm={12} xs={12} style={{textAlign: 'right'}}>
          <a style={{color: '#000'}} onClick={this.props.openModalFilter} className='text'><Icon type='filter' /> {this.props.t(`common:filters`)}</a>
        </Col>
      </Row>
    );
  }
}

export const NavLocationAndFilterMobile = withNamespaces('common')(BaseNavLocationAndFilterMobile);
