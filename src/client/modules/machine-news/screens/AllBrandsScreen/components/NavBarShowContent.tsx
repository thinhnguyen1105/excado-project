import React, { Component } from 'react';
import './NavBarShowContent.less';
import { Breadcrumb, Row } from 'antd';

interface Props {
  items: {label: string; value?: string}[];
}
interface State {}
class NavBarShowContent extends Component<Props, State> {
  render() {
    return (
      <Row className='breadcrum'>
        <Breadcrumb>
          {this.props.items.map((item, index: number) => item.value ? (
            <Breadcrumb.Item key={index}>
              <a href={item.value} title={item.label}>{item.label}</a>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key={index}>
              {item.label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Row>
    );
  }
}

export default NavBarShowContent;
