import React, { Component, Fragment } from 'react';
import { Row, Spin, Pagination } from 'antd';
import DetailMachineBoxHorizontal from './DetailMachineBoxHorizontal';
import './DetailSearchPage.less';
import { News } from '../../../../../services/service-proxies';
import { ProfileState } from '@client/store';
import { getImageUrl } from '@client/core';
import { withNamespaces } from '@client/i18n';
import MachineItem from '@client/components/MachineItem/MachineItem';

interface Props {
  loading: {
    handleSortChange: boolean;
    handleFiltersChange: boolean;
    getNextPage: boolean;
    getPrevPage: boolean;
  };
  data: News[];
  total: number;
  pageNumber: number;
  pageSize: number;
  profileState: ProfileState;
  getData: (payload: {pageNumber: number; pageSize: number}) => void;
  changeFollowStatus: (starStatus: string, id: string) => void;
  t: (key: string) => string;
  isMobile: boolean;
}
interface State {
  isMobile: boolean;
}
class DetailSearchPage extends Component<Props, State> {
  state = {
    isMobile: false,
  };

  render() {
    const isMobile = this.props.isMobile;
    return (
      <Fragment>
        <Spin spinning={this.props.loading.handleFiltersChange || this.props.loading.getNextPage || this.props.loading.getPrevPage || this.props.loading.handleSortChange}>
        <Row className='outline-detail-search-page'>
          {this.props.data.map((item, index) => (
            isMobile
              ? <MachineItem
                id={item._id}
                key={index}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                linkRedirect={`/bai-dang/${item._id}`}
                imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
                title={item.title ? item.title : ''}
                price={item.price ? item.price : 0}
                newsState={item.state}
                location={item.location ? item.location.name : ''}
                ownerName={item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email
                  ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : ''}
                starStatus={item.isFollowing ? 'filled' : 'outlined'}
                changeFollowStatus={this.props.changeFollowStatus}
                ownerId={item.owner ? item.owner._id : ''}
                currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
              />
              :
              <DetailMachineBoxHorizontal
                id={item._id}
                key={index}
                imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
                title={item.title}
                price={item.price}
                linkRedirect={`/bai-dang/${item._id}`}
                location={item.location ? item.location.name : ''}
                newsState={item.state}
                typeOfMachine={item.categoryId ? (item.categoryId as any).name : ''}
                brand={item.brand ? item.brand.name : ''}
                owner={item.owner}
                starStatus={item.isFollowing ? 'filled' : 'outlined'}
                changeFollowStatus={this.props.changeFollowStatus}
                ownerId={item.owner ? item.owner._id : ''}
                currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
              />
          ))}
          </Row>

          <Row className='next-and-back-button' style={{textAlign: 'right'}}>
            <Pagination
              pageSizeOptions={['16', '32', '64']}
              showSizeChanger={false}
              onShowSizeChange={(pageNumber, pageSize) => this.props.getData({pageNumber, pageSize})}
              onChange={(pageNumber, pageSize) => this.props.getData({pageNumber, pageSize} as any)}
              current={this.props.pageNumber}
              pageSize={this.props.pageSize}
              total={this.props.total}
            />
          </Row>
        </Spin>
      </Fragment>
    );
  }
}

export default withNamespaces('common')(DetailSearchPage);
