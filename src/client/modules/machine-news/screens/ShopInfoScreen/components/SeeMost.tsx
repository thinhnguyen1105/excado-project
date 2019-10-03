import React, { Component } from 'react';
import { Row } from 'antd';
import './SeeMost.less';
import DetailMachineBoxHorizontal from './DetailMachineBoxHorizontal';
import { getImageUrl } from '@client/core';
import { withNamespaces } from '@client/i18n';

interface Props {
  dataMachine: any[];
  title: string;
  t: (key: string) => string;
}
interface State { }
class SeeMost extends Component<Props, State> {
  render() {
    return (
      <Row className='out-line-see-most'>
        <Row className='title'>
          <strong>{this.props.title}</strong>
        </Row>
        <Row className='body'>
          {
            this.props.dataMachine.length === 0
              ? <div>{this.props.t('common:no-data')}</div>
              : <div>
                {this.props.dataMachine.map((item, index) =>
                  <DetailMachineBoxHorizontal
                    id={item._id}
                    key={index}
                    imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
                    title={item.title}
                    price={item.price}
                    linkRedirect={item._id ? `/bai-dang-cua-hang/${item._id}` : ''}
                    location={item.location ? item.location.name : ''}
                    newsState={item.state}
                    typeOfMachine={item.categoryId ? (item.categoryId as any).name : ''}
                    brand={item.brand ? item.brand.name : ''}
                    owner={item.owner ? item.owner.name : ''}
                    isShowTotalFollowAndView={true}
                    counterFollow={item.counterFollow}
                    counterView={item.counterView}
                  />)}
              </div>
          }
        </Row>
      </Row>
    );
  }
}

export default withNamespaces(['common'])(SeeMost);
