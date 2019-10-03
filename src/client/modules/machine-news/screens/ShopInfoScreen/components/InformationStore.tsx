import React, { Component } from 'react';
import { Row } from 'antd';
import './InformationStore.less';
interface Props {
  title: string;
  address: string;
  describe: string;
  email: string;
  website: string;
  phoneNumber: string;
  t: (key: string) => string;
}
interface State { }

class InformationStore extends Component<Props, State> {
  render() {
    const translate = this.props.t;
    return (
      <Row className='outline-information-store' >
        <Row className='title'>
          <strong>{this.props.title}</strong>
        </Row>
        <Row className='details'>
          <div className='shop-info'><strong>{translate('shop-info:address')}: </strong>{this.props.address}</div>
          <div className='shop-info'><strong>{translate('shop-info:phone')}: </strong>{this.props.phoneNumber}</div>
          <div className='shop-info'><strong>Email: </strong>{this.props.email}</div>
          <div className='shop-info'><strong>Website: </strong>{this.props.website}</div>
          <div className='shop-info'>
            <div><strong>{translate('shop-info:info')}: </strong></div>
            <div style={{wordBreak: 'break-word', whiteSpace: 'pre-line', padding: '0px 20px'}}>{this.props.describe}</div>
          </div>
        </Row>
      </Row>
    );
  }
}

export default InformationStore;
