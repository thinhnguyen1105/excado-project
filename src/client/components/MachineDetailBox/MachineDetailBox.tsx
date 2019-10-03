import React, { Component, Fragment } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import './MachineDetailBox.less';
import MachineItem from '@client/components/MachineItem/MachineItem';
import { getImageUrl } from '@client/core';
import { ElasticSearchItemResult } from '@client/services/service-proxies';
import { ProfileState } from '@client/store';

interface Props {
  data: ElasticSearchItemResult[];
  xs: number;
  sm: number;
  md: number;
  lg: number;
  profileState: ProfileState;
  title: string;
  disabledButtonLeft: boolean;
  disabledButtonRight: boolean;
  hiddenButton: boolean;
  changeFollowStatus: (starStatus: string, id: string) => void;
  buttonLeft: () => void;
  totalFollow?: number;
  isShowTotalFollowAndView?: boolean;
  buttonRight: () => void;
}
interface State { }
class MachineDetailBox extends Component<Props, State> {
  render() {
    const renderMachineDetailList = this.props.data.filter((ite) => Boolean(ite)).map((item: any, index: any) => {
      return (
        <MachineItem
          id={item._id}
          key={index}
          lg={this.props.lg}
          md={this.props.md}
          sm={this.props.sm}
          xs={this.props.xs}
          linkRedirect={item._id ? `/bai-dang/${item._id}` : '#'}
          imageUrl={item.imageUrls ? item.imageUrls.length > 0 ? getImageUrl(item.imageUrls[0], 'small') : item.categoryId.imageUrl : ''}
          title={item.title ? item.title : ''}
          price={item.price ? item.price : 0}
          newsState={item.state}
          location={item.location ? item.location.name : ''}
          ownerName={item.shop ? item.shop.name : item.owner && item.owner.fullName ? item.owner.fullName : item.owner && item.owner.email
            ? item.owner.email : item.owner && item.owner.phoneNo ? item.owner.phoneNo : ''}
          starStatus={item.isFollowing ? 'filled' : 'outlined'}
          changeFollowStatus={this.props.changeFollowStatus}
          totalFollow={item.counterFollow && item.counterFollow !== 0 ? item.counterFollow : undefined}
          totalView={item.counterView && item.counterView !== 0 ? item.counterView : undefined}
          isShowTotalFollowAndView={this.props.isShowTotalFollowAndView}
          ownerId={item.owner ? item.owner._id : ''}
          currentUserId={this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.id ? this.props.profileState.authUser.id : ''}
        />
      );
    });

    return (
      <Fragment>
        <h3 className='title'>{this.props.title}</h3>
        <Row gutter={12} type='flex' className='grid-view'>
          <Col className='button-pagging' lg={1} md={1} sm={1} xs={1}>
            {!this.props.hiddenButton
              ? <Button
                disabled={this.props.disabledButtonLeft}
                onClick={this.props.buttonLeft}
                className='button-left'
              >
                <Icon type='arrow-left' />
              </Button>
              : <div></div>}
          </Col>
          <Col lg={22} md={22} sm={22} xs={22} style={{display: 'flex', flexWrap: 'wrap'}}>
            {renderMachineDetailList}
          </Col>
          <Col className='button-pagging-right' lg={1} md={1} sm={1} xs={1}>
            {!this.props.hiddenButton
              ? <Button
                disabled={this.props.disabledButtonRight}
                onClick={this.props.buttonRight}
                className='button-right'
              >
                <Icon type='arrow-right' />
              </Button>
              : <div></div>
            }
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default MachineDetailBox;
